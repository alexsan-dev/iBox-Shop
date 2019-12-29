webpackHotUpdate("static\\development\\pages\\cuenta.js",{

/***/ "./components/Alert.js":
/*!*****************************!*\
  !*** ./components/Alert.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\Alert.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Alert = props => {
  const type = props.type;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "alertShadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("div", {
    className: "alerContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.body), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, type === "confirmation" ? __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Cancelar") : "", __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Aceptar"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

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
    0: newAccount,
    1: setAccount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let regText = !newAccount ? "Crear Cuenta" : "Iniciar Sesión";
  Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["setProviders"])();

  const value = data => {
    if (data.name === "email") email = data.text;else if (data.name === "email") name = data.text;else if (data.name === "pass") pass = data.text;
  };

  const logs = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["useLogin"])(newAccount, email, pass);

  const fblog = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["useLogin"])("fb");

  const glog = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["useLogin"])("g");

  const regSwitch = () => setAccount(!newAccount);

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {});
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "form",
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Conectate ", __jsx("i", {
    className: "jsx-21934034" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "cached")), __jsx("p", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Registrate de forma gratuita, puedes utilizar el m\xE9todo que prefieras para conectarte, tener cuenta tiene muchos beneficios. \uD83D\uDC4C"), __jsx("p", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "\xBF", newAccount ? "ya" : "no", " tienes una cuenta? ", __jsx("button", {
    onClick: regSwitch,
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, regText)), __jsx("div", {
    id: "credentials",
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
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
      lineNumber: 37
    },
    __self: undefined
  }), newAccount ? __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "text",
    label: "Nombre de usuario",
    name: "name",
    value: value,
    helper: "Tu apodo unico",
    icon: "person",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
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
      lineNumber: 39
    },
    __self: undefined
  })), newAccount ? "" : __jsx("p", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "\xBFOlvidaste tu contrase\xF1a? ", __jsx("button", {
    className: "jsx-21934034" + " " + "waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Recuperar")), __jsx("button", {
    onClick: logs,
    className: "jsx-21934034" + " " + "blue waves",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-21934034" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, newAccount ? "person_add" : "person"), newAccount ? "Crear Cuenta" : "Iniciar Sesión"), __jsx("button", {
    onClick: fblog,
    className: "jsx-21934034" + " " + "waves fblog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-21934034" + " " + "icon-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), " Iniciar con Facebook"), __jsx("button", {
    onClick: glog,
    className: "jsx-21934034" + " " + "waves glog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-21934034" + " " + "icon-google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), " Iniciar con Google")), __jsx("a", {
    href: "./privacidad.pdf",
    target: "_blank",
    title: "Privacidad",
    className: "jsx-21934034" + " " + "btn amber privacy waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-21934034" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "account_balance"), " Pol\xEDticas de ", __jsx("br", {
    className: "jsx-21934034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), "privacidad"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "21934034",
    __self: undefined
  }, ".privacy.jsx-21934034{position:absolute;right:0;margin-top:-100px;z-index:2;font-size:13px;color:var(--backgrounds);}#form.jsx-21934034>p.jsx-21934034{color:var(--parraf);}#form.jsx-21934034>p.jsx-21934034:nth-child(5){text-align:center;}p.jsx-21934034>button.jsx-21934034{display:inline-block;color:var(--parraf);}h2.jsx-21934034{color:var(--parraf);}#form.jsx-21934034{width:calc(100% - 40px);background:var(--backgrounds);box-shadow:0 0 10px rgba(0,0,0,.2);padding:20px;border-radius:10px;position:relative;top:-50px;left:50%;-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);margin-bottom:60px;}#form.jsx-21934034>button.jsx-21934034{color:var(--backgrounds);width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;}#credentials.jsx-21934034{margin-top:-10px;}button.jsx-21934034 svg.jsx-21934034{margin:30px;}.fblog.jsx-21934034{background:#3b5998;margin:0;}.glog.jsx-21934034{background:#D44638;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURrQixBQUcrQixBQU9XLEFBRVgsQUFHRyxBQUlELEFBR0ksQUFZQyxBQU1SLEFBR0wsQUFHTyxBQUlBLFlBTnBCLEtBSEEsQ0FyQ1MsQUFTVCxDQWtDVSxBQUlBLENBekNxQixBQVUvQixDQUpxQixHQU9VLENBWW5CLENBOUJPLEVBMkNuQixBQUlBLFFBaEJ3QixLQW5CeEIsR0FYVyxVQUNLLEFBaUJvQixlQWhCVixvQkFpQlosS0FoQmQsUUFpQm9CLG1CQUNELGNBVUYsSUFUTixVQUNELEVBU1YsT0FSK0IsbUdBQ1gsbUJBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0JztcbmltcG9ydCB7IHNldFByb3ZpZGVycywgdXNlTG9naW4gfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5sZXQgZW1haWwsIG5hbWUsIHBhc3M7XG5cbmNvbnN0IEZvcm1zID0gcHJvcHMgPT4ge1xuICBsZXQgW25ld0FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgcmVnVGV4dCA9ICFuZXdBY2NvdW50ID8gXCJDcmVhciBDdWVudGFcIiA6IFwiSW5pY2lhciBTZXNpw7NuXCI7XG4gIHNldFByb3ZpZGVycygpO1xuXG4gIGNvbnN0IHZhbHVlID0gZGF0YSA9PiB7XG4gICAgaWYgKGRhdGEubmFtZSA9PT0gXCJlbWFpbFwiKSBlbWFpbCA9IGRhdGEudGV4dDtcbiAgICBlbHNlIGlmIChkYXRhLm5hbWUgPT09IFwiZW1haWxcIikgbmFtZSA9IGRhdGEudGV4dDtcbiAgICBlbHNlIGlmIChkYXRhLm5hbWUgPT09IFwicGFzc1wiKSBwYXNzID0gZGF0YS50ZXh0O1xuICB9XG5cbiAgY29uc3QgbG9ncyA9ICgpID0+IHVzZUxvZ2luKG5ld0FjY291bnQsIGVtYWlsLCBwYXNzKTtcbiAgY29uc3QgZmJsb2cgPSAoKSA9PiB1c2VMb2dpbihcImZiXCIpO1xuICBjb25zdCBnbG9nID0gKCkgPT4gdXNlTG9naW4oXCJnXCIpO1xuICBjb25zdCByZWdTd2l0Y2ggPSAoKSA9PiBzZXRBY2NvdW50KCFuZXdBY2NvdW50KTtcblxuICB1c2VFZmZlY3QoKCkgPT57XG5cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGlkPVwiZm9ybVwiPlxuXG4gICAgICAgIDxoMj5Db25lY3RhdGUgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jYWNoZWQ8L2k+PC9oMj5cbiAgICAgICAgPHA+UmVnaXN0cmF0ZSBkZSBmb3JtYSBncmF0dWl0YSwgcHVlZGVzIHV0aWxpemFyIGVsIG3DqXRvZG8gcXVlIHByZWZpZXJhcyBwYXJhIGNvbmVjdGFydGUsIHRlbmVyIGN1ZW50YSB0aWVuZSBtdWNob3MgYmVuZWZpY2lvcy4g8J+RjDwvcD5cbiAgICAgICAgPHA+wr97bmV3QWNjb3VudCA/IFwieWFcIiA6IFwibm9cIn0gdGllbmVzIHVuYSBjdWVudGE/IDxidXR0b24gb25DbGljaz17cmVnU3dpdGNofT57cmVnVGV4dH08L2J1dHRvbj48L3A+XG5cbiAgICAgICAgPGRpdiBpZD1cImNyZWRlbnRpYWxzXCI+XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIGxhYmVsPVwiRW1haWwgbyB0ZWzDqWZvbm9cIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17dmFsdWV9IGhlbHBlcj1cIlVzdWFyaW8gZGUgbGEgY3VlbnRhXCIgaWNvbj1cIm1haWxcIiAvPlxuICAgICAgICAgIHtuZXdBY2NvdW50ID8gPElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJOb21icmUgZGUgdXN1YXJpb1wiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e3ZhbHVlfSBoZWxwZXI9XCJUdSBhcG9kbyB1bmljb1wiIGljb249XCJwZXJzb25cIiAvPiA6IFwiXCJ9XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIGxhYmVsPVwiQ29udHJhc2XDsWFcIiBuYW1lPVwicGFzc1wiIHZhbHVlPXt2YWx1ZX0gaGVscGVyPVwiQ2xhdmUgc2VjcmV0YVwiIGljb249XCJsb2NrXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge25ld0FjY291bnQgPyBcIlwiIDogPHA+wr9PbHZpZGFzdGUgdHUgY29udHJhc2XDsWE/IDxidXR0b24gY2xhc3NOYW1lPVwid2F2ZXMgd2F2ZXMtZGFya1wiPlJlY3VwZXJhcjwvYnV0dG9uPjwvcD59XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dzfSBjbGFzc05hbWU9XCJibHVlIHdhdmVzXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57bmV3QWNjb3VudCA/IFwicGVyc29uX2FkZFwiIDogXCJwZXJzb25cIn08L2k+e25ld0FjY291bnQgPyBcIkNyZWFyIEN1ZW50YVwiIDogXCJJbmljaWFyIFNlc2nDs25cIn08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmYmxvZ30gY2xhc3NOYW1lPVwid2F2ZXMgZmJsb2dcIj48aSBjbGFzc05hbWU9XCJpY29uLWZhY2Vib29rXCI+PC9pPiBJbmljaWFyIGNvbiBGYWNlYm9vazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dsb2d9IGNsYXNzTmFtZT1cIndhdmVzIGdsb2dcIj48aSBjbGFzc05hbWU9XCJpY29uLWdvb2dsZVwiPjwvaT4gSW5pY2lhciBjb24gR29vZ2xlPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YSBocmVmPVwiLi9wcml2YWNpZGFkLnBkZlwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiUHJpdmFjaWRhZFwiIGNsYXNzTmFtZT1cImJ0biBhbWJlciBwcml2YWN5IHdhdmVzIHdhdmVzLWRhcmtcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFjY291bnRfYmFsYW5jZTwvaT4gUG9sw610aWNhcyBkZSA8YnIgLz5wcml2YWNpZGFkPC9hPlxuXG4gICAgICA8c3R5bGUganN4PntgXG5cdCAgLnByaXZhY3l7XG4gICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOi0xMDBweDtcbiAgICAgICAgICAgICB6LWluZGV4OjI7XG4gICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgICAgICAgICAgY29sb3I6dmFyKC0tYmFja2dyb3VuZHMpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgICNmb3JtID4gcCB7IGNvbG9yOnZhcigtLXBhcnJhZik7IH1cbiAgICAgICAgICAgI2Zvcm0gPiBwOm50aC1jaGlsZCg1KSB7XG4gICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcCA+IGJ1dHRvbntcbiAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICBjb2xvcjp2YXIoLS1wYXJyYWYpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIGgye1xuICAgICAgICAgICAgIGNvbG9yOnZhcigtLXBhcnJhZik7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgI2Zvcm17XG4gICAgICAgICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICAgYmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kcyk7XG4gICAgICAgICAgICAgYm94LXNoYWRvdzowIDAgMTBweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgIHRvcDotNTBweDtcbiAgICAgICAgICAgICBsZWZ0OjUwJTtcbiAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjYwcHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgI2Zvcm0gPiBidXR0b257XG4gICAgICAgICAgICAgY29sb3I6dmFyKC0tYmFja2dyb3VuZHMpO1xuICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgI2NyZWRlbnRpYWxze1xuICAgICAgICAgICAgIG1hcmdpbi10b3A6LTEwcHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgYnV0dG9uIHN2Z3tcbiAgICAgICAgICAgICBtYXJnaW46MzBweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmJsb2d7XG4gICAgICAgICAgICAgYmFja2dyb3VuZDojM2I1OTk4O1xuICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5nbG9ne1xuICAgICAgICAgICAgIGJhY2tncm91bmQ6I0Q0NDYzODtcbiAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgfVxuICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybXM7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ernesto\\\\Desktop\\\\iBox\\\\components\\\\Forms.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ }),

/***/ "./utils/Alert/Alert.js":
false

})
//# sourceMappingURL=cuenta.js.514887d480bd34e613fa.hot-update.js.map