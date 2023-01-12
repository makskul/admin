import{V as p}from"./VFileInput.dde4a7cc.js";import{d as f,x as h,$ as j,o as s,c,e as F,B as V,w as n,j as S,F as N,n as k,k as l,g as L,_ as m,b as e,f as t}from"./index.ea9c407c.js";import{V as U}from"./VChip.419e7526.js";import{V as a}from"./VCol.8ff38cc0.js";import{V as b}from"./VRow.9cae9a08.js";import{_ as A}from"./AppCardCode.vue_vue_type_style_index_0_lang.758dd095.js";import"./VField.f8e24a6b.js";import"./index.e3aaa912.js";import"./VInput.1cb82cfd.js";import"./router.54c3299b.js";import"./VImg.7e23cd37.js";import"./position.c1bb867e.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.8218e51f.js";import"./VBtn.ed86f128.js";import"./VAvatar.0f0866e8.js";import"./vue.runtime.esm-bundler.ca6803f6.js";import"./VCard.912ab4c3.js";import"./VCardActions.f17a3f27.js";import"./createSimpleFunctional.4435dbbc.js";import"./VDivider.31a5d647.js";const B=f({__name:"DemoFileInputLoading",setup(u){const o=h(),r=h(!0);return j(o,()=>{r.value=!o.value[0]}),(d,i)=>(s(),c(p,{modelValue:F(o),"onUpdate:modelValue":i[0]||(i[0]=_=>V(o)?o.value=_:null),loading:F(r),color:"primary",label:"File input"},null,8,["modelValue","loading"]))}}),P=f({__name:"DemoFileInputSelectionSlot",setup(u){const o=h([]);return(r,d)=>(s(),c(p,{modelValue:F(o),"onUpdate:modelValue":d[0]||(d[0]=i=>V(o)?o.value=i:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"tabler-paperclip"},{selection:n(({fileNames:i})=>[(s(!0),S(N,null,k(i,_=>(s(),c(U,{key:_,label:"",size:"small",variant:"outlined",color:"primary",class:"me-2"},{default:n(()=>[l(L(_),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}}),R=f({__name:"DemoFileInputValidation",setup(u){const o=[r=>!r||!r.length||r[0].size<1e6||"Avatar size should be less than 1 MB!"];return(r,d)=>(s(),c(p,{rules:o,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"tabler-camera"}))}}),M={};function T(u,o){return s(),c(p,{"show-size":"",label:"File input"})}const O=m(M,[["render",T]]),Y={};function E(u,o){return s(),c(p,{label:"File input","prepend-icon":"tabler-camera"})}const W=m(Y,[["render",E]]),q={};function G(u,o){return s(),c(p,{multiple:"",label:"File input"})}const H=m(q,[["render",G]]),J={};function K(u,o){return s(),c(p,{"show-size":"",counter:"",multiple:"",label:"File input"})}const Q=m(J,[["render",K]]),X={};function Z(u,o){return s(),c(p,{chips:"",label:"File input w/ chips"})}const ee=m(X,[["render",Z]]),le={};function te(u,o){return s(),c(p,{accept:"image/*",label:"File input"})}const ne=m(le,[["render",te]]),oe={};function ie(u,o){return s(),c(b,null,{default:n(()=>[e(a,{cols:"12",sm:"6"},{default:n(()=>[e(p,{label:"Outlined"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(p,{label:"Filled",variant:"filled"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(p,{label:"Solo",variant:"solo"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(p,{label:"Plain",variant:"plain"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(p,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const ae=m(oe,[["render",ie]]),pe={};function se(u,o){return s(),c(p,{label:"File input",density:"compact"})}const ce=m(pe,[["render",se]]),ue={};function re(u,o){return s(),c(p,{label:"File input"})}const me=m(ue,[["render",re]]),de={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},_e={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},fe={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},he={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},Fe={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},Ve={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`},be={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},ge={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`},Ie={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},ve={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},ye={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`},Ce={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},we=t("p",null,[l("The "),t("code",null,"v-file-input"),l(" component is used to selecting files.")],-1),ze=t("p",null,[l("You can reduces the file input height with "),t("code",null,"density"),l(" prop. Available options are: "),t("code",null,"default"),l(", "),t("code",null,"comfortable"),l(", and "),t("code",null,"compact"),l(".")],-1),$e=t("p",null,[l("use "),t("code",null,"solo"),l(", "),t("code",null,"filled"),l(", "),t("code",null,"outlined"),l(", "),t("code",null,"plain"),l(" and "),t("code",null,"underlined"),l(" option of "),t("code",null,"variant"),l(" prop to change the look of file input.")],-1),xe=t("p",null,[t("code",null,"v-file-input"),l(" component can accept only specific media formats/file types if you want.")],-1),De=t("p",null,[l("Use "),t("code",null,"chip"),l(" prop to display the selected file as a chip.")],-1),je=t("p",null,[l("When using the "),t("code",null,"show-size"),l(" property along with "),t("code",null,"counter"),l(", the total number of files and size will be displayed under the input.")],-1),Se=t("p",null,[l(" The "),t("code",null,"v-file-input"),l(" can contain multiple files at the same time when using the "),t("code",null,"multiple"),l(" prop. ")],-1),Ne=t("p",null,[l(" The "),t("code",null,"v-file-input"),l(" has a default "),t("code",null,"prepend-icon"),l(" that can be set on the component or adjusted globally. ")],-1),ke=t("p",null,[l("The displayed size of the selected file(s) can be configured with the "),t("code",null,"show-size"),l(" property.")],-1),Le=t("p",null,[l("You can use the "),t("code",null,"rules"),l(" prop to create your own custom validation parameters.")],-1),Ue=t("p",null,[l("Using the "),t("code",null,"selection"),l(" slot, you can customize the appearance of your input selections.")],-1),Ae=t("p",null,[l("Use "),t("code",null,"loading"),l(" prop to displays linear progress bar.")],-1),il=f({__name:"file-input",setup(u){return(o,r)=>{const d=me,i=A,_=ce,g=ae,I=ne,v=ee,y=Q,C=H,w=W,z=O,$=R,x=P,D=B;return s(),c(b,{class:"match-height"},{default:n(()=>[e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Basic",code:_e},{default:n(()=>[we,e(d)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Density",code:Fe},{default:n(()=>[ze,e(_)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12"},{default:n(()=>[e(i,{title:"Variant",code:Ce},{default:n(()=>[$e,e(g)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Accept",code:de},{default:n(()=>[xe,e(I)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Chips",code:fe},{default:n(()=>[De,e(v)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Counter",code:he},{default:n(()=>[je,e(y)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Multiple",code:be},{default:n(()=>[Se,e(C)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Prepend icon",code:ge},{default:n(()=>[Ne,e(w)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Show size",code:ve},{default:n(()=>[ke,e(z)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Validation",code:ye},{default:n(()=>[Le,e($)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Selection slot",code:Ie},{default:n(()=>[Ue,e(x)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Loading",code:Ve},{default:n(()=>[Ae,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{il as default};
