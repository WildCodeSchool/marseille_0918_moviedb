webpackHotUpdate("main",{

/***/ "./src/components/searchBar/SearchBar.js":
/*!***********************************************!*\
  !*** ./src/components/searchBar/SearchBar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBar; });
/* harmony import */ var _home_wilder_Documents_projet_2_cinema_marseille_0918_moviedb_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wilder_Documents_projet_2_cinema_marseille_0918_moviedb_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wilder_Documents_projet_2_cinema_marseille_0918_moviedb_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wilder_Documents_projet_2_cinema_marseille_0918_moviedb_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wilder_Documents_projet_2_cinema_marseille_0918_moviedb_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _helpers_stringHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/stringHelpers */ "./src/helpers/stringHelpers.js");
/* harmony import */ var _helpers_stringHelpers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_helpers_stringHelpers__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SearchBar_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SearchBar.css */ "./src/components/searchBar/SearchBar.css");
/* harmony import */ var _SearchBar_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/home/wilder/Documents/projet-2-cinema/marseille_0918_moviedb/src/components/searchBar/SearchBar.js";





var APIKEY = "9a310b7d46fbc7e00fbc62646ecc790c";

var SearchBar =
/*#__PURE__*/
function (_Component) {
  Object(_home_wilder_Documents_projet_2_cinema_marseille_0918_moviedb_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchBar, _Component);

  function SearchBar(props) {
    var _this;

    Object(_home_wilder_Documents_projet_2_cinema_marseille_0918_moviedb_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchBar);

    _this = Object(_home_wilder_Documents_projet_2_cinema_marseille_0918_moviedb_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wilder_Documents_projet_2_cinema_marseille_0918_moviedb_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchBar).call(this, props));
    _this.state = {
      searchValue: '',
      movies: []
    };
    return _this;
  }

  Object(_home_wilder_Documents_projet_2_cinema_marseille_0918_moviedb_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchBar, [{
    key: "getFilm",
    value: function getFilm(searchValue) {
      var _this2 = this;

      this.setState({
        searchValue: searchValue
      });
      var url = "https://api.themoviedb.org/3/search/movie?api_key=".concat(APIKEY, "&language=en-US&query=").concat(searchValue, "&page=1&include_adult=false");
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url).then(function (response) {
        _this2.setState({
          movies: response.data.results
        });
      });
    }
  }, {
    key: "setSelectedMovie",
    value: function setSelectedMovie(movie) {
      this.setState({
        searchValue: movie.title,
        movies: [movie]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          movies = _this$state.movies,
          searchValue = _this$state.searchValue;
      console.log("IN SEARCHBAR RENDER", this.props);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "searchBar",
        style: {
          caretColor: "red"
        },
        type: "search",
        name: "searchBar",
        value: searchValue,
        onChange: function onChange(event) {
          return _this3.getFilm(event.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), movies.length > 0 && movies[0].title != searchValue && searchValue != '' && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "searchBar2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "testBack",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, movies.map(function (movie) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          className: "listSearchBar",
          key: movie.id,
          style: {
            color: "white",
            cursor: 'pointer'
          },
          onClick: function onClick() {
            return _this3.setSelectedMovie(movie);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          to: "/movie/".concat(movie.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "englober",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "imgSearchBar",
          src: Object(_helpers_stringHelpers__WEBPACK_IMPORTED_MODULE_8__["baseUrl"])(movie.poster_path),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "movieSearchBar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, movie.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "releaseMovie",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, movie.release_date))));
      }))));
    }
  }]);

  return SearchBar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=main.43903e1757c3486d13f3.hot-update.js.map