import{_}from"./InvoiceEditable.vue_vue_type_script_setup_true_lang.870d98a7.js";import{a as v,V as k}from"./VRow.67c1e35d.js";import{V as w,c as x}from"./VCard.6b68a601.js";import{V as c}from"./VBtn.6b17fd81.js";import{V as P}from"./VSelect.63a8d92b.js";import{V as f}from"./VInput.10834ccb.js";import{V}from"./VSwitch.d621e5e5.js";import{d as B,k as s,o as S,b as C,w as t,p as e,q as i,z as l,J as m,m as n}from"./index.3aea8822.js";import"./AppDateTimePicker.vue_vue_type_style_index_0_lang.4576c59a.js";import"./VField.deb9867d.js";import"./index.cc13591e.js";import"./position.b257d571.js";import"./router.59166a5a.js";import"./easing.36b781ab.js";import"./VTextarea.f65017b3.js";/* empty css                   */import"./VImg.480b603b.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.5ac30989.js";import"./VTextField.b1d2c7e8.js";import"./VTooltip.905efe64.js";import"./scopeId.f08362ca.js";import"./VOverlay.ce4a9159.js";import"./lazy.eb8158cf.js";import"./useInvoiceStore.dec35392.js";import"./VDivider.734561d6.js";import"./VAvatar.6c12d1ff.js";import"./VList.88ea70eb.js";import"./dialog-transition.66eb3fbe.js";import"./VMenu.7bb1b07f.js";import"./VCheckboxBtn.0417a278.js";import"./VSelectionControl.1d0e6d70.js";import"./VChip.9e1f42e5.js";const N={class:"d-flex align-center justify-space-between"},D={class:"d-flex align-center justify-space-between"},T={class:"d-flex align-center justify-space-between"},pe=B({__name:"index",setup(U){const b=s({invoice:{id:5037,issuedDate:"",service:"",total:0,avatar:"",invoiceStatus:"",balance:"",dueDate:"",client:{address:"",company:"",companyEmail:"",contact:"",country:"",name:""}},paymentDetails:{totalDue:"$12,110.55",bankName:"American Bank",country:"United States",iban:"ETD95476213874685",swiftCode:"BR91905"},purchasedProducts:[{title:"",cost:0,hours:0,description:""}],note:"",paymentMethod:"",salesperson:"",thanksNote:""}),r=s(!0),d=s(!1),p=s(!1),u=s("Bank Account"),y=["Bank Account","PayPal","UPI Transfer"];return(h,a)=>(S(),C(k,null,{default:t(()=>[e(v,{cols:"12",md:"9"},{default:t(()=>[e(_,{data:i(b)},null,8,["data"])]),_:1}),e(v,{cols:"12",md:"3"},{default:t(()=>[e(w,{class:"mb-8"},{default:t(()=>[e(x,null,{default:t(()=>[e(c,{block:"","prepend-icon":"tabler-send",class:"mb-2"},{default:t(()=>[l(" Send Invoice ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{default:t(()=>[l(" Preview ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal"},{default:t(()=>[l(" Save ")]),_:1})]),_:1})]),_:1}),e(P,{modelValue:i(u),"onUpdate:modelValue":a[0]||(a[0]=o=>m(u)?u.value=o:null),items:y,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),n("div",N,[e(f,{for:"payment-terms"},{default:t(()=>[l(" Payment Terms ")]),_:1}),n("div",null,[e(V,{id:"payment-terms",modelValue:i(r),"onUpdate:modelValue":a[1]||(a[1]=o=>m(r)?r.value=o:null)},null,8,["modelValue"])])]),n("div",D,[e(f,{for:"client-notes"},{default:t(()=>[l(" Client Notes ")]),_:1}),n("div",null,[e(V,{id:"client-notes",modelValue:i(d),"onUpdate:modelValue":a[2]||(a[2]=o=>m(d)?d.value=o:null)},null,8,["modelValue"])])]),n("div",T,[e(f,{for:"payment-stub"},{default:t(()=>[l(" Payment Stub ")]),_:1}),n("div",null,[e(V,{id:"payment-stub",modelValue:i(p),"onUpdate:modelValue":a[3]||(a[3]=o=>m(p)?p.value=o:null)},null,8,["modelValue"])])])]),_:1})]),_:1}))}});export{pe as default};
