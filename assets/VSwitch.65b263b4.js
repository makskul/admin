import{m as L,f as D,V as R}from"./VSelectionControl.70166856.js";import{m as U,u as z,f as M,a as N}from"./VInput.72253e4c.js";import{u as Y,L as Z}from"./position.b9276cfd.js";import{a4 as j,Y as d,Z as c,ae as q,$ as E,ay as G,k as H,p as t,D as v}from"./index.218d9c70.js";import{a as J}from"./VBtn.500f4230.js";const te=j({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...U(),...L()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,m){let{attrs:f,slots:a}=m;const o=d(e,"indeterminate"),u=d(e,"modelValue"),{loaderClasses:h}=Y(e),{isFocused:V,focus:C,blur:g}=z(e),w=c(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),k=q(),p=c(()=>e.id||`switch-${k}`);function y(){o.value&&(o.value=!1)}return E(()=>{const[S,_]=G(f),[P,K]=M(e),[x,O]=D(e),r=H();function $(){var l,n;(l=r.value)==null||(n=l.input)==null||n.click()}return t(N,v({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":o.value},h.value]},S,P,{id:p.value,focused:V.value}),{...a,default:l=>{let{id:n,isDisabled:b,isReadonly:A,isValid:B}=l;return t(R,v({ref:r},x,{modelValue:u.value,"onUpdate:modelValue":[i=>u.value=i,y],id:n.value,type:"checkbox","aria-checked":o.value?"mixed":void 0,disabled:b.value,readonly:A.value,onFocus:C,onBlur:g},_),{...a,default:()=>t("div",{class:"v-switch__track",onClick:$},null),input:i=>{let{textColorClasses:I,textColorStyles:F}=i;return t("div",{class:["v-switch__thumb",I.value],style:F.value},[e.loading&&t(Z,{name:"v-switch",active:!0,color:B.value===!1?void 0:w.value},{default:s=>a.loader?a.loader(s):t(J,{active:s.isActive,color:s.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}});export{te as V};
