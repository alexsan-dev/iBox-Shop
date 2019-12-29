const functions = require("firebase-functions")
const next = require("next")

var dev = process.env.NODE_ENV !== "production"
var app = next({ dev: false, conf: { distDir: "next" }, xPoweredBy: false })
var handle = app.getRequestHandler()

exports.next = functions.https.onRequest(async (req, res) => {
  console.log('File: ' + req.originalUrl);
  app.prepare().then(() => handle(req, res));
});
