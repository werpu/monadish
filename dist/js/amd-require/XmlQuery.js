require([],(function(){return function(e){var t={};function r(l){if(t[l])return t[l].exports;var s=t[l]={i:l,l:!1,exports:{}};return e[l].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(l,s,function(t){return e[t]}.bind(null,s));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";r.r(t),r.d(t,"Monad",(function(){return s})),r.d(t,"Optional",(function(){return n})),r.d(t,"ValueEmbedder",(function(){return a})),r.d(t,"Config",(function(){return u}));var l=r(1);class s{constructor(e){this._value=e}get value(){return this._value}map(e){e||(e=e=>e);let t=e(this.value);return new s(t)}flatMap(e){let t=this.map(e);for(;void 0!==t&&null!=t&&t.value instanceof s;)t=t.value;return t}}class n extends s{constructor(e){super(e)}get value(){return this._value instanceof s?this._value.flatMap().value:this._value}static fromNullable(e){return new n(e)}isAbsent(){return void 0===this.value||null==this.value}isPresent(e){let t=this.isAbsent();return!t&&e&&e.call(this,this),!t}ifPresentLazy(e=(()=>{})){return this.isPresent.call(this,e),this}orElse(e){return this.isPresent()?this:null==e?n.absent:this.flatMap(()=>e)}orElseLazy(e){return this.isPresent()?this:this.flatMap(e)}flatMap(e){let t=super.flatMap(e);return t instanceof n?t.flatMap():n.fromNullable(t.value)}getIf(...e){let t=this;for(let r=0;r<e.length;r++){let l=this.keyVal(e[r]),s=this.arrayIndex(e[r]);if(""===l&&s>=0){if((t=this.getClass().fromNullable(t.value instanceof Array?t.value.length<s?null:t.value[s]:null)).isAbsent())return t}else if(l&&s>=0){if(t.getIfPresent(l).isAbsent())return t;if((t=t.getIfPresent(l).value instanceof Array?this.getClass().fromNullable(t.getIfPresent(l).value[s]):this.getClass().absent).isAbsent())return t}else{if((t=t.getIfPresent(l)).isAbsent())return t;s>-1&&(t=this.getClass().fromNullable(t.value[s]))}}return t}match(e){return!this.isAbsent()&&e(this.value)}get(e=n.absent){return this.isAbsent()?this.getClass().fromNullable(e).flatMap():this.getClass().fromNullable(this.value).flatMap()}toJson(){return JSON.stringify(this.value)}getClass(){return n}arrayIndex(e){let t=e.indexOf("["),r=e.indexOf("]");return t>=0&&r>0&&t<r?parseInt(e.substring(t+1,r)):-1}keyVal(e){let t=e.indexOf("[");return t>=0?e.substring(0,t):e}getIfPresent(e){return this.isAbsent()?this.getClass().absent:this.getClass().fromNullable(this.value[e]).flatMap()}}n.absent=n.fromNullable(null);class a extends n{constructor(e,t="value"){super(e),this.key=t}get value(){return this._value?this._value[this.key]:null}set value(e){this._value||(this._value[this.key]=e)}orElse(e){let t={};return t[this.key]=e,this.isPresent()?this:new a(t,this.key)}orElseLazy(e){if(this.isPresent())return this;{let t={};return t[this.key]=e(),new a(t,this.key)}}getClass(){return a}static fromNullable(e,t="value"){return new a(e,t)}}a.absent=a.fromNullable(null);class i extends a{constructor(e,t,r){super(e,t),this.arrPos=void 0!==r?r:-1}get value(){return""==this.key&&this.arrPos>=0?this._value[this.arrPos]:this.key&&this.arrPos>=0?this._value[this.key][this.arrPos]:this._value[this.key]}set value(e){""==this.key&&this.arrPos>=0?this._value[this.arrPos]=e:this.key&&this.arrPos>=0?this._value[this.key][this.arrPos]=e:this._value[this.key]=e}}i.absent=i.fromNullable(null);class u extends n{constructor(e){super(e)}get shallowCopy(){return new u(l.Lang.instance.mergeMaps([{},this.value||{}]))}static fromNullable(e){return new u(e)}shallowMerge(e,t=!0){for(let r in e.value)t&&r in this.value?this.apply(r).value=e.getIf(r).value:r in this.value||(this.apply(r).value=e.getIf(r).value)}apply(...e){if(e.length<1)return;this.buildPath(e);let t=this.keyVal(e[e.length-1]),r=this.arrayIndex(e[e.length-1]);return new i(1==e.length?this.value:this.getIf.apply(this,e.slice(0,e.length-1)).value,t,r)}applyIf(e,...t){return e?this.apply(...t):{value:null}}getIf(...e){return this.getClass().fromNullable(super.getIf.apply(this,e).value)}get(e){return this.getClass().fromNullable(super.get(e).value)}delete(e){return e in this.value&&delete this.value[e],this}toJson(){return JSON.stringify(this.value)}getClass(){return u}setVal(e){this._value=e}buildPath(e){let t=this,r=this.getClass().fromNullable(null),l=-1,s=function(e,t){if(e.length<t)for(let r=e.length;r<t;r++)e.push({})};for(let n=0;n<e.length;n++){let a=this.keyVal(e[n]),i=this.arrayIndex(e[n]);if(""===a&&i>=0){t.setVal(t.value instanceof Array?t.value:[]),s(t.value,i+1),l>=0&&(r.value[l]=t.value),r=t,l=i,t=this.getClass().fromNullable(t.value[i]);continue}let u=t.getIf(a);if(-1==i)u.isAbsent()?u=this.getClass().fromNullable(t.value[a]={}):t=u;else{let e=u.value instanceof Array?u.value:[];s(e,i+1),t.value[a]=e,u=this.getClass().fromNullable(e[i])}r=t,l=i,t=u}return this}}},function(e,t,r){"use strict";r.r(t),r.d(t,"Lang",(function(){return n}));var l=r(2),s=r(0);class n{static get instance(){return n._instance||(n._instance=new n),n._instance}static saveResolve(e,t=null){try{let r=e();return void 0===r||null==r?s.Optional.fromNullable(t):s.Optional.fromNullable(r)}catch(e){return s.Optional.absent}}static saveResolveLazy(e,t=null){try{let r=e();return void 0===r||null==r?s.Optional.fromNullable(t()):s.Optional.fromNullable(r)}catch(e){return s.Optional.absent}}strToArray(e,t=/\./gi){let r=e.split(t);for(let e=0;e<r.length;e++)r[e]=this.trim(r[e]);return r}arrToMap(e,t=0){var r=new Array(e.length),l=e.length;t=t||0;for(var s=0;s<l;s++)r[e[s]]=s+t;return r}trim(e){let t=/\s/,r=(e=e.replace(/^\s\s*/,"")).length;for(;t.test(e.charAt(--r)););return e.slice(0,r+1)}isString(e){return!!arguments.length&&null!=e&&("string"==typeof e||e instanceof String)}isFunc(e){return e instanceof Function||"function"==typeof e}hitch(e,t){return e?function(){return t.apply(e,arguments||[])}:t}mergeMaps(e,t=!0,r=(e=>!1),l=(e=>!0)){let s={};return this.arrForEach(e,e=>{this.mixMaps(s,e,t,r,l)}),s}mixMaps(e,t,r,l,s){for(let n in t)t.hasOwnProperty(n)&&(l&&l(n)||s&&!s(n)||(e[n]=r?void 0!==t[n]?t[n]:e[n]:void 0!==e[n]?e[n]:t[n]));return e}objToArray(e,t,r){if(!e)return r||null;if(e instanceof Array&&!t&&!r)return e;let l=void 0!==t||null!=t?t:0,s=r||[];try{return s.concat(Array.prototype.slice.call(e,l))}catch(t){for(let t=l;t<e.length;t++)s.push(e[t]);return s}}arrForEach(e,t,r,l){if(!e||!e.length)return;let s=r||0,n=l,a=this.objToArray(e);r?a.slice(s).forEach(t,n):a.forEach(t,n)}contains(e,t){if(!e||!t)throw Error("null value on arr or str not allowed");return-1!=this.arrIndexOf(e,t)}arrIndexOf(e,t,r){if(!e||!e.length)return-1;let l=r||0;return(e=this.objToArray(e)).indexOf(t,l)}arrFilter(e,t,r,l){if(!e||!e.length)return[];let s=this.objToArray(e);return r?s.slice(r).filter(t,l):s.filter(t,l)}applyArgs(e,t,r){let l="undefined";if(r)for(let s=0;s<t.length;s++)l!=typeof e["_"+r[s]]&&(e["_"+r[s]]=t[s]),l!=typeof e[r[s]]&&(e[r[s]]=t[s]);else for(let r in t)t.hasOwnProperty(r)&&(l!=typeof e["_"+r]&&(e["_"+r]=t[r]),l!=typeof e[r]&&(e[r]=t[r]));return e}equalsIgnoreCase(e,t){return!e&&!t||!(!e||!t)&&e.toLowerCase()===t.toLowerCase()}timeout(e){let t=null;return new l.CancellablePromise((r,l)=>{t=setTimeout(()=>{r()},e)},()=>{t&&(clearTimeout(t),t=null)})}interval(e){let t=null;return new l.CancellablePromise((r,l)=>{t=setInterval(()=>{r()},e)},()=>{t&&(clearInterval(t),t=null)})}assertType(e,t){return this.isString(t)?typeof e==t:e instanceof t}}},function(e,t,r){"use strict";r.r(t),r.d(t,"PromiseStatus",(function(){return l})),r.d(t,"Promise",(function(){return n})),r.d(t,"CancellablePromise",(function(){return a}));var l,s=r(0);!function(e){e[e.PENDING=0]="PENDING",e[e.FULLFILLED=1]="FULLFILLED",e[e.REJECTED=2]="REJECTED"}(l||(l={}));class n{constructor(e){this.status=l.PENDING,this.allFuncs=[],this.value=e,this.value(e=>this.resolve(e),e=>this.reject(e))}static all(...e){let t,r=0,l=new n((e,r)=>{t=e}),s=()=>{r++,e.length==r&&t()};s.__last__=!0;for(let t=0;t<e.length;t++)e[t].finally(s);return l}static race(...e){let t,r,l=new n((e,l)=>{t=e,r=l}),s=()=>(t&&t(),t=null,r=null,null);s.__last__=!0;let a=()=>(r&&r(),r=null,t=null,null);a.__last__=!0;for(let t=0;t<e.length;t++)e[t].then(s),e[t].catch(a);return l}static reject(e){return new n((t,r)=>{e instanceof n?e.then(e=>{r(e)}):setTimeout(()=>{r(e)},1)})}static resolve(e){return new n((t,r)=>{e instanceof n?e.then(e=>t(e)):setTimeout(()=>{t(e)},1)})}then(e,t){return this.allFuncs.push({then:e}),t&&this.allFuncs.push({catch:t}),this.spliceLastFuncs(),this}catch(e){return this.allFuncs.push({catch:e}),this.spliceLastFuncs(),this}finally(e){if(!this.__reason__)return this.allFuncs.push({finally:e}),this.spliceLastFuncs(),this;this.__reason__.finally(e)}resolve(e){for(;this.allFuncs.length&&this.allFuncs[0].then;){let t=this.allFuncs.shift(),r=s.Optional.fromNullable(t.then(e));if(!r.isPresent())break;if((e=(r=r.flatMap()).value)instanceof n)return void this.transferIntoNewPromise(e)}this.appyFinally(),this.status=l.FULLFILLED}reject(e){for(;this.allFuncs.length&&!this.allFuncs[0].finally;){var t=this.allFuncs.shift();if(t.catch){var r=s.Optional.fromNullable(t.catch(e));if(r.isPresent()){if((e=(r=r.flatMap()).value)instanceof n)return void this.transferIntoNewPromise(e);this.status=l.REJECTED;break}break}}this.status=l.REJECTED,this.appyFinally()}appyFinally(){for(;this.allFuncs.length;){var e=this.allFuncs.shift();e.finally&&e.finally()}}spliceLastFuncs(){let e=[],t=[];for(let r=0;r<this.allFuncs.length;r++)for(let l in this.allFuncs[r])this.allFuncs[r][l].__last__?e.push(this.allFuncs[r]):t.push(this.allFuncs[r]);this.allFuncs=t.concat(e)}transferIntoNewPromise(e){for(var t=0;t<this.allFuncs.length;t++)for(let r in this.allFuncs[t])e[r](this.allFuncs[t][r])}}class a extends n{constructor(e,t){super(e),this.cancellator=()=>{},this.cancellator=t}cancel(){this.status=l.REJECTED,this.appyFinally(),this.allFuncs=[]}then(e,t){return super.then(e,t)}catch(e){return super.catch(e)}finally(e){return super.finally(e)}}},function(e,t,r){"use strict";r.r(t),r.d(t,"ElementAttribute",(function(){return a})),r.d(t,"DomQuery",(function(){return u})),r.d(t,"DomQueryCollector",(function(){return o}));var l=r(1),s=r(0),n=r(4);class a extends s.ValueEmbedder{constructor(e,t,r=null){super(e,t),this.element=e,this.name=t,this.defaultVal=r}get value(){let e=this.element.get(0).orElse().values;return e.length?e[0].getAttribute(this.name):this.defaultVal}set value(e){let t=this.element.get(0).orElse().values;for(let r=0;r<t.length;r++)t[r].setAttribute(this.name,e);t[0].setAttribute(this.name,e)}getClass(){return a}static fromNullable(e,t="value"){return new a(e,t)}}const i=e=>-1==e.indexOf("ln=scripts")&&-1==e.indexOf("ln=javax.faces")||-1==e.indexOf("/jsf.js")&&-1==e.indexOf("/jsf-uncompressed.js");class u{constructor(...e){if(this.rootNode=[],!s.Optional.fromNullable(e).isAbsent()&&e.length)for(let t=0;t<e.length;t++)if(l.Lang.instance.isString(e[t])){let r=u.querySelectorAll(e[t]);r.isAbsent()||e.push(...r.values)}else if(e[t]instanceof u)this.rootNode.push(...e[t].values);else if(l.Lang.instance.isString(e[t])){let r=u.querySelectorAll(e[t]);this.rootNode.push(...r.values)}else this.rootNode.push(e[t])}get value(){return this.getAsElem(0)}get values(){return this.allElems()}get id(){return new s.ValueEmbedder(this.getAsElem(0).value,"id")}get length(){return this.rootNode.length}get tagName(){return this.getAsElem(0).getIf("tagName")}get nodeName(){return this.getAsElem(0).getIf("nodeName")}isTag(e){return!this.isAbsent()&&(this.nodeName.orElse("__none___").value.toLowerCase()==e.toLowerCase()||this.tagName.orElse("__none___").value.toLowerCase()==e.toLowerCase())}get type(){return this.getAsElem(0).getIf("type")}get name(){return new s.ValueEmbedder(this.getAsElem(0).value,"name")}get inputValue(){return this.getAsElem(0).getIf("value").isPresent()?new s.ValueEmbedder(this.getAsElem(0).value):s.ValueEmbedder.absent}get elements(){let e=this.each(e=>{let t=e.value.value;return t.elements?t.elements:null}).stream.filter(e=>!!e).value;return new u(...e).orElseLazy(()=>this.querySelectorAll("form").elements).orElseLazy(()=>this.querySelectorAll("input, select, textarea"))}get disabled(){return!!this.attr("disabled").value}set disabled(e){this.attr("disabled").value=e+""}get childNodes(){let e=[];return this.eachElem(t=>{e=e.concat(l.Lang.instance.objToArray(t.childNodes))}),new u(...e)}get stream(){let e=[];return this.each(t=>{e.push(t)}),new n.Stream(...e)}static querySelectorAll(e){return new u(document).querySelectorAll(e)}static byId(e){return l.Lang.instance.isString(e)?new u(document).byId(e):new u(e)}static byTagName(e){return l.Lang.instance.isString(e)?new u(document).byTagName(e):new u(e)}static globalEval(e){return new u(document).globalEval(e)}static fromMarkup(e){let t=new u(document.createElement("div"));t.html("<table><tbody><tr><td>"+e+"</td></tr></tbody></table>");let r=t.querySelectorAll("td").get(0).childNodes;return r.detach(),t.html(""),r}get(e){return e<this.rootNode.length?new u(this.rootNode[e]):u.absent}getAsElem(e,t=s.Optional.absent){return e<this.rootNode.length?s.Optional.fromNullable(this.rootNode[e]):t}allElems(){return this.rootNode}isAbsent(){return 0==this.length}isPresent(e){let t=this.isAbsent();return!t&&e&&e.call(this,this),!t}ifPresentLazy(e=function(){}){return this.isPresent.call(this,e),this}delete(){this.eachElem(e=>{e.parentNode&&e.parentNode.removeChild(e)})}querySelectorAll(e){if(0==this.rootNode.length)return this;let t=[];for(let r=0;r<this.rootNode.length;r++){if(!this.rootNode[r].querySelectorAll)continue;let s=this.rootNode[r].querySelectorAll(e);t=t.concat(l.Lang.instance.objToArray(s))}return new u(...t)}byId(e,t){let r=[];for(let l=0;t&&l<this.rootNode.length;l++)this.rootNode[l].id==e&&r.push(new u(this.rootNode[l]));return r=r.concat(this.querySelectorAll(`[id="${e}"]`)),new u(...r)}byTagName(e,t){let r=[];for(let l=0;t&&l<this.rootNode.length;l++)this.rootNode[l].tagName==e&&r.push(new u(this.rootNode[l]));return r=r.concat(this.querySelectorAll(e)),new u(...r)}attr(e,t=null){return new a(this,e,t)}hasClass(e){let t=!1;return this.each(r=>{let l=r.attr("class").value||"";if(-1!=l.toLowerCase().indexOf(e.toLowerCase())){let r=l.split(/\s+/gi),s=!1;for(let t=0;t<r.length&&!s;t++)s=r[t].toLowerCase()==e.toLowerCase();if(t=t||s)return!1}}),t}addClass(e){return this.each(t=>{let r=t.attr("class").value||"";this.hasClass(e)||(t.attr("class").value=l.Lang.instance.trim(r+" "+e))}),this}removeClass(e){return this.each(t=>{if(this.hasClass(e)){let r=[],l=(t.attr("class").value||"").split(/\s+/gi);for(let t=0;t<l.length;t++)l[t].toLowerCase()!=e.toLowerCase()&&r.push(l[t]);t.attr("class").value=r.join(" ")}}),this}isMultipartCandidate(){return this.querySelectorAll("input[type='file']").firstElem().isPresent()}html(e){return s.Optional.fromNullable(e).isAbsent()?this.getAsElem(0).isPresent()?s.Optional.fromNullable(this.getAsElem(0).value.innerHTML):s.Optional.absent:(this.getAsElem(0).isPresent()&&(this.getAsElem(0).value.innerHTML=e),this)}_mozMatchesSelector(e,t){let r=e;return(r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector||function(t){let r=(document||window.ownerDocument).querySelectorAll(t),l=r.length;for(;--l>=0&&r.item(l)!==e;);return l>-1}).call(e,t)}filterSelector(e){let t=[];return this.eachElem(r=>{this._mozMatchesSelector(r,e)&&t.push(r)}),new u(...t)}matchesSelector(e){return this.eachElem(t=>{if(!this._mozMatchesSelector(t,e))return!1}),!0}getIf(...e){let t=this.childNodes;for(let r=0;r<e.length;r++)if((t=t.filterSelector(e[r])).isAbsent())return t;return t}eachElem(e){for(let t=0,r=this.rootNode.length;t<r&&!1!==e(this.rootNode[t],t);t++);return this}firstElem(e=(e=>e)){return this.rootNode.length>1&&e(this.rootNode[0],0),this}each(e){for(let t=0,r=this.rootNode.length;t<r&&!1!==e(this.get(t),t);t++);return this}first(e=(e=>e)){return this.rootNode.length>=1?(e(this.get(0),0),this.get(0)):this}filter(e){let t=[];return this.each(r=>{e(r)&&t.push(r)}),new u(...t)}globalEval(e,t){let r=document.getElementsByTagName("head")[0]||document.documentElement,l=document.createElement("script");t&&l.setAttribute("nonce",t),l.type="text/javascript",l.innerHTML=e;let s=r.appendChild(l);return r.removeChild(s),this}detach(){return this.eachElem(e=>{e.parentNode.removeChild(e)}),this}appendTo(e){this.eachElem(t=>{e.getAsElem(0).orElseLazy(()=>({appendChild:e=>{}})).value.appendChild(t)})}loadScriptEval(e,t=0,r){let l=new XMLHttpRequest;if(l.open("GET",e,!1),r&&l.setRequestHeader("Content-Type","application/x-javascript; charset:"+r),l.send(null),4!=l.readyState)throw Error("Loading of script "+e+" failed ");if(200!=l.status)throw Error(l.responseText);return(t?setTimeout((function(){this.globalEval(l.responseText+"\r\n//@ sourceURL="+e)}),t):this.globalEval(l.responseText.replace("\n","\r\n")+"\r\n//@ sourceURL="+e),this)}insertAfter(...e){this.each(t=>{let r=t.getAsElem(0).value,l=r.parentNode;for(let t=0;t<e.length;t++){let s=r.nextSibling;e[t].eachElem(e=>{s?(l.insertBefore(e,s),r=s):l.appendChild(e)})}});let t=[];return t.push(this),t.concat(e),new u(...t)}insertBefore(...e){this.each(t=>{let r=t.getAsElem(0).value,l=r.parentNode;for(let t=0;t<e.length;t++)e[t].eachElem(e=>{l.insertBefore(e,r)})});let t=[];return t.push(this),t.concat(e),new u(...t)}orElse(...e){return this.isPresent()?this:new u(...e)}orElseLazy(e){return this.isPresent()?this:new u(e())}parents(e){let t=[];const r=e.toLowerCase();let l=e=>{(e.tagName||"").toLowerCase()==r&&t.push(e)};return this.eachElem(r=>{for(;r.parentNode;)if(r=r.parentNode,l(r),"form"==e&&t.length)return!1}),new u(...t)}copyAttrs(e){return e.eachElem(e=>{for(let t=0;t<e.attributes.length;t++){let r=e.attributes[t].value;r&&(this.attr(e.attributes[t].name).value=r);let l=e;"value"in l&&(this.resolveAttributeHolder().value=l.value),"checked"in l&&(this.resolveAttributeHolder("checked").checked=l.checked||!0),"disabled"in l&&(this.resolveAttributeHolder("disabled").disabled=l.checked||"disabled")}}),this}resolveAttributeHolder(e="value"){let t=[];return t[e]=null,e in this.getAsElem(0).value?this.getAsElem(0).value:t}outerHTML(e,t,r){let l=u.fromMarkup(e),s=[],n=this.getAsElem(0).value,a=l.get(0),i=n.parentNode,o=a.getAsElem(0).value;i.replaceChild(o,n),s.push(new u(o));let h=[];for(let e=1;e<l.length;e++)h.push(l.get(e)),this.rootNode.push(l.get(e).getAsElem(0).value);return s.push(u.byId(o).insertAfter(...h)),t&&this.runScripts(),r&&this.runCss(),new u(...s)}runScripts(e=i){let t=l.Lang.instance,r=[],s=l=>{let s=l.tagName,n=l.type||"";if(s&&t.equalsIgnoreCase(s,"script")&&(""===n||t.equalsIgnoreCase(n,"text/javascript")||t.equalsIgnoreCase(n,"javascript")||t.equalsIgnoreCase(n,"text/ecmascript")||t.equalsIgnoreCase(n,"ecmascript"))){let t=l.getAttribute("src");if(void 0!==t&&null!=t&&t.length>0)e(t)&&(r.length&&(this.globalEval(r.join("\n")),r=[]),this.loadScriptEval(t,0,"UTF-8"));else{let e=l.text,t=!0;for(;t;)t=!1," "==e.substring(0,1)&&(e=e.substring(1),t=!0),"\x3c!--"==e.substring(0,4)&&(e=e.substring(4),t=!0),"//<![CDATA["==e.substring(0,11)&&(e=e.substring(11),t=!0);r.push(e)}}};try{let e=this.querySelectorAll("script");if(null==e)return;for(let t=0;t<e.length;t++)s(e.getAsElem(t).value);r.length&&this.globalEval(r.join("\n"))}catch(e){window.console&&window.console.error&&console.error(e.message||e.description)}finally{s=null}}runCss(){const e=l.Lang.instance,t=(e,t)=>{let r=document.createElement("style");document.getElementsByTagName("head")[0].appendChild(r);let l=r.sheet?r.sheet:r.styleSheet;r.setAttribute("rel",e.getAttribute("rel")||"stylesheet"),r.setAttribute("type",e.getAttribute("type")||"text/css"),void 0!==l.cssText?l.cssText=t:r.appendChild(document.createTextNode(t))},r=r=>{const l=e.equalsIgnoreCase,s=r.tagName;if(s&&l(s,"link")&&l(r.getAttribute("type"),"text/css"))t(r,"@import url('"+r.getAttribute("href")+"');");else if(s&&l(s,"style")&&l(r.getAttribute("type"),"text/css")){let e=[],l=r.childNodes;if(l){const t=l.length;for(let r=0;r<t;r++)e.push(l[r].innerHTML||l[r].data)}else r.innerHTML&&e.push(r.innerHTML);t(r,e.join(""))}},s=this.querySelectorAll("link, style");if(null!=s){for(let e=0;e<s.length;e++){r(s.getAsElem(e).value)}return this}}get cDATAAsString(){let e=[];return this.each(t=>{t.childNodes.eachElem(t=>{e.push(t.data)})}),e.join("")}click(){return this.fireEvent("click"),this}addEventListener(e,t,r){return this.eachElem(l=>{l.addEventListener(e,t,r)}),this}removeEventListener(e,t,r){return this.eachElem(l=>{l.removeEventListener(e,t,r)}),this}fireEvent(e){this.eachElem(t=>{var r;if(t.ownerDocument)r=t.ownerDocument;else{if(9!=t.nodeType)throw new Error("Invalid node passed to fireEvent: "+t.id);r=t}if(t.dispatchEvent){var l="";switch(e){case"click":case"mousedown":case"mouseup":l="MouseEvents";break;case"focus":case"change":case"blur":case"select":l="HTMLEvents";break;default:throw"fireEvent: Couldn't find an event class for event '"+e+"'."}let s=r.createEvent(l);s.initEvent(e,!0,!0),s.synthetic=!0,t.dispatchEvent(s)}else if(t.fireEvent){var s=r.createEventObject();s.synthetic=!0,t.fireEvent("on"+e,s)}})}textContent(e=""){return this.stream.map(e=>{return e.getAsElem(0).orElseLazy(()=>({textContent:""})).value.textContent||""}).reduce((t,r)=>t+e+r,"").value}innerText(e=""){return this.stream.map(e=>{return e.getAsElem(0).orElseLazy(()=>({innerText:""})).value.innerText||""}).reduce((t,r)=>t+e+r,"").value}encodeFormElement(e=new s.Config({})){if(this.name.isAbsent())return;let t=e.shallowCopy;return this.eachElem(e=>{if(!e.name)return;let r=e.name,l=e.tagName.toLowerCase(),s=e.type.orElse("__none__").value.toLowerCase();if(s=s.toLowerCase(),("input"==l||"textarea"==l||"select"==l)&&null!=r&&""!=r&&!e.disabled){if("select"==l){let l=e.getAsElem(0).value;if(l.selectedIndex>=0){let e=l.options.length;for(let s=0;s<e;s++)if(l.options[s].selected){let e=l.options[s];t.apply(r).value=null!=e.getAttribute("value")?e.value:e.text}}}if("select"!=l&&"button"!=s&&"reset"!=s&&"submit"!=s&&"image"!=s&&("checkbox"!=s&&"radio"!=s||e.checked)){let l=e.value.files;l&&l.length?t.apply(r).value=l[0]:t.apply(r).value=e.inputValue.value}}}),t}subNodes(e,t){return s.Optional.fromNullable(t).isAbsent()&&(t=this.length),new u(...this.rootNode.slice(e,Math.min(t,this.length)))}}u.absent=new u;class o{constructor(){this.data=[]}collect(e){this.data.push(e)}get finalValue(){return new u(...this.data)}}},function(e,t,r){"use strict";r.r(t),r.d(t,"Stream",(function(){return s})),r.d(t,"ArrayCollector",(function(){return n}));var l=r(0);class s{constructor(...e){this.value=e}static of(...e){return new s(...e)}each(e){for(let t=0;t<this.value.length&&!1!==e(this.value[t],t);t++);return this}map(e){e||(e=e=>e);let t=[];return this.each((r,l)=>{t.push(e(r))}),new s(...t)}flatMap(e){let t=this.map(e),r=this.mapStreams(t);return new s(...r)}filter(e){let t=[];return this.each(r=>{e(r)&&t.push(r)}),new s(...t)}reduce(e,t=null){let r=null!=t?0:1,s=null!=t?t:this.value.length?this.value[0]:null;for(let t=r;t<this.value.length;t++)s=e(s,this.value[t]);return l.Optional.fromNullable(s)}first(){return this.value&&this.value.length?l.Optional.fromNullable(this.value[0]):l.Optional.absent}last(){return l.Optional.fromNullable(this.value.length?this.value[this.value.length-1]:null)}anyMatch(e){for(let t=0;t<this.value.length;t++)if(e(this.value[t]))return!0;return!1}allMatch(e){if(!this.value.length)return!1;let t=0;for(let r=0;r<this.value.length;r++)e(this.value[r])&&t++;return t==this.value.length}noneMatch(e){let t=0;for(let r=0;r<this.value.length;r++)e(this.value[r])&&t++;return t==this.value.length}collect(e){return this.each(t=>e.collect(t)),e.finalValue}mapStreams(e){let t=[];return e.each(e=>{e instanceof s?t=t.concat(this.mapStreams(e)):t.push(e)}),t}}class n{constructor(){this.data=[]}collect(e){this.data.push(e)}get finalValue(){return this.data}}},function(e,t,r){"use strict";r.r(t),r.d(t,"XMLQuery",(function(){return n}));var l=r(1),s=r(3);class n extends s.DomQuery{constructor(e){let t=e=>{if(null==e)return null;return l.Lang.saveResolveLazy(()=>new window.DOMParser,()=>(()=>{let e=new ActiveXObject("Microsoft.XMLDOM");return e.async=!1,{parseFromString:(t,r)=>e.loadXML(t)}})()).value.parseFromString(e,"text/xml")};l.Lang.instance.isString(e)?super(t(e)):super(e)}isXMLParserError(){return this.querySelectorAll("parsererror").isPresent()}toString(){let e=[];return this.eachElem(t=>{void 0!==window.XMLSerializer?e.push((new window.XMLSerializer).serializeToString(t)):void 0!==t.xml&&e.push(t.xml)}),e.join("")}parserErrorText(e){return this.querySelectorAll("parsererror").textContent(e)}static parseXML(e){return new n(e)}static fromString(e){return new n(e)}}}])}));
//# sourceMappingURL=XmlQuery.js.map