"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[167],{12963:function(e,r,n){n.d(r,{Z:function(){return P}});var t=n(87462),i=n(63366),o=n(67294),a=(n(59864),n(86010)),s=n(27192),l=n(11496),c=n(33616),u=n(15861),d=n(41796),p=n(82066),m=n(85893),f=(0,p.Z)((0,m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=n(49990);const g=(0,l.ZP)(h.Z)((({theme:e})=>(0,t.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,t.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,t.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),x=(0,l.ZP)(f)({width:24,height:16});var b=function(e){const r=e;return(0,m.jsx)("li",{children:(0,m.jsx)(g,(0,t.Z)({focusRipple:!0},e,{ownerState:r,children:(0,m.jsx)(x,{ownerState:r})}))})},v=n(28979);function y(e){return(0,v.Z)("MuiBreadcrumbs",e)}var j=(0,n(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const Z=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=(0,l.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${j.li}`]:r.li},r.root]})({}),k=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),w=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function O(e,r,n,t){return e.reduce(((i,o,a)=>(a<e.length-1?i=i.concat(o,(0,m.jsx)(w,{"aria-hidden":!0,className:r,ownerState:t,children:n},`separator-${a}`)):i.push(o),i)),[])}var P=o.forwardRef((function(e,r){const n=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:u,component:d="nav",expandText:p="Show path",itemsAfterCollapse:f=1,itemsBeforeCollapse:h=1,maxItems:g=8,separator:x="/"}=n,v=(0,i.Z)(n,Z),[j,w]=o.useState(!1),P=(0,t.Z)({},n,{component:d,expanded:j,expandText:p,itemsAfterCollapse:f,itemsBeforeCollapse:h,maxItems:g,separator:x}),C=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,r)})(P),R=o.useRef(null),I=o.Children.toArray(l).filter((e=>o.isValidElement(e))).map(((e,r)=>(0,m.jsx)("li",{className:C.li,children:e},`child-${r}`)));return(0,m.jsx)(S,(0,t.Z)({ref:r,component:d,color:"text.secondary",className:(0,a.Z)(C.root,u),ownerState:P},v,{children:(0,m.jsx)(k,{className:C.ol,ref:R,ownerState:P,children:O(j||g&&I.length<=g?I:(e=>h+f>=e.length?e:[...e.slice(0,h),(0,m.jsx)(b,{"aria-label":p,onClick:()=>{w(!0);const e=R.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-f,e.length)])(I),C.separator,x,P)})}))}))},22284:function(e,r,n){n.d(r,{Z:function(){return d}});var t=n(85893),i=n(41664),o=n(15861),a=n(12963),s=n(99226),l=n(50122);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function d(e){var r=e.links,n=e.activeLast,i=void 0!==n&&n,l=u(e,["links","activeLast"]),d=r[r.length-1].name,m=r.map((function(e){return(0,t.jsx)(p,{link:e},e.name)})),f=r.map((function(e){return(0,t.jsx)("div",{children:e.name!==d?(0,t.jsx)(p,{link:e}):(0,t.jsx)(o.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:d})},e.name)}));return(0,t.jsx)(a.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){c(e,r,n[r])}))}return e}({separator:(0,t.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l,{children:i?m:f}))}function p(e){var r=e.link,n=r.href,o=void 0===n?"":n,a=r.name,c=r.icon;return(0,t.jsx)(i.default,{href:o,passHref:!0,children:(0,t.jsxs)(l.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,t.jsx)(s.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),a]},a)})}},72728:function(e,r,n){n.d(r,{Z:function(){return m}});var t=n(85893),i=n(47037),o=n.n(i),a=n(99226),s=n(15861),l=n(50122),c=n(22284);function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){u(e,r,n[r])}))}return e}function p(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function m(e){var r=e.links,n=e.action,i=e.heading,u=e.moreLink,m=void 0===u?[]:u,f=e.sx,h=p(e,["links","action","heading","moreLink","sx"]);return(0,t.jsxs)(a.Z,{sx:d({mb:5},f),children:[(0,t.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,t.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,t.jsx)(c.Z,d({links:r},h))]}),n&&(0,t.jsx)(a.Z,{sx:{flexShrink:0},children:n})]}),(0,t.jsx)(a.Z,{sx:{mt:2},children:o()(m)?(0,t.jsx)(l.Z,{href:m,target:"_blank",variant:"body2",children:m}):m.map((function(e){return(0,t.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},95972:function(e,r,n){n.d(r,{Z:function(){return B}});var t=n(34051),i=n.n(t),o=n(85893),a=n(67294),s=n(74231),l=n(73400),c=n(11163),u=n(87536),d=n(95496),p=n(11496),m=n(31812),f=n(15861),h=n(86886),g=n(66242),x=n(26447),b=n(5306),v=n(87918),y=n(50135),j=n(87109),Z=n(96259),S=n(96787);function k(e,r,n,t,i,o,a){try{var s=e[o](a),l=s.value}catch(c){return void n(c)}s.done?r(l):Promise.resolve(l).then(t,i)}function w(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function O(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){w(e,r,n[r])}))}return e}var P=["Men","Women","Kids"],C=[{group:"Clothing",classify:["Shirts","T-shirts","Jeans","Leather"]},{group:"Tailored",classify:["Suits","Blazers","Trousers","Waistcoats"]},{group:"Accessories",classify:["Shoes","Backpacks and bags","Bracelets","Face masks"]}],R=["Toy Story 3","Logan","Full Metal Jacket","Dangal","The Sting","2001: A Space Odyssey","Singin' in the Rain","Toy Story","Bicycle Thieves","The Kid","Inglourious Basterds","Snatch","3 Idiots"],I=(0,p.ZP)(f.Z)((function(e){var r=e.theme;return O({},r.typography.subtitle2,{color:r.palette.text.secondary,marginBottom:r.spacing(1)})}));function B(e){var r=e.isEdit,n=e.currentProduct,t=(0,c.useRouter)().push,p=(0,l.Ds)().enqueueSnackbar,f=s.Ry().shape({name:s.Z_().required("Name is required"),description:s.Z_().required("Description is required"),images:s.IX().min(1,"Images is required"),price:s.Rx().moreThan(0,"Price should not be $0.00")}),w=(0,a.useMemo)((function(){return{name:(null===n||void 0===n?void 0:n.name)||"",description:(null===n||void 0===n?void 0:n.description)||"",images:(null===n||void 0===n?void 0:n.images)||[],code:(null===n||void 0===n?void 0:n.code)||"",sku:(null===n||void 0===n?void 0:n.sku)||"",price:(null===n||void 0===n?void 0:n.price)||0,priceSale:(null===n||void 0===n?void 0:n.priceSale)||0,tags:(null===n||void 0===n?void 0:n.tags)||[R[0]],inStock:!0,taxes:!0,gender:(null===n||void 0===n?void 0:n.gender)||P[2],category:(null===n||void 0===n?void 0:n.category)||C[0].classify[1]}}),[n]),B=(0,u.cI)({resolver:(0,d.X)(f),defaultValues:w}),T=B.reset,L=B.watch,M=B.control,N=B.setValue,_=B.getValues,E=B.handleSubmit,A=B.formState.isSubmitting,z=L();(0,a.useEffect)((function(){r&&n&&T(w),r||T(w)}),[r,n]);var D=function(){var e,n=(e=i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:T(),p(r?"Update success!":"Create success!"),t(Z.vB.eCommerce.list),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var r=this,n=arguments;return new Promise((function(t,i){var o=e.apply(r,n);function a(e){k(o,t,i,a,s,"next",e)}function s(e){k(o,t,i,a,s,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}(),$=(0,a.useCallback)((function(e){N("images",e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}),[N]);return(0,o.jsx)(S.RV,{methods:B,onSubmit:E(D),children:(0,o.jsxs)(h.ZP,{container:!0,spacing:3,children:[(0,o.jsx)(h.ZP,{item:!0,xs:12,md:8,children:(0,o.jsx)(g.Z,{sx:{p:3},children:(0,o.jsxs)(x.Z,{spacing:3,children:[(0,o.jsx)(S.au,{name:"name",label:"Product Name"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(I,{children:"Description"}),(0,o.jsx)(S.LM,{simple:!0,name:"description"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(I,{children:"Images"}),(0,o.jsx)(S.fT,{name:"images",showPreview:!0,accept:"image/*",maxSize:3145728,onDrop:$,onRemove:function(e){var r,n=null===(r=z.images)||void 0===r?void 0:r.filter((function(r){return r!==e}));N("images",n)},onRemoveAll:function(){N("images",[])}})]})]})})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:4,children:(0,o.jsxs)(x.Z,{spacing:3,children:[(0,o.jsxs)(g.Z,{sx:{p:3},children:[(0,o.jsx)(S._e,{name:"inStock",label:"In stock"}),(0,o.jsxs)(x.Z,{spacing:3,mt:2,children:[(0,o.jsx)(S.au,{name:"code",label:"Product Code"}),(0,o.jsx)(S.au,{name:"sku",label:"Product SKU"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(I,{children:"Gender"}),(0,o.jsx)(S.km,{name:"gender",options:P,sx:{"& .MuiFormControlLabel-root":{mr:4}}})]}),(0,o.jsx)(S.Cc,{name:"category",label:"Category",children:C.map((function(e){return(0,o.jsx)("optgroup",{label:e.group,children:e.classify.map((function(e){return(0,o.jsx)("option",{value:e,children:e},e)}))},e.group)}))}),(0,o.jsx)(u.Qr,{name:"tags",control:M,render:function(e){var r=e.field;return(0,o.jsx)(b.Z,O({},r,{multiple:!0,freeSolo:!0,onChange:function(e,n){return r.onChange(n)},options:R.map((function(e){return e})),renderTags:function(e,r){return e.map((function(e,n){return(0,a.createElement)(v.Z,O({},r({index:n}),{key:e,size:"small",label:e}))}))},renderInput:function(e){return(0,o.jsx)(y.Z,O({label:"Tags"},e))}}))}})]})]}),(0,o.jsxs)(g.Z,{sx:{p:3},children:[(0,o.jsxs)(x.Z,{spacing:3,mb:2,children:[(0,o.jsx)(S.au,{name:"price",label:"Regular Price",placeholder:"0.00",value:0===_("price")?"":_("price"),onChange:function(e){return N("price",Number(e.target.value))},InputLabelProps:{shrink:!0},InputProps:{startAdornment:(0,o.jsx)(j.Z,{position:"start",children:"$"}),type:"number"}}),(0,o.jsx)(S.au,{name:"priceSale",label:"Sale Price",placeholder:"0.00",value:0===_("priceSale")?"":_("priceSale"),onChange:function(e){return N("price",Number(e.target.value))},InputLabelProps:{shrink:!0},InputProps:{startAdornment:(0,o.jsx)(j.Z,{position:"start",children:"$"}),type:"number"}})]}),(0,o.jsx)(S._e,{name:"taxes",label:"Price includes taxes"})]}),(0,o.jsx)(m.Z,{type:"submit",variant:"contained",size:"large",loading:A,children:r?"Save Changes":"Create Product"})]})})]})})}}}]);