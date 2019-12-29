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
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    onClick: hideAlert,
    className: "jsx-1492137586" + " " + "alertShadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("div", {
    id: "alertContent",
    className: "jsx-1492137586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-1492137586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, props.title), __jsx("p", {
    className: "jsx-1492137586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, props.body), __jsx("ul", {
    className: "jsx-1492137586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, type === "confirmation" ? __jsx("li", {
    className: "jsx-1492137586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("button", {
    onClick: hideAlert,
    className: "jsx-1492137586" + " " + "waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Cancelar")) : "", __jsx("li", {
    className: "jsx-1492137586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("button", {
    onClick: hideAlert,
    className: "jsx-1492137586" + " " + "waves waves-dark primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Aceptar")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1492137586",
    __self: undefined
  }, "@-webkit-keyframes show-jsx-1492137586{from{opacity:0;}to{opacity:1;}}@keyframes show-jsx-1492137586{from{opacity:0;}to{opacity:1;}}.alertContainer.jsx-1492137586{width:100%;height:100vh;position:fixed;top:0;left:0;z-index:100;-webkit-animation:show-jsx-1492137586 0.4s ease-in-out 1;animation:show-jsx-1492137586 0.4s ease-in-out 1;-webkit-transition:opacity 0.4s ease-in-out;transition:opacity 0.4s ease-in-out;}.alertContainer.jsx-1492137586>.alertShadow.jsx-1492137586{width:100%;height:100%;position:absolute;top:0;left:0;background:rgba(0,0,0,.4);z-index:1;}.alertContainer.jsx-1492137586 #alertContent.jsx-1492137586{position:absolute;top:50%;left:50%;background:var(--backgrounds);padding:20px;width:calc(100% - 40px);max-width:400px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:2;box-shadow:0 0 10px rgba(0,0,0,.3);border-radius:10px;}ul.jsx-1492137586{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}ul.jsx-1492137586 li.jsx-1492137586:nth-child(1) button.jsx-1492137586{color:var(--text);}ul.jsx-1492137586 li.jsx-1492137586:nth-child(2) button.jsx-1492137586{color:var(--backgrounds);}h1.jsx-1492137586{color:var(--text);}p.jsx-1492137586{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcQWxlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJ3QixBQUdpQyxBQUNGLEFBR0EsQUFVQSxBQVNPLEFBYUwsQUFJSyxBQUdPLEFBR1AsQUFHQyxVQWpETCxBQUNGLENBSUMsQUFVRCxPQVNKLEFBaUJYLEFBTUEsQ0FHQSxJQWxDcUIsQ0FWSCxDQXNDbEIsQ0FuQlksU0FDcUIsSUFuQnhCLEVBVUEsSUFUQyxFQVVBLEtBVEssRUFVYyxVQVRRLENBaUJyQixTQVVZLElBVEQsRUFSZCxVQUNiLFlBUW1CLGdCQUNnQixvREFuQkksQ0EyQnZDLG9EQVBhLFVBQ3lCLGlCQXBCdEMsa0JBcUJzQixtQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxlcm5lc3RvXFxEZXNrdG9wXFxpQm94XFxjb21wb25lbnRzXFxBbGVydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXG5jb25zdCBBbGVydCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB0eXBlID0gcHJvcHMudHlwZTtcbiAgICBjb25zdCBjdXJyZW50ID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgaGlkZUFsZXJ0ID0gKCkgPT57XG4gICAgICAgIGN1cnJlbnQuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwcm9wcy5oaWRlQWxlcnQoKSwgNDAwKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydENvbnRhaW5lclwiIHJlZj17Y3VycmVudH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0U2hhZG93XCIgb25DbGljaz17aGlkZUFsZXJ0fT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhbGVydENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+e3Byb3BzLmJvZHl9PC9wPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3R5cGUgPT09IFwiY29uZmlybWF0aW9uXCIgPyA8bGk+PGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXZlcyB3YXZlcy1kYXJrXCIgb25DbGljaz17aGlkZUFsZXJ0fT5DYW5jZWxhcjwvYnV0dG9uPjwvbGk+IDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3NOYW1lPVwid2F2ZXMgd2F2ZXMtZGFyayBwcmltYXJ5XCIgb25DbGljaz17aGlkZUFsZXJ0fT5BY2VwdGFyPC9idXR0b24+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaG93e1xuICAgICAgICAgICAgICAgICAgICBmcm9te29wYWNpdHk6MH1cbiAgICAgICAgICAgICAgICAgICAgdG97b3BhY2l0eToxfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWxlcnRDb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTAwO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246c2hvdyAwLjRzIGVhc2UtaW4tb3V0IDE7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246b3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWxlcnRDb250YWluZXIgPiAuYWxlcnRTaGFkb3d7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLC40KTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDoxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWxlcnRDb250YWluZXIgI2FsZXJ0Q29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDo1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6NTAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmRzKTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjQwMHB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjI7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWx7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bCBsaTpudGgtY2hpbGQoMSkgYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS10ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWwgbGk6bnRoLWNoaWxkKDIpIGJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6dmFyKC0tYmFja2dyb3VuZHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6dmFyKC0tdGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ernesto\\\\Desktop\\\\iBox\\\\components\\\\Alert.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ })

})
//# sourceMappingURL=cuenta.js.39b35f4e9cda946ec5f8.hot-update.js.map