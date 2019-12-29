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
    className: "jsx-1492137586" + " " + "alertContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    onClick: hideAlert,
    className: "jsx-1492137586" + " " + "alertShadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    id: "alertContent",
    className: "jsx-1492137586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-1492137586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, props.title), __jsx("p", {
    className: "jsx-1492137586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, props.body), __jsx("ul", {
    className: "jsx-1492137586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, type === "confirmation" ? __jsx("li", {
    className: "jsx-1492137586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("button", {
    onClick: hideAlert,
    className: "jsx-1492137586" + " " + "waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Cancelar")) : "", __jsx("li", {
    className: "jsx-1492137586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("button", {
    onClick: hideAlert,
    className: "jsx-1492137586" + " " + "waves waves-dark primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Aceptar")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1492137586",
    __self: undefined
  }, "@-webkit-keyframes show-jsx-1492137586{from{opacity:0;}to{opacity:1;}}@keyframes show-jsx-1492137586{from{opacity:0;}to{opacity:1;}}.alertContainer.jsx-1492137586{width:100%;height:100vh;position:fixed;top:0;left:0;z-index:100;-webkit-animation:show-jsx-1492137586 0.4s ease-in-out 1;animation:show-jsx-1492137586 0.4s ease-in-out 1;-webkit-transition:opacity 0.4s ease-in-out;transition:opacity 0.4s ease-in-out;}.alertContainer.jsx-1492137586>.alertShadow.jsx-1492137586{width:100%;height:100%;position:absolute;top:0;left:0;background:rgba(0,0,0,.4);z-index:1;}.alertContainer.jsx-1492137586 #alertContent.jsx-1492137586{position:absolute;top:50%;left:50%;background:var(--backgrounds);padding:20px;width:calc(100% - 40px);max-width:400px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:2;box-shadow:0 0 10px rgba(0,0,0,.3);border-radius:10px;}ul.jsx-1492137586{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}ul.jsx-1492137586 li.jsx-1492137586:nth-child(1) button.jsx-1492137586{color:var(--text);}ul.jsx-1492137586 li.jsx-1492137586:nth-child(2) button.jsx-1492137586{color:var(--backgrounds);}h1.jsx-1492137586{color:var(--text);}p.jsx-1492137586{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcQWxlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJ3QixBQUdpQyxBQUNGLEFBR0EsQUFVQSxBQVNPLEFBYUwsQUFJSyxBQUdPLEFBR1AsQUFHQyxVQWpETCxBQUNGLENBSUMsQUFVRCxPQVNKLEFBaUJYLEFBTUEsQ0FHQSxJQWxDcUIsQ0FWSCxDQXNDbEIsQ0FuQlksU0FDcUIsSUFuQnhCLEVBVUEsSUFUQyxFQVVBLEtBVEssRUFVYyxVQVRRLENBaUJyQixTQVVZLElBVEQsRUFSZCxVQUNiLFlBUW1CLGdCQUNnQixvREFuQkksQ0EyQnZDLG9EQVBhLFVBQ3lCLGlCQXBCdEMsa0JBcUJzQixtQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxlcm5lc3RvXFxEZXNrdG9wXFxpQm94XFxjb21wb25lbnRzXFxBbGVydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXG5jb25zdCBBbGVydCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB0eXBlID0gcHJvcHMudHlwZTtcbiAgICBjb25zdCBjdXJyZW50ID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGhpZGVBbGVydCA9ICgpID0+e1xuICAgICAgICBjdXJyZW50LmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcHJvcHMuaGlkZUFsZXJ0KCksIDQwMCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRDb250YWluZXJcIiByZWY9e2N1cnJlbnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydFNoYWRvd1wiIG9uQ2xpY2s9e2hpZGVBbGVydH0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWxlcnRDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxwPntwcm9wcy5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHt0eXBlID09PSBcImNvbmZpcm1hdGlvblwiID8gPGxpPjxidXR0b24gY2xhc3NOYW1lPVwid2F2ZXMgd2F2ZXMtZGFya1wiIG9uQ2xpY2s9e2hpZGVBbGVydH0+Q2FuY2VsYXI8L2J1dHRvbj48L2xpPiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzTmFtZT1cIndhdmVzIHdhdmVzLWRhcmsgcHJpbWFyeVwiIG9uQ2xpY2s9e2hpZGVBbGVydH0+QWNlcHRhcjwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2hvd3tcbiAgICAgICAgICAgICAgICAgICAgZnJvbXtvcGFjaXR5OjB9XG4gICAgICAgICAgICAgICAgICAgIHRve29wYWNpdHk6MX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFsZXJ0Q29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMDtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOnNob3cgMC40cyBlYXNlLWluLW91dCAxO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOm9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFsZXJ0Q29udGFpbmVyID4gLmFsZXJ0U2hhZG93e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuNCk7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFsZXJ0Q29udGFpbmVyICNhbGVydENvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6NTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OjUwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kcyk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDoyO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVse1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWwgbGk6bnRoLWNoaWxkKDEpIGJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6dmFyKC0tdGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsIGxpOm50aC1jaGlsZCgyKSBidXR0b257XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLWJhY2tncm91bmRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDF7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLXRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBBbGVydDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ernesto\\\\Desktop\\\\iBox\\\\components\\\\Alert.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ })

})
//# sourceMappingURL=cuenta.js.caeee92bfce55c9c247d.hot-update.js.map