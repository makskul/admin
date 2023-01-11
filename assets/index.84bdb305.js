import{d as J,x as N,o as f,c as M,w as t,b as e,f as s,l as r,e as i,B as P,k as D,r as be,j as $,F as k,n as E,p as ae,g,aZ as ge,C as K,a_ as ne,a2 as F,a5 as U,a$ as I,aW as X,aV as re,m as le,P as Q,$ as se,b0 as $e}from"./index.caf38268.js";import{a as ye,V as O,c as j}from"./VCard.c5638fda.js";import{V as B}from"./VSpacer.7c6d4ad4.js";import{V as Y}from"./VTextField.bdcf6587.js";import{V as L}from"./VDivider.3dc86b85.js";import{V as Ce}from"./VTextarea.b7f3baca.js";import{V as v}from"./VBtn.712e49fc.js";import{V as q}from"./VBadge.7796bdd6.js";import{f as ke,b as Ve}from"./formatters.289f6046.js";import{V as ze}from"./VChip.5a15239e.js";import{V as H}from"./VMenu.e7e0c6e6.js";import{V as W,a as Z,b as G}from"./VList.f1dc7f28.js";import{V as de}from"./VAvatar.0831a545.js";import{V as ee}from"./VImg.816248d9.js";import{V as me}from"./VNavigationDrawer.c26710c1.js";import{u as we,V as Ee,a as Se}from"./useResponsiveSidebar.60cee63c.js";import{V as ie}from"./VCheckbox.eac5fcca.js";import{b as oe}from"./route-block.023af118.js";import"./VCardActions.1b13d616.js";import"./createSimpleFunctional.62ffac02.js";import"./router.2201e90f.js";import"./position.76acdcd7.js";/* empty css                   */import"./VField.35bf6b2c.js";import"./index.9c58c053.js";import"./VInput.5f868937.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.eebee7ac.js";import"./index.f0101229.js";import"./scopeId.70c45aef.js";import"./VOverlay.42d6e5db.js";import"./lazy.92c181db.js";import"./dialog-transition.928afdb2.js";import"./ssrBoot.97250acf.js";import"./VCheckboxBtn.7ef9e509.js";import"./VSelectionControl.a99a28cf.js";const Me={class:"d-flex align-center"},Le=s("span",{class:"font-weight-semibold"},"Compose Mail",-1),De={class:"pe-5"},Te=s("div",{class:"text-sm text-disabled"}," To: ",-1),Ae=s("span",{class:"cursor-pointer"},"Cc | Bcc",-1),Ie=s("div",{class:"text-sm text-disabled"}," Subject: ",-1),Ne={class:"d-flex align-center px-5 py-4"},Re=J({__name:"ComposeDialog",emits:["close"],setup(x){const _=N(""),o=N(""),n=N(""),w=()=>{_.value=o.value=n.value=""};return(C,u)=>(f(),M(O,{class:"email-compose-dialog",elevation:"24"},{default:t(()=>[e(ye,{class:"py-3 px-5"},{default:t(()=>[s("div",Me,[Le,e(B),e(r,{size:"20",icon:"tabler-minus",class:"me-4",onClick:u[0]||(u[0]=d=>C.$emit("close"))}),e(r,{size:"20",icon:"tabler-x",onClick:u[1]||(u[1]=d=>{C.$emit("close"),w()})})])]),_:1}),s("div",De,[e(Y,{modelValue:i(_),"onUpdate:modelValue":u[2]||(u[2]=d=>P(_)?_.value=d:null),density:"compact"},{"prepend-inner":t(()=>[Te]),append:t(()=>[Ae]),_:1},8,["modelValue"])]),e(L),e(Y,{modelValue:i(o),"onUpdate:modelValue":u[3]||(u[3]=d=>P(o)?o.value=d:null),density:"compact"},{"prepend-inner":t(()=>[Ie]),_:1},8,["modelValue"]),e(L),e(Ce,{modelValue:i(n),"onUpdate:modelValue":u[4]||(u[4]=d=>P(n)?n.value=d:null),placeholder:"Message"},null,8,["modelValue"]),e(L),s("div",Ne,[e(v,null,{default:t(()=>[D("Send")]),_:1}),e(r,{icon:"tabler-link",class:"ms-4 cursor-pointer"}),e(B),e(r,{icon:"tabler-dots-vertical",size:"20",class:"cursor-pointer"}),e(r,{icon:"tabler-trash",size:"20",class:"ms-4 cursor-pointer",onClick:u[5]||(u[5]=d=>{C.$emit("close"),w()})})])]),_:1}))}});const Fe={class:"pa-5"},Ue={class:"email-filters-labels"},Be=["href","onClick"],Pe=s("li",{class:"text-xs d-block text-uppercase text-disabled mt-6"}," LABELS ",-1),je=["href","onClick"],Oe=J({__name:"EmailLeftSidebarContent",emits:["toggleComposeDialogVisibility"],setup(x){const _=[{title:"Inbox",prependIcon:"tabler-mail",to:{name:"apps-email"}},{title:"Sent",prependIcon:"tabler-send",to:{name:"apps-email-filter",params:{filter:"sent"}}},{title:"Draft",prependIcon:"tabler-pencil",to:{name:"apps-email-filter",params:{filter:"draft"}}},{title:"Starred",prependIcon:"tabler-star",to:{name:"apps-email-filter",params:{filter:"starred"}}},{title:"Spam",prependIcon:"tabler-help",to:{name:"apps-email-filter",params:{filter:"spam"}}},{title:"Trash",prependIcon:"tabler-trash",to:{name:"apps-email-filter",params:{filter:"trashed"}}}],o=[{title:"Personal",color:"success",to:{name:"apps-email-label",params:{label:"personal"}}},{title:"Company",color:"primary",to:{name:"apps-email-label",params:{label:"company"}}},{title:"Important",color:"warning",to:{name:"apps-email-label",params:{label:"important"}}},{title:"Private",color:"error",to:{name:"apps-email-label",params:{label:"private"}}}];return(n,w)=>{const C=be("RouterLink");return f(),$(k,null,[s("div",Fe,[e(v,{block:"",onClick:w[0]||(w[0]=u=>n.$emit("toggleComposeDialogVisibility"))},{default:t(()=>[D(" Compose ")]),_:1})]),s("ul",Ue,[(f(),$(k,null,E(_,u=>e(C,{key:u.title,class:"d-flex items-center cursor-pointer",to:u.to,custom:""},{default:t(({isActive:d,href:S,navigate:b})=>[s("li",ae(n.$attrs,{href:S,class:[d&&"email-filter-active text-primary","cursor-pointer"],onClick:b}),[e(r,{icon:u.prependIcon,class:"me-3",size:"20"},null,8,["icon"]),s("span",null,g(u.title),1)],16,Be)]),_:2},1032,["to"])),64)),Pe,(f(),$(k,null,E(o,u=>e(C,{key:u.title,class:"d-flex items-center",to:u.to,custom:""},{default:t(({isActive:d,href:S,navigate:b})=>[s("li",ae(n.$attrs,{href:S,class:[d&&"email-label-active text-primary","cursor-pointer"],onClick:b}),[e(q,{inline:"",dot:"",color:u.color,class:"me-4"},null,8,["color"]),s("span",null,g(u.title),1)],16,je)]),_:2},1032,["to"])),64))])],64)}}});const te=ge("email",{state:()=>({emails:[],emailsMeta:{draft:0,inbox:0,spam:0}}),actions:{async fetchEmails(x){const _=await K.get("/apps/email/emails",{params:x}),{emails:o,emailsMeta:n}=_.data;this.emails=o,this.emailsMeta=n},async updateEmails(x,_){return K.post("/apps/email/update-emails/",{ids:x,data:_})},async updateEmailLabels(x,_){return K.post("/apps/email/update-emails-label",{ids:x,label:_})}}}),ce=()=>{const x=ne(),_=te();return{labels:[{title:"personal",color:"success"},{title:"company",color:"primary"},{title:"important",color:"warning"},{title:"private",color:"error"}],resolveLabelColor:d=>d==="personal"?"success":d==="company"?"primary":d==="important"?"warning":d==="private"?"error":"secondary",shallShowMoveToActionFor:d=>d==="trash"?x.params.filter!=="trashed":d==="inbox"?!(x.params.filter===void 0||x.params.filter==="sent"||x.params.filter==="draft"):d==="spam"?!(x.params.filter==="spam"||x.params.filter==="sent"||x.params.filter==="draft"):!1,emailMoveToFolderActions:[{action:"inbox",icon:"tabler-mail"},{action:"spam",icon:"tabler-alert-octagon"},{action:"trash",icon:"tabler-trash"}],moveSelectedEmailTo:(d,S)=>{const b={};d==="inbox"?(x.params.filter==="trashed"&&(b.isDeleted=!1),b.folder="inbox"):d==="spam"?(x.params.filter==="trashed"&&(b.isDeleted=!1),b.folder="spam"):d==="trash"&&(b.isDeleted=!0),_.updateEmails(S,b)}}},qe={class:"email-view-header d-flex align-center px-5 py-3"},He={class:"d-flex align-center flex-wrap flex-grow-1 overflow-hidden gap-2"},We={class:"text-body-1 font-weight-medium text-high-emphasis text-truncate"},Ze={class:"d-flex flex-wrap gap-1"},Ge={class:"d-flex align-center"},Je={class:"email-view-action-bar d-flex align-center text-medium-emphasis px-5"},Ke={class:"d-flex align-start"},Qe={class:"d-flex flex-wrap flex-grow-1 overflow-hidden"},Xe={class:"text-truncate"},Ye={class:"d-block text-high-emphasis font-weight-medium text-truncate"},et={class:"text-sm text-disabled"},tt={class:"d-flex align-center"},at={class:"me-2"},lt=["innerHTML"],st=s("span",null,"Attachments",-1),it=s("div",{class:"text-base"},[D(" Click here to "),s("span",{class:"text-primary cursor-pointer"}," Reply "),D(" or "),s("span",{class:"text-primary cursor-pointer"}," Forward ")],-1),ot=J({__name:"EmailView",props:{email:null,emailMeta:null},emits:["refresh","navigated","close","trash","unread","star","unstar"],setup(x,{emit:_}){const o=x,n=te(),{labels:w,resolveLabelColor:C,emailMoveToFolderActions:u,shallShowMoveToActionFor:d,moveSelectedEmailTo:S}=ce(),b=p=>{S(p,[o.email.id]),_("refresh"),_("close")},T=p=>{n.updateEmailLabels([o.email.id],p),_("refresh")};return(p,y)=>(f(),M(me,{temporary:"","model-value":!!o.email,location:"right",scrim:!1,floating:"",class:"email-view"},{default:t(()=>[o.email?(f(),$(k,{key:0},[s("div",qe,[e(v,{icon:"",variant:"text",color:"default",size:"small",class:"me-4 flip-in-rtl",onClick:y[0]||(y[0]=m=>p.$emit("close"))},{default:t(()=>[e(r,{size:"28",icon:"tabler-chevron-left"})]),_:1}),s("div",He,[s("h2",We,g(o.email.subject),1),s("div",Ze,[(f(!0),$(k,null,E(o.email.labels,m=>(f(),M(ze,{key:m,color:i(C)(m),density:"comfortable",class:"px-2 text-capitalize me-2 flex-shrink-0"},{default:t(()=>[D(g(m),1)]),_:2},1032,["color"]))),128))])]),s("div",Ge,[e(v,{icon:"",variant:"text",color:"default",size:"small",disabled:!o.emailMeta.hasPreviousEmail,class:"text-medium-emphasis flip-in-rtl",onClick:y[1]||(y[1]=m=>p.$emit("navigated","previous"))},{default:t(()=>[e(r,{size:"22",icon:"tabler-chevron-left"})]),_:1},8,["disabled"]),e(v,{icon:"",variant:"text",color:"default",size:"small",class:"text-medium-emphasis flip-in-rtl",disabled:!o.emailMeta.hasNextEmail,onClick:y[2]||(y[2]=m=>p.$emit("navigated","next"))},{default:t(()=>[e(r,{size:"22",icon:"tabler-chevron-right"})]),_:1},8,["disabled"])])]),e(L),s("div",Je,[F(e(v,{icon:"",variant:"text",color:"default",size:"small",onClick:y[3]||(y[3]=m=>{p.$emit("trash"),p.$emit("close")})},{default:t(()=>[e(r,{size:"22",icon:"tabler-trash"})]),_:1},512),[[U,!o.email.isDeleted]]),e(v,{icon:"",variant:"text",color:"default",size:"small",onClick:y[4]||(y[4]=I(m=>{p.$emit("unread"),p.$emit("close")},["stop"]))},{default:t(()=>[e(r,{size:"22",icon:"tabler-mail"})]),_:1}),e(v,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(r,{size:"22",icon:"tabler-folder"}),e(H,{activator:"parent"},{default:t(()=>[e(W,{density:"compact"},{default:t(()=>[(f(!0),$(k,null,E(i(u),m=>(f(),M(Z,{key:m.title,class:X([i(d)(m.action)?"d-flex":"d-none","items-center"]),href:"#",onClick:A=>b(m.action)},{prepend:t(()=>[e(r,{icon:m.icon,class:"me-2",size:"20"},null,8,["icon"])]),default:t(()=>[e(G,{class:"text-capitalize"},{default:t(()=>[D(g(m.action),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(v,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(r,{size:"22",icon:"tabler-tag"}),e(H,{activator:"parent"},{default:t(()=>[e(W,{density:"compact"},{default:t(()=>[(f(!0),$(k,null,E(i(w),m=>(f(),M(Z,{key:m.title,href:"#",onClick:I(A=>T(m.title),["stop"])},{prepend:t(()=>[e(q,{inline:"",color:i(C)(m.title),dot:""},null,8,["color"])]),default:t(()=>[e(G,{class:"ms-2 text-capitalize"},{default:t(()=>[D(g(m.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(B),e(v,{icon:"",variant:"text",size:"small",color:o.email.isStarred?"warning":"default",onClick:y[5]||(y[5]=m=>{var A;(A=o.email)!=null&&A.isStarred?p.$emit("unstar"):p.$emit("star"),p.$emit("refresh")})},{default:t(()=>[e(r,{size:"22",icon:"tabler-star"})]),_:1},8,["color"]),e(v,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(r,{size:"22",icon:"tabler-dots-vertical"})]),_:1})]),e(L),e(i(re),{tag:"div",class:"mail-content-container flex-grow-1",options:{wheelPropagation:!1}},{default:t(()=>[e(O,{class:"ma-5"},{default:t(()=>[e(j,{class:"mail-header"},{default:t(()=>[s("div",Ke,[e(de,{class:"me-3"},{default:t(()=>[e(ee,{src:o.email.from.avatar,alt:o.email.from.name},null,8,["src","alt"])]),_:1}),s("div",Qe,[s("div",Xe,[s("span",Ye,g(o.email.from.name),1),s("span",et,g(o.email.from.email),1)]),e(B),s("div",tt,[s("span",at,g(i(ke)(o.email.time)),1),F(e(v,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(r,{size:"22",icon:"tabler-link"})]),_:1},512),[[U,o.email.attachments.length]])])]),e(v,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(r,{size:"22",icon:"tabler-dots-vertical"})]),_:1})])]),_:1}),e(L),e(j,null,{default:t(()=>[s("div",{class:"text-base",innerHTML:o.email.message},null,8,lt)]),_:1}),o.email.attachments.length?(f(),$(k,{key:0},[e(L),e(j,{class:"d-flex flex-column gap-y-4"},{default:t(()=>[st,(f(!0),$(k,null,E(o.email.attachments,m=>(f(),$("div",{key:m.fileName,class:"d-flex align-center"},[e(ee,{src:m.thumbnail,alt:m.fileName,"aspect-ratio":"1","max-height":"24","max-width":"24",class:"me-2"},null,8,["src","alt"]),s("span",null,g(m.fileName),1)]))),128))]),_:1})],64)):le("",!0)]),_:1}),e(O,{class:"mx-5 mb-5"},{default:t(()=>[e(j,{class:"font-weight-medium text-high-emphasis"},{default:t(()=>[it]),_:1})]),_:1})]),_:1})],64)):le("",!0)]),_:1},8,["model-value"]))}});const nt={class:"d-flex align-center"},rt={class:"py-2 px-5 d-flex items-center"},dt=["onClick"],mt={class:"mx-2 text-body-1 font-weight-medium text-high-emphasis"},ct={class:"truncate"},ut={class:"email-meta"},pt={class:"text-disabled ms-2"},ft={class:"email-actions d-none"},vt={class:"py-4 px-5 text-center"},_t=s("span",{class:"text-high-emphasis"},"No items found.",-1),xt=[_t],ht=J({__name:"index",setup(x){const{isLeftSidebarOpen:_}=we(),o=ne(),n=te(),{labels:w,resolveLabelColor:C,emailMoveToFolderActions:u,shallShowMoveToActionFor:d,moveSelectedEmailTo:S}=ce(),b=N(!1),T=N(""),p=N([]),y=c=>{const l=p.value.indexOf(c);l===-1?p.value.push(c):p.value.splice(l,1)},m=Q(()=>n.emails.length&&n.emails.length===p.value.length),A=Q(()=>Boolean(p.value.length)&&n.emails.length!==p.value.length),ue=()=>{p.value=m.value?[]:n.emails.map(c=>c.id)},h=N(null),pe=Q(()=>{const c={hasNextEmail:!1,hasPreviousEmail:!1};if(h.value){const l=n.emails.findIndex(a=>a.id===h.value.id);c.hasNextEmail=!!n.emails[l+1],c.hasPreviousEmail=!!n.emails[l-1]}return c}),R=async()=>{p.value=[],await n.fetchEmails({q:T.value,filter:o.params.filter,label:o.params.label})},z=async(c,l=p.value)=>{!l.length||(c==="trash"?n.updateEmails(l,{isDeleted:!0}):c==="spam"?n.updateEmails(l,{folder:"spam"}):c==="unread"?n.updateEmails(l,{isRead:!1}):c==="read"?n.updateEmails(l,{isRead:!0}):c==="star"?n.updateEmails(l,{isStarred:!0}):c==="unstar"&&n.updateEmails(l,{isStarred:!1}),await R())};se([T,()=>o.params.filter,()=>o.params.label],R,{immediate:!0}),se([()=>o.params.filter,()=>o.params.label],()=>{h.value=null});const fe=c=>{S(c,p.value),R()},ve=c=>{n.updateEmailLabels(p.value,c),R()},_e=c=>{if(!h.value)return;const l=n.emails.findIndex(V=>V.id===h.value.id),a=c==="previous"?l-1:l+1;h.value=n.emails[a]},xe=c=>{h.value=c,z("read",[c.id])},he=async()=>{await R(),h.value&&(h.value=n.emails.find(c=>c.id===h.value.id))};return(c,l)=>(f(),M(Se,{class:"email-app-layout"},{default:t(()=>[e(me,{modelValue:i(_),"onUpdate:modelValue":l[1]||(l[1]=a=>P(_)?_.value=a:null),absolute:"",touchless:"",location:"start",temporary:c.$vuetify.display.mdAndDown},{default:t(()=>[e(Oe,{onToggleComposeDialogVisibility:l[0]||(l[0]=a=>b.value=!i(b))})]),_:1},8,["modelValue","temporary"]),e(ot,{email:i(h),"email-meta":i(pe),onRefresh:he,onNavigated:_e,onClose:l[2]||(l[2]=a=>h.value=null),onRemove:l[3]||(l[3]=a=>z("trash",i(h)?[i(h).id]:[])),onUnread:l[4]||(l[4]=a=>z("unread",i(h)?[i(h).id]:[])),onStar:l[5]||(l[5]=a=>z("star",i(h)?[i(h).id]:[])),onUnstar:l[6]||(l[6]=a=>z("unstar",i(h)?[i(h).id]:[]))},null,8,["email","email-meta"]),e(Ee,null,{default:t(()=>[e(O,{flat:"",class:"h-100 d-flex flex-column"},{default:t(()=>[s("div",nt,[e(v,{variant:"text",color:"default",icon:"",size:"small",class:"d-lg-none ms-3",onClick:l[7]||(l[7]=a=>_.value=!0)},{default:t(()=>[e(r,{size:"24",icon:"tabler-menu-2"})]),_:1}),e(Y,{modelValue:i(T),"onUpdate:modelValue":l[8]||(l[8]=a=>P(T)?T.value=a:null),density:"default",class:"email-search px-1 flex-grow-1","prepend-inner-icon":"tabler-search",placeholder:"Search email"},null,8,["modelValue"])]),e(L),s("div",rt,[e(ie,{"model-value":i(m),indeterminate:i(A),"onUpdate:modelValue":ue},null,8,["model-value","indeterminate"]),s("div",{class:"w-100 d-flex items-center action-bar-actions",style:$e({visibility:i(A)||i(m)?void 0:"hidden"})},[F(e(v,{variant:"text",color:"default",icon:"",size:"small",onClick:l[9]||(l[9]=a=>z("trash"))},{default:t(()=>[e(r,{size:"22",icon:"tabler-trash"})]),_:1},512),[[U,c.$route.params.filter!=="trashed"]]),e(v,{variant:"text",color:"default",icon:"",size:"small",onClick:l[10]||(l[10]=a=>z("unread"))},{default:t(()=>[e(r,{size:"22",icon:"tabler-mail"})]),_:1}),e(v,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(r,{size:"22",icon:"tabler-folder"}),e(H,{activator:"parent"},{default:t(()=>[e(W,{density:"compact"},{default:t(()=>[(f(!0),$(k,null,E(i(u),a=>(f(),M(Z,{key:a.title,class:X([i(d)(a.action)?"d-flex":"d-none","items-center"]),href:"#",onClick:V=>fe(a.action)},{prepend:t(()=>[e(r,{icon:a.icon,class:"me-2",size:"20"},null,8,["icon"])]),default:t(()=>[e(G,{class:"text-capitalize"},{default:t(()=>[D(g(a.action),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(v,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(r,{size:"22",icon:"tabler-tag"}),e(H,{activator:"parent"},{default:t(()=>[e(W,{density:"compact"},{default:t(()=>[(f(!0),$(k,null,E(i(w),a=>(f(),M(Z,{key:a.title,href:"#",onClick:V=>ve(a.title)},{prepend:t(()=>[e(q,{inline:"",color:i(C)(a.title),dot:""},null,8,["color"])]),default:t(()=>[e(G,{class:"ms-2 text-capitalize"},{default:t(()=>[D(g(a.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})],4),e(B),e(v,{variant:"text",color:"default",icon:"",size:"small",onClick:R},{default:t(()=>[e(r,{size:"22",icon:"tabler-reload"})]),_:1}),e(v,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(r,{size:"22",icon:"tabler-dots-vertical"})]),_:1})]),e(L),e(i(re),{tag:"ul",options:{wheelPropagation:!1},class:"email-list"},{default:t(()=>[(f(!0),$(k,null,E(i(n).emails,a=>F((f(),$("li",{key:a.id,class:X(["email-item d-flex align-center py-2 px-5 cursor-pointer",[{"email-read":a.isRead}]]),onClick:V=>xe(a)},[e(ie,{"model-value":i(p).includes(a.id),class:"flex-shrink-0","onUpdate:modelValue":V=>y(a.id),onClick:l[11]||(l[11]=I(()=>{},["stop"]))},null,8,["model-value","onUpdate:modelValue"]),e(v,{variant:"text",icon:"",size:"small",color:a.isStarred?"warning":"default",onClick:I(V=>z(a.isStarred?"unstar":"star",[a.id]),["stop"])},{default:t(()=>[e(r,{size:"22",icon:"tabler-star"})]),_:2},1032,["color","onClick"]),e(de,{class:"mx-2",size:"32"},{default:t(()=>[e(ee,{src:a.from.avatar,alt:a.from.name},null,8,["src","alt"])]),_:2},1024),s("h6",mt,g(a.from.name),1),s("span",ct,g(a.subject),1),e(B),s("div",ut,[(f(!0),$(k,null,E(a.labels,V=>(f(),M(q,{key:V,inline:"",color:i(C)(V),dot:""},null,8,["color"]))),128)),s("small",pt,g(i(Ve)(a.time)),1)]),s("div",ft,[e(v,{variant:"text",color:"default",icon:"",size:"small",onClick:I(V=>z("trash",[a.id]),["stop"])},{default:t(()=>[e(r,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"]),e(v,{variant:"text",color:"default",icon:"",size:"small",onClick:I(V=>z(a.isRead?"unread":"read",[a.id]),["stop"])},{default:t(()=>[e(r,{size:"22",icon:a.isRead?"tabler-mail":"tabler-mail-opened"},null,8,["icon"])]),_:2},1032,["onClick"]),e(v,{variant:"text",color:"default",icon:"",size:"small",onClick:I(V=>z("spam",[a.id]),["stop"])},{default:t(()=>[e(r,{size:"22",icon:"tabler-alert-octagon"})]),_:2},1032,["onClick"])])],10,dt)),[[U,i(n).emails.length]])),128)),F(s("li",vt,xt,512),[[U,!i(n).emails.length]])]),_:1})]),_:1}),F(e(Re,{onClose:l[12]||(l[12]=a=>b.value=!1)},null,512),[[U,i(b)]])]),_:1})]),_:1}))}});typeof oe=="function"&&oe(ht);export{ht as default};
