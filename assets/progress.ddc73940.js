import{V as n}from"./position.018b3847.js";import{d as C,x as V,an as b,a9 as L,$ as k,o as d,j as g,b as e,e as t,B as y,w as a,f as r,g as P,_ as h,k as o,c as M}from"./index.ca89cfb4.js";import{a as i}from"./VBtn.1b2949c6.js";import{_ as D}from"./AppCardCode.vue_vue_type_style_index_0_lang.c7a988a0.js";import{V as v}from"./VCol.93189cfb.js";import{V as U}from"./VRow.ed37e404.js";import"./router.dda86dcb.js";import"./vue.runtime.esm-bundler.3a68d414.js";import"./index.271b9ade.js";import"./VCard.3953ed9a.js";import"./VCardActions.f227109f.js";import"./createSimpleFunctional.2fb01b45.js";import"./VAvatar.aa0c65f3.js";import"./VImg.97c81ff8.js";import"./VDivider.d7e7bebe.js";const R={class:"demo-space-y"},j=C({__name:"DemoProgressLinearBuffering",setup(m){const l=V(10),s=V(20),p=V(),u=()=>{clearInterval(p.value),p.value=setInterval(()=>{l.value+=Math.random()*(15-5)+5,s.value+=Math.random()*(15-5)+6},2e3)};return b(u),L(()=>{clearInterval(p.value)}),k(l,()=>{if(l.value<100)return!1;l.value=0,s.value=10,u()}),(f,c)=>(d(),g("div",R,[e(n,{modelValue:t(l),"onUpdate:modelValue":c[0]||(c[0]=_=>y(l)?l.value=_:null),color:"primary",height:"8","buffer-value":t(s)},null,8,["modelValue","buffer-value"]),e(n,{modelValue:t(l),"onUpdate:modelValue":c[1]||(c[1]=_=>y(l)?l.value=_:null),color:"primary",height:"8","buffer-value":t(s)},null,8,["modelValue","buffer-value"]),e(n,{modelValue:t(l),"onUpdate:modelValue":c[2]||(c[2]=_=>y(l)?l.value=_:null),"buffer-value":t(s),color:"primary",height:"8"},null,8,["modelValue","buffer-value"]),e(n,{modelValue:t(l),"onUpdate:modelValue":c[3]||(c[3]=_=>y(l)?l.value=_:null),"buffer-value":t(s),color:"primary",height:"8"},null,8,["modelValue","buffer-value"])]))}}),S=r("br",null,null,-1),T=r("br",null,null,-1),N=C({__name:"DemoProgressLinearSlots",setup(m){const l=V(20),s=V(33),p=V(78);return(u,f)=>(d(),g("div",null,[e(n,{modelValue:t(p),"onUpdate:modelValue":f[0]||(f[0]=c=>y(p)?p.value=c:null),color:"primary",height:"8"},null,8,["modelValue"]),S,e(n,{modelValue:t(l),"onUpdate:modelValue":f[1]||(f[1]=c=>y(l)?l.value=c:null),color:"primary",height:"20"},{default:a(({value:c})=>[r("strong",null,P(Math.ceil(c))+"%",1)]),_:1},8,["modelValue"]),T,e(n,{modelValue:t(s),"onUpdate:modelValue":f[2]||(f[2]=c=>y(s)?s.value=c:null),height:"20",color:"primary"},{default:a(()=>[r("strong",null,P(Math.ceil(t(s)))+"%",1)]),_:1},8,["modelValue"])]))}}),A={},Y={class:"demo-space-y"};function E(m,l){return d(),g("div",Y,[e(n,{"model-value":"100",color:"primary",rounded:""}),e(n,{"model-value":"100",color:"primary",rounded:""}),e(n,{"model-value":"100",color:"primary",rounded:""}),e(n,{"model-value":"100",color:"primary",rounded:""})])}const q=h(A,[["render",E]]),F={},G={class:"demo-space-y"};function H(m,l){return d(),g("div",G,[e(n,{"model-value":"15",color:"primary",reverse:""}),e(n,{color:"primary",indeterminate:"",reverse:""}),e(n,{"model-value":"30","buffer-value":"55",color:"primary",reverse:"",streams:""})])}const J=h(F,[["render",H]]),K={},O={class:"demo-space-y"};function Q(m,l){return d(),g("div",O,[e(n,{indeterminate:"",color:"primary"}),e(n,{indeterminate:"",color:"primary"}),e(n,{indeterminate:"",color:"primary"})])}const W=h(K,[["render",Q]]),X={},Z={class:"demo-space-y"};function ee(m,l){return d(),g("div",Z,[e(n,{"model-value":"15","bg-color":"primary",color:"primary"}),e(n,{"model-value":"30","bg-color":"secondary",color:"secondary"}),e(n,{"model-value":"45","bg-color":"success",color:"success"})])}const re=h(X,[["render",ee]]),oe={},le={class:"demo-space-x"};function ae(m,l){return d(),g("div",le,[e(i,{width:3,color:"primary",indeterminate:""}),e(i,{size:50,color:"primary",indeterminate:""}),e(i,{size:50,color:"primary",indeterminate:""}),e(i,{size:70,width:7,color:"primary",indeterminate:""})])}const se=h(oe,[["render",ae]]),te={class:"demo-space-x"},ie=C({__name:"DemoProgressCircularRotate",setup(m){const l=V(),s=V(0);return b(()=>{l.value=setInterval(()=>{if(s.value===100)return s.value=0;s.value+=10},1e3)}),L(()=>{clearInterval(l.value)}),(p,u)=>(d(),g("div",te,[e(i,{rotate:360,size:70,width:6,"model-value":t(s),color:"primary"},{default:a(()=>[o(P(t(s)),1)]),_:1},8,["model-value"]),e(i,{rotate:90,size:70,width:6,"model-value":t(s),color:"primary"},{default:a(()=>[o(P(t(s)),1)]),_:1},8,["model-value"]),e(i,{rotate:170,size:70,width:6,"model-value":t(s),color:"primary"},{default:a(()=>[o(P(t(s)),1)]),_:1},8,["model-value"]),e(i,{rotate:-90,size:70,width:6,"model-value":t(s),color:"primary"},{default:a(()=>[o(P(t(s)),1)]),_:1},8,["model-value"])]))}}),ne={},ce={class:"demo-space-x"};function ue(m,l){return d(),g("div",ce,[e(i,{indeterminate:"",color:"primary"}),e(i,{indeterminate:"",color:"secondary"}),e(i,{indeterminate:"",color:"success"}),e(i,{indeterminate:"",color:"info"}),e(i,{indeterminate:"",color:"warning"}),e(i,{indeterminate:"",color:"error"})])}const de=h(ne,[["render",ue]]),me={},pe={class:"demo-space-x"};function ve(m,l){return d(),g("div",pe,[e(i,{"model-value":"100",color:"primary"}),e(i,{"model-value":"80",color:"secondary"}),e(i,{"model-value":"60",color:"success"}),e(i,{"model-value":"40",color:"info"}),e(i,{"model-value":"20",color:"warning"}),e(i,{"model-value":"20",color:"error"})])}const ge=h(me,[["render",ve]]),fe={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="100"
      color="primary"
    />

    <VProgressCircular
      model-value="80"
      color="secondary"
    />

    <VProgressCircular
      model-value="60"
      color="success"
    />

    <VProgressCircular
      model-value="40"
      color="info"
    />

    <VProgressCircular
      model-value="20"
      color="warning"
    />

    <VProgressCircular
      model-value="20"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="100"
      color="primary"
    />

    <VProgressCircular
      model-value="80"
      color="secondary"
    />

    <VProgressCircular
      model-value="60"
      color="success"
    />

    <VProgressCircular
      model-value="40"
      color="info"
    />

    <VProgressCircular
      model-value="20"
      color="warning"
    />

    <VProgressCircular
      model-value="20"
      color="error"
    />
  </div>
</template>
`},_e={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`},Ve={ts:`<script setup lang="ts">
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`,js:`<script setup>
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`},ye={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    />
  </div>
</template>
`},he={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />

    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />

    <VProgressLinear
      v-model="modelValue"
      :buffer-value="bufferValue"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="modelValue"
      :buffer-value="bufferValue"
      color="primary"
      height="8"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />

    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />

    <VProgressLinear
      v-model="modelValue"
      :buffer-value="bufferValue"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="modelValue"
      :buffer-value="bufferValue"
      color="primary"
      height="8"
    />
  </div>
</template>
`},Pe={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`},Ce={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      indeterminate
      color="primary"
    />

    <VProgressLinear
      indeterminate
      color="primary"
    />

    <VProgressLinear
      indeterminate
      color="primary"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      indeterminate
      color="primary"
    />

    <VProgressLinear
      indeterminate
      color="primary"
    />

    <VProgressLinear
      indeterminate
      color="primary"
    />
  </div>
</template>
`},be={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
      reverse
    />

    <VProgressLinear
      color="primary"
      indeterminate
      reverse
    />

    <VProgressLinear
      model-value="30"
      buffer-value="55"
      color="primary"
      reverse
      streams
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
      reverse
    />

    <VProgressLinear
      color="primary"
      indeterminate
      reverse
    />

    <VProgressLinear
      model-value="30"
      buffer-value="55"
      color="primary"
      reverse
      streams
    />
  </div>
</template>
`},Le={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />
  </div>
</template>
`},we={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div>
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <br>

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <br>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div>
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <br>

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <br>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`},$e=r("p",null,[o("Alternate colors can be applied to "),r("code",null,"v-progress-circular"),o(" using the "),r("code",null,"color"),o(" prop.")],-1),xe=r("p",null,[o("Using the "),r("code",null,"indeterminate"),o(" prop, a "),r("code",null,"v-progress-circular"),o(" continues to animate indefinitely.")],-1),ze=r("p",null,[o("The "),r("code",null,"rotate"),o(" prop gives you the ability to customize the "),r("code",null,"v-progress-circular"),o("'s origin.")],-1),Be=r("p",null,[o("The "),r("code",null,"size"),o(" and "),r("code",null,"width"),o(" props allow you to easily alter the size and width of the "),r("code",null,"v-progress-circular"),o(" component.")],-1),Ie=r("p",null,[o("You can set the colors of the progress bar using the props "),r("code",null,"color"),o(" and "),r("code",null,"background-color"),o(".")],-1),ke=r("p",null,[o("Using the "),r("code",null,"indeterminate"),o(" prop, "),r("code",null,"v-progress-linear"),o(" continuously animates.")],-1),Me=r("p",null,[o("Displays reversed progress. The component also has RTL support, such that a progress bar in right-to-left mode with reverse "),r("code",null,"prop"),o(" enabled will display left-to-right.")],-1),De=r("p",null,[o("The rounded prop is used to apply a border radius to the "),r("code",null,"v-progress-linear"),o(" component.")],-1),Ue=r("p",null,[o("The "),r("code",null,"v-progress-linear"),o(" component will be responsive to user input when using "),r("code",null,"v-model"),o(". You can use the default slot or bind a local model to display inside of the progress.")],-1),Re=r("p",null,[o("The primary value is controlled by "),r("code",null,"v-model"),o(", whereas the buffer is controlled by the "),r("code",null,"buffer-value"),o(" prop.")],-1),We=C({__name:"progress",setup(m){return(l,s)=>{const p=ge,u=D,f=de,c=ie,_=se,w=re,$=W,x=J,z=q,B=N,I=j;return d(),M(U,null,{default:a(()=>[e(v,{cols:"12",md:"6"},{default:a(()=>[e(u,{title:"Circular Color",code:fe},{default:a(()=>[$e,e(p)]),_:1},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(u,{title:"Circular Indeterminate",code:_e},{default:a(()=>[xe,e(f)]),_:1},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(u,{title:"Circular Rotate",code:Ve},{default:a(()=>[ze,e(c)]),_:1},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(u,{title:"Circular Size",code:ye},{default:a(()=>[Be,e(_)]),_:1},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(u,{title:"Linear Color",code:Pe},{default:a(()=>[Ie,e(w)]),_:1},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(u,{title:"Linear Indeterminate",code:Ce},{default:a(()=>[ke,e($)]),_:1},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(u,{title:"Linear Reversed",code:be},{default:a(()=>[Me,e(x)]),_:1},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(u,{title:"Linear Rounded",code:Le},{default:a(()=>[De,e(z)]),_:1},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(u,{title:"Linear Slots",code:we},{default:a(()=>[Ue,e(B)]),_:1},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(u,{title:"Linear Buffering",code:he},{default:a(()=>[Re,e(I)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{We as default};
