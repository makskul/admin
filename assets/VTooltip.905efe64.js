import{aa as y,ab as O,ac as b,ad as h,a1 as o,k as S,a0 as x,p as C,C as d}from"./index.3aea8822.js";import{u as T}from"./scopeId.f08362ca.js";import{f as $}from"./forwardRefs.c003b6b8.js";import{m as w,f as A,a as I}from"./VOverlay.ce4a9159.js";const H=y()({name:"VTooltip",props:{id:String,text:String,...O(w({closeOnBack:!1,location:"end",locationStrategy:"connected",minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent","eager"])},emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:i}=v;const n=b(t,"modelValue"),{scopeId:f}=T(),m=h(),r=o(()=>t.id||`v-tooltip-${m}`),l=S(),g=o(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=o(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=o(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition");return x(()=>{const[p]=A(t);return C(I,d({ref:l,class:["v-tooltip"],id:r.value},p,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",eager:!0,activatorProps:d({"aria-describedby":r.value},t.activatorProps)},f),{activator:i.activator,default:function(){var u;for(var e,s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(u=(e=i.default)==null?void 0:e.call(i,...c))!=null?u:t.text}})}),$({},l)}});export{H as V};
