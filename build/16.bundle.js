exports.ids=[16],exports.modules={50:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),c=(n(3),n(12)),i={status:!0,rows:[{id:1,question:"What is VPN",answer:"This is a programm for ...",index:0},{id:2,question:"What is VPN",answer:"This is a programm for ...",index:1},{id:3,question:"What is VPN",answer:"This is a programm for ...",index:2}]};function u(e){return console.log("getFAQlist----\x3e",e),new Promise((function(e){setTimeout((function(){e(i)}),200)}))}n(4);var l=[1,2,3],f=function(e){var t=e.activeIndex,n=e.handleClick,r=e.data;return o.a.createElement(a.Item.Group,{divided:!0,id:"bestVpnDeals"},r?Object.keys(r).map((function(e){return o.a.createElement(a.Accordion,{styled:!0,className:"accordingInFaq"},o.a.createElement(a.Accordion.Title,{active:t===r[e].index,index:r[e].index,onClick:n},o.a.createElement(a.Icon,{name:"dropdown"}),r[e].question),o.a.createElement(a.Accordion.Content,{active:t===r[e].index},o.a.createElement("p",null,r[e].answer)))})):Object.keys(l).map((function(e){return o.a.createElement(a.Placeholder,null,o.a.createElement(a.Placeholder.Header,{image:!0},o.a.createElement(a.Placeholder.Line,null)))})))};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(c,e);var t,n,r,a=d(c);function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),g(h(n=a.call(this,e,t)),"getData",(function(){n.props.getData().then((function(e){var t=e.status,r=e.rows;t&&n.setState({data:r})}),(function(e){alert("Rejected: "+e)}))})),g(h(n),"handleClick",(function(e,t){var r=t.index,o=n.state.activeIndex===r?-1:r;n.setState({activeIndex:o})})),n.state={loading:0,data:!1,activeIndex:0},n.getData(),n}return t=c,(n=[{key:"render",value:function(){return this.state.activeIndex,this.state.data,o.a.createElement(f,p({handleClick:this.handleClick},this.state))}}])&&y(t.prototype,n),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.a.Component),E=function(e){return o.a.createElement("div",null,o.a.createElement(c.Helmet,{key:Math.random()},o.a.createElement("title",null,"FAQ"),o.a.createElement("meta",{property:"og:title",content:"FAQ"}),o.a.createElement("meta",{property:"og:url",content:"https://savingsdealz.com/articles"}),o.a.createElement("meta",{property:"og:image",content:"https://savingsdealz.com/images/logo.png"}),o.a.createElement("meta",{property:"og:type",content:"article"}),o.a.createElement("meta",{property:"og:image:width",content:"50"}),o.a.createElement("meta",{property:"og:image:height",content:"50"}),o.a.createElement("meta",{name:"description",content:"FAQ in the best VPN site"}),o.a.createElement("meta",{name:"robots",content:"index, follow"}),o.a.createElement("script",{type:"application/ld+json"},'\n        {\n          "@context": "https://schema.org",\n          "@type": "Organization",\n          name: "savingsdealz",\n          url: "https://savingsdealz.com/",\n        }\n    ')),o.a.createElement(a.Container,null,o.a.createElement(a.Grid,null,o.a.createElement(a.Grid.Row,{columns:1,textAlign:"center"},o.a.createElement(a.Grid.Column,null,o.a.createElement(w,{getData:u}))))))};function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(c,e);var t,n,r,a=x(c);function c(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),a.call(this,e)}return t=c,(n=[{key:"render",value:function(){return o.a.createElement(E,null)}}])&&j(t.prototype,n),r&&j(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.a.Component);t.default=S}};