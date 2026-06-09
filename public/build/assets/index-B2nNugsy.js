import{ax as p,H as a,l as s,f as c,o as u,at as f,m as x,B as b,p as l,c as m,ay as v}from"./app-C8s7-d7c.js";import{c as g}from"./index-DveHLNK8.js";import{s as y}from"./index-xOXtWXOc.js";var h={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=p()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function k(t,e,n,i,d,o){return o.inline?a(t.$slots,"default",{key:0}):d.mounted?(u(),s(f,{key:1,to:n.appendTo},[a(t.$slots,"default")],8,["to"])):c("",!0)}h.render=k;var $=x`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`,w={root:function(e){var n=e.instance,i=e.props;return["p-inputtext p-component",{"p-filled":n.$filled,"p-inputtext-sm p-inputfield-sm":i.size==="small","p-inputtext-lg p-inputfield-lg":i.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-inputtext-fluid":n.$fluid}]}},P=b.extend({name:"inputtext",style:$,classes:w}),S={name:"BaseInputText",extends:y,style:P,provide:function(){return{$pcInputText:this,$parentInstance:this}}};function r(t){"@babel/helpers - typeof";return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}function I(t,e,n){return(e=z(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function z(t){var e=B(t,"string");return r(e)=="symbol"?e:e+""}function B(t,e){if(r(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(r(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var T={name:"InputText",extends:S,inheritAttrs:!1,methods:{onInput:function(e){this.writeValue(e.target.value,e)}},computed:{attrs:function(){return l(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return g(I({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},j=["value","name","disabled","aria-invalid","data-p"];function E(t,e,n,i,d,o){return u(),m("input",l({type:"text",class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.$invalid||void 0,"data-p":o.dataP,onInput:e[0]||(e[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},o.attrs),null,16,j)}T.render=E;var V=v();export{V as O,T as a,h as s};
