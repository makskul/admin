import{d as B,k as _,a3 as x,o as n,c,p as t,q as l,J as h,w as a,a6 as w,F as V,a as v,b,A as g,z as q,x as d,a9 as T,m as s,s as F,K as L}from"./index.467cdc2d.js";import{_ as N}from"./AppSearchHeader.vue_vue_type_style_index_0_lang.f364db7d.js";import{a as y,V as k}from"./VRow.52d7fbbe.js";import{V as S,a as W}from"./VTabs.0b450692.js";import{V as E}from"./VImg.657a0470.js";import{V as Q,a as A}from"./VWindowItem.540e3b3a.js";import{V as I}from"./VAvatar.9a7149b7.js";import{V as P,a as R}from"./VExpansionPanel.a6fe0d48.js";import{V as D}from"./VChip.78a28383.js";import{V as j,c as z}from"./VCard.2d292526.js";import"./VTextField.8ae34592.js";/* empty css                   */import"./VField.db7c540b.js";import"./index.824c457d.js";import"./VInput.d7ae850d.js";import"./router.d66206d8.js";import"./position.363b5921.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.c9ee3103.js";import"./VBtn.dc3cd726.js";import"./VSlideGroup.5cd931a1.js";import"./lazy.90b899a9.js";import"./ssrBoot.dc50da19.js";const G="/admin/assets/sitting-girl-with-laptop.7faa3bb5.png",H={class:"d-flex align-center mb-6"},J={class:"text-h6"},K={class:"text-sm"},O=s("span",{class:"text-base font-weight-medium"}," No Results Found!! ",-1),Y={class:"text-center pt-15"},$=s("h5",{class:"text-h5 mb-2"}," You still have a question? ",-1),M=s("p",null," If you can't find question in our FAQ, you can contact us. We'll answer you shortly! ",-1),X={class:"text-h6 mb-2"},qe=B({__name:"faq",setup(Z){const u=_(""),r=_([]),C=()=>L.get("/pages/faqs",{params:{q:u.value}}).then(f=>{r.value=f.data}).catch(f=>{console.error(f)}),i=_("Payment"),p=_(0);x(i,()=>p.value=0),x(u,C,{immediate:!0});const U=[{icon:"tabler-phone",via:"+ (810) 2548 2568",tagLine:"We are always happy to help!"},{icon:"tabler-mail",via:"hello@help.com",tagLine:"Best way to get answer faster!"}];return(f,o)=>(n(),c("section",null,[t(N,{modelValue:l(u),"onUpdate:modelValue":o[0]||(o[0]=e=>h(u)?u.value=e:null),title:"Hello, how can we help?",subtitle:"or select a category to quickly find the help you require","custom-class":"mb-7"},null,8,["modelValue"]),t(k,null,{default:a(()=>[w(t(y,{cols:"12",sm:"4",lg:"3",class:"position-relative"},{default:a(()=>[t(S,{modelValue:l(i),"onUpdate:modelValue":o[1]||(o[1]=e=>h(i)?i.value=e:null),direction:"vertical",class:"v-tabs-pill",grow:""},{default:a(()=>[(n(!0),c(V,null,v(l(r),e=>(n(),b(W,{key:e.faqTitle,value:e.faqTitle,class:"text-high-emphasis"},{default:a(()=>[t(g,{icon:e.faqIcon,size:20,start:""},null,8,["icon"]),q(" "+d(e.faqTitle),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),t(E,{width:245,src:l(G),class:"d-none d-sm-block mt-10 mx-auto"},null,8,["src"])]),_:1},512),[[T,l(r).length]]),t(y,{cols:"12",sm:"8",lg:"9"},{default:a(()=>[t(Q,{modelValue:l(i),"onUpdate:modelValue":o[3]||(o[3]=e=>h(i)?i.value=e:null),class:"faq-v-window disable-tab-transition"},{default:a(()=>[(n(!0),c(V,null,v(l(r),e=>(n(),b(A,{key:e.faqTitle,value:e.faqTitle},{default:a(()=>[s("div",H,[t(I,{rounded:"",color:"primary",variant:"tonal",class:"me-3",size:"large"},{default:a(()=>[t(g,{size:32,icon:e.faqIcon},null,8,["icon"])]),_:2},1024),s("div",null,[s("h6",J,d(e.faqTitle),1),s("span",K,d(e.faqSubtitle),1)])]),t(P,{modelValue:l(p),"onUpdate:modelValue":o[2]||(o[2]=m=>h(p)?p.value=m:null),multiple:""},{default:a(()=>[(n(!0),c(V,null,v(e.faqs,m=>(n(),b(R,{key:m.question,title:m.question,text:m.answer},null,8,["title","text"]))),128))]),_:2},1032,["modelValue"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),w(t(y,{cols:"12",class:F(l(r).length?"":"d-flex justify-center align-center")},{default:a(()=>[t(g,{icon:"tabler-help",start:"",size:"20"}),O]),_:1},8,["class"]),[[T,!l(r).length]])]),_:1}),s("div",Y,[t(D,{label:"",color:"primary",size:"small",class:"mb-2"},{default:a(()=>[q(" QUESTION? ")]),_:1}),$,M,t(k,{class:"mt-4"},{default:a(()=>[(n(),c(V,null,v(U,e=>t(y,{key:e.icon,sm:"6",cols:"12"},{default:a(()=>[t(j,{flat:"",variant:"tonal"},{default:a(()=>[t(z,null,{default:a(()=>[t(I,{rounded:"",color:"primary",variant:"tonal",class:"me-3"},{default:a(()=>[t(g,{icon:e.icon},null,8,["icon"])]),_:2},1024)]),_:2},1024),t(z,null,{default:a(()=>[s("h6",X,d(e.via),1),s("span",null,d(e.tagLine),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])]))}});export{qe as default};
