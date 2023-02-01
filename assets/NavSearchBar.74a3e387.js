import{d as b,t as x,k as l,j as I,I as A,J as B,o as p,c as d,m as c,p as i,w as C,B as P,q as a,C as V,D as k,K as m,F as D,L as N,M as q,N as L,O as R,z as T}from"./index.218d9c70.js";import{V as w}from"./VBtn.500f4230.js";import"./group.331a1268.js";import"./router.f373c6c7.js";import"./position.b9276cfd.js";const g=n=>(q("data-v-e1883507"),n=n(),L(),n),z={key:0,class:"d-none d-md-flex align-center text-disabled"},E=g(()=>c("span",{class:"me-3"},"Search",-1)),U=g(()=>c("span",{class:"meta-key"},"\u2318K",-1)),O=[E,U],F=b({inheritAttrs:!1}),K=b({...F,__name:"NavSearchBar",setup(n){const{appContentLayoutNav:h}=x(),e=l(!1),_=[{title:"Popular Searches",content:[{icon:"tabler-chart-donut",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"tabler-chart-bubble",title:"CRM",url:{name:"dashboards-crm"}},{icon:"tabler-file",title:"Invoice List",url:{name:"apps-invoice-list"}},{icon:"tabler-users",title:"User List",url:{name:"apps-user-list"}}]},{title:"Apps & Pages",content:[{icon:"tabler-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"tabler-file-plus",title:"Invoice Add",url:{name:"apps-invoice-add"}},{icon:"tabler-currency-dollar",title:"Pricing",url:{name:"pages-pricing"}},{icon:"tabler-user",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}}]},{title:"User Interface",content:[{icon:"tabler-letter-a",title:"Typography",url:{name:"pages-typography"}},{icon:"tabler-square",title:"Tabs",url:{name:"components-tabs"}},{icon:"tabler-hand-click",title:"Buttons",url:{name:"components-button"}},{icon:"tabler-keyboard",title:"Statistics",url:{name:"pages-cards-card-statistics"}}]},{title:"Popular Searches",content:[{icon:"tabler-list",title:"Select",url:{name:"forms-select"}},{icon:"tabler-space",title:"Combobox",url:{name:"forms-combobox"}},{icon:"tabler-calendar",title:"Date & Time Picker",url:{name:"forms-date-time-picker"}},{icon:"tabler-hexagon",title:"Rating",url:{name:"forms-rating"}}]}],f=[{title:"Analytics Dashboard",icon:"tabler-shopping-cart",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"tabler-user",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"tabler-cash",url:{name:"pages-pricing"}}],s=l(""),u=l([]),v=I();A(()=>{N.get("/app-bar/search",{params:{q:s.value}}).then(r=>{u.value=r.data})});const y=r=>{v.push(r.url),e.value=!1,s.value=""},S=B(()=>R(()=>import("./AppBarSearch.db58fc11.js"),["assets/AppBarSearch.db58fc11.js","assets/index.218d9c70.js","assets/index.2bc6cc38.css","assets/VCard.c658538b.js","assets/VCardActions.b00c2686.js","assets/createSimpleFunctional.c603bc67.js","assets/router.f373c6c7.js","assets/router.1e6db107.css","assets/VAvatar.6b594d0f.js","assets/VImg.b67ccdea.js","assets/VImg.3a095760.css","assets/VAvatar.1c9d231f.css","assets/position.b9276cfd.js","assets/position.5aa28860.css","assets/VCard.ec4d23b9.css","assets/VTextField.78ad04ff.js","assets/VField.98d26802.js","assets/index.59f2c4af.js","assets/VInput.72253e4c.js","assets/VInput.194111c3.css","assets/easing.36b781ab.js","assets/VField.cb4cc03f.css","assets/forwardRefs.c003b6b8.js","assets/VCounter.3a750ab9.js","assets/VCounter.66d880d8.css","assets/VTextField.ad436dbf.css","assets/VBtn.500f4230.js","assets/group.331a1268.js","assets/VBtn.1958adaf.css","assets/VDivider.81b9b868.js","assets/VDivider.5d6d66e0.css","assets/VList.c838321a.js","assets/VList.f3553822.css","assets/VRow.15b46b92.js","assets/VRow.0b79ff68.css","assets/VCol.d464f315.js","assets/VDialog.81b069c5.js","assets/scopeId.669b12f4.js","assets/VOverlay.9f5216bd.js","assets/lazy.3b470ba8.js","assets/VOverlay.72fa3373.css","assets/dialog-transition.c52aaf29.js","assets/VDialog.0e0bf965.css","assets/AppBarSearch.b6bf374f.css"]));return(r,t)=>(p(),d(D,null,[c("div",k({class:"d-flex align-center cursor-pointer"},r.$attrs,{onClick:t[0]||(t[0]=o=>e.value=!a(e))}),[i(w,{icon:"",variant:"text",color:"default",size:"small"},{default:C(()=>[i(P,{icon:"tabler-search",size:"24"})]),_:1}),a(h)==="vertical"?(p(),d("span",z,O)):V("",!0)],16),i(a(S),{isDialogVisible:a(e),"onUpdate:isDialogVisible":t[1]||(t[1]=o=>m(e)?e.value=o:null),"search-query":a(s),"onUpdate:search-query":t[2]||(t[2]=o=>m(s)?s.value=o:null),"search-results":a(u),suggestions:_,"no-data-suggestion":f,onItemSelected:y},null,8,["isDialogVisible","search-query","search-results"])],64))}});const Q=T(K,[["__scopeId","data-v-e1883507"]]);export{Q as default};