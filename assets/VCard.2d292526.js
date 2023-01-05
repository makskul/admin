import{R as p,aq as N,a0 as y,p as n,X as m,al as O,Z as X,am as Z,a1 as S,a6 as z,a7 as G}from"./index.467cdc2d.js";import{c as I,V as _}from"./VAvatar.9a7149b7.js";import{m as P,V,R as J,h as K,e as M,i as Q,o as U,a as W,j as Y,b as ee,l as ae,u as te,c as ne,f as le,n as se,p as ie,d as de,k as oe,g as ce}from"./router.d66206d8.js";import{m as ue,b as re,u as ve,c as me,L as fe}from"./position.363b5921.js";import{V as be}from"./VImg.657a0470.js";const ge=p({name:"VCardActions",setup(e,s){let{slots:t}=s;return N({VBtn:{variant:"text"}}),y(()=>{var a;return n("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ke=I("v-card-subtitle"),Ve=I("v-card-title"),pe=p({name:"VCardItem",props:{appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:String,title:String,...P()},setup(e,s){let{slots:t}=s;return y(()=>{var a,d,o,c,u;const f=!!(e.prependAvatar||e.prependIcon||t.prepend),b=!!(e.appendAvatar||e.appendIcon||t.append),g=!!(e.title||t.title),k=!!(e.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[f&&n(V,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__prepend"},[(l=(a=t.prepend)==null?void 0:a.call(t))!=null?l:n(_,null,null)])]}}),n("div",{class:"v-card-item__content"},[g&&n(Ve,{key:"title"},{default:()=>{var l;return[(l=(d=t.title)==null?void 0:d.call(t))!=null?l:e.title]}}),k&&n(ke,{key:"subtitle"},{default:()=>{var l;return[(l=(o=t.subtitle)==null?void 0:o.call(t))!=null?l:e.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),b&&n(V,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__append"},[(l=(u=t.append)==null?void 0:u.call(t))!=null?l:n(_,null,null)])]}})])}),{}}}),ye=I("v-card-text"),_e=p({name:"VCard",directives:{Ripple:J},props:{appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:Boolean,subtitle:String,text:String,title:String,...O(),...K(),...P(),...M(),...Q(),...ue(),...U(),...re(),...W(),...Y(),...X(),...ee({variant:"elevated"})},setup(e,s){let{attrs:t,slots:a}=s;const{themeClasses:d}=Z(e),{borderClasses:o}=ae(e),{colorClasses:c,colorStyles:u,variantClasses:f}=te(e),{densityClasses:b}=ne(e),{dimensionStyles:g}=le(e),{elevationClasses:k}=se(e),{loaderClasses:l}=ve(e),{locationStyles:x}=ie(e),{positionClasses:$}=me(e),{roundedClasses:L}=de(e),r=oe(e,t),T=S(()=>e.link!==!1&&r.isLink.value),v=S(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value));return y(()=>{var C,h,A;const B=T.value?"a":e.tag,D=!!(a.title||e.title),R=!!(a.subtitle||e.subtitle),E=D||R,j=!!(a.append||e.appendAvatar||e.appendIcon),q=!!(a.prepend||e.prependAvatar||e.prependIcon),w=!!(a.image||e.image),F=E||q||j,H=!!(a.text||e.text);return z(n(B,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},d.value,o.value,c.value,b.value,k.value,l.value,$.value,L.value,f.value],style:[u.value,g.value,x.value],href:r.href.value,onClick:v.value&&r.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[w&&n(V,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var i;return[n("div",{class:"v-card__image"},[(i=(C=a.image)==null?void 0:C.call(a))!=null?i:n(be,null,null)])]}}),n(fe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),F&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H&&n(ye,{key:"text"},{default:()=>{var i;return[(i=(h=a.text)==null?void 0:h.call(a))!=null?i:e.text]}}),(A=a.default)==null?void 0:A.call(a),a.actions&&n(ge,null,{default:a.actions}),ce(v.value,"v-card")]}),[[G("ripple"),v.value]])}),{}}});export{_e as V,pe as a,Ve as b,ye as c,ke as d,ge as e};