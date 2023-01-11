import{m as T,u as _,b as w,c as A}from"./VBtn.712e49fc.js";import{X as p,W as g,ae as $,af as B,P as c,aj as R,ab as b,Q as x,b as l,a7 as P,ai as S,a2 as V,a3 as D,l as G,J as L,K as y,a5 as j,a8 as z}from"./index.caf38268.js";import{R as F,i as J,a as K,n as N,d as O}from"./router.2201e90f.js";import{V as Q}from"./index.9c58c053.js";import{m as I,u as W}from"./lazy.92c181db.js";const r=Symbol.for("vuetify:v-expansion-panel"),X=["default","accordion","inset","popout"],ae=p({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>X.includes(e)},readonly:Boolean,...T(),...g(),...$()},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;_(e,r);const{themeClasses:a}=B(e),i=c(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return R({VExpansionPanel:{color:b(e,"color")},VExpansionPanelTitle:{readonly:b(e,"readonly")}}),x(()=>l(e.tag,{class:["v-expansion-panels",a.value,i.value]},n)),{}}}),E=L({color:String,expandIcon:{type:y,default:"$expand"},collapseIcon:{type:y,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),q=p({name:"VExpansionPanelTitle",directives:{Ripple:F},props:{...E()},setup(e,o){let{slots:n}=o;const a=P(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:u}=S(e,"color"),d=c(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return x(()=>{var v;return V(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},i.value],style:u.value,type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(v=n.default)==null?void 0:v.call(n,d.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(d.value):l(G,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[D("ripple"),e.ripple]])}),{}}}),H=p({name:"VExpansionPanelText",props:{...I()},setup(e,o){let{slots:n}=o;const a=P(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:u}=W(e,a.isSelected);return x(()=>{var d;return l(Q,{onAfterLeave:u},{default:()=>[V(l("div",{class:"v-expansion-panel-text"},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(d=n.default)==null?void 0:d.call(n)])]),[[j,a.isSelected.value]])]})}),{}}}),ne=p({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...J(),...w(),...I(),...K(),...g(),...E()},emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const a=A(e,r),{backgroundColorClasses:i,backgroundColorStyles:u}=S(e,"bgColor"),{elevationClasses:d}=N(e),{roundedClasses:v}=O(e),h=c(()=>(a==null?void 0:a.disabled.value)||e.disabled),m=c(()=>a.group.items.value.reduce((s,t,f)=>(a.group.selected.value.includes(t.id)&&s.push(f),s),[])),k=c(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&m.value.some(t=>t-s===1)}),C=c(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&m.value.some(t=>t-s===-1)});return z(r,a),x(()=>{var s;const t=!!(n.text||e.text),f=!!(n.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":k.value,"v-expansion-panel--after-active":C.value,"v-expansion-panel--disabled":h.value},v.value,i.value],style:u.value,"aria-expanded":a.isSelected.value},{default:()=>[l("div",{class:["v-expansion-panel__shadow",...d.value]},null),f&&l(q,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),t&&l(H,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),(s=n.default)==null?void 0:s.call(n)]})}),{}}});export{ae as V,ne as a,q as b,H as c};
