import{d as v,x as w,o as n,j as m,f as a,b as e,w as t,k as i,e as u,B as C,l as _,F as d,n as y,p as k,aW as B,a2 as h,a5 as b,g as o,c as S,D as L,E as I,_ as U}from"./index.892843d9.js";import{V as A}from"./VInput.6f6ad0a7.js";import{V as D}from"./VSwitch.2d926b33.js";import{V as P}from"./VChip.a12da7e4.js";import{V as T}from"./VCol.215297a5.js";import{V as z,c}from"./VCard.3b9b795b.js";import{V as F}from"./VImg.0023685b.js";import{V as G,a as N,b as j}from"./VList.d7eb9572.js";import{V as E}from"./VCardActions.a6b05483.js";import{V as M}from"./VBtn.bbadeaf1.js";import{V as R}from"./VRow.416f45a7.js";const W="/admin/assets/3d-safe-box-with-golden-dollar-coins.fcbc95c7.png",Y="/admin/assets/3d-space-rocket-with-smoke.603bb4f0.png",$="/admin/assets/dollar-coins-flying-pink-piggy-bank.85567cfa.png",p=l=>(L("data-v-76e26626"),l=l(),I(),l),J=p(()=>a("div",{class:"text-center"},[a("h4",{class:"text-h4 pricing-title mb-4"}," Pricing Plans "),a("p",{class:"mb-0"}," All plans include 40+ advanced tools and features to boost your product. "),a("p",null,"Choose the best plan to fit your needs.")],-1)),q={class:"d-flex align-center justify-center mx-auto my-10"},H={class:"position-relative"},K={class:"save-upto-chip position-absolute align-center d-none d-md-flex gap-1"},O={class:"text-h5 mb-2"},Q={class:"mb-0"},X={class:"d-flex justify-center align-center"},Z=p(()=>a("sup",{class:"text-sm font-weight-medium me-1"},"$",-1)),ee={class:"text-5xl font-weight-medium text-primary"},se=p(()=>a("sub",{class:"text-sm font-weight-medium ms-1 mt-4"},"/month",-1)),te=v({__name:"AppPricing",props:{xs:null,sm:null,md:null,lg:null,xl:null},setup(l){const V=l,r=w(!0),x=[{name:"Basic",tagLine:"A simple start for everyone",logo:$,monthlyPrice:0,yearlyPrice:0,isPopular:!1,current:!0,features:["100 responses a month","Unlimited forms and surveys","Unlimited fields","Basic form creation tools","Up to 2 subdomains"]},{name:"Standard",tagLine:"For small to medium businesses",logo:W,monthlyPrice:42,yearlyPrice:460,isPopular:!0,current:!1,features:["Unlimited responses","Unlimited forms and surveys","Instagram profile page","Google Docs integration","Custom \u201CThank you\u201D page"]},{name:"Enterprise",tagLine:"Solution for big organizations",logo:Y,monthlyPrice:84,yearlyPrice:690,isPopular:!1,current:!1,features:["PayPal payments","Logic Jumps","File upload with 5GB storage","Custom domain support","Stripe integration"]}];return(ae,f)=>(n(),m(d,null,[J,a("div",q,[e(A,{for:"pricing-plan-toggle",class:"me-2"},{default:t(()=>[i(" Monthly ")]),_:1}),a("div",H,[e(D,{id:"pricing-plan-toggle",modelValue:u(r),"onUpdate:modelValue":f[0]||(f[0]=s=>C(r)?r.value=s:null),label:"Annual"},null,8,["modelValue"]),a("div",K,[e(_,{icon:"tabler-corner-left-down",class:"flip-in-rtl"}),e(P,{label:"",color:"primary"},{default:t(()=>[i(" Save up to 10% ")]),_:1})])])]),e(R,null,{default:t(()=>[(n(),m(d,null,y(x,s=>e(T,k({key:s.logo},V,{cols:"12"}),{default:t(()=>[e(z,{flat:"",border:"",class:B(s.isPopular?"border-primary border-opacity-100":"")},{default:t(()=>[e(c,{style:{height:"4.125rem"},class:"text-end"},{default:t(()=>[h(e(P,{label:"",color:"primary",size:"small"},{default:t(()=>[i(" Popular ")]),_:2},1536),[[b,s.isPopular]])]),_:2},1024),e(c,{class:"text-center"},{default:t(()=>[e(F,{height:140,src:s.logo,class:"mx-auto mb-5"},null,8,["src"]),a("h5",O,o(s.name),1),a("p",Q,o(s.tagLine),1)]),_:2},1024),e(c,{class:"position-relative text-center"},{default:t(()=>[a("div",X,[Z,a("h1",ee,o(u(r)?Math.floor(Number(s.yearlyPrice)/12):s.monthlyPrice),1),se]),h(a("span",{class:"position-absolute text-caption font-weight-medium mt-1",style:{"inset-inline":"0"}},o(s.yearlyPrice===0?"free":`USD ${s.yearlyPrice}/Year`),513),[[b,u(r)]])]),_:2},1024),e(c,{class:"mt-5"},{default:t(()=>[e(G,{class:"card-list"},{default:t(()=>[(n(!0),m(d,null,y(s.features,g=>(n(),S(N,{key:g},{prepend:t(()=>[e(_,{size:14,icon:"tabler-circle",class:"me-3"})]),default:t(()=>[e(j,null,{default:t(()=>[i(o(g),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),e(E,null,{default:t(()=>[e(M,{block:"",color:s.current?"success":"primary",variant:s.isPopular?"elevated":"tonal"},{default:t(()=>[i(o(s.yearlyPrice===0?"Your Current Plan":"Upgrade"),1)]),_:2},1032,["color","variant"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1040)),64))]),_:1})],64))}});const ge=U(te,[["__scopeId","data-v-76e26626"]]),_e="/admin/assets/laptop-girl.35162850.png";export{ge as _,_e as l};
