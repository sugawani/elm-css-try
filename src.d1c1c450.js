parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"asWa":[function(require,module,exports) {
!function(n){"use strict";function e(n,e,r){return r.a=n,r.f=e,r}function r(n){return e(2,n,function(e){return function(r){return n(e,r)}})}function t(n){return e(3,n,function(e){return function(r){return function(t){return n(e,r,t)}}})}function i(n){return e(4,n,function(e){return function(r){return function(t){return function(i){return n(e,r,t,i)}}}})}function a(n){return e(5,n,function(e){return function(r){return function(t){return function(i){return function(a){return n(e,r,t,i,a)}}}}})}function f(n,e,r){return 2===n.a?n.f(e,r):n(e)(r)}function u(n,e,r,t){return 3===n.a?n.f(e,r,t):n(e)(r)(t)}function o(n,e,r,t,i){return 4===n.a?n.f(e,r,t,i):n(e)(r)(t)(i)}function c(n,e,r,t,i,a){return 5===n.a?n.f(e,r,t,i,a):n(e)(r)(t)(i)(a)}function l(n,e){return{a:n,b:e}}var s={$:0};function v(n,e){return{$:1,a:n,b:e}}var d=r(v);function b(n){for(var e=s,r=n.length;r--;)e=v(n[r],e);return e}var g=t(function(n,e,r){for(var t=[],i=0;n>i;i++)t[i]=r(e+i);return t}),h=r(function(n,e){for(var r=[],t=0;n>t&&e.b;t++)r[t]=e.a,e=e.b;return r.length=t,l(r,e)});function x(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var p=Math.ceil,m=Math.floor,$=Math.log;function y(n){return{$:2,b:n}}y(function(n){return"number"!=typeof n?F("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?Sn(n):!isFinite(n)||n%1?F("an INT",n):Sn(n)}),y(function(n){return"boolean"==typeof n?Sn(n):F("a BOOL",n)}),y(function(n){return"number"==typeof n?Sn(n):F("a FLOAT",n)}),y(function(n){return Sn(T(n))}),y(function(n){return"string"==typeof n?Sn(n):n instanceof String?Sn(n+""):F("a STRING",n)});var j=r(function(n,e){return w(n,L(e))});function w(n,e){switch(n.$){case 2:return n.b(e);case 5:return null===e?Sn(n.c):F("null",e);case 3:return k(e)?_(n.b,e,b):F("a LIST",e);case 4:return k(e)?_(n.b,e,A):F("an ARRAY",e);case 6:var r=n.d;if("object"!=typeof e||null===e||!(r in e))return F("an OBJECT with a field named `"+r+"`",e);var t=w(n.b,e[r]);return ee(t)?t:Ln(f(On,r,t.a));case 7:var i=n.e;return k(e)?e.length>i?(t=w(n.b,e[i]),ee(t)?t:Ln(f(qn,i,t.a))):F("a LONGER array. Need index "+i+" but only see "+e.length+" entries",e):F("an ARRAY",e);case 8:if("object"!=typeof e||null===e||k(e))return F("an OBJECT",e);var a=s;for(var u in e)if(e.hasOwnProperty(u)){if(t=w(n.b,e[u]),!ee(t))return Ln(f(On,u,t.a));a=v(l(u,t.a),a)}return Sn(Rn(a));case 9:for(var o=n.f,c=n.g,d=0;c.length>d;d++){if(t=w(c[d],e),!ee(t))return t;o=o(t.a)}return Sn(o);case 10:return t=w(n.b,e),ee(t)?w(n.h(t.a),e):t;case 11:for(var g=s,h=n.g;h.b;h=h.b){if(t=w(h.a,e),ee(t))return t;g=v(t.a,g)}return Ln(zn(Rn(g)));case 1:return Ln(f(Cn,n.a,T(e)));case 0:return Sn(n.a)}}function _(n,e,r){for(var t=e.length,i=[],a=0;t>a;a++){var u=w(n,e[a]);if(!ee(u))return Ln(f(qn,a,u.a));i[a]=u.a}return Sn(r(i))}function k(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function A(n){return f(ne,n.length,function(e){return n[e]})}function F(n,e){return Ln(f(Cn,"Expecting "+n,T(e)))}function N(n,e){if(n===e)return!0;if(n.$!==e.$)return!1;switch(n.$){case 0:case 1:return n.a===e.a;case 2:return n.b===e.b;case 5:return n.c===e.c;case 3:case 4:case 8:return N(n.b,e.b);case 6:return n.d===e.d&&N(n.b,e.b);case 7:return n.e===e.e&&N(n.b,e.b);case 9:return n.f===e.f&&E(n.g,e.g);case 10:return n.h===e.h&&N(n.b,e.b);case 11:return E(n.g,e.g)}}function E(n,e){var r=n.length;if(r!==e.length)return!1;for(var t=0;r>t;t++)if(!N(n[t],e[t]))return!1;return!0}function T(n){return n}function L(n){return n}function C(n){return{$:0,a:n}}function O(n){return{$:2,b:n,c:null}}T(null);var q=r(function(n,e){return{$:3,b:n,d:e}}),S=0;function z(n){var e={$:0,e:S++,f:n,g:null,h:[]};return I(e),e}var B=!1,R=[];function I(n){if(R.push(n),!B){for(B=!0;n=R.shift();)M(n);B=!1}}function M(n){for(;n.f;){var e=n.f.$;if(0===e||1===e){for(;n.g&&n.g.$!==e;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===e)return void(n.f.c=n.f.b(function(e){n.f=e,I(n)}));if(5===e){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===e?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var D={};function P(n,e){var r={g:e,h:void 0},t=n.c,i=n.d,a=n.e,c=n.f;function l(n){return f(q,l,{$:5,b:function(e){var f=e.a;return 0===e.$?u(i,r,f,n):a&&c?o(t,r,f.i,f.j,n):u(t,r,a?f.i:f.j,n)}})}return r.h=z(f(q,l,n.b))}var Y=r(function(n,e){return O(function(r){n.g(e),r(C(0))})});function G(n){return{$:2,m:n}}var J,V=[],W=!1;function H(n,e,r){if(V.push({p:n,q:e,r:r}),!W){W=!0;for(var t;t=V.shift();)K(t.p,t.q,t.r);W=!1}}function K(n,e,r){var t,i={};for(var a in Q(!0,e,i,null),Q(!1,r,i,null),n)(t=n[a]).h.push({$:"fx",a:i[a]||{i:s,j:s}}),I(t)}function Q(n,e,r,t){switch(e.$){case 1:var i=e.k,a=function(n,r,t){function i(n){for(var e=t;e;e=e.t)n=e.s(n);return n}return f(n?D[r].e:D[r].f,i,e.l)}(n,i,t);return void(r[i]=function(n,e,r){return r=r||{i:s,j:s},n?r.i=v(e,r.i):r.j=v(e,r.j),r}(n,a,r[i]));case 2:for(var u=e.m;u.b;u=u.b)Q(n,u.a,r,t);return;case 3:return void Q(n,e.o,r,{s:e.n,t:t})}}var U="undefined"!=typeof document?document:{};function X(n,e){n.appendChild(e)}function Z(n){return{$:0,a:n}}var nn=r(function(n,e){return r(function(r,t){for(var i=[],a=0;t.b;t=t.b){var f=t.a;a+=f.b||0,i.push(f)}return a+=i.length,{$:1,c:e,d:fn(r),e:i,f:n,b:a}})})(void 0);r(function(n,e){return r(function(r,t){for(var i=[],a=0;t.b;t=t.b){var f=t.a;a+=f.b.b||0,i.push(f)}return a+=i.length,{$:2,c:e,d:fn(r),e:i,f:n,b:a}})})(void 0);var en,rn=r(function(n,e){return{$:"a1",n:n,o:e}}),tn=r(function(n,e){return{$:"a2",n:n,o:e}}),an=r(function(n,e){return{$:"a3",n:n,o:e}});function fn(n){for(var e={};n.b;n=n.b){var r=n.a,t=r.$,i=r.n,a=r.o;if("a2"!==t){var f=e[t]||(e[t]={});"a3"===t&&"class"===i?un(f,i,a):f[i]=a}else"className"===i?un(e,i,L(a)):e[i]=L(a)}return e}function un(n,e,r){var t=n[e];n[e]=t?t+" "+r:r}function on(n,e){var r=n.$;if(5===r)return on(n.k||(n.k=n.m()),e);if(0===r)return U.createTextNode(n.a);if(4===r){for(var t=n.k,i=n.j;4===t.$;)"object"!=typeof i?i=[i,t.j]:i.push(t.j),t=t.k;var a={j:i,p:e};return(f=on(t,a)).elm_event_node_ref=a,f}if(3===r)return cn(f=n.h(n.g),e,n.d),f;var f=n.f?U.createElementNS(n.f,n.c):U.createElement(n.c);J&&"a"==n.c&&f.addEventListener("click",J(f)),cn(f,e,n.d);for(var u=n.e,o=0;u.length>o;o++)X(f,on(1===r?u[o]:u[o].b,e));return f}function cn(n,e,r){for(var t in r){var i=r[t];"a1"===t?ln(n,i):"a0"===t?dn(n,e,i):"a3"===t?sn(n,i):"a4"===t?vn(n,i):("value"!==t&&"checked"!==t||n[t]!==i)&&(n[t]=i)}}function ln(n,e){var r=n.style;for(var t in e)r[t]=e[t]}function sn(n,e){for(var r in e){var t=e[r];void 0!==t?n.setAttribute(r,t):n.removeAttribute(r)}}function vn(n,e){for(var r in e){var t=e[r],i=t.f,a=t.o;void 0!==a?n.setAttributeNS(i,r,a):n.removeAttributeNS(i,r)}}function dn(n,e,r){var t=n.elmFs||(n.elmFs={});for(var i in r){var a=r[i],f=t[i];if(a){if(f){if(f.q.$===a.$){f.q=a;continue}n.removeEventListener(i,f)}f=bn(e,a),n.addEventListener(i,f,en&&{passive:2>re(a)}),t[i]=f}else n.removeEventListener(i,f),t[i]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){en=!0}}))}catch(n){}function bn(n,e){function r(e){var t=r.q,i=w(t.a,e);if(ee(i)){for(var a,f=re(t),u=i.a,o=f?3>f?u.a:u.v:u,c=1==f?u.b:3==f&&u.Y,l=(c&&e.stopPropagation(),(2==f?u.b:3==f&&u.V)&&e.preventDefault(),n);a=l.j;){if("function"==typeof a)o=a(o);else for(var s=a.length;s--;)o=a[s](o);l=l.p}l(o,c)}}return r.q=e,r}function gn(n,e){return n.$==e.$&&N(n.a,e.a)}function hn(n,e,r,t){var i={$:e,r:r,s:t,t:void 0,u:void 0};return n.push(i),i}function xn(n,e,r,t){if(n!==e){var i=n.$,a=e.$;if(i!==a){if(1!==i||2!==a)return void hn(r,0,t,e);e=function(n){for(var e=n.e,r=e.length,t=[],i=0;r>i;i++)t[i]=e[i].b;return{$:1,c:n.c,d:n.d,e:t,f:n.f,b:n.b}}(e),a=1}switch(a){case 5:for(var f=n.l,u=e.l,o=f.length,c=o===u.length;c&&o--;)c=f[o]===u[o];if(c)return void(e.k=n.k);e.k=e.m();var l=[];return xn(n.k,e.k,l,0),void(l.length>0&&hn(r,1,t,l));case 4:for(var s=n.j,v=e.j,d=!1,b=n.k;4===b.$;)d=!0,"object"!=typeof s?s=[s,b.j]:s.push(b.j),b=b.k;for(var g=e.k;4===g.$;)d=!0,"object"!=typeof v?v=[v,g.j]:v.push(g.j),g=g.k;return d&&s.length!==v.length?void hn(r,0,t,e):((d?function(n,e){for(var r=0;n.length>r;r++)if(n[r]!==e[r])return!1;return!0}(s,v):s===v)||hn(r,2,t,v),void xn(b,g,r,t+1));case 0:return void(n.a!==e.a&&hn(r,3,t,e.a));case 1:return void pn(n,e,r,t,$n);case 2:return void pn(n,e,r,t,yn);case 3:if(n.h!==e.h)return void hn(r,0,t,e);var h=mn(n.d,e.d);h&&hn(r,4,t,h);var x=e.i(n.g,e.g);return void(x&&hn(r,5,t,x))}}}function pn(n,e,r,t,i){if(n.c===e.c&&n.f===e.f){var a=mn(n.d,e.d);a&&hn(r,4,t,a),i(n,e,r,t)}else hn(r,0,t,e)}function mn(n,e,r){var t;for(var i in n)if("a1"!==i&&"a0"!==i&&"a3"!==i&&"a4"!==i)if(i in e){var a=n[i],f=e[i];a===f&&"value"!==i&&"checked"!==i||"a0"===r&&gn(a,f)||((t=t||{})[i]=f)}else(t=t||{})[i]=r?"a1"===r?"":"a0"===r||"a3"===r?void 0:{f:n[i].f,o:void 0}:"string"==typeof n[i]?"":null;else{var u=mn(n[i],e[i]||{},i);u&&((t=t||{})[i]=u)}for(var o in e)o in n||((t=t||{})[o]=e[o]);return t}function $n(n,e,r,t){var i=n.e,a=e.e,f=i.length,u=a.length;f>u?hn(r,6,t,{v:u,i:f-u}):u>f&&hn(r,7,t,{v:f,e:a});for(var o=u>f?f:u,c=0;o>c;c++){var l=i[c];xn(l,a[c],r,++t),t+=l.b||0}}function yn(n,e,r,t){for(var i=[],a={},f=[],u=n.e,o=e.e,c=u.length,l=o.length,s=0,v=0,d=t;c>s&&l>v;){var b=(A=u[s]).a,g=(F=o[v]).a,h=A.b,x=F.b,p=void 0,m=void 0;if(b!==g){var $=u[s+1],y=o[v+1];if($){var j=$.a,w=$.b;m=g===j}if(y){var _=y.a,k=y.b;p=b===_}if(p&&m)xn(h,k,i,++d),wn(a,i,b,x,v,f),d+=h.b||0,_n(a,i,b,w,++d),d+=w.b||0,s+=2,v+=2;else if(p)d++,wn(a,i,g,x,v,f),xn(h,k,i,d),d+=h.b||0,s+=1,v+=2;else if(m)_n(a,i,b,h,++d),d+=h.b||0,xn(w,x,i,++d),d+=w.b||0,s+=2,v+=1;else{if(!$||j!==_)break;_n(a,i,b,h,++d),wn(a,i,g,x,v,f),d+=h.b||0,xn(w,k,i,++d),d+=w.b||0,s+=2,v+=2}}else xn(h,x,i,++d),d+=h.b||0,s++,v++}for(;c>s;){var A;_n(a,i,(A=u[s]).a,h=A.b,++d),d+=h.b||0,s++}for(;l>v;){var F,N=N||[];wn(a,i,(F=o[v]).a,F.b,void 0,N),v++}(i.length>0||f.length>0||N)&&hn(r,8,t,{w:i,x:f,y:N})}var jn="_elmW6BL";function wn(n,e,r,t,i,a){var f=n[r];if(!f)return a.push({r:i,A:f={c:0,z:t,r:i,s:void 0}}),void(n[r]=f);if(1===f.c){a.push({r:i,A:f}),f.c=2;var u=[];return xn(f.z,t,u,f.r),f.r=i,void(f.s.s={w:u,A:f})}wn(n,e,r+jn,t,i,a)}function _n(n,e,r,t,i){var a=n[r];if(a){if(0===a.c){a.c=2;var f=[];return xn(t,a.z,f,i),void hn(e,9,i,{w:f,A:a})}_n(n,e,r+jn,t,i)}else{var u=hn(e,9,i,void 0);n[r]={c:1,z:t,r:i,s:u}}}function kn(n,e,r,t){return 0===r.length?n:(function n(e,r,t,i){!function e(r,t,i,a,f,u,o){for(var c=i[a],l=c.r;l===f;){var s=c.$;if(1===s)n(r,t.k,c.s,o);else if(8===s)c.t=r,c.u=o,(v=c.s.w).length>0&&e(r,t,v,0,f,u,o);else if(9===s){c.t=r,c.u=o;var v,d=c.s;d&&(d.A.s=r,(v=d.w).length>0&&e(r,t,v,0,f,u,o))}else c.t=r,c.u=o;if(!(c=i[++a])||(l=c.r)>u)return a}var b=t.$;if(4===b){for(var g=t.k;4===g.$;)g=g.k;return e(r,g,i,a,f+1,u,r.elm_event_node_ref)}for(var h=t.e,x=r.childNodes,p=0;h.length>p;p++){var m=1===b?h[p]:h[p].b,$=++f+(m.b||0);if(!(f>l||l>$||(c=i[a=e(x[p],m,i,a,f,$,o)])&&(l=c.r)<=u))return a;f=$}return a}(e,r,t,0,0,r.b,i)}(n,e,r,t),An(n,r))}function An(n,e){for(var r=0;e.length>r;r++){var t=e[r],i=t.t,a=Fn(i,t);i===n&&(n=a)}return n}function Fn(n,e){switch(e.$){case 0:return function(n){var r=n.parentNode,t=on(e.s,e.u);return t.elm_event_node_ref||(t.elm_event_node_ref=n.elm_event_node_ref),r&&t!==n&&r.replaceChild(t,n),t}(n);case 4:return cn(n,e.u,e.s),n;case 3:return n.replaceData(0,n.length,e.s),n;case 1:return An(n,e.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=e.s:n.elm_event_node_ref={j:e.s,p:e.u},n;case 6:for(var r=e.s,t=0;r.i>t;t++)n.removeChild(n.childNodes[r.v]);return n;case 7:for(var i=(r=e.s).e,a=n.childNodes[t=r.v];i.length>t;t++)n.insertBefore(on(i[t],e.u),a);return n;case 9:if(!(r=e.s))return n.parentNode.removeChild(n),n;var f=r.A;return void 0!==f.r&&n.parentNode.removeChild(n),f.s=An(n,r.w),n;case 8:return function(n,e){var r=e.s,t=function(n,e){if(n){for(var r=U.createDocumentFragment(),t=0;n.length>t;t++){var i=n[t].A;X(r,2===i.c?i.s:on(i.z,e.u))}return r}}(r.y,e);n=An(n,r.w);for(var i=r.x,a=0;i.length>a;a++){var f=i[a],u=f.A,o=2===u.c?u.s:on(u.z,e.u);n.insertBefore(o,n.childNodes[f.r])}return t&&X(n,t),n}(n,e);case 5:return e.s(n);default:x(10)}}var Nn=i(function(n,e,r,t){return function(n,e,r,t,i,a){var u=f(j,n,T(e?e.flags:void 0));ee(u)||x(2);var o={},c=r(u.a),l=c.a,s=a(d,l),v=function(n,e){var r;for(var t in D){var i=D[t];i.a&&((r=r||{})[t]=i.a(t,e)),n[t]=P(i,e)}return r}(o,d);function d(n,e){var r=f(t,n,l);s(l=r.a,e),H(o,r.b,i(l))}return H(o,c.b,i(l)),v?{ports:v}:{}}(e,t,n.a3,n.bo,n.bk,function(e,r){var i=n.bp,a=t.node,o=function n(e){if(3===e.nodeType)return Z(e.textContent);if(1!==e.nodeType)return Z("");for(var r=s,t=e.attributes,i=t.length;i--;){var a=t[i];r=v(f(an,a.name,a.value),r)}var o=e.tagName.toLowerCase(),c=s,l=e.childNodes;for(i=l.length;i--;)c=v(n(l[i]),c);return u(nn,o,r,c)}(a);return function(n,e){e(n);var r=0;function t(){r=1===r?0:(En(t),e(n),1)}return function(i,a){n=i,a?(e(n),2===r&&(r=1)):(0===r&&En(t),r=2)}}(r,function(n){var r=i(n),t=function(n,e){var r=[];return xn(n,e,r,0),r}(o,r);a=kn(a,o,t,e),o=r})})}),En=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Tn=d,Ln=function(n){return{$:1,a:n}},Cn=r(function(n,e){return{$:3,a:n,b:e}}),On=r(function(n,e){return{$:0,a:n,b:e}}),qn=r(function(n,e){return{$:1,a:n,b:e}}),Sn=function(n){return{$:0,a:n}},zn=function(n){return{$:2,a:n}},Bn=t(function(n,e,r){for(;;){if(!r.b)return e;var t=r.b,i=n,a=f(n,r.a,e);n=i,e=a,r=t}}),Rn=function(n){return u(Bn,Tn,s,n)},In=i(function(n,e,r,t){return{$:0,a:n,b:e,c:r,d:t}}),Mn=[],Dn=p,Pn=r(function(n,e){return $(e)/$(n)}),Yn=Dn(f(Pn,2,32)),Gn=o(In,0,Yn,Mn,Mn),Jn=g,Vn=m,Wn=function(n){return n.length},Hn=r(function(n,e){return function n(e,r,t){if("object"!=typeof e)return e===r?0:r>e?-1:1;if(void 0===e.$)return(t=n(e.a,r.a))?t:(t=n(e.b,r.b))?t:n(e.c,r.c);for(;e.b&&r.b&&!(t=n(e.a,r.a));e=e.b,r=r.b);return t||(e.b?1:r.b?-1:0)}(n,e)>0?n:e}),Kn=h,Qn=r(function(n,e){for(;;){var r=f(Kn,32,n),t=r.b,i=f(Tn,{$:0,a:r.a},e);if(!t.b)return Rn(i);n=t,e=i}}),Un=r(function(n,e){for(;;){var r=Dn(e/32);if(1===r)return f(Kn,32,n).a;n=f(Qn,n,s),e=r}}),Xn=r(function(n,e){if(e.b){var r=32*e.b,t=Vn(f(Pn,32,r-1)),i=n?Rn(e.e):e.e,a=f(Un,i,e.b);return o(In,Wn(e.d)+r,f(Hn,5,t*Yn),a,e.d)}return o(In,Wn(e.d),Yn,Mn,e.d)}),Zn=a(function(n,e,r,t,i){for(;;){if(0>e)return f(Xn,!1,{e:t,b:r/32|0,d:i});var a={$:1,a:u(Jn,32,e,n)};n=n,e-=32,r=r,t=f(Tn,a,t),i=i}}),ne=r(function(n,e){if(n>0){var r=n%32;return c(Zn,e,n-r-32,n,s,u(Jn,r,n-r,e))}return Gn}),ee=function(n){return!n.$},re=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},te=C,ie=te(0),ae=i(function(n,e,r,t){if(t.b){var i=t.a,a=t.b;if(a.b){var c=a.a,l=a.b;if(l.b){var s=l.a,v=l.b;if(v.b){var d=v.b;return f(n,i,f(n,c,f(n,s,f(n,v.a,r>500?u(Bn,n,e,Rn(d)):o(ae,n,e,r+1,d)))))}return f(n,i,f(n,c,f(n,s,e)))}return f(n,i,f(n,c,e))}return f(n,i,e)}return e}),fe=t(function(n,e,r){return o(ae,n,e,0,r)}),ue=r(function(n,e){return u(fe,r(function(e,r){return f(Tn,n(e),r)}),s,e)}),oe=q,ce=r(function(n,e){return f(oe,function(e){return te(n(e))},e)}),le=t(function(n,e,r){return f(oe,function(e){return f(oe,function(r){return te(f(n,e,r))},r)},e)}),se=Y,ve=r(function(n,e){var r=e;return function(n){return O(function(e){e(C(z(n)))})}(f(oe,se(n),r))});D.Task={b:ie,c:t(function(n,e){return f(ce,function(){return 0},(r=f(ue,ve(n),e),u(fe,le(Tn),te(s),r)));var r}),d:t(function(){return te(0)}),e:r(function(n,e){return f(ce,n,e)}),f:void 0};var de,be,ge,he,xe=G(s),pe=G(s),me=r(function(n,e){return e}),$e=nn("a"),ye=T,je=r(function(n,e){return f(tn,n,ye(e))}),we=je("className"),_e=nn("div"),ke=nn("p"),Ae=Z,Fe=f(_e,s,b([f(ke,s,b([Ae("リンクをクリック中(active)文字色が緑になる->"),f($e,b([("#",f(je,"href",/^javascript:/i.test((de="#").replace(/\s/g,""))?"":de)),we("pseudo-active")]),b([Ae("active")]))]))])),Ne=nn("li"),Ee=nn("ul"),Te=f(_e,s,b([Ae("@counter-styleと組み合わせてliの独自のマーカーを定義できる"),f(Ee,b([we("additive-symbols-list")]),b([f(Ne,s,b([Ae("One")])),f(Ne,s,b([Ae("Two")])),f(Ne,s,b([Ae("Three")])),f(Ne,s,b([Ae("Four")])),f(Ne,s,b([Ae("Five")])),f(Ne,s,b([Ae("Six")]))]))])),Le=nn("br"),Ce=f(_e,s,b([Ae("指定したクラスの後ろに要素を追加できる"),f(ke,b([we("after-nullpo")]),b([Ae("1. 仕様書無しさん :20/11/02 13:00:00"),f(Le,s,s),Ae("　　∧＿∧"),f(Le,s,s),Ae("　（　´∀｀）＜　ぬるぽ")]))])),Oe=nn("h3"),qe=f(_e,b([we("all-container")]),b([f(_e,s,b([f(Oe,s,b([Ae("initial")])),Ae("ベース"),f(_e,b([we("all-parent")]),b([f(_e,b([we("all-child")]),b([Ae("div > div text"),f(Le,s,s)])),Ae("div text")]))])),f(_e,s,b([f(Oe,s,b([Ae("initial")])),Ae("初期化"),f(_e,b([we("all-parent")]),b([f(_e,b([we("all-child"),we("all-initial")]),b([Ae("div > div text"),f(Le,s,s)])),Ae("div text")]))])),f(_e,s,b([f(Oe,s,b([Ae("unset")])),Ae("継承/初期化"),f(_e,b([we("all-parent")]),b([f(_e,b([we("all-child"),we("all-unset")]),b([Ae("div > div text"),f(Le,s,s)])),Ae("div text")]))])),f(_e,s,b([f(Oe,s,b([Ae("inherit")])),Ae("継承"),f(_e,b([we("all-parent")]),b([f(_e,b([we("all-child"),we("all-inherit")]),b([Ae("div > div text"),f(Le,s,s),Ae("親divの継承値になってる"),f(Le,s,s)])),Ae("div text")]))])),f(_e,s,b([f(Oe,s,b([Ae("revert")])),Ae("unsetと同じ?"),f(_e,b([we("all-parent")]),b([f(_e,b([we("all-child"),we("all-revert")]),b([Ae("div > div text"),f(Le,s,s)])),Ae("div text")]))]))])),Se=nn("h4"),ze=f(_e,b([we("align-content-container")]),b([f(_e,s,b([f(Se,s,b([Ae("baseline")])),Ae("1行目のベースラインに合わせる"),f(_e,b([we("flex-container"),we("align-content-baseline")]),b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("改行"),f(Le,s,s),Ae("テキスト")])),f(_e,s,b([Ae("3")]))]))])),f(_e,s,b([f(Se,s,b([Ae("first baseline(Firefoxのみ対応)")])),Ae("1行目のベースラインに合わせる"),f(_e,b([we("flex-container"),we("align-content-first-baseline")]),b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("改行"),f(Le,s,s),Ae("テキスト")])),f(_e,s,b([Ae("3")]))]))])),f(_e,s,b([f(Se,s,b([Ae("last baseline(Firefoxのみ対応)")])),Ae("最終行のベースラインに合わせる"),f(_e,b([we("flex-container"),we("align-content-last-baseline")]),b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("改行"),f(Le,s,s),Ae("テキスト")])),f(_e,s,b([Ae("3")]))]))]))])),Be=f(_e,b([we("align-items-container")]),b([f(_e,s,b([f(Se,s,b([Ae("baseline")])),Ae("1行目のベースラインに合わせる"),f(_e,b([we("flex-container"),we("align-items-baseline")]),b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("first baseline")])),Ae("1行目のベースラインに合わせる"),f(_e,b([we("flex-container"),we("align-items-first-baseline")]),b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("last baseline")])),Ae("最終行のベースラインに合わせる"),f(_e,b([we("flex-container"),we("align-items-last-baseline")]),b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))]))])),Re=f(_e,b([we("align-self-container")]),b([f(_e,s,b([f(Se,s,b([Ae("baseline")])),Ae("1行目のベースラインに合わせる"),f(_e,b([we("flex-container"),we("align-self-container")]),b([f(_e,b([we("align-self-baseline")]),b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("first-baseline")])),Ae("1行目のベースラインに合わせる"),f(_e,b([we("flex-container"),we("align-self-container")]),b([f(_e,b([we("align-self-first-baseline")]),b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("last-baseline")])),Ae("最終行のベースラインに合わせる"),f(_e,b([we("flex-container"),we("align-self-container")]),b([f(_e,b([we("align-self-last-baseline")]),b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("stretch")])),Ae("範囲いっぱいまで伸びる"),f(_e,b([we("flex-container"),we("align-self-container")]),b([f(_e,b([we("align-self-stretch")]),b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))]))])),Ie=b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]),Me=f(_e,b([we("align-content-container")]),b([f(_e,s,b([f(Se,s,b([Ae("center")])),Ae("中央寄せ"),f(_e,b([we("flex-container"),we("align-content-center")]),Ie)])),f(_e,s,b([f(Se,s,b([Ae("start(Firefoxのみ対応)")])),Ae("先頭寄せ"),f(_e,b([we("flex-container"),we("align-content-start")]),Ie)])),f(_e,s,b([f(Se,s,b([Ae("end(Firefoxのみ対応)")])),Ae("末尾寄せ"),f(_e,b([we("flex-container"),we("align-content-end")]),Ie)])),f(_e,s,b([f(Se,s,b([Ae("flex-start")])),Ae("flexコンテナに依存した先頭寄せ"),f(_e,b([we("flex-container"),we("align-content-flex-start")]),Ie)])),f(_e,s,b([f(Se,s,b([Ae("flex-end")])),Ae("flexコンテナに依存した末尾寄せ"),f(_e,b([we("flex-container"),we("align-content-flex-end")]),Ie)]))])),De=rn,Pe=f(_e,b([f(De,"display","flex")]),b([f(_e,s,b([f(Se,s,b([Ae("space-around")])),Ae("端にはアイテム間の半分の間隔を空ける"),f(_e,b([we("flex-container"),we("align-content-space-around")]),Ie)])),f(_e,s,b([f(Se,s,b([Ae("space-between")])),Ae("先頭と末尾にそれぞれ寄せる"),f(_e,b([we("flex-container"),we("align-content-space-between")]),Ie)])),f(_e,s,b([f(Se,s,b([Ae("space-evenly")])),Ae("端にはアイテム感と同じ間隔を空ける"),f(_e,b([we("flex-container"),we("align-content-space-evenly")]),Ie)])),f(_e,s,b([f(Se,s,b([Ae("stretch")])),Ae("コンテナサイズに合わせて引き伸ばす"),f(_e,b([we("flex-container"),we("align-content-stretch")]),Ie)]))])),Ye=nn("h1"),Ge=nn("h2"),Je=f(_e,b([we("align-items-container")]),b([f(_e,s,b([f(Se,s,b([Ae("normal")])),Ae("レイアウトに依存 flexの場合stretch"),f(_e,b([we("flex-container"),we("align-items-normal")]),b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("stretch")])),Ae("範囲いっぱいまで伸びる"),f(_e,b([we("flex-container"),we("align-items-stretch")]),b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))]))])),Ve=f(_e,b([we("align-items-container")]),b([f(_e,s,b([f(Se,s,b([Ae("center")])),Ae("中央寄せ"),f(_e,b([we("flex-container"),we("align-items-center")]),b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("start(Firefoxのみ対応)")])),Ae("先頭寄せ"),f(_e,b([we("flex-container"),we("align-items-start")]),b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("end(Firefoxのみ対応)")])),Ae("末尾寄せ"),f(_e,b([we("flex-container"),we("align-items-end")]),b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("flex-start")])),Ae("flexコンテナに依存した先頭寄せ"),f(_e,b([we("flex-container"),we("align-items-flex-start")]),b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("flex-end")])),Ae("flexコンテナに依存した末尾寄せ"),f(_e,b([we("flex-container"),we("align-items-flex-end")]),b([f(_e,s,b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))]))])),We=f(_e,b([we("align-self-container")]),b([f(_e,s,b([f(Se,s,b([Ae("center")])),Ae("中央寄せ"),f(_e,b([we("flex-container"),we("align-self-container")]),b([f(_e,b([we("align-self-center")]),b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("start(Firefoxのみ対応)")])),Ae("先頭寄せ"),f(_e,b([we("flex-container"),we("align-self-container"),f(De,"align-items","center")]),b([f(_e,b([we("align-self-start")]),b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("end(Firefoxのみ対応)")])),Ae("末尾寄せ"),f(_e,b([we("flex-container"),we("align-self-container")]),b([f(_e,b([we("align-self-end")]),b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("self-start(Firefoxのみ対応)")])),Ae("先頭寄せ"),f(_e,b([we("flex-container"),we("align-self-container"),f(De,"align-items","center")]),b([f(_e,b([we("align-self-self-start")]),b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("self-end(Firefoxのみ対応)")])),Ae("末尾寄せ"),f(_e,b([we("flex-container"),we("align-self-container")]),b([f(_e,b([we("align-self-self-end")]),b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("flex-start")])),Ae("先頭寄せ"),f(_e,b([we("flex-container"),we("align-self-container"),f(De,"align-items","center")]),b([f(_e,b([we("align-self-flex-start")]),b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))])),f(_e,s,b([f(Se,s,b([Ae("flex-end")])),Ae("末尾寄せ"),f(_e,b([we("flex-container"),we("align-self-container")]),b([f(_e,b([we("align-self-flex-end")]),b([Ae("1")])),f(_e,s,b([Ae("2")])),f(_e,s,b([Ae("3")])),f(_e,s,b([Ae("4")])),f(_e,s,b([Ae("5")]))]))]))]));ge={Main:{init:(be={a3:"てんぷら🍤",bo:me,bp:function(){return f(_e,s,b([f(Ye,s,b([Ae("A")])),f(Ge,s,b([Ae(":active")])),Fe,f(Ge,s,b([Ae("additive-symbols(Firefoxのみ対応)")])),Te,f(Ge,s,b([Ae("::after")])),Ce,f(Ge,s,b([Ae("align-content(flexとflex-wrapが必要)")])),f(Oe,s,b([Ae("均等配置")])),Pe,f(Oe,s,b([Ae("位置指定")])),Me,f(Oe,s,b([Ae("ベースライン")])),ze,f(Ge,s,b([Ae("align-items")])),f(Oe,s,b([Ae("基本キーワード")])),Je,f(Oe,s,b([Ae("位置指定")])),Ve,f(Oe,s,b([Ae("ベースライン")])),Be,f(Ge,s,b([Ae("align-self")])),f(Oe,s,b([Ae("位置指定")])),We,f(Oe,s,b([Ae("ベースライン")])),Re,f(Ge,s,b([Ae("all")])),qe]))}},Nn({a3:function(){return l(be.a3,xe)},bk:function(){return pe},bo:r(function(n,e){return l(f(be.bo,n,e),xe)}),bp:be.bp}))((he=0,{$:0,a:he}))(0)}},n.Elm?function n(e,r){for(var t in r)t in e?"init"==t?x(6):n(e[t],r[t]):e[t]=r[t]}(n.Elm,ge):n.Elm=ge}(this);
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./Main.elm");e.Elm.Main.init({node:document.querySelector("main")});
},{"./Main.elm":"asWa"}]},{},["Focm"], null)
//# sourceMappingURL=src.d1c1c450.js.map