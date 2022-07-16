(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1188],{67358:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(63366),o=t(87462),i=t(67294),a=(t(59864),t(86010)),s=t(27192),d=t(11496),c=t(33616),u=t(57922),l=t(55113),p=t(64861),h=t(49299),m=t(28979);function x(e){return(0,m.Z)("MuiAccordion",e)}var f=(0,t(76087).Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),g=t(85893);const b=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],Z=(0,d.ZP)(l.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${f.region}`]:n.region},n.root,!t.square&&n.rounded,!t.disableGutters&&n.gutters]}})((({theme:e})=>{const n={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],n),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${f.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${f.disabled}`]:{backgroundColor:e.palette.action.disabledBackground}}}),(({theme:e,ownerState:n})=>(0,o.Z)({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&{[`&.${f.expanded}`]:{margin:"16px 0"}})));var v=i.forwardRef((function(e,n){const t=(0,c.Z)({props:e,name:"MuiAccordion"}),{children:d,className:l,defaultExpanded:m=!1,disabled:f=!1,disableGutters:v=!1,expanded:y,onChange:j,square:w=!1,TransitionComponent:R=u.Z,TransitionProps:A}=t,k=(0,r.Z)(t,b),[C,N]=(0,h.Z)({controlled:y,default:m,name:"Accordion",state:"expanded"}),I=i.useCallback((e=>{N(!C),j&&j(e,!C)}),[C,j,N]),[P,...M]=i.Children.toArray(d),S=i.useMemo((()=>({expanded:C,disabled:f,disableGutters:v,toggle:I})),[C,f,v,I]),G=(0,o.Z)({},t,{square:w,disabled:f,disableGutters:v,expanded:C}),W=(e=>{const{classes:n,square:t,expanded:r,disabled:o,disableGutters:i}=e,a={root:["root",!t&&"rounded",r&&"expanded",o&&"disabled",!i&&"gutters"],region:["region"]};return(0,s.Z)(a,x,n)})(G);return(0,g.jsxs)(Z,(0,o.Z)({className:(0,a.Z)(W.root,l),ref:n,ownerState:G,square:w},k,{children:[(0,g.jsx)(p.Z.Provider,{value:S,children:P}),(0,g.jsx)(R,(0,o.Z)({in:C,timeout:"auto"},A,{children:(0,g.jsx)("div",{"aria-labelledby":P.props.id,id:P.props["aria-controls"],role:"region",className:W.region,children:M})}))]}))}))},64861:function(e,n,t){"use strict";const r=t(67294).createContext({});n.Z=r},22797:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(87462),o=t(63366),i=t(67294),a=t(86010),s=t(27192),d=t(11496),c=t(33616),u=t(28979);function l(e){return(0,u.Z)("MuiAccordionDetails",e)}(0,t(76087).Z)("MuiAccordionDetails",["root"]);var p=t(85893);const h=["className"],m=(0,d.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,n)=>n.root})((({theme:e})=>({padding:e.spacing(1,2,2)})));var x=i.forwardRef((function(e,n){const t=(0,c.Z)({props:e,name:"MuiAccordionDetails"}),{className:i}=t,d=(0,o.Z)(t,h),u=t,x=(e=>{const{classes:n}=e;return(0,s.Z)({root:["root"]},l,n)})(u);return(0,p.jsx)(m,(0,r.Z)({className:(0,a.Z)(x.root,i),ref:n,ownerState:u},d))}))},38895:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(63366),o=t(87462),i=t(67294),a=t(86010),s=t(27192),d=t(11496),c=t(33616),u=t(49990),l=t(64861),p=t(28979);function h(e){return(0,p.Z)("MuiAccordionSummary",e)}var m=(0,t(76087).Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),x=t(85893);const f=["children","className","expandIcon","focusVisibleClassName","onClick"],g=(0,d.ZP)(u.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,n)=>n.root})((({theme:e,ownerState:n})=>{const t={duration:e.transitions.duration.shortest};return(0,o.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${m.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${m.disabled}`]:{opacity:e.palette.action.disabledOpacity},[`&:hover:not(.${m.disabled})`]:{cursor:"pointer"}},!n.disableGutters&&{[`&.${m.expanded}`]:{minHeight:64}})})),b=(0,d.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,n)=>n.content})((({theme:e,ownerState:n})=>(0,o.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${m.expanded}`]:{margin:"20px 0"}}))),Z=(0,d.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,n)=>n.expandIconWrapper})((({theme:e})=>({display:"flex",color:e.palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${m.expanded}`]:{transform:"rotate(180deg)"}})));var v=i.forwardRef((function(e,n){const t=(0,c.Z)({props:e,name:"MuiAccordionSummary"}),{children:d,className:u,expandIcon:p,focusVisibleClassName:m,onClick:v}=t,y=(0,r.Z)(t,f),{disabled:j=!1,disableGutters:w,expanded:R,toggle:A}=i.useContext(l.Z),k=(0,o.Z)({},t,{expanded:R,disabled:j,disableGutters:w}),C=(e=>{const{classes:n,expanded:t,disabled:r,disableGutters:o}=e,i={root:["root",t&&"expanded",r&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]};return(0,s.Z)(i,h,n)})(k);return(0,x.jsxs)(g,(0,o.Z)({focusRipple:!1,disableRipple:!0,disabled:j,component:"div","aria-expanded":R,className:(0,a.Z)(C.root,u),focusVisibleClassName:(0,a.Z)(C.focusVisible,m),onClick:e=>{A&&A(e),v&&v(e)},ref:n,ownerState:k},y,{children:[(0,x.jsx)(b,{className:C.content,ownerState:k,children:d}),p&&(0,x.jsx)(Z,{className:C.expandIconWrapper,ownerState:k,children:p})]}))}))},15540:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faqs",function(){return t(57106)}])},57106:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(85893),o=t(11496),i=t(27948),a=t(15861),s=t(86886),d=t(64156),c=t(61582),u=t(26447),l=t(99226),p=t(50067);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=(0,o.ZP)("div")((function(e){var n=e.theme;return h({backgroundSize:"cover",backgroundImage:"url(https://minimal-assets-api.vercel.app/assets/overlay.svg), url(https://minimal-assets-api.vercel.app/assets/images/faqs/hero.jpg)",padding:n.spacing(10,0)},n.breakpoints.up("md"),{height:560,padding:0})})),x=(0,o.ZP)(u.Z)((function(e){var n=e.theme;return h({textAlign:"center"},n.breakpoints.up("md"),{textAlign:"left",position:"absolute",bottom:n.spacing(10)})}));function f(){return(0,r.jsx)(m,{children:(0,r.jsx)(i.Z,{component:p.NM,sx:{position:"relative",height:"100%"},children:(0,r.jsx)(x,{spacing:5,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(p.gH,{text:"How",sx:{color:"primary.main"},variants:(0,p.EU)().inRight}),(0,r.jsx)("br",{}),(0,r.jsxs)(l.Z,{sx:{display:"inline-flex",color:"common.white"},children:[(0,r.jsx)(p.gH,{text:"can",sx:{mr:2}}),(0,r.jsx)(p.gH,{text:"we",sx:{mr:2}}),(0,r.jsx)(p.gH,{text:"help",sx:{mr:2}}),(0,r.jsx)(p.gH,{text:"you?"})]})]})})})})}var g=t(67358),b=t(38895),Z=t(22797),v=t(3140),y=["What is the value of Anypay?","What does Anypay do?","What services does Anypay offer?","Why should I use Anypay?","Who is Anypay for?","How much does it cost?","How does it work?","Is it custodial or not?","Do I have to KYC?"].map((function(e,n){return{id:n,value:"panel".concat(n+1),heading:e,detail:e}})),j=["Are there limits?","Can businesses consider as high-risk use it (e.g.: cannabis dispensary)?","What cryptocurrencies can I use?","Can I add Lightning and Liquid?","Where can I find documentation and tutorials?","Do you have integrations with e-commerce platforms? Which ones?","How do I get support and how do I get in touch with your company?","If you encounter an issue with your software, do your end the development of your platform, or do you work on it and improve it?"].map((function(e,n){return{id:n,value:"panel".concat(n+1),heading:e,detail:e}}));function w(){return(0,r.jsx)(r.Fragment,{children:y.map((function(e){return(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(b.Z,{expandIcon:(0,r.jsx)(v.Z,{icon:"eva:arrow-ios-downward-fill",width:20,height:20}),children:(0,r.jsx)(a.Z,{variant:"subtitle1",children:e.heading})}),(0,r.jsx)(Z.Z,{children:(0,r.jsx)(a.Z,{children:e.detail})})]},e.id)}))})}function R(){return(0,r.jsx)(r.Fragment,{children:j.map((function(e){return(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(b.Z,{expandIcon:(0,r.jsx)(v.Z,{icon:"eva:arrow-ios-downward-fill",width:20,height:20}),children:(0,r.jsx)(a.Z,{variant:"subtitle1",children:e.heading})}),(0,r.jsx)(Z.Z,{children:(0,r.jsx)(a.Z,{children:e.detail})})]},e.id)}))})}t(97349);var A=(0,o.ZP)("div")((function(e){var n,t,r,o=e.theme;return n={paddingTop:o.spacing(8)},t=o.breakpoints.up("md"),r={paddingTop:o.spacing(11)},t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}));function k(){return(0,r.jsx)(c.Z,{title:"Faqs",children:(0,r.jsxs)(A,{children:[(0,r.jsx)(f,{}),(0,r.jsxs)(i.Z,{sx:{mt:15,mb:10},children:[(0,r.jsx)(a.Z,{variant:"h3",sx:{mb:5},children:"Frequently asked questions"}),(0,r.jsxs)(s.ZP,{container:!0,spacing:10,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(w,{})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(R,{})})]})]})]})})}k.getLayout=function(e){return(0,r.jsx)(d.Z,{variant:"main",children:e})}}},function(e){e.O(0,[6586,9910,1631,3907,1993,4156,9774,2888,6377],(function(){return n=15540,e(e.s=n);var n}));var n=e.O();_N_E=n}]);