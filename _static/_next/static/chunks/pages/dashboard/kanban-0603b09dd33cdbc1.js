(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4766],{18659:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/kanban",function(){return t(37561)}])},27602:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(85893),i=t(67294),o=t(92879),a=t(2734),c=t(41796),s=t(42287),l=t(15861);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}function h(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function f(){var e=(0,a.Z)(),n="rtl"===e.direction,t=e.palette.grey[600].replace("#",""),i=function(e){return"url(https://api.iconify.design/carbon/".concat(e,".svg?color=%23").concat(t,"&width=").concat(32,"&height=").concat(32,")")},o=function(n){return{opacity:1,alignItems:"center",display:"inline-flex",justifyContent:"center",backgroundImage:"unset",backgroundColor:"transparent",transition:e.transitions.create("opacity"),"&:before":{display:"block",width:32,height:32,content:i(n)},"&:hover":{opacity:.72}}};return(0,r.jsx)(s.Z,{styles:{"& .ReactModalPortal":{"& .ril__outer":{backgroundColor:(0,c.Fq)(e.palette.grey[900],.96)},"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-of-type":{flexGrow:1},"& li:not(:first-of-type)":{width:40,height:40,justifyContent:"center",marginLeft:e.spacing(2)}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":o("zoom-in"),"&.ril__zoomOutButton":o("zoom-out"),"&.ril__closeButton":o("close")},"& .ril__navButtons":{padding:e.spacing(3),"&.ril__navButtonPrev":d({right:"auto",left:e.spacing(2)},o(n?"arrow-right":"arrow-left")),"&.ril__navButtonNext":d({left:"auto",right:e.spacing(2)},o(n?"arrow-left":"arrow-right"))}}}})}function p(e){var n=e.images,t=e.photoIndex,a=e.setPhotoIndex,c=e.isOpen,s=h(e,["images","photoIndex","setPhotoIndex","isOpen"]);(0,i.useEffect)((function(){document.body.style.overflow=c?"hidden":"unset"}),[c]);var u=[(0,r.jsx)(l.Z,{variant:"subtitle2",children:"".concat(t+1," / ").concat(n.length)})];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),c&&(0,r.jsx)(o.Z,d({animationDuration:160,nextSrc:n[(t+1)%n.length],prevSrc:n[(t+n.length-1)%n.length],onMovePrevRequest:function(){return a((t+n.length-1)%n.length)},onMoveNextRequest:function(){return a((t+1)%n.length)},toolbarButtons:u,reactModalStyle:{overlay:{zIndex:9999}}},s))]})}},37561:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Me}});var r=t(85893),i=t(67294),o=t(27948),a=t(26447),c=t(15948),s=t(23008),l=t(99196),u=t(96259),d=t(64156),h=t(61582),f=t(72728),p=t(96339),x=t(55113),m=t(99226),g=t(15861),j=t(69368),y=t(97349),b=t(3140),v=t(10511),w=t(11496),Z=t(58826),k=t(34386),O=t(11057),S=t(67720),P=t(57709),I=t(87952),C=t(50135),D=t(18972),M=t(10653),_=t(50946),z=t(50067),R=t(69127),T=t(27602);function A(e){var n=e.comments,t=(0,i.useState)(!1),o=t[0],c=t[1],s=(0,i.useState)(0),l=s[0],u=s[1],d=n.filter((function(e){return"image"===e.messageType})).map((function(e){return e.message}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{spacing:3,sx:{py:3,px:2.5,bgcolor:"background.neutral"},children:n.map((function(e){return(0,r.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,r.jsx)(I.Z,{src:e.avatar,sx:{width:32,height:32}}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,r.jsxs)(g.Z,{variant:"subtitle2",children:[" ",e.name]}),(0,r.jsx)(g.Z,{variant:"caption",sx:{color:"text.secondary"},children:(0,R.DY)(e.createdAt)})]}),"image"===e.messageType?(0,r.jsx)(y.Z,{alt:e.message,src:e.message,onClick:function(){return function(e){var n=d.findIndex((function(n){return n===e}));c(!0),u(n)}(e.message)},sx:{mt:2,borderRadius:1}}):(0,r.jsx)(g.Z,{variant:"body2",sx:{mt:.5},children:e.message})]})]},e.id)}))}),(0,r.jsx)(T.Z,{images:d,mainSrc:d[l],photoIndex:l,setPhotoIndex:u,isOpen:o,onCloseRequest:function(){return c(!1)}})]})}var E=t(47037),W=t.n(E),B=t(32512),F=t(41796),N=t(93946);function U(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){U(e,n,t[n])}))}return e}var K=(0,w.ZP)("div")((function(e){var n=e.theme;return{width:64,height:64,fontSize:24,display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",margin:n.spacing(.5),borderRadius:n.shape.borderRadius,border:"dashed 1px ".concat(n.palette.divider),"&:hover":{opacity:.72}}}));function L(e){var n=e.attachments,t=(0,i.useState)(!1),o=t[0],a=t[1],c=(0,i.useState)(0),s=c[0],l=c[1],u=n;return(0,r.jsxs)(r.Fragment,{children:[n.map((function(e){return(0,r.jsx)(y.Z,{alt:e,src:e,onClick:function(){return function(e){var n=u.findIndex((function(n){return n===e}));a(!0),l(n)}(e)},sx:{m:.5,width:64,height:64,borderRadius:1,cursor:"pointer"}},e)})),(0,r.jsx)(G,{}),(0,r.jsx)(T.Z,{images:u,mainSrc:u[s],photoIndex:s,setPhotoIndex:l,isOpen:o,onCloseRequest:function(){return a(!1)}})]})}function G(){var e=(0,i.useState)([]),n=e[0],t=e[1],o=(0,i.useCallback)((function(e){t(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}),[t]),a=(0,B.uI)({onDrop:o}),c=a.getRootProps,s=a.getInputProps,l=a.isDragActive;return(0,r.jsxs)(r.Fragment,{children:[n.map((function(e){var i=e.name,o=e.preview,a=W()(e)?e:i;return(0,r.jsxs)(m.Z,q({},(0,z.EU)().inRight,{sx:{p:0,m:.5,width:64,height:64,borderRadius:1,overflow:"hidden",position:"relative"},children:[(0,r.jsx)(y.Z,{alt:"preview",src:W()(e)?e:o,sx:{height:1,position:"absolute",border:function(e){return"solid 1px ".concat(e.palette.divider)}}}),(0,r.jsx)(m.Z,{sx:{top:6,right:6,position:"absolute"},children:(0,r.jsx)(N.Z,{size:"small",onClick:function(){return function(e){var r=n.filter((function(n){return n!==e}));t(r)}(e)},sx:{p:"2px",color:"common.white",bgcolor:function(e){return(0,F.Fq)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return(0,F.Fq)(e.palette.grey[900],.48)}}},children:(0,r.jsx)(b.Z,{icon:"eva:close-fill"})})})]}),a)})),(0,r.jsxs)(K,q({},c(),{sx:q({},l&&{opacity:.72}),children:[(0,r.jsx)("input",q({},s())),(0,r.jsx)(b.Z,{icon:"eva:plus-fill",sx:{color:"text.secondary"}})]}))]})}var Y=t(80451);function H(){return(0,r.jsxs)(a.Z,{direction:"row",spacing:2,sx:{py:3,px:2.5},children:[(0,r.jsx)(Y.Z,{}),(0,r.jsxs)(x.Z,{variant:"outlined",sx:{p:1,flexGrow:1},children:[(0,r.jsx)(P.Z,{fullWidth:!0,multiline:!0,rows:2,placeholder:"Type a message",sx:{"& fieldset":{display:"none"}}}),(0,r.jsxs)(a.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,r.jsxs)(a.Z,{direction:"row",spacing:.5,children:[(0,r.jsx)(k.Z,{title:"Add photo",children:(0,r.jsx)(N.Z,{size:"small",children:(0,r.jsx)(b.Z,{icon:"ic:round-add-photo-alternate",width:20,height:20})})}),(0,r.jsx)(N.Z,{size:"small",children:(0,r.jsx)(b.Z,{icon:"eva:attach-2-fill",width:20,height:20})})]}),(0,r.jsx)(O.Z,{variant:"contained",children:"Comment"})]})]})]})}var X=t(3151),$=t(49160),J=t(32912),Q=t(23926),V=t(1577);function ee(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ee(e,n,t[n])}))}return e}var te={attachments:[],comments:[],description:"",due:[null,null],assignee:[]};function re(e){var n=e.onAddTask,t=e.onCloseAddTask,o=(0,i.useState)(""),c=o[0],s=o[1],l=(0,i.useState)(!1),u=l[0],d=l[1],h=ie({date:[null,null]}),f=h.dueDate,p=h.startTime,m=h.endTime,g=h.isSameDays,y=h.isSameMonths,w=h.onChangeDueDate,Z=h.openPicker,O=h.onOpenPicker,S=h.onClosePicker;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Q.Z,{onClickAway:function(){c&&n(ne({},te,{id:(0,V.Z)(),name:c,due:f,completed:u})),t()},children:(0,r.jsxs)(x.Z,{variant:"outlined",sx:{p:2},children:[(0,r.jsx)(P.Z,{multiline:!0,size:"small",placeholder:"Task name",value:c,onChange:function(e){return s(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&""!==c.trim()&&n(ne({},te,{id:(0,V.Z)(),name:c,due:f,completed:u}))},sx:{"& input":{p:0},"& fieldset":{borderColor:"transparent !important"}}}),(0,r.jsxs)(a.Z,{direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(k.Z,{title:"Mark task complete",children:(0,r.jsx)(j.Z,{disableRipple:!0,checked:u,onChange:function(e){d(e.target.checked)},icon:(0,r.jsx)(b.Z,{icon:"eva:radio-button-off-outline"}),checkedIcon:(0,r.jsx)(b.Z,{icon:"eva:checkmark-circle-2-outline"})})}),(0,r.jsxs)(a.Z,{direction:"row",spacing:1.5,alignItems:"center",children:[(0,r.jsx)(k.Z,{title:"Assign this task",children:(0,r.jsx)(N.Z,{size:"small",children:(0,r.jsx)(b.Z,{icon:"eva:people-fill",width:20,height:20})})}),p&&m?(0,r.jsx)(oe,{startTime:p,endTime:m,isSameDays:g,isSameMonths:y,onOpenPicker:O}):(0,r.jsx)(k.Z,{title:"Add due date",children:(0,r.jsx)(N.Z,{size:"small",onClick:O,children:(0,r.jsx)(b.Z,{icon:"eva:calendar-fill",width:20,height:20})})}),(0,r.jsx)(v.Z,{open:Z,onClose:S,onOpen:O,value:f,onChange:w,renderInput:function(){}})]})]})]})})})}function ie(e){var n=e.date,t=(0,i.useState)([n[0],n[1]]),r=t[0],o=t[1],a=(0,i.useState)(!1),c=a[0],s=a[1],l=r[0]||"",u=r[1]||"";return{dueDate:r,startTime:l,endTime:u,isSameDays:(0,X.Z)(new Date(l),new Date(u)),isSameMonths:(0,$.Z)(new Date(l),new Date(u)),onChangeDueDate:function(e){o(e)},openPicker:c,onOpenPicker:function(){s(!0)},onClosePicker:function(){s(!1)}}}function oe(e){var n=e.startTime,t=e.endTime,i=e.isSameDays,o=e.isSameMonths,a=e.onOpenPicker,c=e.sx,s={typography:"caption",cursor:"pointer","&:hover":{opacity:.72}};return o?(0,r.jsx)(m.Z,{onClick:a,sx:ne({},s,c),children:i?(0,J.Z)(new Date(t),"dd MMM"):"".concat((0,J.Z)(new Date(n),"dd")," - ").concat((0,J.Z)(new Date(t),"dd MMM"))}):(0,r.jsxs)(m.Z,{onClick:a,sx:ne({},s,c),children:[(0,J.Z)(new Date(n),"dd MMM")," - ",(0,J.Z)(new Date(t),"dd MMM")]})}function ae(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ce(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ae(e,n,t[n])}))}return e}var se=["low","medium","hight"],le=(0,w.ZP)(g.Z)((function(e){var n=e.theme;return ce({},n.typography.body2,{width:140,fontSize:13,flexShrink:0,color:n.palette.text.secondary})}));function ue(e){var n=e.card,t=e.isOpen,o=e.onClose,c=e.onDeleteTask,s=(0,M.Z)("up","sm"),l=(0,i.useRef)(null),u=(0,i.useState)(n.completed),d=u[0],h=u[1],f=(0,i.useState)("low"),p=f[0],x=f[1],j=n.name,y=n.description,w=n.due,R=n.assignee,T=n.attachments,E=n.comments,W=ie({date:w}),B=W.dueDate,F=W.startTime,N=W.endTime,U=W.isSameDays,q=W.isSameMonths,K=W.onChangeDueDate,G=W.openPicker,Y=W.onOpenPicker,X=W.onClosePicker;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(Z.ZP,{open:t,onClose:o,anchor:"right",PaperProps:{sx:{width:{xs:1,sm:480}}},children:[(0,r.jsxs)(a.Z,{p:2.5,direction:"row",alignItems:"center",children:[!s&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(k.Z,{title:"Back",children:(0,r.jsx)(z.w_,{onClick:o,sx:{mr:1},children:(0,r.jsx)(b.Z,{icon:"eva:arrow-ios-back-fill",width:20,height:20})})})}),(0,r.jsx)(O.Z,{size:"small",variant:"outlined",color:d?"primary":"inherit",startIcon:d&&(0,r.jsx)(b.Z,{icon:"eva:checkmark-fill",width:16,height:16}),onClick:function(){h((function(e){return!e}))},children:d?"Complete":"Mark as complete"}),(0,r.jsxs)(a.Z,{direction:"row",spacing:1,justifyContent:"flex-end",flexGrow:1,children:[(0,r.jsx)(k.Z,{title:"Like this",children:(0,r.jsx)(z.w_,{size:"small",children:(0,r.jsx)(b.Z,{icon:"ic:round-thumb-up",width:20,height:20})})}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k.Z,{title:"Attachment",children:(0,r.jsx)(z.w_,{size:"small",onClick:function(){var e;null===(e=l.current)||void 0===e||e.click()},children:(0,r.jsx)(b.Z,{icon:"eva:attach-2-fill",width:20,height:20})})}),(0,r.jsx)("input",{ref:l,type:"file",style:{display:"none"}})]}),(0,r.jsx)(k.Z,{title:"Delete task",children:(0,r.jsx)(z.w_,{onClick:c,size:"small",children:(0,r.jsx)(b.Z,{icon:"eva:trash-2-outline",width:20,height:20})})}),(0,r.jsx)(k.Z,{title:"More actions",children:(0,r.jsx)(z.w_,{size:"small",children:(0,r.jsx)(b.Z,{icon:"eva:more-horizontal-fill",width:20,height:20})})})]})]}),(0,r.jsx)(S.Z,{}),(0,r.jsxs)(_.Z,{children:[(0,r.jsxs)(a.Z,{spacing:3,sx:{px:2.5,py:3},children:[(0,r.jsx)(P.Z,{fullWidth:!0,multiline:!0,size:"small",placeholder:"Task name",value:j,sx:{typography:"h6","& .MuiOutlinedInput-notchedOutline":{borderColor:"transparent"}}}),(0,r.jsxs)(a.Z,{direction:"row",children:[(0,r.jsx)(le,{sx:{mt:1.5},children:"Assignee"}),(0,r.jsxs)(a.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[R.map((function(e){return(0,r.jsx)(I.Z,{alt:e.name,src:e.avatar,sx:{m:.5,width:36,height:36}},e.id)})),(0,r.jsx)(k.Z,{title:"Add assignee",children:(0,r.jsx)(z.w_,{sx:{p:1,ml:.5,border:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:(0,r.jsx)(b.Z,{icon:"eva:plus-fill",width:20,height:20})})})]})]}),(0,r.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(le,{children:" Due date"}),(0,r.jsxs)(r.Fragment,{children:[F&&N?(0,r.jsx)(oe,{startTime:F,endTime:N,isSameDays:U,isSameMonths:q,onOpenPicker:Y,sx:{typography:"body2"}}):(0,r.jsx)(k.Z,{title:"Add assignee",children:(0,r.jsx)(z.w_,{onClick:Y,sx:{p:1,ml:.5,border:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:(0,r.jsx)(b.Z,{icon:"eva:plus-fill",width:20,height:20})})}),(0,r.jsx)(v.Z,{open:G,onClose:X,onOpen:Y,value:B,onChange:K,renderInput:function(){}})]})]}),(0,r.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(le,{children:"Prioritize"}),(0,r.jsx)(C.Z,{fullWidth:!0,select:!0,size:"small",value:p,onChange:function(e){x(e.target.value)},sx:{"& svg":{display:"none"},"& fieldset":{display:"none"},"& .MuiSelect-select":{p:0,display:"flex",alignItems:"center"}},children:se.map((function(e){return(0,r.jsxs)(D.Z,{value:e,sx:{mx:1,my:.5,borderRadius:1},children:[(0,r.jsx)(m.Z,{sx:ce({mr:1,width:14,height:14,borderRadius:.5,bgcolor:"error.main"},"low"===e&&{bgcolor:"info.main"},"medium"===e&&{bgcolor:"warning.main"})}),(0,r.jsx)(g.Z,{variant:"body2",sx:{textTransform:"capitalize"},children:e})]},e)}))})]}),(0,r.jsxs)(a.Z,{direction:"row",children:[(0,r.jsx)(le,{sx:{mt:2},children:"Description"}),(0,r.jsx)(P.Z,{fullWidth:!0,multiline:!0,rows:3,size:"small",placeholder:"Task name",value:y,sx:{typography:"body2"}})]}),(0,r.jsxs)(a.Z,{direction:"row",children:[(0,r.jsx)(le,{sx:{mt:2},children:"Attachments"}),(0,r.jsx)(a.Z,{direction:"row",flexWrap:"wrap",children:(0,r.jsx)(L,{attachments:T})})]})]}),E.length>0&&(0,r.jsx)(A,{comments:E})]}),(0,r.jsx)(S.Z,{}),(0,r.jsx)(H,{})]})})}function de(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function he(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){de(e,n,t[n])}))}return e}function fe(e){var n=e.card,t=e.onDeleteTask,o=e.index,a=n.name,s=n.attachments,l=(0,i.useState)(!1),u=l[0],d=l[1],h=(0,i.useState)(n.completed),f=h[0],p=h[1],v=function(){d(!0)},w=function(){d(!1)},Z=function(e){p(e.target.checked)};return(0,r.jsx)(c._l,{draggableId:n.id,index:o,children:function(e){return(0,r.jsxs)("div",he({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,children:[(0,r.jsxs)(x.Z,{sx:he({px:2,width:1,position:"relative",boxShadow:function(e){return e.customShadows.z1},"&:hover":{boxShadow:function(e){return e.customShadows.z16}}},s.length>0&&{pt:2}),children:[(0,r.jsxs)(m.Z,{onClick:v,sx:{cursor:"pointer"},children:[s.length>0&&(0,r.jsx)(m.Z,{sx:he({pt:"60%",borderRadius:1,overflow:"hidden",position:"relative",transition:function(e){return e.transitions.create("opacity",{duration:e.transitions.duration.shortest})}},f&&{opacity:.48}),children:(0,r.jsx)(y.Z,{alt:s[0],src:s[0],sx:{position:"absolute",top:0,width:1,height:1}})}),(0,r.jsx)(g.Z,{noWrap:!0,variant:"subtitle2",sx:he({py:3,pl:5,transition:function(e){return e.transitions.create("opacity",{duration:e.transitions.duration.shortest})}},f&&{opacity:.48}),children:a})]}),(0,r.jsx)(j.Z,{disableRipple:!0,checked:f,icon:(0,r.jsx)(b.Z,{icon:"eva:radio-button-off-outline"}),checkedIcon:(0,r.jsx)(b.Z,{icon:"eva:checkmark-circle-2-outline"}),onChange:Z,sx:{position:"absolute",bottom:15}})]}),(0,r.jsx)(ue,{card:n,isOpen:u,onClose:w,onDeleteTask:function(){return t(n.id)}})]}))}})}var pe=t(34051),xe=t.n(pe),me=t(73400),ge=t(14416),je=t(48731);function ye(e){var n=e.columnName,t=e.onDelete,o=e.onUpdate,c=(0,i.useRef)(null),s=(0,i.useState)(n),l=s[0],u=s[1],d=(0,i.useState)(null),h=d[0],f=d[1];(0,i.useEffect)((function(){h&&c.current&&c.current.focus()}),[h]);var p=function(){f(null)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:1,sx:{pt:3},children:[(0,r.jsx)(P.Z,{size:"small",placeholder:"Section name",value:l,onChange:function(e){u(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&c.current&&(c.current.blur(),o(l))},inputRef:c,sx:{typography:"h6",fontWeight:"fontWeightBold","& .MuiOutlinedInput-notchedOutline":{borderColor:"transparent"}}}),(0,r.jsx)(N.Z,{size:"small",onClick:function(e){f(e.currentTarget)},color:h?"inherit":"default",children:(0,r.jsx)(b.Z,{icon:"eva:more-horizontal-fill",width:20,height:20})})]}),(0,r.jsxs)(je.Z,{open:Boolean(h),anchorEl:h,onClose:p,sx:{width:"auto","& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75}},children:[(0,r.jsxs)(D.Z,{onClick:t,sx:{color:"error.main"},children:[(0,r.jsx)(b.Z,{icon:"eva:trash-2-outline",sx:{width:20,height:20,flexShrink:0,mr:1}}),"Delete section"]}),(0,r.jsxs)(D.Z,{onClick:function(){p()},children:[(0,r.jsx)(b.Z,{icon:"eva:edit-fill",sx:{width:20,height:20,flexShrink:0,mr:1}}),"Rename section"]})]})]})}function be(e,n,t,r,i,o,a){try{var c=e[o](a),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,i)}function ve(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){be(o,r,i,a,c,"next",e)}function c(e){be(o,r,i,a,c,"throw",e)}a(void 0)}))}}function we(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ze(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){we(e,n,t[n])}))}return e}function ke(e){var n=e.column,t=e.index,o=(0,s.I0)(),u=(0,me.Ds)().enqueueSnackbar,d=(0,ge.v9)((function(e){return e.kanban})).board,h=(0,i.useState)(!1),f=h[0],p=h[1],m=n.name,g=n.cardIds,j=n.id,y=function(){p((function(e){return!e}))},v=function(){p(!1)},w=function(e){o((0,l._5)({cardId:e,columnId:j}))},Z=function(){var e=ve(xe().mark((function e(t){return xe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t!==m&&(o((0,l.Gw)(j,Ze({},n,{name:t}))),u("Update success!"))}catch(r){console.error(r)}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(){var e=ve(xe().mark((function e(){return xe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{o((0,l.eA)(j))}catch(n){console.error(n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){o((0,l.gI)({card:e,columnId:j})),v()};return(0,r.jsx)(c._l,{draggableId:j,index:t,children:function(e){return(0,r.jsx)(x.Z,Ze({},e.draggableProps,{ref:e.innerRef,variant:"outlined",sx:{px:2,bgcolor:"grey.5008"},children:(0,r.jsxs)(a.Z,Ze({spacing:3},e.dragHandleProps,{children:[(0,r.jsx)(ye,{columnName:m,onDelete:k,onUpdate:Z}),(0,r.jsx)(c.bK,{droppableId:j,type:"task",children:function(e){return(0,r.jsxs)(a.Z,Ze({ref:e.innerRef},e.droppableProps,{spacing:2,width:280,children:[g.map((function(e,n){return(0,r.jsx)(fe,{onDeleteTask:w,card:null===d||void 0===d?void 0:d.cards[e],index:n},e)})),e.placeholder]}))}}),(0,r.jsxs)(a.Z,{spacing:2,sx:{pb:3},children:[f&&(0,r.jsx)(re,{onAddTask:S,onCloseAddTask:v}),(0,r.jsx)(O.Z,{fullWidth:!0,size:"large",color:"inherit",startIcon:(0,r.jsx)(b.Z,{icon:"eva:plus-fill",width:20,height:20}),onClick:y,sx:{fontSize:14},children:"Add Task"})]})]}))}))}})}function Oe(e,n,t,r,i,o,a){try{var c=e[o](a),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,i)}function Se(){var e=(0,i.useRef)(null),n=(0,s.I0)(),t=(0,i.useState)(""),o=t[0],a=t[1],c=(0,i.useState)(!1),u=c[0],d=c[1];(0,i.useEffect)((function(){u&&e.current&&e.current.focus()}),[u]);var h=function(){var e,t=(e=xe().mark((function e(){return xe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{o&&(n((0,l.wy)({name:o})),a("")),d(!1)}catch(t){console.error(t)}case 1:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){Oe(o,r,i,a,c,"next",e)}function c(e){Oe(o,r,i,a,c,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,r.jsxs)(x.Z,{sx:{minWidth:280,width:280},children:[!u&&(0,r.jsx)(O.Z,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",startIcon:(0,r.jsx)(b.Z,{icon:"eva:plus-fill",width:20,height:20}),onClick:function(){d(!0)},children:"Add section"}),u&&(0,r.jsx)(Q.Z,{onClickAway:h,children:(0,r.jsx)(P.Z,{fullWidth:!0,placeholder:"New section",inputRef:e,value:o,onChange:function(e){a(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&h()},sx:{typography:"h6"}})})]})}function Pe(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Ie(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ce(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Ie(e,n,t[n])}))}return e}function De(e){return function(e){if(Array.isArray(e))return Pe(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return Pe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Pe(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Me(){var e=(0,s.I0)(),n=(0,s.v9)((function(e){return e.kanban})).board;(0,i.useEffect)((function(){e((0,l.SZ)())}),[e]);return(0,r.jsx)(h.Z,{title:"Kanban",sx:{height:1},children:(0,r.jsxs)(o.Z,{maxWidth:!1,sx:{height:1},children:[(0,r.jsx)(f.Z,{heading:"Kanban",links:[{name:"Dashboard",href:u.vB.root},{name:"Kanban"}]}),(0,r.jsx)(c.Z5,{onDragEnd:function(t){var r=t.destination,i=t.source,o=t.draggableId,a=t.type;if(r&&(r.droppableId!==i.droppableId||r.index!==i.index)){if("column"===a){var c=Array.from(n.columnOrder);return c.splice(i.index,1),c.splice(r.index,0,o),void e((0,l.Rc)(c))}var s=n.columns[i.droppableId],u=n.columns[r.droppableId];if(s.id!==u.id){var d=De(s.cardIds);d.splice(i.index,1);var h=Ce({},s,{cardIds:d}),f=De(u.cardIds);f.splice(r.index,0,o);var p,x=Ce({},u,{cardIds:f});e((0,l.B)(Ce({},n.columns,(Ie(p={},h.id,h),Ie(p,x.id,x),p))))}else{var m=De(s.cardIds);m.splice(i.index,1),m.splice(r.index,0,o);var g=Ce({},s,{cardIds:m});e((0,l.B)(Ce({},n.columns,Ie({},g.id,g))))}}},children:(0,r.jsx)(c.bK,{droppableId:"all-columns",direction:"horizontal",type:"column",children:function(e){return(0,r.jsxs)(a.Z,Ce({},e.droppableProps,{ref:e.innerRef,direction:"row",alignItems:"flex-start",spacing:3,sx:{height:"calc(100% - 32px)",overflowY:"hidden"},children:[n.columnOrder.length?n.columnOrder.map((function(e,t){return(0,r.jsx)(ke,{index:t,column:n.columns[e]},e)})):(0,r.jsx)(p.Ml,{}),e.placeholder,(0,r.jsx)(Se,{})]}))}})})]})})}Me.getLayout=function(e){return(0,r.jsx)(d.Z,{children:e})}},69127:function(e,n,t){"use strict";t.d(n,{Mu:function(){return a},zM:function(){return c},IO:function(){return s},Pp:function(){return l},DY:function(){return u}});var r=t(32912),i=t(28789),o=t(73015);function a(e){return(0,r.Z)(new Date(e),"dd MMMM yyyy")}function c(e){return(0,r.Z)(new Date(e),"dd MMM yyyy p")}function s(e){return(0,i.Z)(new Date(e))}function l(e){return(0,r.Z)(new Date(e),"dd/MM/yyyy hh:mm p")}function u(e){return(0,o.Z)(new Date(e),{addSuffix:!0})}},1577:function(e,n,t){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=16*Math.random()|0;return("x"===e?n:3&n|8).toString(16)}))}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[630,6586,9910,1631,8756,2879,2513,414,3054,3907,1993,4156,8208,9774,2888,6377],(function(){return n=18659,e(e.s=n);var n}));var n=e.O();_N_E=n}]);