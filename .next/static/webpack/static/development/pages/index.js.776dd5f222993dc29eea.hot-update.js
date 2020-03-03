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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-localstorage */ "./node_modules/mobx-localstorage/lib/index.js");
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_localstorage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ "./store.js");



var _jsxFileName = "/home/commodore64/ombd-next/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      favorite = _useState3[0],
      setFavorite = _useState3[1];

  var store = props.store;
  var movielist = store.movielist;

  var addFavorite = function addFavorite(object) {
    var newFav = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(favorite), [object]);
    setFavorite(newFav);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_5___default.a.setItem('favorites', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(newFav));
    console.log(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_5___default.a.getItem('favorites')));
  };

  var delFavorite = function delFavorite(index) {
    var newFav = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(favorite);

    newFav.splice(index, 1);
    setFavorite(newFav);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_5___default.a.setItem('favorites', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(newFav));
    console.log(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_5___default.a.getItem('favorites')));
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
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://www.omdbapi.com/?s=".concat(value, "&apikey=8ae8b189")));

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

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (mobx_localstorage__WEBPACK_IMPORTED_MODULE_5___default.a.getItem('favorites')) {
      store.set_movies(JSON.parse(mobx_localstorage__WEBPACK_IMPORTED_MODULE_5___default.a.getItem('favorites')));
    }
  }, []);
  return __jsx("div", {
    className: "jsx-4114159983" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("form", {
    id: "form",
    onSubmit: handleSubmit,
    className: "jsx-4114159983" + " " + "form-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4114159983" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4114159983" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
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
      lineNumber: 63
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4114159983" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Year",
    className: "jsx-4114159983" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4114159983" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("select", {
    id: "inputState",
    className: "jsx-4114159983" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("option", {
    defaultValue: true,
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Choose..."), __jsx("option", {
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "..."))), __jsx("button", {
    type: "submit",
    className: "jsx-4114159983" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Search"))), __jsx("hr", {
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("center", {
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4114159983" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, result.map(function (movie, index) {
    return __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: index,
      index: index,
      movie: movie,
      addFavorite: addFavorite,
      delFavorite: delFavorite,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    });
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "4114159983",
    __self: this
  }, ".form-control.jsx-4114159983{margin-right:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRm9CLEFBRzhCLGtCQUVuQiIsImZpbGUiOiIvaG9tZS9jb21tb2RvcmU2NC9vbWJkLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbW9ieC1sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnO1xuaW1wb3J0IHtpbmplY3QsIG9ic2VydmVyfSBmcm9tICdtb2J4LXJlYWN0JztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5cblxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcblxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmYXZvcml0ZSwgc2V0RmF2b3JpdGVdID0gdXNlU3RhdGUoW10pO1xuXG4gIFxuICBjb25zdCB7c3RvcmV9ID0gcHJvcHM7XG4gIGNvbnN0IHttb3ZpZWxpc3R9ID0gc3RvcmU7XG5cbiAgY29uc3QgYWRkRmF2b3JpdGUgPSBvYmplY3QgPT4ge1xuICAgICAgY29uc3QgbmV3RmF2ID0gWy4uLmZhdm9yaXRlLCBvYmplY3RdO1xuICAgICAgc2V0RmF2b3JpdGUobmV3RmF2KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvcml0ZXMnLCBKU09OLnN0cmluZ2lmeShuZXdGYXYpKTtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpKSk7XG4gIH07XG5cbiAgY29uc3QgZGVsRmF2b3JpdGUgPSBpbmRleCA9PiB7XG4gICAgICBjb25zdCBuZXdGYXYgPSBbLi4uZmF2b3JpdGVdO1xuICAgICAgbmV3RmF2LnNwbGljZShpbmRleCwgMSk7XG4gICAgICBzZXRGYXZvcml0ZShuZXdGYXYpO1xuICAgICAgXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3JpdGVzJywgSlNPTi5zdHJpbmdpZnkobmV3RmF2KSk7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkpO1xuICAgICAgXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCF2YWx1ZSkgcmV0dXJuO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9zPSR7dmFsdWV9JmFwaWtleT04YWU4YjE4OWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIFxuICAgIFxuICAgIGRhdGEuUmVzcG9uc2UgPT09IFwiVHJ1ZVwiID8gc2V0UmVzdWx0KGRhdGEuU2VhcmNoKSA6IGFsZXJ0KFwiTW92aWUgbm90IGZvdW5kIVwiKTtcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIFxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpe1xuICAgICAgc3RvcmUuc2V0X21vdmllcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkpO1xuICAgIH1cblxuICAgIFxuXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiBpZD1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlllYXJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiaW5wdXRTdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPkNob29zZS4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8aHIvPlxuXG4gICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHtyZXN1bHQubWFwKChtb3ZpZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDYXJkIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9IFxuICAgICAgICAgICAgICBtb3ZpZT17bW92aWV9XG4gICAgICAgICAgICAgIGFkZEZhdm9yaXRlPXthZGRGYXZvcml0ZX1cbiAgICAgICAgICAgICAgZGVsRmF2b3JpdGU9e2RlbEZhdm9yaXRlfVxuICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2NlbnRlcj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTJweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0KCdzdG9yZScpKG9ic2VydmVyKEluZGV4KSk7Il19 */\n/*@ sourceURL=/home/commodore64/ombd-next/pages/index.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])('store')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(Index)));

/***/ })

})
//# sourceMappingURL=index.js.776dd5f222993dc29eea.hot-update.js.map