webpackJsonp([2],[function(t,e,n){"use strict";var o=n(3),r=n(2),i=n(18),u=n(12);o.use(r),o.use(i);var s=new r(n(7));new o({el:"#app",router:s,render:function(t){return t(u)},watch:{$route:function(t,e){var n=t.path.split("/").length,o=e.path.split("/").length;this.transitionName=n<o?"slide-right":"slide-left"}}})},function(t,e){t.exports=function(t,e,n,o){var r,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(r=t,i=t.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),o){var a=s.computed||(s.computed={});Object.keys(o).forEach(function(t){var e=o[t];a[t]=function(){return e}})}return{esModule:r,exports:i,options:s}}},,,function(t,e){"use strict"},,,function(t,e,n){"use strict";t.exports={routes:[{path:"/intro",component:function(t){return n.e(0,function(){return t(n(14))})}},{path:"/game",component:function(t){return n.e(0,function(){return t(n(13))})}}]}},,,,,function(t,e,n){var o=n(1)(n(4),n(16),null,null);t.exports=o.exports},,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"main"},[n("router-link",{staticClass:"link-1",attrs:{to:"/intro"}},[t._v("intro")]),t._v(" "),n("router-link",{staticClass:"link-1",attrs:{to:"/game"}},[t._v("game")])],1),t._v(" "),n("transition",[n("router-view")],1)],1)},staticRenderFns:[]}},,function(t,e,n){/*!
	 * vue-resource v1.2.1
	 * https://github.com/pagekit/vue-resource
	 * Released under the MIT License.
	 */
"use strict";function o(t){this.state=X,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}function r(t,e){t instanceof Promise?this.promise=t:this.promise=new Promise(t.bind(e)),this.context=e}function i(t){"undefined"!=typeof console&&tt&&console.warn("[VueResource warn]: "+t)}function u(t){"undefined"!=typeof console&&console.error(t)}function s(t,e){return z(t,e)}function a(t){return t?t.replace(/^\s*|\s*$/g,""):""}function c(t){return t?t.toLowerCase():""}function f(t){return t?t.toUpperCase():""}function p(t){return"string"==typeof t}function h(t){return"function"==typeof t}function l(t){return null!==t&&"object"==typeof t}function d(t){return l(t)&&Object.getPrototypeOf(t)==Object.prototype}function m(t){return"undefined"!=typeof Blob&&t instanceof Blob}function v(t){return"undefined"!=typeof FormData&&t instanceof FormData}function y(t,e,n){var o=r.resolve(t);return arguments.length<2?o:o.then(e,n)}function b(t,e,n){return n=n||{},h(n)&&(n=n.call(e)),w(t.bind({$vm:e,$options:n}),t,{$options:n})}function g(t,e){var n,o;if(ot(t))for(n=0;n<t.length;n++)e.call(t[n],t[n],n);else if(l(t))for(o in t)Q.call(t,o)&&e.call(t[o],t[o],o);return t}function w(t){var e=Z.call(arguments,1);return e.forEach(function(e){j(t,e,!0)}),t}function x(t){var e=Z.call(arguments,1);return e.forEach(function(e){for(var n in e)void 0===t[n]&&(t[n]=e[n])}),t}function T(t){var e=Z.call(arguments,1);return e.forEach(function(e){j(t,e)}),t}function j(t,e,n){for(var o in e)n&&(d(e[o])||ot(e[o]))?(d(e[o])&&!d(t[o])&&(t[o]={}),ot(e[o])&&!ot(t[o])&&(t[o]=[]),j(t[o],e[o],n)):void 0!==e[o]&&(t[o]=e[o])}function E(t,e,n){var o=O(t),r=o.expand(e);return n&&n.push.apply(n,o.vars),r}function O(t){var e=["+","#",".","/",";","?","&"],n=[];return{vars:n,expand:function(o){return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(t,r,i){if(r){var u=null,s=[];if(e.indexOf(r.charAt(0))!==-1&&(u=r.charAt(0),r=r.substr(1)),r.split(/,/g).forEach(function(t){var e=/([^:\*]*)(?::(\d+)|(\*))?/.exec(t);s.push.apply(s,P(o,u,e[1],e[2]||e[3])),n.push(e[1])}),u&&"+"!==u){var a=",";return"?"===u?a="&":"#"!==u&&(a=u),(0!==s.length?u:"")+s.join(a)}return s.join(",")}return U(i)})}}}function P(t,e,n,o){var r=t[n],i=[];if(C(r)&&""!==r)if("string"==typeof r||"number"==typeof r||"boolean"==typeof r)r=r.toString(),o&&"*"!==o&&(r=r.substring(0,parseInt(o,10))),i.push(R(e,r,$(e)?n:null));else if("*"===o)Array.isArray(r)?r.filter(C).forEach(function(t){i.push(R(e,t,$(e)?n:null))}):Object.keys(r).forEach(function(t){C(r[t])&&i.push(R(e,r[t],t))});else{var u=[];Array.isArray(r)?r.filter(C).forEach(function(t){u.push(R(e,t))}):Object.keys(r).forEach(function(t){C(r[t])&&(u.push(encodeURIComponent(t)),u.push(R(e,r[t].toString())))}),$(e)?i.push(encodeURIComponent(n)+"="+u.join(",")):0!==u.length&&i.push(u.join(","))}else";"===e?i.push(encodeURIComponent(n)):""!==r||"&"!==e&&"?"!==e?""===r&&i.push(""):i.push(encodeURIComponent(n)+"=");return i}function C(t){return void 0!==t&&null!==t}function $(t){return";"===t||"&"===t||"?"===t}function R(t,e,n){return e="+"===t||"#"===t?U(e):encodeURIComponent(e),n?encodeURIComponent(n)+"="+e:e}function U(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function k(t,e){var n,o=this||{},r=t;return p(t)&&(r={url:t,params:e}),r=w({},k.options,o.$options,r),k.transforms.forEach(function(t){n=A(t,n,o.$vm)}),n(r)}function A(t,e,n){return function(o){return t.call(n,o,e)}}function S(t,e,n){var o,r=ot(e),i=d(e);g(e,function(e,u){o=l(e)||ot(e),n&&(u=n+"["+(i||o?u:"")+"]"),!n&&r?t.add(e.name,e.value):o?S(t,e,u):t.add(u,e)})}function I(t){var e=t.match(/^\[|^\{(?!\{)/),n={"[":/]$/,"{":/}$/};return e&&n[e[0]].test(t)}function H(t,e){var n=t.client||(et?bt:gt);e(n(t))}function B(t,e){return Object.keys(t).reduce(function(t,n){return c(e)===c(n)?n:t},null)}function F(t){if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return a(t)}function L(t){return new r(function(e){var n=new FileReader;n.readAsText(t),n.onload=function(){e(n.result)}})}function _(t){return 0===t.type.indexOf("text")||t.type.indexOf("json")!==-1}function M(t){var e=this||{},n=wt(e.$vm);return x(t||{},e.$options,M.options),M.interceptors.forEach(function(t){n.use(t)}),n(new jt(t)).then(function(t){return t.ok?t:r.reject(t)},function(t){return t instanceof Error&&u(t),r.reject(t)})}function N(t,e,n,o){var r=this||{},i={};return n=rt({},N.actions,n),g(n,function(n,u){n=w({url:t,params:rt({},e)},o,n),i[u]=function(){return(r.$http||M)(q(n,arguments))}}),i}function q(t,e){var n,o=rt({},t),r={};switch(e.length){case 2:r=e[0],n=e[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(o.method)?n=e[0]:r=e[0];break;case 0:break;default:throw"Expected up to 2 arguments [params, body], got "+e.length+" arguments"}return o.body=n,o.params=rt({},o.params,r),o}function J(t){J.installed||(nt(t),t.url=k,t.http=M,t.resource=N,t.Promise=r,Object.defineProperties(t.prototype,{$url:{get:function(){return b(t.url,this,this.$options.url)}},$http:{get:function(){return b(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var e=this;return function(n){return new t.Promise(n,e)}}}}))}var D=0,W=1,X=2;o.reject=function(t){return new o(function(e,n){n(t)})},o.resolve=function(t){return new o(function(e,n){e(t)})},o.all=function(t){return new o(function(e,n){function r(n){return function(o){u[n]=o,i+=1,i===t.length&&e(u)}}var i=0,u=[];0===t.length&&e(u);for(var s=0;s<t.length;s+=1)o.resolve(t[s]).then(r(s),n)})},o.race=function(t){return new o(function(e,n){for(var r=0;r<t.length;r+=1)o.resolve(t[r]).then(e,n)})};var G=o.prototype;G.resolve=function(t){var e=this;if(e.state===X){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var o=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(t){return void(n||e.reject(t))}e.state=D,e.value=t,e.notify()}},G.reject=function(t){var e=this;if(e.state===X){if(t===e)throw new TypeError("Promise settled with itself.");e.state=W,e.value=t,e.notify()}},G.notify=function(){var t=this;s(function(){if(t.state!==X)for(;t.deferred.length;){var e=t.deferred.shift(),n=e[0],o=e[1],r=e[2],i=e[3];try{t.state===D?r("function"==typeof n?n.call(void 0,t.value):t.value):t.state===W&&("function"==typeof o?r(o.call(void 0,t.value)):i(t.value))}catch(t){i(t)}}})},G.then=function(t,e){var n=this;return new o(function(o,r){n.deferred.push([t,e,o,r]),n.notify()})},G.catch=function(t){return this.then(void 0,t)},"undefined"==typeof Promise&&(window.Promise=o),r.all=function(t,e){return new r(Promise.all(t),e)},r.resolve=function(t,e){return new r(Promise.resolve(t),e)},r.reject=function(t,e){return new r(Promise.reject(t),e)},r.race=function(t,e){return new r(Promise.race(t),e)};var V=r.prototype;V.bind=function(t){return this.context=t,this},V.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),new r(this.promise.then(t,e),this.context)},V.catch=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new r(this.promise.catch(t),this.context)},V.finally=function(t){return this.then(function(e){return t.call(this),e},function(e){return t.call(this),Promise.reject(e)})};var z,K={},Q=K.hasOwnProperty,Y=[],Z=Y.slice,tt=!1,et="undefined"!=typeof window,nt=function(t){var e=t.config,n=t.nextTick;z=n,tt=e.debug||!e.silent},ot=Array.isArray,rt=Object.assign||T,it=function(t,e){var n=e(t);return p(t.root)&&!n.match(/^(https?:)?\//)&&(n=t.root+"/"+n),n},ut=function(t,e){var n=Object.keys(k.options.params),o={},r=e(t);return g(t.params,function(t,e){n.indexOf(e)===-1&&(o[e]=t)}),o=k.params(o),o&&(r+=(r.indexOf("?")==-1?"?":"&")+o),r},st=function(t){var e=[],n=E(t.url,t.params,e);return e.forEach(function(e){delete t.params[e]}),n};k.options={url:"",root:null,params:{}},k.transforms=[st,ut,it],k.params=function(t){var e=[],n=encodeURIComponent;return e.add=function(t,e){h(e)&&(e=e()),null===e&&(e=""),this.push(n(t)+"="+n(e))},S(e,t),e.join("&").replace(/%20/g,"+")},k.parse=function(t){var e=document.createElement("a");return document.documentMode&&(e.href=t,t=e.href),e.href=t,{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",port:e.port,host:e.host,hostname:e.hostname,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):""}};var at=function(t){return new r(function(e){var n=new XDomainRequest,o=function(o){var r=o.type,i=0;"load"===r?i=200:"error"===r&&(i=500),e(t.respondWith(n.responseText,{status:i}))};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl()),t.timeout&&(n.timeout=t.timeout),n.onload=o,n.onabort=o,n.onerror=o,n.ontimeout=o,n.onprogress=function(){},n.send(t.getBody())})},ct=et&&"withCredentials"in new XMLHttpRequest,ft=function(t,e){if(et){var n=k.parse(location.href),o=k.parse(t.getUrl());o.protocol===n.protocol&&o.host===n.host||(t.crossOrigin=!0,t.emulateHTTP=!1,ct||(t.client=at))}e()},pt=function(t,e){v(t.body)?t.headers.delete("Content-Type"):(l(t.body)||ot(t.body))&&(t.emulateJSON?(t.body=k.params(t.body),t.headers.set("Content-Type","application/x-www-form-urlencoded")):t.body=JSON.stringify(t.body)),e(function(t){return Object.defineProperty(t,"data",{get:function(){return this.body},set:function(t){this.body=t}}),t.bodyText?y(t.text(),function(e){var n=t.headers.get("Content-Type")||"";if(0===n.indexOf("application/json")||I(e))try{t.body=JSON.parse(e)}catch(e){t.body=null}else t.body=e;return t}):t})},ht=function(t){return new r(function(e){var n,o,r=t.jsonp||"callback",i=t.jsonpCallback||"_jsonp"+Math.random().toString(36).substr(2),u=null;n=function(n){var r=n.type,s=0;"load"===r&&null!==u?s=200:"error"===r&&(s=500),s&&window[i]&&(delete window[i],document.body.removeChild(o)),e(t.respondWith(u,{status:s}))},window[i]=function(t){u=JSON.stringify(t)},t.abort=function(){n({type:"abort"})},t.params[r]=i,t.timeout&&setTimeout(t.abort,t.timeout),o=document.createElement("script"),o.src=t.getUrl(),o.type="text/javascript",o.async=!0,o.onload=n,o.onerror=n,document.body.appendChild(o)})},lt=function(t,e){"JSONP"==t.method&&(t.client=ht),e()},dt=function(t,e){h(t.before)&&t.before.call(this,t),e()},mt=function(t,e){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers.set("X-HTTP-Method-Override",t.method),t.method="POST"),e()},vt=function(t,e){var n=rt({},M.headers.common,t.crossOrigin?{}:M.headers.custom,M.headers[c(t.method)]);g(n,function(e,n){t.headers.has(n)||t.headers.set(n,e)}),e()},yt="undefined"!=typeof Blob&&"undefined"!=typeof FileReader,bt=function(t){return new r(function(e){var n=new XMLHttpRequest,o=function(o){var r=t.respondWith("response"in n?n.response:n.responseText,{status:1223===n.status?204:n.status,statusText:1223===n.status?"No Content":a(n.statusText)});g(a(n.getAllResponseHeaders()).split("\n"),function(t){r.headers.append(t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1))}),e(r)};t.abort=function(){return n.abort()},t.progress&&("GET"===t.method?n.addEventListener("progress",t.progress):/^(POST|PUT)$/i.test(t.method)&&n.upload.addEventListener("progress",t.progress)),n.open(t.method,t.getUrl(),!0),t.timeout&&(n.timeout=t.timeout),t.credentials===!0&&(n.withCredentials=!0),t.crossOrigin||t.headers.set("X-Requested-With","XMLHttpRequest"),"responseType"in n&&yt&&(n.responseType="blob"),t.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),n.onload=o,n.onabort=o,n.onerror=o,n.ontimeout=o,n.send(t.getBody())})},gt=function(t){var e=n(19);return new r(function(n){var o,r=t.getUrl(),i=t.getBody(),u=t.method,s={};t.headers.forEach(function(t,e){s[e]=t}),e(r,{body:i,method:u,headers:s}).then(o=function(e){var o=t.respondWith(e.body,{status:e.statusCode,statusText:a(e.statusMessage)});g(e.headers,function(t,e){o.headers.set(e,t)}),n(o)},function(t){return o(t.response)})})},wt=function(t){function e(e){return new r(function(r){function s(){n=o.pop(),h(n)?n.call(t,e,a):(i("Invalid interceptor of type "+typeof n+", must be a function"),a())}function a(e){if(h(e))u.unshift(e);else if(l(e))return u.forEach(function(n){e=y(e,function(e){return n.call(t,e)||e})}),void y(e,r);s()}s()},t)}var n,o=[H],u=[];return l(t)||(t=null),e.use=function(t){o.push(t)},e},xt=function(t){var e=this;this.map={},g(t,function(t,n){return e.append(n,t)})};xt.prototype.has=function(t){return null!==B(this.map,t)},xt.prototype.get=function(t){var e=this.map[B(this.map,t)];return e?e.join():null},xt.prototype.getAll=function(t){return this.map[B(this.map,t)]||[]},xt.prototype.set=function(t,e){this.map[F(B(this.map,t)||t)]=[a(e)]},xt.prototype.append=function(t,e){var n=this.map[B(this.map,t)];n?n.push(a(e)):this.set(t,e)},xt.prototype.delete=function(t){delete this.map[B(this.map,t)]},xt.prototype.deleteAll=function(){this.map={}},xt.prototype.forEach=function(t,e){var n=this;g(this.map,function(o,r){g(o,function(o){return t.call(e,o,r,n)})})};var Tt=function(t,e){var n=e.url,o=e.headers,r=e.status,i=e.statusText;this.url=n,this.ok=r>=200&&r<300,this.status=r||0,this.statusText=i||"",this.headers=new xt(o),this.body=t,p(t)?this.bodyText=t:m(t)&&(this.bodyBlob=t,_(t)&&(this.bodyText=L(t)))};Tt.prototype.blob=function(){return y(this.bodyBlob)},Tt.prototype.text=function(){return y(this.bodyText)},Tt.prototype.json=function(){return y(this.text(),function(t){return JSON.parse(t)})};var jt=function(t){this.body=null,this.params={},rt(this,t,{method:f(t.method||"GET")}),this.headers instanceof xt||(this.headers=new xt(this.headers))};jt.prototype.getUrl=function(){return k(this)},jt.prototype.getBody=function(){return this.body},jt.prototype.respondWith=function(t,e){return new Tt(t,rt(e||{},{url:this.getUrl()}))};var Et={Accept:"application/json, text/plain, */*"},Ot={"Content-Type":"application/json;charset=utf-8"};M.options={},M.headers={put:Ot,post:Ot,patch:Ot,delete:Ot,common:Et,custom:{}},M.interceptors=[dt,mt,pt,lt,vt,ft],["get","delete","head","jsonp"].forEach(function(t){M[t]=function(e,n){return this(rt(n||{},{url:e,method:t}))}}),["post","put","patch"].forEach(function(t){M[t]=function(e,n,o){return this(rt(o||{},{url:e,method:t,body:n}))}}),N.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},delete:{method:"DELETE"}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(J),t.exports=J},function(t,e){}]);