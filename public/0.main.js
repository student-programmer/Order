(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/*!*************************************************!*\
  !*** ./node_modules/react-helmet/lib/Helmet.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__(/*! react-side-effect */ "./node_modules/react-side-effect/lib/index.js");

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _reactFastCompare = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");

var _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);

var _HelmetUtils = __webpack_require__(/*! ./HelmetUtils.js */ "./node_modules/react-helmet/lib/HelmetUtils.js");

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "./node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !(0, _reactFastCompare2.default)(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.SCRIPT:
                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case _HelmetConstants.TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _extends2;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _extends3, _extends4;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

                case _HelmetConstants.TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case _HelmetConstants.TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _extends5;

                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (true) {
                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            _react2.default.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = _objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case _HelmetConstants.TAG_NAMES.LINK:
                    case _HelmetConstants.TAG_NAMES.META:
                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    case _HelmetConstants.TAG_NAMES.SCRIPT:
                    case _HelmetConstants.TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return _react2.default.createElement(Component, newProps);
        };

        _createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Object} bodyAttributes: {"className": "root"}
             * @param {String} defaultTitle: "Default Title"
             * @param {Boolean} defer: true
             * @param {Boolean} encodeSpecialCharacters: true
             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
             * @param {String} title: "Title"
             * @param {Object} titleAttributes: {"itemprop": "name"}
             * @param {String} titleTemplate: "MySite.com - %s"
             */
            set: function set(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);

        return HelmetWrapper;
    }(_react2.default.Component), _class.propTypes = {
        base: _propTypes2.default.object,
        bodyAttributes: _propTypes2.default.object,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
        defaultTitle: _propTypes2.default.string,
        defer: _propTypes2.default.bool,
        encodeSpecialCharacters: _propTypes2.default.bool,
        htmlAttributes: _propTypes2.default.object,
        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
        onChangeClientState: _propTypes2.default.func,
        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
        title: _propTypes2.default.string,
        titleAttributes: _propTypes2.default.object,
        titleTemplate: _propTypes2.default.string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = (0, _HelmetUtils.mapStateOnServer)({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

exports.Helmet = HelmetExport;
exports.default = HelmetExport;

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetConstants.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetConstants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = exports.TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src"
};

var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = exports.HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetUtils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "./node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[_HelmetConstants.TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return _react2.default.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case _HelmetConstants.TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(SideEffect, _Component);

      function SideEffect() {
        return _Component.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      _proto.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZmFzdC1jb21wYXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1oZWxtZXQvbGliL0hlbG1ldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaGVsbWV0L2xpYi9IZWxtZXRDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhlbG1ldC9saWIvSGVsbWV0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNpZGUtZWZmZWN0L2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsV0FBVztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTs7QUFFQSxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVB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QSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxpREFBaUQ7QUFDcEg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0I7Ozs7Ozs7Ozs7Ozs7QUN2aEJhOztBQUViLCtCQUErQixpRkFBaUY7O0FBRWhILFlBQVksbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQjtBQUNBLG1DQUFtQyxtQkFBTyxDQUFDLDBEQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMC5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIga2V5TGlzdCA9IE9iamVjdC5rZXlzO1xudmFyIGhhc1Byb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGhhc0VsZW1lbnRUeXBlID0gdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG5mdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gIC8vIGZhc3QtZGVlcC1lcXVhbCBpbmRleC5qcyAyLjAuMVxuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIHZhciBhcnJBID0gaXNBcnJheShhKVxuICAgICAgLCBhcnJCID0gaXNBcnJheShiKVxuICAgICAgLCBpXG4gICAgICAsIGxlbmd0aFxuICAgICAgLCBrZXk7XG5cbiAgICBpZiAoYXJyQSAmJiBhcnJCKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGFyckEgIT0gYXJyQikgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIGRhdGVBID0gYSBpbnN0YW5jZW9mIERhdGVcbiAgICAgICwgZGF0ZUIgPSBiIGluc3RhbmNlb2YgRGF0ZTtcbiAgICBpZiAoZGF0ZUEgIT0gZGF0ZUIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZGF0ZUEgJiYgZGF0ZUIpIHJldHVybiBhLmdldFRpbWUoKSA9PSBiLmdldFRpbWUoKTtcblxuICAgIHZhciByZWdleHBBID0gYSBpbnN0YW5jZW9mIFJlZ0V4cFxuICAgICAgLCByZWdleHBCID0gYiBpbnN0YW5jZW9mIFJlZ0V4cDtcbiAgICBpZiAocmVnZXhwQSAhPSByZWdleHBCKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG5cbiAgICB2YXIga2V5cyA9IGtleUxpc3QoYSk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoICE9PSBrZXlMaXN0KGIpLmxlbmd0aClcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghaGFzUHJvcC5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gZW5kIGZhc3QtZGVlcC1lcXVhbFxuXG4gICAgLy8gc3RhcnQgcmVhY3QtZmFzdC1jb21wYXJlXG4gICAgLy8gY3VzdG9tIGhhbmRsaW5nIGZvciBET00gZWxlbWVudHNcbiAgICBpZiAoaGFzRWxlbWVudFR5cGUgJiYgYSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgYiBpbnN0YW5jZW9mIEVsZW1lbnQpXG4gICAgICByZXR1cm4gYSA9PT0gYjtcblxuICAgIC8vIGN1c3RvbSBoYW5kbGluZyBmb3IgUmVhY3RcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoa2V5ID09PSAnX293bmVyJyAmJiBhLiQkdHlwZW9mKSB7XG4gICAgICAgIC8vIFJlYWN0LXNwZWNpZmljOiBhdm9pZCB0cmF2ZXJzaW5nIFJlYWN0IGVsZW1lbnRzJyBfb3duZXIuXG4gICAgICAgIC8vICBfb3duZXIgY29udGFpbnMgY2lyY3VsYXIgcmVmZXJlbmNlc1xuICAgICAgICAvLyBhbmQgaXMgbm90IG5lZWRlZCB3aGVuIGNvbXBhcmluZyB0aGUgYWN0dWFsIGVsZW1lbnRzIChhbmQgbm90IHRoZWlyIG93bmVycylcbiAgICAgICAgLy8gLiQkdHlwZW9mIGFuZCAuX3N0b3JlIG9uIGp1c3QgcmVhc29uYWJsZSBtYXJrZXJzIG9mIGEgcmVhY3QgZWxlbWVudFxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFsbCBvdGhlciBwcm9wZXJ0aWVzIHNob3VsZCBiZSB0cmF2ZXJzZWQgYXMgdXN1YWxcbiAgICAgICAgaWYgKCFlcXVhbChhW2tleV0sIGJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZW5kIHJlYWN0LWZhc3QtY29tcGFyZVxuXG4gICAgLy8gZmFzdC1kZWVwLWVxdWFsIGluZGV4LmpzIDIuMC4xXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSAhPT0gYSAmJiBiICE9PSBiO1xufVxuLy8gZW5kIGZhc3QtZGVlcC1lcXVhbFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4cG9ydGVkRXF1YWwoYSwgYikge1xuICB0cnkge1xuICAgIHJldHVybiBlcXVhbChhLCBiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoKGVycm9yLm1lc3NhZ2UgJiYgZXJyb3IubWVzc2FnZS5tYXRjaCgvc3RhY2t8cmVjdXJzaW9uL2kpKSB8fCAoZXJyb3IubnVtYmVyID09PSAtMjE0NjgyODI2MCkpIHtcbiAgICAgIC8vIHdhcm4gb24gY2lyY3VsYXIgcmVmZXJlbmNlcywgZG9uJ3QgY3Jhc2hcbiAgICAgIC8vIGJyb3dzZXJzIGdpdmUgdGhpcyBkaWZmZXJlbnQgZXJyb3JzIG5hbWUgYW5kIG1lc3NhZ2VzOlxuICAgICAgLy8gY2hyb21lL3NhZmFyaTogXCJSYW5nZUVycm9yXCIsIFwiTWF4aW11bSBjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIlxuICAgICAgLy8gZmlyZWZveDogXCJJbnRlcm5hbEVycm9yXCIsIHRvbyBtdWNoIHJlY3Vyc2lvblwiXG4gICAgICAvLyBlZGdlOiBcIkVycm9yXCIsIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCJcbiAgICAgIGNvbnNvbGUud2FybignV2FybmluZzogcmVhY3QtZmFzdC1jb21wYXJlIGRvZXMgbm90IGhhbmRsZSBjaXJjdWxhciByZWZlcmVuY2VzLicsIGVycm9yLm5hbWUsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBzb21lIG90aGVyIGVycm9yLiB3ZSBzaG91bGQgZGVmaW5pdGVseSBrbm93IGFib3V0IHRoZXNlXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCJleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5IZWxtZXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0U2lkZUVmZmVjdCA9IHJlcXVpcmUoXCJyZWFjdC1zaWRlLWVmZmVjdFwiKTtcblxudmFyIF9yZWFjdFNpZGVFZmZlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RTaWRlRWZmZWN0KTtcblxudmFyIF9yZWFjdEZhc3RDb21wYXJlID0gcmVxdWlyZShcInJlYWN0LWZhc3QtY29tcGFyZVwiKTtcblxudmFyIF9yZWFjdEZhc3RDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RmFzdENvbXBhcmUpO1xuXG52YXIgX0hlbG1ldFV0aWxzID0gcmVxdWlyZShcIi4vSGVsbWV0VXRpbHMuanNcIik7XG5cbnZhciBfSGVsbWV0Q29uc3RhbnRzID0gcmVxdWlyZShcIi4vSGVsbWV0Q29uc3RhbnRzLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEhlbG1ldCA9IGZ1bmN0aW9uIEhlbG1ldChDb21wb25lbnQpIHtcbiAgICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICAgIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICAgIF9pbmhlcml0cyhIZWxtZXRXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgICBmdW5jdGlvbiBIZWxtZXRXcmFwcGVyKCkge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhlbG1ldFdyYXBwZXIpO1xuXG4gICAgICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiAhKDAsIF9yZWFjdEZhc3RDb21wYXJlMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLm1hcE5lc3RlZENoaWxkcmVuVG9Qcm9wcyA9IGZ1bmN0aW9uIG1hcE5lc3RlZENoaWxkcmVuVG9Qcm9wcyhjaGlsZCwgbmVzdGVkQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmICghbmVzdGVkQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TQ1JJUFQ6XG4gICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5OT1NDUklQVDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogbmVzdGVkQ2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU1RZTEU6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0OiBuZXN0ZWRDaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCI8XCIgKyBjaGlsZC50eXBlICsgXCIgLz4gZWxlbWVudHMgYXJlIHNlbGYtY2xvc2luZyBhbmQgY2FuIG5vdCBjb250YWluIGNoaWxkcmVuLiBSZWZlciB0byBvdXIgQVBJIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS5mbGF0dGVuQXJyYXlUeXBlQ2hpbGRyZW4gPSBmdW5jdGlvbiBmbGF0dGVuQXJyYXlUeXBlQ2hpbGRyZW4oX3JlZikge1xuICAgICAgICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgICAgICAgdmFyIGNoaWxkID0gX3JlZi5jaGlsZCxcbiAgICAgICAgICAgICAgICBhcnJheVR5cGVDaGlsZHJlbiA9IF9yZWYuYXJyYXlUeXBlQ2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRQcm9wcyA9IF9yZWYubmV3Q2hpbGRQcm9wcyxcbiAgICAgICAgICAgICAgICBuZXN0ZWRDaGlsZHJlbiA9IF9yZWYubmVzdGVkQ2hpbGRyZW47XG5cbiAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJyYXlUeXBlQ2hpbGRyZW4sIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2NoaWxkLnR5cGVdID0gW10uY29uY2F0KGFycmF5VHlwZUNoaWxkcmVuW2NoaWxkLnR5cGVdIHx8IFtdLCBbX2V4dGVuZHMoe30sIG5ld0NoaWxkUHJvcHMsIHRoaXMubWFwTmVzdGVkQ2hpbGRyZW5Ub1Byb3BzKGNoaWxkLCBuZXN0ZWRDaGlsZHJlbikpXSksIF9leHRlbmRzMikpO1xuICAgICAgICB9O1xuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLm1hcE9iamVjdFR5cGVDaGlsZHJlbiA9IGZ1bmN0aW9uIG1hcE9iamVjdFR5cGVDaGlsZHJlbihfcmVmMikge1xuICAgICAgICAgICAgdmFyIF9leHRlbmRzMywgX2V4dGVuZHM0O1xuXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBfcmVmMi5jaGlsZCxcbiAgICAgICAgICAgICAgICBuZXdQcm9wcyA9IF9yZWYyLm5ld1Byb3BzLFxuICAgICAgICAgICAgICAgIG5ld0NoaWxkUHJvcHMgPSBfcmVmMi5uZXdDaGlsZFByb3BzLFxuICAgICAgICAgICAgICAgIG5lc3RlZENoaWxkcmVuID0gX3JlZjIubmVzdGVkQ2hpbGRyZW47XG5cbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGQudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuVElUTEU6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbmV3UHJvcHMsIChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW2NoaWxkLnR5cGVdID0gbmVzdGVkQ2hpbGRyZW4sIF9leHRlbmRzMy50aXRsZUF0dHJpYnV0ZXMgPSBfZXh0ZW5kcyh7fSwgbmV3Q2hpbGRQcm9wcyksIF9leHRlbmRzMykpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5CT0RZOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIG5ld1Byb3BzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QXR0cmlidXRlczogX2V4dGVuZHMoe30sIG5ld0NoaWxkUHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5IVE1MOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIG5ld1Byb3BzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sQXR0cmlidXRlczogX2V4dGVuZHMoe30sIG5ld0NoaWxkUHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIG5ld1Byb3BzLCAoX2V4dGVuZHM0ID0ge30sIF9leHRlbmRzNFtjaGlsZC50eXBlXSA9IF9leHRlbmRzKHt9LCBuZXdDaGlsZFByb3BzKSwgX2V4dGVuZHM0KSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgSGVsbWV0V3JhcHBlci5wcm90b3R5cGUubWFwQXJyYXlUeXBlQ2hpbGRyZW5Ub1Byb3BzID0gZnVuY3Rpb24gbWFwQXJyYXlUeXBlQ2hpbGRyZW5Ub1Byb3BzKGFycmF5VHlwZUNoaWxkcmVuLCBuZXdQcm9wcykge1xuICAgICAgICAgICAgdmFyIG5ld0ZsYXR0ZW5lZFByb3BzID0gX2V4dGVuZHMoe30sIG5ld1Byb3BzKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXJyYXlUeXBlQ2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGFycmF5Q2hpbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9leHRlbmRzNTtcblxuICAgICAgICAgICAgICAgIG5ld0ZsYXR0ZW5lZFByb3BzID0gX2V4dGVuZHMoe30sIG5ld0ZsYXR0ZW5lZFByb3BzLCAoX2V4dGVuZHM1ID0ge30sIF9leHRlbmRzNVthcnJheUNoaWxkTmFtZV0gPSBhcnJheVR5cGVDaGlsZHJlblthcnJheUNoaWxkTmFtZV0sIF9leHRlbmRzNSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdGbGF0dGVuZWRQcm9wcztcbiAgICAgICAgfTtcblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS53YXJuT25JbnZhbGlkQ2hpbGRyZW4gPSBmdW5jdGlvbiB3YXJuT25JbnZhbGlkQ2hpbGRyZW4oY2hpbGQsIG5lc3RlZENoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfSGVsbWV0Q29uc3RhbnRzLlZBTElEX1RBR19OQU1FUy5zb21lKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZC50eXBlID09PSBuYW1lO1xuICAgICAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDAsIF9IZWxtZXRVdGlscy53YXJuKShcIllvdSBtYXkgYmUgYXR0ZW1wdGluZyB0byBuZXN0IDxIZWxtZXQ+IGNvbXBvbmVudHMgd2l0aGluIGVhY2ggb3RoZXIsIHdoaWNoIGlzIG5vdCBhbGxvd2VkLiBSZWZlciB0byBvdXIgQVBJIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX0hlbG1ldFV0aWxzLndhcm4pKFwiT25seSBlbGVtZW50cyB0eXBlcyBcIiArIF9IZWxtZXRDb25zdGFudHMuVkFMSURfVEFHX05BTUVTLmpvaW4oXCIsIFwiKSArIFwiIGFyZSBhbGxvd2VkLiBIZWxtZXQgZG9lcyBub3Qgc3VwcG9ydCByZW5kZXJpbmcgPFwiICsgY2hpbGQudHlwZSArIFwiPiBlbGVtZW50cy4gUmVmZXIgdG8gb3VyIEFQSSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5lc3RlZENoaWxkcmVuICYmIHR5cGVvZiBuZXN0ZWRDaGlsZHJlbiAhPT0gXCJzdHJpbmdcIiAmJiAoIUFycmF5LmlzQXJyYXkobmVzdGVkQ2hpbGRyZW4pIHx8IG5lc3RlZENoaWxkcmVuLnNvbWUoZnVuY3Rpb24gKG5lc3RlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgbmVzdGVkQ2hpbGQgIT09IFwic3RyaW5nXCI7XG4gICAgICAgICAgICAgICAgfSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhlbG1ldCBleHBlY3RzIGEgc3RyaW5nIGFzIGEgY2hpbGQgb2YgPFwiICsgY2hpbGQudHlwZSArIFwiPi4gRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIGNoaWxkcmVuIGluIGJyYWNlcz8gKCA8XCIgKyBjaGlsZC50eXBlICsgXCI+e2BgfTwvXCIgKyBjaGlsZC50eXBlICsgXCI+ICkgUmVmZXIgdG8gb3VyIEFQSSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS5tYXBDaGlsZHJlblRvUHJvcHMgPSBmdW5jdGlvbiBtYXBDaGlsZHJlblRvUHJvcHMoY2hpbGRyZW4sIG5ld1Byb3BzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGFycmF5VHlwZUNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkIHx8ICFjaGlsZC5wcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIF9jaGlsZCRwcm9wcyA9IGNoaWxkLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICBuZXN0ZWRDaGlsZHJlbiA9IF9jaGlsZCRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfY2hpbGQkcHJvcHMsIFtcImNoaWxkcmVuXCJdKTtcblxuICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZFByb3BzID0gKDAsIF9IZWxtZXRVdGlscy5jb252ZXJ0UmVhY3RQcm9wc3RvSHRtbEF0dHJpYnV0ZXMpKGNoaWxkUHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMyLndhcm5PbkludmFsaWRDaGlsZHJlbihjaGlsZCwgbmVzdGVkQ2hpbGRyZW4pO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjaGlsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTElOSzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5NRVRBOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk5PU0NSSVBUOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNDUklQVDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TVFlMRTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VHlwZUNoaWxkcmVuID0gX3RoaXMyLmZsYXR0ZW5BcnJheVR5cGVDaGlsZHJlbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQ6IGNoaWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VHlwZUNoaWxkcmVuOiBhcnJheVR5cGVDaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGlsZFByb3BzOiBuZXdDaGlsZFByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RlZENoaWxkcmVuOiBuZXN0ZWRDaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHMgPSBfdGhpczIubWFwT2JqZWN0VHlwZUNoaWxkcmVuKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZDogY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHM6IG5ld1Byb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoaWxkUHJvcHM6IG5ld0NoaWxkUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVzdGVkQ2hpbGRyZW46IG5lc3RlZENoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBuZXdQcm9wcyA9IHRoaXMubWFwQXJyYXlUeXBlQ2hpbGRyZW5Ub1Byb3BzKGFycmF5VHlwZUNoaWxkcmVuLCBuZXdQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UHJvcHM7XG4gICAgICAgIH07XG5cbiAgICAgICAgSGVsbWV0V3JhcHBlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbXCJjaGlsZHJlblwiXSk7XG5cbiAgICAgICAgICAgIHZhciBuZXdQcm9wcyA9IF9leHRlbmRzKHt9LCBwcm9wcyk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzID0gdGhpcy5tYXBDaGlsZHJlblRvUHJvcHMoY2hpbGRyZW4sIG5ld1Byb3BzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgbmV3UHJvcHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhIZWxtZXRXcmFwcGVyLCBudWxsLCBbe1xuICAgICAgICAgICAga2V5OiBcImNhblVzZURPTVwiLFxuXG5cbiAgICAgICAgICAgIC8vIENvbXBvbmVudC5wZWVrIGNvbWVzIGZyb20gcmVhY3Qtc2lkZS1lZmZlY3Q6XG4gICAgICAgICAgICAvLyBGb3IgdGVzdGluZywgeW91IG1heSB1c2UgYSBzdGF0aWMgcGVlaygpIG1ldGhvZCBhdmFpbGFibGUgb24gdGhlIHJldHVybmVkIGNvbXBvbmVudC5cbiAgICAgICAgICAgIC8vIEl0IGxldHMgeW91IGdldCB0aGUgY3VycmVudCBzdGF0ZSB3aXRob3V0IHJlc2V0dGluZyB0aGUgbW91bnRlZCBpbnN0YW5jZSBzdGFjay5cbiAgICAgICAgICAgIC8vIERvbuKAmXQgdXNlIGl0IGZvciBhbnl0aGluZyBvdGhlciB0aGFuIHRlc3RpbmcuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGJhc2U6IHtcInRhcmdldFwiOiBcIl9ibGFua1wiLCBcImhyZWZcIjogXCJodHRwOi8vbXlzaXRlLmNvbS9cIn1cbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBib2R5QXR0cmlidXRlczoge1wiY2xhc3NOYW1lXCI6IFwicm9vdFwifVxuICAgICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRUaXRsZTogXCJEZWZhdWx0IFRpdGxlXCJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVmZXI6IHRydWVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZW5jb2RlU3BlY2lhbENoYXJhY3RlcnM6IHRydWVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBodG1sQXR0cmlidXRlczoge1wibGFuZ1wiOiBcImVuXCIsIFwiYW1wXCI6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGxpbms6IFt7XCJyZWxcIjogXCJjYW5vbmljYWxcIiwgXCJocmVmXCI6IFwiaHR0cDovL215c2l0ZS5jb20vZXhhbXBsZVwifV1cbiAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG1ldGE6IFt7XCJuYW1lXCI6IFwiZGVzY3JpcHRpb25cIiwgXCJjb250ZW50XCI6IFwiVGVzdCBkZXNjcmlwdGlvblwifV1cbiAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG5vc2NyaXB0OiBbe1wiaW5uZXJIVE1MXCI6IFwiPGltZyBzcmM9J2h0dHA6Ly9teXNpdGUuY29tL2pzL3Rlc3QuanMnXCJ9XVxuICAgICAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25DaGFuZ2VDbGllbnRTdGF0ZTogXCIobmV3U3RhdGUpID0+IGNvbnNvbGUubG9nKG5ld1N0YXRlKVwiXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBzY3JpcHQ6IFt7XCJ0eXBlXCI6IFwidGV4dC9qYXZhc2NyaXB0XCIsIFwic3JjXCI6IFwiaHR0cDovL215c2l0ZS5jb20vanMvdGVzdC5qc1wifV1cbiAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHN0eWxlOiBbe1widHlwZVwiOiBcInRleHQvY3NzXCIsIFwiY3NzVGV4dFwiOiBcImRpdiB7IGRpc3BsYXk6IGJsb2NrOyBjb2xvcjogYmx1ZTsgfVwifV1cbiAgICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZTogXCJUaXRsZVwiXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gdGl0bGVBdHRyaWJ1dGVzOiB7XCJpdGVtcHJvcFwiOiBcIm5hbWVcIn1cbiAgICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZVRlbXBsYXRlOiBcIk15U2l0ZS5jb20gLSAlc1wiXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGNhblVzZURPTSkge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudC5jYW5Vc2VET00gPSBjYW5Vc2VET007XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gSGVsbWV0V3JhcHBlcjtcbiAgICB9KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpLCBfY2xhc3MucHJvcFR5cGVzID0ge1xuICAgICAgICBiYXNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICAgICAgYm9keUF0dHJpYnV0ZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgICAgICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUpLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVdKSxcbiAgICAgICAgZGVmYXVsdFRpdGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICAgICAgZGVmZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgICAgICAgZW5jb2RlU3BlY2lhbENoYXJhY3RlcnM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgICAgICAgaHRtbEF0dHJpYnV0ZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgICAgICBsaW5rOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QpLFxuICAgICAgICBtZXRhOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QpLFxuICAgICAgICBub3NjcmlwdDogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0KSxcbiAgICAgICAgb25DaGFuZ2VDbGllbnRTdGF0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgICAgICBzY3JpcHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCksXG4gICAgICAgIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QpLFxuICAgICAgICB0aXRsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgICAgIHRpdGxlQXR0cmlidXRlczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgICAgIHRpdGxlVGVtcGxhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG4gICAgfSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZGVmZXI6IHRydWUsXG4gICAgICAgIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlXG4gICAgfSwgX2NsYXNzLnBlZWsgPSBDb21wb25lbnQucGVlaywgX2NsYXNzLnJld2luZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1hcHBlZFN0YXRlID0gQ29tcG9uZW50LnJld2luZCgpO1xuICAgICAgICBpZiAoIW1hcHBlZFN0YXRlKSB7XG4gICAgICAgICAgICAvLyBwcm92aWRlIGZhbGxiYWNrIGlmIG1hcHBlZFN0YXRlIGlzIHVuZGVmaW5lZFxuICAgICAgICAgICAgbWFwcGVkU3RhdGUgPSAoMCwgX0hlbG1ldFV0aWxzLm1hcFN0YXRlT25TZXJ2ZXIpKHtcbiAgICAgICAgICAgICAgICBiYXNlVGFnOiBbXSxcbiAgICAgICAgICAgICAgICBib2R5QXR0cmlidXRlczoge30sXG4gICAgICAgICAgICAgICAgZW5jb2RlU3BlY2lhbENoYXJhY3RlcnM6IHRydWUsXG4gICAgICAgICAgICAgICAgaHRtbEF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICAgICAgICAgIGxpbmtUYWdzOiBbXSxcbiAgICAgICAgICAgICAgICBtZXRhVGFnczogW10sXG4gICAgICAgICAgICAgICAgbm9zY3JpcHRUYWdzOiBbXSxcbiAgICAgICAgICAgICAgICBzY3JpcHRUYWdzOiBbXSxcbiAgICAgICAgICAgICAgICBzdHlsZVRhZ3M6IFtdLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRpdGxlQXR0cmlidXRlczoge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hcHBlZFN0YXRlO1xuICAgIH0sIF90ZW1wO1xufTtcblxudmFyIE51bGxDb21wb25lbnQgPSBmdW5jdGlvbiBOdWxsQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBudWxsO1xufTtcblxudmFyIEhlbG1ldFNpZGVFZmZlY3RzID0gKDAsIF9yZWFjdFNpZGVFZmZlY3QyLmRlZmF1bHQpKF9IZWxtZXRVdGlscy5yZWR1Y2VQcm9wc1RvU3RhdGUsIF9IZWxtZXRVdGlscy5oYW5kbGVDbGllbnRTdGF0ZUNoYW5nZSwgX0hlbG1ldFV0aWxzLm1hcFN0YXRlT25TZXJ2ZXIpKE51bGxDb21wb25lbnQpO1xuXG52YXIgSGVsbWV0RXhwb3J0ID0gSGVsbWV0KEhlbG1ldFNpZGVFZmZlY3RzKTtcbkhlbG1ldEV4cG9ydC5yZW5kZXJTdGF0aWMgPSBIZWxtZXRFeHBvcnQucmV3aW5kO1xuXG5leHBvcnRzLkhlbG1ldCA9IEhlbG1ldEV4cG9ydDtcbmV4cG9ydHMuZGVmYXVsdCA9IEhlbG1ldEV4cG9ydDsiLCJleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIEFUVFJJQlVURV9OQU1FUyA9IGV4cG9ydHMuQVRUUklCVVRFX05BTUVTID0ge1xuICAgIEJPRFk6IFwiYm9keUF0dHJpYnV0ZXNcIixcbiAgICBIVE1MOiBcImh0bWxBdHRyaWJ1dGVzXCIsXG4gICAgVElUTEU6IFwidGl0bGVBdHRyaWJ1dGVzXCJcbn07XG5cbnZhciBUQUdfTkFNRVMgPSBleHBvcnRzLlRBR19OQU1FUyA9IHtcbiAgICBCQVNFOiBcImJhc2VcIixcbiAgICBCT0RZOiBcImJvZHlcIixcbiAgICBIRUFEOiBcImhlYWRcIixcbiAgICBIVE1MOiBcImh0bWxcIixcbiAgICBMSU5LOiBcImxpbmtcIixcbiAgICBNRVRBOiBcIm1ldGFcIixcbiAgICBOT1NDUklQVDogXCJub3NjcmlwdFwiLFxuICAgIFNDUklQVDogXCJzY3JpcHRcIixcbiAgICBTVFlMRTogXCJzdHlsZVwiLFxuICAgIFRJVExFOiBcInRpdGxlXCJcbn07XG5cbnZhciBWQUxJRF9UQUdfTkFNRVMgPSBleHBvcnRzLlZBTElEX1RBR19OQU1FUyA9IE9iamVjdC5rZXlzKFRBR19OQU1FUykubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIFRBR19OQU1FU1tuYW1lXTtcbn0pO1xuXG52YXIgVEFHX1BST1BFUlRJRVMgPSBleHBvcnRzLlRBR19QUk9QRVJUSUVTID0ge1xuICAgIENIQVJTRVQ6IFwiY2hhcnNldFwiLFxuICAgIENTU19URVhUOiBcImNzc1RleHRcIixcbiAgICBIUkVGOiBcImhyZWZcIixcbiAgICBIVFRQRVFVSVY6IFwiaHR0cC1lcXVpdlwiLFxuICAgIElOTkVSX0hUTUw6IFwiaW5uZXJIVE1MXCIsXG4gICAgSVRFTV9QUk9QOiBcIml0ZW1wcm9wXCIsXG4gICAgTkFNRTogXCJuYW1lXCIsXG4gICAgUFJPUEVSVFk6IFwicHJvcGVydHlcIixcbiAgICBSRUw6IFwicmVsXCIsXG4gICAgU1JDOiBcInNyY1wiXG59O1xuXG52YXIgUkVBQ1RfVEFHX01BUCA9IGV4cG9ydHMuUkVBQ1RfVEFHX01BUCA9IHtcbiAgICBhY2Nlc3NrZXk6IFwiYWNjZXNzS2V5XCIsXG4gICAgY2hhcnNldDogXCJjaGFyU2V0XCIsXG4gICAgY2xhc3M6IFwiY2xhc3NOYW1lXCIsXG4gICAgY29udGVudGVkaXRhYmxlOiBcImNvbnRlbnRFZGl0YWJsZVwiLFxuICAgIGNvbnRleHRtZW51OiBcImNvbnRleHRNZW51XCIsXG4gICAgXCJodHRwLWVxdWl2XCI6IFwiaHR0cEVxdWl2XCIsXG4gICAgaXRlbXByb3A6IFwiaXRlbVByb3BcIixcbiAgICB0YWJpbmRleDogXCJ0YWJJbmRleFwiXG59O1xuXG52YXIgSEVMTUVUX1BST1BTID0gZXhwb3J0cy5IRUxNRVRfUFJPUFMgPSB7XG4gICAgREVGQVVMVF9USVRMRTogXCJkZWZhdWx0VGl0bGVcIixcbiAgICBERUZFUjogXCJkZWZlclwiLFxuICAgIEVOQ09ERV9TUEVDSUFMX0NIQVJBQ1RFUlM6IFwiZW5jb2RlU3BlY2lhbENoYXJhY3RlcnNcIixcbiAgICBPTl9DSEFOR0VfQ0xJRU5UX1NUQVRFOiBcIm9uQ2hhbmdlQ2xpZW50U3RhdGVcIixcbiAgICBUSVRMRV9URU1QTEFURTogXCJ0aXRsZVRlbXBsYXRlXCJcbn07XG5cbnZhciBIVE1MX1RBR19NQVAgPSBleHBvcnRzLkhUTUxfVEFHX01BUCA9IE9iamVjdC5rZXlzKFJFQUNUX1RBR19NQVApLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICBvYmpbUkVBQ1RfVEFHX01BUFtrZXldXSA9IGtleTtcbiAgICByZXR1cm4gb2JqO1xufSwge30pO1xuXG52YXIgU0VMRl9DTE9TSU5HX1RBR1MgPSBleHBvcnRzLlNFTEZfQ0xPU0lOR19UQUdTID0gW1RBR19OQU1FUy5OT1NDUklQVCwgVEFHX05BTUVTLlNDUklQVCwgVEFHX05BTUVTLlNUWUxFXTtcblxudmFyIEhFTE1FVF9BVFRSSUJVVEUgPSBleHBvcnRzLkhFTE1FVF9BVFRSSUJVVEUgPSBcImRhdGEtcmVhY3QtaGVsbWV0XCI7IiwiZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMud2FybiA9IGV4cG9ydHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZXhwb3J0cy5yZWR1Y2VQcm9wc1RvU3RhdGUgPSBleHBvcnRzLm1hcFN0YXRlT25TZXJ2ZXIgPSBleHBvcnRzLmhhbmRsZUNsaWVudFN0YXRlQ2hhbmdlID0gZXhwb3J0cy5jb252ZXJ0UmVhY3RQcm9wc3RvSHRtbEF0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIik7XG5cbnZhciBfb2JqZWN0QXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFzc2lnbik7XG5cbnZhciBfSGVsbWV0Q29uc3RhbnRzID0gcmVxdWlyZShcIi4vSGVsbWV0Q29uc3RhbnRzLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZW5jb2RlU3BlY2lhbENoYXJhY3RlcnMgPSBmdW5jdGlvbiBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVycyhzdHIpIHtcbiAgICB2YXIgZW5jb2RlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gICAgaWYgKGVuY29kZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhzdHIpO1xuICAgIH1cblxuICAgIHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIikucmVwbGFjZSgvPi9nLCBcIiZndDtcIikucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIikucmVwbGFjZSgvJy9nLCBcIiYjeDI3O1wiKTtcbn07XG5cbnZhciBnZXRUaXRsZUZyb21Qcm9wc0xpc3QgPSBmdW5jdGlvbiBnZXRUaXRsZUZyb21Qcm9wc0xpc3QocHJvcHNMaXN0KSB7XG4gICAgdmFyIGlubmVybW9zdFRpdGxlID0gZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5USVRMRSk7XG4gICAgdmFyIGlubmVybW9zdFRlbXBsYXRlID0gZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9QUk9QUy5USVRMRV9URU1QTEFURSk7XG5cbiAgICBpZiAoaW5uZXJtb3N0VGVtcGxhdGUgJiYgaW5uZXJtb3N0VGl0bGUpIHtcbiAgICAgICAgLy8gdXNlIGZ1bmN0aW9uIGFyZyB0byBhdm9pZCBuZWVkIHRvIGVzY2FwZSAkIGNoYXJhY3RlcnNcbiAgICAgICAgcmV0dXJuIGlubmVybW9zdFRlbXBsYXRlLnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBpbm5lcm1vc3RUaXRsZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGlubmVybW9zdERlZmF1bHRUaXRsZSA9IGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfUFJPUFMuREVGQVVMVF9USVRMRSk7XG5cbiAgICByZXR1cm4gaW5uZXJtb3N0VGl0bGUgfHwgaW5uZXJtb3N0RGVmYXVsdFRpdGxlIHx8IHVuZGVmaW5lZDtcbn07XG5cbnZhciBnZXRPbkNoYW5nZUNsaWVudFN0YXRlID0gZnVuY3Rpb24gZ2V0T25DaGFuZ2VDbGllbnRTdGF0ZShwcm9wc0xpc3QpIHtcbiAgICByZXR1cm4gZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9QUk9QUy5PTl9DSEFOR0VfQ0xJRU5UX1NUQVRFKSB8fCBmdW5jdGlvbiAoKSB7fTtcbn07XG5cbnZhciBnZXRBdHRyaWJ1dGVzRnJvbVByb3BzTGlzdCA9IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZXNGcm9tUHJvcHNMaXN0KHRhZ1R5cGUsIHByb3BzTGlzdCkge1xuICAgIHJldHVybiBwcm9wc0xpc3QuZmlsdGVyKGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHByb3BzW3RhZ1R5cGVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgIH0pLm1hcChmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzW3RhZ1R5cGVdO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAodGFnQXR0cnMsIGN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0YWdBdHRycywgY3VycmVudCk7XG4gICAgfSwge30pO1xufTtcblxudmFyIGdldEJhc2VUYWdGcm9tUHJvcHNMaXN0ID0gZnVuY3Rpb24gZ2V0QmFzZVRhZ0Zyb21Qcm9wc0xpc3QocHJpbWFyeUF0dHJpYnV0ZXMsIHByb3BzTGlzdCkge1xuICAgIHJldHVybiBwcm9wc0xpc3QuZmlsdGVyKGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHByb3BzW19IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkJBU0VdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgIH0pLm1hcChmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzW19IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkJBU0VdO1xuICAgIH0pLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGlubmVybW9zdEJhc2VUYWcsIHRhZykge1xuICAgICAgICBpZiAoIWlubmVybW9zdEJhc2VUYWcubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRhZyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVLZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBsb3dlckNhc2VBdHRyaWJ1dGVLZXkgPSBhdHRyaWJ1dGVLZXkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChwcmltYXJ5QXR0cmlidXRlcy5pbmRleE9mKGxvd2VyQ2FzZUF0dHJpYnV0ZUtleSkgIT09IC0xICYmIHRhZ1tsb3dlckNhc2VBdHRyaWJ1dGVLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbm5lcm1vc3RCYXNlVGFnLmNvbmNhdCh0YWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbm5lcm1vc3RCYXNlVGFnO1xuICAgIH0sIFtdKTtcbn07XG5cbnZhciBnZXRUYWdzRnJvbVByb3BzTGlzdCA9IGZ1bmN0aW9uIGdldFRhZ3NGcm9tUHJvcHNMaXN0KHRhZ05hbWUsIHByaW1hcnlBdHRyaWJ1dGVzLCBwcm9wc0xpc3QpIHtcbiAgICAvLyBDYWxjdWxhdGUgbGlzdCBvZiB0YWdzLCBnaXZpbmcgcHJpb3JpdHkgaW5uZXJtb3N0IGNvbXBvbmVudCAoZW5kIG9mIHRoZSBwcm9wc2xpc3QpXG4gICAgdmFyIGFwcHJvdmVkU2VlblRhZ3MgPSB7fTtcblxuICAgIHJldHVybiBwcm9wc0xpc3QuZmlsdGVyKGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wc1t0YWdOYW1lXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcHNbdGFnTmFtZV0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHdhcm4oXCJIZWxtZXQ6IFwiICsgdGFnTmFtZSArIFwiIHNob3VsZCBiZSBvZiB0eXBlIFxcXCJBcnJheVxcXCIuIEluc3RlYWQgZm91bmQgdHlwZSBcXFwiXCIgKyBfdHlwZW9mKHByb3BzW3RhZ05hbWVdKSArIFwiXFxcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICByZXR1cm4gcHJvcHNbdGFnTmFtZV07XG4gICAgfSkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoYXBwcm92ZWRUYWdzLCBpbnN0YW5jZVRhZ3MpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlU2VlblRhZ3MgPSB7fTtcblxuICAgICAgICBpbnN0YW5jZVRhZ3MuZmlsdGVyKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgIHZhciBwcmltYXJ5QXR0cmlidXRlS2V5ID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0YWcpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZUtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGxvd2VyQ2FzZUF0dHJpYnV0ZUtleSA9IGF0dHJpYnV0ZUtleS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gU3BlY2lhbCBydWxlIHdpdGggbGluayB0YWdzLCBzaW5jZSByZWwgYW5kIGhyZWYgYXJlIGJvdGggcHJpbWFyeSB0YWdzLCByZWwgdGFrZXMgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICBpZiAocHJpbWFyeUF0dHJpYnV0ZXMuaW5kZXhPZihsb3dlckNhc2VBdHRyaWJ1dGVLZXkpICE9PSAtMSAmJiAhKHByaW1hcnlBdHRyaWJ1dGVLZXkgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuUkVMICYmIHRhZ1twcmltYXJ5QXR0cmlidXRlS2V5XS50b0xvd2VyQ2FzZSgpID09PSBcImNhbm9uaWNhbFwiKSAmJiAhKGxvd2VyQ2FzZUF0dHJpYnV0ZUtleSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5SRUwgJiYgdGFnW2xvd2VyQ2FzZUF0dHJpYnV0ZUtleV0udG9Mb3dlckNhc2UoKSA9PT0gXCJzdHlsZXNoZWV0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlBdHRyaWJ1dGVLZXkgPSBsb3dlckNhc2VBdHRyaWJ1dGVLZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgaW5uZXJIVE1MIHdoaWNoIGRvZXNuJ3Qgd29yayBsb3dlcmNhc2VkXG4gICAgICAgICAgICAgICAgaWYgKHByaW1hcnlBdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlS2V5KSAhPT0gLTEgJiYgKGF0dHJpYnV0ZUtleSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JTk5FUl9IVE1MIHx8IGF0dHJpYnV0ZUtleSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5DU1NfVEVYVCB8fCBhdHRyaWJ1dGVLZXkgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSVRFTV9QUk9QKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5QXR0cmlidXRlS2V5ID0gYXR0cmlidXRlS2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFwcmltYXJ5QXR0cmlidXRlS2V5IHx8ICF0YWdbcHJpbWFyeUF0dHJpYnV0ZUtleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRhZ1twcmltYXJ5QXR0cmlidXRlS2V5XS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBpZiAoIWFwcHJvdmVkU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV0pIHtcbiAgICAgICAgICAgICAgICBhcHByb3ZlZFNlZW5UYWdzW3ByaW1hcnlBdHRyaWJ1dGVLZXldID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaW5zdGFuY2VTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XSkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV0gPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFhcHByb3ZlZFNlZW5UYWdzW3ByaW1hcnlBdHRyaWJ1dGVLZXldW3ZhbHVlXSkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV1bdmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBwcm92ZWRUYWdzLnB1c2godGFnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHNlZW4gdGFncyB3aXRoIHRhZ3MgZnJvbSB0aGlzIGluc3RhbmNlXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoaW5zdGFuY2VTZWVuVGFncyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZUtleSA9IGtleXNbaV07XG4gICAgICAgICAgICB2YXIgdGFnVW5pb24gPSAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIGFwcHJvdmVkU2VlblRhZ3NbYXR0cmlidXRlS2V5XSwgaW5zdGFuY2VTZWVuVGFnc1thdHRyaWJ1dGVLZXldKTtcblxuICAgICAgICAgICAgYXBwcm92ZWRTZWVuVGFnc1thdHRyaWJ1dGVLZXldID0gdGFnVW5pb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXBwcm92ZWRUYWdzO1xuICAgIH0sIFtdKS5yZXZlcnNlKCk7XG59O1xuXG52YXIgZ2V0SW5uZXJtb3N0UHJvcGVydHkgPSBmdW5jdGlvbiBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIHByb3BlcnR5KSB7XG4gICAgZm9yICh2YXIgaSA9IHByb3BzTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgcHJvcHMgPSBwcm9wc0xpc3RbaV07XG5cbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcblxudmFyIHJlZHVjZVByb3BzVG9TdGF0ZSA9IGZ1bmN0aW9uIHJlZHVjZVByb3BzVG9TdGF0ZShwcm9wc0xpc3QpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBiYXNlVGFnOiBnZXRCYXNlVGFnRnJvbVByb3BzTGlzdChbX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5IUkVGXSwgcHJvcHNMaXN0KSxcbiAgICAgICAgYm9keUF0dHJpYnV0ZXM6IGdldEF0dHJpYnV0ZXNGcm9tUHJvcHNMaXN0KF9IZWxtZXRDb25zdGFudHMuQVRUUklCVVRFX05BTUVTLkJPRFksIHByb3BzTGlzdCksXG4gICAgICAgIGRlZmVyOiBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX1BST1BTLkRFRkVSKSxcbiAgICAgICAgZW5jb2RlOiBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX1BST1BTLkVOQ09ERV9TUEVDSUFMX0NIQVJBQ1RFUlMpLFxuICAgICAgICBodG1sQXR0cmlidXRlczogZ2V0QXR0cmlidXRlc0Zyb21Qcm9wc0xpc3QoX0hlbG1ldENvbnN0YW50cy5BVFRSSUJVVEVfTkFNRVMuSFRNTCwgcHJvcHNMaXN0KSxcbiAgICAgICAgbGlua1RhZ3M6IGdldFRhZ3NGcm9tUHJvcHNMaXN0KF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkxJTkssIFtfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLlJFTCwgX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5IUkVGXSwgcHJvcHNMaXN0KSxcbiAgICAgICAgbWV0YVRhZ3M6IGdldFRhZ3NGcm9tUHJvcHNMaXN0KF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk1FVEEsIFtfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLk5BTUUsIF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuQ0hBUlNFVCwgX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5IVFRQRVFVSVYsIF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuUFJPUEVSVFksIF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSVRFTV9QUk9QXSwgcHJvcHNMaXN0KSxcbiAgICAgICAgbm9zY3JpcHRUYWdzOiBnZXRUYWdzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5OT1NDUklQVCwgW19IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSU5ORVJfSFRNTF0sIHByb3BzTGlzdCksXG4gICAgICAgIG9uQ2hhbmdlQ2xpZW50U3RhdGU6IGdldE9uQ2hhbmdlQ2xpZW50U3RhdGUocHJvcHNMaXN0KSxcbiAgICAgICAgc2NyaXB0VGFnczogZ2V0VGFnc0Zyb21Qcm9wc0xpc3QoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU0NSSVBULCBbX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5TUkMsIF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSU5ORVJfSFRNTF0sIHByb3BzTGlzdCksXG4gICAgICAgIHN0eWxlVGFnczogZ2V0VGFnc0Zyb21Qcm9wc0xpc3QoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU1RZTEUsIFtfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkNTU19URVhUXSwgcHJvcHNMaXN0KSxcbiAgICAgICAgdGl0bGU6IGdldFRpdGxlRnJvbVByb3BzTGlzdChwcm9wc0xpc3QpLFxuICAgICAgICB0aXRsZUF0dHJpYnV0ZXM6IGdldEF0dHJpYnV0ZXNGcm9tUHJvcHNMaXN0KF9IZWxtZXRDb25zdGFudHMuQVRUUklCVVRFX05BTUVTLlRJVExFLCBwcm9wc0xpc3QpXG4gICAgfTtcbn07XG5cbnZhciByYWZQb2x5ZmlsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2xvY2sgPSBEYXRlLm5vdygpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGlmIChjdXJyZW50VGltZSAtIGNsb2NrID4gMTYpIHtcbiAgICAgICAgICAgIGNsb2NrID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICBjYWxsYmFjayhjdXJyZW50VGltZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByYWZQb2x5ZmlsbChjYWxsYmFjayk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbnZhciBjYWZQb2x5ZmlsbCA9IGZ1bmN0aW9uIGNhZlBvbHlmaWxsKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHJhZlBvbHlmaWxsIDogZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByYWZQb2x5ZmlsbDtcblxudmFyIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IGNhZlBvbHlmaWxsIDogZ2xvYmFsLmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IGNhZlBvbHlmaWxsO1xuXG52YXIgd2FybiA9IGZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUgJiYgdHlwZW9mIGNvbnNvbGUud2FybiA9PT0gXCJmdW5jdGlvblwiICYmIGNvbnNvbGUud2Fybihtc2cpO1xufTtcblxudmFyIF9oZWxtZXRDYWxsYmFjayA9IG51bGw7XG5cbnZhciBoYW5kbGVDbGllbnRTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNsaWVudFN0YXRlQ2hhbmdlKG5ld1N0YXRlKSB7XG4gICAgaWYgKF9oZWxtZXRDYWxsYmFjaykge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShfaGVsbWV0Q2FsbGJhY2spO1xuICAgIH1cblxuICAgIGlmIChuZXdTdGF0ZS5kZWZlcikge1xuICAgICAgICBfaGVsbWV0Q2FsbGJhY2sgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29tbWl0VGFnQ2hhbmdlcyhuZXdTdGF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9oZWxtZXRDYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29tbWl0VGFnQ2hhbmdlcyhuZXdTdGF0ZSk7XG4gICAgICAgIF9oZWxtZXRDYWxsYmFjayA9IG51bGw7XG4gICAgfVxufTtcblxudmFyIGNvbW1pdFRhZ0NoYW5nZXMgPSBmdW5jdGlvbiBjb21taXRUYWdDaGFuZ2VzKG5ld1N0YXRlLCBjYikge1xuICAgIHZhciBiYXNlVGFnID0gbmV3U3RhdGUuYmFzZVRhZyxcbiAgICAgICAgYm9keUF0dHJpYnV0ZXMgPSBuZXdTdGF0ZS5ib2R5QXR0cmlidXRlcyxcbiAgICAgICAgaHRtbEF0dHJpYnV0ZXMgPSBuZXdTdGF0ZS5odG1sQXR0cmlidXRlcyxcbiAgICAgICAgbGlua1RhZ3MgPSBuZXdTdGF0ZS5saW5rVGFncyxcbiAgICAgICAgbWV0YVRhZ3MgPSBuZXdTdGF0ZS5tZXRhVGFncyxcbiAgICAgICAgbm9zY3JpcHRUYWdzID0gbmV3U3RhdGUubm9zY3JpcHRUYWdzLFxuICAgICAgICBvbkNoYW5nZUNsaWVudFN0YXRlID0gbmV3U3RhdGUub25DaGFuZ2VDbGllbnRTdGF0ZSxcbiAgICAgICAgc2NyaXB0VGFncyA9IG5ld1N0YXRlLnNjcmlwdFRhZ3MsXG4gICAgICAgIHN0eWxlVGFncyA9IG5ld1N0YXRlLnN0eWxlVGFncyxcbiAgICAgICAgdGl0bGUgPSBuZXdTdGF0ZS50aXRsZSxcbiAgICAgICAgdGl0bGVBdHRyaWJ1dGVzID0gbmV3U3RhdGUudGl0bGVBdHRyaWJ1dGVzO1xuXG4gICAgdXBkYXRlQXR0cmlidXRlcyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5CT0RZLCBib2R5QXR0cmlidXRlcyk7XG4gICAgdXBkYXRlQXR0cmlidXRlcyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5IVE1MLCBodG1sQXR0cmlidXRlcyk7XG5cbiAgICB1cGRhdGVUaXRsZSh0aXRsZSwgdGl0bGVBdHRyaWJ1dGVzKTtcblxuICAgIHZhciB0YWdVcGRhdGVzID0ge1xuICAgICAgICBiYXNlVGFnOiB1cGRhdGVUYWdzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkJBU0UsIGJhc2VUYWcpLFxuICAgICAgICBsaW5rVGFnczogdXBkYXRlVGFncyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5MSU5LLCBsaW5rVGFncyksXG4gICAgICAgIG1ldGFUYWdzOiB1cGRhdGVUYWdzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk1FVEEsIG1ldGFUYWdzKSxcbiAgICAgICAgbm9zY3JpcHRUYWdzOiB1cGRhdGVUYWdzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk5PU0NSSVBULCBub3NjcmlwdFRhZ3MpLFxuICAgICAgICBzY3JpcHRUYWdzOiB1cGRhdGVUYWdzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNDUklQVCwgc2NyaXB0VGFncyksXG4gICAgICAgIHN0eWxlVGFnczogdXBkYXRlVGFncyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TVFlMRSwgc3R5bGVUYWdzKVxuICAgIH07XG5cbiAgICB2YXIgYWRkZWRUYWdzID0ge307XG4gICAgdmFyIHJlbW92ZWRUYWdzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyh0YWdVcGRhdGVzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YWdUeXBlKSB7XG4gICAgICAgIHZhciBfdGFnVXBkYXRlcyR0YWdUeXBlID0gdGFnVXBkYXRlc1t0YWdUeXBlXSxcbiAgICAgICAgICAgIG5ld1RhZ3MgPSBfdGFnVXBkYXRlcyR0YWdUeXBlLm5ld1RhZ3MsXG4gICAgICAgICAgICBvbGRUYWdzID0gX3RhZ1VwZGF0ZXMkdGFnVHlwZS5vbGRUYWdzO1xuXG5cbiAgICAgICAgaWYgKG5ld1RhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBhZGRlZFRhZ3NbdGFnVHlwZV0gPSBuZXdUYWdzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvbGRUYWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVtb3ZlZFRhZ3NbdGFnVHlwZV0gPSB0YWdVcGRhdGVzW3RhZ1R5cGVdLm9sZFRhZ3M7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNiICYmIGNiKCk7XG5cbiAgICBvbkNoYW5nZUNsaWVudFN0YXRlKG5ld1N0YXRlLCBhZGRlZFRhZ3MsIHJlbW92ZWRUYWdzKTtcbn07XG5cbnZhciBmbGF0dGVuQXJyYXkgPSBmdW5jdGlvbiBmbGF0dGVuQXJyYXkocG9zc2libGVBcnJheSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBvc3NpYmxlQXJyYXkpID8gcG9zc2libGVBcnJheS5qb2luKFwiXCIpIDogcG9zc2libGVBcnJheTtcbn07XG5cbnZhciB1cGRhdGVUaXRsZSA9IGZ1bmN0aW9uIHVwZGF0ZVRpdGxlKHRpdGxlLCBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKHR5cGVvZiB0aXRsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC50aXRsZSAhPT0gdGl0bGUpIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBmbGF0dGVuQXJyYXkodGl0bGUpO1xuICAgIH1cblxuICAgIHVwZGF0ZUF0dHJpYnV0ZXMoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuVElUTEUsIGF0dHJpYnV0ZXMpO1xufTtcblxudmFyIHVwZGF0ZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiB1cGRhdGVBdHRyaWJ1dGVzKHRhZ05hbWUsIGF0dHJpYnV0ZXMpIHtcbiAgICB2YXIgZWxlbWVudFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpWzBdO1xuXG4gICAgaWYgKCFlbGVtZW50VGFnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaGVsbWV0QXR0cmlidXRlU3RyaW5nID0gZWxlbWVudFRhZy5nZXRBdHRyaWJ1dGUoX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFKTtcbiAgICB2YXIgaGVsbWV0QXR0cmlidXRlcyA9IGhlbG1ldEF0dHJpYnV0ZVN0cmluZyA/IGhlbG1ldEF0dHJpYnV0ZVN0cmluZy5zcGxpdChcIixcIikgOiBbXTtcbiAgICB2YXIgYXR0cmlidXRlc1RvUmVtb3ZlID0gW10uY29uY2F0KGhlbG1ldEF0dHJpYnV0ZXMpO1xuICAgIHZhciBhdHRyaWJ1dGVLZXlzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZUtleXNbaV07XG4gICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlXSB8fCBcIlwiO1xuXG4gICAgICAgIGlmIChlbGVtZW50VGFnLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgZWxlbWVudFRhZy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGVsbWV0QXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBoZWxtZXRBdHRyaWJ1dGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbmRleFRvU2F2ZSA9IGF0dHJpYnV0ZXNUb1JlbW92ZS5pbmRleE9mKGF0dHJpYnV0ZSk7XG4gICAgICAgIGlmIChpbmRleFRvU2F2ZSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNUb1JlbW92ZS5zcGxpY2UoaW5kZXhUb1NhdmUsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSBhdHRyaWJ1dGVzVG9SZW1vdmUubGVuZ3RoIC0gMTsgX2kgPj0gMDsgX2ktLSkge1xuICAgICAgICBlbGVtZW50VGFnLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzVG9SZW1vdmVbX2ldKTtcbiAgICB9XG5cbiAgICBpZiAoaGVsbWV0QXR0cmlidXRlcy5sZW5ndGggPT09IGF0dHJpYnV0ZXNUb1JlbW92ZS5sZW5ndGgpIHtcbiAgICAgICAgZWxlbWVudFRhZy5yZW1vdmVBdHRyaWJ1dGUoX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFKTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcuZ2V0QXR0cmlidXRlKF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSkgIT09IGF0dHJpYnV0ZUtleXMuam9pbihcIixcIikpIHtcbiAgICAgICAgZWxlbWVudFRhZy5zZXRBdHRyaWJ1dGUoX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFLCBhdHRyaWJ1dGVLZXlzLmpvaW4oXCIsXCIpKTtcbiAgICB9XG59O1xuXG52YXIgdXBkYXRlVGFncyA9IGZ1bmN0aW9uIHVwZGF0ZVRhZ3ModHlwZSwgdGFncykge1xuICAgIHZhciBoZWFkRWxlbWVudCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5IRUFEKTtcbiAgICB2YXIgdGFnTm9kZXMgPSBoZWFkRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHR5cGUgKyBcIltcIiArIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSArIFwiXVwiKTtcbiAgICB2YXIgb2xkVGFncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhZ05vZGVzKTtcbiAgICB2YXIgbmV3VGFncyA9IFtdO1xuICAgIHZhciBpbmRleFRvRGVsZXRlID0gdm9pZCAwO1xuXG4gICAgaWYgKHRhZ3MgJiYgdGFncy5sZW5ndGgpIHtcbiAgICAgICAgdGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgIHZhciBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgYXR0cmlidXRlIGluIHRhZykge1xuICAgICAgICAgICAgICAgIGlmICh0YWcuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklOTkVSX0hUTUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuaW5uZXJIVE1MID0gdGFnLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGUgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuQ1NTX1RFWFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHRhZy5jc3NUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRhZy5jc3NUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0eXBlb2YgdGFnW2F0dHJpYnV0ZV0gPT09IFwidW5kZWZpbmVkXCIgPyBcIlwiIDogdGFnW2F0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFLCBcInRydWVcIik7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBhIGR1cGxpY2F0ZSB0YWcgZnJvbSBkb21UYWdzdG9SZW1vdmUsIHNvIGl0IGlzbid0IGNsZWFyZWQuXG4gICAgICAgICAgICBpZiAob2xkVGFncy5zb21lKGZ1bmN0aW9uIChleGlzdGluZ1RhZywgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpbmRleFRvRGVsZXRlID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQuaXNFcXVhbE5vZGUoZXhpc3RpbmdUYWcpO1xuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICBvbGRUYWdzLnNwbGljZShpbmRleFRvRGVsZXRlLCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3VGFncy5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbGRUYWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICByZXR1cm4gdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICB9KTtcbiAgICBuZXdUYWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICByZXR1cm4gaGVhZEVsZW1lbnQuYXBwZW5kQ2hpbGQodGFnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9sZFRhZ3M6IG9sZFRhZ3MsXG4gICAgICAgIG5ld1RhZ3M6IG5ld1RhZ3NcbiAgICB9O1xufTtcblxudmFyIGdlbmVyYXRlRWxlbWVudEF0dHJpYnV0ZXNBc1N0cmluZyA9IGZ1bmN0aW9uIGdlbmVyYXRlRWxlbWVudEF0dHJpYnV0ZXNBc1N0cmluZyhhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLnJlZHVjZShmdW5jdGlvbiAoc3RyLCBrZXkpIHtcbiAgICAgICAgdmFyIGF0dHIgPSB0eXBlb2YgYXR0cmlidXRlc1trZXldICE9PSBcInVuZGVmaW5lZFwiID8ga2V5ICsgXCI9XFxcIlwiICsgYXR0cmlidXRlc1trZXldICsgXCJcXFwiXCIgOiBcIlwiICsga2V5O1xuICAgICAgICByZXR1cm4gc3RyID8gc3RyICsgXCIgXCIgKyBhdHRyIDogYXR0cjtcbiAgICB9LCBcIlwiKTtcbn07XG5cbnZhciBnZW5lcmF0ZVRpdGxlQXNTdHJpbmcgPSBmdW5jdGlvbiBnZW5lcmF0ZVRpdGxlQXNTdHJpbmcodHlwZSwgdGl0bGUsIGF0dHJpYnV0ZXMsIGVuY29kZSkge1xuICAgIHZhciBhdHRyaWJ1dGVTdHJpbmcgPSBnZW5lcmF0ZUVsZW1lbnRBdHRyaWJ1dGVzQXNTdHJpbmcoYXR0cmlidXRlcyk7XG4gICAgdmFyIGZsYXR0ZW5lZFRpdGxlID0gZmxhdHRlbkFycmF5KHRpdGxlKTtcbiAgICByZXR1cm4gYXR0cmlidXRlU3RyaW5nID8gXCI8XCIgKyB0eXBlICsgXCIgXCIgKyBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUgKyBcIj1cXFwidHJ1ZVxcXCIgXCIgKyBhdHRyaWJ1dGVTdHJpbmcgKyBcIj5cIiArIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzKGZsYXR0ZW5lZFRpdGxlLCBlbmNvZGUpICsgXCI8L1wiICsgdHlwZSArIFwiPlwiIDogXCI8XCIgKyB0eXBlICsgXCIgXCIgKyBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUgKyBcIj1cXFwidHJ1ZVxcXCI+XCIgKyBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVycyhmbGF0dGVuZWRUaXRsZSwgZW5jb2RlKSArIFwiPC9cIiArIHR5cGUgKyBcIj5cIjtcbn07XG5cbnZhciBnZW5lcmF0ZVRhZ3NBc1N0cmluZyA9IGZ1bmN0aW9uIGdlbmVyYXRlVGFnc0FzU3RyaW5nKHR5cGUsIHRhZ3MsIGVuY29kZSkge1xuICAgIHJldHVybiB0YWdzLnJlZHVjZShmdW5jdGlvbiAoc3RyLCB0YWcpIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZUh0bWwgPSBPYmplY3Qua2V5cyh0YWcpLmZpbHRlcihmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gIShhdHRyaWJ1dGUgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSU5ORVJfSFRNTCB8fCBhdHRyaWJ1dGUgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuQ1NTX1RFWFQpO1xuICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKHN0cmluZywgYXR0cmlidXRlKSB7XG4gICAgICAgICAgICB2YXIgYXR0ciA9IHR5cGVvZiB0YWdbYXR0cmlidXRlXSA9PT0gXCJ1bmRlZmluZWRcIiA/IGF0dHJpYnV0ZSA6IGF0dHJpYnV0ZSArIFwiPVxcXCJcIiArIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzKHRhZ1thdHRyaWJ1dGVdLCBlbmNvZGUpICsgXCJcXFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gc3RyaW5nICsgXCIgXCIgKyBhdHRyIDogYXR0cjtcbiAgICAgICAgfSwgXCJcIik7XG5cbiAgICAgICAgdmFyIHRhZ0NvbnRlbnQgPSB0YWcuaW5uZXJIVE1MIHx8IHRhZy5jc3NUZXh0IHx8IFwiXCI7XG5cbiAgICAgICAgdmFyIGlzU2VsZkNsb3NpbmcgPSBfSGVsbWV0Q29uc3RhbnRzLlNFTEZfQ0xPU0lOR19UQUdTLmluZGV4T2YodHlwZSkgPT09IC0xO1xuXG4gICAgICAgIHJldHVybiBzdHIgKyBcIjxcIiArIHR5cGUgKyBcIiBcIiArIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSArIFwiPVxcXCJ0cnVlXFxcIiBcIiArIGF0dHJpYnV0ZUh0bWwgKyAoaXNTZWxmQ2xvc2luZyA/IFwiLz5cIiA6IFwiPlwiICsgdGFnQ29udGVudCArIFwiPC9cIiArIHR5cGUgKyBcIj5cIik7XG4gICAgfSwgXCJcIik7XG59O1xuXG52YXIgY29udmVydEVsZW1lbnRBdHRyaWJ1dGVzdG9SZWFjdFByb3BzID0gZnVuY3Rpb24gY29udmVydEVsZW1lbnRBdHRyaWJ1dGVzdG9SZWFjdFByb3BzKGF0dHJpYnV0ZXMpIHtcbiAgICB2YXIgaW5pdFByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICAgIG9ialtfSGVsbWV0Q29uc3RhbnRzLlJFQUNUX1RBR19NQVBba2V5XSB8fCBrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sIGluaXRQcm9wcyk7XG59O1xuXG52YXIgY29udmVydFJlYWN0UHJvcHN0b0h0bWxBdHRyaWJ1dGVzID0gZnVuY3Rpb24gY29udmVydFJlYWN0UHJvcHN0b0h0bWxBdHRyaWJ1dGVzKHByb3BzKSB7XG4gICAgdmFyIGluaXRBdHRyaWJ1dGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhwcm9wcykucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgICAgICBvYmpbX0hlbG1ldENvbnN0YW50cy5IVE1MX1RBR19NQVBba2V5XSB8fCBrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCBpbml0QXR0cmlidXRlcyk7XG59O1xuXG52YXIgZ2VuZXJhdGVUaXRsZUFzUmVhY3RDb21wb25lbnQgPSBmdW5jdGlvbiBnZW5lcmF0ZVRpdGxlQXNSZWFjdENvbXBvbmVudCh0eXBlLCB0aXRsZSwgYXR0cmlidXRlcykge1xuICAgIHZhciBfaW5pdFByb3BzO1xuXG4gICAgLy8gYXNzaWduaW5nIGludG8gYW4gYXJyYXkgdG8gZGVmaW5lIHRvU3RyaW5nIGZ1bmN0aW9uIG9uIGl0XG4gICAgdmFyIGluaXRQcm9wcyA9IChfaW5pdFByb3BzID0ge1xuICAgICAgICBrZXk6IHRpdGxlXG4gICAgfSwgX2luaXRQcm9wc1tfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEVdID0gdHJ1ZSwgX2luaXRQcm9wcyk7XG4gICAgdmFyIHByb3BzID0gY29udmVydEVsZW1lbnRBdHRyaWJ1dGVzdG9SZWFjdFByb3BzKGF0dHJpYnV0ZXMsIGluaXRQcm9wcyk7XG5cbiAgICByZXR1cm4gW19yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlRJVExFLCBwcm9wcywgdGl0bGUpXTtcbn07XG5cbnZhciBnZW5lcmF0ZVRhZ3NBc1JlYWN0Q29tcG9uZW50ID0gZnVuY3Rpb24gZ2VuZXJhdGVUYWdzQXNSZWFjdENvbXBvbmVudCh0eXBlLCB0YWdzKSB7XG4gICAgcmV0dXJuIHRhZ3MubWFwKGZ1bmN0aW9uICh0YWcsIGkpIHtcbiAgICAgICAgdmFyIF9tYXBwZWRUYWc7XG5cbiAgICAgICAgdmFyIG1hcHBlZFRhZyA9IChfbWFwcGVkVGFnID0ge1xuICAgICAgICAgICAga2V5OiBpXG4gICAgICAgIH0sIF9tYXBwZWRUYWdbX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFXSA9IHRydWUsIF9tYXBwZWRUYWcpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRhZykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICB2YXIgbWFwcGVkQXR0cmlidXRlID0gX0hlbG1ldENvbnN0YW50cy5SRUFDVF9UQUdfTUFQW2F0dHJpYnV0ZV0gfHwgYXR0cmlidXRlO1xuXG4gICAgICAgICAgICBpZiAobWFwcGVkQXR0cmlidXRlID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklOTkVSX0hUTUwgfHwgbWFwcGVkQXR0cmlidXRlID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkNTU19URVhUKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0YWcuaW5uZXJIVE1MIHx8IHRhZy5jc3NUZXh0O1xuICAgICAgICAgICAgICAgIG1hcHBlZFRhZy5kYW5nZXJvdXNseVNldElubmVySFRNTCA9IHsgX19odG1sOiBjb250ZW50IH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hcHBlZFRhZ1ttYXBwZWRBdHRyaWJ1dGVdID0gdGFnW2F0dHJpYnV0ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0eXBlLCBtYXBwZWRUYWcpO1xuICAgIH0pO1xufTtcblxudmFyIGdldE1ldGhvZHNGb3JUYWcgPSBmdW5jdGlvbiBnZXRNZXRob2RzRm9yVGFnKHR5cGUsIHRhZ3MsIGVuY29kZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlRJVExFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b0NvbXBvbmVudDogZnVuY3Rpb24gdG9Db21wb25lbnQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRpdGxlQXNSZWFjdENvbXBvbmVudCh0eXBlLCB0YWdzLnRpdGxlLCB0YWdzLnRpdGxlQXR0cmlidXRlcywgZW5jb2RlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVGl0bGVBc1N0cmluZyh0eXBlLCB0YWdzLnRpdGxlLCB0YWdzLnRpdGxlQXR0cmlidXRlcywgZW5jb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuQVRUUklCVVRFX05BTUVTLkJPRFk6XG4gICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5BVFRSSUJVVEVfTkFNRVMuSFRNTDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG9Db21wb25lbnQ6IGZ1bmN0aW9uIHRvQ29tcG9uZW50KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udmVydEVsZW1lbnRBdHRyaWJ1dGVzdG9SZWFjdFByb3BzKHRhZ3MpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVFbGVtZW50QXR0cmlidXRlc0FzU3RyaW5nKHRhZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRvQ29tcG9uZW50OiBmdW5jdGlvbiB0b0NvbXBvbmVudCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVGFnc0FzUmVhY3RDb21wb25lbnQodHlwZSwgdGFncyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRhZ3NBc1N0cmluZyh0eXBlLCB0YWdzLCBlbmNvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgfVxufTtcblxudmFyIG1hcFN0YXRlT25TZXJ2ZXIgPSBmdW5jdGlvbiBtYXBTdGF0ZU9uU2VydmVyKF9yZWYpIHtcbiAgICB2YXIgYmFzZVRhZyA9IF9yZWYuYmFzZVRhZyxcbiAgICAgICAgYm9keUF0dHJpYnV0ZXMgPSBfcmVmLmJvZHlBdHRyaWJ1dGVzLFxuICAgICAgICBlbmNvZGUgPSBfcmVmLmVuY29kZSxcbiAgICAgICAgaHRtbEF0dHJpYnV0ZXMgPSBfcmVmLmh0bWxBdHRyaWJ1dGVzLFxuICAgICAgICBsaW5rVGFncyA9IF9yZWYubGlua1RhZ3MsXG4gICAgICAgIG1ldGFUYWdzID0gX3JlZi5tZXRhVGFncyxcbiAgICAgICAgbm9zY3JpcHRUYWdzID0gX3JlZi5ub3NjcmlwdFRhZ3MsXG4gICAgICAgIHNjcmlwdFRhZ3MgPSBfcmVmLnNjcmlwdFRhZ3MsXG4gICAgICAgIHN0eWxlVGFncyA9IF9yZWYuc3R5bGVUYWdzLFxuICAgICAgICBfcmVmJHRpdGxlID0gX3JlZi50aXRsZSxcbiAgICAgICAgdGl0bGUgPSBfcmVmJHRpdGxlID09PSB1bmRlZmluZWQgPyBcIlwiIDogX3JlZiR0aXRsZSxcbiAgICAgICAgdGl0bGVBdHRyaWJ1dGVzID0gX3JlZi50aXRsZUF0dHJpYnV0ZXM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmFzZTogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5CQVNFLCBiYXNlVGFnLCBlbmNvZGUpLFxuICAgICAgICBib2R5QXR0cmlidXRlczogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLkFUVFJJQlVURV9OQU1FUy5CT0RZLCBib2R5QXR0cmlidXRlcywgZW5jb2RlKSxcbiAgICAgICAgaHRtbEF0dHJpYnV0ZXM6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5BVFRSSUJVVEVfTkFNRVMuSFRNTCwgaHRtbEF0dHJpYnV0ZXMsIGVuY29kZSksXG4gICAgICAgIGxpbms6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTElOSywgbGlua1RhZ3MsIGVuY29kZSksXG4gICAgICAgIG1ldGE6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTUVUQSwgbWV0YVRhZ3MsIGVuY29kZSksXG4gICAgICAgIG5vc2NyaXB0OiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk5PU0NSSVBULCBub3NjcmlwdFRhZ3MsIGVuY29kZSksXG4gICAgICAgIHNjcmlwdDogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TQ1JJUFQsIHNjcmlwdFRhZ3MsIGVuY29kZSksXG4gICAgICAgIHN0eWxlOiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNUWUxFLCBzdHlsZVRhZ3MsIGVuY29kZSksXG4gICAgICAgIHRpdGxlOiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlRJVExFLCB7IHRpdGxlOiB0aXRsZSwgdGl0bGVBdHRyaWJ1dGVzOiB0aXRsZUF0dHJpYnV0ZXMgfSwgZW5jb2RlKVxuICAgIH07XG59O1xuXG5leHBvcnRzLmNvbnZlcnRSZWFjdFByb3BzdG9IdG1sQXR0cmlidXRlcyA9IGNvbnZlcnRSZWFjdFByb3BzdG9IdG1sQXR0cmlidXRlcztcbmV4cG9ydHMuaGFuZGxlQ2xpZW50U3RhdGVDaGFuZ2UgPSBoYW5kbGVDbGllbnRTdGF0ZUNoYW5nZTtcbmV4cG9ydHMubWFwU3RhdGVPblNlcnZlciA9IG1hcFN0YXRlT25TZXJ2ZXI7XG5leHBvcnRzLnJlZHVjZVByb3BzVG9TdGF0ZSA9IHJlZHVjZVByb3BzVG9TdGF0ZTtcbmV4cG9ydHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuZXhwb3J0cy53YXJuID0gd2FybjsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZXgpIHsgcmV0dXJuIChleCAmJiAodHlwZW9mIGV4ID09PSAnb2JqZWN0JykgJiYgJ2RlZmF1bHQnIGluIGV4KSA/IGV4WydkZWZhdWx0J10gOiBleDsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0X19kZWZhdWx0ID0gX2ludGVyb3BEZWZhdWx0KFJlYWN0KTtcbnZhciBzaGFsbG93RXF1YWwgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnc2hhbGxvd2VxdWFsJykpO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmZ1bmN0aW9uIHdpdGhTaWRlRWZmZWN0KHJlZHVjZVByb3BzVG9TdGF0ZSwgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCwgbWFwU3RhdGVPblNlcnZlcikge1xuICBpZiAodHlwZW9mIHJlZHVjZVByb3BzVG9TdGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcmVkdWNlUHJvcHNUb1N0YXRlIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbWFwU3RhdGVPblNlcnZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1hcFN0YXRlT25TZXJ2ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIG1hcFN0YXRlT25TZXJ2ZXIgdG8gZWl0aGVyIGJlIHVuZGVmaW5lZCBvciBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHJldHVybiBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpZiAodHlwZW9mIFdyYXBwZWRDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgV3JhcHBlZENvbXBvbmVudCB0byBiZSBhIFJlYWN0IGNvbXBvbmVudC4nKTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnRlZEluc3RhbmNlcyA9IFtdO1xuICAgIHZhciBzdGF0ZTtcblxuICAgIGZ1bmN0aW9uIGVtaXRDaGFuZ2UoKSB7XG4gICAgICBzdGF0ZSA9IHJlZHVjZVByb3BzVG9TdGF0ZShtb3VudGVkSW5zdGFuY2VzLm1hcChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnByb3BzO1xuICAgICAgfSkpO1xuXG4gICAgICBpZiAoU2lkZUVmZmVjdC5jYW5Vc2VET00pIHtcbiAgICAgICAgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChzdGF0ZSk7XG4gICAgICB9IGVsc2UgaWYgKG1hcFN0YXRlT25TZXJ2ZXIpIHtcbiAgICAgICAgc3RhdGUgPSBtYXBTdGF0ZU9uU2VydmVyKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgU2lkZUVmZmVjdCA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShTaWRlRWZmZWN0LCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gU2lkZUVmZmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBUcnkgdG8gdXNlIGRpc3BsYXlOYW1lIG9mIHdyYXBwZWQgY29tcG9uZW50XG4gICAgICAvLyBFeHBvc2UgY2FuVXNlRE9NIHNvIHRlc3RzIGNhbiBtb25rZXlwYXRjaCBpdFxuICAgICAgU2lkZUVmZmVjdC5wZWVrID0gZnVuY3Rpb24gcGVlaygpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfTtcblxuICAgICAgU2lkZUVmZmVjdC5yZXdpbmQgPSBmdW5jdGlvbiByZXdpbmQoKSB7XG4gICAgICAgIGlmIChTaWRlRWZmZWN0LmNhblVzZURPTSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBvbmx5IGNhbGwgcmV3aW5kKCkgb24gdGhlIHNlcnZlci4gQ2FsbCBwZWVrKCkgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWNvcmRlZFN0YXRlID0gc3RhdGU7XG4gICAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzID0gW107XG4gICAgICAgIHJldHVybiByZWNvcmRlZFN0YXRlO1xuICAgICAgfTtcblxuICAgICAgdmFyIF9wcm90byA9IFNpZGVFZmZlY3QucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gIXNoYWxsb3dFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICAgICAgICBlbWl0Q2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBlbWl0Q2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gbW91bnRlZEluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGVtaXRDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHRoaXMucHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFNpZGVFZmZlY3Q7XG4gICAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KFNpZGVFZmZlY3QsIFwiZGlzcGxheU5hbWVcIiwgXCJTaWRlRWZmZWN0KFwiICsgZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkgKyBcIilcIik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoU2lkZUVmZmVjdCwgXCJjYW5Vc2VET01cIiwgY2FuVXNlRE9NKTtcblxuICAgIHJldHVybiBTaWRlRWZmZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhTaWRlRWZmZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==