(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{826:function(e,n,r){"use strict";r.r(n);var t=r(0);var a=r.n(t);var i=r(91);var o=r(838);var s=r(831);var c=r(841);var l=r(851);var d=r(1031);var u=function e(n){var r=typeof n!=="undefined"?n:"";var t="https://savingsdealz.com"+r;return a.a.createElement(o["Helmet"],{key:Math.random()},a.a.createElement("title",null,"Page payment return | Savingsdealz"),a.a.createElement("meta",{name:"robots",content:"no index, no follow"}),a.a.createElement("link",{rel:"canonical",href:t}))};var p=function e(n){return a.a.createElement("div",null,u(n.url),a.a.createElement(s["a"],null,a.a.createElement(c["a"],null,a.a.createElement(l["a"],{as:"h1",textAlign:"center"},"Your payment is accepted.",a.a.createElement(l["a"].Subheader,{as:"h2"},"After a few minutes check your emails we sent you the data to activate the service.")),a.a.createElement("p",null,"Enter your email to receive a coupon to activate your VPN premium account."),a.a.createElement(d["a"],null,a.a.createElement(d["a"].Input,{fluid:true,name:"email",label:"Email",placeholder:"Email",required:true,onChange:n.handleChangeOrderEmail}),a.a.createElement(d["a"].Button,{fluid:true,color:"red",content:"SAVE",onClick:n.handleSavePayerEmail})))))};var m=p;var v=r(845);function f(e){"@babel/helpers - typeof";return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function g(){g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r){if(Object.prototype.hasOwnProperty.call(r,t)){e[t]=r[t]}}}return e};return g.apply(this,arguments)}function h(e,n){if(!(e instanceof n)){throw new TypeError("Cannot call a class as a function")}}function y(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||false;t.configurable=true;if("value"in t)t.writable=true;Object.defineProperty(e,t.key,t)}}function b(e,n,r){if(n)y(e.prototype,n);if(r)y(e,r);Object.defineProperty(e,"prototype",{writable:false});return e}function N(e,n){if(typeof n!=="function"&&n!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(n)P(e,n)}function P(e,n){P=Object.setPrototypeOf||function e(n,r){n.__proto__=r;return n};return P(e,n)}function S(a){var i=j();return function e(){var n=w(a),r;if(i){var t=w(this).constructor;r=Reflect.construct(n,arguments,t)}else{r=n.apply(this,arguments)}return O(this,r)}}function O(e,n){if(n&&(f(n)==="object"||typeof n==="function")){return n}else if(n!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return V(e)}function V(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function j(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function w(e){w=Object.setPrototypeOf?Object.getPrototypeOf:function e(n){return n.__proto__||Object.getPrototypeOf(n)};return w(e)}function E(e,n,r){if(n in e){Object.defineProperty(e,n,{value:r,enumerable:true,configurable:true,writable:true})}else{e[n]=r}return e}var _=function(e){N(r,e);var n=S(r);function r(e){var t;h(this,r);t=n.call(this,e);E(V(t),"handleChangeOrderEmail",function(e,n){var r=n.value;t.setState({orderEmail:r})});E(V(t),"handleSavePayerEmail",function(){var e=t.state.orderEmail;var n=Object(v["f"])({order_email:e});n.then(function(e){var n=e.status;if(n){t.props.history.push("/")}},function(e){alert("Rejected: "+e)})});t.state={orderEmail:""};return t}b(r,[{key:"render",value:function e(){return a.a.createElement(m,g({},this.state,{url:this.props.match.url,handleSavePayerEmail:this.handleSavePayerEmail,handleChangeOrderEmail:this.handleChangeOrderEmail}))}}]);return r}(a.a.Component);var z=n["default"]=_},841:function(e,n,r){"use strict";var t=r(5);var E=r.n(t);var a=r(114);var i=r(6);var _=r.n(i);var o=r(0);var z=r.n(o);var U=r(24);var x=r(167);var C=r(168);var T=r(8);function m(e){var n=e.children,r=e.className,t=e.compact,a=e.content,i=e.horizontal,o=e.piled,s=e.raised,c=e.size,l=e.stacked;var d=_()("ui",c,Object(U["a"])(t,"compact"),Object(U["a"])(i,"horizontal"),Object(U["a"])(o,"piled"),Object(U["a"])(s,"raised"),Object(U["a"])(l,"stacked"),"segments",r);var u=Object(x["a"])(m,e);var p=Object(C["a"])(m,e);return z.a.createElement(p,E()({},u,{className:d}),T["a"].isNil(n)?a:n)}m.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"];m.propTypes=false?undefined:{};var s=m;function c(e){var n=e.children,r=e.className,t=e.content;var a=_()("inline",r);var i=Object(x["a"])(c,e);var o=Object(C["a"])(c,e);return z.a.createElement(o,E()({},i,{className:a}),T["a"].isNil(n)?t:n)}c.handledProps=["as","children","className","content"];c.propTypes=false?undefined:{};var l=c;function k(e){var n=e.attached,r=e.basic,t=e.children,a=e.circular,i=e.className,o=e.clearing,s=e.color,c=e.compact,l=e.content,d=e.disabled,u=e.floated,p=e.inverted,m=e.loading,v=e.placeholder,f=e.padded,g=e.piled,h=e.raised,y=e.secondary,b=e.size,N=e.stacked,P=e.tertiary,S=e.textAlign,O=e.vertical;var V=_()("ui",s,b,Object(U["a"])(r,"basic"),Object(U["a"])(a,"circular"),Object(U["a"])(o,"clearing"),Object(U["a"])(c,"compact"),Object(U["a"])(d,"disabled"),Object(U["a"])(p,"inverted"),Object(U["a"])(m,"loading"),Object(U["a"])(v,"placeholder"),Object(U["a"])(g,"piled"),Object(U["a"])(h,"raised"),Object(U["a"])(y,"secondary"),Object(U["a"])(N,"stacked"),Object(U["a"])(P,"tertiary"),Object(U["a"])(O,"vertical"),Object(U["b"])(n,"attached"),Object(U["b"])(f,"padded"),Object(U["d"])(S),Object(U["e"])(u,"floated"),"segment",i);var j=Object(x["a"])(k,e);var w=Object(C["a"])(k,e);return z.a.createElement(w,E()({},j,{className:V}),T["a"].isNil(t)?l:t)}k.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"];k.Group=s;k.Inline=l;k.propTypes=false?undefined:{};var d=n["a"]=k},845:function(e,n,r){"use strict";r.d(n,"e",function(){return o});r.d(n,"a",function(){return s});r.d(n,"d",function(){return l});r.d(n,"b",function(){return u});r.d(n,"c",function(){return v});r.d(n,"f",function(){return f});var t={status:true,rows:[{id:1,image:"/images/vpn-4.png",name:"ExpressVPN",title:"ExpressVPN 1 year premium with 50% off",subtitle:"License Category: 1 year",url:"/offer-expressvpn-1-year-premium-50-off-1",vendor_url:"/vendor-expressvpn-1",old_price:1e3,price:55,date:"-50%",comments:10},{id:2,image:"/images/vpn-5.png",name:"ExpressVPN",title:"ExpressVPN 1 year premium with 50% off",url:"/offer-expressvpn-1-year-premium-50-off-1",vendor_url:"/vendor-expressvpn-1",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Save 49% on your ExpressVPN plan today"},{id:3,image:"/images/vpn-7.png",name:"ExpressVPN",title:"ExpressVPN 1 year premium with 50% off",url:"/offer-expressvpn-1-year-premium-50-off-1",vendor_url:"/vendor-expressvpn-1",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Save 49% on your ExpressVPN plan today"}]};var a={status:1,rows:[{id:"1",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"1 Month VPN",url:"/offer-vpnsecure-1-month-premium-vpn-1",price:"4.97",description:"Save 50%",descriptions:["Ultra Cheap Shared, VPS, & Dedicated Servers","Unlimited SSD Storage & Monthly Bandwidth","No Increased Pricing on Plan Renewal Rates"]},{id:"2",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"6 Month VPN ",url:"/offer-vpnsecure-6-month-premium-vpn-2",price:"49.95",descriptions:["Ultra Cheap Shared, VPS, & Dedicated Servers","Unlimited SSD Storage & Monthly Bandwidth","No Increased Pricing on Plan Renewal Rates"]},{id:"3",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"12 Month VPN",url:"/offer-vpnsecure-3-month-premium-vpn-3",price:"79.95",descriptions:["Ultra Cheap Shared, VPS, & Dedicated Servers","Unlimited SSD Storage & Monthly Bandwidth","No Increased Pricing on Plan Renewal Rates"]},{id:"4",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"12 Months VPN",url:"/offer-vpnshazam-12-months-vpn-4",price:"49.99",descriptions:["Manage Unlimited Domain Names with cPanel.","Fast SSD Storage for CMS Website Speeds","7 Different International Data Centers"]},{id:"5",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"24 Months VPN",url:"/offer-vpnshazam-24-months-vpn-5",price:"79.99",descriptions:["Manage Unlimited Domain Names with cPanel.","Fast SSD Storage for CMS Website Speeds","7 Different International Data Centers"]}]};var i={status:1};function o(e){console.log("getTopSuggestions----\x3e",e);return new Promise(function(e){setTimeout(function(){e(t)},200)})}function s(e){console.log("getBestVpnDeals----\x3e",e);return new Promise(function(e){setTimeout(function(){e(a)},5e3)})}var c={status:1,rows:[{id:"1",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"1 Month VPN",url:"/offer-vpnsecure-1-month-premium-vpn-1",price:"4.97",descriptions:["48 Countries To Choose From","No Logs Ever","Bypass Internet Censorship","Choose Cipher Strength","Meta Search"]},{id:"2",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"6 Month VPN ",url:"/offer-vpnsecure-6-month-premium-vpn-2",price:"24.97",descriptions:["48 Countries To Choose From","No Logs Ever","Bypass Internet Censorship","Choose Cipher Strength","Meta Search"]},{id:"3",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",name:"12 Month VPN",url:"/offer-vpnsecure-3-month-premium-vpn-3",price:"39.97",descriptions:["48 Countries To Choose From","No Logs Ever","Bypass Internet Censorship","Choose Cipher Strength","Meta Search"]},{id:"4",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"12 Months VPN",url:"/offer-vpnshazam-12-months-vpn-4",price:"24.9",descriptions:["Supercharged VPN","Unlimited servers switching","5 simultaneous connections","Absolutely no logs policy","Powerful online protection"]},{id:"5",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",name:"24 Months VPN",url:"/offer-vpnshazam-24-months-vpn-5",price:"39.9",descriptions:["Supercharged VPN","Unlimited servers switching","5 simultaneous connections","Absolutely no logs policy","Powerful online protection"]},{id:"6",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",name:"6 months VPN",url:"/offer-ivacy-6-months-vpn-6",price:"15",descriptions:["Stay Secure with Ivacy VPN","256-Bit Encryption","Public Wi-Fi Security","No Logs Policy","Enjoy Buffer-free Streaming"]},{id:"7",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",name:"2 year VPN",url:"/offer-ivacy-2-year-vpn-7",price:"30",descriptions:["Stay Secure with Ivacy VPN","256-Bit Encryption","Public Wi-Fi Security","No Logs Policy","Enjoy Buffer-free Streaming"]},{id:"8",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",name:"5 year VPN",url:"/offer-ivacy-5-year-vpn-8",price:"50",descriptions:["Stay Secure with Ivacy VPN","256-Bit Encryption","Public Wi-Fi Security","No Logs Policy","Enjoy Buffer-free Streaming"]},{id:"9",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"1 month VPN",url:"/offer-nordvpn-1-month-9",price:"8",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]},{id:"10",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"1 year VPN",url:"/offer-nordvpn-1-year-10",price:"58",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]},{id:"11",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"2 year VPN",url:"/offer-nordvpn-2-year-11",price:"83",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]},{id:"12",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",name:"3 year VPN",url:"/offer-nordvpn-3-year-12",price:"95",descriptions:["Secure Internet","Servers everywhere","NordLynx for top speed","No logs","Security for all your devices"]}]};function l(e){console.log("getRecomendationOffers----\x3e",e);return new Promise(function(e){setTimeout(function(){e(c)},2e3)})}var d={status:1,row:{id:"1",category:"VPN",ribbon:"BEST VALUE",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",url:"/offer-vpnsecure-1-month-premium-vpn-1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"1 Month VPN",price:"4.97",old_price:"9.95",discount:"-50%",description:"VPNsecure 1 month premium 50% Off",discount_title:"Take it and get 50% off",user_used:"1187"}};function u(e){console.log("getOfferInfo----\x3e",e);return new Promise(function(e){setTimeout(function(){e(d)},200)})}var p={status:1,rows:[{id:"1",category:"VPN",image:"/images/vpnsecure-logo.png",url:"/offer-vpnsecure-1-month-premium-vpn-1",vendor_id:"1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"1 Month VPN",price:"4.97",old_price:"9.95",discount:"-50%",description:"VPNsecure 1 month premium 50% Off",discount_title:"Take it and get 50% off",user_used:"1187"},{id:"2",category:"VPN",image:"/images/vpnsecure-logo.png",url:"/offer-vpnsecure-6-month-premium-vpn-2",vendor_id:"1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"6 Month VPN ",price:"49.95",old_price:null,discount:null,description:null,discount_title:null,user_used:null},{id:"3",category:"VPN",image:"/images/vpnsecure-logo.png",url:"/offer-vpnsecure-3-month-premium-vpn-3",vendor_id:"1",vendor_url:"/vendor-vpn-vpnsecure-1",name:"VPNSecure.me",title:"12 Month VPN",price:"79.95",old_price:null,discount:null,description:null,discount_title:null,user_used:null},{id:"4",category:"VPN",image:"/images/vpn-shazam-logo.png",url:"/offer-vpnshazam-12-months-vpn-4",vendor_id:"2",vendor_url:"/vendor-vpn-vpnshazam-2",name:"VPNShazam.com",title:"12 Months VPN",price:"49.99",old_price:null,discount:null,description:null,discount_title:null,user_used:null},{id:"5",category:"VPN",image:"/images/vpn-shazam-logo.png",url:"/offer-vpnshazam-24-months-vpn-5",vendor_id:"2",vendor_url:"/vendor-vpn-vpnshazam-2",name:"VPNShazam.com",title:"24 Months VPN",price:"79.99",old_price:null,discount:null,description:null,discount_title:null,user_used:null}]};var m={status:true,rows:[{id:1,category:"bundle",image:"/images/bundle1.png",offerUrl:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:2,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:3,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"0",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:4,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:5,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"},{id:6,category:"bundle",image:"/images/bundle1.png",url:"/vendor-express-1",availability:"1",brands:[{id:1,vendorUrl:"/vendor-vpn-1",name:"VPN.com"},{id:2,vendorUrl:"/vendor-vpn-2",name:"Uptobox.com"},{id:3,vendorUrl:"/vendor-vpn-3",name:"Xfantasy.tv"},{id:4,vendorUrl:"/vendor-vpn-4",name:"zbigz.com"}],title:"4 in 1 service - 1 month premium",old_price:1e3,price:55,discount:"-50%",discount_title:"Take it and get 50% off",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",subdescription:"NordVPN 1 year premium with 50% off"}]};function v(e){console.log("getOfferList----\x3e",e);var n=e["searchData"]["category"]=="vpn"?p:m;return new Promise(function(e){setTimeout(function(){e(n)},2e3)})}function f(e){console.log("save payer email----\x3e",e);return new Promise(function(e){setTimeout(function(){e(i)},2e3)})}},851:function(e,n,r){"use strict";var t=r(5);var O=r.n(t);var a=r(114);var i=r(6);var V=r.n(i);var o=r(0);var j=r.n(o);var w=r(24);var E=r(167);var _=r(168);var z=r(8);var U=r(177);var x=r(384);var s=r(254);function c(e){var n=e.children,r=e.className,t=e.content;var a=V()("sub header",r);var i=Object(E["a"])(c,e);var o=Object(_["a"])(c,e);return j.a.createElement(o,O()({},i,{className:a}),z["a"].isNil(n)?t:n)}c.handledProps=["as","children","className","content"];c.propTypes=false?undefined:{};c.create=Object(s["e"])(c,function(e){return{content:e}});var C=c;function l(e){var n=e.children,r=e.className,t=e.content;var a=V()("content",r);var i=Object(E["a"])(l,e);var o=Object(_["a"])(l,e);return j.a.createElement(o,O()({},i,{className:a}),z["a"].isNil(n)?t:n)}l.handledProps=["as","children","className","content"];l.propTypes=false?undefined:{};var T=l;function k(e){var n=e.attached,r=e.block,t=e.children,a=e.className,i=e.color,o=e.content,s=e.disabled,c=e.dividing,l=e.floated,d=e.icon,u=e.image,p=e.inverted,m=e.size,v=e.sub,f=e.subheader,g=e.textAlign;var h=V()("ui",i,m,Object(w["a"])(r,"block"),Object(w["a"])(s,"disabled"),Object(w["a"])(c,"dividing"),Object(w["e"])(l,"floated"),Object(w["a"])(d===true,"icon"),Object(w["a"])(u===true,"image"),Object(w["a"])(p,"inverted"),Object(w["a"])(v,"sub"),Object(w["b"])(n,"attached"),Object(w["d"])(g),"header",a);var y=Object(E["a"])(k,e);var b=Object(_["a"])(k,e);if(!z["a"].isNil(t)){return j.a.createElement(b,O()({},y,{className:h}),t)}var N=U["a"].create(d,{autoGenerateKey:false});var P=x["a"].create(u,{autoGenerateKey:false});var S=C.create(f,{autoGenerateKey:false});if(N||P){return j.a.createElement(b,O()({},y,{className:h}),N||P,(o||S)&&j.a.createElement(T,null,o,S))}return j.a.createElement(b,O()({},y,{className:h}),o,S)}k.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"];k.propTypes=false?undefined:{};k.Content=T;k.Subheader=C;var d=n["a"]=k}}]);