import{m as n,c as d}from"./router.2201e90f.js";import{X as h,W as v,ae as b,af as m,Q as f,b as a,a4 as u}from"./index.caf38268.js";const x=h({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...n(),...v(),...b()},setup(e,s){let{slots:t}=s;const{themeClasses:i}=m(e),{densityClasses:r}=d(e);return f(()=>{var o,l;return a(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},i.value,r.value]},{default:()=>[(o=t.top)==null?void 0:o.call(t),t.default&&a("div",{class:"v-table__wrapper",style:{height:u(e.height)}},[a("table",null,[t.default()])]),(l=t.bottom)==null?void 0:l.call(t)]})}),{}}});export{x as V};
