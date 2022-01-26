(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/client/api/brand.js":
/*!*********************************!*\
  !*** ./src/client/api/brand.js ***!
  \*********************************/
/*! exports provided: getBrandList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrandList", function() { return getBrandList; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function getBrandList(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/brand/list', {
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

/***/ "./src/client/api/slider.js":
/*!**********************************!*\
  !*** ./src/client/api/slider.js ***!
  \**********************************/
/*! exports provided: getSliderList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSliderList", function() { return getSliderList; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function getSliderList(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()('https://api.savingsdealz.com/slider/list', {
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

/***/ "./src/client/blocks/BrandList/components/BrandListView.js":
/*!*****************************************************************!*\
  !*** ./src/client/blocks/BrandList/components/BrandListView.js ***!
  \*****************************************************************/
/*! exports provided: BrandListView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandListView", function() { return BrandListView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");




var BrandListView = function BrandListView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header"
  }, "Brands"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], null, props.brands ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    grouped: true
  }, Object.keys(props.brands).map(function (rowKey) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
      onChange: props.handleInputChangeCheckBox,
      checked: props.checkBrands.indexOf(props.brands[rowKey]['id']) != -1,
      value: props.brands[rowKey]['id'],
      label: props.brands[rowKey]['name']
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "short"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "short"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "short"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Placeholder"].Line, {
    length: "full"
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (BrandListView);

/***/ }),

/***/ "./src/client/blocks/BrandList/containers/BrandListContainer.js":
/*!**********************************************************************!*\
  !*** ./src/client/blocks/BrandList/containers/BrandListContainer.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BrandListView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BrandListView */ "./src/client/blocks/BrandList/components/BrandListView.js");
/* harmony import */ var _api_brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/brand */ "./src/client/api/brand.js");
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





var BrandListContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(BrandListContainer, _React$Component);

  var _super = _createSuper(BrandListContainer);

  function BrandListContainer(props, context) {
    var _this;

    _classCallCheck(this, BrandListContainer);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "getBrandList", function () {
      var searchData = _this.state.searchData;
      var result = Object(_api_brand__WEBPACK_IMPORTED_MODULE_2__["getBrandList"])(searchData);
      result.then(function (result) {
        var status = result.status,
            rows = result.rows;

        if (status) {
          _this.setState({
            brands: rows
          });
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeCheckBox", function (e, _ref) {
      var value = _ref.value;
      var checkBrands = _this.state.checkBrands;

      if (checkBrands.indexOf(value) !== -1) {
        checkBrands.splice(checkBrands.indexOf(value), 1);
      } else {
        checkBrands.push(value);
      }

      _this.props.actionCheckedBrands(checkBrands);

      _this.setState({
        checkBrands: checkBrands
      });
    });

    _this.state = {
      loading: 0,
      searchData: props.searchData,
      brands: false,
      checkBrands: []
    };

    _this.getBrandList();

    return _this;
  }

  _createClass(BrandListContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BrandListView__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, this.state, {
        handleInputChangeCheckBox: this.handleInputChangeCheckBox
      }));
    }
  }]);

  return BrandListContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BrandListContainer);

/***/ }),

/***/ "./src/client/blocks/BrandList/index.js":
/*!**********************************************!*\
  !*** ./src/client/blocks/BrandList/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_BrandListContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/BrandListContainer */ "./src/client/blocks/BrandList/containers/BrandListContainer.js");

/* harmony default export */ __webpack_exports__["default"] = (_containers_BrandListContainer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/client/blocks/FilterBlock/components/FilterBlockView.js":
/*!*********************************************************************!*\
  !*** ./src/client/blocks/FilterBlock/components/FilterBlockView.js ***!
  \*********************************************************************/
/*! exports provided: FilterBlockView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBlockView", function() { return FilterBlockView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var FilterBlockView = function FilterBlockView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], null, props.filter ? Object.keys(props.filter).map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      inline: true,
      className: "subheader"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "subheader"
    }, props.filter[key]['title'])), props.getInput(key, props.filter[key]));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "short"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "short"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "short"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Placeholder"].Line, {
    length: "full"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Button, {
    className: "center-button",
    primary: true,
    content: props.buttonTitle,
    onClick: props.handleClickFindButton,
    disabled: !props.filter
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (FilterBlockView);

/***/ }),

