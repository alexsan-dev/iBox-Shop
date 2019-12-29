module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/cart.png":
/*!*************************!*\
  !*** ./assets/cart.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/profile.png":
/*!****************************!*\
  !*** ./assets/profile.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/store.png":
/*!**************************!*\
  !*** ./assets/store.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/Alert.js":
/*!*****************************!*\
  !*** ./components/Alert.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_store_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/store.png */ "./assets/store.png");
/* harmony import */ var _assets_store_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_store_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = props => {
  return __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, props.store ? __jsx("div", {
    className: "st",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_store_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "iBox Store",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Contacta con el \xE1rea t\xE9cnica \uD83D\uDCBB ", __jsx("a", {
    href: "mailto:cto@ibox.gt",
    title: "Cto mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "cto@ibox.gt"))) : '', __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("path", {
    fill: "var(--parraf)",
    fillOpacity: "1",
    d: "M0,192L48,165.3C96,139,192,85,288,106.7C384,128,480,224,576,224C672,224,768,128,864,106.7C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx("div", {
    id: "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Contacta con nosotros ", __jsx("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "call")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Si tienes alg\xFAn comentario envianos un mensaje , visita tambi\xE9n nuestra p\xE1gina en Facebook. \uD83D\uDC4D"), __jsx("a", {
    href: "https://facebook.com/tienda.ibox",
    target: "_blank",
    rel: "noreferrer",
    title: "FacebookPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("i", {
    className: "icon-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), " iBox"), __jsx("a", {
    href: "mailto:ceo@ibox.gt",
    title: "Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "mail"), " Email")), __jsx("div", {
    id: "fText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Hecho con \u2764\uFE0F en Guatemala \uD83C\uDDEC\uD83C\uDDF9"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Todos los derechos reservados iBox\xAE ", new Date().getFullYear())));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Forms.js":
/*!*****************************!*\
  !*** ./components/Forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
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

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Header = props => {
  return __jsx("div", {
    id: "mainHeader",
    className: "jsx-3111826445",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("div", {
    id: "headText",
    className: "jsx-3111826445",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-3111826445",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.title), __jsx("p", {
    className: "jsx-3111826445",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.text), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: props.href,
    passHref: true,
    scroll: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("a", {
    id: "shopBtn",
    title: "Tienda",
    className: "jsx-3111826445" + " " + "waves btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-3111826445" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.icon), props.link))), __jsx("span", {
    className: "jsx-3111826445",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.span), __jsx("img", {
    src: props.img,
    alt: "Header Image",
    className: "jsx-3111826445",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    className: "jsx-3111826445",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("path", {
    fill: "var(--primary)",
    fillOpacity: "1",
    d: "M0,64L48,53.3C96,43,192,21,288,10.7C384,0,480,0,576,48C672,96,768,192,864,229.3C960,267,1056,245,1152,245.3C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    className: "jsx-3111826445",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3111826445",
    __self: undefined
  }, "#mainHeader.jsx-3111826445{position:relative;z-index:2;width:100%;}#mainHeader.jsx-3111826445>img.jsx-3111826445{position:absolute;left:0px;margin-top:-32px;z-index:3;height:95px;}#mainHeader.jsx-3111826445>span.jsx-3111826445{font-size:10px;color:var(--parraf);font-weight:bold;background:var(--backgrounds);padding:10px 10px 10px 20px;border-radius:5px;position:absolute;left:90px;margin-top:-20px;z-index:3;}#headText.jsx-3111826445{padding:20px;background:var(--primary);position:relative;font-size:15px;z-index:3;padding-bottom:40px;}#headText.jsx-3111826445 h1.jsx-3111826445{color:var(--backgrounds);font-size:1.8em;line-height:30px;}#headText.jsx-3111826445 p.jsx-3111826445{color:var(--backgrounds);font-size:1em;}#shopBtn.jsx-3111826445{position:absolute;background:transparent;border:2px solid var(--backgrounds);color:var(--backgrounds);border-radius:10px;right:20px;bottom:-30px;padding:12px 15px;z-index:3;}#wavesone.jsx-3111826445{position:relative;z-index:2;margin-top:-2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZSxBQUdpQyxBQUtQLEFBT0gsQUFZRixBQVFZLEFBS0EsQUFJUCxBQVdBLGFBM0JRLEVBWk4sR0FaVixBQUtELEFBb0NjLEFBV2IsT0FwQk0sQUFLRixFQS9CRyxDQUxOLEFBb0RLLE9BeENDLElBWG5CLEFBdUJvQixBQWFwQixFQUxtQixBQVNtQixHQW5DMUIsQUErQ1osUUF4Q2dDLEVBTmxCLEdBa0JHLENBUWpCLFFBekJBLE1Ba0JZLEtBZ0JlLEtBNUJHLEFBYVIsb0JBQ3RCLEFBZXFCLFFBNUJELFdBNkJQLE9BNUJPLElBNkJMLGFBQ0ssQ0E3QlIsVUFDTyxPQTZCUCxVQTVCQSxBQTZCWixVQTVCQSIsImZpbGUiOiJDOlxcVXNlcnNcXGVybmVzdG9cXERlc2t0b3BcXGlCb3hcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmNvbnN0IEhlYWRlciA9IHByb3BzID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPVwibWFpbkhlYWRlclwiPlxuXG5cdFx0XHQ8ZGl2IGlkPVwiaGVhZFRleHRcIj5cblx0XHRcdFx0PGgxPntwcm9wcy50aXRsZX08L2gxPlxuXHRcdFx0XHQ8cD57cHJvcHMudGV4dH08L3A+XG5cdFx0XHRcdDxMaW5rIGhyZWY9e3Byb3BzLmhyZWZ9IHBhc3NIcmVmIHNjcm9sbD17ZmFsc2V9PjxhIGlkPVwic2hvcEJ0blwiIGNsYXNzTmFtZT1cIndhdmVzIGJ0blwiIHRpdGxlPVwiVGllbmRhXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57cHJvcHMuaWNvbn08L2k+e3Byb3BzLmxpbmt9PC9hPjwvTGluaz5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8c3Bhbj57cHJvcHMuc3Bhbn08L3NwYW4+XG5cblx0XHRcdDxpbWcgc3JjPXtwcm9wcy5pbWd9IGFsdD1cIkhlYWRlciBJbWFnZVwiIC8+XG5cblx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTQ0MCAzMjBcIj48cGF0aCBmaWxsPVwidmFyKC0tcHJpbWFyeSlcIiBmaWxsT3BhY2l0eT1cIjFcIiBkPVwiTTAsNjRMNDgsNTMuM0M5Niw0MywxOTIsMjEsMjg4LDEwLjdDMzg0LDAsNDgwLDAsNTc2LDQ4QzY3Miw5Niw3NjgsMTkyLDg2NCwyMjkuM0M5NjAsMjY3LDEwNTYsMjQ1LDExNTIsMjQ1LjNDMTI0OCwyNDUsMTM0NCwyNjcsMTM5MiwyNzcuM0wxNDQwLDI4OEwxNDQwLDBMMTM5MiwwQzEzNDQsMCwxMjQ4LDAsMTE1MiwwQzEwNTYsMCw5NjAsMCw4NjQsMEM3NjgsMCw2NzIsMCw1NzYsMEM0ODAsMCwzODQsMCwyODgsMEMxOTIsMCw5NiwwLDQ4LDBMMCwwWlwiPjwvcGF0aD48L3N2Zz5cblxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHQgICAgI21haW5IZWFkZXJ7XG4gICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblx0ICAgICAgIHotaW5kZXg6Mjtcblx0ICAgICAgIHdpZHRoOjEwMCU7XG5cdCAgICB9XG5cdCAgICAjbWFpbkhlYWRlciA+IGltZ3tcblx0ICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuXHQgICAgICAgbGVmdDowcHg7XG5cdCAgICAgICBtYXJnaW4tdG9wOi0zMnB4O1xuXHQgICAgICAgei1pbmRleDozO1xuXHQgICAgICAgaGVpZ2h0Ojk1cHg7XG5cdCAgICB9XG5cdCAgICAjbWFpbkhlYWRlciA+IHNwYW57XG5cdCAgICAgICBmb250LXNpemU6MTBweDtcblx0ICAgICAgIGNvbG9yOnZhcigtLXBhcnJhZik7XG5cdCAgICAgICBmb250LXdlaWdodDpib2xkO1xuXHQgICAgICAgYmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kcyk7XG5cdCAgICAgICBwYWRkaW5nOjEwcHggMTBweCAxMHB4IDIwcHg7XG5cdCAgICAgICBib3JkZXItcmFkaXVzOjVweDtcblx0ICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuXHQgICAgICAgbGVmdDo5MHB4O1xuXHQgICAgICAgbWFyZ2luLXRvcDotMjBweDtcblx0ICAgICAgIHotaW5kZXg6Mztcblx0ICAgIH1cblx0ICAgICNoZWFkVGV4dHtcblx0ICAgICAgIHBhZGRpbmc6MjBweDtcblx0ICAgICAgIGJhY2tncm91bmQ6dmFyKC0tcHJpbWFyeSk7XG5cdCAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblx0ICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuXHQgICAgICAgei1pbmRleDozO1xuXHQgICAgICAgcGFkZGluZy1ib3R0b206NDBweDtcblx0ICAgIH1cblx0ICAgICNoZWFkVGV4dCBoMXtcblx0ICAgICAgIGNvbG9yOnZhcigtLWJhY2tncm91bmRzKTtcblx0ICAgICAgIGZvbnQtc2l6ZToxLjhlbTtcblx0ICAgICAgIGxpbmUtaGVpZ2h0OjMwcHg7XG5cdCAgICB9XG5cdCAgICAjaGVhZFRleHQgcHtcblx0ICAgICAgIGNvbG9yOnZhcigtLWJhY2tncm91bmRzKTtcblx0ICAgICAgIGZvbnQtc2l6ZToxZW07XG5cdCAgICB9XG5cdCAgICAjc2hvcEJ0bntcblx0ICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuXHQgICAgICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcblx0ICAgICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0tYmFja2dyb3VuZHMpO1xuXHQgICAgICAgY29sb3I6dmFyKC0tYmFja2dyb3VuZHMpO1xuXHQgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuXHQgICAgICAgcmlnaHQ6MjBweDtcblx0ICAgICAgIGJvdHRvbTotMzBweDtcblx0ICAgICAgIHBhZGRpbmc6MTJweCAxNXB4O1xuXHQgICAgICAgei1pbmRleDozO1xuXHQgICAgfVxuXHQgICAgI3dhdmVzb25le1xuXHQgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG5cdCAgICAgICB6LWluZGV4OjI7XG5cdCAgICAgICBtYXJnaW4tdG9wOi0ycHg7XG5cdCAgICB9XG5cdCAgICBcblx0IGB9PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ernesto\\\\Desktop\\\\iBox\\\\components\\\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\Input.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Input = props => {
  let visible = true;
  const inp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const fx = e => {
    const label = inp.current.nextSibling;
    const hr = label.nextSibling;
    const i = hr.nextSibling;

    if (label && inp.current.value.length === 0) {
      label.classList.toggle("alabel");
      label.classList.toggle("dlabel");
      hr.classList.toggle("hractive");
      hr.classList.toggle("hrunactive");
      i.classList.toggle("iactive");
      i.classList.toggle("iunactive");
    }
  };

  const visibled = e => {
    if (visible) {
      e.target.innerHTML = "visibility";
      inp.current.setAttribute("type", "text");
      visible = !visible;
    } else {
      e.target.innerHTML = "visibility_off";
      inp.current.setAttribute("type", "password");
      visible = !visible;
    }
  };

  const getText = e => props.value({
    name: props.name,
    text: inp.current.value
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("input", {
    ref: inp,
    type: props.type,
    id: props.name,
    name: props.name,
    onFocus: fx,
    onBlur: fx,
    onChange: getText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: props.name,
    className: "dlabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, props.label), __jsx("hr", {
    className: "hrunactive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx("i", {
    className: "iunactive material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, props.icon), props.type === "password" ? __jsx("span", {
    onClick: visibled,
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "visibility_off") : ""), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, props.helper));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\Loading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Loading = () => {
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, "Cargando...");
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/Logins.js":
/*!******************************!*\
  !*** ./components/Logins.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Forms */ "./components/Forms.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _assets_cart_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/cart.png */ "./assets/cart.png");
/* harmony import */ var _assets_cart_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_cart_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\Logins.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





let ease = [0.175, 0.85, 0.42, 0.96];
let duration = 0.5;
let transition = {
  duration,
  ease
};
const pageAnim = {
  exit: {
    opacity: 0,
    y: -150,
    transition
  },
  enter: {
    opacity: 1,
    y: 0,
    transition
  }
};
const fAnim = {
  exit: {
    opacity: 0,
    y: 150,
    transition
  },
  enter: {
    opacity: 1,
    y: 0,
    transition
  }
};
const slideAnim = {
  exit: {
    opacity: 0,
    x: 200,
    transition
  },
  enter: {
    opacity: 1,
    x: 0,
    transition
  }
};

const Logins = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    initial: "exit",
    animate: "enter",
    exit: "exit",
    variants: {
      exit: {
        transition: {
          staggerChildren: 0.1
        }
      },
      enter: {
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    variants: pageAnim,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Compra m\xE1s r\xE1pido ", __jsx("i", {
      className: "material-icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, "shop")),
    text: "En iBox puedes comprar sin registrarte pero te perder\xE1s de nuestras ofertas, tambi\xE9n puedes registrarte con tu n\xFAmero de tel\xE9fono. \uD83D\uDE01",
    img: _assets_cart_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    href: "/",
    icon: "undo",
    link: "Regresar",
    span: "BEST SERVICE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    variants: slideAnim,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(_Forms__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    variants: fAnim,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    store: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Logins);

/***/ }),

/***/ "./components/Profile.js":
/*!*******************************!*\
  !*** ./components/Profile.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProfileHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileHeader */ "./components/ProfileHeader.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\Profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


let ease = [0.175, 0.85, 0.42, 0.96];
let duration = 0.5;
let transition = {
  duration,
  ease
};
const head = {
  exit: {
    opacity: 0,
    y: -150,
    transition
  },
  enter: {
    opacity: 1,
    y: 0,
    transition
  }
};

const Profile = props => {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    initial: "exit",
    animate: "enter",
    exit: "exit",
    variants: {
      exit: {
        transition: {
          staggerChildren: 0.1
        }
      },
      enter: {
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    variants: head,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_ProfileHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    user: props.user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./components/ProfileHeader.js":
/*!*************************************!*\
  !*** ./components/ProfileHeader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_profile_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/profile.png */ "./assets/profile.png");
/* harmony import */ var _assets_profile_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_profile_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\ProfileHeader.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ProfileHeader = props => {
  let pic = props.user.providerData[0].providerId === "facebook.com" ? props.user.photoURL + "?height=600" : props.user.photoURL;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "info",
    className: "jsx-3924454100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3924454100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-3924454100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Mi cuenta"), __jsx("h2", {
    className: "jsx-3924454100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.user.displayName), __jsx("span", {
    className: "jsx-3924454100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-3924454100" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "email"), " ", props.user.email.substr(0, props.user.email.indexOf(".com")))), __jsx("div", {
    id: "profilePic",
    className: "jsx-3924454100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_profile_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Profile Placeholder",
    className: "jsx-3924454100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("img", {
    src: pic,
    alt: "Profile",
    className: "jsx-3924454100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }))), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    className: "jsx-3924454100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("path", {
    fill: "var(--primary)",
    fillOpacity: "1",
    d: "M0,160L48,176C96,192,192,224,288,234.7C384,245,480,235,576,202.7C672,171,768,117,864,112C960,107,1056,149,1152,186.7C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    className: "jsx-3924454100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3924454100",
    __self: undefined
  }, "#info.jsx-3924454100{background:var(--primary);padding:20px 20px 0 20px;color:var(--backgrounds);position:relative;z-index:2;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-3924454100{font-size:0.9em;}h2.jsx-3924454100{white-space:nowrap;overflow:hidden;text-overflow:' ';color:var(--backgrounds);}span.jsx-3924454100{font-size:1.1em;opacity:0.8;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}span.jsx-3924454100 i.jsx-3924454100{margin-right:5px;font-size:1em;}svg.jsx-3924454100{margin-top:-30px;}#profilePic.jsx-3924454100{width:130px;height:130px;position:relative;margin-bottom:-80px;border-radius:100%;overflow:hidden;}#profilePic.jsx-3924454100 img.jsx-3924454100{width:100%;position:absolute;top:0;right:0;color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcUHJvZmlsZUhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmUsQUFHaUMsQUFXVixBQUdNLEFBTU4sQUFNQyxBQUlBLEFBR0wsQUFRRCxXQUNPLENBUkwsSUF0QmYsQUFTYyxDQU1FLEFBSWhCLEVBaEJxQixNQW9CRCxDQWxDTyxFQXFCWixDQXFCUCxFQWZSLElBWnNCLEFBNEJaLFFBUlksQUFTRixRQTNDTyxFQWVBLFFBNkIzQixFQVRxQixhQWxDRCxFQWVwQixJQW9Ca0IsWUFsQ04sSUFtQ1osSUFoQnFCLEVBbEJSLFdBQ0UsMEVBQ2lCLE1BaUJoQyw2R0FoQnFCLDZGQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXGVybmVzdG9cXERlc2t0b3BcXGlCb3hcXGNvbXBvbmVudHNcXFByb2ZpbGVIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZmlsZVBpYyBmcm9tICcuLi9hc3NldHMvcHJvZmlsZS5wbmcnO1xuXG5jb25zdCBQcm9maWxlSGVhZGVyID0gcHJvcHMgPT4ge1xuXHRsZXQgcGljID0gcHJvcHMudXNlci5wcm92aWRlckRhdGFbMF0ucHJvdmlkZXJJZCA9PT0gXCJmYWNlYm9vay5jb21cIiA/IHByb3BzLnVzZXIucGhvdG9VUkwgKyBcIj9oZWlnaHQ9NjAwXCIgOiBwcm9wcy51c2VyLnBob3RvVVJMO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGlkPVwiaW5mb1wiPlxuXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGgxPk1pIGN1ZW50YTwvaDE+XG5cdFx0XHRcdFx0PGgyPntwcm9wcy51c2VyLmRpc3BsYXlOYW1lfTwvaDI+XG5cdFx0XHRcdFx0PHNwYW4+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5lbWFpbDwvaT4ge3Byb3BzLnVzZXIuZW1haWwuc3Vic3RyKDAsIHByb3BzLnVzZXIuZW1haWwuaW5kZXhPZihcIi5jb21cIikpfTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBpZD1cInByb2ZpbGVQaWNcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17UHJvZmlsZVBpY30gYWx0PSdQcm9maWxlIFBsYWNlaG9sZGVyJyAvPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtwaWN9IGFsdD0nUHJvZmlsZScgLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNDQwIDMyMFwiPjxwYXRoIGZpbGw9XCJ2YXIoLS1wcmltYXJ5KVwiIGZpbGxPcGFjaXR5PVwiMVwiIGQ9XCJNMCwxNjBMNDgsMTc2Qzk2LDE5MiwxOTIsMjI0LDI4OCwyMzQuN0MzODQsMjQ1LDQ4MCwyMzUsNTc2LDIwMi43QzY3MiwxNzEsNzY4LDExNyw4NjQsMTEyQzk2MCwxMDcsMTA1NiwxNDksMTE1MiwxODYuN0MxMjQ4LDIyNCwxMzQ0LDI1NiwxMzkyLDI3MkwxNDQwLDI4OEwxNDQwLDBMMTM5MiwwQzEzNDQsMCwxMjQ4LDAsMTE1MiwwQzEwNTYsMCw5NjAsMCw4NjQsMEM3NjgsMCw2NzIsMCw1NzYsMEM0ODAsMCwzODQsMCwyODgsMEMxOTIsMCw5NiwwLDQ4LDBMMCwwWlwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0ICAgI2luZm97XG5cdCAgICAgIGJhY2tncm91bmQ6dmFyKC0tcHJpbWFyeSk7XG5cdCAgICAgIHBhZGRpbmc6MjBweCAyMHB4IDAgMjBweDtcblx0ICAgICAgY29sb3I6dmFyKC0tYmFja2dyb3VuZHMpO1xuXHQgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblx0ICAgICAgei1pbmRleDoyO1xuXHQgICAgICB3aWR0aDoxMDAlO1xuXHQgICAgICBkaXNwbGF5OmZsZXg7XG5cdCAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuXHQgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG5cdCAgIH1cblx0ICAgaDF7XG5cdCAgICAgIGZvbnQtc2l6ZTowLjllbTtcblx0ICAgfVxuXHQgICBoMntcbiAgXHQgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBcdCAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIFx0ICAgICAgdGV4dC1vdmVyZmxvdzonICc7XG5cdCAgICAgIGNvbG9yOnZhcigtLWJhY2tncm91bmRzKTtcblx0ICAgfVxuXHQgICBzcGFue1xuXHQgICAgICBmb250LXNpemU6MS4xZW07XG5cdCAgICAgIG9wYWNpdHk6MC44O1xuXHQgICAgICBkaXNwbGF5OmZsZXg7XG5cdCAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcblx0ICAgfVxuXHQgICBzcGFuIGl7XG5cdCAgICAgIG1hcmdpbi1yaWdodDo1cHg7XG5cdCAgICAgIGZvbnQtc2l6ZToxZW07XG5cdCAgIH1cblx0ICAgc3Zne1xuXHQgICAgICBtYXJnaW4tdG9wOi0zMHB4O1xuXHQgICB9XG5cdCAgICNwcm9maWxlUGlje1xuXHQgICAgICB3aWR0aDoxMzBweDtcblx0ICAgICAgaGVpZ2h0OjEzMHB4O1xuXHQgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblx0ICAgICAgbWFyZ2luLWJvdHRvbTotODBweDtcblx0ICAgICAgYm9yZGVyLXJhZGl1czoxMDAlO1xuXHQgICAgICBvdmVyZmxvdzpoaWRkZW47XG5cdCAgIH1cblx0ICAgI3Byb2ZpbGVQaWMgaW1ne1xuXHQgICAgICB3aWR0aDoxMDAlO1xuXHQgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcblx0ICAgICAgdG9wOjA7XG5cdCAgICAgIHJpZ2h0OjA7XG5cdCAgICAgIGNvbG9yOnRyYW5zcGFyZW50O1xuXHQgICB9XG5cdCBgfTwvc3R5bGU+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ernesto\\\\Desktop\\\\iBox\\\\components\\\\ProfileHeader.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileHeader);

/***/ }),

/***/ "./credentials/servers.js":
/*!********************************!*\
  !*** ./credentials/servers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);


const firebaseConfig = {
  apiKey: "AIzaSyCGvwqW84GmsUfNS2DjPwN0d5nlYvGB7Hc",
  authDomain: "ibox.gt",
  databaseURL: "https://iboxshops.firebaseio.com",
  projectId: "iboxshops",
  storageBucket: "iboxshops.appspot.com",
  messagingSenderId: "947837339959",
  appId: "1:947837339959:web:7f6c331d8b066ad1a132b2",
  measurementId: "G-8CDH8Z2YXB"
};
if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/cuenta.js":
/*!*************************!*\
  !*** ./pages/cuenta.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks */ "./utils/hooks.js");
/* harmony import */ var _components_Logins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Logins */ "./components/Logins.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Profile */ "./components/Profile.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\pages\\cuenta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Cuenta = props => {
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
  Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_1__["useAuth"])(user => {
    if (user) setPage(__jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    }));else setPage(__jsx(_components_Logins__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }));
  });
  return page;
};

/* harmony default export */ __webpack_exports__["default"] = (Cuenta);

/***/ }),

