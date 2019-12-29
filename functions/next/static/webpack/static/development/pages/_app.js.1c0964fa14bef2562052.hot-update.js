webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./utils/hooks.js":
/*!************************!*\
  !*** ./utils/hooks.js ***!
  \************************/
/*! exports provided: useDB, useInterval, useLogout, setProviders, useLogin, useAuth, user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDB", function() { return useDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return useInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogout", function() { return useLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProviders", function() { return setProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogin", function() { return useLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
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
  console.log(data);
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
const user = _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser;

/***/ })

})
//# sourceMappingURL=_app.js.1c0964fa14bef2562052.hot-update.js.map