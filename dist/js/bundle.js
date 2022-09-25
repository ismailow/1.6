/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/*! exports provided: Burger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Burger", function() { return Burger; });
var Burger = function Burger() {
  var openBurgerBtn = document.querySelector('.header__burger');
  var closeBurgerBtn = document.querySelector('.aside__close');
  var sidebar = document.querySelector('.sidebar');
  openBurgerBtn.addEventListener('click', function () {
    sidebar.classList.add('sidebar--active');
  });
  closeBurgerBtn.addEventListener('click', function () {
    sidebar.classList.remove('sidebar--active');
  });
  sidebar.addEventListener('click', function (event) {
    if (!event.target.closest('aside')) {
      sidebar.classList.remove('sidebar--active');
    }
  });
};

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger */ "./src/js/burger.js");
/* harmony import */ var _more__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./more */ "./src/js/more.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./src/js/sidebar.js");




Object(_burger__WEBPACK_IMPORTED_MODULE_1__["Burger"])();
Object(_more__WEBPACK_IMPORTED_MODULE_2__["showMore"])();
Object(_sidebar__WEBPACK_IMPORTED_MODULE_3__["sidebar"])();

/***/ }),

/***/ "./src/js/more.js":
/*!************************!*\
  !*** ./src/js/more.js ***!
  \************************/
/*! exports provided: showMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMore", function() { return showMore; });
var showMore = function showMore() {
  var moreBtns = document.querySelectorAll('.more-btn');
  moreBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var showAttr = btn.getAttribute('data-show');
      var showElement = document.querySelector(".".concat(showAttr));
      console.log(showElement);

      if (showElement.classList.contains("".concat(showAttr, "--active"))) {
        showElement.classList.remove("".concat(showAttr, "--active"));
        btn.querySelector('span').textContent = 'Читать далее';
        btn.querySelector('.more-btn__img').style.rotate = '0deg';
      } else {
        showElement.classList.add("".concat(showAttr, "--active"));
        btn.querySelector('span').textContent = 'Скрыть';
        btn.querySelector('.more-btn__img').style.rotate = '180deg';
      }
    });
  });
};

/***/ }),

/***/ "./src/js/sidebar.js":
/*!***************************!*\
  !*** ./src/js/sidebar.js ***!
  \***************************/
/*! exports provided: sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebar", function() { return sidebar; });
var sidebar = function sidebar() {
  var windowWidth = window.innerWidth;

  var sidebarPos = function sidebarPos() {
    if (window.innerWidth >= 1440) {
      var containerLeft = document.querySelector('.services__container').getBoundingClientRect().left;

      var _sidebar = document.querySelector('.sidebar');

      _sidebar.style.left = "".concat(containerLeft - 320, "px");
    }
  };

  sidebarPos();
  window.addEventListener('resize', sidebarPos);
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map