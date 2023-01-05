import{d as v,o as n,c as h,F as k,a as y,b as u,e as w,_ as C,f as L,g as P,i as S,j as x,k as A,l as R,m as i,n as p,p as e,q as t,s as b,t as E,r as f,w as s,V as $,v as _,x as T,T as V}from"./index.467cdc2d.js";import F from"./Footer.e373e3cb.js";import{_ as N}from"./NavBarNotifications.vue_vue_type_script_setup_true_lang.d86fb666.js";import z from"./NavSearchBar.8e81088d.js";import{_ as B}from"./UserProfile.vue_vue_type_script_setup_true_lang.5ddb47ec.js";import{_ as I}from"./SettingsList.vue_vue_type_script_setup_true_lang.ce800586.js";import{V as D}from"./VSpacer.d2e356ae.js";import"./formatters.289f6046.js";import"./index.f0101229.js";import"./VBtn.dc3cd726.js";import"./router.d66206d8.js";import"./position.363b5921.js";import"./VBadge.7f7130fa.js";import"./VImg.657a0470.js";import"./VMenu.456d8490.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.da3fc4ec.js";import"./VOverlay.7737ea4d.js";import"./lazy.90b899a9.js";import"./easing.36b781ab.js";import"./dialog-transition.cc283102.js";import"./VList.20a7602a.js";import"./index.824c457d.js";import"./VAvatar.9a7149b7.js";import"./VDivider.12130cb7.js";import"./VChip.78a28383.js";import"./VListItemAction.1d78ba29.js";import"./useAppAbility.f0ddc3bf.js";import"./VInput.d7ae850d.js";import"./VSwitch.1427452d.js";import"./VSelectionControl.c5e888e0.js";import"./VRadioGroup.f3ecafc5.js";const j={class:"nav-items"},M=v({__name:"HorizontalNav",props:{navItems:null},setup(d){const r=l=>"children"in l?C:L;return(l,m)=>(n(),h("ul",j,[(n(!0),h(k,null,y(d.navItems,(o,c)=>(n(),u(w(r(o)),{key:c,item:o},null,8,["item"]))),128))]))}}),W={class:"layout-navbar"},H={class:"navbar-content-container"},U={class:"layout-horizontal-nav"},q={class:"horizontal-nav-content-container"},O={class:"layout-page-content"},Q={class:"layout-footer"},Y={class:"footer-content-container"},G=v({__name:"HorizontalNavLayout",props:{navItems:null},setup(d){const{y:r}=P(),{width:l}=S(),m=x(),o=A(!1);m.beforeEach(()=>{o.value=!0}),m.afterEach(()=>{o.value=!1});const{_layoutClasses:c,isNavbarBlurEnabled:g}=R();return(a,at)=>(n(),h("div",{class:b(["layout-wrapper",t(c)(t(l),t(r))])},[i("div",{class:b(["layout-navbar-and-nav-container",t(g)&&"header-blur"])},[i("div",W,[i("div",H,[p(a.$slots,"navbar")])]),i("div",U,[i("div",q,[e(t(M),{"nav-items":d.navItems},null,8,["nav-items"])])])],2),i("main",O,[a.$slots["content-loading"]?(n(),h(k,{key:0},[t(o)?p(a.$slots,"content-loading",{key:0}):p(a.$slots,"default",{key:1})],64)):p(a.$slots,"default",{key:1})]),i("footer",Q,[i("div",Y,[p(a.$slots,"footer")])])],2))}}),J=[{title:"Apps & Pages",icon:{icon:"tabler-package"},children:[{title:"Email",icon:{icon:"tabler-mail"},to:"apps-email"},{title:"Chat",icon:{icon:"tabler-message"},to:"apps-chat"},{title:"Calendar",to:"apps-calendar",icon:{icon:"tabler-calendar"}},{title:"Videos",icon:{icon:"tabler-armchair"},children:[{title:"List",to:"videos-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"Categories",icon:{icon:"tabler-armchair"},children:[{title:"List",to:"videos-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"Channels",icon:{icon:"tabler-armchair"},children:[{title:"List",to:"videos-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"Pornstars",icon:{icon:"tabler-armchair"},children:[{title:"List",to:"videos-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"User",icon:{icon:"tabler-user"},children:[{title:"List",to:"apps-user-list"},{title:"View",to:{name:"apps-user-view-id",params:{id:21}}}]},{title:"Pages",icon:{icon:"tabler-file"},children:[{title:"Authentication",children:[{title:"Login",children:[{title:"Login v1",to:"pages-authentication-login-v1",target:"_blank"},{title:"Login v2",to:"pages-authentication-login-v2",target:"_blank"}]},{title:"Register",children:[{title:"Register v1",to:"pages-authentication-register-v1",target:"_blank"},{title:"Register v2",to:"pages-authentication-register-v2",target:"_blank"}]},{title:"Verify Email",children:[{title:"Verify Email v1",to:"pages-authentication-verify-email-v1",target:"_blank"},{title:"Verify Email v2",to:"pages-authentication-verify-email-v2",target:"_blank"}]},{title:"Forgot Password",children:[{title:"Forgot Password v1",to:"pages-authentication-forgot-password-v1",target:"_blank"},{title:"Forgot Password v2",to:"pages-authentication-forgot-password-v2",target:"_blank"}]},{title:"Reset Password",children:[{title:"Reset Password v1",to:"pages-authentication-reset-password-v1",target:"_blank"},{title:"Reset Password v2",to:"pages-authentication-reset-password-v2",target:"_blank"}]},{title:"Two Steps",children:[{title:"Two Steps v1",to:"pages-authentication-two-steps-v1",target:"_blank"},{title:"Two Steps v2",to:"pages-authentication-two-steps-v2",target:"_blank"}]}]},{title:"Help Center",to:"pages-help-center"},{title:"User Profile",to:{name:"pages-user-profile-tab",params:{tab:"profile"}}},{title:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing",to:"pages-pricing"},{title:"FAQ",to:"pages-faq"},{title:"Miscellaneous",children:[{title:"Coming Soon",to:"pages-misc-coming-soon"},{title:"Under Maintenance",to:"pages-misc-under-maintenance",target:"_blank"},{title:"Page Not Found - 404",to:"pages-misc-not-found",target:"_blank"},{title:"Not Authorized - 401",to:"pages-misc-not-authorized",target:"_blank"},{title:"Server Error - 500",to:"pages-misc-internal-server-error",target:"_blank"}]}]}]}],K=[{title:"Charts",icon:{icon:"tabler-chart-donut"},children:[{title:"Apex Chart",to:"charts-apex-chart",icon:{icon:"tabler-chart-line"}},{title:"Chartjs",to:"charts-chartjs",icon:{icon:"tabler-chart-pie"}}]}],X=[{title:"Dashboards",icon:{icon:"tabler-smart-home"},children:[{title:"Analytics",to:"dashboards-analytics",icon:{icon:"tabler-chart-bar"}},{title:"eCommerce",to:"dashboards-ecommerce",icon:{icon:"tabler-shopping-cart"}},{title:"CRM",to:"dashboards-crm",icon:{icon:"tabler-heart-rate-monitor"}}]}],Z=[{title:"Forms",icon:{icon:"tabler-checks"},children:[{title:"Form Elements",icon:{icon:"tabler-copy"},children:[{title:"Checkbox",to:"forms-checkbox"},{title:"Combobox",to:"forms-combobox"},{title:"Date Time Picker",to:"forms-date-time-picker"},{title:"File Input",to:"forms-file-input"},{title:"Radio",to:"forms-radio"},{title:"Range Slider",to:"forms-range-slider"},{title:"Rating",to:"forms-rating"},{title:"Select",to:"forms-select"},{title:"Slider",to:"forms-slider"},{title:"Switch",to:"forms-switch"},{title:"Textarea",to:"forms-textarea"},{title:"Textfield",to:"forms-textfield"}]},{title:"Form Layouts",icon:{icon:"tabler-circle-check"},to:"forms-form-layouts"},{title:"Form Validation",icon:{icon:"tabler-circle-check"},to:"forms-form-validation"}]}],tt=[{title:"Others",icon:{icon:"tabler-dots"},children:[{title:"Access Control",icon:{icon:"tabler-shield"},to:"access-control",action:"read",subject:"Auth"},{title:"Nav Levels",icon:{icon:"tabler-menu-2"},children:[{title:"Level 2.1",to:null},{title:"Level 2.2",children:[{title:"Level 3.1",to:null},{title:"Level 3.2",to:null}]}]},{title:"Disabled Menu",to:null,icon:{icon:"tabler-eye-off"},disable:!0},{title:"Raise Support",href:"https://pixinvent.ticksy.com/",icon:{icon:"tabler-lifebuoy"},target:"_blank"},{title:"Documentation",href:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/",icon:{icon:"tabler-file"},target:"_blank"}]}],et=[{title:"User Interface",icon:{icon:"tabler-stack"},children:[{title:"Icons",icon:{icon:"tabler-eye"},to:"pages-icons"},{title:"Typography",icon:{icon:"tabler-square-letter-t"},to:"pages-typography"},{title:"Cards",icon:{icon:"tabler-credit-card"},children:[{title:"Basic",to:"pages-cards-card-basic"},{title:"Advance",to:"pages-cards-card-advance"},{title:"Statistics",to:"pages-cards-card-statistics"},{title:"Widgets",to:"pages-cards-card-widgets"},{title:"Actions",to:"pages-cards-card-actions"}]},{title:"Components",icon:{icon:"tabler-archive"},children:[{title:"Alert",to:"components-alert"},{title:"Avatar",to:"components-avatar"},{title:"Badge",to:"components-badge"},{title:"Button",to:"components-button"},{title:"Chip",to:"components-chip"},{title:"Dialog",to:"components-dialog"},{title:"Expansion Panel",to:"components-expansion-panel"},{title:"List",to:"components-list"},{title:"Menu",to:"components-menu"},{title:"Pagination",to:"components-pagination"},{title:"Progress",to:"components-progress"},{title:"Snackbar",to:"components-snackbar"},{title:"Tabs",to:"components-tabs"},{title:"Timeline",to:"components-timeline"},{title:"Tooltip",to:"components-tooltip"}]}]}],it=[...X,...J,...et,...Z,...K,...tt],ot={class:"app-title font-weight-bold leading-normal text-xl"},Bt=v({__name:"DefaultLayoutWithHorizontalNav",setup(d){const{appRouteTransition:r}=E();return(l,m)=>{const o=f("RouterLink"),c=f("RouterView");return n(),u(t(G),{"nav-items":t(it)},{navbar:s(()=>[e(o,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:s(()=>[e(t($),{nodes:t(_).app.logo},null,8,["nodes"]),i("h1",ot,T(t(_).app.title),1)]),_:1}),e(D),e(z,{"trigger-btn-class":"ms-lg-n3"}),e(N,{class:"me-2"}),e(I),e(B)]),footer:s(()=>[e(F)]),default:s(()=>[e(c,null,{default:s(({Component:g,route:a})=>[e(V,{name:t(r),mode:"out-in"},{default:s(()=>[(n(),u(w(g),{key:a.path}))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}});export{Bt as default};
