import{d as b,k as p,r as h,o as v,c as y,m as a,p as e,q as o,w as t,V as x,v as f,z as m,x as g,b2 as C,A as P}from"./index.54e47bbc.js";import{a as k,b as B}from"./auth-v1-top-shape.37562e7c.js";import{V as c}from"./VImg.cc1c5f29.js";import{a as N,b as I,c as u,V as R}from"./VCard.29967394.js";import{V as S}from"./VForm.5ae2446c.js";import{V as T,a as d}from"./VRow.44517ae3.js";import{V}from"./VTextField.dd6e8921.js";import{V as j}from"./VBtn.604c43f4.js";import{b as _}from"./route-block.023af118.js";import"./router.0db38488.js";import"./VAvatar.29db4047.js";import"./position.d42c9754.js";import"./VInput.5f63bb3e.js";import"./index.0fb74ba2.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.abff57dc.js";import"./easing.36b781ab.js";import"./VCounter.a125912c.js";const F={class:"auth-wrapper d-flex align-center justify-center pa-4"},L={class:"position-relative my-sm-16"},U={class:"d-flex"},$=a("h5",{class:"text-h5 font-weight-semibold mb-1"}," Reset Password \u{1F512} ",-1),q=a("p",{class:"mb-0"},[m(" for "),a("span",{class:"font-weight-bold"},"john.doe@email.com")],-1),z=a("span",null,"Back to login",-1),A=b({__name:"reset-password-v1",setup(D){const l=p({newPassword:"",confirmPassword:""}),r=p(!1),i=p(!1);return(E,s)=>{const w=h("RouterLink");return v(),y("div",F,[a("div",L,[e(c,{src:o(k),class:"auth-v1-top-shape d-none d-sm-block"},null,8,["src"]),e(c,{src:o(B),class:"auth-v1-bottom-shape d-none d-sm-block"},null,8,["src"]),e(R,{class:"auth-card pa-4","max-width":"448"},{default:t(()=>[e(N,{class:"justify-center"},{prepend:t(()=>[a("div",U,[e(o(x),{nodes:o(f).app.logo},null,8,["nodes"])])]),default:t(()=>[e(I,{class:"font-weight-bold text-h5 py-1"},{default:t(()=>[m(g(o(f).app.title),1)]),_:1})]),_:1}),e(u,{class:"pt-2"},{default:t(()=>[$,q]),_:1}),e(u,null,{default:t(()=>[e(S,{onSubmit:s[4]||(s[4]=C(()=>{},["prevent"]))},{default:t(()=>[e(T,null,{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(V,{modelValue:o(l).newPassword,"onUpdate:modelValue":s[0]||(s[0]=n=>o(l).newPassword=n),label:"New Password",type:o(r)?"text":"password","append-inner-icon":o(r)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[1]||(s[1]=n=>r.value=!o(r))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(V,{modelValue:o(l).confirmPassword,"onUpdate:modelValue":s[2]||(s[2]=n=>o(l).confirmPassword=n),label:"Confirm Password",type:o(i)?"text":"password","append-inner-icon":o(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[3]||(s[3]=n=>i.value=!o(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(j,{block:"",type:"submit"},{default:t(()=>[m(" Set New Password ")]),_:1})]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(w,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v1"}},{default:t(()=>[e(P,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),z]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}}});typeof _=="function"&&_(A);export{A as default};