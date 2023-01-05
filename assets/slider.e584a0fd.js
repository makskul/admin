import{c as M}from"./index.824c457d.js";import{V as I}from"./VAvatar.9a7149b7.js";import{d as f,k as V,a1 as z,o as _,c as $,m as a,x as D,q as n,p as e,w as l,b,b3 as R,B as E,A as L,J as m,F as T,L as O,M as Y,y as g,z as c}from"./index.467cdc2d.js";import{V as k}from"./VBtn.dc3cd726.js";import{V as p}from"./VSlider.6db31484.js";import{a as N}from"./VImg.657a0470.js";import{a as u,V as h}from"./VRow.52d7fbbe.js";import{V as w}from"./VTextField.8ae34592.js";import{_ as G}from"./AppCardCode.vue_vue_type_style_index_0_lang.e5dd0605.js";import"./router.d66206d8.js";import"./position.363b5921.js";import"./VSliderTrack.8d947c3f.js";import"./VInput.d7ae850d.js";/* empty css                   */import"./VField.db7c540b.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.c9ee3103.js";import"./vue.runtime.esm-bundler.8f2ceaf5.js";import"./VCard.2d292526.js";import"./VDivider.12130cb7.js";const q=v=>(O("data-v-1e4e9e98"),v=v(),Y(),v),J={class:"d-flex justify-space-between ma-4"},H=["textContent"],K=q(()=>a("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),Q=f({__name:"DemoSliderAppendAndPrepend",setup(v){const t=V(40),s=40,i=218,r=V(!1),o=z(()=>t.value<100?"primary":t.value<125?"success":t.value<140?"info":t.value<175?"warning":"error"),d=z(()=>`${60/t.value}s`),y=()=>{t.value>s&&(t.value-=1)},S=()=>{t.value<i&&(t.value+=1)};return(F,x)=>(_(),$(T,null,[a("div",J,[a("div",null,[a("span",{class:"text-6xl font-weight-light",textContent:D(n(t))},null,8,H),K,e(M,null,{default:l(()=>[n(r)?(_(),b(I,{key:0,color:n(o),style:R({animationDuration:n(d)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):E("",!0)]),_:1})]),a("div",null,[e(k,{color:n(o),icon:"",elevation:"0",onClick:x[0]||(x[0]=C=>r.value=!n(r))},{default:l(()=>[e(L,{size:"large",icon:n(r)?"tabler-pause":"tabler-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(p,{modelValue:n(t),"onUpdate:modelValue":x[1]||(x[1]=C=>m(t)?t.value=C:null),color:n(o),step:1,min:s,max:i,"track-color":"secondary"},{prepend:l(()=>[e(k,{size:"small",variant:"text",icon:"tabler-minus",color:n(o),onClick:y},null,8,["color"])]),append:l(()=>[e(k,{size:"small",variant:"text",icon:"tabler-plus",color:n(o),onClick:S},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}});const W=g(Q,[["__scopeId","data-v-1e4e9e98"]]),X={style:{width:"3rem"}},Z={style:{width:"3rem"}},ee={style:{width:"3rem"}},le=f({__name:"DemoSliderAppendTextField",setup(v){const t=V(161),s=V(105),i=V(255);return(r,o)=>(_(),$(T,null,[e(N,{style:R({background:`rgb(${n(t)}, ${n(s)}, ${n(i)})`}),height:"150px"},null,8,["style"]),e(h,{class:"mt-5"},{default:l(()=>[e(u,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(t),"onUpdate:modelValue":o[1]||(o[1]=d=>m(t)?t.value=d:null),max:255,step:1,"prepend-icon":"tabler-letter-r"},{append:l(()=>[a("div",X,[e(w,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=d=>m(t)?t.value=d:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(s),"onUpdate:modelValue":o[3]||(o[3]=d=>m(s)?s.value=d:null),max:255,step:1,"prepend-icon":"tabler-letter-g"},{append:l(()=>[a("div",Z,[e(w,{modelValue:n(s),"onUpdate:modelValue":o[2]||(o[2]=d=>m(s)?s.value=d:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(i),"onUpdate:modelValue":o[5]||(o[5]=d=>m(i)?i.value=d:null),max:255,step:1,"prepend-icon":"tabler-letter-b"},{append:l(()=>[a("div",ee,[e(w,{modelValue:n(i),"onUpdate:modelValue":o[4]||(o[4]=d=>m(i)?i.value=d:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}}),te=f({__name:"DemoSliderVertical",setup(v){const t=V(10);return(s,i)=>(_(),b(p,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=r=>m(t)?t.value=r:null),direction:"vertical"},null,8,["modelValue"]))}}),oe=a("div",{class:"text-caption"}," Show ticks when using slider ",-1),ae=a("div",{class:"text-caption"}," Always show ticks ",-1),se=a("div",{class:"text-caption"}," Tick size ",-1),ne=a("div",{class:"text-caption"}," Tick labels ",-1),ie=f({__name:"DemoSliderTicks",setup(v){const t=V(0),s=V(1),i={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(r,o)=>(_(),b(h,null,{default:l(()=>[e(u,{cols:"12"},{default:l(()=>[oe,e(p,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=d=>m(t)?t.value=d:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[ae,e(p,{modelValue:n(t),"onUpdate:modelValue":o[1]||(o[1]=d=>m(t)?t.value=d:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[se,e(p,{modelValue:n(t),"onUpdate:modelValue":o[2]||(o[2]=d=>m(t)?t.value=d:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[ne,e(p,{modelValue:n(s),"onUpdate:modelValue":o[3]||(o[3]=d=>m(s)?s.value=d:null),ticks:i,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1}))}}),re=a("div",{class:"text-caption"}," Show thumb when using slider ",-1),de=a("div",{class:"text-caption"}," Always show thumb label ",-1),ce=a("div",{class:"text-caption"}," Custom thumb size ",-1),ue=a("div",{class:"text-caption"}," Custom thumb label ",-1),me=f({__name:"DemoSliderThumb",setup(v){const t=["\u{1F62D}","\u{1F622}","\u2639\uFE0F","\u{1F641}","\u{1F610}","\u{1F642}","\u{1F60A}","\u{1F601}","\u{1F604}","\u{1F60D}"],s=V(45);return(i,r)=>(_(),b(h,null,{default:l(()=>[e(u,{cols:"12"},{default:l(()=>[re,e(p,{modelValue:n(s),"onUpdate:modelValue":r[0]||(r[0]=o=>m(s)?s.value=o:null),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[de,e(p,{modelValue:n(s),"onUpdate:modelValue":r[1]||(r[1]=o=>m(s)?s.value=o:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[ce,e(p,{modelValue:n(s),"onUpdate:modelValue":r[2]||(r[2]=o=>m(s)?s.value=o:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[ue,e(p,{modelValue:n(s),"onUpdate:modelValue":r[3]||(r[3]=o=>m(s)?s.value=o:null),"thumb-label":"always"},{"thumb-label":l(({modelValue:o})=>[c(D(t[Math.min(Math.floor(o/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),pe={};function Ve(v,t){return _(),b(p,{step:10,"show-ticks":"","thumb-size":18,"tick-size":3,"track-size":2})}const ve=g(pe,[["render",Ve]]),_e=f({__name:"DemoSliderMinAndMax",setup(v){const t=V(-50),s=V(90),i=V(40);return(r,o)=>(_(),b(p,{modelValue:n(i),"onUpdate:modelValue":o[1]||(o[1]=d=>m(i)?i.value=d:null),max:n(s),min:n(t),step:1},{append:l(()=>[e(w,{modelValue:n(i),"onUpdate:modelValue":o[0]||(o[0]=d=>m(i)?i.value=d:null),variant:"underlined",type:"number",style:{width:"60px"}},null,8,["modelValue"])]),_:1},8,["modelValue","max","min"]))}}),be=f({__name:"DemoSliderValidation",setup(v){const t=V(30),s=[i=>i<=40||"Only 40 in stock"];return(i,r)=>(_(),b(p,{modelValue:n(t),"onUpdate:modelValue":r[0]||(r[0]=o=>m(t)?t.value=o:null),error:n(t)>40,rules:s,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}}),fe=f({__name:"DemoSliderStep",setup(v){const t=V(0);return(s,i)=>(_(),b(p,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=r=>m(t)?t.value=r:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue","step"]))}}),he=f({__name:"DemoSliderIcons",setup(v){const t=V(0),s=V(0),i=V(10);return(r,o)=>(_(),b(h,null,{default:l(()=>[e(u,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=d=>m(t)?t.value=d:null),"prepend-icon":"tabler-volume"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(s),"onUpdate:modelValue":o[1]||(o[1]=d=>m(s)?s.value=d:null),"append-icon":"tabler-alarm"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=d=>m(i)?i.value=d:null),"append-icon":"tabler-minus","prepend-icon":"tabler-plus"},null,8,["modelValue"])]),_:1})]),_:1}))}}),xe=a("div",{class:"text-caption"}," color ",-1),Ce=a("div",{class:"text-caption"}," track-color ",-1),we=a("div",{class:"text-caption"}," thumb-color ",-1),ye=f({__name:"DemoSliderColors",setup(v){const t=V(25),s=V(75),i=V(50);return(r,o)=>(_(),b(h,null,{default:l(()=>[e(u,{cols:"12"},{default:l(()=>[xe,e(p,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=d=>m(t)?t.value=d:null),color:"error"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[Ce,e(p,{modelValue:n(s),"onUpdate:modelValue":o[1]||(o[1]=d=>m(s)?s.value=d:null),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[we,e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=d=>m(i)?i.value=d:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1}))}}),Se={},ke=a("div",{class:"text-caption"}," Disabled ",-1),ge=a("div",{class:"text-caption"}," Readonly ",-1);function Fe(v,t){return _(),b(h,null,{default:l(()=>[e(u,{cols:"12"},{default:l(()=>[ke,e(p,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(u,{cols:"12"},{default:l(()=>[ge,e(p,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const ze=g(Se,[["render",Fe]]),$e=f({__name:"DemoSliderBasic",setup(v){const t=V(30);return(s,i)=>(_(),b(h,null,{default:l(()=>[e(u,{cols:"12"},{default:l(()=>[e(p)]),_:1}),e(u,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=r=>m(t)?t.value=r:null)},null,8,["modelValue"])]),_:1})]),_:1}))}}),De={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},Re={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <VSlider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-r"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="redColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <VSlider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-g"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="greenColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <VSlider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-b"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="blueColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <VSlider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-r"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="redColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <VSlider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-g"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="greenColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <VSlider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-b"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="blueColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Te={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="sliderValue"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="sliderValue"
      />
    </VCol>
  </VRow>
</template>
`},Ae={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},Ue={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},Be={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-minus"
        prepend-icon="tabler-plus"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-minus"
        prepend-icon="tabler-plus"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <VSlider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
  >
    <template #append>
      <VTextField
        v-model="slider"
        variant="underlined"
        type="number"
        style="width: 60px ;"
      />
    </template>
  </VSlider>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <VSlider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
  >
    <template #append>
      <VTextField
        v-model="slider"
        variant="underlined"
        type="number"
        style="width: 60px ;"
      />
    </template>
  </VSlider>
</template>
`},Pe={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},Me={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},Ie={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['\u{1F62D}', '\u{1F622}', '\u2639\uFE0F', '\u{1F641}', '\u{1F610}', '\u{1F642}', '\u{1F60A}', '\u{1F601}', '\u{1F604}', '\u{1F60D}']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '\u{1F62D}',
  '\u{1F622}',
  '\u2639\uFE0F',
  '\u{1F641}',
  '\u{1F610}',
  '\u{1F642}',
  '\u{1F60A}',
  '\u{1F601}',
  '\u{1F604}',
  '\u{1F60D}',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Ee={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},Le={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Oe={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},Ye=a("p",null,[c("The "),a("code",null,"v-slider"),c(" component is a better visualization of the number input.")],-1),Ne=a("p",null,[c("You cannot interact with "),a("code",null,"disabled"),c(" and "),a("code",null,"readonly"),c(" sliders.")],-1),Ge=a("p",null,[c("You can set the colors of the slider using the props "),a("code",null,"color"),c(", "),a("code",null,"track-color"),c(" and "),a("code",null,"thumb-color"),c(".")],-1),qe=a("p",null,[c("You can add icons to the slider with the "),a("code",null,"append-icon"),c(" and "),a("code",null,"prepend-icon"),c(" props.")],-1),Je=a("p",null,[c("Using the "),a("code",null,"step"),c(" prop you can control the precision of the slider, and how much it should move each step.")],-1),He=a("p",null,[c("Vuetify includes simple validation through the "),a("code",null,"rules"),c(" prop.")],-1),Ke=a("p",null,[c("You can set "),a("code",null,"min"),c(" and "),a("code",null,"max"),c(" values of sliders.")],-1),Qe=a("p",null,[c("Use "),a("code",null,"thumb-size"),c(", "),a("code",null,"tick-size"),c(", and "),a("code",null,"track-size"),c(" prop to increase and decrease the size of thumb, tick and track. ")],-1),We=a("p",null,[c("You can display a thumb label while sliding or always with the "),a("code",null,"thumb-label"),c(" prop.")],-1),Xe=a("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1),Ze=a("p",null,[c(" You can use the "),a("code",null,"vertical"),c(" prop to switch sliders to a vertical orientation. ")],-1),el=a("p",null,[c("Sliders can be combined with other components in its "),a("code",null,"append"),c(" slot, such as "),a("code",null,"v-text-field"),c(", to add additional functionality to the component.")],-1),ll=a("p",null,[c("Use slots such as "),a("code",null,"append"),c(" and "),a("code",null,"prepend"),c(" to easily customize the "),a("code",null,"v-slider"),c(" to fit any situation.")],-1),yl=f({__name:"slider",setup(v){return(t,s)=>{const i=$e,r=G,o=ze,d=ye,y=he,S=fe,F=be,x=_e,C=ve,A=me,U=ie,B=te,j=le,P=W;return _(),b(h,{class:"match-height"},{default:l(()=>[e(u,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Basic",code:Te},{default:l(()=>[Ye,e(i)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Disabled and Readonly",code:Ue},{default:l(()=>[Ne,e(o)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Colors",code:Ae},{default:l(()=>[Ge,e(d)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Icons",code:Be},{default:l(()=>[qe,e(y)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Step",code:Me},{default:l(()=>[Je,e(S)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Validation",code:Le},{default:l(()=>[He,e(F)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Min and Max",code:je},{default:l(()=>[Ke,e(x)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Size",code:Pe},{default:l(()=>[Qe,e(C)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Thumb",code:Ie},{default:l(()=>[We,e(A)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Ticks",code:Ee},{default:l(()=>[Xe,e(U)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Vertical",code:Oe},{default:l(()=>[Ze,e(B)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Append text field",code:Re},{default:l(()=>[el,e(j)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Append and prepend",code:De},{default:l(()=>[ll,e(P)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{yl as default};
