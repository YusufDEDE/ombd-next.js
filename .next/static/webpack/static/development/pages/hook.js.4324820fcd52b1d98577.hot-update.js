webpackHotUpdate("static/development/pages/hook.js",{

/***/ "./pages/hook.js":
/*!***********************!*\
  !*** ./pages/hook.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-localstorage */ "./node_modules/mobx-localstorage/lib/index.js");
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_localstorage__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/home/commodore64/ombd-next/pages/hook.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Todo(_ref) {
  var todo = _ref.todo,
      index = _ref.index,
      completeTodo = _ref.completeTodo,
      deleteTodo = _ref.deleteTodo,
      activeTodo = _ref.activeTodo;
  return __jsx("div", {
    style: {
      textDecoration: todo.isCompleted ? 'line-through' : ''
    },
    className: "todo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, todo.text, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return completeTodo(index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Complate"), __jsx("button", {
    onClick: function onClick() {
      return activeTodo(index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Active"), __jsx("button", {
    onClick: function onClick() {
      return deleteTodo(index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Delete")));
}

function TodoForm(_ref2) {
  var addTodo = _ref2.addTodo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      value = _useState[0],
      setValue = _useState[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    className: "input",
    value: value,
    placeholder: "Add Todo...",
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
}

function App() {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      todos = _useState2[0],
      setTodos = _useState2[1];

  var addTodo = function addTodo(text) {
    var NewTodos = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(todos), [{
      text: text,
      isCompleted: false
    }]);
    setTodos(NewTodos);
    mobx_localstorage__WEBPACK_IMPORTED_MODULE_3___default.a.setItem('todos', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(NewTodos));
  };

  var completeTodo = function completeTodo(index) {
    var newTodos = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(todos);

    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  var deleteTodo = function deleteTodo(index) {
    var newTodos = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(todos);

    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  var activeTodo = function activeTodo(index) {
    var activeTodos = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(todos);

    activeTodos[index].isCompleted = false;
    setTodos(activeTodos);
  };

  return __jsx("div", {
    className: "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "todo-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, todos.map(function (todo, index) {
    return __jsx(Todo, {
      key: index,
      index: index,
      todo: todo,
      completeTodo: completeTodo,
      deleteTodo: deleteTodo,
      activeTodo: activeTodo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    });
  }), __jsx(TodoForm, {
    addTodo: addTodo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=hook.js.4324820fcd52b1d98577.hot-update.js.map