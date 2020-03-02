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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-localstorage */ "mobx-localstorage");
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_localstorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/commodore64/ombd-next/components/Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Card({
  movie,
  index,
  addFavorite,
  delFavorite
}) {
  const {
    0: favorite,
    1: setFavorite
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: favstatus,
    1: setFavStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (favorite !== null) {
      setFavorite(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_1___default.a.getItem('favorites')));
    }
  }, []);

  if (Array.isArray(favorite)) {
    let isFav = favorite.find(items => movie.imdbID === items.imdbID);

    if (isFav && favstatus !== false) {
      setFavStatus(false);
    }
  }

  return __jsx("div", {
    key: movie.id,
    id: "poster",
    className: "jsx-3647075915" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3647075915" + " " + "card text-white bg-dark mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3647075915" + " " + "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, movie.Title, " (", movie.Year, ")"), __jsx("div", {
    className: "jsx-3647075915" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3647075915" + " " + "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("img", {
    src: movie.Poster,
    id: "image",
    className: "jsx-3647075915",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("small", {
    className: "jsx-3647075915",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, movie.Type, " ")), __jsx("p", {
    className: "jsx-3647075915" + " " + "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("button", {
    style: {
      display: favstatus ? "" : "none"
    },
    onClick: () => addFavorite(movie),
    className: "jsx-3647075915" + " " + "btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Favorite"), __jsx("button", {
    style: {
      display: favstatus ? "none" : ""
    },
    onClick: () => delFavorite(movie.imdbID),
    className: "jsx-3647075915" + " " + "btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Del Favorite"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3647075915",
    __self: this
  }, ".card-header.jsx-3647075915{font-size:14px;}#image.jsx-3647075915{width:100%;height:300px;}#poster.jsx-3647075915{padding:0 10px;}.card.jsx-3647075915{width:250px;height:420px;text-align:center;}@media screen and (max-width:600px){.column.jsx-3647075915{width:100%;display:block;margin-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0N3QixBQUdvQyxBQUdKLEFBSUksQUFHSixBQU1BLFdBWGQsQUFZaUIsQ0FORixHQVZkLEFBT0EsU0FIQSxDQU9vQixBQU1DLGtCQUxyQixDQU1BIiwiZmlsZSI6Ii9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ21vYngtbG9jYWxzdG9yYWdlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBDYXJkKHttb3ZpZSwgaW5kZXgsIGFkZEZhdm9yaXRlLCBkZWxGYXZvcml0ZX0pIHtcblxuICAgIGNvbnN0IFtmYXZvcml0ZSwgc2V0RmF2b3JpdGVdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtmYXZzdGF0dXMsIHNldEZhdlN0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYoZmF2b3JpdGUgIT09IG51bGwpe1xuICAgICAgICBzZXRGYXZvcml0ZShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkpO1xuICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkoZmF2b3JpdGUpKXtcbiAgICAgICAgbGV0IGlzRmF2ID0gZmF2b3JpdGUuZmluZChpdGVtcyA9PiBtb3ZpZS5pbWRiSUQgPT09IGl0ZW1zLmltZGJJRCk7XG4gICAgICAgIGlmKGlzRmF2ICYmIGZhdnN0YXR1cyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNldEZhdlN0YXR1cyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICBcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBrZXk9e21vdmllLmlkfSBpZD1cInBvc3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctZGFyayBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPnttb3ZpZS5UaXRsZX0gKHttb3ZpZS5ZZWFyfSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e21vdmllLlBvc3Rlcn0gaWQ9XCJpbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPnttb3ZpZS5UeXBlfSA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCJzdHlsZT17e2Rpc3BsYXk6ZmF2c3RhdHVzID8gXCJcIjpcIm5vbmVcIn19IG9uQ2xpY2s9eygpID0+IGFkZEZhdm9yaXRlKG1vdmllKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBGYXZvcml0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcInN0eWxlPXt7ZGlzcGxheTpmYXZzdGF0dXMgPyBcIm5vbmVcIjpcIlwifX0gb25DbGljaz17KCkgPT4gZGVsRmF2b3JpdGUobW92aWUuaW1kYklEKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBEZWwgRmF2b3JpdGVcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAjaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgI3Bvc3RlciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MjBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuXG5cbi8vPGJ1dHRvbiBzdHlsZT17e2Rpc3BsYXk6ZmF2c3RhdHVzID8gXCJub25lXCI6XCJcIn19IG9uQ2xpY2s9eygpID0+IGFkZEZhdm9yaXRlKHNlYXJjaCl9PkZhdjwvYnV0dG9uPlxuLy88YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoZWNrKHNlYXJjaCl9PkNlPC9idXR0b24+Il19 */\n/*@ sourceURL=/home/commodore64/ombd-next/components/Card.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Card); //<button style={{display:favstatus ? "none":""}} onClick={() => addFavorite(search)}>Fav</button>
//<button onClick={() => check(search)}>Ce</button>

/***/ }),

/***/ "./pages/favorites.js":
/*!****************************!*\
  !*** ./pages/favorites.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-localstorage */ "mobx-localstorage");
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_localstorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
var _jsxFileName = "/home/commodore64/ombd-next/pages/favorites.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Favorites() {
  const {
    0: result,
    1: setResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('favorites')) {
      setResult(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('favorites')));
    }
  }, []);

  const delFavorite = id => {
    const newFav = result.filter(item => item.imdbID !== id);
    setResult(newFav);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.setItem('favorites', JSON.stringify(newFav));
    console.log(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('favorites')));
  };

  return __jsx("div", {
    className: "jsx-3751082313" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("center", {
    className: "jsx-3751082313",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3751082313" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, result.map((movie, index) => __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: index,
    delFavorite: delFavorite,
    movie: movie,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3751082313",
    __self: this
  }, "#image.jsx-3751082313{width:100%;height:300px;}#poster.jsx-3751082313{padding:0 10px;}.card.jsx-3751082313{width:250px;height:420px;text-align:center;}@media screen and (max-width:600px){.column.jsx-3751082313{width:100%;display:block;margin-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9wYWdlcy9mYXZvcml0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJnQixBQUd3QixBQUlJLEFBR0osQUFNQSxXQVhkLEFBWWlCLENBTkYsR0FIZCxTQUhBLENBT29CLEFBTUMsa0JBTHJCLENBTUEiLCJmaWxlIjoiL2hvbWUvY29tbW9kb3JlNjQvb21iZC1uZXh0L3BhZ2VzL2Zhdm9yaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbW9ieC1sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcblxuZnVuY3Rpb24gRmF2b3JpdGVzKCl7XG5cbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSl7XG4gICAgICBzZXRSZXN1bHQoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBkZWxGYXZvcml0ZSA9IGlkID0+IHtcbiAgICBjb25zdCBuZXdGYXYgPSByZXN1bHQuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pbWRiSUQgIT09IGlkKTtcbiAgICBzZXRSZXN1bHQobmV3RmF2KTtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3JpdGVzJywgSlNPTi5zdHJpbmdpZnkobmV3RmF2KSk7XG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgICBcbn07XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8Y2VudGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAge3Jlc3VsdC5tYXAoKG1vdmllLCBpbmRleCkgPT4gPENhcmQga2V5PXtpbmRleH0gZGVsRmF2b3JpdGU9e2RlbEZhdm9yaXRlfSBtb3ZpZT17bW92aWV9Lz4gKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2NlbnRlcj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAjaW1hZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4XG4gICAgICAgICAgfVxuICAgICAgICAgICNwb3N0ZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDoyNTBweDtcbiAgICAgICAgICAgIGhlaWdodDo0MjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gICl9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlczsiXX0= */\n/*@ sourceURL=/home/commodore64/ombd-next/pages/favorites.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Favorites);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/favorites.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/commodore64/ombd-next/pages/favorites.js */"./pages/favorites.js");


/***/ }),

/***/ "mobx-localstorage":
/*!************************************!*\
  !*** external "mobx-localstorage" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-localstorage");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=favorites.js.map