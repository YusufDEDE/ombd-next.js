webpackHotUpdate("static/development/pages/favorites.js",{

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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");

var _jsxFileName = "/home/commodore64/ombd-next/pages/favorites.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Favorites = function Favorites(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      result = _useState[0],
      setResult = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(_store__WEBPACK_IMPORTED_MODULE_5__["default"].temp);

    if (mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.getItem('favorites')) {
      setResult(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.getItem('favorites')));
      _store__WEBPACK_IMPORTED_MODULE_5__["default"].set_movies(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.getItem('favorites')));
    }
  }, []);

  var delFavorite = function delFavorite(id) {
    var newFav = _store__WEBPACK_IMPORTED_MODULE_5__["default"].movielist.filter(function (item) {
      return item.imdbID !== id;
    });
    setResult(newFav);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.setItem('favorites', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(newFav));
    _store__WEBPACK_IMPORTED_MODULE_5__["default"].set_movies(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.getItem('favorites')));
    console.log(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.getItem('favorites')));
  };

  return __jsx("div", {
    className: "jsx-2609125383" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("center", {
    className: "jsx-2609125383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2609125383" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.store.movielist.map(function (movie, index) {
    return __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      delFavorite: delFavorite,
      movie: movie,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    });
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2609125383",
    __self: this
  }, "#image.jsx-2609125383{width:100%;height:300px;}#poster.jsx-2609125383{padding:0 10px;}.card.jsx-2609125383{width:250px;height:420px;text-align:center;}@media screen and (max-width:600px){.column.jsx-2609125383{width:100%;display:block;margin-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9wYWdlcy9mYXZvcml0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NnQixBQUd3QixBQUlJLEFBR0osQUFNQSxXQVhkLEFBWWlCLENBTkYsR0FIZCxTQUhBLENBT29CLEFBTUMsa0JBTHJCLENBTUEiLCJmaWxlIjoiL2hvbWUvY29tbW9kb3JlNjQvb21iZC1uZXh0L3BhZ2VzL2Zhdm9yaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbW9ieC1sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQge29ic2VydmVyfSBmcm9tICdtb2J4LXJlYWN0JztcblxuY29uc3QgRmF2b3JpdGVzID0gcHJvcHMgPT4ge1xuXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdG9yZS50ZW1wKTtcblxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSl7XG4gICAgICBzZXRSZXN1bHQoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgICAgIHN0b3JlLnNldF9tb3ZpZXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBkZWxGYXZvcml0ZSA9IGlkID0+IHtcbiAgICBjb25zdCBuZXdGYXYgPSBzdG9yZS5tb3ZpZWxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pbWRiSUQgIT09IGlkKTtcbiAgICBzZXRSZXN1bHQobmV3RmF2KTtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3JpdGVzJywgSlNPTi5zdHJpbmdpZnkobmV3RmF2KSk7XG4gICAgc3RvcmUuc2V0X21vdmllcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkpO1xuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpKSk7XG4gICAgXG59O1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGNlbnRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHtwcm9wcy5zdG9yZS5tb3ZpZWxpc3QubWFwKChtb3ZpZSwgaW5kZXgpID0+IDxDYXJkIGtleT17aW5kZXh9IGRlbEZhdm9yaXRlPXtkZWxGYXZvcml0ZX0gbW92aWU9e21vdmllfS8+ICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9jZW50ZXI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgI2ltYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweFxuICAgICAgICAgIH1cbiAgICAgICAgICAjcG9zdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6NDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfSBcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbiAgKX07XG5cblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXIoRmF2b3JpdGVzKTsiXX0= */\n/*@ sourceURL=/home/commodore64/ombd-next/pages/favorites.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(Favorites));

/***/ })

})
//# sourceMappingURL=favorites.js.6b429bf2f0cff02d29b5.hot-update.js.map