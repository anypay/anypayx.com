"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8890],{12963:function(e,r,t){t.d(r,{Z:function(){return C}});var n=t(87462),o=t(63366),i=t(67294),a=(t(59864),t(86010)),l=t(27192),c=t(11496),s=t(33616),u=t(15861),d=t(41796),p=t(82066),f=t(85893),h=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=t(49990);const x=(0,c.ZP)(m.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),b=(0,c.ZP)(h)({width:24,height:16});var g=function(e){const r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(x,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(b,{ownerState:r})}))})},v=t(28979);function y(e){return(0,v.Z)("MuiBreadcrumbs",e)}var j=(0,t(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const Z=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,c.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${j.li}`]:r.li},r.root]})({}),O=(0,c.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),S=(0,c.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function k(e,r,t,n){return e.reduce(((o,i,a)=>(a<e.length-1?o=o.concat(i,(0,f.jsx)(S,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${a}`)):o.push(i),o)),[])}var C=i.forwardRef((function(e,r){const t=(0,s.Z)({props:e,name:"MuiBreadcrumbs"}),{children:c,className:u,component:d="nav",expandText:p="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:m=1,maxItems:x=8,separator:b="/"}=t,v=(0,o.Z)(t,Z),[j,S]=i.useState(!1),C=(0,n.Z)({},t,{component:d,expanded:j,expandText:p,itemsAfterCollapse:h,itemsBeforeCollapse:m,maxItems:x,separator:b}),P=(e=>{const{classes:r}=e;return(0,l.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,r)})(C),I=i.useRef(null),R=i.Children.toArray(c).filter((e=>i.isValidElement(e))).map(((e,r)=>(0,f.jsx)("li",{className:P.li,children:e},`child-${r}`)));return(0,f.jsx)(w,(0,n.Z)({ref:r,component:d,color:"text.secondary",className:(0,a.Z)(P.root,u),ownerState:C},v,{children:(0,f.jsx)(O,{className:P.ol,ref:I,ownerState:C,children:k(j||x&&R.length<=x?R:(e=>m+h>=e.length?e:[...e.slice(0,m),(0,f.jsx)(g,{"aria-label":p,onClick:()=>{S(!0);const e=I.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(R),P.separator,b,C)})}))}))},26280:function(e,r,t){t.d(r,{Z:function(){return j}});var n=t(63366),o=t(87462),i=t(27192),a=t(86010),l=t(67294),c=t(49990),s=t(82066),u=t(85893),d=(0,s.Z)((0,u.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),p=t(11496),f=t(33616),h=t(98216),m=t(28979);function x(e){return(0,m.Z)("MuiTableSortLabel",e)}var b=(0,t(76087).Z)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]);const g=["active","children","className","direction","hideSortIcon","IconComponent"],v=(0,p.ZP)(c.Z,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.active&&r.active]}})((({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,[`& .${b.icon}`]:{opacity:.5}},[`&.${b.active}`]:{color:e.palette.text.primary,[`& .${b.icon}`]:{opacity:1,color:e.palette.text.secondary}}}))),y=(0,p.ZP)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.icon,r[`iconDirection${(0,h.Z)(t.direction)}`]]}})((({theme:e,ownerState:r})=>(0,o.Z)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},"desc"===r.direction&&{transform:"rotate(0deg)"},"asc"===r.direction&&{transform:"rotate(180deg)"})));var j=l.forwardRef((function(e,r){const t=(0,f.Z)({props:e,name:"MuiTableSortLabel"}),{active:l=!1,children:c,className:s,direction:p="asc",hideSortIcon:m=!1,IconComponent:b=d}=t,j=(0,n.Z)(t,g),Z=(0,o.Z)({},t,{active:l,direction:p,hideSortIcon:m,IconComponent:b}),w=(e=>{const{classes:r,direction:t,active:n}=e,o={root:["root",n&&"active"],icon:["icon",`iconDirection${(0,h.Z)(t)}`]};return(0,i.Z)(o,x,r)})(Z);return(0,u.jsxs)(v,(0,o.Z)({className:(0,a.Z)(w.root,s),component:"span",disableRipple:!0,ownerState:Z,ref:r},j,{children:[c,m&&!l?null:(0,u.jsx)(y,{as:b,className:(0,a.Z)(w.icon),ownerState:Z})]}))}))},22284:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(85893),o=t(41664),i=t(15861),a=t(12963),l=t(99226),c=t(50122);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function d(e){var r=e.links,t=e.activeLast,o=void 0!==t&&t,c=u(e,["links","activeLast"]),d=r[r.length-1].name,f=r.map((function(e){return(0,n.jsx)(p,{link:e},e.name)})),h=r.map((function(e){return(0,n.jsx)("div",{children:e.name!==d?(0,n.jsx)(p,{link:e}):(0,n.jsx)(i.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:d})},e.name)}));return(0,n.jsx)(a.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){s(e,r,t[r])}))}return e}({separator:(0,n.jsx)(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},c,{children:o?f:h}))}function p(e){var r=e.link,t=r.href,i=void 0===t?"":t,a=r.name,s=r.icon;return(0,n.jsx)(o.default,{href:i,passHref:!0,children:(0,n.jsxs)(c.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,n.jsx)(l.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),a]},a)})}},72728:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(85893),o=t(47037),i=t.n(o),a=t(99226),l=t(15861),c=t(50122),s=t(22284);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e){var r=e.links,t=e.action,o=e.heading,u=e.moreLink,f=void 0===u?[]:u,h=e.sx,m=p(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(a.Z,{sx:d({mb:5},h),children:[(0,n.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,n.jsx)(s.Z,d({links:r},m))]}),t&&(0,n.jsx)(a.Z,{sx:{flexShrink:0},children:t})]}),(0,n.jsx)(a.Z,{sx:{mt:2},children:i()(f)?(0,n.jsx)(c.Z,{href:f,target:"_blank",variant:"body2",children:f}):f.map((function(e){return(0,n.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},50985:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(85893),o=t(67294),i=t(93946),a=t(18972),l=t(3140),c=t(48731);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){s(e,r,t[r])}))}return e}function d(e){var r=e.onSendWebhook,t=e.invoice,s=(0,o.useState)(null),d=s[0],p=s[1];console.log("INVOICE",t);var f="https://anypay.sv/invoices/".concat(t.uid),h={mr:2,width:20,height:20};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{onClick:function(e){p(e.currentTarget)},children:(0,n.jsx)(l.Z,{icon:"eva:more-vertical-fill",width:20,height:20})}),(0,n.jsxs)(c.Z,{open:Boolean(d),anchorEl:d,onClose:function(){p(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-1,width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75}},children:[(0,n.jsxs)(a.Z,{onClick:function(e){console.log("share receipt clicked",f),window.open(f,"_blank")},sx:{color:""},children:[(0,n.jsx)(l.Z,{icon:"eva:paper-plane-outline",sx:u({},h)}),"Share Receipt"]}),(0,n.jsxs)(a.Z,{onClick:r,sx:{color:""},children:[(0,n.jsx)(l.Z,{icon:"eva:log-in-outline",sx:u({},h)}),"Send Webhook"]}),(0,n.jsxs)(a.Z,{onClick:function(e){console.log("share blockchain clicked",t)},children:[(0,n.jsx)(l.Z,{icon:"eva:checkmark-square-outline",sx:{mr:2,width:24,height:24}}),"See Explorer"]})]})]})}}}]);