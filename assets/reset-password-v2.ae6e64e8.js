import{d as k,k as m,r as v,o as x,b as y,w as s,p as e,m as r,q as t,V as P,x as C,b5 as I,A as _,B as R}from"./index.218d9c70.js";import{u as p,m as B,a as N}from"./useGenerateImageVariant.5d4e8ccc.js";import{V as a}from"./VCol.d464f315.js";import{V as u}from"./VImg.b67ccdea.js";import{V as T,c as f}from"./VCard.c658538b.js";import{V as j}from"./VForm.0b2b1a0d.js";import{V as c}from"./VRow.15b46b92.js";import{V as w}from"./VTextField.78ad04ff.js";import{V as L}from"./VBtn.500f4230.js";import{b as V}from"./route-block.023af118.js";import"./router.f373c6c7.js";import"./VCardActions.b00c2686.js";import"./createSimpleFunctional.c603bc67.js";import"./VAvatar.6b594d0f.js";import"./position.b9276cfd.js";import"./VInput.72253e4c.js";import"./index.59f2c4af.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.98d26802.js";import"./easing.36b781ab.js";import"./VCounter.3a750ab9.js";import"./group.331a1268.js";const M="/assets/auth-v2-reset-password-illustration-dark.d3746a9f.png",F="/assets/auth-v2-reset-password-illustration-light.435863a4.png",D={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},S={class:"d-flex align-center justify-center w-100 h-100"},U=r("h5",{class:"text-h5 font-weight-semibold mb-1"}," Reset Password \u{1F512} ",-1),$=r("p",{class:"mb-0"},[_(" for "),r("span",{class:"font-weight-bold"},"john.doe@email.com")],-1),q=r("span",null,"Back to login",-1),A=k({__name:"reset-password-v2",setup(G){const l=m({newPassword:"",confirmPassword:""}),h=p(F,M),b=p(N,B),i=m(!1),d=m(!1);return(z,o)=>{const g=v("RouterLink");return x(),y(c,{"no-gutters":"",class:"auth-wrapper"},{default:s(()=>[e(a,{md:"8",class:"d-none d-md-flex"},{default:s(()=>[r("div",D,[r("div",S,[e(u,{"max-width":"400",src:t(h),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(u,{class:"auth-footer-mask",src:t(b)},null,8,["src"])])]),_:1}),e(a,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:s(()=>[e(T,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:s(()=>[e(f,null,{default:s(()=>[e(t(P),{nodes:t(C).app.logo,class:"mb-6"},null,8,["nodes"]),U,$]),_:1}),e(f,null,{default:s(()=>[e(j,{onSubmit:o[4]||(o[4]=I(()=>{},["prevent"]))},{default:s(()=>[e(c,null,{default:s(()=>[e(a,{cols:"12"},{default:s(()=>[e(w,{modelValue:t(l).newPassword,"onUpdate:modelValue":o[0]||(o[0]=n=>t(l).newPassword=n),label:"New Password",type:t(i)?"text":"password","append-inner-icon":t(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[1]||(o[1]=n=>i.value=!t(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(a,{cols:"12"},{default:s(()=>[e(w,{modelValue:t(l).confirmPassword,"onUpdate:modelValue":o[2]||(o[2]=n=>t(l).confirmPassword=n),label:"Confirm Password",type:t(d)?"text":"password","append-inner-icon":t(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[3]||(o[3]=n=>d.value=!t(d))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(a,{cols:"12"},{default:s(()=>[e(L,{block:"",type:"submit"},{default:s(()=>[_(" Set New Password ")]),_:1})]),_:1}),e(a,{cols:"12"},{default:s(()=>[e(g,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v2"}},{default:s(()=>[e(R,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),q]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});typeof V=="function"&&V(A);export{A as default};