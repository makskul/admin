import{d as v,x as _,o as u,c as V,w as l,b as e,l as y,p as D,k as o,e as c,V as U,t as S,j as q,m as j,B as x,_ as g,f as t}from"./index.ea9c407c.js";import{c as N}from"./index.e3aaa912.js";import{V as B}from"./VTooltip.f0e4c754.js";import{a as L,V as E}from"./VBtn.ed86f128.js";import{V as i}from"./VTextField.ff2b3b5c.js";import{V as s}from"./VCol.8ff38cc0.js";import{V as C}from"./VRow.9cae9a08.js";import{r as W,e as z}from"./validators.37499f91.js";import{V as H}from"./VForm.5c496198.js";import{_ as Y}from"./AppCardCode.vue_vue_type_style_index_0_lang.758dd095.js";import"./scopeId.f060207f.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.f306b16b.js";import"./router.54c3299b.js";import"./lazy.611e3ede.js";import"./easing.36b781ab.js";import"./VImg.7e23cd37.js";import"./position.c1bb867e.js";/* empty css                   */import"./VField.f8e24a6b.js";import"./VInput.1cb82cfd.js";import"./VCounter.8218e51f.js";import"./index.f0101229.js";import"./vue.runtime.esm-bundler.ca6803f6.js";import"./VCard.912ab4c3.js";import"./VCardActions.f17a3f27.js";import"./createSimpleFunctional.4435dbbc.js";import"./VAvatar.0f0866e8.js";import"./VDivider.31a5d647.js";const O={key:0,class:"ms-3"},G=v({__name:"DemoTextfieldIconSlots",setup(b){const n=_("Hey!"),d=_(!1),m=()=>{d.value=!0,n.value="Wait for it...",setTimeout(()=>{d.value=!1,n.value="You've clicked me!"},2e3)};return(a,f)=>(u(),V(i,{modelValue:c(n),"onUpdate:modelValue":f[0]||(f[0]=r=>x(n)?n.value=r:null),clearable:"","clear-icon":"tabler-circle-x",label:"Message",type:"text"},{prepend:l(()=>[e(B,{location:"bottom"},{activator:l(({props:r})=>[e(y,D(r,{icon:"tabler-help"}),null,16)]),default:l(()=>[o(" I'm a tooltip ")]),_:1})]),"append-inner":l(()=>[e(N,{"leave-absolute":""},{default:l(()=>[c(d)?(u(),V(L,{key:0,size:"24",color:"info",indeterminate:""})):(u(),V(c(U),{key:1,nodes:c(S).app.logo},null,8,["nodes"]))]),_:1})]),append:l(()=>[e(E,{size:a.$vuetify.display.smAndDown?"small":"large",class:"mt-n3",icon:a.$vuetify.display.smAndDown,onClick:m},{default:l(()=>[e(y,{icon:"tabler-viewfinder"}),a.$vuetify.display.mdAndUp?(u(),q("span",O,"Click me")):j("",!0)]),_:1},8,["size","icon"])]),_:1},8,["modelValue"]))}}),J=v({__name:"DemoTextfieldPasswordInput",setup(b){const n=_(!1),d=_(!0),m=_("Password"),a=_("wqfasds"),f={required:r=>!!r||"Required.",min:r=>r.length>=8||"Min 8 characters"};return(r,p)=>(u(),V(C,null,{default:l(()=>[e(s,{cols:"12",sm:"6"},{default:l(()=>[e(i,{modelValue:c(m),"onUpdate:modelValue":p[0]||(p[0]=h=>x(m)?m.value=h:null),"append-inner-icon":c(n)?"tabler-eye":"tabler-eye-off",rules:[f.required,f.min],type:c(n)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",counter:"","onClick:appendInner":p[1]||(p[1]=h=>n.value=!c(n))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(s,{cols:"12",sm:"6"},{default:l(()=>[e(i,{modelValue:c(a),"onUpdate:modelValue":p[2]||(p[2]=h=>x(a)?a.value=h:null),"append-inner-icon":c(d)?"tabler-eye":"tabler-eye-off",rules:[f.required,f.min],type:c(d)?"text":"password",name:"input-10-2",label:"Visible",hint:"At least 8 characters","onClick:appendInner":p[3]||(p[3]=h=>d.value=!c(d))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1})]),_:1}))}}),K={},Q=t("strong",null,"icon",-1);function X(b,n){return u(),V(i,null,{label:l(()=>[o(" What about \xA0"),Q,o("\xA0here? "),e(y,{icon:"tabler-file-search"})]),_:1})}const Z=g(K,[["render",X]]),ee=v({__name:"DemoTextfieldIconEvents",setup(b){const n=_("Hey!"),d=_(!0),m=_(0),a=()=>{d.value=!d.value},f=()=>{n.value=""},r=()=>{m.value=0},p=()=>{r(),f()};return(h,T)=>(u(),V(i,{modelValue:c(n),"onUpdate:modelValue":T[0]||(T[0]=w=>x(n)?n.value=w:null),clearable:"",type:"text",label:"Message",color:"primary","clear-icon":"tabler-circle-x","append-icon":c(n)?"tabler-arrow-big-right-lines":"tabler-microphone","append-inner-icon":c(d)?"tabler-map-pin":"tabler-map-pin-off","onClick:appendInner":a,"onClick:append":p,"onClick:clear":f},null,8,["modelValue","append-icon","append-inner-icon"]))}}),le=v({__name:"DemoTextfieldValidation",setup(b){const n=_("");return(d,m)=>(u(),V(H,null,{default:l(()=>[e(i,{modelValue:c(n),"onUpdate:modelValue":m[0]||(m[0]=a=>x(n)?n.value=a:null),rules:[c(W),c(z)],label:"E-mail"},null,8,["modelValue","rules"])]),_:1}))}}),te={};function oe(b,n){return u(),V(i,{label:"Regular","single-line":""})}const ne=g(te,[["render",oe]]),ae=v({__name:"DemoTextfieldPrefixesAndSuffixes",setup(b){const n=_(10.05),d=_(28.02),m=_("example"),a=_("04:56");return(f,r)=>(u(),V(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(n),"onUpdate:modelValue":r[0]||(r[0]=p=>x(n)?n.value=p:null),label:"Amount",prefix:"$",type:"number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(d),"onUpdate:modelValue":r[1]||(r[1]=p=>x(d)?d.value=p:null),label:"Weight",suffix:"lbs"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(m),"onUpdate:modelValue":r[2]||(r[2]=p=>x(m)?m.value=p:null),label:"Email address",suffix:"@gmail.com"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(a),"onUpdate:modelValue":r[3]||(r[3]=p=>x(a)?a.value=p:null),label:"Label Text",type:"time",suffix:"PST"},null,8,["modelValue"])]),_:1})]),_:1}))}}),se={};function ie(b,n){return u(),V(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Prepend","prepend-icon":"tabler-map-pin"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Prepend Inner","prepend-inner-icon":"tabler-map-pin"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Append","append-icon":"tabler-map-pin"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Append Inner","append-inner-icon":"tabler-map-pin"})]),_:1})]),_:1})}const re=g(se,[["render",ie]]),ce={};function de(b,n){return u(),V(i,{color:"success",label:"First name"})}const pe=g(ce,[["render",de]]),me={};function ue(b,n){return u(),V(i,{label:"Regular",clearable:""})}const fe=g(me,[["render",ue]]),Ve=v({__name:"DemoTextfieldCounter",setup(b){const n=_("Preliminary report"),d=_("California is a state in the western United States"),m=[a=>a.length<=25||"Max 25 characters"];return(a,f)=>(u(),V(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(n),"onUpdate:modelValue":f[0]||(f[0]=r=>x(n)?n.value=r:null),rules:m,counter:"25",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(d),"onUpdate:modelValue":f[1]||(f[1]=r=>x(d)?d.value=r:null),rules:m,counter:"",maxlength:"25",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1}))}}),_e={};function be(b,n){return u(),V(C,null,{default:l(()=>[e(s,null,{default:l(()=>[e(i,{label:"Disabled",disabled:""})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Readonly",readonly:""})]),_:1})]),_:1})}const xe=g(_e,[["render",be]]),ge={};function he(b,n){return u(),V(C,null,{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Outlined"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Filled",variant:"filled"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Solo",variant:"solo"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Plain",variant:"plain"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const ve=g(ge,[["render",he]]),Ce={};function Te(b,n){return u(),V(i,{label:"Compact",density:"compact"})}const we=g(Ce,[["render",Te]]),ye={};function Fe(b,n){return u(),V(i,{label:"Regular"})}const ke=g(ye,[["render",Fe]]),Re={ts:`<template>
  <VTextField label="Regular" />
</template>
`,js:`<template>
  <VTextField label="Regular" />
</template>
`},Ie={ts:`<template>
  <VTextField
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    clearable
  />
</template>
`},$e={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},Me={ts:`<template>
  <VTextField
    color="success"
    label="First name"
  />
</template>
`,js:`<template>
  <VTextField
    color="success"
    label="First name"
  />
</template>
`},Pe={ts:`<template>
  <VTextField
    label="Compact"
    density="compact"
  />
</template>
`,js:`<template>
  <VTextField
    label="Compact"
    density="compact"
  />
</template>
`},Ae={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="tabler-circle-x"
    :append-icon="message ? 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="tabler-circle-x"
    :append-icon="message ? 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},De={ts:`<script lang="ts" setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    clear-icon="tabler-circle-x"
    label="Message"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        class="mt-n3"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="tabler-viewfinder" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    clear-icon="tabler-circle-x"
    label="Message"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        class="mt-n3"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="tabler-viewfinder" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`},Ue={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
      />
    </VCol>
  </VRow>
</template>
`},Se={ts:`<template>
  <VTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </VTextField>
</template>
`,js:`<template>
  <VTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </VTextField>
</template>
`},qe={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye' : 'tabler-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'tabler-eye' : 'tabler-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye' : 'tabler-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'tabler-eye' : 'tabler-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`},Ne={ts:`<template>
  <VTextField
    label="Regular"
    single-line
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    single-line
  />
</template>
`},Be={ts:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},Le={ts:`<script lang="ts" setup>
import { emailValidator, requiredValidator } from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`},Ee={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},We=t("p",null,"Text fields components are used for collecting user provided information.",-1),ze=t("p",null,[o("The "),t("code",null,"density"),o(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),t("strong",null,"default"),o(", "),t("strong",null,"comfortable"),o(", and "),t("strong",null,"compact"),o(".")],-1),He=t("p",null,[o("Use "),t("code",null,"solo"),o(", "),t("code",null,"filled"),o(", "),t("code",null,"outlined"),o(", "),t("code",null,"plain"),o(" and "),t("code",null,"underlined"),o(" option of "),t("code",null,"variant"),o(" prop to change the look of the textfield. ")],-1),Ye=t("p",null,"Text fields can be disabled or readonly.",-1),Oe=t("p",null,[o("Use a "),t("code",null,"counter"),o(" prop to inform a user of the character limit.")],-1),Ge=t("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1),Je=t("p",null,[o("Use "),t("code",null,"color"),o(" prop to change the input text color.")],-1),Ke=t("p",null,[o("You can add icons to the text field with "),t("code",null,"prepend-icon"),o(", "),t("code",null,"append-icon"),o(" and "),t("code",null,"append-inner-icon"),o(" and "),t("code",null,"prepend-inner-icon"),o(" props.")],-1),Qe=t("p",null,[o("The "),t("code",null,"prefix"),o(" and "),t("code",null,"suffix"),o(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1),Xe=t("p",null,[t("code",null,"single-line"),o(" text fields do not float their label on focus or with data.")],-1),Ze=t("p",null,[o("Vuetify includes simple validation through the "),t("code",null,"rules"),o(" prop.")],-1),el=t("p",null,[t("code",null,"click:prepend"),o(", "),t("code",null,"click:append"),o(", "),t("code",null,"click:append-inner"),o(", and "),t("code",null,"click:clear"),o(" will be emitted when you click on the respective icon")],-1),ll=t("p",null,[o("Text field label can be defined in "),t("code",null,"label"),o(" slot - that will allow to use HTML content.")],-1),tl=t("p",null,[o("Using the HTML input "),t("code",null,"type"),o(" password can be used with an appended icon and callback to control the visibility.")],-1),ol=t("p",null,[o("Instead of using "),t("code",null,"prepend"),o("/"),t("code",null,"append"),o("/"),t("code",null,"append-inner"),o(" icons you can use slots to extend input's functionality.")],-1),Al=v({__name:"textfield",setup(b){return(n,d)=>{const m=ke,a=Y,f=we,r=ve,p=xe,h=Ve,T=fe,w=pe,F=re,k=ae,R=ne,I=le,$=ee,M=Z,P=J,A=G;return u(),V(C,{class:"match-height"},{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Basic",code:Re},{default:l(()=>[We,e(m)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Density",code:Pe},{default:l(()=>[ze,e(f)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(a,{title:"Variant",code:Ee},{default:l(()=>[He,e(r)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"State",code:Be},{default:l(()=>[Ye,e(p)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Counter",code:$e},{default:l(()=>[Oe,e(h)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Clearable",code:Ie},{default:l(()=>[Ge,e(T)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Custom Colors",code:Me},{default:l(()=>[Je,e(w)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icons",code:Ue},{default:l(()=>[Ke,e(F)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Prefixes and suffixes",code:je},{default:l(()=>[Qe,e(k)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Single line",code:Ne},{default:l(()=>[Xe,e(R)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Validation",code:Le},{default:l(()=>[Ze,e(I)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icon events",code:Ae},{default:l(()=>[el,e($)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Label Slot",code:Se},{default:l(()=>[ll,e(M)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Password input",code:qe},{default:l(()=>[tl,e(P)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icon slots",code:De},{default:l(()=>[ol,e(A)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Al as default};