/***/ "./src/client/blocks/FilterBlock/containers/FilterBlockContainer.js":
/*!**************************************************************************!*\
  !*** ./src/client/blocks/FilterBlock/containers/FilterBlockContainer.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_FilterBlockView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FilterBlockView */ "./src/client/blocks/FilterBlock/components/FilterBlockView.js");
/* harmony import */ var _api_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/filter */ "./src/client/api/filter.js");
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






var FilterBlockContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterBlockContainer, _React$Component);

  var _super = _createSuper(FilterBlockContainer);

  function FilterBlockContainer(props, context) {
    var _this;

    _classCallCheck(this, FilterBlockContainer);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "getFilterList", function () {
      var searchData = _this.props.searchData;
      var result = Object(_api_filter__WEBPACK_IMPORTED_MODULE_3__["getFilterList"])(searchData);
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

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeCheckBox", function (e, _ref) {
      var name = _ref.name,
          value = _ref.value;
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
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeEdit", function (e, _ref2) {
      var name = _ref2.name,
          value = _ref2.value;
      e.preventDefault();
      var filterData = _this.state.filterData;
      filterData[name] = value;

      _this.setState({
        filterData: filterData
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickFindButton", function () {
      var filterData = _this.state.filterData;

      _this.props.actionClickFind(filterData);
    });

    _this.state = {
      loading: 0,
      buttonTitle: props.buttonTitle,
      filter: false,
      filterData: {}
    };

    _this.getFilterList();

    return _this;
  }

  _createClass(FilterBlockContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FilterBlockView__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.state, {
        getInput: this.getInput,
        handleClickFindButton: this.handleClickFindButton
      }));
    }
  }]);

  return FilterBlockContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FilterBlockContainer);

/***/ }),

/***/ "./src/client/blocks/FilterBlock/index.js":
/*!************************************************!*\
  !*** ./src/client/blocks/FilterBlock/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_FilterBlockContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/FilterBlockContainer */ "./src/client/blocks/FilterBlock/containers/FilterBlockContainer.js");

/* harmony default export */ __webpack_exports__["default"] = (_containers_FilterBlockContainer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/client/blocks/MainSlider/components/MainSliderView.js":
/*!*******************************************************************!*\
  !*** ./src/client/blocks/MainSlider/components/MainSliderView.js ***!
  \*******************************************************************/
/*! exports provided: CustomPrevArrow, CustomNextArrow, MainSliderView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPrevArrow", function() { return CustomPrevArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomNextArrow", function() { return CustomNextArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSliderView", function() { return MainSliderView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



 //import '../assets/MainSliderView.scss'


function CustomPrevArrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/images/arrow-left.svg",
    onClick: onClick,
    className: "custom-slick prev mobile hidden",
    width: 20,
    height: 20
  });
}
function CustomNextArrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/images/arrow-right.svg",
    onClick: onClick,
    className: "custom-slick next mobile hidden",
    width: 20,
    height: 20
  });
}
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomPrevArrow, null),
  nextArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomNextArrow, null),
  customPaging: function customPaging(i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slider-paging"
    });
  }
};
var MainSliderView = function MainSliderView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, settings, !props.slides ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Placeholder"], {
    id: "previewSlide"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Placeholder"].Image, null))) : Object.keys(props.slides).map(function (rowKey) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: 'slide-' + props.slides['id']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
      src: props.slides[rowKey]['image']
    }));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MainSliderView);

/***/ }),

