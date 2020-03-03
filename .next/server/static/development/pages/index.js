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
  }, movie.Type, " "), __jsx("p", {
    className: "jsx-3647075915" + " " + "card-text container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("button", {
    style: {
      display: favstatus ? "" : "none"
    },
    onClick: () => addFavorite(movie),
    className: "jsx-3647075915" + " " + "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Favorite"), __jsx("button", {
    style: {
      display: favstatus ? "none" : ""
    },
    onClick: () => delFavorite(movie),
    className: "jsx-3647075915" + " " + "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Del Favorite")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3647075915",
    __self: this
  }, ".card-header.jsx-3647075915{font-size:14px;}#image.jsx-3647075915{width:100%;height:300px;}#poster.jsx-3647075915{padding:0 10px;}.card.jsx-3647075915{width:250px;height:420px;text-align:center;}@media screen and (max-width:600px){.column.jsx-3647075915{width:100%;display:block;margin-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUN3QixBQUdvQyxBQUdKLEFBSUksQUFHSixBQU1BLFdBWGQsQUFZaUIsQ0FORixHQVZkLEFBT0EsU0FIQSxDQU9vQixBQU1DLGtCQUxyQixDQU1BIiwiZmlsZSI6Ii9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ21vYngtbG9jYWxzdG9yYWdlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBDYXJkKHttb3ZpZSwgaW5kZXgsIGFkZEZhdm9yaXRlLCBkZWxGYXZvcml0ZX0pIHtcblxuICAgIGNvbnN0IFtmYXZvcml0ZSwgc2V0RmF2b3JpdGVdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtmYXZzdGF0dXMsIHNldEZhdlN0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYoZmF2b3JpdGUgIT09IG51bGwpe1xuICAgICAgICBzZXRGYXZvcml0ZShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkpO1xuICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkoZmF2b3JpdGUpKXtcbiAgICAgICAgbGV0IGlzRmF2ID0gZmF2b3JpdGUuZmluZChpdGVtcyA9PiBtb3ZpZS5pbWRiSUQgPT09IGl0ZW1zLmltZGJJRCk7XG4gICAgICAgIGlmKGlzRmF2ICYmIGZhdnN0YXR1cyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNldEZhdlN0YXR1cyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICBcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBrZXk9e21vdmllLmlkfSBpZD1cInBvc3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctZGFyayBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPnttb3ZpZS5UaXRsZX0gKHttb3ZpZS5ZZWFyfSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e21vdmllLlBvc3Rlcn0gaWQ9XCJpbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPnttb3ZpZS5UeXBlfSA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcInN0eWxlPXt7ZGlzcGxheTpmYXZzdGF0dXMgPyBcIlwiOlwibm9uZVwifX0gb25DbGljaz17KCkgPT4gYWRkRmF2b3JpdGUobW92aWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZhdm9yaXRlXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcInN0eWxlPXt7ZGlzcGxheTpmYXZzdGF0dXMgPyBcIm5vbmVcIjpcIlwifX0gb25DbGljaz17KCkgPT4gZGVsRmF2b3JpdGUobW92aWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbCBGYXZvcml0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICNpbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAjcG9zdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQyMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG5cblxuLy88YnV0dG9uIHN0eWxlPXt7ZGlzcGxheTpmYXZzdGF0dXMgPyBcIm5vbmVcIjpcIlwifX0gb25DbGljaz17KCkgPT4gYWRkRmF2b3JpdGUoc2VhcmNoKX0+RmF2PC9idXR0b24+XG4vLzxidXR0b24gb25DbGljaz17KCkgPT4gY2hlY2soc2VhcmNoKX0+Q2U8L2J1dHRvbj4iXX0= */\n/*@ sourceURL=/home/commodore64/ombd-next/components/Card.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Card); //<button style={{display:favstatus ? "none":""}} onClick={() => addFavorite(search)}>Fav</button>
//<button onClick={() => check(search)}>Ce</button>

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-localstorage */ "mobx-localstorage");
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_localstorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store.js");
var _jsxFileName = "/home/commodore64/ombd-next/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







