import{d as L,t as h,o as n,b as p,w as l,p as e,A as C,z as u,m as f,q as s,J as d,c,F as y,a as N,P as V,B as w}from"./index.467cdc2d.js";import{V as B}from"./VMenu.456d8490.js";import{V as k,a as m,b as _,c as v}from"./VList.20a7602a.js";import{V as g}from"./VInput.d7ae850d.js";import{V as b}from"./VSwitch.1427452d.js";import{V as z}from"./VDivider.12130cb7.js";import{V as T,a as I}from"./VRadioGroup.f3ecafc5.js";import{V as M}from"./VBtn.dc3cd726.js";const R={key:0,class:"d-flex align-center justify-space-between"},O=L({__name:"SettingsList",setup(S){const{theme:i,appContentLayoutNav:o,isVerticalNavCollapsed:r}=h();return(U,t)=>(n(),p(M,{variant:"text",color:"default",size:"small",icon:""},{default:l(()=>[e(C,{size:"24",icon:"tabler-settings"}),e(B,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:l(()=>[e(k,null,{default:l(()=>[e(m,null,{default:l(()=>[e(_,{class:"font-weight-semibold"},{default:l(()=>[u(" Theme ")]),_:1}),e(v,{class:"d-flex opacity-100"},{default:l(()=>[e(g,{for:"pricing-plan-toggle",class:"me-3"},{default:l(()=>[u(" Light ")]),_:1}),f("div",null,[e(b,{id:"pricing-plan-toggle",modelValue:s(i),"onUpdate:modelValue":t[0]||(t[0]=a=>d(i)?i.value=a:null),label:"Dark","true-value":"dark","false-value":"light"},null,8,["modelValue"])])]),_:1})]),_:1}),e(z,{class:"my-2"}),e(m,null,{default:l(()=>[e(_,null,{default:l(()=>[u("Menu Type")]),_:1}),e(v,{class:"d-flex opacity-100"},{default:l(()=>[e(T,{modelValue:s(o),"onUpdate:modelValue":t[1]||(t[1]=a=>d(o)?o.value=a:null),inline:""},{default:l(()=>[(n(!0),c(y,null,N(Object.entries(s(V)),([a,x])=>(n(),p(I,{key:a,label:a,value:x},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[s(o)===s(V).Vertical?(n(),c("div",R,[e(g,{for:"customizer-menu-collapsed",class:"text-high-emphasis"},{default:l(()=>[u(" Collapse Menu ")]),_:1}),f("div",null,[e(b,{id:"customizer-menu-collapsed",modelValue:s(r),"onUpdate:modelValue":t[2]||(t[2]=a=>d(r)?r.value=a:null),class:"ms-2"},null,8,["modelValue"])])])):w("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}});export{O as _};
