import{d as v,k as s,o as w,b as y,w as o,p as l,q as e,K as m,A as F,b5 as R,m as D}from"./index.218d9c70.js";import{r as n,b as $,i as E,a as A,c as Y,l as k,p as L,d as S,f as O,e as U,u as j}from"./validators.37499f91.js";import{V as x}from"./VRow.15b46b92.js";import{V as a}from"./VCol.d464f315.js";import{V as u}from"./VTextField.78ad04ff.js";import{V as N}from"./VBtn.500f4230.js";import{V as B}from"./VForm.0b2b1a0d.js";import{_ as I}from"./AppCardCode.vue_vue_type_style_index_0_lang.bba1d666.js";import"./index.f0101229.js";/* empty css                   */import"./VField.98d26802.js";import"./index.59f2c4af.js";import"./VInput.72253e4c.js";import"./router.f373c6c7.js";import"./VImg.b67ccdea.js";import"./position.b9276cfd.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.3a750ab9.js";import"./group.331a1268.js";import"./vue.runtime.esm-bundler.71e405ca.js";import"./VCard.c658538b.js";import"./VCardActions.b00c2686.js";import"./createSimpleFunctional.c603bc67.js";import"./VAvatar.6b594d0f.js";import"./VDivider.81b9b868.js";const K=v({__name:"DemoFormValidationValidationTypes",setup(g){const f=s(""),V=s(""),C=s(""),p=s(""),i=s(""),h=s(""),d=s(""),c=s(""),b=s(""),q=s(""),T=s(""),_=s(""),P=s();return(X,r)=>(w(),y(B,{ref_key:"refForm",ref:P,onSubmit:r[13]||(r[13]=R(()=>{},["prevent"]))},{default:o(()=>[l(x,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(f),"onUpdate:modelValue":r[0]||(r[0]=t=>m(f)?f.value=t:null),"persistent-placeholder":"",placeholder:"This field is required",rules:[e(n)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(V),"onUpdate:modelValue":r[1]||(r[1]=t=>m(V)?V.value=t:null),"persistent-placeholder":"",placeholder:"Enter Number between 10 & 20",rules:[e(n),e($)(e(V),10,20)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(C),"onUpdate:modelValue":r[2]||(r[2]=t=>m(C)?C.value=t:null),"persistent-placeholder":"",placeholder:"Must only consist of numbers",rules:[e(n),e(E)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(p),"onUpdate:modelValue":r[3]||(r[3]=t=>m(p)?p.value=t:null),"persistent-placeholder":"",placeholder:"Must match the specified regular expression : ^([0-9]+)$ - numbers only",rules:[e(n),e(A)(e(p),"^([0-9]+)$")]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(i),"onUpdate:modelValue":r[4]||(r[4]=t=>m(i)?i.value=t:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters",rules:[e(n),e(Y)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(h),"onUpdate:modelValue":r[5]||(r[5]=t=>m(h)?h.value=t:null),"persistent-placeholder":"",placeholder:"Length should not be less than the specified length : 3",rules:[e(n),e(k)(e(h),3)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(d),"onUpdate:modelValue":r[6]||(r[6]=t=>m(d)?d.value=t:null),"persistent-placeholder":"",placeholder:"Password Input Field",type:"password",rules:[e(n),e(L)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(c),"onUpdate:modelValue":r[7]||(r[7]=t=>m(c)?c.value=t:null),"persistent-placeholder":"",placeholder:"The digits field must be numeric and exactly contain 3 digits",rules:[e(n),e(k)(e(c),3),e(E)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(b),"onUpdate:modelValue":r[8]||(r[8]=t=>m(b)?b.value=t:null),"persistent-placeholder":"",placeholder:"Repeat password must match",type:"password",rules:[e(n),e(S)(e(b),e(d))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(q),"onUpdate:modelValue":r[9]||(r[9]=t=>m(q)?q.value=t:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters, numbers, dashes or underscores",rules:[e(n),e(O)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(T),"onUpdate:modelValue":r[10]||(r[10]=t=>m(T)?T.value=t:null),"persistent-placeholder":"",placeholder:"Must be a valid email",rules:[e(n),e(U)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(_),"onUpdate:modelValue":r[11]||(r[11]=t=>m(_)?_.value=t:null),"persistent-placeholder":"",placeholder:"Must be a valid url",rules:[e(n),e(j)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(N,{type:"submit",onClick:r[12]||(r[12]=t=>{var M;return(M=e(P))==null?void 0:M.validate()})},{default:o(()=>[F(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512))}}),z=v({__name:"DemoFormValidationValidatingMultipleRules",setup(g){const f=s(""),V=s(""),C=s(),p=s(""),i=s("");return(h,d)=>(w(),y(B,{ref_key:"refForm",ref:C,onSubmit:d[5]||(d[5]=R(()=>{},["prevent"]))},{default:o(()=>[l(x,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(f),"onUpdate:modelValue":d[0]||(d[0]=c=>m(f)?f.value=c:null),placeholder:"Your Name","persistent-placeholder":"",rules:[e(n)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(V),"onUpdate:modelValue":d[1]||(d[1]=c=>m(V)?V.value=c:null),placeholder:"Your Email","persistent-placeholder":"",rules:[e(n),e(U)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(p),"onUpdate:modelValue":d[2]||(d[2]=c=>m(p)?p.value=c:null),type:"password",placeholder:"Your Password","persistent-placeholder":"",rules:[e(n),e(L)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(i),"onUpdate:modelValue":d[3]||(d[3]=c=>m(i)?i.value=c:null),type:"password",placeholder:"Confirm Password","persistent-placeholder":"",rules:[e(n),e(S)(e(i),e(p))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(N,{type:"submit",onClick:d[4]||(d[4]=c=>{var b;return(b=e(C))==null?void 0:b.validate()})},{default:o(()=>[F(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512))}}),G=v({__name:"DemoFormValidationSimpleFormValidation",setup(g){const f=s(""),V=s(""),C=s();return(p,i)=>(w(),y(B,{ref_key:"refForm",ref:C,onSubmit:i[3]||(i[3]=R(()=>{},["prevent"]))},{default:o(()=>[l(x,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(f),"onUpdate:modelValue":i[0]||(i[0]=h=>m(f)?f.value=h:null),label:"First Name",rules:[e(n)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(V),"onUpdate:modelValue":i[1]||(i[1]=h=>m(V)?V.value=h:null),label:"Email",rules:[e(n),e(U)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(N,{type:"submit",onClick:i[2]||(i[2]=h=>{var d;return(d=e(C))==null?void 0:d.validate()})},{default:o(()=>[F(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512))}}),H={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'
import { emailValidator, requiredValidator } from '@validators'

const firstName = ref('')
const email = ref('')

const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const firstName = ref('')
const email = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},J={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'
import { confirmedValidator, emailValidator, passwordValidator, requiredValidator } from '@validators'

const name = ref('')
const email = ref('')
const refForm = ref<VForm>()
const password = ref('')
const confirmPassword = ref('')
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="name"
          placeholder="Your Name"
          persistent-placeholder
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          placeholder="Your Email"
          persistent-placeholder
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          type="password"
          placeholder="Your Password"
          persistent-placeholder
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          persistent-placeholder
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  confirmedValidator,
  emailValidator,
  passwordValidator,
  requiredValidator,
} from '@validators'

const name = ref('')
const email = ref('')
const refForm = ref()
const password = ref('')
const confirmPassword = ref('')
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="name"
          placeholder="Your Name"
          persistent-placeholder
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          placeholder="Your Email"
          persistent-placeholder
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          type="password"
          placeholder="Your Password"
          persistent-placeholder
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          persistent-placeholder
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Q={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'
import {
  alphaDashValidator,
  alphaValidator,
  betweenValidator,
  confirmedValidator,
  emailValidator,
  integerValidator,
  lengthValidator,
  passwordValidator,
  regexValidator,
  requiredValidator,
  urlValidator,
} from '@validators'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length should not be less than the specified length : 3"
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  alphaDashValidator,
  alphaValidator,
  betweenValidator,
  confirmedValidator,
  emailValidator,
  integerValidator,
  lengthValidator,
  passwordValidator,
  regexValidator,
  requiredValidator,
  urlValidator,
} from '@validators'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length should not be less than the specified length : 3"
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},W=D("p",null,[F("Use "),D("code",null,"Rules"),F(" prop to validate the input.")],-1),qe=v({__name:"form-validation",setup(g){return(f,V)=>{const C=G,p=I,i=z,h=K;return w(),y(x,null,{default:o(()=>[l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Simple Form Validation",code:H},{default:o(()=>[W,l(C)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Validating Multiple Rules",code:J},{default:o(()=>[l(i)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Validation Types",code:Q},{default:o(()=>[l(h)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{qe as default};
