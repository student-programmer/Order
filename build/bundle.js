!function(e){var t={},n={1:0};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(t){if(0!==n[t]){var r=require("./"+t+".bundle.js"),o=r.modules,i=r.ids;for(var c in o)e[c]=o[c];for(var a=0;a<i.length;a++)n[i[a]]=0}return Promise.all([])},r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){process.nextTick((function(){throw e}))},r(r.s=45)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-loadable")},function(e,t){e.exports=require("semantic-ui-react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return s}));n(13);var r={status:1,rows:[{id:"1",category:"VPN",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",url:"/offer-vpnsecure-1-month-premium-vpn-1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"1 Month VPN",price:"4.97",old_price:"9.95",discount:"-50%",description:"VPNsecure 1 month premium 50% Off",discount_title:"Take it and get 50% off",user_used:"1187",quantity:1,tax:0},{id:"2",category:"VPN",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",url:"/offer-vpnsecure-6-month-premium-vpn-2",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"6 Month VPN ",price:"24.97",old_price:"49.95",discount:"-50%",description:"VPNsecure 6 month premium 50% Off",discount_title:"Take it and get 50% off",user_used:"569",quantity:1,tax:0},{id:"3",category:"VPN",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",url:"/offer-vpnsecure-3-month-premium-vpn-3",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"12 Month VPN",price:"39.97",old_price:"79.95",discount:"-50%",description:"VPNsecure 12 month premium 50% Off",discount_title:"Take it and get 50% off",user_used:"832",quantity:1,tax:0},{id:"4",category:"VPN",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",url:"/offer-vpnshazam-12-months-vpn-4",vendor_url:"/vendor-vpn-vpnshazam-2",name:"VPNShazam.com",title:"12 Months VPN",price:"24.9",old_price:"49.99",discount:"-50%",description:"VPNshazam 12 month premium 50% Off",discount_title:"Take it and get 50% off",user_used:"371",quantity:1,tax:0}]},o={status:1,rows:[{id:"1",quantity:1},{id:"2",quantity:1},{id:"3",quantity:1},{id:"4",quantity:1}]},i={status:1,errors:["Thing don't appear","Error 707"]},c={status:1,paylink:{PAYEE_ACCOUNT:"U24703959",PAYEE_NAME:"VPN",PAYMENT_ID:1,PAYMENT_AMOUNT:10,PAYMENT_UNITS:"USD",STATUS_URL:"",PAYMENT_URL:"https://api.savingsdealz.com/pay/pm/callback",PAYMENT_URL_METHOD:"POST",NOPAYMENT_URL:"https://api.savingsdealz.com/pay/pm/canceled",NOPAYMENT_URL_METHOD:"POST"}};function a(e){return console.log("getCartOffersButton----\x3e",e),new Promise((function(e){setTimeout((function(){e(o)}),200)}))}function u(e){return console.log("getCartOffers----\x3e",e),new Promise((function(e){setTimeout((function(){e(r)}),200)}))}function l(e){return new Promise((function(e){setTimeout((function(){e(i)}),200)}))}function s(e){return console.log("getPayLink----\x3e",e),new Promise((function(e){setTimeout((function(){e(c)}),200)}))}},function(e,t){e.exports=require("react-share")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(8);function o(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,o)}var i=function(e){return function(){var t,n=(t=regeneratorRuntime.mark((function t(n){var o,i,c,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=regeneratorRuntime.keys(e);case 1:if((t.t1=t.t0()).done){t.next=17;break}o=t.t1.value,i=e[o].id,e[o].quantity,t.t2=regeneratorRuntime.keys(e);case 6:if((t.t3=t.t2()).done){t.next=15;break}if(c=t.t3.value,o!=c){t.next=10;break}return t.abrupt("continue",6);case 10:a=e[c].id,e[o].quantity,i==a&&delete e[o],t.next=6;break;case 15:t.next=1;break;case 17:Object(r.a)(e),n({type:"fetchCartOffers",payload:e});case 19:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var c=t.apply(e,n);function a(e){o(c,r,i,a,u,"next",e)}function u(e){o(c,r,i,a,u,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}()}},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return s}));n(13);var r={status:!0,row:{email:"test@test.com",password:"**********"}};function o(e){return console.log("getAccountInfo----\x3e",e),new Promise((function(e){setTimeout((function(){e(r)}),200)}))}var i={status:0,row:{email:"sdfsdf@sdfsdf.sdf",id:2222}};function c(){return console.log("checkSession----\x3e"),new Promise((function(e){setTimeout((function(){e(i)}),1e3)}))}var a={status:1,user:{email:"sdfsdf@sdfsdf.sdf",id:2222}};function u(e){return console.log("sendSignIn---\x3e",e),new Promise((function(e){setTimeout((function(){e(a)}),3e3)}))}var l={status:1,user:{email:"sdfsdf@sdfsdf.sdf",id:2222},error:{}};function s(e){return console.log("sendRegister-----\x3e",e),new Promise((function(e){setTimeout((function(){e(l)}),1e3)}))}},function(e,t,n){"use strict";function r(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,o)}n.d(t,"a",(function(){return o}));var o=function(e){return function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"fetchUser",payload:e});case 1:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function a(e){r(c,o,i,a,u,"next",e)}function u(e){r(c,o,i,a,u,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}()}},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){e.exports=require("react-dynamic-sitemap")},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){e.exports=require("jsdom")},function(e,t,n){"use strict";n.r(t);n(20);var r=n(10),o=n.n(r),i=n(0),c=n.n(i),a=n(6),u=n(11),l=n.n(u),s=n(18),f=n(3),p=n(5),d=n(12),m=n(4),y=n.n(m);n(21);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(i,e);var t,n,r,o=v(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={error:null,errorInfo:null},t}return t=i,(n=[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){var e=this.state,t=this.props.children;return e.errorInfo?c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Something went wrong."),c.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},e.error&&e.error.toString(),c.a.createElement("br",null),e.errorInfo.componentStack)):t}}])&&g(t.prototype,n),r&&g(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(c.a.Component);P.propTypes={children:y.a.oneOfType([y.a.arrayOf(y.a.node),y.a.node]).isRequired};var E=P,j=(n(22),n(2)),k=function(e){return c.a.createElement(f.Link,{to:"/checkout",id:"cartButton"},c.a.createElement(j.Image,{alt:"cart",src:"/images/icon-cart.svg",size:"mini"}),e.cartOffers&&c.a.createElement(j.Label,{circular:!0,floating:!0},Object.keys(e.cartOffers).length))},x=n(8);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=L(e);if(t){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return N(this,n)}}function N(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M={fetchCartOffers:n(14).a},A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(i,e);var t,n,r,o=T(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),q(R(n=o.call(this,e,t)),"getCartOffersButton",(function(){Object(x.c)().then((function(e){var t=e.status,r=e.rows;t&&(n.setState({loading:!0,cartOffers:r}),n.props.fetchCartOffers(r))}),(function(e){alert("Rejected: "+e)}))})),q(R(n),"render",(function(){return c.a.createElement(k,n.state)})),n.state={loading:0,cartOffers:!1},n.getCartOffersButton(),n}return t=i,(n=[{key:"componentWillReceiveProps",value:function(e){this.setState({cartOffers:e.getCartOffers})}}])&&_(t.prototype,n),r&&_(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(c.a.Component),D=Object(f.withRouter)(Object(p.connect)((function(e){return{getCartOffers:e.getCartOffers}}),M)(A)),V=(n(23),function(e){return c.a.createElement(j.Image,{alt:"profile picture",as:f.Link,to:e.user?"/account":"/register",src:"/images/icon-man.svg",size:"mini"})}),I=n(15);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=H(e);if(t){var o=H(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return z(this,n)}}function z(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q={fetchUser:n(16).a},W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(i,e);var t,n,r,o=Y(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),J(F(n=o.call(this,e,t)),"getUser",(function(){Object(I.a)().then((function(e){var t=e.status,r=e.row;t&&(n.setState({loading:!0,user:r}),n.props.fetchUser(r))}),(function(e){alert("Rejected: "+e)}))})),J(F(n),"render",(function(){return c.a.createElement(V,n.state)})),n.state={loading:0,user:!1},n.getUser(),n}return t=i,(n=[{key:"componentWillReceiveProps",value:function(e){this.setState({cartOffers:e.getCartOffers})}}])&&B(t.prototype,n),r&&B(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(c.a.Component),X=Object(f.withRouter)(Object(p.connect)((function(e){return{getUser:e.getUser}}),Q)(W)),K=n(9);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=re(e);if(t){var o=re(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ne(this,n)}}function ne(e,t){if(t&&("object"===Z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}K.ShareButtons.FacebookShareButton,K.ShareCounts.FacebookShareCount,Object(K.generateShareIcon)("facebook");var oe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ee(e,t)}(i,e);var t,n,r,o=te(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this,e,t)).state={},n}return t=i,(n=[{key:"render",value:function(){var e=this.props.route;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"headerBlock"},c.a.createElement(j.Container,null,c.a.createElement(j.Menu,{inverted:!0,borderless:!0},c.a.createElement(j.Menu.Item,null,c.a.createElement(j.Image,{alt:"logo",as:f.Link,to:"/",src:"/images/logo.png"})),c.a.createElement(j.Dropdown,{item:!0,text:"Category"},c.a.createElement(j.Dropdown.Menu,null,c.a.createElement(j.Dropdown.Item,{as:f.Link,to:"/vpn",className:"VpnDropdown"},"VPN"))),c.a.createElement(j.Menu.Item,{name:"testimonials",as:f.Link,to:"/compare"},"Compare"),c.a.createElement(j.Menu.Menu,{position:"right"},c.a.createElement(j.Menu.Item,null,c.a.createElement(X,null)),c.a.createElement(j.Menu.Item,null,c.a.createElement(D,null)))))),c.a.createElement(E,null,Object(a.renderRoutes)(e.routes)),c.a.createElement("div",{id:"footerBlock"},c.a.createElement("div",{className:"ui container"},c.a.createElement("div",{width:"12",className:"ui centered middle aligned grid"},c.a.createElement(j.Grid.Column,{computer:3,textAlign:"left",className:"footerLinks1"},c.a.createElement(j.Menu,{borderless:!0,compact:!0,vertical:!0,className:"footerLinks1"},c.a.createElement(j.Menu.Item,{as:f.Link,to:"/faq",className:"footer-link"},"FAQ"),c.a.createElement(j.Menu.Item,{as:f.Link,to:"/news",className:"footer-link"},"News"),c.a.createElement(j.Menu.Item,{as:f.Link,to:"/articles",className:"footer-link"},"Articles"))),c.a.createElement(j.Grid.Column,{computer:3,textAlign:"center",className:"right-block"},c.a.createElement("a",{href:"https://www.facebook.com/",className:"iconsLink"},c.a.createElement("i",{class:"fab fa-facebook-square iconsFooter"})),c.a.createElement("a",{href:"https://www.instagram.com/#",className:"iconsLink"},c.a.createElement("i",{class:"fab fa-instagram iconsFooter"}))),c.a.createElement(j.Grid.Column,{computer:4,textAlign:"center"},c.a.createElement(j.Image,{src:"/images/logo.png",alt:"logo",centered:!0}),c.a.createElement("p",{className:"LogoText"},"Our mission: Give you best price to keep your money")),c.a.createElement(j.Grid.Column,{computer:3,textAlign:"center"},c.a.createElement(j.Button,{className:"card-buttonFooter",as:f.Link,to:"/vpn",primary:!0,content:"Select VPN >"})),c.a.createElement(j.Grid.Column,{computer:3,textAlign:"right",className:"footerLinks"},c.a.createElement(j.Menu,{borderless:!0,compact:!0,vertical:!0,className:"footerLinks"},c.a.createElement(j.Menu.Item,{as:f.Link,to:"/contact-us",className:"footer-link"},"Contact us"),c.a.createElement(j.Menu.Item,{as:f.Link,to:"/privacy-policy",className:"footer-link"},"Privacy policy"),c.a.createElement(j.Menu.Item,{as:f.Link,to:"/terms-and-conditions-of-use",className:"footer-link"},"Terms and conditions of use"))))),c.a.createElement("a",{href:"/sitemap.xml",className:"footer-sitemap-link"},"sitemap")))}}])&&$(t.prototype,n),r&&$(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(c.a.Component);oe.propTypes={route:y.a.objectOf(y.a.any)},oe.defaultProps={route:null};var ie={component:oe},ce=n(1),ae=n.n(ce),ue=(n(24),{component:ae()({loader:function(){return n.e(6).then(n.bind(null,56))},modules:["./containers/HomeContainer"],webpack:function(){return[56]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),le=(n(25),{component:ae()({loader:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,60))},modules:["./containers/VpnContainer"],webpack:function(){return[60]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),se=(n(26),{component:ae()({loader:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,61))},modules:["./containers/BundleContainer"],webpack:function(){return[61]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),fe=(n(27),{component:ae()({loader:function(){return n.e(12).then(n.bind(null,62))},modules:["./containers/RegisterContainer"],webpack:function(){return[62]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),pe=(n(28),{component:ae()({loader:function(){return n.e(13).then(n.bind(null,63))},modules:["./containers/SigninContainer"],webpack:function(){return[63]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),de=(n(29),{component:ae()({loader:function(){return n.e(11).then(n.bind(null,57))},modules:["./containers/ContactUsContainer"],webpack:function(){return[57]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),me=(n(30),{component:ae()({loader:function(){return n.e(14).then(n.bind(null,58))},modules:["./containers/AccountContainer"],webpack:function(){return[58]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),ye=(n(31),{component:ae()({loader:function(){return n.e(10).then(n.bind(null,59))},modules:["./containers/CheckoutContainer"],webpack:function(){return[59]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),be=(n(32),{component:ae()({loader:function(){return n.e(4).then(n.bind(null,55))},modules:["./containers/OfferContainer"],webpack:function(){return[55]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),ge=(n(33),{component:ae()({loader:function(){return n.e(5).then(n.bind(null,64))},modules:["./containers/CompareContainer"],webpack:function(){return[64]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),he=(n(34),{component:ae()({loader:function(){return n.e(8).then(n.bind(null,65))},modules:["./containers/CompareVendorsContainer"],webpack:function(){return[65]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),ve=(n(35),{component:ae()({loader:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,66))},modules:["./containers/VendorContainer"],webpack:function(){return[66]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),Oe=(n(36),{component:ae()({loader:function(){return n.e(19).then(n.bind(null,67))},modules:["./containers/PrivacyPolicyContainer"],webpack:function(){return[67]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),we=(n(37),{component:ae()({loader:function(){return n.e(20).then(n.bind(null,68))},modules:["./containers/TermsAndConditionsOfUseContainer"],webpack:function(){return[68]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),Pe={component:ae()({loader:function(){return n.e(7).then(n.bind(null,69))},modules:["./containers/PagePayReturnContainer"],webpack:function(){return[69]},loading:function(){return c.a.createElement("div",null,"Loading...")}})},Ee=(n(38),{component:ae()({loader:function(){return n.e(17).then(n.bind(null,52))},modules:["./containers/NewsContainer"],webpack:function(){return[52]},loading:function(){return c.a.createElement("div",null,"Loading...")}})});n(39),n(17);var je={component:ae()({loader:function(){return n.e(18).then(n.bind(null,70))},modules:["./containers/Page404Container"],webpack:function(){return[70]},loading:function(){return c.a.createElement("div",null,"Loading...")}})},ke=(n(40),{component:ae()({loader:function(){return n.e(15).then(n.bind(null,53))},modules:["./containers/ArticlesContainer"],webpack:function(){return[53]},loading:function(){return c.a.createElement("div",null,"Loading...")}})}),xe=(n(41),{component:ae()({loader:function(){return n.e(16).then(n.bind(null,54))},modules:["./containers/QuestionContainer"],webpack:function(){return[54]},loading:function(){return c.a.createElement("div",null,"Loading...")}})});function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){Ce(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Te=[_e(_e({},ie),{},{routes:[_e(_e({},ue),{},{path:"/",exact:!0}),_e(_e({},le),{},{path:"/vpn",exact:!0}),_e(_e({},se),{},{path:"/bundle",exact:!0}),_e(_e({},fe),{},{path:"/register",exact:!0}),_e(_e({},pe),{},{path:"/signin",exact:!0}),_e(_e({},de),{},{path:"/contact-us",exact:!0}),_e(_e({},me),{},{path:"/account",exact:!0}),_e(_e({},ye),{},{path:"/checkout",exact:!0}),_e(_e({},be),{},{path:"/offer-:offer"}),_e(_e({},ve),{},{path:"/vendor-:vendor"}),_e(_e({},ge),{},{path:"/compare"}),_e(_e({},he),{},{path:"/compare-:vendors"}),_e(_e({},Oe),{},{path:"/privacy-policy"}),_e(_e({},we),{},{path:"/terms-and-conditions-of-use"}),_e(_e({},Ee),{},{path:"/news"}),_e(_e({},ke),{},{path:"/articles"}),_e(_e({},xe),{},{path:"/faq"}),_e(_e({},Pe),{},{path:"/payment/return"}),_e(_e({},je),{},{path:"*"})]})],Ne=(n(42),n(43),n(7)),Re=n(19),Le=n.n(Re);function qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ae=function(e){return Object(Ne.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?qe(Object(n),!0).forEach((function(t){Me(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))},De=Ae,Ve=n(44).JSDOM,Ie=o()();Ie.use(l()({level:2,filter:function(e,t){return!e.headers["x-no-compression"]&&l.a.filter(e,t)}}));var Ue=process.env.PORT||3e3;Ie.use(o.a.static("public")),Ie.get("*",(function(e,t){var n=e.params[0].split("/")[2],r=Object(Ne.createStore)(De,{},Object(Ne.applyMiddleware)(Le.a));global.window=new Ve("http://localhost:3000").window;var o=Object(a.matchRoutes)(Te,e.path).map((function(e){var t=e.route;return t.loadData?t.loadData(r,n):null})).map((function(e){return e?new Promise((function(t,n){e.then(t).catch(t)})):null}));Promise.all(o).then((function(){var n={},o=function(e,t,n){var r=Object(s.renderToString)(c.a.createElement(p.Provider,{store:t},c.a.createElement(f.StaticRouter,{location:e.path,context:n},c.a.createElement("div",null,Object(a.renderRoutes)(Te))))),o=d.Helmet.renderStatic();return'<!DOCTYPE html>\n            <html lang="en" prefix="og: http://ogp.me/ns#">\n            <head>\n                '.concat(o.title.toString(),"\n                ").concat(o.meta.toString(),"\n                ").concat(o.link.toString(),"\n                ").concat(o.style.toString(),"\n                ").concat(o.script.toString(),'\n                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n                <link rel="icon" href="../../images/logo.png"/>\n                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>\n\n            \x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n            <script async src="https://www.googletagmanager.com/gtag/js?id=G-HXJ5E3D9GJ"><\/script>\n            <script>\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag(\'js\', new Date());\n\n              gtag(\'config\', \'G-HXJ5E3D9GJ\');\n            <\/script>\n\n            </head>\n            <body>\n                <div id="root">').concat(r,'</div>\n\n                <link rel="stylesheet" type="text/css" href="/styles/main.css" />\n                <script src="/main.js"><\/script>\n            </body>\n    </html>')}(e,r,n);o.includes("The page you requested cannot be found!")&&t.status(404),n.notFound&&t.status(404),t.send(o)}))})),ae.a.preloadAll().then((function(){Ie.listen(Ue,(function(){console.log("Running on http://localhost:".concat(Ue))}))}))},function(e,t){e.exports=require("react-slick")},function(e,t){e.exports=require("schema-dts")},function(e,t){e.exports=require("react-schemaorg")},function(e,t){e.exports=require("react-use-media-query-hook")},function(e,t){e.exports=require("react-copy-to-clipboard")},function(e,t){e.exports=require("jquery")}]);