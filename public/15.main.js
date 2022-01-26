(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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

/***/ "./src/client/routes/Register/components/RegisterView.js":
/*!***************************************************************!*\
  !*** ./src/client/routes/Register/components/RegisterView.js ***!
  \***************************************************************/
/*! exports provided: RegisterView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterView", function() { return RegisterView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");





var head = function head(url) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    key: Math.random()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "robots",
    content: "noindex, nofollow"
  }));
};

var RegisterView = function RegisterView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], null, head(props.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"], {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"].Section, {
    link: true,
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/"
  }, "Main"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"].Divider, {
    icon: "right chevron"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"].Section, {
    active: true
  }, "Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    id: "registerBlock",
    loading: !props.loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h1",
    textAlign: "center"
  }, "Register for an Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: props.handleSubmit,
    error: props.error
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
    trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
      fluid: true,
      name: "email",
      label: "Email",
      placeholder: "Email",
      required: true,
      onChange: props.handleInputChange,
      error: props.email_error === true
    }),
    content: "Email address is not valid",
    open: props.email_error === true,
    position: "left center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    name: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
    required: true,
    onChange: props.handleInputChange
  }), props.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
    error: true,
    header: props.error['header'],
    content: props.error['content']
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "registerButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Button, {
    primary: true,
    content: "Register"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/signin"
  }, "Already have an account? Sign in"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (RegisterView);

/***/ }),

/***/ "./src/client/routes/Register/containers/RegisterContainer.js":
/*!********************************************************************!*\
  !*** ./src/client/routes/Register/containers/RegisterContainer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_RegisterView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RegisterView */ "./src/client/routes/Register/components/RegisterView.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _inc_inc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../inc/inc */ "./src/client/inc/inc.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/user */ "./src/client/api/user.js");
/* harmony import */ var _actions_getUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/getUser */ "./src/client/actions/getUser.js");
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








var mapDispatchToProps = {
  fetchUser: _actions_getUser__WEBPACK_IMPORTED_MODULE_6__["fetchUser"]
};

var mapStateToProps = function mapStateToProps(store) {
  return {
    getUser: store.getUser
  };
};

var RegisterContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(RegisterContainer, _React$Component);

  var _super = _createSuper(RegisterContainer);

  function RegisterContainer(props) {
    var _this;

    _classCallCheck(this, RegisterContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "validateFormValues", function () {
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;
      var _false = false,
          email_error = _false.email_error;

      if (!Object(_inc_inc__WEBPACK_IMPORTED_MODULE_4__["validateEmail"])(email)) {
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

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      event.preventDefault();

      if (!_this.validateFormValues()) {
        return false;
      }

      _this.setState({
        loading: 0
      });

      var data = _objectSpread({}, _this.state);

      var result = Object(_api_user__WEBPACK_IMPORTED_MODULE_5__["sendRegister"])(data);
      result.then(function (result) {
        var status = result.status,
            user = result.user,
            error = result.error;

        if (parseInt(status)) {
          _this.props.fetchUser(user);

          _this.props.history.push('/account');
        } else {
          _this.setState({
            loading: 1,
            error: error
          });
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e, _ref) {
      var name = _ref.name,
          value = _ref.value;

      if (name == 'email' && _this.state['email_error']) {
        if (Object(_inc_inc__WEBPACK_IMPORTED_MODULE_4__["validateEmail"])(value)) {
          var _this$setState;

          _this.setState((_this$setState = {}, _defineProperty(_this$setState, name, value), _defineProperty(_this$setState, 'email_error', false), _this$setState));

          return;
        }
      }

      _this.setState(_defineProperty({}, name, value));
    });

    _this.state = {
      loading: 1,
      error: false
    };
    return _this;
  }

  _createClass(RegisterContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RegisterView__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.state, {
        handleSubmit: this.handleSubmit,
        handleInputChange: this.handleInputChange
      }));
    }
  }]);

  return RegisterContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(RegisterContainer)));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luYy9pbmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvUmVnaXN0ZXIvY29tcG9uZW50cy9SZWdpc3RlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvUmVnaXN0ZXIvY29udGFpbmVycy9SZWdpc3RlckNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJjbG9uZU9iamVjdCIsIm9iamVjdCIsIm5ld09iamVjdCIsImtleSIsImNoZWNrTnVtYmVySW5wdXQiLCJrZXlDb2RlIiwiY3RybEtleSIsInZhbGlkYXRlRW1haWwiLCJlbWFpbCIsInJlIiwidGVzdCIsImdldFBhcmFtZXRlckJ5TmFtZSIsIm5hbWUiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmNlUHJpY2UiLCJwcmljZSIsInRvU3RyaW5nIiwiaGVhZCIsIk1hdGgiLCJyYW5kb20iLCJSZWdpc3RlclZpZXciLCJwcm9wcyIsIkxpbmsiLCJsb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImVtYWlsX2Vycm9yIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZmV0Y2hVc2VyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJnZXRVc2VyIiwiUmVnaXN0ZXJDb250YWluZXIiLCJzdGF0ZSIsInBhc3N3b3JkIiwic2V0U3RhdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGVGb3JtVmFsdWVzIiwiZGF0YSIsInJlc3VsdCIsInNlbmRSZWdpc3RlciIsInRoZW4iLCJzdGF0dXMiLCJ1c2VyIiwicGFyc2VJbnQiLCJoaXN0b3J5IiwicHVzaCIsImFsZXJ0IiwiZSIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRo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STtBQUNQd0IsYUFBSyxDQUFDLGVBQWV4QixLQUFoQixDQUFMLENBRE8sQ0FDc0I7QUFDOUIsT0FwQkw7QUF1QkgsS0FyRWtCOztBQUFBLHdFQXVFQyxVQUFDeUIsQ0FBRCxRQUF3QjtBQUFBLFVBQWxCL0MsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsVUFBWmdELEtBQVksUUFBWkEsS0FBWTs7QUFDeEMsVUFBSWhELElBQUksSUFBSSxPQUFSLElBQW1CLE1BQUsrQixLQUFMLENBQVcsYUFBWCxDQUF2QixFQUFrRDtBQUM5QyxZQUFJcEMsOERBQWEsQ0FBQ3FELEtBQUQsQ0FBakIsRUFBMEI7QUFBQTs7QUFDdEIsZ0JBQUtmLFFBQUwsdURBQ0tqQyxJQURMLEVBQ3NCZ0QsS0FEdEIsbUNBRUssYUFGTCxFQUVzQixLQUZ0Qjs7QUFJQTtBQUNIO0FBQ0o7O0FBRUQsWUFBS2YsUUFBTCxxQkFDS2pDLElBREwsRUFDWWdELEtBRFo7QUFHSCxLQXJGa0I7O0FBR2YsVUFBS2pCLEtBQUwsR0FBYTtBQUNUWCxhQUFPLEVBQUssQ0FESDtBQUVURSxXQUFLLEVBQUU7QUFGRSxLQUFiO0FBSGU7QUFPbEI7Ozs7V0FnRkQsa0JBQVM7QUFDTCwwQkFBTywyREFBQyxnRUFBRCxlQUNTLEtBQUtTLEtBRGQ7QUFFSyxvQkFBWSxFQUFHLEtBQUtWLFlBRnpCO0FBR0sseUJBQWlCLEVBQUcsS0FBS0U7QUFIOUIsU0FBUDtBQUtIOzs7O0VBOUYyQjBCLDRDQUFLLENBQUNDLFM7O0FBaUd2QkMsa0lBQVUsQ0FBQ0MsMkRBQU8sQ0FBQ3pCLGVBQUQsRUFBa0JGLGtCQUFsQixDQUFQLENBQTZDSyxpQkFBN0MsQ0FBRCxDQUF6QixFIiwiZmlsZSI6IjE1Lm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gICAgbGV0IG5ld09iamVjdCA9IHt9XG4gICAgXG4gICAgZm9yKGxldCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgIG5ld09iamVjdFtrZXldID0gb2JqZWN0W2tleV1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG5ld09iamVjdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOdW1iZXJJbnB1dChrZXlDb2RlKSB7XG4gICAgaWYgKGtleUNvZGUgPT0gNDYgfHwga2V5Q29kZSA9PSA4IHx8IGtleUNvZGUgPT0gOSB8fCBrZXlDb2RlID09IDI3IHx8IGtleUNvZGUgPT0gMTEwIHx8IGtleUNvZGUgPT0gMTkwIHx8XG4gICAgICAgICAgKGtleUNvZGUgPT0gNjUgJiYgY3RybEtleSA9PT0gdHJ1ZSkgfHxcbiAgICAgICAgICAoa2V5Q29kZSA+PSAzNSAmJiBrZXlDb2RlIDw9IDM5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKGtleUNvZGUgPCA0OCB8fCBrZXlDb2RlID4gNTcpICYmIChrZXlDb2RlIDwgOTYgfHwga2V5Q29kZSA+IDEwNSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcbiAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICBcbiAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSwgdXJsKSB7XG4gICAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcbiAgICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcbiAgICBpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xuICAgIGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmNlUHJpY2UocHJpY2UpIHtcbiAgICBwcmljZSA9IHByaWNlLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHByaWNlLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKFteXFxkXXwkKSkvZywgJyQxICcpO1xufVxuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0J1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBGb3JtLFxuICBIZWFkZXIsXG4gIFNlZ21lbnQsXG4gIEJyZWFkY3J1bWIsXG4gIFBvcHVwLFxuICBNZXNzYWdlXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBoZWFkID0gKHVybCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIZWxtZXQga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgIDx0aXRsZT5SZWdpc3RlcjwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXgsIG5vZm9sbG93XCIvPlxuICAgIDwvSGVsbWV0PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBSZWdpc3RlclZpZXcgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAge2hlYWQocHJvcHMudXJsKX1cbiAgICAgIDxCcmVhZGNydW1iIGlkPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uXG4gICAgICAgICAgbGlua1xuICAgICAgICAgIGFzPXtMaW5rfVxuICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgID5cbiAgICAgICAgICBNYWluXG4gICAgICAgIDwvQnJlYWRjcnVtYi5TZWN0aW9uPlxuICAgICAgICA8QnJlYWRjcnVtYi5EaXZpZGVyIGljb249XCJyaWdodCBjaGV2cm9uXCIvPlxuICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uIGFjdGl2ZT5cbiAgICAgICAgICBSZWdpc3RlclxuICAgICAgICA8L0JyZWFkY3J1bWIuU2VjdGlvbj5cbiAgICAgIDwvQnJlYWRjcnVtYj5cblxuICAgICAgPFNlZ21lbnQgaWQ9XCJyZWdpc3RlckJsb2NrXCIgbG9hZGluZz17IXByb3BzLmxvYWRpbmd9PlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgYXM9XCJoMVwiXG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFJlZ2lzdGVyIGZvciBhbiBBY2NvdW50XG4gICAgICAgIDwvSGVhZGVyPlxuXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtwcm9wcy5oYW5kbGVTdWJtaXR9IGVycm9yPXtwcm9wcy5lcnJvcn0+XG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cbiAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXtwcm9wcy5lbWFpbF9lcnJvciA9PT0gdHJ1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJFbWFpbCBhZGRyZXNzIGlzIG5vdCB2YWxpZFwiXG4gICAgICAgICAgICAgIG9wZW49e3Byb3BzLmVtYWlsX2Vycm9yID09PSB0cnVlfVxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImxlZnQgY2VudGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7cHJvcHMuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtwcm9wcy5lcnJvclsnaGVhZGVyJ119XG4gICAgICAgICAgICAgICAgY29udGVudD17cHJvcHMuZXJyb3JbJ2NvbnRlbnQnXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgIDxkaXYgaWQ9XCJyZWdpc3RlckJ1dHRvblwiPlxuICAgICAgICAgICAgPEZvcm0uQnV0dG9uXG4gICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgY29udGVudD1cIlJlZ2lzdGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi9zaWduaW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gU2lnbiBpblxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IFJlZ2lzdGVyVmlldyBmcm9tICcuLi9jb21wb25lbnRzL1JlZ2lzdGVyVmlldydcblxuaW1wb3J0IHtcbiAgICB3aXRoUm91dGVyXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7IHZhbGlkYXRlRW1haWwgfSBmcm9tICcuLi8uLi8uLi9pbmMvaW5jJ1xuXG5pbXBvcnQgeyBzZW5kUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi9hcGkvdXNlcidcblxuaW1wb3J0IHsgZmV0Y2hVc2VyIH0gIGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2V0VXNlcidcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICAgIGZldGNoVXNlclxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XG4gICAgZ2V0VXNlciAgOiBzdG9yZS5nZXRVc2VyLFxufSlcblxuY2xhc3MgUmVnaXN0ZXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nICAgOiAxLFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVGb3JtVmFsdWVzID0gKCkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZW1haWxfZXJyb3IsXG4gICAgICAgIH0gPSBmYWxzZTtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZUVtYWlsKGVtYWlsKSkge1xuICAgICAgICAgICAgZW1haWxfZXJyb3IgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbWFpbF9lcnJvcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZW1haWxfZXJyb3IgICAgICAgIDogZW1haWxfZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm1WYWx1ZXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiAwLFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZGF0YSA9IHsuLi50aGlzLnN0YXRlfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBzZW5kUmVnaXN0ZXIoZGF0YSk7XG5cbiAgICAgICAgcmVzdWx0LnRoZW4oXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgdXNlcixcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICB9ID0gcmVzdWx0XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFVzZXIodXNlcilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9hY2NvdW50JylcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIGFsZXJ0KFwiUmVqZWN0ZWQ6IFwiICsgZXJyb3IpOyAvLyBlcnJvciAtINCw0YDQs9GD0LzQtdC90YIgcmVqZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dENoYW5nZSA9IChlLCB7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgaWYgKG5hbWUgPT0gJ2VtYWlsJyAmJiB0aGlzLnN0YXRlWydlbWFpbF9lcnJvciddKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGVFbWFpbCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgW25hbWVdICAgICAgICAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIFsnZW1haWxfZXJyb3InXSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxSZWdpc3RlclZpZXdcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17IHRoaXMuaGFuZGxlU3VibWl0IH1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9eyB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShSZWdpc3RlckNvbnRhaW5lcikpXG4iXSwic291cmNlUm9vdCI6IiJ9