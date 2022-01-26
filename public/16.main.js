(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ "./src/client/routes/Signin/components/SigninView.js":
/*!***********************************************************!*\
  !*** ./src/client/routes/Signin/components/SigninView.js ***!
  \***********************************************************/
/*! exports provided: SigninView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninView", function() { return SigninView; });
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

var SigninView = function SigninView(props) {
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
  }, "Sign In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    id: "signinBlock",
    loading: !props.loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h1",
    textAlign: "center"
  }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: props.handleSubmit,
    error: props.error
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Button, {
    primary: true,
    fluid: true,
    content: "Sign In"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Button, {
    basic: true,
    fluid: true,
    color: "red",
    content: "Create your account"
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (SigninView);

/***/ }),

/***/ "./src/client/routes/Signin/containers/SigninContainer.js":
/*!****************************************************************!*\
  !*** ./src/client/routes/Signin/containers/SigninContainer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_SigninView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SigninView */ "./src/client/routes/Signin/components/SigninView.js");
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

var SigninContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(SigninContainer, _React$Component);

  var _super = _createSuper(SigninContainer);

  function SigninContainer(props) {
    var _this;

    _classCallCheck(this, SigninContainer);

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

      var result = Object(_api_user__WEBPACK_IMPORTED_MODULE_5__["sendSignIn"])(data);
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

  _createClass(SigninContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SigninView__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.state, {
        handleSubmit: this.handleSubmit,
        handleInputChange: this.handleInputChange
      }));
    }
  }]);

  return SigninContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(SigninContainer)));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luYy9pbmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvU2lnbmluL2NvbXBvbmVudHMvU2lnbmluVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlcy9TaWduaW4vY29udGFpbmVycy9TaWduaW5Db250YWluZXIuanMiXSwibmFtZXMiOlsiY2xvbmVPYmplY3QiLCJvYmplY3QiLCJuZXdPYmplY3QiLCJrZXkiLCJjaGVja051bWJlcklucHV0Iiwia2V5Q29kZSIsImN0cmxLZXkiLCJ2YWxpZGF0ZUVtYWlsIiwiZW1haWwiLCJyZSIsInRlc3QiLCJnZXRQYXJhbWV0ZXJCeU5hbWUiLCJuYW1lIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJjZVByaWNlIiwicHJpY2UiLCJ0b1N0cmluZyIsImhlYWQiLCJNYXRoIiwicmFuZG9tIiwiU2lnbmluVmlldyIsInByb3BzIiwiTGluayIsImxvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJlcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZW1haWxfZXJyb3IiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJmZXRjaFVzZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImdldFVzZXIiLCJTaWduaW5Db250YWluZXIiLCJzdGF0ZSIsInBhc3N3b3JkIiwic2V0U3RhdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGVGb3JtVmFsdWVzIiwiZGF0YSIsInJlc3VsdCIsInNlbmRTaWduSW4iLCJ0aGVuIiwic3RhdHVzIiwidXNlciIsInBhcnNlSW50IiwiaGlzdG9yeSIsInB1c2giLCJhbGVydCIsImUiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFJvdXRlciIsImNvbm5l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QkksVUFBQUEsS0FBSyxFQUFJO0FBQ1B3QixhQUFLLENBQUMsZUFBZXhCLEtBQWhCLENBQUwsQ0FETyxDQUNzQjtBQUM5QixPQXBCTDtBQXVCSCxLQXJFa0I7O0FBQUEsd0VBdUVDLFVBQUN5QixDQUFELFFBQXdCO0FBQUEsVUFBbEIvQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxVQUFaZ0QsS0FBWSxRQUFaQSxLQUFZOztBQUN4QyxVQUFJaEQsSUFBSSxJQUFJLE9BQVIsSUFBbUIsTUFBSytCLEtBQUwsQ0FBVyxhQUFYLENBQXZCLEVBQWtEO0FBQzlDLFlBQUlwQyw4REFBYSxDQUFDcUQsS0FBRCxDQUFqQixFQUEwQjtBQUFBOztBQUN0QixnQkFBS2YsUUFBTCx1REFDS2pDLElBREwsRUFDc0JnRCxLQUR0QixtQ0FFSyxhQUZMLEVBRXNCLEtBRnRCOztBQUlBO0FBQ0g7QUFDSjs7QUFFRCxZQUFLZixRQUFMLHFCQUNLakMsSUFETCxFQUNZZ0QsS0FEWjtBQUdILEtBckZrQjs7QUFHZixVQUFLakIsS0FBTCxHQUFhO0FBQ1RYLGFBQU8sRUFBSyxDQURIO0FBRVRFLFdBQUssRUFBRTtBQUZFLEtBQWI7QUFIZTtBQU9sQjs7OztXQWdGRCxrQkFBUztBQUNMLDBCQUFPLDJEQUFDLDhEQUFELGVBQ1MsS0FBS1MsS0FEZDtBQUVLLG9CQUFZLEVBQUcsS0FBS1YsWUFGekI7QUFHSyx5QkFBaUIsRUFBRyxLQUFLRTtBQUg5QixTQUFQO0FBS0g7Ozs7RUE5RnlCMEIsNENBQUssQ0FBQ0MsUzs7QUFpR3JCQyxrSUFBVSxDQUFDQywyREFBTyxDQUFDekIsZUFBRCxFQUFrQkYsa0JBQWxCLENBQVAsQ0FBNkNLLGVBQTdDLENBQUQsQ0FBekIsRSIsImZpbGUiOiIxNi5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KG9iamVjdCkge1xuICAgIGxldCBuZXdPYmplY3QgPSB7fVxuICAgIFxuICAgIGZvcihsZXQga2V5IGluIG9iamVjdCkge1xuICAgICAgICBuZXdPYmplY3Rba2V5XSA9IG9iamVjdFtrZXldXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBuZXdPYmplY3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTnVtYmVySW5wdXQoa2V5Q29kZSkge1xuICAgIGlmIChrZXlDb2RlID09IDQ2IHx8IGtleUNvZGUgPT0gOCB8fCBrZXlDb2RlID09IDkgfHwga2V5Q29kZSA9PSAyNyB8fCBrZXlDb2RlID09IDExMCB8fCBrZXlDb2RlID09IDE5MCB8fFxuICAgICAgICAgIChrZXlDb2RlID09IDY1ICYmIGN0cmxLZXkgPT09IHRydWUpIHx8XG4gICAgICAgICAgKGtleUNvZGUgPj0gMzUgJiYga2V5Q29kZSA8PSAzOSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChrZXlDb2RlIDwgNDggfHwga2V5Q29kZSA+IDU3KSAmJiAoa2V5Q29kZSA8IDk2IHx8IGtleUNvZGUgPiAxMDUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XG4gICAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgXG4gICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHVybCkge1xuICAgIGlmICghdXJsKSB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXG4gICAgICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XG4gICAgaWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJjZVByaWNlKHByaWNlKSB7XG4gICAgcHJpY2UgPSBwcmljZS50b1N0cmluZygpO1xuICAgIHJldHVybiBwcmljZS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyhbXlxcZF18JCkpL2csICckMSAnKTtcbn1cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCdcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgU2VnbWVudCxcbiAgRm9ybSxcbiAgSGVhZGVyLFxuICBCcmVhZGNydW1iLFxuICBQb3B1cCxcbiAgTWVzc2FnZVxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuY29uc3QgaGVhZCA9ICh1cmwpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SGVsbWV0IGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICA8dGl0bGU+U2F2aW5nc2RlYWx6PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleCwgbm9mb2xsb3dcIi8+XG4gICAgPC9IZWxtZXQ+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IFNpZ25pblZpZXcgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAge2hlYWQocHJvcHMudXJsKX1cbiAgICAgIDxCcmVhZGNydW1iIGlkPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uXG4gICAgICAgICAgbGlua1xuICAgICAgICAgIGFzPXtMaW5rfVxuICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgID5cbiAgICAgICAgICBNYWluXG4gICAgICAgIDwvQnJlYWRjcnVtYi5TZWN0aW9uPlxuICAgICAgICA8QnJlYWRjcnVtYi5EaXZpZGVyIGljb249XCJyaWdodCBjaGV2cm9uXCIvPlxuICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uIGFjdGl2ZT5cbiAgICAgICAgICBTaWduIEluXG4gICAgICAgIDwvQnJlYWRjcnVtYi5TZWN0aW9uPlxuICAgICAgPC9CcmVhZGNydW1iPlxuXG4gICAgICA8U2VnbWVudCBpZD1cInNpZ25pbkJsb2NrXCIgbG9hZGluZz17IXByb3BzLmxvYWRpbmd9PlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgYXM9XCJoMVwiXG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgPC9IZWFkZXI+XG5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3Byb3BzLmhhbmRsZVN1Ym1pdH0gZXJyb3I9e3Byb3BzLmVycm9yfT5cbiAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICBlcnJvcj17cHJvcHMuZW1haWxfZXJyb3IgPT09IHRydWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZW50PVwiRW1haWwgYWRkcmVzcyBpcyBub3QgdmFsaWRcIlxuICAgICAgICAgICAgb3Blbj17cHJvcHMuZW1haWxfZXJyb3IgPT09IHRydWV9XG4gICAgICAgICAgICBwb3NpdGlvbj1cImxlZnQgY2VudGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtwcm9wcy5lcnJvciAmJiAoXG4gICAgICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgICBoZWFkZXI9e3Byb3BzLmVycm9yWydoZWFkZXInXX1cbiAgICAgICAgICAgICAgY29udGVudD17cHJvcHMuZXJyb3JbJ2NvbnRlbnQnXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Rm9ybS5CdXR0b25cbiAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICBjb250ZW50PVwiU2lnbiBJblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89XCIvcmVnaXN0ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb3JtLkJ1dHRvblxuICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgeW91ciBhY2NvdW50XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTaWduaW5WaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBTaWduaW5WaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvU2lnbmluVmlldydcblxuaW1wb3J0IHtcbiAgICB3aXRoUm91dGVyXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7IHZhbGlkYXRlRW1haWwgfSBmcm9tICcuLi8uLi8uLi9pbmMvaW5jJ1xuXG5pbXBvcnQgeyBzZW5kU2lnbkluIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3VzZXInXG5cbmltcG9ydCB7IGZldGNoVXNlciB9ICBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dldFVzZXInXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgICBmZXRjaFVzZXJcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xuICAgIGdldFVzZXIgIDogc3RvcmUuZ2V0VXNlcixcbn0pXG5cbmNsYXNzIFNpZ25pbkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmcgICA6IDEsXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZUZvcm1WYWx1ZXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBlbWFpbF9lcnJvcixcbiAgICAgICAgfSA9IGZhbHNlO1xuICAgICAgICBpZiAoIXZhbGlkYXRlRW1haWwoZW1haWwpKSB7XG4gICAgICAgICAgICBlbWFpbF9lcnJvciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVtYWlsX2Vycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlbWFpbF9lcnJvciAgICAgICAgOiBlbWFpbF9lcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybVZhbHVlcygpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IDAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBkYXRhID0gey4uLnRoaXMuc3RhdGV9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHNlbmRTaWduSW4oZGF0YSk7XG5cbiAgICAgICAgcmVzdWx0LnRoZW4oXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgdXNlcixcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICB9ID0gcmVzdWx0XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFVzZXIodXNlcilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9hY2NvdW50JylcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIGFsZXJ0KFwiUmVqZWN0ZWQ6IFwiICsgZXJyb3IpOyAvLyBlcnJvciAtINCw0YDQs9GD0LzQtdC90YIgcmVqZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dENoYW5nZSA9IChlLCB7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgaWYgKG5hbWUgPT0gJ2VtYWlsJyAmJiB0aGlzLnN0YXRlWydlbWFpbF9lcnJvciddKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGVFbWFpbCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgW25hbWVdICAgICAgICAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIFsnZW1haWxfZXJyb3InXSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxTaWduaW5WaWV3XG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9eyB0aGlzLmhhbmRsZVN1Ym1pdCB9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlPXsgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lnbmluQ29udGFpbmVyKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=