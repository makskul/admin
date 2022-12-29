import{m as y,u as C,V as R,a as T}from"./VSliderTrack.a93957ab.js";import{b as $,m as I,u as w,f as L,V as N,a as U}from"./VInput.5f63bb3e.js";import{R as A,k as B,ac as j,a1 as q,a0 as z,p as u,F as D,C as E}from"./index.54e47bbc.js";const K=A({name:"VSlider",props:{...$(),...y(),...I(),modelValue:{type:[Number,String],default:0}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,p){let{slots:a}=p;const i=B(),{min:v,max:V,mousePressed:h,roundValue:o,onSliderMousedown:S,onSliderTouchstart:k,trackContainerRef:P,position:_,hasLabels:F,readonly:m}=C({props:e,handleSliderMouseUp:l=>s.value=o(l),handleMouseMove:l=>s.value=o(l),getActiveThumb:()=>{var l;return(l=i.value)==null?void 0:l.$el}}),s=j(e,"modelValue",void 0,l=>{const b=typeof l=="string"?parseFloat(l):l==null?v.value:l;return o(b)}),{isFocused:r,focus:x,blur:M}=w(e),c=q(()=>_(s.value));return z(()=>{const[l,b]=L(e),g=!!(e.label||a.label||a.prepend);return u(U,E({class:["v-slider",{"v-slider--has-labels":!!a["tick-label"]||F.value,"v-slider--focused":r.value,"v-slider--pressed":h.value,"v-slider--disabled":e.disabled}]},l,{focused:r.value}),{...a,prepend:g?d=>{var f;var n,t;return u(D,null,[((f=(n=a.label)==null?void 0:n.call(a,d))!=null?f:e.label)?u(N,{class:"v-slider__label",text:e.label},null):void 0,(t=a.prepend)==null?void 0:t.call(a,d)])}:void 0,default:d=>{let{id:n}=d;return u("div",{class:"v-slider__container",onMousedown:m.value?void 0:S,onTouchstartPassive:m.value?void 0:k},[u("input",{id:n.value,name:e.name||n.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:s.value},null),u(R,{ref:P,start:0,stop:c.value},{"tick-label":a["tick-label"]}),u(T,{ref:i,focused:r.value,min:v.value,max:V.value,modelValue:s.value,"onUpdate:modelValue":t=>s.value=t,position:c.value,elevation:e.elevation,onFocus:x,onBlur:M},{"thumb-label":a["thumb-label"]})])}})}),{}}});export{K as V};
