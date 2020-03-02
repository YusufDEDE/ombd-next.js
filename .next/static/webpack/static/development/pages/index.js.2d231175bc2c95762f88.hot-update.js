webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-localstorage */ "./node_modules/mobx-localstorage/lib/index.js");
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_localstorage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");




var _jsxFileName = "/home/commodore64/ombd-next/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      favorite = _useState3[0],
      setFavorite = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (favorite !== null) {
      setFavorite(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_6___default.a.getItem('favorites')));
    }
  }, []);

  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default()(favorite)) {
    var isFav = favorite.find(function (items) {
      return item.imdbID === items.imdbID;
    });

    if (isFav && favstatus !== false) {
      setFavStatus(false);
    }
  }

  var addFavorite = function addFavorite(object) {
    var newFav = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(favorite), [object]);
    setFavorite(newFav);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_6___default.a.setItem('favorites', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(newFav));
    console.log(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_6___default.a.getItem('favorites')));
  };

  var delFavorite = function delFavorite(index) {
    var newFav = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(favorite);

    newFav.splice(index, 1);
    setFavorite(newFav);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_6___default.a.setItem('favorites', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(newFav));
    console.log(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_6___default.a.getItem('favorites')));
  };

  var handleSubmit = function handleSubmit(e) {
    var res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();

            if (value) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            _context.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("http://www.omdbapi.com/?s=".concat(value, "&apikey=8ae8b189")));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 8:
            data = _context.sent;
            data.Response === "True" ? setResult(data.Search) : alert("Movie not found!");
            console.log(data);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  return __jsx("div", {
    className: "jsx-4114159983" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("form", {
    id: "form",
    onSubmit: handleSubmit,
    className: "jsx-4114159983" + " " + "form-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4114159983" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4114159983" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Title",
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    className: "jsx-4114159983" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4114159983" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Year",
    className: "jsx-4114159983" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4114159983" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("select", {
    id: "inputState",
    className: "jsx-4114159983" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("option", {
    defaultValue: true,
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Choose..."), __jsx("option", {
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "..."))), __jsx("button", {
    type: "submit",
    className: "jsx-4114159983" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Search"))), __jsx("hr", {
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("center", {
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4114159983" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, result.map(function (movie, index) {
    return __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: index,
      index: index,
      movie: movie,
      addFavorite: addFavorite,
      delFavorite: delFavorite,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    });
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "4114159983",
    __self: this
  }, ".form-control.jsx-4114159983{margin-right:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Rm9CLEFBRzhCLGtCQUVuQiIsImZpbGUiOiIvaG9tZS9jb21tb2RvcmU2NC9vbWJkLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbW9ieC1sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcblxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmYXZvcml0ZSwgc2V0RmF2b3JpdGVdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoZmF2b3JpdGUgIT09IG51bGwpe1xuICAgICAgc2V0RmF2b3JpdGUoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBpZihBcnJheS5pc0FycmF5KGZhdm9yaXRlKSl7XG4gICAgICBsZXQgaXNGYXYgPSBmYXZvcml0ZS5maW5kKGl0ZW1zID0+IGl0ZW0uaW1kYklEID09PSBpdGVtcy5pbWRiSUQpO1xuICAgICAgaWYoaXNGYXYgJiYgZmF2c3RhdHVzICE9PSBmYWxzZSkge1xuICAgICAgICAgIHNldEZhdlN0YXR1cyhmYWxzZSk7XG4gICAgICB9XG4gIH1cblxuICBjb25zdCBhZGRGYXZvcml0ZSA9IG9iamVjdCA9PiB7XG4gICAgICBjb25zdCBuZXdGYXYgPSBbLi4uZmF2b3JpdGUsIG9iamVjdF07XG4gICAgICBzZXRGYXZvcml0ZShuZXdGYXYpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlcycsIEpTT04uc3RyaW5naWZ5KG5ld0ZhdikpO1xuICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgfTtcblxuICBjb25zdCBkZWxGYXZvcml0ZSA9IGluZGV4ID0+IHtcbiAgICAgIGNvbnN0IG5ld0ZhdiA9IFsuLi5mYXZvcml0ZV07XG4gICAgICBuZXdGYXYuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHNldEZhdm9yaXRlKG5ld0Zhdik7XG4gICAgICBcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvcml0ZXMnLCBKU09OLnN0cmluZ2lmeShuZXdGYXYpKTtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpKSk7XG4gICAgICBcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoIXZhbHVlKSByZXR1cm47XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP3M9JHt2YWx1ZX0mYXBpa2V5PThhZThiMTg5YCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgXG4gICAgXG4gICAgZGF0YS5SZXNwb25zZSA9PT0gXCJUcnVlXCIgPyBzZXRSZXN1bHQoZGF0YS5TZWFyY2gpIDogYWxlcnQoXCJNb3ZpZSBub3QgZm91bmQhXCIpO1xuXG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgXG4gIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiBpZD1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlllYXJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiaW5wdXRTdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPkNob29zZS4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8aHIvPlxuXG4gICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHtyZXN1bHQubWFwKChtb3ZpZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDYXJkIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9IFxuICAgICAgICAgICAgICBtb3ZpZT17bW92aWV9XG4gICAgICAgICAgICAgIGFkZEZhdm9yaXRlPXthZGRGYXZvcml0ZX1cbiAgICAgICAgICAgICAgZGVsRmF2b3JpdGU9e2RlbEZhdm9yaXRlfVxuICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2NlbnRlcj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTJweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/home/commodore64/ombd-next/pages/index.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.2d231175bc2c95762f88.hot-update.js.map