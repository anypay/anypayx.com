(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5041],{6707:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/analytics",function(){return n(72851)}])},72851:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return je}});var r=n(85893),i=n(27948),a=n(15861),s=n(86886),o=n(10901),l=n(64156),c=n(61582),d=n(67294),u=n(87536),x=n(66242),h=n(78445),p=n(26447),f=n(50480),m=n(69368),j=n(93946),g=n(18972),Z=n(67720),v=n(3140),y=n(48731);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}function k(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P=["Create FireStone Logo","Add SCSS and JS files if required","Stakeholder Meeting","Scoping & Estimations","Sprint Showcase"];function C(){var e=(0,u.cI)({defaultValues:{taskCompleted:["Stakeholder Meeting"]}}).control;return(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(h.Z,{title:"Tasks"}),(0,r.jsx)(u.Qr,{name:"taskCompleted",control:e,render:function(e){var t=e.field;return(0,r.jsx)(r.Fragment,{children:P.map((function(e){return(0,r.jsx)(O,{task:e,checked:t.value.includes(e),onChange:function(){return t.onChange(function(e){return t.value.includes(e)?t.value.filter((function(t){return t!==e})):k(t.value).concat([e])}(e))}},e)}))})}})]})}function O(e){var t=e.task,n=e.checked,i=e.onChange;return(0,r.jsxs)(p.Z,{direction:"row",sx:S({px:2,py:.75},n&&{color:"text.disabled",textDecoration:"line-through"}),children:[(0,r.jsx)(f.Z,{control:(0,r.jsx)(m.Z,{checked:n,onChange:i}),label:t,sx:{flexGrow:1,m:0}}),(0,r.jsx)(M,{})]})}function M(){var e=(0,d.useState)(null),t=e[0],n=e[1],i={mr:2,width:20,height:20};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.Z,{size:"large",onClick:function(e){n(e.currentTarget)},children:(0,r.jsx)(v.Z,{icon:"eva:more-vertical-fill",width:20,height:20})}),(0,r.jsxs)(y.Z,{open:Boolean(t),anchorEl:t,onClose:function(){n(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-.5,width:"auto","& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75}},children:[(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(v.Z,{icon:"eva:checkmark-circle-2-fill",sx:S({},i)}),"Mark Complete"]}),(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(v.Z,{icon:"eva:edit-fill",sx:S({},i)}),"Edit"]}),(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(v.Z,{icon:"eva:share-fill",sx:S({},i)}),"Share"]}),(0,r.jsx)(Z.Z,{sx:{borderStyle:"dashed"}}),(0,r.jsxs)(g.Z,{sx:{color:"error.main"},children:[(0,r.jsx)(v.Z,{icon:"eva:trash-2-outline",sx:S({},i)}),"Delete"]})]})]})}var A=n(99226),T=n(11057),F=n(50122),I=n(69127),E=n(26967),_=n(97349),D=n(50946);function z(){return(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(h.Z,{title:"News Update"}),(0,r.jsx)(D.Z,{children:(0,r.jsx)(p.Z,{spacing:3,sx:{p:3,pr:0},children:E.SH.map((function(e){return(0,r.jsx)(N,{news:e},e.id)}))})}),(0,r.jsx)(Z.Z,{}),(0,r.jsx)(A.Z,{sx:{p:2,textAlign:"right"},children:(0,r.jsx)(T.Z,{size:"small",color:"inherit",endIcon:(0,r.jsx)(v.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"View all"})})]})}function N(e){var t=e.news,n=t.image,i=t.title,s=t.description,o=t.postedAt;return(0,r.jsxs)(p.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,r.jsx)(_.Z,{alt:i,src:n,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0}}),(0,r.jsxs)(A.Z,{sx:{minWidth:240},children:[(0,r.jsx)(F.Z,{color:"inherit",children:(0,r.jsx)(a.Z,{variant:"subtitle2",noWrap:!0,children:i})}),(0,r.jsx)(a.Z,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:s})]}),(0,r.jsx)(a.Z,{variant:"caption",sx:{pr:3,flexShrink:0,color:"text.secondary"},children:(0,I.DY)(o)})]})}var W=n(82492),R=n.n(W),L=n(11496),U=n(2734),B=n(13162),G=n(38298),H=(0,L.ZP)("div")((function(e){var t=e.theme;return{height:372,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:372},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(300,"px) !important")}}})),K=[4344,5435,1443,4443];function V(){var e=(0,U.Z)(),t=R()((0,G.Fx)(),{colors:[e.palette.primary.main,e.palette.chart.blue[0],e.palette.chart.violet[0],e.palette.chart.yellow[0]],labels:["America","Asia","Europe","Africa"],stroke:{colors:[e.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:function(e){return(0,B.FK)(e)},title:{formatter:function(e){return"".concat(e)}}}},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(h.Z,{title:"Current Visits"}),(0,r.jsx)(H,{dir:"ltr",children:(0,r.jsx)(G.ZP,{type:"pie",series:K,options:t,height:280})})]})}var q=n(44267),J=n(36599),X=n(36270),Y=n(9601),$=n(17494),Q=n(51221),ee=n(72162);function te(){return(0,r.jsxs)(x.Z,{sx:{"& .MuiTimelineItem-missingOppositeContent:before":{display:"none"}},children:[(0,r.jsx)(h.Z,{title:"Order Timeline"}),(0,r.jsx)(q.Z,{children:(0,r.jsx)(J.Z,{children:E.ZP.map((function(e,t){return(0,r.jsx)(ne,{item:e,isLast:t===E.ZP.length-1},e.id)}))})})]})}function ne(e){var t=e.item,n=e.isLast,i=t.type,s=t.title,o=t.time;return(0,r.jsxs)(X.Z,{children:[(0,r.jsxs)(Y.Z,{children:[(0,r.jsx)($.Z,{color:("order1"===i?"primary":"order2"===i&&"success")||"order3"===i&&"info"||"order4"===i&&"warning"||"error"}),n?null:(0,r.jsx)(Q.Z,{})]}),(0,r.jsxs)(ee.Z,{children:[(0,r.jsx)(a.Z,{variant:"subtitle2",children:s}),(0,r.jsx)(a.Z,{variant:"caption",sx:{color:"text.secondary"},children:(0,I.zM)(o)})]})]})}var re=n(55113);function ie(){return(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(h.Z,{title:"Traffic by Site"}),(0,r.jsx)(q.Z,{children:(0,r.jsx)(s.ZP,{container:!0,spacing:2,children:E.$O.map((function(e){return(0,r.jsx)(ae,{site:e},e.name)}))})})]})}function ae(e){var t=e.site,n=t.icon,i=t.value,o=t.name;return(0,r.jsx)(s.ZP,{item:!0,xs:6,children:(0,r.jsxs)(re.Z,{variant:"outlined",sx:{py:2.5,textAlign:"center"},children:[(0,r.jsx)(A.Z,{sx:{mb:.5},children:n}),(0,r.jsx)(a.Z,{variant:"h6",children:(0,B.v1)(i)}),(0,r.jsx)(a.Z,{variant:"body2",sx:{color:"text.secondary"},children:o})]})})}var se=[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}];function oe(){var e=R()((0,G.Fx)(),{stroke:{width:[0,2,3]},plotOptions:{bar:{columnWidth:"14%"}},fill:{type:["solid","gradient","solid"]},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0)," visits"):e}}}});return(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(h.Z,{title:"Website Visits",subheader:"(+43%) than last year"}),(0,r.jsx)(A.Z,{sx:{p:3,pb:1},dir:"ltr",children:(0,r.jsx)(G.ZP,{type:"line",series:se,options:e,height:364})})]})}var le=n(41796),ce=(0,L.ZP)(x.Z)((function(e){return{boxShadow:"none",textAlign:"center",padding:e.theme.spacing(5,0)}})),de=(0,L.ZP)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3)}}));function ue(e){var t=e.title,n=e.total,i=e.icon,s=e.color,o=void 0===s?"primary":s;return(0,r.jsxs)(ce,{sx:{color:function(e){return e.palette[o].darker},bgcolor:function(e){return e.palette[o].lighter}},children:[(0,r.jsx)(de,{sx:{color:function(e){return e.palette[o].dark},backgroundImage:function(e){return"linear-gradient(135deg, ".concat((0,le.Fq)(e.palette[o].dark,0)," 0%, ").concat((0,le.Fq)(e.palette[o].dark,.24)," 100%)")}},children:(0,r.jsx)(v.Z,{icon:i,width:24,height:24})}),(0,r.jsx)(a.Z,{variant:"h3",children:(0,B.v1)(n)}),(0,r.jsx)(a.Z,{variant:"subtitle2",sx:{opacity:.72},children:t})]})}var xe=(0,L.ZP)("div")((function(e){var t=e.theme;return{height:392,marginTop:t.spacing(2),"& .apexcharts-canvas svg":{height:392},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(320,"px) !important")}}})),he=[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}];function pe(){var e=(0,U.Z)(),t=R()((0,G.Fx)(),{stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,horizontalAlign:"center"},xaxis:{categories:["English","History","Physics","Geography","Chinese","Math"],labels:{style:{colors:[e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary]}}}});return(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(h.Z,{title:"Current Subject"}),(0,r.jsx)(xe,{dir:"ltr",children:(0,r.jsx)(G.ZP,{type:"radar",series:he,options:t,height:340})})]})}var fe=[{data:[400,430,448,470,540,580,690,1100,1200,1380]}];function me(){var e=R()((0,G.Fx)(),{tooltip:{marker:{show:!1},y:{formatter:function(e){return(0,B.FK)(e)},title:{formatter:function(){return""}}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:["Italy","Japan","China","Canada","France","Germany","South Korea","Netherlands","United States","United Kingdom"]}});return(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(h.Z,{title:"Conversion Rates",subheader:"(+43%) than last year"}),(0,r.jsx)(A.Z,{sx:{mx:3},dir:"ltr",children:(0,r.jsx)(G.ZP,{type:"bar",series:fe,options:e,height:364})})]})}function je(){var e=(0,o.Z)().themeStretch;return(0,r.jsx)(c.Z,{title:"General: Analytics",children:(0,r.jsxs)(i.Z,{maxWidth:!e&&"xl",children:[(0,r.jsx)(a.Z,{variant:"h4",sx:{mb:5},children:"Hi, Welcome back"}),(0,r.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,r.jsx)(ue,{title:"Weekly Sales",total:714e3,icon:"ant-design:android-filled"})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,r.jsx)(ue,{title:"New Users",total:1352831,color:"info",icon:"ant-design:apple-filled"})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,r.jsx)(ue,{title:"Item Orders",total:1723315,color:"warning",icon:"ant-design:windows-filled"})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,r.jsx)(ue,{title:"Bug Reports",total:234,color:"error",icon:"ant-design:bug-filled"})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,r.jsx)(oe,{})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,r.jsx)(V,{})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,r.jsx)(me,{})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,r.jsx)(pe,{})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,r.jsx)(z,{})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,r.jsx)(te,{})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,r.jsx)(ie,{})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,r.jsx)(C,{})})]})]})})}je.getLayout=function(e){return(0,r.jsx)(l.Z,{children:e})}},69127:function(e,t,n){"use strict";n.d(t,{Mu:function(){return s},zM:function(){return o},IO:function(){return l},Pp:function(){return c},DY:function(){return d}});var r=n(32912),i=n(28789),a=n(73015);function s(e){return(0,r.Z)(new Date(e),"dd MMMM yyyy")}function o(e){return(0,r.Z)(new Date(e),"dd MMM yyyy p")}function l(e){return(0,i.Z)(new Date(e))}function c(e){return(0,r.Z)(new Date(e),"dd/MM/yyyy hh:mm p")}function d(e){return(0,a.Z)(new Date(e),{addSuffix:!0})}}},function(e){e.O(0,[6586,9910,1631,4608,9643,3907,1993,4156,6955,6967,9774,2888,6377],(function(){return t=6707,e(e.s=t);var t}));var t=e.O();_N_E=t}]);