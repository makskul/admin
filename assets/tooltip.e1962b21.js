import{d as V,o as s,j as _,b as t,w as o,k as n,e as v,q as b,l as T,p as f,f as a,_ as u,x as $,c as B}from"./index.caf38268.js";import{V as i}from"./VTooltip.7d8f6bca.js";import{V as e}from"./VBtn.712e49fc.js";import{V as S}from"./VImg.816248d9.js";import{V as H}from"./VAvatar.0831a545.js";import{_ as D}from"./AppCardCode.vue_vue_type_style_index_0_lang.777c6fc5.js";import{a as d,V as k}from"./VRow.7823d4db.js";import"./scopeId.70c45aef.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.42d6e5db.js";import"./router.2201e90f.js";import"./lazy.92c181db.js";import"./easing.36b781ab.js";import"./position.76acdcd7.js";import"./vue.runtime.esm-bundler.e9fa3a77.js";import"./index.9c58c053.js";import"./VCard.c5638fda.js";import"./VCardActions.1b13d616.js";import"./createSimpleFunctional.62ffac02.js";import"./VDivider.3dc86b85.js";const E={class:"demo-space-x"},I=a("span",null,"Tooltip on Icon",-1),A=V({__name:"DemoTooltipTooltipOnVariousElements",setup(r){return(l,m)=>(s(),_("div",E,[t(e,null,{default:o(()=>[n(" Button "),t(i,{location:"top",activator:"parent"},{default:o(()=>[n(" Tooltip ")]),_:1})]),_:1}),t(H,{color:"info"},{default:o(()=>[t(S,{src:v(b)},null,8,["src"]),t(i,{location:"top",activator:"parent"},{default:o(()=>[n(" Tooltip on Avatar ")]),_:1})]),_:1}),t(i,{location:"top"},{activator:o(({props:c})=>[t(T,f(c,{size:"30",icon:"tabler-user"}),null,16)]),default:o(()=>[I]),_:1})]))}}),w={},j={class:"demo-space-x"},C=a("span",null,"Scale Transition",-1),F=a("span",null,"Scroll X Transition",-1),X=a("span",null,"Scroll Y Transition",-1);function M(r,l){return s(),_("div",j,[t(e,null,{default:o(()=>[n(" scale transition "),t(i,{location:"top",transition:"scale-transition",activator:"parent"},{default:o(()=>[C]),_:1})]),_:1}),t(e,null,{default:o(()=>[n(" scroll X transition "),t(i,{location:"top",activator:"parent",transition:"scroll-x-transition"},{default:o(()=>[F]),_:1})]),_:1}),t(e,null,{default:o(()=>[n(" scroll y transition "),t(i,{location:"top",activator:"parent",transition:"scroll-y-transition"},{default:o(()=>[X]),_:1})]),_:1})])}const P=u(w,[["render",M]]),z={class:"demo-space-x"},N=a("span",null,"Programmatic tooltip",-1),Y=V({__name:"DemoTooltipVModelSupport",setup(r){const l=$(!1);return(m,c)=>(s(),_("div",z,[t(e,{onClick:c[0]||(c[0]=p=>l.value=!v(l))},{default:o(()=>[n(" toggle tooltip ")]),_:1}),t(i,{"model-value":v(l),location:"top"},{activator:o(({props:p})=>[t(T,f(p,{icon:"tabler-brand-instagram"}),null,16)]),default:o(()=>[N]),_:1},8,["model-value"])]))}}),L={},U=a("span",null,"Open Delay On Hover",-1),q=a("span",null,"Open Delay On Hover",-1);function R(r,l){return s(),B(e,{variant:"outlined"},{default:o(()=>[U,n(),t(i,{"open-delay":"500",location:"top",activator:"parent"},{default:o(()=>[q]),_:1})]),_:1})}const G=u(L,[["render",R]]),J={},K={class:"demo-space-x"},Q=a("span",null,"Open On Hover",-1),W=a("span",null,"Open On click",-1),Z=a("span",null,"Open On Hover + Focus",-1);function tt(r,l){return s(),_("div",K,[t(e,{variant:"outlined"},{default:o(()=>[Q,t(i,{activator:"parent",location:"top"},{default:o(()=>[n(" Open On Hover ")]),_:1})]),_:1}),t(e,{variant:"outlined",color:"primary"},{default:o(()=>[W,t(i,{"open-on-click":"","open-on-hover":!1,location:"top",activator:"parent"},{default:o(()=>[n(" Open On click ")]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[Z,t(i,{"open-on-focus":"",location:"top",activator:"parent"},{default:o(()=>[n(" Open On Hover + Focus ")]),_:1})]),_:1})])}const ot=u(J,[["render",tt]]),nt={},at={class:"demo-space-x"};function it(r,l){return s(),_("div",at,[t(e,{variant:"outlined"},{default:o(()=>[n(" Tooltip on End "),t(i,{activator:"parent",location:"end"},{default:o(()=>[n(" End Tooltip ")]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[n(" Tooltip on Start "),t(i,{activator:"parent",location:"start"},{default:o(()=>[n(" Start Tooltip ")]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[n(" Tooltip on Top "),t(i,{activator:"parent",location:"top"},{default:o(()=>[n(" Top Tooltip ")]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[n(" Tooltip on Bottom "),t(i,{activator:"parent",location:"bottom"},{default:o(()=>[n(" Bottom Tooltip ")]),_:1})]),_:1})])}const et=u(nt,[["render",it]]),lt={ts:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`,js:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`},pt={ts:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`},st={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`},rt={ts:`<script setup lang="ts">
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="tabler-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="tabler-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`},ct={ts:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`},dt={ts:`<script lang="ts" setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="tabler-brand-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="tabler-brand-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`},_t=a("p",null,[n("Use the "),a("code",null,"location"),n(" prop to specify on which side of the element the tooltip should show")],-1),ut=a("p",null,[n("Delay (in ms) after which tooltip opens (when "),a("code",null,"open-on-hover"),n(" prop is set to true)")],-1),vt=a("p",null,[n("Tooltip visibility can be programmatically changed using "),a("code",null,"v-model"),n(".")],-1),Vt=a("p",null,[n("Use "),a("code",null,"transition"),n(" prop to sets the component transition.")],-1),mt=a("p",null,"Tooltips can wrap any element.",-1),Ft=V({__name:"tooltip",setup(r){return(l,m)=>{const c=et,p=D,O=ot,h=G,x=Y,y=P,g=A;return s(),B(k,null,{default:o(()=>[t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Location",code:st},{default:o(()=>[_t,t(c)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Events",code:pt},{default:o(()=>[t(O)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Delay On Hover",code:lt},{default:o(()=>[ut,t(h)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"V-Model Support",code:dt},{default:o(()=>[vt,t(x)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Transition",code:ct},{default:o(()=>[Vt,t(y)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Tooltip on Various Elements",code:rt},{default:o(()=>[mt,t(g)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ft as default};
