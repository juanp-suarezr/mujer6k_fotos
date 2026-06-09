import{c as R,o as Y,b as d,aO as ea,aP as na,I as aa,g as At,j as oe,K as ia,i as mt,Q as gt,G as ra,h as St,n as j,d as zt,u as W,f as Qt,H as sa,a as Ot,A as oa,T as la,M as ca,Z as fa,w as ua,F as da}from"./app-C8s7-d7c.js";import{d as ma,l as Fe}from"./logo-ySxCEYBC.js";import{_ as hn,l as De}from"./logo_white-DE4Vqejm.js";function ga(t,e){return Y(),R("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[d("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z","clip-rule":"evenodd"})])}const Re="/build/assets/gobierno-VHX8UfDK.webp";var bn={exports:{}};(function(t,e){(function(n,a){t.exports=a()})(na,function(){return function(n){function a(r){if(i[r])return i[r].exports;var s=i[r]={exports:{},id:r,loaded:!1};return n[r].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}var i={};return a.m=n,a.c=i,a.p="dist/",a(0)}([function(n,a,i){function r(w){return w&&w.__esModule?w:{default:w}}var s=Object.assign||function(w){for(var F=1;F<arguments.length;F++){var V=arguments[F];for(var lt in V)Object.prototype.hasOwnProperty.call(V,lt)&&(w[lt]=V[lt])}return w},l=i(1),c=(r(l),i(6)),o=r(c),u=i(7),m=r(u),g=i(8),y=r(g),k=i(9),P=r(k),O=i(10),h=r(O),v=i(11),S=r(v),z=i(14),N=r(z),I=[],B=!1,_={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},q=function(){var w=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(w&&(B=!0),B)return I=(0,S.default)(I,_),(0,h.default)(I,_.once),I},ot=function(){I=(0,N.default)(),q()},x=function(){I.forEach(function(w,F){w.node.removeAttribute("data-aos"),w.node.removeAttribute("data-aos-easing"),w.node.removeAttribute("data-aos-duration"),w.node.removeAttribute("data-aos-delay")})},p=function(w){return w===!0||w==="mobile"&&P.default.mobile()||w==="phone"&&P.default.phone()||w==="tablet"&&P.default.tablet()||typeof w=="function"&&w()===!0},A=function(w){_=s(_,w),I=(0,N.default)();var F=document.all&&!window.atob;return p(_.disable)||F?x():(_.disableMutationObserver||y.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),_.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",_.easing),document.querySelector("body").setAttribute("data-aos-duration",_.duration),document.querySelector("body").setAttribute("data-aos-delay",_.delay),_.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?q(!0):_.startEvent==="load"?window.addEventListener(_.startEvent,function(){q(!0)}):document.addEventListener(_.startEvent,function(){q(!0)}),window.addEventListener("resize",(0,m.default)(q,_.debounceDelay,!0)),window.addEventListener("orientationchange",(0,m.default)(q,_.debounceDelay,!0)),window.addEventListener("scroll",(0,o.default)(function(){(0,h.default)(I,_.once)},_.throttleDelay)),_.disableMutationObserver||y.default.ready("[data-aos]",ot),I)};n.exports={init:A,refresh:q,refreshHard:ot}},function(n,a){},,,,,function(n,a){(function(i){function r(p,A,w){function F(E){var $=G,ut=Z;return G=Z=void 0,ct=E,L=p.apply(ut,$)}function V(E){return ct=E,T=setTimeout(yt,A),ft?F(E):L}function lt(E){var $=E-X,ut=E-ct,je=A-$;return nt?ot(je,J-ut):je}function vt(E){var $=E-X,ut=E-ct;return X===void 0||$>=A||$<0||nt&&ut>=J}function yt(){var E=x();return vt(E)?Rt(E):void(T=setTimeout(yt,lt(E)))}function Rt(E){return T=void 0,M&&G?F(E):(G=Z=void 0,L)}function Jt(){T!==void 0&&clearTimeout(T),ct=0,G=X=Z=T=void 0}function Mt(){return T===void 0?L:Rt(x())}function K(){var E=x(),$=vt(E);if(G=arguments,Z=this,X=E,$){if(T===void 0)return V(X);if(nt)return T=setTimeout(yt,A),F(X)}return T===void 0&&(T=setTimeout(yt,A)),L}var G,Z,J,L,T,X,ct=0,ft=!1,nt=!1,M=!0;if(typeof p!="function")throw new TypeError(g);return A=u(A)||0,l(w)&&(ft=!!w.leading,nt="maxWait"in w,J=nt?q(u(w.maxWait)||0,A):J,M="trailing"in w?!!w.trailing:M),K.cancel=Jt,K.flush=Mt,K}function s(p,A,w){var F=!0,V=!0;if(typeof p!="function")throw new TypeError(g);return l(w)&&(F="leading"in w?!!w.leading:F,V="trailing"in w?!!w.trailing:V),r(p,A,{leading:F,maxWait:A,trailing:V})}function l(p){var A=typeof p>"u"?"undefined":m(p);return!!p&&(A=="object"||A=="function")}function c(p){return!!p&&(typeof p>"u"?"undefined":m(p))=="object"}function o(p){return(typeof p>"u"?"undefined":m(p))=="symbol"||c(p)&&_.call(p)==k}function u(p){if(typeof p=="number")return p;if(o(p))return y;if(l(p)){var A=typeof p.valueOf=="function"?p.valueOf():p;p=l(A)?A+"":A}if(typeof p!="string")return p===0?p:+p;p=p.replace(P,"");var w=h.test(p);return w||v.test(p)?S(p.slice(2),w?2:8):O.test(p)?y:+p}var m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},g="Expected a function",y=NaN,k="[object Symbol]",P=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,v=/^0o[0-7]+$/i,S=parseInt,z=(typeof i>"u"?"undefined":m(i))=="object"&&i&&i.Object===Object&&i,N=(typeof self>"u"?"undefined":m(self))=="object"&&self&&self.Object===Object&&self,I=z||N||Function("return this")(),B=Object.prototype,_=B.toString,q=Math.max,ot=Math.min,x=function(){return I.Date.now()};n.exports=s}).call(a,function(){return this}())},function(n,a){(function(i){function r(x,p,A){function w(M){var E=K,$=G;return K=G=void 0,X=M,J=x.apply($,E)}function F(M){return X=M,L=setTimeout(vt,p),ct?w(M):J}function V(M){var E=M-T,$=M-X,ut=p-E;return ft?q(ut,Z-$):ut}function lt(M){var E=M-T,$=M-X;return T===void 0||E>=p||E<0||ft&&$>=Z}function vt(){var M=ot();return lt(M)?yt(M):void(L=setTimeout(vt,V(M)))}function yt(M){return L=void 0,nt&&K?w(M):(K=G=void 0,J)}function Rt(){L!==void 0&&clearTimeout(L),X=0,K=T=G=L=void 0}function Jt(){return L===void 0?J:yt(ot())}function Mt(){var M=ot(),E=lt(M);if(K=arguments,G=this,T=M,E){if(L===void 0)return F(T);if(ft)return L=setTimeout(vt,p),w(T)}return L===void 0&&(L=setTimeout(vt,p)),J}var K,G,Z,J,L,T,X=0,ct=!1,ft=!1,nt=!0;if(typeof x!="function")throw new TypeError(m);return p=o(p)||0,s(A)&&(ct=!!A.leading,ft="maxWait"in A,Z=ft?_(o(A.maxWait)||0,p):Z,nt="trailing"in A?!!A.trailing:nt),Mt.cancel=Rt,Mt.flush=Jt,Mt}function s(x){var p=typeof x>"u"?"undefined":u(x);return!!x&&(p=="object"||p=="function")}function l(x){return!!x&&(typeof x>"u"?"undefined":u(x))=="object"}function c(x){return(typeof x>"u"?"undefined":u(x))=="symbol"||l(x)&&B.call(x)==y}function o(x){if(typeof x=="number")return x;if(c(x))return g;if(s(x)){var p=typeof x.valueOf=="function"?x.valueOf():x;x=s(p)?p+"":p}if(typeof x!="string")return x===0?x:+x;x=x.replace(k,"");var A=O.test(x);return A||h.test(x)?v(x.slice(2),A?2:8):P.test(x)?g:+x}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},m="Expected a function",g=NaN,y="[object Symbol]",k=/^\s+|\s+$/g,P=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,h=/^0o[0-7]+$/i,v=parseInt,S=(typeof i>"u"?"undefined":u(i))=="object"&&i&&i.Object===Object&&i,z=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,N=S||z||Function("return this")(),I=Object.prototype,B=I.toString,_=Math.max,q=Math.min,ot=function(){return N.Date.now()};n.exports=r}).call(a,function(){return this}())},function(n,a){function i(u){var m=void 0,g=void 0;for(m=0;m<u.length;m+=1)if(g=u[m],g.dataset&&g.dataset.aos||g.children&&i(g.children))return!0;return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!r()}function l(u,m){var g=window.document,y=r(),k=new y(c);o=m,k.observe(g.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function c(u){u&&u.forEach(function(m){var g=Array.prototype.slice.call(m.addedNodes),y=Array.prototype.slice.call(m.removedNodes),k=g.concat(y);if(i(k))return o()})}Object.defineProperty(a,"__esModule",{value:!0});var o=function(){};a.default={isSupported:s,ready:l}},function(n,a){function i(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")}function r(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var s=function(){function g(y,k){for(var P=0;P<k.length;P++){var O=k[P];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(y,O.key,O)}}return function(y,k,P){return k&&g(y.prototype,k),P&&g(y,P),y}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,m=function(){function g(){i(this,g)}return s(g,[{key:"phone",value:function(){var y=r();return!(!l.test(y)&&!c.test(y.substr(0,4)))}},{key:"mobile",value:function(){var y=r();return!(!o.test(y)&&!u.test(y.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),g}();a.default=new m},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var i=function(s,l,c){var o=s.node.getAttribute("data-aos-once");l>s.position?s.node.classList.add("aos-animate"):typeof o<"u"&&(o==="false"||!c&&o!=="true")&&s.node.classList.remove("aos-animate")},r=function(s,l){var c=window.pageYOffset,o=window.innerHeight;s.forEach(function(u,m){i(u,o+c,l)})};a.default=r},function(n,a,i){function r(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(a,"__esModule",{value:!0});var s=i(12),l=r(s),c=function(o,u){return o.forEach(function(m,g){m.node.classList.add("aos-init"),m.position=(0,l.default)(m.node,u.offset)}),o};a.default=c},function(n,a,i){function r(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(a,"__esModule",{value:!0});var s=i(13),l=r(s),c=function(o,u){var m=0,g=0,y=window.innerHeight,k={offset:o.getAttribute("data-aos-offset"),anchor:o.getAttribute("data-aos-anchor"),anchorPlacement:o.getAttribute("data-aos-anchor-placement")};switch(k.offset&&!isNaN(k.offset)&&(g=parseInt(k.offset)),k.anchor&&document.querySelectorAll(k.anchor)&&(o=document.querySelectorAll(k.anchor)[0]),m=(0,l.default)(o).top,k.anchorPlacement){case"top-bottom":break;case"center-bottom":m+=o.offsetHeight/2;break;case"bottom-bottom":m+=o.offsetHeight;break;case"top-center":m+=y/2;break;case"bottom-center":m+=y/2+o.offsetHeight;break;case"center-center":m+=y/2+o.offsetHeight/2;break;case"top-top":m+=y;break;case"bottom-top":m+=o.offsetHeight+y;break;case"center-top":m+=o.offsetHeight/2+y}return k.anchorPlacement||k.offset||isNaN(u)||(g=u),m+g};a.default=c},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var i=function(r){for(var s=0,l=0;r&&!isNaN(r.offsetLeft)&&!isNaN(r.offsetTop);)s+=r.offsetLeft-(r.tagName!="BODY"?r.scrollLeft:0),l+=r.offsetTop-(r.tagName!="BODY"?r.scrollTop:0),r=r.offsetParent;return{top:l,left:s}};a.default=i},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var i=function(r){return r=r||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(r,function(s){return{node:s}})};a.default=i}])})})(bn);var pa=bn.exports;const vn=ea(pa);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function ha(t,e,n){return(e=va(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ye(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ye(Object(n),!0).forEach(function(a){ha(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ye(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ba(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function va(t){var e=ba(t,"string");return typeof e=="symbol"?e:e+""}const Be=()=>{};let Oe={},yn={},xn=null,wn={mark:Be,measure:Be};try{typeof window<"u"&&(Oe=window),typeof document<"u"&&(yn=document),typeof MutationObserver<"u"&&(xn=MutationObserver),typeof performance<"u"&&(wn=performance)}catch{}const{userAgent:$e=""}=Oe.navigator||{},pt=Oe,C=yn,We=xn,Yt=wn;pt.document;const st=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",kn=~$e.indexOf("MSIE")||~$e.indexOf("Trident/");var ya=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,xa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,An={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},wa={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Sn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],D="classic",Gt="duotone",ka="sharp",Aa="sharp-duotone",On=[D,Gt,ka,Aa],Sa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Oa={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Ea=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Pa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},_a=["fak","fa-kit","fakd","fa-kit-duotone"],He={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ca=["kit"],Ma={kit:{"fa-kit":"fak"}},za=["fak","fakd"],Na={kit:{fak:"fa-kit"}},Xe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Bt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ta=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ia=["fak","fa-kit","fakd","fa-kit-duotone"],La={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ja={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Fa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},le={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Da=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ce=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ta,...Da],Ra=["solid","regular","light","thin","duotone","brands"],En=[1,2,3,4,5,6,7,8,9,10],Ya=En.concat([11,12,13,14,15,16,17,18,19,20]),Ba=[...Object.keys(Fa),...Ra,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Bt.GROUP,Bt.SWAP_OPACITY,Bt.PRIMARY,Bt.SECONDARY].concat(En.map(t=>"".concat(t,"x"))).concat(Ya.map(t=>"w-".concat(t))),$a={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const it="___FONT_AWESOME___",fe=16,Pn="fa",_n="svg-inline--fa",wt="data-fa-i2svg",ue="data-fa-pseudo-element",Wa="data-fa-pseudo-element-pending",Ee="data-prefix",Pe="data-icon",Ue="fontawesome-i2svg",Ha="async",Xa=["HTML","HEAD","STYLE","SCRIPT"],Cn=(()=>{try{return!0}catch{return!1}})();function Ft(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[D]}})}const Mn=f({},An);Mn[D]=f(f(f(f({},{"fa-duotone":"duotone"}),An[D]),He.kit),He["kit-duotone"]);const Ua=Ft(Mn),de=f({},Pa);de[D]=f(f(f(f({},{duotone:"fad"}),de[D]),Xe.kit),Xe["kit-duotone"]);const Ge=Ft(de),me=f({},le);me[D]=f(f({},me[D]),Na.kit);const _e=Ft(me),ge=f({},ja);ge[D]=f(f({},ge[D]),Ma.kit);Ft(ge);const Ga=ya,zn="fa-layers-text",qa=xa,Va=f({},Sa);Ft(Va);const Ka=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],te=wa,Za=[...Ca,...Ba],Tt=pt.FontAwesomeConfig||{};function Ja(t){var e=C.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Qa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const i=Qa(Ja(n));i!=null&&(Tt[a]=i)});const Nn={styleDefault:"solid",familyDefault:D,cssPrefix:Pn,replacementClass:_n,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Tt.familyPrefix&&(Tt.cssPrefix=Tt.familyPrefix);const _t=f(f({},Nn),Tt);_t.autoReplaceSvg||(_t.observeMutations=!1);const b={};Object.keys(Nn).forEach(t=>{Object.defineProperty(b,t,{enumerable:!0,set:function(e){_t[t]=e,It.forEach(n=>n(b))},get:function(){return _t[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){_t.cssPrefix=t,It.forEach(e=>e(b))},get:function(){return _t.cssPrefix}});pt.FontAwesomeConfig=b;const It=[];function ti(t){return It.push(t),()=>{It.splice(It.indexOf(t),1)}}const dt=fe,tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ei(t){if(!t||!st)return;const e=C.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=C.head.childNodes;let a=null;for(let i=n.length-1;i>-1;i--){const r=n[i],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=r)}return C.head.insertBefore(e,a),t}const ni="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Lt(){let t=12,e="";for(;t-- >0;)e+=ni[Math.random()*62|0];return e}function Ct(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ce(t){return t.classList?Ct(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Tn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ai(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Tn(t[n]),'" '),"").trim()}function qt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Me(t){return t.size!==tt.size||t.x!==tt.x||t.y!==tt.y||t.rotate!==tt.rotate||t.flipX||t.flipY}function ii(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(r," ").concat(s," ").concat(l)},o={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:c,path:o}}function ri(t){let{transform:e,width:n=fe,height:a=fe,startCentered:i=!1}=t,r="";return i&&kn?r+="translate(".concat(e.x/dt-n/2,"em, ").concat(e.y/dt-a/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/dt,"em), calc(-50% + ").concat(e.y/dt,"em)) "):r+="translate(".concat(e.x/dt,"em, ").concat(e.y/dt,"em) "),r+="scale(".concat(e.size/dt*(e.flipX?-1:1),", ").concat(e.size/dt*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var si=`:root, :host {
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
}`;function In(){const t=Pn,e=_n,n=b.cssPrefix,a=b.replacementClass;let i=si;if(n!==t||a!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return i}let qe=!1;function ee(){b.autoAddCss&&!qe&&(ei(In()),qe=!0)}var oi={mixout(){return{dom:{css:In,insertCss:ee}}},hooks(){return{beforeDOMElementCreation(){ee()},beforeI2svg(){ee()}}}};const rt=pt||{};rt[it]||(rt[it]={});rt[it].styles||(rt[it].styles={});rt[it].hooks||(rt[it].hooks={});rt[it].shims||(rt[it].shims=[]);var et=rt[it];const Ln=[],jn=function(){C.removeEventListener("DOMContentLoaded",jn),Ht=1,Ln.map(t=>t())};let Ht=!1;st&&(Ht=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Ht||C.addEventListener("DOMContentLoaded",jn));function li(t){st&&(Ht?setTimeout(t,0):Ln.push(t))}function Dt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Tn(t):"<".concat(e," ").concat(ai(n),">").concat(a.map(Dt).join(""),"</").concat(e,">")}function Ve(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ne=function(e,n,a,i){var r=Object.keys(e),s=r.length,l=n,c,o,u;for(a===void 0?(c=1,u=e[r[0]]):(c=0,u=a);c<s;c++)o=r[c],u=l(u,e[o],o,e);return u};function ci(t){const e=[];let n=0;const a=t.length;for(;n<a;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<a){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function pe(t){const e=ci(t);return e.length===1?e[0].toString(16):null}function fi(t,e){const n=t.length;let a=t.charCodeAt(e),i;return a>=55296&&a<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(a-55296)*1024+i-56320+65536:a}function Ke(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function he(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,i=Ke(e);typeof et.hooks.addPack=="function"&&!a?et.hooks.addPack(t,Ke(e)):et.styles[t]=f(f({},et.styles[t]||{}),i),t==="fas"&&he("fa",e)}const{styles:jt,shims:ui}=et,Fn=Object.keys(_e),di=Fn.reduce((t,e)=>(t[e]=Object.keys(_e[e]),t),{});let ze=null,Dn={},Rn={},Yn={},Bn={},$n={};function mi(t){return~Za.indexOf(t)}function gi(t,e){const n=e.split("-"),a=n[0],i=n.slice(1).join("-");return a===t&&i!==""&&!mi(i)?i:null}const Wn=()=>{const t=a=>ne(jt,(i,r,s)=>(i[s]=ne(r,a,{}),i),{});Dn=t((a,i,r)=>(i[3]&&(a[i[3]]=r),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=r}),a)),Rn=t((a,i,r)=>(a[r]=r,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=r}),a)),$n=t((a,i,r)=>{const s=i[2];return a[r]=r,s.forEach(l=>{a[l]=r}),a});const e="far"in jt||b.autoFetchSvg,n=ne(ui,(a,i)=>{const r=i[0];let s=i[1];const l=i[2];return s==="far"&&!e&&(s="fas"),typeof r=="string"&&(a.names[r]={prefix:s,iconName:l}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Yn=n.names,Bn=n.unicodes,ze=Vt(b.styleDefault,{family:b.familyDefault})};ti(t=>{ze=Vt(t.styleDefault,{family:b.familyDefault})});Wn();function Ne(t,e){return(Dn[t]||{})[e]}function pi(t,e){return(Rn[t]||{})[e]}function xt(t,e){return($n[t]||{})[e]}function Hn(t){return Yn[t]||{prefix:null,iconName:null}}function hi(t){const e=Bn[t],n=Ne("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ht(){return ze}const Xn=()=>({prefix:null,iconName:null,rest:[]});function bi(t){let e=D;const n=Fn.reduce((a,i)=>(a[i]="".concat(b.cssPrefix,"-").concat(i),a),{});return On.forEach(a=>{(t.includes(n[a])||t.some(i=>di[a].includes(i)))&&(e=a)}),e}function Vt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=D}=e,a=Ua[n][t];if(n===Gt&&!t)return"fad";const i=Ge[n][t]||Ge[n][a],r=t in et.styles?t:null;return i||r||null}function vi(t){let e=[],n=null;return t.forEach(a=>{const i=gi(b.cssPrefix,a);i?n=i:a&&e.push(a)}),{iconName:n,rest:e}}function Ze(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Kt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const i=ce.concat(Ia),r=Ze(t.filter(m=>i.includes(m))),s=Ze(t.filter(m=>!ce.includes(m))),l=r.filter(m=>(a=m,!Sn.includes(m))),[c=null]=l,o=bi(r),u=f(f({},vi(s)),{},{prefix:Vt(c,{family:o})});return f(f(f({},u),ki({values:t,family:o,styles:jt,config:b,canonical:u,givenPrefix:a})),yi(n,a,u))}function yi(t,e,n){let{prefix:a,iconName:i}=n;if(t||!a||!i)return{prefix:a,iconName:i};const r=e==="fa"?Hn(i):{},s=xt(a,i);return i=r.iconName||s||i,a=r.prefix||a,a==="far"&&!jt.far&&jt.fas&&!b.autoFetchSvg&&(a="fas"),{prefix:a,iconName:i}}const xi=On.filter(t=>t!==D||t!==Gt),wi=Object.keys(le).filter(t=>t!==D).map(t=>Object.keys(le[t])).flat();function ki(t){const{values:e,family:n,canonical:a,givenPrefix:i="",styles:r={},config:s={}}=t,l=n===Gt,c=e.includes("fa-duotone")||e.includes("fad"),o=s.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(c||o||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&xi.includes(n)&&(Object.keys(r).find(g=>wi.includes(g))||s.autoFetchSvg)){const g=Ea.get(n).defaultShortPrefixId;a.prefix=g,a.iconName=xt(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||i==="fa")&&(a.prefix=ht()||"fas"),a}class Ai{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=f(f({},this.definitions[r]||{}),i[r]),he(r,i[r]);const s=_e[D][r];s&&he(s,i[r]),Wn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(i=>{const{prefix:r,iconName:s,icon:l}=a[i],c=l[2];e[r]||(e[r]={}),c.length>0&&c.forEach(o=>{typeof o=="string"&&(e[r][o]=l)}),e[r][s]=l}),e}}let Je=[],Et={};const Pt={},Si=Object.keys(Pt);function Oi(t,e){let{mixoutsTo:n}=e;return Je=t,Et={},Object.keys(Pt).forEach(a=>{Si.indexOf(a)===-1&&delete Pt[a]}),Je.forEach(a=>{const i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(s=>{n[r]||(n[r]={}),n[r][s]=i[r][s]})}),a.hooks){const r=a.hooks();Object.keys(r).forEach(s=>{Et[s]||(Et[s]=[]),Et[s].push(r[s])})}a.provides&&a.provides(Pt)}),n}function be(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return(Et[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function kt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Et[t]||[]).forEach(r=>{r.apply(null,n)})}function bt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Pt[t]?Pt[t].apply(null,e):void 0}function ve(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||ht();if(e)return e=xt(n,e)||e,Ve(Un.definitions,n,e)||Ve(et.styles,n,e)}const Un=new Ai,Ei=()=>{b.autoReplaceSvg=!1,b.observeMutations=!1,kt("noAuto")},Pi={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return st?(kt("beforeI2svg",t),bt("pseudoElements2svg",t),bt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,li(()=>{Ci({autoReplaceSvgRoot:e}),kt("watch",t)})}},_i={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:xt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Vt(t[0]);return{prefix:n,iconName:xt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(Ga))){const e=Kt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||ht(),iconName:xt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=ht();return{prefix:e,iconName:xt(e,t)||t}}}},U={noAuto:Ei,config:b,dom:Pi,parse:_i,library:Un,findIconDefinition:ve,toHtml:Dt},Ci=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=C}=t;(Object.keys(et.styles).length>0||b.autoFetchSvg)&&st&&b.autoReplaceSvg&&U.dom.i2svg({node:e})};function Zt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Dt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!st)return;const n=C.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Mi(t){let{children:e,main:n,mask:a,attributes:i,styles:r,transform:s}=t;if(Me(s)&&n.found&&!a.found){const{width:l,height:c}=n,o={x:l/c/2,y:.5};i.style=qt(f(f({},r),{},{"transform-origin":"".concat(o.x+s.x/16,"em ").concat(o.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function zi(t){let{prefix:e,iconName:n,children:a,attributes:i,symbol:r}=t;const s=r===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},i),{},{id:s}),children:a}]}]}function Te(t){const{icons:{main:e,mask:n},prefix:a,iconName:i,transform:r,symbol:s,title:l,maskId:c,titleId:o,extra:u,watchable:m=!1}=t,{width:g,height:y}=n.found?n:e,k=za.includes(a),P=[b.replacementClass,i?"".concat(b.cssPrefix,"-").concat(i):""].filter(N=>u.classes.indexOf(N)===-1).filter(N=>N!==""||!!N).concat(u.classes).join(" ");let O={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:P,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(y)})};const h=k&&!~u.classes.indexOf("fa-fw")?{width:"".concat(g/y*16*.0625,"em")}:{};m&&(O.attributes[wt]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(o||Lt())},children:[l]}),delete O.attributes.title);const v=f(f({},O),{},{prefix:a,iconName:i,main:e,mask:n,maskId:c,transform:r,symbol:s,styles:f(f({},h),u.styles)}),{children:S,attributes:z}=n.found&&e.found?bt("generateAbstractMask",v)||{children:[],attributes:{}}:bt("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=S,v.attributes=z,s?zi(v):Mi(v)}function Qe(t){const{content:e,width:n,height:a,transform:i,title:r,extra:s,watchable:l=!1}=t,c=f(f(f({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});l&&(c[wt]="");const o=f({},s.styles);Me(i)&&(o.transform=ri({transform:i,startCentered:!0,width:n,height:a}),o["-webkit-transform"]=o.transform);const u=qt(o);u.length>0&&(c.style=u);const m=[];return m.push({tag:"span",attributes:c,children:[e]}),r&&m.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),m}function Ni(t){const{content:e,title:n,extra:a}=t,i=f(f(f({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),r=qt(a.styles);r.length>0&&(i.style=r);const s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:ae}=et;function ye(t){const e=t[0],n=t[1],[a]=t.slice(4);let i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(te.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(te.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(te.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:i}}const Ti={found:!1,width:512,height:512};function Ii(t,e){!Cn&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function xe(t,e){let n=e;return e==="fa"&&b.styleDefault!==null&&(e=ht()),new Promise((a,i)=>{if(n==="fa"){const r=Hn(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&ae[e]&&ae[e][t]){const r=ae[e][t];return a(ye(r))}Ii(t,e),a(f(f({},Ti),{},{icon:b.showMissingIcons&&t?bt("missingIconAbstract")||{}:{}}))})}const tn=()=>{},we=b.measurePerformance&&Yt&&Yt.mark&&Yt.measure?Yt:{mark:tn,measure:tn},Nt='FA "6.7.2"',Li=t=>(we.mark("".concat(Nt," ").concat(t," begins")),()=>Gn(t)),Gn=t=>{we.mark("".concat(Nt," ").concat(t," ends")),we.measure("".concat(Nt," ").concat(t),"".concat(Nt," ").concat(t," begins"),"".concat(Nt," ").concat(t," ends"))};var Ie={begin:Li,end:Gn};const $t=()=>{};function en(t){return typeof(t.getAttribute?t.getAttribute(wt):null)=="string"}function ji(t){const e=t.getAttribute?t.getAttribute(Ee):null,n=t.getAttribute?t.getAttribute(Pe):null;return e&&n}function Fi(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function Di(){return b.autoReplaceSvg===!0?Wt.replace:Wt[b.autoReplaceSvg]||Wt.replace}function Ri(t){return C.createElementNS("http://www.w3.org/2000/svg",t)}function Yi(t){return C.createElement(t)}function qn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ri:Yi}=e;if(typeof t=="string")return C.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){a.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){a.appendChild(qn(r,{ceFn:n}))}),a}function Bi(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Wt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(qn(n),e)}),e.getAttribute(wt)===null&&b.keepOriginalSource){let n=C.createComment(Bi(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ce(e).indexOf(b.replacementClass))return Wt.replace(t);const a=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((s,l)=>(l===b.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const i=n.map(r=>Dt(r)).join(`
`);e.setAttribute(wt,""),e.innerHTML=i}};function nn(t){t()}function Vn(t,e){const n=typeof e=="function"?e:$t;if(t.length===0)n();else{let a=nn;b.mutateApproach===Ha&&(a=pt.requestAnimationFrame||nn),a(()=>{const i=Di(),r=Ie.begin("mutate");t.map(i),r(),n()})}}let Le=!1;function Kn(){Le=!0}function ke(){Le=!1}let Xt=null;function an(t){if(!We||!b.observeMutations)return;const{treeCallback:e=$t,nodeCallback:n=$t,pseudoElementsCallback:a=$t,observeMutationsRoot:i=C}=t;Xt=new We(r=>{if(Le)return;const s=ht();Ct(r).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!en(l.addedNodes[0])&&(b.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&b.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&en(l.target)&&~Ka.indexOf(l.attributeName))if(l.attributeName==="class"&&ji(l.target)){const{prefix:c,iconName:o}=Kt(Ce(l.target));l.target.setAttribute(Ee,c||s),o&&l.target.setAttribute(Pe,o)}else Fi(l.target)&&n(l.target)})}),st&&Xt.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function $i(){Xt&&Xt.disconnect()}function Wi(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,i)=>{const r=i.split(":"),s=r[0],l=r.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function Hi(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let i=Kt(Ce(t));return i.prefix||(i.prefix=ht()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=pi(i.prefix,t.innerText)||Ne(i.prefix,pe(t.innerText))),!i.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Xi(t){const e=Ct(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(a||Lt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ui(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:i}=Hi(t),r=Xi(t),s=be("parseNodeAttributes",{},t);let l=e.styleParser?Wi(t):[];return f({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:r}},s)}const{styles:Gi}=et;function Zn(t){const e=b.autoReplaceSvg==="nest"?rn(t,{styleParser:!1}):rn(t);return~e.extra.classes.indexOf(zn)?bt("generateLayersText",t,e):bt("generateSvgReplacementMutation",t,e)}function qi(){return[..._a,...ce]}function sn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!st)return Promise.resolve();const n=C.documentElement.classList,a=u=>n.add("".concat(Ue,"-").concat(u)),i=u=>n.remove("".concat(Ue,"-").concat(u)),r=b.autoFetchSvg?qi():Sn.concat(Object.keys(Gi));r.includes("fa")||r.push("fa");const s=[".".concat(zn,":not([").concat(wt,"])")].concat(r.map(u=>".".concat(u,":not([").concat(wt,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=Ct(t.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),i("complete");else return Promise.resolve();const c=Ie.begin("onTree"),o=l.reduce((u,m)=>{try{const g=Zn(m);g&&u.push(g)}catch(g){Cn||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise((u,m)=>{Promise.all(o).then(g=>{Vn(g,()=>{a("active"),a("complete"),i("pending"),typeof e=="function"&&e(),c(),u()})}).catch(g=>{c(),m(g)})})}function Vi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zn(t).then(n=>{n&&Vn([n],e)})}function Ki(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:ve(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:ve(i||{})),t(a,f(f({},n),{},{mask:i}))}}const Zi=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=tt,symbol:a=!1,mask:i=null,maskId:r=null,title:s=null,titleId:l=null,classes:c=[],attributes:o={},styles:u={}}=e;if(!t)return;const{prefix:m,iconName:g,icon:y}=t;return Zt(f({type:"icon"},t),()=>(kt("beforeDOMElementCreation",{iconDefinition:t,params:e}),b.autoA11y&&(s?o["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(l||Lt()):(o["aria-hidden"]="true",o.focusable="false")),Te({icons:{main:ye(y),mask:i?ye(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:g,transform:f(f({},tt),n),symbol:a,title:s,maskId:r,titleId:l,extra:{attributes:o,styles:u,classes:c}})))};var Ji={mixout(){return{icon:Ki(Zi)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=sn,t.nodeCallback=Vi,t}}},provides(t){t.i2svg=function(e){const{node:n=C,callback:a=()=>{}}=e;return sn(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:i,titleId:r,prefix:s,transform:l,symbol:c,mask:o,maskId:u,extra:m}=n;return new Promise((g,y)=>{Promise.all([xe(a,s),o.iconName?xe(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[P,O]=k;g([e,Te({icons:{main:P,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:u,title:i,titleId:r,extra:m,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:i,transform:r,styles:s}=e;const l=qt(s);l.length>0&&(a.style=l);let c;return Me(r)&&(c=bt("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:a}}}},Qi={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Zt({type:"layer"},()=>{kt("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(i=>{Array.isArray(i)?i.map(r=>{a=a.concat(r.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},tr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:i={},styles:r={}}=e;return Zt({type:"counter",content:t},()=>(kt("beforeDOMElementCreation",{content:t,params:e}),Ni({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(b.cssPrefix,"-layers-counter"),...a]}})))}}}},er={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=tt,title:a=null,classes:i=[],attributes:r={},styles:s={}}=e;return Zt({type:"text",content:t},()=>(kt("beforeDOMElementCreation",{content:t,params:e}),Qe({content:t,transform:f(f({},tt),n),title:a,extra:{attributes:r,styles:s,classes:["".concat(b.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:i,extra:r}=n;let s=null,l=null;if(kn){const c=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();s=o.width/c,l=o.height/c}return b.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,Qe({content:e.innerHTML,width:s,height:l,transform:i,title:a,extra:r,watchable:!0})])}}};const nr=new RegExp('"',"ug"),on=[1105920,1112319],ln=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Oa),$a),La),Ae=Object.keys(ln).reduce((t,e)=>(t[e.toLowerCase()]=ln[e],t),{}),ar=Object.keys(Ae).reduce((t,e)=>{const n=Ae[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ir(t){const e=t.replace(nr,""),n=fi(e,0),a=n>=on[0]&&n<=on[1],i=e.length===2?e[0]===e[1]:!1;return{value:pe(i?e[0]:e),isSecondary:a||i}}function rr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),i=isNaN(a)?"normal":a;return(Ae[n]||{})[i]||ar[n]}function cn(t,e){const n="".concat(Wa).concat(e.replace(":","-"));return new Promise((a,i)=>{if(t.getAttribute(n)!==null)return a();const s=Ct(t.children).filter(g=>g.getAttribute(ue)===e)[0],l=pt.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),o=c.match(qa),u=l.getPropertyValue("font-weight"),m=l.getPropertyValue("content");if(s&&!o)return t.removeChild(s),a();if(o&&m!=="none"&&m!==""){const g=l.getPropertyValue("content");let y=rr(c,u);const{value:k,isSecondary:P}=ir(g),O=o[0].startsWith("FontAwesome");let h=Ne(y,k),v=h;if(O){const S=hi(k);S.iconName&&S.prefix&&(h=S.iconName,y=S.prefix)}if(h&&!P&&(!s||s.getAttribute(Ee)!==y||s.getAttribute(Pe)!==v)){t.setAttribute(n,v),s&&t.removeChild(s);const S=Ui(),{extra:z}=S;z.attributes[ue]=e,xe(h,y).then(N=>{const I=Te(f(f({},S),{},{icons:{main:N,mask:Xn()},prefix:y,iconName:v,extra:z,watchable:!0})),B=C.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(B,t.firstChild):t.appendChild(B),B.outerHTML=I.map(_=>Dt(_)).join(`
`),t.removeAttribute(n),a()}).catch(i)}else a()}else a()})}function sr(t){return Promise.all([cn(t,"::before"),cn(t,"::after")])}function or(t){return t.parentNode!==document.head&&!~Xa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ue)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fn(t){if(st)return new Promise((e,n)=>{const a=Ct(t.querySelectorAll("*")).filter(or).map(sr),i=Ie.begin("searchPseudoElements");Kn(),Promise.all(a).then(()=>{i(),ke(),e()}).catch(()=>{i(),ke(),n()})})}var lr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=fn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=C}=e;b.searchPseudoElements&&fn(n)}}};let un=!1;var cr={mixout(){return{dom:{unwatch(){Kn(),un=!0}}}},hooks(){return{bootstrap(){an(be("mutationObserverCallbacks",{}))},noAuto(){$i()},watch(t){const{observeMutationsRoot:e}=t;un?ke():an(be("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const dn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const i=a.toLowerCase().split("-"),r=i[0];let s=i.slice(1).join("-");if(r&&s==="h")return n.flipX=!0,n;if(r&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(r){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var fr={mixout(){return{parse:{transform:t=>dn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=dn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:i,iconWidth:r}=e;const s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(o)},m={transform:"translate(".concat(r/2*-1," -256)")},g={outer:s,inner:u,path:m};return{tag:"g",attributes:f({},g.outer),children:[{tag:"g",attributes:f({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),g.path)}]}]}}}};const ie={x:0,y:0,width:"100%",height:"100%"};function mn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ur(t){return t.tag==="g"?t.children:[t]}var dr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Kt(n.split(" ").map(i=>i.trim())):Xn();return a.prefix||(a.prefix=ht()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:i,mask:r,maskId:s,transform:l}=e;const{width:c,icon:o}=i,{width:u,icon:m}=r,g=ii({transform:l,containerWidth:u,iconWidth:c}),y={tag:"rect",attributes:f(f({},ie),{},{fill:"white"})},k=o.children?{children:o.children.map(mn)}:{},P={tag:"g",attributes:f({},g.inner),children:[mn(f({tag:o.tag,attributes:f(f({},o.attributes),g.path)},k))]},O={tag:"g",attributes:f({},g.outer),children:[P]},h="mask-".concat(s||Lt()),v="clip-".concat(s||Lt()),S={tag:"mask",attributes:f(f({},ie),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,O]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:ur(m)},S]};return n.push(z,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},ie)}),{children:n,attributes:a}}}},mr={provides(t){let e=!1;pt.matchMedia&&(e=pt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const r=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:f(f({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:f(f({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:f(f({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},gr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},pr=[oi,Ji,Qi,tr,er,lr,cr,fr,dr,mr,gr];Oi(pr,{mixoutsTo:U});U.noAuto;U.config;U.library;U.dom;const Se=U.parse;U.findIconDefinition;U.toHtml;const hr=U.icon;U.layer;U.text;U.counter;function gn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function at(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gn(Object(n),!0).forEach(function(a){H(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function br(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function vr(t){var e=br(t,"string");return typeof e=="symbol"?e:e+""}function Ut(t){"@babel/helpers - typeof";return Ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ut(t)}function H(t,e,n){return e=vr(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function xr(t,e){if(t==null)return{};var n=yr(t,e),a,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Jn={exports:{}};(function(t){(function(e){var n=function(h,v,S){if(!o(v)||m(v)||g(v)||y(v)||c(v))return v;var z,N=0,I=0;if(u(v))for(z=[],I=v.length;N<I;N++)z.push(n(h,v[N],S));else{z={};for(var B in v)Object.prototype.hasOwnProperty.call(v,B)&&(z[h(B,S)]=n(h,v[B],S))}return z},a=function(h,v){v=v||{};var S=v.separator||"_",z=v.split||/(?=[A-Z])/;return h.split(z).join(S)},i=function(h){return k(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(v,S){return S?S.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},r=function(h){var v=i(h);return v.substr(0,1).toUpperCase()+v.substr(1)},s=function(h,v){return a(h,v).toLowerCase()},l=Object.prototype.toString,c=function(h){return typeof h=="function"},o=function(h){return h===Object(h)},u=function(h){return l.call(h)=="[object Array]"},m=function(h){return l.call(h)=="[object Date]"},g=function(h){return l.call(h)=="[object RegExp]"},y=function(h){return l.call(h)=="[object Boolean]"},k=function(h){return h=h-0,h===h},P=function(h,v){var S=v&&"process"in v?v.process:v;return typeof S!="function"?h:function(z,N){return S(z,h,N)}},O={camelize:i,decamelize:s,pascalize:r,depascalize:s,camelizeKeys:function(h,v){return n(P(i,v),h)},decamelizeKeys:function(h,v){return n(P(s,v),h,v)},pascalizeKeys:function(h,v){return n(P(r,v),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=O:e.humps=O})(wr)})(Jn);var kr=Jn.exports,Ar=["class","style"];function Sr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),i=kr.camelize(n.slice(0,a)),r=n.slice(a+1).trim();return e[i]=r,e},{})}function Or(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Qn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return Qn(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,o){var u=t.attributes[o];switch(o){case"class":c.class=Or(u);break;case"style":c.style=Sr(u);break;default:c.attrs[o]=u}return c},{attrs:{},class:{},style:{}});n.class;var r=n.style,s=r===void 0?{}:r,l=xr(n,Ar);return ia(t.tag,at(at(at({},e),{},{class:i.class,style:at(at({},i.style),s)},i.attrs),l),a)}var ta=!1;try{ta=!0}catch{}function Er(){if(!ta&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function re(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?H({},t,e):{}}function Pr(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},H(H(H(H(H(H(H(H(H(H(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),H(H(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function pn(t){if(t&&Ut(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Se.icon)return Se.icon(t);if(t===null)return null;if(Ut(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var se=aa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,i=At(function(){return pn(e.icon)}),r=At(function(){return re("classes",Pr(e))}),s=At(function(){return re("transform",typeof e.transform=="string"?Se.transform(e.transform):e.transform)}),l=At(function(){return re("mask",pn(e.mask))}),c=At(function(){return hr(i.value,at(at(at(at({},r.value),s.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});oe(c,function(u){if(!u)return Er("Could not find one or more icon(s)",i.value,l.value)},{immediate:!0});var o=At(function(){return c.value?Qn(c.value.abstract[0],{},a):null});return function(){return o.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const _r={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Cr={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},Mr={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},zr={class:"fixed top-64 w-screen",style:{"z-index":"50","pointer-events":"none"}},Nr={class:"xl:w-[5%] sm:w-[6%] w-[10%] sm:ml-[95%] ml-[90%]"},Tr={class:"bg-azul w-full py-4 sm:rounded-tl-xl sm:rounded-bl-xl rounded-tl-md rounded-bl-md",style:{"pointer-events":"auto"}},Ir={class:"w-full py-2 ps-8 flex bg-[#3366cc]"},Lr={class:"flex w-5/6 sm:w-[20%] md:w-[10%] z-20",href:"https://www.gov.co/",target:"_blank"},jr=["src"],Fr={class:"mx-auto px-4 sm:px-6 lg:px-8"},Dr={class:"flex w-full justify-between items-center"},Rr={class:"flex-shrink-0 sm:w-1/4 w-3/6 p-4"},Yr={href:"/Welcome",class:"text-white text-2xl font-semibold"},Br=["src"],$r=["src"],Wr={class:"hidden md:block"},Hr={class:"flex space-x-4"},Xr=["href"],Ur=["href"],Gr={class:"md:hidden z-20"},qr={key:0,class:"md:hidden"},Vr={class:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},Kr=["href"],Zr=["href"],Jr={class:"flex-1 overflow-y-auto overflow-x-hidden bg-light text-black"},Qr={class:"container mx-auto flex flex-wrap items-center justify-between"},ts={class:"flex items-center flex-shrink-0 mr-6 w-1/6"},es={href:"/Welcome",class:"w-full"},ns=["src"],as=["src"],is={class:"flex justify-center items-center space-x-4 text-primary"},rs={href:"https://www.instagram.com/alcaldiadepereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},ss={href:"https://www.facebook.com/AlcaldiaDePereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},os={href:"https://www.youtube.com/channel/UCAFZZcG6RI0gw5DkrT6kMSQ/videos",target:"_blank",class:"hover:text-parrafo transition duration-300"},ls={href:"#inicio",class:"text-primary hover:text-parrafo transition duration-300"},cs={class:"w-full py-4 ps-8 flex bg-[#3366cc]"},fs={class:"flex w-5/6 sm:w-[25%] md:w-[15%]",href:"https://www.gov.co/",target:"_blank"},us=["src"],ds={__name:"PageLayout",setup(t){const e=ma.useToast();vn.init();const n=mt(gt().props.accesibilidad.contraste),a=mt(gt().props.accesibilidad.letra),i=mt(""),r=mt(!1),s=()=>{n.value=!n.value,gt().props.accesibilidad.contraste=n.value},l=(c,o)=>{c>=2?(a.value=2,e.open({message:"Limite de aumento de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):c<=-2?(a.value=-2,e.open({message:"Limite de reducción de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):a.value=c,i.value=o,gt().props.accesibilidad.letra=a.value};return(c,o)=>{const u=ra("tooltip");return Y(),R("div",{class:j(["flex flex-col overflow-x-hidden bg-option1",{"!bg-black":n.value}])},[d("div",zr,[d("div",Nr,[d("div",Tr,[St((Y(),R("button",{onClick:s,class:j(["flex w-auto py-2 lg:px-4 px-2",{"bg-[#3366cc]":n.value}])},o[4]||(o[4]=[d("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512"},[d("path",{d:"M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"})])],-1)]),2)),[[u,{value:"Contraste",autoHide:!1},void 0,{center:!0}]]),St((Y(),R("button",{onClick:o[0]||(o[0]=m=>l(a.value-1,"reducir")),class:j(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":i.value=="reducir"&&!n.value}])},o[5]||(o[5]=[d("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[d("p",{class:"font-extrabold text-xs lg:text-base"},[zt("A"),d("sup",null,"-")])],-1)]),2)),[[u,{value:"Reducir letra",autoHide:!1},void 0,{center:!0}]]),St((Y(),R("button",{onClick:o[1]||(o[1]=m=>l(0,"default")),class:j(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":i.value=="default"&&!n.value}])},o[6]||(o[6]=[d("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[d("p",{class:"font-extrabold text-xs lg:text-base"},[zt("A"),d("sup",null,"n")])],-1)]),2)),[[u,{value:"Restablecer letra",autoHide:!1},void 0,{center:!0}]]),St((Y(),R("button",{onClick:o[2]||(o[2]=m=>l(a.value+1,"aumentar")),class:j(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":i.value=="aumentar"&&!n.value}])},o[7]||(o[7]=[d("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[d("p",{class:"font-extrabold text-xs lg:text-base"},[zt("A"),d("sup",null,"+")])],-1)]),2)),[[u,{value:"Aumentar letra",autoHide:!1},void 0,{center:!0}]])])])]),d("header",Ir,[d("a",Lr,[d("figure",null,[d("img",{class:"w-full sm:w-5/6",src:W(Re),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,jr),o[8]||(o[8]=d("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo del gobierno actual de colombia ",-1))])])]),d("nav",{class:j(["w-full h-full bg-option2 py-2 text-xl sm:text-2xl text-parrafo z-20",[{"!text-yellow-200 font-bold !bg-black":n.value},a.value==-2?"!text-base !sm:text-lg":a.value==-1?"!text-lg !sm:text-xl":a.value==1?"!text-2xl !sm:text-4xl":a.value==2?"!text-4xl !sm:text-6xl":""]])},[d("div",Fr,[d("div",Dr,[d("div",Rr,[d("a",Yr,[d("figure",null,[n.value?(Y(),R("img",{key:0,class:"w-full sm:w-5/6",src:W(De),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,Br)):(Y(),R("img",{key:1,class:"w-full sm:w-5/6",src:W(Fe),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,$r)),o[9]||(o[9]=d("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),d("div",Wr,[d("ul",Hr,[d("li",null,[St((Y(),R("a",{href:c.route("register"),class:j([[{underline:c.route().current("register")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},o[10]||(o[10]=[zt("Registro")]),10,Xr)),[[u,{value:"Registro de ingreso al punto",autoHide:!1},void 0,{bottom:!0}]])]),d("li",null,[c.$page.props.auth.user?St((Y(),R("a",{key:0,href:c.route("dashboard"),class:j([[{underline:c.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},o[11]||(o[11]=[zt("Dashboard")]),10,Ur)),[[u,{value:"regresar al dashboard",autoHide:!1},void 0,{bottom:!0}]]):Qt("",!0)])])]),d("div",Gr,[d("button",{class:j(["text-parrafo hover:text-secondary focus:outline-none",[{"!text-yellow-200 font-bold":n.value}]]),onClick:o[3]||(o[3]=m=>r.value=!r.value)},o[12]||(o[12]=[d("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]),2)])])]),r.value?(Y(),R("div",qr,[d("ul",Vr,[d("li",null,[d("a",{href:c.route("register"),class:j([[{underline:c.route().current("register")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Registro",10,Kr)]),d("li",null,[c.$page.props.auth.user?(Y(),R("a",{key:0,href:c.route("dashboard"),class:j([[{underline:c.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Dashboard",10,Zr)):Qt("",!0)])])])):Qt("",!0)],2),d("main",Jr,[sa(c.$slots,"default",{},void 0,!0)]),d("footer",{class:j(["px-2 bg-option2/90 text-parrafo flex flex-col py-6",{"!bg-black !text-white":n.value}])},[d("div",Qr,[d("div",ts,[d("a",es,[d("figure",null,[n.value?(Y(),R("img",{key:0,class:"w-full",src:W(De),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,ns)):(Y(),R("img",{key:1,class:"w-full",src:W(Fe),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,as)),o[13]||(o[13]=d("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),d("div",is,[d("a",rs,[Ot(W(se),{icon:W(_r),size:"xl"},null,8,["icon"])]),d("a",ss,[Ot(W(se),{icon:W(Cr),size:"xl"},null,8,["icon"])]),d("a",os,[Ot(W(se),{icon:W(Mr),size:"xl"},null,8,["icon"])])]),d("div",null,[d("a",ls,[Ot(W(ga),{class:"w-12 animate-bounce"})])])]),o[14]||(o[14]=d("div",{class:"container px-4 mt-8"},[d("ul",{class:"custom-list space-y-2"})],-1))],2),d("div",cs,[d("a",fs,[d("figure",null,[d("img",{class:"w-full sm:w-5/6",src:W(Re),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,us),o[15]||(o[15]=d("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo del gobierno actual de colombia ",-1))])])])],2)}}},ms=hn(ds,[["__scopeId","data-v-be8f2938"]]);class Q{constructor(e,n={}){if(!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(n),this.reverse=this.settings.reverse?-1:1,this.resetToStart=Q.isSettingTrue(this.settings["reset-to-start"]),this.glare=Q.isSettingTrue(this.settings.glare),this.glarePrerender=Q.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=Q.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=Q.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.resetToStart===!1&&(this.settings.startX=0,this.settings.startY=0)}static isSettingTrue(e){return e===""||e===!0||e===1}getElementListener(){if(this.fullPageListening)return window.document;if(typeof this.settings["mouse-event-element"]=="string"){const e=document.querySelector(this.settings["mouse-event-element"]);if(e)return e}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.element.style.willChange="",this.element.style.transition="",this.element.style.transform="",this.resetGlare(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(e){if(e.gamma===null||e.beta===null)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,this.gammazero===null?(this.gammazero=e.gamma,this.betazero=e.beta):(this.gammazero=(e.gamma+this.lastgammazero)/2,this.betazero=(e.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const n=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,a=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,i=n/this.width,r=a/this.height,s=e.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),l=e.beta-(this.settings.gyroscopeMinAngleY+this.betazero),c=s/i,o=l/r;this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event={clientX:c+this.left,clientY:o+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(e){this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let e=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=e,this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let e,n;this.fullPageListening?(e=this.event.clientX/this.clientWidth,n=this.event.clientY/this.clientHeight):(e=(this.event.clientX-this.left)/this.width,n=(this.event.clientY-this.top)/this.height),e=Math.min(Math.max(e,0),1),n=Math.min(Math.max(n,0),1);let a=(this.reverse*(this.settings.max-e*this.settings.max*2)).toFixed(2),i=(this.reverse*(n*this.settings.max*2-this.settings.max)).toFixed(2),r=Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI);return{tiltX:a,tiltY:i,percentageX:e*100,percentageY:n*100,angle:r}}updateElementPosition(){let e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(){let e=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+(this.settings.axis==="x"?0:e.tiltY)+"deg) rotateY("+(this.settings.axis==="y"?0:e.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${e.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${e.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const e=document.createElement("div");e.classList.add("js-tilt-glare");const n=document.createElement("div");n.classList.add("js-tilt-glare-inner"),e.appendChild(n),this.element.appendChild(e)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),!this.glarePrerender&&(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}updateGlareSize(){if(this.glare){const e=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:`${e}px`,height:`${e}px`})}}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(e){let n={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,"reset-to-start":!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},a={};for(var i in n)if(i in e)a[i]=e[i];else if(this.element.hasAttribute("data-tilt-"+i)){let r=this.element.getAttribute("data-tilt-"+i);try{a[i]=JSON.parse(r)}catch{a[i]=r}}else a[i]=n[i];return a}static init(e,n){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(a=>{"vanillaTilt"in a||(a.vanillaTilt=new Q(a,n))})}}typeof document<"u"&&(window.VanillaTilt=Q,Q.init(document.querySelectorAll("[data-tilt]")));const gs={id:"inicio",class:"w-full h-screen overflow-hidden"},ps={class:"aa_sec flex items-center justify-center"},hs={class:"aa_txt text-center"},bs={class:"flex flex-col md:flex-row md:grid grid-cols-8 gap-4 mt-8"},vs={__name:"Welcome",props:{laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0}},setup(t){vn.init(),oa("$swal");const e=mt(gt().props.accesibilidad.contraste),n=mt(gt().props.accesibilidad.letra);oe(()=>gt().props.accesibilidad.contraste,r=>{e.value=r}),oe(()=>gt().props.accesibilidad.letra,r=>{n.value=r});const a=r=>{let s="text";switch(r){case-2:s=`${s}-xs sm:${s}-base md:${s}-lg`;break;case-1:s=`${s}-sm sm:${s}-lg md:${s}-xl`;break;case 0:s=`${s}-base sm:${s}-xl md:${s}-2xl`;break;case 1:s=`${s}-lg sm:${s}-2xl md:${s}-4xl`;break;case 2:s=`${s}-xl sm:${s}-4xl md:${s}-6xl`;break}return s};la({correo:""}),mt([{breakpoint:"1400px",numVisible:4,numScroll:1},{breakpoint:"1199px",numVisible:3,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]);const i=mt(null);return ca(()=>{window.particlesJS&&window.particlesJS("aa_particles",{particles:{number:{value:120,density:{enable:!0,value_area:800}},color:{value:"#FFBA00"},shape:{type:"circle",stroke:{width:0,color:"#FFBA00"},polygon:{nb_sides:8}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ED1C24",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:150,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:8},remove:{particles_nb:4}}},retina_detect:!0});const r=document.querySelector(".tilt-image");r&&Q.init(r,{max:25,speed:50,glare:!0,"max-glare":.5})}),(r,s)=>(Y(),R(da,null,[Ot(W(fa),{title:"Home"}),Ot(ms,null,{default:ua(()=>[d("div",gs,[d("div",ps,[d("div",hs,[d("div",{class:j(["aa_inner",n.value==-2?"sm:text-2xl text-xl":n.value==-1?"sm:text-4xl text-2xl":n.value==1?"sm:text-[4rem] text-4xl":n.value==2?"sm:text-[5rem] text-4xl":"sm:text-[3rem] text-4xl"])},[s[0]||(s[0]=d("span",{class:"font-bold p-2 bg-primary text-white"},"SECRETARÍA",-1)),s[1]||(s[1]=d("div",{class:"mt-2 sm:mt-5 md:mt-6"},[d("span",{class:"font-bold p-2 bg-amarillo text-white"},"TIC")],-1)),d("h1",{class:j(["px-12 sm:px-8 md:px-16 text-parrafo mt-4 sm:mt-6 font-bold italic",[{"!text-yellow-200":e.value},n.value==-2?"sm:text-lg text-xs":n.value==-1?"sm:text-xl text-sm":n.value==1?"sm:text-4xl text-base":n.value==2?"sm:text-6xl text-base":"sm:text-2xl text-base"]])}," Aprende, conéctate y haz de la tecnología tu aliada. ",2)],2)])]),d("div",{ref_key:"particlesContainer",ref:i,id:"aa_particles",class:j({"!bg-black":e.value})},null,2)]),d("div",{class:j(["w-full overflow-hidden px-6 bg-gradient-to-b from-option2 to option1 text-parrafo",{"!bg-gradient-to-b !from-black to-black !text-yellow-200 font-bold":e.value}]),"data-aos":"fade-up"},[d("div",bs,[d("div",{class:j(["col-span-3 flex justify-center items-center px-6 mb-4",a(n.value)])}," Transformamos comunidades a través del acceso al conocimiento y la tecnología. ",2),s[2]||(s[2]=d("div",{class:"col-span-5 flex justify-center items-center m-auto px-4"},null,-1))])],2),s[3]||(s[3]=d("section",{class:"section1 overflow-hidden","data-aos":"fade-up"},[d("svg",{class:"curve",viewBox:"0 0 370.417 79.375"},[d("path",{class:"wave",d:"M-1.301 51.894C141.54 5.807 159.612 38.111 226.846 62.2c90.74 32.51 149.712-33.492 149.712-33.492v59.541H-1.302z",fill:"#C20E1A","fill-rule":"evenodd"})])],-1))]),_:1,__:[3]})],64))}},ks=hn(vs,[["__scopeId","data-v-b0fd1488"]]);export{ks as default};
