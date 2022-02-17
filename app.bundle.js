(()=>{var e,t,n={114:(e,t,n)=>{var s={"./categories/index.js":[328,193],"./dashboard/index.js":[329,748],"./error404/index.js":[232,854],"./products/edit/index.js":[386,460],"./products/list/index.js":[747,197],"./sales/index.js":[741,747]};function i(e){if(!n.o(s,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],i=t[0];return n.e(t[1]).then((()=>n(i)))}i.keys=()=>Object.keys(s),i.id=114,e.exports=i}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return n[e](o,o.exports,i),o.exports}i.m=n,i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,n)=>(i.f[n](e,t),t)),[])),i.u=e=>({193:"categories-index-js",197:"products-list-index-js",460:"products-edit-index-js",747:"sales-index-js",748:"dashboard-index-js",854:"error404-index-js"}[e]+"-"+e+".js"),i.miniCssF=e=>{},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="js-proj-final:",i.l=(n,s,o,r)=>{if(e[n])e[n].push(s);else{var a,d;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){a=u;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",t+o),a.src=n),e[n]=[s];var p=(t,s)=>{a.onerror=a.onload=null,clearTimeout(h);var i=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(s))),t)return t(s)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),d&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/course-js.javascript.ru/",(()=>{var e={143:0};i.f.j=(t,n)=>{var s=i.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var o=new Promise(((n,i)=>s=e[t]=[n,i]));n.push(s[2]=o);var r=i.p+i.u(t),a=new Error;i.l(r,(n=>{if(i.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",a.name="ChunkLoadError",a.type=o,a.request=r,s[1](a)}}),"chunk-"+t,t)}};var t=(t,n)=>{var s,o,[r,a,d]=n,l=0;if(r.some((t=>0!==e[t]))){for(s in a)i.o(a,s)&&(i.m[s]=a[s]);if(d)d(i)}for(t&&t(n);l<r.length;l++)o=r[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkjs_proj_final=self.webpackChunkjs_proj_final||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";class e{constructor(){this.routes=[],this.initEventListeners()}initEventListeners(){document.addEventListener("click",(e=>{const t=e.target.closest("a");if(!t)return;const n=t.getAttribute("href");n&&n.startsWith("/")&&(e.preventDefault(),this.navigate(n))}))}static instance(){return this._instance||(this._instance=new e),this._instance}async route(){let e,t=decodeURI(window.location.pathname).replace(/^\/|\/$/,"");for(let n of this.routes)if(e=t.match(n.pattern),e){this.page=await this.changePage(n.path,e);break}e||(this.page=await this.changePage(this.notFoundPagePath)),document.dispatchEvent(new CustomEvent("route",{detail:{page:this.page}}))}async changePage(e,t){return this.page&&this.page.destroy&&this.page.destroy(),await async function(e,t){const n=document.querySelector("main");n.classList.add("is-loading");const{default:s}=await i(114)(`./${e}/index.js`),o=new s(t),r=await o.render();n.classList.remove("is-loading");const a=document.querySelector("#content");return a.innerHTML="",a.append(r),o}(e,t)}navigate(e){history.pushState(null,null,e),this.route()}addRoute(e,t){return this.routes.push({pattern:e,path:t}),this}setNotFoundPagePath(e){return this.notFoundPagePath=e,this}listen(){window.addEventListener("popstate",(()=>this.route())),this.route()}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class n{removeTooltip(){this.element&&(this.element.remove(),this.element=null,document.removeEventListener("pointermove",this.onMouseMove))}constructor(){if(t(this,"element",void 0),t(this,"onMouseOver",(e=>{const t=e.target.closest("[data-tooltip]");t&&(this.render(t.dataset.tooltip),this.moveTooltip(e),document.addEventListener("pointermove",this.onMouseMove))})),t(this,"onMouseMove",(e=>{this.moveTooltip(e)})),t(this,"onMouseOut",(()=>{this.removeTooltip()})),n.instance)return n.instance;n.instance=this}initEventListeners(){document.addEventListener("pointerover",this.onMouseOver),document.addEventListener("pointerout",this.onMouseOut)}initialize(){this.initEventListeners()}render(e){this.element=document.createElement("div"),this.element.className="tooltip",this.element.innerHTML=e,document.body.append(this.element)}moveTooltip(e){const t=e.clientX+10,n=e.clientY+10;this.element.style.left=t+"px",this.element.style.top=n+"px"}destroy(){document.removeEventListener("pointerover",this.onMouseOver),document.removeEventListener("pointerout",this.onMouseOut),this.removeTooltip()}}t(n,"instance",void 0);const s=new n,o="course-js.javascript.ru/";const r=new class{constructor(){s.initialize(),this.router=e.instance(),this.render(),this.addEventListeners()}get template(){return`\n      <main class="main">\n      <div class="progress-bar">\n        <div class="progress-bar__line"></div>\n      </div>\n      <aside class="sidebar">\n        <h2 class="sidebar__title">\n          <a href="/${o}">shop admin</a>\n        </h2>\n        <ul class="sidebar__nav">\n          <li>\n            <a href="/${o}" data-page="dashboard">\n              <i class="icon-dashboard"></i> <span>Dashboard</span>\n            </a>\n          </li>\n          <li>\n            <a href="/${o}products" data-page="products">\n              <i class="icon-products"></i> <span>Products</span>\n            </a>\n          </li>\n          <li>\n            <a href="/${o}categories" data-page="categories">\n              <i class="icon-categories"></i> <span>Categories</span>\n            </a>\n          </li>\n          <li>\n            <a href="/${o}sales" data-page="sales">\n              <i class="icon-sales"></i> <span>Sales</span>\n            </a>\n          </li>\n        </ul>\n        <ul class="sidebar__nav sidebar__nav_bottom">\n          <li>\n            <button type="button" class="sidebar__toggler">\n              <i class="icon-toggle-sidebar"></i> <span>Toggle sidebar</span>\n            </button>\n          </li>\n        </ul>\n      </aside>\n      <section class="content" id="content">\n\n      </section>\n    </main>\n    `}render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,document.body.append(this.element)}initializeRouter(){this.router.addRoute(new RegExp(`^${o}$`),"dashboard").addRoute(new RegExp(`^${o}products$`),"products/list").addRoute(new RegExp(`^${o}products/add$`),"products/edit").addRoute(new RegExp(`^${o}products/([\\w()-]+)$`),"products/edit").addRoute(new RegExp(`^${o}sales$`),"sales").addRoute(new RegExp(`^${o}categories$`),"categories").addRoute(/404\/?$/,"error404").setNotFoundPagePath("error404").listen()}addEventListeners(){this.element.querySelector(".sidebar__toggler").addEventListener("click",(e=>{e.preventDefault(),document.body.classList.toggle("is-collapsed-sidebar")}))}};document.body.append(r.element),r.initializeRouter()})()})();
//# sourceMappingURL=app.bundle.js.map