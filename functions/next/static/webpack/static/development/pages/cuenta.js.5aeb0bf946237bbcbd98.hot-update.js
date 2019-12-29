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
  }, ".privacy.jsx-21934034{position:absolute;right:0;margin-top:-100px;z-index:2;font-size:13px;color:var(--backgrounds);}#form.jsx-21934034>p.jsx-21934034{color:var(--parraf);}#form.jsx-21934034>p.jsx-21934034:nth-child(5){text-align:center;}p.jsx-21934034>button.jsx-21934034{display:inline-block;color:var(--parraf);}h2.jsx-21934034{color:var(--parraf);}#form.jsx-21934034{width:calc(100% - 40px);background:var(--backgrounds);box-shadow:0 0 10px rgba(0,0,0,.2);padding:20px;border-radius:10px;position:relative;top:-50px;left:50%;-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);margin-bottom:60px;}#form.jsx-21934034>button.jsx-21934034{color:var(--backgrounds);width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;}#credentials.jsx-21934034{margin-top:-10px;}button.jsx-21934034 svg.jsx-21934034{margin:30px;}.fblog.jsx-21934034{background:#3b5998;margin:0;}.glog.jsx-21934034{background:#D44638;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURrQixBQUcrQixBQU9XLEFBRVgsQUFHRyxBQUlELEFBR0ksQUFZQyxBQU1SLEFBR0wsQUFHTyxBQUlBLFlBTnBCLEtBSEEsQ0FyQ1MsQUFTVCxDQWtDVSxBQUlBLENBekNxQixBQVUvQixDQUpxQixHQU9VLENBWW5CLENBOUJPLEVBMkNuQixBQUlBLFFBaEJ3QixLQW5CeEIsR0FYVyxVQUNLLEFBaUJvQixlQWhCVixvQkFpQlosS0FoQmQsUUFpQm9CLG1CQUNELGNBVUYsSUFUTixVQUNELEVBU1YsT0FSK0IsbUdBQ1gsbUJBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBBbGVydCBmcm9tICcuL0FsZXJ0JztcbmltcG9ydCB7IHNldFByb3ZpZGVycywgdXNlTG9naW4sIHVzZUF1dGhFcnJvciB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmxldCBlbWFpbCwgbmFtZSwgcGFzcztcblxuY29uc3QgRm9ybXMgPSAoKSA9PiB7XG4gIGxldCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSh7IHN3aXRjaEM6IGZhbHNlLCBhbGVydDogZmFsc2UgfSk7XG4gIGxldCByZWdUZXh0ID0gIWFjY291bnQuc3dpdGNoQyA/IFwiQ3JlYXIgQ3VlbnRhXCIgOiBcIkluaWNpYXIgU2VzacOzblwiO1xuICBzZXRQcm92aWRlcnMoKTtcblxuICBjb25zdCB2YWx1ZSA9IGRhdGEgPT4ge1xuICAgIGlmIChkYXRhLm5hbWUgPT09IFwiZW1haWxcIikgZW1haWwgPSBkYXRhLnRleHQ7XG4gICAgZWxzZSBpZiAoZGF0YS5uYW1lID09PSBcIm5hbWVcIikgbmFtZSA9IGRhdGEudGV4dDtcbiAgICBlbHNlIGlmIChkYXRhLm5hbWUgPT09IFwicGFzc1wiKSBwYXNzID0gZGF0YS50ZXh0O1xuICB9XG5cbiAgY29uc3Qgc2hvd0FsZXJ0ID0gZGF0YSA9PiBzZXRBY2NvdW50KHsgc3dpdGNoQzogYWNjb3VudC5zd2l0Y2hDLCBhbGVydDogZGF0YT97IHRpdGxlOiBkYXRhLnRpdGxlLCB0eXBlOiBkYXRhLnR5cGUsIGJvZHk6IHVzZUF1dGhFcnJvcihkYXRhLmJvZHkuY29kZSkgfTpmYWxzZX0pO1xuXG4gIGNvbnN0IGxvZ3MgPSAoKSA9PiB1c2VMb2dpbih7IHR5cGU6IGFjY291bnQuc3dpdGNoQywgZW1haWwsIHBhc3MsIGVycjogYm9keSA9PiBzaG93QWxlcnQoeyB0aXRsZTogXCJPY3VycmlvIHVuIGVycm9yXCIsIGJvZHksIHR5cGU6IFwiZXJyb3JcIiB9KSB9KVxuICBjb25zdCBmYmxvZyA9ICgpID0+IHVzZUxvZ2luKHsgdHlwZTogXCJmYlwiLCBlcnI6IGJvZHkgPT4gc2hvd0FsZXJ0KHsgdGl0bGU6IFwiT2N1cnJpbyB1biBlcnJvclwiLCBib2R5LCB0eXBlOiBcImVycm9yXCIgfSkgfSlcbiAgY29uc3QgZ2xvZyA9ICgpID0+IHVzZUxvZ2luKHsgdHlwZTogXCJnXCIsIGVycjogYm9keSA9PiBzaG93QWxlcnQoeyB0aXRsZTogXCJPY3VycmlvIHVuIGVycm9yXCIsIGJvZHksIHR5cGU6IFwiZXJyb3JcIiB9KSB9KVxuICBjb25zdCByZWdTd2l0Y2ggPSAoKSA9PiBzZXRBY2NvdW50KHsgc3dpdGNoQzogIWFjY291bnQuc3dpdGNoQywgYWxlcnQ6IGFjY291bnQuYWxlcnQgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2FjY291bnQuYWxlcnQgJiYgPEFsZXJ0IHsuLi5hY2NvdW50LmFsZXJ0fSBoaWRlQWxlcnQ9e3Nob3dBbGVydH0vPn1cbiAgICAgIDxkaXYgaWQ9XCJmb3JtXCI+XG4gICAgICAgIDxoMj5Db25lY3RhdGUgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jYWNoZWQ8L2k+PC9oMj5cbiAgICAgICAgPHA+UmVnaXN0cmF0ZSBkZSBmb3JtYSBncmF0dWl0YSwgcHVlZGVzIHV0aWxpemFyIGVsIG3DqXRvZG8gcXVlIHByZWZpZXJhcyBwYXJhIGNvbmVjdGFydGUsIHRlbmVyIGN1ZW50YSB0aWVuZSBtdWNob3MgYmVuZWZpY2lvcy4g8J+RjDwvcD5cbiAgICAgICAgPHA+wr97YWNjb3VudC5zd2l0Y2hDID8gXCJ5YVwiIDogXCJub1wifSB0aWVuZXMgdW5hIGN1ZW50YT8gPGJ1dHRvbiBvbkNsaWNrPXtyZWdTd2l0Y2h9PntyZWdUZXh0fTwvYnV0dG9uPjwvcD5cblxuICAgICAgICA8ZGl2IGlkPVwiY3JlZGVudGlhbHNcIj5cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbGFiZWw9XCJFbWFpbCBvIHRlbMOpZm9ub1wiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXt2YWx1ZX0gaGVscGVyPVwiVXN1YXJpbyBkZSBsYSBjdWVudGFcIiBpY29uPVwibWFpbFwiIC8+XG4gICAgICAgICAge2FjY291bnQuc3dpdGNoQyA/IDxJbnB1dCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiTm9tYnJlIGRlIHVzdWFyaW9cIiBuYW1lPVwibmFtZVwiIHZhbHVlPXt2YWx1ZX0gaGVscGVyPVwiVHUgYXBvZG8gdW5pY29cIiBpY29uPVwicGVyc29uXCIgLz4gOiBcIlwifVxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIkNvbnRyYXNlw7FhXCIgbmFtZT1cInBhc3NcIiB2YWx1ZT17dmFsdWV9IGhlbHBlcj1cIkNsYXZlIHNlY3JldGFcIiBpY29uPVwibG9ja1wiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHthY2NvdW50LnN3aXRjaEMgPyBcIlwiIDogPHA+wr9PbHZpZGFzdGUgdHUgY29udHJhc2XDsWE/IDxidXR0b24gY2xhc3NOYW1lPVwid2F2ZXMgd2F2ZXMtZGFya1wiPlJlY3VwZXJhcjwvYnV0dG9uPjwvcD59XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dzfSBjbGFzc05hbWU9XCJibHVlIHdhdmVzXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57YWNjb3VudC5zd2l0Y2hDID8gXCJwZXJzb25fYWRkXCIgOiBcInBlcnNvblwifTwvaT57YWNjb3VudC5zd2l0Y2hDID8gXCJDcmVhciBDdWVudGFcIiA6IFwiSW5pY2lhciBTZXNpw7NuXCJ9PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZmJsb2d9IGNsYXNzTmFtZT1cIndhdmVzIGZibG9nXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9va1wiPjwvaT4gSW5pY2lhciBjb24gRmFjZWJvb2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnbG9nfSBjbGFzc05hbWU9XCJ3YXZlcyBnbG9nXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1nb29nbGVcIj48L2k+IEluaWNpYXIgY29uIEdvb2dsZTwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGEgaHJlZj1cIi4vcHJpdmFjaWRhZC5wZGZcIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIlByaXZhY2lkYWRcIiBjbGFzc05hbWU9XCJidG4gYW1iZXIgcHJpdmFjeSB3YXZlcyB3YXZlcy1kYXJrXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hY2NvdW50X2JhbGFuY2U8L2k+IFBvbMOtdGljYXMgZGUgPGJyIC8+cHJpdmFjaWRhZDwvYT5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuXHQgIC5wcml2YWN5e1xuICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICAgbWFyZ2luLXRvcDotMTAwcHg7XG4gICAgICAgICAgICAgei1pbmRleDoyO1xuICAgICAgICAgICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgICAgICAgICAgIGNvbG9yOnZhcigtLWJhY2tncm91bmRzKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAjZm9ybSA+IHAgeyBjb2xvcjp2YXIoLS1wYXJyYWYpOyB9XG4gICAgICAgICAgICNmb3JtID4gcDpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHAgPiBidXR0b257XG4gICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgY29sb3I6dmFyKC0tcGFycmFmKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBoMntcbiAgICAgICAgICAgICBjb2xvcjp2YXIoLS1wYXJyYWYpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgICNmb3Jte1xuICAgICAgICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICAgICAgIGJhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZHMpO1xuICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICB0b3A6LTUwcHg7XG4gICAgICAgICAgICAgbGVmdDo1MCU7XG4gICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgICNmb3JtID4gYnV0dG9ue1xuICAgICAgICAgICAgIGNvbG9yOnZhcigtLWJhY2tncm91bmRzKTtcbiAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgICNjcmVkZW50aWFsc3tcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOi0xMHB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIGJ1dHRvbiBzdmd7XG4gICAgICAgICAgICAgbWFyZ2luOjMwcHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZibG9ne1xuICAgICAgICAgICAgIGJhY2tncm91bmQ6IzNiNTk5ODtcbiAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZ2xvZ3tcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNENDQ2Mzg7XG4gICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgIH1cbiAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1zO1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\ernesto\\\\Desktop\\\\iBox\\\\components\\\\Forms.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ })

})
//# sourceMappingURL=cuenta.js.5aeb0bf946237bbcbd98.hot-update.js.map