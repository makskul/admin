import{V as N}from"./VCardActions.1b13d616.js";import{c as y}from"./createSimpleFunctional.62ffac02.js";import{X as P,K as v,Q as S,b as t,ae as O,W as Q,af as W,P as h,a2 as X,a3 as q}from"./index.caf38268.js";import{m as _,V,R as z,h as G,e as J,i as M,o as U,a as Y,j as Z,b as ee,l as ae,u as te,c as ne,f as le,n as se,p as ie,d as de,k as oe,g as ce}from"./router.2201e90f.js";import{V as A}from"./VAvatar.0831a545.js";import{m as re,b as ue,u as ve,c as me,L as fe}from"./position.76acdcd7.js";import{V as be}from"./VImg.816248d9.js";const ge=y("v-card-subtitle"),ke=y("v-card-title"),Ve=P({name:"VCardItem",props:{appendAvatar:String,appendIcon:v,prependAvatar:String,prependIcon:v,subtitle:String,title:String,..._()},setup(e,m){let{slots:n}=m;return S(()=>{var a,i,d,o,c;const f=!!(e.prependAvatar||e.prependIcon||n.prepend),b=!!(e.appendAvatar||e.appendIcon||n.append),g=!!(e.title||n.title),k=!!(e.subtitle||n.subtitle);return t("div",{class:"v-card-item"},[f&&t(V,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var l;return[t("div",{class:"v-card-item__prepend"},[(l=(a=n.prepend)==null?void 0:a.call(n))!=null?l:t(A,null,null)])]}}),t("div",{class:"v-card-item__content"},[g&&t(ke,{key:"title"},{default:()=>{var l;return[(l=(i=n.title)==null?void 0:i.call(n))!=null?l:e.title]}}),k&&t(ge,{key:"subtitle"},{default:()=>{var l;return[(l=(d=n.subtitle)==null?void 0:d.call(n))!=null?l:e.subtitle]}}),(o=n.default)==null?void 0:o.call(n)]),b&&t(V,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var l;return[t("div",{class:"v-card-item__append"},[(l=(c=n.append)==null?void 0:c.call(n))!=null?l:t(A,null,null)])]}})])}),{}}}),ye=y("v-card-text"),_e=P({name:"VCard",directives:{Ripple:z},props:{appendAvatar:String,appendIcon:v,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v,ripple:Boolean,subtitle:String,text:String,title:String,...O(),...G(),..._(),...J(),...M(),...re(),...U(),...ue(),...Y(),...Z(),...Q(),...ee({variant:"elevated"})},setup(e,m){let{attrs:n,slots:a}=m;const{themeClasses:i}=W(e),{borderClasses:d}=ae(e),{colorClasses:o,colorStyles:c,variantClasses:f}=te(e),{densityClasses:b}=ne(e),{dimensionStyles:g}=le(e),{elevationClasses:k}=se(e),{loaderClasses:l}=ve(e),{locationStyles:x}=ie(e),{positionClasses:L}=me(e),{roundedClasses:T}=de(e),r=oe(e,n),$=h(()=>e.link!==!1&&r.isLink.value),u=h(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value));return S(()=>{var I,p,C;const B=$.value?"a":e.tag,D=!!(a.title||e.title),R=!!(a.subtitle||e.subtitle),E=D||R,j=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),F=!!(a.image||e.image),H=E||w||j,K=!!(a.text||e.text);return X(t(B,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":u.value},i.value,d.value,o.value,b.value,k.value,l.value,L.value,T.value,f.value],style:[c.value,g.value,x.value],href:r.href.value,onClick:u.value&&r.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[F&&t(V,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var s;return[t("div",{class:"v-card__image"},[(s=(I=a.image)==null?void 0:I.call(a))!=null?s:t(be,null,null)])]}}),t(fe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),H&&t(Ve,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),K&&t(ye,{key:"text"},{default:()=>{var s;return[(s=(p=a.text)==null?void 0:p.call(a))!=null?s:e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&t(N,null,{default:a.actions}),ce(u.value,"v-card")]}),[[q("ripple"),u.value]])}),{}}});export{_e as V,Ve as a,ke as b,ye as c,ge as d};
