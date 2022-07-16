"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3250],{22284:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(85893),i=t(41664),s=t(15861),a=t(12963),o=t(99226),l=t(50122);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function d(e){var n=e.links,t=e.activeLast,i=void 0!==t&&t,l=u(e,["links","activeLast"]),d=n[n.length-1].name,m=n.map((function(e){return(0,r.jsx)(x,{link:e},e.name)})),p=n.map((function(e){return(0,r.jsx)("div",{children:e.name!==d?(0,r.jsx)(x,{link:e}):(0,r.jsx)(s.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:d})},e.name)}));return(0,r.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({separator:(0,r.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l,{children:i?m:p}))}function x(e){var n=e.link,t=n.href,s=void 0===t?"":t,a=n.name,c=n.icon;return(0,r.jsx)(i.default,{href:s,passHref:!0,children:(0,r.jsxs)(l.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,r.jsx)(o.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),a]},a)})}},72728:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(85893),i=t(47037),s=t.n(i),a=t(99226),o=t(15861),l=t(50122),c=t(22284);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}function x(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function m(e){var n=e.links,t=e.action,i=e.heading,u=e.moreLink,m=void 0===u?[]:u,p=e.sx,h=x(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(a.Z,{sx:d({mb:5},p),children:[(0,r.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,r.jsx)(c.Z,d({links:n},h))]}),t&&(0,r.jsx)(a.Z,{sx:{flexShrink:0},children:t})]}),(0,r.jsx)(a.Z,{sx:{mt:2},children:s()(m)?(0,r.jsx)(l.Z,{href:m,target:"_blank",variant:"body2",children:m}):m.map((function(e){return(0,r.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},68419:function(e,n,t){t.d(n,{XM:function(){return k},rv:function(){return K},uX:function(){return D},qn:function(){return G},BU:function(){return U}});var r=t(85893),i=t(67294),s=t(86886),a=t(26447),o=t(66242),l=t(15861),c=t(99226),u=t(11057),d=t(55113),x=t(3140);function m(e){var n=e.addressBook;return(0,r.jsx)(o.Z,{sx:{p:3},children:(0,r.jsxs)(a.Z,{spacing:3,alignItems:"flex-start",children:[(0,r.jsx)(l.Z,{variant:"overline",sx:{color:"text.secondary"},children:"Billing Info"}),n.map((function(e){return(0,r.jsxs)(d.Z,{sx:{p:3,width:1,bgcolor:"background.neutral"},children:[(0,r.jsx)(l.Z,{variant:"subtitle1",gutterBottom:!0,children:e.name}),(0,r.jsxs)(l.Z,{variant:"body2",gutterBottom:!0,children:[(0,r.jsx)(l.Z,{variant:"body2",component:"span",sx:{color:"text.secondary"},children:"Address: \xa0"}),"".concat(e.street,", ").concat(e.city,", ").concat(e.state,", ").concat(e.country," ").concat(e.zipCode)]}),(0,r.jsxs)(l.Z,{variant:"body2",gutterBottom:!0,children:[(0,r.jsx)(l.Z,{variant:"body2",component:"span",sx:{color:"text.secondary"},children:"Phone: \xa0"}),e.phone]}),(0,r.jsxs)(c.Z,{sx:{mt:1},children:[(0,r.jsx)(u.Z,{color:"error",size:"small",startIcon:(0,r.jsx)(x.Z,{icon:"eva:trash-2-outline"}),onClick:function(){},sx:{mr:1},children:"Delete"}),(0,r.jsx)(u.Z,{size:"small",startIcon:(0,r.jsx)(x.Z,{icon:"eva:edit-fill"}),onClick:function(){},children:"Edit"})]})]},e.id)})),(0,r.jsx)(u.Z,{size:"small",startIcon:(0,r.jsx)(x.Z,{icon:"eva:plus-fill"}),children:"Add new address"})]})})}var p=t(93946),h=t(57922),v=t(50135),f=t(31812),j=t(97349);function b(e){var n=e.cards,t=e.isOpen,i=e.onOpen,s=e.onCancel;return(0,r.jsxs)(o.Z,{sx:{p:3},children:[(0,r.jsx)(l.Z,{variant:"overline",sx:{mb:3,display:"block",color:"text.secondary"},children:"Payment Method"}),(0,r.jsx)(a.Z,{spacing:2,direction:{xs:"column",md:"row"},children:n.map((function(e){return(0,r.jsxs)(d.Z,{sx:{p:3,width:1,position:"relative",border:function(e){return"solid 1px ".concat(e.palette.grey[50032])}},children:[(0,r.jsx)(j.Z,{alt:"icon",src:"master_card"===e.cardType?"https://minimal-assets-api.vercel.app/assets/icons/ic_mastercard.svg":"https://minimal-assets-api.vercel.app/assets/icons/ic_visa.svg",sx:{mb:1,maxWidth:36}}),(0,r.jsx)(l.Z,{variant:"subtitle2",children:e.cardNumber}),(0,r.jsx)(p.Z,{sx:{top:8,right:8,position:"absolute"},children:(0,r.jsx)(x.Z,{icon:"eva:more-vertical-fill",width:20,height:20})})]},e.id)}))}),(0,r.jsx)(c.Z,{sx:{mt:3},children:(0,r.jsx)(u.Z,{size:"small",startIcon:(0,r.jsx)(x.Z,{icon:"eva:plus-fill"}),onClick:i,children:"Add new card"})}),(0,r.jsx)(h.Z,{in:t,children:(0,r.jsx)(c.Z,{sx:{padding:3,marginTop:3,borderRadius:1,bgcolor:"background.neutral"},children:(0,r.jsxs)(a.Z,{spacing:3,children:[(0,r.jsx)(l.Z,{variant:"subtitle1",children:"Add new card"}),(0,r.jsxs)(a.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,r.jsx)(v.Z,{fullWidth:!0,label:"Name on card"}),(0,r.jsx)(v.Z,{fullWidth:!0,label:"Card number"})]}),(0,r.jsxs)(a.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,r.jsx)(v.Z,{fullWidth:!0,label:"Expiration date",placeholder:"MM/YY"}),(0,r.jsx)(v.Z,{fullWidth:!0,label:"Cvv"})]}),(0,r.jsxs)(a.Z,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[(0,r.jsx)(u.Z,{color:"inherit",variant:"outlined",onClick:s,children:"Cancel"}),(0,r.jsx)(f.Z,{type:"submit",variant:"contained",onClick:s,children:"Save Change"})]})]})})})]})}var y=t(50122),w=t(69127),Z=t(13162);function g(e){var n=e.invoices;return(0,r.jsxs)(a.Z,{spacing:3,alignItems:"flex-end",children:[(0,r.jsx)(l.Z,{variant:"subtitle1",sx:{width:1},children:"Invoice History"}),(0,r.jsx)(a.Z,{spacing:2,sx:{width:1},children:n.map((function(e){return(0,r.jsxs)(a.Z,{direction:"row",justifyContent:"space-between",sx:{width:1},children:[(0,r.jsx)(l.Z,{variant:"body2",sx:{minWidth:160},children:(0,w.Mu)(e.createdAt)}),(0,r.jsx)(l.Z,{variant:"body2",children:(0,Z.e_)(e.price)}),(0,r.jsx)(y.Z,{children:"PDF"})]},e.id)}))}),(0,r.jsx)(u.Z,{size:"small",endIcon:(0,r.jsx)(x.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"All invoices"})]})}function k(e){var n=e.cards,t=e.addressBook,d=e.invoices,x=(0,i.useState)(!1),p=x[0],h=x[1];return(0,r.jsxs)(s.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,md:8,children:(0,r.jsxs)(a.Z,{spacing:3,children:[(0,r.jsxs)(o.Z,{sx:{p:3},children:[(0,r.jsx)(l.Z,{variant:"overline",sx:{mb:3,display:"block",color:"text.secondary"},children:"Your Plan"}),(0,r.jsx)(l.Z,{variant:"h4",children:"Premium"}),(0,r.jsxs)(c.Z,{sx:{mt:{xs:2,sm:0},position:{sm:"absolute"},top:{sm:24},right:{sm:24}},children:[(0,r.jsx)(u.Z,{size:"small",color:"inherit",variant:"outlined",sx:{mr:1},children:"Cancel plan"}),(0,r.jsx)(u.Z,{size:"small",variant:"outlined",children:"Upgrade plan"})]})]}),(0,r.jsx)(b,{cards:n,isOpen:p,onOpen:function(){return h(!p)},onCancel:function(){return h(!1)}}),(0,r.jsx)(m,{addressBook:t})]})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,r.jsx)(g,{invoices:d})})]})}var P=t(34051),O=t.n(P),S=t(74231),C=t(73400),I=t(87536),N=t(95496),L=t(78470),A=t(26967),_=t(96787);function M(e,n,t,r,i,s,a){try{var o=e[s](a),l=o.value}catch(c){return void t(c)}o.done?n(l):Promise.resolve(l).then(r,i)}function D(){var e=(0,C.Ds)().enqueueSnackbar,n=(0,L.Z)().user,t=S.Ry().shape({displayName:S.Z_().required("Name is required")}),u={displayName:(null===n||void 0===n?void 0:n.displayName)||"",email:(null===n||void 0===n?void 0:n.email)||"",photoURL:(null===n||void 0===n?void 0:n.photoURL)||"",phoneNumber:(null===n||void 0===n?void 0:n.phoneNumber)||"",country:(null===n||void 0===n?void 0:n.country)||"",address:(null===n||void 0===n?void 0:n.address)||"",state:(null===n||void 0===n?void 0:n.state)||"",city:(null===n||void 0===n?void 0:n.city)||"",zipCode:(null===n||void 0===n?void 0:n.zipCode)||"",about:(null===n||void 0===n?void 0:n.about)||"",isPublic:(null===n||void 0===n?void 0:n.isPublic)||!1},d=(0,I.cI)({resolver:(0,N.X)(t),defaultValues:u}),x=d.setValue,m=d.handleSubmit,p=d.formState.isSubmitting,h=function(){var n,t=(n=O().mark((function n(t){return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})),function(){var e=this,t=arguments;return new Promise((function(r,i){var s=n.apply(e,t);function a(e){M(s,r,i,a,o,"next",e)}function o(e){M(s,r,i,a,o,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),v=(0,i.useCallback)((function(e){var n=e[0];n&&x("photoURL",Object.assign(n,{preview:URL.createObjectURL(n)}))}),[x]);return(0,r.jsx)(_.RV,{methods:d,onSubmit:m(h),children:(0,r.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(o.Z,{sx:{py:10,px:3,textAlign:"center"},children:[(0,r.jsx)(_.sX,{name:"photoURL",accept:"image/*",maxSize:3145728,onDrop:v,helperText:(0,r.jsxs)(l.Z,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",(0,r.jsx)("br",{})," max size of ",(0,Z.oe)(3145728)]})}),(0,r.jsx)(_._e,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}})]})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:8,children:(0,r.jsxs)(o.Z,{sx:{p:3},children:[(0,r.jsxs)(c.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,r.jsx)(_.au,{name:"displayName",label:"Name"}),(0,r.jsx)(_.au,{name:"email",label:"Email Address"}),(0,r.jsx)(_.au,{name:"phoneNumber",label:"Phone Number"}),(0,r.jsx)(_.au,{name:"address",label:"Address"}),(0,r.jsxs)(_.Cc,{name:"country",label:"Country",placeholder:"Country",children:[(0,r.jsx)("option",{value:""}),A.hW.map((function(e){return(0,r.jsx)("option",{value:e.label,children:e.label},e.code)}))]}),(0,r.jsx)(_.au,{name:"state",label:"State/Region"}),(0,r.jsx)(_.au,{name:"city",label:"City"}),(0,r.jsx)(_.au,{name:"zipCode",label:"Zip/Code"})]}),(0,r.jsxs)(a.Z,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[(0,r.jsx)(_.au,{name:"about",multiline:!0,rows:4,label:"About"}),(0,r.jsx)(f.Z,{type:"submit",variant:"contained",loading:p,children:"Save Changes"})]})]})})]})})}var R=t(87109);function z(e,n,t,r,i,s,a){try{var o=e[s](a),l=o.value}catch(c){return void t(c)}o.done?n(l):Promise.resolve(l).then(r,i)}var E=[{value:"facebookLink",icon:(0,r.jsx)(x.Z,{icon:"eva:facebook-fill",width:24,height:24})},{value:"instagramLink",icon:(0,r.jsx)(x.Z,{icon:"ant-design:instagram-filled",width:24,height:24})},{value:"linkedinLink",icon:(0,r.jsx)(x.Z,{icon:"eva:linkedin-fill",width:24,height:24})},{value:"twitterLink",icon:(0,r.jsx)(x.Z,{icon:"eva:twitter-fill",width:24,height:24})}];function U(e){var n=e.myProfile,t=(0,C.Ds)().enqueueSnackbar,i={facebookLink:n.facebookLink,instagramLink:n.instagramLink,linkedinLink:n.linkedinLink,twitterLink:n.twitterLink},s=(0,I.cI)({defaultValues:i}),l=s.handleSubmit,c=s.formState.isSubmitting,u=function(){var e,n=(e=O().mark((function e(n){return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:t("Update success!"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var n=this,t=arguments;return new Promise((function(r,i){var s=e.apply(n,t);function a(e){z(s,r,i,a,o,"next",e)}function o(e){z(s,r,i,a,o,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,r.jsx)(o.Z,{sx:{p:3},children:(0,r.jsx)(_.RV,{methods:s,onSubmit:l(u),children:(0,r.jsxs)(a.Z,{spacing:3,alignItems:"flex-end",children:[E.map((function(e){return(0,r.jsx)(_.au,{name:e.value,InputProps:{startAdornment:(0,r.jsx)(R.Z,{position:"start",children:e.icon})}},e.value)})),(0,r.jsx)(f.Z,{type:"submit",variant:"contained",loading:c,children:"Save Changes"})]})})})}function q(e,n,t,r,i,s,a){try{var o=e[s](a),l=o.value}catch(c){return void t(c)}o.done?n(l):Promise.resolve(l).then(r,i)}var B=[{value:"activityComments",label:"Email me when someone comments onmy article"},{value:"activityAnswers",label:"Email me when someone answers on my form"},{value:"activityFollows",label:"Email me hen someone follows me"}],W=[{value:"applicationNews",label:"News and announcements"},{value:"applicationProduct",label:"Weekly product updates"},{value:"applicationBlog",label:"Weekly blog digest"}],V=!0,T=!0,X=!1,H=!0,Y=!1,F=!1;function G(){var e=(0,C.Ds)().enqueueSnackbar,n={activityComments:V,activityAnswers:T,activityFollows:X,applicationNews:H,applicationProduct:Y,applicationBlog:F},t=(0,I.cI)({defaultValues:n}),i=t.handleSubmit,s=t.formState.isSubmitting,c=function(){var n,t=(n=O().mark((function n(t){return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})),function(){var e=this,t=arguments;return new Promise((function(r,i){var s=n.apply(e,t);function a(e){q(s,r,i,a,o,"next",e)}function o(e){q(s,r,i,a,o,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,r.jsx)(o.Z,{sx:{p:3},children:(0,r.jsx)(_.RV,{methods:t,onSubmit:i(c),children:(0,r.jsxs)(a.Z,{spacing:3,alignItems:"flex-end",children:[(0,r.jsxs)(a.Z,{spacing:2,sx:{width:1},children:[(0,r.jsx)(l.Z,{variant:"overline",sx:{color:"text.secondary"},children:"Activity"}),(0,r.jsx)(a.Z,{spacing:1,children:B.map((function(e){return(0,r.jsx)(_._e,{name:e.value,label:e.label,sx:{m:0}},e.value)}))})]}),(0,r.jsxs)(a.Z,{spacing:2,sx:{width:1},children:[(0,r.jsx)(l.Z,{variant:"overline",sx:{color:"text.secondary"},children:"Application"}),(0,r.jsx)(a.Z,{spacing:1,children:W.map((function(e){return(0,r.jsx)(_._e,{name:e.value,label:e.label,sx:{m:0}},e.value)}))})]}),(0,r.jsx)(f.Z,{type:"submit",variant:"contained",loading:s,children:"Save Changes"})]})})})}function J(e,n,t,r,i,s,a){try{var o=e[s](a),l=o.value}catch(c){return void t(c)}o.done?n(l):Promise.resolve(l).then(r,i)}function K(){var e=(0,C.Ds)().enqueueSnackbar,n=S.Ry().shape({oldPassword:S.Z_().required("Old Password is required"),newPassword:S.Z_().min(6,"Password must be at least 6 characters").required("New Password is required"),confirmNewPassword:S.Z_().oneOf([S.iH("newPassword"),null],"Passwords must match")}),t=(0,I.cI)({resolver:(0,N.X)(n),defaultValues:{oldPassword:"",newPassword:"",confirmNewPassword:""}}),i=t.reset,s=t.handleSubmit,l=t.formState.isSubmitting,c=function(){var n,t=(n=O().mark((function n(t){return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:i(),e("Update success!"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})),function(){var e=this,t=arguments;return new Promise((function(r,i){var s=n.apply(e,t);function a(e){J(s,r,i,a,o,"next",e)}function o(e){J(s,r,i,a,o,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,r.jsx)(o.Z,{sx:{p:3},children:(0,r.jsx)(_.RV,{methods:t,onSubmit:s(c),children:(0,r.jsxs)(a.Z,{spacing:3,alignItems:"flex-end",children:[(0,r.jsx)(_.au,{name:"oldPassword",type:"password",label:"Old Password"}),(0,r.jsx)(_.au,{name:"newPassword",type:"password",label:"New Password"}),(0,r.jsx)(_.au,{name:"confirmNewPassword",type:"password",label:"Confirm New Password"}),(0,r.jsx)(f.Z,{type:"submit",variant:"contained",loading:l,children:"Save Changes"})]})})})}},69127:function(e,n,t){t.d(n,{Mu:function(){return a},zM:function(){return o},IO:function(){return l},Pp:function(){return c},DY:function(){return u}});var r=t(32912),i=t(28789),s=t(73015);function a(e){return(0,r.Z)(new Date(e),"dd MMMM yyyy")}function o(e){return(0,r.Z)(new Date(e),"dd MMM yyyy p")}function l(e){return(0,i.Z)(new Date(e))}function c(e){return(0,r.Z)(new Date(e),"dd/MM/yyyy hh:mm p")}function u(e){return(0,s.Z)(new Date(e),{addSuffix:!0})}}}]);