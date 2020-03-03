webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");




var MovieStore =
/*#__PURE__*/
function () {
  function MovieStore() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MovieStore);

    this.movielist = [];
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MovieStore, [{
    key: "set_movies",
    value: function set_movies(array) {
      console.log('set movie', array);
      this.movielist = array || [];
    }
  }, {
    key: "add_movie",
    value: function add_movie(object) {
      this.movielist.push(object);
    }
  }, {
    key: "remove_movie",
    value: function remove_movie(index) {
      this.movielist.splice(this.movielist.indexOf(index), 1);
    }
  }, {
    key: "count",
    get: function get() {
      return this.movielist.length;
    }
  }]);

  return MovieStore;
}();

Object(mobx__WEBPACK_IMPORTED_MODULE_2__["decorate"])(MovieStore, {
  movielist: mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
  count: mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
  set_movies: mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
  add_movies: mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
  remove_movie: mobx__WEBPACK_IMPORTED_MODULE_2__["action"]
});
var store = new MovieStore();
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

})
//# sourceMappingURL=index.js.4996af45ab5f60e3baf5.hot-update.js.map