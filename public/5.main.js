(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ "./src/client/api/slider.js":
/*!**********************************!*\
  !*** ./src/client/api/slider.js ***!
  \**********************************/
/*! exports provided: getSliderList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSliderList", function() { return getSliderList; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function getSliderList(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/slider/list', {
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

/***/ "./src/client/blocks/MainSlider/components/MainSliderView.js":
/*!*******************************************************************!*\
  !*** ./src/client/blocks/MainSlider/components/MainSliderView.js ***!
  \*******************************************************************/
/*! exports provided: CustomPrevArrow, CustomNextArrow, MainSliderView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPrevArrow", function() { return CustomPrevArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomNextArrow", function() { return CustomNextArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSliderView", function() { return MainSliderView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



 //import '../assets/MainSliderView.scss'


function CustomPrevArrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/images/arrow-left.svg",
    onClick: onClick,
    className: "custom-slick prev mobile hidden",
    width: 20,
    height: 20
  });
}
function CustomNextArrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/images/arrow-right.svg",
    onClick: onClick,
    className: "custom-slick next mobile hidden",
    width: 20,
    height: 20
  });
}
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomPrevArrow, null),
  nextArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomNextArrow, null),
  customPaging: function customPaging(i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slider-paging"
    });
  }
};
var MainSliderView = function MainSliderView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, settings, !props.slides ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Placeholder"], {
    id: "previewSlide"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Placeholder"].Image, null))) : Object.keys(props.slides).map(function (rowKey) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: 'slide-' + props.slides['id']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
      src: props.slides[rowKey]['image']
    }));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MainSliderView);

/***/ }),

/***/ "./src/client/blocks/MainSlider/containers/MainSliderContainer.js":
/*!************************************************************************!*\
  !*** ./src/client/blocks/MainSlider/containers/MainSliderContainer.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MainSliderView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MainSliderView */ "./src/client/blocks/MainSlider/components/MainSliderView.js");
/* harmony import */ var _api_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/slider */ "./src/client/api/slider.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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





var MainSliderContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(MainSliderContainer, _React$Component);

  var _super = _createSuper(MainSliderContainer);

  function MainSliderContainer(props, context) {
    var _this;

    _classCallCheck(this, MainSliderContainer);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "getSliderList", function () {
      var result = Object(_api_slider__WEBPACK_IMPORTED_MODULE_2__["getSliderList"])();
      result.then(function (result) {
        var status = result.status,
            rows = result.rows;

        if (status) {
          _this.setState({
            slides: rows
          });
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _this.state = {
      loading: 0,
      slides: false
    };

    _this.getSliderList();

    return _this;
  }

  _createClass(MainSliderContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainSliderView__WEBPACK_IMPORTED_MODULE_1__["default"], this.state);
    }
  }]);

  return MainSliderContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MainSliderContainer);

/***/ }),

/***/ "./src/client/blocks/MainSlider/index.js":
/*!***********************************************!*\
  !*** ./src/client/blocks/MainSlider/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_MainSliderContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/MainSliderContainer */ "./src/client/blocks/MainSlider/containers/MainSliderContainer.js");

/* harmony default export */ __webpack_exports__["default"] = (_containers_MainSliderContainer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/client/routes/Home/components/HomeView.js":
/*!*******************************************************!*\
  !*** ./src/client/routes/Home/components/HomeView.js ***!
  \*******************************************************/
/*! exports provided: HomeView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeView", function() { return HomeView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _blocks_MainSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/MainSlider */ "./src/client/blocks/MainSlider/index.js");







