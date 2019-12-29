webpackHotUpdate("static\\development\\pages\\cuenta.js",{

/***/ "./utils/Alert/Alert.js":
/*!******************************!*\
  !*** ./utils/Alert/Alert.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMsg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Alert_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert.css */ "./utils/Alert/Alert.css");
/* harmony import */ var _Alert_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Alert_css__WEBPACK_IMPORTED_MODULE_1__);

 // Create Elements

const container = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div");
const box = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div");
const title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4");
const p = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p");
const actions = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div");
const input = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input");
let counterInstancer = 0;
class ShowMsg {
  constructor() {
    if (counterInstancer === 0) {
      //Append Child
      container.classList.add('alertContainer');
      container.classList.add('unactiveAlert');
      container.appendChild(box);
      box.appendChild(title);
      box.appendChild(p);
      box.appendChild(input);
      box.appendChild(actions);
      document.body.appendChild(container); //Values

      input.type = "text";
      input.classList.add("alertInput"); //Props

      this.alertProps = "";
      counterInstancer++;
    }
  }

  showMsg(data) {
    //Variables
    let go = document.createElement("button");
    let cancel = document.createElement("button"); //Show container

    container.classList.add('activeAlert');
    container.classList.remove('unactiveAlert');
    container.style.display = "block";
    setTimeout(() => {
      container.style.opacity = 1;
    }, 10); //Events

    actions.appendChild(cancel);
    actions.appendChild(go);
    go.addEventListener('click', () => {
      container.classList.remove('activeAlert');
      container.classList.add('unactiveAlert');
      container.style.opacity = 0;
      setTimeout(() => {
        container.style.display = "none";
        actions.removeChild(go);
        actions.removeChild(cancel);
        cancel = '';
        go = '';
      }, 300);
    });
    cancel.addEventListener("click", () => {
      container.classList.remove('activeAlert');
      container.classList.add('unactiveAlert');
      container.style.opacity = 0;
      setTimeout(() => {
        container.style.display = "none";
        actions.removeChild(cancel);
        actions.removeChild(go);
        go = '';
        cancel = '';
      }, 300);
    });
    if (data.onConfirm) go.addEventListener('click', () => data.onConfirm(input.value)); // Type Conditionals

    cancel.classList.add("hide");
    go.classList.add("goAlertBtn");
    cancel.classList.add("cancelAlertBtn");
    go.classList.add("waves-effect");
    cancel.classList.add("waves-effect");
    input.classList.add("hide");

    if (data.type === 'alert') {
      actions.classList.remove('errorType');
      actions.classList.remove("confirmationType");
      actions.classList.add("primaryType");
    }

    if (data.type === 'error') {
      actions.classList.remove('primaryType');
      actions.classList.remove("confirmationType");
      actions.classList.add("errorType");
    }

    if (data.type === 'confirmation') {
      actions.classList.remove('errorType');
      actions.classList.remove("primaryType");
      actions.classList.add("confirmationType");
      cancel.classList.remove("hide");
    }

    if (data.type === "input") {
      actions.classList.remove('errorType');
      actions.classList.remove("primaryType");
      actions.classList.add("confirmationType");
      cancel.classList.remove("hide");
      input.classList.remove('hide');
      input.placeholder = data.placeholder ? data.placeholder : "";
      input.value = "";
    } // Add Text Content


    title.textContent = data.title;
    p.innerHTML = data.body;
    cancel.textContent = "CANCELAR";
    if (data.succesText) go.textContent = data.succesText;else go.textContent = "ACEPTAR";
  }

}

/***/ })

})
//# sourceMappingURL=cuenta.js.9026e7fbbc8efb417f00.hot-update.js.map