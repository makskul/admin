import{d as m,aY as p,o,b as l,w as e,p as n,A as u,c as g,F as f,a as _,z as d,x as L,t as h}from"./index.54e47bbc.js";import{V}from"./VMenu.67f78461.js";import{V as b,a as v,b as x}from"./VList.bccd5a25.js";import{V as C}from"./VBtn.604c43f4.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.7cf70aff.js";import"./VOverlay.7df1fde1.js";import"./router.0db38488.js";import"./lazy.3c73de8a.js";import"./easing.36b781ab.js";import"./VImg.cc1c5f29.js";import"./dialog-transition.f89215cd.js";import"./index.0fb74ba2.js";import"./VAvatar.29db4047.js";import"./VDivider.478efb1c.js";import"./position.d42c9754.js";const k=m({__name:"I18n",props:{languages:null,location:{default:"bottom end"}},emits:["change"],setup(c){const t=c,{locale:i}=p({useScope:"global"});return(r,s)=>(o(),l(C,{icon:"",variant:"text",color:"default",size:"small"},{default:e(()=>[n(u,{icon:"tabler-language",size:"24"}),n(V,{activator:"parent",location:t.location,offset:"14px"},{default:e(()=>[n(b,{"min-width":"175px"},{default:e(()=>[(o(!0),g(f,null,_(t.languages,a=>(o(),l(v,{key:a.i18nLang,value:a.i18nLang,onClick:I=>{i.value=a.i18nLang,r.$emit("change",a.i18nLang)}},{default:e(()=>[n(x,null,{default:e(()=>[d(L(a.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["location"])]),_:1}))}}),q=m({__name:"NavBarI18n",setup(c){const{isAppRtl:t}=h(),i=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],r=s=>{t.value=s==="ar"};return(s,a)=>(o(),l(k,{languages:i,onChange:r}))}});export{q as default};