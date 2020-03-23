"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTAR FUNCTIONS Y FIREBASE ADMIN
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// CORS
require('cors')({ origin: true });
// EMAILS
const nodemailer = require("nodemailer");
// INICIALIZAR FIREBASE Y FIRESTORE
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
// CONFIGURAR SERVIDOR NEXT
const next = require("next");
const app = next({ dev: false, conf: { distDir: "build" } });
const handle = app.getRequestHandler();
// CREAR TRANSPORT PARA MAIL
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "iboxcart@gmail.com", pass: "X2b=A3Z9" }
});
// FUNCION PARA ENVIAR NOTIFICACION COMO MULTICAST
const sendNotification = async (data) => {
    // TOKENS
    let tokens = [];
    // OBTENER LISTA DE TOKENS REGISTRADOS
    const tokensFB = await admin.firestore().collection("tokens").get();
    tokensFB.forEach((doc) => tokens.push(doc.data().token));
    // COMPONER MENSAJE
    const messageS = {
        data,
        tokens: tokens,
        webpush: {
            fcmOptions: {
                link: "https://ibox.gt/tienda"
            }
        }
    };
    // ENVIAR A LOS DISPOSITIVOS
    return admin.messaging().sendMulticast(messageS);
};
// ENVIAR NOTIFICACION NORMAL
exports.sendPush = functions.https.onRequest(async (req, res) => {
    // OBTENER TITULO Y MENSAJE DE PARAMS
    const title = req.query.title;
    const message = req.query.message;
    // ENVIAR NOTIFICACION COMO MULTCAST
    sendNotification({
        title,
        message,
        url: "noProduct"
    }).then(() => res.send("Push notificacion send succesfully"));
});
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
});
// SERVER SIDE RENDER CON SERVIDOR NEXT
exports.ssr = functions.https.onRequest(async (req, res) => app.prepare().then(() => handle(req, res)));
// AGREGAR LOS DATOS DE NUEVOS USUARIOS A FIRESTORE
exports.setUser = functions.auth.user().onCreate((user) => {
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
const getCartProducts = (cartList, productList) => {
    // FILTRAR PRODUCTOS
    const cartListFilter = (productList) => {
        // DECLARAR ARRAY DE CARDS
        let productsFilter = [];
        let multArry = [];
        let sum = 0;
        // BUSCAR POR CLAVE
        productList.reverse().forEach((product) => {
            var _a, _b;
            // DECLARAR MULTIPLICIDAD
            let firstAdded = false;
            let mult = 0;
            // AGREGAR MULTIPLICIDAD
            (_a = cartList) === null || _a === void 0 ? void 0 : _a.forEach((keyID) => product.key.trim() === keyID ? mult++ : null);
            // CREAR LISTA DE CARDS
            (_b = cartList) === null || _b === void 0 ? void 0 : _b.forEach((keyID) => {
                if (product.key.trim() === keyID && !firstAdded) {
                    productsFilter.push(product);
                    // SALIR Y AGREGAR A LA SUMA TOTAL
                    firstAdded = true;
                    sum += product.price * mult;
                }
            });
            // CREAR LISTA DE MULTIPLICIDAD
            if (mult !== 0)
                multArry.push(mult);
        });
        // RETORNAR LISTA FILTRADA
        const newOrder = { sum, productsFilter, multArry };
        return newOrder;
    };
    const result = cartListFilter(productList);
    return result;
};
// GENERAR LISTA DE PRODUCTOS
const genCartComponent = (resCart) => {
    // DECLARAR VARIABLE DE SALIDA
    let outStr = "";
    // CREAR COMPONENT DE TARJETA
    resCart.productsFilter.forEach((dataFilter, i) => outStr += `
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
  `);
    // RETORNAR COMPONENTE
    return outStr;
};
// GENERAR PLANTILLA PARA CORREO
const emailTemplate = (resCart, reqForm) => `
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
exports.buyFromCart = functions.https.onCall(async (reqForm) => {
    // LEER BASE DE DATOS
    const productFeed = (await admin.firestore().collection("products").get()).docs;
    const productList = productFeed.map((product) => product.data());
    // OBTENER LISTADO DE PRODUCTOS
    const resCart = getCartProducts(reqForm.cartList, productList);
    // MENSAJE PARA MAIL
    let summaryText = emailTemplate(resCart, reqForm);
    // COMPONER MENSAJE DE SALIDA
    const mailOptions = { from: 'iboxcart@gmail.com', to: "ventas@ibox.gt", subject: 'Nueva compra desde la App', html: summaryText };
    // ENVIAR MENSAJE A CORREO
    const sendMail = await transporter.sendMail(mailOptions);
    console.log(reqForm, sendMail);
    return sendMail;
});
//# sourceMappingURL=index.js.map