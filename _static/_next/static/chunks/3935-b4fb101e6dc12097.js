"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3935],{82268:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(52149);function o(e){return(0,r.Z)({},e)}},73015:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(49474),o=n(62337),i=n(11699),a=n(35077),l=n(19013),c=n(82268),s=n(24262),u=n(13882),d=1440,f=43200;function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,u.Z)(2,arguments);var p=n.locale||a.Z;if(!p.formatDistance)throw new RangeError("locale must contain formatDistance property");var h=(0,r.Z)(e,t);if(isNaN(h))throw new RangeError("Invalid time value");var m,x,b=(0,c.Z)(n);b.addSuffix=Boolean(n.addSuffix),b.comparison=h,h>0?(m=(0,l.Z)(t),x=(0,l.Z)(e)):(m=(0,l.Z)(e),x=(0,l.Z)(t));var g,y=(0,i.Z)(x,m),j=((0,s.Z)(x)-(0,s.Z)(m))/1e3,v=Math.round((y-j)/60);if(v<2)return n.includeSeconds?y<5?p.formatDistance("lessThanXSeconds",5,b):y<10?p.formatDistance("lessThanXSeconds",10,b):y<20?p.formatDistance("lessThanXSeconds",20,b):y<40?p.formatDistance("halfAMinute",null,b):y<60?p.formatDistance("lessThanXMinutes",1,b):p.formatDistance("xMinutes",1,b):0===v?p.formatDistance("lessThanXMinutes",1,b):p.formatDistance("xMinutes",v,b);if(v<45)return p.formatDistance("xMinutes",v,b);if(v<90)return p.formatDistance("aboutXHours",1,b);if(v<d){var Z=Math.round(v/60);return p.formatDistance("aboutXHours",Z,b)}if(v<2520)return p.formatDistance("xDays",1,b);if(v<f){var w=Math.round(v/d);return p.formatDistance("xDays",w,b)}if(v<86400)return g=Math.round(v/f),p.formatDistance("aboutXMonths",g,b);if((g=(0,o.Z)(x,m))<12){var O=Math.round(v/f);return p.formatDistance("xMonths",O,b)}var S=g%12,k=Math.floor(g/12);return S<3?p.formatDistance("aboutXYears",k,b):S<9?p.formatDistance("overXYears",k,b):p.formatDistance("almostXYears",k+1,b)}function h(e,t){return(0,u.Z)(1,arguments),p(e,Date.now(),t)}},28789:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(19013),o=n(13882);function i(e){(0,o.Z)(1,arguments);var t=(0,r.Z)(e),n=t.getTime();return n}},66099:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(85893),o=n(11496),i=n(99226),a=n(15861),l=n(97349);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=(0,o.ZP)(i.Z)((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function d(e){var t=e.title,n=e.description,o=e.img,i=s(e,["title","description","img"]);return(0,r.jsxs)(u,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},i,{children:[(0,r.jsx)(l.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:o||"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,r.jsx)(a.Z,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,r.jsx)(a.Z,{variant:"body2",sx:{color:"text.secondary"},children:n})]}))}},86008:function(e,t,n){var r=n(11496),o=n(50135);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}var l=(0,r.ZP)(o.Z,{shouldForwardProp:function(e){return"stretchStart"!==e}})((function(e){var t=e.stretchStart,n=e.theme;return{"& .MuiOutlinedInput-root":a({transition:n.transitions.create(["box-shadow","width"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:n.customShadows.z12}},t&&{width:t,"&.Mui-focused":i({boxShadow:n.customShadows.z12},n.breakpoints.up("sm"),{width:t+60})}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(n.palette.grey[50032]," !important")}}}));t.Z=l},4930:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(85893),o=n(11496),i=n(41796),a=n(2734);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}var s=(0,o.ZP)("span")((function(e){var t,n=e.theme,r=e.ownerState,o="light"===n.palette.mode,a=r.color,l=r.variant;return c({height:22,minWidth:22,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",padding:n.spacing(0,1),color:n.palette.grey[800],fontSize:n.typography.pxToRem(12),fontFamily:n.typography.fontFamily,backgroundColor:n.palette.grey[300],fontWeight:n.typography.fontWeightBold},"default"!==a?c({},"filled"===l&&c({},(t=a,{color:n.palette[t].contrastText,backgroundColor:n.palette[t].main})),"outlined"===l&&c({},function(e){return{color:n.palette[e].main,backgroundColor:"transparent",border:"1px solid ".concat(n.palette[e].main)}}(a)),"ghost"===l&&c({},function(e){return{color:n.palette[e][o?"dark":"light"],backgroundColor:(0,i.Fq)(n.palette[e].main,.16)}}(a))):c({},"outlined"===l&&{backgroundColor:"transparent",color:n.palette.text.primary,border:"1px solid ".concat(n.palette.grey[50032])},"ghost"===l&&{color:o?n.palette.text.secondary:n.palette.common.white,backgroundColor:n.palette.grey[50016]}))}));function u(e){var t=e.color,n=void 0===t?"default":t,o=e.variant,i=void 0===o?"ghost":o,l=e.children,c=e.sx,u=(0,a.Z)();return(0,r.jsx)(s,{ownerState:{color:n,variant:i},sx:c,theme:u,children:l})}},59639:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(85893),o=n(67849),i=n(34768),a=n(41664),l=n(11496),c=n(15861),s=n(67720),u=n(50122),d=n(97349);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}var m=(0,l.ZP)("div")((function(e){var t,n=e.theme,r="light"===n.palette.mode;return{"& ul, & ol":h({},n.typography.body1,{paddingLeft:n.spacing(5),"& li":{lineHeight:2}}),"& blockquote":(t={lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:n.spacing(3,3,3,8),borderRadius:2*Number(n.shape.borderRadius),backgroundColor:n.palette.background.neutral,color:"".concat(n.palette.text.secondary," !important")},f(t,n.breakpoints.up("md"),{width:"80%"}),f(t,"& p, & span",{marginBottom:"0 !important",fontSize:"inherit !important",fontFamily:"Georgia, serif !important",color:"".concat(n.palette.text.secondary," !important")}),f(t,"&:before",{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:n.palette.text.disabled}),t),"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:n.spacing(2),color:n.palette.common.white,borderRadius:n.shape.borderRadius,backgroundColor:r?n.palette.grey[900]:n.palette.grey[50016]},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:n.spacing(.2,.5),color:n.palette.warning[r?"darker":"lighter"],backgroundColor:n.palette.warning[r?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}}}}));function x(e){var t=p({},e);return(0,r.jsx)(m,{children:(0,r.jsx)(o.D,h({rehypePlugins:[i.Z],components:b},t))})}var b={h1:function(e){var t=p({},e);return(0,r.jsx)(c.Z,h({variant:"h1"},t))},h2:function(e){var t=p({},e);return(0,r.jsx)(c.Z,h({variant:"h2"},t))},h3:function(e){var t=p({},e);return(0,r.jsx)(c.Z,h({variant:"h3"},t))},h4:function(e){var t=p({},e);return(0,r.jsx)(c.Z,h({variant:"h4"},t))},h5:function(e){var t=p({},e);return(0,r.jsx)(c.Z,h({variant:"h5"},t))},h6:function(e){var t=p({},e);return(0,r.jsx)(c.Z,h({variant:"h6"},t))},hr:function(e){var t=p({},e);return(0,r.jsx)(s.Z,h({sx:{my:3}},t))},img:function(e){var t=p({},e);return(0,r.jsx)(d.Z,h({alt:t.alt,ratio:"16/9",sx:{borderRadius:2,my:5}},t))},a:function(e){var t=p({},e);return t.href.includes("http")?(0,r.jsx)(u.Z,h({target:"_blank",rel:"noopener"},t)):(0,r.jsx)(a.default,{href:t.href,passHref:!0,children:(0,r.jsx)(u.Z,h({},t,{children:t.children}))})}}},63935:function(e,t,n){n.d(t,{BD:function(){return v},HU:function(){return K},c9:function(){return we},Xu:function(){return Be}});var r=n(85893),o=n(67294),i=n(11496),a=n(79332),l=n(78385),c=n(77227),s=n(99226),u=n(15861),d=n(93946),f=n(67720),p=n(11057),h=n(10653),m=n(3140),x=n(1225);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){b(e,t,n[t])}))}return e}var y=(0,i.ZP)("div")((function(e){var t=e.theme;return{right:0,bottom:0,zIndex:1999,minHeight:440,outline:"none",display:"flex",position:"fixed",overflow:"hidden",flexDirection:"column",margin:t.spacing(3),boxShadow:t.customShadows.z20,borderRadius:2*Number(t.shape.borderRadius),backgroundColor:t.palette.background.paper}})),j=(0,i.ZP)(a.Z)((function(e){var t=e.theme;return{padding:t.spacing(.5,3),borderBottom:"solid 1px ".concat(t.palette.divider)}}));function v(e){var t=e.isOpenCompose,n=e.onCloseCompose,i=(0,o.useState)(!1),a=i[0],b=i[1],v=(0,o.useState)(""),Z=v[0],w=v[1],O=(0,h.Z)("up","sm");return t?(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{open:a||!O,sx:{zIndex:1998}}),(0,r.jsxs)(y,{sx:g({},a&&{top:0,left:0,zIndex:1999,margin:"auto",width:{xs:"calc(100% - 24px)",md:"calc(100% - 80px)"},height:{xs:"calc(100% - 24px)",md:"calc(100% - 80px)"}}),children:[(0,r.jsxs)(s.Z,{sx:{pl:3,pr:1,height:60,display:"flex",alignItems:"center"},children:[(0,r.jsx)(u.Z,{variant:"h6",children:"New Message"}),(0,r.jsx)(s.Z,{sx:{flexGrow:1}}),(0,r.jsx)(d.Z,{onClick:a?function(){b(!1)}:function(){b(!0)},children:(0,r.jsx)(m.Z,{icon:a?"eva:collapse-fill":"eva:expand-fill",width:20,height:20})}),(0,r.jsx)(d.Z,{onClick:function(){n(),b(!1)},children:(0,r.jsx)(m.Z,{icon:"eva:close-fill",width:20,height:20})})]}),(0,r.jsx)(f.Z,{}),(0,r.jsx)(j,{disableUnderline:!0,placeholder:"To"}),(0,r.jsx)(j,{disableUnderline:!0,placeholder:"Subject"}),(0,r.jsx)(x.Z,{simple:!0,id:"compose-mail",value:Z,onChange:function(e){w(e)},placeholder:"Type a message",sx:{borderColor:"transparent",flexGrow:1}}),(0,r.jsx)(f.Z,{}),(0,r.jsxs)(s.Z,{sx:{py:2,px:3,display:"flex",alignItems:"center"},children:[(0,r.jsx)(p.Z,{variant:"contained",children:"Send"}),(0,r.jsx)(d.Z,{size:"small",sx:{ml:2,mr:1},children:(0,r.jsx)(m.Z,{icon:"ic:round-add-photo-alternate",width:24,height:24})}),(0,r.jsx)(d.Z,{size:"small",children:(0,r.jsx)(m.Z,{icon:"eva:attach-2-fill",width:24,height:24})})]})]})]}):null}var Z=n(11163),w=n(23008),O=n(64231),S=n(59639),k=n(50946),P=n(34386),D=n(50122),I=n(96259),C=n(74219),M=n(69127),A=n(23323);function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var W=(0,i.ZP)("div")((function(e){return{height:84,flexShrink:0,display:"flex",alignItems:"center",padding:e.theme.spacing(0,2),justifyContent:"space-between"}}));function T(e){var t=e.mail,n=R(e,["mail"]),o=(0,Z.useRouter)(),i=o.query,a=o.push,l=i.systemLabel,c=i.customLabel,f=(0,h.Z)("up","sm"),p=I.vB.mail.root;return(0,r.jsxs)(W,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){E(e,t,n[t])}))}return e}({},n,{children:[(0,r.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(P.Z,{title:"Back",children:(0,r.jsx)(d.Z,{onClick:function(){return a(l?"".concat(p,"/").concat(l):c?"".concat(p,"/label/").concat(c):"".concat(p,"/inbox"))},children:(0,r.jsx)(m.Z,{icon:"eva:arrow-ios-back-fill",width:20,height:20})})}),(0,r.jsx)(A.Z,{alt:t.from.name,src:t.from.avatar||"",color:(0,C.Z)(t.from.name).color,children:(0,C.Z)(t.from.name).name}),(0,r.jsxs)(s.Z,{sx:{ml:2},children:[(0,r.jsx)(u.Z,{display:"inline",variant:"subtitle2",children:t.from.name}),(0,r.jsxs)(D.Z,{variant:"caption",sx:{color:"text.secondary"},children:["\xa0 ","<".concat(t.from.email,">")]}),(0,r.jsxs)(u.Z,{variant:"caption",sx:{color:"text.secondary",display:"block"},children:["To:\xa0",t.to.map((function(e){return(0,r.jsx)(D.Z,{color:"inherit",children:e.email},e.email)}))]})]})]}),(0,r.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[f&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{variant:"caption",sx:{color:"text.secondary"},children:(0,M.Pp)(t.createdAt)}),(0,r.jsx)(P.Z,{title:"Reply",children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(m.Z,{icon:"ic:round-reply",width:20,height:20})})})]}),(0,r.jsx)(P.Z,{title:"More options",children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(m.Z,{icon:"eva:more-vertical-fill",width:20,height:20})})})]})]}))}var z=n(50135);function B(){var e=(0,o.useRef)(null),t=(0,o.useState)(""),n=t[0],i=t[1],a=function(){var t;null===(t=e.current)||void 0===t||t.click()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z.Z,{fullWidth:!0,multiline:!0,minRows:2,maxRows:8,value:n,placeholder:"Type a message",onChange:function(e){i(e.target.value)},sx:{"& fieldset":{border:"none !important"}}}),(0,r.jsxs)(s.Z,{sx:{mr:3,mb:3,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:[(0,r.jsx)(d.Z,{size:"small",onClick:a,children:(0,r.jsx)(m.Z,{icon:"ic:round-add-photo-alternate",width:24,height:24})}),(0,r.jsx)(d.Z,{size:"small",onClick:a,sx:{ml:1,mr:2},children:(0,r.jsx)(m.Z,{icon:"eva:attach-2-fill",width:24,height:24})}),(0,r.jsx)(p.Z,{variant:"contained",children:"Send"})]}),(0,r.jsx)("input",{type:"file",ref:e,style:{display:"none"}})]})}var _=n(41796),F=n(20727),H=n(40655);function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=(0,i.ZP)("div")((function(e){var t=e.theme;return{padding:t.spacing(2),borderTop:"solid 1px ".concat(t.palette.divider),backgroundColor:t.palette.background.neutral}})),X=(0,i.ZP)("div")((function(e){var t=e.theme;return{width:48,height:48,display:"flex",cursor:"pointer",overflow:"hidden",position:"relative",alignItems:"center",justifyContent:"center",color:t.palette.text.disabled,border:"solid 1px ".concat(t.palette.divider),backgroundColor:t.palette.background.paper,borderRadius:1.5*Number(t.shape.borderRadius)}})),G=(0,i.ZP)("div")((function(e){var t=e.theme;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){U(e,t,n[t])}))}return e}({},(0,F.Z)().bgBlur({color:t.palette.grey[900],opacity:.64}),{opacity:0,width:"100%",height:"100%",display:"flex",position:"absolute",alignItems:"center",justifyContent:"center",borderRadius:1.5*Number(t.shape.borderRadius),transition:t.transitions.create("opacity"),"&:hover":{opacity:1},"& svg":{transition:t.transitions.create("color"),color:(0,_.Fq)(t.palette.common.white,.64),"&:hover":{color:t.palette.common.white}}})}));function q(e){var t=e.mail;return(0,r.jsx)(N,{children:(0,r.jsx)(k.Z,{children:(0,r.jsx)(s.Z,{sx:{display:"flex"},children:t.files.map((function(e){return(0,r.jsx)(L,{fileUrl:e},e)}))})})})}function L(e){var t=e.fileUrl;return(0,r.jsxs)(s.Z,{sx:{mx:.75},children:[(0,r.jsxs)(X,{children:[(0,H.PF)(t),(0,r.jsx)(G,{children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(m.Z,{icon:"eva:arrow-circle-down-fill"})})})]}),(0,r.jsxs)(s.Z,{sx:{mt:.5,maxWidth:56,display:"flex",justifyContent:"center"},children:[(0,r.jsx)(u.Z,{noWrap:!0,variant:"caption",children:(0,H.UO)(t)}),(0,r.jsxs)(u.Z,{variant:"caption",children:[".",(0,H.JB)(t)]})]})]},t)}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Y(e,t,n[t])}))}return e}var J=(0,i.ZP)("div")({flexGrow:1,display:"flex",flexDirection:"column"}),V=(0,i.ZP)("div")((function(e){var t=e.theme;return{"& > p":$({},t.typography.body1,{marginBottom:t.spacing(2)})}}));function K(){var e=(0,Z.useRouter)().query.mailId,t=void 0===e?"":e,n=(0,w.I0)(),i=(0,w.v9)((function(e){return e.mail.mails.byId["".concat(t)]})),a=i&&i.files.length>0;return(0,o.useEffect)((function(){n((0,O.ci)("".concat(t)))}),[n,t]),i?(0,r.jsxs)(J,{children:[(0,r.jsx)(T,{mail:i}),(0,r.jsx)(f.Z,{}),(0,r.jsx)(k.Z,{sx:{flexGrow:1},children:(0,r.jsxs)(s.Z,{sx:{p:{xs:3,md:5}},children:[(0,r.jsx)(u.Z,{variant:"h3",gutterBottom:!0,children:i.subject}),(0,r.jsx)(V,{children:(0,r.jsx)(S.Z,{children:i.message})})]})}),a&&(0,r.jsx)(q,{mail:i}),(0,r.jsx)(f.Z,{}),(0,r.jsx)(B,{})]}):null}var Q=n(66099),ee=n(41664),te=n(69368),ne=n(4930);function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ie=(0,i.ZP)("div")((function(e){var t=e.theme;return{height:40,zIndex:99,opacity:0,margin:"auto",display:"flex",position:"absolute",alignItems:"center",top:t.spacing(1),right:t.spacing(1),bottom:t.spacing(1),justifyContent:"center",padding:t.spacing(0,.75),boxShadow:t.customShadows.z12,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper,transition:t.transitions.create("opacity")}}));function ae(e){var t=e.handleArchive,n=e.handleDelete,o=e.handleMarkRead,i=e.handleHidden,a=oe(e,["handleArchive","handleDelete","handleMarkRead","handleHidden"]),l=[{name:"Archive",icon:"eva:archive-fill",action:t},{name:"Delete",icon:"eva:trash-2-outline",action:n},{name:"Mark Email Read",icon:"ic:round-mark-email-read",action:o},{name:"Hidden Email",icon:"eva:eye-off-fill",action:i}];return(0,r.jsx)(ie,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){re(e,t,n[t])}))}return e}({},a,{children:l.map((function(e){return(0,r.jsx)(P.Z,{title:e.name,children:(0,r.jsx)(d.Z,{size:"small",onClick:e.action,sx:{mx:.75,"&:hover":{color:"text.primary"}},children:(0,r.jsx)(m.Z,{icon:e.icon,width:24,height:24})})},e.name)}))}))}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){le(e,t,n[t])}))}return e}function se(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ue=(0,i.ZP)("div")((function(e){var t,n=e.theme;return le(t={position:"relative",padding:n.spacing(0,2),color:n.palette.text.secondary,backgroundColor:n.palette.background.neutral,borderBottom:"1px solid ".concat(n.palette.divider)},n.breakpoints.up("md"),{display:"flex",alignItems:"center"}),le(t,"&:hover",{zIndex:999,position:"relative",boxShadow:n.customShadows.z24,"& .showActions":{opacity:1}}),t})),de=(0,i.ZP)(D.Z)((function(e){var t=e.theme;return{minWidth:0,display:"flex",padding:t.spacing(2,0),transition:t.transitions.create("padding")}})),fe=function(e,t){var n=e.systemLabel,r=e.customLabel,o=I.vB.mail.root;return n?"".concat(o,"/").concat(n,"/").concat(t):r?"".concat(o,"/label/").concat(r,"/").concat(t):o};function pe(e){var t=e.mail,n=e.isDense,o=e.isSelected,i=e.onSelect,a=e.onDeselect,l=se(e,["mail","isDense","isSelected","onSelect","onDeselect"]),c=(0,Z.useRouter)().query,d=(0,w.v9)((function(e){return e.mail})).labels,f=(0,h.Z)("up","md"),p=t.files.length>0;return(0,r.jsxs)(ue,ce({sx:ce({},!t.isUnread&&{color:"text.primary",backgroundColor:"background.paper"},o&&{bgcolor:"action.selected"})},l,{children:[f&&(0,r.jsxs)(s.Z,{sx:{mr:2,display:"flex"},children:[(0,r.jsx)(te.Z,{checked:o,onChange:function(e){return e.target.checked?i():a()}}),(0,r.jsx)(P.Z,{title:"Starred",children:(0,r.jsx)(te.Z,{color:"warning",defaultChecked:t.isStarred,icon:(0,r.jsx)(m.Z,{icon:"eva:star-outline"}),checkedIcon:(0,r.jsx)(m.Z,{icon:"eva:star-fill"})})}),(0,r.jsx)(P.Z,{title:"Important",children:(0,r.jsx)(te.Z,{color:"warning",defaultChecked:t.isImportant,checkedIcon:(0,r.jsx)(m.Z,{icon:"ic:round-label-important"}),icon:(0,r.jsx)(m.Z,{icon:"ic:round-label-important"})})})]}),(0,r.jsx)(ee.default,{href:fe(c,t.id),passHref:!0,children:(0,r.jsxs)(de,{color:"inherit",underline:"none",sx:ce({},n&&{py:1}),children:[(0,r.jsx)(A.Z,{alt:t.from.name,src:t.from.avatar||"",color:(0,C.Z)(t.from.name).color,sx:{width:32,height:32},children:(0,C.Z)(t.from.name).name}),(0,r.jsxs)(s.Z,{sx:{ml:2,minWidth:0,alignItems:"center",display:{md:"flex"}},children:[(0,r.jsx)(u.Z,{variant:"body2",noWrap:!0,sx:ce({pr:2,minWidth:200},!t.isUnread&&{fontWeight:"fontWeightBold"}),children:t.from.name}),(0,r.jsxs)(u.Z,{noWrap:!0,variant:"body2",sx:{pr:2},children:[(0,r.jsx)(s.Z,{component:"span",sx:ce({},!t.isUnread&&{fontWeight:"fontWeightBold"}),children:t.subject}),"\xa0-\xa0",(0,r.jsx)(s.Z,{component:"span",sx:ce({},!t.isUnread&&{color:"text.secondary"}),children:t.message})]}),f&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{sx:{display:"flex"},children:t.labelIds.map((function(e){var t=d.find((function(t){return t.id===e}));return t?(0,r.jsx)(ne.Z,{sx:{mx:.5,textTransform:"capitalize",bgcolor:t.color,color:function(e){return e.palette.getContrastText(t.color||"")}},children:t.name},t.id):null}))}),p&&(0,r.jsx)(m.Z,{icon:"eva:link-fill",sx:{mx:2,width:20,height:20,flexShrink:0}})]}),(0,r.jsx)(u.Z,{variant:"caption",sx:ce({flexShrink:0,minWidth:120,textAlign:"right"},!t.isUnread&&{fontWeight:"fontWeightBold"}),children:(0,M.Mu)(t.createdAt)})]})]})}),(0,r.jsx)(ae,{className:"showActions"})]}))}var he=n(87109),me=n(86008);function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ge=(0,i.ZP)("div")((function(e){return{height:84,flexShrink:0,display:"flex",alignItems:"center",padding:e.theme.spacing(0,2)}}));function ye(e){var t=e.mails,n=e.selectedMails,o=e.onOpenSidebar,i=e.onToggleDense,a=e.onSelectAll,l=e.onDeselectAll,c=be(e,["mails","selectedMails","onOpenSidebar","onToggleDense","onSelectAll","onDeselectAll"]),f=(0,h.Z)("up","sm"),p=(0,h.Z)("up","md"),x=n===t&&t>0,b=n>0&&n<t;return(0,r.jsxs)(ge,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){xe(e,t,n[t])}))}return e}({},c,{children:[!p&&(0,r.jsx)(d.Z,{onClick:o,children:(0,r.jsx)(m.Z,{icon:"eva:menu-fill"})}),f&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(te.Z,{checked:x,indeterminate:b,onChange:function(e){return e.target.checked?a():l()}}),(0,r.jsx)(P.Z,{title:"Refresh",children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(m.Z,{icon:"eva:refresh-fill",width:20,height:20})})}),(0,r.jsx)(P.Z,{title:"Dense",children:(0,r.jsx)(d.Z,{onClick:i,children:(0,r.jsx)(m.Z,{icon:"eva:collapse-fill",width:20,height:20})})}),(0,r.jsx)(P.Z,{title:"More",children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(m.Z,{icon:"eva:more-vertical-fill",width:20,height:20})})})]}),(0,r.jsx)(s.Z,{sx:{flexGrow:1}}),(0,r.jsx)(me.Z,{stretchStart:180,size:"small",placeholder:"Search mail\u2026",InputProps:{startAdornment:(0,r.jsx)(he.Z,{position:"start",children:(0,r.jsx)(m.Z,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}}),f&&(0,r.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",flexShrink:0},children:[(0,r.jsxs)(u.Z,{variant:"body2",sx:{mx:2,color:"text.secondary"},children:["1 - ",t," of ",t]}),(0,r.jsx)(P.Z,{title:"Next page",children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(m.Z,{icon:"eva:arrow-ios-back-fill",width:20,height:20})})}),(0,r.jsx)(P.Z,{title:"Previous page",children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(m.Z,{icon:"eva:arrow-ios-forward-fill",width:20,height:20})})})]})]}))}function je(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ve(e){return function(e){if(Array.isArray(e))return je(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return je(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return je(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ze=(0,i.ZP)("div")({flexGrow:1,display:"flex",overflow:"hidden",flexDirection:"column"});function we(e){var t=e.onOpenSidebar,n=(0,Z.useRouter)().query,i=(0,w.I0)(),a=(0,w.v9)((function(e){return e.mail})).mails,l=(0,o.useState)([]),c=l[0],u=l[1],d=(0,o.useState)(!1),p=d[0],h=d[1],m=a.allIds.length<1;(0,o.useEffect)((function(){i((0,O.Y9)(n))}),[i,n]);return(0,r.jsxs)(Ze,{children:[(0,r.jsx)(ye,{mails:a.allIds.length,selectedMails:c.length,onSelectAll:function(){u(a.allIds.map((function(e){return e})))},onOpenSidebar:t,onDeselectAll:function(){u([])},onToggleDense:function(){h((function(e){return!e}))}}),(0,r.jsx)(f.Z,{}),m?(0,r.jsx)(Q.Z,{title:"There is no conversation",img:"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_empty_mail.svg",sx:{flexGrow:1,height:"auto"}}):(0,r.jsx)(k.Z,{children:(0,r.jsx)(s.Z,{sx:{minWidth:{md:800}},children:a.allIds.map((function(e){return(0,r.jsx)(pe,{isDense:p,mail:a.byId[e],isSelected:c.includes(e),onSelect:function(){return function(e){u((function(t){return t.includes(e)?t:ve(t).concat([e])}))}(e)},onDeselect:function(){return function(e){u((function(t){return t.filter((function(t){return t!==e}))}))}(e)}},e)}))})})]})}var Oe=n(78462),Se=n(58826),ke=n(86704),Pe=n(96339),De=n(98619),Ie=n(59334);function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ce(e,t,n[t])}))}return e}function Ae(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Ee={all:"eva:email-fill",inbox:"eva:inbox-fill",trash:"eva:trash-2-outline",drafts:"eva:file-fill",spam:"ic:round-report",sent:"ic:round-send",starred:"eva:star-fill",important:"ic:round-label-important",id_social:"eva:share-fill",id_promotions:"ic:round-label",id_forums:"ic:round-forum"},Re=function(e){var t=I.vB.mail.root;return"system"===e.type?"".concat(t,"/").concat(e.id):"custom"===e.type?"".concat(t,"/label/").concat(e.name):t};function We(e){var t=e.label,n=Ae(e,["label"]),o=(0,Z.useRouter)().asPath===Re(t),i=t.unreadCount>0;return(0,r.jsx)(ee.default,{href:Re(t),children:(0,r.jsxs)(De.Z,Me({sx:Me({px:3,height:48,typography:"body2",color:"text.secondary",textTransform:"capitalize"},o&&{color:"text.primary",fontWeight:"fontWeightMedium",bgcolor:"action.selected"})},n,{children:[(0,r.jsx)(m.Z,{icon:Ee[t.id],sx:{mr:2,width:ke.Wm.NAVBAR_ITEM,height:ke.Wm.NAVBAR_ITEM,color:t.color}}),(0,r.jsx)(Ie.Z,{disableTypography:!0,primary:t.name}),i&&(0,r.jsx)(u.Z,{variant:"caption",children:t.unreadCount})]}))})}function Te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ze(e){return function(e){if(Array.isArray(e))return Te(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return Te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Te(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Be(e){var t=e.isOpenSidebar,n=e.onOpenCompose,i=e.onCloseSidebar,a=(0,Z.useRouter)().pathname,l=(0,w.v9)((function(e){return e.mail})).labels,c=(0,h.Z)("up","md"),u=!l.length;(0,o.useEffect)((function(){t&&i()}),[a]);var d=(0,r.jsxs)(k.Z,{children:[(0,r.jsx)(s.Z,{sx:{p:3},children:(0,r.jsx)(p.Z,{fullWidth:!0,variant:"contained",startIcon:(0,r.jsx)(m.Z,{icon:"eva:plus-fill"}),onClick:function(){i(),n()},children:"Compose"})}),(0,r.jsx)(f.Z,{}),(0,r.jsx)(Oe.Z,{disablePadding:!0,children:(u?ze(Array(8)):l).map((function(e,t){return e?(0,r.jsx)(We,{label:e},e.id):(0,r.jsx)(Pe.bB,{},t)}))})]});return(0,r.jsx)(r.Fragment,{children:c?(0,r.jsx)(Se.ZP,{variant:"permanent",PaperProps:{sx:{width:ke.Au.BASE_WIDTH,position:"relative"}},children:d}):(0,r.jsx)(Se.ZP,{open:t,onClose:i,ModalProps:{keepMounted:!0},PaperProps:{sx:{width:ke.Au.BASE_WIDTH}},children:d})})}},69127:function(e,t,n){n.d(t,{Mu:function(){return a},zM:function(){return l},IO:function(){return c},Pp:function(){return s},DY:function(){return u}});var r=n(32912),o=n(28789),i=n(73015);function a(e){return(0,r.Z)(new Date(e),"dd MMMM yyyy")}function l(e){return(0,r.Z)(new Date(e),"dd MMM yyyy p")}function c(e){return(0,o.Z)(new Date(e))}function s(e){return(0,r.Z)(new Date(e),"dd/MM/yyyy hh:mm p")}function u(e){return(0,i.Z)(new Date(e),{addSuffix:!0})}},40655:function(e,t,n){n.d(t,{JB:function(){return h},UO:function(){return m},lW:function(){return x},PF:function(){return g}});var r=n(85893),o=n(97349),i=n(3140),a=["jpg","jpeg","gif","bmp","png"],l=["m4v","avi","mpg","mp4","webm"],c=["doc","docx"],s=["xls","xlsx"],u=["ppt","pptx"],d=["pdf"],f=["psd"],p=["ai","esp"];function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e&&e.split(".").pop()||""}function m(e){return e.substring(e.lastIndexOf("/")+1).replace(/\.[^/.]+$/,"")}function x(e){return e.split("/").pop()}var b=function(e){return(0,r.jsx)(o.Z,{src:"https://minimal-assets-api.vercel.app/assets/icons/file/".concat(e,".svg"),alt:e,sx:{width:28,height:28}})};function g(e){var t;switch(function(e){var t;switch(e.includes(h(e))){case a.includes(h(e)):t="image";break;case l.includes(h(e)):t="video";break;case c.includes(h(e)):t="word";break;case s.includes(h(e)):t="excel";break;case u.includes(h(e)):t="powerpoint";break;case d.includes(h(e)):t="pdf";break;case f.includes(h(e)):t="photoshop";break;case p.includes(h(e)):t="illustrator";break;default:t=h(e)}return t}(e)){case"video":t=b("format_video");break;case"word":t=b("format_word");break;case"excel":t=b("format_excel");break;case"powerpoint":t=b("format_powerpoint");break;case"pdf":t=b("format_pdf");break;case"photoshop":t=b("format_photoshop");break;case"illustrator":t=b("format_ai");break;case"image":t=(0,r.jsx)(o.Z,{src:e,alt:e,sx:{height:1}});break;default:t=(0,r.jsx)(i.Z,{icon:"eva:file-fill",sx:{width:28,height:28}})}return t}}}]);