import{W as x,X as B,aB as O,al as U,R as q,ac as F,ad as $,a1 as o,af as E,aq as L,ai as a,a0 as R,p as v,aa as M,k as S,az as z,a6 as N,a7 as W,A as X,C as P,aj as H,ae as J,au as _,an as K,aP as h}from"./index.467cdc2d.js";import{m as Q,R as Y,c as Z}from"./router.d66206d8.js";import{V as p}from"./VInput.d7ae850d.js";const D=Symbol.for("vuetify:selection-control-group"),G=x({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:B,trueIcon:B,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:O},...U(),...Q()},"v-selection-control-group"),ue=q({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...G()},emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:f}=u;const l=F(e,"modelValue"),i=$(),c=o(()=>e.id||`v-selection-control-group-${i}`),t=o(()=>e.name||c.value);return E(D,{modelValue:l}),L({[e.defaultsTarget]:{color:a(e,"color"),disabled:a(e,"disabled"),density:a(e,"density"),error:a(e,"error"),inline:a(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:t,falseIcon:a(e,"falseIcon"),trueIcon:a(e,"trueIcon"),readonly:a(e,"readonly"),ripple:a(e,"ripple"),type:a(e,"type"),valueComparator:a(e,"valueComparator")}}),R(()=>{var r;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline}],"aria-labelled-by":e.type==="radio"?c.value:void 0,role:e.type==="radio"?"radiogroup":void 0},[(r=f.default)==null?void 0:r.call(f)])}),{}}}),ee=x({label:String,trueValue:null,falseValue:null,value:null,...G()},"v-selection-control");function le(e){const u=J(D,void 0),{densityClasses:f}=Z(e),l=F(e,"modelValue"),i=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),c=o(()=>e.falseValue!==void 0?e.falseValue:!1),t=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),r=o({get(){const n=u?u.modelValue.value:l.value;return t.value?n.some(s=>e.valueComparator(s,i.value)):e.valueComparator(n,i.value)},set(n){if(e.readonly)return;const s=n?i.value:c.value;let d=s;t.value&&(d=n?[..._(l.value),s]:_(l.value).filter(V=>!e.valueComparator(V,i.value))),u?u.modelValue.value=d:l.value=d}}),{textColorClasses:y,textColorStyles:C}=K(o(()=>r.value&&!e.error&&!e.disabled?e.color:void 0)),b=o(()=>r.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:f,trueValue:i,falseValue:c,model:r,textColorClasses:y,textColorStyles:C,icon:b}}const ae=M()({name:"VSelectionControl",directives:{Ripple:Y},inheritAttrs:!1,props:ee(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:f,slots:l}=u;const{densityClasses:i,icon:c,model:t,textColorClasses:r,textColorStyles:y,trueValue:C}=le(e),b=$(),n=o(()=>e.id||`input-${b}`),s=S(!1),d=S(!1),V=S();function g(m){s.value=!0,(!h||h&&m.target.matches(":focus-visible"))&&(d.value=!0)}function I(){s.value=!1,d.value=!1}function T(m){t.value=m.target.checked}return R(()=>{var m,k;const A=l.label?l.label({label:e.label,props:{for:n.value}}):e.label,[w,j]=z(f);return v("div",P({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":d.value,"v-selection-control--inline":e.inline},i.value]},w),[v("div",{class:["v-selection-control__wrapper",r.value],style:y.value},[(m=l.default)==null?void 0:m.call(l),N(v("div",{class:["v-selection-control__input"]},[c.value&&v(X,{key:"icon",icon:c.value},null),v("input",P({ref:V,checked:t.value,disabled:e.disabled,id:n.value,onBlur:I,onFocus:g,onInput:T,"aria-readonly":e.readonly,type:e.type,value:C.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},j),null),(k=l.input)==null?void 0:k.call(l,{model:t,textColorClasses:r,textColorStyles:y,props:{onFocus:g,onBlur:I,id:n.value}})]),[[W("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),A&&v(p,{for:n.value,clickable:!0},{default:()=>[A]})])}),{isFocused:s,input:V}}});function ie(e){return H(e,Object.keys(ae.props))}export{ae as V,G as a,ue as b,ie as f,ee as m};