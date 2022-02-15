exports.ids=[5],exports.modules={64:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),l=n(3),i=(n(17),n(12)),c=[1,2,3,4,5],s=function(e){return a.a.createElement("div",null,(e.url,a.a.createElement(i.Helmet,{key:Math.random()},a.a.createElement("title",null,"2022’s VPN Compare Tool – Free and Good"),a.a.createElement("meta",{property:"og:title",content:"2022’s VPN Compare Tool – Free and Good"}),a.a.createElement("meta",{property:"og:url",content:"https://savingsdealz.com/compare"}),a.a.createElement("meta",{property:"og:image",content:"https://savingsdealz.com/images/logo.png"}),a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"og:image:width",content:"50"}),a.a.createElement("meta",{property:"og:image:height",content:"50"}),a.a.createElement("meta",{name:"description",content:"Compare the best VPNs and find yours now. VPN experts compare and rate the best VPNs on the market in 2022. "}),a.a.createElement("meta",{name:"robots",content:"all"}))),a.a.createElement(o.Container,null,a.a.createElement(o.Breadcrumb,{id:"breadcrumb"},a.a.createElement(o.Breadcrumb.Section,{link:!0,as:l.Link,to:"/"},"Main"),a.a.createElement(o.Breadcrumb.Divider,{icon:"right chevron"}),a.a.createElement(o.Breadcrumb.Section,{active:!0},"Compare")),a.a.createElement(o.Grid,null,a.a.createElement(o.Grid.Row,{stretched:!0,id:"compareBlock"},a.a.createElement(o.Grid.Column,{width:16},a.a.createElement(o.Segment,null,a.a.createElement(o.Header,{as:"h1",textAlign:"center"},"VPN providers comparison",a.a.createElement(o.Header.Subheader,{as:"h2"},"Parallel comparison of features, reviews and prices. Choose up to 3 VPNs")),a.a.createElement(o.Form,null,a.a.createElement(o.Form.Group,{widths:"equal"},a.a.createElement(o.Form.Dropdown,{placeholder:"Select vendor",clearable:!0,fluid:!0,search:!0,selection:!0,name:"vendor1",value:e.compareVendors.vendor1,options:e.getVendorsListOptions(),loading:!e.vendorsList,onChange:e.handleInputChangeVendors}),a.a.createElement("label",{className:"vs-divided"},"VS"),a.a.createElement(o.Form.Dropdown,{placeholder:"Select vendor",clearable:!0,fluid:!0,search:!0,selection:!0,name:"vendor2",value:e.compareVendors.vendor2,options:e.getVendorsListOptions(),loading:!e.vendorsList,onChange:e.handleInputChangeVendors}),a.a.createElement("label",{className:"vs-divided"},"VS"),a.a.createElement(o.Form.Dropdown,{placeholder:"Select vendor",clearable:!0,fluid:!0,search:!0,selection:!0,name:"vendor3",value:e.compareVendors.vendor3,options:e.getVendorsListOptions(),loading:!e.vendorsList,onChange:e.handleInputChangeVendors})),a.a.createElement(o.Button,{as:l.Link,to:e.getCompareUrl(),disabled:e.checkCompareVendorButtonDisabled(),primary:!0,className:"compare-button"},"Compare"))),a.a.createElement("h2",{className:"block-titleH2"},"Compare VPNs by Top Features"))),a.a.createElement(o.Grid.Row,null,a.a.createElement(o.Grid.Column,{width:16},a.a.createElement(o.Segment,null,a.a.createElement(o.Grid,{columns:1},a.a.createElement(o.Grid.Column,{textAlign:"left"},a.a.createElement(o.Form,null,a.a.createElement(o.Form.Group,{widths:"equal"},e.filter?Object.keys(e.filter).map((function(t){return a.a.createElement(o.Form.Field,{fluid:!0},a.a.createElement("label",{className:"subheader"},e.filter[t].title),e.getInput(t,e.filter[t]))})):a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Form.Field,{fluid:!0},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"}))),a.a.createElement(o.Form.Field,{fluid:!0},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"}))),a.a.createElement(o.Form.Field,{fluid:!0},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"}))),a.a.createElement(o.Form.Field,{fluid:!0},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"})))))))),a.a.createElement(o.Divider,null),a.a.createElement(o.Grid,{columns:1},a.a.createElement(o.Grid.Column,null,a.a.createElement(o.Table,{basic:!0,id:"compareListTable"},e.vendorsList?Object.keys(e.vendorsList).map((function(t){return a.a.createElement(o.Table.Row,null,a.a.createElement(o.Table.Cell,null,e.vendorsList[t].name),a.a.createElement(o.Table.Cell,{textAlign:"center"},a.a.createElement(o.Image,{alt:"banner",src:e.vendorsList[t].image})),a.a.createElement(o.Table.Cell,{textAlign:"center"},e.vendorsList[t].user_used," users used this coupon"),a.a.createElement(o.Table.Cell,{textAlign:"center"},a.a.createElement(o.Checkbox,{label:"Add to comparison",value:e.vendorsList[t].id,onChange:e.handleInputChangeAddComprassion,checked:e.checkCompareVendorChecked(e.vendorsList[t].id),disabled:e.checkCompareVendorDisabled(e.vendorsList[t].id)})))})):Object.keys(c).map((function(e){return a.a.createElement(o.Table.Row,null,a.a.createElement(o.Table.Cell,null,a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"full"}))),a.a.createElement(o.Table.Cell,{textAlign:"center"},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"full"}))),a.a.createElement(o.Table.Cell,{textAlign:"center"},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"full"}))),a.a.createElement(o.Table.Cell,{textAlign:"center"},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"full"}))))})))))))))))},d=n(74),m=n(73);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(i,e);var t,n,r,l=g(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),E(y(t=l.call(this,e)),"getVendorsList",(function(){var e=t.state.filterData;t.setState({vendorsList:!1}),Object(d.c)(e).then((function(e){var n=e.status,r=e.rows;n&&t.setState({vendorsList:r})}),(function(e){alert("Rejected: "+e)}))})),E(y(t),"getVendorsListOptions",(function(){var e=t.state.vendorsList,n=[];for(var r in e)n.push({key:e[r].id,value:e[r].id,text:e[r].name});return n})),E(y(t),"handleInputChangeVendors",(function(e,n){var r=n.name,a=n.value;e.preventDefault();var o=t.state.compareVendors;o[r]=a,t.setState({compareVendors:o})})),E(y(t),"getCompareUrl",(function(){var e=t.state.compareVendors;if(!e)return!1;var n=e.vendor1,r=e.vendor2,a=e.vendor3,o="/compare-",l=[];return n&&l.push(t.checkVendorToUrl(n)),r&&l.push(t.checkVendorToUrl(r)),a&&l.push(t.checkVendorToUrl(a)),"/compare-"==(o+=l.join("-with-"))?"/compare":o})),E(y(t),"checkVendorToUrl",(function(e){var n=t.state.vendorsList;if(!e)return"";var r="";for(var a in n)if(n[a]&&n[a].id==e){r=n[a].name;break}return r.replace(/\s/gi,"-").replace("/","-").toLowerCase()})),E(y(t),"getFilterList",(function(){var e=t.state.filterData;Object(m.a)(e).then((function(e){var n=e.status,r=e.rows;n&&t.setState({filter:r})}),(function(e){alert("Rejected: "+e)}))})),E(y(t),"getInput",(function(e,n){var r=t.state.filterData,l=n.type,i=n.title,c=n.multiple,s=n.data;l||(l="text");var d=!1;switch(l){case"text":case"number":case"email":d=a.a.createElement(o.Form.Input,{fluid:!0,type:l,placeholder:i,name:e,value:r[e]||"",onChange:t.handleInputChangeEdit});break;case"dropdown":var m=[];for(var u in s)m.push({key:u+s[u].id,text:s[u].name,value:s[u].id});d=a.a.createElement(o.Form.Select,{fluid:!0,inline:!0,name:e,options:m,placeholder:i,multiple:!!c,value:c?r[e]?r[e]:[]:r[e],onChange:t.handleInputChangeEdit});break;case"checkbox":for(var p in d=[],s)d.push(a.a.createElement(o.Form.Checkbox,{label:s[p].name,value:s[p].name,name:e,onChange:t.handleInputChangeCheckBox,checked:1==r.hasOwnProperty(e)&&-1!=r[e].indexOf(s[p].name)}))}return d})),E(y(t),"handleInputChangeCheckBox",(function(e,n){var r=n.name,a=n.value,o=t.state.filterData;o.hasOwnProperty(r)&&-1!==o[r].indexOf(a)?o[r].splice(o[r].indexOf(a),1):(o.hasOwnProperty(r)||(o[r]=[]),o[r].push(a)),t.setState({filterData:o}),t.getVendorsList()})),E(y(t),"handleInputChangeAddComprassion",(function(e,n){var r=n.value,a=t.state.compareVendors;a.vendor1==r?a.vendor1=null:a.vendor2==r?a.vendor2=null:a.vendor3==r?a.vendor3=null:a.vendor1?a.vendor2?a.vendor3||(a.vendor3=r):a.vendor2=r:a.vendor1=r,t.setState({compareVendors:a})})),E(y(t),"handleInputChangeEdit",(function(e,n){var r=n.name,a=n.value;e.preventDefault();var o=t.state.filterData;o[r]=a,t.setState({filterData:o}),t.getVendorsList()})),E(y(t),"checkCompareVendorDisabled",(function(e){var n=t.state.compareVendors;return e!=n.vendor1&&e!=n.vendor2&&e!=n.vendor3&&!!(n.vendor1&&n.vendor2&&n.vendor3)})),E(y(t),"checkCompareVendorChecked",(function(e){var n=t.state.compareVendors;return e==n.vendor1||e==n.vendor2||e==n.vendor3})),E(y(t),"checkCompareVendorButtonDisabled",(function(){var e=t.state.compareVendors,n=0;return e.vendor1&&n++,e.vendor2&&n++,e.vendor3&&n++,n<2})),t.state={loading:0,vendorsList:!1,compareVendors:{},filter:!1,filterData:{category:"vpn"}},t.getVendorsList(),t.getFilterList(),t}return t=i,(n=[{key:"render",value:function(){return a.a.createElement(s,p({},this.state,{getVendorsListOptions:this.getVendorsListOptions,handleInputChangeVendors:this.handleInputChangeVendors,getCompareUrl:this.getCompareUrl,getInput:this.getInput,handleInputChangeEdit:this.handleInputChangeEdit,handleInputChangeAddComprassion:this.handleInputChangeAddComprassion,checkCompareVendorDisabled:this.checkCompareVendorDisabled,checkCompareVendorChecked:this.checkCompareVendorChecked,checkCompareVendorButtonDisabled:this.checkCompareVendorButtonDisabled,checkUrl:this.checkUrl}))}}])&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(a.a.Component);t.default=P},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(13);var r={status:!0,rows:{categories:{type:"checkbox",title:"Category",data:[{id:1,name:"VPN"},{id:2,name:"Hosting"},{id:3,name:"Filesharing"}]},duration:{type:"checkbox",title:"Duration",data:[{id:1,name:"1 month"},{id:2,name:"2 month"},{id:3,name:"3 month"},{id:4,name:"12 month"}]}}},a={status:!0,rows:{countries:{type:"dropdown",title:"Country",multiple:!0,data:[{id:1,name:"Andora"},{id:2,name:"Germany"},{id:3,name:"USA"}]},technologies:{type:"checkbox",title:"Techonoly",multiple:!0,data:[{id:1,name:"L2TP"},{id:2,name:"TLS"},{id:3,name:"PPTP"}]},licenses:{type:"dropdown",title:"License for",multiple:!0,data:[{id:1,name:"Andora"},{id:2,name:"Germany"},{id:3,name:"USA"}]},servers:{type:"dropdown",title:"Servers",multiple:!0,data:[{id:1,name:"Andora"},{id:2,name:"Germany"},{id:3,name:"USA"}]}}};function o(e){console.log("getFilterList----\x3e",e);var t="bundle"==e.category?r:a;return new Promise((function(e){setTimeout((function(){e(t)}),3e3)}))}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return c}));var r={status:!0,row:{id:1,name:"ExpressVPN",image:"/images/vpn-4.png",title:"ExpressVPN 1 year premium with 50% off",category:"VPN",descriptions:[{title:"48 Countries To Choose From",text:"<p>Our secure vpn access servers are monitored.  They’re access controlled & we are the only ones that operate them — no one else.  They do not permanently store IP addresses nor do they store logs.  Each server supports all popular protocols including: OpenVPN, HTTP Proxy, Smart DNS, Obfuscation & SSH SOCKS. With the very best server locations and low ping times, you will always find a fast server close to you.</p>"},{title:"No Logs Ever",text:"<p>We take your privacy very seriously. We do not store any logs of the websites you visit, we never will and never have. If required we will move jurisdictions and go above and beyond for you.</p>"},{title:"Bypass Internet Censorship",text:"<p>Many Countries including United Kingdom, France, Germany, East Asia, Central Asia, The Middle East/North Africa, Australia and many more employ internet censorship or filtering.  By using VPNSecure you can take back your freedom and enjoy un-restricted internet. In heavily restricted regions we offer obfuscation (Stealth VPN) built right into our hand crafted VPN client.</p>"},{title:"Choose Cipher Strength",text:"<p>Depending on your use case, you may want to encrypt your internet connection but also get the best speed available.  We give you the option to choose your encryption cipher, from a low cipher of 64bits, to high encryption using AES-256. This gives you the freedom and ability to choose the type of connection you prefer. </p>"},{title:"Meta Search",text:"<p>Meta Search is a metasearch engine, with the aim of protecting the privacy of its users. Metasearch does not share users IP addresses or search history with the search engines from which it gathers results. Meta Search will proxy results from leading search engines, so you don't have too. It's the privacy search engine, included in all premium VPN plans.</p>"}]}};function a(e){return console.log("getVendorInfo----\x3e",e),new Promise((function(e){setTimeout((function(){e(r)}),200)}))}var o={status:1,rows:[{id:"1",name:"VPNSecure.me",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",user_used:"2588"},{id:"2",name:"VPNShazam.com",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",user_used:"786"},{id:"3",name:"Ivacy.com",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",user_used:"181"},{id:"4",name:"NordVPN.com",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",user_used:"2554"}]};function l(e){return console.log("getCompareList----\x3e",e),new Promise((function(e){setTimeout((function(){e(o)}),3e3)}))}var i={status:!0,info:[{id:1,name:"Surfhark",image:"/images/vpn-2.png"},{id:2,name:"PrivateVPN",image:"/images/vpn-3.png"},{id:3,name:"VPN",image:"/images/vpn-4.png"}],rows:[{title:"Company",type:"image",cells:["/images/vpn-2.png","/images/vpn-3.png","/images/vpn-4.png"]},{title:"Technoly",type:"text",cells:["L2TP","L2TP","L2TP"]},{title:"Number of devices per license",type:"text",cells:["2","7","4"]},{title:"Country",type:"dropdown",cells:[["USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland"],["USA","Germany","Poland"],["USA","Germany","Poland"]]},{title:"Number of servers",type:"text",cells:["150","100","500"]},{title:"Mobile app",type:"checkbox",cells:["1","1","1"]},{title:"Keep logs",type:"checkbox",cells:["1","0","0"]},{title:"Switch Kill",type:"checkbox",cells:["0","1","1"]}]};function c(e){return console.log("getCompareVendorsInfo----\x3e",e),new Promise((function(e){setTimeout((function(){e(i)}),200)}))}}};