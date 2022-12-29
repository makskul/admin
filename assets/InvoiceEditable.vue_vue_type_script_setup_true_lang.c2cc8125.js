import{_ as j}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang.b2f7fcb8.js";import{a as u,V as D}from"./VRow.44517ae3.js";import{V as A}from"./VSelect.fb986b47.js";import{V as T}from"./VTextarea.75ce35de.js";import{V as h}from"./VTextField.dd6e8921.js";import{V as C}from"./VTooltip.c35af406.js";import{V as w}from"./VBtn.604c43f4.js";import{d as U,k as B,a3 as $,bh as x,a1 as z,o as _,c as v,m as t,p as e,w as o,q as r,J as Y,z as f,x as n,A as k,F as N,b as F,V as R,v as I,B as E,a as M}from"./index.54e47bbc.js";import{V as P,c as p}from"./VCard.29967394.js";import{u as H}from"./useInvoiceStore.6fcc4b3d.js";import{V}from"./VDivider.478efb1c.js";const L={class:"add-products-header mb-2 d-none d-md-flex"},O=t("span",{class:"text-sm"}," Item ",-1),q=t("span",{class:"text-sm"}," Cost ",-1),J=t("span",{class:"text-sm"}," Hours ",-1),W=t("span",{class:"text-sm"}," Price ",-1),G={class:"pa-5 flex-grow-1"},K={class:"text-body-2 text-no-wrap mt-4"},Q=t("p",{class:"mb-1"}," Discount ",-1),X=t("span",null,"0%",-1),Z={class:"mx-2"},tt={class:"text-sm-center my-2"},et=t("span",{class:"d-inline d-md-none"},"Price: ",-1),st={class:"text-body-1"},at={class:"d-flex flex-column justify-space-between border-s pa-1"},ot=U({__name:"InvoiceProductEdit",props:{id:null,data:{default:()=>({title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})}},emits:["removeProduct","totalAmount"],setup(y,{emit:s}){const l=y,b=[{title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."},{title:"App Customization",cost:26,hours:1,description:"Customization & Bug Fixes."},{title:"ABC Template",cost:28,hours:1,description:"Vuetify admin template."},{title:"App Development",cost:32,hours:1,description:"Native App Development."}],c=B({title:"App Customization",cost:26,hours:1,description:"Customization & Bug Fixes."});$(c,()=>{l.data.cost=structuredClone(x(c.value.cost)),l.data.hours=structuredClone(x(c.value.hours)),l.data.description=structuredClone(x(c.value.description)),l.data.title=structuredClone(x(c.value.title))});const g=()=>{s("removeProduct",l.id)},m=z(()=>Number(l.data.cost)*Number(l.data.hours));return $(m,()=>{s("totalAmount",m.value)},{immediate:!0}),(d,i)=>(_(),v(N,null,[t("div",L,[e(D,{class:"font-weight-medium px-4"},{default:o(()=>[e(u,{cols:"12",md:"6"},{default:o(()=>[O]),_:1}),e(u,{cols:"12",md:"2"},{default:o(()=>[q]),_:1}),e(u,{cols:"12",md:"2"},{default:o(()=>[J]),_:1}),e(u,{cols:"12",md:"2"},{default:o(()=>[W]),_:1})]),_:1})]),e(P,{flat:"",border:"",class:"d-flex flex-row"},{default:o(()=>[t("div",G,[e(D,null,{default:o(()=>[e(u,{cols:"12",md:"6"},{default:o(()=>[e(A,{modelValue:r(c),"onUpdate:modelValue":i[0]||(i[0]=a=>Y(c)?c.value=a:null),items:b,label:"Select Item","return-object":"",class:"mb-3"},null,8,["modelValue"]),e(T,{modelValue:l.data.description,"onUpdate:modelValue":i[1]||(i[1]=a=>l.data.description=a),rows:"2",label:"Description",placeholder:"Description"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"2",sm:"4"},{default:o(()=>[e(h,{modelValue:l.data.cost,"onUpdate:modelValue":i[2]||(i[2]=a=>l.data.cost=a),type:"number",label:"Cost"},null,8,["modelValue"]),t("div",K,[Q,X,t("span",Z,[f(" 0% "),e(C,{activator:"parent"},{default:o(()=>[f("Tax 1")]),_:1})]),t("span",null,[f(" 0% "),e(C,{activator:"parent"},{default:o(()=>[f("Tax 2")]),_:1})])])]),_:1}),e(u,{cols:"12",md:"2",sm:"4"},{default:o(()=>[e(h,{modelValue:l.data.hours,"onUpdate:modelValue":i[3]||(i[3]=a=>l.data.hours=a),type:"number",label:"Hours"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"2",sm:"4"},{default:o(()=>[t("p",tt,[et,t("span",st,"$"+n(r(m)),1)])]),_:1})]),_:1})]),t("div",at,[e(w,{icon:"",size:"x-small",color:"default",variant:"text",onClick:g},{default:o(()=>[e(k,{size:"20",icon:"tabler-x"})]),_:1}),e(w,{icon:"",size:"x-small",color:"default",variant:"text"},{default:o(()=>[e(k,{size:"20",icon:"tabler-settings"})]),_:1})])]),_:1})],64))}}),lt={class:"ma-sm-4"},dt={class:"d-flex align-center mb-6"},nt={class:"font-weight-bold text-xl"},it=t("p",{class:"mb-0"}," Office 149, 450 South Brand Brooklyn ",-1),ct=t("p",{class:"mb-0"}," San Diego County, CA 91905, USA ",-1),mt=t("p",{class:"mb-0"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1),ut={class:"mt-4 ma-sm-4"},rt={class:"d-flex align-center font-weight-medium justify-sm-end text-xl mb-3"},pt=t("span",{class:"me-3"},"Invoice",-1),_t={class:"d-flex align-center justify-sm-end mb-3"},ft=t("span",{class:"me-3"},"Date Issued",-1),ht={class:"d-flex align-center justify-sm-end mb-0"},bt=t("span",{class:"me-3"},"Due Date",-1),xt={class:"ma-sm-4",style:{width:"15.5rem"}},Vt=t("h6",{class:"text-sm font-weight-medium mb-3"}," Invoice To: ",-1),vt={class:"mb-1"},yt={class:"mb-1"},gt={key:0,class:"mb-1"},wt={class:"mb-1"},Dt={class:"mb-0"},Ct={class:"ma-sm-4"},$t=t("h6",{class:"text-sm font-weight-medium mb-3"}," Bill To: ",-1),kt=t("td",{class:"pe-6"}," Total Due: ",-1),It={class:"font-weight-semibold"},At=t("td",{class:"pe-6"}," Bank Name: ",-1),Tt=t("td",{class:"pe-6"}," Country: ",-1),Ut=t("td",{class:"pe-6"}," IBAN: ",-1),Bt=t("td",{class:"pe-6"}," SWIFT Code: ",-1),Nt={class:"mt-4 ma-sm-4"},Pt={class:"mx-sm-4 my-2"},St={class:"d-flex align-center mb-4"},jt=t("h6",{class:"text-sm font-weight-semibold me-2"}," Salesperson: ",-1),zt=t("div",{class:"my-2 mx-sm-4"},[t("table",null,[t("tr",null,[t("td",{class:"text-end"},[t("div",{class:"me-5"},[t("p",{class:"mb-2"}," Subtotal: "),t("p",{class:"mb-2"}," Discount: "),t("p",{class:"mb-2"}," Tax: "),t("p",{class:"mb-2"}," Total: ")])]),t("td",{class:"font-weight-semibold"},[t("p",{class:"mb-2"}," $154.25 "),t("p",{class:"mb-2"}," $00.00 "),t("p",{class:"mb-2"}," $50.00 "),t("p",{class:"mb-2"}," $204.25 ")])])])],-1),Yt=t("p",{class:"font-weight-semibold mb-2"}," Note: ",-1),Kt=U({__name:"InvoiceEditable",props:{data:null},setup(y){const s=y,l=H(),b=B([]);l.fetchClients().then(m=>{b.value=m.data}).catch(m=>{console.log(m)});const c=()=>{s.data.purchasedProducts.push({title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})},g=m=>{s.data.purchasedProducts.splice(m,1)};return(m,d)=>{const i=j;return _(),F(P,null,{default:o(()=>[e(p,{class:"d-flex flex-wrap justify-space-between flex-column flex-sm-row"},{default:o(()=>[t("div",lt,[t("div",dt,[e(r(R),{nodes:r(I).app.logo,class:"me-3"},null,8,["nodes"]),t("h6",nt,n(r(I).app.title),1)]),it,ct,mt]),t("div",ut,[t("h6",rt,[pt,t("span",null,[e(h,{modelValue:s.data.invoice.id,"onUpdate:modelValue":d[0]||(d[0]=a=>s.data.invoice.id=a),disabled:"",prefix:"#",density:"compact",style:{width:"8.9rem"}},null,8,["modelValue"])])]),t("p",_t,[ft,t("span",null,[e(i,{modelValue:s.data.invoice.issuedDate,"onUpdate:modelValue":d[1]||(d[1]=a=>s.data.invoice.issuedDate=a),density:"compact",placeholder:"YYYY-MM-DD",style:{width:"8.9rem"},config:{position:"auto right"}},null,8,["modelValue"])])]),t("p",ht,[bt,t("span",null,[e(i,{modelValue:s.data.invoice.dueDate,"onUpdate:modelValue":d[2]||(d[2]=a=>s.data.invoice.dueDate=a),density:"compact",placeholder:"YYYY-MM-DD",style:{width:"8.9rem"},config:{position:"auto right"}},null,8,["modelValue"])])])])]),_:1}),e(V),e(p,{class:"d-flex flex-wrap justify-space-between flex-column flex-sm-row gap-4"},{default:o(()=>[t("div",xt,[Vt,e(A,{modelValue:s.data.invoice.client,"onUpdate:modelValue":d[3]||(d[3]=a=>s.data.invoice.client=a),items:r(b),"item-title":"name","item-value":"name",placeholder:"Select Customer","return-object":"",class:"mb-6",density:"compact"},null,8,["modelValue","items"]),t("p",vt,n(s.data.invoice.client.name),1),t("p",yt,n(s.data.invoice.client.company),1),s.data.invoice.client.address?(_(),v("p",gt,n(s.data.invoice.client.address)+", "+n(s.data.invoice.client.country),1)):E("",!0),t("p",wt,n(s.data.invoice.client.contact),1),t("p",Dt,n(s.data.invoice.client.companyEmail),1)]),t("div",Ct,[$t,t("table",null,[t("tbody",null,[t("tr",null,[kt,t("td",It,n(s.data.paymentDetails.totalDue),1)]),t("tr",null,[At,t("td",null,n(s.data.paymentDetails.bankName),1)]),t("tr",null,[Tt,t("td",null,n(s.data.paymentDetails.country),1)]),t("tr",null,[Ut,t("td",null,n(s.data.paymentDetails.iban),1)]),t("tr",null,[Bt,t("td",null,n(s.data.paymentDetails.swiftCode),1)])])])])]),_:1}),e(V),e(p,{class:"add-products-form"},{default:o(()=>[(_(!0),v(N,null,M(s.data.purchasedProducts,(a,S)=>(_(),v("div",{key:a.title,class:"ma-sm-4"},[e(ot,{id:S,data:a,onRemoveProduct:g},null,8,["id","data"])]))),128)),t("div",Nt,[e(w,{onClick:c},{default:o(()=>[f(" Add Item ")]),_:1})])]),_:1}),e(V),e(p,{class:"d-flex justify-space-between flex-wrap flex-column flex-sm-row"},{default:o(()=>[t("div",Pt,[t("div",St,[jt,e(h,{modelValue:s.data.salesperson,"onUpdate:modelValue":d[4]||(d[4]=a=>s.data.salesperson=a),style:{width:"10rem"}},null,8,["modelValue"])]),e(h,{modelValue:s.data.thanksNote,"onUpdate:modelValue":d[5]||(d[5]=a=>s.data.thanksNote=a),placeholder:"Thanks for your business"},null,8,["modelValue"])]),zt]),_:1}),e(V),e(p,{class:"mx-sm-4"},{default:o(()=>[Yt,e(T,{modelValue:s.data.note,"onUpdate:modelValue":d[6]||(d[6]=a=>s.data.note=a),rows:2},null,8,["modelValue"])]),_:1})]),_:1})}}});export{Kt as _};
