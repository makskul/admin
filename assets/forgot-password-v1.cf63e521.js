import{d as f,x as _,r as V,o as h,j as b,f as s,b as t,e as o,w as e,V as g,t as i,k as n,g as x,a$ as y,l as v}from"./index.892843d9.js";import{a as w,b as k}from"./auth-v1-top-shape.37562e7c.js";import{V as m}from"./VImg.0023685b.js";import{a as C,b as B,c as p,V as R}from"./VCard.3b9b795b.js";import{V as S}from"./VForm.3ea5832f.js";import{V as T}from"./VRow.416f45a7.js";import{V as l}from"./VCol.215297a5.js";import{V as j}from"./VTextField.b1f01462.js";import{V as F}from"./VBtn.bbadeaf1.js";import{b as d}from"./route-block.023af118.js";import"./router.1461a6f3.js";import"./VCardActions.a6b05483.js";import"./createSimpleFunctional.2f9df5e4.js";import"./VAvatar.3a5605d7.js";import"./position.58edabd9.js";import"./VInput.6f6ad0a7.js";import"./index.abd808b3.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.a7476963.js";import"./easing.36b781ab.js";import"./VCounter.aa771653.js";const N={class:"auth-wrapper d-flex align-center justify-center pa-4"},E={class:"position-relative my-sm-16"},I={class:"d-flex"},L=s("h5",{class:"text-h5 font-weight-semibold mb-1"}," Forgot Password? \u{1F512} ",-1),P=s("p",{class:"mb-0"}," Enter your email and we'll send you instructions to reset your password ",-1),D=s("span",null,"Back to login",-1),M=f({__name:"forgot-password-v1",setup(U){const r=_({email:""});return($,a)=>{const c=V("RouterLink");return h(),b("div",N,[s("div",E,[t(m,{src:o(w),class:"auth-v1-top-shape d-none d-sm-block"},null,8,["src"]),t(m,{src:o(k),class:"auth-v1-bottom-shape d-none d-sm-block"},null,8,["src"]),t(R,{class:"auth-card pa-4","max-width":"448"},{default:e(()=>[t(C,{class:"justify-center"},{prepend:e(()=>[s("div",I,[t(o(g),{nodes:o(i).app.logo},null,8,["nodes"])])]),default:e(()=>[t(B,{class:"font-weight-bold text-h5 py-1"},{default:e(()=>[n(x(o(i).app.title),1)]),_:1})]),_:1}),t(p,{class:"pt-2"},{default:e(()=>[L,P]),_:1}),t(p,null,{default:e(()=>[t(S,{onSubmit:a[1]||(a[1]=y(()=>{},["prevent"]))},{default:e(()=>[t(T,null,{default:e(()=>[t(l,{cols:"12"},{default:e(()=>[t(j,{modelValue:o(r).email,"onUpdate:modelValue":a[0]||(a[0]=u=>o(r).email=u),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),t(l,{cols:"12"},{default:e(()=>[t(F,{block:"",type:"submit"},{default:e(()=>[n(" Send Reset Link ")]),_:1})]),_:1}),t(l,{cols:"12"},{default:e(()=>[t(c,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v1"}},{default:e(()=>[t(v,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),D]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}}});typeof d=="function"&&d(M);export{M as default};