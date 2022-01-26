(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./src/client/blocks/TopBlock/components/TopBlockView.js":
/*!***************************************************************!*\
  !*** ./src/client/blocks/TopBlock/components/TopBlockView.js ***!
  \***************************************************************/
/*! exports provided: TopBlockView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBlockView", function() { return TopBlockView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");




var loaderItems = [1, 2, 3];
var TopBlockView = function TopBlockView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Group, {
    divided: true,
    id: "bestVpnDeals"
  }, !props.data ? Object.keys(loaderItems).map(function (rowKey) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Header, {
      image: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, null)));
  }) : Object.keys(props.data).map(function (rowKey) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Image, {
      verticalAlign: "middle",
      src: props.data[rowKey]['image'],
      size: "tiny"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Content, {
      verticalAlign: "middle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Header, {
      as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: props.data[rowKey]['url']
    }, props.data[rowKey]['title']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Meta, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: props.data[rowKey]['vendor_url']
    }, "Visit ", props.data[rowKey]['vendor_name'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Description, null, props.data[rowKey]['description'])));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (TopBlockView);

/***/ }),

/***/ "./src/client/blocks/TopBlock/containers/TopBlockContainer.js":
/*!********************************************************************!*\
  !*** ./src/client/blocks/TopBlock/containers/TopBlockContainer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopBlockView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopBlockView */ "./src/client/blocks/TopBlock/components/TopBlockView.js");
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




var TopBlockContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(TopBlockContainer, _React$Component);

  var _super = _createSuper(TopBlockContainer);

  function TopBlockContainer(props, context) {
    var _this;

    _classCallCheck(this, TopBlockContainer);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "getData", function () {
      var result = _this.props.getData();

      result.then(function (result) {
        var status = result.status,
            rows = result.rows;

        if (status) {
          _this.setState({
            data: rows
          });
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _this.state = {
      loading: 0,
      data: false
    };

    _this.getData();

    return _this;
  }

  _createClass(TopBlockContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopBlockView__WEBPACK_IMPORTED_MODULE_1__["default"], this.state);
    }
  }]);

  return TopBlockContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TopBlockContainer);

/***/ }),

/***/ "./src/client/blocks/TopBlock/index.js":
/*!*********************************************!*\
  !*** ./src/client/blocks/TopBlock/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_TopBlockContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/TopBlockContainer */ "./src/client/blocks/TopBlock/containers/TopBlockContainer.js");

/* harmony default export */ __webpack_exports__["default"] = (_containers_TopBlockContainer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/client/blocks/TopBlockHorizontal/components/TopBlockHorizontalView.js":
/*!***********************************************************************************!*\
  !*** ./src/client/blocks/TopBlockHorizontal/components/TopBlockHorizontalView.js ***!
  \***********************************************************************************/
/*! exports provided: TopBlockHorizontalView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBlockHorizontalView", function() { return TopBlockHorizontalView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var loaderItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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
var TopBlockHorizontalView = function TopBlockHorizontalView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, settings, {
    className: "top-horizontal-block"
  }), props.data ? Object.keys(props.data).map(function (rowKey) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      style: {
        width: 230
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
      src: props.data[rowKey]['image']
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title"
    }, props.data[rowKey]['name'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Content, {
      extra: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      verticalAlign: "middle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      width: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "price"
    }, "$", props.data[rowKey]['price'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      width: 10,
      textAlign: "right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: props.data[rowKey]['url'],
      primary: true,
      content: "Buy now"
    })))));
  }) : Object.keys(loaderItems).map(function (k) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Placeholder"], {
      style: {
        width: 230
      }
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
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (TopBlockHorizontalView);

/***/ }),

/***/ "./src/client/blocks/TopBlockHorizontal/containers/TopBlockHorizontalContainer.js":
/*!****************************************************************************************!*\
  !*** ./src/client/blocks/TopBlockHorizontal/containers/TopBlockHorizontalContainer.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopBlockHorizontalView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopBlockHorizontalView */ "./src/client/blocks/TopBlockHorizontal/components/TopBlockHorizontalView.js");
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




var TopBlockHorizontalContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(TopBlockHorizontalContainer, _React$Component);

  var _super = _createSuper(TopBlockHorizontalContainer);

  function TopBlockHorizontalContainer(props, context) {
    var _this;

    _classCallCheck(this, TopBlockHorizontalContainer);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "getData", function () {
      var result = _this.props.getData();

      result.then(function (result) {
        var status = result.status,
            rows = result.rows;

        if (status) {
          _this.setState({
            data: rows
          });
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _this.state = {
      loading: 0,
      data: false
    };

    _this.getData();

    return _this;
  }

  _createClass(TopBlockHorizontalContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopBlockHorizontalView__WEBPACK_IMPORTED_MODULE_1__["default"], this.state);
    }
  }]);

  return TopBlockHorizontalContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TopBlockHorizontalContainer);

/***/ }),

/***/ "./src/client/blocks/TopBlockHorizontal/index.js":
/*!*******************************************************!*\
  !*** ./src/client/blocks/TopBlockHorizontal/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_TopBlockHorizontalContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/TopBlockHorizontalContainer */ "./src/client/blocks/TopBlockHorizontal/containers/TopBlockHorizontalContainer.js");

/* harmony default export */ __webpack_exports__["default"] = (_containers_TopBlockHorizontalContainer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/client/inc/inc.js":
/*!*******************************!*\
  !*** ./src/client/inc/inc.js ***!
  \*******************************/
/*! exports provided: cloneObject, checkNumberInput, validateEmail, getParameterByName, parcePrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneObject", function() { return cloneObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNumberInput", function() { return checkNumberInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterByName", function() { return getParameterByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parcePrice", function() { return parcePrice; });
function cloneObject(object) {
  var newObject = {};

  for (var key in object) {
    newObject[key] = object[key];
  }

  return newObject;
}
function checkNumberInput(keyCode) {
  if (keyCode == 46 || keyCode == 8 || keyCode == 9 || keyCode == 27 || keyCode == 110 || keyCode == 190 || keyCode == 65 && ctrlKey === true || keyCode >= 35 && keyCode <= 39) {
    return true;
  } else {
    if ((keyCode < 48 || keyCode > 57) && (keyCode < 96 || keyCode > 105)) {
      return false;
    }
  }

  return true;
}
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function parcePrice(price) {
  price = price.toString();
  return price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

/***/ }),

/***/ "./src/client/routes/Offer/components/OfferView.js":
/*!*********************************************************!*\
  !*** ./src/client/routes/Offer/components/OfferView.js ***!
  \*********************************************************/
/*! exports provided: OfferView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferView", function() { return OfferView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _blocks_TopBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/TopBlock */ "./src/client/blocks/TopBlock/index.js");
/* harmony import */ var _blocks_TopBlockHorizontal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/TopBlockHorizontal */ "./src/client/blocks/TopBlockHorizontal/index.js");
/* harmony import */ var _api_offer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api/offer */ "./src/client/api/offer.js");








var head = function head(url) {
  var pageUrl = typeof url !== 'undefined' ? url : '';
  var canonical = 'https://savingsdealz.com' + pageUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    key: Math.random()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Savingsdealz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "robots",
    content: "index, follow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "canonical",
    href: canonical
  }));
};

var OfferView = function OfferView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, head(props.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"], {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"].Section, {
    link: true,
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/"
  }, "Main"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"].Divider, {
    icon: "right chevron"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"].Section, {
    active: true
  }, "Offer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    id: "offerBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    className: "info-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"], null, props.info['ribbon'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ribbon"
  }, props.info['ribbon']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Image, {
    size: "tiny",
    className: "logo",
    verticalAlign: "middle",
    src: props.info['image']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Header, {
    className: "title"
  }, props.info['title']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Meta, null, props.info['subtitle']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Description, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-block"
  }, props.info['price'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "price"
  }, "$", props.info['price']), props.info['old_price'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "old-price"
  }, "$", props.info['old_price']))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Extra, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    className: "quantity",
    type: "number",
    name: props.info['id'],
    onChange: props.handleInputChangeQuantity,
    value: props.offer['quantity'],
    min: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    primary: true,
    content: "Add to cart",
    onClick: props.handleClicAddToCart
  })), props.info['user_used'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Description, null, props.info['user_used'], " users used this coupon")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "category"
  }, "Category: "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "category-value"
  }, props.info['category'])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-top color-red"
  }, "BEST VPN DEALS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_TopBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    getData: _api_offer__WEBPACK_IMPORTED_MODULE_6__["getBestVpnDeals"]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    className: "info-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-top color-red"
  }, "People who viewed this item also viewed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_TopBlockHorizontal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    getData: _api_offer__WEBPACK_IMPORTED_MODULE_6__["getBestVpnDeals"]
  })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (OfferView);

/***/ }),

