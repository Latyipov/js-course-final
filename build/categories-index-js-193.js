"use strict";(self.webpackChunkjs_proj_final=self.webpackChunkjs_proj_final||[]).push([[193],{842:(e,t,n)=>{function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>s});class s{constructor(e){let{duration:t,type:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,"element",void 0),this.message=e,this.duration=t,this.type=n,this.render()}get template(){return`\n      <div class="notification notification_${this.type} show" style="--value:${this.duration/1e3}s">\n        <div class="notification__content">\n          ${this.message}\n        </div>\n      </div>\n    `}render(){s.activeComponent&&s.activeComponent.remove();const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,s.activeComponent=this.element}show(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body).append(this.element),setTimeout((()=>{this.remove()}),this.duration)}remove(){this.element.remove()}destroy(){this.remove()}}i(s,"activeComponent",void 0)},523:(e,t,n)=>{function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>s});class s{constructor(){let{items:e=[]}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,"element",void 0),i(this,"onDocumentPointerMove",(e=>{let{clientX:t,clientY:n}=e;this.moveDraggingAt(t,n);const{firstElementChild:i,children:s}=this.element,{top:r}=i.getBoundingClientRect(),{bottom:o}=this.element.getBoundingClientRect();if(n<r)this.movePlaceholderAt(0);else if(n>o)this.movePlaceholderAt(s.length);else for(let e=0;e<s.length;e++){const t=s[e];if(t!==this.draggingElem){const{top:i,bottom:s}=t.getBoundingClientRect(),{offsetHeight:r}=t;if(n>i&&n<s){if(n<i+r/2){this.movePlaceholderAt(e);break}this.movePlaceholderAt(e+1);break}}}this.scrollIfCloseToWindowEdge(n)})),i(this,"onDocumentPointerUp",(()=>{this.dragStop()})),this.items=e,this.render()}render(){this.element=document.createElement("ul"),this.element.className="sortable-list",this.addItems(),this.initEventListeners()}initEventListeners(){this.element.addEventListener("pointerdown",(e=>this.onPointerDown(e)))}addItems(){for(let e of this.items)e.classList.add("sortable-list__item");this.element.append(...this.items)}onPointerDown(e){if(1!==e.which)return!1;const t=e.target.closest(".sortable-list__item");t&&(e.target.closest("[data-grab-handle]")&&(e.preventDefault(),this.dragStart(t,e)),e.target.closest("[data-delete-handle]")&&(e.preventDefault(),t.remove()))}dragStart(e,t){let{clientX:n,clientY:i}=t;this.elementInitialIndex=[...this.element.children].indexOf(e),this.pointerInitialShift={x:n-e.getBoundingClientRect().x,y:i-e.getBoundingClientRect().y},this.draggingElem=e,this.placeholderElem=document.createElement("li"),this.placeholderElem.className="sortable-list__placeholder",e.style.width=`${e.offsetWidth}px`,e.style.height=`${e.offsetHeight}px`,this.placeholderElem.style.width=e.style.width,this.placeholderElem.style.height=e.style.height,e.classList.add("sortable-list__item_dragging"),e.after(this.placeholderElem),this.element.append(e),this.moveDraggingAt(n,i),document.addEventListener("pointermove",this.onDocumentPointerMove),document.addEventListener("pointerup",this.onDocumentPointerUp)}moveDraggingAt(e,t){this.draggingElem.style.left=e-this.pointerInitialShift.x+"px",this.draggingElem.style.top=t-this.pointerInitialShift.y+"px"}scrollIfCloseToWindowEdge(e){e<20?window.scrollBy(0,-10):e>document.documentElement.clientHeight-20&&window.scrollBy(0,10)}movePlaceholderAt(e){const t=this.element.children[e];t!==this.placeholderElem&&this.element.insertBefore(this.placeholderElem,t)}dragStop(){const e=[...this.element.children].indexOf(this.placeholderElem);this.placeholderElem.replaceWith(this.draggingElem),this.draggingElem.classList.remove("sortable-list__item_dragging"),this.draggingElem.style.left="",this.draggingElem.style.top="",this.draggingElem.style.width="",this.draggingElem.style.height="",document.removeEventListener("pointermove",this.onDocumentPointerMove),document.removeEventListener("pointerup",this.onDocumentPointerUp),this.draggingElem=null,e!==this.elementInitialIndex&&this.element.dispatchEvent(new CustomEvent("sortable-list-reorder",{bubbles:!0,detail:{from:this.elementInitialIndex,to:e}}))}remove(){this.element.remove(),document.removeEventListener("pointermove",this.onDocumentPointerMove),document.removeEventListener("pointerup",this.onDocumentPointerUp)}destroy(){this.remove()}}},328:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var i=n(731),s=n(856),r=n(523),o=n(842);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class l{constructor(e){a(this,"element",void 0),a(this,"toggleAccordion",(e=>{e.preventDefault();const{target:t}=e,n=t.classList.contains("category__header"),i=t.closest("div");n&&i.classList.toggle("category_open")})),a(this,"onSortableListReorder",(async e=>{const{target:t}=e,{children:n}=t,i=[...n].map(((e,t)=>{const{id:n}=e.dataset;return{id:n,weight:t}}));try{await this.send(i),this.showNotificationMessage("Category order saved",{type:"success"})}catch(e){this.showNotificationMessage(`Server side error! ${e}`,{type:"error",duration:3e3})}})),this.data=e,this.render()}showNotificationMessage(e){let{duration:t=2e3,type:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};new o.Z(e,{duration:t,type:n}).show()}async send(e){const t=new URL("api/rest/subcategories","https://course-js.javascript.ru/"),n={method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)};await(0,s.Z)(t,n)}render(){const e=document.createElement("div");e.innerHTML=this.getCategoriesContainerTemplate(this.data);const t=e.firstElementChild;this.element=t,this.appendSubcategoryDraggableList(),this.initEventListeners()}initEventListeners(){this.element.addEventListener("click",this.toggleAccordion),this.element.addEventListener("sortable-list-reorder",this.onSortableListReorder)}removeEventListeners(){this.element.removeEventListener("click",this.toggleAccordion),this.element.removeEventListener("sortable-list-reorder",this.onSortableListReorder)}getCategoriesContainerTemplate(e){return`\n      <div data-element="categoriesContainer">\n        ${this.getCategoryTemplate(e)}\n      </div>\n    `}getCategoryTemplate(e){return e.map((e=>`\n          <div class="category category_open" data-id="${e.id}">\n            <header class="category__header">${(0,i.Z)(e.title)}</header>\n            <div class="category__body">\n              <div class="subcategory-list" data-element="subcategoryList">\n              </div>\n            </div>\n          </div>\n        `)).join("")}createSubcategoryList(){return this.data.map((e=>{const{subcategories:t}=e;return t.map((e=>{let{id:t,title:n,count:i}=e;return this.getSortableListItemTemplate(t,n,i)}))}))}getSortableListItemTemplate(e,t,n){const s=document.createElement("div");return s.innerHTML=`\n      <li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="${e}">\n        <strong>${(0,i.Z)(t)}</strong>\n        <span><b>${n}</b> products</span>\n      </li>`,s.firstElementChild}appendSubcategoryDraggableList(){const e=this.createSubcategoryList();this.element.querySelectorAll("[data-element='subcategoryList']").forEach(((t,n)=>{const i=new r.Z({items:e[n]});t.append(i.element)}))}remove(){this.element.remove()}destroy(){this.removeEventListeners(),this.remove()}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class d{constructor(){c(this,"element",void 0),c(this,"subElements",{}),c(this,"components",{}),c(this,"data",{})}async getData(){const e=new URL("api/rest/categories","https://course-js.javascript.ru/");e.searchParams.set("_sort","weight"),e.searchParams.set("_refs","subcategory"),this.data=await(0,s.Z)(e)}initComponents(){const e=new l(this.data);this.components.categories=e}get template(){return'\n    <div class="categories">\n      <div class="content__top-panel">\n        <h1 class="page-title">Категории товаров</h1>\n      </div>\n      <div data-element="categories">\n        \x3c!-- categories component --\x3e\n      </div>\n    </div>'}async render(){const e=document.createElement("div");return e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(this.element),await this.getData(),this.initComponents(),this.renderComponents(),this.element}renderComponents(){Object.keys(this.components).forEach((e=>{const t=this.subElements[e],{element:n}=this.components[e];t.append(n)}))}getSubElements(e){return[...e.querySelectorAll("[data-element]")].reduce(((e,t)=>(e[t.dataset.element]=t,e)),{})}destroy(){for(const e of Object.values(this.components))e.destroy()}}},731:(e,t,n)=>{n.d(t,{Z:()=>i});const i=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},856:(e,t,n)=>{async function i(e,t){let n,i;try{n=await fetch(e.toString(),t)}catch(e){throw new s(n,"Network error has occurred.")}if(!n.ok){let e=n.statusText;try{i=await n.json(),e=i.error&&i.error.message||i.data&&i.data.error&&i.data.error.message||e}catch(e){}let t=`Error ${n.status}: ${e}`;throw new s(n,i,t)}try{return await n.json()}catch(e){throw new s(n,null,e.message)}}n.d(t,{Z:()=>i});class s extends Error{constructor(e,t,n){var i,s,r;super(n),r="FetchError",(s="name")in(i=this)?Object.defineProperty(i,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[s]=r,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",(e=>{e.reason instanceof s&&alert(e.reason.message)}))}}]);
//# sourceMappingURL=categories-index-js-193.js.map