/***/ "./utils/hooks.js":
/*!************************!*\
  !*** ./utils/hooks.js ***!
  \************************/
/*! exports provided: useDB, useInterval, useLogout, setProviders, useLogin, useAuth, useAuthError, user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDB", function() { return useDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return useInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogout", function() { return useLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProviders", function() { return setProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogin", function() { return useLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthError", function() { return useAuthError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _credentials_servers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../credentials/servers */ "./credentials/servers.js");
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dexie */ "dexie");
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dexie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_3__);



 //local DB

let db = {};
const useDB = () => {
  db = new dexie__WEBPACK_IMPORTED_MODULE_2___default.a("localDB");
  db.version(1).stores({
    user: 'key, user'
  });
  db.open().then(() => console.log("OpenDB")).catch(err => console.log("Error during open db ", err));
}; // Intervals for states

const useInterval = (callback, delay) => {
  const savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    savedCallback.current = callback;
  }, [callback]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}; // Firebase Auth

let fbprovider, gprovider;
const useLogout = () => _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signOut();
const setProviders = () => {
  fbprovider = new _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth.FacebookAuthProvider();
  gprovider = new _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider();
  _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().useDeviceLanguage();
  fbprovider.setCustomParameters({
    'display': 'popup'
  });
};
const useLogin = data => {
  if (data.type === true) _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().createUserWithEmailAndPassword(data.email, data.pass).catch(data.err);else if (data.type === false) _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithEmailAndPassword(data.email, data.pass).catch(data.err);else if (data.type === "fb") _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithRedirect(fbprovider).catch(data.err);else if (data.type === "g") _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithRedirect(gprovider).catch(data.err);
};
const useAuth = listen => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().onAuthStateChanged(user => {
      if (user) listen(user);else listen(false);
    });
    return () => unsubscribe();
  }, []);
};
const useAuthError = code => {
  switch (code) {
    case "auth/app-deleted":
      return "Fallo la conexion interna, intenta recargar la pagina.";

    case "auth/app-not-authorized":
      return "Esta aplicacion no esta autorizada para iniciar sesion aqui.";

    case "auth/argument-error":
      return "Se envio una solitud con parametros incorrectos.";

    case "auth/invalid-api-key":
      return "Las credenciales de la aplicacion son incorrectas.";

    case "auth/invalid-user-token":
      return "Parece que tu cuenta se invalido.";

    case "auth/network-request-failed":
      return "Comprueba tu conexion a internet.";

    case "auth/operation-not-allowed":
      return "Se trato de inicar sesion en proveedor no autorizado.";

    case "auth/requires-recent-login":
      return "Se registro una sesion anterior con el mismo usuario.";

    case "auth/too-many-requests":
      return "Se alcanzo el limite maximo de intentos.";

    case "auth/unauthorized-domain":
      return "Este sitio no esta autorizado para iniciar sesion aqui.";

    case "auth/user-disabled":
      return "Este usuario ha sido deshabilitado.";

    case "auth/user-token-expired":
      return "Las credenciales del usuario han expirado.";

    case "auth/web-storage-unsupported":
      return "Tu navegador o dispositivo no soporta el almacenamiento interno.";

    case "auth/account-exists-with-different-credential":
      return "Esta cuenta ya existe y esta registrada con otro metodo.";

    case "auth/credential-already-in-used":
      return "Las credenciales de esta cuenta ya estan en uso.";

    case "auth/email-already-in-use":
      return "Esta direccion de correo electronico ya esta registrado en otra cuenta.";

    case "auth/user-not-found":
      return "No se ha podido encontrar el usuario, intenta nuevamente.";

    case "auth/weak-password":
      return "Tu contraseña debe contener al menos 6 caracteres alfanumericos.";

    case "auth/invalid-email":
      return "El correo electronico no es valido.";

    case "auth/wrong-password":
      return "La contraseña no es la correcta, intenta nuevamente.";

    case "auth/invalid-verification-code":
      return "El codigo introducido no es valido.";

    case "auth/invalid-verification-id":
      return "El ID de verificacion no es valido.";

    case "auth/captcha-check-failed":
      return "No se pudo verificar el Captcha, intenta nuevamente.";

    case "auth/invalid-phone-number":
      return "El numero de telefono no es valido.";

    case "auth/missing-phone-number":
      return "El numero de telefono es un campo obligatorio.";

    case "auth/quota-exceeded":
      return "Se alcanzo el limite de SMS para verficacion.";

    default:
      return "Error desconocido intenta de nuevo.";
  }
};
const user = _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser;

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/cuenta.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ernesto\Desktop\iBox\pages\cuenta.js */"./pages/cuenta.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "dexie":
/*!************************!*\
  !*** external "dexie" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dexie");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=cuenta.js.map