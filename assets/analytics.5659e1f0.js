import{V as H}from"./vue3-apexcharts.common.493419a5.js";import{d as A,as as F,a1 as M,bm as I,o as r,b as k,w as e,p as t,m as a,A as v,c as m,F as g,a as y,z as c,x as n,q as u,s as X,y as W,b0 as ot,K as nt,k as O,H as J,a3 as rt,J as K,a6 as it,a9 as ct,B as dt,L as Z,M as tt,h as ut,bk as _t,bl as pt}from"./index.3aea8822.js";import{a as Y,b as q,d as mt,c as S,V as z}from"./VCard.6b68a601.js";import{V as R}from"./VBtn.6b17fd81.js";import{V as E}from"./VMenu.7bb1b07f.js";import{V,a as $,b as C,c as N}from"./VList.88ea70eb.js";import{V as P,a as i}from"./VRow.67c1e35d.js";import{V as j}from"./VChip.9e1f42e5.js";import{V as T}from"./VAvatar.6c12d1ff.js";import{V as G}from"./position.b257d571.js";import{a as ft}from"./formatters.289f6046.js";import{V as ht}from"./VInput.10834ccb.js";import{V as bt}from"./VTextField.b1d2c7e8.js";import{V as D}from"./VDivider.734561d6.js";import{V as vt}from"./VTable.1488b80d.js";import{V as Q}from"./VCheckbox.658a842f.js";import{V as gt}from"./VImg.480b603b.js";import{V as yt}from"./VPagination.b7092446.js";import{u as xt,b as wt,i as kt,a as $t,f as Vt,c as Ct,V as St,d as Tt,s as It,e as At,g as zt}from"./sidebar-pic-3.c57e9198.js";import{_ as Lt}from"./CardStatisticsVertical.vue_vue_type_script_setup_true_lang.7a880add.js";import"./vue.runtime.esm-bundler.c14c1fda.js";import"./router.59166a5a.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.f08362ca.js";import"./VOverlay.ce4a9159.js";import"./lazy.eb8158cf.js";import"./easing.36b781ab.js";import"./dialog-transition.66eb3fbe.js";import"./index.cc13591e.js";import"./index.f0101229.js";/* empty css                   */import"./VField.deb9867d.js";import"./VCounter.5ac30989.js";import"./VCheckboxBtn.0417a278.js";import"./VSelectionControl.1d0e6d70.js";import"./VWindowItem.3237dfcd.js";import"./ssrBoot.a1041e85.js";const Ot={class:"mt-n4 me-n2"},Pt={class:"d-flex align-center gap-2 mb-2 pb-1 flex-wrap"},Rt=a("h4",{class:"text-4xl font-weight-semibold"}," $468 ",-1),Et=a("p",{class:"text-sm"}," You informed of this week compared to last week ",-1),Bt={class:"border rounded mt-3 pa-4"},Wt={class:"d-flex align-center"},Dt={class:"text-base font-weight-medium"},Ft={class:"text-h6 my-3"},Mt=A({__name:"AnalyticsEarningReportsWeeklyOverview",setup(_){const p=F(),f=[{data:[40,65,50,45,90,55,70]}],x=M(()=>{const l=p.current.value.colors,h=p.current.value.variables;return{chart:{parentHeightOffset:0,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{barHeight:"60%",columnWidth:"38%",startingShape:"rounded",endingShape:"rounded",borderRadius:4,distributed:!0}},grid:{show:!1,padding:{top:-30,bottom:0,left:-10,right:-10}},colors:[`rgba(${I(l.primary)},${h["pressed-opacity"]})`,`rgba(${I(l.primary)},${h["pressed-opacity"]})`,`rgba(${I(l.primary)},${h["pressed-opacity"]})`,`rgba(${I(l.primary)},${h["pressed-opacity"]})`,l.primary,`rgba(${I(l.primary)},${h["pressed-opacity"]})`,`rgba(${I(l.primary)},${h["pressed-opacity"]})`],dataLabels:{enabled:!1},legend:{show:!1},xaxis:{categories:["Mo","Tu","We","Th","Fr","Sa","Su"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:`rgba(${I(l["on-surface"])},${h["disabled-opacity"]})`,fontSize:"14px",fontFamily:"Public Sans"}}},yaxis:{labels:{show:!1}},tooltip:{enabled:!1},responsive:[{breakpoint:1025,options:{chart:{height:199}}}]}}),s=[{color:"primary",icon:"tabler-currency-dollar",title:"Earnings",amount:"$545.69",progress:"55"},{color:"info",icon:"tabler-chart-pie-2",title:"Profit",amount:"$256.34",progress:"25"},{color:"error",icon:"tabler-brand-paypal",title:"Expense",amount:"$74.19",progress:"65"}];return(l,h)=>(r(),k(z,null,{default:e(()=>[t(Y,{class:"pb-sm-0"},{append:e(()=>[a("div",Ot,[t(R,{icon:"",size:"x-small",variant:"plain",color:"default"},{default:e(()=>[t(v,{size:"22",icon:"tabler-dots-vertical"}),t(E,{activator:"parent"},{default:e(()=>[t(V,null,{default:e(()=>[(r(),m(g,null,y(["View More","Delete"],(o,d)=>t($,{key:d,value:d},{default:e(()=>[t(C,null,{default:e(()=>[c(n(o),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(q,null,{default:e(()=>[c("Earning Reports")]),_:1}),t(mt,null,{default:e(()=>[c("Weekly Earnings Overview")]),_:1})]),_:1}),t(S,null,{default:e(()=>[t(P,null,{default:e(()=>[t(i,{cols:"12",sm:"5",class:"d-flex flex-column align-self-end"},{default:e(()=>[a("div",Pt,[Rt,t(j,{label:"",color:"success"},{default:e(()=>[c(" +4.2% ")]),_:1})]),Et]),_:1}),t(i,{cols:"12",sm:"7",class:"pt-0"},{default:e(()=>[t(u(H),{options:u(x),series:f,height:"190"},null,8,["options"])]),_:1})]),_:1}),a("div",Bt,[t(P,null,{default:e(()=>[(r(),m(g,null,y(s,o=>t(i,{key:o.title,cols:"12",sm:"4"},{default:e(()=>[a("div",Wt,[t(T,{rounded:"",size:"30",color:o.color,variant:"tonal",class:"me-2"},{default:e(()=>[t(v,{icon:o.icon},null,8,["icon"])]),_:2},1032,["color"]),a("h6",Dt,n(o.title),1)]),a("h6",Ft,n(o.amount),1),t(G,{"model-value":o.progress,color:o.color,height:"8",rounded:"","rounded-bar":""},null,8,["model-value","color"])]),_:2},1024)),64))]),_:1})])]),_:1})]),_:1}))}}),Nt={class:"mt-n4 me-n2"},jt={class:"font-weight-medium text-medium-emphasis me-3"},Ut=A({__name:"AnalyticsMonthlyCampaignState",setup(_){const p=[{avatarColor:"success",avatarIcon:"tabler-mail",title:"Emails",count:"12,346",stats:"0.3%",statsColor:"success"},{avatarColor:"info",avatarIcon:"tabler-link",title:"Opened",count:"8,734",stats:"2.1%",statsColor:"success"},{avatarColor:"warning",avatarIcon:"tabler-click",title:"Clicked",count:"967",stats:"1.4%",statsColor:"error"},{avatarColor:"primary",avatarIcon:"tabler-users",title:"Subscribe",count:"345",stats:"8.5%",statsColor:"success"},{avatarColor:"secondary",avatarIcon:"tabler-alert-triangle",title:"Complaints",count:"10",stats:"1.5%",statsColor:"error"},{avatarColor:"error",avatarIcon:"tabler-ban",title:"Unsubscribe",count:"86",stats:"0.8%",statsColor:"success"}];return(f,x)=>(r(),k(z,{title:"Monthly Campaign State",subtitle:"8.52k Social Visiters"},{append:e(()=>[a("div",Nt,[t(R,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:e(()=>[t(v,{size:"22",icon:"tabler-dots-vertical"}),t(E,{activator:"parent"},{default:e(()=>[t(V,null,{default:e(()=>[(r(),m(g,null,y(["Refresh","Download","View All"],(s,l)=>t($,{key:l,value:l},{default:e(()=>[t(C,null,{default:e(()=>[c(n(s),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(S,null,{default:e(()=>[t(V,{class:"card-list"},{default:e(()=>[(r(),m(g,null,y(p,s=>t($,{key:s.title},{prepend:e(()=>[t(T,{color:s.avatarColor,variant:"tonal",size:"34",rounded:""},{default:e(()=>[t(v,{icon:s.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),append:e(()=>[a("span",jt,n(s.count),1),a("span",{class:X(`text-${s.statsColor}`)},n(s.stats),3)]),default:e(()=>[t(C,{class:"font-weight-medium"},{default:e(()=>[c(n(s.title),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}});const Ht=W(Ut,[["__scopeId","data-v-04648412"]]),Yt=ot("ProjectStore",{actions:{fetchProjects(_){return nt.get("/dashboard/analytics/projects",{params:_})}}}),qt={class:"d-flex align-center gap-2",style:{width:"272px"}},Gt={scope:"col",class:"text-center"},Jt={style:{width:"1rem"}},Kt=a("th",{scope:"col",class:"font-weight-semibold"}," NAME ",-1),Qt=a("th",{scope:"col",class:"font-weight-semibold"}," LEADER ",-1),Xt=a("th",{scope:"col",class:"font-weight-semibold"}," TEAM ",-1),Zt=a("th",{scope:"col",class:"font-weight-semibold"}," STATUS ",-1),te=a("th",{scope:"col",class:"font-weight-semibold"},[a("span",{class:"ms-2"},"ACTIONS")],-1),ee={style:{width:"1rem"}},ae={class:"d-flex align-center gap-3"},se={key:1,class:"font-weight-semibold"},le={class:"text-base text-medium-emphasis font-weight-semibold"},oe={class:"text-disabled"},ne={class:"text-medium-emphasis"},re={class:"text-center"},ie={class:"v-avatar-group"},ce={class:"text-center"},de={class:"text-center",style:{width:"7.5rem"}},ue=a("tr",null,[a("td",{colspan:"8",class:"text-center text-body-1"}," No data available ")],-1),_e=[ue],pe={class:"text-sm text-disabled"},me=A({__name:"AnalyticsProjectTable",setup(_){const p=Yt(),f=O(""),x=O(5),s=O(1),l=O(1),h=O(0),o=O([]),d=O([]),B=O(!1);J(()=>{p.fetchProjects({q:f.value,perPage:x.value,currentPage:s.value}).then(w=>{o.value=w.data.projects,l.value=w.data.totalPage,h.value=w.data.totalProjects}).catch(w=>{console.log(w)})}),J(()=>{s.value>l.value&&(s.value=l.value)});const at=M(()=>{const w=o.value.length?(s.value-1)*x.value+1:0,L=o.value.length+(s.value-1)*x.value;return`Showing ${w} to ${L} of ${h.value} entries`}),st=()=>{B.value=!B.value,B.value?o.value.forEach(w=>{d.value.includes(`check${w.status}`)||d.value.push(`check${w.status}`)}):d.value=[]};rt(d,()=>{d.value.length||(B.value=!1)},{deep:!0});const lt=w=>{if(d.value.includes(w)){const L=d.value.indexOf(w);d.value.splice(L,1)}else d.value.push(w),B.value=!0};return(w,L)=>u(o)?(r(),k(z,{key:0},{default:e(()=>[t(Y,{class:"project-header d-flex flex-wrap justify-space-between py-4 gap-4"},{append:e(()=>[a("div",qt,[t(ht,null,{default:e(()=>[c("Search:")]),_:1}),t(bt,{modelValue:u(f),"onUpdate:modelValue":L[0]||(L[0]=b=>K(f)?f.value=b:null),placeholder:"Search"},null,8,["modelValue"])])]),default:e(()=>[t(q,null,{default:e(()=>[c("Projects")]),_:1})]),_:1}),t(D),t(vt,{class:"text-no-wrap"},{default:e(()=>[a("thead",null,[a("tr",null,[a("th",Gt,[a("div",Jt,[t(Q,{"model-value":u(B),indeterminate:u(o).length!==u(d).length&&!!u(d).length,onClick:st},null,8,["model-value","indeterminate"])])]),Kt,Qt,Xt,Zt,te])]),a("tbody",null,[(r(!0),m(g,null,y(u(o),b=>(r(),m("tr",{key:b.name,style:{height:"3.5rem"}},[a("td",null,[a("div",ee,[t(Q,{id:`check${b.status}`,"model-value":u(d).includes(`check${b.status}`),onClick:U=>lt(`check${b.status}`)},null,8,["id","model-value","onClick"])])]),a("td",null,[a("div",ae,[t(T,{variant:"tonal",color:"primary",size:"38"},{default:e(()=>[b.logo.length?(r(),k(gt,{key:0,src:b.logo},null,8,["src"])):(r(),m("span",se,n(u(ft)(b.name)),1))]),_:2},1024),a("div",null,[a("h6",le,n(b.name),1),a("span",oe,n(b.date),1)])])]),a("td",ne,n(b.leader),1),a("td",re,[a("div",ie,[(r(!0),m(g,null,y(b.team,U=>(r(),k(T,{key:U,size:32,image:U},null,8,["image"]))),128))])]),a("td",ce,[t(G,{"model-value":b.status,color:"primary",height:"6",rounded:"","rounded-bar":""},null,8,["model-value"])]),a("td",de,[t(R,{icon:"",variant:"plain",color:"default",size:"x-small"},{default:e(()=>[t(v,{size:22,icon:"tabler-dots-vertical"}),t(E,{activator:"parent"},{default:e(()=>[t(V,{density:"compact"},{default:e(()=>[t($,{href:"#",title:"Details"}),t($,{href:"#",title:"Archive"})]),_:1})]),_:1})]),_:1})])]))),128))]),it(a("tfoot",null,_e,512),[[ct,!u(o).length]])]),_:1}),t(D),t(S,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3"},{default:e(()=>[a("span",pe,n(u(at)),1),t(yt,{modelValue:u(s),"onUpdate:modelValue":L[1]||(L[1]=b=>K(s)?s.value=b:null),size:"small","total-visible":2,length:u(l)},null,8,["modelValue","length"])]),_:1})]),_:1})):dt("",!0)}});const fe={class:"mt-n4 me-n2"},he=A({__name:"AnalyticsSalesByCountries",setup(_){const p=[{avatarImg:xt,stats:"$8,567k",subtitle:"United states",profitLoss:25.8},{avatarImg:wt,stats:"$2,415k",subtitle:"Brazil",profitLoss:-6.2},{avatarImg:kt,stats:"$865k",subtitle:"India",profitLoss:12.4},{avatarImg:$t,stats:"$745k",subtitle:"Australia",profitLoss:-11.9},{avatarImg:Vt,stats:"$45",subtitle:"France",profitLoss:16.2},{avatarImg:Ct,stats:"$12k",subtitle:"China",profitLoss:14.8}];return(f,x)=>(r(),k(z,{title:"Sales by Countries",subtitle:"Monthly Sales Overview"},{append:e(()=>[a("div",fe,[t(R,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:e(()=>[t(v,{size:"22",icon:"tabler-dots-vertical"}),t(E,{activator:"parent"},{default:e(()=>[t(V,null,{default:e(()=>[(r(),m(g,null,y(["Refresh","Download","View All"],(s,l)=>t($,{key:l,value:l},{default:e(()=>[t(C,null,{default:e(()=>[c(n(s),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(S,null,{default:e(()=>[t(V,{class:"card-list"},{default:e(()=>[(r(),m(g,null,y(p,s=>t($,{key:s.stats},{prepend:e(()=>[t(T,{size:"34",color:"secondary",variant:"tonal",image:s.avatarImg},null,8,["image"])]),append:e(()=>[a("div",{class:X(`d-flex align-center font-weight-semibold ${s.profitLoss>0?"text-success":"text-error"}`)},[t(v,{icon:s.profitLoss>0?"tabler-chevron-up":"tabler-chevron-down",size:"18",class:"me-1"},null,8,["icon"]),a("span",null,n(Math.abs(s.profitLoss))+"%",1)],2)]),default:e(()=>[t(C,{class:"font-weight-medium"},{default:e(()=>[c(n(s.stats),1)]),_:2},1024),t(N,{class:"opacity-100 text-disabled"},{default:e(()=>[c(n(s.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}});const be=W(he,[["__scopeId","data-v-0644f9f0"]]),ve={},ge=a("div",{class:"d-flex align-center justify-space-between"},[a("span",{class:"text-sm text-disabled"},"Sales Overview"),a("span",{class:"text-success"},"+18.2%")],-1),ye=a("h5",{class:"text-h5"}," $42.5k ",-1),xe={class:"d-flex align-center mb-3"},we=a("span",null,"Order",-1),ke=a("h6",{class:"text-h6"}," 62.2% ",-1),$e=a("span",{class:"text-sm text-disabled"},"6,440",-1),Ve={class:"d-flex flex-column align-center justify-center h-100"},Ce={class:"pa-1"},Se=a("span",{class:"text-xs pa-1"},"VS",-1),Te={class:"d-flex align-center justify-end mb-3"},Ie=a("span",{class:"me-2"},"Visits",-1),Ae=a("h6",{class:"text-h6"}," 25.5% ",-1),ze=a("span",{class:"text-sm text-disabled"},"12,749",-1),Le={class:"mt-6"};function Oe(_,p){return r(),k(z,null,{default:e(()=>[t(S,null,{default:e(()=>[ge,ye]),_:1}),t(S,null,{default:e(()=>[t(P,{"no-gutters":""},{default:e(()=>[t(i,{cols:"5"},{default:e(()=>[a("div",xe,[t(T,{color:"info",variant:"tonal",size:30,rounded:"",class:"me-2"},{default:e(()=>[t(v,{size:"18",icon:"tabler-shopping-cart"})]),_:1}),we]),ke,$e]),_:1}),t(i,{cols:"2"},{default:e(()=>[a("div",Ve,[t(D,{vertical:"",class:"mx-auto"}),a("div",Ce,[t(j,{size:"20"},{default:e(()=>[Se]),_:1})]),t(D,{vertical:"",class:"mx-auto"})])]),_:1}),t(i,{cols:"5",class:"text-end"},{default:e(()=>[a("div",Te,[Ie,t(T,{color:"primary",variant:"tonal",size:30,rounded:""},{default:e(()=>[t(v,{size:"18",icon:"tabler-link"})]),_:1})]),Ae,ze]),_:1})]),_:1}),a("div",Le,[t(G,{"model-value":"80",color:"info",height:"8",rounded:""})])]),_:1})]),_:1})}const Pe=W(ve,[["render",Oe]]),Re={class:"mt-n4 me-n2"},Ee={class:"d-flex align-center"},Be={class:"me-2"},We=A({__name:"AnalyticsSourceVisits",setup(_){const p=[{avatarIcon:"tabler-shadow",title:"Direct Source",subtitle:"Direct link click",stats:"1.2k",profitLoss:4.2},{avatarIcon:"tabler-globe",title:"Social Network",subtitle:"Social Channels",stats:"31.5k",profitLoss:8.2},{avatarIcon:"tabler-mail",title:"Email Newsletter",subtitle:"Mail Campaigns",stats:"893",profitLoss:2.4},{avatarIcon:"tabler-external-link",title:"Referrals",subtitle:"Impact Radius Visits",stats:"342",profitLoss:-.4},{avatarIcon:"tabler-discount-2",title:"ADVT",subtitle:"Google ADVT",stats:"2.15k",profitLoss:9.1},{avatarIcon:"tabler-star",title:"Other",subtitle:"Many Sources",stats:"12.5k",profitLoss:6.2}];return(f,x)=>(r(),k(z,{title:"Source Visits",subtitle:"38.4k Visitors"},{append:e(()=>[a("div",Re,[t(R,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:e(()=>[t(v,{size:"22",icon:"tabler-dots-vertical"}),t(E,{activator:"parent"},{default:e(()=>[t(V,null,{default:e(()=>[(r(),m(g,null,y(["Refresh","Download","View All"],(s,l)=>t($,{key:l,value:l},{default:e(()=>[t(C,null,{default:e(()=>[c(n(s),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(S,null,{default:e(()=>[t(V,{class:"card-list"},{default:e(()=>[(r(),m(g,null,y(p,s=>t($,{key:s.title},{prepend:e(()=>[t(T,{size:"34",color:"secondary",variant:"tonal",rounded:""},{default:e(()=>[t(v,{icon:s.avatarIcon},null,8,["icon"])]),_:2},1024)]),append:e(()=>[a("div",Ee,[a("span",Be,n(s.stats),1),t(j,{label:"",color:s.profitLoss>0?"success":"error"},{default:e(()=>[c(n(s.profitLoss>0?"+":"")+" "+n(s.profitLoss)+"% ",1)]),_:2},1032,["color"])])]),default:e(()=>[t(C,{class:"font-weight-medium"},{default:e(()=>[c(n(s.title),1)]),_:2},1024),t(N,{class:"opacity-100 text-disabled"},{default:e(()=>[c(n(s.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}});const De=W(We,[["__scopeId","data-v-be2475e6"]]),Fe=_=>(Z("data-v-1053f83f"),_=_(),tt(),_),Me={class:"mt-n4 me-n2"},Ne=Fe(()=>a("div",{class:"mb-4"},[a("h4",{class:"text-4xl font-weight-semibold mb-2"}," 164 "),a("p",{class:"text-sm"}," Total Tickets ")],-1)),je=A({__name:"AnalyticsSupportTracker",setup(_){const p=F(),f=[85],x=M(()=>{const l=p.current.value.colors,h=p.current.value.variables;return{labels:["Completed Task"],chart:{type:"radialBar"},plotOptions:{radialBar:{offsetY:10,startAngle:-140,endAngle:130,hollow:{size:"65%"},track:{background:l.surface,strokeWidth:"100%"},dataLabels:{name:{offsetY:-20,color:`rgba(${I(l["on-background"])},${h["disabled-opacity"]})`,fontSize:"14px",fontWeight:"400",fontFamily:"Public Sans"},value:{offsetY:10,color:`rgba(${I(l["on-background"])},${h["high-emphasis-opacity"]})`,fontSize:"38px",fontWeight:"600",fontFamily:"Public Sans"}}}},colors:[l.primary],fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.5,gradientToColors:[l.primary],inverseColors:!0,opacityFrom:1,opacityTo:.6,stops:[30,70,100]}},stroke:{dashArray:10},grid:{padding:{top:-20,bottom:5}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},responsive:[{breakpoint:960,options:{chart:{height:280}}}]}}),s=[{avatarColor:"primary",avatarIcon:"tabler-ticket",title:"New Tickets",subtitle:"142"},{avatarColor:"info",avatarIcon:"tabler-circle-check",title:"Open Tickets",subtitle:"28"},{avatarColor:"warning",avatarIcon:"tabler-clock",title:"Response Time",subtitle:"1 Day"}];return(l,h)=>(r(),k(z,{title:"Support Tracker",subtitle:"Last 7 Days"},{append:e(()=>[a("div",Me,[t(R,{icon:"",size:"x-small",variant:"plain",color:"default"},{default:e(()=>[t(v,{size:"22",icon:"tabler-dots-vertical"}),t(E,{activator:"parent"},{default:e(()=>[t(V,null,{default:e(()=>[(r(),m(g,null,y(["View More","Delete"],(o,d)=>t($,{key:d,value:d},{default:e(()=>[t(C,null,{default:e(()=>[c(n(o),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(S,null,{default:e(()=>[t(P,null,{default:e(()=>[t(i,{cols:"12",md:"5",sm:"6",class:"mt-auto"},{default:e(()=>[Ne,t(V,{class:"card-list"},{default:e(()=>[(r(),m(g,null,y(s,o=>t($,{key:o.title},{prepend:e(()=>[t(T,{rounded:"",size:"34",color:o.avatarColor,variant:"tonal"},{default:e(()=>[t(v,{icon:o.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),default:e(()=>[t(C,{class:"font-weight-medium"},{default:e(()=>[c(n(o.title),1)]),_:2},1024),t(N,{class:"opacity-100 text-disabled"},{default:e(()=>[c(n(o.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}),t(i,{cols:"12",md:"7",sm:"6"},{default:e(()=>[t(u(H),{options:u(x),series:f,height:"360"},null,8,["options"])]),_:1})]),_:1})]),_:1})]),_:1}))}});const Ue=W(je,[["__scopeId","data-v-1053f83f"]]),et=_=>(Z("data-v-3aef7c2e"),_=_(),tt(),_),He={class:"d-flex align-center mt-2"},Ye=et(()=>a("h4",{class:"text-4xl font-weight-semibold me-2"}," 87% ",-1)),qe={class:"text-success"},Ge=et(()=>a("span",{class:"text-base"},"25.8%",-1)),Je={class:"mt-n10 me-n2"},Ke={class:"text-success"},Qe=A({__name:"AnalyticsTotalEarning",setup(_){const p=F(),f=[{name:"Earning",data:[15,10,20,8,12,18,12,5]},{name:"Expense",data:[-7,-10,-7,-12,-6,-9,-5,-8]}],x=M(()=>{const l=p.current.value.colors;return{chart:{parentHeightOffset:0,stacked:!0,type:"bar",toolbar:{show:!1}},tooltip:{enabled:!1},legend:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:"18%",borderRadius:5,startingShape:"rounded",endingShape:"rounded"}},colors:[l.primary,l.secondary],dataLabels:{enabled:!1},grid:{show:!1,padding:{top:-40,bottom:-20,left:-10,right:-2}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:1468,options:{plotOptions:{bar:{columnWidth:"22%"}}}},{breakpoint:1197,options:{chart:{height:228},plotOptions:{bar:{borderRadius:8,columnWidth:"26%"}}}},{breakpoint:783,options:{chart:{height:232},plotOptions:{bar:{borderRadius:6,columnWidth:"28%"}}}},{breakpoint:589,options:{plotOptions:{bar:{columnWidth:"16%"}}}},{breakpoint:520,options:{plotOptions:{bar:{borderRadius:6,columnWidth:"18%"}}}},{breakpoint:426,options:{plotOptions:{bar:{borderRadius:5,columnWidth:"20%"}}}},{breakpoint:381,options:{plotOptions:{bar:{columnWidth:"24%"}}}}],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}}}}),s=[{avatar:"tabler-currency-dollar",avatarColor:"primary",title:"Total Sales",subtitle:"Total Sales",earning:"+$98"},{avatar:"tabler-brand-paypal",avatarColor:"secondary",title:"Total Revenue",subtitle:"Client Payment",earning:"+$126"}];return(l,h)=>(r(),k(z,null,{default:e(()=>[t(Y,{class:"pb-0"},{append:e(()=>[a("div",Je,[t(R,{icon:"",size:"x-small",variant:"plain",color:"default"},{default:e(()=>[t(v,{size:"22",icon:"tabler-dots-vertical"}),t(E,{activator:"parent"},{default:e(()=>[t(V,null,{default:e(()=>[(r(),m(g,null,y(["View More","Delete"],(o,d)=>t($,{key:d,value:d},{default:e(()=>[t(C,null,{default:e(()=>[c(n(o),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(q,null,{default:e(()=>[c("Total Earning")]),_:1}),a("div",He,[Ye,a("div",qe,[t(v,{size:"18",icon:"tabler-chevron-up"}),Ge])])]),_:1}),t(S,null,{default:e(()=>[t(u(H),{options:u(x),series:f,height:"210",class:"my-2"},null,8,["options"]),t(V,{class:"card-list mt-4"},{default:e(()=>[(r(),m(g,null,y(s,o=>t($,{key:o.title},{prepend:e(()=>[t(T,{icon:o.avatar,color:o.avatarColor,variant:"tonal",size:"34",rounded:""},null,8,["icon","color"])]),append:e(()=>[a("span",Ke,n(o.earning),1)]),default:e(()=>[t(C,{class:"font-weight-medium"},{default:e(()=>[c(n(o.title),1)]),_:2},1024),t(N,{class:"opacity-100 text-disabled"},{default:e(()=>[c(n(o.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}});const Xe=W(Qe,[["__scopeId","data-v-3aef7c2e"]]),Ze=a("h6",{class:"text-h6 text-white mb-1"}," Website Analytics ",-1),ta=a("p",{class:"text-sm mb-0"}," Total 28.5% Conversion Rate ",-1),ea={class:"font-weight-semibold"},aa=["src"],sa=A({__name:"AnalyticsWebsiteAnalytics",setup(_){const p=[{name:"Traffic",slideImg:It,data:[{number:"1.5k",text:"Sessions"},{number:"3.1k",text:"Page Views"},{number:"1.2k",text:"Leads"},{number:"12%",text:"Conversions"}]},{name:"Spending",slideImg:At,data:[{number:"12h",text:"Spend"},{number:"182",text:"Order Size"},{number:"127",text:"Order"},{number:"23k",text:"Items"}]},{name:"Revenue Sources",slideImg:zt,data:[{number:"268",text:"Direct"},{number:"890",text:"Organic"},{number:"622",text:"Referral"},{number:"1.2k",text:"Campaign"}]}];return(f,x)=>(r(),k(z,{color:"primary"},{default:e(()=>[t(St,{cycle:"",continuous:!1,"show-arrows":!1,"hide-delimiter-background":"","delimiter-icon":()=>u(ut)(u(v),{icon:"fa-circle",size:"10"}),height:"auto",class:"carousel-delimiter-top-end web-analytics-carousel"},{default:e(()=>[(r(),m(g,null,y(p,s=>t(Tt,{key:s.name},{default:e(()=>[t(S,null,{default:e(()=>[t(P,null,{default:e(()=>[t(i,{cols:"12"},{default:e(()=>[Ze,ta]),_:1}),t(i,{cols:"12",sm:"6",order:"2","order-sm":"1"},{default:e(()=>[t(P,null,{default:e(()=>[t(i,{cols:"12",class:"pb-0"},{default:e(()=>[a("p",ea,n(s.name),1)]),_:2},1024),(r(!0),m(g,null,y(s.data,l=>(r(),k(i,{key:l.number,cols:"6",class:"text-no-wrap"},{default:e(()=>[t(j,{label:"",class:"me-2"},{default:e(()=>[c(n(l.number),1)]),_:2},1024),a("span",null,n(l.text),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),t(i,{cols:"12",sm:"6",order:"1","order-sm":"2",class:"position-relative text-center"},{default:e(()=>[a("img",{src:s.slideImg,class:"card-website-analytics-img"},null,8,aa)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1},8,["delimiter-icon"])]),_:1}))}});const Ma=A({__name:"analytics",setup(_){const f=F().current.value.colors,x={title:"Revenue Generated",color:"success",icon:"tabler-credit-card",stats:"97.5k",height:120,series:[{data:[300,350,330,380,340,400,380]}],chartOptions:{chart:{height:110,type:"area",parentHeightOffset:0,toolbar:{show:!1},sparkline:{enabled:!0}},tooltip:{enabled:!1},markers:{colors:"transparent",strokeColors:"transparent"},grid:{show:!1},colors:[f.success],fill:{type:"gradient",gradient:{shadeIntensity:.8,opacityFrom:.6,opacityTo:.1}},dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},xaxis:{show:!0,lines:{show:!1},labels:{show:!1},stroke:{width:0},axisBorder:{show:!1}},yaxis:{stroke:{width:0},show:!1}}};return(s,l)=>(r(),k(P,{class:"match-height"},{default:e(()=>[t(i,{cols:"12",md:"6"},{default:e(()=>[t(sa)]),_:1}),t(i,{cols:"12",md:"3",sm:"6"},{default:e(()=>[t(Pe)]),_:1}),t(i,{cols:"12",md:"3",sm:"6"},{default:e(()=>[t(Lt,_t(pt(x)),null,16)]),_:1}),t(i,{cols:"12",md:"6"},{default:e(()=>[t(Mt)]),_:1}),t(i,{cols:"12",md:"6"},{default:e(()=>[t(Ue)]),_:1}),t(i,{cols:"12",sm:"6",lg:"4"},{default:e(()=>[t(be)]),_:1}),t(i,{cols:"12",sm:"6",lg:"4"},{default:e(()=>[t(Xe)]),_:1}),t(i,{cols:"12",sm:"6",lg:"4"},{default:e(()=>[t(Ht)]),_:1}),t(i,{cols:"12",sm:"6",lg:"4"},{default:e(()=>[t(De)]),_:1}),t(i,{cols:"12",lg:"8"},{default:e(()=>[t(me)]),_:1})]),_:1}))}});export{Ma as default};
