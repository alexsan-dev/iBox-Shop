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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icons/material-icons.css":
/*!*****************************************!*\
  !*** ./assets/icons/material-icons.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/icons/style.css":
/*!********************************!*\
  !*** ./assets/icons/style.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/logo.svg":
/*!*************************!*\
  !*** ./assets/logo.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDI0IDEwMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHg9IjAiIHk9IjAiCiAgICB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQkFBQUFBUUFDQU1BQUFCSXc5dXhBQUFBeVZCTVZFVUFBQUQvLy8vLy8vLy8vLy8vLy8vLwovLy84Ly8vLy8vLy8vLy83L2YvOS8vLzYvLy85L2YvOS8vLzQrLy81L1AvMi8vL3krLzM2L2YvNC9mLzYvLy82L2YvMisvLzArLy84Ci9QLzIrdi92K3Yzcit2MzIvUC83L3YvKy8vLzQvZi9wK1Azei9QLzErLy81L3YvKy92Lzgvdi8xL1AvMi9mL3crLzd3K2YvcitQM20KOXYzeCt2L3QrdjNtK1AzdisvNzIvUC96Ky83eSsvN3orZi9uK1AzNC9QL3QrZjd4K3YzcCtQN3QrZi9rOXY3NC92L1o4ZjNQN2Z5RwoxdnJtOXY3cytQN2s5djMvLy8vbkx6REpBQUFBUW5SU1RsTUFPRlZ4amFwVnh1S05qVGlOY1kxVk9JMXhqWEdOalkxVk9JMk5WYXFxCmNZMVZxcXFxcXFweHFsV05qVGlOamFxcXFxcFZqYXFxamFwVnFxcHhWY2FxcW8wdGxCSzVBQUFsSGtsRVFWUjQydTNkYTN2YlZwSWcKNEtab2lwQXAyYkVkK1pJNGNkS2Q5RzNUM2JPelBadlo2OHo2Ly8rb0ZTWFprUnpKSVVXZ1RwM0MrMzdNOCtTeENPQVVxZ3FGZzkvOQpEZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBCkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEKQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQQpBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBS0NOeGRGT0ZxMy9UbUEwSDVmOTh0RnFKNCtXCjEvL0RzVkFBdlZvY2Y3THMxOFA3blF6ckQvL0h5VkpLQUwyNXZPY3ZUL1piOXA4SkJZK1h3Z0QwWUx2Mmw0OFBYZmgzeG9ITHlrQVUKZ0p3V0gvTDlFWmYrcjhMQU5nb0lBcERLMUd2L2RoU1FDa0FhaTZpMWZ6c1ZlTHowa0FEYXVsNzhjV3YvZGhRNFdVb0VvSTJHaS85RwpFTkFUZ0hDYjQ4dFdmOHZGZnlNUk9KVUlRSmpGMGRtVEZJdi9SaEI0SkFaQWdNWDIxcDlvOFlzQkVHV3hyZnJ6clg0eEFDYVhldlhmCmlBRWVEc0xZT2xqOUgyUEF5VklJZ1BGMHMvby94QUNsQUl5a3M5Vi9IUUl1U2dFaEFBN1U0K3IvRUFPa0FYQ1F4ZktrejlWL0hRSjAKQStDaHRqZi9mbGYvaHhpZ0VvRDk5WnY2M3hFQ25uN1IrbkJDUjhxcy91c1FzSHIyZk5QNm1FSWZhcTMrRHpIZ3haZENBUHltUmNwQgovekZDd1BtWlpnQjhUb1cyMzJkQ3dPbVpMQUR1VVRIMS96UUVuT3NGd0IwMngwVlQvMDlEd0VzaEFENnhPRHVmd2VxL0RnR3ZYcmMrCjNKQkk2Y0wvcmhDd01ob0VWK29YL25kRUFOT0JzTlgzcVA5QkljQURBV1p1YnFuL0p5SGcvTGoxQ1lCbTVwajZmeElDdEFLWXE3bW0KL3JjamdGWUFjelRyMVArV1lYMTYxUHBzUUNTcC95M3FBT2FrNnBzK0QzZFJCM3o1UmV2VEFnR2svbmNhMXMrZXRqNDFNREdwLy8yRwpsYUVBS2x2TTQwMmZCeHZXVHd3RlVKVm5mcjlORWtCTkN2L2RET3RYa2dDS1VmanZZVmc5ZjlQNmhNRjRGc3RUcTM4UHcvb3Jqd01vClF1ci9BTVBLWUNBRlNQMGZ5R0FnL1RQdTkzREQra1F2a0k1Si9RK2tES0JiVXY4UktBUG9rdFUvRW1VQS9USHVOeUpsQUYxUitJL00KVUJEZGtQcFBZRmgvL2JiMWlZWGY1cG5mUkladk5BSklUdW8vSVkwQVVwUDZUMHdFSUMyclA0Qk5Bc2pKTTc4WWRnb2lINFYvb09GYgpaUUNKU1AyRGFRU1FoMmQrOFVRQWNwRDZ0eUVDMEo3VXY1MWg5YzVjTUEwdGpxMytsb2IxZDkrM3ZnYVlMYy84Mmh0K2I3dFFXbEQ0CjV6RDh3VUFBNGR6ODB4aCswQW9rbEp0L0toNEdFR2lqNzVlTkNFQ1V4ZGtycXo4ZEVZQUkyNXUvMVorUkNNRGtGbWN2M2Z5ekVnR1kKbEp0L2NpSUEwMW1jbmJ2NUp5Y0NNSkdGbTM4UFJBQ21ZUG4zUWdSZ2JFci9ub2dBak1wRC84NklBSXhuc1R5MStqc2pBakFTcFgrWApSQURHc0ZnK3R2eTdKQUp3c01YWmllWGZxK0ZiK3dOd2lJM2wzN1hoUjNzRThXQ2I1K2VXZjkrR1AvcCtPQS96NWs4dkxmL3VEWC8rClMrc0xpUzQ5L2F2bFg4SHdYMzVxZlNuUm44VnlaZm5Yc0g3WCttS2lONXN6RC83TDhEQ1FQUjByL2lzUkFkaUg3TDhhRVlDZEdmc3QKYUZnWkNHSW5Sd1ovS2hxK01SREViNVA5VnpWODVkUEIvSllqNy95V3RYN2UrdW9pT2JmL3lqUUMrYndqemIvU1JBQSt3KzIvUEk4Qwp1TStiZDI3LzlRM2ZlRE9RdTd6OXp2S2ZnK0Z2SGdYd2EwYy9XUDd6NEZFQXYvTG11ZXAvTGpRQytkVFRyNlQvODZFUnlHMUhidit6Ck1yell0TDdreUdOelp2MS94ckJlM2EzanBHbDkxdnFpSXczdi9kL3R3OEovdER5NjIvS2syMGlnRGNBSDB2OVBYYS84ayt1RnY3ajMKMEMwK1JJSkgzVVVCYlFBdXZYbG4vZDl3dWZhdmIvbUwzWS9pTmhJc1Q3dUtBc081TmdDR2YyN1lMdjdMdGIvSHlyOXBjWjBMZEhKRQp0UUg0M2ZFM2ZWeXNrL3V3K0IrNDluK3h1QXdDUGNRQWJRQ1UvMXZieGY5NGpNWC93V0piRHVTUEFTTEEzRm4vbDZ0L2xEdi9KeFpIClorZnBZOEJ3TXZiUHBpT2UvbTl2L1NmTDBSZi9oK043dkR4SkhnUFd5OVlYSWMwY1A4bDljVTV0b2x2L0xZdmozUDBBUmNCOHpUdjkKdjFyOUVRbnc0aWp6QnV2RHlqYkI4elRyOVQrc2cxYi9sY3pmV0JqK2FtK0FPWnJ4K3IrNCtaOHVnNXRmaTJYYTd5ellHMkNPWnJ2Kwo0MUwvVHl6T3puT0dnR0gxdXZYVlNMUzVydi9nMVArMnpmTlhLVVBBOE1wSThMejhOTS9wL3hhcC8yMmI1eWxmdXpRU1BDOS8rWHZHCnEzQml6VkwvMnpiUEV4WUMzZ3VjbGJmL1NIY0ZUbitKdDB6OWI5dWNQVTRYQWd3RXpzalRmOGwyK1UxK2VhOVhqOXVtL3JjbGZDaG8KSUhBMjN2NCsyYlUzc1NTcC8yM3BQcitrQ0ppTHQvODExNVUzOVlXZEovVy83VGhaSzBBUk1BK3pXdi9aVXY5YnNyMklwUWlZZzdmLwptdXFpbTFMSzFQK1dwMTluU2dJVUFUTXduL1dmTnZXL0tkZW5tSXdEbFRlWDlaODY5YjhsVlJKZ0hLaTRlYXovL0tuL1RabVNBQzhHCjEvYmYvcHptVXB2d0l1NGg5YjhsMGE0c1hneXU3S2QvWnJuT3BydUExNnVUUGxML214STlEdkJpY0dIdjFxMHZyMm4xbGZyZmt1YlYKek9GUmw4ZVBIYVM1eUNhNmRMdEwvVzk2L1N4SkdXQVlvS3JTNi8vaTVuOSsxdTNxMzhwU0JoZ0dLS3J3K3I5ODVuZmMvU1BzSkdmSQo1d0pMU25KMVRYQzk5bHY0LytvY2ZadmlIQmtHS09pNDZQcnZ1L0QvMVZsS3NWK1lQbUE5VDB0Ky9yT2ZjYjlkNVdnRTZBTldzM21WCjRMSWFXYUhVLzZZTXBabzlncXM1S3pjQVVDdjF2eWxGQkhpbUQxaEpobXRxMU91enkzRy9uczdXK3N2V1I0SHhaTGlpeG5OWitOZTgKK2VjNVg4UGp5Z2Q0WmlvOUFDaGErSDk2eHRxM2JQVUJ5eWpVQUt4YitIL2k5YisxUG1jZUJaWlJwUUhZL3BzK2dkcnYyeUFGS0NKQgpRVG1DZWFUK056U1BBRjRKcUtIRStwOU42bi9EMjlaN3R3eFBQQXJzMzlQKzEzL3RaMzczKy82L056NTFYZ25vMzV1Zk8xLy85Wi81CjNhOTFCUENka1A0OTc3b0JPTHZDL3hQZk4vNkNxejVnNzdwdUFNeXg4UDlFNHdoZ0dxaHppNU51MS8rc252bmQ3MjNicnpoTEFmcTIKN0xRQW1IdnFmMFBiMTdoTkEzV3Qwd0pBNm4vVGNkTk5ncVFBSGV2eUNlQmNuL25kcjJrWWx3TDA2NHRuM2EzL09UL3p1MS9UQ0NBRgo2TmFYblRVQUZQNzNhUmtCcEFDOTZ1d2RZSVgvWjdTTUFGS0FQbTJlZExUKzYrM3RPYktHODF4U2dENzE4dzZ3MVArM3ZmbXJGSUI5CmRQTUVRT3EvazdkL2FIWStwUUFkZXZOVkYrdmZNNytkTld6cFNBSDYwOE03UUo3NTdhVmRJMUFLMEozRm8rd0pnTUovYiswaWdCU2cKTjhuZkFiRDZINlJaWDFjSzBKbmM3d0JvK3ozUXB0bG9weFNnSzVrTEFHMi9BN3h1RmRpbEFGM0pXd0M0K1IrbVdXb25CZWhJMWdUQQp6Zjl3clo3dVNBRTZrak1CY1BNZlE3TTlYcVVBM1VqNUV0Q3dOdXMvaXFlTnRnZVJBdlJpOHlMZCtyL0kvYy9QWEQvamFOVUdrQUowCkl0MUxRTnZjLzlnblprYlQ2QVRiSUxnUDJUcUEyK1h2eWhsVHEya0Fud25xUXJJTzRMQ3kvTWZXYUJwZ2VDR055eTlYQWpDc243MXUKZlVRS2F2UXMwTWVDTzVBcEFiaFkvdS9jTkNidzV1c21VVjRiTUw5RUNjQ3dmdnlsNVQrTk5ydTllQktZWDVvRVFPOXZVbTJlQlVvQgpza3VUQU9qOVRheEpwSmNDWkpja0FSaldKL3BGMDJvVDZxVUF1U1haQ05UdFAwQ1RJc0F3VUdvNU5nSWQxdWR1L3dHYVpIdUdnVEw3ClU0WUNZRmlkNmYxSGFGSUVESytjM0xReWZBdlU3VDlPazNjQ0RBUGw5YTU5QXVEMkg2akpPd0hhZ0dtMTJ6SHl4dm8vYW4wVTVxVEYKT3dHZUJLYjFldFY2K2E5ZnlnOUR0ZWdEYWdObTFYb0dRUG9mYm5IYUlBVjQ2U3luMUhvSVVQcmZRSXZYQXJVQmMycWNBQXpmV3YveApXa3grYUFPbTFEWUJHTmF2dlBmZlFvUFpUMjNBbEpvbUFNci9aaHFjZDIzQWhGcTBnMjZzZitsL0t3MHlQMjNBaEZwOU1NYjZiNjNCClBLQTJZRHFiViswU0FPdS9xYzJUOEZPdkRaaE93eUVnNjcreCtBOUJhUU9tMDY0RmFQMDNGMy95bmZOazJqMER0UDdiaXovN2FvQmsKbW4wTnpQclBJRHdGVUFQazBxQVBaUDBuMGlBRk1BcVF5WEdqRnFEMW4wUjhDbkJ1RkNDUlJpMUE2eitMK0JUQUtFQWlqVnFBMW44ZQo0YmNBYmNCRWp0cFVBT3Qzclg4NEg0VGZBK3dQbmtpYkNtRDQ3azNySDg1SDRkZUE5QytOTmhYQThHOXZXLzl3ZmhGK0VhZ0IwbWp6CmxUaGRvRnlpcndLakFGa3NUbHA4SDBJR21FeDRDdUFLU0tMRkVJRDFuMDkwQ3FBR1NLTEoxdEJPZmpyUktZQWFJSWNXRmNCdzR0em4KRTMwbmtBV20wS0FDMEFCTUtUb0ZrQWFtMEdKVHlPZXRmelIzQ2I0VTFBQVpOS2dBaHE5TUFLVVVuUUtvQVJLSUh3TWVWazliLzJqdQpGcHdDcUFFU2lLOEFGQUJwQmFjQWFvRDI0ajhITVB4TkFaQlc4TzFBRGRCY2VBV2dBTWdzK0pHUUdxQzU4QUJnTDZqTU51ZHFnSGtKCmZ3WGtsYTJnTWd2ZUhWWU4wRmo0K0tjUm9OeUNMd2cxUUdQUkZZQVRubDFzU3FnR2FNenNGN2NGcHdCcWdLYWl4d0FsQVBuRjNoUDAKaEpzS3JnQ0dVd2xBZXJIWHhQQkVVN2loNEFBZzNIY2dPQ3ZVRlc0cHVPTmpGNEFleEY0VW1nQU5SVC96a1FEMElQYXEwQlpxS0xqYwprd0QwSVRRRjhHQ29vZGdBSUFIb1JPeGxvUVpvSnpiVVN3QTZFZHNHZEY5b1JySEhuV0p2REI0RXRoS2E2cW4xK2hGN1ovQWdzSlhRCkFDQUI2RWhvQ3FBSjBFcmthWjV4QXJBNCtxaVhZK0RXTUFlaHZaNVpudVhMcGI5OHRQcm8wYktQTUJCYUE4ejQzdEJXNlBaUHN5djAKRmgrVy92ckdXaHJXMi85eXNrd2ZBOVFBTXhDWjV3M25zMnIxTG82WHA3ZVgvcTJEc2Q2bUFxbGpRR2dOSUFDMEVYbVNaL1d3ZDdFOAp1WGZ4ZHhJREZvK1ZoK1VGcG5sekt2TVd5MGZyWFZiUFJRdzRYYVk5TEJyRTVVVUcrZm5FK0YyWC8zVU1lSlExQk1RMmlOUUFEVVJXCkFITTV3M3N0LytzUWNKYXlPN0o1RVZnRHpPWHl5Q1V3QU13a3g5dWM3Ym44cjBMQXk1UVBTQ0wzQjU5UGdwaEpZQUNZeHdsKy9Xci8KNWI4MXJESW1BWkUxd0V4dUVNa0VCb0E1cEhodjNxMGVtalFQNi9OOFNZQWFvTHE0UHU4Y0F2emI3eDUyKzc4K1FnbFhRR1FOa1BEbgpseGM0N1RtREN1RG9oOE9PWnNJeUlMSUdtTUVWa280S1lOU0RlV2cwSGRZdlg3ZitGYmRGdmlveWh4d3htN2dBVVAvc0hyNyt0NGZwCngyUnhNbklXcVA0OUlwMjRBRkErdnh0bC9lZHJCQmdVS1MzdTlGWS91U090LzNRUllIRnFWTFN3dUFRdjEyVTl1dEhXZjdvSUVQbXkKeU9QcVpXSTJjUThCaXAvYkVkZi90ZytRcVJPb0JpaE1DMkNzNHpocUlCMWVKbm9hR0xrdmtBQVFUQXRnRk1manJ2OWtHeWNFMWdDbApyNUtNQklBeGJGNk5mWTlNMVFid3VraGRZZWUyOUJUQUJPT3lRNkxkRXdPSEFVdGZKaG1GQllES29YM2tCc0QxVXNqekNiWE5FMDJBCnFzTEt1OEluZHFJOWxSS0Z6TUFYZ2dwZkp4bkZOWGdMbjlpSmdtaWlJaUN5Q1pDcCsxbWZIdURoWGs5UkFHd05MN0k4Q3d4OEVKam4KUjg5Q1hBK3c3QmpRNXRsa2l5UFAzVER5UVdDYXZHY085QUFQOW55NnRaR25KZTZsOGFMQ1RtelowenJwNi9KcHdxWUFVSlFBY0toSgpHK1JwVW9EQWowZVV2VkpTRWdBT3REbWZkR1drU1FIaW1nQnBmdklzQ0FBSG1uaElMazN2MU1aUk5VV2QxN0puZGVvN1k1YkFxUWxRClU5UjVyWnJYVGY2QVBNdUIwd1NvS2FxMHEzcFNKNStSVFpNNjJUbXFvckFKcjZJbmRlSVc0RmFXRk1ET01SWHBBUjRtNEQzWjRUUkgKQ3FBTFdKRUFrUC80SlRsMG1nQVZDUUNIaVNpTXMyVEVtZ0FGQ1FBSENXbWhaTW1JdlRoYWtBRFF3ZUZMY3V3RWdJTE1BWFZ3K0pMVQpBSEY3QWlUNXdYTmdEdWdnTVdWeGx1Z1oxZ1RJOG9ObklDb0ExRXpxb3U2SlNjS25HcUFlQWFDSG81ZGtmMkFCb0I0Qm9JZWpsK1R3CkNRRDFDQUE5SEwwa05ZQWRwT3NSQUhvNGVsbTZZbUZkd0J3QmJ3NEVnQjZPWHBiakZ4ZndjalE5WmtBQTZPSG9aYmtsQmdZOFc0UEgKRUFCNk9IcFphb0M1WlR3eklBRDBjUFRlSi9sRWlDNWdPUUpBRDBmdnduQ2U0WU5admlSYmpRRFF3OUc3UElJWnF1S1pEVDdNZ0FEUQp3OUhiU3RFR25Obmd3d3dJQUQwY3ZhMFViVUNma3ExR0FPamg2S1U1aEI0RFZDTUE5SEQwTG1YSWl1UDJCYXg1d2VRakFQUnc5QzZsCnFBRThCaWhHQU9qaDZGM0pNQXJnTVVBeEFzQWg0Z1pqdGpLTUFnZ0F4UWdBQjRuYktmdnlJTFlmQlJBQWloRUF1amg4VnhLMEFRV0EKWW13SzJzWGh1NUtnRFJqd0tiVFNGMHc2dGdYdjR2QmRhMzliRFBnWWF1a0xKaDBwM1VGaXU0QVpib3VUZnc2OTlnV1RqZ0J3bU5ndQpZSUxib2d1bUZ1ZXprK04zcGYwb2dBdW1GdWZ6TU1FMXdQQ3k5U2lBQzZZVzUvTkFzVFZBKzFFQUYwd3RpOU9nTzFqVjh4bGRBN1J1CkF3b0F4VVRkd2FxZXorZ2FvUFY3OG1HL3Qrb0ZrNDFKb0FORjF3Q3QxNFU3UmkxaGswQ3RiMTFUQ1p1TnU5SThrTHBqMUtLbU85RG0KUld3TjBIb1V3QjJqRmdIZ1VHR3pjVmRhandLNFlHcHhQZzgxczFFQUYwd3R6dWZCNWpVSzRJS3B4Zm5zNXhCZWFkd2RjOEhVNGxNUApCNHV1QWRxMkFRV0FXc0t1M3VidDYrbk1haFRBSkZBeE5ubysyTHhHQVV3QzFTS2xPMWpZTmpsWFpsSUQxTDFlY29sckFqUi9sMzB5CnN4b0ZFQUJxaWZ2ZVk0SnQ3U2NTM1Fac2VpUUZnRm9Ddi9mWStsMzI2Y3hwRkVBQXFNVUhYN3M2aUplYXRnRUZnRm9FZ0JITWFSUkEKQUtnbDd0cXRPd28wcTFFQUFhQ1lzR3UzOENqUW5Hb0FHd0lVb3dZWXdlSmtOaldBajBrVkl3Q01JYmdHYURnS1lIS3NtTGdBVURtcAptODhvZ0FCUVRGd0FLSjNVeldZVVFBQW9KckIvVmZtVXpxWU5LQUFVRTlpL1VnT01wbDAySlFCVUU1ZThxZ0VLTEE4YkFsU2pCdWp0Ck1HNjF5NlpzQ0ZCTTRKVmJ1Z2FJK3N6aWxmbzFnQUFRSkRBQURLZHFnTEUwQzZZQ1FER1I3YXZLSnpXNkRYalNLSmdLQU5VRTNyb3EKMXdCemFRTUtBTldvQWJvN2psdXRncWtBVUUza2hWdjVyTTVrRkVBQXFDWXlBS2dCUmp5V2JkNElFZ0NxaWJ4emxaNEZDcTRCR24wbgpWQUFvSi9MT1ZmbTBMaDZIMWdDTjNnZ1NBTXBSQTR4a0ZxTUFBa0E1a1FHZ2RBMFEvSkd3TnNkU0FDZ245THF0bkFKc1hnWFhBQzNXCmlBQlF6dVpKNEhWYk9nV0kva2hZaTJBcUFOUVRldDBXL2tqZ0xFWUJCSUI2UXA5Zk5YcDZGV01HYlVBQm9KN1k1bFhoandTR2p3STAKR0swV0FPcUovY0o5NVRaZytDaEEvQ29SQUFvS2JRS1ViZ1BXcndFRWdJSmlNOWZTS1VENU5xQUFVRkJzRTBBS01KNzRaeW9DUUVIQgozN2FybkFLVWZ5UElwcUFWeGQ2M0txY0F3VFZBK0RNVjI0S1hOSlBkYkNJVWJ3UDZNRWhKOVh0WFlhSnJnT0JES1FEVVZQeStGU2k0Cm54SzlVQVNBbW9yZnR5TFZqcVVDUUUzQnI3S1hUZ0ZLbDFNQ1FFMngwOEFYbDIzaE53Sktwd0FDUUZIQnI3Sy9IMTZVZlNtdzlCdEIKVVQrdWNwR1lVdkJWVzNsZmdQQlJnTWg3WmRSMVVyaEd6Q242cXEwYzRpdlhBQ2FCcXdxK2FpdkgrTXFQVkFTQXFzSnJnTHA5d09oUgpnTWhxU2dDb0tyd0dhUGVGNjhrRloxT1Jid1FKQUdXRjF3QjFpNERDYndRSkFHV0Yxd0NGaTRDNmJVQnZBNWNWWHdQVUhRWW8yd2IwCk5uQmg4VFZBMldHQXNxTUFCZ0VMaTY4QkxvcUFvdWU1YWcwZ0FCVFdvQVpvc3JOOWhLcmZDUlVBS210UUExUjlFckI1RVR3S0VIUVkKQllES290OEozcXBhQkFTL1hCVTFVeUVBVkJiOVR2RFZwVnZ6VkJjZEJSQUFTb3QrSi9qUzhNUFQxcjk3Q2pYYmdHRnZBNWVkRWsydApSUnZ3NG1ULzdVM3JIejZCbXFNQVVXR3RhR3NvdlJadHdJdXovYnoxNzU3QTRyVGdHMEhtZ0lwck1Bcnd2bW9iSVBxTm9HY0JVNVZhCkFNVzFxUUZxUm9Ed051RHI2WCtUQUZCZG14cWdaZ1FvMkFZVUFLcDczYVFHdUlnQVA5WjdGQkRkQm53OGZSdFFBS2h1ODZwSkRYQngKK2Y3K2JldmZQcmFDYndRSkFPVTFHUVhZR3Y3OGZldmZQclo2TlVEWUx4SUFXbGs4YnBRQ3ZCLytVUzBDbEhzaktDNm5FUUNhYWRRRwozRjdBLy80L1d2LzRjWVcvRVRUMUtFQllCVkQxSmRFZU5Ib1NlSG5hLzJleENCRDlSdERVR3l5RkJRQ0RnQTIxU3dFdWNvQmFWVUMxCk40TDBBT2VnWVFyd2Z2aEhyV2NCeGRxQUFzQXNORXdCM2c5L0xEVVBVT3lOSUE4QlpxSE5Dd0VmcnVIL1ZXbXI4T2czZ3FaZE9CNEMKekVQMFZYdmI4RzJsazErcUJvaTdNd2dBVGJXc0FZcTlGeERjVUptMkJvaDdDbGozeTlGZGFOa0czSjcrMWJzNk80UlVTZ0U4Qlp5TAp0aW5BKzJIOVhabUhBZEZ0d0NtMzB0SURuSXZHS2NEMjVjQXFsMENoTjRMMEFPZWpjUXBRcVJGUXB3YlFBNXlQNWluQVJRUlkxbWdFCjFYa2pTQUNZa2VZcHdQdGgvYmpFWlZEbmphQzRhMElBYUs1OUNsQW1DWWgrSTJpcXpVRVhKMUdYaEtlQUNiUlBBYlpKd0dtQlcwR1YKelVIamFobFBBUlBJa0FJVVNRS0t0QUcxQU9ZbFF3cXdUUUlleFlhQXhkRnRJL3pqUlRZSEZRRG1KVWNLY0ZrSG5BVjg4dUozVjJ0LworV2gxMjZQbHdWR2d5QnRCZW9Bemt5TUZlTDhOQWVmUEp3OEJpNnUxdng1KzlZOWYvTmZUNVVFeG9FUU5FSGhERUFCU3lKSUN2Tit1CndtZVRob0RMMWI4ZVB2UHZiek9CQjhlQUVtOEV4VlVBSGdJa2tTWUZlSCtaQlp4TmRGbjgxdXIvOEFkYzVBRVAvUXVpVTRBcFJnSGkKbm1aNkNKQkUzSVBmWFF6cmh5L0F6L3pHblZiL2g3L2dvUTNKNkRiZytmanAwdVpjQlRBN3pUNFNjczkxZmJFQWo4ZU1BZnVzL285Lwp3VVArZ0FLYmd3Wk9OQXNBV1d5ZVpFb0IzbC9tNFNmTDQxRnViNHVqZlZmLzlWL3dvQkRRZnhzd01Ja1JBTkk0WGlXTEFKY3g0TlhaCmdURmdjM3kwZkx6YWYvVmYvd0VuKzk5ZiszOGpLRENFVGIyNU9idkwxQWY4NWZMZXhvQ0g5dVF2N3Z4bjV3OWQvTmYvL3Y3amlZRVYKOUtYUmI2S0JYNHlib29QQkF5VjZGSGo3SXJsOExyZG5FTGdjOURrOWJQRmYvK3NuK3k2dzRIYks2RFZBWUFVdytRZk8yRVBLRk9EUwpka0xuY2t4dmh6QndPZCs3UEZtTnNQaXYvL0Y5YjdHOWp3SkVWZ0JhQUltMDNTTDhONi96N1pqZWRrN3Y3ckg5RDNQOTI5dithR3YvCitsOWVQZDl2NDlLKzI0Q1JUNFFGZ0ZTZXAwMEJQcm9LQXgveWdWOThuT3NmZGVsLy9FZC8zdXNiUm4xdkRoclp4TlFEVE9YTlY1bFQKZ0ZzK0JJTFZoT3YrNWovM2gzMnUxTUF1MnFWeDc2T0JMWXpKUDNITWZwN21leFNZeFBEalBoR2c1eHBnOHlydUd0QUR6Q1p2SDdDMQp2U0xBNjQ1SEFVSXJBQzJBWktLVDE0NE1QKzdlQjRpOGkyNk5lU2VOYkdBSUFPa2NLUUx1TS96eCs1MFBZOGViZ3dZbWdkNEZUa2dSCmNLL2g3ei90ZWhUNzNSdzA4aS8zTG5CQ1dlY0JNMWkvMi9rd2R0c0dqUHpEVlFBWktRTHV0Y2RNWVBRb3dGakpkT2krRUFKQVNvcUEKZSsyK3pxSTNXQmxyTFVVR0xpMkFuQlFCOTlzOTFlNjBCb2o4czdVQWtsSUUzR3YzSXFEUE40SkMvMm9WUUZhS2dIdnR2dEM2M0J3MAp0SFVoQUdTbENMamZ6bmxyZEJ2d3lSaWpBS0ZSeTV0QWFTa0M3clZ6Q3REajVxQ2hmN1BkZ0JKTHRrZHdKanVuQUIyMkFVUC9aRzhDCkpSYTlyMTFIZGs0Qit0c2NORFpwMFFMSUxPRWV3Vm5zZXF2ZHZPaHRGQ0EwN3pNRmtGc0h1d00xc3ZPVjI5dm1vTEZwbnltQTNONTgKTFFXNHg2NlhibStqQUxFMWl3b2dPYnNEM1dmbmxkYlpLRURzbnlzQVpPZFo0SDEydlhhalJ3RmVIdlJjTFRaaDBRTElUeHZnSGp2WApBTkdiZ3g0MENoQ2JBR2dCNU5mUkpzR3gwdFlBaHl5cTRJNkZDcUFEVDM4VUFlNjA2OVhiMCthZ3djRktBT2lCTnNEZGRoNEZDTjRjCjlJQlZGZjNJNGxRTG9BY2l3SjBLamdMMFZLMFFSeVB3VHJ2ZWFyc1pCUWgvZFVrRjBJYzNQMHNCN3JEejlkdkxLRUR3MytraFlEZWUKZmlzQy9GcmFYUUVlT0FvUW5RQ29BUHFoRFhDSDNYY0ZpTjRjOUdHakFORjdRS2tBT2lJQzNDRnREZkNnVzJ0MEFxQUM2SW9JOEd1MQpOZ2VOVGdCVUFIMFJBWDVsOXh5Mmd3R2I4TTBmVkFDZCtkTER3RStrL1ViUUEyNnUwVHVYcUFDNjg4VXpLY0J0dXdlQS9EVkErQWFRCktvRHVQUDFHQkxobGp5UTIreWhBL0Nid0tvRCsyQ1B3dGoydTRlak5RZmNkQlFqL0RJd0tvRWNhZ2Jmc0VRQ2lkMWplY3hRZ1ByU3IKQUxva0F0eTBUeGFiK28yZ3paUHcwNm9DNkpNSWNNTStGM0hxTm1EOEoyQlVBTDBTQVg2eDExMHM4U2hBZzYxZlZRRGRFZ0UrMmlzQQo1QjBGYVBHeXB3cWdYeUxBQjN0ZHhjR2JnKzZSWXpmWTdrRUYwRE1SNE5wK3Q3R3Nvd0F0SHU2cUFMb21BbHpaTHdCRWJ3NzZhcmRSCmdBWlBBTWI1akRudGlBQ1g5Z3NBbStCUjZoMFhXWXVQd0EvbkIzMjloT1pFZ0swOU8xa3BSd0dhbk1sRHYxOUdjeUxBKzcwRFFQUW8Kd09NZEdtMU5QdjZvQlZpQUNMRGJDcnNwM3loQW0rMWV0UUFyRUFIMnZvN3pqUUswMmZEZEVFQUpzNDhBZTEvSDZVWUIycHhDRlVBUgpSei9NT3dMc2Z5TkxOZ3JRS0lTckFLbzRudlVPSVErNGtlVWFCWGphSm9CTEFPcDQrOVY2dmlIZ0lSdnZSWDhuOVBWbi9waFdXN3hKCkFBcDU4M3krallDSHRMSXlqUUswMnVUVkZHQXBzMjBGUGlpVFRUUUswT3JFRFNjcWdGTG1HZ0VlbHNtbUdRVm9kdHBVQU5VY3pmUEwKb1E5N21KMWxGS0RaK3RjQ3JPZjQxUXhiZ1ErOGtKT01BclJMMnlRQUJXM081bGNHUFBSQ1RsRUR0RnYvRW9DYVp0Y0llUENGSFB5QgpnRHZqVk1PekpRRW9hbTVUZ1ErK2tJTkhBZTRLVkMyanRkY0FxbnI3enprMUFnN0laSnVQQXJSYy84T3BDcUNxbjk3TnFBdzRJSk9OCkhnWDQ5TEY3MDJwTkJWRFpmSjRISHRUS2F0c0diTHIrdFFCcmUvcnpUTXFBZzdhMGFqa0swRGhOa3dBVU41TlhBNFluaCt4cDJYQVUKNFB1MmpSb0pRSDNITCtvbkFjT0JyN00wcXdHTy82WHR1WkVBek1BTWhvSU8zZE8yMVNoQTZ4Nk5CR0Flams1cUp3RzdmbkhqWG8xRwpBWm9QYTBrQVptS3hiSDJwVGVuUUF1QjM4YU1BMjR5bGZXWW1BWmlQbzhkbGs0QmhoRm0yNkZHQWIvNzMvL2xUKzk2TUJHQkd5aVlCClk2ei84RGJnOEgvL28vbnlsd0RNelBITDl0ZmNCTmJ2eGpnNHdhTUFLVWdBWm1aejlxaGVDQmkrZXpQR3NRa2VCY2hBQWpBLzllcUEKNGMvZmozTm9nbXVBQkNRQWMzUjhYaW9KR1A1enBQVWZQUXJRbmdSZ25pclZBY1A2bjM4WjdiZ0VmeUNnT1FuQVhDMldSVUxBc0hyMwowM2lISlhnVW9EVUp3SXpWQ0FIalBQLzc1YURFamdLMGR1ajBORjByMEEwY2ZoaDVMNnRadFFHSDh3T25wK25jMDJkZEp3SEQrcnUzCkl4K1JXWTBDckorM3ZnQnA3SXZuL1Q0UUdOYVAzbzN5K1ArbU9ZMENERCtQZnZqb3p1YXMweEF3ckpaVGRMRG1Vd01NcTZldEx6NHkKMkR4L3R1b3VCZ3pybDlOOHpYWStvd0FlQVhKdDg3cXpKd0xEK3VUTGlmcFhtNWM5SFloRGpxRkhnUHlpbzRlQ3czcDFmamJkeFR1WApVUUFKQUxmMEVRSXVWditqNWZHVVQ2OW1NZ29nQWVCVGk3TW55WnNCdy9yUjhtanFDM2NlYmNEMWw2MHZOL0xaSENkT0F5NXUvaThuClRQMC9tc1Vvd1BEc2k5WVhHeWt0emw1bFRBTXVWditMczBsVC8xK093QXhxQUk4QXVkZjJtVUN1R0hDeCtrK21MZnh2bVVFTm9BUEkKNXl5TzBzU0FpOFYvY2UrZnZQQy9xZjRvd1BCWUI1RFBTeEVETG52K1IzSDMvaXViSnlsQzM0VEcyVUtSNHRyR2dPMnQvMlQ2bnY5ZApxbzhDREgvMUVnQTd1WXdCOFVGZ3UvZ3ZidjFOVnYvdnlyY0JkUURadytJb05oRm92UGd2MVc0RGVndVlQUzJPenM0akVvRU1pMytyCjlDaUF0NEI1Z00zeFpUVXdXUlRZcnYwVWkzK3JjZzJnQU9DaExxcUJLYUxBeDdXZll2RmZLbHdEMkFlUWczeU1Bb2VIZ2N1VmY5bnIKVDdUMkw5VWRCVGo0Sytwd0ZRV3V3OEJENHNEMXlyKzg2eDhkNTFyN2x6Ym5SV3VBWWZXNjliR2xqTXN3OENFTy9HWW91RjcxdjZ6OApaSGY5VzZxT0FuZ0N3T2l1NHNDdFVIQ1g2MVdmZk9WLytFMDEyNEJHZ0pqU3gxQndsL3lyL3FhU2JVQlBBR0EzRlVjQlJ2Nk1FdFJWCnNRYndCQkIyVmE4R0dGNTRBZ2c3S2xjRERLdHB2cVFBRlMxT2F0VUFHZ0N3ajJJMWdGM0FZQisxMm9ERFNWK1BZYUcxU2ltQUJnRHMKcVZBYlVBTUE5bFdvQmpBQkFIc3JVd01NejB3QXdMNnExQUREdDE0QmdMMHRUa3ZVQUJvQThDQWxhZ0RySHg3bWRZVWF3QjRnOERDYgpaLzNYQVBZQWdZZnFmMmV3NGQvZXRqNkkwS3Z1UndHR2IwMEF3b04xM2diVUFJUkQ5RDBLWVAzRFFSYVBPNjRCckg4NFVNYzFnUFVQCmgrcjNJMkhXUHh4czg3TFhHbUQ5cnZXeGcvNzFPZ293L0wrZldoODY2Ritub3dERGYvNmw5WkdEQ3Jwc0F3Ny8rbjNyNHdZbDlEZ0sKTVB6ZUFEQ01vc01hWVBpakhVQmdKTjNWQU5ZL2pLZTNVUURySDBhME9lK3FCaGgrYi8zRGlMb2FCUmorb2Y4SFkrcXBEVGo4dStkLwpNSzV1Mm9ERCt1L21mMkJrdll3Q0RLdDM1bjloYkozVUFONy9nMGwwVVFOWS96Q05IbW9BNng4bXNqaEpYd05ZL3pDWjlEWEE4S1AxCkQxTkozZ1ljMXMrTS84RjBVcWNBdytwczAvb0FRV1daMjRES2Y1aFk0ZzhFV1A4d3ViUTFnUFlmVEM5cEczQllmKzN0UDVoZXloUmcKV0QxLzAvckF3QnhrVEFHVS94QWxYUW93ckY4ZXR6NG9NQmZaVWdCUC95RlNyaFJBK2craE1xVUF3L3F2aG44aFZKNFVRUGNmd21WNQpLM2hZdjlEOWczQkhxd3dSUVBjUDJraFFCQXpyRTdkL2FLSjlFVENzbG92V1J3SG1xbkVSTUt6UDNmNmhuYVpGZ09vZjJtcFlCQXpyCnJ6MzdoN1phRlFIRCtwRm4vOUJjbXdpZytRYzVOSWdBdy9vcjJUL2tFQjBCaHZYSk85ay9aQkVhQVM2S2Y5ay9aQklYQVN4L3lDY28KQWxqK2tGSklCTkQ2aDZTbWp3REQrbWV0ZjBqcStKc3BJOEN3WHYzOEo2MS9TT3Z0Vit1cFFzQzI5bjlxK1VObWI1NVBVd1pvL1VFWApqaDZObndSWS90Q0x4WExrSk1EeWg1NGNuNCtYQkF6cjFmbVo1UThkMlp5TlZBZHNiLzdITnZ5QXppeVdoNGVBaTV2L3Fkd2Z1blJvCkNOamUvSThzZitqVkFTSGc0dWIvUXVVUGZic0lBYXY5WThERjZsZjVRd1dMby8xaXdNWGl2eWo4cGY1UXhXVU0yQ2tJWE43Nmo2eCsKcUdWeDlCdEJZSHZqWDYwZXUvVkRVZGRCNE1vMkZGd3QraXZiRzc5YlA5UzJPTHEyRFFWWGkvNktwUTl6c3JEb0FRQUFBQUFBQUFBQQpBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBCkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEKQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQQpBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUtDKy93OWlkQTVJL1dtVE1RQUFBQUJKUlU1RXJrSmdnZz09IiAvPgo8L3N2Zz4K"

/***/ }),

