webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactive_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactive-localstorage */ "./node_modules/reactive-localstorage/lib/index.js");
/* harmony import */ var reactive_localstorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactive_localstorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/commodore64/ombd-next/components/Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



function Card(_ref) {
  var movie = _ref.movie,
      index = _ref.index,
      addFavorite = _ref.addFavorite,
      delFavorite = _ref.delFavorite;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      favorite = _useState[0],
      setFavorite = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      favstatus = _useState2[0],
      setFavStatus = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (favorite !== null) {
      setFavorite(JSON.parse(reactive_localstorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('favorites')));
    }
  }, []);

  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(favorite)) {
    var isFav = favorite.find(function (items) {
      return movie.imdbID === items.imdbID;
    });

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
    onClick: function onClick() {
      return addFavorite(movie);
    },
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
    onClick: function onClick() {
      return delFavorite(movie.imdbID);
    },
    className: "jsx-3647075915" + " " + "btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Del Favorite"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3647075915",
    __self: this
  }, ".card-header.jsx-3647075915{font-size:14px;}#image.jsx-3647075915{width:100%;height:300px;}#poster.jsx-3647075915{padding:0 10px;}.card.jsx-3647075915{width:250px;height:420px;text-align:center;}@media screen and (max-width:600px){.column.jsx-3647075915{width:100%;display:block;margin-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0N3QixBQUdvQyxBQUdKLEFBSUksQUFHSixBQU1BLFdBWGQsQUFZaUIsQ0FORixHQVZkLEFBT0EsU0FIQSxDQU9vQixBQU1DLGtCQUxyQixDQU1BIiwiZmlsZSI6Ii9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ3JlYWN0aXZlLWxvY2Fsc3RvcmFnZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQ2FyZCh7bW92aWUsIGluZGV4LCBhZGRGYXZvcml0ZSwgZGVsRmF2b3JpdGV9KSB7XG5cbiAgICBjb25zdCBbZmF2b3JpdGUsIHNldEZhdm9yaXRlXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZmF2c3RhdHVzLCBzZXRGYXZTdGF0dXNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmKGZhdm9yaXRlICE9PSBudWxsKXtcbiAgICAgICAgc2V0RmF2b3JpdGUoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBpZihBcnJheS5pc0FycmF5KGZhdm9yaXRlKSl7XG4gICAgICAgIGxldCBpc0ZhdiA9IGZhdm9yaXRlLmZpbmQoaXRlbXMgPT4gbW92aWUuaW1kYklEID09PSBpdGVtcy5pbWRiSUQpO1xuICAgICAgICBpZihpc0ZhdiAmJiBmYXZzdGF0dXMgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzZXRGYXZTdGF0dXMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCIga2V5PXttb3ZpZS5pZH0gaWQ9XCJwb3N0ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLWRhcmsgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj57bW92aWUuVGl0bGV9ICh7bW92aWUuWWVhcn0pPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttb3ZpZS5Qb3N0ZXJ9IGlkPVwiaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD57bW92aWUuVHlwZX0gPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwic3R5bGU9e3tkaXNwbGF5OmZhdnN0YXR1cyA/IFwiXCI6XCJub25lXCJ9fSBvbkNsaWNrPXsoKSA9PiBhZGRGYXZvcml0ZShtb3ZpZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRmF2b3JpdGVcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCJzdHlsZT17e2Rpc3BsYXk6ZmF2c3RhdHVzID8gXCJub25lXCI6XCJcIn19IG9uQ2xpY2s9eygpID0+IGRlbEZhdm9yaXRlKG1vdmllLmltZGJJRCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRGVsIEZhdm9yaXRlXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgI2ltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHhcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICNwb3N0ZXIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjI1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcblxuXG4vLzxidXR0b24gc3R5bGU9e3tkaXNwbGF5OmZhdnN0YXR1cyA/IFwibm9uZVwiOlwiXCJ9fSBvbkNsaWNrPXsoKSA9PiBhZGRGYXZvcml0ZShzZWFyY2gpfT5GYXY8L2J1dHRvbj5cbi8vPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjaGVjayhzZWFyY2gpfT5DZTwvYnV0dG9uPiJdfQ== */\n/*@ sourceURL=/home/commodore64/ombd-next/components/Card.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Card); //<button style={{display:favstatus ? "none":""}} onClick={() => addFavorite(search)}>Fav</button>
//<button onClick={() => check(search)}>Ce</button>

/***/ })

})
//# sourceMappingURL=index.js.5f30735addcd53cccb3f.hot-update.js.map