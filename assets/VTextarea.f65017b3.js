import{R as Q,ac as W,a1 as V,k as f,aw as X,a3 as v,ag as Y,a0 as Z,az as ee,p as a,C as I,F as P,a6 as H,a7 as te,bd as ae,a5 as _,bc as ne,a8 as le,aS as oe}from"./index.3aea8822.js";/* empty css                   */import{m as re,f as ue,V as ie}from"./VField.deb9867d.js";import{m as se,u as ce,f as de,a as fe}from"./VInput.10834ccb.js";import{I as ve}from"./VImg.480b603b.js";import{f as me}from"./forwardRefs.c003b6b8.js";import{V as xe}from"./VCounter.5ac30989.js";const ke=Q({name:"VTextarea",directives:{Intersect:ve},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...se(),...re()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,N){let{attrs:C,emit:z,slots:u}=N;const n=W(e,"modelValue"),{isFocused:c,focus:$,blur:T}=ce(e),A=V(()=>typeof e.counterValue=="function"?e.counterValue(n.value):(n.value||"").toString().length),D=V(()=>{if(C.maxlength)return C.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function G(t,l){var o,r;!e.autofocus||!t||(o=l[0].target)==null||(r=o.focus)==null||r.call(o)}const b=f(),m=f(),R=f(""),x=f(),p=V(()=>c.value||e.persistentPlaceholder),M=V(()=>e.messages.length?e.messages:p.value||e.persistentHint?e.hint:"");function y(){if(x.value!==document.activeElement){var t;(t=x.value)==null||t.focus()}c.value||$()}function U(t){y(),z("click:control",t)}function E(t){t.stopPropagation(),y(),_(()=>{n.value="",ne(e["onClick:clear"],t)})}function O(t){n.value=t.target.value}const i=f();function s(){!e.autoGrow||_(()=>{if(!i.value||!m.value)return;const t=getComputedStyle(i.value),l=getComputedStyle(m.value.$el),o=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),r=i.value.scrollHeight,F=parseFloat(t.lineHeight),w=Math.max(parseFloat(e.rows)*F+o,parseFloat(l.getPropertyValue("--v-input-control-height"))),k=parseFloat(e.maxRows)*F+o||1/0;R.value=le(oe(r!=null?r:0,w,k))})}X(s),v(n,s),v(()=>e.rows,s),v(()=>e.maxRows,s),v(()=>e.density,s);let g;return v(i,t=>{if(t)g=new ResizeObserver(s),g.observe(i.value);else{var l;(l=g)==null||l.disconnect()}}),Y(()=>{var t;(t=g)==null||t.disconnect()}),Z(()=>{const t=!!(u.counter||e.counter||e.counterValue),l=!!(t||u.details),[o,r]=ee(C),[{modelValue:F,...w}]=de(e),[k]=ue(e);return a(fe,I({ref:b,modelValue:n.value,"onUpdate:modelValue":d=>n.value=d,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},o,w,{focused:c.value,messages:M.value}),{...u,default:d=>{let{isDisabled:h,isDirty:S,isReadonly:j,isValid:q}=d;return a(ie,I({ref:m,style:{"--v-textarea-control-height":R.value},"onClick:control":U,"onClick:clear":E,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},k,{active:p.value||S.value,dirty:S.value||e.dirty,focused:c.value,error:q.value===!1}),{...u,default:J=>{let{props:{class:B,...K}}=J;return a(P,null,[e.prefix&&a("span",{class:"v-text-field__prefix"},[e.prefix]),H(a("textarea",I({ref:x,class:B,value:n.value,onInput:O,autofocus:e.autofocus,readonly:j.value,disabled:h.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:y,onBlur:T},K,r),null),[[te("intersect"),{handler:G},null,{once:!0}]]),e.autoGrow&&H(a("textarea",{class:[B,"v-textarea__sizer"],"onUpdate:modelValue":L=>n.value=L,ref:i,readonly:!0,"aria-hidden":"true"},null),[[ae,n.value]]),e.suffix&&a("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:l?d=>{var h;return a(P,null,[(h=u.details)==null?void 0:h.call(u,d),t&&a(P,null,[a("span",null,null),a(xe,{active:e.persistentCounter||c.value,value:A.value,max:D.value},u.counter)])])}:void 0})}),me({},b,m,x)}});export{ke as V};
