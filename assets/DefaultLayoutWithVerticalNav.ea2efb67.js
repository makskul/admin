import{d as p,t as m,i as d,r as g,o as a,b as n,w as e,m as h,q as i,p as t,A as b,B as u,T as v,e as f,aX as _}from"./index.3aea8822.js";import k from"./Footer.0ab4d7cc.js";import{_ as w}from"./NavBarNotifications.vue_vue_type_script_setup_true_lang.2a931e60.js";import y from"./NavSearchBar.ffdb3c11.js";import{_ as C}from"./UserProfile.vue_vue_type_script_setup_true_lang.7417d3c5.js";import{_ as x}from"./SettingsList.vue_vue_type_script_setup_true_lang.49b084ba.js";import{V as P}from"./VBtn.6b17fd81.js";import{V as A}from"./VSpacer.bf2ca0da.js";import"./formatters.289f6046.js";import"./index.f0101229.js";import"./VBadge.c1d201ec.js";import"./router.59166a5a.js";import"./VImg.480b603b.js";import"./VMenu.7bb1b07f.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.f08362ca.js";import"./VOverlay.ce4a9159.js";import"./lazy.eb8158cf.js";import"./easing.36b781ab.js";import"./dialog-transition.66eb3fbe.js";import"./VList.88ea70eb.js";import"./index.cc13591e.js";import"./VAvatar.6c12d1ff.js";import"./VDivider.734561d6.js";import"./VChip.9e1f42e5.js";import"./VListItemAction.f033d92c.js";import"./position.b257d571.js";import"./useAppAbility.cfb49011.js";import"./VInput.10834ccb.js";import"./VSwitch.d621e5e5.js";import"./VSelectionControl.1d0e6d70.js";import"./VRadioGroup.f8a5ef43.js";const V=[{heading:"Apps & Pages"},{title:"Email",icon:{icon:"tabler-mail"},to:"apps-email"},{title:"Chat",icon:{icon:"tabler-message"},to:"apps-chat"},{title:"Calendar",icon:{icon:"tabler-calendar"},to:"apps-calendar"},{title:"Videos",icon:{icon:"tabler-armchair"},children:[{title:"List",to:"videos-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"Invoice",icon:{icon:"tabler-file"},children:[{title:"List",to:"apps-invoice-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"User",icon:{icon:"tabler-user"},children:[{title:"List",to:"apps-user-list"},{title:"View",to:{name:"apps-user-view-id",params:{id:21}}}]},{title:"Pages",icon:{icon:"tabler-file"},children:[{title:"Authentication",children:[{title:"Login",children:[{title:"Login v1",to:"pages-authentication-login-v1",target:"_blank"},{title:"Login v2",to:"pages-authentication-login-v2",target:"_blank"}]},{title:"Register",children:[{title:"Register v1",to:"pages-authentication-register-v1",target:"_blank"},{title:"Register v2",to:"pages-authentication-register-v2",target:"_blank"}]},{title:"Verify Email",children:[{title:"Verify Email v1",to:"pages-authentication-verify-email-v1",target:"_blank"},{title:"Verify Email v2",to:"pages-authentication-verify-email-v2",target:"_blank"}]},{title:"Forgot Password",children:[{title:"Forgot Password v1",to:"pages-authentication-forgot-password-v1",target:"_blank"},{title:"Forgot Password v2",to:"pages-authentication-forgot-password-v2",target:"_blank"}]},{title:"Reset Password",children:[{title:"Reset Password v1",to:"pages-authentication-reset-password-v1",target:"_blank"},{title:"Reset Password v2",to:"pages-authentication-reset-password-v2",target:"_blank"}]},{title:"Two Steps",children:[{title:"Two Steps v1",to:"pages-authentication-two-steps-v1",target:"_blank"},{title:"Two Steps v2",to:"pages-authentication-two-steps-v2",target:"_blank"}]}]},{title:"Help Center",to:"pages-help-center"},{title:"User Profile",to:{name:"pages-user-profile-tab",params:{tab:"profile"}}},{title:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing",to:"pages-pricing"},{title:"FAQ",to:"pages-faq"},{title:"Miscellaneous",children:[{title:"Coming Soon",to:"pages-misc-coming-soon",target:"_blank"},{title:"Under Maintenance",to:"pages-misc-under-maintenance",target:"_blank"},{title:"Page Not Found - 404",to:"pages-misc-not-found",target:"_blank"},{title:"Not Authorized - 401",to:"pages-misc-not-authorized",target:"_blank"},{title:"Server Error - 500",to:"pages-misc-internal-server-error",target:"_blank"}]}]}],S=[{heading:"Charts"},{title:"Charts",icon:{icon:"tabler-chart-donut"},children:[{title:"Apex Chart",to:"charts-apex-chart"},{title:"Chartjs",to:"charts-chartjs"}]}],L=[{title:"Dashboards",icon:{icon:"tabler-smart-home"},children:[{title:"Analytics",to:"dashboards-analytics"},{title:"eCommerce",to:"dashboards-ecommerce"},{title:"CRM",to:"dashboards-crm"}],badgeContent:"2",badgeClass:"bg-light-primary text-primary"}],T=[{heading:"Forms"},{title:"Form Elements",icon:{icon:"tabler-copy"},children:[{title:"Checkbox",to:"forms-checkbox"},{title:"Combobox",to:"forms-combobox"},{title:"Date Time Picker",to:"forms-date-time-picker"},{title:"File Input",to:"forms-file-input"},{title:"Radio",to:"forms-radio"},{title:"Range Slider",to:"forms-range-slider"},{title:"Rating",to:"forms-rating"},{title:"Select",to:"forms-select"},{title:"Slider",to:"forms-slider"},{title:"Switch",to:"forms-switch"},{title:"Textarea",to:"forms-textarea"},{title:"Textfield",to:"forms-textfield"}]},{title:"Form Layouts",icon:{icon:"tabler-copy"},to:"forms-form-layouts"},{title:"Form Validation",icon:{icon:"tabler-checkbox"},to:"forms-form-validation"}],R=[{heading:"Others"},{title:"Access Control",icon:{icon:"tabler-shield"},to:"access-control",action:"read",subject:"Auth"},{title:"Nav Levels",icon:{icon:"tabler-menu-2"},children:[{title:"Level 2.1",to:null},{title:"Level 2.2",children:[{title:"Level 3.1",to:null},{title:"Level 3.2",to:null}]}]},{title:"Disabled Menu",to:null,icon:{icon:"tabler-eye-off"},disable:!0},{title:"Raise Support",href:"https://pixinvent.ticksy.com/",icon:{icon:"tabler-lifebuoy"},target:"_blank"},{title:"Documentation",href:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/",icon:{icon:"tabler-file"},target:"_blank"}],E=[{heading:"UI Elements"},{title:"Typography",icon:{icon:"tabler-square-letter-t"},to:"pages-typography"},{title:"Icons",icon:{icon:"tabler-eye"},to:"pages-icons"},{title:"Cards",icon:{icon:"tabler-credit-card"},children:[{title:"Basic",to:"pages-cards-card-basic"},{title:"Advance",to:"pages-cards-card-advance"},{title:"Statistics",to:"pages-cards-card-statistics"},{title:"Widgets",to:"pages-cards-card-widgets"},{title:"Actions",to:"pages-cards-card-actions"}]},{title:"Components",icon:{icon:"tabler-archive"},children:[{title:"Alert",to:"components-alert"},{title:"Avatar",to:"components-avatar"},{title:"Badge",to:"components-badge"},{title:"Button",to:"components-button"},{title:"Chip",to:"components-chip"},{title:"Dialog",to:"components-dialog"},{title:"Expansion Panel",to:"components-expansion-panel"},{title:"List",to:"components-list"},{title:"Menu",to:"components-menu"},{title:"Pagination",to:"components-pagination"},{title:"Progress",to:"components-progress"},{title:"Snackbar",to:"components-snackbar"},{title:"Tabs",to:"components-tabs"},{title:"Timeline",to:"components-timeline"},{title:"Tooltip",to:"components-tooltip"}]}],F=[...L,...V,...E,...T,...S,...R],B={class:"d-flex h-100 align-center"},vt=p({__name:"DefaultLayoutWithVerticalNav",setup(N){const{appRouteTransition:r,isLessThanOverlayNavBreakpoint:s}=m(),{width:l}=d();return(D,I)=>{const c=g("RouterView");return a(),n(i(_),{"nav-items":i(F)},{navbar:e(({toggleVerticalOverlayNavActive:o})=>[h("div",B,[i(s)(i(l))?(a(),n(P,{key:0,icon:"",variant:"text",color:"default",class:"ms-n3",size:"small",onClick:z=>o(!0)},{default:e(()=>[t(b,{icon:"tabler-menu-2",size:"24"})]),_:2},1032,["onClick"])):u("",!0),t(y,{class:"ms-lg-n3"}),t(A),t(w,{class:"me-2"}),t(x),t(C)])]),footer:e(()=>[t(k)]),default:e(()=>[t(c,null,{default:e(({Component:o})=>[t(v,{name:i(r),mode:"out-in"},{default:e(()=>[(a(),n(f(o)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}});export{vt as default};