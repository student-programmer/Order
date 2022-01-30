exports.ids=[10],exports.modules={47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),l=a(3),c=a(12),i=a(2),m=function(e){return r.a.createElement("div",null,r.a.createElement(i.Header,{className:"block-title",as:"h1",textAlign:"center"},"Checkout deals",r.a.createElement(i.Header.Subheader,null,"Online shopping model steps")),(e.url,r.a.createElement(c.Helmet,{key:Math.random()},r.a.createElement("title",null,"Сheckout"),r.a.createElement("meta",{property:"og:title",content:"Checkout"}),r.a.createElement("meta",{property:"og:url",content:"https://savingsdealz.com/checkout"}),r.a.createElement("meta",{property:"og:image",content:"https://savingsdealz.com/images/logo.png"}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:image:width",content:"50"}),r.a.createElement("meta",{property:"og:image:height",content:"50"}),r.a.createElement("meta",{name:"robots",content:"all"}),r.a.createElement("meta",{name:"description",content:"Online shopping process, follow the steps indicated to complete the transaction"}))),r.a.createElement(i.Container,null,r.a.createElement(i.Breadcrumb,{id:"breadcrumb"},r.a.createElement(i.Breadcrumb.Section,{link:!0,as:l.Link,to:"/"},"Main"),r.a.createElement(i.Breadcrumb.Divider,{icon:"right chevron"}),r.a.createElement(i.Breadcrumb.Section,{active:!0},"Checkout")),r.a.createElement(i.Grid,{id:"checkoutBlock"},r.a.createElement(i.Grid.Column,{computer:10,mobile:16},"  ",r.a.createElement(i.Grid,null,r.a.createElement(i.Grid.Row,null,r.a.createElement(i.Grid.Column,null,r.a.createElement(i.Segment,null,r.a.createElement(i.Header,{as:"h1"},"Review item and shipping"),r.a.createElement(i.Item.Group,null,Object.keys(e.offers).map((function(t){return r.a.createElement(i.Item,{key:"c-"+e.offers[t].id},r.a.createElement(i.Item.Image,{alt:"$",size:"tiny",src:e.offers[t].image}),r.a.createElement(i.Item.Content,null,r.a.createElement(i.Item.Header,{as:"a"},e.offers[t].title),r.a.createElement(i.Item.Meta,null,e.offers[t].subtitle),r.a.createElement(i.Item.Extra,null,r.a.createElement(i.Input,{className:"quantity",type:"number",name:e.offers[t].id,onChange:e.handleInputChangeQuantity,value:e.offers[t].quantity,min:0}),r.a.createElement("span",{className:"price"},"$",e.offers[t].price)),e.offers[t].user_used&&r.a.createElement(i.Item.Description,null,e.offers[t].user_used," users used this coupon")))})))))),r.a.createElement(i.Grid.Row,null,r.a.createElement(i.Grid.Column,null,r.a.createElement(i.Segment,null,r.a.createElement(i.Header,{as:"h1"},"Pay with"),r.a.createElement(i.Table,{basic:"very",verticalAlign:"middle",collapsing:!0,id:"paymentMethods"},Object.keys(e.paymentMethods).map((function(t){return r.a.createElement(i.Table.Row,null,r.a.createElement(i.Table.Cell,null,r.a.createElement(i.Checkbox,{size:"big",value:e.paymentMethods[t].id,onChange:e.handleChangePaymentMethod,checked:e.checkPayment==e.paymentMethods[t].id})),r.a.createElement(i.Table.Cell,null,r.a.createElement(i.Image,{alt:"$",className:"payment-method-logo",src:e.paymentMethods[t].image})),r.a.createElement(i.Table.Cell,null,e.paymentMethods[t].name))})))))))),r.a.createElement(i.Grid.Column,{id:"payBlock",computer:6,mobile:16},r.a.createElement(i.Segment,null,r.a.createElement(i.List,{verticalAlign:"middle"},r.a.createElement(i.List.Item,null,r.a.createElement(i.List.Content,{floated:"right"},"$",e.total.total),r.a.createElement(i.List.Content,null,"Subtotal (",e.total.items," item",e.total.items>1&&"s",")")),r.a.createElement(i.Divider,null),r.a.createElement(i.List.Item,{className:"order-total"},r.a.createElement(i.List.Content,{floated:"right"},"$",e.total.total),r.a.createElement(i.List.Content,null,"Order total"))),e.checkPayment&&0!=e.total.total?r.a.createElement(i.Button,{fluid:!0,color:"red",content:"Confirm and pay",disabled:!e.checkPayment||0==e.total.total,onClick:e.handleClickToPay,loading:e.loadingPayButton}):r.a.createElement(i.Popup,{content:0==e.total.total?"Item list is empty":"Please select payment method",on:"click",pinned:!0,trigger:r.a.createElement(i.Button,{fluid:!0,color:"red",content:"Confirm and pay"})})))),r.a.createElement(i.Modal,{closeIcon:!0,dimmer:"inverted",size:"mini",open:e.openSendEmailModal},r.a.createElement(i.Modal.Header,null,"Enter your email to receive a coupon to activate your VPN premium account."),r.a.createElement(i.Modal.Content,{className:"coupon-modal"},r.a.createElement(i.Form,null,r.a.createElement(i.Form.Input,{type:"email",onChange:e.handleChangePayerEmail,value:e.payerEmail&&e.payerEmail}),r.a.createElement(i.Form.Button,{fluid:!0,color:"red",content:"PAY",onClick:e.handleClickToPay}))))))},u=(a(13),{status:!0,rows:[{id:2,image:"/images/bitcoin.png",name:"Bitcoin"},{id:1,image:"https://api.savingsdealz.com/images/paypal-logo.svg",name:"Paypal"},{id:3,image:"https://api.savingsdealz.com/images/gopay.png",name:"Credit or debit card"},{id:4,image:"https://api.savingsdealz.com/images/pm.png",name:"PerfectMoney"}]});var s=a(8),f=a(60),d=a(14),p=a(43),y=a.n(p);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=k(e);if(t){var r=k(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return C(this,a)}}function C(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var M={fetchCartOffers:d.a},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(l,e);var t,a,n,o=v(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),O(P(t=o.call(this,e)),"getPaymentMethods",(function(){var e;(console.log("getPaymentMethods----\x3e",e),new Promise((function(e){setTimeout((function(){e(u)}),200)}))).then((function(e){var a=e.status,n=e.rows;a&&t.setState({paymentMethods:n})}),(function(e){alert("Rejected: "+e)}))})),O(P(t),"getCartOffers",(function(){Object(s.b)().then((function(e){var a=e.status,n=e.rows;e.total;a&&(t.setState({offers:n}),t.calculateTotal(n))}),(function(e){alert("Rejected: "+e)}))})),O(P(t),"calculateTotal",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.state.offers;e&&(a=e);var n={subtotal:0,tax:0,total:0,items:0};for(var r in a){var o=a[r],l=o.price,c=o.quantity,i=o.tax;n.subtotal+=Math.round(l*c*100)/100,n.tax+=Math.round(100*i)/100,n.items++}n.total=Math.round(100*(n.subtotal+n.tax))/100,t.setState({total:n})})),O(P(t),"handleInputChangeQuantity",(function(e,a){var n=a.name,r=a.value;e.preventDefault();var o=t.state.offers,l=t.props.getCartOffers,c=Object(f.a)(o);for(var i in c){var m=c[i].id;if(m==n){for(var u in c[i].quantity=parseInt(r),l)l[u].id==m&&(l[u].quantity=parseInt(r));0==r&&delete c[i];break}}t.props.fetchCartOffers(l),t.setState({offers:c}),t.calculateTotal(c)})),O(P(t),"handleChangePaymentMethod",(function(e,a){var n=a.value;t.setState({checkPayment:n})})),O(P(t),"handleClickToPay",(function(){var e=t.state,a=e.checkPayment,n=e.payerEmail,r=Object(s.d)({payment_method_id:a,payer_email:n});t.setState({loadingPayButton:!0}),r.then((function(e){var n=e.status,r=e.paylink;n&&(4==a?t.sendPmPayForm(r):location.href=r)}),(function(e){alert("Rejected: "+e)}))})),O(P(t),"handleChangePayerEmail",(function(e,a){var n=a.value;t.setState({payerEmail:n})})),t.state={loading:0,paymentMethods:!1,checkPayment:!1,offers:!1,total:!1,loadingPayButton:!1,payerEmail:"",openSendEmailModal:!1},t.getPaymentMethods(),t.getCartOffers(),t}return t=l,(a=[{key:"sendPmPayForm",value:function(e){var t=JSON.parse(e),a="";a+='<form action="https://perfectmoney.com/api/step1.asp" method="post">',Object.keys(t).map((function(e){return a+='<input type="hidden" name="'+e+'" value="'+t[e]+'">'})),a+="</form>";var n=y()(a);y()("body").append(n),n.submit()}},{key:"render",value:function(){return r.a.createElement(m,g({},this.state,{handleInputChangeQuantity:this.handleInputChangeQuantity,handleClickToPay:this.handleClickToPay,handleChangePaymentMethod:this.handleChangePaymentMethod,handleChangePayerEmail:this.handleChangePayerEmail}))}}])&&E(t.prototype,a),n&&E(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.a.Component);t.default=Object(l.withRouter)(Object(o.connect)((function(e){return{getCartOffers:e.getCartOffers,getUser:e.getUser}}),M)(w))},60:function(e,t,a){"use strict";function n(e){var t={};for(var a in e)t[a]=e[a];return t}function r(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}))}};