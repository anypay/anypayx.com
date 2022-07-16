(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[841],{12963:function(e,t,n){"use strict";n.d(t,{Z:function(){return R}});var r=n(87462),o=n(63366),a=n(67294),i=(n(59864),n(86010)),s=n(27192),c=n(11496),l=n(33616),u=n(15861),d=n(41796),h=n(82066),f=n(85893),p=(0,h.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=n(49990);const x=(0,c.ZP)(m.Z)((({theme:e})=>(0,r.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,r.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,r.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),g=(0,c.ZP)(p)({width:24,height:16});var Z=function(e){const t=e;return(0,f.jsx)("li",{children:(0,f.jsx)(x,(0,r.Z)({focusRipple:!0},e,{ownerState:t,children:(0,f.jsx)(g,{ownerState:t})}))})},v=n(28979);function b(e){return(0,v.Z)("MuiBreadcrumbs",e)}var j=(0,n(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,c.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${j.li}`]:t.li},t.root]})({}),y=(0,c.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),C=(0,c.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function k(e,t,n,r){return e.reduce(((o,a,i)=>(i<e.length-1?o=o.concat(a,(0,f.jsx)(C,{"aria-hidden":!0,className:t,ownerState:r,children:n},`separator-${i}`)):o.push(a),o)),[])}var R=a.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiBreadcrumbs"}),{children:c,className:u,component:d="nav",expandText:h="Show path",itemsAfterCollapse:p=1,itemsBeforeCollapse:m=1,maxItems:x=8,separator:g="/"}=n,v=(0,o.Z)(n,S),[j,C]=a.useState(!1),R=(0,r.Z)({},n,{component:d,expanded:j,expandText:h,itemsAfterCollapse:p,itemsBeforeCollapse:m,maxItems:x,separator:g}),N=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},b,t)})(R),L=a.useRef(null),I=a.Children.toArray(c).filter((e=>a.isValidElement(e))).map(((e,t)=>(0,f.jsx)("li",{className:N.li,children:e},`child-${t}`)));return(0,f.jsx)(w,(0,r.Z)({ref:t,component:d,color:"text.secondary",className:(0,i.Z)(N.root,u),ownerState:R},v,{children:(0,f.jsx)(y,{className:N.ol,ref:L,ownerState:R,children:k(j||x&&I.length<=x?I:(e=>m+p>=e.length?e:[...e.slice(0,m),(0,f.jsx)(Z,{"aria-label":h,onClick:()=>{C(!0);const e=L.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-p,e.length)])(I),N.separator,g,R)})}))}))},26280:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(63366),o=n(87462),a=n(27192),i=n(86010),s=n(67294),c=n(49990),l=n(82066),u=n(85893),d=(0,l.Z)((0,u.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),h=n(11496),f=n(33616),p=n(98216),m=n(28979);function x(e){return(0,m.Z)("MuiTableSortLabel",e)}var g=(0,n(76087).Z)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]);const Z=["active","children","className","direction","hideSortIcon","IconComponent"],v=(0,h.ZP)(c.Z,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.active&&t.active]}})((({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,[`& .${g.icon}`]:{opacity:.5}},[`&.${g.active}`]:{color:e.palette.text.primary,[`& .${g.icon}`]:{opacity:1,color:e.palette.text.secondary}}}))),b=(0,h.ZP)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,t[`iconDirection${(0,p.Z)(n.direction)}`]]}})((({theme:e,ownerState:t})=>(0,o.Z)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},"desc"===t.direction&&{transform:"rotate(0deg)"},"asc"===t.direction&&{transform:"rotate(180deg)"})));var j=s.forwardRef((function(e,t){const n=(0,f.Z)({props:e,name:"MuiTableSortLabel"}),{active:s=!1,children:c,className:l,direction:h="asc",hideSortIcon:m=!1,IconComponent:g=d}=n,j=(0,r.Z)(n,Z),S=(0,o.Z)({},n,{active:s,direction:h,hideSortIcon:m,IconComponent:g}),w=(e=>{const{classes:t,direction:n,active:r}=e,o={root:["root",r&&"active"],icon:["icon",`iconDirection${(0,p.Z)(n)}`]};return(0,a.Z)(o,x,t)})(S);return(0,u.jsxs)(v,(0,o.Z)({className:(0,i.Z)(w.root,l),component:"span",disableRipple:!0,ownerState:S,ref:t},j,{children:[c,m&&!s?null:(0,u.jsx)(b,{as:g,className:(0,i.Z)(w.icon),ownerState:S})]}))}))},97973:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/developer/webhooks",function(){return n(2408)}])},2408:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r=n(85893),o=n(49933),a=n(67294),i=n(73400),s=n(41664),c=n(2734),l=n(27948),u=n(11057),d=n(66242),h=n(72882),f=n(7906),p=n(295),m=n(68509),x=n(53252),g=n(69368),Z=n(87952),v=n(15861),b=n(36125),j=n(96259),S=n(10901),w=n(26967),y=n(8100),C=n(21744),k=n(64156),R=n(61582),N=n(4930),L=n(3140),I=n(50946),P=n(80878),M=n(72728),B=n(20969),_=n(3026),D=[{id:"date",label:"Date",alignRight:!1},{id:"invoice",label:"Invoice",alignRight:!1},{id:"url",label:"URL",alignRight:!1},{id:"attempts",label:"Attempts",alignRight:!1},{id:"status",label:"Status",alignRight:!1},{id:""}];function $(){var e=(0,i.Ds)().enqueueSnackbar,t=(0,c.Z)(),n=(0,S.Z)().themeStretch,k=(0,a.useState)(w.Xz),$=k[0],W=k[1],A=(0,a.useState)(0),z=A[0],E=A[1],O=(0,a.useState)("asc"),U=O[0],q=O[1],V=(0,a.useState)([]),X=V[0],H=V[1],F=(0,a.useState)("name"),G=F[0],Q=F[1],Y=(0,a.useState)(""),J=Y[0],K=Y[1],ee=(0,a.useState)(5),te=ee[0],ne=ee[1],re=(0,y.ZP)("https://anypayx.com/v1/api/webhooks",C.Z);re.data;re.error&&e("Error Loading Webhooks",{variant:"warning"});var oe=z>0?Math.max(0,(1+z)*te-$.length):0,ae=function(e,t,n){var r=e.map((function(e,t){return[e,t]}));if(r.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n)return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}));return r.map((function(e){return e[0]}))}($,function(e,t){return"desc"===e?function(e,n){return T(e,n,t)}:function(e,n){return-T(e,n,t)}}(U,G),J),ie=!ae.length&&Boolean(J);return(0,r.jsx)(R.Z,{title:"Webhooks: List",children:(0,r.jsxs)(l.Z,{maxWidth:!n&&"lg",children:[(0,r.jsx)(M.Z,{heading:"Webhooks List",links:[{name:"Dashboard",href:j.vB.root},{name:"Webhooks"}],action:(0,r.jsx)(s.default,{href:j.vB.user.newUser,passHref:!0,children:(0,r.jsx)(u.Z,{variant:"contained",startIcon:(0,r.jsx)(L.Z,{icon:"eva:plus-fill"}),children:"Webhook URL"})})}),(0,r.jsx)(_.Dd,{}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(B.s0,{numSelected:X.length,filterName:J,onFilterName:function(e){K(e),E(0)},onDeleteUsers:function(){return function(e){var t=$.filter((function(t){return!e.includes(t.name)}));H([]),W(t)}(X)}}),(0,r.jsx)(I.Z,{children:(0,r.jsx)(h.Z,{sx:{minWidth:800},children:(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(B.eN,{order:U,orderBy:G,headLabel:D,rowCount:$.length,numSelected:X.length,onRequestSort:function(e){q(G===e&&"asc"===U?"desc":"asc"),Q(e)},onSelectAllClick:function(e){if(e){var t=$.map((function(e){return e.name}));H(t)}else H([])}}),(0,r.jsxs)(p.Z,{children:[ae.slice(z*te,z*te+te).map((function(e){var n=e.id,a=e.name,i=e.role,s=e.status,c=e.company,l=e.avatarUrl,u=e.isVerified,d=-1!==X.indexOf(a);return(0,r.jsxs)(m.Z,{hover:!0,tabIndex:-1,role:"checkbox",selected:d,"aria-checked":d,children:[(0,r.jsx)(x.Z,{padding:"checkbox",children:(0,r.jsx)(g.Z,{checked:d,onClick:function(){return function(e){var t=X.indexOf(e),n=[];-1===t?n=n.concat(X,e):0===t?n=n.concat(X.slice(1)):t===X.length-1?n=n.concat(X.slice(0,-1)):t>0&&(n=n.concat(X.slice(0,t),X.slice(t+1))),H(n)}(a)}})}),(0,r.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(Z.Z,{alt:a,src:l,sx:{mr:2}}),(0,r.jsx)(v.Z,{variant:"subtitle2",noWrap:!0,children:a})]}),(0,r.jsx)(x.Z,{align:"left",children:c}),(0,r.jsx)(x.Z,{align:"left",children:i}),(0,r.jsx)(x.Z,{align:"left",children:u?"Yes":"No"}),(0,r.jsx)(x.Z,{align:"left",children:(0,r.jsx)(N.Z,{variant:"light"===t.palette.mode?"ghost":"filled",color:"banned"===s?"error":"success",children:(0,o.G)(s)})}),(0,r.jsx)(x.Z,{align:"right",children:(0,r.jsx)(B.R$,{onDelete:function(){return function(e){var t=$.filter((function(t){return t.id!==e}));H([]),W(t)}(n)},userName:a})})]},n)})),oe>0&&(0,r.jsx)(m.Z,{style:{height:53*oe},children:(0,r.jsx)(x.Z,{colSpan:6})})]}),ie&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(m.Z,{children:(0,r.jsx)(x.Z,{align:"center",colSpan:6,sx:{py:3},children:(0,r.jsx)(P.Z,{searchQuery:J})})})})]})})}),(0,r.jsx)(b.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:$.length,rowsPerPage:te,page:z,onPageChange:function(e,t){return E(t)},onRowsPerPageChange:function(e){ne(parseInt(e.target.value,10)),E(0)}})]})]})})}function T(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}$.getLayout=function(e){return(0,r.jsx)(k.Z,{children:e})}},34539:function(e,t,n){"use strict";n.d(t,{o:function(){return a}});var r=n(70655),o=n(1902);function a(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),(0,o.B)(e,(0,r.pi)({delimiter:"."},t))}(e,(0,r.pi)({delimiter:"-"},t))}}},function(e){e.O(0,[6586,9910,1631,6032,4411,6125,6066,1440,6970,3907,1993,4156,6955,6967,3026,9562,9774,2888,6377],(function(){return t=97973,e(e.s=t);var t}));var t=e.O();_N_E=t}]);