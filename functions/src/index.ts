// TIPOS DE DATOS
import { UserRecord } from "firebase-functions/lib/providers/auth";

// IMPORTAR FUNCTIONS Y FIREBASE ADMIN
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// INICIALIZAR FIREBASE Y FIRESTORE
admin.initializeApp(functions.config().firebase);
const db: FirebaseFirestore.Firestore = admin.firestore();

// EMAILS
const nodemailer = require("nodemailer");

// CONFIGURAR SERVIDOR NEXT
const next = require("next");
const app = next({ dev: false, conf: { distDir: "build" } });
const handle = app.getRequestHandler();

const sendNotification = async (data: { title: string, message: string, url: string }) => {
  let tokens: string[] = [];
  const tokensFB: admin.firestore.QuerySnapshot = await admin.firestore().collection("tokens").get();
  tokensFB.forEach((doc: admin.firestore.QueryDocumentSnapshot) => tokens.push(doc.data().token))

  const messageS: admin.messaging.MulticastMessage = {
    data,
    tokens: tokens,
    webpush: {
      fcmOptions: {
        link: "https://ibox.gt/tienda"
      }
    }
  }
  // ENVIAR A LOS DISPOSITIVOS
  return admin.messaging().sendMulticast(messageS);
}

// ENVIAR NOTIFICACION NORMAL
exports.sendPush = functions.https.onRequest(async (req: functions.Request, res: functions.Response) => {
  const title = req.query.title;
  const message = req.query.message;

  sendNotification({
    title,
    message,
    url: "noProduct"
  }).then(() => {
    res.send("Se envio correctamente la notificacion");
  })
})

// CUANDO HAY UN CAMBIO EN /DATA
exports.showPush = functions.firestore.document("products/{product}").onCreate(async () => {
  // OBTENER NOTICIAS, Y TOKENS DE USUARIOS
  const productFeed = (await admin.firestore().collection("products").get()).docs;

  sendNotification({
    title: productFeed[productFeed.length - 1].data().name,
    message: productFeed[productFeed.length - 1].data().description,
    url: productFeed[productFeed.length - 1].data().key
  });
})

// SERVER SIDE RENDER CON SERVIDOR NEXT
exports.ssr = functions.https.onRequest(async (req: functions.Request, res: functions.Response) =>
  app.prepare().then(() => handle(req, res))
);

// AGREGAR LOS DATOS DE NUEVOS USUARIOS A FIRESTORE
exports.setUser = functions.auth.user().onCreate((user: UserRecord) => {
  if (user.providerData[0].providerId !== "password")
    db.collection("users")
      .doc(user.uid)
      .set({
        displayName: user.displayName,
        email: user.email,
        provider: user.providerData[0].providerId,
        photoURL: user.photoURL
      });
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "iboxcart@gmail.com",
    pass: "X2b=A2Z9"
  }
})

interface product {
  color: string;
  description: string;
  name: string;
  price: number;
  tag: string;
  key: string;
  img: string;
}
interface OrderCart { sum: number; productsFilter: Array<product | admin.firestore.DocumentData>; multArry: number[] }
export const getCartProducts: Function = (cartList: string[], productList: Array<product | admin.firestore.DocumentData>) => {
  // FILTRAR PRODUCTOS
  const cartListFilter = (productList: Array<product | admin.firestore.DocumentData>) => {
    // DECLARAR ARRAY DE CARDS
    let productsFilter: Array<product | admin.firestore.DocumentData> = [];
    let sum: number = 0;
    let multArry: number[] = [];

    // BUSCAR POR CLAVE
    productList.reverse().forEach((product: product | admin.firestore.DocumentData) => {
      // DECLARAR MULTIPLICIDAD
      let firstAdded: boolean = false;
      let mult: number = 0;

      // AGREGAR MULTIPLICIDAD
      cartList?.forEach((keyID: string) => product.key.trim() === keyID ? mult++ : null);

      // CREAR LISTA DE CARDS
      cartList?.forEach((keyID: string) => {
        if (product.key.trim() === keyID && !firstAdded) {
          productsFilter.push(product)

          // SALIR Y AGREGAR A LA SUMA TOTAL
          firstAdded = true;
          sum += product.price * mult;
        }
      })

      // CREAR LISTA DE MULTIPLICIDAD
      if (mult !== 0) multArry.push(mult);
    })

    // RETORNAR LISTA FILTRADA
    const newOrder: OrderCart = { sum, productsFilter, multArry }
    return newOrder;
  }

  const result: OrderCart = cartListFilter(productList);
  return result;
}

interface IForms { name: string; email: string; address: string; phone: number; nit: string; }
interface ReqForm { sendData: IForms; cartList: string[]; }
// ENVIAR ARTICULOS PARA COMPRAR
exports.buyFromCart = functions.https.onRequest(async (req: functions.Request, res: functions.Response) => {
  if (req.method === "POST") {
    // VERIFICAR SI ES UN METODO POST
    const reqForm: ReqForm = req.body;

    // LEER BASE DE DATOS
    const productFeed: Array<admin.firestore.QueryDocumentSnapshot> = (await admin.firestore().collection("products").get()).docs;
    const productList: Array<admin.firestore.DocumentData> = productFeed.map((product: admin.firestore.QueryDocumentSnapshot) => product.data);
    const resCart: OrderCart = getCartProducts(reqForm.cartList, productList);
    let summaryText: string = "";

    resCart.productsFilter.forEach((dataFilter: product | admin.firestore.DocumentData, i: number) => {
      summaryText += `
        <strong>Nombre</strong>: ${dataFilter.name}
        <br/>
        <strong>Precio</strong>: ${dataFilter.price}
        <br/>
        <strong>Cantidad</strong>: ${resCart.multArry[i]}
        <br/>
        <strong>Por un total de</strong>: ${resCart.sum}
        <br/>
        <br/>
      `
    })


    const mailOptions = {
      from: 'iboxcart@gmail.com',
      to: "ventas@ibox.gt",
      subject: 'Nueva compra desde la App',
      html: summaryText
    };

    return transporter.sendMail(mailOptions, (err: Error) => {
      if (err) res.send(err.toString());
      return res.status(200);
    });
  }
}) 
