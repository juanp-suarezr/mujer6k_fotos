import{m as E,B as $,c as l,o as i,H as j,l as C,f as k,p as v,t as c,n as N,y as q,i as _,j as V,a as u,u as y,Z as L,w as h,b as e,h as z,a0 as S,C as K,a1 as U,a2 as D,d as x,F as w,x as B,N as F}from"./app-C8s7-d7c.js";import{_ as I}from"./AuthenticatedLayout-Bqqa8IOW.js";import{_ as O}from"./PrimaryLink-Du443-8Y.js";import{_ as T}from"./Pagination-BfGWTLPL.js";import{_ as M}from"./SecondaryLink-C9ERk0ky.js";import{s as R,c as Z}from"./index-DveHLNK8.js";import"./logo_white-DE4Vqejm.js";var H=E`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,G={root:function(a){var o=a.props;return["p-avatar p-component",{"p-avatar-image":o.image!=null,"p-avatar-circle":o.shape==="circle","p-avatar-lg":o.size==="large","p-avatar-xl":o.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},J=$.extend({name:"avatar",style:H,classes:G}),Q={name:"BaseAvatar",extends:R,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:J,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function f(t){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},f(t)}function P(t,a,o){return(a=W(a))in t?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o,t}function W(t){var a=X(t,"string");return f(a)=="symbol"?a:a+""}function X(t,a){if(f(t)!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var n=o.call(t,a);if(f(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}var A={name:"Avatar",extends:Q,inheritAttrs:!1,emits:["error"],methods:{onError:function(a){this.$emit("error",a)}},computed:{dataP:function(){return Z(P(P({},this.shape,this.shape),this.size,this.size))}}},Y=["aria-labelledby","aria-label","data-p"],tt=["data-p"],et=["data-p"],at=["src","alt","data-p"];function rt(t,a,o,n,m,d){return i(),l("div",v({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":d.dataP}),[j(t.$slots,"default",{},function(){return[t.label?(i(),l("span",v({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":d.dataP}),c(t.label),17,tt)):t.$slots.icon?(i(),C(q(t.$slots.icon),{key:1,class:N(t.cx("icon"))},null,8,["class"])):t.icon?(i(),l("span",v({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":d.dataP}),null,16,et)):t.image?(i(),l("img",v({key:3,src:t.image,alt:t.ariaLabel,onError:a[0]||(a[0]=function(){return d.onError&&d.onError.apply(d,arguments)})},t.ptm("image"),{"data-p":d.dataP}),null,16,at)):k("",!0)]})],16,Y)}A.render=rt;const st={class:"inline-block min-w-full overflow-hidden mb-3 grid md:grid-cols-3 gap-4"},ot={class:"..."},it={class:"relative"},lt={class:"text-right p-4"},nt={class:"flex flex-col overflow-x-auto"},dt={class:"inline-block rounded-lg shadow"},pt={class:"inline-block min-w-full py-2"},ut={class:"overflow-x-auto"},ct={class:"min-w-full whitespace-no-wrap"},gt={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},bt={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},ft={class:"text-gray-900 whitespace-no-wrap"},mt={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},vt={class:"text-gray-900 whitespace-no-wrap"},yt={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},ht={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},xt={key:0,class:"bg-lime-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded"},wt={key:1,class:"bg-red-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-500"},kt={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},_t={class:"flex flex-col items-center border-t bg-white px-5 py-5 xs:flex-row xs:justify-between"},jt={__name:"Index",props:{users:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})}},setup(t){const a=t;let o=_(a.filters.search),n=_(a.filters.estado_users??"");const m=()=>{F.get("/users",{search:o.value,estado_users:n.value},{preserveState:!0,replace:!0})},d=function(p){let r=p.split(" "),s="",g=0;for(var b=0;b<r.length&&g<2;b++)r[b].length>0&&r[b]!==""&&(s+=r[b][0],g++);return s};return V(o,p=>{console.log("Valor de búsqueda actualizado:",p)}),(p,r)=>(i(),l(w,null,[u(y(L),{title:"Usuarios"}),u(I,null,{header:h(()=>r[2]||(r[2]=[x(" Usuarios ")])),default:h(()=>[e("div",st,[e("div",null,[z(e("select",{id:"estado_users",name:"estado_users","onUpdate:modelValue":r[0]||(r[0]=s=>S(n)?n.value=s:n=s),onChange:m,class:"block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"},r[3]||(r[3]=[e("option",{selected:"",value:""},"Filtrar por estado",-1),e("option",{value:"Activo"},"Activo",-1),e("option",{value:"Bloqueado"},"Bloqueado",-1)]),544),[[K,y(n)]])]),e("div",ot,[r[5]||(r[5]=e("label",{for:"default-search",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"},"Search",-1)),e("div",it,[r[4]||(r[4]=e("div",{class:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"},[e("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1)),z(e("input",{type:"search",onKeydown:U(m,["enter"]),"onUpdate:modelValue":r[1]||(r[1]=s=>S(o)?o.value=s:o=s),id:"default-search",class:"block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:border-transparent",placeholder:"Busqueda de usuarios",required:""},null,544),[[D,y(o)]]),e("button",{type:"submit",onClick:m,class:"text-white absolute end-2.5 bottom-2.5 bg-sky-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Buscar")])]),e("div",lt,[u(O,{href:p.route("users.create")},{default:h(()=>r[6]||(r[6]=[x(" Agregar ")])),_:1,__:[6]},8,["href"])])]),e("div",nt,[e("div",dt,[e("div",pt,[e("div",ut,[e("table",ct,[r[8]||(r[8]=e("thead",null,[e("tr",{class:"border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"},[e("th",{colspan:"2",class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Nombre "),e("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Email "),e("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Roles "),e("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Estado "),e("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Acciones ")])],-1)),e("tbody",null,[(i(!0),l(w,null,B(t.users.data,s=>(i(),l("tr",{key:s.id,class:"text-gray-700"},[e("td",gt,[u(y(A),{label:d(s.name),class:"bg-indigo-200 text-indigo-800 text-xl",size:"large",shape:"circle"},null,8,["label"])]),e("td",bt,[e("p",ft,c(s.name),1)]),e("td",mt,[e("p",vt,c(s.email),1)]),e("td",yt,[(i(!0),l(w,null,B(s.roles,g=>(i(),l("span",{key:g.id,class:"bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded"},c(g.name),1))),128))]),e("td",ht,[s.estado=="Activo"?(i(),l("span",xt,c(s.estado),1)):k("",!0),s.estado=="Bloqueado"?(i(),l("span",wt,c(s.estado),1)):k("",!0)]),e("td",kt,[u(M,{href:p.route("users.edit",s.id)},{default:h(()=>r[7]||(r[7]=[x(" Editar ")])),_:2,__:[7]},1032,["href"])])]))),128))])])])])])]),e("div",_t,[u(T,{links:t.users.links},null,8,["links"])])]),_:1})],64))}};export{jt as default};
