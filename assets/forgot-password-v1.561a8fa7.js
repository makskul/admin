import{d as f,k as _,r as V,o as h,c as b,m as s,p as t,q as o,w as e,V as g,v as i,z as n,x as v,b4 as x,A as y}from"./index.04caa90a.js";import{a as w,b as k}from"./auth-v1-top-shape.37562e7c.js";import{V as m}from"./VImg.12de7d0b.js";import{a as C,b as B,c as p,V as R}from"./VCard.2da705c2.js";import{V as S}from"./VForm.ffd26efa.js";import{V as T}from"./VRow.fd251dff.js";import{V as l}from"./VCol.6b795c70.js";import{V as F}from"./VTextField.48b726b7.js";import{V as N}from"./VBtn.a1517a19.js";import{b as d}from"./route-block.023af118.js";import"./router.e873d06f.js";import"./VCardActions.f65c8940.js";import"./createSimpleFunctional.a714b8e8.js";import"./VAvatar.65e67ca2.js";import"./position.2432a133.js";import"./VInput.6fe5edcd.js";import"./index.9096a00c.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.52ceee11.js";import"./easing.36b781ab.js";import"./VCounter.69833ee0.js";const j={class:"auth-wrapper d-flex align-center justify-center pa-4"},E={class:"position-relative my-sm-16"},I={class:"d-flex"},L=s("h5",{class:"text-h5 font-weight-semibold mb-1"}," Forgot Password? \u{1F512} ",-1),P=s("p",{class:"mb-0"}," Enter your email and we'll send you instructions to reset your password ",-1),q=s("span",null,"Back to login",-1),z=f({__name:"forgot-password-v1",setup(A){const r=_({email:""});return(D,a)=>{const c=V("RouterLink");return h(),b("div",j,[s("div",E,[t(m,{src:o(w),class:"auth-v1-top-shape d-none d-sm-block"},null,8,["src"]),t(m,{src:o(k),class:"auth-v1-bottom-shape d-none d-sm-block"},null,8,["src"]),t(R,{class:"auth-card pa-4","max-width":"448"},{default:e(()=>[t(C,{class:"justify-center"},{prepend:e(()=>[s("div",I,[t(o(g),{nodes:o(i).app.logo},null,8,["nodes"])])]),default:e(()=>[t(B,{class:"font-weight-bold text-h5 py-1"},{default:e(()=>[n(v(o(i).app.title),1)]),_:1})]),_:1}),t(p,{class:"pt-2"},{default:e(()=>[L,P]),_:1}),t(p,null,{default:e(()=>[t(S,{onSubmit:a[1]||(a[1]=x(()=>{},["prevent"]))},{default:e(()=>[t(T,null,{default:e(()=>[t(l,{cols:"12"},{default:e(()=>[t(F,{modelValue:o(r).email,"onUpdate:modelValue":a[0]||(a[0]=u=>o(r).email=u),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),t(l,{cols:"12"},{default:e(()=>[t(N,{block:"",type:"submit"},{default:e(()=>[n(" Send Reset Link ")]),_:1})]),_:1}),t(l,{cols:"12"},{default:e(()=>[t(c,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v1"}},{default:e(()=>[t(y,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),q]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}}});typeof d=="function"&&d(z);export{z as default};