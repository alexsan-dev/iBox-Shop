"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTAR FUNCTIONS Y FIREBASE ADMIN
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// INICIALIZAR FIREBASE Y FIRESTORE
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
// CONFIGURAR SERVIDOR NEXT
const next = require("next");
const app = next({ dev: false, conf: { distDir: "build" } });
const handle = app.getRequestHandler();
// SERVER SIDE RENDER CON SERVIDOR NEXT
exports.ssr = functions.https.onRequest(async (req, res) => app.prepare().then(() => handle(req, res)));
// AGREGAR LOS DATOS DE NUEVOS USUARIOS A FIRESTORE
exports.setUser = functions.auth.user().onCreate((user) => {
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
//# sourceMappingURL=index.js.map