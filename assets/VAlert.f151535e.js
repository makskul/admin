import{c as D}from"./VAvatar.6c12d1ff.js";import{m as I,e as L,i as R,o as p,a as w,b as z,u as E,c as F,f as O,n as j,p as M,d as N,g as X,V as u}from"./router.59166a5a.js";import{b as Z,c as q}from"./position.b257d571.js";import{R as G,X as H,Z as J,al as K,ac as Q,a1 as o,am as U,an as W,ai as Y,ar as ee,p as a,A as te}from"./index.3aea8822.js";import{V as ae}from"./VBtn.6b17fd81.js";const le=D("v-alert-title"),se=["success","info","warning","error"],ue=G({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:H,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>se.includes(e)},...I(),...L(),...R(),...p(),...Z(),...w(),...J(),...K(),...z({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const n=Q(e,"modelValue"),s=o(()=>{var l;if(e.icon!==!1)return e.type?(l=e.icon)!=null?l:`$${e.type}`:e.icon}),v=o(()=>{var l;return{color:(l=e.color)!=null?l:e.type,variant:e.variant}}),{themeClasses:m}=U(e),{colorClasses:f,colorStyles:y,variantClasses:b}=E(v),{densityClasses:V}=F(e),{dimensionStyles:C}=O(e),{elevationClasses:P}=j(e),{locationStyles:k}=M(e),{positionClasses:x}=q(e),{roundedClasses:g}=N(e),{textColorClasses:S,textColorStyles:_}=W(Y(e,"borderColor")),{t:T}=ee(),r=o(()=>({"aria-label":T(e.closeLabel),onClick(l){n.value=!1}}));return()=>{var l,i;const $=!!(t.prepend||s.value),h=!!(t.title||e.title),B=!!(e.text||t.text),A=!!(t.close||e.closable);return n.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},m.value,f.value,V.value,P.value,x.value,g.value,b.value],style:[y.value,C.value,k.value],role:"alert"},{default:()=>[X(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",S.value],style:_.value},null),$&&a(u,{key:"prepend",defaults:{VIcon:{density:e.density,icon:s.value,size:e.prominent?44:28}}},{default:()=>[a("div",{class:"v-alert__prepend"},[t.prepend?t.prepend():s.value&&a(te,null,null)])]}),a("div",{class:"v-alert__content"},[h&&a(le,{key:"title"},{default:()=>[t.title?t.title():e.title]}),B&&(t.text?t.text():e.text),(l=t.default)==null?void 0:l.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),A&&a(u,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var c;return[a("div",{class:"v-alert__close"},[(c=(i=t.close)==null?void 0:i.call(t,{props:r.value}))!=null?c:a(ae,r.value,null)])]}})]})}}});export{ue as V,le as a};
