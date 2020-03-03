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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _jsxFileName = "/home/commodore64/ombd-next/pages/favorites.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Favorites(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('favorites')) {
      store.set_movies(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('favorites')));
    }
  }, []);

  var delFavorite = function delFavorite(id) {
    props.store.remove_movie(id);
  };

  var store = props.store;
  var movielist = store.movielist;
  return __jsx("div", {
    className: "jsx-3751082313" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("center", {
    className: "jsx-3751082313",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3751082313" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, movielist.map(function (movie, index) {
    return __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      delFavorite: delFavorite,
      movie: movie,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3751082313",
    __self: this
  }, "#image.jsx-3751082313{width:100%;height:300px;}#poster.jsx-3751082313{padding:0 10px;}.card.jsx-3751082313{width:250px;height:420px;text-align:center;}@media screen and (max-width:600px){.column.jsx-3751082313{width:100%;display:block;margin-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9wYWdlcy9mYXZvcml0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJnQixBQUd3QixBQUlJLEFBR0osQUFNQSxXQVhkLEFBWWlCLENBTkYsR0FIZCxTQUhBLENBT29CLEFBTUMsa0JBTHJCLENBTUEiLCJmaWxlIjoiL2hvbWUvY29tbW9kb3JlNjQvb21iZC1uZXh0L3BhZ2VzL2Zhdm9yaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbW9ieC1sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCB7aW5qZWN0LCBvYnNlcnZlcn0gZnJvbSAnbW9ieC1yZWFjdCc7XG5cbmZ1bmN0aW9uIEZhdm9yaXRlcyhwcm9wcyl7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpe1xuICAgICAgc3RvcmUuc2V0X21vdmllcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGRlbEZhdm9yaXRlID0gaWQgPT4ge1xuICAgIFxuICAgIFxuICAgIHByb3BzLnN0b3JlLnJlbW92ZV9tb3ZpZShpZCk7XG4gIH07XG5cbiAgY29uc3Qge3N0b3JlfSA9IHByb3BzO1xuICBjb25zdCB7bW92aWVsaXN0fSA9IHN0b3JlO1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGNlbnRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHttb3ZpZWxpc3QubWFwKChtb3ZpZSwgaW5kZXgpID0+IDxDYXJkIGtleT17aW5kZXh9IGRlbEZhdm9yaXRlPXtkZWxGYXZvcml0ZX0gbW92aWU9e21vdmllfS8+ICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9jZW50ZXI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgI2ltYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweFxuICAgICAgICAgIH1cbiAgICAgICAgICAjcG9zdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6NDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICApfTtcblxuXG5leHBvcnQgZGVmYXVsdCBpbmplY3QoJ3N0b3JlJykob2JzZXJ2ZXIoRmF2b3JpdGVzKSk7Il19 */\n/*@ sourceURL=/home/commodore64/ombd-next/pages/favorites.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])('store')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(Favorites)));

/***/ })

})
//# sourceMappingURL=favorites.js.2fd346c67dde2b48472d.hot-update.js.map