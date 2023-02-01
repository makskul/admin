import{d as v,k as d,r as x,o as k,b as w,w as t,p as e,m as o,q as a,V as C,x as I,b5 as R,A as p}from"./index.218d9c70.js";import{_ as B}from"./AuthProvider.vue_vue_type_script_setup_true_lang.3ed937c9.js";import{u,m as L,a as M}from"./useGenerateImageVariant.5d4e8ccc.js";import{a as P,b as U,c as D,d as N}from"./auth-v2-register-illustration-light.bed06000.js";import{V as i}from"./VCol.d464f315.js";import{V as c}from"./VImg.b67ccdea.js";import{V as T,c as f}from"./VCard.c658538b.js";import{V as j}from"./VForm.0b2b1a0d.js";import{V}from"./VRow.15b46b92.js";import{V as m}from"./VTextField.78ad04ff.js";import{V as A}from"./VCheckbox.509ec6d0.js";import{V as F}from"./VInput.72253e4c.js";import{V as S}from"./VBtn.500f4230.js";import{V as _}from"./VDivider.81b9b868.js";import{b as g}from"./route-block.023af118.js";import"./router.f373c6c7.js";import"./VCardActions.b00c2686.js";import"./createSimpleFunctional.c603bc67.js";import"./VAvatar.6b594d0f.js";import"./position.b9276cfd.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.98d26802.js";import"./index.59f2c4af.js";import"./easing.36b781ab.js";import"./VCounter.3a750ab9.js";import"./VCheckboxBtn.eddc661f.js";import"./VSelectionControl.70166856.js";import"./group.331a1268.js";const $={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},q={class:"d-flex align-center justify-center w-100 h-100"},E=o("h5",{class:"text-h5 font-weight-semibold mb-1"}," Adventure starts here \u{1F680} ",-1),G=o("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),z={class:"d-flex align-center mt-2 mb-4"},H=o("span",{class:"me-1"},"I agree to",-1),J=o("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),K=o("span",null,"Already have an account?",-1),O=o("span",{class:"mx-4"},"or",-1),Q=v({__name:"register-v2",setup(W){const l=d({username:"",email:"",password:"",privacyPolicies:!1}),y=u(N,D,U,P,!0),h=u(M,L),n=d(!1);return(X,s)=>{const b=x("RouterLink");return k(),w(V,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(i,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[o("div",$,[o("div",q,[e(c,{"max-width":"441",src:a(y),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(c,{class:"auth-footer-mask",src:a(h)},null,8,["src"])])]),_:1}),e(i,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(T,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(f,null,{default:t(()=>[e(a(C),{nodes:a(I).app.logo,class:"mb-6"},null,8,["nodes"]),E,G]),_:1}),e(f,null,{default:t(()=>[e(j,{onSubmit:s[5]||(s[5]=R(()=>{},["prevent"]))},{default:t(()=>[e(V,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(m,{modelValue:a(l).username,"onUpdate:modelValue":s[0]||(s[0]=r=>a(l).username=r),label:"Username"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(m,{modelValue:a(l).email,"onUpdate:modelValue":s[1]||(s[1]=r=>a(l).email=r),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(m,{modelValue:a(l).password,"onUpdate:modelValue":s[2]||(s[2]=r=>a(l).password=r),label:"Password",type:a(n)?"text":"password","append-inner-icon":a(n)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[3]||(s[3]=r=>n.value=!a(n))},null,8,["modelValue","type","append-inner-icon"]),o("div",z,[e(A,{id:"privacy-policy",modelValue:a(l).privacyPolicies,"onUpdate:modelValue":s[4]||(s[4]=r=>a(l).privacyPolicies=r),inline:""},null,8,["modelValue"]),e(F,{for:"privacy-policy",style:{opacity:"1"}},{default:t(()=>[H,J]),_:1})]),e(S,{block:"",type:"submit"},{default:t(()=>[p(" Sign up ")]),_:1})]),_:1}),e(i,{cols:"12",class:"text-center text-base"},{default:t(()=>[K,e(b,{class:"text-primary ms-2",to:{name:"pages-authentication-login-v2"}},{default:t(()=>[p(" Sign in instead ")]),_:1})]),_:1}),e(i,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(_),O,e(_)]),_:1}),e(i,{cols:"12",class:"text-center"},{default:t(()=>[e(B)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});typeof g=="function"&&g(Q);export{Q as default};