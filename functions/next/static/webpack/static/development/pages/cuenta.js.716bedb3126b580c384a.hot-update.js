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
    alert: __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    })
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
    type: "error"
  }));

  const fblog = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["useLogin"])("fb").catch(body => showAlert({
    title: "Ocurrio un error",
    body,
    type: "error"
  }));

  const glog = () => Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["useLogin"])("g").catch(body => showAlert({
    title: "Ocurrio un error",
    body,
    type: "error"
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
  }, ".privacy.jsx-21934034{position:absolute;right:0;margin-top:-100px;z-index:2;font-size:13px;color:var(--backgrounds);}#form.jsx-21934034>p.jsx-21934034{color:var(--parraf);}#form.jsx-21934034>p.jsx-21934034:nth-child(5){text-align:center;}p.jsx-21934034>button.jsx-21934034{display:inline-block;color:var(--parraf);}h2.jsx-21934034{color:var(--parraf);}#form.jsx-21934034{width:calc(100% - 40px);background:var(--backgrounds);box-shadow:0 0 10px rgba(0,0,0,.2);padding:20px;border-radius:10px;position:relative;top:-50px;left:50%;-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);margin-bottom:60px;}#form.jsx-21934034>button.jsx-21934034{color:var(--backgrounds);width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;}#credentials.jsx-21934034{margin-top:-10px;}button.jsx-21934034 svg.jsx-21934034{margin:30px;}.fblog.jsx-21934034{background:#3b5998;margin:0;}.glog.jsx-21934034{background:#D44638;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RrQixBQUcrQixBQU9XLEFBRVgsQUFHRyxBQUlELEFBR0ksQUFZQyxBQU1SLEFBR0wsQUFHTyxBQUlBLFlBTnBCLEtBSEEsQ0FyQ1MsQUFTVCxDQWtDVSxBQUlBLENBekNxQixBQVUvQixDQUpxQixHQU9VLENBWW5CLENBOUJPLEVBMkNuQixBQUlBLFFBaEJ3QixLQW5CeEIsR0FYVyxVQUNLLEFBaUJvQixlQWhCVixvQkFpQlosS0FoQmQsUUFpQm9CLG1CQUNELGNBVUYsSUFUTixVQUNELEVBU1YsT0FSK0IsbUdBQ1gsbUJBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcRm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0JztcbmltcG9ydCB7IHNldFByb3ZpZGVycywgdXNlTG9naW4gfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5sZXQgZW1haWwsIG5hbWUsIHBhc3M7XG5cbmNvbnN0IEZvcm1zID0gcHJvcHMgPT4ge1xuICBsZXQgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoe3N3aXRjaDpmYWxzZSwgYWxlcnQ6PGRpdj48L2Rpdj59KTtcbiAgbGV0IHJlZ1RleHQgPSAhYWNjb3VudC5zd2l0Y2ggPyBcIkNyZWFyIEN1ZW50YVwiIDogXCJJbmljaWFyIFNlc2nDs25cIjtcbiAgc2V0UHJvdmlkZXJzKCk7XG5cbiAgY29uc3QgdmFsdWUgPSBkYXRhID0+IHtcbiAgICBpZiAoZGF0YS5uYW1lID09PSBcImVtYWlsXCIpIGVtYWlsID0gZGF0YS50ZXh0O1xuICAgIGVsc2UgaWYgKGRhdGEubmFtZSA9PT0gXCJlbWFpbFwiKSBuYW1lID0gZGF0YS50ZXh0O1xuICAgIGVsc2UgaWYgKGRhdGEubmFtZSA9PT0gXCJwYXNzXCIpIHBhc3MgPSBkYXRhLnRleHQ7XG4gIH1cblxuICBjb25zdCBzaG93QWxlcnQgPSBkYXRhID0+IHtcbiAgICBzZXRBY2NvdW50KHtcbiAgICAgIHN3aXRjaDphY2NvdW50LnN3aXRjaCxcbiAgICAgIGFsZXJ0OjxBbGVydCB0aXRsZT17ZGF0YS50aXRsZX0gYm9keT17ZGF0YS5ib2R5fSB0eXBlPXtkYXRhLnR5cGV9Lz5cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgbG9ncyA9ICgpID0+IHVzZUxvZ2luKGFjY291bnQuc3dpdGNoLCBlbWFpbCwgcGFzcykuY2F0Y2goYm9keSA9PiBzaG93QWxlcnQoe3RpdGxlOlwiT2N1cnJpbyB1biBlcnJvclwiLCBib2R5LCB0eXBlOlwiZXJyb3JcIn0pKTtcbiAgY29uc3QgZmJsb2cgPSAoKSA9PiB1c2VMb2dpbihcImZiXCIpLmNhdGNoKGJvZHkgPT4gc2hvd0FsZXJ0KHt0aXRsZTpcIk9jdXJyaW8gdW4gZXJyb3JcIiwgYm9keSwgdHlwZTpcImVycm9yXCJ9KSk7XG4gIGNvbnN0IGdsb2cgPSAoKSA9PiB1c2VMb2dpbihcImdcIikuY2F0Y2goYm9keSA9PiBzaG93QWxlcnQoe3RpdGxlOlwiT2N1cnJpbyB1biBlcnJvclwiLCBib2R5LCB0eXBlOlwiZXJyb3JcIn0pKTtcbiAgY29uc3QgcmVnU3dpdGNoID0gKCkgPT4gc2V0QWNjb3VudCh7c3dpdGNoOiFhY2NvdW50LnN3aXRjaCwgYWxlcnQ6YWNjb3VudC5hbGVydH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgaWQ9XCJmb3JtXCI+XG5cbiAgICAgICAgPGgyPkNvbmVjdGF0ZSA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNhY2hlZDwvaT48L2gyPlxuICAgICAgICA8cD5SZWdpc3RyYXRlIGRlIGZvcm1hIGdyYXR1aXRhLCBwdWVkZXMgdXRpbGl6YXIgZWwgbcOpdG9kbyBxdWUgcHJlZmllcmFzIHBhcmEgY29uZWN0YXJ0ZSwgdGVuZXIgY3VlbnRhIHRpZW5lIG11Y2hvcyBiZW5lZmljaW9zLiDwn5GMPC9wPlxuICAgICAgICA8cD7Cv3thY2NvdW50LnN3aXRjaD8gXCJ5YVwiIDogXCJub1wifSB0aWVuZXMgdW5hIGN1ZW50YT8gPGJ1dHRvbiBvbkNsaWNrPXtyZWdTd2l0Y2h9PntyZWdUZXh0fTwvYnV0dG9uPjwvcD5cbiAgICAgICAge2FjY291bnQuYWxlcnR9XG4gICAgICAgIDxkaXYgaWQ9XCJjcmVkZW50aWFsc1wiPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBsYWJlbD1cIkVtYWlsIG8gdGVsw6lmb25vXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3ZhbHVlfSBoZWxwZXI9XCJVc3VhcmlvIGRlIGxhIGN1ZW50YVwiIGljb249XCJtYWlsXCIgLz5cbiAgICAgICAgICB7YWNjb3VudC5zd2l0Y2g/IDxJbnB1dCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiTm9tYnJlIGRlIHVzdWFyaW9cIiBuYW1lPVwibmFtZVwiIHZhbHVlPXt2YWx1ZX0gaGVscGVyPVwiVHUgYXBvZG8gdW5pY29cIiBpY29uPVwicGVyc29uXCIgLz4gOiBcIlwifVxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIkNvbnRyYXNlw7FhXCIgbmFtZT1cInBhc3NcIiB2YWx1ZT17dmFsdWV9IGhlbHBlcj1cIkNsYXZlIHNlY3JldGFcIiBpY29uPVwibG9ja1wiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHthY2NvdW50LnN3aXRjaD8gXCJcIiA6IDxwPsK/T2x2aWRhc3RlIHR1IGNvbnRyYXNlw7FhPyA8YnV0dG9uIGNsYXNzTmFtZT1cIndhdmVzIHdhdmVzLWRhcmtcIj5SZWN1cGVyYXI8L2J1dHRvbj48L3A+fVxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bG9nc30gY2xhc3NOYW1lPVwiYmx1ZSB3YXZlc1wiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2FjY291bnQuc3dpdGNoID8gXCJwZXJzb25fYWRkXCIgOiBcInBlcnNvblwifTwvaT57YWNjb3VudC5zd2l0Y2ggPyBcIkNyZWFyIEN1ZW50YVwiIDogXCJJbmljaWFyIFNlc2nDs25cIn08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmYmxvZ30gY2xhc3NOYW1lPVwid2F2ZXMgZmJsb2dcIj48aSBjbGFzc05hbWU9XCJpY29uLWZhY2Vib29rXCI+PC9pPiBJbmljaWFyIGNvbiBGYWNlYm9vazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dsb2d9IGNsYXNzTmFtZT1cIndhdmVzIGdsb2dcIj48aSBjbGFzc05hbWU9XCJpY29uLWdvb2dsZVwiPjwvaT4gSW5pY2lhciBjb24gR29vZ2xlPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YSBocmVmPVwiLi9wcml2YWNpZGFkLnBkZlwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiUHJpdmFjaWRhZFwiIGNsYXNzTmFtZT1cImJ0biBhbWJlciBwcml2YWN5IHdhdmVzIHdhdmVzLWRhcmtcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFjY291bnRfYmFsYW5jZTwvaT4gUG9sw610aWNhcyBkZSA8YnIgLz5wcml2YWNpZGFkPC9hPlxuXG4gICAgICA8c3R5bGUganN4PntgXG5cdCAgLnByaXZhY3l7XG4gICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOi0xMDBweDtcbiAgICAgICAgICAgICB6LWluZGV4OjI7XG4gICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgICAgICAgICAgY29sb3I6dmFyKC0tYmFja2dyb3VuZHMpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgICNmb3JtID4gcCB7IGNvbG9yOnZhcigtLXBhcnJhZik7IH1cbiAgICAgICAgICAgI2Zvcm0gPiBwOm50aC1jaGlsZCg1KSB7XG4gICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcCA+IGJ1dHRvbntcbiAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICBjb2xvcjp2YXIoLS1wYXJyYWYpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIGgye1xuICAgICAgICAgICAgIGNvbG9yOnZhcigtLXBhcnJhZik7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgI2Zvcm17XG4gICAgICAgICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICAgYmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kcyk7XG4gICAgICAgICAgICAgYm94LXNoYWRvdzowIDAgMTBweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgIHRvcDotNTBweDtcbiAgICAgICAgICAgICBsZWZ0OjUwJTtcbiAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjYwcHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgI2Zvcm0gPiBidXR0b257XG4gICAgICAgICAgICAgY29sb3I6dmFyKC0tYmFja2dyb3VuZHMpO1xuICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgI2NyZWRlbnRpYWxze1xuICAgICAgICAgICAgIG1hcmdpbi10b3A6LTEwcHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgYnV0dG9uIHN2Z3tcbiAgICAgICAgICAgICBtYXJnaW46MzBweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmJsb2d7XG4gICAgICAgICAgICAgYmFja2dyb3VuZDojM2I1OTk4O1xuICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5nbG9ne1xuICAgICAgICAgICAgIGJhY2tncm91bmQ6I0Q0NDYzODtcbiAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgfVxuICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybXM7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ernesto\\\\Desktop\\\\iBox\\\\components\\\\Forms.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ })

})
//# sourceMappingURL=cuenta.js.716bedb3126b580c384a.hot-update.js.map