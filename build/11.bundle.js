exports.ids=[11],exports.modules={50:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),c=n(12),i=n(2),u=[{key:"cooperation",text:"Cooperation",value:"cooperation"}],l=function(e){return o.a.createElement("div",null,o.a.createElement("h1",{className:"block-title"},"Сontact details "),o.a.createElement("h2",{className:"block-title2"},"Savingsdealz is a comparison platform"),(e.url,o.a.createElement(c.Helmet,{key:Math.random()},o.a.createElement("title",null,"Contact us"),o.a.createElement("meta",{name:"robots",content:"all"}),o.a.createElement("meta",{name:"description",content:"Find out how we find the best products and services to help you easily compare and make the right buying decisions"}))),o.a.createElement(i.Container,null,o.a.createElement(i.Breadcrumb,{id:"breadcrumb"},o.a.createElement(i.Breadcrumb.Section,{link:!0,as:a.Link,to:"/"},"Main"),o.a.createElement(i.Breadcrumb.Divider,{icon:"right chevron"}),o.a.createElement(i.Breadcrumb.Section,{active:!0},"Contact us")),o.a.createElement(i.Segment,{id:"signinBlock"},o.a.createElement(i.Header,{as:"h1",textAlign:"center"},"Contact us"),o.a.createElement(i.Form,null,o.a.createElement(i.Form.Input,{fluid:!0,label:"Email",placeholder:"Email",required:!0}),o.a.createElement(i.Form.Select,{label:"Question",options:u,defaultValue:u[0].value,required:!0}),o.a.createElement(i.Form.TextArea,{label:"Message",required:!0}),o.a.createElement(i.Form.Button,{primary:!0,fluid:!0,color:"red",content:"Sent"})))))},f=n(65),s=n(13),p=n.n(s);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(c,e);var t,n,r,a=v(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),j(g(t=a.call(this,e)),"handleSubmit",(function(e){if(e.preventDefault(),!t.validateFormValues())return!1;t.setState({loading:1}),function(e){return p.a.post("/contact-us/add",e).then((function(e){return e})).catch((function(e){console.log(e)}))}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t.state)).then((function(e){e.status}),(function(e){alert("Rejected: "+e)}))})),j(g(t),"validateFormValues",(function(){var e=t.state.support.email,n=(!1).email_error;return Object(f.b)(e)||(n=!0),!n||(t.setState({email_error:n}),!1)})),t.state={loading:0},t}return t=c,(n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){return o.a.createElement(l,b({},this.state,{handleSubmit:this.handleSubmit,handleInputChange:this.handleInputChange,handleChangeType:this.handleChangeType}))}}])&&d(t.prototype,n),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.a.Component);t.default=w},65:function(e,t,n){"use strict";function r(e){var t={};for(var n in e)t[n]=e[n];return t}function o(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))}};