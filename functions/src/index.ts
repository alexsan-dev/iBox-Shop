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
const app = next({ dev: false, conf: { distDir: "next" } });
const handle = app.getRequestHandler();

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
