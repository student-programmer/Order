(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/client/api/filter.js":
/*!**********************************!*\
  !*** ./src/client/api/filter.js ***!
  \**********************************/
/*! exports provided: getFilterList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterList", function() { return getFilterList; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function getFilterList(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/filter/list', {
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

/***/ "./src/client/routes/Compare/components/CompareView.js":
/*!*************************************************************!*\
  !*** ./src/client/routes/Compare/components/CompareView.js ***!
  \*************************************************************/
/*! exports provided: CompareView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareView", function() { return CompareView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");




var loaderItems = [1, 2, 3, 4, 5];

var head = function head(url) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    key: Math.random()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "2022 s vpn Compare tool free and Good"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "robots",
    content: "noindex, nofollow"
  }));
};

var CompareView = function CompareView(props) {
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
  }, "Compare")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    id: "compareBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h1",
    textAlign: "center"
  }, "VPN provide comparison", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, null, "Side - by - side comparison of features? prices and review. Select up to 3 VPNs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Dropdown, {
    placeholder: "Select vendor",
    clearable: true,
    fluid: true,
    search: true,
    selection: true,
    name: "vendor1",
    value: props.compareVendors['vendor1'],
    options: props.getVendorsListOptions(),
    loading: !props.vendorsList,
    onChange: props.handleInputChangeVendors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "vs-divided"
  }, "VS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Dropdown, {
    placeholder: "Select vendor",
    clearable: true,
    fluid: true,
    search: true,
    selection: true,
    name: "vendor2",
    value: props.compareVendors['vendor2'],
    options: props.getVendorsListOptions(),
    loading: !props.vendorsList,
    onChange: props.handleInputChangeVendors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "vs-divided"
  }, "VS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Dropdown, {
    placeholder: "Select vendor",
    clearable: true,
    fluid: true,
    search: true,
    selection: true,
    name: "vendor3",
    value: props.compareVendors['vendor3'],
    options: props.getVendorsListOptions(),
    loading: !props.vendorsList,
    onChange: props.handleInputChangeVendors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: props.getCompareUrl(),
    disabled: props.checkCompareVendorButtonDisabled(),
    primary: true,
    className: "compare-button"
  }, "Compare"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    columns: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    textAlign: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, props.filter ? Object.keys(props.filter).map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
      fluid: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "subheader"
    }, props.filter[key]['title']), props.getInput(key, props.filter[key]));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "short"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "short"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "short"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "short"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    columns: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    basic: true,
    id: "compareListTable"
  }, props.vendorsList ? Object.keys(props.vendorsList).map(function (rowKey) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, props.vendorsList[rowKey]['name']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, {
      textAlign: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      src: props.vendorsList[rowKey]['image']
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, {
      textAlign: "center"
    }, props.vendorsList[rowKey]['user_used'], " users used this coupon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, {
      textAlign: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
      label: "Add to comparison",
      value: props.vendorsList[rowKey]['id'],
      onChange: props.handleInputChangeAddComprassion,
      checked: props.checkCompareVendorChecked(props.vendorsList[rowKey]['id']),
      disabled: props.checkCompareVendorDisabled(props.vendorsList[rowKey]['id'])
    })));
  }) : Object.keys(loaderItems).map(function (rowKey) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
      fluid: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
      length: "full"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, {
      textAlign: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
      fluid: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
      length: "full"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, {
      textAlign: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
      fluid: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
      length: "full"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, {
      textAlign: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
      fluid: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
      length: "full"
    }))));
  }))))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (CompareView);

/***/ }),

/***/ "./src/client/routes/Compare/containers/CompareContainer.js":
/*!******************************************************************!*\
  !*** ./src/client/routes/Compare/containers/CompareContainer.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_CompareView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CompareView */ "./src/client/routes/Compare/components/CompareView.js");
/* harmony import */ var _api_vendor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/vendor */ "./src/client/api/vendor.js");
/* harmony import */ var _api_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/filter */ "./src/client/api/filter.js");
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







var CompareContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(CompareContainer, _React$Component);

  var _super = _createSuper(CompareContainer);

  function CompareContainer(props) {
    var _this;

    _classCallCheck(this, CompareContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getVendorsList", function () {
      var filterData = _this.state.filterData;

      _this.setState({
        vendorsList: false
      });

      var result = Object(_api_vendor__WEBPACK_IMPORTED_MODULE_3__["getVendorsList"])(filterData);
      result.then(function (result) {
        var status = result.status,
            rows = result.rows;

        if (status) {
          _this.setState({
            vendorsList: rows
          });
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getVendorsListOptions", function () {
      var vendorsList = _this.state.vendorsList;
      var options = [];

      for (var key in vendorsList) {
        options.push({
          key: vendorsList[key]['id'],
          value: vendorsList[key]['id'],
          text: vendorsList[key]['name']
        });
      }

      return options;
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeVendors", function (e, _ref) {
      var name = _ref.name,
          value = _ref.value;
      e.preventDefault();
      var compareVendors = _this.state.compareVendors;
      compareVendors[name] = value;

      _this.setState({
        compareVendors: compareVendors
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCompareUrl", function () {
      var compareVendors = _this.state.compareVendors;
      if (!compareVendors) return false;
      var vendor1 = compareVendors.vendor1,
          vendor2 = compareVendors.vendor2,
          vendor3 = compareVendors.vendor3;
      var url = '/compare-';
      var vendorArray = [];

      if (vendor1) {
        vendorArray.push(_this.checkVendorToUrl(vendor1));
      }

      if (vendor2) {
        vendorArray.push(_this.checkVendorToUrl(vendor2));
      }

      if (vendor3) {
        vendorArray.push(_this.checkVendorToUrl(vendor3));
      }

      url += vendorArray.join('-with-');
      return url;
    });

    _defineProperty(_assertThisInitialized(_this), "checkVendorToUrl", function (vendorId) {
      var vendorsList = _this.state.vendorsList;
      if (!vendorId) return '';
      var vendorName = '';

      for (var k in vendorsList) {
        if (!vendorsList[k]) continue;

        if (vendorsList[k]['id'] == vendorId) {
          vendorName = vendorsList[k]['name'];
          break;
        }
      }

      return vendorName.replace(/\s/ig, '-').replace('/', '-').toLowerCase();
    });

    _defineProperty(_assertThisInitialized(_this), "getFilterList", function () {
      var filterData = _this.state.filterData;
      var result = Object(_api_filter__WEBPACK_IMPORTED_MODULE_4__["getFilterList"])(filterData);
      result.then(function (result) {
        var status = result.status,
            rows = result.rows;

        if (status) {
          _this.setState({
            filter: rows
          });
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getInput", function (key, row) {
      var filterData = _this.state.filterData;
      var type = row.type,
          title = row.title,
          multiple = row.multiple,
          data = row.data;
      if (!type) type = 'text';
      var input = false;

      switch (type) {
        case 'text':
        case 'number':
        case 'email':
          input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
            fluid: true,
            type: type,
            placeholder: title,
            name: key,
            value: filterData[key] || '',
            onChange: _this.handleInputChangeEdit
          });
          break;

        case 'dropdown':
          var options = [];

          for (var k in data) {
            options.push({
              key: k + data[k]['id'],
              text: data[k]['name'],
              value: data[k]['id']
            });
          }

          input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
            fluid: true,
            inline: true,
            name: key,
            options: options,
            placeholder: title,
            multiple: multiple ? true : false,
            value: multiple ? filterData[key] ? filterData[key] : [] : filterData[key],
            onChange: _this.handleInputChangeEdit
          });
          break;

        case 'checkbox':
          input = [];

          for (var _k in data) {
            input.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
              label: data[_k]['name'],
              value: data[_k]['name'],
              name: key,
              onChange: _this.handleInputChangeCheckBox,
              checked: filterData.hasOwnProperty(key) == true && filterData[key].indexOf(data[_k]['name']) != -1
            }));
          }

          break;
      }

      return input;
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeCheckBox", function (e, _ref2) {
      var name = _ref2.name,
          value = _ref2.value;
      var filterData = _this.state.filterData;

      if (filterData.hasOwnProperty(name) && filterData[name].indexOf(value) !== -1) {
        filterData[name].splice(filterData[name].indexOf(value), 1);
      } else {
        if (!filterData.hasOwnProperty(name)) {
          filterData[name] = [];
        }

        filterData[name].push(value);
      }

      _this.setState({
        filterData: filterData
      });

      _this.getVendorsList();
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeAddComprassion", function (e, _ref3) {
      var value = _ref3.value;
      var compareVendors = _this.state.compareVendors;

      if (compareVendors['vendor1'] == value) {
        compareVendors['vendor1'] = null;
      } else if (compareVendors['vendor2'] == value) {
        compareVendors['vendor2'] = null;
      } else if (compareVendors['vendor3'] == value) {
        compareVendors['vendor3'] = null;
      } else if (!compareVendors['vendor1']) {
        compareVendors['vendor1'] = value;
      } else if (!compareVendors['vendor2']) {
        compareVendors['vendor2'] = value;
      } else if (!compareVendors['vendor3']) {
        compareVendors['vendor3'] = value;
      }

      _this.setState({
        compareVendors: compareVendors
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeEdit", function (e, _ref4) {
      var name = _ref4.name,
          value = _ref4.value;
      e.preventDefault();
      var filterData = _this.state.filterData;
      filterData[name] = value;

      _this.setState({
        filterData: filterData
      });

      _this.getVendorsList();
    });

    _defineProperty(_assertThisInitialized(_this), "checkCompareVendorDisabled", function (vendorId) {
      var compareVendors = _this.state.compareVendors;
      if (vendorId == compareVendors['vendor1'] || vendorId == compareVendors['vendor2'] || vendorId == compareVendors['vendor3']) return false;
      return compareVendors['vendor1'] && compareVendors['vendor2'] && compareVendors['vendor3'] ? true : false;
    });

    _defineProperty(_assertThisInitialized(_this), "checkCompareVendorChecked", function (vendorId) {
      var compareVendors = _this.state.compareVendors;
      if (vendorId == compareVendors['vendor1'] || vendorId == compareVendors['vendor2'] || vendorId == compareVendors['vendor3']) return true;
      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "checkCompareVendorButtonDisabled", function () {
      var compareVendors = _this.state.compareVendors;
      var i = 0;

      if (compareVendors['vendor1']) {
        i++;
      }

      if (compareVendors['vendor2']) {
        i++;
      }

      if (compareVendors['vendor3']) {
        i++;
      }

      return i < 2 ? true : false;
    });

    _this.state = {
      loading: 0,
      vendorsList: false,
      compareVendors: {},
      filter: false,
      filterData: {
        category: 'vpn'
      }
    };

    _this.getVendorsList();

    _this.getFilterList();

    return _this;
  }

  _createClass(CompareContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CompareView__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.state, {
        getVendorsListOptions: this.getVendorsListOptions,
        handleInputChangeVendors: this.handleInputChangeVendors,
        getCompareUrl: this.getCompareUrl,
        getInput: this.getInput,
        handleInputChangeEdit: this.handleInputChangeEdit,
        handleInputChangeAddComprassion: this.handleInputChangeAddComprassion,
        checkCompareVendorDisabled: this.checkCompareVendorDisabled,
        checkCompareVendorChecked: this.checkCompareVendorChecked,
        checkCompareVendorButtonDisabled: this.checkCompareVendorButtonDisabled
      }));
    }
  }]);

  return CompareContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CompareContainer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9hcGkvdmVuZG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcm91dGVzL0NvbXBhcmUvY29tcG9uZW50cy9Db21wYXJlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlcy9Db21wYXJlL2NvbnRhaW5lcnMvQ29tcGFyZUNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJnZXRGaWx0ZXJMaXN0IiwiZGF0YSIsImF4aW9zIiwibWV0aG9kIiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRWZW5kb3JJbmZvIiwiZ2V0VmVuZG9yc0xpc3QiLCJnZXRDb21wYXJlVmVuZG9yc0luZm8iLCJsb2FkZXJJdGVtcyIsImhlYWQiLCJ1cmwiLCJNYXRoIiwicmFuZG9tIiwiQ29tcGFyZVZpZXciLCJwcm9wcyIsIkxpbmsiLCJjb21wYXJlVmVuZG9ycyIsImdldFZlbmRvcnNMaXN0T3B0aW9ucyIsInZlbmRvcnNMaXN0IiwiaGFuZGxlSW5wdXRDaGFuZ2VWZW5kb3JzIiwiZ2V0Q29tcGFyZVVybCIsImNoZWNrQ29tcGFyZVZlbmRvckJ1dHRvbkRpc2FibGVkIiwiZmlsdGVyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImdldElucHV0Iiwicm93S2V5IiwiaGFuZGxlSW5wdXRDaGFuZ2VBZGRDb21wcmFzc2lvbiIsImNoZWNrQ29tcGFyZVZlbmRvckNoZWNrZWQiLCJjaGVja0NvbXBhcmVWZW5kb3JEaXNhYmxlZCIsIkNvbXBhcmVDb250YWluZXIiLCJmaWx0ZXJEYXRhIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJlc3VsdCIsInN0YXR1cyIsInJvd3MiLCJhbGVydCIsIm9wdGlvbnMiLCJwdXNoIiwidmFsdWUiLCJ0ZXh0IiwiZSIsIm5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsInZlbmRvcjEiLCJ2ZW5kb3IyIiwidmVuZG9yMyIsInZlbmRvckFycmF5IiwiY2hlY2tWZW5kb3JUb1VybCIsImpvaW4iLCJ2ZW5kb3JJZCIsInZlbmRvck5hbWUiLCJrIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwicm93IiwidHlwZSIsInRpdGxlIiwibXVsdGlwbGUiLCJpbnB1dCIsImhhbmRsZUlucHV0Q2hhbmdlRWRpdCIsImhhbmRsZUlucHV0Q2hhbmdlQ2hlY2tCb3giLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJzcGxpY2UiLCJpIiwibG9hZGluZyIsImNhdGVnb3J5IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0EsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDbEMsU0FBT0MsNENBQUssQ0FBQywwQ0FBRCxFQUE2QztBQUNyREMsVUFBTSxFQUFFLE1BRDZDO0FBRXJERixRQUFJLEVBQUVBLElBRitDO0FBR3JERyxtQkFBZSxFQUFFO0FBSG9DLEdBQTdDLENBQUwsQ0FJRkMsSUFKRSxDQUlHLFVBQVVDLFFBQVYsRUFBb0I7QUFDMUIsV0FBT0EsUUFBUSxDQUFDTCxJQUFoQjtBQUNELEdBTkksRUFNRk0sS0FORSxDQU1JLFVBQVVDLEtBQVYsRUFBaUI7QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsR0FSSSxDQUFQO0FBU0QsQzs7Ozs7Ozs7Ozs7O0FDWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTRyxhQUFULENBQXVCVixJQUF2QixFQUE2QjtBQUNsQyxTQUFPQyw0Q0FBSyxDQUFDLDBDQUFELEVBQTZDO0FBQ3JEQyxVQUFNLEVBQUUsTUFENkM7QUFFckRGLFFBQUksRUFBRUEsSUFGK0M7QUFHckRHLG1CQUFlLEVBQUU7QUFIb0MsR0FBN0MsQ0FBTCxDQUlGQyxJQUpFLENBSUcsVUFBVUMsUUFBVixFQUFv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LGdCQUFRLEVBQUcsS0FBS08sUUFSckI7QUFTSyw2QkFBcUIsRUFBRyxLQUFLb0MscUJBVGxDO0FBV0ssdUNBQStCLEVBQUcsS0FBS2xDLCtCQVg1QztBQVlLLGtDQUEwQixFQUFHLEtBQUtFLDBCQVp2QztBQWFLLGlDQUF5QixFQUFHLEtBQUtELHlCQWJ0QztBQWVLLHdDQUFnQyxFQUFHLEtBQUtUO0FBZjdDLFNBQVA7QUFpQkg7Ozs7RUFoVzBCa0QsNENBQUssQ0FBQ0MsUzs7QUFtV3RCeEMsK0VBQWYsRSIsImZpbGUiOiI3Lm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL2ZpbHRlci9saXN0Jywge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlbmRvckluZm8oZGF0YSkge1xuICByZXR1cm4gYXhpb3MoJ2h0dHBzOi8vYXBpLnNhdmluZ3NkZWFsei5jb20vdmVuZG9yL2luZm8nLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVuZG9yc0xpc3QoZGF0YSkge1xuICByZXR1cm4gYXhpb3MoJ2h0dHBzOi8vYXBpLnNhdmluZ3NkZWFsei5jb20vdmVuZG9yL2xpc3QnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcGFyZVZlbmRvcnNJbmZvKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL3ZlbmRvci9jb21wYXJlL2luZm8nLCB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0J1xuaW1wb3J0IHtcbiAgR3JpZCxcbiAgU2VnbWVudCxcbiAgQnJlYWRjcnVtYixcbiAgSGVhZGVyLFxuICBGb3JtLFxuICBDb250YWluZXIsXG4gIFBsYWNlaG9sZGVyLFxuICBEaXZpZGVyLFxuICBUYWJsZSxcbiAgSW1hZ2UsXG4gIENoZWNrYm94LFxuICBCdXR0b25cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNvbnN0IGxvYWRlckl0ZW1zID0gW1xuICAxLCAyLCAzLCA0LCA1XG5dXG5cbmNvbnN0IGhlYWQgPSAodXJsKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhlbG1ldCBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgPHRpdGxlPjIwMjIgcyB2cG4gQ29tcGFyZSB0b29sIGZyZWUgYW5kIEdvb2Q8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4LCBub2ZvbGxvd1wiLz5cbiAgICA8L0hlbG1ldD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgQ29tcGFyZVZpZXcgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICB7aGVhZChwcm9wcy51cmwpfVxuICAgIDxDb250YWluZXI+XG4gICAgICA8QnJlYWRjcnVtYiBpZD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvblxuICAgICAgICAgIGxpbmtcbiAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICA+XG4gICAgICAgICAgTWFpblxuICAgICAgICA8L0JyZWFkY3J1bWIuU2VjdGlvbj5cbiAgICAgICAgPEJyZWFkY3J1bWIuRGl2aWRlciBpY29uPVwicmlnaHQgY2hldnJvblwiLz5cbiAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvbiBhY3RpdmU+XG4gICAgICAgICAgQ29tcGFyZVxuICAgICAgICA8L0JyZWFkY3J1bWIuU2VjdGlvbj5cbiAgICAgIDwvQnJlYWRjcnVtYj5cblxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxHcmlkLlJvdyBzdHJldGNoZWQgaWQ9XCJjb21wYXJlQmxvY2tcIj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezE2fT5cbiAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgYXM9XCJoMVwiXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZQTiBwcm92aWRlIGNvbXBhcmlzb25cbiAgICAgICAgICAgICAgICA8SGVhZGVyLlN1YmhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIFNpZGUgLSBieSAtIHNpZGUgY29tcGFyaXNvbiBvZiBmZWF0dXJlcz8gcHJpY2VzIGFuZCByZXZpZXcuIFNlbGVjdCB1cCB0byAzIFZQTnNcbiAgICAgICAgICAgICAgICA8L0hlYWRlci5TdWJoZWFkZXI+XG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uRHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgdmVuZG9yXCJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlXG4gICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZlbmRvcjFcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuY29tcGFyZVZlbmRvcnNbJ3ZlbmRvcjEnXX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMuZ2V0VmVuZG9yc0xpc3RPcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9eyFwcm9wcy52ZW5kb3JzTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUlucHV0Q2hhbmdlVmVuZG9yc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidnMtZGl2aWRlZFwiPlZTPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkRyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IHZlbmRvclwiXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZVxuICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2ZW5kb3IyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNvbXBhcmVWZW5kb3JzWyd2ZW5kb3IyJ119XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmdldFZlbmRvcnNMaXN0T3B0aW9ucygpfVxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXshcHJvcHMudmVuZG9yc0xpc3R9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVJbnB1dENoYW5nZVZlbmRvcnN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInZzLWRpdmlkZWRcIj5WUzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Ecm9wZG93blxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCB2ZW5kb3JcIlxuICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmVuZG9yM1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jb21wYXJlVmVuZG9yc1sndmVuZG9yMyddfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5nZXRWZW5kb3JzTGlzdE9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17IXByb3BzLnZlbmRvcnNMaXN0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlSW5wdXRDaGFuZ2VWZW5kb3JzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgICAgICAgICB0bz17cHJvcHMuZ2V0Q29tcGFyZVVybCgpfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmNoZWNrQ29tcGFyZVZlbmRvckJ1dHRvbkRpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wYXJlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ29tcGFyZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTZ9PlxuICAgICAgICAgICAgPFNlZ21lbnQ+XG4gICAgICAgICAgICAgIDxHcmlkIGNvbHVtbnM9ezF9PlxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAocHJvcHMuZmlsdGVyKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMuZmlsdGVyKS5tYXAoKGtleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGZsdWlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN1YmhlYWRlclwiPntwcm9wcy5maWx0ZXJba2V5XVsndGl0bGUnXX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmdldElucHV0KGtleSwgcHJvcHMuZmlsdGVyW2tleV0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBmbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlciBmbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwic2hvcnRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD1cImZ1bGxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBmbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlciBmbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwic2hvcnRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD1cImZ1bGxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBmbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlciBmbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwic2hvcnRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD1cImZ1bGxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBmbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlciBmbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwic2hvcnRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD1cImZ1bGxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxEaXZpZGVyLz5cbiAgICAgICAgICAgICAgPEdyaWQgY29sdW1ucz17MX0+XG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlIGJhc2ljIGlkPVwiY29tcGFyZUxpc3RUYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgKHByb3BzLnZlbmRvcnNMaXN0KSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzLnZlbmRvcnNMaXN0KS5tYXAoKHJvd0tleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnZlbmRvcnNMaXN0W3Jvd0tleV1bJ25hbWUnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGwgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy52ZW5kb3JzTGlzdFtyb3dLZXldWydpbWFnZSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGwgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMudmVuZG9yc0xpc3Rbcm93S2V5XVsndXNlcl91c2VkJ119IHVzZXJzIHVzZWQgdGhpcyBjb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGwgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZGQgdG8gY29tcGFyaXNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52ZW5kb3JzTGlzdFtyb3dLZXldWydpZCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlSW5wdXRDaGFuZ2VBZGRDb21wcmFzc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHJvcHMuY2hlY2tDb21wYXJlVmVuZG9yQ2hlY2tlZChwcm9wcy52ZW5kb3JzTGlzdFtyb3dLZXldWydpZCddKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmNoZWNrQ29tcGFyZVZlbmRvckRpc2FibGVkKHByb3BzLnZlbmRvcnNMaXN0W3Jvd0tleV1bJ2lkJ10pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobG9hZGVySXRlbXMpLm1hcCgocm93S2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIgZmx1aWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD1cImZ1bGxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlciBmbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwiZnVsbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGxhY2Vob2xkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyIGZsdWlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9XCJmdWxsXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QbGFjZWhvbGRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGwgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIgZmx1aWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD1cImZ1bGxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmVWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IENvbXBhcmVWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcGFyZVZpZXcnXG5cbmltcG9ydCB7XG4gICAgZ2V0VmVuZG9yc0xpc3Rcbn0gZnJvbSAnLi4vLi4vLi4vYXBpL3ZlbmRvcidcblxuaW1wb3J0IHtcbiAgICBnZXRGaWx0ZXJMaXN0XG59IGZyb20gJy4uLy4uLy4uL2FwaS9maWx0ZXInXG5cbmNsYXNzIENvbXBhcmVDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nICAgOiAwLFxuICAgICAgICAgICAgdmVuZG9yc0xpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgY29tcGFyZVZlbmRvcnM6IHt9LFxuXG4gICAgICAgICAgICBmaWx0ZXIgICAgIDogZmFsc2UsXG4gICAgICAgICAgICBmaWx0ZXJEYXRhIDogeyBjYXRlZ29yeTogJ3ZwbicgfSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0VmVuZG9yc0xpc3QoKVxuICAgICAgICB0aGlzLmdldEZpbHRlckxpc3QoKVxuICAgIH1cblxuICAgIGdldFZlbmRvcnNMaXN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZmlsdGVyRGF0YVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmVuZG9yc0xpc3Q6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGdldFZlbmRvcnNMaXN0KGZpbHRlckRhdGEpO1xuICAgICAgICByZXN1bHQudGhlbihcbiAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICByb3dzXG4gICAgICAgICAgICAgICAgfSA9IHJlc3VsdFxuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlbmRvcnNMaXN0IDogcm93cyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBhbGVydChcIlJlamVjdGVkOiBcIiArIGVycm9yKTsgLy8gZXJyb3IgLSDQsNGA0LPRg9C80LXQvdGCIHJlamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFZlbmRvcnNMaXN0T3B0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHZlbmRvcnNMaXN0XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2ZW5kb3JzTGlzdCkge1xuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXkgICA6IHZlbmRvcnNMaXN0W2tleV1bJ2lkJ10sXG4gICAgICAgICAgICAgICAgdmFsdWUgOiB2ZW5kb3JzTGlzdFtrZXldWydpZCddLFxuICAgICAgICAgICAgICAgIHRleHQgIDogdmVuZG9yc0xpc3Rba2V5XVsnbmFtZSddLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb25zXG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2VWZW5kb3JzID0gKGUsIHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbGV0IHsgY29tcGFyZVZlbmRvcnMgfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICBjb21wYXJlVmVuZG9yc1tuYW1lXSA9IHZhbHVlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29tcGFyZVZlbmRvcnM6IGNvbXBhcmVWZW5kb3JzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENvbXBhcmVVcmwgPSAoKSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBjb21wYXJlVmVuZG9yc1xuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGlmICghY29tcGFyZVZlbmRvcnMpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICB2ZW5kb3IxLFxuICAgICAgICAgICAgdmVuZG9yMixcbiAgICAgICAgICAgIHZlbmRvcjNcbiAgICAgICAgfSA9IGNvbXBhcmVWZW5kb3JzXG5cbiAgICAgICAgbGV0IHVybCA9ICcvY29tcGFyZS0nXG5cbiAgICAgICAgbGV0IHZlbmRvckFycmF5ID0gW11cblxuICAgICAgICBpZiAodmVuZG9yMSkge1xuICAgICAgICAgICAgdmVuZG9yQXJyYXkucHVzaCh0aGlzLmNoZWNrVmVuZG9yVG9VcmwodmVuZG9yMSkpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVuZG9yMikge1xuICAgICAgICAgICAgdmVuZG9yQXJyYXkucHVzaCh0aGlzLmNoZWNrVmVuZG9yVG9VcmwodmVuZG9yMikpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVuZG9yMykge1xuICAgICAgICAgICAgdmVuZG9yQXJyYXkucHVzaCh0aGlzLmNoZWNrVmVuZG9yVG9VcmwodmVuZG9yMykpXG4gICAgICAgIH1cblxuICAgICAgICB1cmwgKz0gdmVuZG9yQXJyYXkuam9pbignLXdpdGgtJylcblxuICAgICAgICByZXR1cm4gdXJsXG5cbiAgICB9XG5cbiAgICBjaGVja1ZlbmRvclRvVXJsID0gKHZlbmRvcklkKSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICB2ZW5kb3JzTGlzdFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGlmICghdmVuZG9ySWQpIHJldHVybiAnJ1xuXG4gICAgICAgIGxldCB2ZW5kb3JOYW1lID0gJyc7XG5cbiAgICAgICAgZm9yKGxldCBrIGluIHZlbmRvcnNMaXN0KSB7XG4gICAgICAgICAgICBpZiAoIXZlbmRvcnNMaXN0W2tdKSBjb250aW51ZVxuXG4gICAgICAgICAgICBpZiAodmVuZG9yc0xpc3Rba11bJ2lkJ10gPT0gdmVuZG9ySWQpIHtcbiAgICAgICAgICAgICAgICB2ZW5kb3JOYW1lID0gdmVuZG9yc0xpc3Rba11bJ25hbWUnXVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVuZG9yTmFtZS5yZXBsYWNlKC9cXHMvaWcsICctJykucmVwbGFjZSgnLycsICctJykudG9Mb3dlckNhc2UoKVxuICAgIH1cblxuXG4gICAgZ2V0RmlsdGVyTGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGZpbHRlckRhdGFcbiAgICAgICAgfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICBsZXQgcmVzdWx0ID0gZ2V0RmlsdGVyTGlzdChmaWx0ZXJEYXRhKTtcblxuICAgICAgICByZXN1bHQudGhlbihcbiAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgICAgIH0gPSByZXN1bHRcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyIDogcm93cyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBhbGVydChcIlJlamVjdGVkOiBcIiArIGVycm9yKTsgLy8gZXJyb3IgLSDQsNGA0LPRg9C80LXQvdGCIHJlamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldElucHV0ID0gKGtleSwgcm93KSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBmaWx0ZXJEYXRhXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIG11bHRpcGxlLFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9ID0gcm93XG5cbiAgICAgICAgaWYgKCF0eXBlKSB0eXBlID0gJ3RleHQnXG5cbiAgICAgICAgbGV0IGlucHV0ID0gZmFsc2VcbiAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICBpbnB1dCA9IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsgdHlwZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17IHRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyBrZXkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBmaWx0ZXJEYXRhW2tleV0gfHwgJycgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlRWRpdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Ryb3Bkb3duJzpcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IFtdXG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGsgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgOiBrICsgZGF0YVtrXVsnaWQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICA6IGRhdGFba11bJ25hbWUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IGRhdGFba11bJ2lkJ11cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbnB1dCA9IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsga2V5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBvcHRpb25zIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsgdGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9eyBtdWx0aXBsZSA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgbXVsdGlwbGUgPyAoZmlsdGVyRGF0YVtrZXldID8gZmlsdGVyRGF0YVtrZXldIDogW10pIDogZmlsdGVyRGF0YVtrZXldIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVJbnB1dENoYW5nZUVkaXQgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBpbnB1dCA9IFtdXG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGsgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17IGRhdGFba11bJ25hbWUnXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBkYXRhW2tdWyduYW1lJ10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyBrZXkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVJbnB1dENoYW5nZUNoZWNrQm94IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgKGZpbHRlckRhdGEpLmhhc093blByb3BlcnR5KGtleSkgPT0gdHJ1ZSAmJiAoZmlsdGVyRGF0YVtrZXldKS5pbmRleE9mKGRhdGFba11bJ25hbWUnXSkgIT0gLTEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnB1dFxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlQ2hlY2tCb3ggPSAoZSwgeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBmaWx0ZXJEYXRhXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgaWYgKGZpbHRlckRhdGEuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgZmlsdGVyRGF0YVtuYW1lXS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGZpbHRlckRhdGFbbmFtZV0uc3BsaWNlKGZpbHRlckRhdGFbbmFtZV0uaW5kZXhPZih2YWx1ZSksIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWZpbHRlckRhdGEuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJEYXRhW25hbWVdID0gW11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlsdGVyRGF0YVtuYW1lXS5wdXNoKHZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJEYXRhOiBmaWx0ZXJEYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0VmVuZG9yc0xpc3QoKVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlQWRkQ29tcHJhc3Npb24gPSAoZSwgeyB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBjb21wYXJlVmVuZG9yc1xuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGlmIChjb21wYXJlVmVuZG9yc1sndmVuZG9yMSddID09IHZhbHVlKSB7XG4gICAgICAgICAgICBjb21wYXJlVmVuZG9yc1sndmVuZG9yMSddID0gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKGNvbXBhcmVWZW5kb3JzWyd2ZW5kb3IyJ10gPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGNvbXBhcmVWZW5kb3JzWyd2ZW5kb3IyJ10gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAoY29tcGFyZVZlbmRvcnNbJ3ZlbmRvcjMnXSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgY29tcGFyZVZlbmRvcnNbJ3ZlbmRvcjMnXSA9IG51bGxcbiAgICAgICAgfSBlbHNlIGlmICghY29tcGFyZVZlbmRvcnNbJ3ZlbmRvcjEnXSkge1xuICAgICAgICAgICAgY29tcGFyZVZlbmRvcnNbJ3ZlbmRvcjEnXSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAoIWNvbXBhcmVWZW5kb3JzWyd2ZW5kb3IyJ10pIHtcbiAgICAgICAgICAgIGNvbXBhcmVWZW5kb3JzWyd2ZW5kb3IyJ10gPSB2YWx1ZVxuICAgICAgICB9IGVsc2UgaWYgKCFjb21wYXJlVmVuZG9yc1sndmVuZG9yMyddKSB7XG4gICAgICAgICAgICBjb21wYXJlVmVuZG9yc1sndmVuZG9yMyddID0gdmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29tcGFyZVZlbmRvcnM6IGNvbXBhcmVWZW5kb3JzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlRWRpdCA9IChlLCB7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCB7IGZpbHRlckRhdGEgfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICBmaWx0ZXJEYXRhW25hbWVdID0gdmFsdWVcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlckRhdGE6IGZpbHRlckRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRWZW5kb3JzTGlzdCgpXG4gICAgfVxuXG4gICAgY2hlY2tDb21wYXJlVmVuZG9yRGlzYWJsZWQgPSAodmVuZG9ySWQpID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGNvbXBhcmVWZW5kb3JzXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgaWYgKHZlbmRvcklkID09IGNvbXBhcmVWZW5kb3JzWyd2ZW5kb3IxJ10gfHwgdmVuZG9ySWQgPT0gY29tcGFyZVZlbmRvcnNbJ3ZlbmRvcjInXSB8fCB2ZW5kb3JJZCA9PSBjb21wYXJlVmVuZG9yc1sndmVuZG9yMyddKSByZXR1cm4gZmFsc2VcblxuICAgICAgICByZXR1cm4gKGNvbXBhcmVWZW5kb3JzWyd2ZW5kb3IxJ10gJiYgY29tcGFyZVZlbmRvcnNbJ3ZlbmRvcjInXSAmJiBjb21wYXJlVmVuZG9yc1sndmVuZG9yMyddKSA/IHRydWUgOiBmYWxzZVxuICAgIH1cblxuICAgIGNoZWNrQ29tcGFyZVZlbmRvckNoZWNrZWQgPSAodmVuZG9ySWQpID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGNvbXBhcmVWZW5kb3JzXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgaWYgKHZlbmRvcklkID09IGNvbXBhcmVWZW5kb3JzWyd2ZW5kb3IxJ10gfHwgdmVuZG9ySWQgPT0gY29tcGFyZVZlbmRvcnNbJ3ZlbmRvcjInXSB8fCB2ZW5kb3JJZCA9PSBjb21wYXJlVmVuZG9yc1sndmVuZG9yMyddKSByZXR1cm4gdHJ1ZVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuXG4gICAgY2hlY2tDb21wYXJlVmVuZG9yQnV0dG9uRGlzYWJsZWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBjb21wYXJlVmVuZG9yc1xuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICBpZiAoY29tcGFyZVZlbmRvcnNbJ3ZlbmRvcjEnXSkge1xuICAgICAgICAgICAgaSsrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcGFyZVZlbmRvcnNbJ3ZlbmRvcjInXSkge1xuICAgICAgICAgICAgaSsrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcGFyZVZlbmRvcnNbJ3ZlbmRvcjMnXSkge1xuICAgICAgICAgICAgaSsrXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaSA8IDIgPyB0cnVlIDogZmFsc2VcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8Q29tcGFyZVZpZXdcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIGdldFZlbmRvcnNMaXN0T3B0aW9ucz17IHRoaXMuZ2V0VmVuZG9yc0xpc3RPcHRpb25zIH1cblxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZVZlbmRvcnM9eyB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlVmVuZG9ycyB9XG5cbiAgICAgICAgICAgICAgICAgICAgZ2V0Q29tcGFyZVVybD17IHRoaXMuZ2V0Q29tcGFyZVVybCB9XG5cbiAgICAgICAgICAgICAgICAgICAgZ2V0SW5wdXQ9eyB0aGlzLmdldElucHV0IH1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2VFZGl0PXsgdGhpcy5oYW5kbGVJbnB1dENoYW5nZUVkaXQgfVxuXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlQWRkQ29tcHJhc3Npb249eyB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlQWRkQ29tcHJhc3Npb24gfVxuICAgICAgICAgICAgICAgICAgICBjaGVja0NvbXBhcmVWZW5kb3JEaXNhYmxlZD17IHRoaXMuY2hlY2tDb21wYXJlVmVuZG9yRGlzYWJsZWQgfVxuICAgICAgICAgICAgICAgICAgICBjaGVja0NvbXBhcmVWZW5kb3JDaGVja2VkPXsgdGhpcy5jaGVja0NvbXBhcmVWZW5kb3JDaGVja2VkIH1cblxuICAgICAgICAgICAgICAgICAgICBjaGVja0NvbXBhcmVWZW5kb3JCdXR0b25EaXNhYmxlZD17IHRoaXMuY2hlY2tDb21wYXJlVmVuZG9yQnV0dG9uRGlzYWJsZWQgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wYXJlQ29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9