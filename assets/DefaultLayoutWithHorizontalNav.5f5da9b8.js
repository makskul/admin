import{d as h,o as n,c as u,F as k,a as L,b as g,e as y,_ as P,f as x,g as R,i as A,j as E,k as V,l as $,m as o,n as p,p as e,q as t,s as f,t as T,v as F,r as _,w as l,V as N,x as w,y as z,T as B}from"./index.218d9c70.js";import{m as D}from"./main.3ffff060.js";import I from"./Footer.1d1df9df.js";import{_ as j}from"./NavBarNotifications.vue_vue_type_script_setup_true_lang.a19e8742.js";import W from"./NavSearchBar.74a3e387.js";import{_ as H}from"./UserProfile.vue_vue_type_script_setup_true_lang.ed360053.js";import{_ as M}from"./SettingsList.vue_vue_type_script_setup_true_lang.6d59b5c6.js";import{V as U}from"./VSpacer.04d581ea.js";import{V as q}from"./VSelect.fa004835.js";import"./formatters.289f6046.js";import"./index.f0101229.js";import"./VBtn.500f4230.js";import"./group.331a1268.js";import"./router.f373c6c7.js";import"./position.b9276cfd.js";import"./VBadge.1167fa19.js";import"./VImg.b67ccdea.js";import"./VMenu.33d50b56.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.669b12f4.js";import"./VOverlay.9f5216bd.js";import"./lazy.3b470ba8.js";import"./easing.36b781ab.js";import"./dialog-transition.c52aaf29.js";import"./VList.c838321a.js";import"./index.59f2c4af.js";import"./createSimpleFunctional.c603bc67.js";import"./VAvatar.6b594d0f.js";import"./VDivider.81b9b868.js";import"./VChip.c10bae20.js";import"./VListItemAction.987f2e41.js";import"./useAppAbility.11384ff5.js";import"./VInput.72253e4c.js";import"./VSwitch.65b263b4.js";import"./VSelectionControl.70166856.js";import"./VRadioGroup.e1cdbc50.js";import"./VTextField.78ad04ff.js";/* empty css                   */import"./VField.98d26802.js";import"./VCounter.3a750ab9.js";import"./VCheckboxBtn.eddc661f.js";const O={class:"nav-items"},Q=h({__name:"HorizontalNav",props:{navItems:null},setup(m){const c=s=>"children"in s?P:x;return(s,r)=>(n(),u("ul",O,[(n(!0),u(k,null,L(m.navItems,(i,d)=>(n(),g(y(c(i)),{key:d,item:i},null,8,["item"]))),128))]))}}),Y={class:"layout-navbar"},G={class:"navbar-content-container"},J={class:"layout-horizontal-nav"},K={class:"horizontal-nav-content-container"},X={class:"layout-page-content"},Z={class:"layout-footer"},tt={class:"footer-content-container"},et=h({__name:"HorizontalNavLayout",props:{navItems:null},setup(m){const{y:c}=R(),{width:s}=A(),r=E(),i=V(!1);r.beforeEach(()=>{i.value=!0}),r.afterEach(()=>{i.value=!1});const{_layoutClasses:d,isNavbarBlurEnabled:v}=$();return(a,b)=>(n(),u("div",{class:f(["layout-wrapper",t(d)(t(s),t(c))])},[o("div",{class:f(["layout-navbar-and-nav-container",t(v)&&"header-blur"])},[o("div",Y,[o("div",G,[p(a.$slots,"navbar")])]),o("div",J,[o("div",K,[e(t(Q),{"nav-items":m.navItems},null,8,["nav-items"])])])],2),o("main",X,[a.$slots["content-loading"]?(n(),u(k,{key:0},[t(i)?p(a.$slots,"content-loading",{key:0}):p(a.$slots,"default",{key:1})],64)):p(a.$slots,"default",{key:1})]),o("footer",Z,[o("div",tt,[p(a.$slots,"footer")])])],2))}}),it=[{title:"Apps & Pages",icon:{icon:"tabler-package"},children:[{title:"Email",icon:{icon:"tabler-mail"},to:"apps-email"},{title:"Chat",icon:{icon:"tabler-message"},to:"apps-chat"},{title:"Calendar",to:"apps-calendar",icon:{icon:"tabler-calendar"}},{title:"Videos",icon:{icon:"tabler-armchair"},children:[{title:"List",to:"videos-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"Categories",icon:{icon:"tabler-armchair"},children:[{title:"List",to:"videos-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"Channels",icon:{icon:"tabler-armchair"},children:[{title:"List",to:"videos-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"Pornstars",icon:{icon:"tabler-armchair"},children:[{title:"List",to:"videos-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"User",icon:{icon:"tabler-user"},children:[{title:"List",to:"apps-user-list"},{title:"View",to:{name:"apps-user-view-id",params:{id:21}}}]},{title:"Pages",icon:{icon:"tabler-file"},children:[{title:"Authentication",children:[{title:"Login",children:[{title:"Login v1",to:"pages-authentication-login-v1",target:"_blank"},{title:"Login v2",to:"pages-authentication-login-v2",target:"_blank"}]},{title:"Register",children:[{title:"Register v1",to:"pages-authentication-register-v1",target:"_blank"},{title:"Register v2",to:"pages-authentication-register-v2",target:"_blank"}]},{title:"Verify Email",children:[{title:"Verify Email v1",to:"pages-authentication-verify-email-v1",target:"_blank"},{title:"Verify Email v2",to:"pages-authentication-verify-email-v2",target:"_blank"}]},{title:"Forgot Password",children:[{title:"Forgot Password v1",to:"pages-authentication-forgot-password-v1",target:"_blank"},{title:"Forgot Password v2",to:"pages-authentication-forgot-password-v2",target:"_blank"}]},{title:"Reset Password",children:[{title:"Reset Password v1",to:"pages-authentication-reset-password-v1",target:"_blank"},{title:"Reset Password v2",to:"pages-authentication-reset-password-v2",target:"_blank"}]},{title:"Two Steps",children:[{title:"Two Steps v1",to:"pages-authentication-two-steps-v1",target:"_blank"},{title:"Two Steps v2",to:"pages-authentication-two-steps-v2",target:"_blank"}]}]},{title:"Help Center",to:"pages-help-center"},{title:"User Profile",to:{name:"pages-user-profile-tab",params:{tab:"profile"}}},{title:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing",to:"pages-pricing"},{title:"FAQ",to:"pages-faq"},{title:"Miscellaneous",children:[{title:"Coming Soon",to:"pages-misc-coming-soon"},{title:"Under Maintenance",to:"pages-misc-under-maintenance",target:"_blank"},{title:"Page Not Found - 404",to:"pages-misc-not-found",target:"_blank"},{title:"Not Authorized - 401",to:"pages-misc-not-authorized",target:"_blank"},{title:"Server Error - 500",to:"pages-misc-internal-server-error",target:"_blank"}]}]}]}],ot=[{title:"Charts",icon:{icon:"tabler-chart-donut"},children:[{title:"Apex Chart",to:"charts-apex-chart",icon:{icon:"tabler-chart-line"}},{title:"Chartjs",to:"charts-chartjs",icon:{icon:"tabler-chart-pie"}}]}],at=[{title:"Forms",icon:{icon:"tabler-checks"},children:[{title:"Form Elements",icon:{icon:"tabler-copy"},children:[{title:"Checkbox",to:"forms-checkbox"},{title:"Combobox",to:"forms-combobox"},{title:"Date Time Picker",to:"forms-date-time-picker"},{title:"File Input",to:"forms-file-input"},{title:"Radio",to:"forms-radio"},{title:"Range Slider",to:"forms-range-slider"},{title:"Rating",to:"forms-rating"},{title:"Select",to:"forms-select"},{title:"Slider",to:"forms-slider"},{title:"Switch",to:"forms-switch"},{title:"Textarea",to:"forms-textarea"},{title:"Textfield",to:"forms-textfield"}]},{title:"Form Layouts",icon:{icon:"tabler-circle-check"},to:"forms-form-layouts"},{title:"Form Validation",icon:{icon:"tabler-circle-check"},to:"forms-form-validation"}]}],nt=[{title:"Others",icon:{icon:"tabler-dots"},children:[{title:"Access Control",icon:{icon:"tabler-shield"},to:"access-control",action:"read",subject:"Auth"},{title:"Nav Levels",icon:{icon:"tabler-menu-2"},children:[{title:"Level 2.1",to:null},{title:"Level 2.2",children:[{title:"Level 3.1",to:null},{title:"Level 3.2",to:null}]}]},{title:"Disabled Menu",to:null,icon:{icon:"tabler-eye-off"},disable:!0},{title:"Raise Support",href:"https://pixinvent.ticksy.com/",icon:{icon:"tabler-lifebuoy"},target:"_blank"},{title:"Documentation",href:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/",icon:{icon:"tabler-file"},target:"_blank"}]}],st=[{title:"User Interface",icon:{icon:"tabler-stack"},children:[{title:"Icons",icon:{icon:"tabler-eye"},to:"pages-icons"},{title:"Typography",icon:{icon:"tabler-square-letter-t"},to:"pages-typography"},{title:"Cards",icon:{icon:"tabler-credit-card"},children:[{title:"Basic",to:"pages-cards-card-basic"},{title:"Advance",to:"pages-cards-card-advance"},{title:"Statistics",to:"pages-cards-card-statistics"},{title:"Widgets",to:"pages-cards-card-widgets"},{title:"Actions",to:"pages-cards-card-actions"}]},{title:"Components",icon:{icon:"tabler-archive"},children:[{title:"Alert",to:"components-alert"},{title:"Avatar",to:"components-avatar"},{title:"Badge",to:"components-badge"},{title:"Button",to:"components-button"},{title:"Chip",to:"components-chip"},{title:"Dialog",to:"components-dialog"},{title:"Expansion Panel",to:"components-expansion-panel"},{title:"List",to:"components-list"},{title:"Menu",to:"components-menu"},{title:"Pagination",to:"components-pagination"},{title:"Progress",to:"components-progress"},{title:"Snackbar",to:"components-snackbar"},{title:"Tabs",to:"components-tabs"},{title:"Timeline",to:"components-timeline"},{title:"Tooltip",to:"components-tooltip"}]}]}],rt=[...D,...it,...st,...at,...ot,...nt],lt={class:"app-title font-weight-bold leading-normal text-xl"},Jt=h({__name:"DefaultLayoutWithHorizontalNav",setup(m){const{appRouteTransition:c}=T(),s=["zbtube.tv","sexwat.ch","gayporn.com","masturbase.tv"],r=F.currentRoute.value||"";let i=!1;return r&&/spots/g.test(r.name)&&(i=!0),(d,v)=>{const a=_("RouterLink"),b=_("RouterView");return n(),g(t(et),{"nav-items":t(rt)},{navbar:l(()=>[e(a,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:l(()=>[e(t(N),{nodes:t(w).app.logo},null,8,["nodes"]),o("h1",lt,z(t(w).app.title),1)]),_:1}),e(U),e(q,{items:s,label:"Domain",class:"me-2",disabled:t(i)?"disabled":""},null,8,["disabled"]),e(W,{"trigger-btn-class":"ms-lg-n3"}),e(j,{class:"me-2"}),e(M),e(H)]),footer:l(()=>[e(I)]),default:l(()=>[e(b,null,{default:l(({Component:C,route:S})=>[e(B,{name:t(c),mode:"out-in"},{default:l(()=>[(n(),g(y(C),{key:S.path}))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}});export{Jt as default};