(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./src/client/api/vendor.js":
/*!**********************************!*\
  !*** ./src/client/api/vendor.js ***!
  \**********************************/
/*! exports provided: getVendorInfo, getVendorsList, getCompareVendorsInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorInfo", function() { return getVendorInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorsList", function() { return getVendorsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompareVendorsInfo", function() { return getCompareVendorsInfo; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function getVendorInfo(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/vendor/info', {
    method: "post",
    data: data,
    withCredentials: true
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
}
function getVendorsList(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/vendor/list', {
    method: "post",
    data: data,
    withCredentials: true
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
}
function getCompareVendorsInfo(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/vendor/compare/info', {
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

/***/ "./src/client/routes/CompareVendors/components/CompareVendorsView.js":
/*!***************************************************************************!*\
  !*** ./src/client/routes/CompareVendors/components/CompareVendorsView.js ***!
  \***************************************************************************/
/*! exports provided: CompareVendorsView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareVendorsView", function() { return CompareVendorsView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");





var head = function head(url) {
  var pageUrl = typeof url !== 'undefined' ? url : '';
  var canonical = "https://savingsdealz.com" + pageUrl;
  console.log(canonical);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    key: Math.random()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "2022 s vpn Compare tool free and Good"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "robots",
    content: "index, follow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "canonical",
    href: canonical
  }));
};

var CompareVendorsView = function CompareVendorsView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, head(props.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"], {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"].Section, {
    link: true,
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/"
  }, "Main"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"].Divider, {
    icon: "right chevron"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"].Section, {
    link: true,
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/compare"
  }, "Compare"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"].Divider, {
    icon: "right chevron"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"].Section, {
    active: true
  }, "Compare ", props.vendors.join(' with '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    id: "compareVendorBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    basic: "very",
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Body, null, Object.keys(props.compareInfo).map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, {
      width: 3,
      textAlign: "left"
    }, props.compareInfo[key]['title']), Object.keys(props.compareInfo[key]['cells']).map(function (k) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, {
        width: 5
      }, props.getTableCell(props.compareInfo[key]['type'], props.compareInfo[key]['cells'][k]));
    }));
  })))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (CompareVendorsView);

/***/ }),

/***/ "./src/client/routes/CompareVendors/containers/CompareVendorsContainer.js":
/*!********************************************************************************!*\
  !*** ./src/client/routes/CompareVendors/containers/CompareVendorsContainer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_CompareVendorsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CompareVendorsView */ "./src/client/routes/CompareVendors/components/CompareVendorsView.js");
/* harmony import */ var _api_vendor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/vendor */ "./src/client/api/vendor.js");
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






var CompareVendorsContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(CompareVendorsContainer, _React$Component);

  var _super = _createSuper(CompareVendorsContainer);

  function CompareVendorsContainer(props) {
    var _this;

    _classCallCheck(this, CompareVendorsContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "parseType", function (vendorsStr) {
      var str = vendorsStr.replace('compare-', '');
      var arr = str.split('-with-');
      return arr;
    });

    _defineProperty(_assertThisInitialized(_this), "getCompareVendorsInfo", function () {
      var vendors = _this.state.vendors;
      var result = Object(_api_vendor__WEBPACK_IMPORTED_MODULE_3__["getCompareVendorsInfo"])(vendors);
      result.then(function (result) {
        var status = result.status,
            info = result.info,
            rows = result.rows;

        if (status) {
          _this.setState({
            info: info,
            compareInfo: rows
          });
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getTableCell", function (type, cell) {
      switch (type) {
        case 'image':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: cell
          });
          break;

        case 'text':
          return cell;
          break;

        case 'checkbox':
          if (parseInt(cell)) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
              src: "/images/check.png"
            });
          } else {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
              src: "/images/cancel.png"
            });
          }

          break;

        case 'dropdown':
          var countries = [];
          var i = 1;

          for (var k in cell) {
            countries.push(cell[i]);
            i++;

            if (i >= 8) {
              break;
            }
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, countries.join(', '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
            trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "more-button"
            }, "more"),
            size: "mini",
            dimmer: "inverted",
            className: "modal-countries",
            closeIcon: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, {
            image: true,
            scrolling: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Description, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], null, "All countries"), Object.keys(cell).map(function (key) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, cell[key]);
          })))));
          break;
      }
    });

    var _vendorsStr = props.match.params.vendors;

    var _vendors = _this.parseType(_vendorsStr);

    _this.state = {
      loading: 0,
      vendors: _vendors,
      info: false,
      compareInfo: false
    };

    _this.getCompareVendorsInfo();

    return _this;
  }

  _createClass(CompareVendorsContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CompareVendorsView__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.state, {
        getTableCell: this.getTableCell
      }));
    }
  }]);

  return CompareVendorsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CompareVendorsContainer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS92ZW5kb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvQ29tcGFyZVZlbmRvcnMvY29tcG9uZW50cy9Db21wYXJlVmVuZG9yc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvQ29tcGFyZVZlbmRvcnMvY29udGFpbmVycy9Db21wYXJlVmVuZG9yc0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJnZXRWZW5kb3JJbmZvIiwiZGF0YSIsImF4aW9zIiwibWV0aG9kIiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRWZW5kb3JzTGlzdCIsImdldENvbXBhcmVWZW5kb3JzSW5mbyIsImhlYWQiLCJ1cmwiLCJwYWdlVXJsIiwiY2Fub25pY2FsIiwiTWF0aCIsInJhbmRvbSIsIkNvbXBhcmVWZW5kb3JzVmlldyIsInByb3BzIiwiTGluayIsInZlbmRvcnMiLCJqb2luIiwiT2JqZWN0Iiwia2V5cyIsImNvbXBhcmVJbmZvIiwibWFwIiwia2V5IiwiayIsImdldFRhYmxlQ2VsbCIsIkNvbXBhcmVWZW5kb3JzQ29udGFpbmVyIiwidmVuZG9yc1N0ciIsInN0ciIsInJlcGxhY2UiLCJhcnIiLCJzcGxpdCIsInN0YXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiaW5mbyIsInJvd3MiLCJzZXRTdGF0ZSIsImFsZXJ0IiwidHlwZSIsImNlbGwiLCJwYXJzZUludCIsImNvdW50cmllcyIsImkiLCJwdXNoIiwibWF0Y2giLCJwYXJhbXMiLCJwYXJzZVR5cGUiLCJsb2FkaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNBLGFBQVQsQ0FBdUJDLElBQXZCLEVBQTZCO0FBQ2xDLFNBQU9DLDRDQUFL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R0FBRDtBQUFBLGdDQUNuQixzRUFBS2lCLElBQUksQ0FBQ2pCLEdBQUQsQ0FBVCxDQURtQjtBQUFBLFdBQXRCLENBRkwsQ0FESixDQVBKLENBRkosQ0FESjtBQXNCQTtBQS9DUjtBQWlESCxLQXRHa0I7O0FBR2YsUUFBSUksV0FBVSxHQUFHWixLQUFLLENBQUM4QixLQUFOLENBQVlDLE1BQVosQ0FBbUI3QixPQUFwQzs7QUFDQSxRQUFJQSxRQUFPLEdBQUcsTUFBSzhCLFNBQUwsQ0FBZXBCLFdBQWYsQ0FBZDs7QUFFQSxVQUFLSyxLQUFMLEdBQWE7QUFDVGdCLGFBQU8sRUFBTyxDQURMO0FBRVQvQixhQUFPLEVBQU9BLFFBRkw7QUFHVGtCLFVBQUksRUFBVSxLQUhMO0FBSVRkLGlCQUFXLEVBQUc7QUFKTCxLQUFiOztBQU9BLFVBQUtkLHFCQUFMOztBQWJlO0FBY2xCOzs7O1dBMEZELGtCQUFTO0FBQ0wsMEJBQU8sMkRBQUMsc0VBQUQsZUFDUyxLQUFLeUIsS0FEZDtBQUdLLG9CQUFZLEVBQUcsS0FBS1A7QUFIekIsU0FBUDtBQUtIOzs7O0VBL0dpQ3dCLDRDQUFLLENBQUNDLFM7O0FBa0g3QnhCLHNGQUFmLEUiLCJmaWxlIjoiMTMubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlbmRvckluZm8oZGF0YSkge1xuICByZXR1cm4gYXhpb3MoJ2h0dHBzOi8vYXBpLnNhdmluZ3NkZWFsei5jb20vdmVuZG9yL2luZm8nLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVuZG9yc0xpc3QoZGF0YSkge1xuICByZXR1cm4gYXhpb3MoJ2h0dHBzOi8vYXBpLnNhdmluZ3NkZWFsei5jb20vdmVuZG9yL2xpc3QnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcGFyZVZlbmRvcnNJbmZvKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL3ZlbmRvci9jb21wYXJlL2luZm8nLCB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0J1xuaW1wb3J0IHtcbiAgR3JpZCxcbiAgU2VnbWVudCxcbiAgQnJlYWRjcnVtYixcbiAgQ29udGFpbmVyLFxuICBUYWJsZSxcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNvbnN0IGhlYWQgPSAodXJsKSA9PiB7XG4gIGNvbnN0IHBhZ2VVcmwgPSAodHlwZW9mIHVybCAhPT0gJ3VuZGVmaW5lZCcpID8gdXJsIDogJyc7XG4gIGxldCBjYW5vbmljYWwgPSBcImh0dHBzOi8vc2F2aW5nc2RlYWx6LmNvbVwiICsgcGFnZVVybDtcbiAgY29uc29sZS5sb2coY2Fub25pY2FsKVxuICByZXR1cm4gKFxuICAgIDxIZWxtZXQga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgIDx0aXRsZT4yMDIyIHMgdnBuIENvbXBhcmUgdG9vbCBmcmVlIGFuZCBHb29kPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiLz5cbiAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Nhbm9uaWNhbH0vPlxuICAgIDwvSGVsbWV0PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBDb21wYXJlVmVuZG9yc1ZpZXcgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICB7aGVhZChwcm9wcy51cmwpfVxuICAgIDxDb250YWluZXI+XG4gICAgICA8QnJlYWRjcnVtYiBpZD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvblxuICAgICAgICAgIGxpbmtcbiAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICA+XG4gICAgICAgICAgTWFpblxuICAgICAgICA8L0JyZWFkY3J1bWIuU2VjdGlvbj5cbiAgICAgICAgPEJyZWFkY3J1bWIuRGl2aWRlciBpY29uPVwicmlnaHQgY2hldnJvblwiLz5cbiAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvblxuICAgICAgICAgIGxpbmtcbiAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICB0bz1cIi9jb21wYXJlXCJcbiAgICAgICAgPlxuICAgICAgICAgIENvbXBhcmVcbiAgICAgICAgPC9CcmVhZGNydW1iLlNlY3Rpb24+XG4gICAgICAgIDxCcmVhZGNydW1iLkRpdmlkZXIgaWNvbj1cInJpZ2h0IGNoZXZyb25cIi8+XG4gICAgICAgIDxCcmVhZGNydW1iLlNlY3Rpb24gYWN0aXZlPlxuICAgICAgICAgIENvbXBhcmUgeyhwcm9wcy52ZW5kb3JzKS5qb2luKCcgd2l0aCAnKX1cbiAgICAgICAgPC9CcmVhZGNydW1iLlNlY3Rpb24+XG4gICAgICA8L0JyZWFkY3J1bWI+XG5cbiAgICAgIDxHcmlkIGlkPVwiY29tcGFyZVZlbmRvckJsb2NrXCI+XG5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTZ9PlxuICAgICAgICAgICAgPFNlZ21lbnQ+XG4gICAgICAgICAgICAgIDxUYWJsZSBiYXNpYz1cInZlcnlcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwcm9wcy5jb21wYXJlSW5mbykubWFwKChrZXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbCB3aWR0aD17M30gdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNvbXBhcmVJbmZvW2tleV1bJ3RpdGxlJ119XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwcm9wcy5jb21wYXJlSW5mb1trZXldWydjZWxscyddKS5tYXAoKGspID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsIHdpZHRoPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmdldFRhYmxlQ2VsbChwcm9wcy5jb21wYXJlSW5mb1trZXldWyd0eXBlJ10sIHByb3BzLmNvbXBhcmVJbmZvW2tleV1bJ2NlbGxzJ11ba10pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVGFibGUuQm9keT5cbiAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFyZVZlbmRvcnNWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7XG4gICAgSW1hZ2UsXG4gICAgQ2hlY2tib3gsXG4gICAgTW9kYWwsXG4gICAgSGVhZGVyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgQ29tcGFyZVZlbmRvcnNWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcGFyZVZlbmRvcnNWaWV3J1xuXG5pbXBvcnQge1xuICAgIGdldENvbXBhcmVWZW5kb3JzSW5mb1xufSBmcm9tICcuLi8uLi8uLi9hcGkvdmVuZG9yJ1xuXG5jbGFzcyBDb21wYXJlVmVuZG9yc0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgbGV0IHZlbmRvcnNTdHIgPSBwcm9wcy5tYXRjaC5wYXJhbXMudmVuZG9ycztcbiAgICAgICAgbGV0IHZlbmRvcnMgPSB0aGlzLnBhcnNlVHlwZSh2ZW5kb3JzU3RyKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZyAgICAgOiAwLFxuICAgICAgICAgICAgdmVuZG9ycyAgICAgOiB2ZW5kb3JzLFxuICAgICAgICAgICAgaW5mbyAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbXBhcmVJbmZvIDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0Q29tcGFyZVZlbmRvcnNJbmZvKClcbiAgICB9XG5cbiAgICBwYXJzZVR5cGUgPSAodmVuZG9yc1N0cikgPT4ge1xuICAgICAgICBsZXQgc3RyID0gdmVuZG9yc1N0ci5yZXBsYWNlKCdjb21wYXJlLScsICcnKVxuXG4gICAgICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoJy13aXRoLScpO1xuXG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICBnZXRDb21wYXJlVmVuZG9yc0luZm8gPSAoKSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICB2ZW5kb3JzXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGdldENvbXBhcmVWZW5kb3JzSW5mbyh2ZW5kb3JzKTtcblxuICAgICAgICByZXN1bHQudGhlbihcbiAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICBpbmZvLFxuICAgICAgICAgICAgICAgICAgICByb3dzXG4gICAgICAgICAgICAgICAgfSA9IHJlc3VsdFxuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8gICAgICAgIDogaW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVJbmZvIDogcm93cyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBhbGVydChcIlJlamVjdGVkOiBcIiArIGVycm9yKTsgLy8gZXJyb3IgLSDQsNGA0LPRg9C80LXQvdGCIHJlamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFRhYmxlQ2VsbCA9ICh0eXBlLCBjZWxsKSA9PiB7XG4gICAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxJbWFnZSBzcmM9e2NlbGx9IC8+XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY2VsbFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEltYWdlIHNyYz0nL2ltYWdlcy9jaGVjay5wbmcnIC8+XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxJbWFnZSBzcmM9Jy9pbWFnZXMvY2FuY2VsLnBuZycgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkcm9wZG93bic6XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50cmllcyA9IFtdXG4gICAgICAgICAgICAgICAgbGV0IGkgPSAxXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayBpbiBjZWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50cmllcy5wdXNoKGNlbGxbaV0pXG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNvdW50cmllcy5qb2luKCcsICcpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9ezxzcGFuIGNsYXNzTmFtZT0nbW9yZS1idXR0b24nPm1vcmU8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J21pbmknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltbWVyPSdpbnZlcnRlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21vZGFsLWNvdW50cmllcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuQ29udGVudCBpbWFnZSBzY3JvbGxpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXI+QWxsIGNvdW50cmllczwvSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGNlbGwpLm1hcCgoa2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+eyBjZWxsW2tleV0gfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8Q29tcGFyZVZlbmRvcnNWaWV3XG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxuXG4gICAgICAgICAgICAgICAgICAgIGdldFRhYmxlQ2VsbD17IHRoaXMuZ2V0VGFibGVDZWxsIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFyZVZlbmRvcnNDb250YWluZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=