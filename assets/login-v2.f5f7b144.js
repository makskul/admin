import{d as v,k as u,r as k,o as y,b as C,w as t,p as e,m as l,q as a,V as L,v as p,x as B,b2 as I,z as m}from"./index.467cdc2d.js";import{a as F,b as D,c as N,d as R}from"./auth-v2-login-illustration-light.a2530d13.js";import{u as c,m as T,a as M}from"./useGenerateImageVariant.cc843462.js";import{_ as P}from"./AuthProvider.vue_vue_type_script_setup_true_lang.14b3b82a.js";import{a as s,V as f}from"./VRow.52d7fbbe.js";import{V as _}from"./VImg.657a0470.js";import{V as j,c as V}from"./VCard.2d292526.js";import{V as U}from"./VForm.eeb72a6e.js";import{V as g}from"./VTextField.8ae34592.js";import{V as S}from"./VCheckbox.3f985f33.js";import{V as $}from"./VBtn.dc3cd726.js";import{V as b}from"./VDivider.12130cb7.js";import{b as h}from"./route-block.023af118.js";import"./router.d66206d8.js";import"./VAvatar.9a7149b7.js";import"./position.363b5921.js";import"./VInput.d7ae850d.js";import"./index.824c457d.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.db7c540b.js";import"./easing.36b781ab.js";import"./VCounter.c9ee3103.js";import"./VCheckboxBtn.1086bd16.js";import"./VSelectionControl.c5e888e0.js";const q={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},z={class:"d-flex align-center justify-center w-100 h-100"},E={class:"text-h5 font-weight-semibold mb-1"},G=l("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),W={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},A=l("span",null,"New on our platform?",-1),H=l("span",{class:"mx-4"},"or",-1),J=v({__name:"login-v2",setup(K){const r=u({email:"",password:"",remember:!1}),i=u(!1),x=c(R,N,D,F,!0),w=c(M,T);return(O,o)=>{const d=k("RouterLink");return y(),C(f,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(s,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[l("div",q,[l("div",z,[e(_,{"max-width":"505",src:a(x),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(_,{class:"auth-footer-mask",src:a(w)},null,8,["src"])])]),_:1}),e(s,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(j,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(V,null,{default:t(()=>[e(a(L),{nodes:a(p).app.logo,class:"mb-6"},null,8,["nodes"]),l("h5",E," Welcome to "+B(a(p).app.title)+"! \u{1F44B}\u{1F3FB} ",1),G]),_:1}),e(V,null,{default:t(()=>[e(U,{onSubmit:o[4]||(o[4]=I(()=>{},["prevent"]))},{default:t(()=>[e(f,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(g,{modelValue:a(r).email,"onUpdate:modelValue":o[0]||(o[0]=n=>a(r).email=n),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(g,{modelValue:a(r).password,"onUpdate:modelValue":o[1]||(o[1]=n=>a(r).password=n),label:"Password",type:a(i)?"text":"password","append-inner-icon":a(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[2]||(o[2]=n=>i.value=!a(i))},null,8,["modelValue","type","append-inner-icon"]),l("div",W,[e(S,{modelValue:a(r).remember,"onUpdate:modelValue":o[3]||(o[3]=n=>a(r).remember=n),label:"Remember me"},null,8,["modelValue"]),e(d,{class:"text-primary ms-2 mb-1",to:{name:"pages-authentication-forgot-password-v2"}},{default:t(()=>[m(" Forgot Password? ")]),_:1})]),e($,{block:"",type:"submit"},{default:t(()=>[m(" Login ")]),_:1})]),_:1}),e(s,{cols:"12",class:"text-center text-base"},{default:t(()=>[A,e(d,{class:"text-primary ms-2",to:{name:"pages-authentication-register-v2"}},{default:t(()=>[m(" Create an account ")]),_:1})]),_:1}),e(s,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(b),H,e(b)]),_:1}),e(s,{cols:"12",class:"text-center"},{default:t(()=>[e(P)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});typeof h=="function"&&h(J);export{J as default};