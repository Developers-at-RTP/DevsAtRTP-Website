module.exports=function(t){var e={},n={0:0};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.e=function(e){if(0!==n[e]){var o=require("./"+{1:"fd430bd07717e671a228",2:"3c8e1dea6a6852005459"}[e]+".js"),r=o.modules,c=o.ids;for(var l in r)t[l]=r[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},o.p="/_nuxt/",o.oe=function(t){process.nextTick(function(){throw t})},o(o.s=14)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function o(t,e,n,o,r,c,l,d){var f,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),o&&(h.functional=!0),c&&(h._scopeId="data-v-"+c),l?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},h._ssrRegister=f):r&&(f=d?function(){r.call(this,this.$root.$options.shadowRoot)}:r),f)if(h.functional){h._injectStyles=f;var m=h.render;h.render=function(t,e){return f.call(e),m(t,e)}}else{var x=h.beforeCreate;h.beforeCreate=x?[].concat(x,f):[f]}return{exports:t,options:h}}n.d(e,"a",function(){return o})},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var o=(c=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),r=n.sources.map(function(source){return"/*# sourceURL="+n.sourceRoot+source+" */"});return[content].concat(r).concat([o]).join("\n")}var c;return[content].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+content+"}":content}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(i=0;i<t.length;i++){var c=t[i];null!=c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},function(t,e,n){"use strict";function o(t,e,n,o){if(o||"undefined"==typeof __VUE_SSR_CONTEXT__||(o=__VUE_SSR_CONTEXT__),o){o.hasOwnProperty("styles")||(Object.defineProperty(o,"styles",{enumerable:!0,get:function(){return r(o._styles)}}),o._renderStyles=r);var c=o._styles||(o._styles={});e=function(t,e){for(var n=[],o={},i=0;i<e.length;i++){var r=e[i],c=r[0],l={id:t+":"+i,css:r[1],media:r[2],sourceMap:r[3]};o[c]?o[c].parts.push(l):n.push(o[c]={id:c,parts:[l]})}return n}(t,e),n?function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,o=0;o<n.length;o++){var r=n[o],c=r.media||"default",style=t[c];style?style.ids.indexOf(r.id)<0&&(style.ids.push(r.id),style.css+="\n"+r.css):t[c]={ids:[r.id],css:r.css,media:r.media}}}(c,e):function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,o=0;o<n.length;o++){var r=n[o];t[r.id]={ids:[r.id],css:r.css,media:r.media}}}(c,e)}}function r(t){var e="";for(var n in t){var style=t[n];e+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return e}n.r(e),n.d(e,"default",function(){return o})},function(t,e){t.exports=require("vuex")},function(t,e,n){var content=n(16);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("b675d82e",content,!0,t)}},function(t,e,n){var content=n(18);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("17cfdfa9",content,!0,t)}},function(t,e,n){var content=n(24);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("aab9a468",content,!0,t)}},function(t,e){t.exports=require("vue-router")},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e){t.exports=require("vue-no-ssr")},function(t,e){t.exports=require("axios")},function(t,e,n){t.exports=n(27)},function(t,e,n){"use strict";n.r(e);var o=n(5),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},function(t,e,n){"use strict";n.r(e);var o=n(6),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},function(t,e,n){var content=n(20);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(3).default("5ff0c5d0",content,!0)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"body{font-family:Ubuntu,sans-serif;font-size:16px}.container{margin:auto}.subhead{color:#4f4f4f;font-family:Trocchi,serif;font-weight:400;font-size:2.5em;margin:0 auto 1em}.illustration{max-width:80vw;margin:0 auto 2em}.midText{font-size:1.2em;margin-bottom:1em}.communityList{margin:1em auto}.text{padding:15px 0;text-align:left}",""])},function(t,e,n){var content=n(22);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(3).default("55032f9d",content,!0)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,'@media only screen and (min-width:550px){.main{margin:auto}}@media only screen and (min-width:800px){.teen-container{display:grid;grid-template-columns:3fr 6fr}.teen-container .teens-img{margin:auto}}@media only screen and (min-width:850px){*{color:purple}.main{display:grid;grid-template-areas:"left right";grid-gap:5em}.container-main{grid-area:left}.right{grid-area:right}.community-container{display:grid;grid-template-columns:1fr 1fr}.community-info{margin:auto}}@media only screen and (min-width:850px){*{color:#fff}.text{font-size:14px}}@media only screen and (min-width:950px){*{color:#fff}.main{max-width:900px}}',""])},function(t,e,n){"use strict";n.r(e);var o=n(7),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""])},function(t,e,n){"use strict";n.r(e);var o=n(4),r=n.n(o);e.default=()=>new r.a.Store({state:()=>({}),mutations:{increment(t){t.counter++}},modules:{main:{namespaced:!0,state:()=>({logo:"~/assets/imgs/DevsLogoW.svg"}),mutations:{add(t,{text:text}){t.list.push({text:text,done:!1})},remove(t,{todo:e}){t.list.splice(t.list.indexOf(e),1)},toggle(t,{todo:e}){e.done=!e.done}}},teens:{namespaced:!0,state:()=>({list:[]}),mutations:{add(t,{text:text}){t.list.push({text:text,done:!1})},remove(t,{todo:e}){t.list.splice(t.list.indexOf(e),1)},toggle(t,{todo:e}){e.done=!e.done}}}}})},function(t,e){},function(t,e,n){"use strict";n.r(e);var o=n(9),r=n(0),c=n.n(r),l=n(10),d=n.n(l);var f={};function h(t){return t.then(t=>t.default||t)}function m(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function x(t,e=!1){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).map(o=>(e&&e.push(n),t.components[o]))))}function y(t){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).reduce((o,r)=>(t.components[r]?o.push(e(t.components[r],t.instances[r],t,r,n)):delete t.components[r],o),[])))}(t,async(t,e,n,o)=>("function"!=typeof t||t.options||(t=await t()),n.components[o]=m(t),n.components[o])))}async function v(t){if(t)return await y(t),{...t,meta:x(t).map((e,n)=>({...e.options.meta,...(t.matched[n]||{}).meta}))}}async function _(t,e){t.context||(t.context={isStatic:!1,isDev:!1,isHMR:!1,app:t,store:t.store,payload:e.payload,error:e.error,base:"/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,n)=>{if(!e)return;t.context._redirected=!0;let o=typeof path;"number"==typeof e||"undefined"!==o&&"object"!==o||(n=path||{},o=typeof(path=e),e=302),"object"===o&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:n,status:e}):(path=function(t,e){let n;const o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));let r,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&([path,r]=c);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+n}).filter(Boolean).join("&")}(e));return l+=r?"#"+r:""}(path,n),t.context.next({path:path,status:e}))},t.context.beforeNuxtRender=t=>e.beforeRenderFns.push(t));const[n,o]=await Promise.all([v(e.route),v(e.from)]);e.route&&(t.context.route=n),e.from&&(t.context.from=o),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=Boolean(e.isHMR),t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function w(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():C(t[0],e).then(()=>w(t.slice(1),e))}function C(t,e){let n;return(n=2===t.length?new Promise(n=>{t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function $(t,e){return function(t){const e=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,o){let path="";const data=n||{},r=o||{},c=r.pretty?S:encodeURIComponent;for(let i=0;i<t.length;i++){const n=t[i];if("string"==typeof n){path+=n;continue}const o=data[n.name||"pathMatch"];let r;if(null==o){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(o)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(o)+"`");if(0===o.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let t=0;t<o.length;t++){if(r=c(o[t]),!e[i].test(r))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(r)+"`");path+=(0===t?n.prefix:n.delimiter)+r}}else{if(r=n.asterisk?encodeURI(o).replace(/[?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase()):c(o),!e[i].test(r))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+r+'"');path+=n.prefix+r}}return path}}(function(t,e){const n=[];let o=0,r=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=j.exec(t));){const e=l[0],d=l[1],f=l.index;if(path+=t.slice(r,f),r=f+e.length,d){path+=d[1];continue}const h=t[r],m=l[2],x=l[3],y=l[4],v=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const C=null!=m&&null!=h&&h!==m,$="+"===_||"*"===_,j="?"===_||"*"===_,S=l[2]||c,pattern=y||v;n.push({name:x||o++,prefix:m||"",delimiter:S,optional:j,repeat:$,partial:C,asterisk:Boolean(w),pattern:pattern?E(pattern):w?".*":"[^"+k(S)+"]+?"})}r<t.length&&(path+=t.substr(r));path&&n.push(path);return n}(t,e))}const j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function S(t){return encodeURI(t).replace(/[/?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function k(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function E(t){return t.replace(/([=!:$/()])/g,"\\$1")}var T=n(11),O=n.n(T),R=n(8),N=n.n(R);const P=()=>h(n.e(2).then(n.bind(null,69))),A=()=>h(n.e(1).then(n.bind(null,68)));c.a.use(N.a);const M=function(t,e,n){let o=!1;return t.matched.length<2&&t.matched.every(t=>!1!==t.components.default.options.scrollToTop)?o={x:0,y:0}:t.matched.some(t=>t.components.default.options.scrollToTop)&&(o={x:0,y:0}),n&&(o=n),new Promise(e=>{window.$nuxt.$once("triggerScroll",()=>{if(t.hash){let e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(o={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(o)})})};var B=n(12),L={...n.n(B).a,name:"NoSsr"},z={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:n}){data.nuxtChild=!0;const o=e,r=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition;let l=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&l++,e=e.$parent;data.nuxtChildDepth=l;const d=r[l]||c,f={};U.forEach(t=>{void 0!==d[t]&&(f[t]=d[t])});const h={};D.forEach(t=>{"function"==typeof d[t]&&(h[t]=d[t].bind(o))});const m=h.beforeEnter;h.beforeEnter=t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(o,t)};let x=[t("router-view",data)];return n.keepAlive&&(x=[t("keep-alive",{props:n.keepAliveProps},x)]),t("transition",{props:f,on:h},x)}};const U=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],D=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var I={name:"NuxtError",props:{error:{type:Object,default:null}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}}},V=n(1);var F=Object(V.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])},[],!1,function(t){var e=n(15);e.__inject__&&e.__inject__(t)},null,"0498f8a0").exports,Q={name:"Nuxt",components:{NuxtChild:z,NuxtError:F},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||$(this.$route.matched[0].path)(this.$route.params);const[t]=this.$route.matched;if(!t)return this.$route.path;const e=t.components.default;if(e&&e.options){const{options:t}=e;if(t.key)return"function"==typeof t.key?t.key(this.$route):t.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},H={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var K=Object(V.a)(H,void 0,void 0,!1,function(t){var e=n(17);e.__inject__&&e.__inject__(t)},null,"558f5638").exports;n(19),n(21);const J={_default:Object(V.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)},[],!1,function(t){var e=n(23);e.__inject__&&e.__inject__(t)},null,"8037dc1c").exports};var W={head:{title:"devsrtp",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"website for devs@RTP"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"devsrtp"},{hid:"author",name:"author",content:"Maria Lamardo"},{hid:"theme-color",name:"theme-color",content:"#fff"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"devsrtp"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"devsrtp"},{hid:"og:description",name:"og:description",property:"og:description",content:"website for devs@RTP"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"manifest",href:"/_nuxt/manifest.23373a8e.json"},{rel:"shortcut icon",href:"/_nuxt/icons/icon_64.9mld2VBMsQ$.png"},{rel:"apple-touch-icon",href:"/_nuxt/icons/icon_512.9mld2VBMsQ$.png",sizes:"512x512"}],style:[],script:[],htmlAttrs:{lang:"en"}},render(t,e){const n=t("NuxtLoading",{ref:"loading"}),o=t(this.layout||"nuxt"),r=t("div",{domProps:{id:"__layout"},key:this.layoutName},[o]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[r]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&J["_"+t]||(t="default"),this.layoutName=t,this.layout=J["_"+t],this.layout},loadLayout:t=>(t&&J["_"+t]||(t="default"),Promise.resolve(J["_"+t]))},components:{NuxtLoading:K}},X=n(4),G=n.n(X);c.a.use(G.a);let Y={};(Y=function(t,e){if((t=t.default||t).commit)throw new Error(`[nuxt] ${e} should export a method that returns a Vuex instance.`);return"function"!=typeof t&&(t=Object.assign({},t)),tt(t,e)}(n(25),"store/index.js")).modules=Y.modules||{};const Z=Y instanceof Function?Y:()=>new G.a.Store(Object.assign({strict:!1},Y));function tt(t,e){if(t.state&&"function"!=typeof t.state){console.warn(`'state' should be a method that returns an object in ${e}`);const n=Object.assign({},t.state);t=Object.assign({},t,{state:()=>n})}return t}n(26);var et=async function(t,e){const n={accessibleIcons:!0,iconProperty:"$icon",icons:{64:"/_nuxt/icons/icon_64.9mld2VBMsQ$.png",120:"/_nuxt/icons/icon_120.9mld2VBMsQ$.png",144:"/_nuxt/icons/icon_144.9mld2VBMsQ$.png",152:"/_nuxt/icons/icon_152.9mld2VBMsQ$.png",192:"/_nuxt/icons/icon_192.9mld2VBMsQ$.png",384:"/_nuxt/icons/icon_384.9mld2VBMsQ$.png",512:"/_nuxt/icons/icon_512.9mld2VBMsQ$.png"}};e(n.iconProperty.replace("$",""),nt(n.icons))};const nt=t=>e=>t[e]||"";var ot=n(13),it=n.n(ot);const st={setHeader(t,e,n="common"){for(let o of Array.isArray(n)?n:[n]){if(!e)return void delete this.defaults.headers[o][t];this.defaults.headers[o][t]=e}},setToken(t,e,n="common"){const o=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",o,n)},onRequest(t){this.interceptors.request.use(e=>t(e)||e)},onResponse(t){this.interceptors.response.use(e=>t(e)||e)},onRequestError(t){this.interceptors.request.use(void 0,e=>t(e)||Promise.reject(e))},onResponseError(t){this.interceptors.response.use(void 0,e=>t(e)||Promise.reject(e))},onError(t){this.onRequestError(t),this.onResponseError(t)}};for(let t of["request","delete","get","head","options","post","put","patch"])st["$"+t]=function(){return this[t].apply(this,arguments).then(t=>t&&t.data)};var at=(t,e)=>{const n={baseURL:process.env._AXIOS_BASE_URL_||"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"],delete n.headers.common["content-length"],n.headers.common["accept-encoding"]="gzip, deflate";const o=it.a.create(n);(t=>{for(let e in st)t[e]=st[e].bind(t)})(o),t.$axios=o,e("axios",o)};c.a.directive("grid",{bind:function(t,e){let n=e.value;t.style.display="grid",t.style.gridTemplateColumns=n}}),c.a.directive("maxWidth",{bind:function(t,e){let n=e.value;t.style.maxWidth=n,t.style.margin="auto"}}),c.a.component(L.name,L),c.a.component(z.name,z),c.a.component("NChild",z),c.a.component(Q.name,Q),c.a.use(O.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const ct={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function ut(t){const e=await new N.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:M,routes:[{path:"/teens",component:P,name:"teens"},{path:"/",component:A,name:"index"}],fallback:!1}),n=Z(t);n.$router=e;const o=n.registerModule;n.registerModule=(path,t,e)=>o.call(n,path,t,Object.assign({preserveState:!1},e));const r={router:e,store:n,nuxt:{defaultTransition:ct,transitions:[ct],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},ct,{name:t}):Object.assign({},ct,t):ct),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,r.context._errored=Boolean(e),e=e?function(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}(e):null;const n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=e,t&&(t.nuxt.error=e),e}},...W};n.app=r;const l=t?t.next:t=>r.router.push(t);let d;if(t)d=e.resolve(t.url).route;else{const path=function(base,t){let path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(e.options.base);d=e.resolve(path).route}await _(r,{route:d,next:l,error:r.nuxt.error.bind(r),store:n,payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t});const f=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e,n[t]=r[t];const o="__nuxt_"+t+"_installed__";c.a[o]||(c.a[o]=!0,c.a.use(()=>{c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get(){return this.$root.$options[t]}})}))};return"function"==typeof et&&await et(r.context,f),"function"==typeof at&&await at(r.context,f),t&&t.url&&await new Promise((n,o)=>{e.push(t.url,n,()=>{const o=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,r.context.route=await v(e),r.context.params=e.params||{},r.context.query=e.query||{},o(),n()})})}),{app:r,store:n,router:e}}var lt={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}}};c.a.component(lt.name,lt),c.a.component("NLink",lt),global.fetch||(global.fetch=d.a);const pt=()=>new c.a({render:t=>t("div")}),ft=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(o.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=async t=>{t.redirected=!1,t.next=ft(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],error:null,state:null,serverRendered:!0};const{app:e,router:n,store:o}=await ut(t),r=new c.a(e);t.meta=r.$meta(),t.asyncData={};const l=async()=>{await Promise.all(t.beforeRenderFns.map(e=>C(e,{Components:y,nuxtState:t.nuxt}))),t.rendered=()=>{t.nuxt.state=o.state}},d=async()=>{const n="function"==typeof F.layout?F.layout(e.context):F.layout;return t.nuxt.layout=n||"default",await r.loadLayout(n),r.setLayout(n),await l(),r},h=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),d()),y=x(n.match(t.url));if(o._actions&&o._actions.nuxtServerInit)try{await o.dispatch("nuxtServerInit",e.context)}catch(t){throw console.debug("Error occurred when calling nuxtServerInit: ",t.message),t}if(t.redirected)return pt();if(t.nuxt.error)return d();let v=[];if(v=v.map(t=>"function"==typeof t?t:("function"!=typeof f[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),f[t])),await w(v,e.context),t.redirected)return pt();if(t.nuxt.error)return d();let _=y.length?y[0].options.layout:F.layout;if("function"==typeof _&&(_=_(e.context)),await r.loadLayout(_),t.nuxt.error)return d();if(_=r.setLayout(_),t.nuxt.layout=r.layoutName,v=[],(_=m(_)).options.middleware&&(v=v.concat(_.options.middleware)),y.forEach(t=>{t.options.middleware&&(v=v.concat(t.options.middleware))}),v=v.map(t=>"function"==typeof t?t:("function"!=typeof f[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),f[t])),await w(v,e.context),t.redirected)return pt();if(t.nuxt.error)return d();let $=!0;try{for(const t of y)if("function"==typeof t.options.validate&&!($=await t.options.validate(e.context)))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),d()}if(!$)return t._generate&&(t.nuxt.serverRendered=!1),h();if(!y.length)return h();const j=await Promise.all(y.map(n=>{const o=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const r=C(n.options.asyncData,e.context);r.then(e=>(t.asyncData[n.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){const data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(n),e)),o.push(r)}else o.push(null);return n.options.fetch?o.push(n.options.fetch(e.context)):o.push(null),Promise.all(o)}));return t.nuxt.data=j.map(t=>t[0]||{}),t.redirected?pt():t.nuxt.error?d():(await l(),r)}}]);
//# sourceMappingURL=server.js.map