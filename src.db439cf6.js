parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"asWa":[function(require,module,exports) {
!function(n){"use strict";function e(n,e,r){return r.a=n,r.f=e,r}function r(n){return e(2,n,function(e){return function(r){return n(e,r)}})}function t(n){return e(3,n,function(e){return function(r){return function(t){return n(e,r,t)}}})}function i(n){return e(4,n,function(e){return function(r){return function(t){return function(i){return n(e,r,t,i)}}}})}function a(n){return e(5,n,function(e){return function(r){return function(t){return function(i){return function(a){return n(e,r,t,i,a)}}}}})}function f(n,e,r){return 2===n.a?n.f(e,r):n(e)(r)}function o(n,e,r,t){return 3===n.a?n.f(e,r,t):n(e)(r)(t)}function u(n,e,r,t,i){return 4===n.a?n.f(e,r,t,i):n(e)(r)(t)(i)}function c(n,e,r,t,i,a){return 5===n.a?n.f(e,r,t,i,a):n(e)(r)(t)(i)(a)}function l(n,e){return{a:n,b:e}}var s={$:0};function v(n,e){return{$:1,a:n,b:e}}var d=r(v);function b(n){for(var e=s,r=n.length;r--;)e=v(n[r],e);return e}var g=t(function(n,e,r){for(var t=[],i=0;n>i;i++)t[i]=r(e+i);return t}),h=r(function(n,e){for(var r=[],t=0;n>t&&e.b;t++)r[t]=e.a,e=e.b;return r.length=t,l(r,e)});function p(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var x=Math.ceil,m=Math.floor,$=Math.log;function y(n){return{$:2,b:n}}y(function(n){return"number"!=typeof n?F("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?qn(n):!isFinite(n)||n%1?F("an INT",n):qn(n)}),y(function(n){return"boolean"==typeof n?qn(n):F("a BOOL",n)}),y(function(n){return"number"==typeof n?qn(n):F("a FLOAT",n)}),y(function(n){return qn(T(n))}),y(function(n){return"string"==typeof n?qn(n):n instanceof String?qn(n+""):F("a STRING",n)});var w=r(function(n,e){return k(n,L(e))});function k(n,e){switch(n.$){case 2:return n.b(e);case 5:return null===e?qn(n.c):F("null",e);case 3:return _(e)?j(n.b,e,b):F("a LIST",e);case 4:return _(e)?j(n.b,e,A):F("an ARRAY",e);case 6:var r=n.d;if("object"!=typeof e||null===e||!(r in e))return F("an OBJECT with a field named `"+r+"`",e);var t=k(n.b,e[r]);return re(t)?t:Ln(f(Sn,r,t.a));case 7:var i=n.e;return _(e)?e.length>i?(t=k(n.b,e[i]),re(t)?t:Ln(f(Cn,i,t.a))):F("a LONGER array. Need index "+i+" but only see "+e.length+" entries",e):F("an ARRAY",e);case 8:if("object"!=typeof e||null===e||_(e))return F("an OBJECT",e);var a=s;for(var o in e)if(e.hasOwnProperty(o)){if(t=k(n.b,e[o]),!re(t))return Ln(f(Sn,o,t.a));a=v(l(o,t.a),a)}return qn(In(a));case 9:for(var u=n.f,c=n.g,d=0;c.length>d;d++){if(t=k(c[d],e),!re(t))return t;u=u(t.a)}return qn(u);case 10:return t=k(n.b,e),re(t)?k(n.h(t.a),e):t;case 11:for(var g=s,h=n.g;h.b;h=h.b){if(t=k(h.a,e),re(t))return t;g=v(t.a,g)}return Ln(Bn(In(g)));case 1:return Ln(f(On,n.a,T(e)));case 0:return qn(n.a)}}function j(n,e,r){for(var t=e.length,i=[],a=0;t>a;a++){var o=k(n,e[a]);if(!re(o))return Ln(f(Cn,a,o.a));i[a]=o.a}return qn(r(i))}function _(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function A(n){return f(ee,n.length,function(e){return n[e]})}function F(n,e){return Ln(f(On,"Expecting "+n,T(e)))}function N(n,e){if(n===e)return!0;if(n.$!==e.$)return!1;switch(n.$){case 0:case 1:return n.a===e.a;case 2:return n.b===e.b;case 5:return n.c===e.c;case 3:case 4:case 8:return N(n.b,e.b);case 6:return n.d===e.d&&N(n.b,e.b);case 7:return n.e===e.e&&N(n.b,e.b);case 9:return n.f===e.f&&E(n.g,e.g);case 10:return n.h===e.h&&N(n.b,e.b);case 11:return E(n.g,e.g)}}function E(n,e){var r=n.length;if(r!==e.length)return!1;for(var t=0;r>t;t++)if(!N(n[t],e[t]))return!1;return!0}function T(n){return n}function L(n){return n}function O(n){return{$:0,a:n}}function S(n){return{$:2,b:n,c:null}}T(null);var C=r(function(n,e){return{$:3,b:n,d:e}}),q=0;function B(n){var e={$:0,e:q++,f:n,g:null,h:[]};return I(e),e}var z=!1,R=[];function I(n){if(R.push(n),!z){for(z=!0;n=R.shift();)M(n);z=!1}}function M(n){for(;n.f;){var e=n.f.$;if(0===e||1===e){for(;n.g&&n.g.$!==e;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===e)return void(n.f.c=n.f.b(function(e){n.f=e,I(n)}));if(5===e){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===e?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var P={};function D(n,e){var r={g:e,h:void 0},t=n.c,i=n.d,a=n.e,c=n.f;function l(n){return f(C,l,{$:5,b:function(e){var f=e.a;return 0===e.$?o(i,r,f,n):a&&c?u(t,r,f.i,f.j,n):o(t,r,a?f.i:f.j,n)}})}return r.h=B(f(C,l,n.b))}var G=r(function(n,e){return S(function(r){n.g(e),r(O(0))})});function Y(n){return{$:2,m:n}}var J,V=[],W=!1;function Z(n,e,r){if(V.push({p:n,q:e,r:r}),!W){W=!0;for(var t;t=V.shift();)H(t.p,t.q,t.r);W=!1}}function H(n,e,r){var t,i={};for(var a in K(!0,e,i,null),K(!1,r,i,null),n)(t=n[a]).h.push({$:"fx",a:i[a]||{i:s,j:s}}),I(t)}function K(n,e,r,t){switch(e.$){case 1:var i=e.k,a=function(n,r,t){function i(n){for(var e=t;e;e=e.t)n=e.s(n);return n}return f(n?P[r].e:P[r].f,i,e.l)}(n,i,t);return void(r[i]=function(n,e,r){return r=r||{i:s,j:s},n?r.i=v(e,r.i):r.j=v(e,r.j),r}(n,a,r[i]));case 2:for(var o=e.m;o.b;o=o.b)K(n,o.a,r,t);return;case 3:return void K(n,e.o,r,{s:e.n,t:t})}}var Q="undefined"!=typeof document?document:{};function U(n,e){n.appendChild(e)}function X(n){return{$:0,a:n}}var nn=r(function(n,e){return r(function(r,t){for(var i=[],a=0;t.b;t=t.b){var f=t.a;a+=f.b||0,i.push(f)}return a+=i.length,{$:1,c:e,d:fn(r),e:i,f:n,b:a}})})(void 0);r(function(n,e){return r(function(r,t){for(var i=[],a=0;t.b;t=t.b){var f=t.a;a+=f.b.b||0,i.push(f)}return a+=i.length,{$:2,c:e,d:fn(r),e:i,f:n,b:a}})})(void 0);var en,rn=r(function(n,e){return{$:"a1",n:n,o:e}}),tn=r(function(n,e){return{$:"a2",n:n,o:e}}),an=r(function(n,e){return{$:"a3",n:n,o:e}});function fn(n){for(var e={};n.b;n=n.b){var r=n.a,t=r.$,i=r.n,a=r.o;if("a2"!==t){var f=e[t]||(e[t]={});"a3"===t&&"class"===i?on(f,i,a):f[i]=a}else"className"===i?on(e,i,L(a)):e[i]=L(a)}return e}function on(n,e,r){var t=n[e];n[e]=t?t+" "+r:r}function un(n,e){var r=n.$;if(5===r)return un(n.k||(n.k=n.m()),e);if(0===r)return Q.createTextNode(n.a);if(4===r){for(var t=n.k,i=n.j;4===t.$;)"object"!=typeof i?i=[i,t.j]:i.push(t.j),t=t.k;var a={j:i,p:e};return(f=un(t,a)).elm_event_node_ref=a,f}if(3===r)return cn(f=n.h(n.g),e,n.d),f;var f=n.f?Q.createElementNS(n.f,n.c):Q.createElement(n.c);J&&"a"==n.c&&f.addEventListener("click",J(f)),cn(f,e,n.d);for(var o=n.e,u=0;o.length>u;u++)U(f,un(1===r?o[u]:o[u].b,e));return f}function cn(n,e,r){for(var t in r){var i=r[t];"a1"===t?ln(n,i):"a0"===t?dn(n,e,i):"a3"===t?sn(n,i):"a4"===t?vn(n,i):("value"!==t&&"checked"!==t||n[t]!==i)&&(n[t]=i)}}function ln(n,e){var r=n.style;for(var t in e)r[t]=e[t]}function sn(n,e){for(var r in e){var t=e[r];void 0!==t?n.setAttribute(r,t):n.removeAttribute(r)}}function vn(n,e){for(var r in e){var t=e[r],i=t.f,a=t.o;void 0!==a?n.setAttributeNS(i,r,a):n.removeAttributeNS(i,r)}}function dn(n,e,r){var t=n.elmFs||(n.elmFs={});for(var i in r){var a=r[i],f=t[i];if(a){if(f){if(f.q.$===a.$){f.q=a;continue}n.removeEventListener(i,f)}f=bn(e,a),n.addEventListener(i,f,en&&{passive:2>te(a)}),t[i]=f}else n.removeEventListener(i,f),t[i]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){en=!0}}))}catch(n){}function bn(n,e){function r(e){var t=r.q,i=k(t.a,e);if(re(i)){for(var a,f=te(t),o=i.a,u=f?3>f?o.a:o.v:o,c=1==f?o.b:3==f&&o.Y,l=(c&&e.stopPropagation(),(2==f?o.b:3==f&&o.V)&&e.preventDefault(),n);a=l.j;){if("function"==typeof a)u=a(u);else for(var s=a.length;s--;)u=a[s](u);l=l.p}l(u,c)}}return r.q=e,r}function gn(n,e){return n.$==e.$&&N(n.a,e.a)}function hn(n,e,r,t){var i={$:e,r:r,s:t,t:void 0,u:void 0};return n.push(i),i}function pn(n,e,r,t){if(n!==e){var i=n.$,a=e.$;if(i!==a){if(1!==i||2!==a)return void hn(r,0,t,e);e=function(n){for(var e=n.e,r=e.length,t=[],i=0;r>i;i++)t[i]=e[i].b;return{$:1,c:n.c,d:n.d,e:t,f:n.f,b:n.b}}(e),a=1}switch(a){case 5:for(var f=n.l,o=e.l,u=f.length,c=u===o.length;c&&u--;)c=f[u]===o[u];if(c)return void(e.k=n.k);e.k=e.m();var l=[];return pn(n.k,e.k,l,0),void(l.length>0&&hn(r,1,t,l));case 4:for(var s=n.j,v=e.j,d=!1,b=n.k;4===b.$;)d=!0,"object"!=typeof s?s=[s,b.j]:s.push(b.j),b=b.k;for(var g=e.k;4===g.$;)d=!0,"object"!=typeof v?v=[v,g.j]:v.push(g.j),g=g.k;return d&&s.length!==v.length?void hn(r,0,t,e):((d?function(n,e){for(var r=0;n.length>r;r++)if(n[r]!==e[r])return!1;return!0}(s,v):s===v)||hn(r,2,t,v),void pn(b,g,r,t+1));case 0:return void(n.a!==e.a&&hn(r,3,t,e.a));case 1:return void xn(n,e,r,t,$n);case 2:return void xn(n,e,r,t,yn);case 3:if(n.h!==e.h)return void hn(r,0,t,e);var h=mn(n.d,e.d);h&&hn(r,4,t,h);var p=e.i(n.g,e.g);return void(p&&hn(r,5,t,p))}}}function xn(n,e,r,t,i){if(n.c===e.c&&n.f===e.f){var a=mn(n.d,e.d);a&&hn(r,4,t,a),i(n,e,r,t)}else hn(r,0,t,e)}function mn(n,e,r){var t;for(var i in n)if("a1"!==i&&"a0"!==i&&"a3"!==i&&"a4"!==i)if(i in e){var a=n[i],f=e[i];a===f&&"value"!==i&&"checked"!==i||"a0"===r&&gn(a,f)||((t=t||{})[i]=f)}else(t=t||{})[i]=r?"a1"===r?"":"a0"===r||"a3"===r?void 0:{f:n[i].f,o:void 0}:"string"==typeof n[i]?"":null;else{var o=mn(n[i],e[i]||{},i);o&&((t=t||{})[i]=o)}for(var u in e)u in n||((t=t||{})[u]=e[u]);return t}function $n(n,e,r,t){var i=n.e,a=e.e,f=i.length,o=a.length;f>o?hn(r,6,t,{v:o,i:f-o}):o>f&&hn(r,7,t,{v:f,e:a});for(var u=o>f?f:o,c=0;u>c;c++){var l=i[c];pn(l,a[c],r,++t),t+=l.b||0}}function yn(n,e,r,t){for(var i=[],a={},f=[],o=n.e,u=e.e,c=o.length,l=u.length,s=0,v=0,d=t;c>s&&l>v;){var b=(A=o[s]).a,g=(F=u[v]).a,h=A.b,p=F.b,x=void 0,m=void 0;if(b!==g){var $=o[s+1],y=u[v+1];if($){var w=$.a,k=$.b;m=g===w}if(y){var j=y.a,_=y.b;x=b===j}if(x&&m)pn(h,_,i,++d),kn(a,i,b,p,v,f),d+=h.b||0,jn(a,i,b,k,++d),d+=k.b||0,s+=2,v+=2;else if(x)d++,kn(a,i,g,p,v,f),pn(h,_,i,d),d+=h.b||0,s+=1,v+=2;else if(m)jn(a,i,b,h,++d),d+=h.b||0,pn(k,p,i,++d),d+=k.b||0,s+=2,v+=1;else{if(!$||w!==j)break;jn(a,i,b,h,++d),kn(a,i,g,p,v,f),d+=h.b||0,pn(k,_,i,++d),d+=k.b||0,s+=2,v+=2}}else pn(h,p,i,++d),d+=h.b||0,s++,v++}for(;c>s;){var A;jn(a,i,(A=o[s]).a,h=A.b,++d),d+=h.b||0,s++}for(;l>v;){var F,N=N||[];kn(a,i,(F=u[v]).a,F.b,void 0,N),v++}(i.length>0||f.length>0||N)&&hn(r,8,t,{w:i,x:f,y:N})}var wn="_elmW6BL";function kn(n,e,r,t,i,a){var f=n[r];if(!f)return a.push({r:i,A:f={c:0,z:t,r:i,s:void 0}}),void(n[r]=f);if(1===f.c){a.push({r:i,A:f}),f.c=2;var o=[];return pn(f.z,t,o,f.r),f.r=i,void(f.s.s={w:o,A:f})}kn(n,e,r+wn,t,i,a)}function jn(n,e,r,t,i){var a=n[r];if(a){if(0===a.c){a.c=2;var f=[];return pn(t,a.z,f,i),void hn(e,9,i,{w:f,A:a})}jn(n,e,r+wn,t,i)}else{var o=hn(e,9,i,void 0);n[r]={c:1,z:t,r:i,s:o}}}function _n(n,e,r,t){return 0===r.length?n:(function n(e,r,t,i){!function e(r,t,i,a,f,o,u){for(var c=i[a],l=c.r;l===f;){var s=c.$;if(1===s)n(r,t.k,c.s,u);else if(8===s)c.t=r,c.u=u,(v=c.s.w).length>0&&e(r,t,v,0,f,o,u);else if(9===s){c.t=r,c.u=u;var v,d=c.s;d&&(d.A.s=r,(v=d.w).length>0&&e(r,t,v,0,f,o,u))}else c.t=r,c.u=u;if(!(c=i[++a])||(l=c.r)>o)return a}var b=t.$;if(4===b){for(var g=t.k;4===g.$;)g=g.k;return e(r,g,i,a,f+1,o,r.elm_event_node_ref)}for(var h=t.e,p=r.childNodes,x=0;h.length>x;x++){var m=1===b?h[x]:h[x].b,$=++f+(m.b||0);if(!(f>l||l>$||(c=i[a=e(p[x],m,i,a,f,$,u)])&&(l=c.r)<=o))return a;f=$}return a}(e,r,t,0,0,r.b,i)}(n,e,r,t),An(n,r))}function An(n,e){for(var r=0;e.length>r;r++){var t=e[r],i=t.t,a=Fn(i,t);i===n&&(n=a)}return n}function Fn(n,e){switch(e.$){case 0:return function(n){var r=n.parentNode,t=un(e.s,e.u);return t.elm_event_node_ref||(t.elm_event_node_ref=n.elm_event_node_ref),r&&t!==n&&r.replaceChild(t,n),t}(n);case 4:return cn(n,e.u,e.s),n;case 3:return n.replaceData(0,n.length,e.s),n;case 1:return An(n,e.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=e.s:n.elm_event_node_ref={j:e.s,p:e.u},n;case 6:for(var r=e.s,t=0;r.i>t;t++)n.removeChild(n.childNodes[r.v]);return n;case 7:for(var i=(r=e.s).e,a=n.childNodes[t=r.v];i.length>t;t++)n.insertBefore(un(i[t],e.u),a);return n;case 9:if(!(r=e.s))return n.parentNode.removeChild(n),n;var f=r.A;return void 0!==f.r&&n.parentNode.removeChild(n),f.s=An(n,r.w),n;case 8:return function(n,e){var r=e.s,t=function(n,e){if(n){for(var r=Q.createDocumentFragment(),t=0;n.length>t;t++){var i=n[t].A;U(r,2===i.c?i.s:un(i.z,e.u))}return r}}(r.y,e);n=An(n,r.w);for(var i=r.x,a=0;i.length>a;a++){var f=i[a],o=f.A,u=2===o.c?o.s:un(o.z,e.u);n.insertBefore(u,n.childNodes[f.r])}return t&&U(n,t),n}(n,e);case 5:return e.s(n);default:p(10)}}var Nn=i(function(n,e,r,t){return function(n,e,r,t,i,a){var o=f(w,n,T(e?e.flags:void 0));re(o)||p(2);var u={},c=r(o.a),l=c.a,s=a(d,l),v=function(n,e){var r;for(var t in P){var i=P[t];i.a&&((r=r||{})[t]=i.a(t,e)),n[t]=D(i,e)}return r}(u,d);function d(n,e){var r=f(t,n,l);s(l=r.a,e),Z(u,r.b,i(l))}return Z(u,c.b,i(l)),v?{ports:v}:{}}(e,t,n.a3,n.bo,n.bk,function(e,r){var i=n.bp,a=t.node,u=function n(e){if(3===e.nodeType)return X(e.textContent);if(1!==e.nodeType)return X("");for(var r=s,t=e.attributes,i=t.length;i--;){var a=t[i];r=v(f(an,a.name,a.value),r)}var u=e.tagName.toLowerCase(),c=s,l=e.childNodes;for(i=l.length;i--;)c=v(n(l[i]),c);return o(nn,u,r,c)}(a);return function(n,e){e(n);var r=0;function t(){r=1===r?0:(En(t),e(n),1)}return function(i,a){n=i,a?(e(n),2===r&&(r=1)):(0===r&&En(t),r=2)}}(r,function(n){var r=i(n),t=function(n,e){var r=[];return pn(n,e,r,0),r}(u,r);a=_n(a,u,t,e),u=r})})}),En=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Tn=d,Ln=function(n){return{$:1,a:n}},On=r(function(n,e){return{$:3,a:n,b:e}}),Sn=r(function(n,e){return{$:0,a:n,b:e}}),Cn=r(function(n,e){return{$:1,a:n,b:e}}),qn=function(n){return{$:0,a:n}},Bn=function(n){return{$:2,a:n}},zn=function(n){return n+""},Rn=t(function(n,e,r){for(;;){if(!r.b)return e;var t=r.b,i=n,a=f(n,r.a,e);n=i,e=a,r=t}}),In=function(n){return o(Rn,Tn,s,n)},Mn=i(function(n,e,r,t){return{$:0,a:n,b:e,c:r,d:t}}),Pn=[],Dn=x,Gn=r(function(n,e){return $(e)/$(n)}),Yn=Dn(f(Gn,2,32)),Jn=u(Mn,0,Yn,Pn,Pn),Vn=g,Wn=m,Zn=function(n){return n.length},Hn=r(function(n,e){return function n(e,r,t){if("object"!=typeof e)return e===r?0:r>e?-1:1;if(void 0===e.$)return(t=n(e.a,r.a))?t:(t=n(e.b,r.b))?t:n(e.c,r.c);for(;e.b&&r.b&&!(t=n(e.a,r.a));e=e.b,r=r.b);return t||(e.b?1:r.b?-1:0)}(n,e)>0?n:e}),Kn=h,Qn=r(function(n,e){for(;;){var r=f(Kn,32,n),t=r.b,i=f(Tn,{$:0,a:r.a},e);if(!t.b)return In(i);n=t,e=i}}),Un=r(function(n,e){for(;;){var r=Dn(e/32);if(1===r)return f(Kn,32,n).a;n=f(Qn,n,s),e=r}}),Xn=r(function(n,e){if(e.b){var r=32*e.b,t=Wn(f(Gn,32,r-1)),i=n?In(e.e):e.e,a=f(Un,i,e.b);return u(Mn,Zn(e.d)+r,f(Hn,5,t*Yn),a,e.d)}return u(Mn,Zn(e.d),Yn,Pn,e.d)}),ne=a(function(n,e,r,t,i){for(;;){if(0>e)return f(Xn,!1,{e:t,b:r/32|0,d:i});var a={$:1,a:o(Vn,32,e,n)};n=n,e-=32,r=r,t=f(Tn,a,t),i=i}}),ee=r(function(n,e){if(n>0){var r=n%32;return c(ne,e,n-r-32,n,s,o(Vn,r,n-r,e))}return Jn}),re=function(n){return!n.$},te=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},ie=O,ae=ie(0),fe=i(function(n,e,r,t){if(t.b){var i=t.a,a=t.b;if(a.b){var c=a.a,l=a.b;if(l.b){var s=l.a,v=l.b;if(v.b){var d=v.b;return f(n,i,f(n,c,f(n,s,f(n,v.a,r>500?o(Rn,n,e,In(d)):u(fe,n,e,r+1,d)))))}return f(n,i,f(n,c,f(n,s,e)))}return f(n,i,f(n,c,e))}return f(n,i,e)}return e}),oe=t(function(n,e,r){return u(fe,n,e,0,r)}),ue=r(function(n,e){return o(oe,r(function(e,r){return f(Tn,n(e),r)}),s,e)}),ce=C,le=r(function(n,e){return f(ce,function(e){return ie(n(e))},e)}),se=t(function(n,e,r){return f(ce,function(e){return f(ce,function(r){return ie(f(n,e,r))},r)},e)}),ve=G,de=r(function(n,e){var r=e;return function(n){return S(function(e){e(O(B(n)))})}(f(ce,ve(n),r))});P.Task={b:ae,c:t(function(n,e){return f(le,function(){return 0},(r=f(ue,de(n),e),o(oe,se(Tn),ie(s),r)));var r}),d:t(function(){return ie(0)}),e:r(function(n,e){return f(le,n,e)}),f:void 0};var be,ge,he,pe,xe=Y(s),me=Y(s),$e=r(function(n,e){return e}),ye=nn("a"),we=T,ke=r(function(n,e){return f(tn,n,we(e))}),je=ke("className"),_e=nn("div"),Ae=nn("p"),Fe=X,Ne=f(_e,s,b([f(Ae,s,b([Fe("リンクをクリック中(active)文字色が緑になる->"),f(ye,b([("#",f(ke,"href",/^javascript:/i.test((be="#").replace(/\s/g,""))?"":be)),je("pseudo-active")]),b([Fe("active")]))]))])),Ee=nn("li"),Te=nn("ul"),Le=f(_e,s,b([Fe("@counter-styleと組み合わせてliの独自のマーカーを定義できる"),f(Te,b([je("additive-symbols-list")]),b([f(Ee,s,b([Fe("One")])),f(Ee,s,b([Fe("Two")])),f(Ee,s,b([Fe("Three")])),f(Ee,s,b([Fe("Four")])),f(Ee,s,b([Fe("Five")])),f(Ee,s,b([Fe("Six")]))]))])),Oe=nn("br"),Se=f(_e,s,b([Fe("指定したクラスの後ろに要素を追加できる"),f(Ae,b([je("after-nullpo")]),b([Fe("1. 仕様書無しさん :20/11/02 13:00:00"),f(Oe,s,s),Fe("　　∧＿∧"),f(Oe,s,s),Fe("　（　´∀｀）＜　ぬるぽ")]))])),Ce=nn("h3"),qe=f(_e,b([je("all-container")]),b([f(_e,s,b([f(Ce,s,b([Fe("initial")])),Fe("ベース"),f(_e,b([je("all-parent")]),b([f(_e,b([je("all-child")]),b([Fe("div > div text"),f(Oe,s,s)])),Fe("div text")]))])),f(_e,s,b([f(Ce,s,b([Fe("initial")])),Fe("初期化"),f(_e,b([je("all-parent")]),b([f(_e,b([je("all-child"),je("all-initial")]),b([Fe("div > div text"),f(Oe,s,s)])),Fe("div text")]))])),f(_e,s,b([f(Ce,s,b([Fe("unset")])),Fe("継承/初期化"),f(_e,b([je("all-parent")]),b([f(_e,b([je("all-child"),je("all-unset")]),b([Fe("div > div text"),f(Oe,s,s)])),Fe("div text")]))])),f(_e,s,b([f(Ce,s,b([Fe("inherit")])),Fe("継承"),f(_e,b([je("all-parent")]),b([f(_e,b([je("all-child"),je("all-inherit")]),b([Fe("div > div text"),f(Oe,s,s),Fe("親divの継承値になってる"),f(Oe,s,s)])),Fe("div text")]))])),f(_e,s,b([f(Ce,s,b([Fe("revert")])),Fe("unsetと同じ?"),f(_e,b([je("all-parent")]),b([f(_e,b([je("all-child"),je("all-revert")]),b([Fe("div > div text"),f(Oe,s,s)])),Fe("div text")]))]))])),Be=f(_e,b([je("angle-container")]),b([f(_e,s,b([f(Ce,s,b([Fe("deg")])),Fe("45deg"),f(_e,b([je("angle-base"),je("angle-deg")]),s)])),f(_e,s,b([f(Ce,s,b([Fe("grad")])),Fe("50grad"),f(_e,b([je("angle-base"),je("angle-grad")]),s)])),f(_e,s,b([f(Ce,s,b([Fe("rad")])),Fe("0.7854rad"),f(_e,b([je("angle-base"),je("angle-rad")]),s)])),f(_e,s,b([f(Ce,s,b([Fe("turn")])),Fe("0.125turn"),f(_e,b([je("angle-base"),je("angle-turn")]),s)]))])),ze=nn("h4"),Re=f(_e,b([je("align-content-container")]),b([f(_e,s,b([f(ze,s,b([Fe("baseline")])),Fe("1行目のベースラインに合わせる"),f(_e,b([je("flex-container"),je("align-content-baseline")]),b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("改行"),f(Oe,s,s),Fe("テキスト")])),f(_e,s,b([Fe("3")]))]))])),f(_e,s,b([f(ze,s,b([Fe("first baseline(Firefoxのみ対応)")])),Fe("1行目のベースラインに合わせる"),f(_e,b([je("flex-container"),je("align-content-first-baseline")]),b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("改行"),f(Oe,s,s),Fe("テキスト")])),f(_e,s,b([Fe("3")]))]))])),f(_e,s,b([f(ze,s,b([Fe("last baseline(Firefoxのみ対応)")])),Fe("最終行のベースラインに合わせる"),f(_e,b([je("flex-container"),je("align-content-last-baseline")]),b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("改行"),f(Oe,s,s),Fe("テキスト")])),f(_e,s,b([Fe("3")]))]))]))])),Ie=f(_e,b([je("align-items-container")]),b([f(_e,s,b([f(ze,s,b([Fe("baseline")])),Fe("1行目のベースラインに合わせる"),f(_e,b([je("flex-container"),je("align-items-baseline")]),b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("first baseline")])),Fe("1行目のベースラインに合わせる"),f(_e,b([je("flex-container"),je("align-items-first-baseline")]),b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("last baseline")])),Fe("最終行のベースラインに合わせる"),f(_e,b([je("flex-container"),je("align-items-last-baseline")]),b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))]))])),Me=f(_e,b([je("align-self-container")]),b([f(_e,s,b([f(ze,s,b([Fe("baseline")])),Fe("1行目のベースラインに合わせる"),f(_e,b([je("flex-container"),je("align-self-container")]),b([f(_e,b([je("align-self-baseline")]),b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("first-baseline")])),Fe("1行目のベースラインに合わせる"),f(_e,b([je("flex-container"),je("align-self-container")]),b([f(_e,b([je("align-self-first-baseline")]),b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("last-baseline")])),Fe("最終行のベースラインに合わせる"),f(_e,b([je("flex-container"),je("align-self-container")]),b([f(_e,b([je("align-self-last-baseline")]),b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("stretch")])),Fe("範囲いっぱいまで伸びる"),f(_e,b([je("flex-container"),je("align-self-container")]),b([f(_e,b([je("align-self-stretch")]),b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))]))])),Pe=b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]),De=f(_e,b([je("align-content-container")]),b([f(_e,s,b([f(ze,s,b([Fe("center")])),Fe("中央寄せ"),f(_e,b([je("flex-container"),je("align-content-center")]),Pe)])),f(_e,s,b([f(ze,s,b([Fe("start(Firefoxのみ対応)")])),Fe("先頭寄せ"),f(_e,b([je("flex-container"),je("align-content-start")]),Pe)])),f(_e,s,b([f(ze,s,b([Fe("end(Firefoxのみ対応)")])),Fe("末尾寄せ"),f(_e,b([je("flex-container"),je("align-content-end")]),Pe)])),f(_e,s,b([f(ze,s,b([Fe("flex-start")])),Fe("flexコンテナに依存した先頭寄せ"),f(_e,b([je("flex-container"),je("align-content-flex-start")]),Pe)])),f(_e,s,b([f(ze,s,b([Fe("flex-end")])),Fe("flexコンテナに依存した末尾寄せ"),f(_e,b([je("flex-container"),je("align-content-flex-end")]),Pe)]))])),Ge=nn("details"),Ye=rn,Je=f(_e,b([f(Ye,"display","flex")]),b([f(_e,s,b([f(ze,s,b([Fe("space-around")])),Fe("端にはアイテム間の半分の間隔を空ける"),f(_e,b([je("flex-container"),je("align-content-space-around")]),Pe)])),f(_e,s,b([f(ze,s,b([Fe("space-between")])),Fe("先頭と末尾にそれぞれ寄せる"),f(_e,b([je("flex-container"),je("align-content-space-between")]),Pe)])),f(_e,s,b([f(ze,s,b([Fe("space-evenly")])),Fe("端にはアイテム感と同じ間隔を空ける"),f(_e,b([je("flex-container"),je("align-content-space-evenly")]),Pe)])),f(_e,s,b([f(ze,s,b([Fe("stretch")])),Fe("コンテナサイズに合わせて引き伸ばす"),f(_e,b([je("flex-container"),je("align-content-stretch")]),Pe)]))])),Ve=nn("h1"),We=nn("h2"),Ze=f(_e,b([je("align-items-container")]),b([f(_e,s,b([f(ze,s,b([Fe("normal")])),Fe("レイアウトに依存 flexの場合stretch"),f(_e,b([je("flex-container"),je("align-items-normal")]),b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("stretch")])),Fe("範囲いっぱいまで伸びる"),f(_e,b([je("flex-container"),je("align-items-stretch")]),b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))]))])),He=f(_e,b([je("align-items-container")]),b([f(_e,s,b([f(ze,s,b([Fe("center")])),Fe("中央寄せ"),f(_e,b([je("flex-container"),je("align-items-center")]),b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("start(Firefoxのみ対応)")])),Fe("先頭寄せ"),f(_e,b([je("flex-container"),je("align-items-start")]),b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("end(Firefoxのみ対応)")])),Fe("末尾寄せ"),f(_e,b([je("flex-container"),je("align-items-end")]),b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("flex-start")])),Fe("flexコンテナに依存した先頭寄せ"),f(_e,b([je("flex-container"),je("align-items-flex-start")]),b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("flex-end")])),Fe("flexコンテナに依存した末尾寄せ"),f(_e,b([je("flex-container"),je("align-items-flex-end")]),b([f(_e,s,b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))]))])),Ke=f(_e,b([je("align-self-container")]),b([f(_e,s,b([f(ze,s,b([Fe("center")])),Fe("中央寄せ"),f(_e,b([je("flex-container"),je("align-self-container")]),b([f(_e,b([je("align-self-center")]),b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("start(Firefoxのみ対応)")])),Fe("先頭寄せ"),f(_e,b([je("flex-container"),je("align-self-container"),f(Ye,"align-items","center")]),b([f(_e,b([je("align-self-start")]),b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("end(Firefoxのみ対応)")])),Fe("末尾寄せ"),f(_e,b([je("flex-container"),je("align-self-container")]),b([f(_e,b([je("align-self-end")]),b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("self-start(Firefoxのみ対応)")])),Fe("先頭寄せ"),f(_e,b([je("flex-container"),je("align-self-container"),f(Ye,"align-items","center")]),b([f(_e,b([je("align-self-self-start")]),b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("self-end(Firefoxのみ対応)")])),Fe("末尾寄せ"),f(_e,b([je("flex-container"),je("align-self-container")]),b([f(_e,b([je("align-self-self-end")]),b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("flex-start")])),Fe("先頭寄せ"),f(_e,b([je("flex-container"),je("align-self-container"),f(Ye,"align-items","center")]),b([f(_e,b([je("align-self-flex-start")]),b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))])),f(_e,s,b([f(ze,s,b([Fe("flex-end")])),Fe("末尾寄せ"),f(_e,b([je("flex-container"),je("align-self-container")]),b([f(_e,b([je("align-self-flex-end")]),b([Fe("1")])),f(_e,s,b([Fe("2")])),f(_e,s,b([Fe("3")])),f(_e,s,b([Fe("4")])),f(_e,s,b([Fe("5")]))]))]))])),Qe=nn("summary"),Ue=f(Ge,s,b([f(Qe,s,b([Fe("A Section")])),f(_e,s,b([f(Ve,s,b([Fe("A")])),f(We,s,b([Fe(":active")])),Ne,f(We,s,b([Fe("additive-symbols(Firefoxのみ対応)")])),Le,f(We,s,b([Fe("::after")])),Se,f(We,s,b([Fe("align-content(flexとflex-wrapが必要)")])),f(Ce,s,b([Fe("均等配置")])),Je,f(Ce,s,b([Fe("位置指定")])),De,f(Ce,s,b([Fe("ベースライン")])),Re,f(We,s,b([Fe("align-items")])),f(Ce,s,b([Fe("基本キーワード")])),Ze,f(Ce,s,b([Fe("位置指定")])),He,f(Ce,s,b([Fe("ベースライン")])),Ie,f(We,s,b([Fe("align-self")])),f(Ce,s,b([Fe("位置指定")])),Ke,f(Ce,s,b([Fe("ベースライン")])),Me,f(We,s,b([Fe("all")])),qe,f(We,s,b([Fe("<angle>")])),Be]))])),Xe=T,nr=r(function(n,e){return f(tn,n,Xe(e))})("controls"),er=ke("poster"),rr=nn("video"),tr=f(_e,s,b([f(Ae,s,b([Fe("フルスクリーン時の背景色等を指定できる(今回は明るい緑を指定)")])),f(rr,b([nr(!0),f(ke,"src","https://animethemes.moe/video/SteinsGateZero-OP1.webm"),(300,f(an,"width",zn(300))),f(an,"height",zn(200)),er("http://www.otakugamers.uk/wp-content/uploads/2016/11/logo_black.png")]),s)])),ir=f(Ge,s,b([f(Qe,s,b([Fe("B Section")])),f(_e,s,b([f(Ve,s,b([Fe("B")])),f(We,s,b([Fe("::backdrop")])),tr]))]));he={Main:{init:(ge={a3:"てんぷら🍤",bo:$e,bp:function(){return f(_e,s,b([Ue,ir]))}},Nn({a3:function(){return l(ge.a3,xe)},bk:function(){return me},bo:r(function(n,e){return l(f(ge.bo,n,e),xe)}),bp:ge.bp}))((pe=0,{$:0,a:pe}))(0)}},n.Elm?function n(e,r){for(var t in r)t in e?"init"==t?p(6):n(e[t],r[t]):e[t]=r[t]}(n.Elm,he):n.Elm=he}(this);
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./Main.elm");e.Elm.Main.init({node:document.querySelector("main")});
},{"./Main.elm":"asWa"}]},{},["Focm"], null)
//# sourceMappingURL=src.db439cf6.js.map