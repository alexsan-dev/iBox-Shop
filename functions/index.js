const functions = require("firebase-functions")
const admin = require('firebase-admin')
const next = require("next")
admin.initializeApp(functions.config().firebase)


let db = admin.firestore();
let app = next({ dev: false, conf: { distDir: "next" }, xPoweredBy: false })
let handle = app.getRequestHandler()

exports.ssr = functions.https.onRequest(async (req, res) => app.prepare().then(() => handle(req, res)));
exports.setUser = functions.auth.user().onCreate(user => {
  if (user.providerData[0].providerId !== "password") db.collection("users").doc(user.uid).set({ displayName: user.displayName, email: user.email, provider: user.providerData[0].providerId, photoURL: user.photoURL })
})
