(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7831],{12963:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var n=t(87462),o=t(63366),a=t(67294),i=(t(59864),t(86010)),s=t(27192),l=t(11496),c=t(33616),u=t(15861),d=t(41796),p=t(82066),f=t(85893),h=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=t(49990);const m=(0,l.ZP)(x.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),b=(0,l.ZP)(h)({width:24,height:16});var g=function(e){const r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(m,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(b,{ownerState:r})}))})},v=t(28979);function j(e){return(0,v.Z)("MuiBreadcrumbs",e)}var Z=(0,t(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const y=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,l.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${Z.li}`]:r.li},r.root]})({}),O=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),k=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,r,t,n){return e.reduce(((o,a,i)=>(i<e.length-1?o=o.concat(a,(0,f.jsx)(k,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${i}`)):o.push(a),o)),[])}var S=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:u,component:d="nav",expandText:p="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:x=1,maxItems:m=8,separator:b="/"}=t,v=(0,o.Z)(t,y),[Z,k]=a.useState(!1),S=(0,n.Z)({},t,{component:d,expanded:Z,expandText:p,itemsAfterCollapse:h,itemsBeforeCollapse:x,maxItems:m,separator:b}),C=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},j,r)})(S),_=a.useRef(null),B=a.Children.toArray(l).filter((e=>a.isValidElement(e))).map(((e,r)=>(0,f.jsx)("li",{className:C.li,children:e},`child-${r}`)));return(0,f.jsx)(w,(0,n.Z)({ref:r,component:d,color:"text.secondary",className:(0,i.Z)(C.root,u),ownerState:S},v,{children:(0,f.jsx)(O,{className:C.ol,ref:_,ownerState:S,children:P(Z||m&&B.length<=m?B:(e=>x+h>=e.length?e:[...e.slice(0,x),(0,f.jsx)(g,{"aria-label":p,onClick:()=>{k(!0);const e=_.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(B),C.separator,b,S)})}))}))},46038:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(83946),o=t(77349),a=t(13882);function i(e,r){(0,a.Z)(2,arguments);var t=(0,n.Z)(r);return(0,o.Z)(e,-t)}var s=t(11640);function l(e,r){(0,a.Z)(2,arguments);var t=(0,n.Z)(r);return(0,s.Z)(e,-t)}function c(e,r){if((0,a.Z)(2,arguments),!r||"object"!==typeof r)return new Date(NaN);var t=r.years?(0,n.Z)(r.years):0,o=r.months?(0,n.Z)(r.months):0,s=r.weeks?(0,n.Z)(r.weeks):0,c=r.days?(0,n.Z)(r.days):0,u=r.hours?(0,n.Z)(r.hours):0,d=r.minutes?(0,n.Z)(r.minutes):0,p=r.seconds?(0,n.Z)(r.seconds):0,f=l(e,o+12*t),h=i(f,c+7*s),x=d+60*u,m=p+60*x,b=1e3*m,g=new Date(h.getTime()-b);return g}},87604:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/user/cards",function(){return t(33836)}])},22284:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(85893),o=t(41664),a=t(15861),i=t(12963),s=t(99226),l=t(50122);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function d(e){var r=e.links,t=e.activeLast,o=void 0!==t&&t,l=u(e,["links","activeLast"]),d=r[r.length-1].name,f=r.map((function(e){return(0,n.jsx)(p,{link:e},e.name)})),h=r.map((function(e){return(0,n.jsx)("div",{children:e.name!==d?(0,n.jsx)(p,{link:e}):(0,n.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:d})},e.name)}));return(0,n.jsx)(i.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}({separator:(0,n.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l,{children:o?f:h}))}function p(e){var r=e.link,t=r.href,a=void 0===t?"":t,i=r.name,c=r.icon;return(0,n.jsx)(o.default,{href:a,passHref:!0,children:(0,n.jsxs)(l.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,n.jsx)(s.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),i]},i)})}},72728:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(85893),o=t(47037),a=t.n(o),i=t(99226),s=t(15861),l=t(50122),c=t(22284);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e){var r=e.links,t=e.action,o=e.heading,u=e.moreLink,f=void 0===u?[]:u,h=e.sx,x=p(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(i.Z,{sx:d({mb:5},h),children:[(0,n.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,n.jsx)(c.Z,d({links:r},x))]}),t&&(0,n.jsx)(i.Z,{sx:{flexShrink:0},children:t})]}),(0,n.jsx)(i.Z,{sx:{mt:2},children:a()(f)?(0,n.jsx)(l.Z,{href:f,target:"_blank",variant:"body2",children:f}):f.map((function(e){return(0,n.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},33836:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return P}});var n=t(85893),o=t(27948),a=t(99226),i=t(96259),s=t(10901),l=t(26967),c=t(64156),u=t(61582),d=t(72728),p=t(11496),f=t(66242),h=t(87952),x=t(15861),m=t(26447),b=t(67720),g=t(20727),v=t(13162),j=t(97349),Z=t(63550),y=t(87893);function w(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var O=(0,p.ZP)("div")((function(e){var r=e.theme;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){w(e,r,t[r])}))}return e}({},(0,g.Z)().bgBlur({blur:2,color:r.palette.primary.darker}),{top:0,zIndex:8,content:"''",width:"100%",height:"100%",position:"absolute"})}));function k(e){var r=e.user,t=r.name,o=r.cover,i=r.position,s=r.follower,l=r.totalPost,c=r.avatarUrl,u=r.following;return(0,n.jsxs)(f.Z,{sx:{textAlign:"center"},children:[(0,n.jsxs)(a.Z,{sx:{position:"relative"},children:[(0,n.jsx)(y.Z,{src:"https://minimal-assets-api.vercel.app/assets/icons/shape-avatar.svg",sx:{width:144,height:62,zIndex:10,left:0,right:0,bottom:-26,mx:"auto",position:"absolute",color:"background.paper"}}),(0,n.jsx)(h.Z,{alt:t,src:c,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),(0,n.jsx)(O,{}),(0,n.jsx)(j.Z,{src:o,alt:o,ratio:"16/9"})]}),(0,n.jsx)(x.Z,{variant:"subtitle1",sx:{mt:6},children:t}),(0,n.jsx)(x.Z,{variant:"body2",sx:{color:"text.secondary"},children:i}),(0,n.jsx)(m.Z,{alignItems:"center",children:(0,n.jsx)(Z.Z,{initialColor:!0,sx:{my:2.5}})}),(0,n.jsx)(b.Z,{sx:{borderStyle:"dashed"}}),(0,n.jsxs)(a.Z,{sx:{py:3,display:"grid",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(x.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Follower"}),(0,n.jsx)(x.Z,{variant:"subtitle1",children:(0,v.v1)(s)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(x.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Following"}),(0,n.jsx)(x.Z,{variant:"subtitle1",children:(0,v.v1)(u)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(x.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Total Post"}),(0,n.jsx)(x.Z,{variant:"subtitle1",children:(0,v.v1)(l)})]})]})]})}function P(){var e=(0,s.Z)().themeStretch;return(0,n.jsx)(u.Z,{title:"User: Cards",children:(0,n.jsxs)(o.Z,{maxWidth:!e&&"lg",children:[(0,n.jsx)(d.Z,{heading:"User Cards",links:[{name:"Dashboard",href:i.vB.root},{name:"User",href:i.vB.user.root},{name:"Cards"}]}),(0,n.jsx)(a.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:l.oe.map((function(e){return(0,n.jsx)(k,{user:e},e.id)}))})]})})}P.getLayout=function(e){return(0,n.jsx)(c.Z,{children:e})}}},function(e){e.O(0,[6586,9910,1631,3907,1993,4156,6955,6967,9774,2888,6377],(function(){return r=87604,e(e.s=r);var r}));var r=e.O();_N_E=r}]);