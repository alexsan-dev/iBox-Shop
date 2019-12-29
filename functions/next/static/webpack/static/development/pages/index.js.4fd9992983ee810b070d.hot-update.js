webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Slider */ "./components/Slider.js");
/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProductCard */ "./components/ProductCard.js");
/* harmony import */ var _components_Recents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Recents */ "./components/Recents.js");
/* harmony import */ var _components_Middle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Middle */ "./components/Middle.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_box_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/box.png */ "./assets/box.png");
/* harmony import */ var _assets_box_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_box_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\pages\\index.js";

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
const recents = {
  exit: {
    opacity: 0,
    x: -200,
    transition
  },
  enter: {
    opacity: 1,
    x: 0,
    transition
  }
};

const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
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
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
    variants: pageAnim,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: "Ver tienda",
    img: _assets_box_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    href: "/tienda",
    icon: "store",
    text: "Entra hoy a la tienda, empieza a comprar y te lo llevamos a tu casa \uD83D\uDE09, en iBox entendemos tus gustos, conoce nuestro cat\xE1logo.",
    title: "\xA1Tu tienda de electr\xF3nica y accesorios en l\xEDnea!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
    variants: slideAnim,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_components_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
    variants: recents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(_components_Middle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
    variants: slideAnim,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_components_Recents__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
    variants: fAnim,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    store: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.4fd9992983ee810b070d.hot-update.js.map