/***/ "./components/Splash.js":
/*!******************************!*\
  !*** ./components/Splash.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.svg */ "./assets/logo.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\Splash.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Splash = p => {
  let display = true ? 'none' : undefined;
  return __jsx("div", {
    id: "splash",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3488087406", [display]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Logo",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3488087406", [display]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3488087406", [display]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3488087406", [display]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Mejora tu experiencia \uD83D\uDD25"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3488087406", [display]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "iBox es la tienda electr\xF3nica con el mayor impacto en Guatemala, creada desde cero para mejorar en cada detalle \uD83D\uDC4C, ay\xFAdanos a mejorar tu experiencia dej\xE1ndonos tu comentario sobre la tienda. \uD83D\uDCF2")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3488087406",
    dynamic: [display],
    __self: undefined
  }, `@-webkit-keyframes spl-__jsx-style-dynamic-selector{0%{-webkit-transform:translate(-50%,-50%) scale(1,1);-ms-transform:translate(-50%,-50%) scale(1,1);transform:translate(-50%,-50%) scale(1,1);}50%{-webkit-transform:translate(-50%,-50%) scale(1.2,1.2);-ms-transform:translate(-50%,-50%) scale(1.2,1.2);transform:translate(-50%,-50%) scale(1.2,1.2);}100%{-webkit-transform:translate(-50%,-50%) scale(1,1);-ms-transform:translate(-50%,-50%) scale(1,1);transform:translate(-50%,-50%) scale(1,1);}}@keyframes spl-__jsx-style-dynamic-selector{0%{-webkit-transform:translate(-50%,-50%) scale(1,1);-ms-transform:translate(-50%,-50%) scale(1,1);transform:translate(-50%,-50%) scale(1,1);}50%{-webkit-transform:translate(-50%,-50%) scale(1.2,1.2);-ms-transform:translate(-50%,-50%) scale(1.2,1.2);transform:translate(-50%,-50%) scale(1.2,1.2);}100%{-webkit-transform:translate(-50%,-50%) scale(1,1);-ms-transform:translate(-50%,-50%) scale(1,1);transform:translate(-50%,-50%) scale(1,1);}}#splash.__jsx-style-dynamic-selector{background:var(--primary);position:fixed;top:0;left:0;width:100%;height:100vh;z-index:101;opacity:1;display:${display};-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;}img.__jsx-style-dynamic-selector{position:absolute;top:40%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%;max-width:200px;-webkit-animation:spl-__jsx-style-dynamic-selector 2s ease-in-out infinite;animation:spl-__jsx-style-dynamic-selector 2s ease-in-out infinite;}div.__jsx-style-dynamic-selector{width:100%;font-size:15px;padding:20px;color:var(--backgrounds);background:var(--third);position:fixed;bottom:0;left:0;}div.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:var(--backgrounds);}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcU3BsYXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVlLEFBR21ELEFBQ00sQUFDSixBQUd0QixBQVlSLEFBU1AsQUFVYyxXQVRWLE9BVFAsT0FtQlgsQ0EvQmtCLEFBYU4sQUFTSSxTQVJtQixJQVNQLEVBdEJuQixNQUNDLE9BQ0ksVUFxQmEsQ0FwQlgsYUFDRCxVQW9CRyxFQW5CTCxVQUMyQixHQW1CNUIsU0FDRixPQUNULGtCQXBCc0MsQ0FkVyxBQUVFLEVBbUJ2QyxVQXBCMkMsQUFxQnJDLGdCQUNzQixtREFSeEMsMkZBU0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxlcm5lc3RvXFxEZXNrdG9wXFxpQm94XFxjb21wb25lbnRzXFxTcGxhc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tIFwiLi4vYXNzZXRzL2xvZ28uc3ZnXCI7XG5cbmNvbnN0IFNwbGFzaCA9IHAgPT4ge1xuXG5cdGxldCBkaXNwbGF5ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/ICdub25lJyA6ICdibG9jayc7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPVwic3BsYXNoXCI+XG5cdFx0XHQ8aW1nIHNyYz17TG9nb30gYWx0PVwiTG9nb1wiIC8+XG5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoMj5NZWpvcmEgdHUgZXhwZXJpZW5jaWEg8J+UpTwvaDI+XG5cdFx0XHRcdDxwPmlCb3ggZXMgbGEgdGllbmRhIGVsZWN0csOzbmljYSBjb24gZWwgbWF5b3IgaW1wYWN0byBlbiBHdWF0ZW1hbGEsIGNyZWFkYSBkZXNkZSBjZXJvIHBhcmEgbWVqb3JhciBlbiBjYWRhIGRldGFsbGUg8J+RjCwgYXnDumRhbm9zIGEgbWVqb3JhciB0dSBleHBlcmllbmNpYSBkZWrDoW5kb25vcyB0dSBjb21lbnRhcmlvIHNvYnJlIGxhIHRpZW5kYS4g8J+TsjwvcD5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8c3R5bGUganN4PntgXG4gICAgICAgICBAa2V5ZnJhbWVzIHNwbCB7XG5cdCAgICAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEsMSl9XG5cdCAgICA1MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjIsIDEuMil9XG5cdCAgICAxMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwxKX1cblx0IH1cbiAgICAgICAgICNzcGxhc2h7XG5cdCAgICBiYWNrZ3JvdW5kOnZhcigtLXByaW1hcnkpO1xuXHQgICAgcG9zaXRpb246Zml4ZWQ7XG5cdCAgICB0b3A6MDtcblx0ICAgIGxlZnQ6MDtcblx0ICAgIHdpZHRoOjEwMCU7XG5cdCAgICBoZWlnaHQ6MTAwdmg7XG5cdCAgICB6LWluZGV4OjEwMTtcblx0ICAgIG9wYWNpdHk6MTtcblx0ICAgIGRpc3BsYXk6JHtkaXNwbGF5fTtcblx0ICAgIHRyYW5zaXRpb246b3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuXHQgfVxuXHQgaW1ne1xuXHQgICAgcG9zaXRpb246YWJzb2x1dGU7XG5cdCAgICB0b3A6NDAlO1xuXHQgICAgbGVmdDo1MCU7XG5cdCAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHQgICAgd2lkdGg6ODAlO1xuXHQgICAgbWF4LXdpZHRoOjIwMHB4O1xuXHQgICAgYW5pbWF0aW9uOnNwbCAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblx0IH1cblx0IGRpdntcblx0ICAgIHdpZHRoOjEwMCU7XG5cdCAgICBmb250LXNpemU6MTVweDtcblx0ICAgIHBhZGRpbmc6MjBweDtcblx0ICAgIGNvbG9yOnZhcigtLWJhY2tncm91bmRzKTtcblx0ICAgIGJhY2tncm91bmQ6dmFyKC0tdGhpcmQpO1xuXHQgICAgcG9zaXRpb246Zml4ZWQ7XG5cdCAgICBib3R0b206MDtcblx0ICAgIGxlZnQ6MDtcblx0IH1cblx0IGRpdiBoMntcblx0ICAgIGNvbG9yOnZhcigtLWJhY2tncm91bmRzKTtcblx0fVxuICAgICAgICAgYH08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwbGFzaDtcbiJdfQ== */
/*@ sourceURL=C:\\Users\\ernesto\\Desktop\\iBox\\components\\Splash.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Splash);

/***/ }),

/***/ "./components/Verified.js":
/*!********************************!*\
  !*** ./components/Verified.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\components\\Verified.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Verified = props => {
  if (!props.show) return __jsx("div", {
    className: "jsx-2815924814" + " " + "amber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2815924814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-2815924814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "Verifica tu correo"), __jsx("p", {
    className: "jsx-2815924814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Ya te enviamos un link para poder seguir utlizando la tienda con tu cuenta.")), __jsx("button", {
    className: "jsx-2815924814" + " " + "waves white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-2815924814" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "send"), "Reenviar"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2815924814",
    __self: undefined
  }, ".amber.jsx-2815924814{padding:20px;color:var(--backgrounds);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.amber.jsx-2815924814>div.jsx-2815924814{width:170px;}button.jsx-2815924814{color:var(--text);}h1.jsx-2815924814{color:var(--backgrounds);font-size:1.3em;}p.jsx-2815924814{font-size:0.9em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcVmVyaWZpZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXdCLEFBR2lDLEFBT0QsQUFHTSxBQUdPLEFBSVQsWUFUbkIsQ0FQNEIsR0FpQjVCLEVBUEEsT0FHbUIsYUFaSCxHQWFoQix1RUFac0IsNkZBQ1csbUhBQ2pDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZXJuZXN0b1xcRGVza3RvcFxcaUJveFxcY29tcG9uZW50c1xcVmVyaWZpZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBWZXJpZmllZCA9IHByb3BzID0+IHtcclxuICAgIGlmICghcHJvcHMuc2hvdykgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFtYmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+VmVyaWZpY2EgdHUgY29ycmVvPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPllhIHRlIGVudmlhbW9zIHVuIGxpbmsgcGFyYSBwb2RlciBzZWd1aXIgdXRsaXphbmRvIGxhIHRpZW5kYSBjb24gdHUgY3VlbnRhLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2F2ZXMgd2hpdGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlbmQ8L2k+UmVlbnZpYXI8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5hbWJlcntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6dmFyKC0tYmFja2dyb3VuZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYW1iZXIgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTcwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6dmFyKC0tdGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1iYWNrZ3JvdW5kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEuM2VtOyAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjllbTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIGVsc2UgcmV0dXJuIFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlcmlmaWVkOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ernesto\\\\Desktop\\\\iBox\\\\components\\\\Verified.js */"));else return "";
};

/* harmony default export */ __webpack_exports__["default"] = (Verified);

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

/***/ "./layouts/Layout.js":
/*!***************************!*\
  !*** ./layouts/Layout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks */ "./utils/hooks.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Verified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Verified */ "./components/Verified.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/logo.svg */ "./assets/logo.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\layouts\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Layout = props => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_1__["useAuth"])(user => setUser(user));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // GLOBALS
    const routes = document.querySelectorAll(".routes");
    const drawerToggle = document.getElementById("drawer-toggle");
    const drawerHook = document.getElementById("sideHook");
    const topbar = document.querySelector(".topbar");
    const search = document.getElementById("search");
    const searchToggle = document.getElementById("search-toggle"); // DRAWER ROUTER

    function setActive(url) {
      setTimeout(() => {
        Array.prototype.forEach.call(routes, function (b) {
          const route = b.textContent.split(" ")[1].toLowerCase();
          b.classList.remove("blue");
          b.classList.add("white");

          if (url.substr(1) === route) {
            b.classList.remove("white");
            b.classList.add("blue");
          }

          if (url.substr(1) === "") {
            routes[0].classList.remove("white");
            routes[0].classList.add("blue");
          }
        });
      }, 600);
      setTimeout(() => drawerToggle.checked = false, 300);
    }

    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeComplete', setActive);
    setActive(next_router__WEBPACK_IMPORTED_MODULE_2___default.a.pathname); // NAVBAR

    window.addEventListener("scroll", () => {
      if (window.scrollY > 15) topbar.style.boxShadow = "0 0 10px rgba(0,0,0,.4)";else topbar.style.boxShadow = "none";
    }); // SEARCH BAR

    searchToggle.addEventListener("click", () => {
      const toggle = searchToggle.checked;
      if (toggle) search.focus();else setTimeout(() => search.value = null, 300);
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("input", {
    type: "checkbox",
    id: "drawer-toggle",
    name: "drawer-toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("input", {
    type: "checkbox",
    id: "search-toggle",
    name: "search-toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("div", {
    className: "topbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "drawer-toggle",
    className: "material-icons",
    id: "menuBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "menu"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("div", {
    id: "brandLogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }))), __jsx("div", {
    id: "navbtns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "search-toggle",
    className: "material-icons waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "search"), __jsx("i", {
    className: "material-icons waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "shopping_cart")), __jsx("div", {
    id: "searchBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "search-toggle",
    className: "material-icons waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "arrow_back"), __jsx("input", {
    type: "search",
    placeholder: "Buscar productos",
    id: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }))), __jsx("label", {
    htmlFor: "search-toggle",
    className: "drawerShadow ssf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "drawer-toggle",
    className: "drawerShadow sbf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx("div", {
    id: "drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("div", {
    id: "drawerHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "iBox\xAE App (v0.3)"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Tu comodidad en una caja")), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("a", {
    className: "white routes waves waves-dark btn",
    title: "Inicio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "home"), " Inicio"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/tienda",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("a", {
    className: "btn white routes waves waves-dark",
    title: "Tienda",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "store"), " Tienda")))), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), __jsx("span", {
    className: "dividerTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Aplicaci\xF3n"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/cuenta",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("a", {
    className: "white routes waves waves-dark btn",
    title: "Cuenta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "person_add"), " Cuenta"))), user && __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("button", {
    onClick: _utils_hooks__WEBPACK_IMPORTED_MODULE_1__["useLogout"],
    className: "white waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "exit_to_app"), " Cerrar Sesi\xF3n"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("button", {
    className: "white waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "share"), " Compartir")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("button", {
    className: "white waves waves-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "arrow_downward"), " Descargar")))), __jsx("div", {
    id: "sideHook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  })), user && __jsx(_components_Verified__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: user.providerData[0].providerId === "facebook.com" ? true : user.emailVerified,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


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

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;

__webpack_require__(/*! ../client/router */ "./node_modules/next/dist/client/router.js");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Splash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Splash */ "./components/Splash.js");
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/Layout */ "./layouts/Layout.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/functions */ "./utils/functions.js");
/* harmony import */ var _assets_icons_material_icons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/material-icons.css */ "./assets/icons/material-icons.css");
/* harmony import */ var _assets_icons_material_icons_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_material_icons_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_ibox_wavy_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/ibox-wavy.css */ "./styles/ibox-wavy.css");
/* harmony import */ var _styles_ibox_wavy_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_ibox_wavy_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_icons_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/style.css */ "./assets/icons/style.css");
/* harmony import */ var _assets_icons_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_style_css__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\ernesto\\Desktop\\iBox\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









/* harmony default export */ __webpack_exports__["default"] = (class extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  componentDidMount() {
    const splash = document.getElementById("splash");

    window.onload = () => {
      setTimeout(() => {
        splash.style.opacity = 0;
        setTimeout(() => splash.style.display = "none", 300);
      }, 1500);
    };

    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_6__["setRipples"])(); // COLORTHEME
    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) darkMode(document);
  }

  render() {
    const {
      Component,
      pageProps,
      router
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Splash__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), __jsx(_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimatePresence"], {
      exitBeforeEnter: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      key: router.route,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })))));
  }

});

/***/ }),

/***/ "./styles/ibox-wavy.css":
/*!******************************!*\
  !*** ./styles/ibox-wavy.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/functions.js":
/*!****************************!*\
  !*** ./utils/functions.js ***!
  \****************************/
/*! exports provided: darkMode, changeTheme, setRipples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkMode", function() { return darkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTheme", function() { return changeTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRipples", function() { return setRipples; });
let dom;
function darkMode(d) {
  dom = d;
  const body = d.body;
  body.style.setProperty('--primary', '#555');
  body.style.setProperty('--four', '#1B5E20');
  body.style.setProperty('--third', '#880E4F');
  body.style.setProperty('--backgrounds', '#eee');
  body.style.setProperty('--five', '#BF360C');
  body.style.setProperty('--secondary', '#FBC02D');
  body.style.setProperty('--blue', '#1565C0');
}
function changeTheme(color) {
  const metaThemeColor = dom.querySelector("meta[name=theme-color]");
  metaThemeColor.setAttribute("content", color);
}
function setRipples() {
  const surface = document.querySelectorAll('.waves');

  function ripple(e) {
    let circle = document.createElement("div");
    let maxLarge = Math.max(this.clientWidth, this.clientHeight);
    let rectSurface = this.getBoundingClientRect();
    let time = Math.log(maxLarge) / Math.log(Math.exp(1)) / 11;
    circle.style.width = circle.style.height = maxLarge + "px";
    circle.style.left = e.clientX - rectSurface.left - maxLarge / 2 + "px";
    circle.style.top = e.clientY - rectSurface.top - maxLarge / 2 + "px";
    circle.classList.add("ripple");
    circle.style.animation = `ripple ${time}s ease-in`;
    if (this.classList.contains("waves-dark")) circle.classList.add("ripple-dark");
    this.appendChild(circle);
    setTimeout(() => this.removeChild(circle), time * 1000);
  }

  for (let i = 0; i < surface.length; i++) surface[i].addEventListener('click', ripple);
}

/***/ }),

/***/ "./utils/hooks.js":
/*!************************!*\
  !*** ./utils/hooks.js ***!
  \************************/
/*! exports provided: useDB, useInterval, useUserSet, useUserGet, useLogout, setProviders, useAuth, useResetPass, user, useVerifiedUser, useLogin, useAuthError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDB", function() { return useDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return useInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserSet", function() { return useUserSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserGet", function() { return useUserGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogout", function() { return useLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProviders", function() { return setProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResetPass", function() { return useResetPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVerifiedUser", function() { return useVerifiedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogin", function() { return useLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthError", function() { return useAuthError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _credentials_servers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../credentials/servers */ "./credentials/servers.js");
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dexie */ "dexie");
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dexie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_4__);




 //local DB

let indexeddb = {};
let db = _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].firestore();
const useDB = () => {
  indexeddb = new dexie__WEBPACK_IMPORTED_MODULE_2___default.a("localDB");
  indexeddb.version(1).stores({
    user: 'key, user'
  });
  indexeddb.open().then(() => console.log("OpenDB")).catch(err => console.log("Error during open db ", err));
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
}; // Firestore

const useUserSet = (id, data) => db.collection("users").doc(id).set(data);
const useUserGet = (id, listener, err) => db.collection("users").doc(id).get().then(listener).catch(err); // Firebase Auth

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
const useAuth = listen => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().onAuthStateChanged(user => {
      if (user) listen(user);else listen(false);
    });
    return () => unsubscribe();
  }, []);
};
const useResetPass = (email, err) => _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().sendPasswordResetEmail(email).catch(err);
const user = _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser;
const useVerifiedUser = dats => {
  if (dats) {
    const userProvider = dats.providerData[0].providerId;
    if (userProvider === "facebook.com") return true;else dats.emailVerified;
  } else return false;
};
const useLogin = data => {
  if (data.type === true) _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().createUserWithEmailAndPassword(data.email, data.pass).then(res => {
    useUserSet(res.user.uid, {
      displayName: data.name,
      email: data.email,
      provider: res.user.providerData[0].providerId,
      photoURL: "https://firebasestorage.googleapis.com/v0/b/iboxshops.appspot.com/o/profile.png?alt=media&token=cd5f21df-ce9d-4ebe-9bcb-a35b391cd5ef"
    });
    res.user.updateProfile({
      displayName: data.name,
      photoURL: "https://firebasestorage.googleapis.com/v0/b/iboxshops.appspot.com/o/profile.png?alt=media&token=cd5f21df-ce9d-4ebe-9bcb-a35b391cd5ef"
    });
  }).catch(data.err);else if (data.type === false) _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithEmailAndPassword(data.email, data.pass).catch(data.err);else if (data.type === "fb") _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithRedirect(fbprovider).catch(data.err);else if (data.type === "g") _credentials_servers__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithRedirect(gprovider).catch(data.err);
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

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=_app.js.map