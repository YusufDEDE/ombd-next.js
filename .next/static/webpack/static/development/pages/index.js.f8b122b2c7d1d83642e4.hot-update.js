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
      lineNumber: 54
    },
    __self: this
  }, __jsx("form", {
    id: "form",
    onSubmit: handleSubmit,
    className: "jsx-4114159983" + " " + "form-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4114159983" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4114159983" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
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
      lineNumber: 58
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4114159983" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Year",
    className: "jsx-4114159983" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4114159983" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("select", {
    id: "inputState",
    className: "jsx-4114159983" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("option", {
    defaultValue: true,
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Choose..."), __jsx("option", {
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "..."))), __jsx("button", {
    type: "submit",
    className: "jsx-4114159983" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Search"))), __jsx("hr", {
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("center", {
    className: "jsx-4114159983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4114159983" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
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
        lineNumber: 77
      },
      __self: this
    });
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "4114159983",
    __self: this
  }, ".form-control.jsx-4114159983{margin-right:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbW1vZG9yZTY0L29tYmQtbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRm9CLEFBRzhCLGtCQUVuQiIsImZpbGUiOiIvaG9tZS9jb21tb2RvcmU2NC9vbWJkLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbW9ieC1sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcblxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihmYXZvcml0ZSAhPT0gbnVsbCl7XG4gICAgICBzZXRGYXZvcml0ZShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGlmKEFycmF5LmlzQXJyYXkoZmF2b3JpdGUpKXtcbiAgICAgIGxldCBpc0ZhdiA9IGZhdm9yaXRlLmZpbmQoaXRlbXMgPT4gaXRlbS5pbWRiSUQgPT09IGl0ZW1zLmltZGJJRCk7XG4gICAgICBpZihpc0ZhdiAmJiBmYXZzdGF0dXMgIT09IGZhbHNlKSB7XG4gICAgICAgICAgc2V0RmF2U3RhdHVzKGZhbHNlKTtcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZEZhdm9yaXRlID0gb2JqZWN0ID0+IHtcbiAgICAgIGNvbnN0IG5ld0ZhdiA9IFsuLi5mYXZvcml0ZSwgb2JqZWN0XTtcbiAgICAgIHNldEZhdm9yaXRlKG5ld0Zhdik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3JpdGVzJywgSlNPTi5zdHJpbmdpZnkobmV3RmF2KSk7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkpO1xuICB9O1xuXG4gIGNvbnN0IGRlbEZhdm9yaXRlID0gaW5kZXggPT4ge1xuICAgICAgY29uc3QgbmV3RmF2ID0gWy4uLmZhdm9yaXRlXTtcbiAgICAgIG5ld0Zhdi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgc2V0RmF2b3JpdGUobmV3RmF2KTtcbiAgICAgIFxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlcycsIEpTT04uc3RyaW5naWZ5KG5ld0ZhdikpO1xuICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpKTtcbiAgICAgIFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZighdmFsdWUpIHJldHVybjtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/cz0ke3ZhbHVlfSZhcGlrZXk9OGFlOGIxODlgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBcbiAgICBcbiAgICBkYXRhLlJlc3BvbnNlID09PSBcIlRydWVcIiA/IHNldFJlc3VsdChkYXRhLlNlYXJjaCkgOiBhbGVydChcIk1vdmllIG5vdCBmb3VuZCFcIik7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBcbiAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIGlkPVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWWVhclwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJpbnB1dFN0YXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU+Q2hvb3NlLi4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj4uLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxoci8+XG5cbiAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAge3Jlc3VsdC5tYXAoKG1vdmllLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENhcmQga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH0gXG4gICAgICAgICAgICAgIG1vdmllPXttb3ZpZX1cbiAgICAgICAgICAgICAgYWRkRmF2b3JpdGU9e2FkZEZhdm9yaXRlfVxuICAgICAgICAgICAgICBkZWxGYXZvcml0ZT17ZGVsRmF2b3JpdGV9XG4gICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvY2VudGVyPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxMnB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=/home/commodore64/ombd-next/pages/index.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f8b122b2c7d1d83642e4.hot-update.js.map