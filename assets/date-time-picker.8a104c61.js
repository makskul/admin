import{_ as d}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang.4576c59a.js";import{d as n,k as u,o as l,b as p,q as i,J as D,w as m,p as o}from"./index.3aea8822.js";import{_ as b}from"./AppCardCode.vue_vue_type_style_index_0_lang.dfe3baab.js";import{a as s,V as v}from"./VRow.67c1e35d.js";import"./VField.deb9867d.js";import"./index.cc13591e.js";import"./VInput.10834ccb.js";import"./router.59166a5a.js";import"./VImg.480b603b.js";import"./position.b257d571.js";import"./easing.36b781ab.js";import"./vue.runtime.esm-bundler.c14c1fda.js";import"./VCard.6b68a601.js";import"./VAvatar.6c12d1ff.js";import"./VBtn.6b17fd81.js";import"./VDivider.734561d6.js";const F=n({__name:"DemoDateTimePickerInline",setup(c){const e=u("");return(r,a)=>(l(),p(d,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>D(e)?e.value=t:null),label:"Inline",config:{inline:!0}},null,8,["modelValue"]))}}),V=n({__name:"DemoDateTimePickerDisabledRange",setup(c){const e=new Date,r=e.toLocaleString("default",{month:"2-digit"}),a=e.getFullYear(),t=u("");return(T,f)=>(l(),p(d,{modelValue:i(t),"onUpdate:modelValue":f[0]||(f[0]=_=>D(t)?t.value=_:null),label:"Disabled Range",config:{dateFormat:"Y-m-d",disable:[{from:`${i(a)}-${i(r)}-20`,to:`${i(a)}-${i(r)}-25`}]}},null,8,["modelValue","config"]))}}),Y=n({__name:"DemoDateTimePickerHumanFriendly",setup(c){const e=u("");return(r,a)=>(l(),p(d,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>D(e)?e.value=t:null),label:"Human Friendly",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"]))}}),$=n({__name:"DemoDateTimePickerRange",setup(c){const e=u("");return(r,a)=>(l(),p(d,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>D(e)?e.value=t:null),label:"Range",config:{mode:"range"}},null,8,["modelValue"]))}}),R=n({__name:"DemoDateTimePickerMultipleDates",setup(c){const e=u("");return(r,a)=>(l(),p(d,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>D(e)?e.value=t:null),label:"Multiple Dates",config:{mode:"multiple",dateFormat:"Y-m-d"}},null,8,["modelValue"]))}}),w=n({__name:"DemoDateTimePickerDateAndTime",setup(c){const e=u("");return(r,a)=>(l(),p(d,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>D(e)?e.value=t:null),label:"Date & TIme",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue"]))}}),M=n({__name:"DemoDateTimePickerTimePicker",setup(c){const e=u("");return(r,a)=>(l(),p(d,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>D(e)?e.value=t:null),label:"Time picker",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"]))}}),H=n({__name:"DemoDateTimePickerBasic",setup(c){const e=u("");return(r,a)=>(l(),p(d,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>D(e)?e.value=t:null),label:"Default"},null,8,["modelValue"]))}}),I={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>

`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>

`},j={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`},x={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`},C={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`},U={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`},y={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`},h={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`},B={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`},ae=n({__name:"date-time-picker",setup(c){return(e,r)=>{const a=H,t=b,T=M,f=w,_=R,k=$,P=Y,g=V,A=F;return l(),p(v,null,{default:m(()=>[o(s,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Basic",code:I},{default:m(()=>[o(a)]),_:1},8,["code"])]),_:1}),o(s,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Time Picker",code:B},{default:m(()=>[o(T)]),_:1},8,["code"])]),_:1}),o(s,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Date and Time",code:j},{default:m(()=>[o(f)]),_:1},8,["code"])]),_:1}),o(s,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Multiple Dates",code:y},{default:m(()=>[o(_)]),_:1},8,["code"])]),_:1}),o(s,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Range",code:h},{default:m(()=>[o(k)]),_:1},8,["code"])]),_:1}),o(s,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Human Friendly",code:C},{default:m(()=>[o(P)]),_:1},8,["code"])]),_:1}),o(s,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Disabled Range",code:x},{default:m(()=>[o(g)]),_:1},8,["code"])]),_:1}),o(s,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Inline",code:U},{default:m(()=>[o(A)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ae as default};
