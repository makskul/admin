import{a3 as B,R as V,a2 as $,al as y,ap as N,ai as r,W as _,an as h,ar as P,Z as T,aj as R,p as l,a9 as w,ac as A,C as d,A as L}from"./index.add429ee.js";import{o as I,a as M,d as X,p as Y}from"./router.ba3d0dbd.js";import{m as j,M as D}from"./VImg.a8aa58b5.js";const z=B({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:V,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...I({location:"top end"}),...M(),...$(),...y(),...j({transition:"scale-rotate-transition"})},setup(e,n){const{backgroundColorClasses:u,backgroundColorStyles:c}=N(r(e,"color")),{roundedClasses:g}=X(e),{t:m}=_(),{textColorClasses:b,textColorStyles:f}=h(r(e,"textColor")),{themeClasses:v}=P(),{locationStyles:C}=Y(e,!0,a=>{var t,o;return(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+((t=e.offsetY)!=null?t:0):["left","right"].includes(a)?+((o=e.offsetX)!=null?o:0):0)});return T(()=>{var a,i,t,o;const s=Number(e.content),x=!e.max||isNaN(s)?e.content:s<=e.max?s:`${e.max}+`,[S,k]=R(n.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return l(e.tag,d({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline}]},k),{default:()=>[l("div",{class:"v-badge__wrapper"},[(a=(i=n.slots).default)==null?void 0:a.call(i),l(D,{transition:e.transition},{default:()=>[w(l("span",d({class:["v-badge__badge",v.value,u.value,g.value,b.value],style:[c.value,f.value,e.inline?{}:C.value],"aria-atomic":"true","aria-label":m(e.label,s),"aria-live":"polite",role:"status"},S),[e.dot?void 0:n.slots.badge?(t=(o=n.slots).badge)==null?void 0:t.call(o):e.icon?l(L,{icon:e.icon},null):x]),[[A,e.modelValue]])]})])]})}),{}}});export{z as V};
