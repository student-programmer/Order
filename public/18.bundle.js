(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{812:function(e,t,n){"use strict";n.r(t);var r=n(0);var i=n.n(r);var o=n(91);var a=n(20);var c=n(32);var l=n(838);var s=n(831);var u=n(862);var p=n(811);var d=n(841);var f=n(964);var m=n(988);var v=n(942);var g=n(944);var y=n(861);var h=n.n(y);var b=n(1033);var P=n(384);var E=n(966);function w(){w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};return w.apply(this,arguments)}var N=[1,2,3,4,5,6,7,8,9,0];var S={dots:true,infinite:true,speed:500,slidesToShow:3,slidesToScroll:1,variableWidth:true,adaptiveHeight:true,customPaging:function e(t){return i.a.createElement("div",{className:"slider-paging"})}};var _=function e(t){return i.a.createElement(h.a,w({},S,{className:"top-horizontal-block"}),t.data?Object.keys(t.data).map(function(e){return i.a.createElement(b["a"],{style:{width:230}},i.a.createElement(b["a"].Header,null,i.a.createElement(P["a"],{src:t.data[e]["image"]})),i.a.createElement(b["a"].Content,null,i.a.createElement("div",{className:"title"},t.data[e]["name"])),i.a.createElement(b["a"].Content,{extra:true},i.a.createElement(p["a"],{verticalAlign:"middle"},i.a.createElement(p["a"].Column,{width:6},i.a.createElement("div",{className:"price"},"$",t.data[e]["price"])),i.a.createElement(p["a"].Column,{width:10,textAlign:"right"},i.a.createElement(v["a"],{as:c["b"],to:t.data[e]["url"],primary:true,content:"Buy now"})))))}):Object.keys(N).map(function(e){return i.a.createElement(E["a"],{style:{width:230}},i.a.createElement(E["a"].Image,null),i.a.createElement(E["a"].Header,null,i.a.createElement(E["a"].Line,{length:"full"}),i.a.createElement(E["a"].Line,{length:"full"}),i.a.createElement(E["a"].Line,{length:"full"}),i.a.createElement(E["a"].Line,{length:"full"}),i.a.createElement(E["a"].Line,{length:"full"})))}))};var V=_;function O(e){"@babel/helpers - typeof";return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function z(e,t,n){if(t)j(e.prototype,t);if(n)j(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function U(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)x(e,t)}function x(e,t){x=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return x(e,t)}function T(o){var a=k();return function e(){var t=M(o),n;if(a){var r=M(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return D(this,n)}}function D(e,t){if(t&&(O(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return R(e)}function R(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function k(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function M(e){M=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return M(e)}function I(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var L=function(e){U(o,e);var n=T(o);function o(e,t){var r;C(this,o);r=n.call(this,e,t);I(R(r),"getData",function(){var e=r.props.getData();e.then(function(e){var t=e.status,n=e.rows;if(t){r.setState({data:n})}},function(e){alert("Rejected: "+e)})});r.state={loading:0,data:false};r.getData();return r}z(o,[{key:"render",value:function e(){return i.a.createElement(V,this.state)}}]);return o}(i.a.Component);var B=L;var A=B;var q=n(845);var F=n(842);var $=n(843);Promise.resolve().then(n.t.bind(null,842,7)).ProductCollection;var H=function e(t,n){var r=typeof t!=="undefined"?t:"";var o="https://savingsdealz.com"+r;return i.a.createElement(l["Helmet"],{key:Math.random(),script:[$["helmetJsonLdProp"]<F["ProductCollection"]>{"@context":"https://schema.org","@type":"Product",name:"vpn",image:"",description:"All vpn on your choice",brand:{"@type":"Brand",name:"vpn"}}]},i.a.createElement("title",null),i.a.createElement("meta",{name:"robots",content:"index, follow"}),i.a.createElement("meta",{name:"description",content:description}),i.a.createElement("link",{rel:"canonical",href:o}))};var W=function e(t){return i.a.createElement("div",null,H(t.url,t.info),i.a.createElement(s["a"],null,i.a.createElement(u["a"],{id:"breadcrumb"},i.a.createElement(u["a"].Section,{link:true,as:c["b"],to:"/"},"Main"),i.a.createElement(u["a"].Divider,{icon:"right chevron"}),i.a.createElement(u["a"].Section,{active:true},"Offer")),i.a.createElement(p["a"],{id:"offerBlock"},i.a.createElement(p["a"].Row,{stretched:true},i.a.createElement(p["a"].Column,{width:11},i.a.createElement(d["a"],{className:"info-block"},i.a.createElement(f["a"].Group,null,i.a.createElement(f["a"],null,t.info["ribbon"]&&i.a.createElement("div",{className:"ribbon"},t.info["ribbon"]),i.a.createElement(f["a"].Image,{alt:"logo",size:"tiny",className:"logo",verticalAlign:"middle",src:t.info["image"]}),i.a.createElement(f["a"].Content,null,i.a.createElement(f["a"].Header,{className:"title"},t.info["title"]),i.a.createElement(f["a"].Meta,null,t.info["subtitle"]),i.a.createElement(f["a"].Description,null,i.a.createElement("div",{className:"price-block"},t.info["price"]&&i.a.createElement("span",{className:"price"},"$",t.info["price"]),t.info["old_price"]&&i.a.createElement("span",{className:"old-price"},"$",t.info["old_price"]))),i.a.createElement(f["a"].Extra,null,i.a.createElement(m["a"],{className:"quantity",type:"number",name:t.info["id"],onChange:t.handleInputChangeQuantity,value:t.offer["quantity"],min:1}),i.a.createElement(v["a"],{primary:true,content:"Add to cart",onClick:t.handleClicAddToCart})),t.info["user_used"]&&i.a.createElement(f["a"].Description,null,t.info["user_used"]," users used this coupon")))),i.a.createElement("p",null,i.a.createElement("span",{className:"category"},"Category: ")," ",i.a.createElement("span",{className:"category-value"},t.info["category"])))),i.a.createElement(p["a"].Column,{width:5},i.a.createElement(d["a"],null,i.a.createElement("div",{className:"header-top color-red"},"BEST VPN DEALS"),i.a.createElement(g["a"],{getData:q["a"]})))),i.a.createElement(p["a"].Row,null,i.a.createElement(p["a"].Column,null,i.a.createElement(d["a"],{className:"info-block"},i.a.createElement("div",{className:"header-top color-red"},"People who viewed this item also viewed"),i.a.createElement(A,{getData:q["a"]})))))))};var X=W;var Q=n(839);var J=n(127);function G(e){"@babel/helpers - typeof";return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function Z(){Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};return Z.apply(this,arguments)}function K(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function ee(e,t,n){if(t)Y(e.prototype,t);if(n)Y(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function te(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)ne(e,t)}function ne(e,t){ne=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return ne(e,t)}function re(o){var a=ie();return function e(){var t=ce(o),n;if(a){var r=ce(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return oe(this,n)}}function oe(e,t){if(t&&(G(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return ae(e)}function ae(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function ie(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function ce(e){ce=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return ce(e)}function le(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var se={fetchCartOffers:J["b"]};var ue=function e(t){return{getCartOffers:t.getCartOffers}};var pe=function(e){te(a,e);var r=re(a);function a(e){var o;K(this,a);o=r.call(this,e);le(ae(o),"parseType",function(e){var t=e.split("-");return t[t.length-1]});le(ae(o),"getOfferInfo",function(){var e=o.state.offerId;var t=Object(q["b"])({offerId:e});t.then(function(e){var t=e.status,n=e.row;if(t){o.setState({info:n})}},function(e){alert("Rejected: "+e)})});le(ae(o),"handleInputChangeQuantity",function(e,t){var n=t.name,r=t.value;e.preventDefault();o.setState({offer:{id:n,quantity:r}})});le(ae(o),"handleClicAddToCart",function(){var e=o.state.offer;var t=o.props.getCartOffers;console.log("offer----\x3e",e);var n=t.concat([e]);console.log("a----\x3e",n);o.props.fetchCartOffers(n)});var t=e.match.params.offer;var n=o.parseType(t);o.state={loading:0,offerId:n,offer:{id:n,quantity:1},info:false};o.getOfferInfo();return o}ee(a,[{key:"render",value:function e(){return i.a.createElement(X,Z({},this.state,{handleInputChangeQuantity:this.handleInputChangeQuantity,handleClicAddToCart:this.handleClicAddToCart}))}}]);return a}(i.a.Component);var de=t["default"]=Object(a["f"])(Object(o["b"])(ue,se)(pe))},839:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n.d(t,"b",function(){return a});function r(e){var t={};for(var n in e){t[n]=e[n]}return t}function o(e){if(e==46||e==8||e==9||e==27||e==110||e==190||e==65&&ctrlKey===true||e>=35&&e<=39){return true}else{if((e<48||e>57)&&(e<96||e>105)){return false}}return true}function a(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}function i(e,t){if(!t)t=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);if(!r)return null;if(!r[2])return"";return decodeURIComponent(r[2].replace(/\+/g," "))}function c(e){e=e.toString();return e.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")}},845:function(e,t,n){"use strict";n.d(t,"e",function(){return i});n.d(t,"a",function(){return c});n.d(t,"d",function(){return s});n.d(t,"b",function(){return p});n.d(t,"c",function(){return m});n.d(t,"f",function(){return v});var r={status:true,rows:[{id:1,image:"/images/vpn-4.png",name:"ExpressVPN",title:"ExpressVPN 1 year premium with 50% off",subtitle:"License Category: 1 year",url:"/offer-expressvpn-1-year-premium-50-off-1",vendor_url:"/vendor-expressvpn-1",old_price:1e3,price:55,date:"-50%",comments:10},{id:2,image:"/images/vpn-5.png",name:"ExpressVPN",title:"ExpressVPN 1 year premium with 50% off",url:"/offer-expressvpn-1-year-premium-50-off-1",vendor_url:"/vendor-expressvpn-1",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Save 49% on your ExpressVPN plan today"},{id:3,image:"/images/vpn-7.png",name:"ExpressVPN",title:"ExpressVPN 1 year premium with 50% off",url:"/offer-expressvpn-1-year-premium-50-off-1",vendor_url:"/vendor-expressvpn-1",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Save 49% on your ExpressVPN plan today"}]};var o={status:1,rows:[{id:"1",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"1 Month VPN",url:"/offer-vpnsecure-1-month-premium-vpn-1",price:"4.97",description:"Save 50%",descriptions:["Ultra Cheap Shared, VPS, & Dedicated Servers","Unlimited SSD Storage & Monthly Bandwidth","No Increased Pricing on Plan Renewal Rates"]},{id:"2",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"6 Month VPN ",url:"/offer-vpnsecure-6-month-premium-vpn-2",price:"49.95",descriptions:["Ultra Cheap Shared, VPS, & Dedicated Servers","Unlimited SSD Storage & Monthly Bandwidth","No Increased Pricing on Plan Renewal Rates"]},{id:"3",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"12 Month VPN",url:"/offer-vpnsecure-3-month-premium-vpn-3",price:"79.95",descriptions:["Ultra Cheap Shared, VPS, & Dedicated Servers","Unlimited SSD Storage & Monthly Bandwidth","No Increased Pricing on Plan Renewal Rates"]},{id:"4",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"12 Months VPN",url:"/offer-vpnshazam-12-months-vpn-4",price:"49.99",descriptions:["Manage Unlimited Domain Names with cPanel.","Fast SSD Storage for CMS Website Speeds","7 Different International Data Centers"]},{id:"5",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"24 Months VPN",url:"/offer-vpnshazam-24-months-vpn-5",price:"79.99",descriptions:["Manage Unlimited Domain Names with cPanel.","Fast SSD Storage for CMS Website Speeds","7 Different International Data Centers"]}]};var a={status:1};function i(e){console.log("getTopSuggestions----\x3e",e);return new Promise(function(e){setTimeout(function(){e(r)},200)})}function c(e){console.log("getBestVpnDeals----\x3e",e);return new Promise(function(e){setTimeout(function(){e(o)},5e3)})}var l={status:1,rows:[{id:"1",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"1 Month VPN",url:"/offer-vpnsecure-1-month-premium-vpn-1",price:"4.97",descriptions:["48 Countries To Choose From","No Logs Ever","Bypass Internet Censorship","Choose Cipher Strength","Meta Search"]},{id:"2",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"6 Month VPN ",url:"/offer-vpnsecure-6-month-premium-vpn-2",price:"24.97",descriptions:["48 Countries To Choose From","No Logs Ever","Bypass Internet Censorship","Choose Cipher Strength","Meta Search"]},{id:"3",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"12 Month VPN",url:"/offer-vpnsecure-3-month-premium-vpn-3",price:"39.97",descriptions:["48 Countries To Choose From","No Logs Ever","Bypass Internet Censorship","Choose Cipher Strength","Meta Search"]},{id:"4",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"12 Months VPN",url:"/offer-vpnshazam-12-months-vpn-4",price:"24.9",descriptions:["Supercharged VPN","Unlimited servers switching","5 simultaneous connections","Absolutely no logs policy","Powerful online protection"]},{id:"5",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"24 Months VPN",url:"/offer-vpnshazam-24-months-vpn-5",price:"39.9",descriptions:["Supercharged VPN","Unlimited servers switching","5 simultaneous connections","Absolutely no logs policy","Powerful online protection"]},{id:"6",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",name:"6 months VPN",url:"/offer-ivacy-6-months-vpn-6",price:"15",descriptions:["Stay Secure with Ivacy VPN","256-Bit Encryption","Public Wi-Fi Security","No Logs Policy","Enjoy Buffer-free Streaming"]},{id:"7",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",name:"2 year VPN",url:"/offer-ivacy-2-year-vpn-7",price:"30",descriptions:["Stay Secure with Ivacy VPN","256-Bit Encryption","Public Wi-Fi Security","No Logs Policy","Enjoy Buffer-free Streaming"]},{id:"8",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",name:"5 year VPN",url:"/offer-ivacy-5-year-vpn-8",price:"50",descriptions:["Stay Secure with Ivacy VPN","256-Bit Encryption","Public Wi-Fi Security","No Logs Policy","Enjoy Buffer-free Streaming"]},{id:"9",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"1 month VPN",url:"/offer-nordvpn-1-month-9",price:"8",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]},{id:"10",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"1 year VPN",url:"/offer-nordvpn-1-year-10",price:"58",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]},{id:"11",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"2 year VPN",url:"/offer-nordvpn-2-year-11",price:"83",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]},{id:"12",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"3 year VPN",url:"/offer-nordvpn-3-year-12",price:"95",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]}]};function s(e){console.log("getRecomendationOffers----\x3e",e);return new Promise(function(e){setTimeout(function(){e(l)},2e3)})}var u={status:1,row:{id:"1",category:"VPN",ribbon:"BEST VALUE",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",url:"/offer-vpnsecure-1-month-premium-vpn-1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"1 Month VPN",price:"4.97",old_price:"9.95",discount:"-50%",description:"VPNsecure 1 month premium 50% Off",discount_title:"Take it and get 50% off",user_used:"1187"}};function p(e){console.log("getOfferInfo----\x3e",e);return new Promise(function(e){setTimeout(function(){e(u)},200)})}var d={status:1,rows:[{id:"1",category:"VPN",image:"/images/vpnsecure-logo.png",url:"/offer-vpnsecure-1-month-premium-vpn-1",vendor_id:"1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"1 Month VPN",price:"4.97",old_price:"9.95",discount:"-50%",description:"VPNsecure 1 month premium 50% Off",discount_title:"Take it and get 50% off",user_used:"1187"},{id:"2",category:"VPN",image:"/images/vpnsecure-logo.png",url:"/offer-vpnsecure-6-month-premium-vpn-2",vendor_id:"1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"6 Month VPN ",price:"49.95",old_price:null,discount:null,description:null,discount_title:null,user_used:null},{id:"3",category:"VPN",image:"/images/vpnsecure-logo.png",url:"/offer-vpnsecure-3-month-premium-vpn-3",vendor_id:"1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"12 Month VPN",price:"79.95",old_price:null,discount:null,description:null,discount_title:null,user_used:null},{id:"4",category:"VPN",image:"/images/vpn-shazam-logo.png",url:"/offer-vpnshazam-12-months-vpn-4",vendor_id:"2",vendor_url:"/vendor-vpn-vpnshazam-2",name:"VPNShazam.com",title:"12 Months VPN",price:"49.99",old_price:null,discount:null,description:null,discount_title:null,user_used:null},{id:"5",category:"VPN",image:"/images/vpn-shazam-logo.png",url:"/offer-vpnshazam-24-months-vpn-5",vendor_id:"2",vendor_url:"/vendor-vpn-vpnshazam-2",name:"VPNShazam.com",title:"24 Months VPN",price:"79.99",old_price:null,discount:null,description:null,discount_title:null,user_used:null}]};var f={status:true,rows:[{id:1,category:"bundle",image:"/images/bundle1.png",offerUrl:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:2,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:3,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"0",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:4,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:5,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:6,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"}]};function m(e){console.log("getOfferList----\x3e",e);var t=e["searchData"]["category"]=="vpn"?d:f;return new Promise(function(e){setTimeout(function(){e(t)},2e3)})}function v(e){console.log("save payer email----\x3e",e);return new Promise(function(e){setTimeout(function(){e(a)},2e3)})}},944:function(e,t,n){"use strict";var r=n(0);var a=n.n(r);var o=n(32);var i=n(964);var c=n(966);var l=[1,2,3];var s=function e(t){return a.a.createElement(i["a"].Group,{divided:true,id:"bestVpnDeals"},!t.data?Object.keys(l).map(function(e){return a.a.createElement(c["a"],null,a.a.createElement(c["a"].Header,{image:true},a.a.createElement(c["a"].Line,null),a.a.createElement(c["a"].Line,null)))}):Object.keys(t.data).map(function(e){return a.a.createElement(i["a"],null,a.a.createElement(i["a"].Image,{verticalAlign:"middle",alt:"",src:t.data[e]["image"],size:"tiny"}),a.a.createElement(i["a"].Content,{verticalAlign:"middle"},a.a.createElement(i["a"].Header,{as:o["b"],to:t.data[e]["url"]},t.data[e]["title"]),a.a.createElement(i["a"].Meta,null,a.a.createElement(o["b"],{to:t.data[e]["vendor_url"]},"Visit ",t.data[e]["vendor_name"])),a.a.createElement(i["a"].Description,null,t.data[e]["description"])))}))};var u=s;function p(e){"@babel/helpers - typeof";return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function m(e,t,n){if(t)f(e.prototype,t);if(n)f(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function v(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)g(e,t)}function g(e,t){g=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return g(e,t)}function y(o){var a=P();return function e(){var t=E(o),n;if(a){var r=E(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return h(this,n)}}function h(e,t){if(t&&(p(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return b(e)}function b(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function P(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function E(e){E=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return E(e)}function w(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var N=function(e){v(o,e);var n=y(o);function o(e,t){var r;d(this,o);r=n.call(this,e,t);w(b(r),"getData",function(){var e=r.props.getData();e.then(function(e){var t=e.status,n=e.rows;if(t){r.setState({data:n})}},function(e){alert("Rejected: "+e)})});r.state={loading:0,data:false};r.getData();return r}m(o,[{key:"render",value:function e(){return a.a.createElement(u,this.state)}}]);return o}(a.a.Component);var S=N;var _=t["a"]=S}}]);