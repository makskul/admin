import{aa as y,ac as h,k as x,aL as E,a3 as f,a5 as P,a0 as S,p as m,C as p}from"./index.467cdc2d.js";import{u as D}from"./scopeId.da3fc4ec.js";import{f as w}from"./forwardRefs.c003b6b8.js";import{m as A,f as B,a as I}from"./VOverlay.7737ea4d.js";import{V as O}from"./dialog-transition.cc283102.js";import{V as R}from"./router.d66206d8.js";const k=y()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...A({origin:"center center",scrollStrategy:"block",transition:{component:O},zIndex:2400})},emits:{"update:modelValue":r=>!0},setup(r,g){let{slots:i}=g;const n=h(r,"modelValue"),{scopeId:V}=D(),a=x();function c(t){var e,o;const s=t.relatedTarget,l=t.target;if(s!==l&&(e=a.value)!=null&&e.contentEl&&(o=a.value)!=null&&o.globalTop&&![document,a.value.contentEl].includes(l)&&!a.value.contentEl.contains(l)){const u=[...a.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(v=>!v.hasAttribute("disabled")&&!v.matches('[tabindex="-1"]'));if(!u.length)return;const d=u[0],b=u[u.length-1];s===d?b.focus():d.focus()}}return E&&f(()=>n.value&&r.retainFocus,t=>{t?document.addEventListener("focusin",c):document.removeEventListener("focusin",c)},{immediate:!0}),f(n,async t=>{if(await P(),t){var e;(e=a.value.contentEl)==null||e.focus({preventScroll:!0})}else{var o;(o=a.value.activatorEl)==null||o.focus({preventScroll:!0})}}),S(()=>{const[t]=B(r);return m(I,p({ref:a,class:["v-dialog",{"v-dialog--fullscreen":r.fullscreen,"v-dialog--scrollable":r.scrollable}]},t,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:p({"aria-haspopup":"dialog","aria-expanded":String(n.value)},r.activatorProps)},V),{activator:i.activator,default:function(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return m(R,{root:!0},{default:()=>[(e=i.default)==null?void 0:e.call(i,...s)]})}})}),w({},a)}});export{k as V};