(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{822:function(e,t,a){"use strict";a.r(t);var r=a(0);var i=a.n(r);var c=a(384);var l=a(1021);var s=a(851);var n=a(32);var o=a(838);var u=a(831);var p=a(862);var d=a(811);var f=a(841);var m=a(965);var v=function e(t){var a=typeof t!=="undefined"?t:"";var r="https://savingsdealz.com"+a;return i.a.createElement(o["Helmet"],{key:Math.random()},i.a.createElement("title",null,"2022 s vpn Compare tool free and Good"),i.a.createElement("meta",{name:"robots",content:"all"}),i.a.createElement("link",{rel:"canonical",href:r}))};var b=function e(a){return i.a.createElement("div",null,v(a.url),i.a.createElement(u["a"],null,i.a.createElement(p["a"],{id:"breadcrumb"},i.a.createElement(p["a"].Section,{link:true,as:n["b"],to:"/"},"Main"),i.a.createElement(p["a"].Divider,{icon:"right chevron"}),i.a.createElement(p["a"].Section,{link:true,as:n["b"],to:"/compare"},"Compare"),i.a.createElement(p["a"].Divider,{icon:"right chevron"}),i.a.createElement(p["a"].Section,{active:true},"Compare ",a.vendors.join(" with "))),i.a.createElement(d["a"],{id:"compareVendorBlock"},i.a.createElement(d["a"].Row,null,i.a.createElement(d["a"].Column,{width:16},i.a.createElement(f["a"],null,i.a.createElement(m["a"],{basic:"very",textAlign:"center"},i.a.createElement(m["a"].Body,null,Object.keys(a.compareInfo).map(function(t){return i.a.createElement(m["a"].Row,null,i.a.createElement(m["a"].Cell,{width:3,textAlign:"left"},a.compareInfo[t]["title"]),Object.keys(a.compareInfo[t]["cells"]).map(function(e){return i.a.createElement(m["a"].Cell,{width:5},a.getTableCell(a.compareInfo[t]["type"],a.compareInfo[t]["cells"][e]))}))})))))))))};var y=b;var h=a(879);function g(e){"@babel/helpers - typeof";return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function O(){O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return O.apply(this,arguments)}function j(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function P(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function w(e,t,a){if(t)P(e.prototype,t);if(a)P(e,a);Object.defineProperty(e,"prototype",{writable:false});return e}function E(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)S(e,t)}function S(e,t){S=Object.setPrototypeOf||function e(t,a){t.__proto__=a;return t};return S(e,t)}function N(n){var o=T();return function e(){var t=x(n),a;if(o){var r=x(this).constructor;a=Reflect.construct(t,arguments,r)}else{a=t.apply(this,arguments)}return C(this,a)}}function C(e,t){if(t&&(g(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return k(e)}function k(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function T(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function x(e){x=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return x(e)}function A(e,t,a){if(t in e){Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true})}else{e[t]=a}return e}var I=function(e){E(o,e);var r=N(o);function o(e){var n;j(this,o);n=r.call(this,e);A(k(n),"parseType",function(e){var t=e.replace("compare-","");var a=t.split("-with-");return a});A(k(n),"getCompareVendorsInfo",function(){var e=n.state.vendors;var t=Object(h["a"])(e);t.then(function(e){var t=e.status,a=e.info,r=e.rows;if(t){n.setState({info:a,compareInfo:r})}},function(e){alert("Rejected: "+e)})});A(k(n),"getTableCell",function(e,t){switch(e){case"image":return i.a.createElement(c["a"],{src:t});break;case"text":return t;break;case"checkbox":if(parseInt(t)){return i.a.createElement(c["a"],{alt:"check",src:"/images/check.png"})}else{return i.a.createElement(c["a"],{alt:"cancel",src:"/images/cancel.png"})}break;case"dropdown":var a=[];var r=1;for(var n in t){a.push(t[r]);r++;if(r>=8){break}}return i.a.createElement(i.a.Fragment,null,a.join(", "),i.a.createElement(l["a"],{trigger:i.a.createElement("span",{className:"more-button"},"more"),size:"mini",dimmer:"inverted",className:"modal-countries",closeIcon:true},i.a.createElement(l["a"].Content,{image:true,scrolling:true},i.a.createElement(l["a"].Description,null,i.a.createElement(s["a"],null,"All countries"),Object.keys(t).map(function(e){return i.a.createElement("p",null,t[e])})))));break}});var t=e.match.params.vendors;var a=n.parseType(t);n.state={loading:0,vendors:a,info:false,compareInfo:false};n.getCompareVendorsInfo();return n}w(o,[{key:"render",value:function e(){return i.a.createElement(y,O({},this.state,{getTableCell:this.getTableCell}))}}]);return o}(i.a.Component);var G=t["default"]=I},879:function(e,t,a){"use strict";a.d(t,"b",function(){return n});a.d(t,"c",function(){return i});a.d(t,"a",function(){return l});var r={status:true,row:{id:1,name:"ExpressVPN",image:"/images/vpn-4.png",title:"ExpressVPN 1 year premium with 50% off",category:"VPN",descriptions:[{title:"48 Countries To Choose From",text:"<p>Our secure vpn access servers are monitored.  They’re access controlled & we are the only ones that operate them — no one else.  They do not permanently store IP addresses nor do they store logs.  Each server supports all popular protocols including: OpenVPN, HTTP Proxy, Smart DNS, Obfuscation & SSH SOCKS. With the very best server locations and low ping times, you will always find a fast server close to you.</p>"},{title:"No Logs Ever",text:"<p>We take your privacy very seriously. We do not store any logs of the websites you visit, we never will and never have. If required we will move jurisdictions and go above and beyond for you.</p>"},{title:"Bypass Internet Censorship",text:"<p>Many Countries including United Kingdom, France, Germany, East Asia, Central Asia, The Middle East/North Africa, Australia and many more employ internet censorship or filtering.  By using VPNSecure you can take back your freedom and enjoy un-restricted internet. In heavily restricted regions we offer obfuscation (Stealth VPN) built right into our hand crafted VPN client.</p>"},{title:"Choose Cipher Strength",text:"<p>Depending on your use case, you may want to encrypt your internet connection but also get the best speed available.  We give you the option to choose your encryption cipher, from a low cipher of 64bits, to high encryption using AES-256. This gives you the freedom and ability to choose the type of connection you prefer. </p>"},{title:"Meta Search",text:"<p>Meta Search is a metasearch engine, with the aim of protecting the privacy of its users. Metasearch does not share users IP addresses or search history with the search engines from which it gathers results. Meta Search will proxy results from leading search engines, so you don't have too. It's the privacy search engine, included in all premium VPN plans.</p>"}]}};function n(e){console.log("getVendorInfo----\x3e",e);return new Promise(function(e){setTimeout(function(){e(r)},200)})}var o={status:1,rows:[{id:"1",name:"VPNSecure.me",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",user_used:"2588"},{id:"2",name:"VPNShazam.com",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",user_used:"786"},{id:"3",name:"Ivacy.com",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",user_used:"181"},{id:"4",name:"NordVPN.com",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",user_used:"2554"}]};function i(e){console.log("getCompareList----\x3e",e);return new Promise(function(e){setTimeout(function(){e(o)},3e3)})}var c={status:true,info:[{id:1,name:"Surfhark",image:"/images/vpn-2.png"},{id:2,name:"PrivateVPN",image:"/images/vpn-3.png"},{id:3,name:"VPN",image:"/images/vpn-4.png"}],rows:[{title:"Company",type:"image",cells:["/images/vpn-2.png","/images/vpn-3.png","/images/vpn-4.png"]},{title:"Technoly",type:"text",cells:["L2TP","L2TP","L2TP"]},{title:"Number of devices per license",type:"text",cells:["2","7","4"]},{title:"Country",type:"dropdown",cells:[["USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland"],["USA","Germany","Poland"],["USA","Germany","Poland"]]},{title:"Number of servers",type:"text",cells:["150","100","500"]},{title:"Mobile app",type:"checkbox",cells:["1","1","1"]},{title:"Keep logs",type:"checkbox",cells:["1","0","0"]},{title:"Switch Kill",type:"checkbox",cells:["0","1","1"]}]};function l(e){console.log("getCompareVendorsInfo----\x3e",e);return new Promise(function(e){setTimeout(function(){e(c)},200)})}},942:function(e,t,a){"use strict";var r=a(262);var n=a(5);var M=a.n(n);var o=a(16);var i=a.n(o);var c=a(17);var l=a.n(c);var s=a(18);var u=a.n(s);var p=a(15);var d=a.n(p);var f=a(3);var m=a.n(f);var v=a(19);var b=a.n(v);var y=a(1);var h=a.n(y);var g=a(7);var O=a.n(g);var j=a(21);var B=a.n(j);var D=a(832);var P=a(6);var K=a.n(P);var w=a(0);var L=a.n(w);var W=a(8);var F=a(24);var H=a(167);var J=a(168);var E=a(254);var q=a(177);var Q=a(267);function S(e){var t=e.children,a=e.className,r=e.content,n=e.hidden,o=e.visible;var i=K()(Object(F["a"])(o,"visible"),Object(F["a"])(n,"hidden"),"content",a);var c=Object(H["a"])(S,e);var l=Object(J["a"])(S,e);return L.a.createElement(l,M()({},c,{className:i}),W["a"].isNil(t)?r:t)}S.handledProps=["as","children","className","content","hidden","visible"];S.propTypes=false?undefined:{};var N=S;var C=a(89);var k=a.n(C);function T(e){var t=e.attached,a=e.basic,r=e.buttons,n=e.children,o=e.className,i=e.color,c=e.compact,l=e.content,s=e.floated,u=e.fluid,p=e.icon,d=e.inverted,f=e.labeled,m=e.negative,v=e.positive,b=e.primary,y=e.secondary,h=e.size,g=e.toggle,O=e.vertical,j=e.widths;var P=K()("ui",i,h,Object(F["a"])(a,"basic"),Object(F["a"])(c,"compact"),Object(F["a"])(u,"fluid"),Object(F["a"])(p,"icon"),Object(F["a"])(d,"inverted"),Object(F["a"])(f,"labeled"),Object(F["a"])(m,"negative"),Object(F["a"])(v,"positive"),Object(F["a"])(b,"primary"),Object(F["a"])(y,"secondary"),Object(F["a"])(g,"toggle"),Object(F["a"])(O,"vertical"),Object(F["b"])(t,"attached"),Object(F["e"])(s,"floated"),Object(F["g"])(j),"buttons",o);var w=Object(H["a"])(T,e);var E=Object(J["a"])(T,e);if(B()(r)){return L.a.createElement(E,M()({},w,{className:P}),W["a"].isNil(n)?l:n)}return L.a.createElement(E,M()({},w,{className:P}),k()(r,function(e){return U.create(e)}))}T.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"];T.propTypes=false?undefined:{};var x=T;function A(e){var t=e.className,a=e.text;var r=K()("or",t);var n=Object(H["a"])(A,e);var o=Object(J["a"])(A,e);return L.a.createElement(o,M()({},n,{className:r,"data-text":a}))}A.handledProps=["as","className","text"];A.propTypes=false?undefined:{};var I=A;var G=function(e){b()(_,e);function _(){var e;var o;i()(this,_);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++){a[r]=arguments[r]}o=u()(this,(e=d()(_)).call.apply(e,[this].concat(a)));h()(m()(o),"ref",Object(w["createRef"])());h()(m()(o),"computeElementType",function(){var e=o.props,t=e.attached,a=e.label;if(!B()(t)||!B()(a))return"div"});h()(m()(o),"computeTabIndex",function(e){var t=o.props,a=t.disabled,r=t.tabIndex;if(!B()(r))return r;if(a)return-1;if(e==="div")return 0});h()(m()(o),"focus",function(){return O()(o.ref.current,"focus")});h()(m()(o),"handleClick",function(e){var t=o.props.disabled;if(t){e.preventDefault();return}O()(o.props,"onClick",e,o.props)});h()(m()(o),"hasIconClass",function(){var e=o.props,t=e.labelPosition,a=e.children,r=e.content,n=e.icon;if(n===true)return true;return n&&(t||W["a"].isNil(a)&&B()(r))});return o}l()(_,[{key:"computeButtonAriaRole",value:function e(t){var a=this.props.role;if(!B()(a))return a;if(t!=="button")return"button"}},{key:"render",value:function e(){var t=this.props,a=t.active,r=t.animated,n=t.attached,o=t.basic,i=t.children,c=t.circular,l=t.className,s=t.color,u=t.compact,p=t.content,d=t.disabled,f=t.floated,m=t.fluid,v=t.icon,b=t.inverted,y=t.label,h=t.labelPosition,g=t.loading,O=t.negative,j=t.positive,P=t.primary,w=t.secondary,E=t.size,S=t.toggle;var N=K()(s,E,Object(F["a"])(a,"active"),Object(F["a"])(o,"basic"),Object(F["a"])(c,"circular"),Object(F["a"])(u,"compact"),Object(F["a"])(m,"fluid"),Object(F["a"])(this.hasIconClass(),"icon"),Object(F["a"])(b,"inverted"),Object(F["a"])(g,"loading"),Object(F["a"])(O,"negative"),Object(F["a"])(j,"positive"),Object(F["a"])(P,"primary"),Object(F["a"])(w,"secondary"),Object(F["a"])(S,"toggle"),Object(F["b"])(r,"animated"),Object(F["b"])(n,"attached"));var C=K()(Object(F["b"])(h||!!y,"labeled"));var k=K()(Object(F["a"])(d,"disabled"),Object(F["e"])(f,"floated"));var T=Object(H["a"])(_,this.props);var x=Object(J["a"])(_,this.props,this.computeElementType);var A=this.computeTabIndex(x);if(!B()(y)){var I=K()("ui",N,"button",l);var G=K()("ui",C,"button",l,k);var U=Q["a"].create(y,{defaultProps:{basic:true,pointing:h==="left"?"right":"left"},autoGenerateKey:false});return L.a.createElement(x,M()({},T,{className:G,onClick:this.handleClick}),h==="left"&&U,L.a.createElement(D["a"],{innerRef:this.ref},L.a.createElement("button",{className:I,"aria-pressed":S?!!a:undefined,disabled:d,tabIndex:A},q["a"].create(v,{autoGenerateKey:false})," ",p)),(h==="right"||!h)&&U)}var V=K()("ui",N,k,C,"button",l);var R=!W["a"].isNil(i);var z=this.computeButtonAriaRole(x);return L.a.createElement(D["a"],{innerRef:this.ref},L.a.createElement(x,M()({},T,{className:V,"aria-pressed":S?!!a:undefined,disabled:d&&x==="button"||undefined,onClick:this.handleClick,role:z,tabIndex:A}),R&&i,!R&&q["a"].create(v,{autoGenerateKey:false}),!R&&p))}}]);return _}(w["Component"]);h()(G,"defaultProps",{as:"button"});h()(G,"Content",N);h()(G,"Group",x);h()(G,"Or",I);h()(G,"handledProps",["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"]);G.propTypes=false?undefined:{};G.create=Object(E["e"])(G,function(e){return{content:e}});var U=t["a"]=G}}]);