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
    console.log('last str', favorite);
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
  }, "Del Favorite"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3647075915",
    __self: this
  }, ".card-header.jsx-3647075915{font-size:14px;}#image.jsx-3647075915{width:100%;height:300px;}#poster.jsx-3647075915{padding:0 10px;}.card.jsx-3647075915{width:250px;height:420px;text-align:center;}@media screen and (max-width:600px){.column.jsx-3647075915{width:100%;display:block;margin-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUR3QixBQUdvQyxBQUdKLEFBSUksQUFHSixBQU1BLFdBWGQsQUFZaUIsQ0FORixHQVZkLEFBT0EsU0FIQSxDQU9vQixBQU1DLGtCQUxyQixDQU1BIiwiZmlsZSI6Ii9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ21vYngtbG9jYWxzdG9yYWdlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBDYXJkKHtpbmRleCwgaXRlbX0pIHtcblxuICAgIGNvbnN0IFtmYXZvcml0ZSwgc2V0RmF2b3JpdGVdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtmYXZzdGF0dXMsIHNldEZhdlN0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBcbiAgICBpZihBcnJheS5pc0FycmF5KGZhdm9yaXRlKSl7XG4gICAgICAgIGxldCBpc0ZhdiA9IGZhdm9yaXRlLmZpbmQoaXRlbXMgPT4gaXRlbS5pbWRiSUQgPT09IGl0ZW1zLmltZGJJRCk7XG4gICAgICAgIGlmKGlzRmF2ICYmIGZhdnN0YXR1cyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNldEZhdlN0YXR1cyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRGYXZvcml0ZSA9IG9iamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ZhdiA9IFsuLi5mYXZvcml0ZSwgb2JqZWN0XTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xhc3Qgc3RyJywgZmF2b3JpdGUpO1xuICAgICAgICBzZXRGYXZvcml0ZShuZXdGYXYpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3JpdGVzJywgSlNPTi5zdHJpbmdpZnkobmV3RmF2KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbEZhdm9yaXRlID0gaW5kZXggPT4ge1xuICAgICAgICBjb25zdCBuZXdGYXYgPSBbLi4uZmF2b3JpdGVdO1xuICAgICAgICBuZXdGYXYuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgc2V0RmF2b3JpdGUobmV3RmF2KTtcbiAgICAgICAgXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvcml0ZXMnLCBKU09OLnN0cmluZ2lmeShuZXdGYXYpKTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgICAgICAgXG4gICAgfTtcblxuXG4gICAgXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBrZXk9e2l0ZW0uaWR9IGlkPVwicG9zdGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC13aGl0ZSBiZy1kYXJrIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+e2l0ZW0uVGl0bGV9ICh7aXRlbS5ZZWFyfSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uUG9zdGVyfSBpZD1cImltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+e2l0ZW0uVHlwZX0gPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwic3R5bGU9e3tkaXNwbGF5OmZhdnN0YXR1cyA/IFwiXCI6XCJub25lXCJ9fSBvbkNsaWNrPXsoKSA9PiBhZGRGYXZvcml0ZShpdGVtKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBGYXZvcml0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcInN0eWxlPXt7ZGlzcGxheTpmYXZzdGF0dXMgPyBcIm5vbmVcIjpcIlwifX0gb25DbGljaz17KCkgPT4gZGVsRmF2b3JpdGUoaW5kZXgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbCBGYXZvcml0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICNpbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAjcG9zdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQyMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG5cblxuLy88YnV0dG9uIHN0eWxlPXt7ZGlzcGxheTpmYXZzdGF0dXMgPyBcIm5vbmVcIjpcIlwifX0gb25DbGljaz17KCkgPT4gYWRkRmF2b3JpdGUoc2VhcmNoKX0+RmF2PC9idXR0b24+XG4vLzxidXR0b24gb25DbGljaz17KCkgPT4gY2hlY2soc2VhcmNoKX0+Q2U8L2J1dHRvbj4iXX0= */\n/*@ sourceURL=/home/commodore64/ombd-next/components/Card.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Card); //<button style={{display:favstatus ? "none":""}} onClick={() => addFavorite(search)}>Fav</button>
//<button onClick={() => check(search)}>Ce</button>

/***/ })

})
//# sourceMappingURL=favorites.js.d7229ffef30aa61bf2ef.hot-update.js.map