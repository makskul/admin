import{d as v,k as u,r as k,o as y,b as C,w as t,p as e,m as l,q as a,V as L,v as p,x as B,b4 as I,z as m}from"./index.ced6806d.js";import{a as F,b as D,c as N,d as R}from"./auth-v2-login-illustration-light.a2530d13.js";import{u as c,m as T,a as M}from"./useGenerateImageVariant.4d08571b.js";import{_ as P}from"./AuthProvider.vue_vue_type_script_setup_true_lang.a7c8a393.js";import{V as s}from"./VCol.0d4aad2a.js";import{V as f}from"./VImg.9e1467de.js";import{V as j,c as V}from"./VCard.c7bdbb25.js";import{V as U}from"./VForm.d92c50b9.js";import{V as _}from"./VRow.65e1578a.js";import{V as g}from"./VTextField.5c9c2dc3.js";import{V as S}from"./VCheckbox.790676bd.js";import{V as $}from"./VBtn.ff8d0fa0.js";import{V as b}from"./VDivider.6fd0d2a4.js";import{b as h}from"./route-block.023af118.js";import"./router.e693d955.js";import"./VCardActions.60dbb4b1.js";import"./createSimpleFunctional.96761c7b.js";import"./VAvatar.3162c276.js";import"./position.dc05b09b.js";import"./VInput.841c7107.js";import"./index.9b7e715d.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.ff6d7888.js";import"./easing.36b781ab.js";import"./VCounter.d75bd566.js";import"./VCheckboxBtn.4902f4ce.js";import"./VSelectionControl.9f950dab.js";const q={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},z={class:"d-flex align-center justify-center w-100 h-100"},E={class:"text-h5 font-weight-semibold mb-1"},G=l("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),W={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},A=l("span",null,"New on our platform?",-1),H=l("span",{class:"mx-4"},"or",-1),J=v({__name:"login-v2",setup(K){const r=u({email:"",password:"",remember:!1}),i=u(!1),x=c(R,N,D,F,!0),w=c(M,T);return(O,o)=>{const d=k("RouterLink");return y(),C(_,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(s,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[l("div",q,[l("div",z,[e(f,{"max-width":"505",src:a(x),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(f,{class:"auth-footer-mask",src:a(w)},null,8,["src"])])]),_:1}),e(s,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(j,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(V,null,{default:t(()=>[e(a(L),{nodes:a(p).app.logo,class:"mb-6"},null,8,["nodes"]),l("h5",E," Welcome to "+B(a(p).app.title)+"! \u{1F44B}\u{1F3FB} ",1),G]),_:1}),e(V,null,{default:t(()=>[e(U,{onSubmit:o[4]||(o[4]=I(()=>{},["prevent"]))},{default:t(()=>[e(_,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(g,{modelValue:a(r).email,"onUpdate:modelValue":o[0]||(o[0]=n=>a(r).email=n),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(g,{modelValue:a(r).password,"onUpdate:modelValue":o[1]||(o[1]=n=>a(r).password=n),label:"Password",type:a(i)?"text":"password","append-inner-icon":a(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[2]||(o[2]=n=>i.value=!a(i))},null,8,["modelValue","type","append-inner-icon"]),l("div",W,[e(S,{modelValue:a(r).remember,"onUpdate:modelValue":o[3]||(o[3]=n=>a(r).remember=n),label:"Remember me"},null,8,["modelValue"]),e(d,{class:"text-primary ms-2 mb-1",to:{name:"pages-authentication-forgot-password-v2"}},{default:t(()=>[m(" Forgot Password? ")]),_:1})]),e($,{block:"",type:"submit"},{default:t(()=>[m(" Login ")]),_:1})]),_:1}),e(s,{cols:"12",class:"text-center text-base"},{default:t(()=>[A,e(d,{class:"text-primary ms-2",to:{name:"pages-authentication-register-v2"}},{default:t(()=>[m(" Create an account ")]),_:1})]),_:1}),e(s,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(b),H,e(b)]),_:1}),e(s,{cols:"12",class:"text-center"},{default:t(()=>[e(P)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});typeof h=="function"&&h(J);export{J as default};