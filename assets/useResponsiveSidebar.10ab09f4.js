import{R as i,b4 as v,b5 as m,a0 as c,p as n,Z as y,b6 as f,b7 as p,k as b,a3 as V}from"./index.467cdc2d.js";import{u as L}from"./ssrBoot.dc50da19.js";const k=i({name:"VLayout",props:v(),setup(e,l){let{slots:a}=l;const{layoutClasses:t,layoutStyles:s,getLayoutItem:o,items:u,layoutRef:d}=m(e);return c(()=>{var r;return n("div",{ref:d,class:t.value,style:s.value},[(r=a.default)==null?void 0:r.call(a)])}),{getLayoutItem:o,items:u}}});const B=i({name:"VMain",props:{scrollable:Boolean,...y({tag:"main"})},setup(e,l){let{slots:a}=l;const{mainStyles:t}=f(),{ssrBootStyles:s}=L();return c(()=>{var o,u;return n(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,s.value]},{default:()=>[e.scrollable?n("div",{class:"v-main__scroller"},[(o=a.default)==null?void 0:o.call(a)]):(u=a.default)==null?void 0:u.call(a)]})}),{}}}),$=(e=void 0)=>{const{mdAndDown:l,name:a}=p(),t=e||l,s=b(!0);return(()=>{s.value=!t.value})(),V(a,()=>{s.value=!t.value}),{isLeftSidebarOpen:s}};export{B as V,k as a,$ as u};