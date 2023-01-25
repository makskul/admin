import{d as g,k as r,o as k,b as h,w as l,p as e,z as F,b4 as R,q as a,J as n,m as C,s as A,c as X,F as ee,a as le,x as oe,A as te,a9 as ae,ac as se}from"./index.f213f02a.js";import{a as Y,b as j,c as G,V as re}from"./VExpansionPanel.76bce9cc.js";import{V as _}from"./VForm.3d34e0bd.js";import{V as y}from"./VRow.56ed4074.js";import{V as o}from"./VCol.789f6d3b.js";import{V as m}from"./VTextField.f298a8a0.js";import{V as de}from"./VTextarea.11d7103e.js";import{V as D}from"./VSelect.eb5b3167.js";import{V as ne}from"./VInput.c6654052.js";import{V as K,a as L}from"./VRadioGroup.22679b08.js";import{V as J}from"./VDivider.52d9efbf.js";import{V as x}from"./VBtn.e3a1b4a9.js";import{a as O,V as me}from"./VTabs.0fb76900.js";import{c as Z,V as ie}from"./VCard.0479d9ab.js";import{V as ue,a as Q}from"./VWindowItem.05510a26.js";import{r as E,e as Ve}from"./validators.37499f91.js";import{V as T}from"./VCheckbox.e12fd839.js";import{V as ce}from"./VAutocomplete.0e69a170.js";import{_ as pe}from"./AppCardCode.vue_vue_type_style_index_0_lang.51ce6dd8.js";import"./router.8c7eb138.js";import"./index.0c1a81ec.js";import"./lazy.cac34b53.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.15ad3d34.js";import"./position.b6cfc487.js";import"./easing.36b781ab.js";import"./VImg.fe4e9eac.js";import"./VCounter.65c84b5d.js";import"./VList.e592e6b3.js";import"./createSimpleFunctional.d6243075.js";import"./VAvatar.607df399.js";import"./dialog-transition.883ec891.js";import"./VMenu.74707630.js";import"./scopeId.14a3e834.js";import"./VOverlay.c0203bda.js";import"./VCheckboxBtn.48fe46c0.js";import"./VSelectionControl.af17e4b5.js";import"./VChip.b0494253.js";import"./VSlideGroup.cf5a8607.js";import"./VCardActions.bd21bfb5.js";import"./ssrBoot.f12ed5a1.js";import"./index.f0101229.js";import"./filter.9525754c.js";import"./vue.runtime.esm-bundler.95554864.js";const be=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h6",{class:"text-base font-weight-medium"}," Standard 3-5 Days "),C("h6",{class:"text-base font-weight-bold"}," Free ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Monday, 18 Nov")],-1),fe=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h5",{class:"text-base font-weight-medium"}," Express "),C("h6",{class:"text-base font-weight-bold"}," $5.00 ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Sunday, 17 Nov")],-1),Ce=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h6",{class:"text-base font-weight-medium"}," Overnight "),C("h6",{class:"text-base font-weight-bold"}," $10.00 ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Saturday, 16 Nov")],-1),ve={class:"me-1"},Fe={class:"d-flex gap-4"},we=g({__name:"DemoFormLayoutCollapsible",setup(N){const c=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii"],b=r("home"),u=r("standard"),i=r("credit-debit-card"),f=r(0),w=[{radioValue:"credit-debit-card",radioLabel:"Credit/Debit/ATM Card",icon:"tabler-credit-card"},{radioValue:"cash-on-delivery",radioLabel:"Cash On Delivery",icon:"tabler-help"}];return(s,t)=>(k(),h(re,{modelValue:a(f),"onUpdate:modelValue":t[7]||(t[7]=d=>n(f)?f.value=d:null)},{default:l(()=>[e(Y,null,{default:l(()=>[e(j,null,{default:l(()=>[F("Delivery Address")]),_:1}),e(G,null,{default:l(()=>[e(_,{onSubmit:t[1]||(t[1]=R(()=>{},["prevent"]))},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Full Name"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Phone No"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(de,{label:"Address",rows:"3"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Pincode"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Landmark"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"City"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(D,{items:c,label:"State"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(ne,{class:"mb-3"},{default:l(()=>[F(" Address Type ")]),_:1}),e(K,{modelValue:a(b),"onUpdate:modelValue":t[0]||(t[0]=d=>n(b)?b.value=d:null),inline:""},{default:l(()=>[C("div",null,[e(L,{label:"Home (All day delivery)",value:"home"}),e(L,{label:"Office (Delivery between 10 AM - 5 PM)",value:"office"})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(Y,null,{default:l(()=>[e(j,null,{default:l(()=>[F("Delivery Options")]),_:1}),e(G,null,{default:l(()=>[e(K,{modelValue:a(u),"onUpdate:modelValue":t[5]||(t[5]=d=>n(u)?u.value=d:null),class:"delivery-options"},{default:l(()=>[C("div",{class:A(["delivery-option d-flex rounded-t",a(u)==="standard"?"active":""]),onClick:t[2]||(t[2]=d=>u.value="standard")},[e(L,{inline:"",value:"standard",class:"mt-n4"}),be],2),C("div",{class:A(["delivery-option d-flex",a(u)==="express"?"active":""]),onClick:t[3]||(t[3]=d=>u.value="express")},[e(L,{inline:"",class:"mt-n4",value:"express"}),fe],2),C("div",{class:A(["delivery-option d-flex rounded-b",a(u)==="overnight"?"active":""]),onClick:t[4]||(t[4]=d=>u.value="overnight")},[e(L,{inline:"",class:"mt-n4",value:"overnight"}),Ce],2)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(Y,null,{default:l(()=>[e(j,null,{default:l(()=>[F("Payment Method")]),_:1}),e(G,null,{default:l(()=>[e(y,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(_,null,{default:l(()=>[C("div",null,[e(K,{modelValue:a(i),"onUpdate:modelValue":t[6]||(t[6]=d=>n(i)?i.value=d:null),inline:""},{default:l(()=>[C("div",null,[(k(),X(ee,null,le(w,d=>e(L,{key:d.radioValue,value:d.radioValue},{label:l(()=>[C("span",ve,oe(d.radioLabel),1),e(te,{size:"18",icon:d.icon},null,8,["icon"])]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])]),ae(e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{label:"Card Number"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Name"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(m,{label:"Expiry Date"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(m,{label:"CVV Code"})]),_:1})]),_:1},512),[[se,a(i)==="credit-debit-card"]])]),_:1})]),_:1})]),_:1}),e(J,{class:"my-5"}),C("div",Fe,[e(x,null,{default:l(()=>[F("Place Order")]),_:1}),e(x,{color:"secondary",variant:"tonal"},{default:l(()=>[F(" Cancel ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});const ye=g({__name:"DemoFormLayoutFormWithTabs",setup(N){const c=r("personal-info"),b=r(""),u=r(""),i=r(),f=r(""),w=r(),s=["USA","Canada","UK","Denmark","Germany","Iceland","Israel","Mexico"],t=["English","German","French","Spanish","Portuguese","Russian","Korean"],d=r(""),v=r(""),P=r(""),I=r(""),S=r(""),z=r(""),H=r(""),M=r(""),$=r(""),q=r(""),W=r([]),B=r(!1),U=r(!1);return(je,V)=>(k(),X(ee,null,[e(me,{modelValue:a(c),"onUpdate:modelValue":V[0]||(V[0]=p=>n(c)?c.value=p:null)},{default:l(()=>[e(O,{value:"personal-info"},{default:l(()=>[F(" Personal Info ")]),_:1}),e(O,{value:"account-details"},{default:l(()=>[F(" Account Details ")]),_:1}),e(O,{value:"social-links"},{default:l(()=>[F(" Social Links ")]),_:1})]),_:1},8,["modelValue"]),e(J),e(ie,{flat:""},{default:l(()=>[e(Z,null,{default:l(()=>[e(ue,{modelValue:a(c),"onUpdate:modelValue":V[19]||(V[19]=p=>n(c)?c.value=p:null)},{default:l(()=>[e(Q,{value:"personal-info"},{default:l(()=>[e(_,{class:"mt-2"},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":V[1]||(V[1]=p=>n(b)?b.value=p:null),label:"First name"},null,8,["modelValue"])]),_:1}),e(o,{md:"6",cols:"12"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":V[2]||(V[2]=p=>n(u)?u.value=p:null),label:"Last name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(D,{modelValue:a(i),"onUpdate:modelValue":V[3]||(V[3]=p=>n(i)?i.value=p:null),items:s,label:"Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(D,{modelValue:a(W),"onUpdate:modelValue":V[4]||(V[4]=p=>n(W)?W.value=p:null),items:a(t),multiple:"",chips:"",clearable:"",label:"Language"},null,8,["modelValue","items"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(f),"onUpdate:modelValue":V[5]||(V[5]=p=>n(f)?f.value=p:null),label:"Birth Date",placeholder:"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(w),"onUpdate:modelValue":V[6]||(V[6]=p=>n(w)?w.value=p:null),type:"number",label:"Phone No."},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(Q,{value:"account-details"},{default:l(()=>[e(_,{class:"mt-2"},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(d),"onUpdate:modelValue":V[7]||(V[7]=p=>n(d)?d.value=p:null),label:"Username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(v),"onUpdate:modelValue":V[8]||(V[8]=p=>n(v)?v.value=p:null),label:"Email",suffix:"@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(P),"onUpdate:modelValue":V[9]||(V[9]=p=>n(P)?P.value=p:null),label:"Password",type:a(B)?"text":"password","append-inner-icon":a(B)?"tabler-eye":"tabler-eye-off","onClick:appendInner":V[10]||(V[10]=p=>B.value=!a(B))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(I),"onUpdate:modelValue":V[11]||(V[11]=p=>n(I)?I.value=p:null),label:"Confirm Password",type:a(U)?"text":"password","append-inner-icon":a(U)?"tabler-eye":"tabler-eye-off","onClick:appendInner":V[12]||(V[12]=p=>U.value=!a(U))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(Q,{value:"social-links"},{default:l(()=>[e(_,{class:"mt-2"},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(S),"onUpdate:modelValue":V[13]||(V[13]=p=>n(S)?S.value=p:null),label:"Twitter"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(z),"onUpdate:modelValue":V[14]||(V[14]=p=>n(z)?z.value=p:null),label:"Facebook"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(H),"onUpdate:modelValue":V[15]||(V[15]=p=>n(H)?H.value=p:null),label:"Google+"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(M),"onUpdate:modelValue":V[16]||(V[16]=p=>n(M)?M.value=p:null),label:"LinkedIn"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a($),"onUpdate:modelValue":V[17]||(V[17]=p=>n($)?$.value=p:null),label:"Instagram"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(q),"onUpdate:modelValue":V[18]||(V[18]=p=>n(q)?q.value=p:null),label:"Quora"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(J),e(Z,{class:"d-flex gap-4"},{default:l(()=>[e(x,null,{default:l(()=>[F("Submit")]),_:1}),e(x,{color:"secondary",variant:"tonal"},{default:l(()=>[F(" Cancel ")]),_:1})]),_:1})]),_:1})],64))}}),xe=g({__name:"DemoFormLayoutFormValidation",setup(N){const c=r(""),b=r(""),u=["Item 1","Item 2","Item 3","Item 4"],i=r(),f=r(!1),w=r();return(s,t)=>(k(),h(_,{ref_key:"form",ref:w,"lazy-validation":""},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(c),"onUpdate:modelValue":t[0]||(t[0]=d=>n(c)?c.value=d:null),rules:[a(E)],label:"Name",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":t[1]||(t[1]=d=>n(b)?b.value=d:null),rules:[a(Ve),a(E)],label:"E-mail",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(D,{modelValue:a(i),"onUpdate:modelValue":t[2]||(t[2]=d=>n(i)?i.value=d:null),items:a(u),rules:[a(E)],label:"Item",name:"select",require:""},null,8,["modelValue","items","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(T,{modelValue:a(f),"onUpdate:modelValue":t[3]||(t[3]=d=>n(f)?f.value=d:null),rules:[a(E)],label:"Do you agree?",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(x,{color:"success",onClick:t[4]||(t[4]=d=>{var v;return(v=a(w))==null?void 0:v.validate()})},{default:l(()=>[F(" Validate ")]),_:1}),e(x,{color:"error",onClick:t[5]||(t[5]=d=>{var v;return(v=a(w))==null?void 0:v.reset()})},{default:l(()=>[F(" Reset Form ")]),_:1}),e(x,{color:"warning",onClick:t[6]||(t[6]=d=>{var v;return(v=a(w))==null?void 0:v.resetValidation()})},{default:l(()=>[F(" Reset Validation ")]),_:1})]),_:1})]),_:1})]),_:1},512))}}),_e=g({__name:"DemoFormLayoutFormHint",setup(N){const c=r(""),b=r(""),u=r(),i=r(!1),f=["foo","bar","fizz","buzz"],w=r([]);return(s,t)=>(k(),h(_,{onSubmit:t[5]||(t[5]=R(()=>{},["prevent"]))},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(c),"onUpdate:modelValue":t[0]||(t[0]=d=>n(c)?c.value=d:null),label:"Username",placeholder:"Username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":t[1]||(t[1]=d=>n(b)?b.value=d:null),label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":t[2]||(t[2]=d=>n(u)?u.value=d:null),label:"Password",type:"password","persistent-hint":"",placeholder:"Password",hint:"Your password must be 8-20 characters long."},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(ce,{modelValue:a(w),"onUpdate:modelValue":t[3]||(t[3]=d=>n(w)?w.value=d:null),items:a(f),chips:"",multiple:"",label:"Autocomplete"},null,8,["modelValue","items"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(T,{modelValue:a(i),"onUpdate:modelValue":t[4]||(t[4]=d=>n(i)?i.value=d:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(x,{type:"submit"},{default:l(()=>[F(" Submit ")]),_:1}),e(x,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[F(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1}))}}),ke=g({__name:"DemoFormLayoutMultipleColumn",setup(N){const c=r(""),b=r(""),u=r(""),i=r(""),f=r(""),w=r(""),s=r(!1);return(t,d)=>(k(),h(_,{onSubmit:d[7]||(d[7]=R(()=>{},["prevent"]))},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(c),"onUpdate:modelValue":d[0]||(d[0]=v=>n(c)?c.value=v:null),label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":d[1]||(d[1]=v=>n(b)?b.value=v:null),label:"Last Name",placeholder:"Last Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(w),"onUpdate:modelValue":d[2]||(d[2]=v=>n(w)?w.value=v:null),label:"Email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":d[3]||(d[3]=v=>n(u)?u.value=v:null),label:"City",placeholder:"City"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(i),"onUpdate:modelValue":d[4]||(d[4]=v=>n(i)?i.value=v:null),label:"Country",placeholder:"Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(f),"onUpdate:modelValue":d[5]||(d[5]=v=>n(f)?f.value=v:null),label:"Company",placeholder:"Company"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(T,{modelValue:a(s),"onUpdate:modelValue":d[6]||(d[6]=v=>n(s)?s.value=v:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(x,{type:"submit"},{default:l(()=>[F(" Submit ")]),_:1}),e(x,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[F(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1}))}}),ge=g({__name:"DemoFormLayoutVerticalFormWithIcons",setup(N){const c=r(""),b=r(""),u=r(),i=r(),f=r(!1);return(w,s)=>(k(),h(_,{onSubmit:R(t=>({}),["prevent"])},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(c),"onUpdate:modelValue":s[0]||(s[0]=t=>n(c)?c.value=t:null),"prepend-inner-icon":"tabler-user",label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":s[1]||(s[1]=t=>n(b)?b.value=t:null),"prepend-inner-icon":"tabler-mail",label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":s[2]||(s[2]=t=>n(u)?u.value=t:null),"prepend-inner-icon":"tabler-device-mobile",label:"Mobile",type:"number",placeholder:"Number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(i),"onUpdate:modelValue":s[3]||(s[3]=t=>n(i)?i.value=t:null),"prepend-inner-icon":"tabler-lock",label:"Password",type:"password",placeholder:"password"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(T,{modelValue:a(f),"onUpdate:modelValue":s[4]||(s[4]=t=>n(f)?f.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{type:"submit",class:"me-2"},{default:l(()=>[F(" Submit ")]),_:1}),e(x,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[F(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),Ne=g({__name:"DemoFormLayoutVerticalForm",setup(N){const c=r(""),b=r(""),u=r(),i=r(),f=r(!1);return(w,s)=>(k(),h(_,{onSubmit:s[5]||(s[5]=R(()=>{},["prevent"]))},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(c),"onUpdate:modelValue":s[0]||(s[0]=t=>n(c)?c.value=t:null),label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":s[1]||(s[1]=t=>n(b)?b.value=t:null),label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":s[2]||(s[2]=t=>n(u)?u.value=t:null),label:"Mobile",type:"number",placeholder:"Number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(i),"onUpdate:modelValue":s[3]||(s[3]=t=>n(i)?i.value=t:null),label:"Password",type:"password",placeholder:"password"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(T,{modelValue:a(f),"onUpdate:modelValue":s[4]||(s[4]=t=>n(f)?f.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(x,{type:"submit"},{default:l(()=>[F(" Submit ")]),_:1}),e(x,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[F(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1}))}}),he=C("label",{for:"firstNameHorizontalIcons"},"First Name",-1),Re=C("label",{for:"emailHorizontalIcons"},"Email",-1),Te=C("label",{for:"mobileHorizontalIcons"},"Mobile",-1),Le=C("label",{for:"passwordHorizontalIcons"},"Password",-1),Pe=g({__name:"DemoFormLayoutHorizontalFormWithIcons",setup(N){const c=r(""),b=r(""),u=r(),i=r(),f=r(!1);return(w,s)=>(k(),h(_,{onSubmit:s[5]||(s[5]=R(()=>{},["prevent"]))},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[he]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"firstNameHorizontalIcons",modelValue:a(c),"onUpdate:modelValue":s[0]||(s[0]=t=>n(c)?c.value=t:null),"prepend-inner-icon":"tabler-user",placeholder:"First Name","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Re]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"emailHorizontalIcons",modelValue:a(b),"onUpdate:modelValue":s[1]||(s[1]=t=>n(b)?b.value=t:null),"prepend-inner-icon":"tabler-mail",placeholder:"Email","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Te]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"mobileHorizontalIcons",modelValue:a(u),"onUpdate:modelValue":s[2]||(s[2]=t=>n(u)?u.value=t:null),type:"number","prepend-inner-icon":"tabler-device-mobile",placeholder:"Number","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Le]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"passwordHorizontalIcons",modelValue:a(i),"onUpdate:modelValue":s[3]||(s[3]=t=>n(i)?i.value=t:null),"prepend-inner-icon":"tabler-lock",type:"password",placeholder:"Password","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9"},{default:l(()=>[e(T,{modelValue:a(f),"onUpdate:modelValue":s[4]||(s[4]=t=>n(f)?f.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(x,{type:"submit"},{default:l(()=>[F(" Submit ")]),_:1}),e(x,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[F(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1}))}}),Ie=C("label",{for:"firstName"},"First Name",-1),Be=C("label",{for:"email"},"Email",-1),Ue=C("label",{for:"mobile"},"Mobile",-1),Ee=C("label",{for:"password"},"Password",-1),De=g({__name:"DemoFormLayoutHorizontalForm",setup(N){const c=r(""),b=r(""),u=r(),i=r(),f=r(!1);return(w,s)=>(k(),h(_,{onSubmit:s[5]||(s[5]=R(()=>{},["prevent"]))},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Ie]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"firstName",modelValue:a(c),"onUpdate:modelValue":s[0]||(s[0]=t=>n(c)?c.value=t:null),placeholder:"First Name","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Be]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"email",modelValue:a(b),"onUpdate:modelValue":s[1]||(s[1]=t=>n(b)?b.value=t:null),placeholder:"Email","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Ue]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"mobile",modelValue:a(u),"onUpdate:modelValue":s[2]||(s[2]=t=>n(u)?u.value=t:null),type:"number",placeholder:"Number","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Ee]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"password",modelValue:a(i),"onUpdate:modelValue":s[3]||(s[3]=t=>n(i)?i.value=t:null),type:"password",placeholder:"Password","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9"},{default:l(()=>[e(T,{modelValue:a(f),"onUpdate:modelValue":s[4]||(s[4]=t=>n(f)?f.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(x,{type:"submit"},{default:l(()=>[F(" Submit ")]),_:1}),e(x,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[F(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1}))}}),Se={ts:`<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- \u{1F449} Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Password -->
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- \u{1F449} submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- \u{1F449} Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Password -->
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- \u{1F449} submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},ze={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'
import { emailValidator, requiredValidator } from '@validators'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
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

const name = ref('')
const email = ref('')

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const select = ref()
const checkbox = ref(false)
const form = ref()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},He={ts:`<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'] as const
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<typeof languageList[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>
  <VDivider />

  <VCard flat>
    <VCardText>
      <VWindow v-model="tab">
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
]

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>
  <VDivider />

  <VCard flat>
    <VCardText>
      <VWindow v-model="tab">
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},Me={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} First Name -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstName">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Email -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="email">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Mobile -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobile">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Password -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="password">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} First Name -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstName">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Email -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="email">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Mobile -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobile">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Password -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="password">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

`},$e={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstNameHorizontalIcons">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="emailHorizontalIcons">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="passwordHorizontalIcons">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstNameHorizontalIcons">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="emailHorizontalIcons">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="passwordHorizontalIcons">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},qe={ts:`<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- \u{1F449} Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- \u{1F449} City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- \u{1F449} Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- \u{1F449} Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- \u{1F449} Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- \u{1F449} City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- \u{1F449} Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- \u{1F449} Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},We={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Ae={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Ye=C("h4",{class:"text-h6 font-weight-medium mb-5"}," Collapsible Section ",-1),zl=g({__name:"form-layouts",setup(N){return(c,b)=>{const u=De,i=pe,f=Pe,w=Ne,s=ge,t=ke,d=_e,v=xe,P=ye,I=we;return k(),X("div",null,[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Horizontal Form",code:Me},{default:l(()=>[e(u)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Horizontal Form with Icons",code:$e},{default:l(()=>[e(f)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Vertical Form",code:We},{default:l(()=>[e(w)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Vertical Form with Icons",code:Ae},{default:l(()=>[e(s)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(i,{title:"Multiple Column",code:qe},{default:l(()=>[e(t)]),_:1},8,["code"])]),_:1})]),_:1}),e(y,{class:"match-height my-3"},{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Form Hint",code:Se},{default:l(()=>[e(d)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Form Validation",code:ze},{default:l(()=>[e(v)]),_:1},8,["code"])]),_:1})]),_:1}),e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(i,{title:"Form with Tabs","no-padding":"",code:He},{default:l(()=>[e(P)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[Ye,e(I)]),_:1})]),_:1})])}}});export{zl as default};
