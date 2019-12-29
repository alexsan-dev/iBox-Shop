webpackHotUpdate("static\\development\\pages\\cuenta.js",{

/***/ "./components/Forms.js":
/*!*****************************!*\
  !*** ./components/Forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./components/Input.js");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Alert */ "./components/Alert.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/hooks */ "./utils/hooks.js");

var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\Forms.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




let email, name, pass;

const Forms = () => {
  let {
    0: account,
    1: setAccount
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    switchC: false,
    alert: false
  });
  let regText = !account.switchC ? "Crear Cuenta" : "Iniciar Sesión";
  Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_5__["setProviders"])();

  const value = data => {
    if (data.name === "email") email = data.text;else if (data.name === "name") name = data.text;else if (data.name === "pass") pass = data.text;
  };

  const showAlert = data => setAccount({
    switchC: account.switchC,
    alert: data ? {
      title: data.title,
      type: data.type,
      body: Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_5__["useAuthError"])(data.body.code)
    } : false
  });

  const logs = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_5__["useLogin"])({
    type: account.switchC,
    email,
    pass,
    err: body => showAlert({
      title: "Ocurrio un error",
      body,
      type: "error"
    })
  });

  const fblog = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_5__["useLogin"])({
    type: "fb",
    err: body => showAlert({
      title: "Ocurrio un error",
      body,
      type: "error"
    })
  });

  const glog = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_5__["useLogin"])({
    type: "g",
    err: body => showAlert({
      title: "Ocurrio un error",
      body,
      type: "error"
    })
  });

  const regSwitch = () => setAccount({
    switchC: !account.switchC,
    alert: account.alert
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, account.alert && __jsx(_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, account.alert, {
    hideAlert: showAlert,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), __jsx("div", {
    id: "form",
    className: "jsx-601428578",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-601428578",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Conectate ", __jsx("i", {
    className: "jsx-601428578" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "cached")), __jsx("p", {
    className: "jsx-601428578",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Registrate de forma gratuita, puedes utilizar el m\xE9todo que prefieras para conectarte, tener cuenta tiene muchos beneficios. \uD83D\uDC4C"), __jsx("p", {
    className: "jsx-601428578",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "\xBF", account.switchC ? "ya" : "no", " tienes una cuenta? ", __jsx("button", {
    onClick: regSwitch,
    className: "jsx-601428578",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, regText)), __jsx("div", {
    id: "credentials",
    className: "jsx-601428578",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "email",
    label: "Email o tel\xE9fono",
    name: "email",
    value: value,
    helper: "Usuario de la cuenta",
    icon: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), account.switchC ? __jsx(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "text",
    label: "Nombre de usuario",
    name: "name",
    value: value,
    helper: "Tu apodo unico",
    icon: "person",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }) : "", __jsx(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "password",
    label: "Contrase\xF1a",
    name: "pass",
    value: value,
    helper: "Clave secreta",
    icon: "lock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), account.switchC ? "" : __jsx("p", {
    className: "jsx-601428578",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "\xBFOlvidaste tu contrase\xF1a? ", __jsx("button", {
    className: "jsx-601428578" + " " + "waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Recuperar")), __jsx("button", {
    onClick: logs,
    className: "jsx-601428578" + " " + "blue waves",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-601428578" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, account.switchC ? "person_add" : "person"), account.switchC ? "Crear Cuenta" : "Iniciar Sesión"), __jsx("button", {
    onClick: fblog,
    className: "jsx-601428578" + " " + "waves fblog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-601428578" + " " + "icon-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), " Iniciar con Facebook"), __jsx("button", {
    onClick: glog,
    className: "jsx-601428578" + " " + "waves glog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-601428578" + " " + "icon-google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), " Iniciar con Google")), __jsx("a", {
    href: "./privacidad.pdf",
    target: "_blank",
    title: "Privacidad",
    className: "jsx-601428578" + " " + "btn amber privacy waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-601428578" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "account_balance"), " Pol\xEDticas de ", __jsx("br", {
    className: "jsx-601428578",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), "privacidad"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "601428578",
    __self: undefined
  }, ".privacy.jsx-601428578{position:absolute;right:0;margin-top:-100px;z-index:2;font-size:13px;color:var(--backgrounds);}#form.jsx-601428578>p.jsx-601428578{color:var(--parraf);}#form.jsx-601428578>p.jsx-601428578:nth-child(5){text-align:center;}p.jsx-601428578>button.jsx-601428578{display:inline-block;color:var(--parraf);}h2.jsx-601428578{color:var(--parraf);}#form.jsx-601428578{width:calc(100% - 40px);background:var(--backgrounds);box-shadow:0 0 10px rgba(0,0,0,.2);padding:20px;border-radius:10px;position:relative;top:-50px;left:50%;-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);margin-bottom:60px;}#form.jsx-601428578>button.jsx-601428578{color:var(--backgrounds);width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;}#credentials.jsx-601428578{margin-top:-10px;}button.jsx-601428578 svg.jsx-601428578{margin:30px;}.fblog.jsx-601428578{background:#3b5998;margin:0;}.glog.jsx-601428578{background:#D44638;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RrQixBQUcrQixBQU9XLEFBRVgsQUFHRyxBQUlELEFBR0ksQUFZQyxBQU1SLEFBR0wsQUFHTyxBQUlBLFlBTnBCLEtBSEEsQ0FyQ1MsQUFTVCxDQWtDVSxBQUlBLENBekNxQixBQVUvQixDQUpxQixHQU9VLENBWW5CLENBOUJPLEVBMkNuQixBQUlBLFFBaEJ3QixLQW5CeEIsR0FYVyxVQUNLLEFBaUJvQixlQWhCVixvQkFpQlosS0FoQmQsUUFpQm9CLG1CQUNELGNBVUYsSUFUTixVQUNELEVBU1YsT0FSK0IsbUdBQ1gsbUJBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBBbGVydCBmcm9tICcuL0FsZXJ0JztcbmltcG9ydCB7IHNldFByb3ZpZGVycywgdXNlTG9naW4sIHVzZUF1dGhFcnJvciB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmxldCBlbWFpbCwgbmFtZSwgcGFzcztcblxuY29uc3QgRm9ybXMgPSAoKSA9PiB7XG4gIGxldCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSh7IHN3aXRjaEM6IGZhbHNlLCBhbGVydDogZmFsc2UgfSk7XG4gIGxldCByZWdUZXh0ID0gIWFjY291bnQuc3dpdGNoQyA/IFwiQ3JlYXIgQ3VlbnRhXCIgOiBcIkluaWNpYXIgU2VzacOzblwiO1xuICBzZXRQcm92aWRlcnMoKTtcblxuICBjb25zdCB2YWx1ZSA9IGRhdGEgPT4ge1xuICAgIGlmIChkYXRhLm5hbWUgPT09IFwiZW1haWxcIikgZW1haWwgPSBkYXRhLnRleHQ7XG4gICAgZWxzZSBpZiAoZGF0YS5uYW1lID09PSBcIm5hbWVcIikgbmFtZSA9IGRhdGEudGV4dDtcbiAgICBlbHNlIGlmIChkYXRhLm5hbWUgPT09IFwicGFzc1wiKSBwYXNzID0gZGF0YS50ZXh0O1xuICB9XG5cbiAgY29uc3Qgc2hvd0FsZXJ0ID0gZGF0YSA9PiBzZXRBY2NvdW50KHsgc3dpdGNoQzogYWNjb3VudC5zd2l0Y2hDLCBhbGVydDogZGF0YT97IHRpdGxlOiBkYXRhLnRpdGxlLCB0eXBlOiBkYXRhLnR5cGUsIGJvZHk6IHVzZUF1dGhFcnJvcihkYXRhLmJvZHkuY29kZSkgfTpmYWxzZX0pO1xuXG4gIGNvbnN0IGxvZ3MgPSAoKSA9PiB1c2VMb2dpbih7IHR5cGU6IGFjY291bnQuc3dpdGNoQywgZW1haWwsIHBhc3MsIGVycjogYm9keSA9PiBzaG93QWxlcnQoeyB0aXRsZTogXCJPY3VycmlvIHVuIGVycm9yXCIsIGJvZHksIHR5cGU6IFwiZXJyb3JcIiB9KSB9KVxuICBjb25zdCBmYmxvZyA9ICgpID0+IHVzZUxvZ2luKHsgdHlwZTogXCJmYlwiLCBlcnI6IGJvZHkgPT4gc2hvd0FsZXJ0KHsgdGl0bGU6IFwiT2N1cnJpbyB1biBlcnJvclwiLCBib2R5LCB0eXBlOiBcImVycm9yXCIgfSkgfSlcbiAgY29uc3QgZ2xvZyA9ICgpID0+IHVzZUxvZ2luKHsgdHlwZTogXCJnXCIsIGVycjogYm9keSA9PiBzaG93QWxlcnQoeyB0aXRsZTogXCJPY3VycmlvIHVuIGVycm9yXCIsIGJvZHksIHR5cGU6IFwiZXJyb3JcIiB9KSB9KVxuICBjb25zdCByZWdTd2l0Y2ggPSAoKSA9PiBzZXRBY2NvdW50KHsgc3dpdGNoQzogIWFjY291bnQuc3dpdGNoQywgYWxlcnQ6IGFjY291bnQuYWxlcnQgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2FjY291bnQuYWxlcnQgJiYgPEFsZXJ0IHsuLi5hY2NvdW50LmFsZXJ0fSBoaWRlQWxlcnQ9e3Nob3dBbGVydH0vPn1cblxuICAgICAgPGRpdiBpZD1cImZvcm1cIj5cbiAgICAgICAgPGgyPkNvbmVjdGF0ZSA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNhY2hlZDwvaT48L2gyPlxuICAgICAgICA8cD5SZWdpc3RyYXRlIGRlIGZvcm1hIGdyYXR1aXRhLCBwdWVkZXMgdXRpbGl6YXIgZWwgbcOpdG9kbyBxdWUgcHJlZmllcmFzIHBhcmEgY29uZWN0YXJ0ZSwgdGVuZXIgY3VlbnRhIHRpZW5lIG11Y2hvcyBiZW5lZmljaW9zLiDwn5GMPC9wPlxuICAgICAgICA8cD7Cv3thY2NvdW50LnN3aXRjaEMgPyBcInlhXCIgOiBcIm5vXCJ9IHRpZW5lcyB1bmEgY3VlbnRhPyA8YnV0dG9uIG9uQ2xpY2s9e3JlZ1N3aXRjaH0+e3JlZ1RleHR9PC9idXR0b24+PC9wPlxuXG4gICAgICAgIDxkaXYgaWQ9XCJjcmVkZW50aWFsc1wiPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBsYWJlbD1cIkVtYWlsIG8gdGVsw6lmb25vXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3ZhbHVlfSBoZWxwZXI9XCJVc3VhcmlvIGRlIGxhIGN1ZW50YVwiIGljb249XCJtYWlsXCIgLz5cbiAgICAgICAgICB7YWNjb3VudC5zd2l0Y2hDID8gPElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJOb21icmUgZGUgdXN1YXJpb1wiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e3ZhbHVlfSBoZWxwZXI9XCJUdSBhcG9kbyB1bmljb1wiIGljb249XCJwZXJzb25cIiAvPiA6IFwiXCJ9XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIGxhYmVsPVwiQ29udHJhc2XDsWFcIiBuYW1lPVwicGFzc1wiIHZhbHVlPXt2YWx1ZX0gaGVscGVyPVwiQ2xhdmUgc2VjcmV0YVwiIGljb249XCJsb2NrXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2FjY291bnQuc3dpdGNoQyA/IFwiXCIgOiA8cD7Cv09sdmlkYXN0ZSB0dSBjb250cmFzZcOxYT8gPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXZlcyB3YXZlcy1kYXJrXCI+UmVjdXBlcmFyPC9idXR0b24+PC9wPn1cblxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ3N9IGNsYXNzTmFtZT1cImJsdWUgd2F2ZXNcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnthY2NvdW50LnN3aXRjaEMgPyBcInBlcnNvbl9hZGRcIiA6IFwicGVyc29uXCJ9PC9pPnthY2NvdW50LnN3aXRjaEMgPyBcIkNyZWFyIEN1ZW50YVwiIDogXCJJbmljaWFyIFNlc2nDs25cIn08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmYmxvZ30gY2xhc3NOYW1lPVwid2F2ZXMgZmJsb2dcIj48aSBjbGFzc05hbWU9XCJpY29uLWZhY2Vib29rXCI+PC9pPiBJbmljaWFyIGNvbiBGYWNlYm9vazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dsb2d9IGNsYXNzTmFtZT1cIndhdmVzIGdsb2dcIj48aSBjbGFzc05hbWU9XCJpY29uLWdvb2dsZVwiPjwvaT4gSW5pY2lhciBjb24gR29vZ2xlPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YSBocmVmPVwiLi9wcml2YWNpZGFkLnBkZlwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiUHJpdmFjaWRhZFwiIGNsYXNzTmFtZT1cImJ0biBhbWJlciBwcml2YWN5IHdhdmVzIHdhdmVzLWRhcmtcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFjY291bnRfYmFsYW5jZTwvaT4gUG9sw610aWNhcyBkZSA8YnIgLz5wcml2YWNpZGFkPC9hPlxuXG4gICAgICA8c3R5bGUganN4PntgXG5cdCAgICAgICAgLnByaXZhY3l7XG4gICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOi0xMDBweDtcbiAgICAgICAgICAgICB6LWluZGV4OjI7XG4gICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgICAgICAgICAgY29sb3I6dmFyKC0tYmFja2dyb3VuZHMpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgICNmb3JtID4gcCB7IGNvbG9yOnZhcigtLXBhcnJhZik7IH1cbiAgICAgICAgICAgI2Zvcm0gPiBwOm50aC1jaGlsZCg1KSB7XG4gICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcCA+IGJ1dHRvbntcbiAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICBjb2xvcjp2YXIoLS1wYXJyYWYpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIGgye1xuICAgICAgICAgICAgIGNvbG9yOnZhcigtLXBhcnJhZik7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgI2Zvcm17XG4gICAgICAgICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICAgYmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kcyk7XG4gICAgICAgICAgICAgYm94LXNoYWRvdzowIDAgMTBweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgIHRvcDotNTBweDtcbiAgICAgICAgICAgICBsZWZ0OjUwJTtcbiAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjYwcHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgI2Zvcm0gPiBidXR0b257XG4gICAgICAgICAgICAgY29sb3I6dmFyKC0tYmFja2dyb3VuZHMpO1xuICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgI2NyZWRlbnRpYWxze1xuICAgICAgICAgICAgIG1hcmdpbi10b3A6LTEwcHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgYnV0dG9uIHN2Z3tcbiAgICAgICAgICAgICBtYXJnaW46MzBweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmJsb2d7XG4gICAgICAgICAgICAgYmFja2dyb3VuZDojM2I1OTk4O1xuICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5nbG9ne1xuICAgICAgICAgICAgIGJhY2tncm91bmQ6I0Q0NDYzODtcbiAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgfVxuICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybXM7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ernesto\\\\Desktop\\\\iBox\\\\components\\\\Forms.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ })

})
//# sourceMappingURL=cuenta.js.28d74d37f1cd0cceb9de.hot-update.js.map