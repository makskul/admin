import{d as p,e as v}from"./VInput.10834ccb.js";import{f as b}from"./forwardRefs.c003b6b8.js";import{R as h,k as R,a0 as V,p as F}from"./index.3aea8822.js";const P=h({name:"VForm",props:{...p()},emits:{"update:modelValue":a=>!0,submit:a=>!0},setup(a,i){let{slots:s,emit:m}=i;const r=v(a),n=R();function f(t){t.preventDefault(),r.reset()}function u(t){const o=t,e=r.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),m("submit",o),o.defaultPrevented||e.then(d=>{let{valid:c}=d;if(c){var l;(l=n.value)==null||l.submit()}}),o.preventDefault()}return V(()=>{var t;return F("form",{ref:n,class:"v-form",novalidate:!0,onReset:f,onSubmit:u},[(t=s.default)==null?void 0:t.call(s,r)])}),b(r,n)}});export{P as V};
