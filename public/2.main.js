(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/client/api/offer.js":
/*!*********************************!*\
  !*** ./src/client/api/offer.js ***!
  \*********************************/
/*! exports provided: getTopSuggestions, getBestVpnDeals, getRecomendationOffers, getOfferInfo, getOfferList, savePayerEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopSuggestions", function() { return getTopSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBestVpnDeals", function() { return getBestVpnDeals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecomendationOffers", function() { return getRecomendationOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOfferInfo", function() { return getOfferInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOfferList", function() { return getOfferList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePayerEmail", function() { return savePayerEmail; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function getTopSuggestions(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/offer/top-suggestions', {
    method: "post",
    data: data,
    withCredentials: true
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
}
function getBestVpnDeals(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/offer/best-vpn-deals', {
    method: "post",
    data: data,
    withCredentials: true
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
}
function getRecomendationOffers(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/offer/recommendations', {
    method: "post",
    data: data,
    withCredentials: true
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
}
function getOfferInfo(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/offer/info', {
    method: "post",
    data: data,
    withCredentials: true
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
}
function getOfferList(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/offer/list', {
    method: "post",
    data: data,
    withCredentials: true
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
}
function savePayerEmail(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/order/payer_email', {
    method: "post",
    data: data,
    withCredentials: true
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
}

/***/ }),

/***/ "./src/client/blocks/OfferList/components/OfferListView.js":
/*!*****************************************************************!*\
  !*** ./src/client/blocks/OfferList/components/OfferListView.js ***!
  \*****************************************************************/
/*! exports provided: OfferListView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferListView", function() { return OfferListView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

 //import '../assets/OfferListView.scss'


var sortByOptions = [{
  key: 'recommended',
  text: 'Recommended',
  value: 'recommended',
  content: 'Recommended'
}, {
  key: 'low price',
  text: 'Low price',
  value: 'low price',
  content: 'Low price'
}, {
  key: 'high price',
  text: 'High price',
  value: 'high price',
  content: 'High price'
}];
var loaderItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var OfferListView = function OfferListView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sort-by-block"
  }, "Sort by:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    inline: true,
    name: "sort",
    value: props.sortData['sort'],
    options: sortByOptions,
    defaultValue: sortByOptions[0].value,
    onChange: props.handleInputChangeSort
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    id: "couponsBlock"
  }, props.loading ? Object.keys(loaderItems).map(function (rowKey) {
    return props.getOfferLoadingRow();
  }) : Object.keys(props.offers).map(function (rowKey) {
    return function () {
      switch (props.offers[rowKey]['category']) {
        case 'bundle':
          return props.getOfferBundleRow(props.offers[rowKey]);

        case 'vpn':
        default:
          return props.getOfferVpnRow(props.offers[rowKey]);
      }
    }();
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (OfferListView);

/***/ }),

/***/ "./src/client/blocks/OfferList/containers/OfferListContainer.js":
/*!**********************************************************************!*\
  !*** ./src/client/blocks/OfferList/containers/OfferListContainer.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_OfferListView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/OfferListView */ "./src/client/blocks/OfferList/components/OfferListView.js");
/* harmony import */ var _api_offer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/offer */ "./src/client/api/offer.js");
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

var OfferListContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(OfferListContainer, _React$Component);

  var _super = _createSuper(OfferListContainer);

  function OfferListContainer(props, context) {
    var _this;

    _classCallCheck(this, OfferListContainer);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "getOfferList", function () {
      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$state = _this.state,
          sortData = _this$state.sortData,
          searchData = _this$state.searchData;

      if (list) {
        searchData = list;
      }

      _this.setState({
        loading: 1
      });

      var data = {
        searchData: searchData,
        sortData: sortData
      };
      var result = Object(_api_offer__WEBPACK_IMPORTED_MODULE_5__["getOfferList"])(data);
      result.then(function (result) {
        var status = result.status,
            rows = result.rows;

        if (status) {
          _this.setState({
            loading: 0,
            offers: rows
          });
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickBuyItNow", function (id) {
      var getCartOffers = _this.props.getCartOffers;

      if (!getCartOffers) {
        getCartOffers = [];
      }

      var a = getCartOffers.concat([{
        id: id,
        quantity: 1
      }]);

      _this.props.fetchCartOffers(a);
    });

    _defineProperty(_assertThisInitialized(_this), "checkOfferInCart", function (id) {
      var getCartOffers = _this.props.getCartOffers;

      for (var k in getCartOffers) {
        var cid = getCartOffers[k]['id'];
        if (cid == id) return true;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "getOfferLoadingRow", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
        className: "bundle-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        verticalAlign: "middle",
        textAlign: "center",
        className: "first-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Image, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        className: "second-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
        length: "medium"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
        length: "medium"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
        length: "medium"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Paragraph, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
        length: "full"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
        length: "full"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
        length: "full"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        verticalAlign: "middle",
        textAlign: "center",
        className: "third-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        content: "Buy it now",
        color: "red",
        basic: true,
        disabled: true
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "getOfferVpnRow", function (offer) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
        className: "coupon-item"
      }, !parseInt(offer['availability']) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dimmer"], {
        active: true,
        className: "out-of-stock"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, "Out of stock")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        verticalAlign: "middle",
        textAlign: "center",
        className: "first-block"
      }, offer['ribbon'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ribbon"
      }, offer['ribbon']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
        to: offer['url'],
        className: "logo",
        src: offer['image']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "verified-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "color-green"
      }, "Verified"), " ", offer['user_used'], " users used this coupon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        className: "review",
        to: offer['vendor_url']
      }, offer['name'], " Review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        className: "second-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, offer['title']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "price-block"
      }, offer['old_price'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "old-price"
      }, "$", offer['old_price']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "price"
      }, "$", offer['price']), offer['discount'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Label"], {
        color: "red",
        horizontal: true
      }, offer['discount']), offer['discount_title'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "discount-title color-green"
      }, offer['discount_title'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "description"
      }, offer['description'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        verticalAlign: "middle",
        textAlign: "center",
        className: "third-block"
      }, _this.checkOfferInCart(offer['id']) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
        to: "/checkout",
        className: "to-cart-button",
        content: "Go to cart",
        color: "red",
        icon: "cart",
        basic: true,
        onClick: _this.handleClickBuyItNow.bind(_assertThisInitialized(_this), offer['id'])
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        content: "Buy it now",
        color: "red",
        basic: true,
        onClick: _this.handleClickBuyItNow.bind(_assertThisInitialized(_this), offer['id'])
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "getOfferBundleRow", function (offer) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
        className: "bundle-item"
      }, !parseInt(offer['availability']) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dimmer"], {
        active: true,
        className: "out-of-stock"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, "Out of stock")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        verticalAlign: "middle",
        textAlign: "center",
        className: "first-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
        to: offer['url'],
        className: "logo",
        src: offer['image']
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        className: "second-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, offer['title']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "brands-block"
      }, Object.keys(offer['brands']).map(function (rowBrandKey) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: offer['brands'][rowBrandKey]['url']
        }, offer['brands'][rowBrandKey]['name']);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "price-block"
      }, offer['old_price'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "old-price"
      }, "$", offer['old_price']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "price"
      }, "$", offer['price']), offer['discount'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Label"], {
        color: "red",
        horizontal: true
      }, offer['discount']), offer['discount_title'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "discount-title color-green"
      }, offer['discount_title'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "description"
      }, offer['description']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sub-description"
      }, offer['subdescription'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        verticalAlign: "middle",
        textAlign: "center",
        className: "third-block"
      }, _this.checkOfferInCart(offer['id']) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
        to: "/checkout",
        content: "Go to cart",
        color: "red",
        basic: true,
        onClick: _this.handleClickBuyItNow.bind(_assertThisInitialized(_this), offer['id'])
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        content: "Buy it now",
        color: "red",
        basic: true,
        onClick: _this.handleClickBuyItNow.bind(_assertThisInitialized(_this), offer['id'])
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeSort", function (e, _ref) {
      var name = _ref.name,
          value = _ref.value;
      e.preventDefault();
      var sortData = _this.state.sortData;
      sortData[name] = value;

      _this.setState({
        sortData: sortData
      });

      _this.getOfferList();
    });

    _this.state = {
      loading: 1,
      sortData: props.sortData ? props.sortData : {
        'sort': 'recommended'
      },
      searchData: props.searchData ? props.searchData : {},
      offers: false,
      loaderItems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    };

    _this.getOfferList();

    return _this;
  }

  _createClass(OfferListContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (JSON.stringify(nextProps.sortData) !== JSON.stringify(this.props.sortData)) {
        this.setState({
          sortData: nextProps.sortData
        });
        this.getOfferList();
        return;
      }

      if (JSON.stringify(nextProps.searchData) !== JSON.stringify(this.props.searchData)) {
        this.setState({
          searchData: nextProps.searchData
        });
        console.log(this.state);
        this.getOfferList(nextProps.searchData);
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OfferListView__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.state, {
        handleInputChangeSort: this.handleInputChangeSort,
        getOfferLoadingRow: this.getOfferLoadingRow,
        getOfferVpnRow: this.getOfferVpnRow,
        getOfferBundleRow: this.getOfferBundleRow
      }));
    }
  }]);

  return OfferListContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(OfferListContainer)));

