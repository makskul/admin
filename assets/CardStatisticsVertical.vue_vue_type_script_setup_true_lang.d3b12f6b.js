import{V as i}from"./vue3-apexcharts.common.cd4643b7.js";import{c,V as p}from"./VCard.2da705c2.js";import{V as m}from"./VAvatar.65e67ca2.js";import{d as u,o as e,b as s,w as o,p as a,B as h,m as r,x as l,q as d}from"./index.04caa90a.js";const _={class:"text-h6 mt-3 mb-1"},f={class:"text-sm"},k=u({__name:"CardStatisticsVertical",props:{title:null,color:{default:"primary"},icon:null,stats:null,height:null,series:null,chartOptions:null},setup(n){const t=n;return(V,x)=>(e(),s(p,null,{default:o(()=>[a(c,{class:"d-flex flex-column pb-0"},{default:o(()=>[t.icon?(e(),s(m,{key:0,size:"42",variant:"tonal",color:t.color,icon:t.icon},null,8,["color","icon"])):h("",!0),r("h6",_,l(t.stats),1),r("span",f,l(t.title),1)]),_:1}),a(d(i),{series:t.series,options:t.chartOptions,height:t.height},null,8,["series","options","height"])]),_:1}))}});export{k as _};