(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/client/routes/Bundle/components/BundleView.js":
/*!***********************************************************!*\
  !*** ./src/client/routes/Bundle/components/BundleView.js ***!
  \***********************************************************/
/*! exports provided: BundleView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BundleView", function() { return BundleView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _blocks_MainSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/MainSlider */ "./src/client/blocks/MainSlider/index.js");
/* harmony import */ var _blocks_OfferList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/OfferList */ "./src/client/blocks/OfferList/index.js");
/* harmony import */ var _blocks_BrandList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/BrandList */ "./src/client/blocks/BrandList/index.js");
/* harmony import */ var _blocks_FilterBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/FilterBlock */ "./src/client/blocks/FilterBlock/index.js");








var head = function head(url) {
  var pageUrl = typeof url !== 'undefined' ? url : '';
  var canonical = "https://savingsdealz.com" + pageUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    key: Math.random()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Savingsdealz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "robots",
    content: "index, follow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "canonical",
    href: canonical
  }));
};

var BundleView = function BundleView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, head(props.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
    id: "sliderBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: 16,
    verticalAlign: "middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_MainSlider__WEBPACK_IMPORTED_MODULE_3__["default"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "bundlePage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: 4,
    mobile: 16,
    id: "leftSidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header"
  }, "Find Bundle by your needs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_FilterBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    searchData: {
      'category': 'bundle'
    },
    buttonTitle: "Find Bundle for you",
    actionClickFind: props.actionClickFind
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_BrandList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    searchData: {
      'category': 'bundle'
    },
    actionCheckedBrands: props.actionCheckedBrands
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    id: "contentBlock",
    width: 9,
    mobile: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_OfferList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    searchData: props.searchData
  })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (BundleView);

/***/ }),

/***/ "./src/client/routes/Bundle/containers/BundleContainer.js":
/*!****************************************************************!*\
  !*** ./src/client/routes/Bundle/containers/BundleContainer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_BundleView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BundleView */ "./src/client/routes/Bundle/components/BundleView.js");
/* harmony import */ var _api_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/filter */ "./src/client/api/filter.js");
/* harmony import */ var _inc_inc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../inc/inc */ "./src/client/inc/inc.js");
/* harmony import */ var _actions_getCartOffers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/getCartOffers */ "./src/client/actions/getCartOffers.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var mapDispatchToProps = {
  fetchCartOffers: _actions_getCartOffers__WEBPACK_IMPORTED_MODULE_6__["fetchCartOffers"]
};

var mapStateToProps = function mapStateToProps(store) {
  return {
    getCartOffers: store.getCartOffers
  };
};

var BundleContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(BundleContainer, _React$Component);

  var _super = _createSuper(BundleContainer);

  function BundleContainer(props) {
    var _this;

    _classCallCheck(this, BundleContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getFilterList", function () {
      var searchData = _this.state.searchData;
      var result = Object(_api_filter__WEBPACK_IMPORTED_MODULE_4__["getFilterList"])(searchData);
      result.then(function (result) {
        var status = result.status,
            rows = result.rows;

        if (status) {
          _this.setState({
            filter: rows
          });
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "actionCheckedBrands", function (brands) {
      var searchData = _this.state.searchData;
      var br = Object(_inc_inc__WEBPACK_IMPORTED_MODULE_5__["cloneObject"])(brands);
      var sD = Object(_inc_inc__WEBPACK_IMPORTED_MODULE_5__["cloneObject"])(searchData);
      sD['brands'] = br;

      _this.setState({
        searchData: sD
      });
    });

    _defineProperty(_assertThisInitialized(_this), "actionClickFind", function (filterData) {
      var searchData = _this.state.searchData;
      var br = Object(_inc_inc__WEBPACK_IMPORTED_MODULE_5__["cloneObject"])(filterData);
      var sD = Object(_inc_inc__WEBPACK_IMPORTED_MODULE_5__["cloneObject"])(searchData);
      var array = Object.assign(br, sD);

      _this.setState({
        searchData: array
      });
    });

    _this.state = {
      loading: 0,
      filter: false,
      filterData: {},
      searchData: {
        'category': 'bundle'
      }
    };

    _this.getFilterList();

    return _this;
  }

  _createClass(BundleContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BundleView__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.state, {
        actionClickFind: this.actionClickFind,
        actionCheckedBrands: this.actionCheckedBrands
      }));
    }
  }]);

  return BundleContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(BundleContainer)));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlcy9CdW5kbGUvY29tcG9uZW50cy9CdW5kbGVWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcm91dGVzL0J1bmRsZS9jb250YWluZXJzL0J1bmRsZUNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJoZWFkIiwidXJsIiwicGFnZVVybCIsImNhbm9uaWNhbCIsIk1hdGgiLCJyYW5kb20iLCJCdW5kbGVWaWV3IiwicHJvcHMiLCJhY3Rpb25DbGlja0ZpbmQiLCJhY3Rpb25DaGVja2VkQnJhbmRzIiwic2VhcmNoRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImZldGNoQ2FydE9mZmVycyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiZ2V0Q2FydE9mZmVycyIsIkJ1bmRsZUNvbnRhaW5lciIsInN0YXRlIiwicmVzdWx0IiwiZ2V0RmlsdGVyTGlzdCIsInRoZW4iLCJzdGF0dXMiLCJyb3dzIiwic2V0U3RhdGUiLCJmaWx0ZXIiLCJlcnJvciIsImFsZXJ0IiwiYnJhbmRzIiwiYnIiLCJjbG9uZU9iamVjdCIsInNEIiwiZmlsdGVyRGF0YSIsImFycmF5IiwiT2JqZWN0IiwiYXNzaWduIiwibG9hZGluZyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFJvdXRlciIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsR0FBRCxFQUFTO0FBQ3BCLE1BQU1DLE9BQU8sR0FBSSxPQUFPRCxHQUFQLEtBQWUsV0FBaEIsR0FBK0JBLEdBQS9CLEdBQXFDLEVBQXJEO0FBQ0EsTUFBSUUsU0FBUyxHQUFHLDZCQUE2QkQsT0FBN0M7QUFDQSxzQkFDRSwyREFBQyxtREFBRDtB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RXlCMkIsNENBQUssQ0FBQ0MsUzs7QUEyRXJCQyxrSUFBVSxDQUFDQywyREFBTyxDQUFDMUIsZUFBRCxFQUFrQkYsa0JBQWxCLENBQVAsQ0FBNkNLLGVBQTdDLENBQUQsQ0FBekIsRSIsImZpbGUiOiIxNy5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0J1xuaW1wb3J0IHtcbiAgU2VnbWVudCxcbiAgR3JpZCxcbiAgQ29udGFpbmVyLFxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IE1haW5TbGlkZXIgZnJvbSAnLi4vLi4vLi4vYmxvY2tzL01haW5TbGlkZXInXG5pbXBvcnQgT2ZmZXJMaXN0IGZyb20gJy4uLy4uLy4uL2Jsb2Nrcy9PZmZlckxpc3QnXG5pbXBvcnQgQnJhbmRMaXN0IGZyb20gJy4uLy4uLy4uL2Jsb2Nrcy9CcmFuZExpc3QnXG5pbXBvcnQgRmlsdGVyQmxvY2sgZnJvbSAnLi4vLi4vLi4vYmxvY2tzL0ZpbHRlckJsb2NrJ1xuXG5jb25zdCBoZWFkID0gKHVybCkgPT4ge1xuICBjb25zdCBwYWdlVXJsID0gKHR5cGVvZiB1cmwgIT09ICd1bmRlZmluZWQnKSA/IHVybCA6ICcnO1xuICBsZXQgY2Fub25pY2FsID0gXCJodHRwczovL3NhdmluZ3NkZWFsei5jb21cIiArIHBhZ2VVcmw7XG4gIHJldHVybiAoXG4gICAgPEhlbG1ldCBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgPHRpdGxlPlNhdmluZ3NkZWFsejwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIi8+XG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtjYW5vbmljYWx9Lz5cbiAgICA8L0hlbG1ldD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgQnVuZGxlVmlldyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8R3JpZD5cbiAgICAgICAge2hlYWQocHJvcHMudXJsKX1cbiAgICAgICAgPEdyaWQuUm93IGlkPVwic2xpZGVyQmxvY2tcIj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezE2fSB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCI+XG4gICAgICAgICAgICA8TWFpblNsaWRlci8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8ZGl2IGlkPVwiYnVuZGxlUGFnZVwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uXG4gICAgICAgICAgICAgIHdpZHRoPXs0fVxuICAgICAgICAgICAgICBtb2JpbGU9ezE2fVxuICAgICAgICAgICAgICBpZD1cImxlZnRTaWRlYmFyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNlZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIEZpbmQgQnVuZGxlIGJ5IHlvdXIgbmVlZHNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8RmlsdGVyQmxvY2tcbiAgICAgICAgICAgICAgICAgIHNlYXJjaERhdGE9e3sgJ2NhdGVnb3J5JzogJ2J1bmRsZScgfX1cbiAgICAgICAgICAgICAgICAgIGJ1dHRvblRpdGxlPVwiRmluZCBCdW5kbGUgZm9yIHlvdVwiXG4gICAgICAgICAgICAgICAgICBhY3Rpb25DbGlja0ZpbmQ9e3Byb3BzLmFjdGlvbkNsaWNrRmluZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgIDxCcmFuZExpc3RcbiAgICAgICAgICAgICAgICAgIHNlYXJjaERhdGE9e3sgJ2NhdGVnb3J5JzogJ2J1bmRsZScgfX1cbiAgICAgICAgICAgICAgICAgIGFjdGlvbkNoZWNrZWRCcmFuZHM9e3Byb3BzLmFjdGlvbkNoZWNrZWRCcmFuZHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBpZD1cImNvbnRlbnRCbG9ja1wiIHdpZHRoPXs5fSBtb2JpbGU9ezE2fT5cbiAgICAgICAgICAgICAgPE9mZmVyTGlzdFxuICAgICAgICAgICAgICAgIHNlYXJjaERhdGE9e3Byb3BzLnNlYXJjaERhdGF9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQnVuZGxlVmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtcbiAgICB3aXRoUm91dGVyXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBCdW5kbGVWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvQnVuZGxlVmlldydcblxuaW1wb3J0IHtcbiAgICBnZXRGaWx0ZXJMaXN0XG59IGZyb20gJy4uLy4uLy4uL2FwaS9maWx0ZXInXG5cbmltcG9ydCB7XG4gICAgY2xvbmVPYmplY3Rcbn0gZnJvbSAnLi4vLi4vLi4vaW5jL2luYydcblxuaW1wb3J0IHsgZmV0Y2hDYXJ0T2ZmZXJzIH0gIGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2V0Q2FydE9mZmVycydcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICAgIGZldGNoQ2FydE9mZmVyc1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XG4gICAgZ2V0Q2FydE9mZmVycyAgOiBzdG9yZS5nZXRDYXJ0T2ZmZXJzXG59KVxuXG5jbGFzcyBCdW5kbGVDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZyAgICA6IDAsXG4gICAgICAgICAgICBmaWx0ZXIgICAgIDogZmFsc2UsXG4gICAgICAgICAgICBmaWx0ZXJEYXRhIDoge30sXG4gICAgICAgICAgICBzZWFyY2hEYXRhIDogeyAnY2F0ZWdvcnknIDogJ2J1bmRsZScgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRGaWx0ZXJMaXN0KClcbiAgICB9XG5cbiAgICBnZXRGaWx0ZXJMaXN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgc2VhcmNoRGF0YVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBnZXRGaWx0ZXJMaXN0KHNlYXJjaERhdGEpO1xuXG4gICAgICAgIHJlc3VsdC50aGVuKFxuICAgICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICAgICAgfSA9IHJlc3VsdFxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIgOiByb3dzLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIGFsZXJ0KFwiUmVqZWN0ZWQ6IFwiICsgZXJyb3IpOyAvLyBlcnJvciAtINCw0YDQs9GD0LzQtdC90YIgcmVqZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYWN0aW9uQ2hlY2tlZEJyYW5kcyA9IChicmFuZHMpID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHNlYXJjaERhdGFcbiAgICAgICAgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgbGV0IGJyID0gY2xvbmVPYmplY3QoYnJhbmRzKVxuICAgICAgICBsZXQgc0QgPSBjbG9uZU9iamVjdChzZWFyY2hEYXRhKVxuICAgICAgICBzRFsnYnJhbmRzJ10gPSBiclxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VhcmNoRGF0YTogc0RcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhY3Rpb25DbGlja0ZpbmQgPSAoZmlsdGVyRGF0YSkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgc2VhcmNoRGF0YVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBsZXQgYnIgPSBjbG9uZU9iamVjdChmaWx0ZXJEYXRhKVxuICAgICAgICBsZXQgc0QgPSBjbG9uZU9iamVjdChzZWFyY2hEYXRhKVxuXG4gICAgICAgIGxldCBhcnJheSA9IE9iamVjdC5hc3NpZ24oYnIsIHNEKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaERhdGE6IGFycmF5XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPEJ1bmRsZVZpZXdcbiAgICAgICAgICAgICAgICAgICAgeyAuLi50aGlzLnN0YXRlIH1cblxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25DbGlja0ZpbmQ9eyB0aGlzLmFjdGlvbkNsaWNrRmluZCB9XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkNoZWNrZWRCcmFuZHM9eyB0aGlzLmFjdGlvbkNoZWNrZWRCcmFuZHMgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEJ1bmRsZUNvbnRhaW5lcikpXG4iXSwic291cmNlUm9vdCI6IiJ9