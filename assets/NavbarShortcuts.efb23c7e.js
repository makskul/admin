import{d as f,j as h,o as s,b as l,w as e,p as t,A as r,z as V,q as p,a$ as g,c as x,F as C,a as v,s as A,m,x as u}from"./index.ddf88fb6.js";import{V as y}from"./VMenu.21036c9b.js";import{V as S,a as z,b as k}from"./VCard.96251c0a.js";import{V as d}from"./VBtn.e72b971c.js";import{V as w}from"./VDivider.34b5f002.js";import{V as B}from"./VRow.10cc10ba.js";import{V as I}from"./VCol.85d0744b.js";import{V as D}from"./VAvatar.df291c87.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.0362f556.js";import"./VOverlay.752e594e.js";import"./router.f92578fa.js";import"./lazy.1d76a663.js";import"./easing.36b781ab.js";import"./VImg.b5c614d0.js";import"./dialog-transition.e7404385.js";import"./VCardActions.537aa80d.js";import"./createSimpleFunctional.ade8bbc8.js";import"./position.0ccb893b.js";const N={class:"text-base font-weight-semibold mt-2 mb-0"},$={class:"text-sm"},F=f({__name:"Shortcuts",props:{togglerIcon:{default:"tabler-layout-grid-add"},shortcuts:null},setup(n){const o=n,i=h();return(b,c)=>(s(),l(d,{variant:"text",color:"default",size:"small",icon:""},{default:e(()=>[t(r,{size:"24",icon:o.togglerIcon},null,8,["icon"]),t(y,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(S,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(z,{class:"py-4"},{append:e(()=>[t(d,{size:"x-small",variant:"text",color:"default",icon:""},{default:e(()=>[t(r,{size:"22",icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(k,null,{default:e(()=>[V("Shortcuts")]),_:1})]),_:1}),t(w),t(p(g),{options:{wheelPropagation:!1}},{default:e(()=>[t(B,{class:"ma-0 mt-n1"},{default:e(()=>[(s(!0),x(C,null,v(o.shortcuts,(a,_)=>(s(),l(I,{key:a.title,cols:"6",class:A(["text-center border-t cursor-pointer pa-4",(_+1)%2?"border-e":""]),onClick:M=>p(i).push(a.to)},{default:e(()=>[t(D,{variant:"tonal",size:"48"},{default:e(()=>[t(r,{icon:a.icon},null,8,["icon"])]),_:2},1024),m("h6",N,u(a.title),1),m("span",$,u(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),et=f({__name:"NavbarShortcuts",setup(n){const o=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-layout",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-help",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(i,b)=>{const c=F;return s(),l(c,{shortcuts:o})}}});export{et as default};
