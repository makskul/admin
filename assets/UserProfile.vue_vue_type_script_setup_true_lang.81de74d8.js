import{d as V,y,o as n,c,w as e,b as t,e as o,l as s,k as r,g as u,H as v}from"./index.caf38268.js";import{u as k}from"./useAppAbility.65eca7d5.js";import{V as m}from"./VAvatar.0831a545.js";import{V as f}from"./VImg.816248d9.js";import{V as I}from"./VMenu.e7e0c6e6.js";import{V as h,a as l,b as i,c as S}from"./VList.f1dc7f28.js";import{V as x}from"./VListItemAction.da9c9629.js";import{V as p}from"./VBadge.7796bdd6.js";import{V as d}from"./VDivider.3dc86b85.js";const H=V({__name:"UserProfile",setup(A){const _=y(),g=k(),a=JSON.parse(localStorage.getItem("userData")||"null"),b=()=>{localStorage.removeItem("userData"),localStorage.removeItem("accessToken"),_.push("/login").then(()=>{localStorage.removeItem("userAbilities"),g.update(v)})};return(L,w)=>(n(),c(p,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",bordered:"",color:"success"},{default:e(()=>[t(m,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:e(()=>[o(a)&&o(a).avatar?(n(),c(f,{key:0,src:o(a).avatar},null,8,["src"])):(n(),c(s,{key:1,icon:"tabler-user"})),t(I,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:e(()=>[t(h,null,{default:e(()=>[t(l,null,{prepend:e(()=>[t(x,{start:""},{default:e(()=>[t(p,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:e(()=>[t(m,{color:"primary",variant:"tonal"},{default:e(()=>[o(a)&&o(a).avatar?(n(),c(f,{key:0,src:o(a).avatar},null,8,["src"])):(n(),c(s,{key:1,icon:"tabler-user"}))]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(i,{class:"font-weight-semibold"},{default:e(()=>[r(u(o(a).fullName),1)]),_:1}),t(S,null,{default:e(()=>[r(u(o(a).role),1)]),_:1})]),_:1}),t(d,{class:"my-2"}),t(l,{to:{name:"apps-user-view-id",params:{id:21}}},{prepend:e(()=>[t(s,{class:"me-2",icon:"tabler-user",size:"22"})]),default:e(()=>[t(i,null,{default:e(()=>[r("Profile")]),_:1})]),_:1}),t(l,{to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{prepend:e(()=>[t(s,{class:"me-2",icon:"tabler-settings",size:"22"})]),default:e(()=>[t(i,null,{default:e(()=>[r("Settings")]),_:1})]),_:1}),t(l,{to:{name:"pages-pricing"}},{prepend:e(()=>[t(s,{class:"me-2",icon:"tabler-currency-dollar",size:"22"})]),default:e(()=>[t(i,null,{default:e(()=>[r("Pricing")]),_:1})]),_:1}),t(l,{to:{name:"pages-faq"}},{prepend:e(()=>[t(s,{class:"me-2",icon:"tabler-help",size:"22"})]),default:e(()=>[t(i,null,{default:e(()=>[r("FAQ")]),_:1})]),_:1}),t(d,{class:"my-2"}),t(l,{link:"",onClick:b},{prepend:e(()=>[t(s,{class:"me-2",icon:"tabler-logout",size:"22"})]),default:e(()=>[t(i,null,{default:e(()=>[r("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{H as _};
