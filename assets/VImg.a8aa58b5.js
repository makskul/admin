import{a3 as j,Z as p,p as a,Y as h,a5 as O,Q as D,h as E,C as M,T as q,k as _,a6 as N,a7 as x,a8 as A,a9 as V,aa as H,F as L,ab as U,ac as Q}from"./index.add429ee.js";import{e as Y,f as Z}from"./router.ba3d0dbd.js";function G(e){return{aspectStyles:h(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const J=j({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Y()},setup(e,s){let{slots:l}=s;const{aspectStyles:t}=G(e),{dimensionStyles:c}=Z(e);return p(()=>{var i;return a("div",{class:"v-responsive",style:c.value},[a("div",{class:"v-responsive__sizer",style:t.value},null),(i=l.additional)==null?void 0:i.call(l),l.default&&a("div",{class:["v-responsive__content",e.contentClass]},[l.default()])])}),{}}});function K(e,s){if(!O)return;const l=s.modifiers||{},t=s.value,{handler:c,options:i}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var d;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const v=(d=e._observe)==null?void 0:d[s.instance.$.uid];if(!v)return;const f=g.some(S=>S.isIntersecting);c&&(!l.quiet||v.init)&&(!l.once||f||v.init)&&c(f,g,o),f&&l.once?B(e,s):v.init=!0},i);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:r},r.observe(e)}function B(e,s){var l;const t=(l=e._observe)==null?void 0:l[s.instance.$.uid];!t||(t.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const X={mounted:K,unmounted:B},ee=X,te=D({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),b=(e,s)=>{let{slots:l}=s;const{transition:t,...c}=e,{component:i=q,...r}=typeof t=="object"?t:{};return E(i,M(typeof t=="string"?{name:t}:r,c),l)},re=j({name:"VImg",directives:{intersect:ee},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...te()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:l,slots:t}=s;const c=_(""),i=_(),r=_(e.eager?"loading":"idle"),d=_(),g=_(),o=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=h(()=>o.value.aspect||d.value/g.value||0);N(()=>e.src,()=>{f(r.value!=="idle")}),x(()=>f());function f(n){if(!(e.eager&&n)&&!(O&&!n&&!e.eager)){if(r.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,y(u,null)}!o.value.src||A(()=>{var u,m;if(l("loadstart",((u=i.value)==null?void 0:u.currentSrc)||o.value.src),(m=i.value)!=null&&m.complete){if(i.value.naturalWidth||z(),r.value==="error")return;v.value||y(i.value,null),S()}else v.value||y(i.value),$()})}}function S(){var n;$(),r.value="loaded",l("load",((n=i.value)==null?void 0:n.currentSrc)||o.value.src)}function z(){var n;r.value="error",l("error",((n=i.value)==null?void 0:n.currentSrc)||o.value.src)}function $(){const n=i.value;n&&(c.value=n.currentSrc||n.src)}function y(n){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{const{naturalHeight:T,naturalWidth:w}=n;T||w?(d.value=w,g.value=T):!n.complete&&r.value==="loading"&&u!=null?setTimeout(m,u):(n.currentSrc.endsWith(".svg")||n.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,g.value=1)};m()}const I=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),C=()=>{var n;if(!o.value.src||r.value==="idle")return null;const u=a("img",{class:["v-img__img",I.value],src:o.value.src,srcset:o.value.srcset,alt:"",sizes:e.sizes,ref:i,onLoad:S,onError:z},null),m=(n=t.sources)==null?void 0:n.call(t);return a(b,{transition:e.transition,appear:!0},{default:()=>[V(m?a("picture",{class:"v-img__picture"},[m,u]):u,[[Q,r.value==="loaded"]])]})},F=()=>a(b,{transition:e.transition},{default:()=>[o.value.lazySrc&&r.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",I.value],src:o.value.lazySrc,alt:""},null)]}),P=()=>t.placeholder?a(b,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&a("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,W=()=>t.error?a(b,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&a("div",{class:"v-img__error"},[t.error()])]}):null,k=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,R=_(!1);{const n=N(v,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{R.value=!0})}),n())})}return p(()=>V(a(J,{class:["v-img",{"v-img--booting":!R.value}],style:{width:U(e.width==="auto"?d.value:e.width)},aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>a(L,null,[a(C,null,null),a(F,null,null),a(k,null,null),a(P,null,null),a(W,null,null)]),default:t.default}),[[H("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:c,image:i,state:r,naturalWidth:d,naturalHeight:g}}});export{ee as I,b as M,re as V,J as a,te as m};
