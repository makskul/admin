import{m as I,c as z,a as D,i as k,d as P,n as B,e as R,f as j}from"./router.1461a6f3.js";import{X as v,W as T,ae as N,af as w,aj as V,ab as s,P as S,Q as m,b as t,a4 as c,K as $,U as b,Y as q,ai as _,l as x,x as h,$ as E}from"./index.892843d9.js";const K=v({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...I(),...T(),...N()},setup(e,d){let{slots:l}=d;const{themeClasses:r}=w(e),{densityClasses:o}=z(e);V({VTimelineDivider:{lineColor:s(e,"lineColor")},VTimelineItem:{density:s(e,"density"),lineInset:s(e,"lineInset")}});const a=S(()=>{const i=e.side?e.side:e.density!=="default"?"end":null;return i&&`v-timeline--side-${i}`}),n=S(()=>{const i=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return i;case"start":return i[0];case"end":return i[1];default:return null}});return m(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,n.value,{"v-timeline--inset-line":!!e.lineInset},r.value,o.value,a.value],style:{"--v-timeline-line-thickness":c(e.lineThickness)}},l)),{}}}),L=v({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:$,iconColor:String,lineColor:String,...D(),...b(),...k()},setup(e,d){let{slots:l}=d;const{sizeClasses:r,sizeStyles:o}=q(e,"v-timeline-divider__dot"),{backgroundColorStyles:a,backgroundColorClasses:n}=_(s(e,"dotColor")),{roundedClasses:i}=P(e,"v-timeline-divider__dot"),{elevationClasses:u}=B(e),{backgroundColorClasses:f,backgroundColorStyles:y}=_(s(e,"lineColor"));return V({VIcon:{color:s(e,"iconColor"),icon:s(e,"icon"),size:s(e,"size")}}),m(()=>{var g;var C;return t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot}]},[t("div",{class:["v-timeline-divider__before",f.value],style:y.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",u.value,i.value,r.value],style:o.value},[t("div",{class:["v-timeline-divider__inner-dot",n.value,i.value],style:a.value},[(g=(C=l.default)==null?void 0:C.call(l))!=null?g:e.icon?t(x,null,null):void 0])]),t("div",{class:["v-timeline-divider__after",f.value],style:y.value},null)])}),{}}}),Q=v({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:$,iconColor:String,lineInset:[Number,String],...D(),...k(),...b(),...T(),...R()},setup(e,d){let{slots:l}=d;const{dimensionStyles:r}=j(e),o=h(0),a=h();return E(a,n=>{var u;var i;!n||(o.value=(u=(i=n.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:i.getBoundingClientRect().width)!=null?u:0)},{flush:"post"}),m(()=>{var n,i;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot}],style:{"--v-timeline-dot-size":c(o.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${c(e.lineInset)})`:c(0)}},[t("div",{class:"v-timeline-item__body",style:r.value},[(n=l.default)==null?void 0:n.call(l)]),t(L,{ref:a,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:l.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((i=l.opposite)==null?void 0:i.call(l))])])}),{}}});export{K as V,Q as a};