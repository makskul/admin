import{d as x,b1 as A,k as n,o as D,b as P,w as a,q as l,p as e,B,z as i,m as s,J as r}from"./index.3aea8822.js";import{_ as N,a as T}from"./InvoiceSendInvoiceDrawer.vue_vue_type_script_setup_true_lang.849cbef0.js";import{_ as U}from"./InvoiceEditable.vue_vue_type_script_setup_true_lang.870d98a7.js";import{u as h}from"./useInvoiceStore.dec35392.js";import{a as S,V as I}from"./VRow.67c1e35d.js";import{V as O,c as $}from"./VCard.6b68a601.js";import{V as u}from"./VBtn.6b17fd81.js";import{V as j}from"./VSelect.63a8d92b.js";import{V as b}from"./VInput.10834ccb.js";import{V as _}from"./VSwitch.d621e5e5.js";import"./AppDateTimePicker.vue_vue_type_style_index_0_lang.4576c59a.js";import"./VField.deb9867d.js";import"./index.cc13591e.js";import"./position.b257d571.js";import"./router.59166a5a.js";import"./easing.36b781ab.js";import"./VSpacer.bf2ca0da.js";import"./VAvatar.6c12d1ff.js";import"./VImg.480b603b.js";import"./VForm.b15a4fe0.js";import"./forwardRefs.c003b6b8.js";import"./VTextField.b1d2c7e8.js";/* empty css                   */import"./VCounter.5ac30989.js";import"./VTextarea.f65017b3.js";import"./VNavigationDrawer.c845e182.js";import"./ssrBoot.a1041e85.js";import"./VChip.9e1f42e5.js";import"./VTooltip.905efe64.js";import"./scopeId.f08362ca.js";import"./VOverlay.ce4a9159.js";import"./lazy.eb8158cf.js";import"./VDivider.734561d6.js";import"./VList.88ea70eb.js";import"./dialog-transition.66eb3fbe.js";import"./VMenu.7bb1b07f.js";import"./VCheckboxBtn.0417a278.js";import"./VSelectionControl.1d0e6d70.js";const M={class:"d-flex gap-2"},R={class:"w-50"},L={class:"w-50"},q={class:"d-flex align-center justify-space-between"},z={class:"d-flex align-center justify-space-between"},J={class:"d-flex align-center justify-space-between"},Be=x({__name:"[id]",setup(W){const C=h(),w=A(),c=n();C.fetchInvoice(Number(w.params.id)).then(m=>{c.value={invoice:m.data.invoice,paymentDetails:m.data.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,hours:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"}}).catch(m=>{console.log(m)});const d=n(!1),p=n(!1),f=n(!0),v=n(!1),V=n(!1),y=n("Bank Account"),g=["Bank Account","PayPal","UPI Transfer"];return(m,t)=>(D(),P(I,null,{default:a(()=>{var k;return[(k=l(c))!=null&&k.invoice?(D(),P(S,{key:0,cols:"12",md:"9"},{default:a(()=>[e(U,{data:l(c)},null,8,["data"])]),_:1})):B("",!0),e(S,{cols:"12",md:"3"},{default:a(()=>[e(O,{class:"mb-8"},{default:a(()=>[e($,null,{default:a(()=>[e(u,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:t[0]||(t[0]=o=>d.value=!0)},{default:a(()=>[i(" Send Invoice ")]),_:1}),s("div",M,[s("div",R,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:l(w).params.id}}},{default:a(()=>[i(" Preview ")]),_:1},8,["to"])]),s("div",L,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2"},{default:a(()=>[i(" Save ")]),_:1})])]),e(u,{block:"","prepend-icon":"tabler-currency-dollar",onClick:t[1]||(t[1]=o=>p.value=!0)},{default:a(()=>[i(" Add Payment ")]),_:1})]),_:1})]),_:1}),e(j,{modelValue:l(y),"onUpdate:modelValue":t[2]||(t[2]=o=>r(y)?y.value=o:null),items:g,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),s("div",q,[e(b,{for:"payment-terms"},{default:a(()=>[i(" Payment Terms ")]),_:1}),s("div",null,[e(_,{id:"payment-terms",modelValue:l(f),"onUpdate:modelValue":t[3]||(t[3]=o=>r(f)?f.value=o:null)},null,8,["modelValue"])])]),s("div",z,[e(b,{for:"client-notes"},{default:a(()=>[i(" Client Notes ")]),_:1}),s("div",null,[e(_,{id:"client-notes",modelValue:l(v),"onUpdate:modelValue":t[4]||(t[4]=o=>r(v)?v.value=o:null)},null,8,["modelValue"])])]),s("div",J,[e(b,{for:"payment-stub"},{default:a(()=>[i(" Payment Stub ")]),_:1}),s("div",null,[e(_,{id:"payment-stub",modelValue:l(V),"onUpdate:modelValue":t[5]||(t[5]=o=>r(V)?V.value=o:null)},null,8,["modelValue"])])])]),_:1}),e(N,{isDrawerOpen:l(d),"onUpdate:isDrawerOpen":t[6]||(t[6]=o=>r(d)?d.value=o:null)},null,8,["isDrawerOpen"]),e(T,{isDrawerOpen:l(p),"onUpdate:isDrawerOpen":t[7]||(t[7]=o=>r(p)?p.value=o:null)},null,8,["isDrawerOpen"])]}),_:1}))}});export{Be as default};