/***/ "./src/client/blocks/MainSlider/containers/MainSliderContainer.js":
/*!************************************************************************!*\
  !*** ./src/client/blocks/MainSlider/containers/MainSliderContainer.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MainSliderView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MainSliderView */ "./src/client/blocks/MainSlider/components/MainSliderView.js");
/* harmony import */ var _api_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/slider */ "./src/client/api/slider.js");
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





var MainSliderContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(MainSliderContainer, _React$Component);

  var _super = _createSuper(MainSliderContainer);

  function MainSliderContainer(props, context) {
    var _this;

    _classCallCheck(this, MainSliderContainer);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "getSliderList", function () {
      var result = Object(_api_slider__WEBPACK_IMPORTED_MODULE_2__["getSliderList"])();
      result.then(function (result) {
        var status = result.status,
            rows = result.rows;

        if (status) {
          _this.setState({
            slides: rows
          });
        }
      }, function (error) {
        alert("Rejected: " + error); // error - аргумент reject
      });
    });

    _this.state = {
      loading: 0,
      slides: false
    };

    _this.getSliderList();

    return _this;
  }

  _createClass(MainSliderContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainSliderView__WEBPACK_IMPORTED_MODULE_1__["default"], this.state);
    }
  }]);

  return MainSliderContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MainSliderContainer);

/***/ }),

/***/ "./src/client/blocks/MainSlider/index.js":
/*!***********************************************!*\
  !*** ./src/client/blocks/MainSlider/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_MainSliderContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/MainSliderContainer */ "./src/client/blocks/MainSlider/containers/MainSliderContainer.js");

