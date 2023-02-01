import{d as g,t as u,i as h,v as b,r as f,o as a,b as n,w as e,m as v,q as o,p as t,B as _,C as k,T as w,e as y,a_ as x}from"./index.218d9c70.js";import{m as C}from"./main.3ffff060.js";import S from"./Footer.1d1df9df.js";import{_ as V}from"./NavBarNotifications.vue_vue_type_script_setup_true_lang.a19e8742.js";import P from"./NavSearchBar.74a3e387.js";import{_ as T}from"./UserProfile.vue_vue_type_script_setup_true_lang.ed360053.js";import{_ as A}from"./SettingsList.vue_vue_type_script_setup_true_lang.6d59b5c6.js";import{V as L}from"./VBtn.500f4230.js";import{V as R}from"./VSelect.fa004835.js";import{V as F}from"./VSpacer.04d581ea.js";import"./formatters.289f6046.js";import"./index.f0101229.js";import"./VBadge.1167fa19.js";import"./router.f373c6c7.js";import"./VImg.b67ccdea.js";import"./VMenu.33d50b56.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.669b12f4.js";import"./VOverlay.9f5216bd.js";import"./lazy.3b470ba8.js";import"./easing.36b781ab.js";import"./dialog-transition.c52aaf29.js";import"./VList.c838321a.js";import"./index.59f2c4af.js";import"./createSimpleFunctional.c603bc67.js";import"./VAvatar.6b594d0f.js";import"./VDivider.81b9b868.js";import"./VChip.c10bae20.js";import"./group.331a1268.js";import"./VListItemAction.987f2e41.js";import"./position.b9276cfd.js";import"./useAppAbility.11384ff5.js";import"./VInput.72253e4c.js";import"./VSwitch.65b263b4.js";import"./VSelectionControl.70166856.js";import"./VRadioGroup.e1cdbc50.js";import"./VTextField.78ad04ff.js";/* empty css                   */import"./VField.98d26802.js";import"./VCounter.3a750ab9.js";import"./VCheckboxBtn.eddc661f.js";const B=[{heading:"Apps & Pages"},{title:"Invoice",icon:{icon:"tabler-file"},children:[{title:"List",to:"apps-invoice-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"User",icon:{icon:"tabler-user"},children:[{title:"List",to:"apps-user-list"},{title:"View",to:{name:"apps-user-view-id",params:{id:21}}}]},{title:"Pages",icon:{icon:"tabler-file"},children:[{title:"Authentication",children:[{title:"Login",children:[{title:"Login v1",to:"pages-authentication-login-v1",target:"_blank"},{title:"Login v2",to:"pages-authentication-login-v2",target:"_blank"}]},{title:"Register",children:[{title:"Register v1",to:"pages-authentication-register-v1",target:"_blank"},{title:"Register v2",to:"pages-authentication-register-v2",target:"_blank"}]},{title:"Verify Email",children:[{title:"Verify Email v1",to:"pages-authentication-verify-email-v1",target:"_blank"},{title:"Verify Email v2",to:"pages-authentication-verify-email-v2",target:"_blank"}]},{title:"Forgot Password",children:[{title:"Forgot Password v1",to:"pages-authentication-forgot-password-v1",target:"_blank"},{title:"Forgot Password v2",to:"pages-authentication-forgot-password-v2",target:"_blank"}]},{title:"Reset Password",children:[{title:"Reset Password v1",to:"pages-authentication-reset-password-v1",target:"_blank"},{title:"Reset Password v2",to:"pages-authentication-reset-password-v2",target:"_blank"}]},{title:"Two Steps",children:[{title:"Two Steps v1",to:"pages-authentication-two-steps-v1",target:"_blank"},{title:"Two Steps v2",to:"pages-authentication-two-steps-v2",target:"_blank"}]}]},{title:"Help Center",to:"pages-help-center"},{title:"User Profile",to:{name:"pages-user-profile-tab",params:{tab:"profile"}}},{title:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing",to:"pages-pricing"},{title:"FAQ",to:"pages-faq"},{title:"Miscellaneous",children:[{title:"Coming Soon",to:"pages-misc-coming-soon",target:"_blank"},{title:"Under Maintenance",to:"pages-misc-under-maintenance",target:"_blank"},{title:"Page Not Found - 404",to:"pages-misc-not-found",target:"_blank"},{title:"Not Authorized - 401",to:"pages-misc-not-authorized",target:"_blank"},{title:"Server Error - 500",to:"pages-misc-internal-server-error",target:"_blank"}]}]}],E=[{heading:"Charts"},{title:"Charts",icon:{icon:"tabler-chart-donut"},children:[{title:"Apex Chart",to:"charts-apex-chart"},{title:"Chartjs",to:"charts-chartjs"}]}],N=[{heading:"Forms"},{title:"Form Elements",icon:{icon:"tabler-copy"},children:[{title:"Checkbox",to:"forms-checkbox"},{title:"Combobox",to:"forms-combobox"},{title:"Date Time Picker",to:"forms-date-time-picker"},{title:"File Input",to:"forms-file-input"},{title:"Radio",to:"forms-radio"},{title:"Range Slider",to:"forms-range-slider"},{title:"Rating",to:"forms-rating"},{title:"Select",to:"forms-select"},{title:"Slider",to:"forms-slider"},{title:"Switch",to:"forms-switch"},{title:"Textarea",to:"forms-textarea"},{title:"Textfield",to:"forms-textfield"}]},{title:"Form Layouts",icon:{icon:"tabler-copy"},to:"forms-form-layouts"},{title:"Form Validation",icon:{icon:"tabler-checkbox"},to:"forms-form-validation"}],D=[{heading:"Others"},{title:"Access Control",icon:{icon:"tabler-shield"},to:"access-control",action:"read",subject:"Auth"},{title:"Nav Levels",icon:{icon:"tabler-menu-2"},children:[{title:"Level 2.1",to:null},{title:"Level 2.2",children:[{title:"Level 3.1",to:null},{title:"Level 3.2",to:null}]}]},{title:"Disabled Menu",to:null,icon:{icon:"tabler-eye-off"},disable:!0},{title:"Raise Support",href:"https://pixinvent.ticksy.com/",icon:{icon:"tabler-lifebuoy"},target:"_blank"},{title:"Documentation",href:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/",icon:{icon:"tabler-file"},target:"_blank"}],z=[{heading:"UI Elements"},{title:"Typography",icon:{icon:"tabler-square-letter-t"},to:"pages-typography"},{title:"Icons",icon:{icon:"tabler-eye"},to:"pages-icons"},{title:"Cards",icon:{icon:"tabler-credit-card"},children:[{title:"Basic",to:"pages-cards-card-basic"},{title:"Advance",to:"pages-cards-card-advance"},{title:"Statistics",to:"pages-cards-card-statistics"},{title:"Widgets",to:"pages-cards-card-widgets"},{title:"Actions",to:"pages-cards-card-actions"}]},{title:"Components",icon:{icon:"tabler-archive"},children:[{title:"Alert",to:"components-alert"},{title:"Avatar",to:"components-avatar"},{title:"Badge",to:"components-badge"},{title:"Button",to:"components-button"},{title:"Chip",to:"components-chip"},{title:"Dialog",to:"components-dialog"},{title:"Expansion Panel",to:"components-expansion-panel"},{title:"List",to:"components-list"},{title:"Menu",to:"components-menu"},{title:"Pagination",to:"components-pagination"},{title:"Progress",to:"components-progress"},{title:"Snackbar",to:"components-snackbar"},{title:"Tabs",to:"components-tabs"},{title:"Timeline",to:"components-timeline"},{title:"Tooltip",to:"components-tooltip"}]}],I=[...C,...B,...z,...N,...E,...D],$={class:"d-flex h-100 align-center"},Rt=g({__name:"DefaultLayoutWithVerticalNav",setup(j){const{appRouteTransition:l,isLessThanOverlayNavBreakpoint:c}=u(),{width:p}=h(),m=["zbtube.tv","sexwat.ch","gayporn.com","masturbase.tv"],r=b.currentRoute.value||"";let s=!1;return r&&/spots/g.test(r.name)&&(s=!0),(M,U)=>{const d=f("RouterView");return a(),n(o(x),{"nav-items":o(I)},{navbar:e(({toggleVerticalOverlayNavActive:i})=>[v("div",$,[o(c)(o(p))?(a(),n(L,{key:0,icon:"",variant:"text",color:"default",class:"ms-n3",size:"small",onClick:W=>i(!0)},{default:e(()=>[t(_,{icon:"tabler-menu-2",size:"24"})]),_:2},1032,["onClick"])):k("",!0),t(R,{items:m,label:"Domain",class:"me-3",disabled:o(s)?"disabled":""},null,8,["disabled"]),t(P,{class:"ms-lg-n3"}),t(F),t(V,{class:"me-2"}),t(A),t(T)])]),footer:e(()=>[t(S)]),default:e(()=>[t(d,null,{default:e(({Component:i})=>[t(w,{name:o(l),mode:"out-in"},{default:e(()=>[(a(),n(y(i)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}});export{Rt as default};
