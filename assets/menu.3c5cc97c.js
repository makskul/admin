import{V as T}from"./VTooltip.6ec3f34e.js";import{V as s}from"./VBtn.ff8d0fa0.js";import{V as p,a as L}from"./VList.4aea62ec.js";import{V as r}from"./VMenu.6e0fab37.js";import{d as V,o as u,b,w as e,p as t,bk as l,bl as c,C as M,z as n,m as i,k,q as B,cO as y,J as C,c as O,F as D,a as P,x as S}from"./index.ced6806d.js";import{V as A,c as $}from"./VCard.c7bdbb25.js";import{V as E}from"./VDivider.6fd0d2a4.js";import{V as j}from"./VCardActions.60dbb4b1.js";import{_ as I}from"./AppCardCode.vue_vue_type_style_index_0_lang.7474210e.js";import{V as f}from"./VCol.0d4aad2a.js";import{V as F}from"./VRow.65e1578a.js";import"./scopeId.88912388.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.20d37e12.js";import"./router.e693d955.js";import"./lazy.1bf3b72b.js";import"./easing.36b781ab.js";import"./VImg.9e1467de.js";import"./position.dc05b09b.js";import"./index.9b7e715d.js";import"./createSimpleFunctional.96761c7b.js";import"./VAvatar.3162c276.js";import"./dialog-transition.d0370070.js";import"./vue.runtime.esm-bundler.46083fd7.js";const J=i("span",null,"I am a Tooltip",-1),R=V({__name:"DemoMenuActivatorAndTooltip",setup(_){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),b(r,{location:"top"},{activator:e(({props:o})=>[t(T,{location:"top"},{activator:e(({props:v})=>[t(s,l(c(M(o,v))),{default:e(()=>[n(" Dropdown w/ Tooltip ")]),_:2},1040)]),default:e(()=>[J]),_:2},1024)]),default:e(()=>[t(p,{items:a})]),_:1}))}}),G=V({__name:"DemoMenuPopover",setup(_){const a=k(!1);return(d,m)=>(u(),b(r,{modelValue:B(a),"onUpdate:modelValue":m[0]||(m[0]=o=>C(a)?a.value=o:null),location:"top"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[n(" Menu as Popover ")]),_:2},1040)]),default:e(()=>[t(A,{"max-width":"300"},{default:e(()=>[t(p,null,{default:e(()=>[t(L,{"prepend-avatar":B(y),title:"John Leider",subtitle:"Founder of Vuetify"},null,8,["prepend-avatar"])]),_:1}),t(E),t($,null,{default:e(()=>[n(" Gingerbread bear claw cake. Souffl\xE9 candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon drag\xE9e toffee. ")]),_:1}),t(j,null,{default:e(()=>[t(s,{icon:"tabler-heart"}),t(s,{icon:"tabler-bookmark"}),t(s,{icon:"tabler-thumb-down"})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),H=V({__name:"DemoMenuOpenOnHover",setup(_){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),b(r,{"open-on-hover":""},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[n(" On hover ")]),_:2},1040)]),default:e(()=>[t(p,{items:a})]),_:1}))}}),N={class:"demo-space-x"},X=V({__name:"DemoMenuLocation",setup(_){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),O("div",N,[t(r,{location:"top"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[n(" Top ")]),_:2},1040)]),default:e(()=>[t(p,{items:a})]),_:1}),t(r,{location:"bottom"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[n(" Bottom ")]),_:2},1040)]),default:e(()=>[t(p,{items:a})]),_:1}),t(r,{location:"start"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[n(" Start ")]),_:2},1040)]),default:e(()=>[t(p,{items:a})]),_:1}),t(r,{location:"end"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[n(" End ")]),_:2},1040)]),default:e(()=>[t(p,{items:a})]),_:1})]))}}),Y={class:"demo-space-x"},z=V({__name:"DemoMenuCustomTransitions",setup(_){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),O("div",Y,[t(r,{transition:"scale-transition"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[n(" Scale Transition ")]),_:2},1040)]),default:e(()=>[t(p,{items:a})]),_:1}),t(r,{transition:"slide-x-transition"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[n(" Slide X Transition ")]),_:2},1040)]),default:e(()=>[t(p,{items:a})]),_:1}),t(r,{transition:"slide-y-transition"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[n(" Slide Y Transition ")]),_:2},1040)]),default:e(()=>[t(p,{items:a})]),_:1})]))}}),U={class:"demo-space-x"},q=V({__name:"DemoMenuBasic",setup(_){const a=["primary","secondary","success","info","warning","error"],d=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(m,o)=>(u(),O("div",U,[(u(),O(D,null,P(a,v=>t(r,{key:v},{activator:e(({props:h})=>[t(s,M({color:v},h),{default:e(()=>[n(S(v),1)]),_:2},1040,["color"])]),default:e(()=>[t(p,{items:d})]),_:2},1024)),64))]))}}),W={ts:`<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
import { mergeProps } from 'vue'

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},K={ts:`<script lang="ts" setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const menusVariant = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Q={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Z={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},tt={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},et={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard
      max-width="300"
    >
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Souffl\xE9 candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon drag\xE9e toffee.
      </VCardText>

      <VCardActions>
        <VBtn icon="tabler-heart" />
        <VBtn icon="tabler-bookmark" />
        <VBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard
      max-width="300"
    >
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Souffl\xE9 candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon drag\xE9e toffee.
      </VCardText>

      <VCardActions>
        <VBtn icon="tabler-heart" />
        <VBtn icon="tabler-bookmark" />
        <VBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`},ot=i("p",null," Remember to put the element that activates the menu in the activator slot. ",-1),nt=i("p",null,[n("Vuetify comes with 3 standard transitions, "),i("code",null,"scale"),n(", "),i("code",null,"slide-x"),n(" and "),i("code",null,"slide-y"),n(". Use "),i("code",null,"transition"),n(" prop to add transition to a menu.")],-1),at=i("p",null,[n("Menu can be offset relative to the activator by using the "),i("code",null,"location"),n(" prop.")],-1),it=i("p",null,[n("Menus can be accessed using hover instead of clicking with the "),i("code",null,"open-on-hover"),n(" prop.")],-1),st=i("p",null,"A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.",-1),pt=i("p",null,[n("With the new "),i("code",null,"v-slot"),n(" syntax, nested activators such as those seen with a "),i("code",null,"v-menu"),n(" and "),i("code",null,"v-tooltip"),n(" attached to the same activator button, need a particular setup in order to function correctly")],-1),Pt=V({__name:"menu",setup(_){return(a,d)=>{const m=q,o=I,v=z,h=X,x=H,w=G,g=R;return u(),b(F,{class:"match-height"},{default:e(()=>[t(f,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Basic",code:K},{default:e(()=>[ot,t(m)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Custom transitions",code:Q},{default:e(()=>[nt,t(v)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Location",code:Z},{default:e(()=>[at,t(h)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Open on hover",code:tt},{default:e(()=>[it,t(x)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Popover",code:et},{default:e(()=>[st,t(w)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Activator and tooltip",code:W},{default:e(()=>[pt,t(g)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Pt as default};
