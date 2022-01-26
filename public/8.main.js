(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/client/api/paymentMethod.js":
/*!*****************************************!*\
  !*** ./src/client/api/paymentMethod.js ***!
  \*****************************************/
/*! exports provided: getPaymentMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentMethods", function() { return getPaymentMethods; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function getPaymentMethods(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/payment-method/list', {
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

/***/ "./src/client/routes/Checkout/components/CheckoutView.js":
/*!***************************************************************!*\
  !*** ./src/client/routes/Checkout/components/CheckoutView.js ***!
  \***************************************************************/
/*! exports provided: CheckoutView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutView", function() { return CheckoutView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");





var head = function head(url) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    key: Math.random()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Savingsdealz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "robots",
    content: "noindex, nofollow"
  }));
};

var CheckoutView = function CheckoutView(props) {
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
  }, "Checkout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    id: "checkoutBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    computer: 10,
    mobile: 16
  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h1"
  }, "Review item and shipping"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Group, null, Object.keys(props.offers).map(function (rowKey) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"], {
      key: 'c-' + props.offers[rowKey]['id']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Image, {
      size: "tiny",
      src: props.offers[rowKey]['image']
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Header, {
      as: "a"
    }, props.offers[rowKey]['title']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Meta, null, props.offers[rowKey]['subtitle']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Extra, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      className: "quantity",
      type: "number",
      name: props.offers[rowKey]['id'],
      onChange: props.handleInputChangeQuantity,
      value: props.offers[rowKey]['quantity'],
      min: 0
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "price"
    }, "$", props.offers[rowKey]['price'])), props.offers[rowKey]['user_used'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Description, null, props.offers[rowKey]['user_used'], " users used this coupon")));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h1"
  }, "Pay with"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    basic: "very",
    verticalAlign: "middle",
    collapsing: true,
    id: "paymentMethods"
  }, Object.keys(props.paymentMethods).map(function (rowKey) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
      size: "big",
      value: props.paymentMethods[rowKey]['id'],
      onChange: props.handleChangePaymentMethod,
      checked: props.checkPayment == props.paymentMethods[rowKey]['id']
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      className: "payment-method-logo",
      src: props.paymentMethods[rowKey]['image']
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, props.paymentMethods[rowKey]['name']));
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    id: "payBlock",
    computer: 6,
    mobile: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], {
    verticalAlign: "middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Content, {
    floated: "right"
  }, "$", props.total['total']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Content, null, "Subtotal (", props.total['items'], " item", props.total['items'] > 1 && 's', ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
    className: "order-total"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Content, {
    floated: "right"
  }, "$", props.total['total']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Content, null, "Order total"))), !props.checkPayment || props.total['total'] == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
    content: props.total['total'] == 0 ? 'Item list is empty' : 'Please select payment method',
    on: "click",
    pinned: true,
    trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      fluid: true,
      color: "red",
      content: "Confirm and pay"
    })
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fluid: true,
    color: "red",
    content: "Confirm and pay",
    disabled: !props.checkPayment || props.total['total'] == 0 ? true : false,
    onClick: props.handleClickToPay,
    loading: props.loadingPayButton
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    closeIcon: true,
    dimmer: "inverted",
    size: "mini",
    open: props.openSendEmailModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Header, null, "Enter your email to receive a coupon to activate your VPN premium account."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Content, {
    className: "coupon-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    type: "email",
    onChange: props.handleChangePayerEmail,
    value: props.payerEmail && props.payerEmail
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Button, {
    fluid: true,
    color: "red",
    content: "PAY",
    onClick: props.handleClickToPay
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (CheckoutView);

/***/ }),

/***/ "./src/client/routes/Checkout/containers/CheckoutContainer.js":
/*!********************************************************************!*\
  !*** ./src/client/routes/Checkout/containers/CheckoutContainer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_CheckoutView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CheckoutView */ "./src/client/routes/Checkout/components/CheckoutView.js");
/* harmony import */ var _api_paymentMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/paymentMethod */ "./src/client/api/paymentMethod.js");
/* harmony import */ var _api_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/cart */ "./src/client/api/cart.js");
/* harmony import */ var _inc_inc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inc/inc */ "./src/client/inc/inc.js");
/* harmony import */ var _actions_getCartOffers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../actions/getCartOffers */ "./src/client/actions/getCartOffers.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
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
    getCartOffers: store.getCartOffers,
    getUser: store.getUser
  };
};

var CheckoutContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckoutContainer, _React$Component);

  var _super = _createSuper(CheckoutContainer);

  function CheckoutContainer(props) {
    var _this;

    _classCallCheck(this, CheckoutContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getPaymentMethods", function () {
      var result = Object(_api_paymentMethod__WEBPACK_IMPORTED_MODULE_4__["getPaymentMethods"])();
      result.then(function (result) {
        var status = result.status,
            rows = result.rows;

        if (status) {
          _this.setState({
            paymentMethods: rows
          });
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCartOffers", function () {
      var result = Object(_api_cart__WEBPACK_IMPORTED_MODULE_5__["getCartOffers"])();
      result.then(function (result) {
        var status = result.status,
            rows = result.rows,
            total = result.total;

        if (status) {
          _this.setState({
            offers: rows
          });

          _this.calculateTotal(rows);
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "calculateTotal", function () {
      var offersList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var offers = _this.state.offers;

      if (offersList) {
        offers = offersList;
      }

      var total = {
        'subtotal': 0,
        'tax': 0,
        'total': 0,
        'items': 0
      };

      for (var k in offers) {
        var _offers$k = offers[k],
            price = _offers$k.price,
            quantity = _offers$k.quantity,
            tax = _offers$k.tax;
        total['subtotal'] += Math.round(price * quantity * 100) / 100;
        total['tax'] += Math.round(tax * 100) / 100;
        total['items']++;
      }

      total['total'] = Math.round((total['subtotal'] + total['tax']) * 100) / 100;

      _this.setState({
        total: total
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeQuantity", function (e, _ref) {
      var name = _ref.name,
          value = _ref.value;
      e.preventDefault();
      var offers = _this.state.offers;
      var getCartOffers = _this.props.getCartOffers;
      var offersClone = Object(_inc_inc__WEBPACK_IMPORTED_MODULE_6__["cloneObject"])(offers);

      for (var k in offersClone) {
        var id = offersClone[k].id;
        if (id != name) continue;
        offersClone[k]['quantity'] = parseInt(value);

        for (var i in getCartOffers) {
          if (getCartOffers[i]['id'] == id) {
            getCartOffers[i]['quantity'] = parseInt(value);
          }
        }

        if (value == 0) {
          delete offersClone[k];
        }

        break;
      }

      _this.props.fetchCartOffers(getCartOffers);

      _this.setState({
        offers: offersClone
      });

      _this.calculateTotal(offersClone);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangePaymentMethod", function (e, _ref2) {
      var value = _ref2.value;

      _this.setState({
        checkPayment: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickToPay", function () {
      var _this$state = _this.state,
          checkPayment = _this$state.checkPayment,
          payerEmail = _this$state.payerEmail; // if (!this.props.getUser && !payerEmail) {
      //     this.setState({
      //         openSendEmailModal: true
      //     })
      //
      //     return
      // }

      var result = Object(_api_cart__WEBPACK_IMPORTED_MODULE_5__["getPayLink"])({
        payment_method_id: checkPayment,
        payer_email: payerEmail
      });

      _this.setState({
        loadingPayButton: true
      });

      result.then(function (result) {
        var status = result.status,
            paylink = result.paylink;

        if (status) {
          if (checkPayment == 4) {
            _this.sendPmPayForm(paylink);
          } else {
            location.href = paylink;
          }
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangePayerEmail", function (e, _ref3) {
      var value = _ref3.value;

      _this.setState({
        payerEmail: value
      });
    });

    _this.state = {
      loading: 0,
      paymentMethods: false,
      checkPayment: false,
      offers: false,
      total: false,
      loadingPayButton: false,
      payerEmail: '',
      openSendEmailModal: false
    };

    _this.getPaymentMethods();

    _this.getCartOffers();

    return _this;
  }

  _createClass(CheckoutContainer, [{
    key: "sendPmPayForm",
    value: function sendPmPayForm(fields) {
      var url = 'https://perfectmoney.com/api/step1.asp';
      var formData = JSON.parse(fields);
      var payFormData = '';
      payFormData += '<form action="' + url + '" method="post">';
      Object.keys(formData).map(function (name) {
        return payFormData += '<input type="hidden" name="' + name + '" value="' + formData[name] + '">';
      });
      payFormData += '</form>';
      var payForm = jquery__WEBPACK_IMPORTED_MODULE_8___default()(payFormData);
      jquery__WEBPACK_IMPORTED_MODULE_8___default()('body').append(payForm);
      payForm.submit();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CheckoutView__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.state, {
        handleInputChangeQuantity: this.handleInputChangeQuantity,
        handleClickToPay: this.handleClickToPay,
        handleChangePaymentMethod: this.handleChangePaymentMethod,
        handleChangePayerEmail: this.handleChangePayerEmail
      }));
    }
  }]);

  return CheckoutContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(CheckoutContainer)));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS9wYXltZW50TWV0aG9kLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvaW5jL2luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlcy9DaGVja291dC9jb21wb25lbnRzL0NoZWNrb3V0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlcy9DaGVja291dC9jb250YWluZXJzL0NoZWNrb3V0Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbImdldFBheW1lbnRNZXRob2RzIiwiZGF0YSIsImF4aW9zIiwibWV0aG9kIiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbG9uZU9iamVjdCIsIm9iamVjdCIsIm5ld09iamVjdCIsImtleSIsImNoZWNrTnVtYmVySW5wdXQiLCJrZXlDb2RlIiwiY3RybEtleSIsInZhbGlkYXRlRW1haWwiLCJlbWFpbCIsInJlIiwidGVzdCIsImdldFBhcmFtZXRlckJ5TmFtZSIsIm5hbWUiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmNlUHJpY2UiLCJwcmljZSIsInRvU3RyaW5nIiwiaGVhZCIsIk1hdGgiLCJyYW5kb20iLCJDaGVja291dFZpZXciLCJwcm9wcyIsIkxpbmsiLCJPYmplY3QiLCJrZXlzIiwib2ZmZXJzIiwibWFwIiwicm93S2V5IiwiaGFuZGxlSW5wdXRDaGFuZ2VRdWFudGl0eSIsInBheW1lbnRNZXRob2RzIiwiaGFuZGxlQ2hhbmdlUGF5bWVudE1ldGhvZCIsImNoZWNrUGF5bWVudCIsInRvdGFsIiwiaGFuZGxlQ2xpY2tUb1BheSIsImxvYWRpbmdQYXlCdXR0b24iLCJvcGVuU2VuZEVtYWlsTW9kYWwiLCJoYW5kbGVDaGFuZ2VQYXllckVtYWlsIiwicGF5ZXJFbWFpbCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImZldGNoQ2FydE9mZmVycyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiZ2V0Q2FydE9mZmVycyIsImdldFVzZXIiLCJDaGVja291dENvbnRhaW5lciIsInJlc3VsdCIsInN0YXR1cyIsInJvd3MiLCJzZXRTdGF0ZSIsImFsZXJ0IiwiY2FsY3VsYXRlVG90YWwiLCJvZmZlcnNMaXN0Iiwic3RhdGUiLCJrIiwicXVhbnRpdHkiLCJ0YXgiLCJyb3VuZCIsImUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Iiwib2ZmZXJzQ2xvbmUiLCJpZCIsInBhcnNlSW50IiwiaSIsImdldFBheUxpbmsiLCJwYXltZW50X21ldGhvZF9pZCIsInBheWVyX2VtYWlsIiwicGF5bGluayIsInNlbmRQbVBheUZvcm0iLCJsb2FkaW5nIiwiZmllbGRzIiwiZm9ybURhdGEiLCJKU09OIiwicGFyc2UiLCJwYXlGb3JtRGF0YSIsInBheUZvcm0iLCIkIiwiYXBwZW5kIiwic3VibWl0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoUm91dGVyIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTQSxpQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUM7QUFDdEMsU0FBT0MsNENBQUssQ0FBQyxrREFBRCxFQUFxRDtBQUM3REMsVUFBTSxFQUFFLE1BRHFEO0FBRTdERixRQUFJLEVBQUVBLElBRnVEO0FBRzdERyxtQkFBZSxFQUFFO0FBSDRDLEdBQXJELENBQUwsQ0FJRkMsSUFKRSxDQUlHLFVBQVVDLFFBQVYsRUFBb0I7QUFDMUIsV0FBT0EsUUFBUSxDQUFDTCxJQUFoQjtBQUNELEdBTkksRUFNRk0sS0FORSxDQU1JLFVBQVVDLEtBQVYsRUFBaUI7QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsR0FSSSxDQUFQO0FBU0QsQzs7Ozs7Ozs7Ozs7O0FD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VUFBTWxFLEdBQUcsR0FBRyx3Q0FBWjtBQUNBLFVBQU1tRSxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxNQUFYLENBQWpCO0FBQ0EsVUFBSUksV0FBVyxHQUFHLEVBQWxCO0FBQ0FBLGlCQUFXLElBQUksbUJBQW1CdEUsR0FBbkIsR0FBeUIsa0JBQXhDO0FBQ0FtQixZQUFNLENBQUNDLElBQVAsQ0FBWStDLFFBQVosRUFBc0I3QyxHQUF0QixDQUEwQixVQUFBdkIsSUFBSTtBQUFBLGVBQzFCdUUsV0FBVyxJQUFJLGdDQUFnQ3ZFLElBQWhDLEdBQXVDLFdBQXZDLEdBQXFEb0UsUUFBUSxDQUFDcEUsSUFBRCxDQUE3RCxHQUFzRSxJQUQzRDtBQUFBLE9BQTlCO0FBR0F1RSxpQkFBVyxJQUFJLFNBQWY7QUFDQSxVQUFJQyxPQUFPLEdBQUdDLDZDQUFDLENBQUNGLFdBQUQsQ0FBZjtBQUNBRSxtREFBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVQyxNQUFWLENBQWlCRixPQUFqQjtBQUNBQSxhQUFPLENBQUNHLE1BQVI7QUFDSDs7O1dBUUQsa0JBQVM7QUFDTCwwQkFBTywyREFBQyxnRUFBRCxlQUNDLEtBQUsxQixLQUROO0FBR0gsaUNBQXlCLEVBQUUsS0FBS3hCLHlCQUg3QjtBQUlILHdCQUFnQixFQUFFLEtBQUtLLGdCQUpwQjtBQU1ILGlDQUF5QixFQUFFLEtBQUtILHlCQU43QjtBQU9ILDhCQUFzQixFQUFFLEtBQUtNO0FBUDFCLFNBQVA7QUFXSDs7OztFQTlOMkIyQyw0Q0FBSyxDQUFDQyxTOztBQWlPdkJDLGtJQUFVLENBQUNDLDJEQUFPLENBQUMxQyxlQUFELEVBQWtCRixrQkFBbEIsQ0FBUCxDQUE2Q00saUJBQTdDLENBQUQsQ0FBekIsRSIsImZpbGUiOiI4Lm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXltZW50TWV0aG9kcyhkYXRhKSB7XG4gIHJldHVybiBheGlvcygnaHR0cHM6Ly9hcGkuc2F2aW5nc2RlYWx6LmNvbS9wYXltZW50LW1ldGhvZC9saXN0Jywge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbG9uZU9iamVjdChvYmplY3QpIHtcbiAgICBsZXQgbmV3T2JqZWN0ID0ge31cbiAgICBcbiAgICBmb3IobGV0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBvYmplY3Rba2V5XVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3T2JqZWN0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja051bWJlcklucHV0KGtleUNvZGUpIHtcbiAgICBpZiAoa2V5Q29kZSA9PSA0NiB8fCBrZXlDb2RlID09IDggfHwga2V5Q29kZSA9PSA5IHx8IGtleUNvZGUgPT0gMjcgfHwga2V5Q29kZSA9PSAxMTAgfHwga2V5Q29kZSA9PSAxOTAgfHxcbiAgICAgICAgICAoa2V5Q29kZSA9PSA2NSAmJiBjdHJsS2V5ID09PSB0cnVlKSB8fFxuICAgICAgICAgIChrZXlDb2RlID49IDM1ICYmIGtleUNvZGUgPD0gMzkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgoa2V5Q29kZSA8IDQ4IHx8IGtleUNvZGUgPiA1NykgJiYgKGtleUNvZGUgPCA5NiB8fCBrZXlDb2RlID4gMTA1KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgIFxuICAgIHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB1cmwpIHtcbiAgICBpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIG5hbWUgKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxuICAgICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XG4gICAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyY2VQcmljZShwcmljZSkge1xuICAgIHByaWNlID0gcHJpY2UudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gcHJpY2UucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCAnJDEgJyk7XG59XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIEJyZWFkY3J1bWIsXG4gIEdyaWQsXG4gIFNlZ21lbnQsXG4gIEhlYWRlcixcbiAgSXRlbSxcbiAgSW5wdXQsXG4gIFRhYmxlLFxuICBMaXN0LFxuICBCdXR0b24sXG4gIEltYWdlLFxuICBDaGVja2JveCxcbiAgRGl2aWRlcixcbiAgTW9kYWwsXG4gIEZvcm0sXG4gIFBvcHVwXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBoZWFkID0gKHVybCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIZWxtZXQga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgIDx0aXRsZT5TYXZpbmdzZGVhbHo8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4LCBub2ZvbGxvd1wiLz5cbiAgICA8L0hlbG1ldD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgQ2hlY2tvdXRWaWV3ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAge2hlYWQocHJvcHMudXJsKX1cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEJyZWFkY3J1bWIgaWQ9XCJicmVhZGNydW1iXCI+XG4gICAgICAgIDxCcmVhZGNydW1iLlNlY3Rpb25cbiAgICAgICAgICBsaW5rXG4gICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgdG89XCIvXCJcbiAgICAgICAgPlxuICAgICAgICAgIE1haW5cbiAgICAgICAgPC9CcmVhZGNydW1iLlNlY3Rpb24+XG4gICAgICAgIDxCcmVhZGNydW1iLkRpdmlkZXIgaWNvbj1cInJpZ2h0IGNoZXZyb25cIi8+XG4gICAgICAgIDxCcmVhZGNydW1iLlNlY3Rpb24gYWN0aXZlPlxuICAgICAgICAgIENoZWNrb3V0XG4gICAgICAgIDwvQnJlYWRjcnVtYi5TZWN0aW9uPlxuICAgICAgPC9CcmVhZGNydW1iPlxuXG4gICAgICA8R3JpZCBpZD1cImNoZWNrb3V0QmxvY2tcIj5cbiAgICAgICAgPEdyaWQuQ29sdW1uIGNvbXB1dGVyPXsxMH0gbW9iaWxlPXsxNn0+ICB7Lyogd2lkdGg9ezEwfSAqL31cbiAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICAgICAgICBhcz1cImgxXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmV2aWV3IGl0ZW0gYW5kIHNoaXBwaW5nXG4gICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgPEl0ZW0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwcm9wcy5vZmZlcnMpLm1hcCgocm93S2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXsnYy0nICsgcHJvcHMub2ZmZXJzW3Jvd0tleV1bJ2lkJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSW1hZ2Ugc2l6ZT1cInRpbnlcIiBzcmM9e3Byb3BzLm9mZmVyc1tyb3dLZXldWydpbWFnZSddfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlciBhcz1cImFcIj57cHJvcHMub2ZmZXJzW3Jvd0tleV1bJ3RpdGxlJ119PC9JdGVtLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uTWV0YT57cHJvcHMub2ZmZXJzW3Jvd0tleV1bJ3N1YnRpdGxlJ119PC9JdGVtLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkV4dHJhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVhbnRpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5vZmZlcnNbcm93S2V5XVsnaWQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVJbnB1dENoYW5nZVF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLm9mZmVyc1tyb3dLZXldWydxdWFudGl0eSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvcHMub2ZmZXJzW3Jvd0tleV1bJ3ByaWNlJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkV4dHJhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3BzLm9mZmVyc1tyb3dLZXldWyd1c2VyX3VzZWQnXSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLm9mZmVyc1tyb3dLZXldWyd1c2VyX3VzZWQnXX0gdXNlcnMgdXNlZCB0aGlzIGNvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L0l0ZW0uR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICAgICAgICBhcz1cImgxXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUGF5IHdpdGhcbiAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlIGJhc2ljPVwidmVyeVwiIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIiBjb2xsYXBzaW5nIGlkPVwicGF5bWVudE1ldGhvZHNcIj5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHByb3BzLnBheW1lbnRNZXRob2RzKS5tYXAoKHJvd0tleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImJpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnBheW1lbnRNZXRob2RzW3Jvd0tleV1bJ2lkJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZVBheW1lbnRNZXRob2R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHJvcHMuY2hlY2tQYXltZW50ID09IHByb3BzLnBheW1lbnRNZXRob2RzW3Jvd0tleV1bJ2lkJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGF5bWVudC1tZXRob2QtbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5wYXltZW50TWV0aG9kc1tyb3dLZXldWydpbWFnZSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wYXltZW50TWV0aG9kc1tyb3dLZXldWyduYW1lJ119XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8R3JpZC5Db2x1bW4gaWQ9XCJwYXlCbG9ja1wiIGNvbXB1dGVyPXs2fSBtb2JpbGU9ezE2fT5cbiAgICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICAgIDxMaXN0IHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgJHtwcm9wcy50b3RhbFsndG90YWwnXX1cbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlN1YnRvdGFsICh7cHJvcHMudG90YWxbJ2l0ZW1zJ119IGl0ZW17cHJvcHMudG90YWxbJ2l0ZW1zJ10gPiAxICYmICdzJ30pPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICB7Lyo8TGlzdC5JdGVtPiovfVxuICAgICAgICAgICAgICB7LyogICAgPExpc3QuQ29udGVudCBmbG9hdGVkPSdyaWdodCc+Ki99XG4gICAgICAgICAgICAgIHsvKiAgICAgICAgZnJlZSovfVxuICAgICAgICAgICAgICB7LyogICAgPC9MaXN0LkNvbnRlbnQ+Ki99XG4gICAgICAgICAgICAgIHsvKiAgICA8TGlzdC5Db250ZW50PlNoaXBwaW5nPC9MaXN0LkNvbnRlbnQ+Ki99XG4gICAgICAgICAgICAgIHsvKjwvTGlzdC5JdGVtPiovfVxuICAgICAgICAgICAgICB7Lyo8TGlzdC5JdGVtPiovfVxuICAgICAgICAgICAgICB7LyogICAgPExpc3QuQ29udGVudCBmbG9hdGVkPSdyaWdodCc+Ki99XG4gICAgICAgICAgICAgIHsvKiAgICAgICAgJHsgcHJvcHMudG90YWxbJ3RheCddIH0qL31cbiAgICAgICAgICAgICAgey8qICAgIDwvTGlzdC5Db250ZW50PiovfVxuICAgICAgICAgICAgICB7LyogICAgPExpc3QuQ29udGVudD5UYXgqPC9MaXN0LkNvbnRlbnQ+Ki99XG4gICAgICAgICAgICAgIHsvKjwvTGlzdC5JdGVtPiovfVxuICAgICAgICAgICAgICA8RGl2aWRlci8+XG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gY2xhc3NOYW1lPVwib3JkZXItdG90YWxcIj5cbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgJHtwcm9wcy50b3RhbFsndG90YWwnXX1cbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50Pk9yZGVyIHRvdGFsPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAhcHJvcHMuY2hlY2tQYXltZW50IHx8IHByb3BzLnRvdGFsWyd0b3RhbCddID09IDAgP1xuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9wcy50b3RhbFsndG90YWwnXSA9PSAwID8gJ0l0ZW0gbGlzdCBpcyBlbXB0eScgOiAnUGxlYXNlIHNlbGVjdCBwYXltZW50IG1ldGhvZCd9XG4gICAgICAgICAgICAgICAgICAgIG9uPVwiY2xpY2tcIlxuICAgICAgICAgICAgICAgICAgICBwaW5uZWRcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDb25maXJtIGFuZCBwYXlcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6XG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDb25maXJtIGFuZCBwYXlcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXByb3BzLmNoZWNrUGF5bWVudCB8fCBwcm9wcy50b3RhbFsndG90YWwnXSA9PSAwID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja1RvUGF5fVxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtwcm9wcy5sb2FkaW5nUGF5QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgPC9HcmlkPlxuICAgICAgPE1vZGFsXG4gICAgICAgIGNsb3NlSWNvblxuICAgICAgICBkaW1tZXI9XCJpbnZlcnRlZFwiXG4gICAgICAgIHNpemU9XCJtaW5pXCJcbiAgICAgICAgb3Blbj17cHJvcHMub3BlblNlbmRFbWFpbE1vZGFsfVxuICAgICAgPlxuICAgICAgICA8TW9kYWwuSGVhZGVyPkVudGVyIHlvdXIgZW1haWwgdG8gcmVjZWl2ZSBhIGNvdXBvbiB0byBhY3RpdmF0ZSB5b3VyIFZQTiBwcmVtaXVtIGFjY291bnQuPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgIDxNb2RhbC5Db250ZW50IGNsYXNzTmFtZT1cImNvdXBvbi1tb2RhbFwiPlxuICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZVBheWVyRW1haWx9XG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wYXllckVtYWlsICYmIHByb3BzLnBheWVyRW1haWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm0uQnV0dG9uXG4gICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgY29udGVudD1cIlBBWVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrVG9QYXl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Vmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7XG4gICAgd2l0aFJvdXRlclxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgQ2hlY2tvdXRWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tvdXRWaWV3J1xuXG5pbXBvcnQge2dldFBheW1lbnRNZXRob2RzfSBmcm9tICcuLi8uLi8uLi9hcGkvcGF5bWVudE1ldGhvZCdcblxuaW1wb3J0IHtcbiAgICBnZXRDYXJ0T2ZmZXJzLFxuICAgIGdldFBheUxpbmtcbn0gZnJvbSAnLi4vLi4vLi4vYXBpL2NhcnQnXG5cbmltcG9ydCB7XG4gICAgY2xvbmVPYmplY3Rcbn0gZnJvbSAnLi4vLi4vLi4vaW5jL2luYydcblxuaW1wb3J0IHtmZXRjaENhcnRPZmZlcnN9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2V0Q2FydE9mZmVycydcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICAgIGZldGNoQ2FydE9mZmVyc1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XG4gICAgZ2V0Q2FydE9mZmVyczogc3RvcmUuZ2V0Q2FydE9mZmVycyxcbiAgICBnZXRVc2VyOiBzdG9yZS5nZXRVc2VyLFxufSlcblxuY2xhc3MgQ2hlY2tvdXRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogMCxcbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RzOiBmYWxzZSxcbiAgICAgICAgICAgIGNoZWNrUGF5bWVudDogZmFsc2UsXG4gICAgICAgICAgICBvZmZlcnM6IGZhbHNlLFxuICAgICAgICAgICAgdG90YWw6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZ1BheUJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICBwYXllckVtYWlsOiAnJyxcbiAgICAgICAgICAgIG9wZW5TZW5kRW1haWxNb2RhbDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0UGF5bWVudE1ldGhvZHMoKVxuICAgICAgICB0aGlzLmdldENhcnRPZmZlcnMoKVxuICAgIH1cblxuICAgIGdldFBheW1lbnRNZXRob2RzID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZ2V0UGF5bWVudE1ldGhvZHMoKTtcblxuICAgICAgICByZXN1bHQudGhlbihcbiAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgICAgIH0gPSByZXN1bHRcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZHM6IHJvd3MsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlJlamVjdGVkOiBcIiArIGVycm9yKTsgLy8gZXJyb3IgLSDQsNGA0LPRg9C80LXQvdGCIHJlamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldENhcnRPZmZlcnMgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBnZXRDYXJ0T2ZmZXJzKCk7XG5cbiAgICAgICAgcmVzdWx0LnRoZW4oXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgcm93cyxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxcbiAgICAgICAgICAgICAgICB9ID0gcmVzdWx0XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZmVyczogcm93c1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlVG90YWwocm93cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlJlamVjdGVkOiBcIiArIGVycm9yKTsgLy8gZXJyb3IgLSDQsNGA0LPRg9C80LXQvdGCIHJlamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVRvdGFsID0gKG9mZmVyc0xpc3QgPSB7fSkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgb2ZmZXJzXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgaWYgKG9mZmVyc0xpc3QpIHtcbiAgICAgICAgICAgIG9mZmVycyA9IG9mZmVyc0xpc3RcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b3RhbCA9IHtcbiAgICAgICAgICAgICdzdWJ0b3RhbCc6IDAsXG4gICAgICAgICAgICAndGF4JzogMCxcbiAgICAgICAgICAgICd0b3RhbCc6IDAsXG4gICAgICAgICAgICAnaXRlbXMnOiAwXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrIGluIG9mZmVycykge1xuICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgICAgICBxdWFudGl0eSxcbiAgICAgICAgICAgICAgICB0YXhcbiAgICAgICAgICAgIH0gPSBvZmZlcnNba11cblxuICAgICAgICAgICAgdG90YWxbJ3N1YnRvdGFsJ10gKz0gTWF0aC5yb3VuZChwcmljZSAqIHF1YW50aXR5ICogMTAwKSAvIDEwMFxuICAgICAgICAgICAgdG90YWxbJ3RheCddICs9IE1hdGgucm91bmQodGF4ICogMTAwKSAvIDEwMFxuICAgICAgICAgICAgdG90YWxbJ2l0ZW1zJ10rKztcbiAgICAgICAgfVxuXG4gICAgICAgIHRvdGFsWyd0b3RhbCddID0gTWF0aC5yb3VuZCgodG90YWxbJ3N1YnRvdGFsJ10gKyB0b3RhbFsndGF4J10pICogMTAwKSAvIDEwMFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRvdGFsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2VRdWFudGl0eSA9IChlLCB7bmFtZSwgdmFsdWV9KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGxldCB7b2ZmZXJzfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGdldENhcnRPZmZlcnNcbiAgICAgICAgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBsZXQgb2ZmZXJzQ2xvbmUgPSBjbG9uZU9iamVjdChvZmZlcnMpXG5cbiAgICAgICAgZm9yIChsZXQgayBpbiBvZmZlcnNDbG9uZSkge1xuICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfSA9IG9mZmVyc0Nsb25lW2tdXG5cbiAgICAgICAgICAgIGlmIChpZCAhPSBuYW1lKSBjb250aW51ZVxuXG4gICAgICAgICAgICBvZmZlcnNDbG9uZVtrXVsncXVhbnRpdHknXSA9IHBhcnNlSW50KHZhbHVlKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGdldENhcnRPZmZlcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q2FydE9mZmVyc1tpXVsnaWQnXSA9PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRDYXJ0T2ZmZXJzW2ldWydxdWFudGl0eSddID0gcGFyc2VJbnQodmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvZmZlcnNDbG9uZVtrXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVha1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLmZldGNoQ2FydE9mZmVycyhnZXRDYXJ0T2ZmZXJzKVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb2ZmZXJzOiBvZmZlcnNDbG9uZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsKG9mZmVyc0Nsb25lKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VQYXltZW50TWV0aG9kID0gKGUsIHt2YWx1ZX0pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjaGVja1BheW1lbnQ6IHZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2tUb1BheSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGNoZWNrUGF5bWVudCxcbiAgICAgICAgICAgIHBheWVyRW1haWxcbiAgICAgICAgfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICAvLyBpZiAoIXRoaXMucHJvcHMuZ2V0VXNlciAmJiAhcGF5ZXJFbWFpbCkge1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vICAgICAgICAgb3BlblNlbmRFbWFpbE1vZGFsOiB0cnVlXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gZ2V0UGF5TGluayh7XG4gICAgICAgICAgICBwYXltZW50X21ldGhvZF9pZDogY2hlY2tQYXltZW50LFxuICAgICAgICAgICAgcGF5ZXJfZW1haWw6IHBheWVyRW1haWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nUGF5QnV0dG9uOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmVzdWx0LnRoZW4oXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bGluayxcbiAgICAgICAgICAgICAgICB9ID0gcmVzdWx0XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja1BheW1lbnQgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kUG1QYXlGb3JtKHBheWxpbmspXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gcGF5bGlua1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlJlamVjdGVkOiBcIiArIGVycm9yKTsgLy8gZXJyb3IgLSDQsNGA0LPRg9C80LXQvdGCIHJlamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNlbmRQbVBheUZvcm0oZmllbGRzKSB7XG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL3BlcmZlY3Rtb25leS5jb20vYXBpL3N0ZXAxLmFzcCc7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gSlNPTi5wYXJzZShmaWVsZHMpXG4gICAgICAgIHZhciBwYXlGb3JtRGF0YSA9ICcnXG4gICAgICAgIHBheUZvcm1EYXRhICs9ICc8Zm9ybSBhY3Rpb249XCInICsgdXJsICsgJ1wiIG1ldGhvZD1cInBvc3RcIj4nO1xuICAgICAgICBPYmplY3Qua2V5cyhmb3JtRGF0YSkubWFwKG5hbWUgPT4gKFxuICAgICAgICAgICAgcGF5Rm9ybURhdGEgKz0gJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIicgKyBuYW1lICsgJ1wiIHZhbHVlPVwiJyArIGZvcm1EYXRhW25hbWVdICsgJ1wiPidcbiAgICAgICAgKSlcbiAgICAgICAgcGF5Rm9ybURhdGEgKz0gJzwvZm9ybT4nXG4gICAgICAgIHZhciBwYXlGb3JtID0gJChwYXlGb3JtRGF0YSlcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZChwYXlGb3JtKTtcbiAgICAgICAgcGF5Rm9ybS5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VQYXllckVtYWlsID0gKGUsIHt2YWx1ZX0pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwYXllckVtYWlsOiB2YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxDaGVja291dFZpZXdcbiAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxuXG4gICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZVF1YW50aXR5PXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlUXVhbnRpdHl9XG4gICAgICAgICAgICBoYW5kbGVDbGlja1RvUGF5PXt0aGlzLmhhbmRsZUNsaWNrVG9QYXl9XG5cbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZVBheW1lbnRNZXRob2Q9e3RoaXMuaGFuZGxlQ2hhbmdlUGF5bWVudE1ldGhvZH1cbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZVBheWVyRW1haWw9e3RoaXMuaGFuZGxlQ2hhbmdlUGF5ZXJFbWFpbH1cbiAgICAgICAgLz5cblxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoZWNrb3V0Q29udGFpbmVyKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=