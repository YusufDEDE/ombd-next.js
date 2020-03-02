webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-localstorage */ "./node_modules/mobx-localstorage/lib/index.js");
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_localstorage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/home/commodore64/ombd-next/components/Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



function Card(_ref) {
  var index = _ref.index,
      item = _ref.item;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      favorite = _useState[0],
      setFavorite = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      favstatus = _useState2[0],
      setFavStatus = _useState2[1];

  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(favorite)) {
    var isFav = favorite.find(function (items) {
      return item.imdbID === items.imdbID;
    });

    if (isFav && favstatus !== false) {
      setFavStatus(false);
    }
  }

  var addFavorite = function addFavorite(object) {
    var newFav = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(favorite), [object]);
    setFavorite(newFav);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_4___default.a.setItem('favorites', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(newFav));
    console.log(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_4___default.a.getItem('favorites')));
  };

  var delFavorite = function delFavorite(index) {
    var newFav = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(favorite);

    newFav.splice(index, 1);
    setFavorite(newFav);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_4___default.a.setItem('favorites', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(newFav));
    console.log(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_4___default.a.getItem('favorites')));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (favorite !== null) {
      setFavorite(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_4___default.a.getItem('favorites')));
    }
  }, []);
  return __jsx("div", {
    key: item.id,
    id: "poster",
    className: "jsx-3647075915" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3647075915" + " " + "card text-white bg-dark mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3647075915" + " " + "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, item.Title, " (", item.Year, ")"), __jsx("div", {
    className: "jsx-3647075915" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3647075915" + " " + "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("img", {
    src: item.Poster,
    id: "image",
    className: "jsx-3647075915",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("small", {
    className: "jsx-3647075915",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, item.Type, " ")), __jsx("p", {
    className: "jsx-3647075915" + " " + "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("button", {
    style: {
      display: favstatus ? "" : "none"
    },
    onClick: function onClick() {
      return addFavorite(item);
    },
    className: "jsx-3647075915" + " " + "btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Favorite"), __jsx("button", {
    style: {
      display: favstatus ? "none" : ""
    },
    onClick: function onClick() {
      return delFavorite(index);
    },
    className: "jsx-3647075915" + " " + "btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Del Favorite"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3647075915",
    __self: this
  }, ".card-header.jsx-3647075915{font-size:14px;}#image.jsx-3647075915{width:100%;height:300px;}#poster.jsx-3647075915{padding:0 10px;}.card.jsx-3647075915{width:250px;height:420px;text-align:center;}@media screen and (max-width:600px){.column.jsx-3647075915{width:100%;display:block;margin-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNER3QixBQUdvQyxBQUdKLEFBSUksQUFHSixBQU1BLFdBWGQsQUFZaUIsQ0FORixHQVZkLEFBT0EsU0FIQSxDQU9vQixBQU1DLGtCQUxyQixDQU1BIiwiZmlsZSI6Ii9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ21vYngtbG9jYWxzdG9yYWdlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBDYXJkKHtpbmRleCwgaXRlbX0pIHtcblxuICAgIGNvbnN0IFtmYXZvcml0ZSwgc2V0RmF2b3JpdGVdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtmYXZzdGF0dXMsIHNldEZhdlN0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBcbiAgICBpZihBcnJheS5pc0FycmF5KGZhdm9yaXRlKSl7XG4gICAgICAgIGxldCBpc0ZhdiA9IGZhdm9yaXRlLmZpbmQoaXRlbXMgPT4gaXRlbS5pbWRiSUQgPT09IGl0ZW1zLmltZGJJRCk7XG4gICAgICAgIGlmKGlzRmF2ICYmIGZhdnN0YXR1cyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNldEZhdlN0YXR1cyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRGYXZvcml0ZSA9IG9iamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ZhdiA9IFsuLi5mYXZvcml0ZSwgb2JqZWN0XTtcbiAgICAgICAgc2V0RmF2b3JpdGUobmV3RmF2KTtcbiAgICAgICBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlcycsIEpTT04uc3RyaW5naWZ5KG5ld0ZhdikpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkpO1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsRmF2b3JpdGUgPSBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ZhdiA9IFsuLi5mYXZvcml0ZV07XG4gICAgICAgIG5ld0Zhdi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBzZXRGYXZvcml0ZShuZXdGYXYpO1xuICAgICAgICBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlcycsIEpTT04uc3RyaW5naWZ5KG5ld0ZhdikpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkpO1xuICAgICAgICBcbiAgICB9O1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYoZmF2b3JpdGUgIT09IG51bGwpe1xuICAgICAgICBzZXRGYXZvcml0ZShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkpO1xuICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiIGtleT17aXRlbS5pZH0gaWQ9XCJwb3N0ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLWRhcmsgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj57aXRlbS5UaXRsZX0gKHtpdGVtLlllYXJ9KTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj48L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5Qb3N0ZXJ9IGlkPVwiaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD57aXRlbS5UeXBlfSA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCJzdHlsZT17e2Rpc3BsYXk6ZmF2c3RhdHVzID8gXCJcIjpcIm5vbmVcIn19IG9uQ2xpY2s9eygpID0+IGFkZEZhdm9yaXRlKGl0ZW0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZhdm9yaXRlXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwic3R5bGU9e3tkaXNwbGF5OmZhdnN0YXR1cyA/IFwibm9uZVwiOlwiXCJ9fSBvbkNsaWNrPXsoKSA9PiBkZWxGYXZvcml0ZShpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRGVsIEZhdm9yaXRlXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgI2ltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHhcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICNwb3N0ZXIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjI1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcblxuXG4vLzxidXR0b24gc3R5bGU9e3tkaXNwbGF5OmZhdnN0YXR1cyA/IFwibm9uZVwiOlwiXCJ9fSBvbkNsaWNrPXsoKSA9PiBhZGRGYXZvcml0ZShzZWFyY2gpfT5GYXY8L2J1dHRvbj5cbi8vPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjaGVjayhzZWFyY2gpfT5DZTwvYnV0dG9uPiJdfQ== */\n/*@ sourceURL=/home/commodore64/ombd-next/components/Card.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Card); //<button style={{display:favstatus ? "none":""}} onClick={() => addFavorite(search)}>Fav</button>
//<button onClick={() => check(search)}>Ce</button>

/***/ })

})
//# sourceMappingURL=index.js.f6eba348353b28065aa1.hot-update.js.map