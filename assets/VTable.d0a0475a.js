import{m as n,c as d}from"./router.d66206d8.js";import{R as h,Z as m,al as v,am as b,a0 as f,p as a,a8 as u}from"./index.467cdc2d.js";const x=h({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...n(),...m(),...v()},setup(e,s){let{slots:t}=s;const{themeClasses:i}=b(e),{densityClasses:r}=d(e);return f(()=>{var o,l;return a(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},i.value,r.value]},{default:()=>[(o=t.top)==null?void 0:o.call(t),t.default&&a("div",{class:"v-table__wrapper",style:{height:u(e.height)}},[a("table",null,[t.default()])]),(l=t.bottom)==null?void 0:l.call(t)]})}),{}}});export{x as V};
