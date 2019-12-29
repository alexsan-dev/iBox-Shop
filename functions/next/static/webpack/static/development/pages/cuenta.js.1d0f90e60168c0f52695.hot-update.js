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
    alert: {
      title: data.title,
      type: data.type,
      body: Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_5__["useAuthError"])(data.body.code)
    }
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, account.alert, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), __jsx("div", {
    id: "form",
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Conectate ", __jsx("i", {
    className: "jsx-21934034" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "cached")), __jsx("p", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Registrate de forma gratuita, puedes utilizar el m\xE9todo que prefieras para conectarte, tener cuenta tiene muchos beneficios. \uD83D\uDC4C"), __jsx("p", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "\xBF", account.switchC ? "ya" : "no", " tienes una cuenta? ", __jsx("button", {
    onClick: regSwitch,
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, regText)), __jsx("div", {
    id: "credentials",
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
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
      lineNumber: 35
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
      lineNumber: 36
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
      lineNumber: 37
    },
    __self: undefined
  })), account.switchC ? "" : __jsx("p", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "\xBFOlvidaste tu contrase\xF1a? ", __jsx("button", {
    className: "jsx-21934034" + " " + "waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "Recuperar")), __jsx("button", {
    onClick: logs,
    className: "jsx-21934034" + " " + "blue waves",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-21934034" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, account.switchC ? "person_add" : "person"), account.switchC ? "Crear Cuenta" : "Iniciar Sesión"), __jsx("button", {
    onClick: fblog,
    className: "jsx-21934034" + " " + "waves fblog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-21934034" + " " + "icon-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), " Iniciar con Facebook"), __jsx("button", {
    onClick: glog,
    className: "jsx-21934034" + " " + "waves glog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-21934034" + " " + "icon-google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), " Iniciar con Google")), __jsx("a", {
    href: "./privacidad.pdf",
    target: "_blank",
    title: "Privacidad",
    className: "jsx-21934034" + " " + "btn amber privacy waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-21934034" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "account_balance"), " Pol\xEDticas de ", __jsx("br", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), "privacidad"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "21934034",
    __self: undefined
  }, ".privacy.jsx-21934034{position:absolute;right:0;margin-top:-100px;z-index:2;font-size:13px;color:var(--backgrounds);}#form.jsx-21934034>p.jsx-21934034{color:var(--parraf);}#form.jsx-21934034>p.jsx-21934034:nth-child(5){text-align:center;}p.jsx-21934034>button.jsx-21934034{display:inline-block;color:var(--parraf);}h2.jsx-21934034{color:var(--parraf);}#form.jsx-21934034{width:calc(100% - 40px);background:var(--backgrounds);box-shadow:0 0 10px rgba(0,0,0,.2);padding:20px;border-radius:10px;position:relative;top:-50px;left:50%;-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);margin-bottom:60px;}#form.jsx-21934034>button.jsx-21934034{color:var(--backgrounds);width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;}#credentials.jsx-21934034{margin-top:-10px;}button.jsx-21934034 svg.jsx-21934034{margin:30px;}.fblog.jsx-21934034{background:#3b5998;margin:0;}.glog.jsx-21934034{background:#D44638;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURrQixBQUcrQixBQU9XLEFBRVgsQUFHRyxBQUlELEFBR0ksQUFZQyxBQU1SLEFBR0wsQUFHTyxBQUlBLFlBTnBCLEtBSEEsQ0FyQ1MsQUFTVCxDQWtDVSxBQUlBLENBekNxQixBQVUvQixDQUpxQixHQU9VLENBWW5CLENBOUJPLEVBMkNuQixBQUlBLFFBaEJ3QixLQW5CeEIsR0FYVyxVQUNLLEFBaUJvQixlQWhCVixvQkFpQlosS0FoQmQsUUFpQm9CLG1CQUNELGNBVUYsSUFUTixVQUNELEVBU1YsT0FSK0IsbUdBQ1gsbUJBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBBbGVydCBmcm9tICcuL0FsZXJ0JztcbmltcG9ydCB7IHNldFByb3ZpZGVycywgdXNlTG9naW4sIHVzZUF1dGhFcnJvciB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmxldCBlbWFpbCwgbmFtZSwgcGFzcztcblxuY29uc3QgRm9ybXMgPSAoKSA9PiB7XG4gIGxldCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSh7IHN3aXRjaEM6IGZhbHNlLCBhbGVydDogZmFsc2UgfSk7XG4gIGxldCByZWdUZXh0ID0gIWFjY291bnQuc3dpdGNoQyA/IFwiQ3JlYXIgQ3VlbnRhXCIgOiBcIkluaWNpYXIgU2VzacOzblwiO1xuICBzZXRQcm92aWRlcnMoKTtcblxuICBjb25zdCB2YWx1ZSA9IGRhdGEgPT4ge1xuICAgIGlmIChkYXRhLm5hbWUgPT09IFwiZW1haWxcIikgZW1haWwgPSBkYXRhLnRleHQ7XG4gICAgZWxzZSBpZiAoZGF0YS5uYW1lID09PSBcIm5hbWVcIikgbmFtZSA9IGRhdGEudGV4dDtcbiAgICBlbHNlIGlmIChkYXRhLm5hbWUgPT09IFwicGFzc1wiKSBwYXNzID0gZGF0YS50ZXh0O1xuICB9XG5cbiAgY29uc3Qgc2hvd0FsZXJ0ID0gZGF0YSA9PiBzZXRBY2NvdW50KHsgc3dpdGNoQzogYWNjb3VudC5zd2l0Y2hDLCBhbGVydDogeyB0aXRsZTogZGF0YS50aXRsZSwgdHlwZTogZGF0YS50eXBlLCBib2R5OiB1c2VBdXRoRXJyb3IoZGF0YS5ib2R5LmNvZGUpIH0gfSk7XG5cbiAgY29uc3QgbG9ncyA9ICgpID0+IHVzZUxvZ2luKHsgdHlwZTogYWNjb3VudC5zd2l0Y2hDLCBlbWFpbCwgcGFzcywgZXJyOiBib2R5ID0+IHNob3dBbGVydCh7IHRpdGxlOiBcIk9jdXJyaW8gdW4gZXJyb3JcIiwgYm9keSwgdHlwZTogXCJlcnJvclwiIH0pIH0pXG4gIGNvbnN0IGZibG9nID0gKCkgPT4gdXNlTG9naW4oeyB0eXBlOiBcImZiXCIsIGVycjogYm9keSA9PiBzaG93QWxlcnQoeyB0aXRsZTogXCJPY3VycmlvIHVuIGVycm9yXCIsIGJvZHksIHR5cGU6IFwiZXJyb3JcIiB9KSB9KVxuICBjb25zdCBnbG9nID0gKCkgPT4gdXNlTG9naW4oeyB0eXBlOiBcImdcIiwgZXJyOiBib2R5ID0+IHNob3dBbGVydCh7IHRpdGxlOiBcIk9jdXJyaW8gdW4gZXJyb3JcIiwgYm9keSwgdHlwZTogXCJlcnJvclwiIH0pIH0pXG4gIGNvbnN0IHJlZ1N3aXRjaCA9ICgpID0+IHNldEFjY291bnQoeyBzd2l0Y2hDOiAhYWNjb3VudC5zd2l0Y2hDLCBhbGVydDogYWNjb3VudC5hbGVydCB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QWxlcnQgey4uLmFjY291bnQuYWxlcnR9IC8+XG4gICAgICA8ZGl2IGlkPVwiZm9ybVwiPlxuICAgICAgICA8aDI+Q29uZWN0YXRlIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2FjaGVkPC9pPjwvaDI+XG4gICAgICAgIDxwPlJlZ2lzdHJhdGUgZGUgZm9ybWEgZ3JhdHVpdGEsIHB1ZWRlcyB1dGlsaXphciBlbCBtw6l0b2RvIHF1ZSBwcmVmaWVyYXMgcGFyYSBjb25lY3RhcnRlLCB0ZW5lciBjdWVudGEgdGllbmUgbXVjaG9zIGJlbmVmaWNpb3MuIPCfkYw8L3A+XG4gICAgICAgIDxwPsK/e2FjY291bnQuc3dpdGNoQyA/IFwieWFcIiA6IFwibm9cIn0gdGllbmVzIHVuYSBjdWVudGE/IDxidXR0b24gb25DbGljaz17cmVnU3dpdGNofT57cmVnVGV4dH08L2J1dHRvbj48L3A+XG5cbiAgICAgICAgPGRpdiBpZD1cImNyZWRlbnRpYWxzXCI+XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIGxhYmVsPVwiRW1haWwgbyB0ZWzDqWZvbm9cIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17dmFsdWV9IGhlbHBlcj1cIlVzdWFyaW8gZGUgbGEgY3VlbnRhXCIgaWNvbj1cIm1haWxcIiAvPlxuICAgICAgICAgIHthY2NvdW50LnN3aXRjaEMgPyA8SW5wdXQgdHlwZT1cInRleHRcIiBsYWJlbD1cIk5vbWJyZSBkZSB1c3VhcmlvXCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17dmFsdWV9IGhlbHBlcj1cIlR1IGFwb2RvIHVuaWNvXCIgaWNvbj1cInBlcnNvblwiIC8+IDogXCJcIn1cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJDb250cmFzZcOxYVwiIG5hbWU9XCJwYXNzXCIgdmFsdWU9e3ZhbHVlfSBoZWxwZXI9XCJDbGF2ZSBzZWNyZXRhXCIgaWNvbj1cImxvY2tcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7YWNjb3VudC5zd2l0Y2hDID8gXCJcIiA6IDxwPsK/T2x2aWRhc3RlIHR1IGNvbnRyYXNlw7FhPyA8YnV0dG9uIGNsYXNzTmFtZT1cIndhdmVzIHdhdmVzLWRhcmtcIj5SZWN1cGVyYXI8L2J1dHRvbj48L3A+fVxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bG9nc30gY2xhc3NOYW1lPVwiYmx1ZSB3YXZlc1wiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2FjY291bnQuc3dpdGNoQyA/IFwicGVyc29uX2FkZFwiIDogXCJwZXJzb25cIn08L2k+e2FjY291bnQuc3dpdGNoQyA/IFwiQ3JlYXIgQ3VlbnRhXCIgOiBcIkluaWNpYXIgU2VzacOzblwifTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZibG9nfSBjbGFzc05hbWU9XCJ3YXZlcyBmYmxvZ1wiPjxpIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2tcIj48L2k+IEluaWNpYXIgY29uIEZhY2Vib29rPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z2xvZ30gY2xhc3NOYW1lPVwid2F2ZXMgZ2xvZ1wiPjxpIGNsYXNzTmFtZT1cImljb24tZ29vZ2xlXCI+PC9pPiBJbmljaWFyIGNvbiBHb29nbGU8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxhIGhyZWY9XCIuL3ByaXZhY2lkYWQucGRmXCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJQcml2YWNpZGFkXCIgY2xhc3NOYW1lPVwiYnRuIGFtYmVyIHByaXZhY3kgd2F2ZXMgd2F2ZXMtZGFya1wiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YWNjb3VudF9iYWxhbmNlPC9pPiBQb2zDrXRpY2FzIGRlIDxiciAvPnByaXZhY2lkYWQ8L2E+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2Bcblx0ICAucHJpdmFjeXtcbiAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgIG1hcmdpbi10b3A6LTEwMHB4O1xuICAgICAgICAgICAgIHotaW5kZXg6MjtcbiAgICAgICAgICAgICBmb250LXNpemU6MTNweDtcbiAgICAgICAgICAgICBjb2xvcjp2YXIoLS1iYWNrZ3JvdW5kcyk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgI2Zvcm0gPiBwIHsgY29sb3I6dmFyKC0tcGFycmFmKTsgfVxuICAgICAgICAgICAjZm9ybSA+IHA6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBwID4gYnV0dG9ue1xuICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgIGNvbG9yOnZhcigtLXBhcnJhZik7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgY29sb3I6dmFyKC0tcGFycmFmKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAjZm9ybXtcbiAgICAgICAgICAgICB3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmRzKTtcbiAgICAgICAgICAgICBib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgdG9wOi01MHB4O1xuICAgICAgICAgICAgIGxlZnQ6NTAlO1xuICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NjBweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAjZm9ybSA+IGJ1dHRvbntcbiAgICAgICAgICAgICBjb2xvcjp2YXIoLS1iYWNrZ3JvdW5kcyk7XG4gICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAjY3JlZGVudGlhbHN7XG4gICAgICAgICAgICAgbWFyZ2luLXRvcDotMTBweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBidXR0b24gc3Zne1xuICAgICAgICAgICAgIG1hcmdpbjozMHB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYmxvZ3tcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMzYjU5OTg7XG4gICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmdsb2d7XG4gICAgICAgICAgICAgYmFja2dyb3VuZDojRDQ0NjM4O1xuICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICB9XG4gICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtcztcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ernesto\\\\Desktop\\\\iBox\\\\components\\\\Forms.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ })

})
//# sourceMappingURL=cuenta.js.1d0f90e60168c0f52695.hot-update.js.map