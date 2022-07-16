(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4172],{12963:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(87462),o=r(63366),a=r(67294),i=(r(59864),r(86010)),s=r(27192),l=r(11496),c=r(33616),u=r(15861),d=r(41796),p=r(82066),f=r(85893),h=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=r(49990);const x=(0,l.ZP)(m.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),g=(0,l.ZP)(h)({width:24,height:16});var b=function(e){const t=e;return(0,f.jsx)("li",{children:(0,f.jsx)(x,(0,n.Z)({focusRipple:!0},e,{ownerState:t,children:(0,f.jsx)(g,{ownerState:t})}))})},y=r(28979);function v(e){return(0,y.Z)("MuiBreadcrumbs",e)}var j=(0,r(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const w=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],Z=(0,l.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${j.li}`]:t.li},t.root]})({}),O=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),S=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,t,r,n){return e.reduce(((o,a,i)=>(i<e.length-1?o=o.concat(a,(0,f.jsx)(S,{"aria-hidden":!0,className:t,ownerState:n,children:r},`separator-${i}`)):o.push(a),o)),[])}var k=a.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:u,component:d="nav",expandText:p="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:m=1,maxItems:x=8,separator:g="/"}=r,y=(0,o.Z)(r,w),[j,S]=a.useState(!1),k=(0,n.Z)({},r,{component:d,expanded:j,expandText:p,itemsAfterCollapse:h,itemsBeforeCollapse:m,maxItems:x,separator:g}),C=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},v,t)})(k),R=a.useRef(null),N=a.Children.toArray(l).filter((e=>a.isValidElement(e))).map(((e,t)=>(0,f.jsx)("li",{className:C.li,children:e},`child-${t}`)));return(0,f.jsx)(Z,(0,n.Z)({ref:t,component:d,color:"text.secondary",className:(0,i.Z)(C.root,u),ownerState:k},y,{children:(0,f.jsx)(O,{className:C.ol,ref:R,ownerState:k,children:P(j||x&&N.length<=x?N:(e=>m+h>=e.length?e:[...e.slice(0,m),(0,f.jsx)(b,{"aria-label":p,onClick:()=>{S(!0);const e=R.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(N),C.separator,g,k)})}))}))},78445:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(63366),o=r(87462),a=r(67294),i=r(86010),s=r(27192),l=r(15861),c=r(33616),u=r(11496),d=r(28979);function p(e){return(0,d.Z)("MuiCardHeader",e)}var f=(0,r(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=r(85893);const m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,o.Z)({[`& .${f.title}`]:t.title,[`& .${f.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var v=a.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:u,className:d,component:f="div",disableTypography:v=!1,subheader:j,subheaderTypographyProps:w,title:Z,titleTypographyProps:O}=r,S=(0,n.Z)(r,m),P=(0,o.Z)({},r,{component:f,disableTypography:v}),k=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(P);let C=Z;null==C||C.type===l.Z||v||(C=(0,h.jsx)(l.Z,(0,o.Z)({variant:u?"body2":"h5",className:k.title,component:"span",display:"block"},O,{children:C})));let R=j;return null==R||R.type===l.Z||v||(R=(0,h.jsx)(l.Z,(0,o.Z)({variant:u?"body2":"body1",className:k.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:R}))),(0,h.jsxs)(x,(0,o.Z)({className:(0,i.Z)(k.root,d),as:f,ref:t,ownerState:P},S,{children:[u&&(0,h.jsx)(g,{className:k.avatar,ownerState:P,children:u}),(0,h.jsxs)(y,{className:k.content,ownerState:P,children:[C,R]}),a&&(0,h.jsx)(b,{className:k.action,ownerState:P,children:a})]}))}))},22937:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/foundation/shadows",function(){return r(61484)}])},22284:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(85893),o=r(41664),a=r(15861),i=r(12963),s=r(99226),l=r(50122);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function d(e){var t=e.links,r=e.activeLast,o=void 0!==r&&r,l=u(e,["links","activeLast"]),d=t[t.length-1].name,f=t.map((function(e){return(0,n.jsx)(p,{link:e},e.name)})),h=t.map((function(e){return(0,n.jsx)("div",{children:e.name!==d?(0,n.jsx)(p,{link:e}):(0,n.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:d})},e.name)}));return(0,n.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}({separator:(0,n.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l,{children:o?f:h}))}function p(e){var t=e.link,r=t.href,a=void 0===r?"":r,i=t.name,c=t.icon;return(0,n.jsx)(o.default,{href:a,passHref:!0,children:(0,n.jsxs)(l.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,n.jsx)(s.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),i]},i)})}},72728:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(85893),o=r(47037),a=r.n(o),i=r(99226),s=r(15861),l=r(50122),c=r(22284);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(e){var t=e.links,r=e.action,o=e.heading,u=e.moreLink,f=void 0===u?[]:u,h=e.sx,m=p(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(i.Z,{sx:d({mb:5},h),children:[(0,n.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,n.jsx)(c.Z,d({links:t},m))]}),r&&(0,n.jsx)(i.Z,{sx:{flexShrink:0},children:r})]}),(0,n.jsx)(i.Z,{sx:{mt:2},children:a()(f)?(0,n.jsx)(l.Z,{href:f,target:"_blank",variant:"body2",children:f}):f.map((function(e){return(0,n.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},61484:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(85893),o=r(11496),a=r(2734),i=r(99226),s=r(27948),l=r(26447),c=r(55113),u=r(15861),d=r(96259),p=r(64156),f=r(61582),h=r(72728),m=r(56691);function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){x(e,t,r[t])}))}return e}var b={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}},y=(0,o.ZP)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function v(){var e=(0,a.Z)(),t=e.shadows.slice(1,e.shadows.length),r=[["z1",e.customShadows.z1],["z8",e.customShadows.z8],["z12",e.customShadows.z12],["z16",e.customShadows.z16],["z20",e.customShadows.z20],["z24",e.customShadows.z24],["card",e.customShadows.card],["dropdown",e.customShadows.dropdown],["dialog",e.customShadows.dialog]];return(0,n.jsx)(f.Z,{title:"Foundations: Shadows",children:(0,n.jsxs)(y,{children:[(0,n.jsx)(i.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(h.Z,{heading:"Shadows",links:[{name:"Components",href:d.ko.components},{name:"Shadows"}]})})}),(0,n.jsx)(s.Z,{children:(0,n.jsxs)(l.Z,{spacing:5,children:[(0,n.jsx)(m.g,{title:"System",sx:b,children:t.map((function(e,t){return(0,n.jsx)(j,{title:"z".concat(t+1),sx:{boxShadow:e}},e)}))}),(0,n.jsx)(m.g,{title:"Customs",sx:b,children:r.map((function(e){return(0,n.jsx)(j,{title:e[0],sx:{boxShadow:e[1]}},e[0])}))}),(0,n.jsx)(m.g,{title:"Colors",sx:b,children:["primary","secondary","info","success","warning","error"].map((function(t){return(0,n.jsx)(j,{title:t,sx:{color:e.palette[t].contrastText,bgcolor:e.palette[t].main,boxShadow:e.customShadows[t]}},t)}))})]})})]})})}function j(e){var t=e.sx,r=e.title;return(0,n.jsx)(c.Z,{sx:g({padding:3,margin:1.5,display:"flex",alignItems:"center",justifyContent:"center",width:{xs:"calc((100%/2) - 24px)",sm:"calc((100%/4) - 24px)",md:"calc((100%/6) - 24px)"}},t),children:(0,n.jsx)(u.Z,{variant:"subtitle2",sx:{textTransform:"capitalize"},children:r})})}v.getLayout=function(e){return(0,n.jsx)(p.Z,{variant:"main",children:e})}},56691:function(e,t,r){"use strict";r.d(t,{g:function(){return d},_:function(){return p}});var n=r(85893),o=r(41796),a=r(55113),i=r(78445),s=r(99226),l=r(15861);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}function d(e){var t=e.title,r=e.sx,l=e.children;return(0,n.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,o.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,n.jsx)(i.Z,{title:t}),(0,n.jsx)(s.Z,{sx:u({p:5,minHeight:180},r),children:l})]})}function p(e){var t=e.title;return(0,n.jsx)(l.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}}},function(e){e.O(0,[6586,9910,1631,3907,1993,4156,9774,2888,6377],(function(){return t=22937,e(e.s=t);var t}));var t=e.O();_N_E=t}]);