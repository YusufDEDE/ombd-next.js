webpackHotUpdate("static/development/pages/favorites.js",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-localstorage */ "./node_modules/mobx-localstorage/lib/index.js");
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_localstorage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/commodore64/ombd-next/components/Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



function Card(_ref) {
  var index = _ref.index,
      item = _ref.item;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      favorite = _useState[0],
      setFavorite = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      favstatus = _useState2[0],
      setFavStatus = _useState2[1];

  var addFavorite = function addFavorite(object) {
    var newFav = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(favorite), [object]);
    setFavorite(newFav);

    if (true) {
      mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.setItem('favorites', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(newFav));
      console.log(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.getItem('favorites')));
    }
  };

  var delFavorite = function delFavorite(index) {
    var newFav = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(favorite);

    newFav.splice(index, 1);
    setFavorite(newFav);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.setItem('favorites', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(newFav));
    console.log(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.getItem('favorites')));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (favorite !== null) {
      setFavorite(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.getItem('favorites')));
    }
  }, []);
  return __jsx("div", {
    key: item.id,
    id: "poster",
    className: "jsx-3647075915" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3647075915" + " " + "card text-white bg-dark mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3647075915" + " " + "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, item.Title, " (", item.Year, ")"), __jsx("div", {
    className: "jsx-3647075915" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3647075915" + " " + "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("img", {
    src: item.Poster,
    id: "image",
    className: "jsx-3647075915",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("small", {
    className: "jsx-3647075915",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, item.Type, " ")), __jsx("p", {
    className: "jsx-3647075915" + " " + "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
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
      lineNumber: 47
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
      lineNumber: 50
    },
    __self: this
  }, "Del Favorite"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3647075915",
    __self: this
  }, ".card-header.jsx-3647075915{font-size:14px;}#image.jsx-3647075915{width:100%;height:300px;}#poster.jsx-3647075915{padding:0 10px;}.card.jsx-3647075915{width:250px;height:420px;text-align:center;}@media screen and (max-width:600px){.column.jsx-3647075915{width:100%;display:block;margin-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUR3QixBQUdvQyxBQUdKLEFBSUksQUFHSixBQU1BLFdBWGQsQUFZaUIsQ0FORixHQVZkLEFBT0EsU0FIQSxDQU9vQixBQU1DLGtCQUxyQixDQU1BIiwiZmlsZSI6Ii9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ21vYngtbG9jYWxzdG9yYWdlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBDYXJkKHtpbmRleCwgaXRlbX0pIHtcblxuICAgIGNvbnN0IFtmYXZvcml0ZSwgc2V0RmF2b3JpdGVdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtmYXZzdGF0dXMsIHNldEZhdlN0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBcbiAgIFxuXG4gICAgY29uc3QgYWRkRmF2b3JpdGUgPSBvYmplY3QgPT4ge1xuICAgICAgICBjb25zdCBuZXdGYXYgPSBbLi4uZmF2b3JpdGUsIG9iamVjdF07XG4gICAgICAgIHNldEZhdm9yaXRlKG5ld0Zhdik7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlcycsIEpTT04uc3RyaW5naWZ5KG5ld0ZhdikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBkZWxGYXZvcml0ZSA9IGluZGV4ID0+IHtcbiAgICAgICAgY29uc3QgbmV3RmF2ID0gWy4uLmZhdm9yaXRlXTtcbiAgICAgICAgbmV3RmF2LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHNldEZhdm9yaXRlKG5ld0Zhdik7XG4gICAgICAgIFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3JpdGVzJywgSlNPTi5zdHJpbmdpZnkobmV3RmF2KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpKSk7XG4gICAgICAgIFxuICAgIH07XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZihmYXZvcml0ZSAhPT0gbnVsbCl7XG4gICAgICAgIHNldEZhdm9yaXRlKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpKSk7XG4gICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCIga2V5PXtpdGVtLmlkfSBpZD1cInBvc3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctZGFyayBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPntpdGVtLlRpdGxlfSAoe2l0ZW0uWWVhcn0pPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLlBvc3Rlcn0gaWQ9XCJpbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPntpdGVtLlR5cGV9IDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcInN0eWxlPXt7ZGlzcGxheTpmYXZzdGF0dXMgPyBcIlwiOlwibm9uZVwifX0gb25DbGljaz17KCkgPT4gYWRkRmF2b3JpdGUoaXRlbSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRmF2b3JpdGVcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCJzdHlsZT17e2Rpc3BsYXk6ZmF2c3RhdHVzID8gXCJub25lXCI6XCJcIn19IG9uQ2xpY2s9eygpID0+IGRlbEZhdm9yaXRlKGluZGV4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBEZWwgRmF2b3JpdGVcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAjaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgI3Bvc3RlciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MjBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuXG5cbi8vPGJ1dHRvbiBzdHlsZT17e2Rpc3BsYXk6ZmF2c3RhdHVzID8gXCJub25lXCI6XCJcIn19IG9uQ2xpY2s9eygpID0+IGFkZEZhdm9yaXRlKHNlYXJjaCl9PkZhdjwvYnV0dG9uPlxuLy88YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoZWNrKHNlYXJjaCl9PkNlPC9idXR0b24+Il19 */\n/*@ sourceURL=/home/commodore64/ombd-next/components/Card.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Card); //<button style={{display:favstatus ? "none":""}} onClick={() => addFavorite(search)}>Fav</button>
//<button onClick={() => check(search)}>Ce</button>

/***/ })

})
//# sourceMappingURL=favorites.js.62b9714619fbd8383e73.hot-update.js.map