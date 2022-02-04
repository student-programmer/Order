exports.ids=[8],exports.modules={58:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),i=n(3),c=n(12),l=function(e){return o.a.createElement("div",null,(t=e.url,n="https://savingsdealz.com"+(void 0!==t?t:""),o.a.createElement(c.Helmet,{key:Math.random()},o.a.createElement("title",null,"2022 s vpn Compare tool free and Good"),o.a.createElement("meta",{name:"robots",content:"all"}),o.a.createElement("link",{rel:"canonical",href:n}))),o.a.createElement(a.Container,null,o.a.createElement(a.Breadcrumb,{id:"breadcrumb"},o.a.createElement(a.Breadcrumb.Section,{link:!0,as:i.Link,to:"/"},"Main"),o.a.createElement(a.Breadcrumb.Divider,{icon:"right chevron"}),o.a.createElement(a.Breadcrumb.Section,{link:!0,as:i.Link,to:"/compare"},"Compare"),o.a.createElement(a.Breadcrumb.Divider,{icon:"right chevron"}),o.a.createElement(a.Breadcrumb.Section,{active:!0},"Compare ",e.vendors.join(" with "))),o.a.createElement(a.Grid,{id:"compareVendorBlock"},o.a.createElement(a.Grid.Row,null,o.a.createElement(a.Grid.Column,{width:16},o.a.createElement(a.Segment,null,o.a.createElement(a.Table,{basic:"very",textAlign:"center"},o.a.createElement(a.Table.Body,null,Object.keys(e.compareInfo).map((function(t){return o.a.createElement(a.Table.Row,null,o.a.createElement(a.Table.Cell,{width:3,textAlign:"left"},e.compareInfo[t].title),Object.keys(e.compareInfo[t].cells).map((function(n){return o.a.createElement(a.Table.Cell,{width:5},e.getTableCell(e.compareInfo[t].type,e.compareInfo[t].cells[n]))})))}))))))))));var t,n},s=n(67);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(c,e);var t,n,r,i=f(c);function c(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),v(h(t=i.call(this,e)),"parseType",(function(e){return e.replace("compare-","").split("-with-")})),v(h(t),"getCompareVendorsInfo",(function(){var e=t.state.vendors;Object(s.a)(e).then((function(e){var n=e.status,r=e.info,o=e.rows;n&&t.setState({info:r,compareInfo:o})}),(function(e){alert("Rejected: "+e)}))})),v(h(t),"getTableCell",(function(e,t){switch(e){case"image":return o.a.createElement(a.Image,{src:t});case"text":return t;case"checkbox":return parseInt(t)?o.a.createElement(a.Image,{alt:"check",src:"/images/check.png"}):o.a.createElement(a.Image,{alt:"cancel",src:"/images/cancel.png"});case"dropdown":var n=[],r=1;for(var i in t)if(n.push(t[r]),++r>=8)break;return o.a.createElement(o.a.Fragment,null,n.join(", "),o.a.createElement(a.Modal,{trigger:o.a.createElement("span",{className:"more-button"},"more"),size:"mini",dimmer:"inverted",className:"modal-countries",closeIcon:!0},o.a.createElement(a.Modal.Content,{image:!0,scrolling:!0},o.a.createElement(a.Modal.Description,null,o.a.createElement(a.Header,null,"All countries"),Object.keys(t).map((function(e){return o.a.createElement("p",null,t[e])}))))))}}));var n=e.match.params.vendors,r=t.parseType(n);return t.state={loading:0,vendors:r,info:!1,compareInfo:!1},t.getCompareVendorsInfo(),t}return t=c,(n=[{key:"render",value:function(){return o.a.createElement(l,m({},this.state,{getTableCell:this.getTableCell}))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.a.Component);t.default=b},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return l}));var r={status:!0,row:{id:1,name:"ExpressVPN",image:"/images/vpn-4.png",title:"ExpressVPN 1 year premium with 50% off",category:"VPN",descriptions:[{title:"48 Countries To Choose From",text:"<p>Our secure vpn access servers are monitored.  They’re access controlled & we are the only ones that operate them — no one else.  They do not permanently store IP addresses nor do they store logs.  Each server supports all popular protocols including: OpenVPN, HTTP Proxy, Smart DNS, Obfuscation & SSH SOCKS. With the very best server locations and low ping times, you will always find a fast server close to you.</p>"},{title:"No Logs Ever",text:"<p>We take your privacy very seriously. We do not store any logs of the websites you visit, we never will and never have. If required we will move jurisdictions and go above and beyond for you.</p>"},{title:"Bypass Internet Censorship",text:"<p>Many Countries including United Kingdom, France, Germany, East Asia, Central Asia, The Middle East/North Africa, Australia and many more employ internet censorship or filtering.  By using VPNSecure you can take back your freedom and enjoy un-restricted internet. In heavily restricted regions we offer obfuscation (Stealth VPN) built right into our hand crafted VPN client.</p>"},{title:"Choose Cipher Strength",text:"<p>Depending on your use case, you may want to encrypt your internet connection but also get the best speed available.  We give you the option to choose your encryption cipher, from a low cipher of 64bits, to high encryption using AES-256. This gives you the freedom and ability to choose the type of connection you prefer. </p>"},{title:"Meta Search",text:"<p>Meta Search is a metasearch engine, with the aim of protecting the privacy of its users. Metasearch does not share users IP addresses or search history with the search engines from which it gathers results. Meta Search will proxy results from leading search engines, so you don't have too. It's the privacy search engine, included in all premium VPN plans.</p>"}]}};function o(e){return console.log("getVendorInfo----\x3e",e),new Promise((function(e){setTimeout((function(){e(r)}),200)}))}var a={status:1,rows:[{id:"1",name:"VPNSecure.me",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",user_used:"2588"},{id:"2",name:"VPNShazam.com",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",user_used:"786"},{id:"3",name:"Ivacy.com",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",user_used:"181"},{id:"4",name:"NordVPN.com",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",user_used:"2554"}]};function i(e){return console.log("getCompareList----\x3e",e),new Promise((function(e){setTimeout((function(){e(a)}),3e3)}))}var c={status:!0,info:[{id:1,name:"Surfhark",image:"/images/vpn-2.png"},{id:2,name:"PrivateVPN",image:"/images/vpn-3.png"},{id:3,name:"VPN",image:"/images/vpn-4.png"}],rows:[{title:"Company",type:"image",cells:["/images/vpn-2.png","/images/vpn-3.png","/images/vpn-4.png"]},{title:"Technoly",type:"text",cells:["L2TP","L2TP","L2TP"]},{title:"Number of devices per license",type:"text",cells:["2","7","4"]},{title:"Country",type:"dropdown",cells:[["USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland"],["USA","Germany","Poland"],["USA","Germany","Poland"]]},{title:"Number of servers",type:"text",cells:["150","100","500"]},{title:"Mobile app",type:"checkbox",cells:["1","1","1"]},{title:"Keep logs",type:"checkbox",cells:["1","0","0"]},{title:"Switch Kill",type:"checkbox",cells:["0","1","1"]}]};function l(e){return console.log("getCompareVendorsInfo----\x3e",e),new Promise((function(e){setTimeout((function(){e(c)}),200)}))}}};