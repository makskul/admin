import{K as n,d as l,bn as p,k as m,r as i,o as c,c as u,p as e,w as o,z as t}from"./index.f213f02a.js";import{S as d}from"./SpotsTable.c7ec5c87.js";import{c as f,V as _}from"./VCard.0479d9ab.js";import{V as r}from"./VBtn.e3a1b4a9.js";import{V}from"./VCol.789f6d3b.js";import{V as x}from"./VRow.56ed4074.js";import"./VTable.a86437fc.js";import"./router.8c7eb138.js";import"./VCardActions.bd21bfb5.js";import"./createSimpleFunctional.d6243075.js";import"./VAvatar.607df399.js";import"./VImg.fe4e9eac.js";import"./position.b6cfc487.js";async function C(){return await n.get("ad-spots")}const q=l({__name:"index",setup(a){return p.currentRoute.value.query.action,m(""),console.log(C()),(b,k)=>{const s=i("RouterLink");return c(),u("div",null,[e(_,{class:"mb-3"},{default:o(()=>[e(f,{class:"pa-3 pl-6"},{default:o(()=>[e(s,{class:"ms-2",to:{name:"spots-add"}},{default:o(()=>[e(r,{color:"primary",size:"small","prepend-icon":"tabler-plus"},{default:o(()=>[t(" Add ")]),_:1})]),_:1}),e(r,{color:"warning",size:"small","prepend-icon":"tabler-refresh",class:"ml-2"},{default:o(()=>[t(" Refresh ")]),_:1})]),_:1})]),_:1}),e(x,null,{default:o(()=>[e(V,null,{default:o(()=>[e(d)]),_:1})]),_:1})])}}});export{q as default};
