(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

/***/ "./src/client/routes/PagePayReturn/components/PagePayReturnView.js":
/*!*************************************************************************!*\
  !*** ./src/client/routes/PagePayReturn/components/PagePayReturnView.js ***!
  \*************************************************************************/
/*! exports provided: PagePayReturnView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePayReturnView", function() { return PagePayReturnView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");




var head = function head(url) {
  var pageUrl = typeof url !== 'undefined' ? url : '';
  var canonical = "https://savingsdealz.com" + pageUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    key: Math.random()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Page payment return | Savingsdealz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "robots",
    content: "no index, no follow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "canonical",
    href: canonical
  }));
};

var PagePayReturnView = function PagePayReturnView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, head(props.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h1",
    textAlign: "center"
  }, "Your payment is accepted.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"].Subheader, null, "After a few minutes check your emails we sent you the data to activate the service.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Enter your email to receive a coupon to activate your VPN premium account."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    fluid: true,
    name: "email",
    label: "Email",
    placeholder: "Email",
    required: true,
    onChange: props.handleChangeOrderEmail
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Button, {
    fluid: true,
    color: "red",
    content: "SAVE",
    onClick: props.handleSavePayerEmail
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (PagePayReturnView);

/***/ }),

/***/ "./src/client/routes/PagePayReturn/containers/PagePayReturnContainer.js":
/*!******************************************************************************!*\
  !*** ./src/client/routes/PagePayReturn/containers/PagePayReturnContainer.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_PagePayReturnView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PagePayReturnView */ "./src/client/routes/PagePayReturn/components/PagePayReturnView.js");
/* harmony import */ var _api_offer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/offer */ "./src/client/api/offer.js");
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






var PagePayReturnContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(PagePayReturnContainer, _React$Component);

  var _super = _createSuper(PagePayReturnContainer);

  function PagePayReturnContainer(props) {
    var _this;

    _classCallCheck(this, PagePayReturnContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChangeOrderEmail", function (e, _ref) {
      var value = _ref.value;

      _this.setState({
        orderEmail: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSavePayerEmail", function () {
      var orderEmail = _this.state.orderEmail;
      var result = Object(_api_offer__WEBPACK_IMPORTED_MODULE_3__["savePayerEmail"])({
        order_email: orderEmail
      });
      result.then(function (result) {
        var status = result.status;

        if (status) {
          _this.props.history.push('/');
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _this.state = {
      orderEmail: ''
    };
    return _this;
  }

  _createClass(PagePayReturnContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PagePayReturnView__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.state, {
        url: this.props.match.url,
        handleSavePayerEmail: this.handleSavePayerEmail,
        handleChangeOrderEmail: this.handleChangeOrderEmail
      }));
    }
  }]);

  return PagePayReturnContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PagePayReturnContainer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS9vZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlcy9QYWdlUGF5UmV0dXJuL2NvbXBvbmVudHMvUGFnZVBheVJldHVyblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvUGFnZVBheVJldHVybi9jb250YWluZXJzL1BhZ2VQYXlSZXR1cm5Db250YWluZXIuanMiXSwibmFtZXMiOlsiZ2V0VG9wU3VnZ2VzdGlvbnMiLCJkYXRhIiwiYXhpb3MiLCJtZXRob2QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldEJlc3RWcG5EZWFscyIsImdldFJlY29tZW5kYXRpb25PZmZlcnMiLCJnZXRPZmZlckluZm8iLCJnZXRPZmZlckxpc3QiLCJzYXZlUGF5ZXJFbWFpbCIsImhlYWQiLCJ1cmwiLCJwYWdlVXJsIiwiY2Fub25pY2FsIiwiTWF0aCIsInJhbmRvbSIsIlBhZ2VQYXlSZXR1cm5WaWV3IiwicHJvcHMiLCJoYW5kbGVDaGFuZ2VPcmRlckVtYWlsIiwiaGFuZGxlU2F2ZVBheWVyRW1haWwiLCJQYWdlUGF5UmV0dXJuQ29udGFpbmVyIiwiZSIsInZhbHVlIiwic2V0U3RhdGUiLCJvcmRlckVtYWlsIiwic3RhdGUiLCJyZXN1bHQiLCJvcmRlcl9lbWFpbCIsInN0YXR1cyIsImhpc3RvcnkiLCJwdXNoIiwiYWxlcnQiLCJtYXRjaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTQSxpQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUM7QUFDdEMsU0FBT0MsNENBQUssQ0FBQyxvREFBRCxFQUF1RDtBQUMvREMsVUFBTSxFQUFFLE1BRHVEO0FBRS9ERixRQUFJLEVB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QUFzQixFQUFFLEtBQUtEO0FBSmxDLFNBQVA7QUFPSDs7OztFQWhEZ0NlLDRDQUFLLENBQUNDLFM7O0FBbUQ1QmQscUZBQWYsRSIsImZpbGUiOiIxMS5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcFN1Z2dlc3Rpb25zKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL29mZmVyL3RvcC1zdWdnZXN0aW9ucycsIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZXN0VnBuRGVhbHMoZGF0YSkge1xuICByZXR1cm4gYXhpb3MoJ2h0dHBzOi8vYXBpLnNhdmluZ3NkZWFsei5jb20vb2ZmZXIvYmVzdC12cG4tZGVhbHMnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVjb21lbmRhdGlvbk9mZmVycyhkYXRhKSB7XG4gIHJldHVybiBheGlvcygnaHR0cHM6Ly9hcGkuc2F2aW5nc2RlYWx6LmNvbS9vZmZlci9yZWNvbW1lbmRhdGlvbnMnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2ZmZXJJbmZvKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL29mZmVyL2luZm8nLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2ZmZXJMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL29mZmVyL2xpc3QnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVBheWVyRW1haWwoZGF0YSkge1xuICByZXR1cm4gYXhpb3MoJ2h0dHBzOi8vYXBpLnNhdmluZ3NkZWFsei5jb20vb3JkZXIvcGF5ZXJfZW1haWwnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0J1xuaW1wb3J0IHsgQ29udGFpbmVyLCBTZWdtZW50LCBIZWFkZXIsIEZvcm0sIE1vZGFsIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNvbnN0IGhlYWQgPSAodXJsKSA9PiB7XG4gIGNvbnN0IHBhZ2VVcmwgPSAodHlwZW9mIHVybCAhPT0gJ3VuZGVmaW5lZCcpID8gdXJsIDogJyc7XG4gIGxldCBjYW5vbmljYWwgPSBcImh0dHBzOi8vc2F2aW5nc2RlYWx6LmNvbVwiICsgcGFnZVVybDtcbiAgcmV0dXJuIChcbiAgICA8SGVsbWV0IGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICA8dGl0bGU+UGFnZSBwYXltZW50IHJldHVybiB8IFNhdmluZ3NkZWFsejwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vIGluZGV4LCBubyBmb2xsb3dcIi8+XG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtjYW5vbmljYWx9Lz5cbiAgICA8L0hlbG1ldD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgUGFnZVBheVJldHVyblZpZXcgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICB7aGVhZChwcm9wcy51cmwpfVxuICAgIDxDb250YWluZXI+XG4gICAgICA8U2VnbWVudD5cbiAgICAgICAgPEhlYWRlciBhcz1cImgxXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgWW91ciBwYXltZW50IGlzIGFjY2VwdGVkLlxuICAgICAgICAgIDxIZWFkZXIuU3ViaGVhZGVyPlxuICAgICAgICAgICAgQWZ0ZXIgYSBmZXcgbWludXRlcyBjaGVjayB5b3VyIGVtYWlscyB3ZSBzZW50IHlvdSB0aGUgZGF0YSB0byBhY3RpdmF0ZSB0aGUgc2VydmljZS5cbiAgICAgICAgICA8L0hlYWRlci5TdWJoZWFkZXI+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBFbnRlciB5b3VyIGVtYWlsIHRvIHJlY2VpdmUgYSBjb3Vwb24gdG8gYWN0aXZhdGUgeW91ciBWUE4gcHJlbWl1bSBhY2NvdW50LlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlT3JkZXJFbWFpbH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtLkJ1dHRvblxuICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJTQVZFXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNhdmVQYXllckVtYWlsfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvU2VnbWVudD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VQYXlSZXR1cm5WaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBQYWdlUGF5UmV0dXJuVmlldyBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VQYXlSZXR1cm5WaWV3J1xuaW1wb3J0IHtzYXZlUGF5ZXJFbWFpbH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9vZmZlclwiO1xuXG5jbGFzcyBQYWdlUGF5UmV0dXJuQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3JkZXJFbWFpbDogJycsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VPcmRlckVtYWlsID0gKGUsIHt2YWx1ZX0pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcmRlckVtYWlsOiB2YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVNhdmVQYXllckVtYWlsID0gKCkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgb3JkZXJFbWFpbFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBzYXZlUGF5ZXJFbWFpbCh7XG4gICAgICAgICAgICBvcmRlcl9lbWFpbDogb3JkZXJFbWFpbFxuICAgICAgICB9KTtcblxuICAgICAgICByZXN1bHQudGhlbihcbiAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgIH0gPSByZXN1bHRcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJSZWplY3RlZDogXCIgKyBlcnJvcik7IC8vIGVycm9yIC0g0LDRgNCz0YPQvNC10L3RgiByZWplY3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8UGFnZVBheVJldHVyblZpZXdcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIHVybD17IHRoaXMucHJvcHMubWF0Y2gudXJsIH1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2F2ZVBheWVyRW1haWw9e3RoaXMuaGFuZGxlU2F2ZVBheWVyRW1haWx9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZU9yZGVyRW1haWw9e3RoaXMuaGFuZGxlQ2hhbmdlT3JkZXJFbWFpbH1cblxuICAgICAgICAvPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVBheVJldHVybkNvbnRhaW5lclxuIl0sInNvdXJjZVJvb3QiOiIifQ==