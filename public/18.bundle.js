(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{817:function(e,t,a){"use strict";a.r(t);var r=a(0);var i=a.n(r);var n=a(845);var o=a(839);var c=a(816);var s=a(856);var l=a(889);var u=a(890);var f=a(383);var p=[1,2,3];var d=function e(t){return i.a.createElement(l["a"].Group,{divided:true,id:"bestVpnDeals"},!t.data?Object.keys(p).map(function(e){return i.a.createElement(u["a"],null,i.a.createElement(u["a"].Header,{image:true},i.a.createElement(u["a"].Line,null),i.a.createElement(u["a"].Line,null)))}):Object.keys(t.data).map(function(e){return i.a.createElement(o["a"],{className:"NewsListChild"},i.a.createElement(c["a"],null,i.a.createElement(c["a"].Row,{columns:2},i.a.createElement(c["a"].Column,{computer:6},i.a.createElement(f["a"],{verticalAlign:"middle",alt:"news-image",src:t.data[e]["image"],size:"medium"})," "),i.a.createElement(c["a"].Column,{computer:10},i.a.createElement(c["a"].Row,null,i.a.createElement(s["a"],{as:"h1",className:"NamesNews"},t.data[e]["title"])),i.a.createElement(c["a"].Row,null,t.data[e]["description"])))))}))};var m=d;function v(e){"@babel/helpers - typeof";return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function y(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function h(e,t,a){if(t)y(e.prototype,t);if(a)y(e,a);Object.defineProperty(e,"prototype",{writable:false});return e}function O(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)j(e,t)}function j(e,t){j=Object.setPrototypeOf||function e(t,a){t.__proto__=a;return t};return j(e,t)}function g(n){var i=w();return function e(){var t=P(n),a;if(i){var r=P(this).constructor;a=Reflect.construct(t,arguments,r)}else{a=t.apply(this,arguments)}return N(this,a)}}function N(e,t){if(t&&(v(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return E(e)}function E(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function w(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function P(e){P=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return P(e)}function q(e,t,a){if(t in e){Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true})}else{e[t]=a}return e}var x=function(e){O(n,e);var a=g(n);function n(e,t){var r;b(this,n);r=a.call(this,e,t);q(E(r),"getData",function(){var e=r.props.getData();e.then(function(e){var t=e.status,a=e.rows;if(t){r.setState({data:a})}},function(e){alert("Rejected: "+e)})});r.state={loading:0,data:false};r.getData();return r}h(n,[{key:"render",value:function e(){return i.a.createElement(d,this.state)}}]);return n}(i.a.Component);var k=x;var T=k;var _={status:true,rows:[{id:1,image:"https://skesov.ru/wp-content/uploads/2020/11/how-vpn-works-1536x982.jpg",title:"First news",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi? Distinctio necessitatibus omnis nulla vero quod itaque porro? Eveniet id ipsa ad nam libero facere possimus quaerat quia praesentium totam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi? Distinctio necessitatibus omnis nulla vero quod itaque porro? Eveniet id ipsa ad nam libero facere possimus quaerat quia praesentium totam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi? Distinctio necessitatibus omnis nulla vero quod itaque porro? Eveniet id ipsa ad nam libero facere possimus quaerat quia praesentium totam!"},{id:2,image:"https://skesov.ru/wp-content/uploads/2020/11/how-vpn-works-1536x982.jpg",title:"Second news",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi? Distinctio necessitatibus omnis nulla vero quod itaque porro? Eveniet id ipsa ad nam libero facere possimus quaerat quia praesentium totam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi? Distinctio necessitatibus omnis nulla vero quod itaque porro? Eveniet id ipsa ad nam libero facere possimus quaerat quia praesentium totam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi? Distinctio necessitatibus omnis nulla vero quod itaque porro? Eveniet id ipsa ad nam libero facere possimus quaerat quia praesentium totam!"}]};function R(e){console.log("getNewsList----\x3e",e);return new Promise(function(e){setTimeout(function(){e(_)},200)})}var S=function e(){return i.a.createElement(n["Helmet"],{key:Math.random()},i.a.createElement("title",null,"News"),i.a.createElement("meta",{property:"og:title",content:"News"}),i.a.createElement("meta",{property:"og:url",content:"https://savingsdealz.com/news"}),i.a.createElement("meta",{property:"og:image",content:"https://savingsdealz.com/images/logo.png"}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:image:width",content:"50"}),i.a.createElement("meta",{property:"og:image:height",content:"50"}),i.a.createElement("meta",{name:"description",content:"News in the best VPN site"}),i.a.createElement("meta",{name:"robots",content:"index, follow"}),i.a.createElement("script",{type:"application/ld+json"},'\n        {\n          "@context": "https://schema.org",\n          "@type": "Organization",\n          name: "savingsdealz",\n          url: "https://savingsdealz.com/",\n        }\n    '))};var D=function e(t){return i.a.createElement("div",{className:"blockNews"},S(),i.a.createElement(o["a"],null,i.a.createElement(o["a"],null,i.a.createElement(c["a"],null,i.a.createElement(c["a"].Row,{columns:1},i.a.createElement(c["a"].Column,null,i.a.createElement(s["a"],{as:"h1",textAlign:"center",className:"ComponentName"},"News"))))),i.a.createElement(c["a"],{className:"NewsListChild"},i.a.createElement(c["a"].Row,{columns:1,textAlign:"justified"},i.a.createElement(c["a"].Column,null,i.a.createElement(T,{getData:R}))))))};var C=D;function L(e){"@babel/helpers - typeof";return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function z(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function G(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function K(e,t,a){if(t)G(e.prototype,t);if(a)G(e,a);Object.defineProperty(e,"prototype",{writable:false});return e}function A(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)U(e,t)}function U(e,t){U=Object.setPrototypeOf||function e(t,a){t.__proto__=a;return t};return U(e,t)}function B(n){var i=I();return function e(){var t=J(n),a;if(i){var r=J(this).constructor;a=Reflect.construct(t,arguments,r)}else{a=t.apply(this,arguments)}return H(this,a)}}function H(e,t){if(t&&(L(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return M(e)}function M(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function I(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function J(e){J=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return J(e)}var V=function(e){A(a,e);var t=B(a);function a(e){z(this,a);return t.call(this,e)}K(a,[{key:"render",value:function e(){return i.a.createElement(C,null)}}]);return a}(i.a.Component);var F=t["default"]=V},848:function(e,t){function a(e,t){if(e==null)return{};var a={};var r=Object.keys(e);var n,i;for(i=0;i<r.length;i++){n=r[i];if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}e.exports=a,e.exports.__esModule=true,e.exports["default"]=e.exports},849:function(e,t,a){var o=a(848);function r(e,t){if(e==null)return{};var a=o(e,t);var r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n];if(t.indexOf(r)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,r))continue;a[r]=e[r]}}return a}e.exports=r,e.exports.__esModule=true,e.exports["default"]=e.exports},856:function(e,t,a){"use strict";var r=a(4);var E=a.n(r);var n=a(115);var i=a(5);var w=a.n(i);var o=a(0);var P=a.n(o);var q=a(24);var x=a(169);var k=a(170);var T=a(8);var _=a(109);var R=a(383);var c=a(256);function s(e){var t=e.children,a=e.className,r=e.content;var n=w()("sub header",a);var i=Object(x["a"])(s,e);var o=Object(k["a"])(s,e);return P.a.createElement(o,E()({},i,{className:n}),T["a"].isNil(t)?r:t)}s.handledProps=["as","children","className","content"];s.propTypes=false?undefined:{};s.create=Object(c["e"])(s,function(e){return{content:e}});var S=s;function l(e){var t=e.children,a=e.className,r=e.content;var n=w()("content",a);var i=Object(x["a"])(l,e);var o=Object(k["a"])(l,e);return P.a.createElement(o,E()({},i,{className:n}),T["a"].isNil(t)?r:t)}l.handledProps=["as","children","className","content"];l.propTypes=false?undefined:{};var D=l;function C(e){var t=e.attached,a=e.block,r=e.children,n=e.className,i=e.color,o=e.content,c=e.disabled,s=e.dividing,l=e.floated,u=e.icon,f=e.image,p=e.inverted,d=e.size,m=e.sub,v=e.subheader,b=e.textAlign;var y=w()("ui",i,d,Object(q["a"])(a,"block"),Object(q["a"])(c,"disabled"),Object(q["a"])(s,"dividing"),Object(q["e"])(l,"floated"),Object(q["a"])(u===true,"icon"),Object(q["a"])(f===true,"image"),Object(q["a"])(p,"inverted"),Object(q["a"])(m,"sub"),Object(q["b"])(t,"attached"),Object(q["d"])(b),"header",n);var h=Object(x["a"])(C,e);var O=Object(k["a"])(C,e);if(!T["a"].isNil(r)){return P.a.createElement(O,E()({},h,{className:y}),r)}var j=_["a"].create(u,{autoGenerateKey:false});var g=R["a"].create(f,{autoGenerateKey:false});var N=S.create(v,{autoGenerateKey:false});if(j||g){return P.a.createElement(O,E()({},h,{className:y}),j||g,(o||N)&&P.a.createElement(D,null,o,N))}return P.a.createElement(O,E()({},h,{className:y}),o,N)}C.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"];C.propTypes=false?undefined:{};C.Content=D;C.Subheader=S;var u=t["a"]=C},889:function(e,t,a){"use strict";var r=a(4);var d=a.n(r);var n=a(5);var m=a.n(n);var i=a(0);var v=a.n(i);var b=a(169);var y=a(170);var h=a(8);var O=a(24);var o=a(256);function c(e){var t=e.children,a=e.className,r=e.content;var n=m()("header",a);var i=Object(b["a"])(c,e);var o=Object(y["a"])(c,e);return v.a.createElement(o,d()({},i,{className:n}),h["a"].isNil(t)?r:t)}c.handledProps=["as","children","className","content"];c.propTypes=false?undefined:{};c.create=Object(o["e"])(c,function(e){return{content:e}});var p=c;function s(e){var t=e.children,a=e.className,r=e.content;var n=m()("description",a);var i=Object(b["a"])(s,e);var o=Object(y["a"])(s,e);return v.a.createElement(o,d()({},i,{className:n}),h["a"].isNil(t)?r:t)}s.handledProps=["as","children","className","content"];s.propTypes=false?undefined:{};s.create=Object(o["e"])(s,function(e){return{content:e}});var j=s;function l(e){var t=e.children,a=e.className,r=e.content;var n=m()("extra",a);var i=Object(b["a"])(l,e);var o=Object(y["a"])(l,e);return v.a.createElement(o,d()({},i,{className:n}),h["a"].isNil(t)?r:t)}l.handledProps=["as","children","className","content"];l.propTypes=false?undefined:{};l.create=Object(o["e"])(l,function(e){return{content:e}});var g=l;function u(e){var t=e.children,a=e.className,r=e.content;var n=m()("meta",a);var i=Object(b["a"])(u,e);var o=Object(y["a"])(u,e);return v.a.createElement(o,d()({},i,{className:n}),h["a"].isNil(t)?r:t)}u.handledProps=["as","children","className","content"];u.propTypes=false?undefined:{};u.create=Object(o["e"])(u,function(e){return{content:e}});var N=u;function E(e){var t=e.children,a=e.className,r=e.content,n=e.description,i=e.extra,o=e.header,c=e.meta,s=e.verticalAlign;var l=m()(Object(O["f"])(s),"content",a);var u=Object(b["a"])(E,e);var f=Object(y["a"])(E,e);if(!h["a"].isNil(t)){return v.a.createElement(f,d()({},u,{className:l}),t)}return v.a.createElement(f,d()({},u,{className:l}),p.create(o,{autoGenerateKey:false}),N.create(c,{autoGenerateKey:false}),j.create(n,{autoGenerateKey:false}),g.create(i,{autoGenerateKey:false}),r)}E.handledProps=["as","children","className","content","description","extra","header","meta","verticalAlign"];E.propTypes=false?undefined:{};var w=E;var f=a(849);var P=a.n(f);var q=a(66);var x=a.n(q);function k(e){var t=e.children,a=e.className,r=e.content,n=e.divided,i=e.items,o=e.link,c=e.relaxed,s=e.unstackable;var l=m()("ui",Object(O["a"])(n,"divided"),Object(O["a"])(o,"link"),Object(O["a"])(s,"unstackable"),Object(O["b"])(c,"relaxed"),"items",a);var u=Object(b["a"])(k,e);var f=Object(y["a"])(k,e);if(!h["a"].isNil(t)){return v.a.createElement(f,d()({},u,{className:l}),t)}if(!h["a"].isNil(r)){return v.a.createElement(f,d()({},u,{className:l}),r)}var p=x()(i,function(e){var t=e.childKey,a=P()(e,["childKey"]);var r=t||[a.content,a.description,a.header,a.meta].join("-");return v.a.createElement(C,d()({},a,{key:r}))});return v.a.createElement(f,d()({},u,{className:l}),p)}k.handledProps=["as","children","className","content","divided","items","link","relaxed","unstackable"];k.propTypes=false?undefined:{};var T=k;var _=a(383);function R(e){var t=e.size;var a=Object(b["a"])(R,e);return v.a.createElement(_["a"],d()({},a,{size:t,ui:!!t,wrapped:true}))}R.handledProps=["size"];R.propTypes=false?undefined:{};R.create=Object(o["e"])(R,function(e){return{src:e}});var S=R;function D(e){var t=e.children,a=e.className,r=e.content,n=e.description,i=e.extra,o=e.header,c=e.image,s=e.meta;var l=m()("item",a);var u=Object(b["a"])(D,e);var f=Object(y["a"])(D,e);if(!h["a"].isNil(t)){return v.a.createElement(f,d()({},u,{className:l}),t)}return v.a.createElement(f,d()({},u,{className:l}),S.create(c,{autoGenerateKey:false}),v.a.createElement(w,{content:r,description:n,extra:i,header:o,meta:s}))}D.handledProps=["as","children","className","content","description","extra","header","image","meta"];D.Content=w;D.Description=j;D.Extra=g;D.Group=T;D.Header=p;D.Image=S;D.Meta=N;D.propTypes=false?undefined:{};var C=t["a"]=D},890:function(e,t,a){"use strict";var r=a(4);var l=a.n(r);var n=a(5);var u=a.n(n);var i=a(0);var f=a.n(i);var p=a(24);var d=a(169);var m=a(170);var v=a(8);function s(e){var t=e.children,a=e.className,r=e.content,n=e.image;var i=u()(Object(p["a"])(n,"image"),"header",a);var o=Object(d["a"])(s,e);var c=Object(m["a"])(s,e);return f.a.createElement(c,l()({},o,{className:i}),v["a"].isNil(t)?r:t)}s.handledProps=["as","children","className","content","image"];s.propTypes=false?undefined:{};var o=s;function c(e){var t=e.className,a=e.square,r=e.rectangular;var n=u()(Object(p["a"])(a,"square"),Object(p["a"])(r,"rectangular"),"image",t);var i=Object(d["a"])(c,e);var o=Object(m["a"])(c,e);return f.a.createElement(o,l()({},i,{className:n}))}c.handledProps=["as","className","rectangular","square"];c.propTypes=false?undefined:{};var b=c;function y(e){var t=e.className,a=e.length;var r=u()("line",a,t);var n=Object(d["a"])(y,e);var i=Object(m["a"])(y,e);return f.a.createElement(i,l()({},n,{className:r}))}y.handledProps=["as","className","length"];y.propTypes=false?undefined:{};var h=y;function O(e){var t=e.children,a=e.className,r=e.content;var n=u()("paragraph",a);var i=Object(d["a"])(O,e);var o=Object(m["a"])(O,e);return f.a.createElement(o,l()({},i,{className:n}),v["a"].isNil(t)?r:t)}O.handledProps=["as","children","className","content"];O.propTypes=false?undefined:{};var j=O;function g(e){var t=e.children,a=e.className,r=e.content,n=e.fluid,i=e.inverted;var o=u()("ui",Object(p["a"])(n,"fluid"),Object(p["a"])(i,"inverted"),"placeholder",a);var c=Object(d["a"])(g,e);var s=Object(m["a"])(g,e);return f.a.createElement(s,l()({},c,{className:o}),v["a"].isNil(t)?r:t)}g.handledProps=["as","children","className","content","fluid","inverted"];g.propTypes=false?undefined:{};g.Header=o;g.Image=b;g.Line=h;g.Paragraph=j;var N=t["a"]=g}}]);