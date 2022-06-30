(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5543],{12963:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(87462),o=n(63366),a=n(67294),i=(n(59864),n(86010)),l=n(27192),s=n(11496),c=n(33616),u=n(15861),d=n(41796),p=n(82066),f=n(85893),h=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=n(49990);const x=(0,s.ZP)(m.Z)((({theme:e})=>(0,r.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,r.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,r.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),g=(0,s.ZP)(h)({width:24,height:16});var b=function(e){const t=e;return(0,f.jsx)("li",{children:(0,f.jsx)(x,(0,r.Z)({focusRipple:!0},e,{ownerState:t,children:(0,f.jsx)(g,{ownerState:t})}))})},y=n(28979);function v(e){return(0,y.Z)("MuiBreadcrumbs",e)}var j=(0,n(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const Z=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,s.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${j.li}`]:t.li},t.root]})({}),k=(0,s.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),O=(0,s.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function C(e,t,n,r){return e.reduce(((o,a,i)=>(i<e.length-1?o=o.concat(a,(0,f.jsx)(O,{"aria-hidden":!0,className:t,ownerState:r,children:n},`separator-${i}`)):o.push(a),o)),[])}var P=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:s,className:u,component:d="nav",expandText:p="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:m=1,maxItems:x=8,separator:g="/"}=n,y=(0,o.Z)(n,Z),[j,O]=a.useState(!1),P=(0,r.Z)({},n,{component:d,expanded:j,expandText:p,itemsAfterCollapse:h,itemsBeforeCollapse:m,maxItems:x,separator:g}),S=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},v,t)})(P),M=a.useRef(null),N=a.Children.toArray(s).filter((e=>a.isValidElement(e))).map(((e,t)=>(0,f.jsx)("li",{className:S.li,children:e},`child-${t}`)));return(0,f.jsx)(w,(0,r.Z)({ref:t,component:d,color:"text.secondary",className:(0,i.Z)(S.root,u),ownerState:P},y,{children:(0,f.jsx)(k,{className:S.ol,ref:M,ownerState:P,children:C(j||x&&N.length<=x?N:(e=>m+h>=e.length?e:[...e.slice(0,m),(0,f.jsx)(b,{"aria-label":p,onClick:()=>{O(!0);const e=M.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(N),S.separator,g,P)})}))}))},78445:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(63366),o=n(87462),a=n(67294),i=n(86010),l=n(27192),s=n(15861),c=n(33616),u=n(11496),d=n(28979);function p(e){return(0,d.Z)("MuiCardHeader",e)}var f=(0,n(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=n(85893);const m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,o.Z)({[`& .${f.title}`]:t.title,[`& .${f.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var v=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:u,className:d,component:f="div",disableTypography:v=!1,subheader:j,subheaderTypographyProps:Z,title:w,titleTypographyProps:k}=n,O=(0,r.Z)(n,m),C=(0,o.Z)({},n,{component:f,disableTypography:v}),P=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(C);let S=w;null==S||S.type===s.Z||v||(S=(0,h.jsx)(s.Z,(0,o.Z)({variant:u?"body2":"h5",className:P.title,component:"span",display:"block"},k,{children:S})));let M=j;return null==M||M.type===s.Z||v||(M=(0,h.jsx)(s.Z,(0,o.Z)({variant:u?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},Z,{children:M}))),(0,h.jsxs)(x,(0,o.Z)({className:(0,i.Z)(P.root,d),as:f,ref:t,ownerState:C},O,{children:[u&&(0,h.jsx)(g,{className:P.avatar,ownerState:C,children:u}),(0,h.jsxs)(y,{className:P.content,ownerState:C,children:[S,M]}),a&&(0,h.jsx)(b,{className:P.action,ownerState:C,children:a})]}))}))},54469:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/menu",function(){return n(78426)}])},22284:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(85893),o=n(41664),a=n(15861),i=n(12963),l=n(99226),s=n(50122);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e){var t=e.links,n=e.activeLast,o=void 0!==n&&n,s=u(e,["links","activeLast"]),d=t[t.length-1].name,f=t.map((function(e){return(0,r.jsx)(p,{link:e},e.name)})),h=t.map((function(e){return(0,r.jsx)("div",{children:e.name!==d?(0,r.jsx)(p,{link:e}):(0,r.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:d})},e.name)}));return(0,r.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({separator:(0,r.jsx)(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},s,{children:o?f:h}))}function p(e){var t=e.link,n=t.href,a=void 0===n?"":n,i=t.name,c=t.icon;return(0,r.jsx)(o.default,{href:a,passHref:!0,children:(0,r.jsxs)(s.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,r.jsx)(l.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),i]},i)})}},72728:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(85893),o=n(47037),a=n.n(o),i=n(99226),l=n(15861),s=n(50122),c=n(22284);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e){var t=e.links,n=e.action,o=e.heading,u=e.moreLink,f=void 0===u?[]:u,h=e.sx,m=p(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(i.Z,{sx:d({mb:5},h),children:[(0,r.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,r.jsx)(c.Z,d({links:t},m))]}),n&&(0,r.jsx)(i.Z,{sx:{flexShrink:0},children:n})]}),(0,r.jsx)(i.Z,{sx:{mt:2},children:a()(f)?(0,r.jsx)(s.Z,{href:f,target:"_blank",variant:"body2",children:f}):f.map((function(e){return(0,r.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},78426:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(85893),o=n(67294),a=n(11496),i=n(99226),l=n(27948),s=n(11057),c=n(25464),u=n(18972),d=n(78462),p=n(98619),f=n(59334),h=n(93946),m=n(96259),x=n(64156),g=n(61582),b=n(3140),y=n(72728),v=n(56691),j=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"],Z=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],w={display:"flex",alignItems:"center",justifyContent:"center"},k=(0,a.ZP)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function O(){var e=(0,o.useState)(1),t=e[0],n=e[1],a=(0,o.useState)(null),x=a[0],O=a[1],C=(0,o.useState)(null),P=C[0],S=C[1],M=(0,o.useState)(null),N=M[0],R=M[1],T=function(){O(null)},_=function(){R(null)};return(0,r.jsx)(g.Z,{title:"Components: Menu",children:(0,r.jsxs)(k,{children:[(0,r.jsx)(i.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(y.Z,{heading:"Menu",links:[{name:"Components",href:m.ko.components},{name:"Menu"}],moreLink:"https://mui.com/components/menus"})})}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(i.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"}},children:[(0,r.jsxs)(v.g,{title:"Simple",sx:w,children:[(0,r.jsx)(s.Z,{variant:"outlined",onClick:function(e){O(e.currentTarget)},children:"Open Menu"}),(0,r.jsx)(c.Z,{keepMounted:!0,id:"simple-menu",anchorEl:x,onClose:T,open:Boolean(x),children:["Profile","My account","Logout"].map((function(e){return(0,r.jsx)(u.Z,{onClick:T,children:e},e)}))})]}),(0,r.jsxs)(v.g,{title:"Selected",sx:w,children:[(0,r.jsx)(d.Z,{component:"nav","aria-label":"Device settings",children:(0,r.jsx)(p.Z,{"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:function(e){S(e.currentTarget)},children:(0,r.jsx)(f.Z,{primary:"When device is locked",secondary:j[t]})})}),(0,r.jsx)(c.Z,{keepMounted:!0,id:"lock-menu",anchorEl:P,onClose:T,open:Boolean(P),children:j.map((function(e,o){return(0,r.jsx)(u.Z,{disabled:0===o,selected:o===t,onClick:function(e){return function(e,t){n(t),S(null)}(0,o)},children:e},e)}))})]}),(0,r.jsxs)(v.g,{title:"Max height",sx:w,children:[(0,r.jsx)(h.Z,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){R(e.currentTarget)},children:(0,r.jsx)(b.Z,{icon:"eva:more-vertical-fill"})}),(0,r.jsx)(c.Z,{keepMounted:!0,id:"long-menu",anchorEl:N,onClose:_,open:Boolean(N),PaperProps:{style:{maxHeight:216,width:"20ch"}},children:Z.map((function(e){return(0,r.jsx)(u.Z,{selected:"Pyxis"===e,onClick:_,children:e},e)}))})]})]})})]})})}O.getLayout=function(e){return(0,r.jsx)(x.Z,{variant:"main",children:e})}},56691:function(e,t,n){"use strict";n.d(t,{g:function(){return d},_:function(){return p}});var r=n(85893),o=n(41796),a=n(55113),i=n(78445),l=n(99226),s=n(15861);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function d(e){var t=e.title,n=e.sx,s=e.children;return(0,r.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,o.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,r.jsx)(i.Z,{title:t}),(0,r.jsx)(l.Z,{sx:u({p:5,minHeight:180},n),children:s})]})}function p(e){var t=e.title;return(0,r.jsx)(s.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}}},function(e){e.O(0,[6586,9910,1631,3907,1993,4156,9774,2888,6377],(function(){return t=54469,e(e.s=t);var t}));var t=e.O();_N_E=t}]);