webpackHotUpdate("static\\development\\pages\\cuenta.js",{

/***/ "./components/Alert.js":
/*!*****************************!*\
  !*** ./components/Alert.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\Alert.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Alert = props => {
  const type = props.type;
  const current = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const hideAlert = () => {
    current.current.style.opacity = 0;
    setTimeout(() => props.hideAlert(), 400);
  };

  return __jsx("div", {
    ref: current,
    className: "jsx-2212991206" + " " + "alertContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    onClick: hideAlert,
    className: "jsx-2212991206" + " " + "alertShadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("div", {
    id: "alertContent",
    className: "jsx-2212991206",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-2212991206",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, props.title), __jsx("p", {
    className: "jsx-2212991206",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, props.body), __jsx("ul", {
    className: "jsx-2212991206",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, type === "confirmation" ? __jsx("li", {
    className: "jsx-2212991206",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("button", {
    onClick: hideAlert,
    className: "jsx-2212991206" + " " + "waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Cancelar")) : "", __jsx("li", {
    className: "jsx-2212991206",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("button", {
    onClick: hideAlert,
    className: "jsx-2212991206" + " " + "waves waves-dark primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Aceptar")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2212991206",
    __self: undefined
  }, "@-webkit-keyframes show-jsx-2212991206{from{opacity:0;}to{opacity:1;}}@keyframes show-jsx-2212991206{from{opacity:0;}to{opacity:1;}}.alertContainer.jsx-2212991206{width:100%;height:100vh;position:fixed;top:0;left:0;z-index:100;-webkit-animation:show-jsx-2212991206 0.4s ease-in-out 1;animation:show-jsx-2212991206 0.4s ease-in-out 1;-webkit-transition:opacity 0.4s ease-in-out;transition:opacity 0.4s ease-in-out;}.alertContainer.jsx-2212991206>.alertShadow.jsx-2212991206{width:100%;height:100%;position:absolute;top:0;left:0;background:rgba(0,0,0,.4);z-index:1;}.alertContainer.jsx-2212991206 #alertContent.jsx-2212991206{position:absolute;top:50%;left:50%;background:var(--backgrounds);padding:20px;width:calc(100% - 40px);max-width:400px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:2;box-shadow:0 0 10px rgba(0,0,0,.3);border-radius:10px;}ul.jsx-2212991206{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}ul.jsx-2212991206 li.jsx-2212991206 button.jsx-2212991206{color:var(--backgrounds);}h1.jsx-2212991206{color:var(--text);}p.jsx-2212991206{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcQWxlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJ3QixBQUdpQyxBQUNGLEFBR0EsQUFVQSxBQVNPLEFBYUwsQUFJWSxBQUdQLEFBR0MsVUE5Q0wsQUFDRixDQUlDLEFBVUQsT0FTSixBQW9CWCxDQUdBLElBL0JxQixDQVZILENBbUNsQixDQWhCWSxTQUNxQixJQW5CeEIsRUFVQSxJQVRDLEVBVUEsS0FUSyxFQVVjLFVBVFEsQ0FpQnJCLFNBVVksSUFURCxFQVJkLFVBQ2IsWUFRbUIsZ0JBQ2dCLG9EQW5CSSxDQTJCdkMsb0RBUGEsVUFDeUIsaUJBcEJ0QyxrQkFxQnNCLG1CQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXGVybmVzdG9cXERlc2t0b3BcXGlCb3hcXGNvbXBvbmVudHNcXEFsZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcbmNvbnN0IEFsZXJ0ID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBwcm9wcy50eXBlO1xuICAgIGNvbnN0IGN1cnJlbnQgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBoaWRlQWxlcnQgPSAoKSA9PntcbiAgICAgICAgY3VycmVudC5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHByb3BzLmhpZGVBbGVydCgpLCA0MDApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRDb250YWluZXJcIiByZWY9e2N1cnJlbnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydFNoYWRvd1wiIG9uQ2xpY2s9e2hpZGVBbGVydH0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWxlcnRDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxwPntwcm9wcy5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHt0eXBlID09PSBcImNvbmZpcm1hdGlvblwiID8gPGxpPjxidXR0b24gY2xhc3NOYW1lPVwid2F2ZXMgd2F2ZXMtZGFya1wiIG9uQ2xpY2s9e2hpZGVBbGVydH0+Q2FuY2VsYXI8L2J1dHRvbj48L2xpPiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzTmFtZT1cIndhdmVzIHdhdmVzLWRhcmsgcHJpbWFyeVwiIG9uQ2xpY2s9e2hpZGVBbGVydH0+QWNlcHRhcjwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2hvd3tcbiAgICAgICAgICAgICAgICAgICAgZnJvbXtvcGFjaXR5OjB9XG4gICAgICAgICAgICAgICAgICAgIHRve29wYWNpdHk6MX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFsZXJ0Q29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMDtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOnNob3cgMC40cyBlYXNlLWluLW91dCAxO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOm9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFsZXJ0Q29udGFpbmVyID4gLmFsZXJ0U2hhZG93e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuNCk7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFsZXJ0Q29udGFpbmVyICNhbGVydENvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6NTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OjUwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kcyk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDoyO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVse1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWwgbGkgYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1iYWNrZ3JvdW5kcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS10ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\ernesto\\\\Desktop\\\\iBox\\\\components\\\\Alert.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ })

})
//# sourceMappingURL=cuenta.js.e054592127fe60b93f32.hot-update.js.map