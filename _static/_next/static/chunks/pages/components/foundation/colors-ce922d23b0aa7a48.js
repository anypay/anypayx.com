(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4063],{12963:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var n=t(87462),o=t(63366),a=t(67294),i=(t(59864),t(86010)),l=t(27192),s=t(11496),c=t(33616),d=t(15861),u=t(41796),p=t(82066),f=t(85893),x=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=t(49990);const h=(0,s.ZP)(m.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,u._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,u._4)(e.palette.grey[600],.12)})}))),g=(0,s.ZP)(x)({width:24,height:16});var b=function(e){const r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(h,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(g,{ownerState:r})}))})},y=t(28979);function j(e){return(0,y.Z)("MuiBreadcrumbs",e)}var v=(0,t(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const Z=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,s.ZP)(d.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${v.li}`]:r.li},r.root]})({}),O=(0,s.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),k=(0,s.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function C(e,r,t,n){return e.reduce(((o,a,i)=>(i<e.length-1?o=o.concat(a,(0,f.jsx)(k,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${i}`)):o.push(a),o)),[])}var S=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:s,className:d,component:u="nav",expandText:p="Show path",itemsAfterCollapse:x=1,itemsBeforeCollapse:m=1,maxItems:h=8,separator:g="/"}=t,y=(0,o.Z)(t,Z),[v,k]=a.useState(!1),S=(0,n.Z)({},t,{component:u,expanded:v,expandText:p,itemsAfterCollapse:x,itemsBeforeCollapse:m,maxItems:h,separator:g}),P=(e=>{const{classes:r}=e;return(0,l.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},j,r)})(S),_=a.useRef(null),R=a.Children.toArray(s).filter((e=>a.isValidElement(e))).map(((e,r)=>(0,f.jsx)("li",{className:P.li,children:e},`child-${r}`)));return(0,f.jsx)(w,(0,n.Z)({ref:r,component:u,color:"text.secondary",className:(0,i.Z)(P.root,d),ownerState:S},y,{children:(0,f.jsx)(O,{className:P.ol,ref:_,ownerState:S,children:C(v||h&&R.length<=h?R:(e=>m+x>=e.length?e:[...e.slice(0,m),(0,f.jsx)(b,{"aria-label":p,onClick:()=>{k(!0);const e=_.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-x,e.length)])(R),P.separator,g,S)})}))}))},9289:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/foundation/colors",function(){return t(73942)}])},22284:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(85893),o=t(41664),a=t(15861),i=t(12963),l=t(99226),s=t(50122);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function u(e){var r=e.links,t=e.activeLast,o=void 0!==t&&t,s=d(e,["links","activeLast"]),u=r[r.length-1].name,f=r.map((function(e){return(0,n.jsx)(p,{link:e},e.name)})),x=r.map((function(e){return(0,n.jsx)("div",{children:e.name!==u?(0,n.jsx)(p,{link:e}):(0,n.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:u})},e.name)}));return(0,n.jsx)(i.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}({separator:(0,n.jsx)(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},s,{children:o?f:x}))}function p(e){var r=e.link,t=r.href,a=void 0===t?"":t,i=r.name,c=r.icon;return(0,n.jsx)(o.default,{href:a,passHref:!0,children:(0,n.jsxs)(s.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,n.jsx)(l.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),i]},i)})}},72728:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(85893),o=t(47037),a=t.n(o),i=t(99226),l=t(15861),s=t(50122),c=t(22284);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e){var r=e.links,t=e.action,o=e.heading,d=e.moreLink,f=void 0===d?[]:d,x=e.sx,m=p(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(i.Z,{sx:u({mb:5},x),children:[(0,n.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,n.jsx)(c.Z,u({links:r},m))]}),t&&(0,n.jsx)(i.Z,{sx:{flexShrink:0},children:t})]}),(0,n.jsx)(i.Z,{sx:{mt:2},children:a()(f)?(0,n.jsx)(s.Z,{href:f,target:"_blank",variant:"body2",children:f}):f.map((function(e){return(0,n.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},73942:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Z}});var n=t(85893),o=t(67294),a=t(73400),i=t(11496),l=t(2734),s=t(41796),c=t(99226),d=t(27948),u=t(15861),p=t(66242),f=t(26447),x=t(96259),m=t(64156),h=t(61582),g=t(72728),b=["primary","secondary","info","success","warning","error"],y=["lighter","light","main","dark","darker"],j=["100","200","300","400","500","600","700","800","900"],v=(0,i.ZP)("div")((function(e){var r=e.theme;return{paddingTop:r.spacing(11),paddingBottom:r.spacing(15)}}));function Z(){var e=(0,l.Z)(),r=(0,a.Ds)().enqueueSnackbar,t=(0,o.useState)(null)[1],i=function(e){t(e),e&&r("Copied! ".concat(e))};return(0,n.jsx)(h.Z,{title:"Foundations: Color",children:(0,n.jsxs)(v,{children:[(0,n.jsx)(c.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,n.jsx)(d.Z,{children:(0,n.jsx)(g.Z,{heading:"Color",links:[{name:"Components",href:x.ko.components},{name:"Color"}],moreLink:["https://mui.com/customization/color","https://colors.eva.design"]})})}),(0,n.jsxs)(d.Z,{children:[b.map((function(r){return(0,n.jsxs)(c.Z,{sx:{mb:5},children:[(0,n.jsx)(u.Z,{variant:"h5",sx:{textTransform:"capitalize",mb:3},children:r}),(0,n.jsx)(c.Z,{sx:{display:"grid",gap:2.5,gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)"}},children:y.map((function(t){return(0,n.jsx)(w,{variation:t,hexColor:e.palette[r][t],onCopy:function(){return i(e.palette[r][t])}},t)}))})]},r)})),(0,n.jsx)(u.Z,{variant:"h5",sx:{textTransform:"capitalize",mb:3},children:"Grey"}),(0,n.jsx)(c.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)"}},children:j.map((function(r){return(0,n.jsx)(w,{variation:r,hexColor:e.palette.grey[r],onCopy:function(){return i(e.palette.grey[r])}},r)}))})]})]})})}function w(e){var r=e.hexColor,t=e.variation;e.onCopy;return(0,n.jsxs)(p.Z,{sx:{p:1},children:[(0,n.jsx)(c.Z,{sx:{bgcolor:r,paddingTop:"75%",borderRadius:1,border:function(e){return"solid 1px ".concat(e.palette.grey[50012])}}}),(0,n.jsxs)(c.Z,{sx:{py:2.5,px:1.5},children:[(0,n.jsx)(u.Z,{variant:"subtitle1",sx:{textTransform:"capitalize"},children:t}),(0,n.jsxs)(f.Z,{direction:"row",alignItems:"center",sx:{mt:1.5,mb:1},children:[(0,n.jsx)(u.Z,{variant:"overline",sx:{width:56,color:"text.disabled"},children:"Hex"}),(0,n.jsx)(u.Z,{variant:"body2",children:r})]}),(0,n.jsxs)(f.Z,{direction:"row",alignItems:"center",children:[(0,n.jsx)(u.Z,{variant:"overline",sx:{width:56,color:"text.disabled"},children:"Rgb"}),(0,n.jsx)(u.Z,{variant:"body2",children:(0,s.oo)(r).replace("rgb(","").replace(")","")})]})]})]})}Z.getLayout=function(e){return(0,n.jsx)(m.Z,{variant:"main",children:e})}}},function(e){e.O(0,[6586,9910,1631,3907,1993,4156,9774,2888,6377],(function(){return r=9289,e(e.s=r);var r}));var r=e.O();_N_E=r}]);