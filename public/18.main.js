(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/client/routes/Page404/components/Page404View.js":
/*!*************************************************************!*\
  !*** ./src/client/routes/Page404/components/Page404View.js ***!
  \*************************************************************/
/*! exports provided: Page404View, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404View", function() { return Page404View; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");





var head = function head() {
  var canonical = "https://savingsdealz.com";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    key: Math.random()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "404 Page not found | Savingsdealz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "robots",
    content: "noindex, nofollow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "canonical",
    href: canonical
  }));
};

var Page404View = function Page404View() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, head(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h1",
    textAlign: "center"
  }, "404", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, null, "The page you requested cannot be found! Perhaps it was deleted, or you entered an invalid address.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "In any case, we will help to find the necessary information for you - you can return to the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "main page"), " to get started with her search for the information you need."))));
};
/* harmony default export */ __webpack_exports__["default"] = (Page404View);

/***/ }),

/***/ "./src/client/routes/Page404/containers/Page404Container.js":
/*!******************************************************************!*\
  !*** ./src/client/routes/Page404/containers/Page404Container.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Page404View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Page404View */ "./src/client/routes/Page404/components/Page404View.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Page404Container = /*#__PURE__*/function (_React$Component) {
  _inherits(Page404Container, _React$Component);

  var _super = _createSuper(Page404Container);

  function Page404Container(props) {
    _classCallCheck(this, Page404Container);

    return _super.call(this, props);
  }

  _createClass(Page404Container, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page404View__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, this.state, {
        url: this.props.match.url
      }));
    }
  }]);

  return Page404Container;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page404Container);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlcy9QYWdlNDA0L2NvbXBvbmVudHMvUGFnZTQwNFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvUGFnZTQwNC9jb250YWluZXJzL1BhZ2U0MDRDb250YWluZXIuanMiXSwibmFtZXMiOlsiaGVhZCIsImNhbm9uaWNhbCIsIk1hdGgiLCJyYW5kb20iLCJQYWdlNDA0VmlldyIsIlBhZ2U0MDRDb250YWluZXIiLCJwcm9wcyIsInN0YXRlIiwibWF0Y2giLCJ1cmwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLE1BQUlDLFNBQVMsR0FBRywwQkFBaEI7QUFDQSxzQkFDRSwyREFBQyxtREFBRDtBQUFRLE9BQUcsRUFBRUMsSUFBSSxDQUFDQyxNQUFMO0FBQWIsa0JBQ0UsOEdBREYsZUFFRTtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQW9CLFdBQU8sRUFBQztBQUE1QixJQUZGLGVBR0U7QUFBTSxPQUFHLEVBQUMsV0FBVjtBQUFzQixRQUFJLEVBQUVGO0FBQTVCLElBSEYsQ0FERjtBQU9ELENBVEQ7O0FBV08sSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxzQkFDekIsd0VBQ0lKLElBQUksRUFEUixlQUVFLDJEQUFDLDJEQUFELHFCQUNFLDJEQUFDLHlEQUFELHFCQUNFLDJEQUFDLHdEQUFEO0FBQVEsTUFBRSxFQUFDLElBQVg7QUFBZ0IsYUFBUyxFQUFDO0FBQTFCLHlCQUVFLDJEQUFDLHdEQUFELENBQVEsU0FBUiw2R0FGRixDQURGLGVBUUUsbUxBQStGLDJEQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsaUJBQS9GLGtFQVJGLENBREYsQ0FGRixDQUR5QjtBQUFBLENBQXBCO0FBa0JRSSwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7O0lBRU1DLGdCOzs7OztBQUNKLDRCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsNkJBQ1pBLEtBRFk7QUFFbkI7Ozs7V0FFRCxrQkFBVTtBQUNSLDBCQUFPLDJEQUNMLCtEQURLLGVBRUQsS0FBS0MsS0FGSjtBQUdMLFdBQUcsRUFBRSxLQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJDO0FBSGpCLFNBQVA7QUFLRDs7OztFQVg0QkMsNENBQUssQ0FBQ0MsUzs7QUFjdEJOLCtFQUFmLEUiLCJmaWxlIjoiMTgubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0J1xuaW1wb3J0IHsgQ29udGFpbmVyLCBTZWdtZW50LCBIZWFkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuY29uc3QgaGVhZCA9ICgpID0+IHtcbiAgbGV0IGNhbm9uaWNhbCA9IFwiaHR0cHM6Ly9zYXZpbmdzZGVhbHouY29tXCI7XG4gIHJldHVybiAoXG4gICAgPEhlbG1ldCBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgPHRpdGxlPjQwNCBQYWdlIG5vdCBmb3VuZCB8IFNhdmluZ3NkZWFsejwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPSdyb2JvdHMnIGNvbnRlbnQ9J25vaW5kZXgsIG5vZm9sbG93JyAvPlxuICAgICAgPGxpbmsgcmVsPSdjYW5vbmljYWwnIGhyZWY9e2Nhbm9uaWNhbH0gLz5cbiAgICA8L0hlbG1ldD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgUGFnZTQwNFZpZXcgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgeyBoZWFkKCl9XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTZWdtZW50PlxuICAgICAgICA8SGVhZGVyIGFzPSdoMScgdGV4dEFsaWduPSdjZW50ZXInPlxuICAgICAgICAgIDQwNFxuICAgICAgICAgIDxIZWFkZXIuU3ViaGVhZGVyPlxuICAgICAgICAgICAgVGhlIHBhZ2UgeW91IHJlcXVlc3RlZCBjYW5ub3QgYmUgZm91bmQhXG4gICAgICAgICAgICBQZXJoYXBzIGl0IHdhcyBkZWxldGVkLCBvciB5b3UgZW50ZXJlZCBhbiBpbnZhbGlkIGFkZHJlc3MuXG4gICAgICAgICAgPC9IZWFkZXIuU3ViaGVhZGVyPlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPHA+SW4gYW55IGNhc2UsIHdlIHdpbGwgaGVscCB0byBmaW5kIHRoZSBuZWNlc3NhcnkgaW5mb3JtYXRpb24gZm9yIHlvdSAtIHlvdSBjYW4gcmV0dXJuIHRvIHRoZSA8TGluayB0bz0nLyc+bWFpbiBwYWdlPC9MaW5rPiB0byBnZXQgc3RhcnRlZCB3aXRoIGhlciBzZWFyY2ggZm9yIHRoZSBpbmZvcm1hdGlvbiB5b3UgbmVlZC48L3A+XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlNDA0Vmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2U0MDRWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZTQwNFZpZXcnXG5cbmNsYXNzIFBhZ2U0MDRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDxcbiAgICAgIFBhZ2U0MDRWaWV3XG4gICAgICB7Li4udGhpcy5zdGF0ZX1cbiAgICAgIHVybD17dGhpcy5wcm9wcy5tYXRjaC51cmx9XG4gICAgICAvPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U0MDRDb250YWluZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=