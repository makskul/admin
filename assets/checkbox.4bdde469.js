import{V as x}from"./VCol.d464f315.js";import{V as b}from"./VCheckbox.509ec6d0.js";import{V as _}from"./VTextField.78ad04ff.js";import{V as C}from"./VRow.15b46b92.js";import{d as k,k as m,o as h,c as v,p as e,w as i,q as a,K as u,F as V,b as g,m as s,A as d,D as O,b5 as I,y as U,a as $}from"./index.218d9c70.js";import{V as z}from"./VTooltip.12a240fb.js";import{_ as D}from"./AppCardCode.vue_vue_type_style_index_0_lang.bba1d666.js";import"./VInput.72253e4c.js";import"./router.f373c6c7.js";import"./index.59f2c4af.js";import"./VImg.b67ccdea.js";import"./VCheckboxBtn.eddc661f.js";import"./VSelectionControl.70166856.js";/* empty css                   */import"./VField.98d26802.js";import"./position.b9276cfd.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.3a750ab9.js";import"./scopeId.669b12f4.js";import"./VOverlay.9f5216bd.js";import"./lazy.3b470ba8.js";import"./vue.runtime.esm-bundler.71e405ca.js";import"./VCard.c658538b.js";import"./VCardActions.b00c2686.js";import"./createSimpleFunctional.c603bc67.js";import"./VAvatar.6b594d0f.js";import"./VBtn.500f4230.js";import"./group.331a1268.js";import"./VDivider.81b9b868.js";const J=k({__name:"DemoCheckboxInlineTextField",setup(f){const o=m(!0),t=m(!1);return(r,l)=>(h(),v(V,null,[e(C,null,{default:i(()=>[e(x,{sm:"1",cols:"2"},{default:i(()=>[e(b,{modelValue:a(o),"onUpdate:modelValue":l[0]||(l[0]=c=>u(o)?o.value=c:null)},null,8,["modelValue"])]),_:1}),e(x,{sm:"11",cols:"10"},{default:i(()=>[e(_,{label:"Include files"})]),_:1})]),_:1}),e(C,null,{default:i(()=>[e(x,{cols:"2",sm:"1"},{default:i(()=>[e(b,{modelValue:a(t),"onUpdate:modelValue":l[1]||(l[1]=c=>u(t)?t.value=c:null)},null,8,["modelValue"])]),_:1}),e(x,{cols:"10",sm:"11"},{default:i(()=>[e(_,{disabled:!a(t),label:"I only work if you check the box"},null,8,["disabled"])]),_:1})]),_:1})],64))}}),A=k({__name:"DemoCheckboxLabelSlot",setup(f){const o=m(!1);return(t,r)=>(h(),g(b,{modelValue:a(o),"onUpdate:modelValue":r[1]||(r[1]=l=>u(o)?o.value=l:null)},{label:i(()=>[s("div",null,[d(" I agree that "),e(z,{location:"bottom"},{activator:i(({props:l})=>[s("a",O({href:"https://vuetifyjs.com/",target:"_blank",rel:"noopener noreferrer"},l,{onClick:r[0]||(r[0]=I(()=>{},["stop"]))})," Vuetify ",16)]),default:i(()=>[d(" Opens in new window ")]),_:1}),d(" is awesome ")])]),_:1},8,["modelValue"]))}}),F={class:"demo-space-x"},j=k({__name:"DemoCheckboxStates",setup(f){const o=m(!0),t=m(!0),r=m(!0),l=m(!1);return(c,n)=>(h(),v("div",F,[e(b,{modelValue:a(o),"onUpdate:modelValue":n[0]||(n[0]=p=>u(o)?o.value=p:null),label:"On"},null,8,["modelValue"]),e(b,{modelValue:a(l),"onUpdate:modelValue":n[1]||(n[1]=p=>u(l)?l.value=p:null),label:"Off"},null,8,["modelValue"]),e(b,{indeterminate:a(t),"onUpdate:indeterminate":n[2]||(n[2]=p=>u(t)?t.value=p:null),modelValue:a(t),"onUpdate:modelValue":n[3]||(n[3]=p=>u(t)?t.value=p:null),label:"Indeterminate"},null,8,["indeterminate","modelValue"]),e(b,{"model-value":a(r),disabled:"",label:"On disabled"},null,8,["model-value"]),e(b,{disabled:"",label:"Off disabled"})]))}}),E={class:"demo-space-x"},R=k({__name:"DemoCheckboxCheckboxValue",setup(f){const o=m(1),t=m("Show");return(r,l)=>(h(),v("div",E,[e(b,{modelValue:a(o),"onUpdate:modelValue":l[0]||(l[0]=c=>u(o)?o.value=c:null),"true-value":1,"false-value":0,label:`${a(o).toString()}`},null,8,["modelValue","label"]),e(b,{modelValue:a(t),"onUpdate:modelValue":l[1]||(l[1]=c=>u(t)?t.value=c:null),"true-value":"Show","false-value":"Hide",color:"success",label:`${a(t).toString()}`},null,8,["modelValue","label"])]))}}),B={class:"demo-space-x"},M=k({__name:"DemoCheckboxIcon",setup(f){const o=m(!0),t=m(!0),r=m(!0),l=c=>{const n=c.toString();return n.charAt(0).toUpperCase()+n.slice(1)};return(c,n)=>(h(),v("div",B,[e(b,{modelValue:a(o),"onUpdate:modelValue":n[0]||(n[0]=p=>u(o)?o.value=p:null),label:l(a(o)),"true-icon":"tabler-check","false-icon":"tabler-x"},null,8,["modelValue","label"]),e(b,{modelValue:a(t),"onUpdate:modelValue":n[1]||(n[1]=p=>u(t)?t.value=p:null),label:l(a(t)),"true-icon":"tabler-alarm","false-icon":"tabler-alarm",color:"success"},null,8,["modelValue","label"]),e(b,{modelValue:a(r),"onUpdate:modelValue":n[2]||(n[2]=p=>u(r)?r.value=p:null),label:l(a(r)),"true-icon":"tabler-check","false-icon":"tabler-circle-x",color:"error"},null,8,["modelValue","label"])]))}}),H={class:"demo-space-x"},P={class:"mt-1"},N=k({__name:"DemoCheckboxModelAsArray",setup(f){const o=m(["John"]);return(t,r)=>(h(),v(V,null,[s("div",H,[e(b,{modelValue:a(o),"onUpdate:modelValue":r[0]||(r[0]=l=>u(o)?o.value=l:null),label:"John",value:"John"},null,8,["modelValue"]),e(b,{modelValue:a(o),"onUpdate:modelValue":r[1]||(r[1]=l=>u(o)?o.value=l:null),label:"Jacob",color:"success",value:"Jacob"},null,8,["modelValue"]),e(b,{modelValue:a(o),"onUpdate:modelValue":r[2]||(r[2]=l=>u(o)?o.value=l:null),label:"Johnson",color:"info",value:"Johnson"},null,8,["modelValue"])]),s("p",P,U(a(o)),1)],64))}}),W={class:"demo-space-x"},q=k({__name:"DemoCheckboxColors",setup(f){const o=m(["Primary","Secondary","Success","Info","Warning","Error"]),t=m([]);return(r,l)=>(h(),v("div",W,[(h(!0),v(V,null,$(a(o),c=>(h(),g(b,{key:c,modelValue:a(t),"onUpdate:modelValue":l[0]||(l[0]=n=>u(t)?t.value=n:null),label:c,color:c.toLowerCase(),value:c},null,8,["modelValue","label","color","value"]))),128))]))}}),K={class:"demo-space-x"},Y=k({__name:"DemoCheckboxDensity",setup(f){const o=m(!0),t=m(!1),r=l=>{const c=l.toString();return c.charAt(0).toUpperCase()+c.slice(1)};return(l,c)=>(h(),v("div",K,[e(b,{modelValue:a(o),"onUpdate:modelValue":c[0]||(c[0]=n=>u(o)?o.value=n:null),density:"compact",label:r(a(o))},null,8,["modelValue","label"]),e(b,{modelValue:a(t),"onUpdate:modelValue":c[1]||(c[1]=n=>u(t)?t.value=n:null),density:"compact",label:r(a(t))},null,8,["modelValue","label"])]))}}),G={class:"demo-space-x"},Q=k({__name:"DemoCheckboxBasic",setup(f){const o=m(!0),t=m(!1),r=l=>{const c=l.toString();return c.charAt(0).toUpperCase()+c.slice(1)};return(l,c)=>(h(),v("div",G,[e(b,{modelValue:a(o),"onUpdate:modelValue":c[0]||(c[0]=n=>u(o)?o.value=n:null),label:r(a(o))},null,8,["modelValue","label"]),e(b,{modelValue:a(t),"onUpdate:modelValue":c[1]||(c[1]=n=>u(t)?t.value=n:null),label:r(a(t))},null,8,["modelValue","label"])]))}}),X={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},Z={ts:`<script lang="ts" setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`},ee={ts:`<script lang="ts" setup>
const colorCheckbox = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const selectedCheckbox = ref([])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`,js:`<script setup>
const colorCheckbox = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const selectedCheckbox = ref([])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`},le={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},oe={ts:`<script lang="ts" setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="tabler-check"
      false-icon="tabler-x"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="tabler-alarm"
      false-icon="tabler-alarm"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="tabler-check"
      false-icon="tabler-circle-x"
      color="error"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="tabler-check"
      false-icon="tabler-x"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="tabler-alarm"
      false-icon="tabler-alarm"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="tabler-check"
      false-icon="tabler-circle-x"
      color="error"
    />
  </div>
</template>
`},te={ts:`<script lang="ts" setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <VTextField label="Include files" />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <VTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <VTextField label="Include files" />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <VTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
      />
    </VCol>
  </VRow>
</template>
`},ce={ts:`<script lang="ts" setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`,js:`<script setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`},ae={ts:`<script lang="ts" setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`,js:`<script setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`},se={ts:`<script setup lang="ts">
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`},ne=s("p",null,[s("code",null,"v-checkbox"),d(" in its simplest form provides a toggle between 2 values.")],-1),re=s("p",null,[d("Use "),s("code",null,"density"),d(" prop to reduces the input height. Available options are: "),s("code",null,"default"),d(", "),s("code",null,"comfortable"),d(", and "),s("code",null,"compact"),d(".")],-1),de=s("p",null,[d("Checkboxes can be colored by using any of the builtin colors and contextual names using the "),s("code",null,"color"),d(" prop.")],-1),ie=s("p",null,[d("Multiple "),s("code",null,"v-checkbox"),d("'s can share the same "),s("code",null,"v-model"),d(" by using an array.")],-1),be=s("p",null,[d("Use "),s("code",null,"off-icon"),d(" and "),s("code",null,"on-icon"),d(" prop to change the icon on the checkbox.")],-1),ue=s("p",null,[d("Use "),s("code",null,"false-value"),d(" and "),s("code",null,"true-value"),d(" prop to sets value for truthy and falsy state")],-1),me=s("p",null,[s("code",null,"v-checkbox"),d(" can have different states such as "),s("code",null,"default"),d(", "),s("code",null,"disabled"),d(", and "),s("code",null,"indeterminate"),d(".")],-1),pe=s("p",null,[d("Checkbox labels can be defined in "),s("code",null,"label"),d(" slot - that will allow to use HTML content.")],-1),xe=s("p",null,[d("You can place "),s("code",null,"v-checkbox"),d(" in line with other components such as "),s("code",null,"v-text-field"),d(".")],-1),We=k({__name:"checkbox",setup(f){return(o,t)=>{const r=Q,l=D,c=Y,n=q,p=N,T=M,w=R,L=j,y=A,S=J;return h(),g(C,{class:"match-height"},{default:i(()=>[e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Basic",code:X},{default:i(()=>[ne,e(r)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Density",code:le},{default:i(()=>[re,e(c)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Colors",code:ee},{default:i(()=>[de,e(n)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Model as array",code:ae},{default:i(()=>[ie,e(p)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Icon",code:oe},{default:i(()=>[be,e(T)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Checkbox Value",code:Z},{default:i(()=>[ue,e(w)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"States",code:se},{default:i(()=>[me,e(L)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Label Slot",code:ce},{default:i(()=>[pe,e(y)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Inline text-field",code:te},{default:i(()=>[xe,e(S)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{We as default};
