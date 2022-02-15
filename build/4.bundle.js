exports.ids=[4],exports.modules={55:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(5),a=n(3),c=n(12),l=n(2),s=n(77),u=(n(4),n(46)),d=n.n(u);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=[1,2,3,4,5,6,7,8,9,0],f={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,variableWidth:!0,adaptiveHeight:!0,customPaging:function(e){return o.a.createElement("div",{className:"slider-paging"})}},v=function(e){return o.a.createElement(d.a,p({},f,{className:"top-horizontal-block"}),e.data?Object.keys(e.data).map((function(t){return o.a.createElement(l.Card,{style:{width:230}},o.a.createElement(l.Card.Header,null,o.a.createElement(l.Image,{src:e.data[t].image})),o.a.createElement(l.Card.Content,null,o.a.createElement("div",{className:"title"},e.data[t].name)),o.a.createElement(l.Card.Content,{extra:!0},o.a.createElement(l.Grid,{verticalAlign:"middle"},o.a.createElement(l.Grid.Column,{width:6},o.a.createElement("div",{className:"price"},"$",e.data[t].price)),o.a.createElement(l.Grid.Column,{width:10,textAlign:"right"},o.a.createElement(l.Button,{as:a.Link,to:e.data[t].url,primary:!0,content:"Buy now"})))))})):Object.keys(m).map((function(e){return o.a.createElement(l.Placeholder,{style:{width:230}},o.a.createElement(l.Placeholder.Image,null),o.a.createElement(l.Placeholder.Header,null,o.a.createElement(l.Placeholder.Line,{length:"full"}),o.a.createElement(l.Placeholder.Line,{length:"full"}),o.a.createElement(l.Placeholder.Line,{length:"full"}),o.a.createElement(l.Placeholder.Line,{length:"full"}),o.a.createElement(l.Placeholder.Line,{length:"full"})))})))};function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,i=b(a);function a(e,t){var n,r,o,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),n=i.call(this,e,t),r=E(n),c=function(){n.props.getData().then((function(e){var t=e.status,r=e.rows;t&&n.setState({data:r})}),(function(e){alert("Rejected: "+e)}))},(o="getData")in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n.state={loading:0,data:!1},n.getData(),n}return t=a,(n=[{key:"render",value:function(){return o.a.createElement(v,this.state)}}])&&y(t.prototype,n),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.a.Component),w=n(72);n(47),n(48);Promise.resolve().then(n.t.bind(null,47,7)).ProductCollection;var _=function(e){return o.a.createElement("div",null,(t=e.url,e.info,n="https://savingsdealz.com"+(void 0!==t?t:""),o.a.createElement(c.Helmet,{key:Math.random()},o.a.createElement("title",null),o.a.createElement("script",{type:"application/ld+json"},'\n        {\n          "@context": "https://schema.org",\n          "@type": "Product",\n          "name":"vpn",\n          "image": "",\n          "description": \'All vpn on your choice\',\n          "brand": {\n            "@type": "Brand",\n            "name": "vpn"\n          }\n        }\n    '),o.a.createElement("meta",{name:"robots",content:"index, follow"}),o.a.createElement("meta",{name:"description",content:"offer"}),o.a.createElement("link",{rel:"canonical",href:n}))),o.a.createElement(l.Container,null,o.a.createElement(l.Breadcrumb,{id:"breadcrumb"},o.a.createElement(l.Breadcrumb.Section,{link:!0,as:a.Link,to:"/"},"Main"),o.a.createElement(l.Breadcrumb.Divider,{icon:"right chevron"}),o.a.createElement(l.Breadcrumb.Section,{active:!0},"Offer")),o.a.createElement(l.Grid,{id:"offerBlock"},o.a.createElement(l.Grid.Row,{stretched:!0},o.a.createElement(l.Grid.Column,{width:11},o.a.createElement(l.Segment,{className:"info-block"},o.a.createElement(l.Item.Group,null,o.a.createElement(l.Item,null,e.info.ribbon&&o.a.createElement("div",{className:"ribbon"},e.info.ribbon),o.a.createElement(l.Item.Image,{alt:"logo",size:"tiny",className:"logo",verticalAlign:"middle",src:e.info.image}),o.a.createElement(l.Item.Content,null,o.a.createElement(l.Item.Header,{className:"title"},e.info.title),o.a.createElement(l.Item.Meta,null,e.info.subtitle),o.a.createElement(l.Item.Description,null,o.a.createElement("div",{className:"price-block"},e.info.price&&o.a.createElement("span",{className:"price"},"$",e.info.price),e.info.old_price&&o.a.createElement("span",{className:"old-price"},"$",e.info.old_price))),o.a.createElement(l.Item.Extra,null,o.a.createElement(l.Input,{className:"quantity",type:"number",name:e.info.id,onChange:e.handleInputChangeQuantity,value:e.offer.quantity,min:1}),o.a.createElement(l.Button,{primary:!0,content:"Add to cart",onClick:e.handleClicAddToCart})),e.info.user_used&&o.a.createElement(l.Item.Description,null,e.info.user_used," users used this coupon")))),o.a.createElement("p",null,o.a.createElement("span",{className:"category"},"Category: ")," ",o.a.createElement("span",{className:"category-value"},e.info.category)))),o.a.createElement(l.Grid.Column,{width:5},o.a.createElement(l.Segment,null,o.a.createElement("div",{className:"header-top color-red"},"BEST VPN DEALS"),o.a.createElement(s.a,{getData:w.a})))),o.a.createElement(l.Grid.Row,null,o.a.createElement(l.Grid.Column,null,o.a.createElement(l.Segment,{className:"info-block"},o.a.createElement("div",{className:"header-top color-red"},"People who viewed this item also viewed"),o.a.createElement(S,{getData:w.a})))))));var t,n};n(71);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=I(e);if(t){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D={fetchCartOffers:n(14).a},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,i=z(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),T(U(t=i.call(this,e)),"parseType",(function(e){var t=e.split("-");return t[t.length-1]})),T(U(t),"getOfferInfo",(function(){var e=t.state.offerId;Object(w.b)({offerId:e}).then((function(e){var n=e.status,r=e.row;n&&t.setState({info:r})}),(function(e){alert("Rejected: "+e)}))})),T(U(t),"handleInputChangeQuantity",(function(e,n){var r=n.name,o=n.value;e.preventDefault(),t.setState({offer:{id:r,quantity:o}})})),T(U(t),"handleClicAddToCart",(function(){var e=t.state.offer,n=t.props.getCartOffers;console.log("offer----\x3e",e);var r=n.concat([e]);console.log("a----\x3e",r),t.props.fetchCartOffers(r)}));var n=e.match.params.offer,r=t.parseType(n);return t.state={loading:0,offerId:r,offer:{id:r,quantity:1},info:!1},t.getOfferInfo(),t}return t=a,(n=[{key:"render",value:function(){return o.a.createElement(_,O({},this.state,{handleInputChangeQuantity:this.handleInputChangeQuantity,handleClicAddToCart:this.handleClicAddToCart}))}}])&&C(t.prototype,n),r&&C(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.a.Component);t.default=Object(a.withRouter)(Object(i.connect)((function(e){return{getCartOffers:e.getCartOffers}}),D)(k))},71:function(e,t,n){"use strict";function r(e){var t={};for(var n in e)t[n]=e[n];return t}function o(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))},72:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"f",(function(){return v}));var r={status:!0,rows:[{id:1,image:"/images/vpn-4.png",name:"ExpressVPN",title:"ExpressVPN 1 year premium with 50% off",subtitle:"License Category: 1 year",url:"/offer-expressvpn-1-year-premium-50-off-1",vendor_url:"/vendor-expressvpn-1",old_price:1e3,price:55,date:"-50%",comments:10},{id:2,image:"/images/vpn-5.png",name:"ExpressVPN",title:"ExpressVPN 1 year premium with 50% off",url:"/offer-expressvpn-1-year-premium-50-off-1",vendor_url:"/vendor-expressvpn-1",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Save 49% on your ExpressVPN plan today"},{id:3,image:"/images/vpn-7.png",name:"ExpressVPN",title:"ExpressVPN 1 year premium with 50% off",url:"/offer-expressvpn-1-year-premium-50-off-1",vendor_url:"/vendor-expressvpn-1",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Save 49% on your ExpressVPN plan today"}]},o={status:1,rows:[{id:"1",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"1 Month VPN",url:"/offer-vpnsecure-1-month-premium-vpn-1",price:"4.97",description:"Save 50%",descriptions:["Ultra Cheap Shared, VPS, & Dedicated Servers","Unlimited SSD Storage & Monthly Bandwidth","No Increased Pricing on Plan Renewal Rates"]},{id:"2",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"6 Month VPN ",url:"/offer-vpnsecure-6-month-premium-vpn-2",price:"49.95",descriptions:["Ultra Cheap Shared, VPS, & Dedicated Servers","Unlimited SSD Storage & Monthly Bandwidth","No Increased Pricing on Plan Renewal Rates"]},{id:"3",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"12 Month VPN",url:"/offer-vpnsecure-3-month-premium-vpn-3",price:"79.95",descriptions:["Ultra Cheap Shared, VPS, & Dedicated Servers","Unlimited SSD Storage & Monthly Bandwidth","No Increased Pricing on Plan Renewal Rates"]},{id:"4",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"12 Months VPN",url:"/offer-vpnshazam-12-months-vpn-4",price:"49.99",descriptions:["Manage Unlimited Domain Names with cPanel.","Fast SSD Storage for CMS Website Speeds","7 Different International Data Centers"]},{id:"5",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"24 Months VPN",url:"/offer-vpnshazam-24-months-vpn-5",price:"79.99",descriptions:["Manage Unlimited Domain Names with cPanel.","Fast SSD Storage for CMS Website Speeds","7 Different International Data Centers"]}]},i={status:1};function a(e){return console.log("getTopSuggestions----\x3e",e),new Promise((function(e){setTimeout((function(){e(r)}),200)}))}function c(e){return console.log("getBestVpnDeals----\x3e",e),new Promise((function(e){setTimeout((function(){e(o)}),5e3)}))}var l={status:1,rows:[{id:"1",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"1 Month VPN",url:"/offer-vpnsecure-1-month-premium-vpn-1",price:"4.97",descriptions:["48 Countries To Choose From","No Logs Ever","Bypass Internet Censorship","Choose Cipher Strength","Meta Search"]},{id:"2",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"6 Month VPN ",url:"/offer-vpnsecure-6-month-premium-vpn-2",price:"24.97",descriptions:["48 Countries To Choose From","No Logs Ever","Bypass Internet Censorship","Choose Cipher Strength","Meta Search"]},{id:"3",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"12 Month VPN",url:"/offer-vpnsecure-3-month-premium-vpn-3",price:"39.97",descriptions:["48 Countries To Choose From","No Logs Ever","Bypass Internet Censorship","Choose Cipher Strength","Meta Search"]},{id:"4",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"12 Months VPN",url:"/offer-vpnshazam-12-months-vpn-4",price:"24.9",descriptions:["Supercharged VPN","Unlimited servers switching","5 simultaneous connections","Absolutely no logs policy","Powerful online protection"]},{id:"5",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"24 Months VPN",url:"/offer-vpnshazam-24-months-vpn-5",price:"39.9",descriptions:["Supercharged VPN","Unlimited servers switching","5 simultaneous connections","Absolutely no logs policy","Powerful online protection"]},{id:"6",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",name:"6 months VPN",url:"/offer-ivacy-6-months-vpn-6",price:"15",descriptions:["Stay Secure with Ivacy VPN","256-Bit Encryption","Public Wi-Fi Security","No Logs Policy","Enjoy Buffer-free Streaming"]},{id:"7",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",name:"2 year VPN",url:"/offer-ivacy-2-year-vpn-7",price:"30",descriptions:["Stay Secure with Ivacy VPN","256-Bit Encryption","Public Wi-Fi Security","No Logs Policy","Enjoy Buffer-free Streaming"]},{id:"8",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",name:"5 year VPN",url:"/offer-ivacy-5-year-vpn-8",price:"50",descriptions:["Stay Secure with Ivacy VPN","256-Bit Encryption","Public Wi-Fi Security","No Logs Policy","Enjoy Buffer-free Streaming"]},{id:"9",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"1 month VPN",url:"/offer-nordvpn-1-month-9",price:"8",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]},{id:"10",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"1 year VPN",url:"/offer-nordvpn-1-year-10",price:"58",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]},{id:"11",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"2 year VPN",url:"/offer-nordvpn-2-year-11",price:"83",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]},{id:"12",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"3 year VPN",url:"/offer-nordvpn-3-year-12",price:"95",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]}]};function s(e){return console.log("getRecomendationOffers----\x3e",e),new Promise((function(e){setTimeout((function(){e(l)}),2e3)}))}var u={status:1,row:{id:"1",category:"VPN",ribbon:"BEST VALUE",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",url:"/offer-vpnsecure-1-month-premium-vpn-1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"1 Month VPN",price:"4.97",old_price:"9.95",discount:"-50%",description:"VPNsecure 1 month premium 50% Off",discount_title:"Take it and get 50% off",user_used:"1187"}};function d(e){return console.log("getOfferInfo----\x3e",e),new Promise((function(e){setTimeout((function(){e(u)}),200)}))}var p={status:1,rows:[{id:"1",category:"VPN",image:"/images/vpnsecure-logo.png",url:"/offer-vpnsecure-1-month-premium-vpn-1",vendor_id:"1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"1 Month VPN",price:"4.97",old_price:"9.95",discount:"-50%",description:"VPNsecure 1 month premium 50% Off",discount_title:"Take it and get 50% off",user_used:"1187"},{id:"2",category:"VPN",image:"/images/vpnsecure-logo.png",url:"/offer-vpnsecure-6-month-premium-vpn-2",vendor_id:"1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"6 Month VPN ",price:"49.95",old_price:null,discount:null,description:null,discount_title:null,user_used:null},{id:"3",category:"VPN",image:"/images/vpnsecure-logo.png",url:"/offer-vpnsecure-3-month-premium-vpn-3",vendor_id:"1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"12 Month VPN",price:"79.95",old_price:null,discount:null,description:null,discount_title:null,user_used:null},{id:"4",category:"VPN",image:"/images/vpn-shazam-logo.png",url:"/offer-vpnshazam-12-months-vpn-4",vendor_id:"2",vendor_url:"/vendor-vpn-vpnshazam-2",name:"VPNShazam.com",title:"12 Months VPN",price:"49.99",old_price:null,discount:null,description:null,discount_title:null,user_used:null},{id:"5",category:"VPN",image:"/images/vpn-shazam-logo.png",url:"/offer-vpnshazam-24-months-vpn-5",vendor_id:"2",vendor_url:"/vendor-vpn-vpnshazam-2",name:"VPNShazam.com",title:"24 Months VPN",price:"79.99",old_price:null,discount:null,description:null,discount_title:null,user_used:null}]},m={status:!0,rows:[{id:1,category:"bundle",image:"/images/bundle1.png",offerUrl:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:2,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:3,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"0",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:4,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:5,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:6,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"}]};function f(e){console.log("getOfferList----\x3e",e);var t="vpn"==e.searchData.category?p:m;return new Promise((function(e){setTimeout((function(){e(t)}),2e3)}))}function v(e){return console.log("save payer email----\x3e",e),new Promise((function(e){setTimeout((function(){e(i)}),2e3)}))}},77:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=(n(4),n(3)),a=n(2),c=[1,2,3],l=function(e){return o.a.createElement(a.Item.Group,{divided:!0,id:"bestVpnDeals"},e.data?Object.keys(e.data).map((function(t){return o.a.createElement(a.Item,null,o.a.createElement(a.Item.Image,{verticalAlign:"middle",alt:"",src:e.data[t].image,size:"tiny"}),o.a.createElement(a.Item.Content,{verticalAlign:"middle"},o.a.createElement(a.Item.Header,{as:i.Link,to:e.data[t].url},e.data[t].title),o.a.createElement(a.Item.Meta,null,o.a.createElement(i.Link,{to:e.data[t].vendor_url},"Visit ",e.data[t].vendor_name)),o.a.createElement(a.Item.Description,null,e.data[t].description)))})):Object.keys(c).map((function(e){return o.a.createElement(a.Placeholder,null,o.a.createElement(a.Placeholder.Header,{image:!0},o.a.createElement(a.Placeholder.Line,null),o.a.createElement(a.Placeholder.Line,null)))})))};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,i=p(a);function a(e,t){var n,r,o,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),n=i.call(this,e,t),r=f(n),c=function(){n.props.getData().then((function(e){var t=e.status,r=e.rows;t&&n.setState({data:r})}),(function(e){alert("Rejected: "+e)}))},(o="getData")in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n.state={loading:0,data:!1},n.getData(),n}return t=a,(n=[{key:"render",value:function(){return o.a.createElement(l,this.state)}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.a.Component);t.a=g}};