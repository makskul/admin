import{m as y,u as T,V as C,a as R}from"./VSliderTrack.c2b53147.js";import{b as $,m as I,u as w,f as L,V as N,a as U}from"./VInput.6f6ad0a7.js";import{X as A,x as B,O,P as Q,Q as X,b as u,F as j,p as q}from"./index.892843d9.js";const G=A({name:"VSlider",props:{...$(),...y(),...I(),modelValue:{type:[Number,String],default:0}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,p){let{slots:a}=p;const i=B(),{min:v,max:V,mousePressed:h,roundValue:o,onSliderMousedown:S,onSliderTouchstart:P,trackContainerRef:k,position:_,hasLabels:x,readonly:m}=T({props:e,handleSliderMouseUp:l=>s.value=o(l),handleMouseMove:l=>s.value=o(l),getActiveThumb:()=>{var l;return(l=i.value)==null?void 0:l.$el}}),s=O(e,"modelValue",void 0,l=>{const b=typeof l=="string"?parseFloat(l):l==null?v.value:l;return o(b)}),{isFocused:r,focus:F,blur:M}=w(e),c=Q(()=>_(s.value));return X(()=>{const[l,b]=L(e),g=!!(e.label||a.label||a.prepend);return u(U,q({class:["v-slider",{"v-slider--has-labels":!!a["tick-label"]||x.value,"v-slider--focused":r.value,"v-slider--pressed":h.value,"v-slider--disabled":e.disabled}]},l,{focused:r.value}),{...a,prepend:g?d=>{var f;var n,t;return u(j,null,[((f=(n=a.label)==null?void 0:n.call(a,d))!=null?f:e.label)?u(N,{class:"v-slider__label",text:e.label},null):void 0,(t=a.prepend)==null?void 0:t.call(a,d)])}:void 0,default:d=>{let{id:n}=d;return u("div",{class:"v-slider__container",onMousedown:m.value?void 0:S,onTouchstartPassive:m.value?void 0:P},[u("input",{id:n.value,name:e.name||n.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:s.value},null),u(C,{ref:k,start:0,stop:c.value},{"tick-label":a["tick-label"]}),u(R,{ref:i,focused:r.value,min:v.value,max:V.value,modelValue:s.value,"onUpdate:modelValue":t=>s.value=t,position:c.value,elevation:e.elevation,onFocus:F,onBlur:M},{"thumb-label":a["thumb-label"]})])}})}),{}}});export{G as V};