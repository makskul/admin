import{d as b,a as x,x as l,y as A,z as B,A as C,o as p,j as d,f as c,b as i,w as I,l as P,e as a,m as V,p as k,B as m,F as D,C as N,D as R,E as T,G as q,_ as E}from"./index.892843d9.js";import{V as L}from"./VBtn.bbadeaf1.js";import"./router.1461a6f3.js";import"./position.58edabd9.js";const g=n=>(R("data-v-e1883507"),n=n(),T(),n),w={key:0,class:"d-none d-md-flex align-center text-disabled"},z=g(()=>c("span",{class:"me-3"},"Search",-1)),U=g(()=>c("span",{class:"meta-key"},"\u2318K",-1)),F=[z,U],G=b({inheritAttrs:!1}),O=b({...G,__name:"NavSearchBar",setup(n){const{appContentLayoutNav:h}=x(),e=l(!1),_=[{title:"Popular Searches",content:[{icon:"tabler-chart-donut",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"tabler-chart-bubble",title:"CRM",url:{name:"dashboards-crm"}},{icon:"tabler-file",title:"Invoice List",url:{name:"apps-invoice-list"}},{icon:"tabler-users",title:"User List",url:{name:"apps-user-list"}}]},{title:"Apps & Pages",content:[{icon:"tabler-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"tabler-file-plus",title:"Invoice Add",url:{name:"apps-invoice-add"}},{icon:"tabler-currency-dollar",title:"Pricing",url:{name:"pages-pricing"}},{icon:"tabler-user",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}}]},{title:"User Interface",content:[{icon:"tabler-letter-a",title:"Typography",url:{name:"pages-typography"}},{icon:"tabler-square",title:"Tabs",url:{name:"components-tabs"}},{icon:"tabler-hand-click",title:"Buttons",url:{name:"components-button"}},{icon:"tabler-keyboard",title:"Statistics",url:{name:"pages-cards-card-statistics"}}]},{title:"Popular Searches",content:[{icon:"tabler-list",title:"Select",url:{name:"forms-select"}},{icon:"tabler-space",title:"Combobox",url:{name:"forms-combobox"}},{icon:"tabler-calendar",title:"Date & Time Picker",url:{name:"forms-date-time-picker"}},{icon:"tabler-hexagon",title:"Rating",url:{name:"forms-rating"}}]}],f=[{title:"Analytics Dashboard",icon:"tabler-shopping-cart",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"tabler-user",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"tabler-cash",url:{name:"pages-pricing"}}],s=l(""),u=l([]),v=A();B(()=>{N.get("/app-bar/search",{params:{q:s.value}}).then(r=>{u.value=r.data})});const y=r=>{v.push(r.url),e.value=!1,s.value=""},S=C(()=>q(()=>import("./AppBarSearch.7924ae4e.js"),["assets/AppBarSearch.7924ae4e.js","assets/index.892843d9.js","assets/index.2bc6cc38.css","assets/VCard.3b9b795b.js","assets/VCardActions.a6b05483.js","assets/createSimpleFunctional.2f9df5e4.js","assets/router.1461a6f3.js","assets/router.1e6db107.css","assets/VAvatar.3a5605d7.js","assets/VImg.0023685b.js","assets/VImg.3a095760.css","assets/VAvatar.1c9d231f.css","assets/position.58edabd9.js","assets/position.5aa28860.css","assets/VCard.ec4d23b9.css","assets/VTextField.b1f01462.js","assets/VField.a7476963.js","assets/index.abd808b3.js","assets/VInput.6f6ad0a7.js","assets/VInput.194111c3.css","assets/easing.36b781ab.js","assets/VField.cb4cc03f.css","assets/forwardRefs.c003b6b8.js","assets/VCounter.aa771653.js","assets/VCounter.66d880d8.css","assets/VTextField.ad436dbf.css","assets/VBtn.bbadeaf1.js","assets/VBtn.1958adaf.css","assets/VDivider.f97def28.js","assets/VDivider.5d6d66e0.css","assets/VList.d7eb9572.js","assets/VList.f3553822.css","assets/VRow.416f45a7.js","assets/VRow.0b79ff68.css","assets/VCol.215297a5.js","assets/VDialog.769c0ad2.js","assets/scopeId.fdc81792.js","assets/VOverlay.a1cb3219.js","assets/lazy.e5a2c8bb.js","assets/VOverlay.72fa3373.css","assets/dialog-transition.39ec4040.js","assets/VDialog.0e0bf965.css","assets/AppBarSearch.b6bf374f.css"]));return(r,t)=>(p(),d(D,null,[c("div",k({class:"d-flex align-center cursor-pointer"},r.$attrs,{onClick:t[0]||(t[0]=o=>e.value=!a(e))}),[i(L,{icon:"",variant:"text",color:"default",size:"small"},{default:I(()=>[i(P,{icon:"tabler-search",size:"24"})]),_:1}),a(h)==="vertical"?(p(),d("span",w,F)):V("",!0)],16),i(a(S),{isDialogVisible:a(e),"onUpdate:isDialogVisible":t[1]||(t[1]=o=>m(e)?e.value=o:null),"search-query":a(s),"onUpdate:search-query":t[2]||(t[2]=o=>m(s)?s.value=o:null),"search-results":a(u),suggestions:_,"no-data-suggestion":f,onItemSelected:y},null,8,["isDialogVisible","search-query","search-results"])],64))}});const Q=E(O,[["__scopeId","data-v-e1883507"]]);export{Q as default};