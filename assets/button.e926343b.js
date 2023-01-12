import{V as e,d as D}from"./VBtn.ed86f128.js";import{d as f,x as b,o as i,c as v,w as o,b as t,e as p,B as z,_ as d,j as u,k as n,l as B,f as a,D as N,E as R}from"./index.ea9c407c.js";import{V as s}from"./VCol.8ff38cc0.js";import{V as x}from"./VRow.9cae9a08.js";import{_ as W}from"./AppCardCode.vue_vue_type_style_index_0_lang.758dd095.js";import{V as g}from"./VAlert.aacface6.js";import"./router.54c3299b.js";import"./position.c1bb867e.js";import"./vue.runtime.esm-bundler.ca6803f6.js";import"./index.e3aaa912.js";import"./VCard.912ab4c3.js";import"./VCardActions.f17a3f27.js";import"./createSimpleFunctional.4435dbbc.js";import"./VAvatar.0f0866e8.js";import"./VImg.7e23cd37.js";import"./VDivider.31a5d647.js";const U=f({__name:"DemoButtonGroup",setup(c){const r=b(1);return(V,_)=>(i(),v(D,{modelValue:p(r),"onUpdate:modelValue":_[0]||(_[0]=l=>z(r)?r.value=l:null),divided:"",color:"primary",variant:"outlined"},{default:o(()=>[t(e,{icon:"tabler-align-left"}),t(e,{icon:"tabler-align-center"}),t(e,{icon:"tabler-align-right"}),t(e,{icon:"tabler-align-justified"})]),_:1},8,["modelValue"]))}}),O={},A={class:"demo-space-x"};function q(c,r){return i(),u("div",A,[t(e,{href:"https://pixinvent.com/"},{default:o(()=>[n(" String Literal ")]),_:1}),t(e,{href:"https://pixinvent.com/",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>[n(" Open New Tab ")]),_:1})])}const G=d(O,[["render",q]]),Q={},Y={class:"demo-space-x"};function F(c,r){return i(),u("div",Y,[t(e,{to:"alert"},{default:o(()=>[n(" String Literal ")]),_:1}),t(e,{color:"warning",to:{path:"/alert"}},{default:o(()=>[n(" Object Path ")]),_:1}),t(e,{color:"success",to:{name:"components-alert"}},{default:o(()=>[n(" Named Router ")]),_:1}),t(e,{color:"secondary",to:{path:"/alert",query:{plan:"private"}}},{default:o(()=>[n(" With Query ")]),_:1})])}const H=d(Q,[["render",F]]),J=c=>(N("data-v-022a490d"),c=c(),R(),c),K={class:"demo-space-x"},M=J(()=>a("span",null,"Loading...",-1)),X={class:"custom-loader"},Z=f({__name:"DemoButtonLoaders",setup(c){const r=b([]),V=_=>{r.value[_]=!0,setTimeout(()=>{r.value[_]=!1},3e3)};return(_,l)=>(i(),u("div",K,[t(e,{loading:p(r)[0],disabled:p(r)[0],color:"primary",onClick:l[0]||(l[0]=m=>V(0))},{default:o(()=>[n(" Accept Terms ")]),_:1},8,["loading","disabled"]),t(e,{loading:p(r)[1],disabled:p(r)[1],color:"secondary",onClick:l[1]||(l[1]=m=>V(1))},{default:o(()=>[n(" Upload "),t(B,{end:"",icon:"tabler-cloud-upload"})]),_:1},8,["loading","disabled"]),t(e,{loading:p(r)[2],disabled:p(r)[2],color:"success",onClick:l[2]||(l[2]=m=>V(2))},{loader:o(()=>[M]),default:o(()=>[n(" Loader slot ")]),_:1},8,["loading","disabled"]),t(e,{loading:p(r)[3],disabled:p(r)[3],color:"info",onClick:l[3]||(l[3]=m=>V(3))},{loader:o(()=>[a("span",X,[t(B,{icon:"tabler-refresh"})])]),default:o(()=>[n(" Icon Loader ")]),_:1},8,["loading","disabled"]),t(e,{loading:p(r)[4],disabled:p(r)[4],color:"warning",icon:"tabler-cloud-upload",onClick:l[4]||(l[4]=m=>V(4))},null,8,["loading","disabled"])]))}});const tt=d(Z,[["__scopeId","data-v-022a490d"]]),ot={};function nt(c,r){return i(),v(x,null,{default:o(()=>[t(s,{cols:"12",sm:"6"},{default:o(()=>[t(e,{block:""},{default:o(()=>[n(" Block Button ")]),_:1})]),_:1}),t(s,{cols:"12",sm:"6"},{default:o(()=>[t(e,{variant:"outlined",block:""},{default:o(()=>[n(" Block Button ")]),_:1})]),_:1})]),_:1})}const et=d(ot,[["render",nt]]),at={},rt={class:"demo-space-x"};function lt(c,r){return i(),u("div",rt,[t(e,{size:"x-large"},{default:o(()=>[n(" Extra large Button ")]),_:1}),t(e,{color:"success",size:"large"},{default:o(()=>[n(" Large Button ")]),_:1}),t(e,{color:"info"},{default:o(()=>[n(" Normal Button ")]),_:1}),t(e,{size:"small",color:"warning"},{default:o(()=>[n(" Small Button ")]),_:1}),t(e,{size:"x-small",color:"error"},{default:o(()=>[n(" Extra small Button ")]),_:1})])}const ct=d(at,[["render",lt]]),st={},it={class:"demo-space-x"};function dt(c,r){return i(),u("div",it,[t(e,{icon:"tabler-briefcase",variant:"text"}),t(e,{icon:"tabler-user-plus",variant:"text",color:"secondary"}),t(e,{icon:"tabler-search",variant:"text",color:"success"}),t(e,{icon:"tabler-thumb-up",variant:"text",color:"info"}),t(e,{icon:"tabler-star",variant:"text",color:"warning"}),t(e,{icon:"tabler-heart",variant:"text",color:"error"})])}const ut=d(st,[["render",dt]]),pt={},_t={class:"demo-space-x"};function Bt(c,r){return i(),u("div",_t,[t(e,null,{default:o(()=>[n(" Accept "),t(B,{end:"",icon:"tabler-checkbox"})]),_:1}),t(e,{color:"secondary"},{default:o(()=>[t(B,{start:"",icon:"tabler-circle-minus"}),n("Cancel ")]),_:1}),t(e,{color:"success"},{default:o(()=>[n(" Upload "),t(B,{end:"",icon:"tabler-cloud-upload"})]),_:1}),t(e,{color:"info"},{default:o(()=>[t(B,{start:"",icon:"tabler-arrow-left"}),n(" Back ")]),_:1}),t(e,{color:"warning"},{default:o(()=>[t(B,{icon:"tabler-settings"})]),_:1}),t(e,{color:"error"},{default:o(()=>[t(B,{icon:"tabler-circle-off"})]),_:1})])}const Vt=d(pt,[["render",Bt]]),mt={},ft={class:"demo-space-x"};function vt(c,r){return i(),u("div",ft,[t(e,{variant:"tonal"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary",variant:"tonal"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success",variant:"tonal"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info",variant:"tonal"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning",variant:"tonal"},{default:o(()=>[n(" warning ")]),_:1}),t(e,{color:"error",variant:"tonal"},{default:o(()=>[n(" error ")]),_:1})])}const gt=d(mt,[["render",vt]]),bt={},xt={class:"demo-space-x"};function ht(c,r){return i(),u("div",xt,[t(e,{variant:"plain"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary",variant:"plain"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success",variant:"plain"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info",variant:"plain"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning",variant:"plain"},{default:o(()=>[n(" warning ")]),_:1}),t(e,{color:"error",variant:"plain"},{default:o(()=>[n(" error ")]),_:1})])}const yt=d(bt,[["render",ht]]),wt={},kt={class:"demo-space-x"};function St(c,r){return i(),u("div",kt,[t(e,{variant:"text"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{variant:"text",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"text",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"text",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"text",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"text",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const $t=d(wt,[["render",St]]),It={},Tt={class:"demo-space-x"};function Et(c,r){return i(),u("div",Tt,[t(e,null,{default:o(()=>[n(" Normal Button ")]),_:1}),t(e,{rounded:"lg",color:"secondary"},{default:o(()=>[n(" Rounded Button ")]),_:1}),t(e,{rounded:0,color:"success"},{default:o(()=>[n(" Tile Button ")]),_:1}),t(e,{rounded:"pill",color:"info"},{default:o(()=>[n(" Pill Button ")]),_:1})])}const Lt=d(It,[["render",Et]]),Pt={},Ct={class:"demo-space-x"};function jt(c,r){return i(),u("div",Ct,[t(e,{variant:"flat"},{default:o(()=>[n(" primary ")]),_:1}),t(e,{variant:"flat",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"flat",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"flat",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"flat",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"flat",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const Dt=d(Pt,[["render",jt]]),zt={},Nt={class:"demo-space-x"};function Rt(c,r){return i(),u("div",Nt,[t(e,{variant:"outlined"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{variant:"outlined",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"outlined",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"outlined",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"outlined",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"outlined",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const Wt=d(zt,[["render",Rt]]),Ut={},Ot={class:"demo-space-x"};function At(c,r){return i(),u("div",Ot,[t(e,{color:"primary"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const qt=d(Ut,[["render",At]]),Gt={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`},Qt={ts:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`},Yt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Ft={ts:`<script lang="ts" setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    divided
    color="primary"
    variant="outlined"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`,js:`<script setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    divided
    color="primary"
    variant="outlined"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`},Ht={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`},Jt={ts:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="tabler-briefcase"
      variant="text"
    />

    <VBtn
      icon="tabler-user-plus"
      variant="text"
      color="secondary"
    />

    <VBtn
      icon="tabler-search"
      variant="text"
      color="success"
    />

    <VBtn
      icon="tabler-thumb-up"
      variant="text"
      color="info"
    />

    <VBtn
      icon="tabler-star"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="tabler-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="tabler-briefcase"
      variant="text"
    />

    <VBtn
      icon="tabler-user-plus"
      variant="text"
      color="secondary"
    />

    <VBtn
      icon="tabler-search"
      variant="text"
      color="success"
    />

    <VBtn
      icon="tabler-thumb-up"
      variant="text"
      color="info"
    />

    <VBtn
      icon="tabler-star"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="tabler-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`},Kt={ts:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`},Mt={ts:`<script lang="ts" setup>
const loadings = ref<boolean[]>([])

const load = (i: number) => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>

`,js:`<script setup>
const loadings = ref([])

const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>

`},Xt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Zt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      error
    </VBtn>
  </div>
</template>
`},to={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`},oo={ts:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: '/alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: '/alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: '/alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: '/alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`},no={ts:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`},eo={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},ao={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      error
    </VBtn>
  </div>
</template>
`},ro=a("p",null,[n("The "),a("code",null,"color"),n(" prop is used to change the background color of the alert.")],-1),lo=a("p",null,[n("The "),a("code",null,"outlined"),n(" variant option is used to create outlined buttons.")],-1),co=a("p",null,[n("The "),a("code",null,"flat"),n(" buttons still maintain their background color, but have no box shadow.")],-1),so=a("p",null,[n("Use the "),a("code",null,"rounded"),n(" prop to control the border radius of buttons.")],-1),io=a("p",null,[n("Use "),a("code",null,"text"),n(" variant option to create text button. Text buttons have no box shadow and no background.")],-1),uo=a("p",null,[n("Use "),a("code",null,"plain"),n(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")],-1),po=a("p",null,[n("Use "),a("code",null,"tonal"),n(" variant option to a create a light background button.")],-1),_o=a("p",null,"Icons can be used inside of buttons to add emphasis to the action.",-1),Bo=a("p",null,[n("Use "),a("code",null,"icon"),n(" prop to create button with icon only. This property makes the button rounded and applies the text prop styles.")],-1),Vo=a("p",null,"Buttons can be given different sizing options to fit a multitude of scenarios.",-1),mo=a("p",null,[n("The "),a("code",null,"block"),n(" prop allows buttons to extend the full available width.")],-1),fo=a("p",null,[n("Using the "),a("code",null,"loading"),n(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),a("code",null,"v-progress-circular"),n(" component but this can be customized.")],-1),vo=a("p",null,[n("Use "),a("code",null,"to"),n(" prop to create button with router support.")],-1),go=a("p",null,[n("Designates that the component is a link. This is automatic when using the "),a("code",null,"href"),n(" or "),a("code",null,"to"),n(" prop.")],-1),bo=a("p",null,[n(" Wrap buttons with the "),a("code",null,"v-btn-toggle"),n(" component to create a group button. You can add a visual divider between buttons with the "),a("code",null,"divided"),n(" prop. ")],-1),No=f({__name:"button",setup(c){return(r,V)=>{const _=qt,l=W,m=Wt,h=Dt,y=Lt,w=$t,k=yt,S=gt,$=Vt,I=ut,T=ct,E=et,L=tt,P=H,C=G,j=U;return i(),v(x,null,{default:o(()=>[t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Colors",code:Qt},{default:o(()=>[ro,t(_)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Outlined",code:Xt},{default:o(()=>[lo,t(m)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Flat",code:Yt},{default:o(()=>[co,t(h)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Rounded",code:to},{default:o(()=>[so,t(y)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Text",code:eo},{default:o(()=>[io,t(w)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Plain",code:Zt},{default:o(()=>[uo,t(k)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Tonal",code:ao},{default:o(()=>[po,t(S)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Icon",code:Ht},{default:o(()=>[_o,t($)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Icon Only",code:Jt},{default:o(()=>[Bo,t(I)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Sizing",code:no},{default:o(()=>[Vo,t(T)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Block",code:Gt},{default:o(()=>[mo,t(E)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Loaders",code:Mt},{default:o(()=>[fo,t(L)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Router",code:oo},{default:o(()=>[vo,t(g,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[n(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(P)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Link",code:Kt},{default:o(()=>[go,t(g,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[n(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(C)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Group",code:Ft},{default:o(()=>[bo,t(j)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{No as default};
