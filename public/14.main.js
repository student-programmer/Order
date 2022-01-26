(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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

/***/ "./src/client/routes/Vendor/components/VendorView.js":
/*!***********************************************************!*\
  !*** ./src/client/routes/Vendor/components/VendorView.js ***!
  \***********************************************************/
/*! exports provided: VendorView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorView", function() { return VendorView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _blocks_OfferList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/OfferList */ "./src/client/blocks/OfferList/index.js");






var head = function head(url) {
  var pageUrl = typeof url !== 'undefined' ? url : '';
  var canonical = "https://savingsdealz.com" + pageUrl;
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

var VendorView = function VendorView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, head(props.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], null, props.info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"], {
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
    to: props.getCategoryUrl()
  }, props.info['category']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"].Divider, {
    icon: "right chevron"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"].Section, {
    active: true
  }, props.info['name'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    id: "vendorBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: props.info['image']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Accordion"], null, props.info && Object.keys(props.info['descriptions']).map(function (rowKey) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Accordion"].Title, {
      active: props.activeIndex === rowKey,
      index: rowKey,
      onClick: props.handleClickAccordion
    }, props.info['descriptions'][rowKey]['title'], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "dropdown",
      color: "red"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Accordion"].Content, {
      active: props.activeIndex === rowKey
    }, props.info['descriptions'][rowKey]['text']));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 16
  }, props.info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_OfferList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    searchData: {
      'vendor_id': props.info['id']
    }
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (VendorView);

/***/ }),

/***/ "./src/client/routes/Vendor/containers/VendorContainer.js":
/*!****************************************************************!*\
  !*** ./src/client/routes/Vendor/containers/VendorContainer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_VendorView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/VendorView */ "./src/client/routes/Vendor/components/VendorView.js");
/* harmony import */ var _api_vendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/vendor */ "./src/client/api/vendor.js");
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





var VendorContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(VendorContainer, _React$Component);

  var _super = _createSuper(VendorContainer);

  function VendorContainer(props) {
    var _this;

    _classCallCheck(this, VendorContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "parseType", function (vendor) {
      var arr = vendor.split('-');
      return arr[arr.length - 1];
    });

    _defineProperty(_assertThisInitialized(_this), "getVendorInfo", function () {
      var vendorId = _this.state.vendorId;
      var result = Object(_api_vendor__WEBPACK_IMPORTED_MODULE_2__["getVendorInfo"])({
        vendorId: vendorId
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

    _defineProperty(_assertThisInitialized(_this), "handleClickAccordion", function (e, titleProps) {
      var index = titleProps.index;
      var activeIndex = _this.state.activeIndex;
      var newIndex = activeIndex === index ? -1 : index;

      _this.setState({
        activeIndex: newIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCategoryUrl", function () {
      var info = _this.state.info;
      if (!info) return '';
      var category = info.category;

      switch (category.toLowerCase()) {
        case 'vpn':
          return '/vpn';
          break;

        case 'bundle':
          return '/bundle';
          break;
      }
    });

    var _vendor = props.match.params.vendor;

    var _vendorId = _this.parseType(_vendor);

    _this.state = {
      loading: 0,
      activeIndex: 0,
      vendorId: _vendorId,
      info: false
    };

    _this.getVendorInfo();

    return _this;
  }

  _createClass(VendorContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VendorView__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, this.state, {
        handleClickAccordion: this.handleClickAccordion,
        getCategoryUrl: this.getCategoryUrl
      }));
    }
  }]);

  return VendorContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (VendorContainer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS92ZW5kb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvVmVuZG9yL2NvbXBvbmVudHMvVmVuZG9yVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlcy9WZW5kb3IvY29udGFpbmVycy9WZW5kb3JDb250YWluZXIuanMiXSwibmFtZXMiOlsiZ2V0VmVuZG9ySW5mbyIsImRhdGEiLCJheGlvcyIsIm1ldGhvZCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0VmVuZG9yc0xpc3QiLCJnZXRDb21wYXJlVmVuZG9yc0luZm8iLCJoZWFkIiwidXJsIiwicGFnZVVybCIsImNhbm9uaWNhbCIsIk1hdGgiLCJyYW5kb20iLCJWZW5kb3JWaWV3IiwicHJvcHMiLCJpbmZvIiwiTGluayIsImdldENhdGVnb3J5VXJsIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInJvd0tleSIsImFjdGl2ZUluZGV4IiwiaGFuZGxlQ2xpY2tBY2NvcmRpb24iLCJWZW5kb3JDb250YWluZXIiLCJ2ZW5kb3IiLCJhcnIiLCJzcGxpdCIsImxlbmd0aCIsInZlbmRvcklkIiwic3RhdGUiLCJyZXN1bHQiLCJzdGF0dXMiLCJyb3ciLCJzZXRTdGF0ZSIsImFsZXJ0IiwiZSIsInRpdGxlUHJvcHMiLCJpbmRleCIsIm5ld0luZGV4IiwiY2F0ZWdvcnkiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwicGFyYW1zIiwicGFyc2VUeXBlIiwibG9hZGluZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTQSxhQUFULENBQXVCQyxJQUF2QixFQUE2QjtBQUNsQyxTQUFPQyw0Q0FBSyxDQUFDLDBDQUFELEVBQTZDO0FBQ3JEQyxVQUFN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LGVBQ1MsS0FBS29DLEtBRGQ7QUFFSyw0QkFBb0IsRUFBRyxLQUFLUCxvQkFGakM7QUFJSyxzQkFBYyxFQUFHLEtBQUtOO0FBSjNCLFNBQVA7QUFNSDs7OztFQXZGeUI2Qiw0Q0FBSyxDQUFDQyxTOztBQTBGckJ2Qiw4RUFBZixFIiwiZmlsZSI6IjE0Lm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWZW5kb3JJbmZvKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL3ZlbmRvci9pbmZvJywge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlbmRvcnNMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL3ZlbmRvci9saXN0Jywge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBhcmVWZW5kb3JzSW5mbyhkYXRhKSB7XG4gIHJldHVybiBheGlvcygnaHR0cHM6Ly9hcGkuc2F2aW5nc2RlYWx6LmNvbS92ZW5kb3IvY29tcGFyZS9pbmZvJywge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCdcbmltcG9ydCB7XG4gIEJyZWFkY3J1bWIsXG4gIENvbnRhaW5lcixcbiAgR3JpZCxcbiAgU2VnbWVudCxcbiAgSW1hZ2UsXG4gIEFjY29yZGlvbixcbiAgRGl2aWRlcixcbiAgSWNvbixcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBPZmZlckxpc3QgZnJvbSAnLi4vLi4vLi4vYmxvY2tzL09mZmVyTGlzdCdcblxuY29uc3QgaGVhZCA9ICh1cmwpID0+IHtcbiAgY29uc3QgcGFnZVVybCA9ICh0eXBlb2YgdXJsICE9PSAndW5kZWZpbmVkJykgPyB1cmwgOiAnJztcbiAgbGV0IGNhbm9uaWNhbCA9IFwiaHR0cHM6Ly9zYXZpbmdzZGVhbHouY29tXCIgKyBwYWdlVXJsO1xuICByZXR1cm4gKFxuICAgIDxIZWxtZXQga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgIDx0aXRsZT5TYXZpbmdzZGVhbHo8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIvPlxuICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17Y2Fub25pY2FsfS8+XG4gICAgPC9IZWxtZXQ+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IFZlbmRvclZpZXcgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICB7aGVhZChwcm9wcy51cmwpfVxuICAgIDxDb250YWluZXI+XG4gICAgICB7XG4gICAgICAgIChwcm9wcy5pbmZvKSAmJiAoXG4gICAgICAgICAgPEJyZWFkY3J1bWIgaWQ9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uXG4gICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1haW5cbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5TZWN0aW9uPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWIuRGl2aWRlciBpY29uPVwicmlnaHQgY2hldnJvblwiLz5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iLlNlY3Rpb25cbiAgICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgdG89e3Byb3BzLmdldENhdGVnb3J5VXJsKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwcm9wcy5pbmZvWydjYXRlZ29yeSddfVxuICAgICAgICAgICAgPC9CcmVhZGNydW1iLlNlY3Rpb24+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYi5EaXZpZGVyIGljb249XCJyaWdodCBjaGV2cm9uXCIvPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvbiBhY3RpdmU+XG4gICAgICAgICAgICAgIHtwcm9wcy5pbmZvWyduYW1lJ119XG4gICAgICAgICAgICA8L0JyZWFkY3J1bWIuU2VjdGlvbj5cbiAgICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgPEdyaWQgaWQ9XCJ2ZW5kb3JCbG9ja1wiPlxuXG4gICAgICAgIDxHcmlkLlJvdyBzdHJldGNoZWQ+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNn0+XG4gICAgICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5pbmZvWydpbWFnZSddfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uPlxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgKHByb3BzLmluZm8pICYmIChcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMuaW5mb1snZGVzY3JpcHRpb25zJ10pLm1hcCgocm93S2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5UaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3Byb3BzLmFjdGl2ZUluZGV4ID09PSByb3dLZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtyb3dLZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrQWNjb3JkaW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaW5mb1snZGVzY3JpcHRpb25zJ11bcm93S2V5XVsndGl0bGUnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImRyb3Bkb3duXCIgY29sb3I9XCJyZWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db250ZW50IGFjdGl2ZT17cHJvcHMuYWN0aXZlSW5kZXggPT09IHJvd0tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pbmZvWydkZXNjcmlwdGlvbnMnXVtyb3dLZXldWyd0ZXh0J119XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNn0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIChwcm9wcy5pbmZvKSAmJiAoXG4gICAgICAgICAgICAgICAgPE9mZmVyTGlzdFxuICAgICAgICAgICAgICAgICAgc2VhcmNoRGF0YT17eyAndmVuZG9yX2lkJzogcHJvcHMuaW5mb1snaWQnXSB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuXG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBWZW5kb3JWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBWZW5kb3JWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvVmVuZG9yVmlldydcblxuaW1wb3J0IHsgZ2V0VmVuZG9ySW5mbyB9IGZyb20gJy4uLy4uLy4uL2FwaS92ZW5kb3InXG5cbmNsYXNzIFZlbmRvckNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgbGV0IHZlbmRvciA9IHByb3BzLm1hdGNoLnBhcmFtcy52ZW5kb3I7XG4gICAgICAgIGxldCB2ZW5kb3JJZCA9IHRoaXMucGFyc2VUeXBlKHZlbmRvcik7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmcgICA6IDAsXG4gICAgICAgICAgICBhY3RpdmVJbmRleCA6IDAsXG4gICAgICAgICAgICB2ZW5kb3JJZDogdmVuZG9ySWQsXG4gICAgICAgICAgICBpbmZvOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRWZW5kb3JJbmZvKClcbiAgICB9XG5cbiAgICBwYXJzZVR5cGUgPSAodmVuZG9yKSA9PiB7XG4gICAgICAgIGxldCBhcnIgPSB2ZW5kb3Iuc3BsaXQoJy0nKTtcblxuICAgICAgICByZXR1cm4gYXJyW2Fyci5sZW5ndGgtMV1cbiAgICB9XG5cbiAgICBnZXRWZW5kb3JJbmZvID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICB2ZW5kb3JJZFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBnZXRWZW5kb3JJbmZvKHsgdmVuZG9ySWQ6IHZlbmRvcklkIH0pO1xuICAgICAgICByZXN1bHQudGhlbihcbiAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICByb3dcbiAgICAgICAgICAgICAgICB9ID0gcmVzdWx0XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbyA6IHJvdyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBhbGVydChcIlJlamVjdGVkOiBcIiArIGVycm9yKTsgLy8gZXJyb3IgLSDQsNGA0LPRg9C80LXQvdGCIHJlamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrQWNjb3JkaW9uID0gKGUsIHRpdGxlUHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgeyBpbmRleCB9ID0gdGl0bGVQcm9wc1xuICAgICAgICBjb25zdCB7IGFjdGl2ZUluZGV4IH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gYWN0aXZlSW5kZXggPT09IGluZGV4ID8gLTEgOiBpbmRleFxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IG5ld0luZGV4XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0Q2F0ZWdvcnlVcmwgPSAoKSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBpbmZvXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgaWYgKCFpbmZvKSByZXR1cm4gJydcblxuICAgICAgICBsZXQge1xuICAgICAgICAgICAgY2F0ZWdvcnlcbiAgICAgICAgfSA9IGluZm9cblxuICAgICAgICBzd2l0Y2goY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAndnBuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJy92cG4nXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdidW5kbGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnL2J1bmRsZSdcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxWZW5kb3JWaWV3XG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGlja0FjY29yZGlvbj17IHRoaXMuaGFuZGxlQ2xpY2tBY2NvcmRpb24gfVxuXG4gICAgICAgICAgICAgICAgICAgIGdldENhdGVnb3J5VXJsPXsgdGhpcy5nZXRDYXRlZ29yeVVybCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlbmRvckNvbnRhaW5lclxuIl0sInNvdXJjZVJvb3QiOiIifQ==