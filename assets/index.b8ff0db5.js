import{_}from"./InvoiceEditable.vue_vue_type_script_setup_true_lang.dd78fc21.js";import{V as v}from"./VCol.7dd76603.js";import{V as k}from"./VCard.6e70570c.js";import{V as w}from"./VCardText.19d6276a.js";import{V as c}from"./VBtn.b8c8f171.js";import{V as x}from"./VSelect.044983bc.js";import{V as f}from"./VInput.b6d87e4b.js";import{V}from"./VSwitch.c56ef475.js";import{V as P}from"./VRow.1a59a225.js";import{d as B,k as s,o as S,b as C,w as t,p as e,q as i,z as l,J as m,m as n}from"./index.add429ee.js";import"./AppDateTimePicker.vue_vue_type_style_index_0_lang.acf990b4.js";import"./VField.4f8a4688.js";import"./index.0c5b8599.js";import"./position.da7ae5de.js";import"./router.ba3d0dbd.js";import"./easing.36b781ab.js";import"./VTextarea.0d6e7c64.js";/* empty css                   */import"./VImg.a8aa58b5.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.12688585.js";import"./VTextField.f93ce827.js";import"./VTooltip.2e166bdf.js";import"./scopeId.d05f90a4.js";import"./VOverlay.988bb41b.js";import"./lazy.12054de8.js";import"./useInvoiceStore.27a6711c.js";import"./VDivider.641d8c00.js";import"./VCardActions.ad08d8c9.js";import"./createSimpleFunctional.3c66e3e0.js";import"./VAvatar.21a2953e.js";import"./VList.69caa9c4.js";import"./dialog-transition.bb266669.js";import"./VMenu.e23f6b18.js";import"./VCheckboxBtn.6769e7ac.js";import"./VSelectionControl.e46a20e1.js";import"./VChip.34d510ea.js";const N={class:"d-flex align-center justify-space-between"},D={class:"d-flex align-center justify-space-between"},T={class:"d-flex align-center justify-space-between"},Ve=B({__name:"index",setup(U){const b=s({invoice:{id:5037,issuedDate:"",service:"",total:0,avatar:"",invoiceStatus:"",balance:"",dueDate:"",client:{address:"",company:"",companyEmail:"",contact:"",country:"",name:""}},paymentDetails:{totalDue:"$12,110.55",bankName:"American Bank",country:"United States",iban:"ETD95476213874685",swiftCode:"BR91905"},purchasedProducts:[{title:"",cost:0,hours:0,description:""}],note:"",paymentMethod:"",salesperson:"",thanksNote:""}),r=s(!0),d=s(!1),p=s(!1),u=s("Bank Account"),y=["Bank Account","PayPal","UPI Transfer"];return(h,a)=>(S(),C(P,null,{default:t(()=>[e(v,{cols:"12",md:"9"},{default:t(()=>[e(_,{data:i(b)},null,8,["data"])]),_:1}),e(v,{cols:"12",md:"3"},{default:t(()=>[e(k,{class:"mb-8"},{default:t(()=>[e(w,null,{default:t(()=>[e(c,{block:"","prepend-icon":"tabler-send",class:"mb-2"},{default:t(()=>[l(" Send Invoice ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{default:t(()=>[l(" Preview ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal"},{default:t(()=>[l(" Save ")]),_:1})]),_:1})]),_:1}),e(x,{modelValue:i(u),"onUpdate:modelValue":a[0]||(a[0]=o=>m(u)?u.value=o:null),items:y,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),n("div",N,[e(f,{for:"payment-terms"},{default:t(()=>[l(" Payment Terms ")]),_:1}),n("div",null,[e(V,{id:"payment-terms",modelValue:i(r),"onUpdate:modelValue":a[1]||(a[1]=o=>m(r)?r.value=o:null)},null,8,["modelValue"])])]),n("div",D,[e(f,{for:"client-notes"},{default:t(()=>[l(" Client Notes ")]),_:1}),n("div",null,[e(V,{id:"client-notes",modelValue:i(d),"onUpdate:modelValue":a[2]||(a[2]=o=>m(d)?d.value=o:null)},null,8,["modelValue"])])]),n("div",T,[e(f,{for:"payment-stub"},{default:t(()=>[l(" Payment Stub ")]),_:1}),n("div",null,[e(V,{id:"payment-stub",modelValue:i(p),"onUpdate:modelValue":a[3]||(a[3]=o=>m(p)?p.value=o:null)},null,8,["modelValue"])])])]),_:1})]),_:1}))}});export{Ve as default};