function Index(props) {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();
  const {
    0: result,
    1: setResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  const {
    0: favorite,
    1: setFavorite
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  const {
    store
  } = props;

  const addFavorite = object => {
    store.add_movie(object);
    console.log(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('favorites')));
  };

  const delFavorite = index => {
    const newFav = [...favorite];
    newFav.splice(index, 1);
    setFavorite(newFav);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.setItem('favorites', JSON.stringify(newFav));
    console.log(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('favorites')));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!value) return;
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`http://www.omdbapi.com/?s=${value}&apikey=8ae8b189`);
    const data = await res.json();
    data.Response === "True" ? setResult(data.Search) : alert("Movie not found!");
    console.log(data);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('favorites')) {
      store.set_movies(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('favorites')));
    }
  }, []);
  return __jsx("div", {
    className: "jsx-4114159983" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("form", {
    id: "form",
    onSubmit: handleSubmit,
    className: "jsx-4114159983" + " " + "form-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4114159983" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4114159983" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Title",
    onChange: e => setValue(e.target.value),
    className: "jsx-4114159983" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4114159983" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Year",
    className: "jsx-4114159983" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4114159983" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("select", {
    id: "inputState",
    className: "jsx-4114159983" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("option", {
    defaultValue: true,
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Choose..."), __jsx("option", {
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "..."))), __jsx("button", {
    type: "submit",
    className: "jsx-4114159983" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Search"))), __jsx("hr", {
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("center", {
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4114159983" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, result.map((movie, index) => __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    index: index,
    movie: movie,
    addFavorite: addFavorite,
    delFavorite: delFavorite,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4114159983",
    __self: this
  }, ".form-control.jsx-4114159983{margin-right:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRm9CLEFBRzhCLGtCQUVuQiIsImZpbGUiOiIvaG9tZS9jb21tb2RvcmU2NC9vbWJkLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbW9ieC1sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnO1xuaW1wb3J0IHtpbmplY3QsIG9ic2VydmVyfSBmcm9tICdtb2J4LXJlYWN0JztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5cblxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcblxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmYXZvcml0ZSwgc2V0RmF2b3JpdGVdID0gdXNlU3RhdGUoW10pO1xuXG4gIFxuICBjb25zdCB7c3RvcmV9ID0gcHJvcHM7XG5cbiAgY29uc3QgYWRkRmF2b3JpdGUgPSBvYmplY3QgPT4ge1xuICAgICAgc3RvcmUuYWRkX21vdmllKG9iamVjdCk7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkpO1xuICB9O1xuXG4gIGNvbnN0IGRlbEZhdm9yaXRlID0gaW5kZXggPT4ge1xuICAgICAgY29uc3QgbmV3RmF2ID0gWy4uLmZhdm9yaXRlXTtcbiAgICAgIG5ld0Zhdi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgc2V0RmF2b3JpdGUobmV3RmF2KTtcbiAgICAgIFxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlcycsIEpTT04uc3RyaW5naWZ5KG5ld0ZhdikpO1xuICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgICAgIFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZighdmFsdWUpIHJldHVybjtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/cz0ke3ZhbHVlfSZhcGlrZXk9OGFlOGIxODlgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBcbiAgICBcbiAgICBkYXRhLlJlc3BvbnNlID09PSBcIlRydWVcIiA/IHNldFJlc3VsdChkYXRhLlNlYXJjaCkgOiBhbGVydChcIk1vdmllIG5vdCBmb3VuZCFcIik7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpKXtcbiAgICAgIHN0b3JlLnNldF9tb3ZpZXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiBpZD1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlllYXJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiaW5wdXRTdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPkNob29zZS4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8aHIvPlxuXG4gICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHtyZXN1bHQubWFwKChtb3ZpZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDYXJkIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9IFxuICAgICAgICAgICAgICBtb3ZpZT17bW92aWV9XG4gICAgICAgICAgICAgIGFkZEZhdm9yaXRlPXthZGRGYXZvcml0ZX1cbiAgICAgICAgICAgICAgZGVsRmF2b3JpdGU9e2RlbEZhdm9yaXRlfVxuICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2NlbnRlcj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTJweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0KCdzdG9yZScpKG9ic2VydmVyKEluZGV4KSk7Il19 */\n/*@ sourceURL=/home/commodore64/ombd-next/pages/index.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])('store')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(Index)));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-localstorage */ "mobx-localstorage");
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_localstorage__WEBPACK_IMPORTED_MODULE_1__);



class MovieStore {
  constructor() {
    this.movielist = [];
  }

  get count() {
    return this.movielist.length;
  }

  set_movies(array) {
    console.log('set movie', array);
    this.movielist = array || [];
  }

  add_movie(object) {
    this.movielist.push(object);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_1___default.a.setItem('favorites', JSON.stringify(this.movielist));
  }

  remove_movie(index) {
    this.movielist.splice(this.movielist.indexOf(index), 1);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_1___default.a.setItem('favorites', JSON.stringify(this.movielist));
  }

}

Object(mobx__WEBPACK_IMPORTED_MODULE_0__["decorate"])(MovieStore, {
  movielist: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
  count: mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
  set_movies: mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
  add_movies: mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
  remove_movie: mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
});
const store = new MovieStore();
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/commodore64/ombd-next/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-localstorage":
/*!************************************!*\
  !*** external "mobx-localstorage" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-localstorage");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

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
//# sourceMappingURL=index.js.map