/***/ "./src/client/routes/Offer/containers/OfferContainer.js":
/*!**************************************************************!*\
  !*** ./src/client/routes/Offer/containers/OfferContainer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_OfferView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/OfferView */ "./src/client/routes/Offer/components/OfferView.js");
/* harmony import */ var _api_offer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/offer */ "./src/client/api/offer.js");
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

var OfferContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(OfferContainer, _React$Component);

  var _super = _createSuper(OfferContainer);

  function OfferContainer(props) {
    var _this;

    _classCallCheck(this, OfferContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "parseType", function (offer) {
      var arr = offer.split('-');
      return arr[arr.length - 1];
    });

    _defineProperty(_assertThisInitialized(_this), "getOfferInfo", function () {
      var offerId = _this.state.offerId;
      var result = Object(_api_offer__WEBPACK_IMPORTED_MODULE_4__["getOfferInfo"])({
        offerId: offerId
      });
      result.then(function (result) {
        var status = result.status,
            row = result.row;

        if (status) {
          _this.setState({
            info: row
          });
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeQuantity", function (e, _ref) {
      var name = _ref.name,
          value = _ref.value;
      e.preventDefault();

      _this.setState({
        offer: {
          'id': name,
          'quantity': value
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClicAddToCart", function () {
      var offer = _this.state.offer;
      var getCartOffers = _this.props.getCartOffers;
      console.log('offer---->', offer);
      var a = getCartOffers.concat([offer]);
      console.log('a---->', a);

      _this.props.fetchCartOffers(a);
    });

    var _offer = props.match.params.offer;

    var _offerId = _this.parseType(_offer);

    _this.state = {
      loading: 0,
      offerId: _offerId,
      offer: {
        'id': _offerId,
        'quantity': 1
      },
      info: false
    };

    _this.getOfferInfo();

    return _this;
  }

  _createClass(OfferContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OfferView__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.state, {
        handleInputChangeQuantity: this.handleInputChangeQuantity,
        handleClicAddToCart: this.handleClicAddToCart
      }));
    }
  }]);

  return OfferContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(OfferContainer)));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS9vZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2Jsb2Nrcy9Ub3BCbG9jay9jb21wb25lbnRzL1RvcEJsb2NrVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2Jsb2Nrcy9Ub3BCbG9jay9jb250YWluZXJzL1RvcEJsb2NrQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYmxvY2tzL1RvcEJsb2NrL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYmxvY2tzL1RvcEJsb2NrSG9yaXpvbnRhbC9jb21wb25lbnRzL1RvcEJsb2NrSG9yaXpvbnRhbFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9ibG9ja3MvVG9wQmxvY2tIb3Jpem9udGFsL2NvbnRhaW5lcnMvVG9wQmxvY2tIb3Jpem9udGFsQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYmxvY2tzL1RvcEJsb2NrSG9yaXpvbnRhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luYy9pbmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvT2ZmZXIvY29tcG9uZW50cy9PZmZlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvT2ZmZXIvY29udGFpbmVycy9PZmZlckNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJnZXRUb3BTdWdnZXN0aW9ucyIsImRhdGEiLCJheGlvcyIsIm1ldGhvZCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0QmVzdFZwbkRlYWxzIiwiZ2V0UmVjb21lbmRhdGlvbk9mZmVycyIsImdldE9mZmVySW5mbyIsImdldE9mZmVyTGlzdCIsInNhdmVQYXllckVtYWlsIiwibG9hZGVySXRlbXMiLCJUb3BCbG9ja1ZpZXciLCJwcm9wcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJyb3dLZXkiLCJMaW5rIiwiVG9wQmxvY2tDb250YWluZXIiLCJjb250ZXh0IiwicmVzdWx0IiwiZ2V0RGF0YSIsInN0YXR1cyIsInJvd3MiLCJzZXRTdGF0ZSIsImFsZXJ0Iiwic3RhdGUiLCJsb2FkaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJ2YXJpYWJsZVdpZHRoIiwiYWRhcHRpdmVIZWlnaHQiLCJjdXN0b21QYWdpbmciLCJpIiwiVG9wQmxvY2tIb3Jpem9udGFsVmlldyIsIndpZHRoIiwiayIsIlRvcEJsb2NrSG9yaXpvbnRhbENvbnRhaW5lciIsImNsb25lT2JqZWN0Iiwib2JqZWN0IiwibmV3T2JqZWN0Iiwia2V5IiwiY2hlY2tOdW1iZXJJbnB1dCIsImtleUNvZGUiLCJjdHJsS2V5IiwidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiZ2V0UGFyYW1ldGVyQnlOYW1lIiwibmFtZSIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlcGxhY2UiLCJyZWdleCIsIlJlZ0V4cCIsInJlc3VsdHMiLCJleGVjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyY2VQcmljZSIsInByaWNlIiwidG9TdHJpbmciLCJoZWFkIiwicGFnZVVybCIsImNhbm9uaWNhbCIsIk1hdGgiLCJyYW5kb20iLCJPZmZlclZpZXciLCJpbmZvIiwiaGFuZGxlSW5wdXRDaGFuZ2VRdWFudGl0eSIsIm9mZmVyIiwiaGFuZGxlQ2xpY0FkZFRvQ2FydCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImZldGNoQ2FydE9mZmVycyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiZ2V0Q2FydE9mZmVycyIsIk9mZmVyQ29udGFpbmVyIiwiYXJyIiwic3BsaXQiLCJsZW5ndGgiLCJvZmZlcklkIiwicm93IiwiZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJhIiwiY29uY2F0IiwibWF0Y2giLCJwYXJhbXMiLCJwYXJzZVR5cGUiLCJ3aXRoUm91dGVyIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0EsaUJBQVQsQ0FBMkJDLElBQTNCLEVBQWlDO0FBQ3RDLFNBQU9DLDRDQUFLLENBQUMsb0RBQUQsRUFBdUQ7QUFDL0RDLFVBQU0sRUFBRSxNQUR1RDtBQUUvREYsUUFBSSxFQUFFQSxJQUZ5RDtBQUcvREcsbUJBQWUsRUFBRTtBQUg4QyxHQUF2RCxDQUFMLENBSUZDLElBSkUsQ0FJRyxVQUFVQyxRQUFWLEVBQW9CO0FBQzFCLFdBQU9BLFFBQVEsQ0FBQ0wsSUFBaEI7QUFDRCxHQU5JLEVBTUZNLEtBTkUsQ0FNSSxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELEdBUkksQ0FBUDtBQVNEO0FBRU0sU0FBU0csZUFBVCxDQUF5QlYsSUFBekIsRUFBK0I7QUFDcEMsU0FBT0MsNENBQUssQ0FBQyxtREFBRCxFQUFzRDtBQUM5REMsVUFBTSxFQUFFLE1BRHNEO0FBRTlERixRQUFJLEVBQUVBLElBRndEO0FBRzlERyxtQkFBZSxFQUFFO0FBSDZDLEdBQXRELENBQUwsQ0FJRkMsSUFKRSxDQUlHLFVBQVVDLFFBQVYsRUFBb0I7QUFDMUIsV0FBT0EsUUFBUSxDQUFDTCxJQUFoQjtBQUNELEdBTkksRUFNRk0sS0FORSxDQU1JLFVBQVVDLEtBQVYsRUFBaUI7QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsR0FSSSxDQUFQO0FBU0Q7QUFFTSxTQUFTSSxzQkFBVCxDQUFnQ1gsSUFBaEMsRUFBc0M7QUFDM0MsU0FBT0MsNENBQUssQ0FBQyxvREFBRCxFQUF1RDtBQUMvREMsVUFBTSxFQUFFLE1BRHVEO0FBRS9ERixRQUFJLEVBQUVB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QUZULE9BSEU7QUFPVGIsVUFBSSxFQUFFO0FBUEcsS0FBYjs7QUFVQSxVQUFLckUsWUFBTDs7QUFoQmU7QUFpQmxCOzs7O1dBNkRELGtCQUFTO0FBQ0wsMEJBQU8sMkRBQUMsNkRBQUQsZUFDUyxLQUFLbUIsS0FEZDtBQUdLLGlDQUF5QixFQUFHLEtBQUttRCx5QkFIdEM7QUFJSywyQkFBbUIsRUFBRyxLQUFLRTtBQUpoQyxTQUFQO0FBTUg7Ozs7RUF0RndCbkQsNENBQUssQ0FBQ0MsUzs7QUF5RnBCc0Usa0lBQVUsQ0FBQ0MsMkRBQU8sQ0FBQ2xCLGVBQUQsRUFBa0JGLGtCQUFsQixDQUFQLENBQTZDSyxjQUE3QyxDQUFELENBQXpCLEUiLCJmaWxlIjoiNC5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcFN1Z2dlc3Rpb25zKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL29mZmVyL3RvcC1zdWdnZXN0aW9ucycsIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZXN0VnBuRGVhbHMoZGF0YSkge1xuICByZXR1cm4gYXhpb3MoJ2h0dHBzOi8vYXBpLnNhdmluZ3NkZWFsei5jb20vb2ZmZXIvYmVzdC12cG4tZGVhbHMnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVjb21lbmRhdGlvbk9mZmVycyhkYXRhKSB7XG4gIHJldHVybiBheGlvcygnaHR0cHM6Ly9hcGkuc2F2aW5nc2RlYWx6LmNvbS9vZmZlci9yZWNvbW1lbmRhdGlvbnMnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2ZmZXJJbmZvKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL29mZmVyL2luZm8nLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2ZmZXJMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL29mZmVyL2xpc3QnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVBheWVyRW1haWwoZGF0YSkge1xuICByZXR1cm4gYXhpb3MoJ2h0dHBzOi8vYXBpLnNhdmluZ3NkZWFsei5jb20vb3JkZXIvcGF5ZXJfZW1haWwnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7IFxuICAgIEl0ZW0sXG4gICAgUGxhY2Vob2xkZXJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNvbnN0IGxvYWRlckl0ZW1zID0gW1xuICAgIDEsIDIsIDNcbl1cblxuZXhwb3J0IGNvbnN0IFRvcEJsb2NrVmlldyA9IChwcm9wcykgPT4gKFxuICAgIDxJdGVtLkdyb3VwIGRpdmlkZWQgaWQ9J2Jlc3RWcG5EZWFscyc+XG4gICAgICAgIHsgXG4gICAgICAgICAgICAoIXByb3BzLmRhdGEpID8gKFxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxvYWRlckl0ZW1zKS5tYXAoKHJvd0tleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXIgaW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QbGFjZWhvbGRlci5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzLmRhdGEpLm1hcCgocm93S2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSW1hZ2UgIHZlcnRpY2FsQWxpZ249J21pZGRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9wcy5kYXRhW3Jvd0tleV1bJ2ltYWdlJ10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3RpbnknXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudCB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17IExpbmsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17IHByb3BzLmRhdGFbcm93S2V5XVsndXJsJ10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5kYXRhW3Jvd0tleV1bJ3RpdGxlJ10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uTWV0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXsgcHJvcHMuZGF0YVtyb3dLZXldWyd2ZW5kb3JfdXJsJ10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXNpdCB7IHByb3BzLmRhdGFbcm93S2V5XVsndmVuZG9yX25hbWUnXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uTWV0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5kYXRhW3Jvd0tleV1bJ2Rlc2NyaXB0aW9uJ10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIDwvSXRlbS5Hcm91cD5cbilcblxuZXhwb3J0IGRlZmF1bHQgVG9wQmxvY2tWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgVG9wQmxvY2tWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvVG9wQmxvY2tWaWV3J1xuXG5jbGFzcyBUb3BCbG9ja0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nIDogMCxcbiAgICAgICAgICAgIGRhdGEgICAgOiBmYWxzZSxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5nZXREYXRhKClcbiAgICB9XG4gICAgXG4gICAgZ2V0RGF0YSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMucHJvcHMuZ2V0RGF0YSgpO1xuXG4gICAgICAgIHJlc3VsdC50aGVuKFxuICAgICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICAgICAgfSA9IHJlc3VsdFxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhIDogcm93cyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBhbGVydChcIlJlamVjdGVkOiBcIiArIGVycm9yKTsgLy8gZXJyb3IgLSDQsNGA0LPRg9C80LXQvdGCIHJlamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICAgICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFRvcEJsb2NrVmlldyBcbiAgICAgICAgICAgICAgICAgICAgeyAuLi50aGlzLnN0YXRlIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wQmxvY2tDb250YWluZXIiLCJpbXBvcnQgVG9wQmxvY2tDb250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL1RvcEJsb2NrQ29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgVG9wQmxvY2tDb250YWluZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuXG5pbXBvcnQgeyBcbiAgICBDYXJkLFxuICAgIFBsYWNlaG9sZGVyLFxuICAgIEltYWdlLFxuICAgIEdyaWQsXG4gICAgQnV0dG9uXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBsb2FkZXJJdGVtcyA9IFtcbiAgICAxLDIsMyw0LDUsNiw3LDgsOSwwXG5dXG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyLXBhZ2luZyc+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFRvcEJsb2NrSG9yaXpvbnRhbFZpZXcgPSAocHJvcHMpID0+IChcbiAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30gY2xhc3NOYW1lPSd0b3AtaG9yaXpvbnRhbC1ibG9jayc+XG4gICAgICAgIHsgXG4gICAgICAgICAgICBwcm9wcy5kYXRhID8gKFxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMuZGF0YSkubWFwKChyb3dLZXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6IDIzMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvcHMuZGF0YVtyb3dLZXldWydpbWFnZSddIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5kYXRhW3Jvd0tleV1bJ25hbWUnXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmljZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsgcHJvcHMuZGF0YVtyb3dLZXldWydwcmljZSddIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfSB0ZXh0QWxpZ249J3JpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17IExpbmsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXsgcHJvcHMuZGF0YVtyb3dLZXldWyd1cmwnXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J0J1eSBub3cnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgKSlcblxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsb2FkZXJJdGVtcykubWFwKChrKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlciBzdHlsZT17eyB3aWR0aDogMjMwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkltYWdlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J2Z1bGwnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPSdmdWxsJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J2Z1bGwnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9QbGFjZWhvbGRlcj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgPC9TbGlkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJsb2NrSG9yaXpvbnRhbFZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUb3BCbG9ja0hvcml6b250YWxWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvVG9wQmxvY2tIb3Jpem9udGFsVmlldydcblxuY2xhc3MgVG9wQmxvY2tIb3Jpem9udGFsQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmcgOiAwLFxuICAgICAgICAgICAgZGF0YSAgICA6IGZhbHNlLFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdldERhdGEoKVxuICAgIH1cbiAgICBcbiAgICBnZXREYXRhID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5wcm9wcy5nZXREYXRhKCk7XG5cbiAgICAgICAgcmVzdWx0LnRoZW4oXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgcm93cyxcbiAgICAgICAgICAgICAgICB9ID0gcmVzdWx0XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgOiByb3dzLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIGFsZXJ0KFwiUmVqZWN0ZWQ6IFwiICsgZXJyb3IpOyAvLyBlcnJvciAtINCw0YDQs9GD0LzQtdC90YIgcmVqZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgICAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8VG9wQmxvY2tIb3Jpem9udGFsVmlldyBcbiAgICAgICAgICAgICAgICAgICAgeyAuLi50aGlzLnN0YXRlIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wQmxvY2tIb3Jpem9udGFsQ29udGFpbmVyIiwiaW1wb3J0IFRvcEJsb2NrSG9yaXpvbnRhbENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvVG9wQmxvY2tIb3Jpem9udGFsQ29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgVG9wQmxvY2tIb3Jpem9udGFsQ29udGFpbmVyOyIsImV4cG9ydCBmdW5jdGlvbiBjbG9uZU9iamVjdChvYmplY3QpIHtcbiAgICBsZXQgbmV3T2JqZWN0ID0ge31cbiAgICBcbiAgICBmb3IobGV0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBvYmplY3Rba2V5XVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3T2JqZWN0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja051bWJlcklucHV0KGtleUNvZGUpIHtcbiAgICBpZiAoa2V5Q29kZSA9PSA0NiB8fCBrZXlDb2RlID09IDggfHwga2V5Q29kZSA9PSA5IHx8IGtleUNvZGUgPT0gMjcgfHwga2V5Q29kZSA9PSAxMTAgfHwga2V5Q29kZSA9PSAxOTAgfHxcbiAgICAgICAgICAoa2V5Q29kZSA9PSA2NSAmJiBjdHJsS2V5ID09PSB0cnVlKSB8fFxuICAgICAgICAgIChrZXlDb2RlID49IDM1ICYmIGtleUNvZGUgPD0gMzkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgoa2V5Q29kZSA8IDQ4IHx8IGtleUNvZGUgPiA1NykgJiYgKGtleUNvZGUgPCA5NiB8fCBrZXlDb2RlID4gMTA1KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgIFxuICAgIHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB1cmwpIHtcbiAgICBpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIG5hbWUgKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxuICAgICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XG4gICAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyY2VQcmljZShwcmljZSkge1xuICAgIHByaWNlID0gcHJpY2UudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gcHJpY2UucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCAnJDEgJyk7XG59XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIEJyZWFkY3J1bWIsXG4gIEdyaWQsXG4gIEl0ZW0sXG4gIElucHV0LFxuICBCdXR0b24sXG4gIFNlZ21lbnQsXG4gIEljb25cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBUb3BCbG9jayBmcm9tICcuLi8uLi8uLi9ibG9ja3MvVG9wQmxvY2snXG5pbXBvcnQgVG9wQmxvY2tIb3Jpem9udGFsIGZyb20gJy4uLy4uLy4uL2Jsb2Nrcy9Ub3BCbG9ja0hvcml6b250YWwnXG5cbmltcG9ydCB7XG4gIGdldEJlc3RWcG5EZWFsc1xufSBmcm9tICcuLi8uLi8uLi9hcGkvb2ZmZXInXG5cbmNvbnN0IGhlYWQgPSAodXJsKSA9PiB7XG4gIGNvbnN0IHBhZ2VVcmwgPSAodHlwZW9mIHVybCAhPT0gJ3VuZGVmaW5lZCcpID8gdXJsIDogJydcbiAgbGV0IGNhbm9uaWNhbCA9ICdodHRwczovL3NhdmluZ3NkZWFsei5jb20nICsgcGFnZVVybFxuICByZXR1cm4gKFxuICAgIDxIZWxtZXQga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgIDx0aXRsZT5TYXZpbmdzZGVhbHo8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIvPlxuICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17Y2Fub25pY2FsfS8+XG4gICAgPC9IZWxtZXQ+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IE9mZmVyVmlldyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIHtoZWFkKHByb3BzLnVybCl9XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxCcmVhZGNydW1iIGlkPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uXG4gICAgICAgICAgbGlua1xuICAgICAgICAgIGFzPXtMaW5rfVxuICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgID5cbiAgICAgICAgICBNYWluXG4gICAgICAgIDwvQnJlYWRjcnVtYi5TZWN0aW9uPlxuICAgICAgICA8QnJlYWRjcnVtYi5EaXZpZGVyIGljb249XCJyaWdodCBjaGV2cm9uXCIvPlxuICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uIGFjdGl2ZT5cbiAgICAgICAgICBPZmZlclxuICAgICAgICA8L0JyZWFkY3J1bWIuU2VjdGlvbj5cbiAgICAgIDwvQnJlYWRjcnVtYj5cblxuICAgICAgPEdyaWQgaWQ9XCJvZmZlckJsb2NrXCI+XG5cbiAgICAgICAgPEdyaWQuUm93IHN0cmV0Y2hlZD5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezExfT5cbiAgICAgICAgICAgIDxTZWdtZW50IGNsYXNzTmFtZT1cImluZm8tYmxvY2tcIj5cbiAgICAgICAgICAgICAgPEl0ZW0uR3JvdXA+XG4gICAgICAgICAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIChwcm9wcy5pbmZvWydyaWJib24nXSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmliYm9uXCI+e3Byb3BzLmluZm9bJ3JpYmJvbiddfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8SXRlbS5JbWFnZVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwidGlueVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5pbmZvWydpbWFnZSddfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxJdGVtLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlciBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9wcy5pbmZvWyd0aXRsZSddfTwvSXRlbS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtLk1ldGE+e3Byb3BzLmluZm9bJ3N1YnRpdGxlJ119PC9JdGVtLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLmluZm9bJ3ByaWNlJ10pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9wcy5pbmZvWydwcmljZSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLmluZm9bJ29sZF9wcmljZSddKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3Byb3BzLmluZm9bJ29sZF9wcmljZSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbS5FeHRyYT5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInF1YW50aXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMuaW5mb1snaWQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVJbnB1dENoYW5nZVF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLm9mZmVyWydxdWFudGl0eSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkFkZCB0byBjYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNBZGRUb0NhcnR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkV4dHJhPlxuICAgICAgICAgICAgICAgICAgICB7KHByb3BzLmluZm9bJ3VzZXJfdXNlZCddKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaW5mb1sndXNlcl91c2VkJ119IHVzZXJzIHVzZWQgdGhpcyBjb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICAgIDwvSXRlbS5Hcm91cD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5DYXRlZ29yeTogPC9zcGFuPiA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhdGVnb3J5LXZhbHVlXCI+e3Byb3BzLmluZm9bJ2NhdGVnb3J5J119PC9zcGFuPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezV9PlxuICAgICAgICAgICAgPFNlZ21lbnQ+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRvcCBjb2xvci1yZWRcIj5cbiAgICAgICAgICAgICAgICBCRVNUIFZQTiBERUFMU1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFRvcEJsb2NrXG4gICAgICAgICAgICAgICAgZ2V0RGF0YT17Z2V0QmVzdFZwbkRlYWxzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxTZWdtZW50IGNsYXNzTmFtZT1cImluZm8tYmxvY2tcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wIGNvbG9yLXJlZFwiPlxuICAgICAgICAgICAgICAgIFBlb3BsZSB3aG8gdmlld2VkIHRoaXMgaXRlbSBhbHNvIHZpZXdlZFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFRvcEJsb2NrSG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgIGdldERhdGE9e2dldEJlc3RWcG5EZWFsc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge1xuICAgIHdpdGhSb3V0ZXJcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IE9mZmVyVmlldyBmcm9tICcuLi9jb21wb25lbnRzL09mZmVyVmlldydcblxuaW1wb3J0IHsgZ2V0T2ZmZXJJbmZvIH0gZnJvbSAnLi4vLi4vLi4vYXBpL29mZmVyJ1xuXG5pbXBvcnQge1xuICAgIGNsb25lT2JqZWN0XG59IGZyb20gJy4uLy4uLy4uL2luYy9pbmMnXG5cbmltcG9ydCB7IGZldGNoQ2FydE9mZmVycyB9ICBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dldENhcnRPZmZlcnMnXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgICBmZXRjaENhcnRPZmZlcnNcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xuICAgIGdldENhcnRPZmZlcnMgIDogc3RvcmUuZ2V0Q2FydE9mZmVycyxcbn0pXG5cbmNsYXNzIE9mZmVyQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBsZXQgb2ZmZXIgPSBwcm9wcy5tYXRjaC5wYXJhbXMub2ZmZXI7XG4gICAgICAgIGxldCBvZmZlcklkID0gdGhpcy5wYXJzZVR5cGUob2ZmZXIpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nICAgOiAwLFxuICAgICAgICAgICAgb2ZmZXJJZDogb2ZmZXJJZCxcbiAgICAgICAgICAgIG9mZmVyOiB7XG4gICAgICAgICAgICAgICAgJ2lkJzogb2ZmZXJJZCxcbiAgICAgICAgICAgICAgICAncXVhbnRpdHknOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluZm86IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldE9mZmVySW5mbygpXG4gICAgfVxuXG4gICAgcGFyc2VUeXBlID0gKG9mZmVyKSA9PiB7XG4gICAgICAgIGxldCBhcnIgPSBvZmZlci5zcGxpdCgnLScpO1xuXG4gICAgICAgIHJldHVybiBhcnJbYXJyLmxlbmd0aC0xXVxuICAgIH1cblxuICAgIGdldE9mZmVySW5mbyA9ICgpID0+IHtcblxuICAgICAgICBsZXQge1xuICAgICAgICAgICAgb2ZmZXJJZFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBnZXRPZmZlckluZm8oeyBvZmZlcklkOiBvZmZlcklkIH0pO1xuICAgICAgICByZXN1bHQudGhlbihcbiAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICByb3dcbiAgICAgICAgICAgICAgICB9ID0gcmVzdWx0XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbyA6IHJvdyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBhbGVydChcIlJlamVjdGVkOiBcIiArIGVycm9yKTsgLy8gZXJyb3IgLSDQsNGA0LPRg9C80LXQvdGCIHJlamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlUXVhbnRpdHkgPSAoZSwgeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb2ZmZXI6IHtcbiAgICAgICAgICAgICAgICAnaWQnIDogbmFtZSxcbiAgICAgICAgICAgICAgICAncXVhbnRpdHknIDogdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY0FkZFRvQ2FydCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIG9mZmVyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGdldENhcnRPZmZlcnNcbiAgICAgICAgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBjb25zb2xlLmxvZygnb2ZmZXItLS0tPicsIG9mZmVyKVxuXG4gICAgICAgIGxldCBhID0gZ2V0Q2FydE9mZmVycy5jb25jYXQoW29mZmVyXSlcbiAgICAgICAgY29uc29sZS5sb2coJ2EtLS0tPicsIGEpXG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hDYXJ0T2ZmZXJzKGEpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPE9mZmVyVmlld1xuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZX1cblxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZVF1YW50aXR5PXsgdGhpcy5oYW5kbGVJbnB1dENoYW5nZVF1YW50aXR5IH1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY0FkZFRvQ2FydD17IHRoaXMuaGFuZGxlQ2xpY0FkZFRvQ2FydCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoT2ZmZXJDb250YWluZXIpKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==