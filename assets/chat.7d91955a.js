import{b2 as et,K as j,d as M,q as t,o as c,c as _,m as s,p as e,w as l,A as h,s as $,b as y,x as b,a$ as R,F as V,B as z,Y as q,cW as st,J as w,a as I,a9 as W,ac as Y,z as F,b9 as at,k as S,a6 as ot,b4 as lt,a8 as Q}from"./index.77701064.js";import{a as E,b as nt,f as it}from"./formatters.289f6046.js";import{V as g}from"./VBtn.53878958.js";import{V as U}from"./VAvatar.fc5520e2.js";import{V as N}from"./VImg.250ac722.js";import{V as A}from"./VBadge.d68dfe9f.js";import{V as G}from"./VTextField.d4f2f334.js";import{V as tt}from"./VDivider.180b1adb.js";import{V as ct}from"./VTextarea.d7e2429d.js";import{V as rt,a as dt}from"./VRadioGroup.300b2e25.js";import{u as ut,V as mt,a as ht}from"./useResponsiveSidebar.d0fea5a7.js";import{V as J}from"./VNavigationDrawer.7f4c29ae.js";import{V as ft}from"./VSpacer.3b25a30c.js";import{V as pt}from"./VMenu.ed19857c.js";import{V as vt,a as _t,b as bt}from"./VList.a7b50dde.js";import{V as xt}from"./VForm.76e375d2.js";import{b as X}from"./route-block.023af118.js";import"./index.f0101229.js";import"./router.d2c6a154.js";import"./position.e5e8bd77.js";/* empty css                   */import"./VField.058a4f60.js";import"./index.7fd4ff68.js";import"./VInput.45565cb0.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.db6e4399.js";import"./VSelectionControl.deecffdb.js";import"./ssrBoot.0cc9807d.js";import"./createSimpleFunctional.7cc145cc.js";import"./scopeId.1e111ec9.js";import"./VOverlay.992bd8df.js";import"./lazy.5366086b.js";import"./dialog-transition.5ac5310c.js";const L=()=>({resolveAvatarBadgeVariant:n=>n==="online"?"success":n==="busy"?"error":n==="away"?"warning":"secondary"}),D=et("chat",{state:()=>({contacts:[],chatsContacts:[],profileUser:void 0,activeChat:null}),actions:{async fetchChatsAndContacts(x){const{data:n}=await j.get("/apps/chat/chats-and-contacts",{params:{q:x}}),{chatsContacts:a,contacts:r,profileUser:p}=n;this.chatsContacts=a,this.contacts=r,this.profileUser=p},async getChat(x){const{data:n}=await j.get(`/apps/chat/chats/${x}`);this.activeChat=n},async sendMsg(x){var d,o,f,m,k;const n=(d=this.profileUser)==null?void 0:d.id,{data:a}=await j.post(`/apps/chat/chats/${(o=this.activeChat)==null?void 0:o.contact.id}`,{message:x,senderId:n}),{msg:r,chat:p}=a;if(p!==void 0){const B=this.activeChat;this.chatsContacts.push({...B.contact,chat:{id:p.id,lastMessage:[],unseenMsgs:0,messages:[r]}}),this.activeChat&&(this.activeChat.chat={id:p.id,messages:[r],unseenMsgs:0,userId:(f=this.activeChat)==null?void 0:f.contact.id})}else(k=(m=this.activeChat)==null?void 0:m.chat)==null||k.messages.push(r);const i=this.chatsContacts.find(B=>this.activeChat?B.id===this.activeChat.contact.id:!1);i.chat.lastMessage=r}}}),gt={class:"text-center px-6"},Ct={key:1,class:"text-3xl"},yt={class:"mb-1 font-weight-medium text-high-emphasis text-base"},$t={class:"text-capitalize text-sm text-medium-emphasis"},kt={class:"my-8"},Vt=s("span",{for:"textarea-user-about",class:"text-sm text-disabled"},"ABOUT",-1),wt={class:"mt-2"},zt={class:"mb-8"},Ut=s("span",{class:"d-block text-sm text-disabled mb-3"},"PERSONAL INFORMATION",-1),St={class:"d-flex align-center"},It=s("span",null,"lucifer@email.com",-1),At={class:"d-flex align-center my-3"},Mt=s("span",null,"+1(123) 456 - 7890",-1),Nt={class:"d-flex align-center"},Dt=s("span",null,"Mon - Fri 10AM - 8PM",-1),Bt=s("span",{class:"d-block text-sm text-disabled mb-3"},"OPTIONS",-1),Ot={class:"d-flex align-center"},Tt=s("span",null,"Add Tag",-1),Pt={class:"d-flex align-center my-3"},Lt=s("span",null,"Important Contact",-1),Ft={class:"d-flex align-center mb-3"},Rt=s("span",null,"Shared Media",-1),Et={class:"d-flex align-center mb-3"},jt=s("span",null,"Delete Contact",-1),Jt={class:"d-flex align-center"},qt=s("span",null,"Block Contact",-1),Ht=M({__name:"ChatActiveChatUserProfileSidebarContent",emits:["close"],setup(x,{emit:n}){const a=D(),{resolveAvatarBadgeVariant:r}=L();return(p,i)=>t(a).activeChat?(c(),_(V,{key:0},[s("div",{class:$(["pt-2 me-2",p.$vuetify.locale.isRtl?"text-left":"text-right"])},[e(g,{variant:"text",color:"default",icon:"",size:"small",onClick:i[0]||(i[0]=d=>p.$emit("close"))},{default:l(()=>[e(h,{size:"24",icon:"tabler-x",class:"text-medium-emphasis"})]),_:1})],2),s("div",gt,[e(A,{location:"bottom right","offset-x":"7","offset-y":"4",bordered:"",color:t(r)(t(a).activeChat.contact.status),class:"chat-user-profile-badge mb-5"},{default:l(()=>[e(U,{size:"80",class:$(["bg-surface",`text-${t(r)(t(a).activeChat.contact.status)}`]),variant:"tonal"},{default:l(()=>[t(a).activeChat.contact.avatar?(c(),y(N,{key:0,src:t(a).activeChat.contact.avatar},null,8,["src"])):(c(),_("span",Ct,b(t(E)(t(a).activeChat.contact.fullName)),1))]),_:1},8,["class"])]),_:1},8,["color"]),s("h2",yt,b(t(a).activeChat.contact.fullName),1),s("p",$t,b(t(a).activeChat.contact.role),1)]),e(t(R),{class:"ps-chat-user-profile-sidebar-content text-medium-emphasis pb-5 px-5",options:{wheelPropagation:!1}},{default:l(()=>[s("div",kt,[Vt,s("p",wt,b(t(a).activeChat.contact.about),1)]),s("div",zt,[Ut,s("div",St,[e(h,{class:"me-2",icon:"tabler-mail",size:"22"}),It]),s("div",At,[e(h,{class:"me-2",icon:"tabler-phone",size:"22"}),Mt]),s("div",Nt,[e(h,{class:"me-2",icon:"tabler-clock",size:"22"}),Dt])]),s("div",null,[Bt,s("div",Ot,[e(h,{class:"me-2",icon:"tabler-bookmark",size:"22"}),Tt]),s("div",Pt,[e(h,{class:"me-2",icon:"tabler-star",size:"22"}),Lt]),s("div",Ft,[e(h,{class:"me-2",icon:"tabler-photo",size:"22"}),Rt]),s("div",Et,[e(h,{class:"me-2",icon:"tabler-trash",size:"22"}),jt]),s("div",Jt,[e(h,{class:"me-2 ms-1",size:"18",icon:"tabler-ban"}),qt])])]),_:1})],64)):z("",!0)}}),Kt=["data-x"],Wt={key:1},Yt={class:"flex-grow-1 ms-4 overflow-hidden"},Qt={class:"d-block text-sm text-truncate text-disabled"},Xt={key:0,class:"d-flex flex-column align-self-start"},Zt={class:"d-block text-disabled whitespace-no-wrap"},Z=M({__name:"ChatContact",props:{isChatContact:{type:Boolean,default:!1},user:null},setup(x){const n=x,a=D(),{resolveAvatarBadgeVariant:r}=L(),p=q(()=>{var d,o;const i=((d=a.activeChat)==null?void 0:d.contact.id)===n.user.id;return(n.isChatContact||!((o=a.activeChat)!=null&&o.chat))&&i});return(i,d)=>(c(),_("li",{key:t(a).chatsContacts.length,class:$(["chat-contact cursor-pointer d-flex align-center",{"chat-contact-active":t(p)}]),"data-x":t(a).chatsContacts.length},[e(A,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:t(r)(n.user.status),bordered:"","model-value":n.isChatContact},{default:l(()=>[e(U,{size:"40",variant:"tonal",color:t(r)(n.user.status)},{default:l(()=>[n.user.avatar?(c(),y(N,{key:0,src:n.user.avatar,alt:"John Doe"},null,8,["src"])):(c(),_("span",Wt,b(t(E)(x.user.fullName)),1))]),_:1},8,["color"])]),_:1},8,["color","model-value"]),s("div",Yt,[s("span",null,b(n.user.fullName),1),s("span",Qt,b(n.isChatContact&&"chat"in n.user?n.user.chat.lastMessage.message:n.user.about),1)]),n.isChatContact&&"chat"in n.user?(c(),_("div",Xt,[s("span",Zt,b(t(nt)(n.user.chat.lastMessage.time)),1),n.user.chat.unseenMsgs?(c(),y(A,{key:0,color:"error",inline:"",content:n.user.chat.unseenMsgs,class:"ms-auto"},null,8,["content"])):z("",!0)])):z("",!0)],10,Kt))}});const Gt={key:0,class:"chat-list-header"},te=s("li",null,[s("span",{class:"chat-contact-header d-block text-primary text-xl font-weight-medium"},"Chats")],-1),ee={class:"no-chat-items-text text-disabled"},se=s("li",null,[s("span",{class:"chat-contact-header d-block text-primary text-xl font-weight-medium"},"Contacts")],-1),ae={class:"no-chat-items-text text-disabled"},oe=M({__name:"ChatLeftSidebarContent",props:{search:null,isDrawerOpen:{type:Boolean}},emits:["openChatOfContact","showUserProfile","close"],setup(x,{emit:n}){const a=x,{resolveAvatarBadgeVariant:r}=L(),p=st(a,"search"),i=D();return(d,o)=>(c(),_(V,null,[t(i).profileUser?(c(),_("div",Gt,[e(A,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:t(r)(t(i).profileUser.status),bordered:""},{default:l(()=>[e(U,{size:"38",class:"cursor-pointer",onClick:o[0]||(o[0]=f=>d.$emit("showUserProfile"))},{default:l(()=>[e(N,{src:t(i).profileUser.avatar,alt:"John Doe"},null,8,["src"])]),_:1})]),_:1},8,["color"]),e(G,{modelValue:t(p),"onUpdate:modelValue":o[1]||(o[1]=f=>w(p)?p.value=f:null),density:"compact",placeholder:"Search...",class:"ms-4 me-1 chat-list-search"},{"prepend-inner":l(()=>[e(h,{size:"22",icon:"tabler-search"})]),_:1},8,["modelValue"]),d.$vuetify.display.smAndDown?(c(),y(g,{key:0,variant:"text",color:"default",icon:"",size:"small",onClick:o[2]||(o[2]=f=>d.$emit("close"))},{default:l(()=>[e(h,{size:"24",icon:"tabler-x",class:"text-medium-emphasis"})]),_:1})):z("",!0)])):z("",!0),e(tt),e(t(R),{tag:"ul",class:"chat-contacts-list px-3",options:{wheelPropagation:!1}},{default:l(()=>[te,(c(!0),_(V,null,I(t(i).chatsContacts,f=>(c(),y(Z,{key:`chat-${f.id}`,user:f,"is-chat-contact":"",onClick:m=>d.$emit("openChatOfContact",f.id)},null,8,["user","onClick"]))),128)),W(s("span",ee,"No chats found",512),[[Y,!t(i).chatsContacts.length]]),se,(c(!0),_(V,null,I(t(i).contacts,f=>(c(),y(Z,{key:`chat-${f.id}`,user:f,onClick:m=>d.$emit("openChatOfContact",f.id)},null,8,["user","onClick"]))),128)),W(s("span",ae,"No contacts found",512),[[Y,!t(i).contacts.length]])]),_:1})],64))}});const le={class:"chat-log pa-5"},ne={class:"text-xs me-1 text-disabled"},ie=M({__name:"ChatLog",setup(x){const n=D(),a=q(()=>{var i,d;return{id:(i=n.activeChat)==null?void 0:i.contact.id,avatar:(d=n.activeChat)==null?void 0:d.contact.avatar}}),r=i=>i.isSeen?{icon:"tabler-checks",color:"success"}:i.isDelivered?{icon:"tabler-checks",color:void 0}:{icon:"tabler-check",color:void 0},p=q(()=>{let i=[];const d=[];if(n.activeChat.chat){i=n.activeChat.chat.messages;let o=i[0].senderId,f={senderId:o,messages:[]};i.forEach((m,k)=>{o===m.senderId?f.messages.push({message:m.message,time:m.time,feedback:m.feedback}):(o=m.senderId,d.push(f),f={senderId:m.senderId,messages:[{message:m.message,time:m.time,feedback:m.feedback}]}),k===i.length-1&&d.push(f)})}return d});return(i,d)=>(c(),_("div",le,[(c(!0),_(V,null,I(t(p),(o,f)=>(c(),_("div",{key:o.senderId+String(f),class:$(["chat-group d-flex align-start",[{"flex-row-reverse":o.senderId!==t(a).id,"mb-8":t(p).length-1!==f}]])},[s("div",{class:$(["chat-avatar",o.senderId!==t(a).id?"ms-4":"me-4"])},[e(U,{size:"38"},{default:l(()=>{var m;return[e(N,{src:o.senderId===t(a).id?t(a).avatar:(m=t(n).profileUser)==null?void 0:m.avatar},null,8,["src"])]}),_:2},1024)],2),s("div",{class:$(["chat-body d-inline-flex flex-column",o.senderId!==t(a).id?"align-end":"align-start"])},[(c(!0),_(V,null,I(o.messages,(m,k)=>(c(),_("p",{key:m.time,class:$(["chat-content text-sm py-3 px-4 elevation-1",[o.senderId===t(a).id?"bg-surface chat-left":"bg-primary text-white chat-right",o.messages.length-1!==k?"mb-2":"mb-1"]])},b(m.message),3))),128)),s("div",{class:$({"text-right":o.senderId!==t(a).id})},[s("span",ne,b(t(it)(o.messages[o.messages.length-1].time,{hour:"numeric",minute:"numeric"})),1),o.senderId!==t(a).id?(c(),y(h,{key:0,size:"16",color:r(o.messages[o.messages.length-1].feedback).color},{default:l(()=>[F(b(r(o.messages[o.messages.length-1].feedback).icon),1)]),_:2},1032,["color"])):z("",!0)],2)],2)],2))),128))]))}});const ce={class:"pt-2 me-2 text-end"},re={class:"text-center px-6"},de={key:1,class:"text-3xl"},ue={class:"mb-1 text-high-emphasis font-weight-medium text-base"},me={class:"text-capitalize text-medium-emphasis text-sm"},he={class:"my-5 text-medium-emphasis"},fe=s("span",{for:"textarea-user-about",class:"text-sm text-disabled"},"ABOUT",-1),pe={class:"mb-5"},ve=s("span",{class:"text-sm text-disabled"},"STATUS",-1),_e={class:"text-medium-emphasis"},be=s("span",{class:"text-sm text-disabled"},"SETTINGS",-1),xe={class:"d-flex align-center my-3"},ge=s("span",null,"Two-step Verification",-1),Ce={class:"d-flex align-center mb-3"},ye=s("span",null,"Notification",-1),$e={class:"d-flex align-center mb-3"},ke=s("span",null,"Invite Friends",-1),Ve={class:"d-flex align-center"},we=s("span",null,"Delete Account",-1),ze=M({__name:"ChatUserProfileSidebarContent",emits:["close"],setup(x,{emit:n}){const a=D(),{resolveAvatarBadgeVariant:r}=L(),p=[{title:"Online",value:"online",color:"success"},{title:"Away",value:"away",color:"warning"},{title:"Do not disturb",value:"busy",color:"error"},{title:"Offline",value:"offline",color:"secondary"}];return(i,d)=>t(a).profileUser?(c(),_(V,{key:0},[s("div",ce,[e(g,{variant:"text",color:"default",icon:"",size:"small",onClick:d[0]||(d[0]=o=>i.$emit("close"))},{default:l(()=>[e(h,{size:"24",class:"text-medium-emphasis",icon:"tabler-x"})]),_:1})]),s("div",re,[e(A,{location:"bottom right","offset-x":"7","offset-y":"4",bordered:"",color:t(r)(t(a).profileUser.status),class:"chat-user-profile-badge mb-5"},{default:l(()=>[e(U,{size:"84",variant:"tonal",class:$(`text-${t(r)(t(a).profileUser.status)}`)},{default:l(()=>[t(a).profileUser.avatar?(c(),y(N,{key:0,src:t(a).profileUser.avatar},null,8,["src"])):(c(),_("span",de,b(t(E)(t(a).profileUser.fullName)),1))]),_:1},8,["class"])]),_:1},8,["color"]),s("h2",ue,b(t(a).profileUser.fullName),1),s("p",me,b(t(a).profileUser.role),1)]),e(t(R),{class:"ps-chat-user-profile-sidebar-content pb-5 px-5",options:{wheelPropagation:!1}},{default:l(()=>[s("div",he,[fe,e(ct,{id:"textarea-user-about",modelValue:t(a).profileUser.about,"onUpdate:modelValue":d[1]||(d[1]=o=>t(a).profileUser.about=o),"auto-grow":"",class:"mt-1",rows:"4"},null,8,["modelValue"])]),s("div",pe,[ve,e(rt,{modelValue:t(a).profileUser.status,"onUpdate:modelValue":d[2]||(d[2]=o=>t(a).profileUser.status=o),class:"mt-1"},{default:l(()=>[(c(),_(V,null,I(p,o=>e(dt,{key:o.title,label:o.title,value:o.value,color:o.color},null,8,["label","value","color"])),64))]),_:1},8,["modelValue"])]),s("div",_e,[be,s("div",xe,[e(h,{class:"me-2",icon:"tabler-circle-check",size:"22"}),ge]),s("div",Ce,[e(h,{class:"me-2",icon:"tabler-bell",size:"22"}),ye]),s("div",$e,[e(h,{class:"me-2",icon:"tabler-user",size:"22"}),ke]),s("div",Ve,[e(h,{class:"me-2",icon:"tabler-trash",size:"22"}),we])]),e(g,{color:"primary",class:"mt-11"},{default:l(()=>[F(" Logout ")]),_:1})]),_:1})],64)):z("",!0)}}),Ue={key:0,class:"d-flex flex-column h-100"},Se={class:"active-chat-header d-flex align-center text-medium-emphasis"},Ie={key:1},Ae={class:"flex-grow-1 ms-4 overflow-hidden"},Me={class:"text-base font-weight-regular"},Ne={class:"d-block text-sm text-truncate text-disabled"},De={class:"d-sm-flex align-center d-none"},Be={key:1,class:"d-flex h-100 align-center justify-center flex-column"},Oe=M({__name:"chat",setup(x){const n=at(),a=D(),{isLeftSidebarOpen:r}=ut(n.smAndDown),{resolveAvatarBadgeVariant:p}=L(),i=S(),d=()=>{const C=i.value.$el||i.value;C.scrollTop=C.scrollHeight},o=S("");ot(o,C=>a.fetchChatsAndContacts(C),{immediate:!0});const f=()=>{n.mdAndUp.value||(r.value=!0)},m=S(""),k=async()=>{!m.value||(await a.sendMsg(m.value),m.value="",Q(()=>{d()}))},B=async C=>{await a.getChat(C),m.value="";const u=a.chatsContacts.find(v=>v.id===C);u&&(u.chat.unseenMsgs=0),n.smAndDown.value&&(r.value=!1),Q(()=>{d()})},O=S(!1),T=S(!1),H=S();return(C,u)=>(c(),y(ht,{class:"chat-app-layout bg-surface"},{default:l(()=>[e(J,{modelValue:t(O),"onUpdate:modelValue":u[1]||(u[1]=v=>w(O)?O.value=v:null),temporary:"",touchless:"",absolute:"",class:"user-profile-sidebar",location:"start",width:"370"},{default:l(()=>[e(ze,{onClose:u[0]||(u[0]=v=>O.value=!1)})]),_:1},8,["modelValue"]),e(J,{modelValue:t(T),"onUpdate:modelValue":u[3]||(u[3]=v=>w(T)?T.value=v:null),width:"374",absolute:"",temporary:"",location:"end",touchless:"",class:"active-chat-user-profile-sidebar"},{default:l(()=>[e(Ht,{onClose:u[2]||(u[2]=v=>T.value=!1)})]),_:1},8,["modelValue"]),e(J,{modelValue:t(r),"onUpdate:modelValue":u[8]||(u[8]=v=>w(r)?r.value=v:null),absolute:"",touchless:"",location:"start",width:"370",temporary:C.$vuetify.display.smAndDown,class:"chat-list-sidebar",permanent:C.$vuetify.display.mdAndUp},{default:l(()=>[e(oe,{isDrawerOpen:t(r),"onUpdate:isDrawerOpen":u[4]||(u[4]=v=>w(r)?r.value=v:null),search:t(o),"onUpdate:search":u[5]||(u[5]=v=>w(o)?o.value=v:null),onOpenChatOfContact:B,onShowUserProfile:u[6]||(u[6]=v=>O.value=!0),onClose:u[7]||(u[7]=v=>r.value=!1)},null,8,["isDrawerOpen","search"])]),_:1},8,["modelValue","temporary","permanent"]),e(mt,{class:"chat-content-container"},{default:l(()=>[t(a).activeChat?(c(),_("div",Ue,[s("div",Se,[e(g,{variant:"text",color:"default",icon:"",size:"small",class:"d-md-none me-3",onClick:u[9]||(u[9]=v=>r.value=!0)},{default:l(()=>[e(h,{size:"24",icon:"tabler-menu-2"})]),_:1}),s("div",{class:"d-flex align-center cursor-pointer",onClick:u[10]||(u[10]=v=>T.value=!0)},[e(A,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:t(p)(t(a).activeChat.contact.status),bordered:""},{default:l(()=>[e(U,{size:"40",variant:"tonal",color:t(p)(t(a).activeChat.contact.status),class:"cursor-pointer"},{default:l(()=>[t(a).activeChat.contact.avatar?(c(),y(N,{key:0,src:t(a).activeChat.contact.avatar,alt:t(a).activeChat.contact.fullName},null,8,["src","alt"])):(c(),_("span",Ie,b(t(E)(t(a).activeChat.contact.fullName)),1))]),_:1},8,["color"])]),_:1},8,["color"]),s("div",Ae,[s("h6",Me,b(t(a).activeChat.contact.fullName),1),s("span",Ne,b(t(a).activeChat.contact.role),1)])]),e(ft),s("div",De,[e(g,{variant:"text",color:"default",icon:"",size:"small"},{default:l(()=>[e(h,{size:"22",icon:"tabler-phone"})]),_:1}),e(g,{variant:"text",color:"default",icon:"",size:"small"},{default:l(()=>[e(h,{size:"22",icon:"tabler-video"})]),_:1}),e(g,{variant:"text",color:"default",icon:"",size:"small"},{default:l(()=>[e(h,{size:"22",icon:"tabler-search"})]),_:1})]),e(g,{variant:"text",color:"default",icon:"",size:"small"},{default:l(()=>[e(h,{size:"22",icon:"tabler-dots-vertical"}),e(pt,{activator:"parent"},{default:l(()=>[e(vt,null,{default:l(()=>[(c(),_(V,null,I(["View Contact","Mute Notifications","Block Contact","Clear Chat","Report"],(v,P)=>e(_t,{key:P,value:P},{default:l(()=>[e(bt,null,{default:l(()=>[F(b(v),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})]),e(tt),e(t(R),{ref_key:"chatLogPS",ref:i,tag:"ul",options:{wheelPropagation:!1},class:"flex-grow-1"},{default:l(()=>[e(ie)]),_:1},512),e(xt,{class:"chat-log-message-form mb-5 mx-5",onSubmit:lt(k,["prevent"])},{default:l(()=>{var v;return[(c(),y(G,{key:(v=t(a).activeChat)==null?void 0:v.contact.id,modelValue:t(m),"onUpdate:modelValue":u[12]||(u[12]=P=>w(m)?m.value=P:null),variant:"solo",class:"chat-message-input",placeholder:"Type your message...",density:"default",autofocus:""},{"append-inner":l(()=>[e(g,{icon:"",size:"small",variant:"text",color:"default"},{default:l(()=>[e(h,{size:"22",icon:"tabler-microphone"})]),_:1}),e(g,{icon:"",size:"small",variant:"text",color:"default",class:"me-4",onClick:u[11]||(u[11]=P=>{var K;return(K=t(H))==null?void 0:K.click()})},{default:l(()=>[e(h,{size:"22",icon:"tabler-link"})]),_:1}),e(g,{onClick:k},{default:l(()=>[F(" Send ")]),_:1})]),_:1},8,["modelValue"])),s("input",{ref_key:"refInputEl",ref:H,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:""},null,512)]}),_:1},8,["onSubmit"])])):(c(),_("div",Be,[e(U,{size:"109",class:"elevation-3 mb-6 bg-surface"},{default:l(()=>[e(h,{size:"50",class:"rounded-0 text-high-emphasis",icon:"tabler-message"})]),_:1}),s("p",{class:$(["mb-0 px-6 py-1 font-weight-medium text-lg elevation-3 rounded-xl text-high-emphasis bg-surface",[{"cursor-pointer":C.$vuetify.display.smAndDown}]]),onClick:f}," Start Conversation ",2)]))]),_:1})]),_:1}))}});typeof X=="function"&&X(Oe);export{Oe as default};