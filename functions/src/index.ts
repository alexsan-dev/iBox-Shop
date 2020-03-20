// TIPOS DE DATOS
import { UserRecord } from "firebase-functions/lib/providers/auth";

// IMPORTAR FUNCTIONS Y FIREBASE ADMIN
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// INICIALIZAR FIREBASE Y FIRESTORE
admin.initializeApp(functions.config().firebase);
const db: FirebaseFirestore.Firestore = admin.firestore();

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
exports.sendPush = functions.https.onRequest(async (req, res) => {
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
