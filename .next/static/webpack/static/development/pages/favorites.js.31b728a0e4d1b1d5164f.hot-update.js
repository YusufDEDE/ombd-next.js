webpackHotUpdate("static/development/pages/favorites.js",{

/***/ "./pages/favorites.js":
/*!****************************!*\
  !*** ./pages/favorites.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-localstorage */ "./node_modules/mobx-localstorage/lib/index.js");
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_localstorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
var _jsxFileName = "/home/commodore64/ombd-next/pages/favorites.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Favorites() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      result = _useState[0],
      setResult = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('favorites')) {
      setResult(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('favorites')));
    }
  }, []);
  return __jsx("div", {
    className: "jsx-3751082313" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("center", {
    className: "jsx-3751082313",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3751082313" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, result.map(function (item, index) {
    return __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3751082313",
    __self: this
  }, "#image.jsx-3751082313{width:100%;height:300px;}#poster.jsx-3751082313{padding:0 10px;}.card.jsx-3751082313{width:250px;height:420px;text-align:center;}@media screen and (max-width:600px){.column.jsx-3751082313{width:100%;display:block;margin-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9wYWdlcy9mYXZvcml0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJnQixBQUd3QixBQUlJLEFBR0osQUFNQSxXQVhkLEFBWWlCLENBTkYsR0FIZCxTQUhBLENBT29CLEFBTUMsa0JBTHJCLENBTUEiLCJmaWxlIjoiL2hvbWUvY29tbW9kb3JlNjQvb21iZC1uZXh0L3BhZ2VzL2Zhdm9yaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbW9ieC1sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcblxuZnVuY3Rpb24gRmF2b3JpdGVzKCl7XG5cbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSl7XG4gICAgICBzZXRSZXN1bHQoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxjZW50ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7cmVzdWx0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IDxDYXJkIGtleT17aW5kZXh9IGl0ZW09e2l0ZW19Lz4gKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2NlbnRlcj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAjaW1hZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4XG4gICAgICAgICAgfVxuICAgICAgICAgICNwb3N0ZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDoyNTBweDtcbiAgICAgICAgICAgIGhlaWdodDo0MjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gICl9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlczsiXX0= */\n/*@ sourceURL=/home/commodore64/ombd-next/pages/favorites.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Favorites);

/***/ })

})
//# sourceMappingURL=favorites.js.31b728a0e4d1b1d5164f.hot-update.js.map