import{d as v,b3 as x,k as p,a6 as C,q as a,o as d,b as g,w as t,p as e,m as r,x as n,J as w,c as k,F as T,a as B,z as b,A as u,B as A,K as D}from"./index.add429ee.js";import{V as h}from"./VCol.7dd76603.js";import{V as H,a as I}from"./VTabs.ea9a26b9.js";import{V as N,a as z}from"./VWindowItem.8381b719.js";import{V as L,a as R,b as S}from"./VCard.6e70570c.js";import{V as f}from"./VCardText.19d6276a.js";import{V as j}from"./VBtn.b8c8f171.js";import{V as _}from"./VAvatar.21a2953e.js";import{V as F}from"./VDivider.641d8c00.js";import{V as M}from"./VRow.1a59a225.js";import{b as y}from"./route-block.023af118.js";import"./router.ba3d0dbd.js";import"./easing.36b781ab.js";import"./VSlideGroup.7a63c452.js";import"./index.0c5b8599.js";import"./lazy.12054de8.js";import"./VImg.a8aa58b5.js";import"./ssrBoot.86c0759f.js";import"./VCardActions.ad08d8c9.js";import"./createSimpleFunctional.3c66e3e0.js";import"./position.da7ae5de.js";const W={class:"text-base mb-3"},q=r("span",null,"Back to help center",-1),E={class:"d-flex justify-space-between flex-wrap mb-2"},J={class:"article-info"},K={class:"text-h6 mb-1"},P=r("p",{class:"mb-1"}," 55 People found this helpful ",-1),U=r("h6",{class:"text-h6"},[b(" Still need help? "),r("a",{href:"javascript:void(0);"},"Contact us?")],-1),G={class:"article-votes d-flex align-center gap-3"},O=v({__name:"[article]",setup(Q){const o=x(),c=p(),l=p(o.params.article),i=p();return C(l,()=>D.get("/pages/help-center/article",{params:{article:l.value,category:o.params.category,subcategory:o.params.subcategory}}).then(m=>{c.value=m.data.activeSubcategory,i.value=m.data.activeArticle}),{immediate:!0}),(m,V)=>a(i)&&a(c)?(d(),g(M,{key:0},{default:t(()=>[e(h,{cols:"12",md:"4"},{default:t(()=>[r("h6",W,n(a(c).title),1),e(H,{modelValue:a(l),"onUpdate:modelValue":V[0]||(V[0]=s=>w(l)?l.value=s:null),direction:"vertical",class:"v-tabs-pill"},{default:t(()=>[(d(!0),k(T,null,B(a(c).articles,s=>(d(),g(I,{key:s.slug,value:s.slug,to:{name:"pages-help-center-category-subcategory-article",params:{category:a(o).params.category,subcategory:a(o).params.subcategory,article:s.slug}}},{default:t(()=>[b(n(s.title),1)]),_:2},1032,["value","to"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(h,{cols:"12",md:"8"},{default:t(()=>[e(N,null,{default:t(()=>[e(z,null,{default:t(()=>[e(L,null,{default:t(()=>[e(f,{class:"pb-0"},{default:t(()=>[e(j,{variant:"tonal",to:{name:"pages-help-center-category-subcategory",params:{category:a(o).params.category,subcategory:a(o).params.subcategory}}},{default:t(()=>[e(u,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),q]),_:1},8,["to"])]),_:1}),e(R,null,{prepend:t(()=>[e(_,{color:"primary",variant:"tonal",rounded:""},{default:t(()=>[e(u,{icon:"tabler-currency-dollar"})]),_:1})]),default:t(()=>[e(S,null,{default:t(()=>[b(n(a(i).title),1)]),_:1})]),_:1}),e(f,{innerHTML:a(i).content},null,8,["innerHTML"]),e(F),e(f,null,{default:t(()=>[r("div",E,[r("div",J,[r("h6",K,n(a(i).title),1),P]),U]),r("div",G,[e(_,{color:"primary",variant:"tonal",rounded:"",size:"30"},{default:t(()=>[e(u,{icon:"tabler-thumb-up"})]),_:1}),e(_,{color:"primary",variant:"tonal",rounded:"",size:"30"},{default:t(()=>[e(u,{icon:"tabler-thumb-down"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):A("",!0)}});typeof y=="function"&&y(O);export{O as default};
