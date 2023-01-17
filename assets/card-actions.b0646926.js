import{d as g,k as V,o as i,b as u,w as t,q as _,c as z,p as e,bk as N,bl as S,m as o,n as y,A as c,b5 as w,B as m,z as l,x as b,a9 as D,ac as I,J as O,F as Y,a as E}from"./index.add429ee.js";import{V as A}from"./index.0c5b8599.js";import{V as P,a as F,b as L}from"./VCard.6e70570c.js";import{V as R,a as U}from"./VBtn.b8c8f171.js";import{a as j}from"./VOverlay.988bb41b.js";import{V as h}from"./VCol.7dd76603.js";import{V as v}from"./VCardText.19d6276a.js";import{V as q}from"./VTable.0d645c10.js";import{V as J}from"./VChip.34d510ea.js";import{V as G}from"./VRow.1a59a225.js";import"./VCardActions.ad08d8c9.js";import"./createSimpleFunctional.3c66e3e0.js";import"./router.ba3d0dbd.js";import"./VAvatar.21a2953e.js";import"./VImg.a8aa58b5.js";import"./position.da7ae5de.js";import"./lazy.12054de8.js";import"./easing.36b781ab.js";const H={key:0},K={class:"v-card-content"},M=g({inheritAttrs:!1}),Q=g({...M,__name:"AppCardActions",props:{collapsed:{type:Boolean,default:!1},noActions:{type:Boolean,default:!1},actionCollapsed:{type:Boolean,default:!1},actionRefresh:{type:Boolean,default:!1},actionRemove:{type:Boolean,default:!1},title:{default:void 0}},emits:["collapsed","refresh","trash"],setup(a,{emit:f}){const r=a,s=V(r.collapsed),C=V(!1),n=V(!1),d=()=>{n.value=!1},x=()=>{s.value=!s.value,f("collapsed",s.value)},B=()=>{n.value=!0,f("refresh",d)},T=()=>{C.value=!0,f("trash")};return(p,k)=>(i(),u(A,null,{default:t(()=>[_(C)?m("",!0):(i(),z("div",H,[e(P,N(S(p.$attrs)),{default:t(()=>[e(F,null,{append:t(()=>[o("div",null,[y(p.$slots,"before-actions"),(!(a.actionRemove||a.actionRefresh)||a.actionCollapsed)&&!a.noActions?(i(),u(R,{key:0,icon:"",color:"default",variant:"text",size:"x-small",onClick:x},{default:t(()=>[e(c,{size:"20",icon:"tabler-chevron-up",style:w([{transform:_(s)?"rotate(-180deg)":null},{"transition-duration":"0.28s"}])},null,8,["style"])]),_:1})):m("",!0),(!(a.actionRemove||a.actionCollapsed)||a.actionRefresh)&&!a.noActions?(i(),u(R,{key:1,icon:"",size:"x-small",variant:"text",color:"default",onClick:B},{default:t(()=>[e(c,{size:"20",icon:"tabler-refresh"})]),_:1})):m("",!0),(!(a.actionRefresh||a.actionCollapsed)||a.actionRemove)&&!a.noActions?(i(),u(R,{key:2,icon:"",size:"x-small",variant:"text",color:"default",onClick:T},{default:t(()=>[e(c,{size:"20",icon:"tabler-x"})]),_:1})):m("",!0)])]),default:t(()=>[r.title||p.$slots.title?(i(),u(L,{key:0},{default:t(()=>[y(p.$slots,"title",{},()=>[l(b(r.title),1)])]),_:3})):m("",!0)]),_:3}),e(A,null,{default:t(()=>[D(o("div",K,[y(p.$slots,"default")],512),[[I,!_(s)]])]),_:3}),e(j,{modelValue:_(n),"onUpdate:modelValue":k[0]||(k[0]=$=>O(n)?n.value=$:null),contained:"",persistent:"",class:"align-center justify-center"},{default:t(()=>[e(U,{indeterminate:""})]),_:1},8,["modelValue"])]),_:3},16)]))]),_:3}))}});const W=o("thead",null,[o("tr",null,[o("th",{scope:"col"}," ACTION "),o("th",{scope:"col"}," ICON "),o("th",{scope:"col"}," DETAILS ")])],-1),X=o("p",null,[l("You can specifically add collapsible action using "),o("code",null,"actionCollapse"),l(" prop")],-1),Z=o("p",null,[l("You can specifically add refresh action using "),o("code",null,"actionRefresh"),l(" prop")],-1),ee=o("p",null,[l("You can specifically add remove action using "),o("code",null,"actionRemove"),l(" prop")],-1),te=o("p",null,[o("code",null,"app-card-actions"),l(" also provides "),o("code",null,"before-actions"),l(" and "),o("code",null,"after-actions"),l(" slot")],-1),oe=o("span",null,"You can find more details in our documentation",-1),Re=g({__name:"card-actions",setup(a){const f=[{action:"Collapse",icon:"tabler-chevron-up",details:"Collapse card content using collapse action."},{action:"Refresh Content",icon:"tabler-refresh",details:"Refresh your card content using refresh action."},{action:"Remove Card",icon:"tabler-x",details:"Remove card from page using remove card action"}],r=s=>{setTimeout(s,3e3)};return(s,C)=>{const n=Q;return i(),u(G,null,{default:t(()=>[e(h,{cols:"12"},{default:t(()=>[e(n,{title:"Cards Actions",onRefresh:r},{default:t(()=>[e(v,null,{default:t(()=>[e(q,null,{default:t(()=>[W,o("tbody",null,[(i(),z(Y,null,E(f,d=>o("tr",{key:d.icon},[o("td",null,b(d.action),1),o("td",null,[e(c,{size:"20",icon:d.icon},null,8,["icon"])]),o("td",null,b(d.details),1)])),64))])]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(n,{"action-collapsed":"",title:"Collapsible"},{default:t(()=>[e(v,null,{default:t(()=>[X,o("span",null,[l("Click on "),e(c,{size:"20",icon:"tabler-chevron-up"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Refresh Content","action-refresh":"",onRefresh:r},{default:t(()=>[e(v,null,{default:t(()=>[Z,o("span",null,[l("Click on "),e(c,{size:"20",icon:"tabler-refresh"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Remove Card","action-remove":""},{default:t(()=>[e(v,null,{default:t(()=>[ee,o("span",null,[l("Click on "),e(c,{size:"20",icon:"tabler-x"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Slots",onRefresh:r},{"before-actions":t(()=>[e(J,{class:"me-3",color:"primary",size:"small"},{default:t(()=>[l(" 3 Updates ")]),_:1})]),default:t(()=>[e(v,null,{default:t(()=>[te,oe]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Re as default};
