!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="./",n(n.s=2)}([function(t,r,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;r.a=n}).call(this,n(1))},function(t,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,r,n){"use strict";n.r(r);var e=function(t,r,n){var e=-1,o=t.length;r<0&&(r=-r>o?0:o+r),(n=n>o?o:n)<0&&(n+=o),o=r>n?0:n-r>>>0,r>>>=0;for(var u=Array(o);++e<o;)u[e]=t[e+r];return u};var o=function(t,r){return t===r||t!=t&&r!=r},u=n(0),i="object"==typeof self&&self&&self.Object===Object&&self,c=(u.a||i||Function("return this")()).Symbol,f=Object.prototype,a=f.hasOwnProperty,l=f.toString,v=c?c.toStringTag:void 0;var b=function(t){var r=a.call(t,v),n=t[v];try{t[v]=void 0;var e=!0}catch(t){}var o=l.call(t);return e&&(r?t[v]=n:delete t[v]),o},s=Object.prototype.toString;var y=function(t){return s.call(t)},p="[object Null]",d="[object Undefined]",j=c?c.toStringTag:void 0;var g=function(t){return null==t?void 0===t?d:p:j&&j in Object(t)?b(t):y(t)};var O=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},m="[object AsyncFunction]",h="[object Function]",S="[object GeneratorFunction]",x="[object Proxy]";var w=function(t){if(!O(t))return!1;var r=g(t);return r==h||r==S||r==m||r==x},P=9007199254740991;var M=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=P};var _=function(t){return null!=t&&M(t.length)&&!w(t)},F=9007199254740991,$=/^(?:0|[1-9]\d*)$/;var T=function(t,r){var n=typeof t;return!!(r=null==r?F:r)&&("number"==n||"symbol"!=n&&$.test(t))&&t>-1&&t%1==0&&t<r};var A=function(t,r,n){if(!O(n))return!1;var e=typeof r;return!!("number"==e?_(n)&&T(r,n.length):"string"==e&&r in n)&&o(n[r],t)};var N=function(t){return null!=t&&"object"==typeof t},G="[object Symbol]";var I=function(t){return"symbol"==typeof t||N(t)&&g(t)==G},U=NaN,k=/^\s+|\s+$/g,q=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,B=/^0o[0-7]+$/i,C=parseInt;var D=function(t){if("number"==typeof t)return t;if(I(t))return U;if(O(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=O(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(k,"");var n=z.test(t);return n||B.test(t)?C(t.slice(2),n?2:8):q.test(t)?U:+t},E=1/0,H=1.7976931348623157e308;var J=function(t){return t?(t=D(t))===E||t===-E?(t<0?-1:1)*H:t==t?t:0:0===t?t:0};var K=function(t){var r=J(t),n=r%1;return r==r?n?r-n:r:0},L=Math.ceil,Q=Math.max;var R=function(t,r,n){r=(n?A(t,r,n):void 0===r)?1:Q(K(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var u=0,i=0,c=Array(L(o/r));u<o;)c[i++]=e(t,u,u+=r);return c};console.log(R([1,2,3],2))}]);