import{c as K,i as ee,n as te,h as ae,a as se,b as le,s as oe}from"./sony-dualsense.2d3b4d27.js";import{V as L,a as b}from"./VRow.67c1e35d.js";import{c as k,V as I}from"./VCard.6b68a601.js";import{V as S}from"./VBtn.6b17fd81.js";import{V as re}from"./VImg.480b603b.js";import{d as V,o as i,b as $,w as t,p as e,z as _,q as d,m as a,as as F,a1 as N,bm as T,A as f,c as g,F as x,a as w,x as n,k as P,H as X,r as ne,J as O,C as ie,a6 as ce,a9 as de,B as ue,s as M,y as pe}from"./index.3aea8822.js";import{V as B}from"./vue3-apexcharts.common.493419a5.js";import{V as W}from"./VMenu.7bb1b07f.js";import{V as R,a as E,b as z,c as U}from"./VList.88ea70eb.js";import{V as A}from"./VAvatar.6c12d1ff.js";import{u as me}from"./useInvoiceStore.dec35392.js";import{V as Y}from"./VSelect.63a8d92b.js";import{V as fe}from"./VSpacer.bf2ca0da.js";import{V as he}from"./VTextField.b1d2c7e8.js";import{V as H}from"./VDivider.734561d6.js";import{V as _e}from"./VTable.1488b80d.js";import{V as be}from"./VTooltip.905efe64.js";import{V as ve}from"./VPagination.b7092446.js";import{V as ge,a as ye}from"./VTabs.5966ea3b.js";import{V as xe,a as we}from"./VWindowItem.3237dfcd.js";import{V as Z,a as j}from"./VTimelineItem.f041a85a.js";import"./router.59166a5a.js";import"./position.b257d571.js";import"./vue.runtime.esm-bundler.c14c1fda.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.f08362ca.js";import"./VOverlay.ce4a9159.js";import"./lazy.eb8158cf.js";import"./easing.36b781ab.js";import"./dialog-transition.66eb3fbe.js";import"./index.cc13591e.js";import"./VCheckboxBtn.0417a278.js";import"./VSelectionControl.1d0e6d70.js";import"./VInput.10834ccb.js";import"./VChip.9e1f42e5.js";/* empty css                   */import"./VField.deb9867d.js";import"./VCounter.5ac30989.js";import"./VSlideGroup.b6a8ab09.js";import"./ssrBoot.a1041e85.js";const $e=a("h6",{class:"text-lg text-no-wrap font-weight-semibold"}," Congratulations John! \u{1F389} ",-1),ke=a("p",{class:"mb-2"}," Best seller of the month ",-1),Ve=a("h5",{class:"text-h5 font-weight-semibold text-primary mb-2"}," $48.9k ",-1),Ce=V({__name:"EcommerceCongratulationsJohn",setup(C){return(r,u)=>(i(),$(I,null,{default:t(()=>[e(L,{"no-gutters":""},{default:t(()=>[e(b,{cols:"8"},{default:t(()=>[e(k,null,{default:t(()=>[$e,ke,Ve,e(S,null,{default:t(()=>[_("View Sales")]),_:1})]),_:1})]),_:1}),e(b,{cols:"4"},{default:t(()=>[e(k,{class:"pb-0 px-0 position-relative h-100"},{default:t(()=>[e(re,{src:d(K),height:"140",class:"w-100 position-absolute",style:{bottom:"0"}},null,8,["src"])]),_:1})]),_:1})]),_:1})]),_:1}))}}),Se={class:"mt-n4 me-n2"},Ee={class:"d-flex align-center text-body-2"},ze={class:"me-1"},Ie={class:"text-disabled"},Te=V({__name:"EcommerceEarningReports",setup(C){const r=F(),u=[{data:[40,95,60,45,90,50,75]}],h=N(()=>{const l=r.current.value.colors,o=r.current.value.variables,m=`rgba(${T(l["on-background"])},${o["disabled-opacity"]})`,c=`rgba(${T(l.primary)},0.1)`;return{chart:{type:"bar",toolbar:{show:!1}},tooltip:{enabled:!1},plotOptions:{bar:{barHeight:"60%",columnWidth:"60%",startingShape:"rounded",endingShape:"rounded",borderRadius:4,distributed:!0}},grid:{show:!1,padding:{top:-20,bottom:0,left:-10,right:-10}},colors:[c,c,c,c,l.primary,c,c],dataLabels:{enabled:!1},legend:{show:!1},xaxis:{categories:["Mo","Tu","We","Th","Fr","Sa","Su"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:m,fontSize:"14px"}}},yaxis:{labels:{show:!1}}}}),s=[{avatarIcon:"tabler-chart-pie-2",avatarColor:"primary",title:"Net Profit",subtitle:"12.4k Sales",earnings:"$1,619",percentage:"18.6%"},{avatarIcon:"tabler-currency-dollar",avatarColor:"success",title:"Total Income",subtitle:"Sales, Affiliation",earnings:"$3,571",percentage:"39.6%"},{avatarIcon:"tabler-credit-card",avatarColor:"secondary",title:"Total Expenses",subtitle:"ADVT, Marketing",earnings:"$430",percentage:"52.8%"}];return(l,o)=>(i(),$(I,{title:"Earning Reports",subtitle:"Weekly Earnings Overview"},{append:t(()=>[a("div",Se,[e(S,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:t(()=>[e(f,{size:"22",icon:"tabler-dots-vertical"}),e(W,{activator:"parent"},{default:t(()=>[e(R,null,{default:t(()=>[(i(),g(x,null,w(["Refresh","Download","View All"],(m,c)=>e(E,{key:c,value:c},{default:t(()=>[e(z,null,{default:t(()=>[_(n(m),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:t(()=>[e(k,{class:"pb-0"},{default:t(()=>[e(R,{class:"card-list mb-3"},{default:t(()=>[(i(),g(x,null,w(s,m=>e(E,{key:m.title},{prepend:t(()=>[e(A,{rounded:"",size:"34",variant:"tonal",color:m.avatarColor},{default:t(()=>[e(f,{icon:m.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),append:t(()=>[a("div",Ee,[a("span",ze,n(m.earnings),1),e(f,{color:"success",icon:"tabler-chevron-up",size:"18",class:"me-1"}),a("span",Ie,n(m.percentage),1)])]),default:t(()=>[e(z,{class:"font-weight-medium"},{default:t(()=>[_(n(m.title),1)]),_:2},1024),e(U,null,{default:t(()=>[_(n(m.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),e(d(B),{options:d(h),series:u,height:245},null,8,["options"])]),_:1})]),_:1}))}}),Pe=a("div",null,[a("h6",{class:"text-h6"}," 82.5k "),a("span",{class:"text-disabled text-sm"},"Expenses")],-1),Re=a("div",{class:"text-sm text-center text-disabled mt-6"}," $21k Expenses more than last month ",-1),Ae=V({__name:"EcommerceExpensesRadialBarCharts",setup(C){const r=F(),u=[78],h=N(()=>{const s=r.current.value.colors,l=r.current.value.variables;return{chart:{sparkline:{enabled:!0},parentHeightOffset:0,type:"radialBar"},colors:[s.warning],plotOptions:{radialBar:{offsetY:0,startAngle:-90,endAngle:90,hollow:{size:"65%"},track:{strokeWidth:"45%",background:`rgba(${T(String(l["border-color"]))},${l["border-opacity"]})`},dataLabels:{name:{show:!1},value:{fontSize:"22px",color:`rgba(${T(s["on-background"])},${l["high-emphasis-opacity"]})`,fontWeight:600,offsetY:-5}}}},grid:{show:!1,padding:{bottom:5}},stroke:{lineCap:"round"},labels:["Progress"],responsive:[{breakpoint:1442,options:{chart:{height:120},plotOptions:{radialBar:{dataLabels:{value:{fontSize:"18px"}},hollow:{size:"60%"}}}}},{breakpoint:1025,options:{chart:{height:136},plotOptions:{radialBar:{hollow:{size:"65%"},dataLabels:{value:{fontSize:"18px"}}}}}},{breakpoint:769,options:{chart:{height:120},plotOptions:{radialBar:{hollow:{size:"55%"}}}}},{breakpoint:426,options:{chart:{height:145},plotOptions:{radialBar:{hollow:{size:"65%"}}},dataLabels:{value:{offsetY:0}}}},{breakpoint:376,options:{chart:{height:105},plotOptions:{radialBar:{hollow:{size:"60%"}}}}}]}});return(s,l)=>(i(),$(I,null,{default:t(()=>[e(k,null,{default:t(()=>[Pe,e(d(B),{options:d(h),series:u,type:"radialBar",height:145},null,8,["options"]),Re]),_:1})]),_:1}))}}),De={class:"d-flex flex-column"},Oe=a("div",{class:"mb-auto"},[a("h6",{class:"text-h6 text-no-wrap"}," Generated Leads "),a("span",{class:"text-sm"},"Monthly Report")],-1),Be=a("h5",{class:"text-h5 mb-1"}," 4,350 ",-1),Ne={class:"text-sm"},We=a("span",{class:"text-success font-weight-medium"},"15.8% ",-1),Le=V({__name:"EcommerceGeneratedLeads",setup(C){const r=F(),u=[45,58,30,50],h=N(()=>{const s=r.current.value.colors,l=r.current.value.variables,o=`rgba(${T(s.success)},0.2)`,m=`rgba(${T(s["on-background"])},${l["high-emphasis-opacity"]})`,c={donut:{series1:s.success,series2:"#28c76fb3",series3:"#28c76f80",series4:o}};return{chart:{parentHeightOffset:0,type:"donut"},labels:["Electronic","Sports","Decor","Fashion"],colors:[c.donut.series1,c.donut.series2,c.donut.series3,c.donut.series4],stroke:{width:0},dataLabels:{enabled:!1,formatter(D){return`${parseInt(D)}%`}},legend:{show:!1},tooltip:{theme:!1},grid:{padding:{top:15,right:-20,left:-20}},states:{hover:{filter:{type:"none"}}},plotOptions:{pie:{donut:{size:"70%",labels:{show:!0,value:{fontSize:"1.375rem",fontFamily:"Public Sans",color:m,fontWeight:600,offsetY:-15,formatter(D){return`${parseInt(D)}%`}},name:{offsetY:20,fontFamily:"Public Sans"},total:{show:!0,showAlways:!0,color:s.success,fontSize:".8125rem",label:"Total",fontFamily:"Public Sans",formatter(){return"184"}}}}}}}});return(s,l)=>(i(),$(I,null,{default:t(()=>[e(k,{class:"d-flex justify-space-between"},{default:t(()=>[a("div",De,[Oe,a("div",null,[Be,a("div",Ne,[e(f,{icon:"tabler-chevron-up",size:"24",color:"success",class:"me-1"}),We])])]),a("div",null,[e(d(B),{options:d(h),series:u,height:147,width:130},null,8,["options"])])]),_:1})]),_:1}))}}),Fe={style:{width:"5rem"}},Me={class:"d-flex align-center flex-wrap gap-2"},He={class:"invoice-list-search"},Ue={class:"invoice-list-status"},Je=a("th",{scope:"col",class:"font-weight-semibold"}," ID ",-1),Xe={scope:"col",class:"font-weight-semibold"},Ye=a("th",{scope:"col",class:"text-center font-weight-semibold"}," TOTAL ",-1),Ze=a("th",{scope:"col",class:"text-center font-weight-semibold"}," ISSUED DATE ",-1),je=a("th",{scope:"col",class:"font-weight-semibold"},[a("span",{class:"ms-2"},"ACTIONS")],-1),qe={class:"mb-0"},Ge={class:"mb-0"},Qe={class:"mb-0"},Ke={class:"text-center text-medium-emphasis"},et={class:"text-center text-medium-emphasis"},tt={style:{width:"7.5rem"}},at=a("tr",null,[a("td",{colspan:"8",class:"text-center text-body-1"}," No data available ")],-1),st=[at],lt={class:"text-sm text-disabled"},ot=V({__name:"EcommerceInvoiceTable",setup(C){const r=me(),u=P(""),h=P(),s=P(7),l=P(1),o=P(1),m=P(0),c=P([]),D=P([]);X(()=>{r.fetchInvoices({q:u.value,status:h.value,perPage:s.value,currentPage:l.value}).then(v=>{c.value=v.data.invoices,o.value=v.data.totalPage,m.value=v.data.totalInvoices}).catch(v=>{console.log(v)})}),X(()=>{l.value>o.value&&(l.value=o.value)});const q=N(()=>{const v=c.value.length?(l.value-1)*s.value+1:0,y=c.value.length+(l.value-1)*s.value;return`Showing ${v} to ${y} of ${m.value} entries`}),J=v=>v==="Partial Payment"?{variant:"success",icon:"tabler-circle-half-2"}:v==="Paid"?{variant:"warning",icon:"tabler-chart-pie"}:v==="Downloaded"?{variant:"info",icon:"tabler-arrow-down-circle"}:v==="Draft"?{variant:"primary",icon:"tabler-device-floppy"}:v==="Sent"?{variant:"secondary",icon:"tabler-circle-check"}:v==="Past Due"?{variant:"error",icon:"tabler-info-circle"}:{variant:"secondary",icon:"tabler-x"};return(v,y)=>{const G=ne("RouterLink");return d(c)?(i(),$(I,{key:0,id:"invoice-list"},{default:t(()=>[e(k,{class:"d-flex align-center flex-wrap gap-2 py-4"},{default:t(()=>[a("div",Fe,[e(Y,{modelValue:d(s),"onUpdate:modelValue":y[0]||(y[0]=p=>O(s)?s.value=p:null),variant:"outlined",items:[7,10,20,30,50]},null,8,["modelValue"])]),e(S,{"prepend-icon":"tabler-plus",to:{name:"apps-invoice-add"}},{default:t(()=>[_(" Create invoice ")]),_:1}),e(fe),a("div",Me,[a("div",He,[e(he,{modelValue:d(u),"onUpdate:modelValue":y[1]||(y[1]=p=>O(u)?u.value=p:null),placeholder:"Search Invoice",density:"compact"},null,8,["modelValue"])]),a("div",Ue,[e(Y,{modelValue:d(h),"onUpdate:modelValue":y[2]||(y[2]=p=>O(h)?h.value=p:null),label:"Select Status",clearable:"","clear-icon":"tabler-x",density:"compact",items:["Downloaded","Draft","Paid","Partial Payment","Past Due"]},null,8,["modelValue"])])])]),_:1}),e(H),e(_e,{class:"text-no-wrap invoice-list-table"},{default:t(()=>[a("thead",null,[a("tr",null,[Je,a("th",Xe,[e(f,{icon:"tabler-trending-up"})]),Ye,Ze,je])]),a("tbody",null,[(i(!0),g(x,null,w(d(c),p=>(i(),g("tr",{key:p.id},[a("td",null,[e(G,{to:{name:"apps-invoice-preview-id",params:{id:p.id}}},{default:t(()=>[_(" #"+n(p.id),1)]),_:2},1032,["to"])]),a("td",null,[e(be,null,{activator:t(({props:Q})=>[e(A,ie({size:30},Q,{color:J(p.invoiceStatus).variant,variant:"tonal"}),{default:t(()=>[e(f,{size:20,icon:J(p.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:t(()=>[a("p",qe,n(p.invoiceStatus),1),a("p",Ge," Balance: "+n(p.balance),1),a("p",Qe," Due date: "+n(p.dueDate),1)]),_:2},1024)]),a("td",Ke," $"+n(p.total),1),a("td",et,n(p.issuedDate),1),a("td",tt,[e(S,{icon:"",variant:"plain",color:"default",size:"x-small"},{default:t(()=>[e(f,{icon:"tabler-mail",size:22})]),_:1}),e(S,{icon:"",variant:"plain",color:"default",size:"x-small",to:{name:"apps-invoice-preview-id",params:{id:p.id}}},{default:t(()=>[e(f,{size:22,icon:"tabler-eye"})]),_:2},1032,["to"]),e(S,{icon:"",variant:"plain",color:"default",size:"x-small"},{default:t(()=>[e(f,{size:22,icon:"tabler-dots-vertical"}),e(W,{activator:"parent"},{default:t(()=>[e(R,{density:"compact"},{default:t(()=>[e(E,{value:"Download"},{prepend:t(()=>[e(f,{size:"22",class:"me-3",icon:"tabler-download"})]),default:t(()=>[e(z,null,{default:t(()=>[_("Download")]),_:1})]),_:1}),e(E,{to:{name:"/apps/invoice/edit/[id]",params:{id:p.id}}},{prepend:t(()=>[e(f,{size:"22",class:"me-3",icon:"tabler-pencil"})]),default:t(()=>[e(z,null,{default:t(()=>[_("Edit")]),_:1})]),_:2},1032,["to"]),e(E,{value:"Duplicate"},{prepend:t(()=>[e(f,{size:"22",class:"me-3",icon:"tabler-stack"})]),default:t(()=>[e(z,null,{default:t(()=>[_("Duplicate")]),_:1})]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))]),ce(a("tfoot",null,st,512),[[de,!d(c).length]])]),_:1}),e(H),e(k,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3"},{default:t(()=>[a("span",lt,n(d(q)),1),e(ve,{modelValue:d(l),"onUpdate:modelValue":y[3]||(y[3]=p=>O(l)?l.value=p:null),size:"small","total-visible":5,length:d(o),onNext:y[4]||(y[4]=p=>D.value=[]),onPrev:y[5]||(y[5]=p=>D.value=[])},null,8,["modelValue","length"])]),_:1})]),_:1})):ue("",!0)}}});const rt={class:"mt-n4 me-n2"},nt={class:"v-timeline-avatar-wrapper rounded-circle",style:{"background-color":"rgb(var(--v-theme-surface))"}},it={class:"font-weight-medium text-high-emphasis mb-0"},ct={class:"text-disabled mb-0"},dt={class:"v-timeline-avatar-wrapper rounded-circle",style:{"background-color":"rgb(var(--v-theme-surface))"}},ut={class:"font-weight-medium text-high-emphasis mb-0"},pt={class:"text-disabled mb-0"},mt=V({__name:"EcommerceOrder",setup(C){const r=P("New"),u=[{tabName:"New",timeline1:[{icon:"tabler-circle-check",type:"SENDER",name:"Myrtle Ullrich",address:"101 Boulder, California(CA), 95959"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Barry Schowalter",address:"939 Orange, California(CA),92118"}],timeline2:[{icon:"tabler-circle-check",type:"SENDER",name:"Veronica Herman",address:"162 Windsor, California(CA), 95492"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Helen Jacobs",address:"487 Sunset, California(CA), 94043"}]},{tabName:"Preparing",timeline1:[{icon:"tabler-circle-check",type:"SENDER",name:"Barry Schowalter",address:"939 Orange, California(CA),92118"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Myrtle Ullrich",address:"101 Boulder, California(CA), 95959"}],timeline2:[{icon:"tabler-circle-check",type:"SENDER",name:"Veronica Herman",address:"162 Windsor, California(CA), 95492"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Helen Jacobs",address:"487 Sunset, California(CA), 94043"}]},{tabName:"Shipping",timeline1:[{icon:"tabler-circle-check",type:"SENDER",name:"Veronica Herman",address:"101 Boulder, California(CA), 95959"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Barry Schowalter",address:"939 Orange, California(CA),92118"}],timeline2:[{icon:"tabler-circle-check",type:"SENDER",name:"Myrtle Ullrich",address:"162 Windsor, California(CA), 95492"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Helen Jacobs",address:"487 Sunset, California(CA), 94043"}]}];return(h,s)=>(i(),$(I,{title:"Orders",subtitle:"62 Deliveries in Progress"},{append:t(()=>[a("div",rt,[e(S,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:t(()=>[e(f,{size:"22",icon:"tabler-dots-vertical"}),e(W,{activator:"parent"},{default:t(()=>[e(R,null,{default:t(()=>[(i(),g(x,null,w(["Refresh","Download","View All"],(l,o)=>e(E,{key:o,value:o},{default:t(()=>[e(z,null,{default:t(()=>[_(n(l),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:t(()=>[e(ge,{modelValue:d(r),"onUpdate:modelValue":s[0]||(s[0]=l=>O(r)?r.value=l:null),grow:""},{default:t(()=>[(i(),g(x,null,w(u,l=>e(ye,{key:l.tabName,value:l.tabName},{default:t(()=>[_(n(l.tabName),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(H),e(k,null,{default:t(()=>[e(xe,{modelValue:d(r),"onUpdate:modelValue":s[1]||(s[1]=l=>O(r)?r.value=l:null),class:"disable-tab-transition"},{default:t(()=>[(i(),g(x,null,w(u,l=>e(we,{key:l.tabName,value:l.tabName},{default:t(()=>[e(Z,{side:"end",align:"start","truncate-line":"both",density:"compact",class:"v-timeline-density-compact"},{default:t(()=>[(i(!0),g(x,null,w(l.timeline1,o=>(i(),$(j,{key:o.icon,"fill-dot":"",size:"x-small"},{icon:t(()=>[a("div",nt,[e(A,null,{default:t(()=>[e(f,{size:"22",icon:o.icon,color:o.type==="SENDER"?"success":"primary"},null,8,["icon","color"])]),_:2},1024)])]),default:t(()=>[a("p",{class:M(`text-sm font-weight-medium text-${o.type==="SENDER"?"success":"primary"} mb-0`)},n(o.type),3),a("p",it,n(o.name),1),a("p",ct,n(o.address),1)]),_:2},1024))),128))]),_:2},1024),e(H,{class:"my-3",style:{"border-style":"dashed"}}),e(Z,{side:"end",align:"start","truncate-line":"both",density:"compact",class:"v-timeline-density-compact"},{default:t(()=>[(i(!0),g(x,null,w(l.timeline2,o=>(i(),$(j,{key:o.icon,"fill-dot":"",size:"x-small"},{icon:t(()=>[a("div",dt,[e(A,null,{default:t(()=>[e(f,{size:"22",icon:o.icon,color:o.type==="SENDER"?"success":"primary"},null,8,["icon","color"])]),_:2},1024)])]),default:t(()=>[a("p",{class:M(`text-sm font-weight-medium text-${o.type==="SENDER"?"success":"primary"} mb-0`)},n(o.type),3),a("p",ut,n(o.name),1),a("p",pt,n(o.address),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),ft={class:"mt-n4 me-n2"},ht={class:"d-flex align-center"},_t={class:"font-weight-medium text-medium-emphasis me-2"},bt=V({__name:"EcommercePopularProducts",setup(C){const r=[{avatarImg:ee,title:"Apple iPhone 13",subtitle:"Item: #FXZ-4567",stats:"$999.29"},{avatarImg:te,title:"Nike Air Jordan",subtitle:"Item: #FXZ-3456",stats:"$72.40"},{avatarImg:ae,title:"Beats Studio 2",subtitle:"Item: #FXZ-9485",stats:"$99"},{avatarImg:se,title:"Apple Watch Series 7",subtitle:"Item: #FXZ-2345",stats:"$249.99"},{avatarImg:le,title:"Amazon Echo Dot",subtitle:"Item: #FXZ-8959",stats:"$79.40"},{avatarImg:oe,title:"Play Station Console",subtitle:"Item: #FXZ-7892",stats:"$129.48"}];return(u,h)=>(i(),$(I,{title:"Popular Products",subtitle:"Total 10.4k Visitors"},{append:t(()=>[a("div",ft,[e(S,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:t(()=>[e(f,{size:"22",icon:"tabler-dots-vertical"}),e(W,{activator:"parent"},{default:t(()=>[e(R,null,{default:t(()=>[(i(),g(x,null,w(["Refresh","Download","View All"],(s,l)=>e(E,{key:l,value:l},{default:t(()=>[e(z,null,{default:t(()=>[_(n(s),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:t(()=>[e(k,null,{default:t(()=>[e(R,{class:"card-list"},{default:t(()=>[(i(),g(x,null,w(r,s=>e(E,{key:s.title},{prepend:t(()=>[e(A,{size:"44",rounded:"",image:s.avatarImg},null,8,["image"])]),append:t(()=>[a("div",ht,[a("span",_t,n(s.stats),1)])]),default:t(()=>[e(z,{class:"font-weight-medium"},{default:t(()=>[_(n(s.title),1)]),_:2},1024),e(U,null,{default:t(()=>[_(n(s.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}});const vt=pe(bt,[["__scopeId","data-v-b7bb0586"]]),gt=a("h6",{class:"text-h6 mb-6"}," Revenue Report ",-1),yt=a("span",null,"2022",-1),xt=a("div",{class:"d-flex flex-column mt-6"},[a("h5",{class:"font-weight-semibold text-h5"}," $25,825 "),a("p",null,[a("span",{class:"text-high-emphasis font-weight-semibold me-1"},"Budget:"),a("span",null,"56,800")])],-1),wt=V({__name:"EcommerceRevenueReport",setup(C){const r=F(),u={bar:[{name:"Earning",data:[270,210,180,200,250,280,250,270,150]},{name:"Expense",data:[-140,-160,-180,-150,-100,-60,-80,-100,-180]}],line:[{name:"Last Month",data:[20,10,30,16,24,5,40,23,28,5,30]},{name:"This Month",data:[50,40,60,46,54,35,70,53,58,35,60]}]},h=N(()=>{const s=r.current.value.colors,l=r.current.value.variables,o=`rgba(${T(s["on-surface"])},${l["disabled-opacity"]})`,m=`rgba(${T(s["on-background"])},${l["high-emphasis-opacity"]})`,c=`rgba(${T(String(l["border-color"]))},${l["border-opacity"]})`;return{bar:{chart:{parentHeightOffset:0,stacked:!0,type:"bar",toolbar:{show:!1}},tooltip:{enabled:!1},plotOptions:{bar:{horizontal:!1,columnWidth:"40%",borderRadius:8,startingShape:"rounded",endingShape:"rounded"}},colors:[s.primary,s.warning],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:6,lineCap:"round",colors:[s.surface]},legend:{show:!0,horizontalAlign:"left",position:"top",fontFamily:"Public Sans",markers:{height:12,width:12,radius:12,offsetX:-3,offsetY:2},labels:{colors:m},itemMargin:{horizontal:5}},grid:{show:!1,padding:{bottom:-8,top:20}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{style:{fontSize:"14px",colors:o,fontFamily:"Public Sans"}},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{offsetX:-16,style:{fontSize:"14px",colors:o,fontFamily:"Public Sans"}},min:-200,max:300,tickAmount:5},responsive:[{breakpoint:1700,options:{plotOptions:{bar:{columnWidth:"43%"}}}},{breakpoint:1441,options:{plotOptions:{bar:{columnWidth:"52%"}}}},{breakpoint:1280,options:{plotOptions:{bar:{columnWidth:"38%"}}}},{breakpoint:1025,options:{plotOptions:{bar:{columnWidth:"70%"}},chart:{height:390}}},{breakpoint:991,options:{plotOptions:{bar:{columnWidth:"38%"}}}},{breakpoint:850,options:{plotOptions:{bar:{columnWidth:"48%"}}}},{breakpoint:449,options:{plotOptions:{bar:{columnWidth:"70%"}},chart:{height:360},xaxis:{labels:{offsetY:-5}}}},{breakpoint:394,options:{plotOptions:{bar:{columnWidth:"88%"}}}}],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}}},line:{chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line"},stroke:{curve:"smooth",dashArray:[5,0],width:[1,2]},legend:{show:!1},colors:[c,s.primary],grid:{show:!1,borderColor:c,padding:{top:-30,bottom:-15,left:25}},markers:{size:0},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},tooltip:{enabled:!1}}}});return(s,l)=>(i(),$(I,null,{default:t(()=>[e(L,{"no-gutters":""},{default:t(()=>[e(b,{cols:"12",sm:"8",lg:"8",class:M(s.$vuetify.display.smAndUp?"border-e":"border-b")},{default:t(()=>[e(k,{class:"pe-2"},{default:t(()=>[gt,e(d(B),{options:d(h).bar,series:u.bar,height:"365"},null,8,["options","series"])]),_:1})]),_:1},8,["class"]),e(b,{cols:"12",sm:"4"},{default:t(()=>[e(k,{class:"d-flex flex-column justify-center align-center text-center ps-2 h-100"},{default:t(()=>[e(S,{variant:"outlined",size:"small",class:"d-flex mx-auto"},{append:t(()=>[e(f,{size:"16",icon:"tabler-chevron-down"})]),default:t(()=>[yt,e(W,{activator:"parent"},{default:t(()=>[e(R,null,{default:t(()=>[(i(),g(x,null,w(["2021","2020","2019"],(o,m)=>e(E,{key:m,value:m},{default:t(()=>[e(z,null,{default:t(()=>[_(n(o),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1}),xt,e(d(B),{options:d(h).line,series:u.line,height:"100"},null,8,["options","series"]),e(S,{class:"mt-4"},{default:t(()=>[_(" Increase Budget ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),$t=a("span",{class:"text-body-2"},"Updated 1 month ago",-1),kt={class:"d-flex"},Vt={class:"d-flex flex-column"},Ct={class:"text-h6 font-weight-medium"},St={class:"text-caption"},Et=V({__name:"EcommerceStatistics",setup(C){const r=[{title:"Sales",stats:"230k",icon:"tabler-chart-pie-2",color:"primary"},{title:"Customers",stats:"8.549k",icon:"tabler-users",color:"info"},{title:"Products",stats:"1.423k",icon:"tabler-shopping-cart",color:"error"},{title:"Revenue",stats:"$9745",icon:"tabler-currency-dollar",color:"success"}];return(u,h)=>(i(),$(I,{title:"Statistics"},{append:t(()=>[$t]),default:t(()=>[e(k,{class:"pt-6"},{default:t(()=>[e(L,null,{default:t(()=>[(i(),g(x,null,w(r,s=>e(b,{key:s.title,cols:"6",md:"3"},{default:t(()=>[a("div",kt,[e(A,{color:s.color,variant:"tonal",size:"42",class:"me-3"},{default:t(()=>[e(f,{size:"24",icon:s.icon},null,8,["icon"])]),_:2},1032,["color"]),a("div",Vt,[a("span",Ct,n(s.stats),1),a("span",St,n(s.title),1)])])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}}),zt=a("div",{class:"pb-2"},[a("h6",{class:"text-h6"}," Profit "),a("span",{class:"text-disabled text-sm"},"Last Month")],-1),It=a("div",{class:"d-flex align-center justify-space-between mt-4"},[a("h6",{class:"text-h6 text-center font-weight-semibold"}," 624k "),a("span",{class:"text-sm text-success"}," +8.24% ")],-1),Tt=V({__name:"EcommerceTotalProfitLineCharts",setup(C){const r=F(),u=[{data:[0,25,10,40,25,55]}],h=N(()=>{const s=r.current.value.colors,l=r.current.value.variables;return{chart:{height:90,type:"line",parentHeightOffset:0,toolbar:{show:!1}},grid:{borderColor:`rgba(${T(String(l["border-color"]))},${l["border-opacity"]})`,strokeDashArray:6,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-18,left:-4,right:7,bottom:-10}},colors:[s.info],stroke:{width:2},tooltip:{enabled:!1,shared:!1,intersect:!0,x:{show:!1}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},markers:{size:3.5,fillColor:s.info,strokeColors:"transparent",strokeWidth:3.2,discrete:[{seriesIndex:0,dataPointIndex:5,fillColor:s.surface,strokeColor:s.info,size:5,shape:"circle"}],hover:{size:5.5}},responsive:[{breakpoint:960,options:{chart:{height:110}}}]}});return(s,l)=>(i(),$(I,null,{default:t(()=>[e(k,null,{default:t(()=>[zt,e(d(B),{type:"line",options:d(h),series:u,height:90},null,8,["options"]),It]),_:1})]),_:1}))}}),Pt={class:"mt-n4 me-n2"},Rt={class:"d-flex align-center"},At=V({__name:"EcommerceTransactions",setup(C){const r=[{avatarIcon:"tabler-wallet",avatarColor:"primary",title:"Wallet",subtitle:"Starbucks",stats:"-$75",profit:!1},{avatarIcon:"tabler-browser-check",avatarColor:"success",title:"Bank Transfer",subtitle:"Add Money",stats:"+$480",profit:!0},{avatarIcon:"tabler-brand-paypal",avatarColor:"error",title:"Paypal",subtitle:"Client Payment",stats:"+$268",profit:!0},{avatarIcon:"tabler-credit-card",avatarColor:"secondary",title:"Master Card",subtitle:"Ordered iPhone 13",stats:"-$699",profit:!1},{avatarIcon:"tabler-currency-dollar",avatarColor:"info",title:"Bank Transactions",subtitle:"Refund",stats:"+$98",profit:!0},{avatarIcon:"tabler-brand-paypal",avatarColor:"error",title:"Paypal",subtitle:"Client Payment",stats:"+$126",profit:!0},{avatarIcon:"tabler-browser-check",avatarColor:"success",title:"Bank Transfer",subtitle:"Pay Office Rent",stats:"-$1290",profit:!1}];return(u,h)=>(i(),$(I,{title:"Transactions",subtitle:"Total 58 Transactions done in this Month"},{append:t(()=>[a("div",Pt,[e(S,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:t(()=>[e(f,{size:"22",icon:"tabler-dots-vertical"}),e(W,{activator:"parent"},{default:t(()=>[e(R,null,{default:t(()=>[(i(),g(x,null,w(["Refresh","Download","View All"],(s,l)=>e(E,{key:l,value:l},{default:t(()=>[e(z,null,{default:t(()=>[_(n(s),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:t(()=>[e(k,null,{default:t(()=>[e(R,{class:"card-list"},{default:t(()=>[(i(),g(x,null,w(r,s=>e(E,{key:s.title},{prepend:t(()=>[e(A,{size:"34",color:s.avatarColor,variant:"tonal",rounded:""},{default:t(()=>[e(f,{icon:s.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),append:t(()=>[a("div",Rt,[a("span",{class:M(`${s.profit?"text-success":"text-error"} me-2`)},n(s.stats),3)])]),default:t(()=>[e(z,{class:"font-weight-semibold"},{default:t(()=>[_(n(s.title),1)]),_:2},1024),e(U,{class:"opacity-100 text-disabled"},{default:t(()=>[_(n(s.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}}),xa=V({__name:"ecommerce",setup(C){return(r,u)=>(i(),$(L,null,{default:t(()=>[e(b,{cols:"12",md:"5",lg:"4"},{default:t(()=>[e(Ce)]),_:1}),e(b,{cols:"12",md:"7",lg:"8"},{default:t(()=>[e(Et,{class:"h-100"})]),_:1}),e(b,{cols:"12",lg:"4"},{default:t(()=>[e(L,null,{default:t(()=>[e(b,{cols:"12",lg:"6",md:"3",sm:"6"},{default:t(()=>[e(Ae)]),_:1}),e(b,{cols:"12",lg:"6",md:"3",sm:"6"},{default:t(()=>[e(Tt)]),_:1}),e(b,{cols:"12",md:"6",lg:"12"},{default:t(()=>[e(Le)]),_:1})]),_:1})]),_:1}),e(b,{cols:"12",lg:"8"},{default:t(()=>[e(wt)]),_:1}),e(b,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(Te)]),_:1}),e(b,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(vt)]),_:1}),e(b,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(mt)]),_:1}),e(b,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(At)]),_:1}),e(b,{cols:"12",lg:"8"},{default:t(()=>[e(ot)]),_:1})]),_:1}))}});export{xa as default};
