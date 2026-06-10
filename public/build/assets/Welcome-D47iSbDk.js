import{a as T,o as z,g as l,az as ta,aA as ea,aB as na,c as _t,b as se,aC as aa,r as pt,Q as gt,W as ra,w as wt,n as F,k as mt,u as D,f as Qt,X as oa,d as J,a1 as sa,T as ia,a7 as la,Z as fa,e as ca,h as ua,a6 as da,F as ma}from"./app-ByuzJz7V.js";import{d as pa,l as Le}from"./index-nwDlEm-5.js";import{_ as hn,l as De}from"./_plugin-vue_export-helper-4M2ilndO.js";function ga(t,e){return z(),T("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z","clip-rule":"evenodd"})])}function ha(t,e){return z(),T("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"fill-rule":"evenodd",d:"M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z","clip-rule":"evenodd"})])}const Re="/build/assets/gobierno-VHX8UfDK.webp";var bn={exports:{}};(function(t,e){(function(n,a){t.exports=a()})(ea,function(){return function(n){function a(o){if(r[o])return r[o].exports;var s=r[o]={exports:{},id:o,loaded:!1};return n[o].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}var r={};return a.m=n,a.c=r,a.p="dist/",a(0)}([function(n,a,r){function o(w){return w&&w.__esModule?w:{default:w}}var s=Object.assign||function(w){for(var $=1;$<arguments.length;$++){var X=arguments[$];for(var lt in X)Object.prototype.hasOwnProperty.call(X,lt)&&(w[lt]=X[lt])}return w},c=r(1),i=(o(c),r(6)),f=o(i),d=r(7),m=o(d),p=r(8),y=o(p),k=r(9),C=o(k),_=r(10),h=o(_),v=r(11),O=o(v),M=r(14),I=o(M),L=[],H=!1,P={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},G=function(){var w=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(w&&(H=!0),H)return L=(0,O.default)(L,P),(0,h.default)(L,P.once),L},it=function(){L=(0,I.default)(),G()},x=function(){L.forEach(function(w,$){w.node.removeAttribute("data-aos"),w.node.removeAttribute("data-aos-easing"),w.node.removeAttribute("data-aos-duration"),w.node.removeAttribute("data-aos-delay")})},g=function(w){return w===!0||w==="mobile"&&C.default.mobile()||w==="phone"&&C.default.phone()||w==="tablet"&&C.default.tablet()||typeof w=="function"&&w()===!0},A=function(w){P=s(P,w),L=(0,I.default)();var $=document.all&&!window.atob;return g(P.disable)||$?x():(P.disableMutationObserver||y.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),P.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",P.easing),document.querySelector("body").setAttribute("data-aos-duration",P.duration),document.querySelector("body").setAttribute("data-aos-delay",P.delay),P.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?G(!0):P.startEvent==="load"?window.addEventListener(P.startEvent,function(){G(!0)}):document.addEventListener(P.startEvent,function(){G(!0)}),window.addEventListener("resize",(0,m.default)(G,P.debounceDelay,!0)),window.addEventListener("orientationchange",(0,m.default)(G,P.debounceDelay,!0)),window.addEventListener("scroll",(0,f.default)(function(){(0,h.default)(L,P.once)},P.throttleDelay)),P.disableMutationObserver||y.default.ready("[data-aos]",it),L)};n.exports={init:A,refresh:G,refreshHard:it}},function(n,a){},,,,,function(n,a){(function(r){function o(g,A,w){function $(S){var W=q,ut=Z;return q=Z=void 0,ft=S,R=g.apply(ut,W)}function X(S){return ft=S,j=setTimeout(xt,A),ct?$(S):R}function lt(S){var W=S-U,ut=S-ft,ze=A-W;return nt?it(ze,Q-ut):ze}function yt(S){var W=S-U,ut=S-ft;return U===void 0||W>=A||W<0||nt&&ut>=Q}function xt(){var S=x();return yt(S)?Dt(S):void(j=setTimeout(xt,lt(S)))}function Dt(S){return j=void 0,N&&q?$(S):(q=Z=void 0,R)}function Zt(){j!==void 0&&clearTimeout(j),ft=0,q=U=Z=j=void 0}function Ft(){return j===void 0?R:Dt(x())}function K(){var S=x(),W=yt(S);if(q=arguments,Z=this,U=S,W){if(j===void 0)return X(U);if(nt)return j=setTimeout(xt,A),$(U)}return j===void 0&&(j=setTimeout(xt,A)),R}var q,Z,Q,R,j,U,ft=0,ct=!1,nt=!1,N=!0;if(typeof g!="function")throw new TypeError(p);return A=d(A)||0,c(w)&&(ct=!!w.leading,nt="maxWait"in w,Q=nt?G(d(w.maxWait)||0,A):Q,N="trailing"in w?!!w.trailing:N),K.cancel=Zt,K.flush=Ft,K}function s(g,A,w){var $=!0,X=!0;if(typeof g!="function")throw new TypeError(p);return c(w)&&($="leading"in w?!!w.leading:$,X="trailing"in w?!!w.trailing:X),o(g,A,{leading:$,maxWait:A,trailing:X})}function c(g){var A=typeof g>"u"?"undefined":m(g);return!!g&&(A=="object"||A=="function")}function i(g){return!!g&&(typeof g>"u"?"undefined":m(g))=="object"}function f(g){return(typeof g>"u"?"undefined":m(g))=="symbol"||i(g)&&P.call(g)==k}function d(g){if(typeof g=="number")return g;if(f(g))return y;if(c(g)){var A=typeof g.valueOf=="function"?g.valueOf():g;g=c(A)?A+"":A}if(typeof g!="string")return g===0?g:+g;g=g.replace(C,"");var w=h.test(g);return w||v.test(g)?O(g.slice(2),w?2:8):_.test(g)?y:+g}var m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},p="Expected a function",y=NaN,k="[object Symbol]",C=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,v=/^0o[0-7]+$/i,O=parseInt,M=(typeof r>"u"?"undefined":m(r))=="object"&&r&&r.Object===Object&&r,I=(typeof self>"u"?"undefined":m(self))=="object"&&self&&self.Object===Object&&self,L=M||I||Function("return this")(),H=Object.prototype,P=H.toString,G=Math.max,it=Math.min,x=function(){return L.Date.now()};n.exports=s}).call(a,function(){return this}())},function(n,a){(function(r){function o(x,g,A){function w(N){var S=K,W=q;return K=q=void 0,U=N,Q=x.apply(W,S)}function $(N){return U=N,R=setTimeout(yt,g),ft?w(N):Q}function X(N){var S=N-j,W=N-U,ut=g-S;return ct?G(ut,Z-W):ut}function lt(N){var S=N-j,W=N-U;return j===void 0||S>=g||S<0||ct&&W>=Z}function yt(){var N=it();return lt(N)?xt(N):void(R=setTimeout(yt,X(N)))}function xt(N){return R=void 0,nt&&K?w(N):(K=q=void 0,Q)}function Dt(){R!==void 0&&clearTimeout(R),U=0,K=j=q=R=void 0}function Zt(){return R===void 0?Q:xt(it())}function Ft(){var N=it(),S=lt(N);if(K=arguments,q=this,j=N,S){if(R===void 0)return $(j);if(ct)return R=setTimeout(yt,g),w(j)}return R===void 0&&(R=setTimeout(yt,g)),Q}var K,q,Z,Q,R,j,U=0,ft=!1,ct=!1,nt=!0;if(typeof x!="function")throw new TypeError(m);return g=f(g)||0,s(A)&&(ft=!!A.leading,ct="maxWait"in A,Z=ct?P(f(A.maxWait)||0,g):Z,nt="trailing"in A?!!A.trailing:nt),Ft.cancel=Dt,Ft.flush=Zt,Ft}function s(x){var g=typeof x>"u"?"undefined":d(x);return!!x&&(g=="object"||g=="function")}function c(x){return!!x&&(typeof x>"u"?"undefined":d(x))=="object"}function i(x){return(typeof x>"u"?"undefined":d(x))=="symbol"||c(x)&&H.call(x)==y}function f(x){if(typeof x=="number")return x;if(i(x))return p;if(s(x)){var g=typeof x.valueOf=="function"?x.valueOf():x;x=s(g)?g+"":g}if(typeof x!="string")return x===0?x:+x;x=x.replace(k,"");var A=_.test(x);return A||h.test(x)?v(x.slice(2),A?2:8):C.test(x)?p:+x}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},m="Expected a function",p=NaN,y="[object Symbol]",k=/^\s+|\s+$/g,C=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,h=/^0o[0-7]+$/i,v=parseInt,O=(typeof r>"u"?"undefined":d(r))=="object"&&r&&r.Object===Object&&r,M=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,I=O||M||Function("return this")(),L=Object.prototype,H=L.toString,P=Math.max,G=Math.min,it=function(){return I.Date.now()};n.exports=o}).call(a,function(){return this}())},function(n,a){function r(d){var m=void 0,p=void 0;for(m=0;m<d.length;m+=1)if(p=d[m],p.dataset&&p.dataset.aos||p.children&&r(p.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!o()}function c(d,m){var p=window.document,y=o(),k=new y(i);f=m,k.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function i(d){d&&d.forEach(function(m){var p=Array.prototype.slice.call(m.addedNodes),y=Array.prototype.slice.call(m.removedNodes),k=p.concat(y);if(r(k))return f()})}Object.defineProperty(a,"__esModule",{value:!0});var f=function(){};a.default={isSupported:s,ready:c}},function(n,a){function r(p,y){if(!(p instanceof y))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var s=function(){function p(y,k){for(var C=0;C<k.length;C++){var _=k[C];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(y,_.key,_)}}return function(y,k,C){return k&&p(y.prototype,k),C&&p(y,C),y}}(),c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,m=function(){function p(){r(this,p)}return s(p,[{key:"phone",value:function(){var y=o();return!(!c.test(y)&&!i.test(y.substr(0,4)))}},{key:"mobile",value:function(){var y=o();return!(!f.test(y)&&!d.test(y.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p}();a.default=new m},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(s,c,i){var f=s.node.getAttribute("data-aos-once");c>s.position?s.node.classList.add("aos-animate"):typeof f<"u"&&(f==="false"||!i&&f!=="true")&&s.node.classList.remove("aos-animate")},o=function(s,c){var i=window.pageYOffset,f=window.innerHeight;s.forEach(function(d,m){r(d,f+i,c)})};a.default=o},function(n,a,r){function o(f){return f&&f.__esModule?f:{default:f}}Object.defineProperty(a,"__esModule",{value:!0});var s=r(12),c=o(s),i=function(f,d){return f.forEach(function(m,p){m.node.classList.add("aos-init"),m.position=(0,c.default)(m.node,d.offset)}),f};a.default=i},function(n,a,r){function o(f){return f&&f.__esModule?f:{default:f}}Object.defineProperty(a,"__esModule",{value:!0});var s=r(13),c=o(s),i=function(f,d){var m=0,p=0,y=window.innerHeight,k={offset:f.getAttribute("data-aos-offset"),anchor:f.getAttribute("data-aos-anchor"),anchorPlacement:f.getAttribute("data-aos-anchor-placement")};switch(k.offset&&!isNaN(k.offset)&&(p=parseInt(k.offset)),k.anchor&&document.querySelectorAll(k.anchor)&&(f=document.querySelectorAll(k.anchor)[0]),m=(0,c.default)(f).top,k.anchorPlacement){case"top-bottom":break;case"center-bottom":m+=f.offsetHeight/2;break;case"bottom-bottom":m+=f.offsetHeight;break;case"top-center":m+=y/2;break;case"bottom-center":m+=y/2+f.offsetHeight;break;case"center-center":m+=y/2+f.offsetHeight/2;break;case"top-top":m+=y;break;case"bottom-top":m+=f.offsetHeight+y;break;case"center-top":m+=f.offsetHeight/2+y}return k.anchorPlacement||k.offset||isNaN(d)||(p=d),m+p};a.default=i},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(o){for(var s=0,c=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)s+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),c+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:c,left:s}};a.default=r},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(s){return{node:s}})};a.default=r}])})})(bn);var ba=bn.exports;const ie=ta(ba);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function va(t,e,n){return(e=xa(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$e(Object(n),!0).forEach(function(a){va(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$e(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ya(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function xa(t){var e=ya(t,"string");return typeof e=="symbol"?e:e+""}const Be=()=>{};let _e={},vn={},yn=null,xn={mark:Be,measure:Be};try{typeof window<"u"&&(_e=window),typeof document<"u"&&(vn=document),typeof MutationObserver<"u"&&(yn=MutationObserver),typeof performance<"u"&&(xn=performance)}catch{}const{userAgent:He=""}=_e.navigator||{},ht=_e,E=vn,We=yn,Rt=xn;ht.document;const st=!!E.documentElement&&!!E.head&&typeof E.addEventListener=="function"&&typeof E.createElement=="function",wn=~He.indexOf("MSIE")||~He.indexOf("Trident/");var wa=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ka=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,kn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Aa={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},An=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],B="classic",Vt="duotone",Oa="sharp",_a="sharp-duotone",On=[B,Vt,Oa,_a],Sa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Ca={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Pa=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ea={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Fa=["fak","fa-kit","fakd","fa-kit-duotone"],Ye={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Na=["kit"],Ma={kit:{"fa-kit":"fak"}},Ia=["fak","fakd"],ja={kit:{fak:"fa-kit"}},Ue={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},$t={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ta=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],za=["fak","fa-kit","fakd","fa-kit-duotone"],La={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Da={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ra={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},le={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},$a=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],fe=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ta,...$a],Ba=["solid","regular","light","thin","duotone","brands"],_n=[1,2,3,4,5,6,7,8,9,10],Ha=_n.concat([11,12,13,14,15,16,17,18,19,20]),Wa=[...Object.keys(Ra),...Ba,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$t.GROUP,$t.SWAP_OPACITY,$t.PRIMARY,$t.SECONDARY].concat(_n.map(t=>"".concat(t,"x"))).concat(Ha.map(t=>"w-".concat(t))),Ya={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const rt="___FONT_AWESOME___",ce=16,Sn="fa",Cn="svg-inline--fa",At="data-fa-i2svg",ue="data-fa-pseudo-element",Ua="data-fa-pseudo-element-pending",Se="data-prefix",Ce="data-icon",Ve="fontawesome-i2svg",Va="async",qa=["HTML","HEAD","STYLE","SCRIPT"],Pn=(()=>{try{return!0}catch{return!1}})();function zt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[B]}})}const En=u({},kn);En[B]=u(u(u(u({},{"fa-duotone":"duotone"}),kn[B]),Ye.kit),Ye["kit-duotone"]);const Ga=zt(En),de=u({},Ea);de[B]=u(u(u(u({},{duotone:"fad"}),de[B]),Ue.kit),Ue["kit-duotone"]);const qe=zt(de),me=u({},le);me[B]=u(u({},me[B]),ja.kit);const Pe=zt(me),pe=u({},Da);pe[B]=u(u({},pe[B]),Ma.kit);zt(pe);const Xa=wa,Fn="fa-layers-text",Ka=ka,Za=u({},Sa);zt(Za);const Qa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Jt=Aa,Ja=[...Na,...Wa],Mt=ht.FontAwesomeConfig||{};function tr(t){var e=E.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function er(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}E&&typeof E.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=er(tr(n));r!=null&&(Mt[a]=r)});const Nn={styleDefault:"solid",familyDefault:B,cssPrefix:Sn,replacementClass:Cn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Mt.familyPrefix&&(Mt.cssPrefix=Mt.familyPrefix);const Pt=u(u({},Nn),Mt);Pt.autoReplaceSvg||(Pt.observeMutations=!1);const b={};Object.keys(Nn).forEach(t=>{Object.defineProperty(b,t,{enumerable:!0,set:function(e){Pt[t]=e,It.forEach(n=>n(b))},get:function(){return Pt[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){Pt.cssPrefix=t,It.forEach(e=>e(b))},get:function(){return Pt.cssPrefix}});ht.FontAwesomeConfig=b;const It=[];function nr(t){return It.push(t),()=>{It.splice(It.indexOf(t),1)}}const dt=ce,tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ar(t){if(!t||!st)return;const e=E.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=E.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return E.head.insertBefore(e,a),t}const rr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function jt(){let t=12,e="";for(;t-- >0;)e+=rr[Math.random()*62|0];return e}function Et(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ee(t){return t.classList?Et(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Mn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function or(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Mn(t[n]),'" '),"").trim()}function qt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Fe(t){return t.size!==tt.size||t.x!==tt.x||t.y!==tt.y||t.rotate!==tt.rotate||t.flipX||t.flipY}function sr(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),i={transform:"".concat(o," ").concat(s," ").concat(c)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:i,path:f}}function ir(t){let{transform:e,width:n=ce,height:a=ce,startCentered:r=!1}=t,o="";return r&&wn?o+="translate(".concat(e.x/dt-n/2,"em, ").concat(e.y/dt-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/dt,"em), calc(-50% + ").concat(e.y/dt,"em)) "):o+="translate(".concat(e.x/dt,"em, ").concat(e.y/dt,"em) "),o+="scale(".concat(e.size/dt*(e.flipX?-1:1),", ").concat(e.size/dt*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var lr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function In(){const t=Sn,e=Cn,n=b.cssPrefix,a=b.replacementClass;let r=lr;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(c,".".concat(a))}return r}let Ge=!1;function te(){b.autoAddCss&&!Ge&&(ar(In()),Ge=!0)}var fr={mixout(){return{dom:{css:In,insertCss:te}}},hooks(){return{beforeDOMElementCreation(){te()},beforeI2svg(){te()}}}};const ot=ht||{};ot[rt]||(ot[rt]={});ot[rt].styles||(ot[rt].styles={});ot[rt].hooks||(ot[rt].hooks={});ot[rt].shims||(ot[rt].shims=[]);var et=ot[rt];const jn=[],Tn=function(){E.removeEventListener("DOMContentLoaded",Tn),Wt=1,jn.map(t=>t())};let Wt=!1;st&&(Wt=(E.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(E.readyState),Wt||E.addEventListener("DOMContentLoaded",Tn));function cr(t){st&&(Wt?setTimeout(t,0):jn.push(t))}function Lt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Mn(t):"<".concat(e," ").concat(or(n),">").concat(a.map(Lt).join(""),"</").concat(e,">")}function Xe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ee=function(e,n,a,r){var o=Object.keys(e),s=o.length,c=n,i,f,d;for(a===void 0?(i=1,d=e[o[0]]):(i=0,d=a);i<s;i++)f=o[i],d=c(d,e[f],f,e);return d};function ur(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ge(t){const e=ur(t);return e.length===1?e[0].toString(16):null}function dr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ke(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function he(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Ke(e);typeof et.hooks.addPack=="function"&&!a?et.hooks.addPack(t,Ke(e)):et.styles[t]=u(u({},et.styles[t]||{}),r),t==="fas"&&he("fa",e)}const{styles:Tt,shims:mr}=et,zn=Object.keys(Pe),pr=zn.reduce((t,e)=>(t[e]=Object.keys(Pe[e]),t),{});let Ne=null,Ln={},Dn={},Rn={},$n={},Bn={};function gr(t){return~Ja.indexOf(t)}function hr(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!gr(r)?r:null}const Hn=()=>{const t=a=>ee(Tt,(r,o,s)=>(r[s]=ee(o,a,{}),r),{});Ln=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(c=>typeof c=="number").forEach(c=>{a[c.toString(16)]=o}),a)),Dn=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(c=>typeof c=="string").forEach(c=>{a[c]=o}),a)),Bn=t((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(c=>{a[c]=o}),a});const e="far"in Tt||b.autoFetchSvg,n=ee(mr,(a,r)=>{const o=r[0];let s=r[1];const c=r[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:c}),a},{names:{},unicodes:{}});Rn=n.names,$n=n.unicodes,Ne=Gt(b.styleDefault,{family:b.familyDefault})};nr(t=>{Ne=Gt(t.styleDefault,{family:b.familyDefault})});Hn();function Me(t,e){return(Ln[t]||{})[e]}function br(t,e){return(Dn[t]||{})[e]}function kt(t,e){return(Bn[t]||{})[e]}function Wn(t){return Rn[t]||{prefix:null,iconName:null}}function vr(t){const e=$n[t],n=Me("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function bt(){return Ne}const Yn=()=>({prefix:null,iconName:null,rest:[]});function yr(t){let e=B;const n=zn.reduce((a,r)=>(a[r]="".concat(b.cssPrefix,"-").concat(r),a),{});return On.forEach(a=>{(t.includes(n[a])||t.some(r=>pr[a].includes(r)))&&(e=a)}),e}function Gt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=B}=e,a=Ga[n][t];if(n===Vt&&!t)return"fad";const r=qe[n][t]||qe[n][a],o=t in et.styles?t:null;return r||o||null}function xr(t){let e=[],n=null;return t.forEach(a=>{const r=hr(b.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Ze(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Xt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=fe.concat(za),o=Ze(t.filter(m=>r.includes(m))),s=Ze(t.filter(m=>!fe.includes(m))),c=o.filter(m=>(a=m,!An.includes(m))),[i=null]=c,f=yr(o),d=u(u({},xr(s)),{},{prefix:Gt(i,{family:f})});return u(u(u({},d),Or({values:t,family:f,styles:Tt,config:b,canonical:d,givenPrefix:a})),wr(n,a,d))}function wr(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?Wn(r):{},s=kt(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!Tt.far&&Tt.fas&&!b.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const kr=On.filter(t=>t!==B||t!==Vt),Ar=Object.keys(le).filter(t=>t!==B).map(t=>Object.keys(le[t])).flat();function Or(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=t,c=n===Vt,i=e.includes("fa-duotone")||e.includes("fad"),f=s.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!c&&(i||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&kr.includes(n)&&(Object.keys(o).find(p=>Ar.includes(p))||s.autoFetchSvg)){const p=Pa.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=kt(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=bt()||"fas"),a}class _r{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=u(u({},this.definitions[o]||{}),r[o]),he(o,r[o]);const s=Pe[B][o];s&&he(s,r[o]),Hn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:c}=a[r],i=c[2];e[o]||(e[o]={}),i.length>0&&i.forEach(f=>{typeof f=="string"&&(e[o][f]=c)}),e[o][s]=c}),e}}let Qe=[],St={};const Ct={},Sr=Object.keys(Ct);function Cr(t,e){let{mixoutsTo:n}=e;return Qe=t,St={},Object.keys(Ct).forEach(a=>{Sr.indexOf(a)===-1&&delete Ct[a]}),Qe.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{St[s]||(St[s]=[]),St[s].push(o[s])})}a.provides&&a.provides(Ct)}),n}function be(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(St[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function Ot(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(St[t]||[]).forEach(o=>{o.apply(null,n)})}function vt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ct[t]?Ct[t].apply(null,e):void 0}function ve(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||bt();if(e)return e=kt(n,e)||e,Xe(Un.definitions,n,e)||Xe(et.styles,n,e)}const Un=new _r,Pr=()=>{b.autoReplaceSvg=!1,b.observeMutations=!1,Ot("noAuto")},Er={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return st?(Ot("beforeI2svg",t),vt("pseudoElements2svg",t),vt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,cr(()=>{Nr({autoReplaceSvgRoot:e}),Ot("watch",t)})}},Fr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:kt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Gt(t[0]);return{prefix:n,iconName:kt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(Xa))){const e=Xt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||bt(),iconName:kt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=bt();return{prefix:e,iconName:kt(e,t)||t}}}},V={noAuto:Pr,config:b,dom:Er,parse:Fr,library:Un,findIconDefinition:ve,toHtml:Lt},Nr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=E}=t;(Object.keys(et.styles).length>0||b.autoFetchSvg)&&st&&b.autoReplaceSvg&&V.dom.i2svg({node:e})};function Kt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Lt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!st)return;const n=E.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Mr(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:s}=t;if(Fe(s)&&n.found&&!a.found){const{width:c,height:i}=n,f={x:c/i/2,y:.5};r.style=qt(u(u({},o),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ir(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:s}),children:a}]}]}function Ie(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:c,maskId:i,titleId:f,extra:d,watchable:m=!1}=t,{width:p,height:y}=n.found?n:e,k=Ia.includes(a),C=[b.replacementClass,r?"".concat(b.cssPrefix,"-").concat(r):""].filter(I=>d.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(d.classes).join(" ");let _={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:C,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(y)})};const h=k&&!~d.classes.indexOf("fa-fw")?{width:"".concat(p/y*16*.0625,"em")}:{};m&&(_.attributes[At]=""),c&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(f||jt())},children:[c]}),delete _.attributes.title);const v=u(u({},_),{},{prefix:a,iconName:r,main:e,mask:n,maskId:i,transform:o,symbol:s,styles:u(u({},h),d.styles)}),{children:O,attributes:M}=n.found&&e.found?vt("generateAbstractMask",v)||{children:[],attributes:{}}:vt("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=O,v.attributes=M,s?Ir(v):Mr(v)}function Je(t){const{content:e,width:n,height:a,transform:r,title:o,extra:s,watchable:c=!1}=t,i=u(u(u({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});c&&(i[At]="");const f=u({},s.styles);Fe(r)&&(f.transform=ir({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const d=qt(f);d.length>0&&(i.style=d);const m=[];return m.push({tag:"span",attributes:i,children:[e]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function jr(t){const{content:e,title:n,extra:a}=t,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=qt(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:ne}=et;function ye(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Jt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Jt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Jt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Tr={found:!1,width:512,height:512};function zr(t,e){!Pn&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function xe(t,e){let n=e;return e==="fa"&&b.styleDefault!==null&&(e=bt()),new Promise((a,r)=>{if(n==="fa"){const o=Wn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&ne[e]&&ne[e][t]){const o=ne[e][t];return a(ye(o))}zr(t,e),a(u(u({},Tr),{},{icon:b.showMissingIcons&&t?vt("missingIconAbstract")||{}:{}}))})}const tn=()=>{},we=b.measurePerformance&&Rt&&Rt.mark&&Rt.measure?Rt:{mark:tn,measure:tn},Nt='FA "6.7.2"',Lr=t=>(we.mark("".concat(Nt," ").concat(t," begins")),()=>Vn(t)),Vn=t=>{we.mark("".concat(Nt," ").concat(t," ends")),we.measure("".concat(Nt," ").concat(t),"".concat(Nt," ").concat(t," begins"),"".concat(Nt," ").concat(t," ends"))};var je={begin:Lr,end:Vn};const Bt=()=>{};function en(t){return typeof(t.getAttribute?t.getAttribute(At):null)=="string"}function Dr(t){const e=t.getAttribute?t.getAttribute(Se):null,n=t.getAttribute?t.getAttribute(Ce):null;return e&&n}function Rr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function $r(){return b.autoReplaceSvg===!0?Ht.replace:Ht[b.autoReplaceSvg]||Ht.replace}function Br(t){return E.createElementNS("http://www.w3.org/2000/svg",t)}function Hr(t){return E.createElement(t)}function qn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Br:Hr}=e;if(typeof t=="string")return E.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(qn(o,{ceFn:n}))}),a}function Wr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ht={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(qn(n),e)}),e.getAttribute(At)===null&&b.keepOriginalSource){let n=E.createComment(Wr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ee(e).indexOf(b.replacementClass))return Ht.replace(t);const a=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,c)=>(c===b.replacementClass||c.match(a)?s.toSvg.push(c):s.toNode.push(c),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>Lt(o)).join(`
`);e.setAttribute(At,""),e.innerHTML=r}};function nn(t){t()}function Gn(t,e){const n=typeof e=="function"?e:Bt;if(t.length===0)n();else{let a=nn;b.mutateApproach===Va&&(a=ht.requestAnimationFrame||nn),a(()=>{const r=$r(),o=je.begin("mutate");t.map(r),o(),n()})}}let Te=!1;function Xn(){Te=!0}function ke(){Te=!1}let Yt=null;function an(t){if(!We||!b.observeMutations)return;const{treeCallback:e=Bt,nodeCallback:n=Bt,pseudoElementsCallback:a=Bt,observeMutationsRoot:r=E}=t;Yt=new We(o=>{if(Te)return;const s=bt();Et(o).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!en(c.addedNodes[0])&&(b.searchPseudoElements&&a(c.target),e(c.target)),c.type==="attributes"&&c.target.parentNode&&b.searchPseudoElements&&a(c.target.parentNode),c.type==="attributes"&&en(c.target)&&~Qa.indexOf(c.attributeName))if(c.attributeName==="class"&&Dr(c.target)){const{prefix:i,iconName:f}=Xt(Ee(c.target));c.target.setAttribute(Se,i||s),f&&c.target.setAttribute(Ce,f)}else Rr(c.target)&&n(c.target)})}),st&&Yt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Yr(){Yt&&Yt.disconnect()}function Ur(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],c=o.slice(1);return s&&c.length>0&&(a[s]=c.join(":").trim()),a},{})),n}function Vr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=Xt(Ee(t));return r.prefix||(r.prefix=bt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=br(r.prefix,t.innerText)||Me(r.prefix,ge(t.innerText))),!r.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function qr(t){const e=Et(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(a||jt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Gr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Vr(t),o=qr(t),s=be("parseNodeAttributes",{},t);let c=e.styleParser?Ur(t):[];return u({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:c,attributes:o}},s)}const{styles:Xr}=et;function Kn(t){const e=b.autoReplaceSvg==="nest"?rn(t,{styleParser:!1}):rn(t);return~e.extra.classes.indexOf(Fn)?vt("generateLayersText",t,e):vt("generateSvgReplacementMutation",t,e)}function Kr(){return[...Fa,...fe]}function on(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!st)return Promise.resolve();const n=E.documentElement.classList,a=d=>n.add("".concat(Ve,"-").concat(d)),r=d=>n.remove("".concat(Ve,"-").concat(d)),o=b.autoFetchSvg?Kr():An.concat(Object.keys(Xr));o.includes("fa")||o.push("fa");const s=[".".concat(Fn,":not([").concat(At,"])")].concat(o.map(d=>".".concat(d,":not([").concat(At,"])"))).join(", ");if(s.length===0)return Promise.resolve();let c=[];try{c=Et(t.querySelectorAll(s))}catch{}if(c.length>0)a("pending"),r("complete");else return Promise.resolve();const i=je.begin("onTree"),f=c.reduce((d,m)=>{try{const p=Kn(m);p&&d.push(p)}catch(p){Pn||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise((d,m)=>{Promise.all(f).then(p=>{Gn(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),i(),d()})}).catch(p=>{i(),m(p)})})}function Zr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Kn(t).then(n=>{n&&Gn([n],e)})}function Qr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:ve(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:ve(r||{})),t(a,u(u({},n),{},{mask:r}))}}const Jr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=tt,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:c=null,classes:i=[],attributes:f={},styles:d={}}=e;if(!t)return;const{prefix:m,iconName:p,icon:y}=t;return Kt(u({type:"icon"},t),()=>(Ot("beforeDOMElementCreation",{iconDefinition:t,params:e}),b.autoA11y&&(s?f["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(c||jt()):(f["aria-hidden"]="true",f.focusable="false")),Ie({icons:{main:ye(y),mask:r?ye(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:p,transform:u(u({},tt),n),symbol:a,title:s,maskId:o,titleId:c,extra:{attributes:f,styles:d,classes:i}})))};var to={mixout(){return{icon:Qr(Jr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=on,t.nodeCallback=Zr,t}}},provides(t){t.i2svg=function(e){const{node:n=E,callback:a=()=>{}}=e;return on(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:c,symbol:i,mask:f,maskId:d,extra:m}=n;return new Promise((p,y)=>{Promise.all([xe(a,s),f.iconName?xe(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[C,_]=k;p([e,Ie({icons:{main:C,mask:_},prefix:s,iconName:a,transform:c,symbol:i,maskId:d,title:r,titleId:o,extra:m,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:s}=e;const c=qt(s);c.length>0&&(a.style=c);let i;return Fe(o)&&(i=vt("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(i||r.icon),{children:n,attributes:a}}}},eo={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Kt({type:"layer"},()=>{Ot("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},no={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return Kt({type:"counter",content:t},()=>(Ot("beforeDOMElementCreation",{content:t,params:e}),jr({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(b.cssPrefix,"-layers-counter"),...a]}})))}}}},ao={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=tt,title:a=null,classes:r=[],attributes:o={},styles:s={}}=e;return Kt({type:"text",content:t},()=>(Ot("beforeDOMElementCreation",{content:t,params:e}),Je({content:t,transform:u(u({},tt),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(b.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let s=null,c=null;if(wn){const i=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/i,c=f.height/i}return b.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Je({content:e.innerHTML,width:s,height:c,transform:r,title:a,extra:o,watchable:!0})])}}};const ro=new RegExp('"',"ug"),sn=[1105920,1112319],ln=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),Ca),Ya),La),Ae=Object.keys(ln).reduce((t,e)=>(t[e.toLowerCase()]=ln[e],t),{}),oo=Object.keys(Ae).reduce((t,e)=>{const n=Ae[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function so(t){const e=t.replace(ro,""),n=dr(e,0),a=n>=sn[0]&&n<=sn[1],r=e.length===2?e[0]===e[1]:!1;return{value:ge(r?e[0]:e),isSecondary:a||r}}function io(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Ae[n]||{})[r]||oo[n]}function fn(t,e){const n="".concat(Ua).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=Et(t.children).filter(p=>p.getAttribute(ue)===e)[0],c=ht.getComputedStyle(t,e),i=c.getPropertyValue("font-family"),f=i.match(Ka),d=c.getPropertyValue("font-weight"),m=c.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&m!=="none"&&m!==""){const p=c.getPropertyValue("content");let y=io(i,d);const{value:k,isSecondary:C}=so(p),_=f[0].startsWith("FontAwesome");let h=Me(y,k),v=h;if(_){const O=vr(k);O.iconName&&O.prefix&&(h=O.iconName,y=O.prefix)}if(h&&!C&&(!s||s.getAttribute(Se)!==y||s.getAttribute(Ce)!==v)){t.setAttribute(n,v),s&&t.removeChild(s);const O=Gr(),{extra:M}=O;M.attributes[ue]=e,xe(h,y).then(I=>{const L=Ie(u(u({},O),{},{icons:{main:I,mask:Yn()},prefix:y,iconName:v,extra:M,watchable:!0})),H=E.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(H,t.firstChild):t.appendChild(H),H.outerHTML=L.map(P=>Lt(P)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function lo(t){return Promise.all([fn(t,"::before"),fn(t,"::after")])}function fo(t){return t.parentNode!==document.head&&!~qa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ue)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function cn(t){if(st)return new Promise((e,n)=>{const a=Et(t.querySelectorAll("*")).filter(fo).map(lo),r=je.begin("searchPseudoElements");Xn(),Promise.all(a).then(()=>{r(),ke(),e()}).catch(()=>{r(),ke(),n()})})}var co={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=cn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=E}=e;b.searchPseudoElements&&cn(n)}}};let un=!1;var uo={mixout(){return{dom:{unwatch(){Xn(),un=!0}}}},hooks(){return{bootstrap(){an(be("mutationObserverCallbacks",{}))},noAuto(){Yr()},watch(t){const{observeMutationsRoot:e}=t;un?ke():an(be("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const dn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var mo={mixout(){return{parse:{transform:t=>dn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=dn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const s={transform:"translate(".concat(r/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(c," ").concat(i," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:d,path:m};return{tag:"g",attributes:u({},p.outer),children:[{tag:"g",attributes:u({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:u(u({},n.icon.attributes),p.path)}]}]}}}};const ae={x:0,y:0,width:"100%",height:"100%"};function mn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function po(t){return t.tag==="g"?t.children:[t]}var go={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Xt(n.split(" ").map(r=>r.trim())):Yn();return a.prefix||(a.prefix=bt()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:c}=e;const{width:i,icon:f}=r,{width:d,icon:m}=o,p=sr({transform:c,containerWidth:d,iconWidth:i}),y={tag:"rect",attributes:u(u({},ae),{},{fill:"white"})},k=f.children?{children:f.children.map(mn)}:{},C={tag:"g",attributes:u({},p.inner),children:[mn(u({tag:f.tag,attributes:u(u({},f.attributes),p.path)},k))]},_={tag:"g",attributes:u({},p.outer),children:[C]},h="mask-".concat(s||jt()),v="clip-".concat(s||jt()),O={tag:"mask",attributes:u(u({},ae),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,_]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:po(m)},O]};return n.push(M,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},ae)}),{children:n,attributes:a}}}},ho={provides(t){let e=!1;ht.matchMedia&&(e=ht.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:u(u({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=u(u({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:u(u({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:u(u({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},bo={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},vo=[fr,to,eo,no,ao,co,uo,mo,go,ho,bo];Cr(vo,{mixoutsTo:V});V.noAuto;V.config;V.library;V.dom;const Oe=V.parse;V.findIconDefinition;V.toHtml;const yo=V.icon;V.layer;V.text;V.counter;function pn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function at(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pn(Object(n),!0).forEach(function(a){Y(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function xo(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function wo(t){var e=xo(t,"string");return typeof e=="symbol"?e:e+""}function Ut(t){"@babel/helpers - typeof";return Ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ut(t)}function Y(t,e,n){return e=wo(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ko(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function Ao(t,e){if(t==null)return{};var n=ko(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zn={exports:{}};(function(t){(function(e){var n=function(h,v,O){if(!f(v)||m(v)||p(v)||y(v)||i(v))return v;var M,I=0,L=0;if(d(v))for(M=[],L=v.length;I<L;I++)M.push(n(h,v[I],O));else{M={};for(var H in v)Object.prototype.hasOwnProperty.call(v,H)&&(M[h(H,O)]=n(h,v[H],O))}return M},a=function(h,v){v=v||{};var O=v.separator||"_",M=v.split||/(?=[A-Z])/;return h.split(M).join(O)},r=function(h){return k(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(v,O){return O?O.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},o=function(h){var v=r(h);return v.substr(0,1).toUpperCase()+v.substr(1)},s=function(h,v){return a(h,v).toLowerCase()},c=Object.prototype.toString,i=function(h){return typeof h=="function"},f=function(h){return h===Object(h)},d=function(h){return c.call(h)=="[object Array]"},m=function(h){return c.call(h)=="[object Date]"},p=function(h){return c.call(h)=="[object RegExp]"},y=function(h){return c.call(h)=="[object Boolean]"},k=function(h){return h=h-0,h===h},C=function(h,v){var O=v&&"process"in v?v.process:v;return typeof O!="function"?h:function(M,I){return O(M,h,I)}},_={camelize:r,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(h,v){return n(C(r,v),h)},decamelizeKeys:function(h,v){return n(C(s,v),h,v)},pascalizeKeys:function(h,v){return n(C(o,v),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=_:e.humps=_})(Oo)})(Zn);var _o=Zn.exports,So=["class","style"];function Co(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=_o.camelize(n.slice(0,a)),o=n.slice(a+1).trim();return e[r]=o,e},{})}function Po(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Qn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(i){return Qn(i)}),r=Object.keys(t.attributes||{}).reduce(function(i,f){var d=t.attributes[f];switch(f){case"class":i.class=Po(d);break;case"style":i.style=Co(d);break;default:i.attrs[f]=d}return i},{attrs:{},class:{},style:{}});n.class;var o=n.style,s=o===void 0?{}:o,c=Ao(n,So);return aa(t.tag,at(at(at({},e),{},{class:r.class,style:at(at({},r.style),s)},r.attrs),c),a)}var Jn=!1;try{Jn=!0}catch{}function Eo(){if(!Jn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function re(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Y({},t,e):{}}function Fo(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Y(Y(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function gn(t){if(t&&Ut(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Oe.icon)return Oe.icon(t);if(t===null)return null;if(Ut(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var oe=na({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=_t(function(){return gn(e.icon)}),o=_t(function(){return re("classes",Fo(e))}),s=_t(function(){return re("transform",typeof e.transform=="string"?Oe.transform(e.transform):e.transform)}),c=_t(function(){return re("mask",gn(e.mask))}),i=_t(function(){return yo(r.value,at(at(at(at({},o.value),s.value),c.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});se(i,function(d){if(!d)return Eo("Could not find one or more icon(s)",r.value,c.value)},{immediate:!0});var f=_t(function(){return i.value?Qn(i.value.abstract[0],{},a):null});return function(){return f.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const No={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Mo={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},Io={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},jo={class:"fixed top-64 w-screen",style:{"z-index":"50","pointer-events":"none"}},To={class:"xl:w-[5%] sm:w-[6%] w-[10%] sm:ml-[95%] ml-[90%]"},zo={class:"bg-azul w-full py-4 sm:rounded-tl-xl sm:rounded-bl-xl rounded-tl-md rounded-bl-md",style:{"pointer-events":"auto"}},Lo={class:"w-full py-2 ps-8 flex bg-[#3366cc]"},Do={class:"flex w-5/6 sm:w-[20%] md:w-[10%] z-20",href:"https://www.gov.co/",target:"_blank"},Ro=["src"],$o={class:"mx-auto px-4 sm:px-6 lg:px-8"},Bo={class:"flex w-full justify-between items-center"},Ho={class:"flex-shrink-0 sm:w-1/4 w-3/6 p-4"},Wo={href:"/Welcome",class:"text-white text-2xl font-semibold"},Yo=["src"],Uo=["src"],Vo={class:"hidden md:block"},qo={class:"flex space-x-4"},Go=["href"],Xo=["href"],Ko={class:"md:hidden z-20"},Zo={key:0,class:"md:hidden"},Qo={class:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},Jo=["href"],ts=["href"],es={class:"flex-1 overflow-y-auto overflow-x-hidden bg-light text-black"},ns={class:"container mx-auto flex flex-wrap items-center justify-between"},as={class:"flex items-center flex-shrink-0 mr-6 w-1/6"},rs={href:"/Welcome",class:"w-full"},os=["src"],ss=["src"],is={class:"flex justify-center items-center space-x-4 text-primary"},ls={href:"https://www.instagram.com/alcaldiadepereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},fs={href:"https://www.facebook.com/AlcaldiaDePereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},cs={href:"https://www.youtube.com/channel/UCAFZZcG6RI0gw5DkrT6kMSQ/videos",target:"_blank",class:"hover:text-parrafo transition duration-300"},us={href:"#inicio",class:"text-primary hover:text-parrafo transition duration-300"},ds={class:"w-full py-4 ps-8 flex bg-[#3366cc]"},ms={class:"flex w-5/6 sm:w-[25%] md:w-[15%]",href:"https://www.gov.co/",target:"_blank"},ps=["src"],gs={__name:"PageLayout",props:{home:{type:Boolean,default:!1}},setup(t){const e=pa.useToast();ie.init();const n=pt(gt().props.accesibilidad.contraste),a=pt(gt().props.accesibilidad.letra),r=pt(""),o=pt(!1),s=()=>{n.value=!n.value,gt().props.accesibilidad.contraste=n.value},c=(i,f)=>{i>=2?(a.value=2,e.open({message:"Limite de aumento de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):i<=-2?(a.value=-2,e.open({message:"Limite de reducción de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):a.value=i,r.value=f,gt().props.accesibilidad.letra=a.value};return(i,f)=>{const d=ra("tooltip");return z(),T("div",{class:F(["flex flex-col overflow-x-hidden bg-option1",{"!bg-black":n.value}])},[l("div",jo,[l("div",To,[l("div",zo,[wt((z(),T("button",{onClick:s,class:F(["flex w-auto py-2 lg:px-4 px-2",{"bg-[#3366cc]":n.value}])},f[4]||(f[4]=[l("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512"},[l("path",{d:"M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"})])],-1)]),2)),[[d,{value:"Contraste",autoHide:!1},void 0,{center:!0}]]),wt((z(),T("button",{onClick:f[0]||(f[0]=m=>c(a.value-1,"reducir")),class:F(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="reducir"&&!n.value}])},f[5]||(f[5]=[l("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[l("p",{class:"font-extrabold text-xs lg:text-base"},[mt("A"),l("sup",null,"-")])],-1)]),2)),[[d,{value:"Reducir letra",autoHide:!1},void 0,{center:!0}]]),wt((z(),T("button",{onClick:f[1]||(f[1]=m=>c(0,"default")),class:F(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="default"&&!n.value}])},f[6]||(f[6]=[l("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[l("p",{class:"font-extrabold text-xs lg:text-base"},[mt("A"),l("sup",null,"n")])],-1)]),2)),[[d,{value:"Restablecer letra",autoHide:!1},void 0,{center:!0}]]),wt((z(),T("button",{onClick:f[2]||(f[2]=m=>c(a.value+1,"aumentar")),class:F(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="aumentar"&&!n.value}])},f[7]||(f[7]=[l("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[l("p",{class:"font-extrabold text-xs lg:text-base"},[mt("A"),l("sup",null,"+")])],-1)]),2)),[[d,{value:"Aumentar letra",autoHide:!1},void 0,{center:!0}]])])])]),l("header",Lo,[l("a",Do,[l("figure",null,[l("img",{class:"w-full sm:w-5/6",src:D(Re),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,Ro),f[8]||(f[8]=l("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo del gobierno actual de colombia ",-1))])])]),l("nav",{class:F(["w-full h-full bg-option2 py-2 text-xl sm:text-2xl text-parrafo z-20",[t.home?"":"hidden",{"!text-yellow-200 font-bold !bg-black":n.value},a.value==-2?"!text-base !sm:text-lg":a.value==-1?"!text-lg !sm:text-xl":a.value==1?"!text-2xl !sm:text-4xl":a.value==2?"!text-4xl !sm:text-6xl":""]])},[l("div",$o,[l("div",Bo,[l("div",Ho,[l("a",Wo,[l("figure",null,[n.value?(z(),T("img",{key:0,class:"w-full sm:w-5/6",src:D(De),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,Yo)):(z(),T("img",{key:1,class:"w-full sm:w-5/6",src:D(Le),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,Uo)),f[9]||(f[9]=l("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),l("div",Vo,[l("ul",qo,[l("li",null,[wt((z(),T("a",{href:i.route("register"),class:F([[{underline:i.route().current("register")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},f[10]||(f[10]=[mt("Registro")]),10,Go)),[[d,{value:"Registro de ingreso al punto",autoHide:!1},void 0,{bottom:!0}]])]),l("li",null,[i.$page.props.auth.user?wt((z(),T("a",{key:0,href:i.route("dashboard"),class:F([[{underline:i.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},f[11]||(f[11]=[mt("Dashboard")]),10,Xo)),[[d,{value:"regresar al dashboard",autoHide:!1},void 0,{bottom:!0}]]):Qt("",!0)])])]),l("div",Ko,[l("button",{class:F(["text-parrafo hover:text-secondary focus:outline-none",[{"!text-yellow-200 font-bold":n.value}]]),onClick:f[3]||(f[3]=m=>o.value=!o.value)},f[12]||(f[12]=[l("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]),2)])])]),o.value?(z(),T("div",Zo,[l("ul",Qo,[l("li",null,[l("a",{href:i.route("register"),class:F([[{underline:i.route().current("register")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Registro",10,Jo)]),l("li",null,[i.$page.props.auth.user?(z(),T("a",{key:0,href:i.route("dashboard"),class:F([[{underline:i.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Dashboard",10,ts)):Qt("",!0)])])])):Qt("",!0)],2),l("main",es,[oa(i.$slots,"default",{},void 0,!0)]),l("footer",{class:F(["px-2 bg-option2/90 text-parrafo flex flex-col py-6",{"!bg-black !text-white":n.value}])},[l("div",ns,[l("div",as,[l("a",rs,[l("figure",null,[n.value?(z(),T("img",{key:0,class:"w-full",src:D(De),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,os)):(z(),T("img",{key:1,class:"w-full",src:D(Le),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,ss)),f[13]||(f[13]=l("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),l("div",is,[l("a",ls,[J(D(oe),{icon:D(No),size:"xl"},null,8,["icon"])]),l("a",fs,[J(D(oe),{icon:D(Mo),size:"xl"},null,8,["icon"])]),l("a",cs,[J(D(oe),{icon:D(Io),size:"xl"},null,8,["icon"])])]),l("div",null,[l("a",us,[J(D(ga),{class:"w-12 animate-bounce"})])])]),f[14]||(f[14]=l("div",{class:"container px-4 mt-8"},[l("ul",{class:"custom-list space-y-2"})],-1))],2),l("div",ds,[l("a",ms,[l("figure",null,[l("img",{class:"w-full sm:w-5/6",src:D(Re),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,ps),f[15]||(f[15]=l("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo del gobierno actual de colombia ",-1))])])])],2)}}},hs=hn(gs,[["__scopeId","data-v-b00b6560"]]);function bs(t,e){return z(),T("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"})])}function vs(t,e){return z(),T("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"}),l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"})])}function ys(t,e){return z(),T("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"})])}const xs={id:"inicio",class:"relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#1a0a0a] via-[#2d0f0f] to-[#1a0505]"},ws={class:"relative z-30 flex flex-col justify-center w-full h-full min-h-screen max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20"},ks={class:"flex flex-col lg:flex-row items-center lg:items-start justify-between w-full mt-16 sm:mt-20 lg:mt-0"},As={class:"w-full lg:w-[55%] xl:w-[50%] pt-4 sm:pt-8 lg:pt-20","data-aos":"fade-right","data-aos-duration":"1000"},Os={class:"max-w-xl mb-8 sm:mb-12","data-aos":"fade-up","data-aos-delay":"300"},_s={class:"flex items-center flex-1"},Ss={class:"pl-4 sm:pl-5 pr-2 sm:pr-3 flex-shrink-0"},Cs={class:"mt-2 sm:mt-3 text-[10px] sm:text-xs text-gray-500 pl-2"},Ps={class:"flex flex-wrap gap-4 sm:gap-6 lg:gap-10 mb-4 sm:mb-6","data-aos":"fade-up","data-aos-delay":"500"},Es={class:"flex items-center gap-2 sm:gap-3 group cursor-default"},Fs={class:"w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#F57C00]/20 to-[#FFC107]/20 border border-[#F57C00]/30 flex items-center justify-center group-hover:from-[#F57C00]/30 group-hover:to-[#FFC107]/30 transition-all duration-300"},Ns={class:"flex items-center gap-2 sm:gap-3 group cursor-default"},Ms={class:"w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#F57C00]/20 to-[#FFC107]/20 border border-[#F57C00]/30 flex items-center justify-center group-hover:from-[#F57C00]/30 group-hover:to-[#FFC107]/30 transition-all duration-300"},Is={class:"flex items-center gap-2 sm:gap-3 group cursor-default"},js={class:"w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#F57C00]/20 to-[#FFC107]/20 border border-[#F57C00]/30 flex items-center justify-center group-hover:from-[#F57C00]/30 group-hover:to-[#FFC107]/30 transition-all duration-300"},Ts={class:"mt-4 sm:mt-8 mb-4","data-aos":"fade-up","data-aos-delay":"700"},zs={class:"flex flex-col md:flex-row md:grid grid-cols-8 gap-4 mt-8"},Ls={__name:"Welcome",props:{laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0}},setup(t){ie.init(),sa("$swal");const e=pt(gt().props.accesibilidad.contraste),n=pt(gt().props.accesibilidad.letra);se(()=>gt().props.accesibilidad.contraste,c=>{e.value=c}),se(()=>gt().props.accesibilidad.letra,c=>{n.value=c});const a=c=>{let i="text";switch(c){case-2:i=`${i}-xs sm:${i}-base md:${i}-lg`;break;case-1:i=`${i}-sm sm:${i}-lg md:${i}-xl`;break;case 0:i=`${i}-base sm:${i}-xl md:${i}-2xl`;break;case 1:i=`${i}-lg sm:${i}-2xl md:${i}-4xl`;break;case 2:i=`${i}-xl sm:${i}-4xl md:${i}-6xl`;break}return i},r=ia({dorsal:""}),o=()=>{r.dorsal.trim()&&(window.location.href=route("fotos.index",{dorsal:r.dorsal}))};pt([{breakpoint:"1400px",numVisible:4,numScroll:1},{breakpoint:"1199px",numVisible:3,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]);const s=pt("");return la(()=>{ie.refresh()}),(c,i)=>(z(),T(ma,null,[J(D(fa),{title:"Home"}),J(hs,null,{default:ca(()=>[l("section",xs,[i[10]||(i[10]=l("div",{class:"absolute inset-0 z-0"},[l("div",{class:"absolute inset-0 bg-gradient-to-r from-[#0d0404]/95 via-[#1a0808]/80 to-[#0d0404]/70 z-10"}),l("div",{class:"absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F57C00]/20 via-[#FFC107]/10 to-transparent z-10"}),l("div",{class:"absolute bottom-0 left-0 right-0 h-32 sm:h-64 bg-gradient-to-t from-[#1a0a0a] to-transparent z-10"}),l("img",{src:"https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",alt:"Corredores en carrera",class:"absolute inset-0 w-full h-full object-cover object-[center_30%] sm:object-center scale-105",style:{filter:"saturate(1.1) contrast(1.05)"}})],-1)),i[11]||(i[11]=l("div",{class:"absolute inset-0 z-20 pointer-events-none overflow-hidden hidden sm:block"},[l("div",{class:"absolute top-[15%] left-0 w-[120%] h-[2px] bg-gradient-to-r from-transparent via-[#FFC107]/40 to-transparent transform -rotate-12 translate-x-[-10%]"}),l("div",{class:"absolute top-[35%] left-0 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#F57C00]/30 to-transparent transform rotate-6 translate-x-[-10%]"}),l("div",{class:"absolute top-[55%] left-0 w-[120%] h-[2px] bg-gradient-to-r from-transparent via-[#FFC107]/25 to-transparent transform -rotate-8 translate-x-[-10%]"}),l("div",{class:"absolute top-[75%] left-0 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#F57C00]/20 to-transparent transform rotate-10 translate-x-[-10%]"}),l("div",{class:"absolute top-[88%] left-0 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#FFC107]/15 to-transparent transform -rotate-5 translate-x-[-10%]"}),l("div",{class:"absolute right-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#F57C00]/20 to-transparent"}),l("div",{class:"absolute right-[35%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#FFC107]/15 to-transparent"})],-1)),i[12]||(i[12]=l("div",{class:"absolute -right-16 sm:-right-32 -top-16 sm:-top-32 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-[#F57C00]/10 blur-3xl z-10"},null,-1)),i[13]||(i[13]=l("div",{class:"absolute -left-16 sm:-left-32 top-1/3 w-40 sm:w-80 h-40 sm:h-80 rounded-full bg-[#D32F2F]/10 blur-3xl z-10"},null,-1)),i[14]||(i[14]=l("div",{class:"absolute right-[10%] bottom-[20%] w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-[#FFC107]/8 blur-3xl z-10"},null,-1)),i[15]||(i[15]=l("div",{class:"absolute z-20 pointer-events-none hidden lg:block"},[l("div",{class:"absolute top-[12%] right-[8%] w-40 bg-white p-2 pb-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-12 animate-float-slow hover:rotate-6 transition-all duration-700","data-aos":"fade-left","data-aos-delay":"300"},[l("img",{src:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=300&auto=format&fit=crop",alt:"Corredor",class:"w-full h-28 object-cover"}),l("p",{class:"mt-2 text-[10px] font-bold text-gray-700 text-center tracking-wider"},"DORSAL #1542")]),l("div",{class:"absolute top-[45%] right-[3%] w-36 bg-white p-2 pb-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-12 animate-float-slower hover:rotate-[-6deg] transition-all duration-700","data-aos":"fade-left","data-aos-delay":"600"},[l("img",{src:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=300&auto=format&fit=crop",alt:"Corredora",class:"w-full h-24 object-cover object-top"}),l("p",{class:"mt-2 text-[10px] font-bold text-gray-700 text-center tracking-wider"},"DORSAL #0891")]),l("div",{class:"absolute top-[70%] right-[12%] w-36 bg-white p-2 pb-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-8 animate-float-medium hover:rotate-3 transition-all duration-700","data-aos":"fade-left","data-aos-delay":"900"},[l("img",{src:"https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=300&auto=format&fit=crop",alt:"Corredores",class:"w-full h-24 object-cover"}),l("p",{class:"mt-2 text-[10px] font-bold text-gray-700 text-center tracking-wider"},"DORSAL #2317")]),l("div",{class:"absolute top-[28%] right-[22%] w-32 bg-white p-1.5 pb-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-6 animate-float-slower hover:rotate-[-3deg] transition-all duration-700","data-aos":"fade-left","data-aos-delay":"450"},[l("img",{src:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=300&auto=format&fit=crop",alt:"Meta",class:"w-full h-20 object-cover"}),l("p",{class:"mt-1.5 text-[9px] font-bold text-gray-700 text-center tracking-wider"},"META 🏁")])],-1)),l("div",ws,[i[9]||(i[9]=l("div",{class:"absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-10 lg:right-16 xl:right-20","data-aos":"fade-down","data-aos-delay":"200"},[l("div",{class:"flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 shadow-lg"},[l("img",{src:"/assets/img/logo_white.webp",alt:"Alcaldía de Pereira",class:"h-7 sm:h-12 w-auto"}),l("div",{class:"h-5 sm:h-8 w-[1px] bg-white/30"}),l("span",{class:"text-[8px] sm:text-xs font-bold text-white/90 uppercase tracking-widest leading-tight"},[mt(" Alcaldía"),l("br"),mt("de Pereira ")])])],-1)),l("div",ks,[l("div",As,[l("div",{class:F(["inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 border border-white/20",{"!bg-yellow-200/30 !border-yellow-300":e.value}])},i[1]||(i[1]=[l("span",{class:"w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#FFC107] animate-pulse"},null,-1),l("span",{class:"text-[9px] sm:text-xs font-semibold text-white/80 uppercase tracking-widest"}," Plataforma Oficial ",-1)]),2),l("h1",{class:F(["text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-none text-white mb-1 sm:mb-2",{"!text-yellow-200":e.value}])},i[2]||(i[2]=[l("span",{class:"block"},"CONSULTA",-1),l("span",{class:"block text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#F57C00] to-[#D32F2F]"}," TUS FOTOS ",-1)]),2),l("h2",{class:F(["text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white/90 mt-1 sm:mt-2 mb-4 sm:mb-6 tracking-wide",{"!text-yellow-200":e.value}])}," POR DORSAL ",2),l("p",{class:F(["text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mb-5 sm:mb-8 leading-relaxed",[{"!text-white !font-bold":e.value},a(n.value)]])}," Encuentra, descarga y comparte tus fotografías oficiales del evento. ",2),l("div",Os,[l("form",{onSubmit:ua(o,["prevent"]),class:"relative group"},[l("div",{class:F(["relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:border-[#F57C00]/50 group-hover:shadow-[0_8px_32px_rgba(245,124,0,0.2)] overflow-hidden",{"!bg-yellow-200/10 !border-yellow-300":e.value}])},[l("div",_s,[l("div",Ss,[J(D(ha),{class:F(["w-5 sm:w-6 h-5 sm:h-6 text-[#FFC107]",{"!text-yellow-200":e.value}])},null,8,["class"])]),wt(l("input",{"onUpdate:modelValue":i[0]||(i[0]=f=>s.value=f),type:"text",placeholder:"Ingresa tu número de dorsal",class:F(["flex-1 bg-transparent text-white placeholder-gray-400 py-3 sm:py-4 pr-4 text-base sm:text-lg font-medium focus:outline-none focus:ring-0 border-0 w-full min-w-0",{"!text-yellow-200 !placeholder-yellow-200/70":e.value}])},null,2),[[da,s.value]])]),l("button",{type:"submit",class:F(["sm:relative mx-3 sm:mx-0 mb-3 sm:mb-0 sm:mr-2 sm:my-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#F57C00] to-[#D32F2F] text-white font-extrabold text-xs sm:text-sm lg:text-base tracking-widest rounded-xl hover:from-[#FF9800] hover:to-[#E53935] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(245,124,0,0.4)] hover:shadow-[0_6px_30px_rgba(245,124,0,0.6)]",{"!bg-yellow-200 !text-black !shadow-yellow-200/50":e.value}])}," BUSCAR ",2)],2)],32),l("p",Cs,[l("span",{class:F(["text-[#FFC107]",{"!text-yellow-200":e.value}])},"Ejemplo:",2),i[3]||(i[3]=mt(" 1542, 0891, 2317 "))])]),l("div",Ps,[l("div",Es,[l("div",Fs,[J(D(vs),{class:"w-4 h-4 sm:w-6 sm:h-6 text-[#FFC107]"})]),i[4]||(i[4]=l("div",null,[l("p",{class:"text-xs sm:text-sm font-bold text-white"},"Encuentra"),l("p",{class:"text-[10px] sm:text-xs text-gray-400"},"tus fotos")],-1))]),l("div",Ns,[l("div",Ms,[J(D(bs),{class:"w-4 h-4 sm:w-6 sm:h-6 text-[#FFC107]"})]),i[5]||(i[5]=l("div",null,[l("p",{class:"text-xs sm:text-sm font-bold text-white"},"Descarga"),l("p",{class:"text-[10px] sm:text-xs text-gray-400"},"en alta calidad")],-1))]),l("div",Is,[l("div",js,[J(D(ys),{class:"w-4 h-4 sm:w-6 sm:h-6 text-[#FFC107]"})]),i[6]||(i[6]=l("div",null,[l("p",{class:"text-xs sm:text-sm font-bold text-white"},"Comparte"),l("p",{class:"text-[10px] sm:text-xs text-gray-400"},"tus recuerdos")],-1))])]),l("div",Ts,[i[7]||(i[7]=l("div",{class:"h-[1px] w-16 sm:w-24 bg-gradient-to-r from-[#FFC107] to-transparent mb-2 sm:mb-4"},null,-1)),l("p",{class:F(["text-xs sm:text-base lg:text-lg font-light text-gray-400 italic tracking-wide",{"!text-yellow-200 !font-bold !not-italic":e.value}])},' "Pereira, una ciudad que avanza" ',2)])]),i[8]||(i[8]=l("div",{class:"hidden lg:block lg:w-[45%] xl:w-[50%]"},null,-1))])]),i[16]||(i[16]=l("div",{class:"absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-[#F2F2F2] to-transparent z-30"},null,-1))]),l("div",{class:F(["w-full overflow-hidden px-6 bg-gradient-to-b from-option2 to option1 text-parrafo",{"!bg-gradient-to-b !from-black to-black !text-yellow-200 font-bold":e.value}]),"data-aos":"fade-up"},[l("div",zs,[l("div",{class:F(["col-span-3 flex justify-center items-center px-6 mb-4",a(n.value)])}," Transformamos comunidades a través del acceso al conocimiento y la tecnología. ",2),i[17]||(i[17]=l("div",{class:"col-span-5 flex justify-center items-center m-auto px-4"},null,-1))])],2),i[18]||(i[18]=l("section",{class:"section1 overflow-hidden","data-aos":"fade-up"},[l("svg",{class:"curve",viewBox:"0 0 370.417 79.375"},[l("path",{class:"wave",d:"M-1.301 51.894C141.54 5.807 159.612 38.111 226.846 62.2c90.74 32.51 149.712-33.492 149.712-33.492v59.541H-1.302z",fill:"#C20E1A","fill-rule":"evenodd"})])],-1))]),_:1,__:[18]})],64))}},Bs=hn(Ls,[["__scopeId","data-v-37f934ef"]]);export{Bs as default};
