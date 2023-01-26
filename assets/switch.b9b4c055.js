import{V as d}from"./VSwitch.651c167c.js";import{d as w,k as m,o as h,c as b,p as t,q as a,J as p,b as f,w as r,z as c,m as n,x as L,F as _,a as y}from"./index.ced6806d.js";import{a as $}from"./VBtn.ff8d0fa0.js";import{_ as D}from"./AppCardCode.vue_vue_type_style_index_0_lang.7474210e.js";import{V as v}from"./VCol.0d4aad2a.js";import{V as C}from"./VRow.65e1578a.js";import"./VSelectionControl.9f950dab.js";import"./router.e693d955.js";import"./VInput.841c7107.js";import"./index.9b7e715d.js";import"./VImg.9e1467de.js";import"./position.dc05b09b.js";import"./vue.runtime.esm-bundler.46083fd7.js";import"./VCard.c7bdbb25.js";import"./VCardActions.60dbb4b1.js";import"./createSimpleFunctional.96761c7b.js";import"./VAvatar.3162c276.js";import"./VDivider.6fd0d2a4.js";const U={class:"demo-space-x"},J=w({__name:"DemoSwitchStates",setup(S){const e=m("on"),o=m("on"),i=m("on");return(l,s)=>(h(),b("div",U,[t(d,{modelValue:a(e),"onUpdate:modelValue":s[0]||(s[0]=u=>p(e)?e.value=u:null),value:"on",label:"On"},null,8,["modelValue"]),t(d,{label:"Off"}),t(d,{modelValue:a(o),"onUpdate:modelValue":s[1]||(s[1]=u=>p(o)?o.value=u:null),value:"on",disabled:"",label:"On disabled"},null,8,["modelValue"]),t(d,{disabled:"",label:"Off disabled"}),t(d,{modelValue:a(i),"onUpdate:modelValue":s[2]||(s[2]=u=>p(i)?i.value=u:null),loading:"warning",value:"on",label:"On loading"},null,8,["modelValue"]),t(d,{loading:"warning",label:"Off loading"})]))}}),T={class:"demo-space-x"},A=w({__name:"DemoSwitchTrueAndFalseValue",setup(S){const e=m(1),o=m("Show");return(i,l)=>(h(),b("div",T,[t(d,{modelValue:a(e),"onUpdate:modelValue":l[0]||(l[0]=s=>p(e)?e.value=s:null),label:a(e).toString(),"true-value":1,"false-value":0},null,8,["modelValue","label"]),t(d,{modelValue:a(o),"onUpdate:modelValue":l[1]||(l[1]=s=>p(o)?o.value=s:null),label:a(o).toString(),"true-value":"Show","false-value":"Hide"},null,8,["modelValue","label"])]))}}),F=w({__name:"DemoSwitchLabelSlot",setup(S){const e=m(!1);return(o,i)=>(h(),f(d,{modelValue:a(e),"onUpdate:modelValue":i[0]||(i[0]=l=>p(e)?e.value=l:null)},{label:r(()=>[c(" Turn on the progress: "),t($,{indeterminate:a(e),size:"24",class:"ms-2"},null,8,["indeterminate"])]),_:1},8,["modelValue"]))}}),M={class:"demo-space-x"},z={class:"mt-2 mb-0"},I=w({__name:"DemoSwitchModelAsArray",setup(S){const e=m(["John"]);return(o,i)=>(h(),b(_,null,[n("div",M,[t(d,{modelValue:a(e),"onUpdate:modelValue":i[0]||(i[0]=l=>p(e)?e.value=l:null),label:"John",value:"John"},null,8,["modelValue"]),t(d,{modelValue:a(e),"onUpdate:modelValue":i[1]||(i[1]=l=>p(e)?e.value=l:null),label:"Jacob",value:"Jacob"},null,8,["modelValue"])]),n("p",z,L(a(e)),1)],64))}}),P={class:"demo-space-x"},k=w({__name:"DemoSwitchColors",setup(S){const e=m(["Primary","Secondary","Success","Info","Warning","Error"]),o=m(["Primary","Secondary","Success","Info","Warning","Error"]);return(i,l)=>(h(),b("div",P,[(h(!0),b(_,null,y(a(o),s=>(h(),f(d,{key:s,modelValue:a(e),"onUpdate:modelValue":l[0]||(l[0]=u=>p(e)?e.value=u:null),label:s,value:s,color:s.toLowerCase()},null,8,["modelValue","label","value","color"]))),128))]))}}),j={class:"demo-space-x"},B=w({__name:"DemoSwitchInset",setup(S){const e=m(!0),o=m(!1);return(i,l)=>(h(),b("div",j,[t(d,{modelValue:a(e),"onUpdate:modelValue":l[0]||(l[0]=s=>p(e)?e.value=s:null),inset:"",label:`Switch 1: ${a(e).toString()}`},null,8,["modelValue","label"]),t(d,{modelValue:a(o),"onUpdate:modelValue":l[1]||(l[1]=s=>p(o)?o.value=s:null),inset:"",label:`Switch 2: ${a(o).toString()}`},null,8,["modelValue","label"])]))}}),E={class:"demo-space-x"},W=w({__name:"DemoSwitchBasic",setup(S){const e=m(!0),o=m(!1),i=l=>{const s=l.toString();return s.charAt(0).toUpperCase()+s.slice(1)};return(l,s)=>(h(),b("div",E,[t(d,{modelValue:a(e),"onUpdate:modelValue":s[0]||(s[0]=u=>p(e)?e.value=u:null),label:i(a(e))},null,8,["modelValue","label"]),t(d,{modelValue:a(o),"onUpdate:modelValue":s[1]||(s[1]=u=>p(o)?o.value=u:null),label:i(a(o))},null,8,["modelValue","label"])]))}}),H={ts:`<script lang="ts" setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`,js:`<script setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`},N={ts:`<script lang="ts" setup>
const selectedSwitch = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const switches = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`,js:`<script setup>
const selectedSwitch = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const switches = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`},R={ts:`<script lang="ts" setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      inset
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      inset
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      inset
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      inset
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`},q={ts:`<script lang="ts" setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        size="24"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`,js:`<script setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        size="24"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`},Y={ts:`<script lang="ts" setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`,js:`<script setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`},G={ts:`<script setup lang="ts">
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref('on')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      value="on"
      label="On loading"
    />

    <VSwitch
      loading="warning"
      label="Off loading"
    />
  </div>
</template>
`,js:`<script setup>
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref('on')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      value="on"
      label="On loading"
    />

    <VSwitch
      loading="warning"
      label="Off loading"
    />
  </div>
</template>
`},K={ts:`<script lang="ts" setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`,js:`<script setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`},Q=n("p",null,[c("A "),n("code",null,"v-switch"),c(" in its simplest form provides a toggle between 2 values.")],-1),X=n("p",null,"You can make switch render in inset mode.",-1),Z=n("p",null,[c("Switches can be colored by using any of the builtin colors and contextual names using the "),n("code",null,"color"),c(" prop.")],-1),ee=n("p",null,[c("Multiple "),n("code",null,"v-switch"),c("'s can share the same "),n("code",null,"v-model"),c(" by using an array.")],-1),te=n("p",null,[c("Switch labels can be defined in "),n("code",null,"label"),c(" slot - that will allow to use HTML content.")],-1),le=n("p",null,[c(" Use "),n("code",null,"false-value"),c(" and "),n("code",null,"true-value"),c(" prop to sets value for truthy and falsy state ")],-1),se=n("p",null,[n("code",null,"v-switch"),c(" can have different states such as "),n("code",null,"default"),c(", "),n("code",null,"disabled"),c(", and "),n("code",null,"loading"),c(".")],-1),Ve=w({__name:"switch",setup(S){return(e,o)=>{const i=W,l=D,s=B,u=k,g=I,V=F,x=A,O=J;return h(),f(C,null,{default:r(()=>[t(v,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"Basic",code:H},{default:r(()=>[Q,t(i)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"Inset",code:R},{default:r(()=>[X,t(s)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"Colors",code:N},{default:r(()=>[Z,t(u)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"Model as array",code:Y},{default:r(()=>[ee,t(g)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"Label slot",code:q},{default:r(()=>[te,t(V)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"True and False Value",code:K},{default:r(()=>[le,t(x)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"States",code:G},{default:r(()=>[se,t(O)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ve as default};