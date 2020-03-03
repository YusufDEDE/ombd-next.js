webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-localstorage */ "./node_modules/mobx-localstorage/lib/index.js");
/* harmony import */ var mobx_localstorage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_localstorage__WEBPACK_IMPORTED_MODULE_4__);






var MovieStore =
/*#__PURE__*/
function () {
  function MovieStore() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MovieStore);

    this.movielist = [];
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MovieStore, [{
    key: "set_movies",
    value: function set_movies(array) {
      console.log('set movie', array);
      this.movielist = array || [];
    }
  }, {
    key: "add_movie",
    value: function add_movie(object) {
      this.movielist.push(object);
      mobx_localstorage__WEBPACK_IMPORTED_MODULE_4___default.a.setItem('favorites', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.movielist));
    }
  }, {
    key: "remove_movie",
    value: function remove_movie(index) {
      this.movielist.splice(this.movielist.indexOf(index), 1);
      mobx_localstorage__WEBPACK_IMPORTED_MODULE_4___default.a.setItem('favorites', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.movielist));
    }
  }, {
    key: "count",
    get: function get() {
      return this.movielist.length;
    }
  }]);

  return MovieStore;
}();

Object(mobx__WEBPACK_IMPORTED_MODULE_3__["decorate"])(MovieStore, {
  movielist: mobx__WEBPACK_IMPORTED_MODULE_3__["observable"],
  count: mobx__WEBPACK_IMPORTED_MODULE_3__["computed"],
  set_movies: mobx__WEBPACK_IMPORTED_MODULE_3__["action"],
  add_movies: mobx__WEBPACK_IMPORTED_MODULE_3__["action"],
  remove_movie: mobx__WEBPACK_IMPORTED_MODULE_3__["action"]
});
var store = new MovieStore();
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

})
//# sourceMappingURL=_app.js.593599bfad86ad545704.hot-update.js.map