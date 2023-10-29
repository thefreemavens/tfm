import{a3 as H,z as C,a4 as K,R as Q,a5 as I,V as D,O as q,B as W,j as J,a6 as V,L as G,a7 as Y,k as x,$ as X,a1 as Z,a8 as ee,l as te,i as re,a9 as ne,E as se,a2 as ie,K as ae}from"./entry.3aef6799.js";import{u as E}from"./preview.cf022f69.js";function oe(...s){var w;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[n,t,e={}]=s;if(typeof n!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=W(),i=()=>null,l=()=>a.isHydrating?a.payload.data[n]:a.static.data[n];e.server=e.server??!0,e.default=e.default??i,e.getCachedData=e.getCachedData??l,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??H.deep;const u=()=>![null,void 0].includes(e.getCachedData(n));if(!a._asyncData[n]||!e.immediate){(w=a.payload._errors)[n]??(w[n]=null);const h=e.deep?C:K;a._asyncData[n]={data:h(e.getCachedData(n)??e.default()),pending:C(!u()),error:Q(a.payload._errors,n),status:C("idle")}}const c={...a._asyncData[n]};c.refresh=c.execute=(h={})=>{if(a._asyncDataPromises[n]){if(h.dedupe===!1)return a._asyncDataPromises[n];a._asyncDataPromises[n].cancelled=!0}if((h._initial||a.isHydrating&&h._initial!==!1)&&u())return Promise.resolve(e.getCachedData(n));c.pending.value=!0,c.status.value="pending";const o=new Promise((p,g)=>{try{p(t(a))}catch(b){g(b)}}).then(p=>{if(o.cancelled)return a._asyncDataPromises[n];let g=p;e.transform&&(g=e.transform(p)),e.pick&&(g=ce(g,e.pick)),c.data.value=g,c.error.value=null,c.status.value="success"}).catch(p=>{if(o.cancelled)return a._asyncDataPromises[n];c.error.value=p,c.data.value=J(e.default()),c.status.value="error"}).finally(()=>{o.cancelled||(c.pending.value=!1,a.payload.data[n]=c.data.value,c.error.value&&(a.payload._errors[n]=V(c.error.value)),delete a._asyncDataPromises[n])});return a._asyncDataPromises[n]=o,a._asyncDataPromises[n]};const d=()=>c.refresh({_initial:!0}),y=e.server!==!1&&a.payload.serverRendered;{const h=G();if(h&&!h._nuxtOnBeforeMountCbs){h._nuxtOnBeforeMountCbs=[];const p=h._nuxtOnBeforeMountCbs;h&&(I(()=>{p.forEach(g=>{g()}),p.splice(0,p.length)}),D(()=>p.splice(0,p.length)))}c.error.value||y&&a.isHydrating&&u()?(c.pending.value=!1,c.status.value=c.error.value?"error":"success"):h&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?h._nuxtOnBeforeMountCbs.push(d):e.immediate&&d(),e.watch&&q(e.watch,()=>c.refresh());const o=a.hook("app:data:refresh",async p=>{(!p||p.includes(n))&&await c.refresh()});h&&D(o)}const f=Promise.resolve(a._asyncDataPromises[n]).then(()=>c);return Object.assign(f,c),f}function ce(s,r){const n={};for(const t of r)n[t]=s[t];return n}const O=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ue(s,r){r?r={...O,...r}:r=O;const n=L(r);return n.dispatch(s),n.toString()}const le=Object.freeze(["prototype","__proto__","constructor"]);function L(s){let r="",n=new Map;const t=e=>{r+=e};return{toString(){return r},getContext(){return n},dispatch(e){return s.replacer&&(e=s.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const a=Object.prototype.toString.call(e);let i="";const l=a.length;l<10?i="unknown:["+a+"]":i=a.slice(8,l-1),i=i.toLowerCase();let u=null;if((u=n.get(e))===void 0)n.set(e,n.size);else return this.dispatch("[CIRCULAR:"+u+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](e):s.ignoreUnknown||this.unkown(e,i);else{let c=Object.keys(e);s.unorderedObjects&&(c=c.sort());let d=[];s.respectType!==!1&&!A(e)&&(d=le),s.excludeKeys&&(c=c.filter(f=>!s.excludeKeys(f)),d=d.filter(f=>!s.excludeKeys(f))),t("object:"+(c.length+d.length)+":");const y=f=>{this.dispatch(f),t(":"),s.excludeValues||this.dispatch(e[f]),t(",")};for(const f of c)y(f);for(const f of d)y(f)}},array(e,a){if(a=a===void 0?s.unorderedArrays!==!1:a,t("array:"+e.length+":"),!a||e.length<=1){for(const u of e)this.dispatch(u);return}const i=new Map,l=e.map(u=>{const c=L(s);c.dispatch(u);for(const[d,y]of c.getContext())i.set(d,y);return c.toString()});return n=i,l.sort(),this.array(l,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,a){if(t(a),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),A(e)?this.dispatch("[native]"):this.dispatch(e.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),s.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const a=[...e];return this.array(a,s.unorderedSets!==!1)},set(e){t("set:");const a=[...e];return this.array(a,s.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(s.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const N="[native code] }",fe=N.length;function A(s){return typeof s!="function"?!1:Function.prototype.toString.call(s).slice(-fe)===N}class _{constructor(r,n){r=this.words=r||[],this.sigBytes=n===void 0?r.length*4:n}toString(r){return(r||he).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let n=0;n<r.sigBytes;n++){const t=r.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=t<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<r.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=r.words[n>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new _([...this.words])}}const he={stringify(s){const r=[];for(let n=0;n<s.sigBytes;n++){const t=s.words[n>>>2]>>>24-n%4*8&255;r.push((t>>>4).toString(16),(t&15).toString(16))}return r.join("")}},de={stringify(s){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let t=0;t<s.sigBytes;t+=3){const e=s.words[t>>>2]>>>24-t%4*8&255,a=s.words[t+1>>>2]>>>24-(t+1)%4*8&255,i=s.words[t+2>>>2]>>>24-(t+2)%4*8&255,l=e<<16|a<<8|i;for(let u=0;u<4&&t*8+u*6<s.sigBytes*8;u++)n.push(r.charAt(l>>>6*(3-u)&63))}return n.join("")}},pe={parse(s){const r=s.length,n=[];for(let t=0;t<r;t++)n[t>>>2]|=(s.charCodeAt(t)&255)<<24-t%4*8;return new _(n,r)}},ye={parse(s){return pe.parse(unescape(encodeURIComponent(s)))}};class ge{constructor(){this._data=new _,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new _,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=ye.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,n){}_process(r){let n,t=this._data.sigBytes/(this.blockSize*4);r?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,a=Math.min(e*4,this._data.sigBytes);if(e){for(let i=0;i<e;i+=this.blockSize)this._doProcessBlock(this._data.words,i);n=this._data.words.splice(0,e),this._data.sigBytes-=a}return new _(n,a)}}class me extends ge{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const $=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],we=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],v=[];class _e extends me{constructor(){super(...arguments),this._hash=new _([...$])}reset(){super.reset(),this._hash=new _([...$])}_doProcessBlock(r,n){const t=this._hash.words;let e=t[0],a=t[1],i=t[2],l=t[3],u=t[4],c=t[5],d=t[6],y=t[7];for(let f=0;f<64;f++){if(f<16)v[f]=r[n+f]|0;else{const B=v[f-15],M=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,S=v[f-2],U=(S<<15|S>>>17)^(S<<13|S>>>19)^S>>>10;v[f]=M+v[f-7]+U+v[f-16]}const w=u&c^~u&d,h=e&a^e&i^a&i,o=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),p=(u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25),g=y+p+w+we[f]+v[f],b=o+h;y=d,d=c,c=u,u=l+g|0,l=i,i=a,a=e,e=g+b|0}t[0]=t[0]+e|0,t[1]=t[1]+a|0,t[2]=t[2]+i|0,t[3]=t[3]+l|0,t[4]=t[4]+u|0,t[5]=t[5]+c|0,t[6]=t[6]+d|0,t[7]=t[7]+y|0}finalize(r){super.finalize(r);const n=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(t+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ve(s){return new _e().finalize(s).toString(de)}function k(s,r={}){const n=typeof s=="string"?s:ue(s,r);return ve(n).slice(0,10)}const R=(s,r)=>r.split(".").reduce((n,t)=>n&&n[t],s),P=(s,r)=>Object.keys(s).filter(r).reduce((n,t)=>Object.assign(n,{[t]:s[t]}),{}),$e=s=>r=>s&&s.length?P(r,n=>!s.includes(n)):r,Re=s=>r=>Array.isArray(r)?r.map(n=>s(n)):s(r),T=s=>{const r=[],n=[];for(const t of s)["$","_"].includes(t)?r.push(t):n.push(t);return{prefixes:r,properties:n}},je=(s=[])=>r=>{if(s.length===0||!r)return r;const{prefixes:n,properties:t}=T(s);return P(r,e=>!t.includes(e)&&!n.includes(e[0]))},ze=(s=[])=>r=>{if(s.length===0||!r)return r;const{prefixes:n,properties:t}=T(s);return P(r,e=>t.includes(e)||n.includes(e[0]))},qe=(s,r)=>{const n=new Intl.Collator(r.$locale,{numeric:r.$numeric,caseFirst:r.$caseFirst,sensitivity:r.$sensitivity}),t=Object.keys(r).filter(e=>!e.startsWith("$"));for(const e of t)s=s.sort((a,i)=>{const l=[R(a,e),R(i,e)].map(u=>{if(u!==null)return u instanceof Date?u.toISOString():u});return r[e]===-1&&l.reverse(),n.compare(l[0],l[1])});return s},Ee=(s,r="Expected an array")=>{if(!Array.isArray(s))throw new TypeError(r)},m=s=>Array.isArray(s)?s:[void 0,null].includes(s)?[]:[s],be=["sort","where","only","without"];function Be(s,r={}){const n={};for(const i of Object.keys(r.initialParams||{}))n[i]=be.includes(i)?m(r.initialParams[i]):r.initialParams[i];const t=(i,l=u=>u)=>(...u)=>(n[i]=l(...u),a),e=i=>{var l;return r.legacy?i!=null&&i.surround?i.surround:i&&(i!=null&&i.dirConfig&&(i.result={_path:(l=i.dirConfig)==null?void 0:l._path,...i.result,_dir:i.dirConfig}),i!=null&&i._path||Array.isArray(i)||!Object.prototype.hasOwnProperty.call(i,"result")?i:i==null?void 0:i.result):i},a={params:()=>({...n,...n.where?{where:[...m(n.where)]}:{},...n.sort?{sort:[...m(n.sort)]}:{}}),only:t("only",m),without:t("without",m),where:t("where",i=>[...m(n.where),...m(i)]),sort:t("sort",i=>[...m(n.sort),...m(i)]),limit:t("limit",i=>parseInt(String(i),10)),skip:t("skip",i=>parseInt(String(i),10)),find:()=>s(a).then(e),findOne:()=>s(t("first")(!0)).then(e),count:()=>s(t("count")(!0)).then(e),locale:i=>a.where({_locale:i}),withSurround:t("surround",(i,l)=>({query:i,...l})),withDirConfig:()=>t("dirConfig")(!0)};return r.legacy&&(a.findSurround=(i,l)=>a.withSurround(i,l).find().then(e)),a}function F(s){return JSON.stringify(s,Se)}function Se(s,r){return r instanceof RegExp?`--REGEX ${r.toString()}`:r}const xe=s=>{let r=F(s);return r=typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r),r=r.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(r.match(/.{1,100}/g)||[]).join("/")},j=s=>Y(s,x().public.content.api.baseURL),Ce=()=>{const{experimental:s}=x().public.content;return s.clientDB?!0:E().isEnabled()},ke=()=>async s=>{const{content:r}=x().public,n=s.params(),t=r.experimental.stripQueryParameters?j(`/query/${`${k(n)}.${r.integrity}`}/${xe(n)}.json`):j(`/query/${k(n)}.${r.integrity}.json`);if(Ce())return(await te(()=>import("./client-db.c43399d2.js"),["./client-db.c43399d2.js","./entry.3aef6799.js","./entry.5626fec3.css","./index.288f722b.js","./preview.cf022f69.js"],import.meta.url).then(i=>i.useContentDatabase())).fetch(s);const e=await $fetch(t,{method:"GET",responseType:"json",params:r.experimental.stripQueryParameters?void 0:{_params:F(n),previewToken:E().getPreviewToken()}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};function z(s,...r){const{content:n}=x().public,t=Be(ke(),{initialParams:typeof s!="string"?s:{},legacy:!0});let e;typeof s=="string"&&(e=X(Z(s,...r)));const a=t.params;return t.params=()=>{var l,u,c;const i=a();return e&&(i.where=i.where||[],i.first&&(i.where||[]).length===0?i.where.push({_path:ee(e)}):i.where.push({_path:new RegExp(`^${e.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(l=i.sort)!=null&&l.length||(i.sort=[{_file:1,$numeric:!0}]),n.locales.length&&((c=(u=i.where)==null?void 0:u.find(y=>y._locale))!=null&&c._locale||(i.where=i.where||[],i.where.push({_locale:n.defaultLocale}))),i},t}const Pe=re({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(s){const{path:r,only:n,without:t,where:e,sort:a,limit:i,skip:l,locale:u,find:c}=ne(s),d=se(()=>{var o;return(o=r.value)==null?void 0:o.includes("/_")}),y=!x().public.content.experimental.advanceQuery;q(()=>s,()=>h(),{deep:!0});const f=o=>y?o!=null&&o.surround?o.surround:o!=null&&o._id||Array.isArray(o)?o:o==null?void 0:o.result:o.result,{data:w,refresh:h}=await oe(`content-query-${k(s)}`,()=>{let o;return r.value?o=z(r.value):o=z(),n.value&&(o=o.only(n.value)),t.value&&(o=o.without(t.value)),e.value&&(o=o.where(e.value)),a.value&&(o=o.sort(a.value)),i.value&&(o=o.limit(i.value)),l.value&&(o=o.skip(l.value)),u.value&&(o=o.where({_locale:u.value})),c.value==="one"?o.findOne().then(f):c.value==="surround"?r.value?y?o.findSurround(r.value):o.withSurround(r.value).findOne().then(f):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),o.find().then(f)):o.find().then(f)});return{isPartial:d,data:w,refresh:h}},render(s){var p;const r=ie(),{data:n,refresh:t,isPartial:e,path:a,only:i,without:l,where:u,sort:c,limit:d,skip:y,locale:f,find:w}=s,h={path:a,only:i,without:l,where:u,sort:c,limit:d,skip:y,locale:f,find:w};if(h.find==="one"){if(!n&&(r!=null&&r["not-found"]))return r["not-found"]({props:h,...this.$attrs});if(r!=null&&r.empty&&(n==null?void 0:n._type)==="markdown"&&!((p=n==null?void 0:n.body)!=null&&p.children.length))return r.empty({props:h,...this.$attrs})}else if((!n||!n.length)&&r!=null&&r["not-found"])return r["not-found"]({props:h,...this.$attrs});return r!=null&&r.default?r.default({data:n,refresh:t,isPartial:e,props:h,...this.$attrs}):((g,b)=>ae("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:g,data:b},null,2)))("default",{data:n,props:h,isPartial:e})}}),De=Pe,Le=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"}));export{Le as C,De as _,Ee as a,m as b,qe as c,Re as d,xe as e,je as f,R as g,k as h,ze as i,F as j,Be as k,$e as o,z as q,Ce as s,oe as u,j as w};