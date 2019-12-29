webpackHotUpdate("static\\development\\pages\\cuenta.js",{

/***/ "./components/Forms.js":
/*!*****************************!*\
  !*** ./components/Forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/Input.js");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Alert */ "./components/Alert.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ "./utils/hooks.js");
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\Forms.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




let email, name, pass;

const Forms = props => {
  let {
    0: account,
    1: setAccount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    switchC: false,
    alert: false
  });
  let regText = !account.switchC ? "Crear Cuenta" : "Iniciar Sesión";
  Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["setProviders"])();

  const value = data => {
    if (data.name === "email") email = data.text;else if (data.name === "email") name = data.text;else if (data.name === "pass") pass = data.text;
  };

  const showAlert = alert => setAccount({
    switchC: account.switch,
    alert
  });

  const logs = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["useLogin"])({
    type: account.switchC,
    email,
    pass,
    err: body => showAlert({
      title: "Ocurrio un error",
      body,
      type: "error"
    })
  });

  const fblog = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["useLogin"])({
    type: "fb",
    err: body => showAlert({
      title: "Ocurrio un error",
      body,
      type: "error"
    })
  });

  const glog = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["useLogin"])({
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "form",
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
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
  }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }), account.switchC ? __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }) : "", __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }), "privacidad"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "21934034",
    __self: undefined
  }, ".privacy.jsx-21934034{position:absolute;right:0;margin-top:-100px;z-index:2;font-size:13px;color:var(--backgrounds);}#form.jsx-21934034>p.jsx-21934034{color:var(--parraf);}#form.jsx-21934034>p.jsx-21934034:nth-child(5){text-align:center;}p.jsx-21934034>button.jsx-21934034{display:inline-block;color:var(--parraf);}h2.jsx-21934034{color:var(--parraf);}#form.jsx-21934034{width:calc(100% - 40px);background:var(--backgrounds);box-shadow:0 0 10px rgba(0,0,0,.2);padding:20px;border-radius:10px;position:relative;top:-50px;left:50%;-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);margin-bottom:60px;}#form.jsx-21934034>button.jsx-21934034{color:var(--backgrounds);width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;}#credentials.jsx-21934034{margin-top:-10px;}button.jsx-21934034 svg.jsx-21934034{margin:30px;}.fblog.jsx-21934034{background:#3b5998;margin:0;}.glog.jsx-21934034{background:#D44638;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURrQixBQUcrQixBQU9XLEFBRVgsQUFHRyxBQUlELEFBR0ksQUFZQyxBQU1SLEFBR0wsQUFHTyxBQUlBLFlBTnBCLEtBSEEsQ0FyQ1MsQUFTVCxDQWtDVSxBQUlBLENBekNxQixBQVUvQixDQUpxQixHQU9VLENBWW5CLENBOUJPLEVBMkNuQixBQUlBLFFBaEJ3QixLQW5CeEIsR0FYVyxVQUNLLEFBaUJvQixlQWhCVixvQkFpQlosS0FoQmQsUUFpQm9CLG1CQUNELGNBVUYsSUFUTixVQUNELEVBU1YsT0FSK0IsbUdBQ1gsbUJBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBBbGVydCBmcm9tICcuL0FsZXJ0JztcbmltcG9ydCB7IHNldFByb3ZpZGVycywgdXNlTG9naW4gfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5sZXQgZW1haWwsIG5hbWUsIHBhc3M7XG5cbmNvbnN0IEZvcm1zID0gcHJvcHMgPT4ge1xuICBsZXQgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoe3N3aXRjaEM6ZmFsc2UsIGFsZXJ0OmZhbHNlfSk7XG4gIGxldCByZWdUZXh0ID0gIWFjY291bnQuc3dpdGNoQyA/IFwiQ3JlYXIgQ3VlbnRhXCIgOiBcIkluaWNpYXIgU2VzacOzblwiO1xuICBzZXRQcm92aWRlcnMoKTtcblxuICBjb25zdCB2YWx1ZSA9IGRhdGEgPT4ge1xuICAgIGlmIChkYXRhLm5hbWUgPT09IFwiZW1haWxcIikgZW1haWwgPSBkYXRhLnRleHQ7XG4gICAgZWxzZSBpZiAoZGF0YS5uYW1lID09PSBcImVtYWlsXCIpIG5hbWUgPSBkYXRhLnRleHQ7XG4gICAgZWxzZSBpZiAoZGF0YS5uYW1lID09PSBcInBhc3NcIikgcGFzcyA9IGRhdGEudGV4dDtcbiAgfVxuXG4gIGNvbnN0IHNob3dBbGVydCA9IGFsZXJ0ID0+IHNldEFjY291bnQoe3N3aXRjaEM6YWNjb3VudC5zd2l0Y2gsIGFsZXJ0fSk7XG5cbiAgY29uc3QgbG9ncyA9ICgpID0+IHVzZUxvZ2luKHt0eXBlOmFjY291bnQuc3dpdGNoQywgZW1haWwsIHBhc3MsIGVycjogYm9keSA9PiBzaG93QWxlcnQoe3RpdGxlOlwiT2N1cnJpbyB1biBlcnJvclwiLCBib2R5LCB0eXBlOlwiZXJyb3JcIn0pfSlcbiAgY29uc3QgZmJsb2cgPSAoKSA9PiB1c2VMb2dpbih7dHlwZTpcImZiXCIsIGVycjogYm9keSA9PiBzaG93QWxlcnQoe3RpdGxlOlwiT2N1cnJpbyB1biBlcnJvclwiLCBib2R5LCB0eXBlOlwiZXJyb3JcIn0pfSlcbiAgY29uc3QgZ2xvZyA9ICgpID0+IHVzZUxvZ2luKHt0eXBlOlwiZ1wiLCBlcnI6IGJvZHkgPT4gc2hvd0FsZXJ0KHt0aXRsZTpcIk9jdXJyaW8gdW4gZXJyb3JcIiwgYm9keSwgdHlwZTpcImVycm9yXCJ9KX0pXG4gIGNvbnN0IHJlZ1N3aXRjaCA9ICgpID0+IHNldEFjY291bnQoe3N3aXRjaEM6IWFjY291bnQuc3dpdGNoQywgYWxlcnQ6YWNjb3VudC5hbGVydH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgaWQ9XCJmb3JtXCI+XG5cbiAgICAgICAgPGgyPkNvbmVjdGF0ZSA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNhY2hlZDwvaT48L2gyPlxuICAgICAgICA8cD5SZWdpc3RyYXRlIGRlIGZvcm1hIGdyYXR1aXRhLCBwdWVkZXMgdXRpbGl6YXIgZWwgbcOpdG9kbyBxdWUgcHJlZmllcmFzIHBhcmEgY29uZWN0YXJ0ZSwgdGVuZXIgY3VlbnRhIHRpZW5lIG11Y2hvcyBiZW5lZmljaW9zLiDwn5GMPC9wPlxuICAgICAgICA8cD7Cv3thY2NvdW50LnN3aXRjaEM/IFwieWFcIiA6IFwibm9cIn0gdGllbmVzIHVuYSBjdWVudGE/IDxidXR0b24gb25DbGljaz17cmVnU3dpdGNofT57cmVnVGV4dH08L2J1dHRvbj48L3A+XG4gICAgXG4gICAgICAgIDxkaXYgaWQ9XCJjcmVkZW50aWFsc1wiPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBsYWJlbD1cIkVtYWlsIG8gdGVsw6lmb25vXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3ZhbHVlfSBoZWxwZXI9XCJVc3VhcmlvIGRlIGxhIGN1ZW50YVwiIGljb249XCJtYWlsXCIgLz5cbiAgICAgICAgICB7YWNjb3VudC5zd2l0Y2hDPyA8SW5wdXQgdHlwZT1cInRleHRcIiBsYWJlbD1cIk5vbWJyZSBkZSB1c3VhcmlvXCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17dmFsdWV9IGhlbHBlcj1cIlR1IGFwb2RvIHVuaWNvXCIgaWNvbj1cInBlcnNvblwiIC8+IDogXCJcIn1cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJDb250cmFzZcOxYVwiIG5hbWU9XCJwYXNzXCIgdmFsdWU9e3ZhbHVlfSBoZWxwZXI9XCJDbGF2ZSBzZWNyZXRhXCIgaWNvbj1cImxvY2tcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7YWNjb3VudC5zd2l0Y2hDPyBcIlwiIDogPHA+wr9PbHZpZGFzdGUgdHUgY29udHJhc2XDsWE/IDxidXR0b24gY2xhc3NOYW1lPVwid2F2ZXMgd2F2ZXMtZGFya1wiPlJlY3VwZXJhcjwvYnV0dG9uPjwvcD59XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dzfSBjbGFzc05hbWU9XCJibHVlIHdhdmVzXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57YWNjb3VudC5zd2l0Y2hDID8gXCJwZXJzb25fYWRkXCIgOiBcInBlcnNvblwifTwvaT57YWNjb3VudC5zd2l0Y2hDID8gXCJDcmVhciBDdWVudGFcIiA6IFwiSW5pY2lhciBTZXNpw7NuXCJ9PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZmJsb2d9IGNsYXNzTmFtZT1cIndhdmVzIGZibG9nXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9va1wiPjwvaT4gSW5pY2lhciBjb24gRmFjZWJvb2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnbG9nfSBjbGFzc05hbWU9XCJ3YXZlcyBnbG9nXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1nb29nbGVcIj48L2k+IEluaWNpYXIgY29uIEdvb2dsZTwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGEgaHJlZj1cIi4vcHJpdmFjaWRhZC5wZGZcIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIlByaXZhY2lkYWRcIiBjbGFzc05hbWU9XCJidG4gYW1iZXIgcHJpdmFjeSB3YXZlcyB3YXZlcy1kYXJrXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hY2NvdW50X2JhbGFuY2U8L2k+IFBvbMOtdGljYXMgZGUgPGJyIC8+cHJpdmFjaWRhZDwvYT5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuXHQgIC5wcml2YWN5e1xuICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICAgbWFyZ2luLXRvcDotMTAwcHg7XG4gICAgICAgICAgICAgei1pbmRleDoyO1xuICAgICAgICAgICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgICAgICAgICAgIGNvbG9yOnZhcigtLWJhY2tncm91bmRzKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAjZm9ybSA+IHAgeyBjb2xvcjp2YXIoLS1wYXJyYWYpOyB9XG4gICAgICAgICAgICNmb3JtID4gcDpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHAgPiBidXR0b257XG4gICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgY29sb3I6dmFyKC0tcGFycmFmKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBoMntcbiAgICAgICAgICAgICBjb2xvcjp2YXIoLS1wYXJyYWYpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgICNmb3Jte1xuICAgICAgICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICAgICAgIGJhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZHMpO1xuICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICB0b3A6LTUwcHg7XG4gICAgICAgICAgICAgbGVmdDo1MCU7XG4gICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgICNmb3JtID4gYnV0dG9ue1xuICAgICAgICAgICAgIGNvbG9yOnZhcigtLWJhY2tncm91bmRzKTtcbiAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgICNjcmVkZW50aWFsc3tcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOi0xMHB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIGJ1dHRvbiBzdmd7XG4gICAgICAgICAgICAgbWFyZ2luOjMwcHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZibG9ne1xuICAgICAgICAgICAgIGJhY2tncm91bmQ6IzNiNTk5ODtcbiAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZ2xvZ3tcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNENDQ2Mzg7XG4gICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgIH1cbiAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1zO1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\ernesto\\\\Desktop\\\\iBox\\\\components\\\\Forms.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ })

})
//# sourceMappingURL=cuenta.js.9e7a83051ed95252fea3.hot-update.js.map