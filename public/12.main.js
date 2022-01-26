(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/client/api/order.js":
/*!*********************************!*\
  !*** ./src/client/api/order.js ***!
  \*********************************/
/*! exports provided: getAccountOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountOrders", function() { return getAccountOrders; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function getAccountOrders(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/order/list', {
    method: 'post',
    data: data,
    withCredentials: true
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
}

/***/ }),

/***/ "./src/client/routes/Account/components/AccountView.js":
/*!*************************************************************!*\
  !*** ./src/client/routes/Account/components/AccountView.js ***!
  \*************************************************************/
/*! exports provided: AccountView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountView", function() { return AccountView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");






var head = function head(url) {
  var pageUrl = typeof url !== 'undefined' ? url : '';
  var canonical = 'https://savingsdealz.com' + pageUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], {
    key: Math.random()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Savingsdealz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "robots",
    content: "index, follow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "canonical",
    href: canonical
  }));
};

var AccountView = function AccountView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, head(props.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Breadcrumb"], {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Breadcrumb"].Section, {
    link: true,
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: "/"
  }, "Main"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Breadcrumb"].Divider, {
    icon: "right chevron"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Breadcrumb"].Section, {
    active: true
  }, "Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    id: "accountBlock",
    panes: props.getPanes()
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (AccountView);

/***/ }),

/***/ "./src/client/routes/Account/containers/AccountContainer.js":
/*!******************************************************************!*\
  !*** ./src/client/routes/Account/containers/AccountContainer.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_AccountView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AccountView */ "./src/client/routes/Account/components/AccountView.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/user */ "./src/client/api/user.js");
/* harmony import */ var _api_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/order */ "./src/client/api/order.js");
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








var AccountContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(AccountContainer, _React$Component);

  var _super = _createSuper(AccountContainer);

  function AccountContainer(props) {
    var _this;

    _classCallCheck(this, AccountContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getAccountInfo", function () {
      var result = Object(_api_user__WEBPACK_IMPORTED_MODULE_4__["getAccountInfo"])();
      result.then(function (result) {
        var status = result.status,
            row = result.row;

        if (status) {
          _this.setState({
            accountInfo: row
          });
        }
      }, function (error) {
        alert('Rejected: ' + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getAccountOrders", function () {
      var result = Object(_api_order__WEBPACK_IMPORTED_MODULE_5__["getAccountOrders"])();
      result.then(function (result) {
        var status = result.status,
            rows = result.rows;

        if (status) {
          _this.setState({
            orders: rows
          });
        }
      }, function (error) {
        alert('Rejected: ' + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getPanes", function () {
      var _this$state = _this.state,
          accountInfo = _this$state.accountInfo,
          orders = _this$state.orders;
      return [{
        menuItem: 'Account info',
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
            className: "edit-account-form"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            widths: "equal"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            fluid: true,
            label: "Your email",
            placeholder: "Your email",
            value: accountInfo['email']
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            fluid: true,
            label: "Your password",
            placeholder: "Your password",
            type: "password",
            value: accountInfo['password']
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            widths: "equal",
            className: "edit-account-button"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Button, {
            basic: true,
            fluid: true,
            color: "red",
            content: "Edit"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Button, {
            primary: true,
            fluid: true,
            content: "Save"
          }))));
        }
      }, {
        menuItem: 'Purchase',
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
            id: "purchaseBlock"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
            as: "h1",
            textAlign: "center"
          }, "Your last purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"], {
            basic: true,
            celled: true,
            textAlign: "center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, null, "\u2116"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, null, "Code"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Body, null, Object.keys(orders).map(function (rowKey) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, parseInt(rowKey) + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, orders[rowKey]['item']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, "$", orders[rowKey]['price']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
              closeIcon: true,
              dimmer: "inverted",
              trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                className: "show-coupon"
              }, "Show Code"),
              size: "mini"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
              className: "coupon-modal"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Your code - ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "coupon"
            }, orders[rowKey]['code']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
              text: orders[rowKey]['code']
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
              name: "copy outline"
            }))), orders[rowKey]['link'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Follow this link ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              className: "link",
              target: "_blank",
              href: orders[rowKey]['link']
            }, orders[rowKey]['link']), " to activate your code")))));
          }))));
        }
      }];
    });

    _this.state = {
      loading: 0,
      accountInfo: false,
      orders: false
    };

    _this.getAccountInfo();

    _this.getAccountOrders();

    return _this;
  }

  _createClass(AccountContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AccountView__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.state, {
        getPanes: this.getPanes
      }));
    }
  }]);

  return AccountContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AccountContainer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS9vcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlcy9BY2NvdW50L2NvbXBvbmVudHMvQWNjb3VudFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvQWNjb3VudC9jb250YWluZXJzL0FjY291bnRDb250YWluZXIuanMiXSwibmFtZXMiOlsiZ2V0QWNjb3VudE9yZGVycyIsImRhdGEiLCJheGlvcyIsIm1ldGhvZCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGVhZCIsInVybCIsInBhZ2VVcmwiLCJjYW5vbmljYWwiLCJNYXRoIiwicmFuZG9tIiwiQWNjb3VudFZpZXciLCJwcm9wcyIsIkxpbmsiLCJnZXRQYW5lcyIsIkFjY291bnRDb250YWluZXIiLCJyZXN1bHQiLCJnZXRBY2NvdW50SW5mbyIsInN0YXR1cyIsInJvdyIsInNldFN0YXRlIiwiYWNjb3VudEluZm8iLCJhbGVydCIsInJvd3MiLCJvcmRlcnMiLCJzdGF0ZSIsIm1lbnVJdGVtIiwicmVuZGVyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInJvd0tleSIsInBhcnNlSW50IiwibG9hZGluZyIsIm5leHRQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNBLGdCQUFULENBQTBCQyxJQUExQixFQUFnQztBQUNyQyxTQUFPQyw0Q0FBSyxDQUFDLHlDQUFELEVBQTRDO0FBQ3BEQyxVQUFNLEVBQUUsTUFENEM7QUFFcERGLFFBQUksRUFBRUEsSUFGOEM7QUFHcERHLG1CQUFlLEVBQUU7QUFIbUMsR0FBNUMsQ0FBTCxDQUlGQyxJQUpFLENBSUcsVUFBVUMsUUFBVixFQUFvQjtBQUMxQixXQUFPQSxRQUFRLENBQUNMLElBQWhCO0FB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWNjb3VudE9yZGVycyhkYXRhKSB7XG4gIHJldHVybiBheGlvcygnaHR0cHM6Ly9hcGkuc2F2aW5nc2RlYWx6LmNvbS9vcmRlci9saXN0Jywge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCdcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgQnJlYWRjcnVtYixcbiAgVGFiXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBoZWFkID0gKHVybCkgPT4ge1xuICBjb25zdCBwYWdlVXJsID0gKHR5cGVvZiB1cmwgIT09ICd1bmRlZmluZWQnKSA/IHVybCA6ICcnXG4gIGxldCBjYW5vbmljYWwgPSAnaHR0cHM6Ly9zYXZpbmdzZGVhbHouY29tJyArIHBhZ2VVcmxcbiAgcmV0dXJuIChcbiAgICA8SGVsbWV0IGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICA8dGl0bGU+U2F2aW5nc2RlYWx6PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiLz5cbiAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Nhbm9uaWNhbH0vPlxuICAgIDwvSGVsbWV0PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBBY2NvdW50VmlldyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIHtoZWFkKHByb3BzLnVybCl9XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxCcmVhZGNydW1iIGlkPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uXG4gICAgICAgICAgbGlua1xuICAgICAgICAgIGFzPXtMaW5rfVxuICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgID5cbiAgICAgICAgICBNYWluXG4gICAgICAgIDwvQnJlYWRjcnVtYi5TZWN0aW9uPlxuICAgICAgICA8QnJlYWRjcnVtYi5EaXZpZGVyIGljb249XCJyaWdodCBjaGV2cm9uXCIvPlxuICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uIGFjdGl2ZT5cbiAgICAgICAgICBBY2NvdW50XG4gICAgICAgIDwvQnJlYWRjcnVtYi5TZWN0aW9uPlxuICAgICAgPC9CcmVhZGNydW1iPlxuXG4gICAgICA8VGFiIGlkPVwiYWNjb3VudEJsb2NrXCIgcGFuZXM9e3Byb3BzLmdldFBhbmVzKCl9Lz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCdcblxuaW1wb3J0IHtcbiAgRm9ybSxcbiAgVGFiLFxuICBIZWFkZXIsXG4gIFRhYmxlLFxuICBNb2RhbCxcbiAgSWNvblxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IEFjY291bnRWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvQWNjb3VudFZpZXcnXG5cbmltcG9ydCB7XG4gIGdldEFjY291bnRJbmZvXG59IGZyb20gJy4uLy4uLy4uL2FwaS91c2VyJ1xuXG5pbXBvcnQge1xuICBnZXRBY2NvdW50T3JkZXJzXG59IGZyb20gJy4uLy4uLy4uL2FwaS9vcmRlcidcblxuY2xhc3MgQWNjb3VudENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IDAsXG4gICAgICBhY2NvdW50SW5mbzogZmFsc2UsXG4gICAgICBvcmRlcnM6IGZhbHNlLFxuICAgIH1cblxuICAgIHRoaXMuZ2V0QWNjb3VudEluZm8oKVxuICAgIHRoaXMuZ2V0QWNjb3VudE9yZGVycygpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMpIHtcbiAgfVxuXG4gIGdldEFjY291bnRJbmZvID0gKCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBnZXRBY2NvdW50SW5mbygpXG5cbiAgICByZXN1bHQudGhlbihcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgIHJvdyxcbiAgICAgICAgfSA9IHJlc3VsdFxuICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY2NvdW50SW5mbzogcm93LFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIGFsZXJ0KCdSZWplY3RlZDogJyArIGVycm9yKSAvLyBlcnJvciAtINCw0YDQs9GD0LzQtdC90YIgcmVqZWN0XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgZ2V0QWNjb3VudE9yZGVycyA9ICgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gZ2V0QWNjb3VudE9yZGVycygpXG5cbiAgICByZXN1bHQudGhlbihcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgIHJvd3MsXG4gICAgICAgIH0gPSByZXN1bHRcbiAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3JkZXJzOiByb3dzLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIGFsZXJ0KCdSZWplY3RlZDogJyArIGVycm9yKSAvLyBlcnJvciAtINCw0YDQs9GD0LzQtdC90YIgcmVqZWN0XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgZ2V0UGFuZXMgPSAoKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIGFjY291bnRJbmZvLFxuICAgICAgb3JkZXJzXG4gICAgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBtZW51SXRlbTogJ0FjY291bnQgaW5mbycsXG4gICAgICAgIHJlbmRlcjogKCkgPT4gKFxuICAgICAgICAgIDxUYWIuUGFuZT5cbiAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImVkaXQtYWNjb3VudC1mb3JtXCI+XG4gICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XG4gICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50SW5mb1snZW1haWwnXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjY291bnRJbmZvWydwYXNzd29yZCddfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIiBjbGFzc05hbWU9XCJlZGl0LWFjY291bnQtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPEZvcm0uQnV0dG9uXG4gICAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJFZGl0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvblxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJTYXZlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPC9UYWIuUGFuZT5cbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWVudUl0ZW06ICdQdXJjaGFzZScsXG4gICAgICAgIHJlbmRlcjogKCkgPT4gKFxuICAgICAgICAgIDxUYWIuUGFuZSBpZD1cInB1cmNoYXNlQmxvY2tcIj5cbiAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgYXM9XCJoMVwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFlvdXIgbGFzdCBwdXJjaGFzZVxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgYmFzaWNcbiAgICAgICAgICAgICAgY2VsbGVkXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPuKEljwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPkl0ZW08L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5QcmljZTwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPkNvZGU8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxuXG4gICAgICAgICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhvcmRlcnMpLm1hcCgocm93S2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VJbnQocm93S2V5KSArIDF9XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAge29yZGVyc1tyb3dLZXldWydpdGVtJ119XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgJHtvcmRlcnNbcm93S2V5XVsncHJpY2UnXX1cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGltbWVyPVwiaW52ZXJ0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17PGEgY2xhc3NOYW1lPVwic2hvdy1jb3Vwb25cIj5TaG93IENvZGU8L2E+fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1pbmlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50IGNsYXNzTmFtZT1cImNvdXBvbi1tb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGNvZGUgLSA8c3BhbiBjbGFzc05hbWU9XCJjb3Vwb25cIj57b3JkZXJzW3Jvd0tleV1bJ2NvZGUnXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17b3JkZXJzW3Jvd0tleV1bJ2NvZGUnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29weSBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyhvcmRlcnNbcm93S2V5XVsnbGluayddKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb2xsb3cgdGhpcyBsaW5rIDxhIGNsYXNzTmFtZT1cImxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtvcmRlcnNbcm93S2V5XVsnbGluayddfT57b3JkZXJzW3Jvd0tleV1bJ2xpbmsnXX08L2E+IHRvIGFjdGl2YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3VyIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8L1RhYi5QYW5lPlxuICAgICAgICApXG4gICAgICB9LFxuICAgIF1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDxBY2NvdW50Vmlld1xuICAgICAgey4uLnRoaXMuc3RhdGV9XG4gICAgICBnZXRQYW5lcz17dGhpcy5nZXRQYW5lc31cbiAgICAvPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRDb250YWluZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=