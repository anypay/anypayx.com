"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3054],{49129:function(t,n,r){r.d(n,{Oq:function(){return m},dO:function(){return c},jn:function(){return a},iz:function(){return h},Dz:function(){return i},cv:function(){return d},oc:function(){return l}});var o="Invariant failed";var e=function(t,n){if(!t)throw new Error(o)},i=function(t){var n=t.top,r=t.right,o=t.bottom,e=t.left;return{top:n,right:r,bottom:o,left:e,width:r-e,height:o-n,x:e,y:n,center:{x:(r+e)/2,y:(o+n)/2}}},a=function(t,n){return{top:t.top-n.top,left:t.left-n.left,bottom:t.bottom+n.bottom,right:t.right+n.right}},u=function(t,n){return{top:t.top+n.top,left:t.left+n.left,bottom:t.bottom-n.bottom,right:t.right-n.right}},f={top:0,right:0,bottom:0,left:0},c=function(t){var n=t.borderBox,r=t.margin,o=void 0===r?f:r,e=t.border,c=void 0===e?f:e,s=t.padding,d=void 0===s?f:s,l=i(a(n,o)),m=i(u(n,c)),h=i(u(m,d));return{marginBox:l,borderBox:i(n),paddingBox:m,contentBox:h,margin:o,border:c,padding:d}},s=function(t){var n=t.slice(0,-2);if("px"!==t.slice(-2))return 0;var r=Number(n);return isNaN(r)&&e(!1),r},d=function(t,n){var r,o,e=t.borderBox,i=t.border,a=t.margin,u=t.padding,f=(o=n,{top:(r=e).top+o.y,left:r.left+o.x,bottom:r.bottom+o.y,right:r.right+o.x});return c({borderBox:f,border:i,margin:a,padding:u})},l=function(t,n){return void 0===n&&(n={x:window.pageXOffset,y:window.pageYOffset}),d(t,n)},m=function(t,n){var r={top:s(n.marginTop),right:s(n.marginRight),bottom:s(n.marginBottom),left:s(n.marginLeft)},o={top:s(n.paddingTop),right:s(n.paddingRight),bottom:s(n.paddingBottom),left:s(n.paddingLeft)},e={top:s(n.borderTopWidth),right:s(n.borderRightWidth),bottom:s(n.borderBottomWidth),left:s(n.borderLeftWidth)};return c({borderBox:t,margin:r,padding:o,border:e})},h=function(t){var n=t.getBoundingClientRect(),r=window.getComputedStyle(t);return m(n,r)}},82268:function(t,n,r){r.d(n,{Z:function(){return e}});var o=r(52149);function e(t){return(0,o.Z)({},t)}},73015:function(t,n,r){r.d(n,{Z:function(){return h}});var o=r(49474),e=r(62337),i=r(11699),a=r(35077),u=r(19013),f=r(82268),c=r(24262),s=r(13882),d=1440,l=43200;function m(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,s.Z)(2,arguments);var m=r.locale||a.Z;if(!m.formatDistance)throw new RangeError("locale must contain formatDistance property");var h=(0,o.Z)(t,n);if(isNaN(h))throw new RangeError("Invalid time value");var g,p,v=(0,f.Z)(r);v.addSuffix=Boolean(r.addSuffix),v.comparison=h,h>0?(g=(0,u.Z)(n),p=(0,u.Z)(t)):(g=(0,u.Z)(t),p=(0,u.Z)(n));var b,D=(0,i.Z)(p,g),x=((0,c.Z)(p)-(0,c.Z)(g))/1e3,Z=Math.round((D-x)/60);if(Z<2)return r.includeSeconds?D<5?m.formatDistance("lessThanXSeconds",5,v):D<10?m.formatDistance("lessThanXSeconds",10,v):D<20?m.formatDistance("lessThanXSeconds",20,v):D<40?m.formatDistance("halfAMinute",null,v):D<60?m.formatDistance("lessThanXMinutes",1,v):m.formatDistance("xMinutes",1,v):0===Z?m.formatDistance("lessThanXMinutes",1,v):m.formatDistance("xMinutes",Z,v);if(Z<45)return m.formatDistance("xMinutes",Z,v);if(Z<90)return m.formatDistance("aboutXHours",1,v);if(Z<d){var w=Math.round(Z/60);return m.formatDistance("aboutXHours",w,v)}if(Z<2520)return m.formatDistance("xDays",1,v);if(Z<l){var B=Math.round(Z/d);return m.formatDistance("xDays",B,v)}if(Z<86400)return b=Math.round(Z/l),m.formatDistance("aboutXMonths",b,v);if((b=(0,e.Z)(p,g))<12){var M=Math.round(Z/l);return m.formatDistance("xMonths",M,v)}var y=b%12,X=Math.floor(b/12);return y<3?m.formatDistance("aboutXYears",X,v):y<9?m.formatDistance("overXYears",X,v):m.formatDistance("almostXYears",X+1,v)}function h(t,n){return(0,s.Z)(1,arguments),m(t,Date.now(),n)}},28789:function(t,n,r){r.d(n,{Z:function(){return i}});var o=r(19013),e=r(13882);function i(t){(0,e.Z)(1,arguments);var n=(0,o.Z)(t),r=n.getTime();return r}},30845:function(t,n,r){r.r(n);var o=Number.isNaN||function(t){return"number"===typeof t&&t!==t};function e(t,n){if(t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(e=t[r],i=n[r],!(e===i||o(e)&&o(i)))return!1;var e,i;return!0}n.default=function(t,n){var r;void 0===n&&(n=e);var o,i=[],a=!1;return function(){for(var e=[],u=0;u<arguments.length;u++)e[u]=arguments[u];return a&&r===this&&n(e,i)||(o=t.apply(this,e),a=!0,r=this,i=e),o}}},5729:function(t,n){n.Z=function(t){var n=[],r=null,o=function(){for(var o=arguments.length,e=new Array(o),i=0;i<o;i++)e[i]=arguments[i];n=e,r||(r=requestAnimationFrame((function(){r=null,t.apply(void 0,n)})))};return o.cancel=function(){r&&(cancelAnimationFrame(r),r=null)},o}},51163:function(t,n,r){r.d(n,{I4:function(){return a},Ye:function(){return i}});var o=r(67294);function e(t,n){var r=(0,o.useState)((function(){return{inputs:n,result:t()}}))[0],e=(0,o.useRef)(!0),i=(0,o.useRef)(r),a=e.current||Boolean(n&&i.current.inputs&&function(t,n){if(t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==n[r])return!1;return!0}(n,i.current.inputs))?i.current:{inputs:n,result:t()};return(0,o.useEffect)((function(){e.current=!1,i.current=a}),[a]),a.result}var i=e,a=function(t,n){return e((function(){return t}),n)}}}]);