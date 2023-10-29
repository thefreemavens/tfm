import{F as C,f as S}from"./index.749838bb.js";import{x as B,z as d,D as x,A as F,g as h,w as r,j as s,B as q,o as N,a as t,d as c,t as z,b as u,E as _,h as A,C as L,e as M}from"./entry.f3fe8204.js";import{_ as T}from"./AppSection.f494a713.js";const D={class:"container relative mx-auto"},K=t("br",null,null,-1),j={class:""},E={class:"grid grid-cols-1 gap-8 lg:grid-cols-2"},H={class:"lg:col-start-2 lg:max-w-xl"},P={class:"relative"},R=t("span",{class:"flex mt-2 text-xs"},[t("span",{class:"block w-3.5 h-3.5 me-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z","clip-rule":"evenodd"})])]),c(" All submissions are kept secure and private. ")],-1),O={__name:"update",setup($){const{$pb:g}=q(),e=B("maven",()=>""),b=d(""),f=d(""),n=d(""),p=x({get(){return e.value.name.split(" ")[0]},set(a){b.value=a}}),v=x({get(){return e.value.name.split(" ")[1]},set(a){f.value=a}}),V=x({get(){return e.value.username},set(a){n.value=a}}),w=d(e.value.email),m=d(e.value.telegram),y=async()=>{try{const a={name:b.value+" "+f.value,username:n.value,telegram:m.value},l=await g.collection("users").update(e.value.id,a);L("/maven/account")}catch(a){alert(a.message)}};return F(()=>{g.authStore.onChange(()=>{e.value=g.authStore.model},!0),b.value=p.value,f.value=v.value,n.value=V.value,m.value=e.value.telegram,w.value=e.value.email}),(a,l)=>{const i=S,k=M,U=T;return N(),h(s(C),{"config-file":"true"},{default:r(()=>[t("main",D,[s(e)?(N(),h(U,{key:0,class:"md:pb-0 lg:pb-0"},{title:r(()=>[c(" Hello,"),K,c(" "+z(s(e).name.split(" ")[0]),1)]),desc:r(()=>[c(" Update your Maven page ")]),default:r(()=>[t("section",j,[t("div",E,[t("div",H,[u(i,{type:"form",onSubmit:y,"submit-label":"Update"},{default:r(()=>[u(i,{type:"text",name:"firstName",id:"firstName",label:"First Name",validation:"required|alpha:latin",modelValue:s(p),"onUpdate:modelValue":l[0]||(l[0]=o=>_(p)?p.value=o:null)},null,8,["modelValue"]),u(i,{type:"text",name:"lastName",id:"lastName",label:"Last Name",validation:"required|alpha:latin",modelValue:s(v),"onUpdate:modelValue":l[1]||(l[1]=o=>_(v)?v.value=o:null)},null,8,["modelValue"]),u(i,{type:"text",name:"username",id:"username",label:"Username",validation:"required|alphanumeric",modelValue:s(n),"onUpdate:modelValue":l[2]||(l[2]=o=>_(n)?n.value=o:null)},null,8,["modelValue"]),u(i,{type:"text",name:"telegram",id:"telegram",label:"Telegram @name",validation:"required|alphanumeric",modelValue:s(m),"onUpdate:modelValue":l[3]||(l[3]=o=>_(m)?m.value=o:null)},null,8,["modelValue"])]),_:1}),t("div",P,[R,u(k,{to:"/maven/login",class:"absolute right-0 -bottom-0.5 pb-0.5 text-xs font-bold text-center uppercase border-b border-transparent hover:border-black dark:hover:border-white"},{default:r(()=>[c(" Cancel ")]),_:1})])])])])]),_:1})):A("",!0)])]),_:1})}}};export{O as default};
