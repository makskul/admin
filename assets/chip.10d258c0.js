import{V as t}from"./VChip.d2564180.js";import{V as $,a as W,b as w,c as L}from"./VList.060d35bf.js";import{V as A}from"./VListItemAction.39203343.js";import{V as M}from"./VBtn.a21f07ff.js";import{d as x,x as V,o as c,c as h,w as i,b as e,bf as J,bg as j,k as a,l as f,e as r,B as k,_ as g,j as v,cJ as T,cK as B,v as N,q as U,f as o,m as b}from"./index.65c54066.js";import{V as F}from"./VMenu.1970e363.js";import{V as R}from"./VCombobox.8244c0de.js";import{V as I}from"./VAvatar.91739135.js";import{_ as Y}from"./AppCardCode.vue_vue_type_style_index_0_lang.75929e93.js";import{V as d}from"./VCol.5e06944f.js";import{V as O}from"./VRow.87f3486a.js";import"./router.c11a7c91.js";import"./index.ae40f9ce.js";import"./createSimpleFunctional.6f907b98.js";import"./VDivider.82362549.js";import"./position.55e84ead.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.d781e9fa.js";import"./VOverlay.71de7806.js";import"./lazy.ca7c1c67.js";import"./easing.36b781ab.js";import"./VImg.dffffe0f.js";import"./dialog-transition.9ae98860.js";import"./VSelect.865f9f4b.js";import"./VTextField.8385b93a.js";/* empty css                   */import"./VField.3e33e8b0.js";import"./VInput.e543e841.js";import"./VCounter.c21e8434.js";import"./VCheckboxBtn.867c19b7.js";import"./VSelectionControl.02658c28.js";import"./filter.fdbe3dda.js";import"./vue.runtime.esm-bundler.64db0d4d.js";import"./VCard.b8e33cb7.js";import"./VCardActions.a01bdc79.js";const q=x({__name:"DemoChipExpandable",setup(m){const s=V(!1);return(u,p)=>(c(),h(F,{modelValue:r(s),"onUpdate:modelValue":p[1]||(p[1]=l=>k(s)?s.value=l:null),transition:"scale-transition"},{activator:i(({props:l})=>[e(t,J(j(l)),{default:i(()=>[a(" VueJS ")]),_:2},1040)]),default:i(()=>[e($,null,{default:i(()=>[e(W,null,{append:i(()=>[e(A,{class:"ms-3"},{default:i(()=>[e(M,{icon:"",variant:"text",size:"x-small",color:"default",onClick:p[0]||(p[0]=l=>s.value=!1)},{default:i(()=>[e(f,{size:"20",icon:"tabler-x"})]),_:1})]),_:1})]),default:i(()=>[e(w,{class:"mb-2"},{default:i(()=>[a(" VueJS ")]),_:1}),e(L,null,{default:i(()=>[a("The Progressive JavaScript Framework")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),K=x({__name:"DemoChipInSelects",setup(m){const s=V(["Programming","Playing video games","Sleeping"]),u=V(["Streaming","Eating","Programming","Playing video games","Sleeping"]);return(p,l)=>(c(),h(R,{modelValue:r(s),"onUpdate:modelValue":l[0]||(l[0]=_=>k(s)?s.value=_:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"tabler-circle-x",items:r(u),label:"Your favorite hobbies","prepend-icon":"tabler-filter"},null,8,["modelValue","items"]))}}),G={},H={class:"demo-space-x"};function Q(m,s){return c(),v("div",H,[e(t,{size:"x-small"},{default:i(()=>[a(" x-small chip ")]),_:1}),e(t,{size:"small"},{default:i(()=>[a(" small chip ")]),_:1}),e(t,null,{default:i(()=>[a("Default")]),_:1}),e(t,{size:"large"},{default:i(()=>[a(" large chip ")]),_:1}),e(t,{size:"x-large"},{default:i(()=>[a(" x-large chip ")]),_:1})])}const X=g(G,[["render",Q]]),Z={class:"demo-space-x"},ee=o("span",null,"John Doe",-1),ie=o("span",null,"Darcy Nooser",-1),ae=o("span",null,"Felicia Risker",-1),te=o("span",null,"Minnie Mostly",-1),oe=x({__name:"DemoChipWithAvatar",setup(m){return(s,u)=>(c(),v("div",Z,[e(t,{pill:""},{default:i(()=>[e(I,{start:"",image:r(T)},null,8,["image"]),ee]),_:1}),e(t,{pill:""},{default:i(()=>[e(I,{start:"",image:r(B)},null,8,["image"]),ie]),_:1}),e(t,{pill:""},{default:i(()=>[e(I,{start:"",image:r(N)},null,8,["image"]),ae]),_:1}),e(t,{pill:""},{default:i(()=>[e(I,{start:"",image:r(U)},null,8,["image"]),te]),_:1})]))}}),le={},re={class:"demo-space-x"};function se(m,s){return c(),v("div",re,[e(t,null,{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-user"}),a(" Account ")]),_:1}),e(t,{color:"primary"},{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-star"}),a(" Premium ")]),_:1}),e(t,{color:"secondary"},{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-cake"}),a(" 1 Year ")]),_:1}),e(t,{color:"success"},{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-bell"}),a(" Notification ")]),_:1}),e(t,{color:"info"},{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-messages"}),a(" Message ")]),_:1}),e(t,{color:"warning"},{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-alert-triangle"}),a(" Warning ")]),_:1}),e(t,{color:"error"},{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-alert-circle"}),a(" Error ")]),_:1})])}const ce=g(le,[["render",se]]),ne={class:"demo-space-x"},pe=x({__name:"DemoChipClosable",setup(m){const s=V(!0),u=V(!0),p=V(!0),l=V(!0),_=V(!0),y=V(!0),S=V(!0);return(D,n)=>(c(),v("div",ne,[r(s)?(c(),h(t,{key:0,closable:"","onClick:close":n[0]||(n[0]=C=>s.value=!r(s))},{default:i(()=>[a(" Default ")]),_:1})):b("",!0),r(u)?(c(),h(t,{key:1,closable:"",color:"primary","onClick:close":n[1]||(n[1]=C=>u.value=!r(u))},{default:i(()=>[a(" Primary ")]),_:1})):b("",!0),r(p)?(c(),h(t,{key:2,closable:"",color:"secondary","onClick:close":n[2]||(n[2]=C=>p.value=!r(p))},{default:i(()=>[a(" Secondary ")]),_:1})):b("",!0),r(l)?(c(),h(t,{key:3,closable:"",color:"success","onClick:close":n[3]||(n[3]=C=>l.value=!r(l))},{default:i(()=>[a(" Success ")]),_:1})):b("",!0),r(_)?(c(),h(t,{key:4,closable:"",color:"info","onClick:close":n[4]||(n[4]=C=>_.value=!r(_))},{default:i(()=>[a(" Info ")]),_:1})):b("",!0),r(y)?(c(),h(t,{key:5,closable:"",color:"warning","onClick:close":n[5]||(n[5]=C=>y.value=!r(y))},{default:i(()=>[a(" Warning ")]),_:1})):b("",!0),r(S)?(c(),h(t,{key:6,closable:"",color:"error","onClick:close":n[6]||(n[6]=C=>S.value=!r(S))},{default:i(()=>[a(" Error ")]),_:1})):b("",!0)]))}}),me={},de={class:"demo-space-x"};function Ve(m,s){return c(),v("div",de,[e(t,{label:""},{default:i(()=>[a(" Default ")]),_:1}),e(t,{label:"",color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{label:"",color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{label:"",color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{label:"",color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{label:"",color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{label:"",color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const he=g(me,[["render",Ve]]),ue={},Ce={class:"demo-space-x"};function fe(m,s){return c(),v("div",Ce,[e(t,{variant:"outlined"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary",variant:"outlined"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary",variant:"outlined"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success",variant:"outlined"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info",variant:"outlined"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning",variant:"outlined"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error",variant:"outlined"},{default:i(()=>[a(" Error ")]),_:1})])}const ve=g(ue,[["render",fe]]),_e={},be={class:"demo-space-x"};function ge(m,s){return c(),v("div",be,[e(t,{variant:"elevated"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary",variant:"elevated"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary",variant:"elevated"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success",variant:"elevated"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info",variant:"elevated"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning",variant:"elevated"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error",variant:"elevated"},{default:i(()=>[a(" Error ")]),_:1})])}const ye=g(_e,[["render",ge]]),Se={},xe={class:"demo-space-x"};function Ie(m,s){return c(),v("div",xe,[e(t,null,{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const De=g(Se,[["render",Ie]]),ke={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},ze={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},Pe={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},Ee={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="tabler-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="tabler-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},$e={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing video games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing video games', 'Sleeping'])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-circle-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing video games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing video games',
  'Sleeping',
])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-circle-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>
`},We={ts:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},we={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},Le={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},Ae={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip pill>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar3"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip pill>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar3"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Me={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        size="16"
        icon="tabler-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        size="16"
        icon="tabler-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        size="16"
        icon="tabler-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        size="16"
        icon="tabler-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        size="16"
        icon="tabler-messages"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        size="16"
        icon="tabler-alert-triangle"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        size="16"
        icon="tabler-alert-circle"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        size="16"
        icon="tabler-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        size="16"
        icon="tabler-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        size="16"
        icon="tabler-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        size="16"
        icon="tabler-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        size="16"
        icon="tabler-messages"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        size="16"
        icon="tabler-alert-triangle"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        size="16"
        icon="tabler-alert-circle"
      />
      Error
    </VChip>
  </div>
</template>
`},Je=o("p",null,[a("Use "),o("code",null,"color"),a(" prop to change the background color of chips.")],-1),je=o("p",null,[a("Use "),o("code",null,"elevated"),a(" variant option to create filled chips.")],-1),Te=o("p",null,[a("Use "),o("code",null,"outlined"),a(" variant option to create outline border chips.")],-1),Be=o("p",null,[a("Label chips use the "),o("code",null,"v-card"),a(" border-radius. Use "),o("code",null,"label"),a(" prop to create label chips.")],-1),Ne=o("p",null,[a("Closable chips can be controlled with a "),o("code",null,"v-model"),a(".")],-1),Ue=o("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1),Fe=o("p",null,[a("Use "),o("code",null,"pill"),a(" prop to remove the "),o("code",null,"v-avatar"),a(" padding.")],-1),Re=o("p",null,[a("The "),o("code",null,"v-chip"),a(" component can have various sizes from "),o("code",null,"x-small"),a(" to "),o("code",null,"x-large"),a(".")],-1),Ye=o("p",null,[a("Selects can use "),o("code",null,"chips"),a(" to display the selected data. Try adding your own tags below.")],-1),Oe=o("p",null,[a("Chips can be combined with "),o("code",null,"v-menu"),a(" to enable a specific set of actions for a chip.")],-1),zi=x({__name:"chip",setup(m){return(s,u)=>{const p=De,l=Y,_=ye,y=ve,S=he,D=pe,n=ce,C=oe,z=X,P=K,E=q;return c(),h(O,{class:"match-height"},{default:i(()=>[e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Color",code:ze},{default:i(()=>[Je,e(p)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Elevated",code:Pe},{default:i(()=>[je,e(_)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Outlined",code:we},{default:i(()=>[Te,e(y)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Label",code:We},{default:i(()=>[Be,e(S)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Closable",code:ke},{default:i(()=>[Ne,e(D)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"With Icon",code:Me},{default:i(()=>[Ue,e(n)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"With Avatar",code:Ae},{default:i(()=>[Fe,e(C)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Sizes",code:Le},{default:i(()=>[Re,e(z)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"In Selects",code:$e},{default:i(()=>[Ye,e(P)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Expandable",code:Ee},{default:i(()=>[Oe,e(E)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{zi as default};
