"use strict";(self.webpackChunkjs_proj_final=self.webpackChunkjs_proj_final||[]).push([[747],{552:(e,t,s)=>{function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,{Z:()=>n});class n{static formatDate(e){return e.toLocaleString("ru",{dateStyle:"short"})}constructor(){let{from:e=new Date,to:t=new Date}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,"element",null),r(this,"subElements",{}),r(this,"selectingFrom",!0),r(this,"selected",{from:new Date,to:new Date}),r(this,"onDocumentClick",(e=>{const t=this.element.classList.contains("rangepicker_open"),s=this.element.contains(e.target);t&&!s&&this.close()})),this.showDateFrom=new Date(e),this.selected={from:e,to:t},this.render()}get template(){return`<div class="rangepicker">\n      <div class="rangepicker__input" data-elem="input">\n        <span data-elem="from">${n.formatDate(this.selected.from)}</span> -\n        <span data-elem="to">${n.formatDate(this.selected.to)}</span>\n      </div>\n      <div class="rangepicker__selector" data-elem="selector"></div>\n    </div>`}render(){const e=document.createElement("div");return e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(e),this.initEventListeners(),Promise.resolve(this.element)}getSubElements(e){const t={};for(const s of e.querySelectorAll("[data-elem]"))t[s.dataset.elem]=s;return t}initEventListeners(){const{input:e,selector:t}=this.subElements;document.addEventListener("click",this.onDocumentClick,!0),e.addEventListener("click",(()=>this.toggle())),t.addEventListener("click",(e=>this.onSelectorClick(e)))}toggle(){this.element.classList.toggle("rangepicker_open"),this.renderDateRangePicker()}onSelectorClick(e){let{target:t}=e;t.classList.contains("rangepicker__cell")&&this.onRangePickerCellClick(t)}close(){this.element.classList.remove("rangepicker_open")}renderDateRangePicker(){const e=new Date(this.showDateFrom),t=new Date(this.showDateFrom),{selector:s}=this.subElements;t.setMonth(t.getMonth()+1),s.innerHTML=`\n      <div class="rangepicker__selector-arrow"></div>\n      <div class="rangepicker__selector-control-left"></div>\n      <div class="rangepicker__selector-control-right"></div>\n      ${this.renderCalendar(e)}\n      ${this.renderCalendar(t)}\n    `;const r=s.querySelector(".rangepicker__selector-control-left"),n=s.querySelector(".rangepicker__selector-control-right");r.addEventListener("click",(()=>this.prev())),n.addEventListener("click",(()=>this.next())),this.renderHighlight()}prev(){this.showDateFrom.setMonth(this.showDateFrom.getMonth()-1),this.renderDateRangePicker()}next(){this.showDateFrom.setMonth(this.showDateFrom.getMonth()+1),this.renderDateRangePicker()}renderHighlight(){const{from:e,to:t}=this.selected;for(const s of this.element.querySelectorAll(".rangepicker__cell")){const{value:r}=s.dataset,n=new Date(r);s.classList.remove("rangepicker__selected-from"),s.classList.remove("rangepicker__selected-between"),s.classList.remove("rangepicker__selected-to"),e&&r===e.toISOString()?s.classList.add("rangepicker__selected-from"):t&&r===t.toISOString()?s.classList.add("rangepicker__selected-to"):e&&t&&n>=e&&n<=t&&s.classList.add("rangepicker__selected-between")}if(e){const t=this.element.querySelector(`[data-value="${e.toISOString()}"]`);t&&t.closest(".rangepicker__cell").classList.add("rangepicker__selected-from")}if(t){const e=this.element.querySelector(`[data-value="${t.toISOString()}"]`);e&&e.closest(".rangepicker__cell").classList.add("rangepicker__selected-to")}}renderCalendar(e){const t=new Date(e);t.setDate(1);const s=t.toLocaleString("ru",{month:"long"});let r=`<div class="rangepicker__calendar">\n      <div class="rangepicker__month-indicator">\n        <time datetime=${s}>${s}</time>\n      </div>\n      <div class="rangepicker__day-of-week">\n        <div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div><div>Сб</div><div>Вс</div>\n      </div>\n      <div class="rangepicker__date-grid">\n    `;var n;for(r+=`\n      <button type="button"\n        class="rangepicker__cell"\n        data-value="${t.toISOString()}"\n        style="--start-from: ${n=t.getDay(),1+(0===n?6:n-1)}">\n          ${t.getDate()}\n      </button>`,t.setDate(2);t.getMonth()===e.getMonth();)r+=`\n        <button type="button"\n          class="rangepicker__cell"\n          data-value="${t.toISOString()}">\n            ${t.getDate()}\n        </button>`,t.setDate(t.getDate()+1);return r+="</div></div>",r}onRangePickerCellClick(e){const{value:t}=e.dataset;if(t){const e=new Date(t);this.selectingFrom?(this.selected={from:e,to:null},this.selectingFrom=!1,this.renderHighlight()):(e>this.selected.from?this.selected.to=e:(this.selected.to=this.selected.from,this.selected.from=e),this.selectingFrom=!0,this.renderHighlight()),this.selected.from&&this.selected.to&&(this.dispatchEvent(),this.close(),this.subElements.from.innerHTML=n.formatDate(this.selected.from),this.subElements.to.innerHTML=n.formatDate(this.selected.to))}}dispatchEvent(){this.element.dispatchEvent(new CustomEvent("date-select",{bubbles:!0,detail:this.selected}))}remove(){this.element.remove(),document.removeEventListener("click",this.onDocumentClick,!0)}destroy(){return this.remove(),this.element=null,this.subElements={},this.selectingFrom=!0,this.selected={from:new Date,to:new Date},this}}},348:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(856);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],{url:t="",sorted:s={id:e.find((e=>e.sortable)).id,order:"asc"},isSortLocally:r=!1,step:i=20,start:a=1,end:o=a+i,from:l=null,to:d=null,filtered:c=null}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,"element",void 0),n(this,"subElements",{}),n(this,"data",[]),n(this,"loading",!1),n(this,"step",20),n(this,"start",1),n(this,"end",this.start+this.step),n(this,"onWindowScroll",(async()=>{const{bottom:e}=this.element.getBoundingClientRect(),{id:t,order:s}=this.sorted;if(e<document.documentElement.clientHeight&&!this.loading&&!this.isSortLocally){this.start=this.end,this.end=this.start+this.step,this.loading=!0;const e=await this.loadData(t,s,this.start,this.end);this.update(e),this.loading=!1}})),n(this,"onSortClick",(e=>{const t=e.target.closest('[data-sortable="true"]');if(t){const{id:e,order:s}=t.dataset,r=(e=>({asc:"desc",desc:"asc"}[e]))(s);this.sorted={id:e,order:r},t.dataset.order=r,t.append(this.subElements.arrow),this.isSortLocally?this.sortLocally(e,r):(this.start=1,this.end=1+this.step,this.sortOnServer(e,r,this.start,this.end))}})),this.headersConfig=e,this.url=new URL(t,"https://course-js.javascript.ru/"),this.sorted=s,this.isSortLocally=r,this.step=i,this.start=a,this.end=o,this.from=l,this.to=d,this.filtered=c,this.render()}async render(){const{id:e,order:t}=this.sorted,s=document.createElement("div");s.innerHTML=this.getTable();const r=s.firstElementChild;this.element=r,this.subElements=this.getSubElements(r);const n=await this.loadData(e,t,this.start,this.end);return this.renderRows(n),this.initEventListeners(),this.element}async loadData(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.start,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.end;if(this.from&&this.to&&(this.url.searchParams.set("createdAt_gte",this.from),this.url.searchParams.set("createdAt_lte",this.to)),this.filtered){const{price_gte:e,price_lte:t,title_like:s,status:r}=this.filtered;this.url.searchParams.set("price_gte",e),this.url.searchParams.set("price_lte",t),s&&this.url.searchParams.set("title_like",s),r&&this.url.searchParams.set("status",r)}this.url.searchParams.set("_sort",e),this.url.searchParams.set("_order",t),this.url.searchParams.set("_start",s),this.url.searchParams.set("_end",n),this.element.classList.add("sortable-table_loading");const i=await(0,r.Z)(this.url);return this.element.classList.remove("sortable-table_loading"),i}addRows(e){this.data=e,this.subElements.body.innerHTML=this.getTableRows(e),e.length?this.element.classList.remove("sortable-table_empty"):this.element.classList.add("sortable-table_empty")}update(e){const t=document.createElement("div");return this.data=[...this.data,...e],t.innerHTML=this.getTableRows(e),this.subElements.body.append(...t.childNodes),t}getTableHeader(){return`<div data-element="header" class="sortable-table__header sortable-table__row">\n      ${this.headersConfig.map((e=>this.getHeaderRow(e))).join("")}\n    </div>`}getHeaderRow(e){let{id:t,title:s,sortable:r}=e;return`\n      <div class="sortable-table__cell" data-id="${t}" data-sortable="${r}" data-order="${this.sorted.id===t?this.sorted.order:"asc"}">\n        <span>${s}</span>\n        ${this.getHeaderSortingArrow(t)}\n      </div>\n    `}getHeaderSortingArrow(e){return(this.sorted.id===e?this.sorted.order:"")?'<span data-element="arrow" class="sortable-table__sort-arrow">\n          <span class="sort-arrow"></span>\n        </span>':""}getTableBody(e){return`\n      <div data-element="body" class="sortable-table__body">\n        ${this.getTableRows(e)}\n      </div>`}getTableRows(e){return e.map((t=>`\n      <a href="/products/${t.id}" class="sortable-table__row">\n        ${this.getTableRow(t,e)}\n      </a>`)).join("")}getTableRow(e){return this.headersConfig.map((e=>{let{id:t,template:s}=e;return{id:t,template:s}})).map((t=>{let{id:s,template:r}=t;return r?r(e[s]):`<div class="sortable-table__cell">${e[s]}</div>`})).join("")}getTable(){return`\n      <div class="sortable-table">\n        ${this.getTableHeader()}\n        ${this.getTableBody(this.data)}\n\n        <div data-element="loading" class="loading-line sortable-table__loading-line"></div>\n\n        <div data-element="emptyPlaceholder" class="sortable-table__empty-placeholder">\n          No data\n        </div>\n      </div>`}initEventListeners(){this.subElements.header.addEventListener("pointerdown",this.onSortClick),document.addEventListener("scroll",this.onWindowScroll)}sortLocally(e,t){const s=this.sortData(e,t);this.subElements.body.innerHTML=this.getTableBody(s)}async sortOnServer(e,t,s,r){const n=await this.loadData(e,t,s,r);this.renderRows(n)}renderRows(e){e.length?(this.element.classList.remove("sortable-table_empty"),this.addRows(e)):this.element.classList.add("sortable-table_empty")}sortData(e,t){const s=[...this.data],r=this.headersConfig.find((t=>t.id===e)),{sortType:n,customSorting:i}=r,a="asc"===t?1:-1;return s.sort(((t,s)=>{switch(n){case"number":default:return a*(t[e]-s[e]);case"string":return a*t[e].localeCompare(s[e],"ru");case"custom":return a*i(t,s)}}))}getSubElements(e){return[...e.querySelectorAll("[data-element]")].reduce(((e,t)=>(e[t.dataset.element]=t,e)),{})}remove(){this.element.remove(),document.removeEventListener("scroll",this.onWindowScroll)}destroy(){this.remove(),this.subElements={}}}},741:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var r=s(348),n=s(552);const i=[{id:"id",title:"ID",sortable:!0,sortType:"number"},{id:"user",title:"Клиент",sortable:!0,sortType:"string"},{id:"createdAt",title:"Дата",sortable:!0,sortType:"string",template:e=>`<div class="sortable-table__cell">\n          ${e?new Date(e).toLocaleString():""}\n        </div>`},{id:"totalCost",title:"Стоимость",sortable:!0,sortType:"number"},{id:"delivery",title:"Статус",sortable:!0,sortType:"number",template:e=>`<div class="sortable-table__cell">\n          ${e>0?"Доставлено":"В пути"}\n        </div>`}];var a=s(856);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class l{constructor(){o(this,"element",void 0),o(this,"subElements",{}),o(this,"components",{}),o(this,"onDateSelect",(async e=>{const{from:t,to:s}=e.detail;await this.updateTableComponent(t,s)}))}async updateTableComponent(e,t){const s=await(0,a.Z)(`https://course-js.javascript.ru/api/rest/orders?createdAt_gte=${e.toISOString()}&createdAt_lte=${t.toISOString()}&_sort=createdAt&_order=desc&_start=0&_end=30`);this.components.sortableTable.addRows(s),this.components.sortableTable.from=e.toISOString(),this.components.sortableTable.to=t.toISOString()}async initComponents(){const e=new Date,t=new Date(e.getTime()-2592e6),s=new n.Z({from:t,to:e}),a=new r.Z(i,{url:"api/rest/orders",from:t.toISOString(),to:e.toISOString(),sorted:{id:"createdAt",order:"desc"}});this.components.sortableTable=a,this.components.rangePicker=s}get template(){return'<div class="sales">\n      <div class="content__top-panel">\n        <h2 class="page-title">Sales</h2>\n        \x3c!-- RangePicker component --\x3e\n        <div data-element="rangePicker"></div>\n      </div>\n      <div data-element="sortableTable">\n        \x3c!-- sortable-table component --\x3e\n      </div>\n    </div>'}initEventListeners(){document.addEventListener("date-select",this.onDateSelect)}removeEventListeners(){document.removeEventListener("date-select",this.onDateSelect)}async render(){const e=document.createElement("div");return e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(this.element),await this.initComponents(),this.renderComponents(),this.subElements=this.getSubElements(this.element),this.initEventListeners(),this.element}renderComponents(){Object.keys(this.components).forEach((e=>{const t=this.subElements[e],{element:s}=this.components[e];t.append(s)}))}getSubElements(e){return[...e.querySelectorAll("[data-element]")].reduce(((e,t)=>(e[t.dataset.element]=t,e)),{})}destroy(){for(const e of Object.values(this.components))e.destroy();this.removeEventListeners()}}},856:(e,t,s)=>{async function r(e,t){let s,r;try{s=await fetch(e.toString(),t)}catch(e){throw new n(s,"Network error has occurred.")}if(!s.ok){let e=s.statusText;try{r=await s.json(),e=r.error&&r.error.message||r.data&&r.data.error&&r.data.error.message||e}catch(e){}let t=`Error ${s.status}: ${e}`;throw new n(s,r,t)}try{return await s.json()}catch(e){throw new n(s,null,e.message)}}s.d(t,{Z:()=>r});class n extends Error{constructor(e,t,s){var r,n,i;super(s),i="FetchError",(n="name")in(r=this)?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",(e=>{e.reason instanceof n&&alert(e.reason.message)}))}}]);
//# sourceMappingURL=sales-index-js-747.js.map