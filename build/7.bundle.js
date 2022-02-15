exports.ids=[7],exports.modules={69:function(e,n,r){"use strict";r.r(n);var o=r(0),t=r.n(o),i=(r(5),r(12)),a=r(2),s=function(e){return t.a.createElement("div",null,(n=e.url,r="https://savingsdealz.com"+(void 0!==n?n:""),t.a.createElement(i.Helmet,{key:Math.random()},t.a.createElement("title",null,"Page payment return | Savingsdealz"),t.a.createElement("meta",{name:"robots",content:"no index, no follow"}),t.a.createElement("link",{rel:"canonical",href:r}))),t.a.createElement(a.Container,null,t.a.createElement(a.Segment,null,t.a.createElement(a.Header,{as:"h1",textAlign:"center"},"Your payment is accepted.",t.a.createElement(a.Header.Subheader,{as:"h2"},"After a few minutes check your emails we sent you the data to activate the service.")),t.a.createElement("p",null,"Enter your email to receive a coupon to activate your VPN premium account."),t.a.createElement(a.Form,null,t.a.createElement(a.Form.Input,{fluid:!0,name:"email",label:"Email",placeholder:"Email",required:!0,onChange:e.handleChangeOrderEmail}),t.a.createElement(a.Form.Button,{fluid:!0,color:"red",content:"SAVE",onClick:e.handleSavePayerEmail})))));var n,r},c=r(72);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function p(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function m(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=g(e);if(n){var t=g(this).constructor;r=Reflect.construct(o,arguments,t)}else r=o.apply(this,arguments);return v(this,r)}}function v(e,n){if(n&&("object"===l(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var y=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&u(e,n)}(a,e);var n,r,o,i=m(a);function a(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),h(f(n=i.call(this,e)),"handleChangeOrderEmail",(function(e,r){var o=r.value;n.setState({orderEmail:o})})),h(f(n),"handleSavePayerEmail",(function(){var e=n.state.orderEmail;Object(c.f)({order_email:e}).then((function(e){e.status&&n.props.history.push("/")}),(function(e){alert("Rejected: "+e)}))})),n.state={orderEmail:""},n}return n=a,(r=[{key:"render",value:function(){return t.a.createElement(s,d({},this.state,{url:this.props.match.url,handleSavePayerEmail:this.handleSavePayerEmail,handleChangeOrderEmail:this.handleChangeOrderEmail}))}}])&&p(n.prototype,r),o&&p(n,o),Object.defineProperty(n,"prototype",{writable:!1}),a}(t.a.Component);n.default=y},72:function(e,n,r){"use strict";r.d(n,"e",(function(){return a})),r.d(n,"a",(function(){return s})),r.d(n,"d",(function(){return l})),r.d(n,"b",(function(){return p})),r.d(n,"c",(function(){return v})),r.d(n,"f",(function(){return f}));var o={status:!0,rows:[{id:1,image:"/images/vpn-4.png",name:"ExpressVPN",title:"ExpressVPN 1 year premium with 50% off",subtitle:"License Category: 1 year",url:"/offer-expressvpn-1-year-premium-50-off-1",vendor_url:"/vendor-expressvpn-1",old_price:1e3,price:55,date:"-50%",comments:10},{id:2,image:"/images/vpn-5.png",name:"ExpressVPN",title:"ExpressVPN 1 year premium with 50% off",url:"/offer-expressvpn-1-year-premium-50-off-1",vendor_url:"/vendor-expressvpn-1",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Save 49% on your ExpressVPN plan today"},{id:3,image:"/images/vpn-7.png",name:"ExpressVPN",title:"ExpressVPN 1 year premium with 50% off",url:"/offer-expressvpn-1-year-premium-50-off-1",vendor_url:"/vendor-expressvpn-1",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Save 49% on your ExpressVPN plan today"}]},t={status:1,rows:[{id:"1",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"1 Month VPN",url:"/offer-vpnsecure-1-month-premium-vpn-1",price:"4.97",description:"Save 50%",descriptions:["Ultra Cheap Shared, VPS, & Dedicated Servers","Unlimited SSD Storage & Monthly Bandwidth","No Increased Pricing on Plan Renewal Rates"]},{id:"2",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"6 Month VPN ",url:"/offer-vpnsecure-6-month-premium-vpn-2",price:"49.95",descriptions:["Ultra Cheap Shared, VPS, & Dedicated Servers","Unlimited SSD Storage & Monthly Bandwidth","No Increased Pricing on Plan Renewal Rates"]},{id:"3",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"12 Month VPN",url:"/offer-vpnsecure-3-month-premium-vpn-3",price:"79.95",descriptions:["Ultra Cheap Shared, VPS, & Dedicated Servers","Unlimited SSD Storage & Monthly Bandwidth","No Increased Pricing on Plan Renewal Rates"]},{id:"4",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"12 Months VPN",url:"/offer-vpnshazam-12-months-vpn-4",price:"49.99",descriptions:["Manage Unlimited Domain Names with cPanel.","Fast SSD Storage for CMS Website Speeds","7 Different International Data Centers"]},{id:"5",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"24 Months VPN",url:"/offer-vpnshazam-24-months-vpn-5",price:"79.99",descriptions:["Manage Unlimited Domain Names with cPanel.","Fast SSD Storage for CMS Website Speeds","7 Different International Data Centers"]}]},i={status:1};function a(e){return console.log("getTopSuggestions----\x3e",e),new Promise((function(e){setTimeout((function(){e(o)}),200)}))}function s(e){return console.log("getBestVpnDeals----\x3e",e),new Promise((function(e){setTimeout((function(){e(t)}),5e3)}))}var c={status:1,rows:[{id:"1",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"1 Month VPN",url:"/offer-vpnsecure-1-month-premium-vpn-1",price:"4.97",descriptions:["48 Countries To Choose From","No Logs Ever","Bypass Internet Censorship","Choose Cipher Strength","Meta Search"]},{id:"2",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"6 Month VPN ",url:"/offer-vpnsecure-6-month-premium-vpn-2",price:"24.97",descriptions:["48 Countries To Choose From","No Logs Ever","Bypass Internet Censorship","Choose Cipher Strength","Meta Search"]},{id:"3",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"12 Month VPN",url:"/offer-vpnsecure-3-month-premium-vpn-3",price:"39.97",descriptions:["48 Countries To Choose From","No Logs Ever","Bypass Internet Censorship","Choose Cipher Strength","Meta Search"]},{id:"4",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"12 Months VPN",url:"/offer-vpnshazam-12-months-vpn-4",price:"24.9",descriptions:["Supercharged VPN","Unlimited servers switching","5 simultaneous connections","Absolutely no logs policy","Powerful online protection"]},{id:"5",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"24 Months VPN",url:"/offer-vpnshazam-24-months-vpn-5",price:"39.9",descriptions:["Supercharged VPN","Unlimited servers switching","5 simultaneous connections","Absolutely no logs policy","Powerful online protection"]},{id:"6",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",name:"6 months VPN",url:"/offer-ivacy-6-months-vpn-6",price:"15",descriptions:["Stay Secure with Ivacy VPN","256-Bit Encryption","Public Wi-Fi Security","No Logs Policy","Enjoy Buffer-free Streaming"]},{id:"7",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",name:"2 year VPN",url:"/offer-ivacy-2-year-vpn-7",price:"30",descriptions:["Stay Secure with Ivacy VPN","256-Bit Encryption","Public Wi-Fi Security","No Logs Policy","Enjoy Buffer-free Streaming"]},{id:"8",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",name:"5 year VPN",url:"/offer-ivacy-5-year-vpn-8",price:"50",descriptions:["Stay Secure with Ivacy VPN","256-Bit Encryption","Public Wi-Fi Security","No Logs Policy","Enjoy Buffer-free Streaming"]},{id:"9",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"1 month VPN",url:"/offer-nordvpn-1-month-9",price:"8",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]},{id:"10",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"1 year VPN",url:"/offer-nordvpn-1-year-10",price:"58",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]},{id:"11",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"2 year VPN",url:"/offer-nordvpn-2-year-11",price:"83",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]},{id:"12",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"3 year VPN",url:"/offer-nordvpn-3-year-12",price:"95",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]}]};function l(e){return console.log("getRecomendationOffers----\x3e",e),new Promise((function(e){setTimeout((function(){e(c)}),2e3)}))}var d={status:1,row:{id:"1",category:"VPN",ribbon:"BEST VALUE",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",url:"/offer-vpnsecure-1-month-premium-vpn-1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"1 Month VPN",price:"4.97",old_price:"9.95",discount:"-50%",description:"VPNsecure 1 month premium 50% Off",discount_title:"Take it and get 50% off",user_used:"1187"}};function p(e){return console.log("getOfferInfo----\x3e",e),new Promise((function(e){setTimeout((function(){e(d)}),200)}))}var u={status:1,rows:[{id:"1",category:"VPN",image:"/images/vpnsecure-logo.png",url:"/offer-vpnsecure-1-month-premium-vpn-1",vendor_id:"1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"1 Month VPN",price:"4.97",old_price:"9.95",discount:"-50%",description:"VPNsecure 1 month premium 50% Off",discount_title:"Take it and get 50% off",user_used:"1187"},{id:"2",category:"VPN",image:"/images/vpnsecure-logo.png",url:"/offer-vpnsecure-6-month-premium-vpn-2",vendor_id:"1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"6 Month VPN ",price:"49.95",old_price:null,discount:null,description:null,discount_title:null,user_used:null},{id:"3",category:"VPN",image:"/images/vpnsecure-logo.png",url:"/offer-vpnsecure-3-month-premium-vpn-3",vendor_id:"1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"12 Month VPN",price:"79.95",old_price:null,discount:null,description:null,discount_title:null,user_used:null},{id:"4",category:"VPN",image:"/images/vpn-shazam-logo.png",url:"/offer-vpnshazam-12-months-vpn-4",vendor_id:"2",vendor_url:"/vendor-vpn-vpnshazam-2",name:"VPNShazam.com",title:"12 Months VPN",price:"49.99",old_price:null,discount:null,description:null,discount_title:null,user_used:null},{id:"5",category:"VPN",image:"/images/vpn-shazam-logo.png",url:"/offer-vpnshazam-24-months-vpn-5",vendor_id:"2",vendor_url:"/vendor-vpn-vpnshazam-2",name:"VPNShazam.com",title:"24 Months VPN",price:"79.99",old_price:null,discount:null,description:null,discount_title:null,user_used:null}]},m={status:!0,rows:[{id:1,category:"bundle",image:"/images/bundle1.png",offerUrl:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:2,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:3,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"0",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:4,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:5,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:6,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"}]};function v(e){console.log("getOfferList----\x3e",e);var n="vpn"==e.searchData.category?u:m;return new Promise((function(e){setTimeout((function(){e(n)}),2e3)}))}function f(e){return console.log("save payer email----\x3e",e),new Promise((function(e){setTimeout((function(){e(i)}),2e3)}))}}};