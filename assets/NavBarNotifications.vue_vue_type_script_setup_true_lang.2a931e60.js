import{a as b}from"./formatters.289f6046.js";import{V as p}from"./VBtn.6b17fd81.js";import{V as u}from"./VBadge.c1d201ec.js";import{d as V,o as i,b as m,w as e,p as t,A as h,z as f,x as r,B as _,c as l,F as g,a as y,q as N,m as x,C as k,D as B,E as w,G as A}from"./index.3aea8822.js";import{V as F}from"./VMenu.7bb1b07f.js";import{V as C,a as n}from"./VList.88ea70eb.js";import{V as I}from"./VChip.9e1f42e5.js";import{V as v}from"./VDivider.734561d6.js";import{V as L}from"./VListItemAction.f033d92c.js";import{V as P}from"./VAvatar.6c12d1ff.js";const T={key:0},z={class:"whitespace-no-wrap text-medium-emphasis"},D=V({__name:"Notifications",props:{notifications:null,badgeProps:{default:void 0},location:{default:"bottom end"}},emits:["click:readAllNotifications"],setup(c){const o=c;return(d,s)=>(i(),m(u,k({"model-value":!!o.badgeProps},o.badgeProps),{default:e(()=>[t(p,{icon:"",variant:"text",color:"default",size:"small"},{default:e(()=>[t(u,{"model-value":!!o.notifications.length,color:"error",content:"4"},{default:e(()=>[t(h,{icon:"tabler-bell",size:"24"})]),_:1},8,["model-value"]),t(F,{activator:"parent",width:"380px",location:o.location,offset:"14px"},{default:e(()=>[t(C,{class:"py-0"},{default:e(()=>[t(n,{title:"Notifications",class:"notification-section",height:"48px"},{append:e(()=>[o.notifications.length?(i(),m(I,{key:0,color:"primary",size:"small"},{default:e(()=>[f(r(o.notifications.length)+" New ",1)]),_:1})):_("",!0)]),_:1}),t(v),(i(!0),l(g,null,y(o.notifications,a=>(i(),l(g,{key:a.title},[t(n,{title:a.title,subtitle:a.subtitle,link:"",lines:"one","min-height":"66px"},{prepend:e(()=>[t(L,{start:""},{default:e(()=>[t(P,{color:a.color||"primary",image:a.img||void 0,icon:a.icon||void 0,size:"40",variant:"tonal"},{default:e(()=>[a.text?(i(),l("span",T,r(N(b)(a.text)),1)):_("",!0)]),_:2},1032,["color","image","icon"])]),_:2},1024)]),append:e(()=>[x("small",z,r(a.time),1)]),_:2},1032,["title","subtitle"]),t(v)],64))),128)),t(n,{class:"notification-section"},{default:e(()=>[t(p,{block:"",onClick:s[0]||(s[0]=a=>d.$emit("click:readAllNotifications"))},{default:e(()=>[f(" READ ALL NOTIFICATIONS ")]),_:1})]),_:1})]),_:1})]),_:1},8,["location"])]),_:1})]),_:1},16,["model-value"]))}});const E="/admin/assets/paypal.01b645d1.svg",W=V({__name:"NavBarNotifications",setup(c){const o=[{img:B,title:"Congratulation Flora! \u{1F389}",subtitle:"Won the monthly best seller badge",time:"Today"},{text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday"},{img:w,title:"New message received \u{1F44B}\u{1F3FB}",subtitle:"You have 10 unread messages",time:"11 Aug"},{img:E,title:"Paypal",subtitle:"Received Payment",time:"25 May",color:"error"},{img:A,title:"Received Order \u{1F4E6}",subtitle:"New order received from john",time:"19 Mar"}];return(d,s)=>(i(),m(D,{notifications:o}))}});export{W as _};
