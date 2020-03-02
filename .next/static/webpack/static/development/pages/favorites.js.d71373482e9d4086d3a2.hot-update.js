webpackHotUpdate("static/development/pages/favorites.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
false,

/***/ "./node_modules/core-js/library/modules/_classof.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_defined.js":
false,

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_html.js":
false,

/***/ "./node_modules/core-js/library/modules/_iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
false,

/***/ "./node_modules/core-js/library/modules/_iterators.js":
false,

/***/ "./node_modules/core-js/library/modules/_library.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-at.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-length.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_uid.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
false,

/***/ "./pages/favorites.js":
/*!****************************!*\
  !*** ./pages/favorites.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-localstorage */ "./node_modules/mobx-localstorage/lib/index.js");
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_localstorage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");

var _jsxFileName = "/home/commodore64/ombd-next/pages/favorites.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Favorites() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      result = _useState[0],
      setResult = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.getItem('favorites')) {
      setResult(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.getItem('favorites')));
    }
  }, []);

  var delFavorite = function delFavorite(id) {
    var newFav = result.filter(function (item) {
      return item.id !== id;
    });
    setResult(newFav);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.setItem('favorites', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(newFav));
    console.log(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.getItem('favorites')));
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
  }, result.map(function (movie, index) {
    return __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      delFavorite: delFavorite,
      movie: movie,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    });
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3751082313",
    __self: this
  }, "#image.jsx-3751082313{width:100%;height:300px;}#poster.jsx-3751082313{padding:0 10px;}.card.jsx-3751082313{width:250px;height:420px;text-align:center;}@media screen and (max-width:600px){.column.jsx-3751082313{width:100%;display:block;margin-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9wYWdlcy9mYXZvcml0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJnQixBQUd3QixBQUlJLEFBR0osQUFNQSxXQVhkLEFBWWlCLENBTkYsR0FIZCxTQUhBLENBT29CLEFBTUMsa0JBTHJCLENBTUEiLCJmaWxlIjoiL2hvbWUvY29tbW9kb3JlNjQvb21iZC1uZXh0L3BhZ2VzL2Zhdm9yaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbW9ieC1sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcblxuZnVuY3Rpb24gRmF2b3JpdGVzKCl7XG5cbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSl7XG4gICAgICBzZXRSZXN1bHQoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBkZWxGYXZvcml0ZSA9IGlkID0+IHtcbiAgICBjb25zdCBuZXdGYXYgPSByZXN1bHQuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWQpO1xuICAgIHNldFJlc3VsdChuZXdGYXYpO1xuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvcml0ZXMnLCBKU09OLnN0cmluZ2lmeShuZXdGYXYpKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkpO1xuICAgIFxufTtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxjZW50ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7cmVzdWx0Lm1hcCgobW92aWUsIGluZGV4KSA9PiA8Q2FyZCBrZXk9e2luZGV4fSBkZWxGYXZvcml0ZT17ZGVsRmF2b3JpdGV9IG1vdmllPXttb3ZpZX0vPiApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvY2VudGVyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICNpbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHhcbiAgICAgICAgICB9XG4gICAgICAgICAgI3Bvc3RlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOjI1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OjQyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbiAgKX07XG5cblxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzOyJdfQ== */\n/*@ sourceURL=/home/commodore64/ombd-next/pages/favorites.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Favorites);

/***/ })

})
//# sourceMappingURL=favorites.js.d71373482e9d4086d3a2.hot-update.js.map