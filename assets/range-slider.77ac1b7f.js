import{m as G,u as H,V as K,a as O,g as W}from"./VSliderTrack.2d380766.js";import{b as Q,m as ee,u as le,f as ae,V as te,a as se}from"./VInput.c6654052.js";import{a3 as oe,k as b,X as ue,Y,Z as ne,p as a,F as re,C as ie,d as S,o as R,b as k,q as D,J as y,w as r,A as de,m as i,z as d}from"./index.f213f02a.js";import{_ as ce}from"./AppCardCode.vue_vue_type_style_index_0_lang.51ce6dd8.js";import{V as x}from"./VCol.789f6d3b.js";import{V as me}from"./VRow.56ed4074.js";import"./index.0c1a81ec.js";import"./router.8c7eb138.js";import"./VImg.fe4e9eac.js";import"./vue.runtime.esm-bundler.95554864.js";import"./VCard.0479d9ab.js";import"./VCardActions.bd21bfb5.js";import"./createSimpleFunctional.d6243075.js";import"./VAvatar.607df399.js";import"./position.b6cfc487.js";import"./VBtn.e3a1b4a9.js";import"./VDivider.52d9efbf.js";const T=oe({name:"VRangeSlider",props:{...Q(),...ee(),...G(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,s){let{slots:u}=s;const e=b(),l=b(),$=b();function h(n){if(!e.value||!l.value)return;const m=W(n,e.value.$el,t.direction),_=W(n,l.value.$el,t.direction),p=Math.abs(m),v=Math.abs(_);return p<v||p===v&&m<0?e.value.$el:l.value.$el}const{activeThumbRef:c,hasLabels:P,max:M,min:j,mousePressed:q,onSliderMousedown:J,onSliderTouchstart:X,position:I,roundValue:Z,trackContainerRef:E}=H({props:t,handleSliderMouseUp:n=>{var m;o.value=c.value===((m=e.value)==null?void 0:m.$el)?[n,o.value[1]]:[o.value[0],n]},handleMouseMove:n=>{var m;const[_,p]=o.value;if(!t.strict&&_===p&&_!==j.value){var v,V,f;c.value=n>_?(v=l.value)==null?void 0:v.$el:(V=e.value)==null?void 0:V.$el,(f=c.value)==null||f.focus()}c.value===((m=e.value)==null?void 0:m.$el)?o.value=[Math.min(n,p),p]:o.value=[_,Math.max(_,n)]},getActiveThumb:h}),o=ue(t,"modelValue",void 0,n=>!n||!n.length?[0,0]:n.map(m=>Z(m))),{isFocused:B,focus:z,blur:L}=le(t),A=Y(()=>I(o.value[0])),N=Y(()=>I(o.value[1]));return ne(()=>{const[n,m]=ae(t),_=!!(t.label||u.label||u.prepend);return a(se,ie({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||P.value,"v-slider--focused":B.value,"v-slider--pressed":q.value,"v-slider--disabled":t.disabled}],ref:$},n,{focused:B.value}),{...u,prepend:_?p=>{var f;var v,V;return a(re,null,[((f=(v=u.label)==null?void 0:v.call(u,p))!=null?f:t.label)?a(te,{class:"v-slider__label",text:t.label},null):void 0,(V=u.prepend)==null?void 0:V.call(u,p)])}:void 0,default:p=>{var v,V;let{id:f}=p;return a("div",{class:"v-slider__container",onMousedown:J,onTouchstartPassive:X},[a("input",{id:`${f.value}_start`,name:t.name||f.value,disabled:t.disabled,readonly:t.readonly,tabindex:"-1",value:o.value[0]},null),a("input",{id:`${f.value}_stop`,name:t.name||f.value,disabled:t.disabled,readonly:t.readonly,tabindex:"-1",value:o.value[1]},null),a(K,{ref:E,start:A.value,stop:N.value},{"tick-label":u["tick-label"]}),a(O,{ref:e,focused:B&&c.value===((v=e.value)==null?void 0:v.$el),modelValue:o.value[0],"onUpdate:modelValue":g=>o.value=[g,o.value[1]],onFocus:g=>{var w,C;if(z(),c.value=(w=e.value)==null?void 0:w.$el,o.value[0]===o.value[1]&&o.value[1]===j.value&&g.relatedTarget!==((C=l.value)==null?void 0:C.$el)){var U,F;(U=e.value)==null||U.$el.blur(),(F=l.value)==null||F.$el.focus()}},onBlur:()=>{L(),c.value=void 0},min:j.value,max:o.value[1],position:A.value},{"thumb-label":u["thumb-label"]}),a(O,{ref:l,focused:B&&c.value===((V=l.value)==null?void 0:V.$el),modelValue:o.value[1],"onUpdate:modelValue":g=>o.value=[o.value[0],g],onFocus:g=>{var w,C;if(z(),c.value=(w=l.value)==null?void 0:w.$el,o.value[0]===o.value[1]&&o.value[0]===M.value&&g.relatedTarget!==((C=e.value)==null?void 0:C.$el)){var U,F;(U=l.value)==null||U.$el.blur(),(F=e.value)==null||F.$el.focus()}},onBlur:()=>{L(),c.value=void 0},min:o.value[0],max:M.value,position:N.value},{"thumb-label":u["thumb-label"]})])}})}),{}}}),pe=S({__name:"DemoRangeSliderVertical",setup(t){const s=b([20,40]);return(u,e)=>(R(),k(T,{modelValue:D(s),"onUpdate:modelValue":e[0]||(e[0]=l=>y(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}}),ve=S({__name:"DemoRangeSliderThumbLabel",setup(t){const s=["Winter","Spring","Summer","Fall"],u=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],e=b([1,2]);return(l,$)=>(R(),k(T,{modelValue:D(e),"onUpdate:modelValue":$[0]||($[0]=h=>y(e)?e.value=h:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":r(({modelValue:h})=>[a(de,{icon:u[h]},null,8,["icon"])]),_:1},8,["modelValue"]))}}),fe=S({__name:"DemoRangeSliderStep",setup(t){const s=b([20,40]);return(u,e)=>(R(),k(T,{modelValue:D(s),"onUpdate:modelValue":e[0]||(e[0]=l=>y(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}}),_e=S({__name:"DemoRangeSliderColor",setup(t){const s=b([10,60]);return(u,e)=>(R(),k(T,{modelValue:D(s),"onUpdate:modelValue":e[0]||(e[0]=l=>y(s)?s.value=l:null),color:"success","track-color":"secondary"},null,8,["modelValue"]))}}),be=S({__name:"DemoRangeSliderDisabled",setup(t){const s=b([30,60]);return(u,e)=>(R(),k(T,{modelValue:D(s),"onUpdate:modelValue":e[0]||(e[0]=l=>y(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}}),Ve=S({__name:"DemoRangeSliderBasic",setup(t){const s=b([10,60]);return(u,e)=>(R(),k(T,{modelValue:D(s),"onUpdate:modelValue":e[0]||(e[0]=l=>y(s)?s.value=l:null)},null,8,["modelValue"]))}}),he={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},ge={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`},Se={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},Re={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},ke={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},$e={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},xe=i("p",null,[d("The "),i("code",null,"v-slider"),d(" component is a better visualization of the number input.")],-1),De=i("p",null,[d("You cannot interact with "),i("code",null,"disabled"),d(" sliders.")],-1),ye=i("p",null,[d("Use "),i("code",null,"color"),d(" prop to the sets the slider color. "),i("code",null,"track-color"),d(" prop to sets the color of slider's unfilled track.")],-1),Te=i("p",null,[i("code",null,"v-range-slider"),d(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),we=i("p",null,[d(" Using the "),i("code",null,"tick-labels"),d(" prop along with the "),i("code",null,"thumb-label"),d(" slot, you can create a very customized solution. ")],-1),Ce=i("p",null,[d("You can use the "),i("code",null,"vertical"),d(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Ze=S({__name:"range-slider",setup(t){return(s,u)=>{const e=Ve,l=ce,$=be,h=_e,c=fe,P=ve,M=pe;return R(),k(me,null,{default:r(()=>[a(x,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Basic",code:he},{default:r(()=>[xe,a(e)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Disabled",code:Se},{default:r(()=>[De,a($)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Color",code:ge},{default:r(()=>[ye,a(h)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Step",code:Re},{default:r(()=>[Te,a(c)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Thumb label",code:ke},{default:r(()=>[we,a(P)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Vertical",code:$e},{default:r(()=>[Ce,a(M)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ze as default};
