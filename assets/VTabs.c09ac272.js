import{X as I,K as P,W as $,ae as A,ag as H,P as z,x,Q as M,ac as N,b as m,p as w,O as U,ai as W,ab as l,aj as Y,a4 as q}from"./index.892843d9.js";import{b as F,V as K}from"./VBtn.bbadeaf1.js";import{j as Q,m as J,c as L}from"./router.1461a6f3.js";import{a as Z,s as ee}from"./easing.36b781ab.js";import{V as te}from"./VSlideGroup.c36b3594.js";const R=Symbol.for("vuetify:v-tabs"),ae=I({name:"VTab",props:{fixed:Boolean,icon:[Boolean,String,Function,Object],prependIcon:P,appendIcon:P,stacked:Boolean,title:String,ripple:{type:Boolean,default:!0},color:String,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...$(),...Q(),...F({selectedClass:"v-tab--selected"}),...A()},setup(e,t){let{slots:d,attrs:u}=t;const{textColorClasses:g,textColorStyles:v}=H(e,"sliderColor"),a=z(()=>e.direction==="horizontal"),c=x(!1),o=x(),C=x();function E(h){let{value:V}=h;if(c.value=V,V){var k,T;const y=(k=o.value)==null||(T=k.$el.parentElement)==null?void 0:T.querySelector(".v-tab--selected .v-tab__slider"),S=C.value;if(!y||!S)return;const j=getComputedStyle(y).color,s=y.getBoundingClientRect(),n=S.getBoundingClientRect(),b=a.value?"x":"y",f=a.value?"X":"Y",B=a.value?"right":"bottom",r=a.value?"width":"height",D=s[b],G=n[b],i=D>G?s[B]-n[B]:s[b]-n[b],O=Math.sign(i)>0?a.value?"right":"bottom":Math.sign(i)<0?a.value?"left":"top":"center",X=(Math.abs(i)+(Math.sign(i)<0?s[r]:n[r]))/Math.max(s[r],n[r]),_=s[r]/n[r],p=1.5;Z(S,{backgroundColor:[j,""],transform:[`translate${f}(${i}px) scale${f}(${_})`,`translate${f}(${i/p}px) scale${f}(${(X-1)/p+1})`,""],transformOrigin:Array(3).fill(O)},{duration:225,easing:ee})}}return M(()=>{const[h]=N(e,["href","to","replace","icon","stacked","prependIcon","appendIcon","ripple","theme","disabled","selectedClass","value","color"]);return m(K,w({_as:"VTab",symbol:R,ref:o,class:["v-tab"],tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,variant:"text",rounded:0},h,u,{"onGroup:selected":E}),{default:()=>[d.default?d.default():e.title,!e.hideSlider&&m("div",{ref:C,class:["v-tab__slider",g.value],style:v.value},null)]})}),{}}});function oe(e){return e?e.map(t=>typeof t=="string"?{title:t,value:t}:t):[]}const ce=I({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,direction:{type:String,default:"horizontal"},fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,modelValue:null,mandatory:{type:[Boolean,String],default:"force"},...J(),...$()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:d}=t;const u=U(e,"modelValue"),g=z(()=>oe(e.items)),{densityClasses:v}=L(e),{backgroundColorClasses:a,backgroundColorStyles:c}=W(l(e,"bgColor"));return Y({VTab:{color:l(e,"color"),direction:l(e,"direction"),stacked:l(e,"stacked"),fixed:l(e,"fixedTabs"),sliderColor:l(e,"sliderColor"),hideSlider:l(e,"hideSlider")}}),M(()=>m(te,{modelValue:u.value,"onUpdate:modelValue":o=>u.value=o,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},v.value,a.value],style:[{"--v-tabs-height":q(e.height)},c.value],role:"tablist",symbol:R,mandatory:e.mandatory,direction:e.direction},{default:()=>[d.default?d.default():g.value.map(o=>m(ae,w(o,{key:o.title}),null))]})),{}}});export{ce as V,ae as a};