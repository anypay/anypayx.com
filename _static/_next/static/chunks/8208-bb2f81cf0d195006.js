"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8208],{22284:function(r,t,n){n.d(t,{Z:function(){return x}});var e=n(85893),i=n(41664),a=n(15861),s=n(12963),o=n(99226),c=n(50122);function l(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function u(r,t){if(null==r)return{};var n,e,i=function(r,t){if(null==r)return{};var n,e,i={},a=Object.keys(r);for(e=0;e<a.length;e++)n=a[e],t.indexOf(n)>=0||(i[n]=r[n]);return i}(r,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(e=0;e<a.length;e++)n=a[e],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(i[n]=r[n])}return i}function x(r){var t=r.links,n=r.activeLast,i=void 0!==n&&n,c=u(r,["links","activeLast"]),x=t[t.length-1].name,h=t.map((function(r){return(0,e.jsx)(d,{link:r},r.name)})),f=t.map((function(r){return(0,e.jsx)("div",{children:r.name!==x?(0,e.jsx)(d,{link:r}):(0,e.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:x})},r.name)}));return(0,e.jsx)(s.Z,function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){l(r,t,n[t])}))}return r}({separator:(0,e.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},c,{children:i?h:f}))}function d(r){var t=r.link,n=t.href,a=void 0===n?"":n,s=t.name,l=t.icon;return(0,e.jsx)(i.default,{href:a,passHref:!0,children:(0,e.jsxs)(c.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[l&&(0,e.jsx)(o.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:l}),s]},s)})}},72728:function(r,t,n){n.d(t,{Z:function(){return h}});var e=n(85893),i=n(47037),a=n.n(i),s=n(99226),o=n(15861),c=n(50122),l=n(22284);function u(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function x(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){u(r,t,n[t])}))}return r}function d(r,t){if(null==r)return{};var n,e,i=function(r,t){if(null==r)return{};var n,e,i={},a=Object.keys(r);for(e=0;e<a.length;e++)n=a[e],t.indexOf(n)>=0||(i[n]=r[n]);return i}(r,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(e=0;e<a.length;e++)n=a[e],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(i[n]=r[n])}return i}function h(r){var t=r.links,n=r.action,i=r.heading,u=r.moreLink,h=void 0===u?[]:u,f=r.sx,p=d(r,["links","action","heading","moreLink","sx"]);return(0,e.jsxs)(s.Z,{sx:x({mb:5},f),children:[(0,e.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,e.jsxs)(s.Z,{sx:{flexGrow:1},children:[(0,e.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,e.jsx)(l.Z,x({links:t},p))]}),n&&(0,e.jsx)(s.Z,{sx:{flexShrink:0},children:n})]}),(0,e.jsx)(s.Z,{sx:{mt:2},children:a()(h)?(0,e.jsx)(c.Z,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(r){return(0,e.jsx)(c.Z,{noWrap:!0,href:r,variant:"body2",target:"_blank",sx:{display:"table"},children:r},r)}))})]})}},96339:function(r,t,n){n.d(t,{i4:function(){return y},Ml:function(){return m},bB:function(){return v},Se:function(){return c},VJ:function(){return u},M2:function(){return h},Ti:function(){return d},JJ:function(){return p}});var e=n(85893),i=n(26447),a=n(88078);function s(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function o(r){return function(r){if(Array.isArray(r))return s(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(!r)return;if("string"===typeof r)return s(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(r,t)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(){return(0,e.jsx)(i.Z,{spacing:8,children:o(Array(5)).map((function(r,t){return(0,e.jsx)(a.Z,{variant:"rectangular",sx:{width:1,height:560,borderRadius:2}},t)}))})}var l=n(99226);function u(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.Z,{width:"100%",height:560,variant:"rectangular",sx:{borderRadius:2}}),(0,e.jsxs)(l.Z,{sx:{mt:3,display:"flex",alignItems:"center"},children:[(0,e.jsx)(a.Z,{variant:"circular",width:64,height:64}),(0,e.jsxs)(l.Z,{sx:{flexGrow:1,ml:2},children:[(0,e.jsx)(a.Z,{variant:"text",height:20}),(0,e.jsx)(a.Z,{variant:"text",height:20}),(0,e.jsx)(a.Z,{variant:"text",height:20})]})]})]})}var x=n(86886);function d(){return(0,e.jsxs)(x.ZP,{container:!0,spacing:3,children:[(0,e.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:7,children:(0,e.jsx)(a.Z,{variant:"rectangular",width:"100%",sx:{paddingTop:"100%",borderRadius:2}})}),(0,e.jsxs)(x.ZP,{item:!0,xs:12,md:6,lg:5,children:[(0,e.jsx)(a.Z,{variant:"circular",width:80,height:80}),(0,e.jsx)(a.Z,{variant:"text",height:240}),(0,e.jsx)(a.Z,{variant:"text",height:40}),(0,e.jsx)(a.Z,{variant:"text",height:40}),(0,e.jsx)(a.Z,{variant:"text",height:40})]})]})}function h(){return(0,e.jsxs)(x.ZP,{item:!0,xs:12,sm:6,md:3,children:[(0,e.jsx)(a.Z,{variant:"rectangular",width:"100%",sx:{height:200,borderRadius:2}}),(0,e.jsxs)(l.Z,{sx:{display:"flex",mt:1.5},children:[(0,e.jsx)(a.Z,{variant:"circular",sx:{width:40,height:40}}),(0,e.jsx)(a.Z,{variant:"text",sx:{mx:1,flexGrow:1}})]})]})}var f=n(66242);function p(){return(0,e.jsxs)(f.Z,{children:[(0,e.jsx)(a.Z,{variant:"rectangular",sx:{paddingTop:"100%"}}),(0,e.jsxs)(i.Z,{spacing:2,sx:{p:3},children:[(0,e.jsx)(a.Z,{variant:"text",sx:{width:.5}}),(0,e.jsxs)(i.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,e.jsxs)(i.Z,{direction:"row",children:[(0,e.jsx)(a.Z,{variant:"circular",sx:{width:16,height:16}}),(0,e.jsx)(a.Z,{variant:"circular",sx:{width:16,height:16}}),(0,e.jsx)(a.Z,{variant:"circular",sx:{width:16,height:16}})]}),(0,e.jsx)(a.Z,{variant:"text",sx:{width:40}})]})]})]})}var g=n(55113);function j(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function b(r){return function(r){if(Array.isArray(r))return j(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(!r)return;if("string"===typeof r)return j(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(r,t)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(){return(0,e.jsx)(l.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:"repeat(4, 1fr)"},children:b(Array(3)).map((function(r,t){return(0,e.jsx)(g.Z,{variant:"outlined",sx:{p:2.5,width:310},children:(0,e.jsxs)(i.Z,{spacing:2,children:[(0,e.jsx)(a.Z,{variant:"rectangular",sx:{paddingTop:"75%",borderRadius:1.5}}),0===t&&(0,e.jsx)(a.Z,{variant:"rectangular",sx:{paddingTop:"25%",borderRadius:1.5}}),2!==t&&(0,e.jsx)(a.Z,{variant:"rectangular",sx:{paddingTop:"25%",borderRadius:1.5}})]})},t)}))})}function v(){return(0,e.jsxs)(i.Z,{spacing:1,direction:"row",alignItems:"center",sx:{px:3,py:1},children:[(0,e.jsx)(a.Z,{variant:"circular",width:32,height:32}),(0,e.jsx)(a.Z,{variant:"text",sx:{width:.25,height:16}})]})}function y(){return(0,e.jsxs)(i.Z,{spacing:1,direction:"row",alignItems:"center",sx:{px:3,py:1.5},children:[(0,e.jsx)(a.Z,{variant:"circular",width:48,height:48}),(0,e.jsxs)(i.Z,{spacing:.5,sx:{flexGrow:1},children:[(0,e.jsx)(a.Z,{variant:"text",sx:{width:.5,height:16}}),(0,e.jsx)(a.Z,{variant:"text",sx:{width:.25,height:12}})]})]})}}}]);