import{d as x,b3 as B,k as _,a6 as C,q as s,o as l,b as n,w as e,p as t,m as k,x as m,J as b,c as p,F as d,a as f,z as v,A as V,B as T,K as w}from"./index.ced6806d.js";import{V as y}from"./VCol.0d4aad2a.js";import{V as I,a as z}from"./VTabs.61c0282d.js";import{V as D,a as L}from"./VWindowItem.f984c948.js";import{V as N,c as R}from"./VCard.c7bdbb25.js";import{V as A}from"./VAvatar.3162c276.js";import{V as F,a as H,b as U}from"./VList.4aea62ec.js";import{V as W}from"./VBtn.ff8d0fa0.js";import{V as q}from"./VRow.65e1578a.js";import{b as h}from"./route-block.023af118.js";import"./router.e693d955.js";import"./easing.36b781ab.js";import"./VSlideGroup.782e9cd4.js";import"./index.9b7e715d.js";import"./lazy.1bf3b72b.js";import"./VImg.9e1467de.js";import"./ssrBoot.667e179f.js";import"./VCardActions.60dbb4b1.js";import"./createSimpleFunctional.96761c7b.js";import"./position.dc05b09b.js";import"./VDivider.6fd0d2a4.js";const E={class:"text-base mb-3"},J=k("span",null,"Back to help center",-1),K=x({__name:"index",setup(S){const g=B(),o=_(),r=_("");return C(r,()=>w.get("/pages/help-center/subcategory",{params:{category:g.params.category,subcategory:g.params.subcategory}}).then(u=>{o.value=u.data.data,r.value=u.data.activeTab}),{immediate:!0}),(u,i)=>s(o)?(l(),n(q,{key:0},{default:e(()=>[t(y,{cols:"12",md:"4"},{default:e(()=>[k("h6",E,m(s(o).title),1),t(I,{modelValue:s(r),"onUpdate:modelValue":i[0]||(i[0]=a=>b(r)?r.value=a:null),direction:"vertical",class:"v-tabs-pill"},{default:e(()=>[(l(!0),p(d,null,f(s(o).subCategories,a=>(l(),n(z,{key:a.slug,value:a.slug,to:{name:"pages-help-center-category-subcategory",params:{category:s(o).slug,subcategory:a.slug}}},{default:e(()=>[v(m(a.title),1)]),_:2},1032,["value","to"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(y,{cols:"12",md:"8"},{default:e(()=>[t(D,{modelValue:s(r),"onUpdate:modelValue":i[1]||(i[1]=a=>b(r)?r.value=a:null),class:"disable-tab-transition"},{default:e(()=>[(l(!0),p(d,null,f(s(o).subCategories,a=>(l(),n(L,{key:a.slug,value:a.slug},{default:e(()=>[t(N,{title:a.title},{prepend:e(()=>[t(A,{color:"primary",variant:"tonal",rounded:"",size:"42"},{default:e(()=>[t(V,{icon:a.icon,size:"26"},null,8,["icon"])]),_:2},1024)]),default:e(()=>[t(R,null,{default:e(()=>[t(F,{class:"card-list mb-6"},{default:e(()=>[(l(!0),p(d,null,f(a.articles,c=>(l(),n(H,{key:c.slug,to:{name:"pages-help-center-category-subcategory-article",params:{category:s(o).slug,subcategory:a.slug,article:c.slug}}},{prepend:e(()=>[t(V,{icon:"tabler-chevron-right",size:"18",class:"me-2"})]),default:e(()=>[t(U,{class:"text-primary"},{default:e(()=>[v(m(c.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024),t(W,{variant:"tonal",to:{name:"pages-help-center"}},{default:e(()=>[t(V,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),J]),_:1})]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):T("",!0)}});typeof h=="function"&&h(K);export{K as default};