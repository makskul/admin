import{m as L,f as R,V as U}from"./VSelectionControl.e46a20e1.js";import{m as z,u as D,f as M,a as N}from"./VInput.b6d87e4b.js";import{u as X,L as Y}from"./position.da7ae5de.js";import{a3 as Z,X as d,Y as c,ad as j,Z as q,ax as E,k as G,p as t,C as v}from"./index.add429ee.js";import{a as H}from"./VBtn.b8c8f171.js";const te=Z({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...z(),...L()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,m){let{attrs:f,slots:a}=m;const o=d(e,"indeterminate"),u=d(e,"modelValue"),{loaderClasses:h}=X(e),{isFocused:V,focus:C,blur:g}=D(e),w=c(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),k=j(),p=c(()=>e.id||`switch-${k}`);function S(){o.value&&(o.value=!1)}return q(()=>{const[_,x]=E(f),[y,J]=M(e),[P,K]=R(e),r=G();function b(){var l,n;(l=r.value)==null||(n=l.input)==null||n.click()}return t(N,v({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":o.value},h.value]},_,y,{id:p.value,focused:V.value}),{...a,default:l=>{let{id:n,isDisabled:A,isReadonly:B,isValid:$}=l;return t(U,v({ref:r},P,{modelValue:u.value,"onUpdate:modelValue":[i=>u.value=i,S],id:n.value,type:"checkbox","aria-checked":o.value?"mixed":void 0,disabled:A.value,readonly:B.value,onFocus:C,onBlur:g},x),{...a,default:()=>t("div",{class:"v-switch__track",onClick:b},null),input:i=>{let{textColorClasses:I,textColorStyles:F}=i;return t("div",{class:["v-switch__thumb",I.value],style:F.value},[e.loading&&t(Y,{name:"v-switch",active:!0,color:$.value===!1?void 0:w.value},{default:s=>a.loader?a.loader(s):t(H,{active:s.isActive,color:s.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}});export{te as V};
