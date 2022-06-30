(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7913],{78445:function(r,e,t){"use strict";t.d(e,{Z:function(){return Z}});var n=t(63366),a=t(87462),o=t(67294),i=t(86010),s=t(27192),l=t(15861),c=t(33616),u=t(11496),d=t(28979);function f(r){return(0,d.Z)("MuiCardHeader",r)}var v=(0,t(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=t(85893);const b=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(r,e)=>(0,a.Z)({[`& .${v.title}`]:e.title,[`& .${v.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),h=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(r,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(r,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),p=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(r,e)=>e.content})({flex:"1 1 auto"});var Z=o.forwardRef((function(r,e){const t=(0,c.Z)({props:r,name:"MuiCardHeader"}),{action:o,avatar:u,className:d,component:v="div",disableTypography:Z=!1,subheader:g,subheaderTypographyProps:y,title:w,titleTypographyProps:P}=t,O=(0,n.Z)(t,b),k=(0,a.Z)({},t,{component:v,disableTypography:Z}),C=(r=>{const{classes:e}=r;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},f,e)})(k);let S=w;null==S||S.type===l.Z||Z||(S=(0,x.jsx)(l.Z,(0,a.Z)({variant:u?"body2":"h5",className:C.title,component:"span",display:"block"},P,{children:S})));let B=g;return null==B||B.type===l.Z||Z||(B=(0,x.jsx)(l.Z,(0,a.Z)({variant:u?"body2":"body1",className:C.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:B}))),(0,x.jsxs)(m,(0,a.Z)({className:(0,i.Z)(C.root,d),as:v,ref:e,ownerState:k},O,{children:[u&&(0,x.jsx)(h,{className:C.avatar,ownerState:k,children:u}),(0,x.jsxs)(p,{className:C.content,ownerState:k,children:[S,B]}),o&&(0,x.jsx)(j,{className:C.action,ownerState:k,children:o})]}))}))},81458:function(r,e,t){"use strict";t.d(e,{Z:function(){return N}});var n=t(63366),a=t(87462),o=t(67294),i=t(86010),s=t(27192),l=t(70917),c=t(41796),u=t(98216),d=t(2734),f=t(11496),v=t(33616),x=t(28979);function b(r){return(0,x.Z)("MuiLinearProgress",r)}(0,t(76087).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var m=t(85893);const h=["className","color","value","valueBuffer","variant"];let j,p,Z,g,y,w,P=r=>r;const O=(0,l.F4)(j||(j=P`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),k=(0,l.F4)(p||(p=P`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),C=(0,l.F4)(Z||(Z=P`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),S=(r,e)=>"inherit"===e?"currentColor":"light"===r.palette.mode?(0,c.$n)(r.palette[e].main,.62):(0,c._j)(r.palette[e].main,.5),B=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,u.Z)(t.color)}`],e[t.variant]]}})((({ownerState:r,theme:e})=>(0,a.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:S(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"}))),_=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,u.Z)(t.color)}`]]}})((({ownerState:r,theme:e})=>{const t=S(e,r.color);return(0,a.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(g||(g=P`
    animation: ${0} 3s infinite linear;
  `),C)),I=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((({ownerState:r,theme:e})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":e.palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(y||(y=P`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),O))),M=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((({ownerState:r,theme:e})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":e.palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:S(e,r.color),transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(w||(w=P`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),k)));var N=o.forwardRef((function(r,e){const t=(0,v.Z)({props:r,name:"MuiLinearProgress"}),{className:o,color:l="primary",value:c,valueBuffer:f,variant:x="indeterminate"}=t,j=(0,n.Z)(t,h),p=(0,a.Z)({},t,{color:l,variant:x}),Z=(r=>{const{classes:e,variant:t,color:n}=r,a={root:["root",`color${(0,u.Z)(n)}`,t],dashed:["dashed",`dashedColor${(0,u.Z)(n)}`],bar1:["bar",`barColor${(0,u.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,u.Z)(n)}`,"buffer"===t&&`color${(0,u.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.Z)(a,b,e)})(p),g=(0,d.Z)(),y={},w={bar1:{},bar2:{}};if("determinate"===x||"buffer"===x)if(void 0!==c){y["aria-valuenow"]=Math.round(c),y["aria-valuemin"]=0,y["aria-valuemax"]=100;let r=c-100;"rtl"===g.direction&&(r=-r),w.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===x)if(void 0!==f){let r=(f||0)-100;"rtl"===g.direction&&(r=-r),w.bar2.transform=`translateX(${r}%)`}else 0;return(0,m.jsxs)(B,(0,a.Z)({className:(0,i.Z)(Z.root,o),ownerState:p,role:"progressbar"},y,{ref:e},j,{children:["buffer"===x?(0,m.jsx)(_,{className:Z.dashed,ownerState:p}):null,(0,m.jsx)(I,{className:Z.bar1,ownerState:p,style:w.bar1}),"determinate"===x?null:(0,m.jsx)(M,{className:Z.bar2,ownerState:p,style:w.bar2})]}))}))},28382:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/progress",function(){return t(52648)}])},22284:function(r,e,t){"use strict";t.d(e,{Z:function(){return d}});var n=t(85893),a=t(41664),o=t(15861),i=t(12963),s=t(99226),l=t(50122);function c(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function u(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}function d(r){var e=r.links,t=r.activeLast,a=void 0!==t&&t,l=u(r,["links","activeLast"]),d=e[e.length-1].name,v=e.map((function(r){return(0,n.jsx)(f,{link:r},r.name)})),x=e.map((function(r){return(0,n.jsx)("div",{children:r.name!==d?(0,n.jsx)(f,{link:r}):(0,n.jsx)(o.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:d})},r.name)}));return(0,n.jsx)(i.Z,function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})))),n.forEach((function(e){c(r,e,t[e])}))}return r}({separator:(0,n.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l,{children:a?v:x}))}function f(r){var e=r.link,t=e.href,o=void 0===t?"":t,i=e.name,c=e.icon;return(0,n.jsx)(a.default,{href:o,passHref:!0,children:(0,n.jsxs)(l.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,n.jsx)(s.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),i]},i)})}},72728:function(r,e,t){"use strict";t.d(e,{Z:function(){return v}});var n=t(85893),a=t(47037),o=t.n(a),i=t(99226),s=t(15861),l=t(50122),c=t(22284);function u(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function d(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})))),n.forEach((function(e){u(r,e,t[e])}))}return r}function f(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}function v(r){var e=r.links,t=r.action,a=r.heading,u=r.moreLink,v=void 0===u?[]:u,x=r.sx,b=f(r,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(i.Z,{sx:d({mb:5},x),children:[(0,n.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:a}),(0,n.jsx)(c.Z,d({links:e},b))]}),t&&(0,n.jsx)(i.Z,{sx:{flexShrink:0},children:t})]}),(0,n.jsx)(i.Z,{sx:{mt:2},children:o()(v)?(0,n.jsx)(l.Z,{href:v,target:"_blank",variant:"body2",children:v}):v.map((function(r){return(0,n.jsx)(l.Z,{noWrap:!0,href:r,variant:"body2",target:"_blank",sx:{display:"table"},children:r},r)}))})]})}},52648:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return w}});var n=t(85893),a=t(67294),o=t(11496),i=t(99226),s=t(27948),l=t(26447),c=t(96259),u=t(64156),d=t(61582),f=t(72728),v=t(55113),x=t(81458),b=t(78672),m=t(56691),h={p:2,minHeight:160,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center","& > *":{m:1}};function j(r){var e=r.progress,t=r.buffer;return(0,n.jsxs)(b.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(m._,{title:"Linears Indeterminate"}),(0,n.jsx)(v.Z,{variant:"outlined",sx:h,children:(0,n.jsxs)(i.Z,{sx:{width:"100%"},children:[(0,n.jsx)(x.Z,{color:"inherit"})," ",(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{})," ",(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{color:"secondary"})," ",(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{color:"info"})," ",(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{color:"success"})," ",(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{color:"warning"})," ",(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{color:"error"})]})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(m._,{title:"Linears Determinate"}),(0,n.jsx)(v.Z,{variant:"outlined",sx:h,children:(0,n.jsxs)(i.Z,{sx:{width:"100%"},children:[(0,n.jsx)(x.Z,{variant:"determinate",value:e,color:"inherit"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"determinate",value:e}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"determinate",value:e,color:"secondary"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"determinate",value:e,color:"info"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"determinate",value:e,color:"success"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"determinate",value:e,color:"warning"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"determinate",value:e,color:"error"})]})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(m._,{title:"Linears Buffer"}),(0,n.jsx)(v.Z,{variant:"outlined",sx:h,children:(0,n.jsxs)(i.Z,{sx:{width:"100%"},children:[(0,n.jsx)(x.Z,{variant:"buffer",value:e,valueBuffer:t,color:"inherit"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"buffer",value:e,valueBuffer:t}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"buffer",value:e,valueBuffer:t,color:"secondary"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"buffer",value:e,valueBuffer:t,color:"info"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"buffer",value:e,valueBuffer:t,color:"success"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"buffer",value:e,valueBuffer:t,color:"warning"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"buffer",value:e,valueBuffer:t,color:"error"})]})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(m._,{title:"Linears Query"}),(0,n.jsx)(v.Z,{variant:"outlined",sx:h,children:(0,n.jsxs)(i.Z,{sx:{width:"100%"},children:[(0,n.jsx)(x.Z,{variant:"query",value:e,valueBuffer:t,color:"inherit"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"query",value:e,valueBuffer:t}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"query",value:e,valueBuffer:t,color:"secondary"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"query",value:e,valueBuffer:t,color:"info"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"query",value:e,valueBuffer:t,color:"success"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"query",value:e,valueBuffer:t,color:"warning"}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"query",value:e,valueBuffer:t,color:"error"})]})})]})]})}var p=t(98456),Z={minHeight:160,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center","& > *":{m:1}};function g(r){var e=r.progress;return(0,n.jsxs)(b.ZP,{columns:{xs:1,md:3},spacing:3,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(m._,{title:"Circular Indeterminate"}),(0,n.jsxs)(v.Z,{variant:"outlined",sx:Z,children:[(0,n.jsx)(p.Z,{color:"inherit"}),(0,n.jsx)(p.Z,{}),(0,n.jsx)(p.Z,{color:"secondary"}),(0,n.jsx)(p.Z,{color:"info"}),(0,n.jsx)(p.Z,{color:"success"}),(0,n.jsx)(p.Z,{color:"warning"}),(0,n.jsx)(p.Z,{color:"error"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(m._,{title:"Circular determinate"}),(0,n.jsxs)(v.Z,{variant:"outlined",sx:Z,children:[(0,n.jsx)(p.Z,{color:"info"}),(0,n.jsx)(p.Z,{color:"info",variant:"determinate",value:25}),(0,n.jsx)(p.Z,{color:"info",variant:"determinate",value:50}),(0,n.jsx)(p.Z,{color:"info",variant:"determinate",value:75}),(0,n.jsx)(p.Z,{color:"info",variant:"determinate",value:100}),(0,n.jsx)(p.Z,{color:"info",variant:"determinate",value:e})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(m._,{title:"Circular Size"}),(0,n.jsxs)(v.Z,{variant:"outlined",sx:Z,children:[(0,n.jsx)(p.Z,{size:48,color:"info"}),(0,n.jsx)(p.Z,{color:"info"}),(0,n.jsx)(p.Z,{size:32,color:"info"}),(0,n.jsx)(p.Z,{size:24,color:"info"})]})]})]})}var y=(0,o.ZP)("div")((function(r){var e=r.theme;return{paddingTop:e.spacing(11),paddingBottom:e.spacing(15)}}));function w(){var r=(0,a.useState)(0),e=r[0],t=r[1],o=(0,a.useState)(10),u=o[0],v=o[1];(0,a.useEffect)((function(){var r=setInterval((function(){t((function(r){if(100===r)return 0;var e=10*Math.random();return Math.min(r+e,100)}))}),500);return function(){clearInterval(r)}}),[]);var x=(0,a.useRef)((function(){}));return(0,a.useEffect)((function(){x.current=function(){if(e>100)t(0),v(10);else{var r=10*Math.random(),n=10*Math.random();t(e+r),v(e+r+n)}}})),(0,a.useEffect)((function(){var r=setInterval((function(){x.current()}),500);return function(){clearInterval(r)}}),[]),(0,n.jsx)(d.Z,{title:"Components: Progress",children:(0,n.jsxs)(y,{children:[(0,n.jsx)(i.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(r){return"light"===r.palette.mode?"grey.200":"grey.800"}},children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(f.Z,{heading:"Progress",links:[{name:"Components",href:c.ko.components},{name:"Progress"}],moreLink:"https://mui.com/components/progress"})})}),(0,n.jsx)(s.Z,{children:(0,n.jsxs)(l.Z,{spacing:5,children:[(0,n.jsx)(m.g,{title:"Circular",children:(0,n.jsx)(g,{progress:e})}),(0,n.jsx)(m.g,{title:"Linear",children:(0,n.jsx)(j,{progress:e,buffer:u})})]})})]})})}w.getLayout=function(r){return(0,n.jsx)(u.Z,{variant:"main",children:r})}},56691:function(r,e,t){"use strict";t.d(e,{g:function(){return d},_:function(){return f}});var n=t(85893),a=t(41796),o=t(55113),i=t(78445),s=t(99226),l=t(15861);function c(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function u(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})))),n.forEach((function(e){c(r,e,t[e])}))}return r}function d(r){var e=r.title,t=r.sx,l=r.children;return(0,n.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(r){return(0,a.Fq)(r.palette.grey[500],.04)}},children:[e&&(0,n.jsx)(i.Z,{title:e}),(0,n.jsx)(s.Z,{sx:u({p:5,minHeight:180},t),children:l})]})}function f(r){var e=r.title;return(0,n.jsx)(l.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:e})}}},function(r){r.O(0,[6586,9910,1631,4525,3907,1993,4156,9774,2888,6377],(function(){return e=28382,r(r.s=e);var e}));var e=r.O();_N_E=e}]);