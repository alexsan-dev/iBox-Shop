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
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Alert */ "./components/Alert.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ "./utils/hooks.js");
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\Forms.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




let email, name, pass;

const Forms = props => {
  let {
    0: account,
    1: setAccount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    switch: false,
    alert: null
  });
  let regText = !account.switch ? "Crear Cuenta" : "Iniciar Sesión";
  Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["setProviders"])();

  const value = data => {
    if (data.name === "email") email = data.text;else if (data.name === "email") name = data.text;else if (data.name === "pass") pass = data.text;
  };

  const showAlert = data => {
    setAccount({
      switch: account.switch,
      alert: __jsx(_components_Alert__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: data.title,
        body: data.body,
        type: data.type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: undefined
      })
    });
  };

  const logs = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["useLogin"])(account.switch, email, pass).catch(body => showAlert({
    title: "Ocurrio un error",
    body,
    type: ërror
  }));

  const fblog = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["useLogin"])("fb").catch(body => showAlert({
    title: "Ocurrio un error",
    body,
    type: ërror
  }));

  const glog = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["useLogin"])("g").catch(body => showAlert({
    title: "Ocurrio un error",
    body,
    type: ërror
  }));

  const regSwitch = () => setAccount({
    switch: !account.switch,
    alert: account.alert
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "form",
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Conectate ", __jsx("i", {
    className: "jsx-21934034" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "cached")), __jsx("p", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Registrate de forma gratuita, puedes utilizar el m\xE9todo que prefieras para conectarte, tener cuenta tiene muchos beneficios. \uD83D\uDC4C"), __jsx("p", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "\xBF", account.switch ? "ya" : "no", " tienes una cuenta? ", __jsx("button", {
    onClick: regSwitch,
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, regText)), account.alert, __jsx("div", {
    id: "credentials",
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
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
      lineNumber: 40
    },
    __self: undefined
  }), account.switch ? __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "text",
    label: "Nombre de usuario",
    name: "name",
    value: value,
    helper: "Tu apodo unico",
    icon: "person",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
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
      lineNumber: 42
    },
    __self: undefined
  })), account.switch ? "" : __jsx("p", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "\xBFOlvidaste tu contrase\xF1a? ", __jsx("button", {
    className: "jsx-21934034" + " " + "waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Recuperar")), __jsx("button", {
    onClick: logs,
    className: "jsx-21934034" + " " + "blue waves",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-21934034" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, account.switch ? "person_add" : "person"), account.switch ? "Crear Cuenta" : "Iniciar Sesión"), __jsx("button", {
    onClick: fblog,
    className: "jsx-21934034" + " " + "waves fblog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-21934034" + " " + "icon-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), " Iniciar con Facebook"), __jsx("button", {
    onClick: glog,
    className: "jsx-21934034" + " " + "waves glog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-21934034" + " " + "icon-google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), " Iniciar con Google")), __jsx("a", {
    href: "./privacidad.pdf",
    target: "_blank",
    title: "Privacidad",
    className: "jsx-21934034" + " " + "btn amber privacy waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-21934034" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "account_balance"), " Pol\xEDticas de ", __jsx("br", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), "privacidad"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "21934034",
    __self: undefined
  }, ".privacy.jsx-21934034{position:absolute;right:0;margin-top:-100px;z-index:2;font-size:13px;color:var(--backgrounds);}#form.jsx-21934034>p.jsx-21934034{color:var(--parraf);}#form.jsx-21934034>p.jsx-21934034:nth-child(5){text-align:center;}p.jsx-21934034>button.jsx-21934034{display:inline-block;color:var(--parraf);}h2.jsx-21934034{color:var(--parraf);}#form.jsx-21934034{width:calc(100% - 40px);background:var(--backgrounds);box-shadow:0 0 10px rgba(0,0,0,.2);padding:20px;border-radius:10px;position:relative;top:-50px;left:50%;-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);margin-bottom:60px;}#form.jsx-21934034>button.jsx-21934034{color:var(--backgrounds);width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;}#credentials.jsx-21934034{margin-top:-10px;}button.jsx-21934034 svg.jsx-21934034{margin:30px;}.fblog.jsx-21934034{background:#3b5998;margin:0;}.glog.jsx-21934034{background:#D44638;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RrQixBQUcrQixBQU9XLEFBRVgsQUFHRyxBQUlELEFBR0ksQUFZQyxBQU1SLEFBR0wsQUFHTyxBQUlBLFlBTnBCLEtBSEEsQ0FyQ1MsQUFTVCxDQWtDVSxBQUlBLENBekNxQixBQVUvQixDQUpxQixHQU9VLENBWW5CLENBOUJPLEVBMkNuQixBQUlBLFFBaEJ3QixLQW5CeEIsR0FYVyxVQUNLLEFBaUJvQixlQWhCVixvQkFpQlosS0FoQmQsUUFpQm9CLG1CQUNELGNBVUYsSUFUTixVQUNELEVBU1YsT0FSK0IsbUdBQ1gsbUJBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0JztcbmltcG9ydCB7IHNldFByb3ZpZGVycywgdXNlTG9naW4gfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5sZXQgZW1haWwsIG5hbWUsIHBhc3M7XG5cbmNvbnN0IEZvcm1zID0gcHJvcHMgPT4ge1xuICBsZXQgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoe3N3aXRjaDpmYWxzZSwgYWxlcnQ6bnVsbH0pO1xuICBsZXQgcmVnVGV4dCA9ICFhY2NvdW50LnN3aXRjaCA/IFwiQ3JlYXIgQ3VlbnRhXCIgOiBcIkluaWNpYXIgU2VzacOzblwiO1xuICBzZXRQcm92aWRlcnMoKTtcblxuICBjb25zdCB2YWx1ZSA9IGRhdGEgPT4ge1xuICAgIGlmIChkYXRhLm5hbWUgPT09IFwiZW1haWxcIikgZW1haWwgPSBkYXRhLnRleHQ7XG4gICAgZWxzZSBpZiAoZGF0YS5uYW1lID09PSBcImVtYWlsXCIpIG5hbWUgPSBkYXRhLnRleHQ7XG4gICAgZWxzZSBpZiAoZGF0YS5uYW1lID09PSBcInBhc3NcIikgcGFzcyA9IGRhdGEudGV4dDtcbiAgfVxuXG4gIGNvbnN0IHNob3dBbGVydCA9IGRhdGEgPT4ge1xuICAgIHNldEFjY291bnQoe1xuICAgICAgc3dpdGNoOmFjY291bnQuc3dpdGNoLFxuICAgICAgYWxlcnQ6PEFsZXJ0IHRpdGxlPXtkYXRhLnRpdGxlfSBib2R5PXtkYXRhLmJvZHl9IHR5cGU9e2RhdGEudHlwZX0vPlxuICAgIH0pXG4gIH1cblxuICBjb25zdCBsb2dzID0gKCkgPT4gdXNlTG9naW4oYWNjb3VudC5zd2l0Y2gsIGVtYWlsLCBwYXNzKS5jYXRjaChib2R5ID0+IHNob3dBbGVydCh7dGl0bGU6XCJPY3VycmlvIHVuIGVycm9yXCIsIGJvZHksIHR5cGU6w6tycm9yfSkpO1xuICBjb25zdCBmYmxvZyA9ICgpID0+IHVzZUxvZ2luKFwiZmJcIikuY2F0Y2goYm9keSA9PiBzaG93QWxlcnQoe3RpdGxlOlwiT2N1cnJpbyB1biBlcnJvclwiLCBib2R5LCB0eXBlOsOrcnJvcn0pKTtcbiAgY29uc3QgZ2xvZyA9ICgpID0+IHVzZUxvZ2luKFwiZ1wiKS5jYXRjaChib2R5ID0+IHNob3dBbGVydCh7dGl0bGU6XCJPY3VycmlvIHVuIGVycm9yXCIsIGJvZHksIHR5cGU6w6tycm9yfSkpO1xuICBjb25zdCByZWdTd2l0Y2ggPSAoKSA9PiBzZXRBY2NvdW50KHtzd2l0Y2g6IWFjY291bnQuc3dpdGNoLCBhbGVydDphY2NvdW50LmFsZXJ0fSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBpZD1cImZvcm1cIj5cblxuICAgICAgICA8aDI+Q29uZWN0YXRlIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2FjaGVkPC9pPjwvaDI+XG4gICAgICAgIDxwPlJlZ2lzdHJhdGUgZGUgZm9ybWEgZ3JhdHVpdGEsIHB1ZWRlcyB1dGlsaXphciBlbCBtw6l0b2RvIHF1ZSBwcmVmaWVyYXMgcGFyYSBjb25lY3RhcnRlLCB0ZW5lciBjdWVudGEgdGllbmUgbXVjaG9zIGJlbmVmaWNpb3MuIPCfkYw8L3A+XG4gICAgICAgIDxwPsK/e2FjY291bnQuc3dpdGNoPyBcInlhXCIgOiBcIm5vXCJ9IHRpZW5lcyB1bmEgY3VlbnRhPyA8YnV0dG9uIG9uQ2xpY2s9e3JlZ1N3aXRjaH0+e3JlZ1RleHR9PC9idXR0b24+PC9wPlxuICAgICAgICB7YWNjb3VudC5hbGVydH1cbiAgICAgICAgPGRpdiBpZD1cImNyZWRlbnRpYWxzXCI+XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIGxhYmVsPVwiRW1haWwgbyB0ZWzDqWZvbm9cIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17dmFsdWV9IGhlbHBlcj1cIlVzdWFyaW8gZGUgbGEgY3VlbnRhXCIgaWNvbj1cIm1haWxcIiAvPlxuICAgICAgICAgIHthY2NvdW50LnN3aXRjaD8gPElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJOb21icmUgZGUgdXN1YXJpb1wiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e3ZhbHVlfSBoZWxwZXI9XCJUdSBhcG9kbyB1bmljb1wiIGljb249XCJwZXJzb25cIiAvPiA6IFwiXCJ9XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIGxhYmVsPVwiQ29udHJhc2XDsWFcIiBuYW1lPVwicGFzc1wiIHZhbHVlPXt2YWx1ZX0gaGVscGVyPVwiQ2xhdmUgc2VjcmV0YVwiIGljb249XCJsb2NrXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2FjY291bnQuc3dpdGNoPyBcIlwiIDogPHA+wr9PbHZpZGFzdGUgdHUgY29udHJhc2XDsWE/IDxidXR0b24gY2xhc3NOYW1lPVwid2F2ZXMgd2F2ZXMtZGFya1wiPlJlY3VwZXJhcjwvYnV0dG9uPjwvcD59XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dzfSBjbGFzc05hbWU9XCJibHVlIHdhdmVzXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57YWNjb3VudC5zd2l0Y2ggPyBcInBlcnNvbl9hZGRcIiA6IFwicGVyc29uXCJ9PC9pPnthY2NvdW50LnN3aXRjaCA/IFwiQ3JlYXIgQ3VlbnRhXCIgOiBcIkluaWNpYXIgU2VzacOzblwifTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZibG9nfSBjbGFzc05hbWU9XCJ3YXZlcyBmYmxvZ1wiPjxpIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2tcIj48L2k+IEluaWNpYXIgY29uIEZhY2Vib29rPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z2xvZ30gY2xhc3NOYW1lPVwid2F2ZXMgZ2xvZ1wiPjxpIGNsYXNzTmFtZT1cImljb24tZ29vZ2xlXCI+PC9pPiBJbmljaWFyIGNvbiBHb29nbGU8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxhIGhyZWY9XCIuL3ByaXZhY2lkYWQucGRmXCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJQcml2YWNpZGFkXCIgY2xhc3NOYW1lPVwiYnRuIGFtYmVyIHByaXZhY3kgd2F2ZXMgd2F2ZXMtZGFya1wiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YWNjb3VudF9iYWxhbmNlPC9pPiBQb2zDrXRpY2FzIGRlIDxiciAvPnByaXZhY2lkYWQ8L2E+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2Bcblx0ICAucHJpdmFjeXtcbiAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgIG1hcmdpbi10b3A6LTEwMHB4O1xuICAgICAgICAgICAgIHotaW5kZXg6MjtcbiAgICAgICAgICAgICBmb250LXNpemU6MTNweDtcbiAgICAgICAgICAgICBjb2xvcjp2YXIoLS1iYWNrZ3JvdW5kcyk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgI2Zvcm0gPiBwIHsgY29sb3I6dmFyKC0tcGFycmFmKTsgfVxuICAgICAgICAgICAjZm9ybSA+IHA6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBwID4gYnV0dG9ue1xuICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgIGNvbG9yOnZhcigtLXBhcnJhZik7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgY29sb3I6dmFyKC0tcGFycmFmKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAjZm9ybXtcbiAgICAgICAgICAgICB3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmRzKTtcbiAgICAgICAgICAgICBib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgdG9wOi01MHB4O1xuICAgICAgICAgICAgIGxlZnQ6NTAlO1xuICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NjBweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAjZm9ybSA+IGJ1dHRvbntcbiAgICAgICAgICAgICBjb2xvcjp2YXIoLS1iYWNrZ3JvdW5kcyk7XG4gICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAjY3JlZGVudGlhbHN7XG4gICAgICAgICAgICAgbWFyZ2luLXRvcDotMTBweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBidXR0b24gc3Zne1xuICAgICAgICAgICAgIG1hcmdpbjozMHB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYmxvZ3tcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMzYjU5OTg7XG4gICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmdsb2d7XG4gICAgICAgICAgICAgYmFja2dyb3VuZDojRDQ0NjM4O1xuICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICB9XG4gICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtcztcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ernesto\\\\Desktop\\\\iBox\\\\components\\\\Forms.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ })

})
//# sourceMappingURL=cuenta.js.41d24060c53bb0d8bdee.hot-update.js.map