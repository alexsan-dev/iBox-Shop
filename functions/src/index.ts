// TIPOS DE DATOS
import { UserRecord } from "firebase-functions/lib/providers/auth";

// IMPORTAR FUNCTIONS Y FIREBASE ADMIN
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// INTERFACES Y TIPOS
interface product { color: string; description: string; name: string; price: number; tag: string; key: string; img: string; }
interface OrderCart { sum: number; productsFilter: Array<product | admin.firestore.DocumentData>; multArry: number[] }
interface IForms { name: string; email: string; address: string; phone: number; nit: string; }
interface ReqForm { sendData: IForms; cartList: string[]; }

// EMAILS
const nodemailer = require("nodemailer");

// INICIALIZAR FIREBASE Y FIRESTORE
admin.initializeApp(functions.config().firebase);
const db: FirebaseFirestore.Firestore = admin.firestore();

// CONFIGURAR SERVIDOR NEXT
const next = require("next");
const app = next({ dev: false, conf: { distDir: "build" } });
const handle = app.getRequestHandler();

// CREAR TRANSPORT PARA MAIL
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "iboxcart@gmail.com", pass: "X2b=A3Z9" }
})

// FUNCION PARA ENVIAR NOTIFICACION COMO MULTICAST
const sendNotification = async (data: { title: string, message: string, url: string }) => {
  // TOKENS
  let tokens: string[] = [];

  // OBTENER LISTA DE TOKENS REGISTRADOS
  const tokensFB: admin.firestore.QuerySnapshot = await admin.firestore().collection("tokens").get();
  tokensFB.forEach((doc: admin.firestore.QueryDocumentSnapshot) => tokens.push(doc.data().token))

  // COMPONER MENSAJE
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
  // OBTENER TITULO Y MENSAJE DE PARAMS
  const title = req.query.title;
  const message = req.query.message;

  // ENVIAR NOTIFICACION COMO MULTCAST
  sendNotification({
    title,
    message,
    url: "noProduct"
  }).then(() => res.send("Push notificacion send succesfully"))
})

// CUANDO HAY UN CAMBIO EN /DATA
exports.showPush = functions.firestore.document("products/{product}").onCreate(async () => {
  // OBTENER NOTICIAS, Y TOKENS DE USUARIOS
  const productFeed = (await admin.firestore().collection("products").get()).docs;

  // ENVIAR NOTIFICACION COMO MULTICAST
  sendNotification({
    title: productFeed[productFeed.length - 1].data().name,
    message: productFeed[productFeed.length - 1].data().description,
    url: productFeed[productFeed.length - 1].data().key
  });
})

// SERVER SIDE RENDER CON SERVIDOR NEXT
exports.ssr = functions.https.onRequest(async (req: functions.Request, res: functions.Response) => app.prepare().then(() => handle(req, res)));

// AGREGAR LOS DATOS DE NUEVOS USUARIOS A FIRESTORE
exports.setUser = functions.auth.user().onCreate((user: UserRecord) => {
  // CREAR NUEVO USUARIO EN FIRESTORE
  if (user.providerData[0].providerId !== "password")
    db.collection("users")
      .doc(user.uid)
      .set({
        displayName: user.displayName,
        email: user.email,
        provider: user.providerData[0].providerId,
        photoURL: user.photoURL,
        uid: user.uid
      });
});

const getCartProducts: Function = (cartList: string[], productList: Array<product | admin.firestore.DocumentData>) => {
  // FILTRAR PRODUCTOS
  const cartListFilter = (productList: Array<product | admin.firestore.DocumentData>) => {
    // DECLARAR ARRAY DE CARDS
    let productsFilter: Array<product | admin.firestore.DocumentData> = [];
    let multArry: number[] = [];
    let sum: number = 0;

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

// GENERAR LISTA DE PRODUCTOS
const genCartComponent = (resCart: OrderCart) => {
  // DECLARAR VARIABLE DE SALIDA
  let outStr: string = "";

  // CREAR COMPONENT DE TARJETA
  resCart.productsFilter.forEach((dataFilter: product | admin.firestore.DocumentData, i: number) => outStr += `
    <p>
      <span>${dataFilter.key}</span>
      <br/>
      <strong>${dataFilter.name}</strong>
      <br/>
      <span>La cantidad de: ${resCart.multArry[i]}</span>
      <br/>
      <strong>Por un total de: Q${dataFilter.price * resCart.multArry[i]}</strong>
    </p>
    <br/>
  `)

  // RETORNAR COMPONENTE
  return outStr;
}

// GENERAR PLANTILLA PARA CORREO
const emailTemplate = (resCart: OrderCart, reqForm: ReqForm) =>
  `
    <img src="https://ibox.gt/images/logo.png" width="100px"/>
    <br/>
      <div id="content">
      <h2>Ventas | iBox Shop</h2>
      <span>Tu comodidad en una caja.</span>
      <p id="client">
        <strong>NIT: </strong><span>${reqForm.sendData.nit}</span>
        <br />
        <strong>Nombre: </strong><span>${reqForm.sendData.name}</span>
        <br />
        <strong>Email: </strong><span>${reqForm.sendData.email}</span>
        <br />
        <strong>Teléfono: </strong><span>${reqForm.sendData.phone}</span>
        <br />
        <strong>Para enviar a: </strong><span>${reqForm.sendData.address}</span>
      </p>
      <h2>De los siguientes productos: </h2>
      <hr>
      ${genCartComponent(resCart)}
      <hr>
      <h1>El total del pedido es de: Q${resCart.sum} </h1>
    </div>
  `;

// ENVIAR ARTICULOS PARA COMPRAR
exports.buyFromCart = functions.https.onCall(async (reqForm: ReqForm) => {
  // LEER BASE DE DATOS
  const productFeed: Array<admin.firestore.QueryDocumentSnapshot> = (await admin.firestore().collection("products").get()).docs;
  const productList: Array<admin.firestore.DocumentData> = productFeed.map((product: admin.firestore.QueryDocumentSnapshot) => product.data());

  // OBTENER LISTADO DE PRODUCTOS
  const resCart: OrderCart = getCartProducts(reqForm.cartList, productList);

  // MENSAJE PARA MAIL
  let summaryText: string = emailTemplate(resCart, reqForm);

  // COMPONER MENSAJE DE SALIDA
  const mailOptions = { from: 'iboxcart@gmail.com', to: "ventas@ibox.gt", subject: 'Nueva compra desde la App', html: summaryText };

  // ENVIAR MENSAJE A CORREO
  const sendMail = await transporter.sendMail(mailOptions);

  return sendMail;
})


