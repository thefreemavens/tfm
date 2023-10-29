import{F as v,f as h}from"./index.749838bb.js";import{z as m,x as b,A as f,g as w,w as d,j as c,B as k,o as V,a as t,b as o,E as x,d as u,C as y,e as B}from"./entry.f3fe8204.js";const C={class:"container relative mx-auto"},N={class:"mx-4 --border-t pt-8 pb-8 lg:pt-12 lg:pb-20"},S={class:"grid grid-cols-1 lg:grid-cols-2 gap-8"},z=t("div",{class:"--hidden lg:block mt-0 mb-4 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl"},"--->",-1),L=t("h2",{class:"py-0 mb-4 md:mb-10 flex flex-col text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter lg:col-start-2 lg:max-w-xl"}," Login ",-1),A=t("h3",{class:"lg:col-span-1 lg:col-start-2 lg:max-w-xl text-xl md:text-2xl lg:text-3xl pt-12 border-t pb-4 tracking-tight leading-normal md:leading-normal lg:leading-normal"}," Glad to see you again ",-1),F={class:"lg:col-start-2"},P={class:"grid grid-cols-1 gap-8 lg:grid-cols-1"},q={class:"lg:col-start-1 lg:max-w-xl"},E={class:"relative"},K=t("span",{class:"flex mt-2 text-xs"},[t("span",{class:"block w-3.5 h-3.5 me-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z","clip-rule":"evenodd"})])]),u(" All applications are kept secure and private. ")],-1),j={__name:"login",setup(M){const{$pb:s}=k(),e=m(""),a=m(""),g=b("maven",()=>""),p=async()=>{try{const n=await s.collection("users").authWithPassword(e.value,a.value);y("/maven/account")}catch(n){alert(n.message)}};return f(()=>{s.authStore.onChange(()=>{g.value=s.authStore.model},!0)}),(n,l)=>{const r=h,_=B;return V(),w(c(v),{"config-file":"true"},{default:d(()=>[t("main",C,[t("section",N,[t("div",S,[z,L,A,t("section",F,[t("div",P,[t("div",q,[o(r,{type:"form",onSubmit:p,"submit-label":"Login"},{default:d(()=>[o(r,{type:"text",name:"email",id:"email",label:"Email",validation:"required|*email",modelValue:c(e),"onUpdate:modelValue":l[0]||(l[0]=i=>x(e)?e.value=i:null)},null,8,["modelValue"]),o(r,{type:"password",name:"password",id:"password",label:"Password",validation:"required",modelValue:c(a),"onUpdate:modelValue":l[1]||(l[1]=i=>x(a)?a.value=i:null)},null,8,["modelValue"])]),_:1}),t("div",E,[K,o(_,{to:"/maven/initiation",class:"absolute right-0 -bottom-0.5 pb-0.5 text-xs font-bold text-center uppercase border-b border-transparent hover:border-black dark:hover:border-white"},{default:d(()=>[u(" Signup ")]),_:1})])])])])])])])]),_:1})}}};export{j as default};
