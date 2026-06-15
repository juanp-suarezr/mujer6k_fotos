import{d as Zn,l as ze}from"./index-CM12ZJ3j.js";import{_ as Qn,l as Fe}from"./_plugin-vue_export-helper-4M2ilndO.js";import{a as D,o as R,g,aD as Jn,aE as ta,aF as ea,c as xt,b as na,aG as aa,r as Ft,Q as Lt,W as ra,w as wt,n as G,k as _t,u as U,f as Qt,X as oa,d as Dt}from"./app-CBWBEm_H.js";function ia(t,e){return R(),D("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[g("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z","clip-rule":"evenodd"})])}const Le="/build/assets/gobierno-VHX8UfDK.webp";var pn={exports:{}};(function(t,e){(function(n,a){t.exports=a()})(ta,function(){return function(n){function a(o){if(r[o])return r[o].exports;var i=r[o]={exports:{},id:o,loaded:!1};return n[o].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}var r={};return a.m=n,a.c=r,a.p="dist/",a(0)}([function(n,a,r){function o(w){return w&&w.__esModule?w:{default:w}}var i=Object.assign||function(w){for(var F=1;F<arguments.length;F++){var X=arguments[F];for(var st in X)Object.prototype.hasOwnProperty.call(X,st)&&(w[st]=X[st])}return w},l=r(1),c=(o(l),r(6)),s=o(c),u=r(7),d=o(u),m=r(8),y=o(m),k=r(9),_=o(k),S=r(10),h=o(S),v=r(11),O=o(v),I=r(14),M=o(I),j=[],H=!1,E={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},q=function(){var w=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(w&&(H=!0),H)return j=(0,O.default)(j,E),(0,h.default)(j,E.once),j},it=function(){j=(0,M.default)(),q()},x=function(){j.forEach(function(w,F){w.node.removeAttribute("data-aos"),w.node.removeAttribute("data-aos-easing"),w.node.removeAttribute("data-aos-duration"),w.node.removeAttribute("data-aos-delay")})},p=function(w){return w===!0||w==="mobile"&&_.default.mobile()||w==="phone"&&_.default.phone()||w==="tablet"&&_.default.tablet()||typeof w=="function"&&w()===!0},A=function(w){E=i(E,w),j=(0,M.default)();var F=document.all&&!window.atob;return p(E.disable)||F?x():(E.disableMutationObserver||y.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),E.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",E.easing),document.querySelector("body").setAttribute("data-aos-duration",E.duration),document.querySelector("body").setAttribute("data-aos-delay",E.delay),E.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?q(!0):E.startEvent==="load"?window.addEventListener(E.startEvent,function(){q(!0)}):document.addEventListener(E.startEvent,function(){q(!0)}),window.addEventListener("resize",(0,d.default)(q,E.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(q,E.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)(function(){(0,h.default)(j,E.once)},E.throttleDelay)),E.disableMutationObserver||y.default.ready("[data-aos]",it),j)};n.exports={init:A,refresh:q,refreshHard:it}},function(n,a){},,,,,function(n,a){(function(r){function o(p,A,w){function F(P){var Y=V,ct=Z;return V=Z=void 0,lt=P,z=p.apply(ct,Y)}function X(P){return lt=P,T=setTimeout(ht,A),ft?F(P):z}function st(P){var Y=P-B,ct=P-lt,je=A-Y;return et?it(je,Q-ct):je}function gt(P){var Y=P-B,ct=P-lt;return B===void 0||Y>=A||Y<0||et&&ct>=Q}function ht(){var P=x();return gt(P)?zt(P):void(T=setTimeout(ht,st(P)))}function zt(P){return T=void 0,N&&V?F(P):(V=Z=void 0,z)}function Zt(){T!==void 0&&clearTimeout(T),lt=0,V=B=Z=T=void 0}function Pt(){return T===void 0?z:zt(x())}function K(){var P=x(),Y=gt(P);if(V=arguments,Z=this,B=P,Y){if(T===void 0)return X(B);if(et)return T=setTimeout(ht,A),F(B)}return T===void 0&&(T=setTimeout(ht,A)),z}var V,Z,Q,z,T,B,lt=0,ft=!1,et=!1,N=!0;if(typeof p!="function")throw new TypeError(m);return A=u(A)||0,l(w)&&(ft=!!w.leading,et="maxWait"in w,Q=et?q(u(w.maxWait)||0,A):Q,N="trailing"in w?!!w.trailing:N),K.cancel=Zt,K.flush=Pt,K}function i(p,A,w){var F=!0,X=!0;if(typeof p!="function")throw new TypeError(m);return l(w)&&(F="leading"in w?!!w.leading:F,X="trailing"in w?!!w.trailing:X),o(p,A,{leading:F,maxWait:A,trailing:X})}function l(p){var A=typeof p>"u"?"undefined":d(p);return!!p&&(A=="object"||A=="function")}function c(p){return!!p&&(typeof p>"u"?"undefined":d(p))=="object"}function s(p){return(typeof p>"u"?"undefined":d(p))=="symbol"||c(p)&&E.call(p)==k}function u(p){if(typeof p=="number")return p;if(s(p))return y;if(l(p)){var A=typeof p.valueOf=="function"?p.valueOf():p;p=l(A)?A+"":A}if(typeof p!="string")return p===0?p:+p;p=p.replace(_,"");var w=h.test(p);return w||v.test(p)?O(p.slice(2),w?2:8):S.test(p)?y:+p}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},m="Expected a function",y=NaN,k="[object Symbol]",_=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,v=/^0o[0-7]+$/i,O=parseInt,I=(typeof r>"u"?"undefined":d(r))=="object"&&r&&r.Object===Object&&r,M=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,j=I||M||Function("return this")(),H=Object.prototype,E=H.toString,q=Math.max,it=Math.min,x=function(){return j.Date.now()};n.exports=i}).call(a,function(){return this}())},function(n,a){(function(r){function o(x,p,A){function w(N){var P=K,Y=V;return K=V=void 0,B=N,Q=x.apply(Y,P)}function F(N){return B=N,z=setTimeout(gt,p),lt?w(N):Q}function X(N){var P=N-T,Y=N-B,ct=p-P;return ft?q(ct,Z-Y):ct}function st(N){var P=N-T,Y=N-B;return T===void 0||P>=p||P<0||ft&&Y>=Z}function gt(){var N=it();return st(N)?ht(N):void(z=setTimeout(gt,X(N)))}function ht(N){return z=void 0,et&&K?w(N):(K=V=void 0,Q)}function zt(){z!==void 0&&clearTimeout(z),B=0,K=T=V=z=void 0}function Zt(){return z===void 0?Q:ht(it())}function Pt(){var N=it(),P=st(N);if(K=arguments,V=this,T=N,P){if(z===void 0)return F(T);if(ft)return z=setTimeout(gt,p),w(T)}return z===void 0&&(z=setTimeout(gt,p)),Q}var K,V,Z,Q,z,T,B=0,lt=!1,ft=!1,et=!0;if(typeof x!="function")throw new TypeError(d);return p=s(p)||0,i(A)&&(lt=!!A.leading,ft="maxWait"in A,Z=ft?E(s(A.maxWait)||0,p):Z,et="trailing"in A?!!A.trailing:et),Pt.cancel=zt,Pt.flush=Zt,Pt}function i(x){var p=typeof x>"u"?"undefined":u(x);return!!x&&(p=="object"||p=="function")}function l(x){return!!x&&(typeof x>"u"?"undefined":u(x))=="object"}function c(x){return(typeof x>"u"?"undefined":u(x))=="symbol"||l(x)&&H.call(x)==y}function s(x){if(typeof x=="number")return x;if(c(x))return m;if(i(x)){var p=typeof x.valueOf=="function"?x.valueOf():x;x=i(p)?p+"":p}if(typeof x!="string")return x===0?x:+x;x=x.replace(k,"");var A=S.test(x);return A||h.test(x)?v(x.slice(2),A?2:8):_.test(x)?m:+x}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},d="Expected a function",m=NaN,y="[object Symbol]",k=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,h=/^0o[0-7]+$/i,v=parseInt,O=(typeof r>"u"?"undefined":u(r))=="object"&&r&&r.Object===Object&&r,I=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,M=O||I||Function("return this")(),j=Object.prototype,H=j.toString,E=Math.max,q=Math.min,it=function(){return M.Date.now()};n.exports=o}).call(a,function(){return this}())},function(n,a){function r(u){var d=void 0,m=void 0;for(d=0;d<u.length;d+=1)if(m=u[d],m.dataset&&m.dataset.aos||m.children&&r(m.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function l(u,d){var m=window.document,y=o(),k=new y(c);s=d,k.observe(m.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function c(u){u&&u.forEach(function(d){var m=Array.prototype.slice.call(d.addedNodes),y=Array.prototype.slice.call(d.removedNodes),k=m.concat(y);if(r(k))return s()})}Object.defineProperty(a,"__esModule",{value:!0});var s=function(){};a.default={isSupported:i,ready:l}},function(n,a){function r(m,y){if(!(m instanceof y))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function m(y,k){for(var _=0;_<k.length;_++){var S=k[_];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(y,S.key,S)}}return function(y,k,_){return k&&m(y.prototype,k),_&&m(y,_),y}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function m(){r(this,m)}return i(m,[{key:"phone",value:function(){var y=o();return!(!l.test(y)&&!c.test(y.substr(0,4)))}},{key:"mobile",value:function(){var y=o();return!(!s.test(y)&&!u.test(y.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),m}();a.default=new d},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(i,l,c){var s=i.node.getAttribute("data-aos-once");l>i.position?i.node.classList.add("aos-animate"):typeof s<"u"&&(s==="false"||!c&&s!=="true")&&i.node.classList.remove("aos-animate")},o=function(i,l){var c=window.pageYOffset,s=window.innerHeight;i.forEach(function(u,d){r(u,s+c,l)})};a.default=o},function(n,a,r){function o(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(a,"__esModule",{value:!0});var i=r(12),l=o(i),c=function(s,u){return s.forEach(function(d,m){d.node.classList.add("aos-init"),d.position=(0,l.default)(d.node,u.offset)}),s};a.default=c},function(n,a,r){function o(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(a,"__esModule",{value:!0});var i=r(13),l=o(i),c=function(s,u){var d=0,m=0,y=window.innerHeight,k={offset:s.getAttribute("data-aos-offset"),anchor:s.getAttribute("data-aos-anchor"),anchorPlacement:s.getAttribute("data-aos-anchor-placement")};switch(k.offset&&!isNaN(k.offset)&&(m=parseInt(k.offset)),k.anchor&&document.querySelectorAll(k.anchor)&&(s=document.querySelectorAll(k.anchor)[0]),d=(0,l.default)(s).top,k.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=s.offsetHeight/2;break;case"bottom-bottom":d+=s.offsetHeight;break;case"top-center":d+=y/2;break;case"bottom-center":d+=y/2+s.offsetHeight;break;case"center-center":d+=y/2+s.offsetHeight/2;break;case"top-top":d+=y;break;case"bottom-top":d+=s.offsetHeight+y;break;case"center-top":d+=s.offsetHeight/2+y}return k.anchorPlacement||k.offset||isNaN(u)||(m=u),d+m};a.default=c},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(o){for(var i=0,l=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)i+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),l+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:l,left:i}};a.default=r},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(i){return{node:i}})};a.default=r}])})})(pn);var sa=pn.exports;const la=Jn(sa);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function fa(t,e,n){return(e=ua(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function De(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?De(Object(n),!0).forEach(function(a){fa(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):De(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ca(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ua(t){var e=ca(t,"string");return typeof e=="symbol"?e:e+""}const Re=()=>{};let Ae={},gn={},hn=null,bn={mark:Re,measure:Re};try{typeof window<"u"&&(Ae=window),typeof document<"u"&&(gn=document),typeof MutationObserver<"u"&&(hn=MutationObserver),typeof performance<"u"&&(bn=performance)}catch{}const{userAgent:He=""}=Ae.navigator||{},dt=Ae,C=gn,Ye=hn,Rt=bn;dt.document;const ot=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",vn=~He.indexOf("MSIE")||~He.indexOf("Trident/");var da=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ma=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,yn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},pa={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},xn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],L="classic",Vt="duotone",ga="sharp",ha="sharp-duotone",wn=[L,Vt,ga,ha],ba={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},va={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ya=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),xa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},wa=["fak","fa-kit","fakd","fa-kit-duotone"],We={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ka=["kit"],Aa={kit:{"fa-kit":"fak"}},Oa=["fak","fakd"],Sa={kit:{fak:"fa-kit"}},Be={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],_a=["fak","fa-kit","fakd","fa-kit-duotone"],Ea={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ca={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Na={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ie={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ia=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],se=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Pa,...Ia],Ma=["solid","regular","light","thin","duotone","brands"],kn=[1,2,3,4,5,6,7,8,9,10],Ta=kn.concat([11,12,13,14,15,16,17,18,19,20]),ja=[...Object.keys(Na),...Ma,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ht.GROUP,Ht.SWAP_OPACITY,Ht.PRIMARY,Ht.SECONDARY].concat(kn.map(t=>"".concat(t,"x"))).concat(Ta.map(t=>"w-".concat(t))),za={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const at="___FONT_AWESOME___",le=16,An="fa",On="svg-inline--fa",vt="data-fa-i2svg",fe="data-fa-pseudo-element",Fa="data-fa-pseudo-element-pending",Oe="data-prefix",Se="data-icon",Ue="fontawesome-i2svg",La="async",Da=["HTML","HEAD","STYLE","SCRIPT"],Sn=(()=>{try{return!0}catch{return!1}})();function Tt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[L]}})}const Pn=f({},yn);Pn[L]=f(f(f(f({},{"fa-duotone":"duotone"}),yn[L]),We.kit),We["kit-duotone"]);const Ra=Tt(Pn),ce=f({},xa);ce[L]=f(f(f(f({},{duotone:"fad"}),ce[L]),Be.kit),Be["kit-duotone"]);const $e=Tt(ce),ue=f({},ie);ue[L]=f(f({},ue[L]),Sa.kit);const Pe=Tt(ue),de=f({},Ca);de[L]=f(f({},de[L]),Aa.kit);Tt(de);const Ha=da,_n="fa-layers-text",Ya=ma,Wa=f({},ba);Tt(Wa);const Ba=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Jt=pa,Ua=[...ka,...ja],Ct=dt.FontAwesomeConfig||{};function $a(t){var e=C.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Va(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Va($a(n));r!=null&&(Ct[a]=r)});const En={styleDefault:"solid",familyDefault:L,cssPrefix:An,replacementClass:On,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ct.familyPrefix&&(Ct.cssPrefix=Ct.familyPrefix);const Ot=f(f({},En),Ct);Ot.autoReplaceSvg||(Ot.observeMutations=!1);const b={};Object.keys(En).forEach(t=>{Object.defineProperty(b,t,{enumerable:!0,set:function(e){Ot[t]=e,Nt.forEach(n=>n(b))},get:function(){return Ot[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){Ot.cssPrefix=t,Nt.forEach(e=>e(b))},get:function(){return Ot.cssPrefix}});dt.FontAwesomeConfig=b;const Nt=[];function Ga(t){return Nt.push(t),()=>{Nt.splice(Nt.indexOf(t),1)}}const ut=le,J={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qa(t){if(!t||!ot)return;const e=C.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=C.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return C.head.insertBefore(e,a),t}const Xa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function It(){let t=12,e="";for(;t-- >0;)e+=Xa[Math.random()*62|0];return e}function St(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function _e(t){return t.classList?St(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Cn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ka(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Cn(t[n]),'" '),"").trim()}function Gt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ee(t){return t.size!==J.size||t.x!==J.x||t.y!==J.y||t.rotate!==J.rotate||t.flipX||t.flipY}function Za(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(i," ").concat(l)},s={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:s}}function Qa(t){let{transform:e,width:n=le,height:a=le,startCentered:r=!1}=t,o="";return r&&vn?o+="translate(".concat(e.x/ut-n/2,"em, ").concat(e.y/ut-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/ut,"em), calc(-50% + ").concat(e.y/ut,"em)) "):o+="translate(".concat(e.x/ut,"em, ").concat(e.y/ut,"em) "),o+="scale(".concat(e.size/ut*(e.flipX?-1:1),", ").concat(e.size/ut*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Ja=`:root, :host {
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
}`;function Nn(){const t=An,e=On,n=b.cssPrefix,a=b.replacementClass;let r=Ja;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let Ve=!1;function te(){b.autoAddCss&&!Ve&&(qa(Nn()),Ve=!0)}var tr={mixout(){return{dom:{css:Nn,insertCss:te}}},hooks(){return{beforeDOMElementCreation(){te()},beforeI2svg(){te()}}}};const rt=dt||{};rt[at]||(rt[at]={});rt[at].styles||(rt[at].styles={});rt[at].hooks||(rt[at].hooks={});rt[at].shims||(rt[at].shims=[]);var tt=rt[at];const In=[],Mn=function(){C.removeEventListener("DOMContentLoaded",Mn),Bt=1,In.map(t=>t())};let Bt=!1;ot&&(Bt=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Bt||C.addEventListener("DOMContentLoaded",Mn));function er(t){ot&&(Bt?setTimeout(t,0):In.push(t))}function jt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Cn(t):"<".concat(e," ").concat(Ka(n),">").concat(a.map(jt).join(""),"</").concat(e,">")}function Ge(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ee=function(e,n,a,r){var o=Object.keys(e),i=o.length,l=n,c,s,u;for(a===void 0?(c=1,u=e[o[0]]):(c=0,u=a);c<i;c++)s=o[c],u=l(u,e[s],s,e);return u};function nr(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function me(t){const e=nr(t);return e.length===1?e[0].toString(16):null}function ar(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function qe(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function pe(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=qe(e);typeof tt.hooks.addPack=="function"&&!a?tt.hooks.addPack(t,qe(e)):tt.styles[t]=f(f({},tt.styles[t]||{}),r),t==="fas"&&pe("fa",e)}const{styles:Mt,shims:rr}=tt,Tn=Object.keys(Pe),or=Tn.reduce((t,e)=>(t[e]=Object.keys(Pe[e]),t),{});let Ce=null,jn={},zn={},Fn={},Ln={},Dn={};function ir(t){return~Ua.indexOf(t)}function sr(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ir(r)?r:null}const Rn=()=>{const t=a=>ee(Mt,(r,o,i)=>(r[i]=ee(o,a,{}),r),{});jn=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=o}),a)),zn=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=o}),a)),Dn=t((a,r,o)=>{const i=r[2];return a[o]=o,i.forEach(l=>{a[l]=o}),a});const e="far"in Mt||b.autoFetchSvg,n=ee(rr,(a,r)=>{const o=r[0];let i=r[1];const l=r[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(a.names[o]={prefix:i,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:i,iconName:l}),a},{names:{},unicodes:{}});Fn=n.names,Ln=n.unicodes,Ce=qt(b.styleDefault,{family:b.familyDefault})};Ga(t=>{Ce=qt(t.styleDefault,{family:b.familyDefault})});Rn();function Ne(t,e){return(jn[t]||{})[e]}function lr(t,e){return(zn[t]||{})[e]}function bt(t,e){return(Dn[t]||{})[e]}function Hn(t){return Fn[t]||{prefix:null,iconName:null}}function fr(t){const e=Ln[t],n=Ne("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mt(){return Ce}const Yn=()=>({prefix:null,iconName:null,rest:[]});function cr(t){let e=L;const n=Tn.reduce((a,r)=>(a[r]="".concat(b.cssPrefix,"-").concat(r),a),{});return wn.forEach(a=>{(t.includes(n[a])||t.some(r=>or[a].includes(r)))&&(e=a)}),e}function qt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=L}=e,a=Ra[n][t];if(n===Vt&&!t)return"fad";const r=$e[n][t]||$e[n][a],o=t in tt.styles?t:null;return r||o||null}function ur(t){let e=[],n=null;return t.forEach(a=>{const r=sr(b.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Xe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Xt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=se.concat(_a),o=Xe(t.filter(d=>r.includes(d))),i=Xe(t.filter(d=>!se.includes(d))),l=o.filter(d=>(a=d,!xn.includes(d))),[c=null]=l,s=cr(o),u=f(f({},ur(i)),{},{prefix:qt(c,{family:s})});return f(f(f({},u),gr({values:t,family:s,styles:Mt,config:b,canonical:u,givenPrefix:a})),dr(n,a,u))}function dr(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?Hn(r):{},i=bt(a,r);return r=o.iconName||i||r,a=o.prefix||a,a==="far"&&!Mt.far&&Mt.fas&&!b.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const mr=wn.filter(t=>t!==L||t!==Vt),pr=Object.keys(ie).filter(t=>t!==L).map(t=>Object.keys(ie[t])).flat();function gr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:i={}}=t,l=n===Vt,c=e.includes("fa-duotone")||e.includes("fad"),s=i.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(c||s||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&mr.includes(n)&&(Object.keys(o).find(m=>pr.includes(m))||i.autoFetchSvg)){const m=ya.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=bt(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=mt()||"fas"),a}class hr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=f(f({},this.definitions[o]||{}),r[o]),pe(o,r[o]);const i=Pe[L][o];i&&pe(i,r[o]),Rn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:i,icon:l}=a[r],c=l[2];e[o]||(e[o]={}),c.length>0&&c.forEach(s=>{typeof s=="string"&&(e[o][s]=l)}),e[o][i]=l}),e}}let Ke=[],kt={};const At={},br=Object.keys(At);function vr(t,e){let{mixoutsTo:n}=e;return Ke=t,kt={},Object.keys(At).forEach(a=>{br.indexOf(a)===-1&&delete At[a]}),Ke.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=r[o][i]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(i=>{kt[i]||(kt[i]=[]),kt[i].push(o[i])})}a.provides&&a.provides(At)}),n}function ge(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(kt[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function yt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(kt[t]||[]).forEach(o=>{o.apply(null,n)})}function pt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return At[t]?At[t].apply(null,e):void 0}function he(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||mt();if(e)return e=bt(n,e)||e,Ge(Wn.definitions,n,e)||Ge(tt.styles,n,e)}const Wn=new hr,yr=()=>{b.autoReplaceSvg=!1,b.observeMutations=!1,yt("noAuto")},xr={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ot?(yt("beforeI2svg",t),pt("pseudoElements2svg",t),pt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,er(()=>{kr({autoReplaceSvgRoot:e}),yt("watch",t)})}},wr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=qt(t[0]);return{prefix:n,iconName:bt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(Ha))){const e=Xt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||mt(),iconName:bt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=mt();return{prefix:e,iconName:bt(e,t)||t}}}},$={noAuto:yr,config:b,dom:xr,parse:wr,library:Wn,findIconDefinition:he,toHtml:jt},kr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=C}=t;(Object.keys(tt.styles).length>0||b.autoFetchSvg)&&ot&&b.autoReplaceSvg&&$.dom.i2svg({node:e})};function Kt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>jt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!ot)return;const n=C.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ar(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:i}=t;if(Ee(i)&&n.found&&!a.found){const{width:l,height:c}=n,s={x:l/c/2,y:.5};r.style=Gt(f(f({},o),{},{"transform-origin":"".concat(s.x+i.x/16,"em ").concat(s.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Or(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const i=o===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:i}),children:a}]}]}function Ie(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:i,title:l,maskId:c,titleId:s,extra:u,watchable:d=!1}=t,{width:m,height:y}=n.found?n:e,k=Oa.includes(a),_=[b.replacementClass,r?"".concat(b.cssPrefix,"-").concat(r):""].filter(M=>u.classes.indexOf(M)===-1).filter(M=>M!==""||!!M).concat(u.classes).join(" ");let S={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:_,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(y)})};const h=k&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/y*16*.0625,"em")}:{};d&&(S.attributes[vt]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(s||It())},children:[l]}),delete S.attributes.title);const v=f(f({},S),{},{prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:o,symbol:i,styles:f(f({},h),u.styles)}),{children:O,attributes:I}=n.found&&e.found?pt("generateAbstractMask",v)||{children:[],attributes:{}}:pt("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=O,v.attributes=I,i?Or(v):Ar(v)}function Ze(t){const{content:e,width:n,height:a,transform:r,title:o,extra:i,watchable:l=!1}=t,c=f(f(f({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(c[vt]="");const s=f({},i.styles);Ee(r)&&(s.transform=Qa({transform:r,startCentered:!0,width:n,height:a}),s["-webkit-transform"]=s.transform);const u=Gt(s);u.length>0&&(c.style=u);const d=[];return d.push({tag:"span",attributes:c,children:[e]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function Sr(t){const{content:e,title:n,extra:a}=t,r=f(f(f({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=Gt(a.styles);o.length>0&&(r.style=o);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:ne}=tt;function be(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Jt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Jt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Jt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Pr={found:!1,width:512,height:512};function _r(t,e){!Sn&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ve(t,e){let n=e;return e==="fa"&&b.styleDefault!==null&&(e=mt()),new Promise((a,r)=>{if(n==="fa"){const o=Hn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&ne[e]&&ne[e][t]){const o=ne[e][t];return a(be(o))}_r(t,e),a(f(f({},Pr),{},{icon:b.showMissingIcons&&t?pt("missingIconAbstract")||{}:{}}))})}const Qe=()=>{},ye=b.measurePerformance&&Rt&&Rt.mark&&Rt.measure?Rt:{mark:Qe,measure:Qe},Et='FA "6.7.2"',Er=t=>(ye.mark("".concat(Et," ").concat(t," begins")),()=>Bn(t)),Bn=t=>{ye.mark("".concat(Et," ").concat(t," ends")),ye.measure("".concat(Et," ").concat(t),"".concat(Et," ").concat(t," begins"),"".concat(Et," ").concat(t," ends"))};var Me={begin:Er,end:Bn};const Yt=()=>{};function Je(t){return typeof(t.getAttribute?t.getAttribute(vt):null)=="string"}function Cr(t){const e=t.getAttribute?t.getAttribute(Oe):null,n=t.getAttribute?t.getAttribute(Se):null;return e&&n}function Nr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function Ir(){return b.autoReplaceSvg===!0?Wt.replace:Wt[b.autoReplaceSvg]||Wt.replace}function Mr(t){return C.createElementNS("http://www.w3.org/2000/svg",t)}function Tr(t){return C.createElement(t)}function Un(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Mr:Tr}=e;if(typeof t=="string")return C.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(Un(o,{ceFn:n}))}),a}function jr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Wt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Un(n),e)}),e.getAttribute(vt)===null&&b.keepOriginalSource){let n=C.createComment(jr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~_e(e).indexOf(b.replacementClass))return Wt.replace(t);const a=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,l)=>(l===b.replacementClass||l.match(a)?i.toSvg.push(l):i.toNode.push(l),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>jt(o)).join(`
`);e.setAttribute(vt,""),e.innerHTML=r}};function tn(t){t()}function $n(t,e){const n=typeof e=="function"?e:Yt;if(t.length===0)n();else{let a=tn;b.mutateApproach===La&&(a=dt.requestAnimationFrame||tn),a(()=>{const r=Ir(),o=Me.begin("mutate");t.map(r),o(),n()})}}let Te=!1;function Vn(){Te=!0}function xe(){Te=!1}let Ut=null;function en(t){if(!Ye||!b.observeMutations)return;const{treeCallback:e=Yt,nodeCallback:n=Yt,pseudoElementsCallback:a=Yt,observeMutationsRoot:r=C}=t;Ut=new Ye(o=>{if(Te)return;const i=mt();St(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Je(l.addedNodes[0])&&(b.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&b.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&Je(l.target)&&~Ba.indexOf(l.attributeName))if(l.attributeName==="class"&&Cr(l.target)){const{prefix:c,iconName:s}=Xt(_e(l.target));l.target.setAttribute(Oe,c||i),s&&l.target.setAttribute(Se,s)}else Nr(l.target)&&n(l.target)})}),ot&&Ut.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function zr(){Ut&&Ut.disconnect()}function Fr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),i=o[0],l=o.slice(1);return i&&l.length>0&&(a[i]=l.join(":").trim()),a},{})),n}function Lr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=Xt(_e(t));return r.prefix||(r.prefix=mt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=lr(r.prefix,t.innerText)||Ne(r.prefix,me(t.innerText))),!r.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Dr(t){const e=St(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(a||It()):(e["aria-hidden"]="true",e.focusable="false")),e}function Rr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:J,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Lr(t),o=Dr(t),i=ge("parseNodeAttributes",{},t);let l=e.styleParser?Fr(t):[];return f({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:J,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},i)}const{styles:Hr}=tt;function Gn(t){const e=b.autoReplaceSvg==="nest"?nn(t,{styleParser:!1}):nn(t);return~e.extra.classes.indexOf(_n)?pt("generateLayersText",t,e):pt("generateSvgReplacementMutation",t,e)}function Yr(){return[...wa,...se]}function an(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ot)return Promise.resolve();const n=C.documentElement.classList,a=u=>n.add("".concat(Ue,"-").concat(u)),r=u=>n.remove("".concat(Ue,"-").concat(u)),o=b.autoFetchSvg?Yr():xn.concat(Object.keys(Hr));o.includes("fa")||o.push("fa");const i=[".".concat(_n,":not([").concat(vt,"])")].concat(o.map(u=>".".concat(u,":not([").concat(vt,"])"))).join(", ");if(i.length===0)return Promise.resolve();let l=[];try{l=St(t.querySelectorAll(i))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const c=Me.begin("onTree"),s=l.reduce((u,d)=>{try{const m=Gn(d);m&&u.push(m)}catch(m){Sn||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,d)=>{Promise.all(s).then(m=>{$n(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(m=>{c(),d(m)})})}function Wr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gn(t).then(n=>{n&&$n([n],e)})}function Br(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:he(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:he(r||{})),t(a,f(f({},n),{},{mask:r}))}}const Ur=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=J,symbol:a=!1,mask:r=null,maskId:o=null,title:i=null,titleId:l=null,classes:c=[],attributes:s={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:y}=t;return Kt(f({type:"icon"},t),()=>(yt("beforeDOMElementCreation",{iconDefinition:t,params:e}),b.autoA11y&&(i?s["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(l||It()):(s["aria-hidden"]="true",s.focusable="false")),Ie({icons:{main:be(y),mask:r?be(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:f(f({},J),n),symbol:a,title:i,maskId:o,titleId:l,extra:{attributes:s,styles:u,classes:c}})))};var $r={mixout(){return{icon:Br(Ur)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=an,t.nodeCallback=Wr,t}}},provides(t){t.i2svg=function(e){const{node:n=C,callback:a=()=>{}}=e;return an(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:i,transform:l,symbol:c,mask:s,maskId:u,extra:d}=n;return new Promise((m,y)=>{Promise.all([ve(a,i),s.iconName?ve(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[_,S]=k;m([e,Ie({icons:{main:_,mask:S},prefix:i,iconName:a,transform:l,symbol:c,maskId:u,title:r,titleId:o,extra:d,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:i}=e;const l=Gt(i);l.length>0&&(a.style=l);let c;return Ee(o)&&(c=pt("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Vr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Kt({type:"layer"},()=>{yt("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Gr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return Kt({type:"counter",content:t},()=>(yt("beforeDOMElementCreation",{content:t,params:e}),Sr({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(b.cssPrefix,"-layers-counter"),...a]}})))}}}},qr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=J,title:a=null,classes:r=[],attributes:o={},styles:i={}}=e;return Kt({type:"text",content:t},()=>(yt("beforeDOMElementCreation",{content:t,params:e}),Ze({content:t,transform:f(f({},J),n),title:a,extra:{attributes:o,styles:i,classes:["".concat(b.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let i=null,l=null;if(vn){const c=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/c,l=s.height/c}return b.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Ze({content:e.innerHTML,width:i,height:l,transform:r,title:a,extra:o,watchable:!0})])}}};const Xr=new RegExp('"',"ug"),rn=[1105920,1112319],on=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),va),za),Ea),we=Object.keys(on).reduce((t,e)=>(t[e.toLowerCase()]=on[e],t),{}),Kr=Object.keys(we).reduce((t,e)=>{const n=we[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Zr(t){const e=t.replace(Xr,""),n=ar(e,0),a=n>=rn[0]&&n<=rn[1],r=e.length===2?e[0]===e[1]:!1;return{value:me(r?e[0]:e),isSecondary:a||r}}function Qr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(we[n]||{})[r]||Kr[n]}function sn(t,e){const n="".concat(Fa).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=St(t.children).filter(m=>m.getAttribute(fe)===e)[0],l=dt.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),s=c.match(Ya),u=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(i&&!s)return t.removeChild(i),a();if(s&&d!=="none"&&d!==""){const m=l.getPropertyValue("content");let y=Qr(c,u);const{value:k,isSecondary:_}=Zr(m),S=s[0].startsWith("FontAwesome");let h=Ne(y,k),v=h;if(S){const O=fr(k);O.iconName&&O.prefix&&(h=O.iconName,y=O.prefix)}if(h&&!_&&(!i||i.getAttribute(Oe)!==y||i.getAttribute(Se)!==v)){t.setAttribute(n,v),i&&t.removeChild(i);const O=Rr(),{extra:I}=O;I.attributes[fe]=e,ve(h,y).then(M=>{const j=Ie(f(f({},O),{},{icons:{main:M,mask:Yn()},prefix:y,iconName:v,extra:I,watchable:!0})),H=C.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(H,t.firstChild):t.appendChild(H),H.outerHTML=j.map(E=>jt(E)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Jr(t){return Promise.all([sn(t,"::before"),sn(t,"::after")])}function to(t){return t.parentNode!==document.head&&!~Da.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fe)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ln(t){if(ot)return new Promise((e,n)=>{const a=St(t.querySelectorAll("*")).filter(to).map(Jr),r=Me.begin("searchPseudoElements");Vn(),Promise.all(a).then(()=>{r(),xe(),e()}).catch(()=>{r(),xe(),n()})})}var eo={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ln,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=C}=e;b.searchPseudoElements&&ln(n)}}};let fn=!1;var no={mixout(){return{dom:{unwatch(){Vn(),fn=!0}}}},hooks(){return{bootstrap(){en(ge("mutationObserverCallbacks",{}))},noAuto(){zr()},watch(t){const{observeMutationsRoot:e}=t;fn?xe():en(ge("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const cn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let i=r.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var ao={mixout(){return{parse:{transform:t=>cn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=cn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const i={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(s)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:i,inner:u,path:d};return{tag:"g",attributes:f({},m.outer),children:[{tag:"g",attributes:f({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),m.path)}]}]}}}};const ae={x:0,y:0,width:"100%",height:"100%"};function un(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ro(t){return t.tag==="g"?t.children:[t]}var oo={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Xt(n.split(" ").map(r=>r.trim())):Yn();return a.prefix||(a.prefix=mt()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:i,transform:l}=e;const{width:c,icon:s}=r,{width:u,icon:d}=o,m=Za({transform:l,containerWidth:u,iconWidth:c}),y={tag:"rect",attributes:f(f({},ae),{},{fill:"white"})},k=s.children?{children:s.children.map(un)}:{},_={tag:"g",attributes:f({},m.inner),children:[un(f({tag:s.tag,attributes:f(f({},s.attributes),m.path)},k))]},S={tag:"g",attributes:f({},m.outer),children:[_]},h="mask-".concat(i||It()),v="clip-".concat(i||It()),O={tag:"mask",attributes:f(f({},ae),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,S]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:ro(d)},O]};return n.push(I,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},ae)}),{children:n,attributes:a}}}},io={provides(t){let e=!1;dt.matchMedia&&(e=dt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=f(f({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:f(f({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:f(f({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:f(f({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:f(f({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},so={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},lo=[tr,$r,Vr,Gr,qr,eo,no,ao,oo,io,so];vr(lo,{mixoutsTo:$});$.noAuto;$.config;$.library;$.dom;const ke=$.parse;$.findIconDefinition;$.toHtml;const fo=$.icon;$.layer;$.text;$.counter;function dn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function nt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?dn(Object(n),!0).forEach(function(a){W(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function co(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function uo(t){var e=co(t,"string");return typeof e=="symbol"?e:e+""}function $t(t){"@babel/helpers - typeof";return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$t(t)}function W(t,e,n){return e=uo(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mo(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function po(t,e){if(t==null)return{};var n=mo(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qn={exports:{}};(function(t){(function(e){var n=function(h,v,O){if(!s(v)||d(v)||m(v)||y(v)||c(v))return v;var I,M=0,j=0;if(u(v))for(I=[],j=v.length;M<j;M++)I.push(n(h,v[M],O));else{I={};for(var H in v)Object.prototype.hasOwnProperty.call(v,H)&&(I[h(H,O)]=n(h,v[H],O))}return I},a=function(h,v){v=v||{};var O=v.separator||"_",I=v.split||/(?=[A-Z])/;return h.split(I).join(O)},r=function(h){return k(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(v,O){return O?O.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},o=function(h){var v=r(h);return v.substr(0,1).toUpperCase()+v.substr(1)},i=function(h,v){return a(h,v).toLowerCase()},l=Object.prototype.toString,c=function(h){return typeof h=="function"},s=function(h){return h===Object(h)},u=function(h){return l.call(h)=="[object Array]"},d=function(h){return l.call(h)=="[object Date]"},m=function(h){return l.call(h)=="[object RegExp]"},y=function(h){return l.call(h)=="[object Boolean]"},k=function(h){return h=h-0,h===h},_=function(h,v){var O=v&&"process"in v?v.process:v;return typeof O!="function"?h:function(I,M){return O(I,h,M)}},S={camelize:r,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(h,v){return n(_(r,v),h)},decamelizeKeys:function(h,v){return n(_(i,v),h,v)},pascalizeKeys:function(h,v){return n(_(o,v),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=S:e.humps=S})(go)})(qn);var ho=qn.exports,bo=["class","style"];function vo(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=ho.camelize(n.slice(0,a)),o=n.slice(a+1).trim();return e[r]=o,e},{})}function yo(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Xn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return Xn(c)}),r=Object.keys(t.attributes||{}).reduce(function(c,s){var u=t.attributes[s];switch(s){case"class":c.class=yo(u);break;case"style":c.style=vo(u);break;default:c.attrs[s]=u}return c},{attrs:{},class:{},style:{}});n.class;var o=n.style,i=o===void 0?{}:o,l=po(n,bo);return aa(t.tag,nt(nt(nt({},e),{},{class:r.class,style:nt(nt({},r.style),i)},r.attrs),l),a)}var Kn=!1;try{Kn=!0}catch{}function xo(){if(!Kn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function re(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?W({},t,e):{}}function wo(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},W(W(W(W(W(W(W(W(W(W(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),W(W(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function mn(t){if(t&&$t(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ke.icon)return ke.icon(t);if(t===null)return null;if($t(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var oe=ea({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=xt(function(){return mn(e.icon)}),o=xt(function(){return re("classes",wo(e))}),i=xt(function(){return re("transform",typeof e.transform=="string"?ke.transform(e.transform):e.transform)}),l=xt(function(){return re("mask",mn(e.mask))}),c=xt(function(){return fo(r.value,nt(nt(nt(nt({},o.value),i.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});na(c,function(u){if(!u)return xo("Could not find one or more icon(s)",r.value,l.value)},{immediate:!0});var s=xt(function(){return c.value?Xn(c.value.abstract[0],{},a):null});return function(){return s.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ko={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Ao={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},Oo={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},So={class:"fixed top-64 w-screen",style:{"z-index":"50","pointer-events":"none"}},Po={class:"xl:w-[5%] sm:w-[6%] w-[10%] sm:ml-[95%] ml-[90%]"},_o={class:"bg-azul w-full py-4 sm:rounded-tl-xl sm:rounded-bl-xl rounded-tl-md rounded-bl-md",style:{"pointer-events":"auto"}},Eo={class:"w-full py-2 ps-8 flex bg-[#3366cc]"},Co={class:"flex w-5/6 sm:w-[20%] md:w-[10%] z-20",href:"https://www.gov.co/",target:"_blank"},No=["src"],Io={class:"mx-auto px-4 sm:px-6 lg:px-8"},Mo={class:"flex w-full justify-between items-center"},To={class:"flex-shrink-0 sm:w-1/4 w-3/6 p-4"},jo={href:"/Welcome",class:"text-white text-2xl font-semibold"},zo=["src"],Fo=["src"],Lo={class:"hidden md:block"},Do={class:"flex space-x-4"},Ro=["href"],Ho=["href"],Yo={class:"md:hidden z-20"},Wo={key:0,class:"md:hidden"},Bo={class:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},Uo=["href"],$o=["href"],Vo={class:"flex-1 overflow-y-auto overflow-x-hidden bg-light text-black"},Go={class:"container mx-auto flex flex-wrap items-center justify-between"},qo={class:"flex items-center flex-shrink-0 mr-6 w-1/6"},Xo={href:"/Welcome",class:"w-full"},Ko=["src"],Zo=["src"],Qo={class:"flex justify-center items-center space-x-4 text-primary"},Jo={href:"https://www.instagram.com/alcaldiadepereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},ti={href:"https://www.facebook.com/AlcaldiaDePereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},ei={href:"https://www.youtube.com/channel/UCAFZZcG6RI0gw5DkrT6kMSQ/videos",target:"_blank",class:"hover:text-parrafo transition duration-300"},ni={href:"#inicio",class:"text-primary hover:text-parrafo transition duration-300"},ai={class:"w-full py-4 ps-8 flex bg-[#3366cc]"},ri={class:"flex w-5/6 sm:w-[25%] md:w-[15%]",href:"https://www.gov.co/",target:"_blank"},oi=["src"],ii={__name:"PageLayout",props:{home:{type:Boolean,default:!1}},setup(t){const e=Zn.useToast();la.init();const n=Ft(Lt().props.accesibilidad.contraste),a=Ft(Lt().props.accesibilidad.letra),r=Ft(""),o=Ft(!1),i=()=>{n.value=!n.value,Lt().props.accesibilidad.contraste=n.value},l=(c,s)=>{c>=2?(a.value=2,e.open({message:"Limite de aumento de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):c<=-2?(a.value=-2,e.open({message:"Limite de reducción de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):a.value=c,r.value=s,Lt().props.accesibilidad.letra=a.value};return(c,s)=>{const u=ra("tooltip");return R(),D("div",{class:G(["flex flex-col overflow-x-hidden bg-option1",{"!bg-black":n.value}])},[g("div",So,[g("div",Po,[g("div",_o,[wt((R(),D("button",{onClick:i,class:G(["flex w-auto py-2 lg:px-4 px-2",{"bg-[#3366cc]":n.value}])},s[4]||(s[4]=[g("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512"},[g("path",{d:"M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"})])],-1)]),2)),[[u,{value:"Contraste",autoHide:!1},void 0,{center:!0}]]),wt((R(),D("button",{onClick:s[0]||(s[0]=d=>l(a.value-1,"reducir")),class:G(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="reducir"&&!n.value}])},s[5]||(s[5]=[g("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[g("p",{class:"font-extrabold text-xs lg:text-base"},[_t("A"),g("sup",null,"-")])],-1)]),2)),[[u,{value:"Reducir letra",autoHide:!1},void 0,{center:!0}]]),wt((R(),D("button",{onClick:s[1]||(s[1]=d=>l(0,"default")),class:G(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="default"&&!n.value}])},s[6]||(s[6]=[g("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[g("p",{class:"font-extrabold text-xs lg:text-base"},[_t("A"),g("sup",null,"n")])],-1)]),2)),[[u,{value:"Restablecer letra",autoHide:!1},void 0,{center:!0}]]),wt((R(),D("button",{onClick:s[2]||(s[2]=d=>l(a.value+1,"aumentar")),class:G(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="aumentar"&&!n.value}])},s[7]||(s[7]=[g("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[g("p",{class:"font-extrabold text-xs lg:text-base"},[_t("A"),g("sup",null,"+")])],-1)]),2)),[[u,{value:"Aumentar letra",autoHide:!1},void 0,{center:!0}]])])])]),g("header",Eo,[g("a",Co,[g("figure",null,[g("img",{class:"w-full sm:w-5/6",src:U(Le),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,No),s[8]||(s[8]=g("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo del gobierno actual de colombia ",-1))])])]),g("nav",{class:G(["w-full h-full bg-option2 py-2 text-xl sm:text-2xl text-parrafo z-20",[t.home?"":"hidden",{"!text-yellow-200 font-bold !bg-black":n.value},a.value==-2?"!text-base !sm:text-lg":a.value==-1?"!text-lg !sm:text-xl":a.value==1?"!text-2xl !sm:text-4xl":a.value==2?"!text-4xl !sm:text-6xl":""]])},[g("div",Io,[g("div",Mo,[g("div",To,[g("a",jo,[g("figure",null,[n.value?(R(),D("img",{key:0,class:"w-full sm:w-5/6",src:U(Fe),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,zo)):(R(),D("img",{key:1,class:"w-full sm:w-5/6",src:U(ze),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,Fo)),s[9]||(s[9]=g("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),g("div",Lo,[g("ul",Do,[g("li",null,[wt((R(),D("a",{href:c.route("register"),class:G([[{underline:c.route().current("register")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},s[10]||(s[10]=[_t("Registro")]),10,Ro)),[[u,{value:"Registro de ingreso al punto",autoHide:!1},void 0,{bottom:!0}]])]),g("li",null,[c.$page.props.auth.user?wt((R(),D("a",{key:0,href:c.route("dashboard"),class:G([[{underline:c.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},s[11]||(s[11]=[_t("Dashboard")]),10,Ho)),[[u,{value:"regresar al dashboard",autoHide:!1},void 0,{bottom:!0}]]):Qt("",!0)])])]),g("div",Yo,[g("button",{class:G(["text-parrafo hover:text-secondary focus:outline-none",[{"!text-yellow-200 font-bold":n.value}]]),onClick:s[3]||(s[3]=d=>o.value=!o.value)},s[12]||(s[12]=[g("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]),2)])])]),o.value?(R(),D("div",Wo,[g("ul",Bo,[g("li",null,[g("a",{href:c.route("register"),class:G([[{underline:c.route().current("register")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Registro",10,Uo)]),g("li",null,[c.$page.props.auth.user?(R(),D("a",{key:0,href:c.route("dashboard"),class:G([[{underline:c.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Dashboard",10,$o)):Qt("",!0)])])])):Qt("",!0)],2),g("main",Vo,[oa(c.$slots,"default",{},void 0,!0)]),g("footer",{class:G(["px-2 bg-option2/90 text-parrafo flex flex-col py-6",{"!bg-black !text-white":n.value}])},[g("div",Go,[g("div",qo,[g("a",Xo,[g("figure",null,[n.value?(R(),D("img",{key:0,class:"w-full",src:U(Fe),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,Ko)):(R(),D("img",{key:1,class:"w-full",src:U(ze),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,Zo)),s[13]||(s[13]=g("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),g("div",Qo,[g("a",Jo,[Dt(U(oe),{icon:U(ko),size:"xl"},null,8,["icon"])]),g("a",ti,[Dt(U(oe),{icon:U(Ao),size:"xl"},null,8,["icon"])]),g("a",ei,[Dt(U(oe),{icon:U(Oo),size:"xl"},null,8,["icon"])])]),g("div",null,[g("a",ni,[Dt(U(ia),{class:"w-12 animate-bounce"})])])]),s[14]||(s[14]=g("div",{class:"container px-4 mt-8"},[g("ul",{class:"custom-list space-y-2"})],-1))],2),g("div",ai,[g("a",ri,[g("figure",null,[g("img",{class:"w-full sm:w-5/6",src:U(Le),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,oi),s[15]||(s[15]=g("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo del gobierno actual de colombia ",-1))])])])],2)}}},ci=Qn(ii,[["__scopeId","data-v-b00b6560"]]);function ui(t,e){return R(),D("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})])}export{la as A,ci as P,ui as r};
