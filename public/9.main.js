(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/client/api/support.js":
/*!***********************************!*\
  !*** ./src/client/api/support.js ***!
  \***********************************/
/*! exports provided: sendSupportForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSupportForm", function() { return sendSupportForm; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function sendSupportForm(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/support/add', {
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

/***/ "./src/client/routes/ContactUs/components/ContactUsView.js":
/*!*****************************************************************!*\
  !*** ./src/client/routes/ContactUs/components/ContactUsView.js ***!
  \*****************************************************************/
/*! exports provided: ContactUsView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsView", function() { return ContactUsView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");




var options = [{
  key: 'cooperation',
  text: 'Cooperation',
  value: 'cooperation'
}];

var head = function head(url) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    key: Math.random()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Savingsdealz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "robots",
    content: "index, follow"
  }));
};

var ContactUsView = function ContactUsView(props) {
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
  }, "Contact us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    id: "signinBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h1",
    textAlign: "center"
  }, "Contact us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Email",
    placeholder: "Email",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
    label: "Question",
    options: options,
    defaultValue: options[0].value,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].TextArea, {
    label: "Message",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Button, {
    primary: true,
    fluid: true,
    color: "red",
    content: "Sent"
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (ContactUsView);

/***/ }),

/***/ "./src/client/routes/ContactUs/containers/ContactUsContainer.js":
/*!**********************************************************************!*\
  !*** ./src/client/routes/ContactUs/containers/ContactUsContainer.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ContactUsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ContactUsView */ "./src/client/routes/ContactUs/components/ContactUsView.js");
/* harmony import */ var _inc_inc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../inc/inc */ "./src/client/inc/inc.js");
/* harmony import */ var _api_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/support */ "./src/client/api/support.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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






var ContactUsContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(ContactUsContainer, _React$Component);

  var _super = _createSuper(ContactUsContainer);

  function ContactUsContainer(props) {
    var _this;

    _classCallCheck(this, ContactUsContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      event.preventDefault();

      if (!_this.validateFormValues()) {
        return false;
      }

      _this.setState({
        loading: 1
      });

      var data = _objectSpread({}, _this.state);

      var result = Object(_api_support__WEBPACK_IMPORTED_MODULE_3__["sendSupportForm"])(data);
      result.then(function (result) {
        var status = result.status;

        if (status) {}
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "validateFormValues", function () {
      var email = _this.state.support.email;
      var _false = false,
          email_error = _false.email_error;

      if (!Object(_inc_inc__WEBPACK_IMPORTED_MODULE_2__["validateEmail"])(email)) {
        email_error = true;
      }

      if (email_error) {
        _this.setState({
          email_error: email_error
        });

        return false;
      }

      return true;
    });

    _this.state = {
      loading: 0
    };
    return _this;
  }

  _createClass(ContactUsContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContactUsView__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, this.state, {
        handleSubmit: this.handleSubmit,
        handleInputChange: this.handleInputChange,
        handleChangeType: this.handleChangeType
      }));
    }
  }]);

  return ContactUsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContactUsContainer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS9zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvaW5jL2luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlcy9Db250YWN0VXMvY29tcG9uZW50cy9Db250YWN0VXNWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcm91dGVzL0NvbnRhY3RVcy9jb250YWluZXJzL0NvbnRhY3RVc0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJzZW5kU3VwcG9ydEZvcm0iLCJkYXRhIiwiYXhpb3MiLCJtZXRob2QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsb25lT2JqZWN0Iiwib2JqZWN0IiwibmV3T2JqZWN0Iiwia2V5IiwiY2hlY2tOdW1iZXJJbnB1dCIsImtleUNvZGUiLCJjdHJsS2V5IiwidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiZ2V0UGFyYW1ldGVyQnlOYW1lIiwibmFtZSIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlcGxhY2UiLCJyZWdleCIsIlJlZ0V4cCIsInJlc3VsdHMiLCJleGVjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyY2VQcmljZSIsInByaWNlIiwidG9TdHJpbmciLCJvcHRpb25zIiwidGV4dCIsInZhbHVlIiwiaGVhZCIsIk1hdGgiLCJyYW5kb20iLCJDb250YWN0VXNWaWV3IiwicHJvcHMiLCJMaW5rIiwiQ29udGFjdFVzQ29udGFpbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlRm9ybVZhbHVlcyIsInNldFN0YXRlIiwibG9hZGluZyIsInN0YXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiYWxlcnQiLCJzdXBwb3J0IiwiZW1haWxfZXJyb3IiLCJuZXh0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJoYW5k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QUFJQSxNQUFKLEVBQVksQ0FDWDtBQUNKLE9BUEwsRUFRSSxVQUFBOUMsS0FBSyxFQUFJO0FBQ1ArQyxhQUFLLENBQUMsZUFBZS9DLEtBQWhCLENBQUwsQ0FETyxDQUNzQjtBQUM5QixPQVZMO0FBYUgsS0F0Q2tCOztBQUFBLHlFQXdDRSxZQUFNO0FBQ3ZCLFVBQ0lXLEtBREosR0FFSSxNQUFLaUMsS0FBTCxDQUFXSSxPQUZmLENBQ0lyQyxLQURKO0FBR0EsbUJBRUksS0FGSjtBQUFBLFVBQ0lzQyxXQURKLFVBQ0lBLFdBREo7O0FBR0EsVUFBSSxDQUFDdkMsOERBQWEsQ0FBQ0MsS0FBRCxDQUFsQixFQUEyQjtBQUN2QnNDLG1CQUFXLEdBQUcsSUFBZDtBQUNIOztBQUNELFVBQUlBLFdBQUosRUFBaUI7QUFDYixjQUFLUCxRQUFMLENBQWM7QUFDVk8scUJBQVcsRUFBVUE7QUFEWCxTQUFkOztBQUdBLGVBQU8sS0FBUDtBQUNIOztBQUVELGFBQU8sSUFBUDtBQUNILEtBMURrQjs7QUFHZixVQUFLTCxLQUFMLEdBQWE7QUFDVEQsYUFBTyxFQUFJO0FBREYsS0FBYjtBQUhlO0FBTWxCOzs7O1dBRUQsbUNBQTBCTyxTQUExQixFQUFxQyxDQUNwQzs7O1dBbURELGtCQUFTO0FBQ0wsMEJBQU8sMkRBQUMsaUVBQUQsZUFDUyxLQUFLTixLQURkO0FBR0ssb0JBQVksRUFBRyxLQUFLTyxZQUh6QjtBQUlLLHlCQUFpQixFQUFHLEtBQUtDLGlCQUo5QjtBQUtLLHdCQUFnQixFQUFHLEtBQUtDO0FBTDdCLFNBQVA7QUFPSDs7OztFQXJFNEJDLDRDQUFLLENBQUNDLFM7O0FBd0V4QmpCLGlGQUFmLEUiLCJmaWxlIjoiOS5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VuZFN1cHBvcnRGb3JtKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL3N1cHBvcnQvYWRkJywge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbG9uZU9iamVjdChvYmplY3QpIHtcbiAgICBsZXQgbmV3T2JqZWN0ID0ge31cbiAgICBcbiAgICBmb3IobGV0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBvYmplY3Rba2V5XVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3T2JqZWN0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja051bWJlcklucHV0KGtleUNvZGUpIHtcbiAgICBpZiAoa2V5Q29kZSA9PSA0NiB8fCBrZXlDb2RlID09IDggfHwga2V5Q29kZSA9PSA5IHx8IGtleUNvZGUgPT0gMjcgfHwga2V5Q29kZSA9PSAxMTAgfHwga2V5Q29kZSA9PSAxOTAgfHxcbiAgICAgICAgICAoa2V5Q29kZSA9PSA2NSAmJiBjdHJsS2V5ID09PSB0cnVlKSB8fFxuICAgICAgICAgIChrZXlDb2RlID49IDM1ICYmIGtleUNvZGUgPD0gMzkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgoa2V5Q29kZSA8IDQ4IHx8IGtleUNvZGUgPiA1NykgJiYgKGtleUNvZGUgPCA5NiB8fCBrZXlDb2RlID4gMTA1KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgIFxuICAgIHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB1cmwpIHtcbiAgICBpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIG5hbWUgKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxuICAgICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XG4gICAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyY2VQcmljZShwcmljZSkge1xuICAgIHByaWNlID0gcHJpY2UudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gcHJpY2UucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCAnJDEgJyk7XG59XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIEJyZWFkY3J1bWIsXG4gIFNlZ21lbnQsXG4gIEhlYWRlcixcbiAgRm9ybVxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuY29uc3Qgb3B0aW9ucyA9IFtcbiAgeyBrZXk6ICdjb29wZXJhdGlvbicsIHRleHQ6ICdDb29wZXJhdGlvbicsIHZhbHVlOiAnY29vcGVyYXRpb24nIH0sXG5dXG5cbmNvbnN0IGhlYWQgPSAodXJsKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhlbG1ldCBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgPHRpdGxlPlNhdmluZ3NkZWFsejwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIi8+XG4gICAgPC9IZWxtZXQ+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IENvbnRhY3RVc1ZpZXcgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICB7aGVhZChwcm9wcy51cmwpfVxuICAgIDxDb250YWluZXI+XG4gICAgICA8QnJlYWRjcnVtYiBpZD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvblxuICAgICAgICAgIGxpbmtcbiAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICA+XG4gICAgICAgICAgTWFpblxuICAgICAgICA8L0JyZWFkY3J1bWIuU2VjdGlvbj5cbiAgICAgICAgPEJyZWFkY3J1bWIuRGl2aWRlciBpY29uPVwicmlnaHQgY2hldnJvblwiLz5cbiAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvbiBhY3RpdmU+XG4gICAgICAgICAgQ29udGFjdCB1c1xuICAgICAgICA8L0JyZWFkY3J1bWIuU2VjdGlvbj5cbiAgICAgIDwvQnJlYWRjcnVtYj5cblxuICAgICAgPFNlZ21lbnQgaWQ9XCJzaWduaW5CbG9ja1wiPlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgYXM9XCJoMVwiXG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIENvbnRhY3QgdXNcbiAgICAgICAgPC9IZWFkZXI+XG5cbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtLlNlbGVjdFxuICAgICAgICAgICAgbGFiZWw9XCJRdWVzdGlvblwiXG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb25zWzBdLnZhbHVlfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtLlRleHRBcmVhXG4gICAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtLkJ1dHRvblxuICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJTZW50XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXNWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuaW1wb3J0IENvbnRhY3RVc1ZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0VXNWaWV3J1xuXG5pbXBvcnQgeyB2YWxpZGF0ZUVtYWlsIH0gZnJvbSAnLi4vLi4vLi4vaW5jL2luYydcbmltcG9ydCB7IHNlbmRTdXBwb3J0Rm9ybSB9IGZyb20gJy4uLy4uLy4uL2FwaS9zdXBwb3J0J1xuXG5jbGFzcyBDb250YWN0VXNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nICA6IDAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm1WYWx1ZXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiAxXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGF0YSA9IHsuLi50aGlzLnN0YXRlfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBzZW5kU3VwcG9ydEZvcm0oZGF0YSk7XG5cbiAgICAgICAgcmVzdWx0LnRoZW4oXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICB9ID0gcmVzdWx0XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIGFsZXJ0KFwiUmVqZWN0ZWQ6IFwiICsgZXJyb3IpOyAvLyBlcnJvciAtINCw0YDQs9GD0LzQtdC90YIgcmVqZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICB2YWxpZGF0ZUZvcm1WYWx1ZXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZS5zdXBwb3J0O1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZW1haWxfZXJyb3IsXG4gICAgICAgIH0gPSBmYWxzZTtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZUVtYWlsKGVtYWlsKSkge1xuICAgICAgICAgICAgZW1haWxfZXJyb3IgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbWFpbF9lcnJvcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZW1haWxfZXJyb3IgICAgICAgIDogZW1haWxfZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxDb250YWN0VXNWaWV3XG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxuXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17IHRoaXMuaGFuZGxlU3VibWl0IH1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9eyB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlVHlwZT17IHRoaXMuaGFuZGxlQ2hhbmdlVHlwZSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RVc0NvbnRhaW5lclxuIl0sInNvdXJjZVJvb3QiOiIifQ==