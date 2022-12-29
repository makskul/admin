import{m as ae,f as oe,V as ie}from"./VField.abff57dc.js";import{m as se,f as ce,a as ue}from"./VInput.5f63bb3e.js";import{f as pe}from"./forwardRefs.c003b6b8.js";import{R as re,au as de,ar as me,ac as _e,a1 as y,cS as E,k as I,a0 as fe,az as he,p as e,C as N,F as B,bc as O,a5 as ve,d as j,a3 as Ve,o as p,b as r,q as L,J as H,w as a,c as Fe,a as be,z as t,x as ge,y as V,m as n}from"./index.54e47bbc.js";import{V as Y}from"./VChip.1587931e.js";import{V as Ie}from"./VCounter.a125912c.js";import{a as c,V as q}from"./VRow.44517ae3.js";import{_ as ye}from"./AppCardCode.vue_vue_type_style_index_0_lang.8f25d37d.js";import"./index.0fb74ba2.js";import"./position.d42c9754.js";import"./router.0db38488.js";import"./easing.36b781ab.js";import"./VImg.cc1c5f29.js";import"./VBtn.604c43f4.js";import"./VAvatar.29db4047.js";import"./vue.runtime.esm-bundler.df3f14f8.js";import"./VCard.29967394.js";import"./VDivider.478efb1c.js";const u=re({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,hint:String,persistentHint:Boolean,placeholder:String,showSize:{type:[Boolean,Number],default:!1,validator:l=>typeof l=="boolean"||[1e3,1024].includes(l)},...se({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:l=>de(l).every(i=>i!=null&&typeof i=="object")},...ae({clearable:!0})},emits:{"click:control":l=>!0,"update:modelValue":l=>!0},setup(l,i){let{attrs:d,emit:F,slots:o}=i;const{t:h}=me(),m=_e(l,"modelValue"),k=y(()=>typeof l.showSize!="boolean"?l.showSize:void 0),S=y(()=>{var s;return((s=m.value)!=null?s:[]).reduce((_,v)=>{let{size:w=0}=v;return _+w},0)}),$=y(()=>E(S.value,k.value)),C=y(()=>{var s;return((s=m.value)!=null?s:[]).map(_=>{const{name:v="",size:w=0}=_;return l.showSize?`${v} (${E(w,k.value)})`:v})}),A=y(()=>{var v;var s;const _=(v=(s=m.value)==null?void 0:s.length)!=null?v:0;return l.showSize?h(l.counterSizeString,_,$.value):h(l.counterString,_)}),D=I(),P=I(),b=I(!1),f=I(),J=y(()=>l.messages.length?l.messages:l.persistentHint?l.hint:"");function R(){if(f.value!==document.activeElement){var s;(s=f.value)==null||s.focus()}b.value||(b.value=!0)}function W(s){O(l["onClick:prepend"],s),U(s)}function U(s){var _;(_=f.value)==null||_.click(),F("click:control",s)}function G(s){s.stopPropagation(),R(),ve(()=>{m.value=[],f!=null&&f.value&&(f.value.value=""),O(l["onClick:clear"],s)})}return fe(()=>{const s=!!(o.counter||l.counter),_=!!(s||o.details),[v,w]=he(d),[{modelValue:Cl,...K}]=ce(l),[Q]=oe(l);return e(ue,N({ref:D,modelValue:m.value,"onUpdate:modelValue":z=>m.value=z,class:"v-file-input","onClick:prepend":W,"onClick:append":l["onClick:append"]},v,K,{focused:b.value,messages:J.value}),{...o,default:z=>{let{isDisabled:x,isDirty:M,isReadonly:X,isValid:Z}=z;return e(ie,N({ref:P,"prepend-icon":l.prependIcon,"onClick:control":U,"onClick:clear":G,"onClick:prependInner":l["onClick:prependInner"],"onClick:appendInner":l["onClick:appendInner"]},Q,{active:M.value||b.value,dirty:M.value,focused:b.value,error:Z.value===!1}),{...o,default:ee=>{let{props:{class:le,...te}}=ee;return e(B,null,[e("input",N({ref:f,type:"file",readonly:X.value,disabled:x.value,multiple:l.multiple,name:l.name,onClick:g=>{g.stopPropagation(),R()},onChange:g=>{var T;if(!g.target)return;const ne=g.target;m.value=[...(T=ne.files)!=null?T:[]]},onFocus:R,onBlur:()=>b.value=!1},te,w),null),e("div",{class:le},[m.value.length>0&&(o.selection?o.selection({fileNames:C.value,totalBytes:S.value,totalBytesReadable:$.value}):l.chips?C.value.map(g=>e(Y,{key:g,size:"small",color:l.color},{default:()=>[g]})):C.value.join(", "))])])}})},details:_?z=>{var x;return e(B,null,[(x=o.details)==null?void 0:x.call(o,z),s&&e(B,null,[e("span",null,null),e(Ie,{active:!!m.value.length,value:A.value},o.counter)])])}:void 0})}),pe({},D,P,f)}}),Ce=j({__name:"DemoFileInputLoading",setup(l){const i=I(),d=I(!0);return Ve(i,()=>{d.value=!i.value[0]}),(F,o)=>(p(),r(u,{modelValue:L(i),"onUpdate:modelValue":o[0]||(o[0]=h=>H(i)?i.value=h:null),loading:L(d),color:"primary",label:"File input"},null,8,["modelValue","loading"]))}}),we=j({__name:"DemoFileInputSelectionSlot",setup(l){const i=I([]);return(d,F)=>(p(),r(u,{modelValue:L(i),"onUpdate:modelValue":F[0]||(F[0]=o=>H(i)?i.value=o:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"tabler-paperclip"},{selection:a(({fileNames:o})=>[(p(!0),Fe(B,null,be(o,h=>(p(),r(Y,{key:h,label:"",size:"small",variant:"outlined",color:"primary",class:"me-2"},{default:a(()=>[t(ge(h),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}}),ze=j({__name:"DemoFileInputValidation",setup(l){const i=[d=>!d||!d.length||d[0].size<1e6||"Avatar size should be less than 1 MB!"];return(d,F)=>(p(),r(u,{rules:i,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"tabler-camera"}))}}),ke={};function Se(l,i){return p(),r(u,{"show-size":"",label:"File input"})}const $e=V(ke,[["render",Se]]),De={};function Pe(l,i){return p(),r(u,{label:"File input","prepend-icon":"tabler-camera"})}const xe=V(De,[["render",Pe]]),Be={};function je(l,i){return p(),r(u,{multiple:"",label:"File input"})}const Ae=V(Be,[["render",je]]),Re={};function Ne(l,i){return p(),r(u,{"show-size":"",counter:"",multiple:"",label:"File input"})}const Le=V(Re,[["render",Ne]]),Ue={};function Me(l,i){return p(),r(u,{chips:"",label:"File input w/ chips"})}const Te=V(Ue,[["render",Me]]),Ee={};function Oe(l,i){return p(),r(u,{accept:"image/*",label:"File input"})}const He=V(Ee,[["render",Oe]]),Ye={};function qe(l,i){return p(),r(q,null,{default:a(()=>[e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Outlined"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Filled",variant:"filled"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Solo",variant:"solo"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Plain",variant:"plain"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const Je=V(Ye,[["render",qe]]),We={};function Ge(l,i){return p(),r(u,{label:"File input",density:"compact"})}const Ke=V(We,[["render",Ge]]),Qe={};function Xe(l,i){return p(),r(u,{label:"File input"})}const Ze=V(Qe,[["render",Xe]]),el={ts:`<template>
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
`},ll={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},tl={ts:`<template>
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
`},nl={ts:`<template>
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
`},al={ts:`<template>
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
`},ol={ts:`<script setup lang="ts">
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
`},il={ts:`<template>
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
`},sl={ts:`<template>
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
`},cl={ts:`<script lang="ts" setup>
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
`},ul={ts:`<template>
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
`},pl={ts:`<script lang="ts" setup>
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
`},rl={ts:`<template>
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
`},dl=n("p",null,[t("The "),n("code",null,"v-file-input"),t(" component is used to selecting files.")],-1),ml=n("p",null,[t("You can reduces the file input height with "),n("code",null,"density"),t(" prop. Available options are: "),n("code",null,"default"),t(", "),n("code",null,"comfortable"),t(", and "),n("code",null,"compact"),t(".")],-1),_l=n("p",null,[t("use "),n("code",null,"solo"),t(", "),n("code",null,"filled"),t(", "),n("code",null,"outlined"),t(", "),n("code",null,"plain"),t(" and "),n("code",null,"underlined"),t(" option of "),n("code",null,"variant"),t(" prop to change the look of file input.")],-1),fl=n("p",null,[n("code",null,"v-file-input"),t(" component can accept only specific media formats/file types if you want.")],-1),hl=n("p",null,[t("Use "),n("code",null,"chip"),t(" prop to display the selected file as a chip.")],-1),vl=n("p",null,[t("When using the "),n("code",null,"show-size"),t(" property along with "),n("code",null,"counter"),t(", the total number of files and size will be displayed under the input.")],-1),Vl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" can contain multiple files at the same time when using the "),n("code",null,"multiple"),t(" prop. ")],-1),Fl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" has a default "),n("code",null,"prepend-icon"),t(" that can be set on the component or adjusted globally. ")],-1),bl=n("p",null,[t("The displayed size of the selected file(s) can be configured with the "),n("code",null,"show-size"),t(" property.")],-1),gl=n("p",null,[t("You can use the "),n("code",null,"rules"),t(" prop to create your own custom validation parameters.")],-1),Il=n("p",null,[t("Using the "),n("code",null,"selection"),t(" slot, you can customize the appearance of your input selections.")],-1),yl=n("p",null,[t("Use "),n("code",null,"loading"),t(" prop to displays linear progress bar.")],-1),Ol=j({__name:"file-input",setup(l){return(i,d)=>{const F=Ze,o=ye,h=Ke,m=Je,k=He,S=Te,$=Le,C=Ae,A=xe,D=$e,P=ze,b=we,f=Ce;return p(),r(q,{class:"match-height"},{default:a(()=>[e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Basic",code:ll},{default:a(()=>[dl,e(F)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Density",code:al},{default:a(()=>[ml,e(h)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12"},{default:a(()=>[e(o,{title:"Variant",code:rl},{default:a(()=>[_l,e(m)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Accept",code:el},{default:a(()=>[fl,e(k)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Chips",code:tl},{default:a(()=>[hl,e(S)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Counter",code:nl},{default:a(()=>[vl,e($)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Multiple",code:il},{default:a(()=>[Vl,e(C)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Prepend icon",code:sl},{default:a(()=>[Fl,e(A)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Show size",code:ul},{default:a(()=>[bl,e(D)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Validation",code:pl},{default:a(()=>[gl,e(P)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Selection slot",code:cl},{default:a(()=>[Il,e(b)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Loading",code:ol},{default:a(()=>[yl,e(f)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ol as default};
