import{_}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang.e327c064.js";import{V as p}from"./VBtn.712e49fc.js";import{V as y,c as v,a as ie,b as se}from"./VCard.c5638fda.js";import{V as X,a as V}from"./VRow.7823d4db.js";import{V as T}from"./VTextField.bdcf6587.js";import{V as ne}from"./VSelect.654f4eb3.js";import{V as re}from"./VAutocomplete.f9dbb8c1.js";import{V as D}from"./VDialog.e1f4faa8.js";import{L as K,W as Y,Q as $,b as e,J as ce,ae as de,ai as ue,ab as E,af as pe,x as b,P as M,aj as Z,a4 as H,X as me,d as C,o as k,c as x,w as a,bf as L,bg as S,k as n,e as d,B as f,f as h,l as ee,p as ge,j as z,F as U,$ as be,n as fe}from"./index.caf38268.js";import{V as Ve}from"./index.9c58c053.js";import{h as ve,i as he,a as ke,l as ye,n as De,d as Ce,V as we,b as xe}from"./router.2201e90f.js";import{V as Be}from"./VImg.816248d9.js";import{V as ae}from"./VSpacer.7c6d4ad4.js";import{V as W,d as Q,a as j}from"./VList.f1dc7f28.js";import{V as N}from"./VDivider.3dc86b85.js";import{V as A}from"./VListItemAction.da9c9629.js";import{V as I}from"./VCheckbox.eac5fcca.js";import{V as _e}from"./position.76acdcd7.js";import{V as Te,a as je}from"./VRadioGroup.7c934339.js";import{_ as Le}from"./AppCardCode.vue_vue_type_style_index_0_lang.777c6fc5.js";import"./VCardActions.1b13d616.js";import"./createSimpleFunctional.62ffac02.js";import"./VAvatar.0831a545.js";/* empty css                   */import"./VField.35bf6b2c.js";import"./VInput.5f868937.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.eebee7ac.js";import"./dialog-transition.928afdb2.js";import"./VMenu.e7e0c6e6.js";import"./scopeId.70c45aef.js";import"./VOverlay.42d6e5db.js";import"./lazy.92c181db.js";import"./VCheckboxBtn.7ef9e509.js";import"./VSelectionControl.a99a28cf.js";import"./VChip.5a15239e.js";import"./filter.1866f47c.js";import"./vue.runtime.esm-bundler.e9fa3a77.js";const le=K()({name:"VToolbarTitle",props:{text:String,...Y()},setup(i,t){let{slots:r}=t;return $(()=>{var l;const o=!!(r.default||r.text||i.text);return e(i.tag,{class:"v-toolbar-title"},{default:()=>[o&&e("div",{class:"v-toolbar-title__placeholder"},[r.text?r.text():i.text,(l=r.default)==null?void 0:l.call(r)])]})}),{}}}),Se=[null,"prominent","default","comfortable","compact"],Pe=ce({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:i=>Se.includes(i)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ve(),...he(),...ke(),...Y({tag:"header"}),...de()},"v-toolbar"),Ae=K()({name:"VToolbar",props:Pe(),setup(i,t){var r;let{slots:l}=t;const{backgroundColorClasses:o,backgroundColorStyles:s}=ue(E(i,"color")),{borderClasses:g}=ye(i),{elevationClasses:m}=De(i),{roundedClasses:w}=Ce(i),{themeClasses:P}=pe(i),c=b(!!(i.extended||(r=l.extension)!=null&&r.call(l))),B=M(()=>parseInt(Number(i.height)+(i.density==="prominent"?Number(i.height):0)-(i.density==="comfortable"?8:0)-(i.density==="compact"?16:0),10)),u=M(()=>c.value?parseInt(Number(i.extensionHeight)+(i.density==="prominent"?Number(i.extensionHeight):0)-(i.density==="comfortable"?4:0)-(i.density==="compact"?8:0),10):0);return Z({VBtn:{variant:"text"}}),$(()=>{var F,J,q,G,R;const te=!!(i.title||l.title),oe=!!(l.image||i.image),O=(F=l.extension)==null?void 0:F.call(l);return c.value=!!(i.extended||O),e(i.tag,{class:["v-toolbar",{"v-toolbar--absolute":i.absolute,"v-toolbar--collapse":i.collapse,"v-toolbar--flat":i.flat,"v-toolbar--floating":i.floating,[`v-toolbar--density-${i.density}`]:!0},o.value,g.value,m.value,w.value,P.value],style:[s.value]},{default:()=>[oe&&e("div",{key:"image",class:"v-toolbar__image"},[e(we,{defaults:{VImg:{cover:!0,src:i.image}}},{default:()=>[l.image?(J=l.image)==null?void 0:J.call(l):e(Be,null,null)]})]),e("div",{class:"v-toolbar__content",style:{height:H(B.value)}},[l.prepend&&e("div",{class:"v-toolbar__prepend"},[(q=l.prepend)==null?void 0:q.call(l)]),te&&e(le,{key:"title",text:i.title},{text:l.title}),(G=l.default)==null?void 0:G.call(l),l.append&&e("div",{class:"v-toolbar__append"},[(R=l.append)==null?void 0:R.call(l)])]),e(Ve,null,{default:()=>[c.value&&e("div",{class:"v-toolbar__extension",style:{height:H(u.value)}},[O])]})]})}),{contentHeight:B,extensionHeight:u}}}),Ie=me({name:"VToolbarItems",props:xe({variant:"text"}),setup(i,t){let{slots:r}=t;return Z({VBtn:{color:E(i,"color"),height:"inherit",variant:E(i,"variant")}}),$(()=>{var l;return e("div",{class:"v-toolbar-items"},[(l=r.default)==null?void 0:l.call(r)])}),{}}}),Ee=C({__name:"DemoDialogForm",setup(i){const t=b(!1),r=b(""),l=b(""),o=b(""),s=b(""),g=b(""),m=b(),w=b([]);return(P,c)=>{const B=_;return k(),x(D,{modelValue:d(t),"onUpdate:modelValue":c[10]||(c[10]=u=>f(t)?t.value=u:null),"max-width":"600"},{activator:a(({props:u})=>[e(p,L(S(u)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(B,{onClick:c[0]||(c[0]=u=>t.value=!d(t))}),e(y,{title:"User Profile"},{default:a(()=>[e(v,null,{default:a(()=>[e(X,null,{default:a(()=>[e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(T,{modelValue:d(r),"onUpdate:modelValue":c[1]||(c[1]=u=>f(r)?r.value=u:null),label:"First Name"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(T,{modelValue:d(l),"onUpdate:modelValue":c[2]||(c[2]=u=>f(l)?l.value=u:null),label:"Middle Name"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(T,{modelValue:d(o),"onUpdate:modelValue":c[3]||(c[3]=u=>f(o)?o.value=u:null),label:"Last Name","persistent-hint":""},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:a(()=>[e(T,{modelValue:d(s),"onUpdate:modelValue":c[4]||(c[4]=u=>f(s)?s.value=u:null),label:"Email"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:a(()=>[e(T,{modelValue:d(g),"onUpdate:modelValue":c[5]||(c[5]=u=>f(g)?g.value=u:null),label:"Password",type:"password"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6"},{default:a(()=>[e(ne,{modelValue:d(m),"onUpdate:modelValue":c[6]||(c[6]=u=>f(m)?m.value=u:null),items:["0-17","18-29","30-54","54+"],label:"Age"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6"},{default:a(()=>[e(re,{modelValue:d(w),"onUpdate:modelValue":c[7]||(c[7]=u=>f(w)?w.value=u:null),multiple:"",items:["Skiing","Ice hockey","Soccer","Basketball","Hockey","Reading","Writing","Coding","Basejump"],label:"Interests"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(v,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(p,{variant:"tonal",color:"secondary",onClick:c[8]||(c[8]=u=>t.value=!1)},{default:a(()=>[n(" Close ")]),_:1}),e(p,{onClick:c[9]||(c[9]=u=>t.value=!1)},{default:a(()=>[n(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Ne=C({__name:"DemoDialogFullscreen",setup(i){const t=b(!1);return(r,l)=>(k(),x(D,{modelValue:d(t),"onUpdate:modelValue":l[2]||(l[2]=o=>f(t)?t.value=o:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:a(({props:o})=>[e(p,L(S(o)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(y,null,{default:a(()=>[h("div",null,[e(Ae,{color:"primary"},{default:a(()=>[e(p,{icon:"",variant:"plain",onClick:l[0]||(l[0]=o=>t.value=!1)},{default:a(()=>[e(ee,{color:"white",icon:"tabler-x"})]),_:1}),e(le,null,{default:a(()=>[n("Settings")]),_:1}),e(ae),e(Ie,null,{default:a(()=>[e(p,{variant:"text",onClick:l[1]||(l[1]=o=>t.value=!1)},{default:a(()=>[n(" Save ")]),_:1})]),_:1})]),_:1})]),e(W,{lines:"two"},{default:a(()=>[e(Q,null,{default:a(()=>[n("User Controls")]),_:1}),e(j,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(j,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(N),e(W,{lines:"two","select-strategy":"classic"},{default:a(()=>[e(Q,null,{default:a(()=>[n("General")]),_:1}),e(j,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded",value:"Notifications"},{prepend:a(({isActive:o})=>[e(A,{start:""},{default:a(()=>[e(I,{"model-value":o,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(j,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply",value:"Sound"},{prepend:a(({isActive:o})=>[e(A,{start:""},{default:a(()=>[e(I,{"model-value":o,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(j,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets",value:"Auto-add widgets"},{prepend:a(({isActive:o})=>[e(A,{start:""},{default:a(()=>[e(I,{"model-value":o,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});const $e=C({__name:"DemoDialogOverflowed",setup(i){const t=b(!1);return(r,l)=>{const o=_;return k(),x(D,{modelValue:d(t),"onUpdate:modelValue":l[3]||(l[3]=s=>f(t)?t.value=s:null),class:"v-dialog-sm"},{activator:a(({props:s})=>[e(p,ge({color:"primary"},s),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(o,{onClick:l[0]||(l[0]=s=>t.value=!d(t))}),e(y,{title:"Use Google's location service?"},{default:a(()=>[e(v,null,{default:a(()=>[n(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie drag\xE9e toffee. Cupcake souffl\xE9 pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie drag\xE9e souffl\xE9 oat cake toffee drag\xE9e gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Drag\xE9e cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee souffl\xE9 biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow drag\xE9e. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet drag\xE9e dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread souffl\xE9 croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake drag\xE9e. Cheesecake gummies sesame snaps souffl\xE9 jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping drag\xE9e chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")]),_:1}),e(v,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(p,{color:"secondary",variant:"tonal",onClick:l[1]||(l[1]=s=>t.value=!1)},{default:a(()=>[n(" Disagree ")]),_:1}),e(p,{onClick:l[2]||(l[2]=s=>t.value=!1)},{default:a(()=>[n(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),ze=C({__name:"DemoDialogNesting",setup(i){const t=b(!1),r=b(!1);return(l,o)=>{const s=_;return k(),z(U,null,[e(p,{onClick:o[0]||(o[0]=g=>t.value=!0)},{default:a(()=>[n(" Open Dialog ")]),_:1}),e(D,{modelValue:d(t),"onUpdate:modelValue":o[4]||(o[4]=g=>f(t)?t.value=g:null),class:"v-dialog-sm"},{default:a(()=>[e(p,{icon:"",class:"v-dialog-close-btn",onClick:o[1]||(o[1]=g=>t.value=!d(t))},{default:a(()=>[e(ee,{icon:"tabler-x"})]),_:1}),e(y,{title:"Dialog"},{default:a(()=>[e(v,null,{default:a(()=>[n(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart souffl\xE9 pudding. ")]),_:1}),e(v,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(p,{variant:"tonal",color:"secondary",onClick:o[2]||(o[2]=g=>t.value=!1)},{default:a(()=>[n(" Close ")]),_:1}),e(p,{onClick:o[3]||(o[3]=g=>r.value=!d(r))},{default:a(()=>[n(" Open Dialog 2 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(D,{modelValue:d(r),"onUpdate:modelValue":o[7]||(o[7]=g=>f(r)?r.value=g:null),class:"v-dialog-sm"},{default:a(()=>[e(s,{onClick:o[5]||(o[5]=g=>t.value=!d(t))}),e(y,{title:"Dialog 2"},{default:a(()=>[e(v,null,{default:a(()=>[n("I'm a nested dialog.")]),_:1}),e(v,{class:"d-flex flex-wrap gap-3"},{default:a(()=>[e(ae),e(p,{onClick:o[6]||(o[6]=g=>r.value=!1)},{default:a(()=>[n(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),Ue=C({__name:"DemoDialogLoader",setup(i){const t=b(!1);return be(t,r=>{!r||setTimeout(()=>{t.value=!1},4e3)}),(r,l)=>(k(),z(U,null,[e(p,{disabled:d(t),onClick:l[0]||(l[0]=o=>t.value=!0)},{default:a(()=>[n(" Start loading ")]),_:1},8,["disabled"]),e(D,{modelValue:d(t),"onUpdate:modelValue":l[1]||(l[1]=o=>f(t)?t.value=o:null),width:"300"},{default:a(()=>[e(y,{color:"primary",width:"300"},{default:a(()=>[e(v,{class:"pt-3"},{default:a(()=>[n(" Please stand by "),e(_e,{indeterminate:"",color:"white",class:"mb-0"})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),Fe=C({__name:"DemoDialogScrollable",setup(i){const t=[{label:"Bahamas, The",value:"bahamas"},{label:"Bahrain",value:"bahrain"},{label:"Bangladesh",value:"bangladesh"},{label:"Barbados",value:"barbados"},{label:"Belarus",value:"belarus"},{label:"Belgium",value:"belgium"},{label:"Belize",value:"belize"},{label:"Benin",value:"benin"},{label:"Bhutan",value:"bhutan"},{label:"Bolivia",value:"bolivia"},{label:"Bosnia and Herzegovina",value:"bosnia"},{label:"Botswana",value:"botswana"},{label:"Brazil",value:"brazil"},{label:"Brunei",value:"brunei"},{label:"Bulgaria",value:"bulgaria"},{label:"Burkina Faso",value:"burkina"}],r=b(""),l=b(!1);return(o,s)=>{const g=_;return k(),x(D,{modelValue:d(l),"onUpdate:modelValue":s[4]||(s[4]=m=>f(l)?l.value=m:null),scrollable:"","max-width":"350"},{activator:a(({props:m})=>[e(p,L(S(m)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(g,{onClick:s[0]||(s[0]=m=>l.value=!d(l))}),e(y,null,{default:a(()=>[e(ie,{class:"pb-5"},{default:a(()=>[e(se,null,{default:a(()=>[n("Select Country")]),_:1})]),_:1}),e(N),e(v,{style:{height:"300px"}},{default:a(()=>[e(Te,{modelValue:d(r),"onUpdate:modelValue":s[1]||(s[1]=m=>f(r)?r.value=m:null),inline:!1},{default:a(()=>[(k(),z(U,null,fe(t,m=>e(je,{key:m.label,label:m.label,value:m.value,color:"primary"},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(N),e(v,{class:"d-flex justify-end flex-wrap gap-3 pt-5"},{default:a(()=>[e(p,{color:"secondary",variant:"tonal",onClick:s[2]||(s[2]=m=>l.value=!1)},{default:a(()=>[n(" Close ")]),_:1}),e(p,{onClick:s[3]||(s[3]=m=>l.value=!1)},{default:a(()=>[n(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Je=C({__name:"DemoDialogPersistent",setup(i){const t=b(!1);return(r,l)=>{const o=_;return k(),x(D,{modelValue:d(t),"onUpdate:modelValue":l[3]||(l[3]=s=>f(t)?t.value=s:null),persistent:"",class:"v-dialog-sm"},{activator:a(({props:s})=>[e(p,L(S(s)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(o,{onClick:l[0]||(l[0]=s=>t.value=!d(t))}),e(y,{title:"Use Google's location service?"},{default:a(()=>[e(v,null,{default:a(()=>[n(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")]),_:1}),e(v,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[e(p,{color:"secondary",variant:"tonal",onClick:l[1]||(l[1]=s=>t.value=!1)},{default:a(()=>[n(" Disagree ")]),_:1}),e(p,{onClick:l[2]||(l[2]=s=>t.value=!1)},{default:a(()=>[n(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),qe=C({__name:"DemoDialogBasic",setup(i){const t=b(!1);return(r,l)=>{const o=_;return k(),x(D,{modelValue:d(t),"onUpdate:modelValue":l[2]||(l[2]=s=>f(t)?t.value=s:null),width:"500"},{activator:a(({props:s})=>[e(p,L(S(s)),{default:a(()=>[n(" Click Me ")]),_:2},1040)]),default:a(()=>[e(o,{onClick:l[0]||(l[0]=s=>t.value=!d(t))}),e(y,{title:"Privacy Policy"},{default:a(()=>[e(v,null,{default:a(()=>[n(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")]),_:1}),e(v,{class:"d-flex justify-end"},{default:a(()=>[e(p,{onClick:l[1]||(l[1]=s=>t.value=!1)},{default:a(()=>[n(" I accept ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Ge={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Re={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref<string[]>([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="age"
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VAutocomplete
              v-model="interest"
              multiple
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="age"
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VAutocomplete
              v-model="interest"
              multiple
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Oe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="tabler-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="tabler-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`},Me={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          color="white"
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return
  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          color="white"
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},He={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <VBtn
      icon
      class="v-dialog-close-btn"
      @click="isDialogVisible = !isDialogVisible"
    >
      <VIcon icon="tabler-x" />
    </VBtn>

    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart souffl\xE9 pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="d-flex flex-wrap gap-3">
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <VBtn
      icon
      class="v-dialog-close-btn"
      @click="isDialogVisible = !isDialogVisible"
    >
      <VIcon icon="tabler-x" />
    </VBtn>

    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart souffl\xE9 pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="d-flex flex-wrap gap-3">
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},We={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie drag\xE9e toffee. Cupcake souffl\xE9 pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie drag\xE9e souffl\xE9 oat cake toffee drag\xE9e gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Drag\xE9e cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee souffl\xE9 biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow drag\xE9e. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet drag\xE9e dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread souffl\xE9 croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake drag\xE9e. Cheesecake gummies sesame snaps souffl\xE9 jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping drag\xE9e chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie drag\xE9e toffee. Cupcake souffl\xE9 pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie drag\xE9e souffl\xE9 oat cake toffee drag\xE9e gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Drag\xE9e cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee souffl\xE9 biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow drag\xE9e. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet drag\xE9e dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread souffl\xE9 croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake drag\xE9e. Cheesecake gummies sesame snaps souffl\xE9 jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping drag\xE9e chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Qe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Xe={ts:`<script lang="ts" setup>
const countryList = [
  { label: 'Bahamas, The', value: 'bahamas' },
  { label: 'Bahrain', value: 'bahrain' },
  { label: 'Bangladesh', value: 'bangladesh' },

  { label: 'Barbados', value: 'barbados' },
  { label: 'Belarus', value: 'belarus' },
  { label: 'Belgium', value: 'belgium' },
  { label: 'Belize', value: 'belize' },
  { label: 'Benin', value: 'benin' },
  { label: 'Bhutan', value: 'bhutan' },
  { label: 'Bolivia', value: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'bosnia' },

  { label: 'Botswana', value: 'botswana' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Brunei', value: 'brunei' },
  { label: 'Bulgaria', value: 'bulgaria' },
  { label: 'Burkina Faso', value: 'burkina' },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardItem class="pb-5">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="height: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end flex-wrap gap-3 pt-5">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const countryList = [
  {
    label: 'Bahamas, The',
    value: 'bahamas',
  },
  {
    label: 'Bahrain',
    value: 'bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Barbados',
    value: 'barbados',
  },
  {
    label: 'Belarus',
    value: 'belarus',
  },
  {
    label: 'Belgium',
    value: 'belgium',
  },
  {
    label: 'Belize',
    value: 'belize',
  },
  {
    label: 'Benin',
    value: 'benin',
  },
  {
    label: 'Bhutan',
    value: 'bhutan',
  },
  {
    label: 'Bolivia',
    value: 'bolivia',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'bosnia',
  },
  {
    label: 'Botswana',
    value: 'botswana',
  },
  {
    label: 'Brazil',
    value: 'brazil',
  },
  {
    label: 'Brunei',
    value: 'brunei',
  },
  {
    label: 'Bulgaria',
    value: 'bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'burkina',
  },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardItem class="pb-5">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="height: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end flex-wrap gap-3 pt-5">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ke=h("p",null,"A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.",-1),Ye=h("p",null,[n("Use "),h("code",null,"persistent"),n(" prop to create persistent dialog.")],-1),Ze=h("p",null,[n("Use "),h("code",null,"scrollable"),n(" prop to create scrollable dialog.")],-1),ea=h("p",null,[n("The "),h("code",null,"v-dialog"),n(" component makes it easy to create a customized loading experience for your application.")],-1),aa=h("p",null,"Dialogs can be nested: you can open one dialog from another.",-1),la=h("p",null,"Modals that do not fit within the available window space will scroll the container.",-1),ta=h("p",null,"Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.",-1),oa=h("p",null,"Just a simple example of a form in a dialog.",-1),Ra=C({__name:"dialog",setup(i){return(t,r)=>{const l=qe,o=Le,s=Je,g=Fe,m=Ue,w=ze,P=$e,c=Ne,B=Ee;return k(),x(X,null,{default:a(()=>[e(V,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Basic",code:Ge},{default:a(()=>[Ke,e(l)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Persistent",code:Qe},{default:a(()=>[Ye,e(s)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Scrollable",code:Xe},{default:a(()=>[Ze,e(g)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Loader",code:Me},{default:a(()=>[ea,e(m)]),_:1},8,["code"])]),_:1}),e(V,{col:"12",md:"6"},{default:a(()=>[e(o,{title:"Nesting",code:He},{default:a(()=>[aa,e(w)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Overflowed",code:We},{default:a(()=>[la,e(P)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Fullscreen",code:Oe},{default:a(()=>[ta,e(c)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Form",code:Re},{default:a(()=>[oa,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ra as default};
