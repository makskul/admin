import{d as T,k as m,b3 as A,j as P,r as M,o as j,b as q,w as t,p as e,m as a,q as o,V as E,v as x,x as J,b4 as O,J as _,z as i,K as U}from"./index.add429ee.js";import{u as $}from"./useAppAbility.c4e8a03f.js";import{_ as z}from"./AuthProvider.vue_vue_type_script_setup_true_lang.b027877c.js";import{u as v,m as G,a as K}from"./useGenerateImageVariant.45c43812.js";import{r as y,e as W}from"./validators.37499f91.js";import{a as H,b as Q,c as X,d as Y}from"./auth-v2-login-illustration-light.a2530d13.js";import{V as n}from"./VCol.7dd76603.js";import{V as w}from"./VImg.a8aa58b5.js";import{V as Z}from"./VCard.6e70570c.js";import{V}from"./VCardText.19d6276a.js";import{V as ee}from"./VAlert.9add670e.js";import{V as k}from"./VRow.1a59a225.js";import{V as I}from"./VTextField.f93ce827.js";import{V as te}from"./VCheckbox.be7641de.js";import{V as oe}from"./VBtn.b8c8f171.js";import{V as C}from"./VDivider.641d8c00.js";import{V as se}from"./VForm.018425e7.js";import{b as S}from"./route-block.023af118.js";import"./index.f0101229.js";import"./router.ba3d0dbd.js";import"./VCardActions.ad08d8c9.js";import"./createSimpleFunctional.3c66e3e0.js";import"./VAvatar.21a2953e.js";import"./position.da7ae5de.js";/* empty css                   */import"./VField.4f8a4688.js";import"./index.0c5b8599.js";import"./VInput.b6d87e4b.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.12688585.js";import"./VCheckboxBtn.6769e7ac.js";import"./VSelectionControl.e46a20e1.js";const ae={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},re={class:"d-flex align-center justify-center w-100 h-100"},le={class:"text-h5 font-weight-semibold mb-1"},ne=a("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),ie=a("p",{class:"text-caption mb-2"},[i(" Admin Email: "),a("strong",null,"admin@demo.com"),i(" / Pass: "),a("strong",null,"admin")],-1),me=a("p",{class:"text-caption mb-0"},[i(" Client Email: "),a("strong",null,"client@demo.com"),i(" / Pass: "),a("strong",null,"client")],-1),ue={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},de=a("span",null,"New on our platform?",-1),ce=a("span",{class:"mx-4"},"or",-1),pe=T({__name:"login",setup(fe){const L=v(Y,X,Q,H,!0),B=v(K,G),u=m(!1),b=A(),F=P(),N=$(),f=m({email:void 0,password:void 0}),h=m(),d=m("admin@demo.com"),c=m("admin"),g=m(!1),R=()=>{U.post("/auth/login",{email:d.value,password:c.value}).then(l=>{const{accessToken:s,userData:p,userAbilities:r}=l.data;localStorage.setItem("userAbilities",JSON.stringify(r)),N.update(r),localStorage.setItem("userData",JSON.stringify(p)),localStorage.setItem("accessToken",JSON.stringify(s)),F.replace(b.query.to?String(b.query.to):"/")}).catch(l=>{const{errors:s}=l.response.data;f.value=s,console.error(l.response.data)})},D=()=>{var l;(l=h.value)==null||l.validate().then(({valid:s})=>{s&&R()})};return(l,s)=>{const p=M("RouterLink");return j(),q(k,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(n,{lg:"8",class:"d-none d-lg-flex"},{default:t(()=>[a("div",ae,[a("div",re,[e(w,{"max-width":"505",src:o(L),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(w,{src:o(B),class:"auth-footer-mask"},null,8,["src"])])]),_:1}),e(n,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:t(()=>[e(Z,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(V,null,{default:t(()=>[e(o(E),{nodes:o(x).app.logo,class:"mb-6"},null,8,["nodes"]),a("h5",le," Welcome to "+J(o(x).app.title)+"! \u{1F44B}\u{1F3FB} ",1),ne]),_:1}),e(V,null,{default:t(()=>[e(ee,{color:"primary",variant:"tonal"},{default:t(()=>[ie,me]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(o(se),{ref_key:"refVForm",ref:h,onSubmit:O(D,["prevent"])},{default:t(()=>[e(k,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(I,{modelValue:o(d),"onUpdate:modelValue":s[0]||(s[0]=r=>_(d)?d.value=r:null),label:"Email",type:"email",rules:[o(y),o(W)],"error-messages":o(f).email},null,8,["modelValue","rules","error-messages"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(I,{modelValue:o(c),"onUpdate:modelValue":s[1]||(s[1]=r=>_(c)?c.value=r:null),label:"Password",rules:[o(y)],type:o(u)?"text":"password","error-messages":o(f).password,"append-inner-icon":o(u)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[2]||(s[2]=r=>u.value=!o(u))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),a("div",ue,[e(te,{modelValue:o(g),"onUpdate:modelValue":s[3]||(s[3]=r=>_(g)?g.value=r:null),label:"Remember me"},null,8,["modelValue"]),e(p,{class:"text-primary ms-2 mb-1",to:{name:"forgot-password"}},{default:t(()=>[i(" Forgot Password? ")]),_:1})]),e(oe,{block:"",type:"submit"},{default:t(()=>[i(" Login ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center"},{default:t(()=>[de,e(p,{class:"text-primary ms-2",to:{name:"register"}},{default:t(()=>[i(" Create an account ")]),_:1})]),_:1}),e(n,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(C),ce,e(C)]),_:1}),e(n,{cols:"12",class:"text-center"},{default:t(()=>[e(z)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})}}});typeof S=="function"&&S(pe);export{pe as default};
