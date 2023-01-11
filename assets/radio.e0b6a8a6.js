import{a as s,V as p}from"./VRadioGroup.7c934339.js";import{d as v,x as m,o as u,c as G,w as t,j as f,F as b,n as y,b as o,e as c,B as R,f as a,k as i}from"./index.caf38268.js";import{V as g}from"./VDivider.3dc86b85.js";import{_ as x}from"./AppCardCode.vue_vue_type_style_index_0_lang.777c6fc5.js";import{a as _,V as L}from"./VRow.7823d4db.js";import"./VSelectionControl.a99a28cf.js";import"./router.2201e90f.js";import"./VInput.5f868937.js";import"./index.9c58c053.js";import"./VImg.816248d9.js";import"./vue.runtime.esm-bundler.e9fa3a77.js";import"./VCard.c5638fda.js";import"./VCardActions.1b13d616.js";import"./createSimpleFunctional.62ffac02.js";import"./VAvatar.0831a545.js";import"./position.76acdcd7.js";import"./VBtn.712e49fc.js";const C=v({__name:"DemoRadioValidation",setup(V){const l=m(1),r=[d=>d!==3?!0:"Do not select the third one!"];return(d,e)=>(u(),G(p,{modelValue:c(l),"onUpdate:modelValue":e[0]||(e[0]=n=>R(l)?l.value=n:null),inline:"",rules:r},{default:t(()=>[(u(),f(b,null,y(3,n=>o(s,{key:n,error:c(l)===3,label:`Radio ${n}`,value:n},null,8,["error","label","value"])),64))]),_:1},8,["modelValue"]))}}),w=v({__name:"DemoRadioIcon",setup(V){const l=m(1);return(r,d)=>(u(),G(p,{modelValue:c(l),"onUpdate:modelValue":d[0]||(d[0]=e=>R(l)?l.value=e:null),"false-icon":"tabler-bell-off","true-icon":"tabler-bell"},{default:t(()=>[(u(),f(b,null,y(2,e=>o(s,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"]))}}),U=a("div",null,[i("Your favorite "),a("strong",null,"search engine")],-1),S=a("div",null,[i("Of course it's "),a("strong",{class:"text-success"},"Google")],-1),j=a("div",null,[i("Definitely "),a("strong",{class:"text-primary"},"Duckduckgo")],-1),I=v({__name:"DemoRadioLabelSlot",setup(V){const l=m("Duckduckgo");return(r,d)=>(u(),G(p,{modelValue:c(l),"onUpdate:modelValue":d[0]||(d[0]=e=>R(l)?l.value=e:null)},{label:t(()=>[U]),default:t(()=>[o(s,{value:"Google"},{label:t(()=>[S]),_:1}),o(s,{value:"Duckduckgo"},{label:t(()=>[j]),_:1})]),_:1},8,["modelValue"]))}}),B=v({__name:"DemoRadioDensity",setup(V){const l=m("radio-1"),r=m("radio-1");return(d,e)=>(u(),f(b,null,[o(p,{modelValue:c(l),"onUpdate:modelValue":e[0]||(e[0]=n=>R(l)?l.value=n:null)},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1",density:"compact"}),o(s,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"]),o(g,{class:"my-3"}),o(p,{modelValue:c(r),"onUpdate:modelValue":e[1]||(e[1]=n=>R(r)?r.value=n:null),inline:""},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1",density:"compact"}),o(s,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"])],64))}}),E=v({__name:"DemoRadioInline",setup(V){const l=m("radio-1"),r=m("radio-1");return(d,e)=>(u(),f(b,null,[o(p,{modelValue:c(l),"onUpdate:modelValue":e[0]||(e[0]=n=>R(l)?l.value=n:null)},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1"}),o(s,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),o(g,{class:"my-4"}),o(p,{modelValue:c(r),"onUpdate:modelValue":e[1]||(e[1]=n=>R(r)?r.value=n:null),inline:""},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1"}),o(s,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])],64))}}),A=v({__name:"DemoRadioColors",setup(V){const l=m("primary"),r=["Primary","Secondary","Success","Info","Warning","Error"];return(d,e)=>(u(),G(p,{modelValue:c(l),"onUpdate:modelValue":e[0]||(e[0]=n=>R(l)?l.value=n:null),inline:""},{default:t(()=>[a("div",null,[(u(),f(b,null,y(r,n=>o(s,{key:n,label:n,color:n.toLocaleLowerCase(),value:n.toLocaleLowerCase()},null,8,["label","color","value"])),64))])]),_:1},8,["modelValue"]))}}),F={class:""},N=v({__name:"DemoRadioBasic",setup(V){const l=m(1);return(r,d)=>(u(),f("div",F,[o(p,{modelValue:c(l),"onUpdate:modelValue":d[0]||(d[0]=e=>R(l)?l.value=e:null)},{default:t(()=>[(u(),f(b,null,y(2,e=>o(s,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]))}}),P={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`},T={ts:`<script lang="ts" setup>
const selectedRadio = ref('primary')
const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`,js:`<script setup>
const selectedRadio = ref('primary')

const colorsRadio = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
]
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`},W={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`},Y={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="tabler-bell-off"
    true-icon="tabler-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="tabler-bell-off"
    true-icon="tabler-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},H={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`},M={ts:`<script lang="ts" setup>
const radios = ref('Duckduckgo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>Of course it's <strong class="text-success">Google</strong></div>
      </template>
    </VRadio>

    <VRadio value="Duckduckgo">
      <template #label>
        <div>Definitely <strong class="text-primary">Duckduckgo</strong></div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`,js:`<script setup>
const radios = ref('Duckduckgo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>Of course it's <strong class="text-success">Google</strong></div>
      </template>
    </VRadio>

    <VRadio value="Duckduckgo">
      <template #label>
        <div>Definitely <strong class="text-primary">Duckduckgo</strong></div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`},q={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
const rules = [(value: number) => (value !== 3 ? true : 'Do not select the third one!')]
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
const rules = [value => value !== 3 ? true : 'Do not select the third one!']
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},z=a("p",null,[i("The "),a("code",null,"v-radio"),i(" component is a simple radio button.")],-1),J=a("p",null,[i("Radios can be colored by using any of the built-in colors and contextual names using the "),a("code",null,"color"),i(" prop.")],-1),K=a("p",null,[i("Use "),a("code",null,"inline"),i(" prop to displays radio buttons in row.")],-1),Q=a("p",null,[i("Use "),a("code",null,"density"),i(" prop to adjusts the spacing within the component. Available options are: "),a("code",null,"default"),i(", "),a("code",null,"comfortable"),i(", and "),a("code",null,"compact"),i(".")],-1),X=a("p",null,[i("Radio Group labels can be defined in "),a("code",null,"label"),i(" slot - that will allow to use HTML content.")],-1),Z=a("p",null,[i("Use "),a("code",null,"false-icon"),i(" and "),a("code",null,"true-icon"),i(" prop to set icon on inactive and active state.")],-1),oo=a("p",null,[i("Use "),a("code",null,"rules"),i(" prop to validate a radio. Accepts a mixed array of types "),a("code",null,"function"),i(", "),a("code",null,"boolean"),i(" and "),a("code",null,"string"),i(". Functions pass an input value as an argument and must return either "),a("code",null,"true"),i(" / "),a("code",null,"false"),i(" or a string containing an error message.")],-1),bo=v({__name:"radio",setup(V){return(l,r)=>{const d=N,e=x,n=A,D=E,k=B,O=I,h=w,$=C;return u(),G(L,{class:"match-height"},{default:t(()=>[o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Basic",code:P},{default:t(()=>[z,o(d)]),_:1},8,["code"])]),_:1}),o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Colors",code:T},{default:t(()=>[J,o(n)]),_:1},8,["code"])]),_:1}),o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Inline",code:H},{default:t(()=>[K,o(D)]),_:1},8,["code"])]),_:1}),o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Density",code:W},{default:t(()=>[Q,o(k)]),_:1},8,["code"])]),_:1}),o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Label Slot",code:M},{default:t(()=>[X,o(O)]),_:1},8,["code"])]),_:1}),o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Icon",code:Y},{default:t(()=>[Z,o(h)]),_:1},8,["code"])]),_:1}),o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Validation",code:q},{default:t(()=>[oo,o($)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{bo as default};
