"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTAR FUNCTIONS Y FIREBASE ADMIN
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// INICIALIZAR FIREBASE Y FIRESTORE
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
// EMAILS
const nodemailer = require("nodemailer");
// CONFIGURAR SERVIDOR NEXT
const next = require("next");
const app = next({ dev: false, conf: { distDir: "build" } });
const handle = app.getRequestHandler();
const sendNotification = async (data) => {
    let tokens = [];
    const tokensFB = await admin.firestore().collection("tokens").get();
    tokensFB.forEach((doc) => tokens.push(doc.data().token));
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
    const title = req.query.title;
    const message = req.query.message;
    sendNotification({
        title,
        message,
        url: "noProduct"
    }).then(() => {
        res.send("Se envio correctamente la notificacion");
    });
});
// CUANDO HAY UN CAMBIO EN /DATA
exports.showPush = functions.firestore.document("products/{product}").onCreate(async () => {
    // OBTENER NOTICIAS, Y TOKENS DE USUARIOS
    const productFeed = (await admin.firestore().collection("products").get()).docs;
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
});
exports.getCartProducts = (cartList, productList) => {
    // FILTRAR PRODUCTOS
    const cartListFilter = (productList) => {
        // DECLARAR ARRAY DE CARDS
        let productsFilter = [];
        let sum = 0;
        let multArry = [];
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
// ENVIAR ARTICULOS PARA COMPRAR
exports.buyFromCart = functions.https.onRequest(async (req, res) => {
    if (req.method === "POST") {
        // VERIFICAR SI ES UN METODO POST
        const reqForm = req.body;
        // LEER BASE DE DATOS
        const productFeed = (await admin.firestore().collection("products").get()).docs;
        const productList = productFeed.map((product) => product.data);
        const resCart = exports.getCartProducts(reqForm.cartList, productList);
        let summaryText = "";
        resCart.productsFilter.forEach((dataFilter, i) => {
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
      `;
        });
        const mailOptions = {
            from: 'iboxcart@gmail.com',
            to: "ventas@ibox.gt",
            subject: 'Nueva compra desde la App',
            html: summaryText
        };
        return transporter.sendMail(mailOptions, (err) => {
            if (err)
                res.send(err.toString());
            return res.status(200);
        });
    }
});
//# sourceMappingURL=index.js.map