var head = function head(url) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], {
    key: Math.random()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "The best place to buy VPN coupon with discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "See the best digital offer, based on price and users review"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "robots",
    content: "index, follow"
  }));
};

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  adaptiveHeight: true,
  customPaging: function customPaging(i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slider-paging"
    });
  }
};
var HomeView = function HomeView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], null, head(props.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    id: "sliderBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    width: 16,
    verticalAlign: "middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_MainSlider__WEBPACK_IMPORTED_MODULE_5__["default"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "homePage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "white-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    columns: 1,
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    className: "block-title"
  }, "Why choose us?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    columns: 5,
    textAlign: "center",
    stretched: true,
    id: "chooseUsBlock",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    mobile: 12,
    computer: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/images/home/choose-1.png",
    centered: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, "Best price you can find"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    mobile: 12,
    computer: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/images/home/choose-2.png",
    centered: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, "Buy 4 services pay for 1"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    mobile: 12,
    computer: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/images/home/choose-3.png",
    centered: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, "More than 4000 offers"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    mobile: 12,
    computer: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/images/home/choose-4.png",
    centered: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, "Accept any payment system"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    mobile: 12,
    computer: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/images/home/choose-5.png",
    centered: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, "Don\u2019t need to search all in one place"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grey-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    textAlign: "center",
    column: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    className: "block-title"
  }, "Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    columns: 4,
    textAlign: "center",
    stretched: true,
    id: "categoryBlock",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    textAlign: "center",
    computer: 12,
    mobile: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/images/home/category-3.png",
    centered: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, "VPN service"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/vpn",
    primary: true,
    content: "View more"
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grey-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    id: "recommendationBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    className: "block-title"
  }, "Recommendations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    columns: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    menu: {
      secondary: true
    },
    panes: props.getRecomedationPanes()
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "white-block",
    id: "buyWithDiscountBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/images/home/stop-paying-image.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/vpn",
    primary: true,
    content: "Buy with discount"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grey-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    id: "feedbackBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    textAlign: "center",
    column: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    className: "block-ttile"
  }, "Feedback")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
    columns: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, settings, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    style: {
      width: 354
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    className: "image",
    src: "/images/home/feedback-1.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    className: "mark",
    src: "/images/home/c.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name"
  }, "Connie ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Lane")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "date"
  }, "February 4, 2020")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Content, null, "It is realy amazing!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "I bought 1 year premium VpnSecure account and save 70%!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Thanks you guys, you are awesome!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    style: {
      width: 354
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    className: "image",
    src: "/images/home/feedback-2.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    className: "mark",
    src: "/images/home/c.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name"
  }, "Francisco ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Watson")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "date"
  }, "April 7, 2020")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Content, null, "Bundles are great!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "I bought 4in1 and got - VPN, Cloud storage, IpTV and stream subscriptions for 1 month with awesome price!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "I got 80% off! You are right, dont pay full price use your brain!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    style: {
      width: 354
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    className: "image",
    src: "/images/home/feedback-3.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    className: "mark",
    src: "/images/home/c.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name"
  }, "Devon ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Hawkins")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "date"
  }, "May 11, 2020")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Content, null, "Hosting, VPN, Antivirus and cloud storage with huge discount!"))))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (HomeView);

/***/ }),

/***/ "./src/client/routes/Home/containers/HomeContainer.js":
/*!************************************************************!*\
  !*** ./src/client/routes/Home/containers/HomeContainer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_HomeView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HomeView */ "./src/client/routes/Home/components/HomeView.js");
/* harmony import */ var _api_offer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api/offer */ "./src/client/api/offer.js");
/* harmony import */ var _actions_getCartOffers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../actions/getCartOffers */ "./src/client/actions/getCartOffers.js");
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
  fetchCartOffers: _actions_getCartOffers__WEBPACK_IMPORTED_MODULE_7__["fetchCartOffers"]
};

var mapStateToProps = function mapStateToProps(store) {
  return {
    getCartOffers: store.getCartOffers
  };
};

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  adaptiveHeight: true,
  customPaging: function customPaging(i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slider-paging"
    });
  }
};

var HomeContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(HomeContainer, _React$Component);

  var _super = _createSuper(HomeContainer);

  function HomeContainer(props) {
    var _this;

    _classCallCheck(this, HomeContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getRecomendationOffers", function (category) {
      var offers = _this.state.offers;

      if (offers.hasOwnProperty(category)) {
        return offers[category];
      }

      var data = {
        category: category
      };
      var result = Object(_api_offer__WEBPACK_IMPORTED_MODULE_6__["getRecomendationOffers"])(data);
      result.then(function (result) {
        var status = result.status,
            rows = result.rows;

        if (status) {
          offers[category] = rows;

          _this.setState({
            loading: 0,
            offers: offers
          });
        }
      }, function (error) {
        alert('Rejected: ' + error); // error - аргумент reject
      });
      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "displayOffer", function (offer) {
      var id = offer.id,
          image = offer.image,
          name = offer.name,
          descriptions = offer.descriptions,
          price = offer.price,
          url = offer.url;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"], {
        key: 'of-' + id,
        style: {
          width: 230
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
        src: image
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title-wide"
      }, name), descriptions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"], null, Object.keys(descriptions).map(function (rowKey) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
          key: 'ld-' + id + '-r-' + rowKey
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Icon, {
          name: "check"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Content, null, descriptions[rowKey]));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Content, {
        extra: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        verticalAlign: "middle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
        width: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "price"
      }, "$", price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
        width: 10,
        textAlign: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
        to: url,
        primary: true,
        content: "Buy now"
      })))));
    });

    _defineProperty(_assertThisInitialized(_this), "getRecommendationPanes", function () {
      var vpnOffers = _this.getRecomendationOffers('vpn');

      var loaderItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      return [{
        menuItem: 'VPN service',
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
            attached: false,
            key: "vpn-tab"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, settings, vpnOffers ? Object.keys(vpnOffers).map(function (rowKey) {
            return _this.displayOffer(vpnOffers[rowKey]);
          }) : Object.keys(loaderItems).map(function (k) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Placeholder"], {
              style: {
                width: 230
              },
              key: 'pl-' + k
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Placeholder"].Image, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Placeholder"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Placeholder"].Line, {
              length: "full"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Placeholder"].Line, {
              length: "full"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Placeholder"].Line, {
              length: "full"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Placeholder"].Line, {
              length: "full"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Placeholder"].Line, {
              length: "full"
            })));
          })));
        }
      }];
    });

    _this.state = {
      loading: 0,
      offers: {}
    };
    return _this;
  }

  _createClass(HomeContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomeView__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.state, {
        getRecomedationPanes: this.getRecommendationPanes
      }));
    }
  }]);

  return HomeContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(HomeContainer)));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS9vZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9ibG9ja3MvTWFpblNsaWRlci9jb21wb25lbnRzL01haW5TbGlkZXJWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYmxvY2tzL01haW5TbGlkZXIvY29udGFpbmVycy9NYWluU2xpZGVyQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYmxvY2tzL01haW5TbGlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvSG9tZS9jb21wb25lbnRzL0hvbWVWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcm91dGVzL0hvbWUvY29udGFpbmVycy9Ib21lQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbImdldFRvcFN1Z2dlc3Rpb25zIiwiZGF0YSIsImF4aW9zIiwibWV0aG9kIiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRCZXN0VnBuRGVhbHMiLCJnZXRSZWNvbWVuZGF0aW9uT2ZmZXJzIiwiZ2V0T2ZmZXJJbmZvIiwiZ2V0T2ZmZXJMaXN0Iiwic2F2ZVBheWVyRW1haWwiLCJnZXRTbGlkZXJMaXN0IiwiQ3VzdG9tUHJldkFycm93IiwicHJvcHMiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm9uQ2xpY2siLCJDdXN0b21OZXh0QXJyb3ciLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJjdXN0b21QYWdpbmciLCJpIiwiTWFpblNsaWRlclZpZXciLCJzbGlkZXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicm93S2V5IiwiTWFpblNsaWRlckNvbnRhaW5lciIsImNvbnRleHQiLCJyZXN1bHQiLCJzdGF0dXMiLCJyb3dzIiwic2V0U3RhdGUiLCJhbGVydCIsInN0YXRlIiwibG9hZGluZyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiaGVhZCIsInVybCIsIk1hdGgiLCJyYW5kb20iLCJ2YXJpYWJsZVdpZHRoIiwiYWRhcHRpdmVIZWlnaHQiLCJIb21lVmlldyIsIkxpbmsiLCJzZWNvbmRhcnkiLCJnZXRSZWNvbWVkYXRpb25QYW5lcyIsIndpZHRoIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZmV0Y2hDYXJ0T2ZmZXJzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJnZXRDYXJ0T2ZmZXJzIiwiSG9tZUNvbnRhaW5lciIsImNhdGVnb3J5Iiwib2ZmZXJzIiwiaGFzT3duUHJvcGVydHkiLCJvZmZlciIsImlkIiwiaW1hZ2UiLCJuYW1lIiwiZGVzY3JpcHRpb25zIiwicHJpY2UiLCJ2cG5PZmZlcnMiLCJsb2FkZXJJdGVtcyIsIm1lbnVJdGVtIiwicmVuZGVyIiwiZGlzcGxheU9mZmVyIiwiayIsImdldFJlY29tbWVuZGF0aW9uUGFuZXMiLCJ3aXRoUm91dGVyIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0EsaUJBQVQsQ0FBMkJDLElBQTNCLEVBQWlDO0FBQ3RDLFNBQU9DLDRDQUFLLENBQUMsb0RBQUQsRUFBdUQ7QUFDL0RDLFVBQU0sRUFBRSxNQUR1RDtBQUUvREYsUUFBSSxFQUFFQSxJQUZ5RDtBQUcvREcsbUJBQWUsRUFBRTtBQUg4QyxHQUF2RCxDQUFMLENBSUZDLElBSkUsQ0FJRyxVQUFVQyxRQUFWLEVBQW9CO0FBQzFCLFdBQU9BLFFBQVEsQ0FBQ0wsSUFBaEI7QUFDRCxHQU5JLEVBTUZNLEtBTkUsQ0FNSSxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYs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O0FBQWtCLG9CQUFNLEVBQUM7QUFBekIsY0FKRixlQUtFLDJEQUFDLDZEQUFELENBQWEsSUFBYjtBQUFrQixvQkFBTSxFQUFDO0FBQXpCLGNBTEYsQ0FGRixDQUQyQjtBQUFBLFdBQTdCLENBUE4sQ0FERixDQURNO0FBQUE7QUFGVixPQURLLENBQVA7QUErQkQsS0EzSW1COztBQUdsQixVQUFLbkMsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFBRyxDQURDO0FBRVhxQixZQUFNLEVBQUk7QUFGQyxLQUFiO0FBSGtCO0FBT25COzs7O1dBc0lELGtCQUFVO0FBQ1IsMEJBQU8sMkRBQUMsNERBQUQsZUFDRCxLQUFLdEIsS0FESjtBQUdMLDRCQUFvQixFQUFFLEtBQUtvQztBQUh0QixTQUFQO0FBS0Q7Ozs7RUFwSnlCbEMsNENBQUssQ0FBQ0MsUzs7QUF1Sm5Ca0Msa0lBQVUsQ0FBQ0MsMkRBQU8sQ0FBQ3JCLGVBQUQsRUFBa0JGLGtCQUFsQixDQUFQLENBQTZDSyxhQUE3QyxDQUFELENBQXpCLEUiLCJmaWxlIjoiNS5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcFN1Z2dlc3Rpb25zKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL29mZmVyL3RvcC1zdWdnZXN0aW9ucycsIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZXN0VnBuRGVhbHMoZGF0YSkge1xuICByZXR1cm4gYXhpb3MoJ2h0dHBzOi8vYXBpLnNhdmluZ3NkZWFsei5jb20vb2ZmZXIvYmVzdC12cG4tZGVhbHMnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVjb21lbmRhdGlvbk9mZmVycyhkYXRhKSB7XG4gIHJldHVybiBheGlvcygnaHR0cHM6Ly9hcGkuc2F2aW5nc2RlYWx6LmNvbS9vZmZlci9yZWNvbW1lbmRhdGlvbnMnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2ZmZXJJbmZvKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL29mZmVyL2luZm8nLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2ZmZXJMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL29mZmVyL2xpc3QnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVBheWVyRW1haWwoZGF0YSkge1xuICByZXR1cm4gYXhpb3MoJ2h0dHBzOi8vYXBpLnNhdmluZ3NkZWFsei5jb20vb3JkZXIvcGF5ZXJfZW1haWwnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2xpZGVyTGlzdChkYXRhKSB7XG4gIHJldHVybiBheGlvcygnaHR0cHM6Ly9hcGkuc2F2aW5nc2RlYWx6LmNvbS9zbGlkZXIvbGlzdCcsIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5cbi8vaW1wb3J0ICcuLi9hc3NldHMvTWFpblNsaWRlclZpZXcuc2NzcydcblxuaW1wb3J0IHtcbiAgICBJbWFnZSxcbiAgICBQbGFjZWhvbGRlclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tUHJldkFycm93KHByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlLCBvbkNsaWNrIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvYXJyb3ctbGVmdC5zdmdcIlxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLXNsaWNrIHByZXYgbW9iaWxlIGhpZGRlblwiXG4gICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbU5leHRBcnJvdyhwcm9wcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2Fycm93LXJpZ2h0LnN2Z1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tc2xpY2sgbmV4dCBtb2JpbGUgaGlkZGVuXCJcbiAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgICBkb3RzOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHByZXZBcnJvdzogPEN1c3RvbVByZXZBcnJvdyAvPixcbiAgICBuZXh0QXJyb3c6IDxDdXN0b21OZXh0QXJyb3cgLz4sXG4gICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1wYWdpbmcnPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBNYWluU2xpZGVyVmlldyA9IChwcm9wcykgPT4gKFxuICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAge1xuICAgICAgICAgICAgIXByb3BzLnNsaWRlcyA/IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIgaWQ9J3ByZXZpZXdTbGlkZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuSW1hZ2UgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QbGFjZWhvbGRlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMuc2xpZGVzKS5tYXAoKHJvd0tleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ICdzbGlkZS0nICsgcHJvcHMuc2xpZGVzWydpZCddIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9wcy5zbGlkZXNbcm93S2V5XVsnaW1hZ2UnXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgPC9TbGlkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1haW5TbGlkZXJWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTWFpblNsaWRlclZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluU2xpZGVyVmlldydcblxuaW1wb3J0IHtcbiAgICBnZXRTbGlkZXJMaXN0XG59IGZyb20gJy4uLy4uLy4uL2FwaS9zbGlkZXInXG5cbmNsYXNzIE1haW5TbGlkZXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmcgOiAwLFxuICAgICAgICAgICAgc2xpZGVzICA6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldFNsaWRlckxpc3QoKVxuICAgIH1cblxuICAgIGdldFNsaWRlckxpc3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBnZXRTbGlkZXJMaXN0KCk7XG5cbiAgICAgICAgcmVzdWx0LnRoZW4oXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgcm93cyxcbiAgICAgICAgICAgICAgICB9ID0gcmVzdWx0XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlcyA6IHJvd3MsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgYWxlcnQoXCJSZWplY3RlZDogXCIgKyBlcnJvcik7IC8vIGVycm9yIC0g0LDRgNCz0YPQvNC10L3RgiByZWplY3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TWFpblNsaWRlclZpZXdcbiAgICAgICAgICAgICAgICAgICAgeyAuLi50aGlzLnN0YXRlIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblNsaWRlckNvbnRhaW5lclxuIiwiaW1wb3J0IE1haW5TbGlkZXJDb250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL01haW5TbGlkZXJDb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluU2xpZGVyQ29udGFpbmVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljaydcblxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0J1xuaW1wb3J0IHtcbiAgR3JpZCxcbiAgSW1hZ2UsXG4gIEJ1dHRvbixcbiAgVGFiLFxuICBDYXJkLFxuICBDb250YWluZXJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBNYWluU2xpZGVyIGZyb20gJy4uLy4uLy4uL2Jsb2Nrcy9NYWluU2xpZGVyJ1xuXG5jb25zdCBoZWFkID0gKHVybCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIZWxtZXQga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgIDx0aXRsZT5UaGUgYmVzdCBwbGFjZSB0byBidXkgVlBOIGNvdXBvbiB3aXRoIGRpc2NvdW50PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJTZWUgdGhlIGJlc3QgZGlnaXRhbCBvZmZlciwgYmFzZWQgb24gcHJpY2UgYW5kIHVzZXJzIHJldmlld1wiLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiLz5cbiAgICAgIHsvKjxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Nhbm9uaWNhbH0gLz4qL31cbiAgICA8L0hlbG1ldD5cbiAgKVxufVxuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogdHJ1ZSxcbiAgaW5maW5pdGU6IHRydWUsXG4gIHNwZWVkOiA1MDAsXG4gIHNsaWRlc1RvU2hvdzogMyxcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLXBhZ2luZ1wiPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCBIb21lVmlldyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8R3JpZD5cbiAgICAgICAge2hlYWQocHJvcHMudXJsKX1cbiAgICAgICAgPEdyaWQuUm93IGlkPVwic2xpZGVyQmxvY2tcIj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezE2fSB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCI+XG4gICAgICAgICAgICA8TWFpblNsaWRlci8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8ZGl2IGlkPVwiaG9tZVBhZ2VcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hpdGUtYmxvY2tcIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXsxfSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGNsYXNzTmFtZT1cImJsb2NrLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgV2h5IGNob29zZSB1cz9cbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Sb3cgY29sdW1ucz17NX0gdGV4dEFsaWduPVwiY2VudGVyXCIgc3RyZXRjaGVkIGlkPVwiY2hvb3NlVXNCbG9ja1wiIGNlbnRlcmVkPlxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gbW9iaWxlPXsxMn0gY29tcHV0ZXI9ezN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaG9tZS9jaG9vc2UtMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgQmVzdCBwcmljZSB5b3UgY2FuIGZpbmRcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gbW9iaWxlPXsxMn0gY29tcHV0ZXI9ezN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaG9tZS9jaG9vc2UtMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgQnV5IDQgc2VydmljZXMgcGF5IGZvciAxXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTJ9IGNvbXB1dGVyPXszfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hvbWUvY2hvb3NlLTMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIE1vcmUgdGhhbiA0MDAwIG9mZmVyc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezEyfSBjb21wdXRlcj17M30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9ob21lL2Nob29zZS00LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQgYW55IHBheW1lbnQgc3lzdGVtXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTJ9IGNvbXB1dGVyPXszfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hvbWUvY2hvb3NlLTUucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIERvbuKAmXQgbmVlZCB0byBzZWFyY2ggYWxsIGluIG9uZSBwbGFjZVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JleS1ibG9ja1wiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgPEdyaWQuUm93IHRleHRBbGlnbj1cImNlbnRlclwiIGNvbHVtbj17MX0+XG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBjbGFzc05hbWU9XCJibG9jay10aXRsZVwiPlxuICAgICAgICAgICAgICAgIENhdGVnb3J5XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9ezR9IHRleHRBbGlnbj1cImNlbnRlclwiIHN0cmV0Y2hlZCBpZD1cImNhdGVnb3J5QmxvY2tcIiBjZW50ZXJlZD5cbiAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9ob21lL2NhdGVnb3J5LTEucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb3N0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1ZpZXcgbW9yZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2hvbWUvY2F0ZWdvcnktMi5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3VkIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD0nVmlldyBtb3JlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj4qL31cbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHRleHRBbGlnbj1cImNlbnRlclwiIGNvbXB1dGVyPXsxMn0gbW9iaWxlPXsxMn0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hvbWUvY2F0ZWdvcnktMy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFZQTiBzZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIvdnBuXCJcbiAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIlZpZXcgbW9yZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9ob21lL2NhdGVnb3J5LTQucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJlYW0gc2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdWaWV3IG1vcmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPiovfVxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICB7IC8qXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2hpdGUtYmxvY2snPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IHRleHRBbGlnbj0nY2VudGVyJyBjb2x1bW49ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBjbGFzc05hbWU9J2gxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnVuZGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdWJoZWFkZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV5IDQgc2VydmljZXMgcGF5IGZvciAxPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoSG9zdGluZytDbG91ZCBzZXJ2aWNlK1ZQTitTdHJlYW0gc2VydmljZSA9IHByaWNlIGZvciAxIHNlcnZpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IHN0cmV0Y2hlZCBpZD0nYnVuZGxlQmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2hvbWUvYnVuZGxlLWltYWdlLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnVuZGxlRGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnVuZGxlIG5hbWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD0ncmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJDE5Ljk5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9ob21lL3ZlbmRvci0xLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsdWVob3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD0ncmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJDE5Ljk5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9ob21lL3ZlbmRvci0yLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZSBjbG91ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9J3JpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQxOS45OVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvaG9tZS92ZW5kb3ItMy5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3JkIFZQTlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9J3JpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQxOS45OVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvaG9tZS92ZW5kb3ItNC5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaW1lb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9J3JpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsOiA8c3BhbiBjbGFzc05hbWU9J29sZC1wcmljZSc+JDc5Ljk2PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4tYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91ciBwcmljZTogPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQxOS45OVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbG9hdC1yaWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J0J1eSBidW5kbGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JleS1ibG9ja1wiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGlkPVwicmVjb21tZW5kYXRpb25CbG9ja1wiPlxuICAgICAgICAgICAgPEdyaWQuUm93IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gY2xhc3NOYW1lPVwiYmxvY2stdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBSZWNvbW1lbmRhdGlvbnNcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Sb3cgY29sdW1ucz17MX0+XG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICA8VGFiIG1lbnU9e3sgc2Vjb25kYXJ5OiB0cnVlIH19IHBhbmVzPXtwcm9wcy5nZXRSZWNvbWVkYXRpb25QYW5lcygpfS8+XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hpdGUtYmxvY2tcIiBpZD1cImJ1eVdpdGhEaXNjb3VudEJsb2NrXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaG9tZS9zdG9wLXBheWluZy1pbWFnZS5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGFzPXtMaW5rfVxuICAgICAgICAgICAgdG89XCIvdnBuXCJcbiAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJCdXkgd2l0aCBkaXNjb3VudFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JleS1ibG9ja1wiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGlkPVwiZmVlZGJhY2tCbG9ja1wiPlxuICAgICAgICAgICAgPEdyaWQuUm93IHRleHRBbGlnbj1cImNlbnRlclwiIGNvbHVtbj17MX0+XG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBjbGFzc05hbWU9XCJibG9jay10dGlsZVwiPlxuICAgICAgICAgICAgICAgIEZlZWRiYWNrXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9ezF9PlxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6IDM1NCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9ob21lL2ZlZWRiYWNrLTEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hvbWUvYy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uaWUgPGJyLz5MYW5lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWJydWFyeSA0LCAyMDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICBJdCBpcyByZWFseSBhbWF6aW5nITxici8+XG4gICAgICAgICAgICAgICAgICAgICAgSSBib3VnaHQgMSB5ZWFyIHByZW1pdW0gVnBuU2VjdXJlIGFjY291bnQgYW5kIHNhdmUgNzAlITxici8+XG4gICAgICAgICAgICAgICAgICAgICAgVGhhbmtzIHlvdSBndXlzLCB5b3UgYXJlIGF3ZXNvbWUhXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6IDM1NCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9ob21lL2ZlZWRiYWNrLTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hvbWUvYy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBGcmFuY2lzY28gPGJyLz5XYXRzb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXByaWwgNywgMjAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgQnVuZGxlcyBhcmUgZ3JlYXQhPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICBJIGJvdWdodCA0aW4xIGFuZCBnb3QgLSBWUE4sIENsb3VkIHN0b3JhZ2UsIElwVFYgYW5kIHN0cmVhbSBzdWJzY3JpcHRpb25zIGZvciAxIG1vbnRoIHdpdGggYXdlc29tZVxuICAgICAgICAgICAgICAgICAgICAgIHByaWNlITxici8+XG4gICAgICAgICAgICAgICAgICAgICAgSSBnb3QgODAlIG9mZiEgWW91IGFyZSByaWdodCwgZG9udCBwYXkgZnVsbCBwcmljZSB1c2UgeW91ciBicmFpbiFcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogMzU0IH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hvbWUvZmVlZGJhY2stMy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFya1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaG9tZS9jLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIERldm9uIDxici8+SGF3a2luc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXkgMTEsIDIwMjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIEhvc3RpbmcsIFZQTiwgQW50aXZpcnVzIGFuZCBjbG91ZCBzdG9yYWdlIHdpdGggaHVnZSBkaXNjb3VudCFcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snXG5cbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgR3JpZCwgSW1hZ2UsIExpc3QsIFBsYWNlaG9sZGVyLCBUYWIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IEhvbWVWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZVZpZXcnXG5cbmltcG9ydCB7IGdldFJlY29tZW5kYXRpb25PZmZlcnMgfSBmcm9tICcuLi8uLi8uLi9hcGkvb2ZmZXInXG5cbmltcG9ydCB7IGZldGNoQ2FydE9mZmVycyB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2V0Q2FydE9mZmVycydcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBmZXRjaENhcnRPZmZlcnNcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xuICBnZXRDYXJ0T2ZmZXJzICA6IHN0b3JlLmdldENhcnRPZmZlcnNcbn0pXG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICBkb3RzOiB0cnVlLFxuICBpbmZpbml0ZTogdHJ1ZSxcbiAgc3BlZWQ6IDUwMCxcbiAgc2xpZGVzVG9TaG93OiAzLFxuICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1wYWdpbmcnIC8+XG4gICAgKVxuICB9LFxufVxuXG5jbGFzcyBIb21lQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZyA6IDAsXG4gICAgICBvZmZlcnMgIDoge31cbiAgICB9XG4gIH1cblxuICBnZXRSZWNvbWVuZGF0aW9uT2ZmZXJzID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgbGV0IHtcbiAgICAgICAgICAgIG9mZmVyc1xuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKG9mZmVycy5oYXNPd25Qcm9wZXJ0eShjYXRlZ29yeSkpIHtcbiAgICAgIHJldHVybiBvZmZlcnNbY2F0ZWdvcnldXG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBjYXRlZ29yeSAgOiBjYXRlZ29yeSxcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gZ2V0UmVjb21lbmRhdGlvbk9mZmVycyhkYXRhKVxuXG4gICAgcmVzdWx0LnRoZW4oXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICAgICAgfSA9IHJlc3VsdFxuICAgICAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgb2ZmZXJzW2NhdGVnb3J5XSA9IHJvd3NcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgbG9hZGluZyA6IDAsXG4gICAgICAgICAgICAgICAgICBvZmZlcnNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBhbGVydCgnUmVqZWN0ZWQ6ICcgKyBlcnJvcikgLy8gZXJyb3IgLSDQsNGA0LPRg9C80LXQvdGCIHJlamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGRpc3BsYXlPZmZlciA9IChvZmZlcikgPT4ge1xuICAgIGxldCB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9ucyxcbiAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgdXJsXG4gICAgICAgIH0gPSBvZmZlclxuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZCBrZXk9eydvZi0nICsgaWR9IHN0eWxlPXt7IHdpZHRoOiAyMzAgfX0+XG4gICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlLXdpZGUnPlxuICAgICAgICAgICAgeyBuYW1lIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7IChkZXNjcmlwdGlvbnMpICYmIChcbiAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZGVzY3JpcHRpb25zKS5tYXAoKHJvd0tleSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXsnbGQtJyArIGlkICsgJy1yLScgKyByb3dLZXl9PlxuICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPSdjaGVjaycgLz5cbiAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIHsgZGVzY3JpcHRpb25zW3Jvd0tleV0gfVxuICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxuICAgICAgICAgIDxHcmlkIHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpY2UnPlxuICAgICAgICAgICAgICAgICR7IHByaWNlIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0gdGV4dEFsaWduPSdyaWdodCc+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgICB0bz17dXJsfVxuICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICBjb250ZW50PSdCdXkgbm93J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG4gICAgKVxuICB9XG5cbiAgZ2V0UmVjb21tZW5kYXRpb25QYW5lcyA9ICgpID0+IHtcbiAgICBsZXQgdnBuT2ZmZXJzID0gdGhpcy5nZXRSZWNvbWVuZGF0aW9uT2ZmZXJzKCd2cG4nKVxuXG4gICAgY29uc3QgbG9hZGVySXRlbXMgPSBbXG4gICAgICAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAwXG4gICAgXVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgbWVudUl0ZW06ICdWUE4gc2VydmljZScsXG4gICAgICAgIHJlbmRlcjogKCkgPT4gKFxuICAgICAgICAgIDxUYWIuUGFuZSBhdHRhY2hlZD17ZmFsc2V9IGtleT0ndnBuLXRhYic+XG4gICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2cG5PZmZlcnMgPyAoXG5cbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHZwbk9mZmVycykubWFwKChyb3dLZXkpID0+IHRoaXMuZGlzcGxheU9mZmVyKHZwbk9mZmVyc1tyb3dLZXldKSlcblxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsb2FkZXJJdGVtcykubWFwKChrKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlciBzdHlsZT17eyB3aWR0aDogMjMwIH19IGtleT17J3BsLScgKyBrfT5cbiAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuSW1hZ2UvPlxuICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J2Z1bGwnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPSdmdWxsJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J2Z1bGwnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvUGxhY2Vob2xkZXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICAgIDwvVGFiLlBhbmU+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgIF1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDxIb21lVmlld1xuICAgICAgey4uLnRoaXMuc3RhdGV9XG5cbiAgICAgIGdldFJlY29tZWRhdGlvblBhbmVzPXt0aGlzLmdldFJlY29tbWVuZGF0aW9uUGFuZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWVDb250YWluZXIpKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==