/* harmony default export */ __webpack_exports__["default"] = (_containers_MainSliderContainer__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS9icmFuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9hcGkvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYmxvY2tzL0JyYW5kTGlzdC9jb21wb25lbnRzL0JyYW5kTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9ibG9ja3MvQnJhbmRMaXN0L2NvbnRhaW5lcnMvQnJhbmRMaXN0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYmxvY2tzL0JyYW5kTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2Jsb2Nrcy9GaWx0ZXJCbG9jay9jb21wb25lbnRzL0ZpbHRlckJsb2NrVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2Jsb2Nrcy9GaWx0ZXJCbG9jay9jb250YWluZXJzL0ZpbHRlckJsb2NrQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYmxvY2tzL0ZpbHRlckJsb2NrL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYmxvY2tzL01haW5TbGlkZXIvY29tcG9uZW50cy9NYWluU2xpZGVyVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2Jsb2Nrcy9NYWluU2xpZGVyL2NvbnRhaW5lcnMvTWFpblNsaWRlckNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2Jsb2Nrcy9NYWluU2xpZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvaW5jL2luYy5qcyJdLCJuYW1lcyI6WyJnZXRCcmFuZExpc3QiLCJkYXRhIiwiYXhpb3MiLCJtZXRob2QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldEZpbHRlckxpc3QiLCJnZXRTbGlkZXJMaXN0IiwiQnJhbmRMaXN0VmlldyIsInByb3BzIiwiYnJhbmRzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInJvd0tleSIsImhhbmRsZUlucHV0Q2hhbmdlQ2hlY2tCb3giLCJjaGVja0JyYW5kcyIsImluZGV4T2YiLCJCcmFuZExpc3RDb250YWluZXIiLCJjb250ZXh0Iiwic2VhcmNoRGF0YSIsInN0YXRlIiwicmVzdWx0Iiwic3RhdHVzIiwicm93cyIsInNldFN0YXRlIiwiYWxlcnQiLCJlIiwidmFsdWUiLCJzcGxpY2UiLCJwdXNoIiwiYWN0aW9uQ2hlY2tlZEJyYW5kcyIsImxvYWRpbmciLCJSZWFjdCIsIkNvbXBvbmVudCIsIkZpbHRlckJsb2NrVmlldyIsImZpbHRlciIsImtleSIsImdldElucHV0IiwiYnV0dG9uVGl0bGUiLCJoYW5kbGVDbGlja0ZpbmRCdXR0b24iLCJGaWx0ZXJCbG9ja0NvbnRhaW5lciIsInJvdyIsImZpbHRlckRhdGEiLCJ0eXBlIiwidGl0bGUiLCJtdWx0aXBsZSIsImlucHV0IiwiaGFuZGxlSW5wdXRDaGFuZ2VFZGl0Iiwib3B0aW9ucyIsImsiLCJ0ZXh0IiwiaGFzT3duUHJvcGVydHkiLCJuYW1lIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb25DbGlja0ZpbmQiLCJDdXN0b21QcmV2QXJyb3ciLCJjbGFzc05hbWUiLCJzdHlsZSIsIm9uQ2xpY2siLCJDdXN0b21OZXh0QXJyb3ciLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJjdXN0b21QYWdpbmciLCJpIiwiTWFpblNsaWRlclZpZXciLCJzbGlkZXMiLCJNYWluU2xpZGVyQ29udGFpbmVyIiwiY2xvbmVPYmplY3QiLCJvYmplY3QiLCJuZXdPYmplY3QiLCJjaGVja051bWJlcklucHV0Iiwia2V5Q29kZSIsImN0cmxLZXkiLCJ2YWxpZGF0ZUVtYWlsIiwiZW1haWwiLCJyZSIsInRlc3QiLCJnZXRQYXJhbWV0ZXJCeU5hbWUiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmNlUHJpY2UiLCJwcmljZSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNBLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQ2pDLFNBQU9DLDRDQUFLLENBQUMseUNBQUQsRUFBNEM7QUFDcERDLFVBQU0sRUFBRSxNQUQ0QztBQUVwREYsUUFBSSxFQUFFQSxJQUY4QztBQUdwREcsbUJBQWUsRUFBRTtBQUhtQyxHQUE1QyxDQUFMLENBSUZDLElBSkUsQ0FJRyxVQUFVQyxRQUFWLEVBQW9CO0FBQzFCLFdBQU9BLFFBQVEsQ0FBQ0wsSUFBaEI7QUFDRCxHQU5JLEVBTUZNLEtBTkUsQ0FNSSxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELEdBUkksQ0FBUDtBQVNELEM7Ozs7Ozs7Ozs7OztBQ1pEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTRyxhQUFULENBQXVCVixJQUF2QixFQUE2QjtBQUNsQyxTQUFPQyw0Q0FBSyxDQUFDLDBDQUFELEVBQTZDO0FBQ3JEQyxVQUFNLEVBQUUsTUFENkM7QUFFckRGLFFBQUksRUFBRUEsSUFGK0M7QUFHckRHLG1CQUFlLEVBQUU7QUFIb0MsR0FBN0MsQ0FBTCxDQUlGQyxJQUpFLENBSUcsVUFBVUMsUUFBVixFQUFvQjtBQUMxQixXQUFPQSxRQUFRLENBQUNMLElBQWhCO0FBQ0QsR0FOSSxFQU1GTSxLQU5FLENBTUksVUFBVUMsS0FBVixFQUFpQjtBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxHQVJJLENBQVA7QUFTRCxDOzs7Ozs7Ozs7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TCxDQUFhLFNBQWIsRUFBd0IsTUFBeEIsQ0FBUDtBQUNBLE1BQUlDLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsU0FBU3RDLElBQVQsR0FBZ0IsbUJBQTNCLENBQVo7QUFBQSxNQUNJdUMsT0FBTyxHQUFHRixLQUFLLENBQUNHLElBQU4sQ0FBV1IsR0FBWCxDQURkO0FBRUEsTUFBSSxDQUFDTyxPQUFMLEVBQWMsT0FBTyxJQUFQO0FBQ2QsTUFBSSxDQUFDQSxPQUFPLENBQUMsQ0FBRCxDQUFaLEVBQWlCLE9BQU8sRUFBUDtBQUNqQixTQUFPRSxrQkFBa0IsQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSCxPQUFYLENBQW1CLEtBQW5CLEVBQTBCLEdBQTFCLENBQUQsQ0FBekI7QUFDSDtBQUVNLFNBQVNNLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQzlCQSxPQUFLLEdBQUdBLEtBQUssQ0FBQ0MsUUFBTixFQUFSO0FBQ0EsU0FBT0QsS0FBSyxDQUFDUCxPQUFOLENBQWMsNkJBQWQsRUFBNkMsS0FBN0MsQ0FBUDtBQUNILEMiLCJmaWxlIjoiMy5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJhbmRMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL2JyYW5kL2xpc3QnLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyTGlzdChkYXRhKSB7XG4gIHJldHVybiBheGlvcygnaHR0cHM6Ly9hcGkuc2F2aW5nc2RlYWx6LmNvbS9maWx0ZXIvbGlzdCcsIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTbGlkZXJMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zKCdodHRwczovL2FwaS5zYXZpbmdzZGVhbHouY29tL3NsaWRlci9saXN0Jywge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgeyBGb3JtLCBQbGFjZWhvbGRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5leHBvcnQgY29uc3QgQnJhbmRMaXN0VmlldyA9IChwcm9wcykgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgICAgICBCcmFuZHNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb3JtPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIChwcm9wcy5icmFuZHMpID9cbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGdyb3VwZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocHJvcHMuYnJhbmRzKS5tYXAoKHJvd0tleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgcHJvcHMuaGFuZGxlSW5wdXRDaGFuZ2VDaGVja0JveCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyAocHJvcHMuY2hlY2tCcmFuZHMpLmluZGV4T2YocHJvcHMuYnJhbmRzW3Jvd0tleV1bJ2lkJ10pICE9IC0xIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy5icmFuZHNbcm93S2V5XVsnaWQnXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsgcHJvcHMuYnJhbmRzW3Jvd0tleV1bJ25hbWUnXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgKSA6XG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlciBmbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J3Nob3J0JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J2Z1bGwnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPSdmdWxsJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J3Nob3J0JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J2Z1bGwnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPSdmdWxsJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J3Nob3J0JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J2Z1bGwnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPSdmdWxsJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGxhY2Vob2xkZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvRm9ybT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBCcmFuZExpc3RWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJyYW5kTGlzdFZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9CcmFuZExpc3RWaWV3J1xuXG5pbXBvcnQge2dldEJyYW5kTGlzdH0gZnJvbSAnLi4vLi4vLi4vYXBpL2JyYW5kJ1xuXG5jbGFzcyBCcmFuZExpc3RDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiAwLFxuICAgICAgICAgICAgc2VhcmNoRGF0YTogcHJvcHMuc2VhcmNoRGF0YSxcbiAgICAgICAgICAgIGJyYW5kczogZmFsc2UsXG4gICAgICAgICAgICBjaGVja0JyYW5kczogW10sXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldEJyYW5kTGlzdCgpXG4gICAgfVxuXG4gICAgZ2V0QnJhbmRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgc2VhcmNoRGF0YVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBnZXRCcmFuZExpc3Qoc2VhcmNoRGF0YSk7XG5cbiAgICAgICAgcmVzdWx0LnRoZW4oXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgcm93cyxcbiAgICAgICAgICAgICAgICB9ID0gcmVzdWx0XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kczogcm93cyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUmVqZWN0ZWQ6IFwiICsgZXJyb3IpOyAvLyBlcnJvciAtINCw0YDQs9GD0LzQtdC90YIgcmVqZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2VDaGVja0JveCA9IChlLCB7dmFsdWV9KSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBjaGVja0JyYW5kc1xuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGlmIChjaGVja0JyYW5kcy5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNoZWNrQnJhbmRzLnNwbGljZShjaGVja0JyYW5kcy5pbmRleE9mKHZhbHVlKSwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrQnJhbmRzLnB1c2godmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLmFjdGlvbkNoZWNrZWRCcmFuZHMoY2hlY2tCcmFuZHMpXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjaGVja0JyYW5kczogY2hlY2tCcmFuZHNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPEJyYW5kTGlzdFZpZXdcbiAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxuXG4gICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZUNoZWNrQm94PXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlQ2hlY2tCb3h9XG4gICAgICAgIC8+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcmFuZExpc3RDb250YWluZXJcbiIsImltcG9ydCBCcmFuZExpc3RDb250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL0JyYW5kTGlzdENvbnRhaW5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IEJyYW5kTGlzdENvbnRhaW5lcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IEZvcm0sIFBsYWNlaG9sZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJCbG9ja1ZpZXcgPSAocHJvcHMpID0+IChcbiAgICA8Rm9ybT5cbiAgICAgICAgeyBcbiAgICAgICAgICAgIChwcm9wcy5maWx0ZXIpID8gKFxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzLmZpbHRlcikubWFwKChrZXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaW5saW5lIGNsYXNzTmFtZT0nc3ViaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdzdWJoZWFkZXInPnsgcHJvcHMuZmlsdGVyW2tleV1bJ3RpdGxlJ10gfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmdldElucHV0KGtleSwgcHJvcHMuZmlsdGVyW2tleV0pIH1cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyIGZsdWlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPSdzaG9ydCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nZnVsbCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD0nc2hvcnQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J2Z1bGwnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J2Z1bGwnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J2Z1bGwnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J2Z1bGwnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9J3Nob3J0JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPSdmdWxsJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPSdmdWxsJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPSdmdWxsJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPSdmdWxsJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxuICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIDxGb3JtLkJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjZW50ZXItYnV0dG9uJ1xuICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgY29udGVudD17IHByb3BzLmJ1dHRvblRpdGxlIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5oYW5kbGVDbGlja0ZpbmRCdXR0b24gfVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyAhcHJvcHMuZmlsdGVyIH1cbiAgICAgICAgLz5cbiAgICA8L0Zvcm0+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJsb2NrVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IEZpbHRlckJsb2NrVmlldyBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlckJsb2NrVmlldydcblxuaW1wb3J0IHtcbiAgICBnZXRGaWx0ZXJMaXN0XG59IGZyb20gJy4uLy4uLy4uL2FwaS9maWx0ZXInXG5cbmNsYXNzIEZpbHRlckJsb2NrQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nICAgICA6IDAsXG4gICAgICAgICAgICBidXR0b25UaXRsZSA6IHByb3BzLmJ1dHRvblRpdGxlLFxuICAgICAgICAgICAgZmlsdGVyICAgICA6IGZhbHNlLFxuICAgICAgICAgICAgZmlsdGVyRGF0YSA6IHt9LFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRGaWx0ZXJMaXN0KClcbiAgICB9XG5cbiAgICBnZXRGaWx0ZXJMaXN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgc2VhcmNoRGF0YVxuICAgICAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBnZXRGaWx0ZXJMaXN0KHNlYXJjaERhdGEpO1xuXG4gICAgICAgIHJlc3VsdC50aGVuKFxuICAgICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICAgICAgfSA9IHJlc3VsdFxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIgOiByb3dzLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIGFsZXJ0KFwiUmVqZWN0ZWQ6IFwiICsgZXJyb3IpOyAvLyBlcnJvciAtINCw0YDQs9GD0LzQtdC90YIgcmVqZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0SW5wdXQgPSAoa2V5LCByb3cpID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGZpbHRlckRhdGFcbiAgICAgICAgfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICBsZXQge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgbXVsdGlwbGUsXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH0gPSByb3dcblxuICAgICAgICBpZiAoIXR5cGUpIHR5cGUgPSAndGV4dCdcblxuICAgICAgICBsZXQgaW5wdXQgPSBmYWxzZVxuICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgIGlucHV0ID0gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eyB0eXBlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsgdGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IGtleSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGZpbHRlckRhdGFba2V5XSB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2VFZGl0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZHJvcGRvd24nOlxuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gW11cblxuICAgICAgICAgICAgICAgIGZvcihsZXQgayBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgICA6IGsgKyBkYXRhW2tdWydpZCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgIDogZGF0YVtrXVsnbmFtZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogZGF0YVtrXVsnaWQnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlucHV0ID0gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5TZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyBrZXkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IG9wdGlvbnMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyB0aXRsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17IG11bHRpcGxlID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBtdWx0aXBsZSA/IChmaWx0ZXJEYXRhW2tleV0gPyBmaWx0ZXJEYXRhW2tleV0gOiBbXSkgOiBmaWx0ZXJEYXRhW2tleV0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlRWRpdCB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGlucHV0ID0gW11cblxuICAgICAgICAgICAgICAgIGZvcihsZXQgayBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsgZGF0YVtrXVsnbmFtZSddIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGRhdGFba11bJ25hbWUnXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IGtleSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlQ2hlY2tCb3ggfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyAoZmlsdGVyRGF0YSkuaGFzT3duUHJvcGVydHkoa2V5KSA9PSB0cnVlICYmIChmaWx0ZXJEYXRhW2tleV0pLmluZGV4T2YoZGF0YVtrXVsnbmFtZSddKSAhPSAtMSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlucHV0XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2VDaGVja0JveCA9IChlLCB7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGZpbHRlckRhdGFcbiAgICAgICAgfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICBpZiAoZmlsdGVyRGF0YS5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBmaWx0ZXJEYXRhW25hbWVdLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgZmlsdGVyRGF0YVtuYW1lXS5zcGxpY2UoZmlsdGVyRGF0YVtuYW1lXS5pbmRleE9mKHZhbHVlKSwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZmlsdGVyRGF0YS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIGZpbHRlckRhdGFbbmFtZV0gPSBbXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaWx0ZXJEYXRhW25hbWVdLnB1c2godmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlckRhdGE6IGZpbHRlckRhdGFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2VFZGl0ID0gKGUsIHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbGV0IHsgZmlsdGVyRGF0YSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGZpbHRlckRhdGFbbmFtZV0gPSB2YWx1ZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlckRhdGE6IGZpbHRlckRhdGFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2tGaW5kQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZmlsdGVyRGF0YVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIHRoaXMucHJvcHMuYWN0aW9uQ2xpY2tGaW5kKGZpbHRlckRhdGEpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPEZpbHRlckJsb2NrVmlld1xuICAgICAgICAgICAgICAgICAgICB7IC4uLnRoaXMuc3RhdGUgfVxuICAgICAgICAgICAgICAgICAgICBnZXRJbnB1dD17IHRoaXMuZ2V0SW5wdXQgfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGlja0ZpbmRCdXR0b249eyB0aGlzLmhhbmRsZUNsaWNrRmluZEJ1dHRvbiB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJsb2NrQ29udGFpbmVyXG4iLCJpbXBvcnQgRmlsdGVyQmxvY2tDb250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL0ZpbHRlckJsb2NrQ29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQmxvY2tDb250YWluZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuXG4vL2ltcG9ydCAnLi4vYXNzZXRzL01haW5TbGlkZXJWaWV3LnNjc3MnXG5cbmltcG9ydCB7XG4gICAgSW1hZ2UsXG4gICAgUGxhY2Vob2xkZXJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbVByZXZBcnJvdyhwcm9wcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2Fycm93LWxlZnQuc3ZnXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyBvbkNsaWNrIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1zbGljayBwcmV2IG1vYmlsZSBoaWRkZW5cIlxuICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDdXN0b21OZXh0QXJyb3cocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9hcnJvdy1yaWdodC5zdmdcIlxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLXNsaWNrIG5leHQgbW9iaWxlIGhpZGRlblwiXG4gICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAvPlxuICAgIClcbn1cblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBwcmV2QXJyb3c6IDxDdXN0b21QcmV2QXJyb3cgLz4sXG4gICAgbmV4dEFycm93OiA8Q3VzdG9tTmV4dEFycm93IC8+LFxuICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24oaSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXItcGFnaW5nJz5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTWFpblNsaWRlclZpZXcgPSAocHJvcHMpID0+IChcbiAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgIHtcbiAgICAgICAgICAgICFwcm9wcy5zbGlkZXMgPyAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyIGlkPSdwcmV2aWV3U2xpZGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkltYWdlIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGxhY2Vob2xkZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzLnNsaWRlcykubWFwKChyb3dLZXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9eyAnc2xpZGUtJyArIHByb3BzLnNsaWRlc1snaWQnXSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvcHMuc2xpZGVzW3Jvd0tleV1bJ2ltYWdlJ10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIDwvU2xpZGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNYWluU2xpZGVyVmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IE1haW5TbGlkZXJWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvTWFpblNsaWRlclZpZXcnXG5cbmltcG9ydCB7XG4gICAgZ2V0U2xpZGVyTGlzdFxufSBmcm9tICcuLi8uLi8uLi9hcGkvc2xpZGVyJ1xuXG5jbGFzcyBNYWluU2xpZGVyQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nIDogMCxcbiAgICAgICAgICAgIHNsaWRlcyAgOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRTbGlkZXJMaXN0KClcbiAgICB9XG5cbiAgICBnZXRTbGlkZXJMaXN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZ2V0U2xpZGVyTGlzdCgpO1xuXG4gICAgICAgIHJlc3VsdC50aGVuKFxuICAgICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICAgICAgfSA9IHJlc3VsdFxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXMgOiByb3dzLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIGFsZXJ0KFwiUmVqZWN0ZWQ6IFwiICsgZXJyb3IpOyAvLyBlcnJvciAtINCw0YDQs9GD0LzQtdC90YIgcmVqZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPE1haW5TbGlkZXJWaWV3XG4gICAgICAgICAgICAgICAgICAgIHsgLi4udGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5TbGlkZXJDb250YWluZXJcbiIsImltcG9ydCBNYWluU2xpZGVyQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9NYWluU2xpZGVyQ29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgTWFpblNsaWRlckNvbnRhaW5lcjsiLCJleHBvcnQgZnVuY3Rpb24gY2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gICAgbGV0IG5ld09iamVjdCA9IHt9XG4gICAgXG4gICAgZm9yKGxldCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgIG5ld09iamVjdFtrZXldID0gb2JqZWN0W2tleV1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG5ld09iamVjdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOdW1iZXJJbnB1dChrZXlDb2RlKSB7XG4gICAgaWYgKGtleUNvZGUgPT0gNDYgfHwga2V5Q29kZSA9PSA4IHx8IGtleUNvZGUgPT0gOSB8fCBrZXlDb2RlID09IDI3IHx8IGtleUNvZGUgPT0gMTEwIHx8IGtleUNvZGUgPT0gMTkwIHx8XG4gICAgICAgICAgKGtleUNvZGUgPT0gNjUgJiYgY3RybEtleSA9PT0gdHJ1ZSkgfHxcbiAgICAgICAgICAoa2V5Q29kZSA+PSAzNSAmJiBrZXlDb2RlIDw9IDM5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKGtleUNvZGUgPCA0OCB8fCBrZXlDb2RlID4gNTcpICYmIChrZXlDb2RlIDwgOTYgfHwga2V5Q29kZSA+IDEwNSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcbiAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICBcbiAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSwgdXJsKSB7XG4gICAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcbiAgICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcbiAgICBpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xuICAgIGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmNlUHJpY2UocHJpY2UpIHtcbiAgICBwcmljZSA9IHByaWNlLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHByaWNlLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKFteXFxkXXwkKSkvZywgJyQxICcpO1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=