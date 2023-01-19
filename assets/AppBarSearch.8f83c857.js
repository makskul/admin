import{d as P,d0 as j,k as g,bh as f,a6 as B,H as E,o as l,b as y,w as t,p as a,q as r,J as q,cL as I,A as u,m as n,a$ as H,a9 as C,c as p,F as V,a as x,z as L,x as b,n as D,ac as w,B as z,L as J,M as O,y as X}from"./index.ddf88fb6.js";import{V as G,c as $}from"./VCard.96251c0a.js";import{V as W}from"./VTextField.63eb5a2b.js";import{V as A}from"./VBtn.e72b971c.js";import{V as Y}from"./VDivider.34b5f002.js";import{V as R,d as Z,a as Q,b as ee}from"./VList.d99e3c7e.js";import{V as se}from"./VRow.10cc10ba.js";import{V as te}from"./VCol.85d0744b.js";import{V as ae}from"./VDialog.1005fe8a.js";import"./VCardActions.537aa80d.js";import"./createSimpleFunctional.ade8bbc8.js";import"./router.f92578fa.js";import"./VAvatar.df291c87.js";import"./VImg.b5c614d0.js";import"./position.0ccb893b.js";/* empty css                   */import"./VField.62b4c084.js";import"./index.b747c1c9.js";import"./VInput.5afbb8d3.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.8696c615.js";import"./scopeId.0362f556.js";import"./VOverlay.752e594e.js";import"./lazy.1d76a663.js";import"./dialog-transition.e7404385.js";const re=m=>(J("data-v-49961e29"),m=m(),O(),m),le={class:"d-flex align-center"},oe={class:"h-100"},ie={class:"text-xs text-disabled text-uppercase"},ne={class:"h-100"},ce={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},ue={class:"text-h6 my-3"},pe={key:0,class:"mt-8"},de=re(()=>n("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),he=["onClick"],fe={class:"text-sm"},me=P({__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean},searchQuery:null,searchResults:null,suggestions:null,noDataSuggestion:null},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(m,{emit:_}){const o=m,{ctrl_k:K,meta_k:T}=j(),k=g(),i=g(structuredClone(f(o.searchQuery))),F=g(),S=g(structuredClone(f(o.isDialogVisible))),d=g(structuredClone(f(o.searchResults)));B(o,()=>{S.value=structuredClone(f(o.isDialogVisible)),d.value=structuredClone(f(o.searchResults)),i.value=structuredClone(f(o.searchQuery))}),B([K,T],()=>{S.value=!0,_("update:isDialogVisible",!0)});const v=()=>{_("update:isDialogVisible",!1),_("update:searchQuery","")};E(()=>{i.value.length||(d.value=[])});const M=e=>{var c,s;e.key==="ArrowDown"?(e.preventDefault(),(c=k.value)==null||c.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(s=k.value)==null||s.focus("prev"))},U=e=>{_("update:isDialogVisible",e),_("update:searchQuery","")},N=e=>e==="dashboards"?"Dashboards":e==="appsPages"?"Apps & Pages":e==="userInterface"?"User Interface":e==="formsTables"?"Forms Tables":e==="chartsMisc"?"Charts Misc":"Misc";return(e,c)=>(l(),y(ae,{"max-width":"600","model-value":r(S),height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":U,onKeyup:I(v,["esc"])},{default:t(()=>[a(G,{height:"100%",width:"100%",class:"position-relative"},{default:t(()=>[a($,{class:"pt-1",style:{"max-height":"65px"}},{default:t(()=>[a(W,{ref_key:"refSearchInput",ref:F,modelValue:r(i),"onUpdate:modelValue":[c[0]||(c[0]=s=>q(i)?i.value=s:null),c[1]||(c[1]=s=>e.$emit("update:searchQuery",r(i)))],autofocus:"",variant:"plain",density:"comfortable",class:"app-bar-autocomplete-box",onKeyup:I(v,["esc"]),onKeydown:M},{"prepend-inner":t(()=>[a(A,{icon:"",variant:"text",color:"default",size:"x-small",class:"text-high-emphasis ms-n1"},{default:t(()=>[a(u,{size:"22",icon:"tabler-search"})]),_:1})]),"append-inner":t(()=>[n("div",le,[n("div",{class:"text-base text-disabled cursor-pointer me-2",onClick:v}," [esc] "),a(A,{icon:"",variant:"text",color:"default",size:"x-small",onClick:v},{default:t(()=>[a(u,{size:"22",icon:"tabler-x"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),a(Y),a(r(H),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:t(()=>[C(a(r(R),{ref_key:"refSearchList",ref:k,density:"compact",class:"app-bar-search-list"},{default:t(()=>[(l(!0),p(V,null,x(r(d),s=>(l(),p(V,{key:s.title},["header"in s?(l(),y(r(Z),{key:0,class:"text-disabled"},{default:t(()=>[L(b(N(s.title)),1)]),_:2},1024)):D(e.$slots,"searchResult",{key:1,item:s},()=>[a(r(Q),{link:"",onClick:h=>e.$emit("itemSelected",s)},{prepend:t(()=>[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"])]),append:t(()=>[a(u,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon text-disabled"})]),default:t(()=>[a(ee,null,{default:t(()=>[L(b(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[w,r(i).length&&!!r(d).length]]),C(n("div",oe,[D(e.$slots,"suggestions",{},()=>[a($,{class:"app-bar-search-suggestions h-100 pa-10"},{default:t(()=>[o.suggestions?(l(),y(se,{key:0,class:"gap-y-4"},{default:t(()=>[(l(!0),p(V,null,x(o.suggestions,s=>(l(),y(te,{key:s.title,cols:"12",sm:"6",class:"ps-6"},{default:t(()=>[n("p",ie,b(s.title),1),a(r(R),{class:"card-list"},{default:t(()=>[(l(!0),p(V,null,x(s.content,h=>(l(),y(r(Q),{key:h.title,link:"",title:h.title,class:"app-bar-search-suggestion",onClick:_e=>e.$emit("itemSelected",h)},{prepend:t(()=>[a(u,{icon:h.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):z("",!0)]),_:1})],!0)],512),[[w,!!r(d)&&!r(i)]]),C(n("div",ne,[D(e.$slots,"noData",{},()=>[a($,{class:"h-100"},{default:t(()=>[n("div",ce,[a(u,{size:"75",icon:"tabler-file-x"}),n("h6",ue,' No Result For "'+b(r(i))+'" ',1),o.noDataSuggestion?(l(),p("div",pe,[de,(l(!0),p(V,null,x(o.noDataSuggestion,s=>(l(),p("h6",{key:s.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:h=>e.$emit("itemSelected",s)},[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"]),n("span",fe,b(s.title),1)],8,he))),128))])):z("",!0)])]),_:1})],!0)],512),[[w,!r(d).length&&r(i).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"]))}});const je=X(me,[["__scopeId","data-v-49961e29"]]);export{je as default};
