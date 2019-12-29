webpackHotUpdate("static\\development\\pages\\cuenta.js",{

/***/ "./utils/Alert/Alert.js":
/*!******************************!*\
  !*** ./utils/Alert/Alert.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alert; });
/* harmony import */ var _Alert_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert.css */ "./utils/Alert/Alert.css");
/* harmony import */ var _Alert_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Alert_css__WEBPACK_IMPORTED_MODULE_0__);

let counterInstancer = 0;
document.createElement("div");
document.createElement("div");
document.createElement("h4");
document.createElement("p");
document.createElement("div");
document.createElement("input");
class Alert {
  constructor(dom) {
    if (counterInstancer === 0) {
      // Create Elements
      this.container = dom.createElement("div");
      this.box = dom.createElement("div");
      this.title = dom.createElement("h4");
      this.p = dom.createElement("p");
      this.actions = dom.createElement("div");
      this.input = dom.createElement("input"); //Append Child

      this.container.classList.add('alertContainer');
      this.container.classList.add('unactiveAlert');
      this.container.appendChild(this.box);
      this.box.appendChild(this.title);
      this.box.appendChild(this.p);
      this.box.appendChild(this.input);
      this.box.appendChild(this.actions);
      this.dom = dom;
      dom.body.appendChild(this.container); //Values

      this.input.type = "text";
      this.input.classList.add("alertInput"); //Props

      this.alertProps = "";
      counterInstancer++;
    }
  }

  show(data) {
    //Variables
    let go = this.dom.createElement("button");
    let cancel = this.dom.createElement("button"); //Show container

    this.container.classList.add('activeAlert');
    this.container.classList.remove('unactiveAlert');
    this.container.style.display = "block";
    setTimeout(() => {
      this.container.style.opacity = 1;
    }, 10); //Events

    this.actions.appendChild(cancel);
    this.actions.appendChild(go);
    go.addEventListener('click', () => {
      this.container.classList.remove('activeAlert');
      this.container.classList.add('unactiveAlert');
      this.container.style.opacity = 0;
      setTimeout(() => {
        this.container.style.display = "none";
        this.actions.removeChild(go);
        this.actions.removeChild(cancel);
        cancel = '';
        go = '';
      }, 300);
    });
    cancel.addEventListener("click", () => {
      this.container.classList.remove('activeAlert');
      this.container.classList.add('unactiveAlert');
      this.container.style.opacity = 0;
      setTimeout(() => {
        this.container.style.display = "none";
        this.actions.removeChild(cancel);
        this.actions.removeChild(go);
        go = '';
        cancel = '';
      }, 300);
    });
    if (data.onConfirm) go.addEventListener('click', () => data.onConfirm(this.input.value)); // Type Conditionals

    cancel.classList.add("hide");
    go.classList.add("goAlertBtn");
    cancel.classList.add("cancelAlertBtn");
    go.classList.add("waves");
    cancel.classList.add("waves");
    this.input.classList.add("hide");

    if (data.type === 'alert') {
      this.actions.classList.remove('errorType');
      this.actions.classList.remove("confirmationType");
      this.actions.classList.add("primaryType");
    }

    if (data.type === 'error') {
      this.actions.classList.remove('primaryType');
      this.actions.classList.remove("confirmationType");
      this.actions.classList.add("errorType");
    }

    if (data.type === 'confirmation') {
      this.actions.classList.remove('errorType');
      this.actions.classList.remove("primaryType");
      this.actions.classList.add("confirmationType");
      cancel.classList.remove("hide");
    }

    if (data.type === "input") {
      this.actions.classList.remove('errorType');
      this.actions.classList.remove("primaryType");
      this.actions.classList.add("confirmationType");
      cancel.classList.remove("hide");
      this.input.classList.remove('hide');
      this.input.placeholder = data.placeholder ? data.placeholder : "";
      this.input.value = "";
    } // Add Text Content


    this.title.textContent = data.title;
    this.p.innerHTML = data.body;
    cancel.textContent = "Cancelar";
    if (data.succesText) go.textContent = data.succesText;else go.textContent = "Aceptar";
  }

}

/***/ })

})
//# sourceMappingURL=cuenta.js.7d6f21185a98bb5f67e9.hot-update.js.map