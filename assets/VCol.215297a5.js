import"./VRow.416f45a7.js";import{av as f,X as S,W as N,P as k,h as y}from"./index.892843d9.js";const a=["sm","md","lg","xl","xxl"],i=(()=>a.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),d=(()=>a.reduce((e,t)=>(e["offset"+f(t)]={type:[String,Number],default:null},e),{}))(),m=(()=>a.reduce((e,t)=>(e["order"+f(t)]={type:[String,Number],default:null},e),{}))(),c={col:Object.keys(i),offset:Object.keys(d),order:Object.keys(m)};function C(e,t,r){let s=e;if(!(r==null||r===!1)){if(t){const l=t.replace(e,"");s+=`-${l}`}return e==="col"&&(s="v-"+s),e==="col"&&(r===""||r===!0)||(s+=`-${r}`),s.toLowerCase()}}const h=["auto","start","end","center","baseline","stretch"],L=S({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...m,alignSelf:{type:String,default:null,validator:e=>h.includes(e)},...N()},setup(e,t){let{slots:r}=t;const s=k(()=>{const l=[];let o;for(o in c)c[o].forEach(n=>{const g=e[n],u=C(o,n,g);u&&l.push(u)});const b=l.some(n=>n.startsWith("v-col-"));return l.push({"v-col":!b||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return y(e.tag,{class:s.value},(l=r.default)==null?void 0:l.call(r))}}});export{L as V};
