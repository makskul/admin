import{d as g,k as y,o as i,b as u,w as t,q as _,c as z,p as e,bk as N,bl as S,m as l,n as V,A as r,b3 as w,B as m,z as a,x as b,a6 as D,a9 as I,J as O,F as Y,a as E}from"./index.3aea8822.js";import{V as A}from"./index.cc13591e.js";import{V as P,a as F,b as L,c as h}from"./VCard.6b68a601.js";import{V as R,a as U}from"./VBtn.6b17fd81.js";import{a as j}from"./VOverlay.ce4a9159.js";import{a as v,V as q}from"./VRow.67c1e35d.js";import{V as J}from"./VTable.1488b80d.js";import{V as G}from"./VChip.9e1f42e5.js";import"./VAvatar.6c12d1ff.js";import"./router.59166a5a.js";import"./VImg.480b603b.js";import"./position.b257d571.js";import"./lazy.eb8158cf.js";import"./easing.36b781ab.js";const H={key:0},K={class:"v-card-content"},M=g({inheritAttrs:!1}),Q=g({...M,__name:"AppCardActions",props:{collapsed:{type:Boolean,default:!1},noActions:{type:Boolean,default:!1},actionCollapsed:{type:Boolean,default:!1},actionRefresh:{type:Boolean,default:!1},actionRemove:{type:Boolean,default:!1},title:{default:void 0}},emits:["collapsed","refresh","trash"],setup(o,{emit:f}){const c=o,s=y(c.collapsed),C=y(!1),n=y(!1),d=()=>{n.value=!1},x=()=>{s.value=!s.value,f("collapsed",s.value)},B=()=>{n.value=!0,f("refresh",d)},T=()=>{C.value=!0,f("trash")};return(p,k)=>(i(),u(A,null,{default:t(()=>[_(C)?m("",!0):(i(),z("div",H,[e(P,N(S(p.$attrs)),{default:t(()=>[e(F,null,{append:t(()=>[l("div",null,[V(p.$slots,"before-actions"),(!(o.actionRemove||o.actionRefresh)||o.actionCollapsed)&&!o.noActions?(i(),u(R,{key:0,icon:"",color:"default",variant:"text",size:"x-small",onClick:x},{default:t(()=>[e(r,{size:"20",icon:"tabler-chevron-up",style:w([{transform:_(s)?"rotate(-180deg)":null},{"transition-duration":"0.28s"}])},null,8,["style"])]),_:1})):m("",!0),(!(o.actionRemove||o.actionCollapsed)||o.actionRefresh)&&!o.noActions?(i(),u(R,{key:1,icon:"",size:"x-small",variant:"text",color:"default",onClick:B},{default:t(()=>[e(r,{size:"20",icon:"tabler-refresh"})]),_:1})):m("",!0),(!(o.actionRefresh||o.actionCollapsed)||o.actionRemove)&&!o.noActions?(i(),u(R,{key:2,icon:"",size:"x-small",variant:"text",color:"default",onClick:T},{default:t(()=>[e(r,{size:"20",icon:"tabler-x"})]),_:1})):m("",!0)])]),default:t(()=>[c.title||p.$slots.title?(i(),u(L,{key:0},{default:t(()=>[V(p.$slots,"title",{},()=>[a(b(c.title),1)])]),_:3})):m("",!0)]),_:3}),e(A,null,{default:t(()=>[D(l("div",K,[V(p.$slots,"default")],512),[[I,!_(s)]])]),_:3}),e(j,{modelValue:_(n),"onUpdate:modelValue":k[0]||(k[0]=$=>O(n)?n.value=$:null),contained:"",persistent:"",class:"align-center justify-center"},{default:t(()=>[e(U,{indeterminate:""})]),_:1},8,["modelValue"])]),_:3},16)]))]),_:3}))}});const W=l("thead",null,[l("tr",null,[l("th",{scope:"col"}," ACTION "),l("th",{scope:"col"}," ICON "),l("th",{scope:"col"}," DETAILS ")])],-1),X=l("p",null,[a("You can specifically add collapsible action using "),l("code",null,"actionCollapse"),a(" prop")],-1),Z=l("p",null,[a("You can specifically add refresh action using "),l("code",null,"actionRefresh"),a(" prop")],-1),ee=l("p",null,[a("You can specifically add remove action using "),l("code",null,"actionRemove"),a(" prop")],-1),te=l("p",null,[l("code",null,"app-card-actions"),a(" also provides "),l("code",null,"before-actions"),a(" and "),l("code",null,"after-actions"),a(" slot")],-1),le=l("span",null,"You can find more details in our documentation",-1),_e=g({__name:"card-actions",setup(o){const f=[{action:"Collapse",icon:"tabler-chevron-up",details:"Collapse card content using collapse action."},{action:"Refresh Content",icon:"tabler-refresh",details:"Refresh your card content using refresh action."},{action:"Remove Card",icon:"tabler-x",details:"Remove card from page using remove card action"}],c=s=>{setTimeout(s,3e3)};return(s,C)=>{const n=Q;return i(),u(q,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(n,{title:"Cards Actions",onRefresh:c},{default:t(()=>[e(h,null,{default:t(()=>[e(J,null,{default:t(()=>[W,l("tbody",null,[(i(),z(Y,null,E(f,d=>l("tr",{key:d.icon},[l("td",null,b(d.action),1),l("td",null,[e(r,{size:"20",icon:d.icon},null,8,["icon"])]),l("td",null,b(d.details),1)])),64))])]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(n,{"action-collapsed":"",title:"Collapsible"},{default:t(()=>[e(h,null,{default:t(()=>[X,l("span",null,[a("Click on "),e(r,{size:"20",icon:"tabler-chevron-up"}),a(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Refresh Content","action-refresh":"",onRefresh:c},{default:t(()=>[e(h,null,{default:t(()=>[Z,l("span",null,[a("Click on "),e(r,{size:"20",icon:"tabler-refresh"}),a(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Remove Card","action-remove":""},{default:t(()=>[e(h,null,{default:t(()=>[ee,l("span",null,[a("Click on "),e(r,{size:"20",icon:"tabler-x"}),a(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Slots",onRefresh:c},{"before-actions":t(()=>[e(G,{class:"me-3",color:"primary",size:"small"},{default:t(()=>[a(" 3 Updates ")]),_:1})]),default:t(()=>[e(h,null,{default:t(()=>[te,le]),_:1})]),_:1})]),_:1})]),_:1})}}});export{_e as default};