/***/ }),

/***/ "./src/client/blocks/OfferList/index.js":
/*!**********************************************!*\
  !*** ./src/client/blocks/OfferList/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_OfferListContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/OfferListContainer */ "./src/client/blocks/OfferList/containers/OfferListContainer.js");

/* harmony default export */ __webpack_exports__["default"] = (_containers_OfferListContainer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS9vZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2Jsb2Nrcy9PZmZlckxpc3QvY29tcG9uZW50cy9PZmZlckxpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYmxvY2tzL09mZmVyTGlzdC9jb250YWluZXJzL09mZmVyTGlzdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2Jsb2Nrcy9PZmZlckxpc3QvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0VG9wU3VnZ2VzdGlvbnMiLCJkYXRhIiwiYXhpb3MiLCJtZXRob2QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldEJlc3RWcG5EZWFscyIsImdldFJlY29tZW5kYXRpb25PZmZlcnMiLCJnZXRPZmZlckluZm8iLCJnZXRPZmZlckxpc3QiLCJzYXZlUGF5ZXJFbWFpbCIsInNvcnRCeU9wdGlvbnMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJjb250ZW50IiwibG9hZGVySXRlbXMiLCJPZmZlckxpc3RWaWV3IiwicHJvcHMiLCJzb3J0RGF0YSIsImhhbmRsZUlucHV0Q2hhbmdlU29ydCIsImxvYWRpbmciLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicm93S2V5IiwiZ2V0T2ZmZXJMb2FkaW5nUm93Iiwib2ZmZXJzIiwiZ2V0T2ZmZXJCdW5kbGVSb3ciLCJnZXRPZmZlclZwblJvdyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImZldGNoQ2FydE9mZmVycyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiZ2V0Q2FydE9mZmVycyIsIk9mZmVyTGlzdENvbnRhaW5lciIsImNvbnRleHQiLCJsaXN0Iiwic3RhdGUiLCJzZWFyY2hEYXRhIiwic2V0U3RhdGUiLCJyZXN1bHQiLCJzdGF0dXMiLCJyb3dzIiwiYWxlcnQiLCJpZCIsImEiLCJjb25jYXQiLCJxdWFudGl0eSIsImsiLCJjaWQiLCJvZmZlciIsInBhcnNlSW50IiwiTGluayIsImNoZWNrT2ZmZXJJbkNhcnQiLCJoYW5kbGVDbGlja0J1eUl0Tm93IiwiYmluZCIsInJvd0JyYW5kS2V5IiwiZSIsIm5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIm5leHRQcm9wcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhSb3V0ZXIiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTQSxpQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUM7QUFDdEMsU0FBT0MsNENBQUssQ0FBQyxvREFBRCxFQUF1RDtBQUMvREMsVUFBTSxFQUFFLE1BRHVEO0FBRS9ERixRQUFJLEVBQUVBLElBRnlEO0FBRy9ERyxtQkFBZSxFQUFFO0FBSDhDLEdBQXZELENBQUwsQ0FJRkMsSUFKRSxDQUlHLFVBQVVDLFFBQVYsRUFBb0I7QUFDMUIsV0FBT0EsUUFBUSxDQUFDTCxJQUFoQjtBQUNELEdBTkksRUFNRk0sS0FORSxDQU1JLFVBQVVDLEtBQVYsRUFBaUI7QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsR0FSSSxDQUFQO0FBU0Q7QUFFTSxTQUFTRyxlQUFULENBQXlCVixJQUF6QixFQUErQjtBQUNwQyxTQUFPQyw0Q0FBSyxDQUFDLG1EQUFELEVBQXNEO0FBQzlEQyxVQUFNLEVBQUUsTUFEc0Q7QUFFOURGLFFBQUksRUFBRUEsSUFGd0Q7QUFHOURHLG1CQUFlLEVBQUU7QUFINkMsR0FBdEQsQ0FBTCxDQUlGQyxJQUpFLENBSUcsVUFBVUMsUUFBVixFQUFvQjtBQUMxQixXQUFPQSxRQUFRLENBQUNMLElBQWhCO0FBQ0QsR0FOSSxFQU1GTSxLQU5FLENBTUksVUFBVUMsS0FBVixFQUFpQjtBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxHQVJJ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UUFBTCxDQUFjO0FBQ1ZELG9CQUFVLEVBQUVzQixTQUFTLENBQUN0QjtBQURaLFNBQWQ7QUFHQW5DLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtpQyxLQUFqQjtBQUNBLGFBQUs3QixZQUFMLENBQWtCb0QsU0FBUyxDQUFDdEIsVUFBNUI7QUFDQTtBQUNIO0FBQ0o7OztXQWdWRCxrQkFBUztBQUNMLDBCQUFPLDJEQUFDLGlFQUFELGVBQ0MsS0FBS0QsS0FETjtBQUdILDZCQUFxQixFQUFFLEtBQUtsQixxQkFIekI7QUFLSCwwQkFBa0IsRUFBRSxLQUFLTSxrQkFMdEI7QUFNSCxzQkFBYyxFQUFFLEtBQUtHLGNBTmxCO0FBT0gseUJBQWlCLEVBQUUsS0FBS0Q7QUFQckIsU0FBUDtBQVNIOzs7O0VBaFk0Qm9DLDRDQUFLLENBQUNDLFM7O0FBbVl4QkMsa0lBQVUsQ0FBQ0MsMkRBQU8sQ0FBQ25DLGVBQUQsRUFBa0JGLGtCQUFsQixDQUFQLENBQTZDSyxrQkFBN0MsQ0FBRCxDQUF6QixFOzs7Ozs7Ozs7Ozs7QUNwYUE7QUFBQTtBQUFBO0FBRWVBLHFJQUFmLEUiLCJmaWxlIjoiMi5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcFN1Z2dlc3Rpb25zKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL29mZmVyL3RvcC1zdWdnZXN0aW9ucycsIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZXN0VnBuRGVhbHMoZGF0YSkge1xuICByZXR1cm4gYXhpb3MoJ2h0dHBzOi8vYXBpLnNhdmluZ3NkZWFsei5jb20vb2ZmZXIvYmVzdC12cG4tZGVhbHMnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVjb21lbmRhdGlvbk9mZmVycyhkYXRhKSB7XG4gIHJldHVybiBheGlvcygnaHR0cHM6Ly9hcGkuc2F2aW5nc2RlYWx6LmNvbS9vZmZlci9yZWNvbW1lbmRhdGlvbnMnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2ZmZXJJbmZvKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL29mZmVyL2luZm8nLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2ZmZXJMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL29mZmVyL2xpc3QnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVBheWVyRW1haWwoZGF0YSkge1xuICByZXR1cm4gYXhpb3MoJ2h0dHBzOi8vYXBpLnNhdmluZ3NkZWFsei5jb20vb3JkZXIvcGF5ZXJfZW1haWwnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLy9pbXBvcnQgJy4uL2Fzc2V0cy9PZmZlckxpc3RWaWV3LnNjc3MnXG5cbmltcG9ydCB7XG4gICAgR3JpZCwgXG4gICAgSWNvbiwgXG4gICAgRHJvcGRvd25cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cblxuY29uc3Qgc29ydEJ5T3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICAgIGtleTogJ3JlY29tbWVuZGVkJyxcbiAgICAgICAgdGV4dDogJ1JlY29tbWVuZGVkJyxcbiAgICAgICAgdmFsdWU6ICdyZWNvbW1lbmRlZCcsXG4gICAgICAgIGNvbnRlbnQ6ICdSZWNvbW1lbmRlZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGtleTogJ2xvdyBwcmljZScsXG4gICAgICAgIHRleHQ6ICdMb3cgcHJpY2UnLFxuICAgICAgICB2YWx1ZTogJ2xvdyBwcmljZScsXG4gICAgICAgIGNvbnRlbnQ6ICdMb3cgcHJpY2UnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICdoaWdoIHByaWNlJyxcbiAgICAgICAgdGV4dDogJ0hpZ2ggcHJpY2UnLFxuICAgICAgICB2YWx1ZTogJ2hpZ2ggcHJpY2UnLFxuICAgICAgICBjb250ZW50OiAnSGlnaCBwcmljZScsXG4gICAgfSxcbl1cblxuY29uc3QgbG9hZGVySXRlbXMgPSBbXG4gICAgMSwyLDMsNCw1LDYsNyw4LDksMFxuXVxuXG5leHBvcnQgY29uc3QgT2ZmZXJMaXN0VmlldyA9IChwcm9wcykgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvcnQtYnktYmxvY2snPlxuICAgICAgICAgICAgU29ydCBieTpcbiAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgICAgIG5hbWU9J3NvcnQnXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy5zb3J0RGF0YVsnc29ydCddIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgc29ydEJ5T3B0aW9ucyB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsgc29ydEJ5T3B0aW9uc1swXS52YWx1ZSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBwcm9wcy5oYW5kbGVJbnB1dENoYW5nZVNvcnQgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8R3JpZCBpZD0nY291cG9uc0Jsb2NrJz5cbiAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5sb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobG9hZGVySXRlbXMpLm1hcCgocm93S2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuZ2V0T2ZmZXJMb2FkaW5nUm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcy5vZmZlcnMpLm1hcCgocm93S2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3BzLm9mZmVyc1tyb3dLZXldWydjYXRlZ29yeSddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYnVuZGxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5nZXRPZmZlckJ1bmRsZVJvdyhwcm9wcy5vZmZlcnNbcm93S2V5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd2cG4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZ2V0T2ZmZXJWcG5Sb3cocHJvcHMub2ZmZXJzW3Jvd0tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBPZmZlckxpc3RWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7XG4gICAgd2l0aFJvdXRlclxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7XG4gICAgR3JpZCxcbiAgICBCdXR0b24sXG4gICAgTGFiZWwsXG4gICAgSW1hZ2UsXG4gICAgUGxhY2Vob2xkZXIsXG4gICAgRGltbWVyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgT2ZmZXJMaXN0VmlldyBmcm9tICcuLi9jb21wb25lbnRzL09mZmVyTGlzdFZpZXcnXG5cbmltcG9ydCB7XG4gICAgZ2V0T2ZmZXJMaXN0XG59IGZyb20gJy4uLy4uLy4uL2FwaS9vZmZlcidcblxuaW1wb3J0IHtmZXRjaENhcnRPZmZlcnN9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2V0Q2FydE9mZmVycydcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICAgIGZldGNoQ2FydE9mZmVyc1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XG4gICAgZ2V0Q2FydE9mZmVyczogc3RvcmUuZ2V0Q2FydE9mZmVycyxcbn0pXG5cbmNsYXNzIE9mZmVyTGlzdENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IDEsXG4gICAgICAgICAgICBzb3J0RGF0YTogcHJvcHMuc29ydERhdGEgPyBwcm9wcy5zb3J0RGF0YSA6IHsnc29ydCc6ICdyZWNvbW1lbmRlZCd9LFxuICAgICAgICAgICAgc2VhcmNoRGF0YTogcHJvcHMuc2VhcmNoRGF0YSA/IHByb3BzLnNlYXJjaERhdGEgOiB7fSxcbiAgICAgICAgICAgIG9mZmVyczogZmFsc2UsXG4gICAgICAgICAgICBsb2FkZXJJdGVtczogW1xuICAgICAgICAgICAgICAgIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDBcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0T2ZmZXJMaXN0KClcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShuZXh0UHJvcHMuc29ydERhdGEpICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnNvcnREYXRhKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNvcnREYXRhOiBuZXh0UHJvcHMuc29ydERhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmdldE9mZmVyTGlzdCgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShuZXh0UHJvcHMuc2VhcmNoRGF0YSkgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuc2VhcmNoRGF0YSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWFyY2hEYXRhOiBuZXh0UHJvcHMuc2VhcmNoRGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgICAgICAgICB0aGlzLmdldE9mZmVyTGlzdChuZXh0UHJvcHMuc2VhcmNoRGF0YSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE9mZmVyTGlzdCA9IChsaXN0ID0ge30pID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHNvcnREYXRhLFxuICAgICAgICAgICAgc2VhcmNoRGF0YVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgc2VhcmNoRGF0YSA9IGxpc3RcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogMVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgc2VhcmNoRGF0YTogc2VhcmNoRGF0YSxcbiAgICAgICAgICAgIHNvcnREYXRhOiBzb3J0RGF0YVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGdldE9mZmVyTGlzdChkYXRhKTtcblxuICAgICAgICByZXN1bHQudGhlbihcbiAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgICAgIH0gPSByZXN1bHRcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZmVyczogcm93cyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUmVqZWN0ZWQ6IFwiICsgZXJyb3IpOyAvLyBlcnJvciAtINCw0YDQs9GD0LzQtdC90YIgcmVqZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2tCdXlJdE5vdyA9IChpZCkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZ2V0Q2FydE9mZmVyc1xuICAgICAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGlmICghZ2V0Q2FydE9mZmVycykge1xuICAgICAgICAgICAgZ2V0Q2FydE9mZmVycyA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYSA9IGdldENhcnRPZmZlcnMuY29uY2F0KFt7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBxdWFudGl0eTogMVxuICAgICAgICB9XSlcblxuICAgICAgICB0aGlzLnByb3BzLmZldGNoQ2FydE9mZmVycyhhKVxuICAgIH1cblxuICAgIGNoZWNrT2ZmZXJJbkNhcnQgPSAoaWQpID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGdldENhcnRPZmZlcnNcbiAgICAgICAgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBmb3IgKGxldCBrIGluIGdldENhcnRPZmZlcnMpIHtcbiAgICAgICAgICAgIGxldCBjaWQgPSBnZXRDYXJ0T2ZmZXJzW2tdWydpZCddXG5cbiAgICAgICAgICAgIGlmIChjaWQgPT0gaWQpIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBnZXRPZmZlckxvYWRpbmdSb3cgPSAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkLlJvdyBjbGFzc05hbWU9J2J1bmRsZS1pdGVtJz5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW5cbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj0nbWlkZGxlJ1xuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmaXJzdC1ibG9jaydcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5JbWFnZS8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGxhY2Vob2xkZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWNvbmQtYmxvY2snXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nbWVkaXVtJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPSdtZWRpdW0nLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J21lZGl1bScvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QbGFjZWhvbGRlci5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuUGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QbGFjZWhvbGRlci5QYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgICAgIDwvUGxhY2Vob2xkZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW5cbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj0nbWlkZGxlJ1xuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aGlyZC1ibG9jaydcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J0J1eSBpdCBub3cnXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzaWNcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBnZXRPZmZlclZwblJvdyA9IChvZmZlcikgPT4ge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZC5Sb3cgY2xhc3NOYW1lPSdjb3Vwb24taXRlbSc+XG4gICAgICAgICAgICAgICAgeyFwYXJzZUludChvZmZlclsnYXZhaWxhYmlsaXR5J10pICYmIChcbiAgICAgICAgICAgICAgICAgICAgPERpbW1lciBhY3RpdmUgY2xhc3NOYW1lPSdvdXQtb2Ytc3RvY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdXQgb2Ygc3RvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0RpbW1lcj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtblxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZpcnN0LWJsb2NrJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKG9mZmVyWydyaWJib24nXSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWJib24nPntvZmZlclsncmliYm9uJ119PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtvZmZlclsndXJsJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvZ28nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e29mZmVyWydpbWFnZSddfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmVyaWZpZWQtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmVlbic+VmVyaWZpZWQ8L3NwYW4+IHtvZmZlclsndXNlcl91c2VkJ119IHVzZXJzIHVzZWQgdGhpcyBjb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0ncmV2aWV3JyB0bz17b2ZmZXJbJ3ZlbmRvcl91cmwnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b2ZmZXJbJ25hbWUnXX0gUmV2aWV3XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlY29uZC1ibG9jaydcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b2ZmZXJbJ3RpdGxlJ119XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpY2UtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvZmZlclsnb2xkX3ByaWNlJ10pICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdvbGQtcHJpY2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvZmZlclsnb2xkX3ByaWNlJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3ByaWNlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29mZmVyWydwcmljZSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvZmZlclsnZGlzY291bnQnXSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sb3I9J3JlZCcgaG9yaXpvbnRhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvZmZlclsnZGlzY291bnQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9mZmVyWydkaXNjb3VudF90aXRsZSddKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGlzY291bnQtdGl0bGUgY29sb3ItZ3JlZW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29mZmVyWydkaXNjb3VudF90aXRsZSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvZmZlclsnZGVzY3JpcHRpb24nXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW5cbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj0nbWlkZGxlJ1xuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aGlyZC1ibG9jaydcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmNoZWNrT2ZmZXJJbkNhcnQob2ZmZXJbJ2lkJ10pKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvY2hlY2tvdXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RvLWNhcnQtYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD0nR28gdG8gY2FydCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPSdjYXJ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzaWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tCdXlJdE5vdy5iaW5kKHRoaXMsIG9mZmVyWydpZCddKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J0J1eSBpdCBub3cnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzaWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tCdXlJdE5vdy5iaW5kKHRoaXMsIG9mZmVyWydpZCddKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGdldE9mZmVyQnVuZGxlUm93ID0gKG9mZmVyKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkLlJvdyBjbGFzc05hbWU9J2J1bmRsZS1pdGVtJz5cbiAgICAgICAgICAgICAgICB7IXBhcnNlSW50KG9mZmVyWydhdmFpbGFiaWxpdHknXSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8RGltbWVyIGFjdGl2ZSBjbGFzc05hbWU9J291dC1vZi1zdG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91dCBvZiBzdG9ja1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249J21pZGRsZSdcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmlyc3QtYmxvY2snXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG89e29mZmVyWyd1cmwnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9nbydcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17b2ZmZXJbJ2ltYWdlJ119XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWNvbmQtYmxvY2snXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAge29mZmVyWyd0aXRsZSddfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JyYW5kcy1ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMob2ZmZXJbJ2JyYW5kcyddKS5tYXAoKHJvd0JyYW5kS2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e29mZmVyWydicmFuZHMnXVtyb3dCcmFuZEtleV1bJ3VybCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29mZmVyWydicmFuZHMnXVtyb3dCcmFuZEtleV1bJ25hbWUnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmljZS1ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9mZmVyWydvbGRfcHJpY2UnXSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J29sZC1wcmljZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29mZmVyWydvbGRfcHJpY2UnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJpY2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2ZmZXJbJ3ByaWNlJ119XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9mZmVyWydkaXNjb3VudCddKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2xvcj0ncmVkJyBob3Jpem9udGFsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29mZmVyWydkaXNjb3VudCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob2ZmZXJbJ2Rpc2NvdW50X3RpdGxlJ10pICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkaXNjb3VudC10aXRsZSBjb2xvci1ncmVlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b2ZmZXJbJ2Rpc2NvdW50X3RpdGxlJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAge29mZmVyWydkZXNjcmlwdGlvbiddfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N1Yi1kZXNjcmlwdGlvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b2ZmZXJbJ3N1YmRlc2NyaXB0aW9uJ119XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249J21pZGRsZSdcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGhpcmQtYmxvY2snXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5jaGVja09mZmVySW5DYXJ0KG9mZmVyWydpZCddKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL2NoZWNrb3V0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD0nR28gdG8gY2FydCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja0J1eUl0Tm93LmJpbmQodGhpcywgb2ZmZXJbJ2lkJ10pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD0nQnV5IGl0IG5vdydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja0J1eUl0Tm93LmJpbmQodGhpcywgb2ZmZXJbJ2lkJ10pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2VTb3J0ID0gKGUsIHtuYW1lLCB2YWx1ZX0pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBzb3J0RGF0YVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIHNvcnREYXRhW25hbWVdID0gdmFsdWVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzb3J0RGF0YTogc29ydERhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRPZmZlckxpc3QoKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxPZmZlckxpc3RWaWV3XG4gICAgICAgICAgICB7Li4udGhpcy5zdGF0ZX1cblxuICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2VTb3J0PXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlU29ydH1cblxuICAgICAgICAgICAgZ2V0T2ZmZXJMb2FkaW5nUm93PXt0aGlzLmdldE9mZmVyTG9hZGluZ1Jvd31cbiAgICAgICAgICAgIGdldE9mZmVyVnBuUm93PXt0aGlzLmdldE9mZmVyVnBuUm93fVxuICAgICAgICAgICAgZ2V0T2ZmZXJCdW5kbGVSb3c9e3RoaXMuZ2V0T2ZmZXJCdW5kbGVSb3d9XG4gICAgICAgIC8+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE9mZmVyTGlzdENvbnRhaW5lcikpXG4iLCJpbXBvcnQgT2ZmZXJMaXN0Q29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9PZmZlckxpc3RDb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCBPZmZlckxpc3RDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==