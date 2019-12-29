webpackHotUpdate("static\\development\\pages\\cuenta.js",{

/***/ "./utils/hooks.js":
/*!************************!*\
  !*** ./utils/hooks.js ***!
  \************************/
/*! exports provided: useDB, useInterval, useLogout, setProviders, useLogin, useAuth, useAuthError, user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDB", function() { return useDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return useInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogout", function() { return useLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProviders", function() { return setProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogin", function() { return useLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthError", function() { return useAuthError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _credentials_servers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../credentials/servers */ "./credentials/servers.js");
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.es.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");



 //local DB

let db = {};
const useDB = () => {
  db = new dexie__WEBPACK_IMPORTED_MODULE_2__["default"]("localDB");
  db.version(1).stores({
    user: 'key, user'
  });
  db.open().then(() => console.log("OpenDB")).catch(err => console.log("Error during open db ", err));
}; // Intervals for states

const useInterval = (callback, delay) => {
  const savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    savedCallback.current = callback;
  }, [callback]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}; // Firebase Auth

let fbprovider, gprovider;
const useLogout = () => _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signOut();
const setProviders = () => {
  fbprovider = new _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth.FacebookAuthProvider();
  gprovider = new _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider();
  _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().useDeviceLanguage();
  fbprovider.setCustomParameters({
    'display': 'popup'
  });
};
const useLogin = data => {
  if (data.type === true) _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().createUserWithEmailAndPassword(data.email, data.pass).catch(data.err);else if (data.type === false) _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithEmailAndPassword(data.email, data.pass).catch(data.err);else if (data.type === "fb") _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithRedirect(fbprovider).catch(data.err);else if (data.type === "g") _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithRedirect(gprovider).catch(data.err);
};
const useAuth = listen => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().onAuthStateChanged(user => {
      if (user) listen(user);else listen(false);
    });
    return () => unsubscribe();
  }, []);
};
const useAuthError = code => {
  switch (code) {
    case "auth/app-deleted":
      return "Fallo la conexion interna, intenta recargar la pagina.";

    case "auth/app-not-authorized":
      return "Esta aplicacion no esta autorizada para iniciar sesion aqui.";

    case "auth/argument-error":
      return "Se envio una solitud con parametros incorrectos.";

    case "auth/invalid-api-key":
      return "Las credenciales de la aplicacion son incorrectas.";

    case "auth/invalid-user-token":
      return "Parece que tu cuenta se invalido.";

    case "auth/network-request-failed":
      return "Comprueba tu conexion a internet.";

    case "auth/operation-not-allowed":
      return "Se trato de inicar sesion en proveedor no autorizado.";

    case "auth/requires-recent-login":
      return "Se registro una sesion anterior con el mismo usuario.";

    case "auth/too-many-requests":
      return "Se alcanzo el limite maximo de intentos.";

    case "auth/unauthorized-domain":
      return "Este sitio no esta autorizado para iniciar sesion aqui.";

    case "auth/user-disabled":
      return "Este usuario ha sido deshabilitado.";

    case "auth/user-token-expired":
      return "Las credenciales del usuario han expirado.";

    case "auth/web-storage-unsupported":
      return "Tu navegador o dispositivo no soporta el almacenamiento interno.";

    case "auth/account-exists-with-different-credential":
      return "Esta cuenta ya existe y esta registrada con otro metodo.";

    case "auth/credential-already-in-used":
      return "Las credenciales de esta cuenta ya estan en uso.";

    case "auth/email-already-in-use":
      return "Esta direccion de correo electronico ya esta registrado en otra cuenta.";

    case "auth/user-not-found":
      return "No se ha podido encontrar el usuario, intenta nuevamente.";

    case "auth/weak-password":
      return "Tu contraseña debe contener al menos 6 caracteres alfanumericos.";

    case "auth/invalid-email":
      return "El correo electronico no es valido.";

    case "auth/wrong-password":
      return "La contraseña no es la correcta, intena nuevamente.";

    case "auth/user-not-found":
      return "No se ha podido encontrar el usuario, intenta nuevamente.";

    case "auth/user-not-found":
      return "No se ha podido encontrar el usuario, intenta nuevamente.";

    default:
      return "Error desconocido intenta de nuevo.";
  }
};
const user = _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser;

/***/ })

})
//# sourceMappingURL=cuenta.js.2fae250b260803088e7a.hot-update.js.map