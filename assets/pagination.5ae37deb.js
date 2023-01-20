import{V as u}from"./VPagination.18dc850f.js";import{d as P,k as p,o as g,c as v,p as e,q as m,J as d,b as V,y as U,w as s,m as l,z as o}from"./index.271fc182.js";import{_ as S}from"./AppCardCode.vue_vue_type_style_index_0_lang.cb64f7a1.js";import{V as f}from"./VCol.96e9c78b.js";import{V as C}from"./VRow.a790d5b4.js";import"./router.bcb89e70.js";import"./VBtn.b862c6e7.js";import"./position.9d325fa6.js";import"./vue.runtime.esm-bundler.a8190c77.js";import"./index.bab72839.js";import"./VCard.f954743c.js";import"./VCardActions.4e8d2d46.js";import"./createSimpleFunctional.0bc4199f.js";import"./VAvatar.017fdb34.js";import"./VImg.101e791b.js";import"./VDivider.9d123d77.js";const $={class:"d-flex flex-column gap-6"},w=P({__name:"DemoPaginationSize",setup(_){const t=p(1),r=p(2),n=p(3);return(a,i)=>(g(),v("div",$,[e(u,{modelValue:m(t),"onUpdate:modelValue":i[0]||(i[0]=c=>d(t)?t.value=c:null),length:7,size:"small"},null,8,["modelValue"]),e(u,{modelValue:m(r),"onUpdate:modelValue":i[1]||(i[1]=c=>d(r)?r.value=c:null),length:7},null,8,["modelValue"]),e(u,{modelValue:m(n),"onUpdate:modelValue":i[2]||(i[2]=c=>d(n)?n.value=c:null),length:7,size:"large"},null,8,["modelValue"])]))}}),j={class:"d-flex flex-column gap-6"},I=P({__name:"DemoPaginationColor",setup(_){const t=p(1),r=p(2),n=p(3);return(a,i)=>(g(),v("div",j,[e(u,{modelValue:m(t),"onUpdate:modelValue":i[0]||(i[0]=c=>d(t)?t.value=c:null),length:7,"active-color":"success"},null,8,["modelValue"]),e(u,{modelValue:m(r),"onUpdate:modelValue":i[1]||(i[1]=c=>d(r)?r.value=c:null),length:7,"active-color":"error"},null,8,["modelValue"]),e(u,{modelValue:m(n),"onUpdate:modelValue":i[2]||(i[2]=c=>d(n)?n.value=c:null),length:7,"active-color":"info"},null,8,["modelValue"])]))}}),B=P({__name:"DemoPaginationTotalVisible",setup(_){const t=p(1);return(r,n)=>(g(),V(u,{modelValue:m(t),"onUpdate:modelValue":n[0]||(n[0]=a=>d(t)?t.value=a:null),length:15,"total-visible":7},null,8,["modelValue"]))}}),y=P({__name:"DemoPaginationLength",setup(_){const t=p(1);return(r,n)=>(g(),V(u,{modelValue:m(t),"onUpdate:modelValue":n[0]||(n[0]=a=>d(t)?t.value=a:null),length:15},null,8,["modelValue"]))}}),E=P({__name:"DemoPaginationIcons",setup(_){const t=p(1);return(r,n)=>(g(),V(u,{modelValue:m(t),"onUpdate:modelValue":n[0]||(n[0]=a=>d(t)?t.value=a:null),length:5,"prev-icon":"tabler-caret-left","next-icon":"tabler-caret-right"},null,8,["modelValue"]))}}),T={};function k(_,t){return g(),V(u,{length:5,disabled:""})}const L=U(T,[["render",k]]),N=P({__name:"DemoPaginationCircle",setup(_){const t=p(1);return(r,n)=>(g(),V(u,{modelValue:m(t),"onUpdate:modelValue":n[0]||(n[0]=a=>d(t)?t.value=a:null),length:5,rounded:"circle"},null,8,["modelValue"]))}}),R=P({__name:"DemoPaginationBasic",setup(_){const t=p(1);return(r,n)=>(g(),V(u,{modelValue:m(t),"onUpdate:modelValue":n[0]||(n[0]=a=>d(t)?t.value=a:null),length:5},null,8,["modelValue"]))}}),q={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`},A={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`},J={ts:`<script setup lang="ts">
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`,js:`<script setup>
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`},Y={ts:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`,js:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`},F={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="tabler-caret-left"
    next-icon="tabler-caret-right"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="tabler-caret-left"
    next-icon="tabler-caret-right"
  />
</template>
`},G={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`},H={ts:`<script setup lang="ts">
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      size="large"
    />
  </div>
</template>
`,js:`<script setup>
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      size="large"
    />
  </div>
</template>
`},K={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="7"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="7"
  />
</template>
`},M=l("p",null,[o("The "),l("code",null,"v-pagination"),o(" component is used to separate long sets of data.")],-1),O=l("p",null,[o("The "),l("code",null,"rounded"),o(" prop allows you to render pagination buttons with alternative styles.")],-1),Q=l("p",null,[o("Pagination items can be manually deactivated using the "),l("code",null,"disabled"),o(" prop.")],-1),W=l("p",null,[o("Previous and next page icons can be customized with the "),l("code",null,"prev-icon"),o(" and "),l("code",null,"next-icon"),o(" props.")],-1),X=l("p",null,[o("Using the "),l("code",null,"length"),o(" prop you can set the length of "),l("code",null,"v-pagination"),o(", if the number of page buttons exceeds the parent container, it will truncate the list.")],-1),Z=l("p",null,[o("You can also manually set the maximum number of visible page buttons with the "),l("code",null,"total-visible"),o(" prop.")],-1),ee=l("p",null,[o("Use "),l("code",null,"active-color"),o(" prop for create different color pagination.")],-1),te=l("p",null,[o("Use "),l("code",null,"size"),o(" prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: "),l("strong",null,"x-small"),o(", "),l("strong",null,"small"),o(", "),l("strong",null,"default"),o(", "),l("strong",null,"large"),o(", and "),l("strong",null,"x-large"),o(".")],-1),Ve=P({__name:"pagination",setup(_){return(t,r)=>{const n=R,a=S,i=N,c=L,h=E,x=y,b=B,D=I,z=w;return g(),V(C,{class:"match-height"},{default:s(()=>[e(f,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Basic",code:q},{default:s(()=>[M,e(n)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Circle",code:A},{default:s(()=>[O,e(i)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Disabled",code:Y},{default:s(()=>[Q,e(c)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Icons",code:F},{default:s(()=>[W,e(h)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Length",code:G},{default:s(()=>[X,e(x)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Total visible",code:K},{default:s(()=>[Z,e(b)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Color",code:J},{default:s(()=>[ee,e(D)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Size",code:H},{default:s(()=>[te,e(z)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ve as default};
