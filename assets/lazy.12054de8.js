import{Q as r,k as n,Y as u,a6 as f}from"./index.add429ee.js";const c=r({eager:Boolean},"lazy");function m(e,o){const a=n(!1),s=u(()=>a.value||e.eager||o.value);f(o,()=>a.value=!0);function t(){e.eager||(a.value=!1)}return{isBooted:a,hasContent:s,onAfterLeave:t}}export{c as m,m as u};
