import{d as v,k as C,o as n,c as m,m as o,p as e,w as t,z as i,q as u,J as w,A as _,F as d,a as y,C as k,s as L,a9 as h,ac as b,x as a,b as S,L as B,M as I,y as U}from"./index.add429ee.js";import{V as A}from"./VInput.b6d87e4b.js";import{V as z}from"./VSwitch.c56ef475.js";import{V}from"./VChip.34d510ea.js";import{V as D}from"./VCol.7dd76603.js";import{V as T}from"./VCard.6e70570c.js";import{V as c}from"./VCardText.19d6276a.js";import{V as F}from"./VImg.a8aa58b5.js";import{V as G,a as M,b as N}from"./VList.69caa9c4.js";import{V as R}from"./VCardActions.ad08d8c9.js";import{V as j}from"./VBtn.b8c8f171.js";import{V as E}from"./VRow.1a59a225.js";const J="/assets/3d-safe-box-with-golden-dollar-coins.fcbc95c7.png",Y="/assets/3d-space-rocket-with-smoke.603bb4f0.png",$="/assets/dollar-coins-flying-pink-piggy-bank.85567cfa.png",p=l=>(B("data-v-76e26626"),l=l(),I(),l),q=p(()=>o("div",{class:"text-center"},[o("h4",{class:"text-h4 pricing-title mb-4"}," Pricing Plans "),o("p",{class:"mb-0"}," All plans include 40+ advanced tools and features to boost your product. "),o("p",null,"Choose the best plan to fit your needs.")],-1)),W={class:"d-flex align-center justify-center mx-auto my-10"},H={class:"position-relative"},K={class:"save-upto-chip position-absolute align-center d-none d-md-flex gap-1"},O={class:"text-h5 mb-2"},Q={class:"mb-0"},X={class:"d-flex justify-center align-center"},Z=p(()=>o("sup",{class:"text-sm font-weight-medium me-1"},"$",-1)),ee={class:"text-5xl font-weight-medium text-primary"},se=p(()=>o("sub",{class:"text-sm font-weight-medium ms-1 mt-4"},"/month",-1)),te=v({__name:"AppPricing",props:{xs:null,sm:null,md:null,lg:null,xl:null},setup(l){const P=l,r=C(!0),x=[{name:"Basic",tagLine:"A simple start for everyone",logo:$,monthlyPrice:0,yearlyPrice:0,isPopular:!1,current:!0,features:["100 responses a month","Unlimited forms and surveys","Unlimited fields","Basic form creation tools","Up to 2 subdomains"]},{name:"Standard",tagLine:"For small to medium businesses",logo:J,monthlyPrice:42,yearlyPrice:460,isPopular:!0,current:!1,features:["Unlimited responses","Unlimited forms and surveys","Instagram profile page","Google Docs integration","Custom \u201CThank you\u201D page"]},{name:"Enterprise",tagLine:"Solution for big organizations",logo:Y,monthlyPrice:84,yearlyPrice:690,isPopular:!1,current:!1,features:["PayPal payments","Logic Jumps","File upload with 5GB storage","Custom domain support","Stripe integration"]}];return(oe,f)=>(n(),m(d,null,[q,o("div",W,[e(A,{for:"pricing-plan-toggle",class:"me-2"},{default:t(()=>[i(" Monthly ")]),_:1}),o("div",H,[e(z,{id:"pricing-plan-toggle",modelValue:u(r),"onUpdate:modelValue":f[0]||(f[0]=s=>w(r)?r.value=s:null),label:"Annual"},null,8,["modelValue"]),o("div",K,[e(_,{icon:"tabler-corner-left-down",class:"flip-in-rtl"}),e(V,{label:"",color:"primary"},{default:t(()=>[i(" Save up to 10% ")]),_:1})])])]),e(E,null,{default:t(()=>[(n(),m(d,null,y(x,s=>e(D,k({key:s.logo},P,{cols:"12"}),{default:t(()=>[e(T,{flat:"",border:"",class:L(s.isPopular?"border-primary border-opacity-100":"")},{default:t(()=>[e(c,{style:{height:"4.125rem"},class:"text-end"},{default:t(()=>[h(e(V,{label:"",color:"primary",size:"small"},{default:t(()=>[i(" Popular ")]),_:2},1536),[[b,s.isPopular]])]),_:2},1024),e(c,{class:"text-center"},{default:t(()=>[e(F,{height:140,src:s.logo,class:"mx-auto mb-5"},null,8,["src"]),o("h5",O,a(s.name),1),o("p",Q,a(s.tagLine),1)]),_:2},1024),e(c,{class:"position-relative text-center"},{default:t(()=>[o("div",X,[Z,o("h1",ee,a(u(r)?Math.floor(Number(s.yearlyPrice)/12):s.monthlyPrice),1),se]),h(o("span",{class:"position-absolute text-caption font-weight-medium mt-1",style:{"inset-inline":"0"}},a(s.yearlyPrice===0?"free":`USD ${s.yearlyPrice}/Year`),513),[[b,u(r)]])]),_:2},1024),e(c,{class:"mt-5"},{default:t(()=>[e(G,{class:"card-list"},{default:t(()=>[(n(!0),m(d,null,y(s.features,g=>(n(),S(M,{key:g},{prepend:t(()=>[e(_,{size:14,icon:"tabler-circle",class:"me-3"})]),default:t(()=>[e(N,null,{default:t(()=>[i(a(g),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),e(R,null,{default:t(()=>[e(j,{block:"",color:s.current?"success":"primary",variant:s.isPopular?"elevated":"tonal"},{default:t(()=>[i(a(s.yearlyPrice===0?"Your Current Plan":"Upgrade"),1)]),_:2},1032,["color","variant"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1040)),64))]),_:1})],64))}});const _e=U(te,[["__scopeId","data-v-76e26626"]]),ye="/assets/laptop-girl.35162850.png";export{_e as _,ye as l};
