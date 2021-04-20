define((function(){return function(){"use strict";var t={805:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.Lang=void 0;var r=n(152);!function(t){function e(t){for(var e=/\s/,n=(t=t.replace(/^\s\s*/,"")).length;e.test(t.charAt(--n)););return t.slice(0,n+1)}function n(t){return!!arguments.length&&null!=t&&("string"==typeof t||t instanceof String)}t.saveResolve=function(t,e){void 0===e&&(e=null);try{var n=t();return r.Optional.fromNullable(null!=n?n:e)}catch(t){return r.Optional.absent}},t.saveResolveLazy=function(t,e){void 0===e&&(e=null);try{var n=t();return r.Optional.fromNullable(null!=n?n:e())}catch(t){return r.Optional.absent}},t.strToArray=function(t,n){void 0===n&&(n=/\./gi);var r=[];return t.split(n).forEach((function(t){r.push(e(t))})),r},t.trim=e,t.objToArray=function(t,e,n){return void 0===e&&(e=0),void 0===n&&(n=[]),"__undefined__"==(null!=t?t:"__undefined__")?null!=n?n:null:t instanceof Array&&!e&&!n?t:n.concat(Array.prototype.slice.call(t,e))},t.equalsIgnoreCase=function(t,e){var n=null!=e?e:"___no_value__";return(null!=t?t:"___no_value__").toLowerCase()===n.toLowerCase()},t.assertType=function(t,e){return n(e)?typeof t==e:t instanceof e},t.isString=n,t.isFunc=function(t){return t instanceof Function||"function"==typeof t},t.objAssign=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(null==t)throw new TypeError("Cannot convert undefined or null to object");var r=Object(t);return Object.assign?(e.forEach((function(t){return Object.assign(r,t)})),r):(e.filter((function(t){return null!=t})).forEach((function(t){var e=t;Object.keys(e).filter((function(t){return Object.prototype.hasOwnProperty.call(e,t)})).forEach((function(t){return r[t]=e[t]}))})),r)}}(e.Lang||(e.Lang={}))},152:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},a=this&&this.__spreadArray||function(t,e){for(var n=0,r=e.length,o=t.length;n<r;n++,o++)t[o]=e[n];return t};Object.defineProperty(e,"__esModule",{value:!0}),e.Config=e.ValueEmbedder=e.Optional=e.Monad=void 0;var u=n(805),l=n(255),s=n(551),c=u.Lang.objAssign,f=function(){function t(t){this._value=t}return Object.defineProperty(t.prototype,"value",{get:function(){return this._value},enumerable:!1,configurable:!0}),t.prototype.map=function(e){return e||(e=function(t){return t}),new t(e(this.value))},t.prototype.flatMap=function(e){for(var n=this.map(e);(null==n?void 0:n.value)instanceof t;)n=n.value;return n},t}();e.Monad=f;var h=function(t){function e(e){return t.call(this,e)||this}return o(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this._value instanceof f?this._value.flatMap().value:this._value},enumerable:!1,configurable:!0}),e.fromNullable=function(t){return new e(t)},e.prototype.isAbsent=function(){return void 0===this.value||null==this.value},e.prototype.isPresent=function(t){var e=this.isAbsent();return!e&&t&&t.call(this,this),!e},e.prototype.ifPresentLazy=function(t){return void 0===t&&(t=function(){}),this.isPresent.call(this,t),this},e.prototype.orElse=function(t){return this.isPresent()?this:null==t?e.absent:this.flatMap((function(){return t}))},e.prototype.orElseLazy=function(t){return this.isPresent()?this:this.flatMap(t)},e.prototype.flatMap=function(n){var r=t.prototype.flatMap.call(this,n);return r instanceof e?r.flatMap():e.fromNullable(r.value)},e.prototype.getIf=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=this,r=0;r<t.length;r++){var o=this.keyVal(t[r]),i=this.arrayIndex(t[r]);if(""===o&&i>=0){if((n=this.getClass().fromNullable(n.value instanceof Array?n.value.length<i?null:n.value[i]:null)).isAbsent())return n}else if(o&&i>=0){if(n.getIfPresent(o).isAbsent())return n;if((n=n.getIfPresent(o).value instanceof Array?this.getClass().fromNullable(n.getIfPresent(o).value[i]):this.getClass().absent).isAbsent())return n}else{if((n=n.getIfPresent(o)).isAbsent())return n;i>-1&&(n=this.getClass().fromNullable(n.value[i]))}}return n},e.prototype.match=function(t){return!this.isAbsent()&&t(this.value)},e.prototype.get=function(t){return void 0===t&&(t=e.absent),this.isAbsent()?this.getClass().fromNullable(t).flatMap():this.getClass().fromNullable(this.value).flatMap()},e.prototype.toJson=function(){return JSON.stringify(this.value)},e.prototype.getClass=function(){return e},e.prototype.arrayIndex=function(t){var e=t.indexOf("["),n=t.indexOf("]");return e>=0&&n>0&&e<n?parseInt(t.substring(e+1,n)):-1},e.prototype.keyVal=function(t){var e=t.indexOf("[");return e>=0?t.substring(0,e):t},e.prototype.getIfPresent=function(t){return this.isAbsent()?this.getClass().absent:this.getClass().fromNullable(this.value[t]).flatMap()},e.prototype.resolve=function(t){if(this.isAbsent())return e.absent;try{return e.fromNullable(t(this.value))}catch(t){return e.absent}},e.absent=e.fromNullable(null),e}(f);e.Optional=h;var p=function(t){function e(e,n){void 0===n&&(n="value");var r=t.call(this,e)||this;return r.key=n,r}return o(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this._value?this._value[this.key]:null},set:function(t){this._value&&(this._value[this.key]=t)},enumerable:!1,configurable:!0}),e.prototype.orElse=function(t){var n={};return n[this.key]=t,this.isPresent()?this:new e(n,this.key)},e.prototype.orElseLazy=function(t){if(this.isPresent())return this;var n={};return n[this.key]=t(),new e(n,this.key)},e.prototype.getClass=function(){return e},e.fromNullable=function(t,n){return void 0===n&&(n="value"),new e(t,n)},e.absent=e.fromNullable(null),e}(h);e.ValueEmbedder=p;var v=function(t){function e(e,n,r){var o=t.call(this,e,n)||this;return o.arrPos=null!=r?r:-1,o}return o(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return""==this.key&&this.arrPos>=0?this._value[this.arrPos]:this.key&&this.arrPos>=0?this._value[this.key][this.arrPos]:this._value[this.key]},set:function(t){""==this.key&&this.arrPos>=0?this._value[this.arrPos]=t:this.key&&this.arrPos>=0?this._value[this.key][this.arrPos]=t:this._value[this.key]=t},enumerable:!1,configurable:!0}),e.absent=e.fromNullable(null),e}(p),y=function(t){function e(e){return t.call(this,e)||this}return o(e,t),Object.defineProperty(e.prototype,"shallowCopy",{get:function(){return new e(s.Stream.ofAssoc(this.value).collect(new l.AssocArrayCollector))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"deepCopy",{get:function(){return new e(c({},this.value))},enumerable:!1,configurable:!0}),e.fromNullable=function(t){return new e(t)},e.prototype.shallowMerge=function(t,e,n){var r=this;void 0===e&&(e=!0),void 0===n&&(n=!1);var o=function(o){!e&&o in u.value||(n?Array.isArray(t.getIf(o).value)?s.Stream.of.apply(s.Stream,a([],i(t.getIf(o).value))).each((function(t){return r.append(o).value=t})):u.append(o).value=t.getIf(o).value:u.assign(o).value=t.getIf(o).value)},u=this;for(var l in t.value)o(l)},e.prototype.append=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t.length<1;if(!n){var r=t[t.length-1],o=(this.keyVal(r),this.getIf.apply(this,a([],i(t))).isPresent());this.buildPath(t);var u=this.arrayIndex(r);if(u>-1)throw Error("Append only possible on non array properties, use assign on indexed data");var l=this.getIf.apply(this,a([],i(t))).value;Array.isArray(l)||(l=this.assign.apply(this,a([],i(t))).value=[l]),o&&l.push({}),u=l.length-1;var s=new v(1==t.length?this.value:this.getIf.apply(this,t.slice(0,t.length-1)).value,r,u);return s}},e.prototype.appendIf=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return t?this.append.apply(this,a([],i(e))):{value:null}},e.prototype.assign=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!(t.length<1)){this.buildPath(t);var n=this.keyVal(t[t.length-1]),r=this.arrayIndex(t[t.length-1]),o=new v(1==t.length?this.value:this.getIf.apply(this,t.slice(0,t.length-1)).value,n,r);return o}},e.prototype.assignIf=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return t?this.assign.apply(this,a([],i(e))):{value:null}},e.prototype.getIf=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this.getClass().fromNullable(t.prototype.getIf.apply(this,e).value)},e.prototype.get=function(e){return this.getClass().fromNullable(t.prototype.get.call(this,e).value)},e.prototype.delete=function(t){return t in this.value&&delete this.value[t],this},e.prototype.toJson=function(){return JSON.stringify(this.value)},e.prototype.getClass=function(){return e},e.prototype.setVal=function(t){this._value=t},e.prototype.buildPath=function(t){for(var e=this,n=this.getClass().fromNullable(null),r=-1,o=function(t,e){for(var n=t.length,r=n+e,o=n;o<r;o++)t.push({})},i=0;i<t.length;i++){var a=this.keyVal(t[i]),u=this.arrayIndex(t[i]);if(""===a&&u>=0)e.setVal(e.value instanceof Array?e.value:[]),o(e.value,u+1),r>=0&&(n.value[r]=e.value),n=e,r=u,e=this.getClass().fromNullable(e.value[u]);else{var l=e.getIf(a);if(-1==u)l.isAbsent()?l=this.getClass().fromNullable(e.value[a]={}):e=l;else{var s=l.value instanceof Array?l.value:[];o(s,u+1),e.value[a]=s,l=this.getClass().fromNullable(s[u])}n=e,r=u,e=l}}return this},e}(h);e.Config=y},376:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.CancellablePromise=e.Promise=e.interval=e.timeout=e.PromiseStatus=void 0;var i,a=n(152);!function(t){t[t.PENDING=0]="PENDING",t[t.FULLFILLED=1]="FULLFILLED",t[t.REJECTED=2]="REJECTED"}(i=e.PromiseStatus||(e.PromiseStatus={})),e.timeout=function(t){var e=null;return new l((function(n,r){e=setTimeout((function(){return n()}),t)}),(function(){e&&(clearTimeout(e),e=null)}))},e.interval=function(t){var e=null;return new l((function(n,r){e=setInterval((function(){n()}),t)}),(function(){e&&(clearInterval(e),e=null)}))};var u=function(){function t(t){var e=this;this.status=i.PENDING,this.allFuncs=[],this.value=t,this.value((function(t){return e.resolve(t)}),(function(t){return e.reject(t)}))}return t.all=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r,o=0,i=new t((function(t,e){r=t})),a=function(){o++,e.length==o&&r()};a.__last__=!0;for(var u=0;u<e.length;u++)e[u].finally(a);return i},t.race=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r,o,i=new t((function(t,e){r=t,o=e})),a=function(){return r&&r(),r=null,o=null,null};a.__last__=!0;var u=function(){return o&&o(),o=null,r=null,null};u.__last__=!0;for(var l=0;l<e.length;l++)e[l].then(a),e[l].catch(u);return i},t.reject=function(e){return new t((function(n,r){e instanceof t?e.then((function(t){r(t)})):setTimeout((function(){r(e)}),1)}))},t.resolve=function(e){return new t((function(n,r){e instanceof t?e.then((function(t){return n(t)})):setTimeout((function(){n(e)}),1)}))},t.prototype.then=function(t,e){return this.allFuncs.push({then:t}),e&&this.allFuncs.push({catch:e}),this.spliceLastFuncs(),this},t.prototype.catch=function(t){return this.allFuncs.push({catch:t}),this.spliceLastFuncs(),this},t.prototype.finally=function(t){if(!this.__reason__)return this.allFuncs.push({finally:t}),this.spliceLastFuncs(),this;this.__reason__.finally(t)},t.prototype.resolve=function(e){for(;this.allFuncs.length&&this.allFuncs[0].then;){var n=this.allFuncs.shift(),r=a.Optional.fromNullable(n.then(e));if(!r.isPresent())break;if((e=(r=r.flatMap()).value)instanceof t)return void this.transferIntoNewPromise(e)}this.appyFinally(),this.status=i.FULLFILLED},t.prototype.reject=function(e){for(;this.allFuncs.length&&!this.allFuncs[0].finally;){var n=this.allFuncs.shift();if(n.catch){var r=a.Optional.fromNullable(n.catch(e));if(r.isPresent()){if((e=(r=r.flatMap()).value)instanceof t)return void this.transferIntoNewPromise(e);this.status=i.REJECTED;break}break}}this.status=i.REJECTED,this.appyFinally()},t.prototype.appyFinally=function(){for(;this.allFuncs.length;){var t=this.allFuncs.shift();t.finally&&t.finally()}},t.prototype.spliceLastFuncs=function(){for(var t=[],e=[],n=0;n<this.allFuncs.length;n++)for(var r in this.allFuncs[n])this.allFuncs[n][r].__last__?t.push(this.allFuncs[n]):e.push(this.allFuncs[n]);this.allFuncs=e.concat(t)},t.prototype.transferIntoNewPromise=function(t){for(var e=0;e<this.allFuncs.length;e++)for(var n in this.allFuncs[e])t[n](this.allFuncs[e][n])},t}();e.Promise=u;var l=function(t){function e(e,n){var r=t.call(this,e)||this;return r.cancellator=function(){},r.cancellator=n,r}return o(e,t),e.prototype.cancel=function(){this.status=i.REJECTED,this.appyFinally(),this.allFuncs=[]},e.prototype.then=function(e,n){return t.prototype.then.call(this,e,n)},e.prototype.catch=function(e){return t.prototype.catch.call(this,e)},e.prototype.finally=function(e){return t.prototype.finally.call(this,e)},e}(u);e.CancellablePromise=l},255:function(t,e,n){var r=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},o=this&&this.__spreadArray||function(t,e){for(var n=0,r=e.length,o=t.length;n<r;n++,o++)t[o]=e[n];return t};Object.defineProperty(e,"__esModule",{value:!0}),e.QueryFormStringCollector=e.QueryFormDataCollector=e.FormDataCollector=e.AssocArrayCollector=e.Run=e.ArrayAssocArrayCollector=e.ArrayCollector=e.FlatMapStreamDataSource=e.MappedStreamDataSource=e.FilteredStreamDatasource=e.ArrayStreamDataSource=e.SequenceDataSource=void 0;var i=n(551),a=function(){function t(t,e){this.total=e,this.start=t,this.value=t}return t.prototype.hasNext=function(){return this.value<this.total},t.prototype.next=function(){return Math.min(this.value++,this.total-1)},t.prototype.reset=function(){this.value=0},t}();e.SequenceDataSource=a;var u=function(){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.dataPos=-1,this.value=t}return t.prototype.hasNext=function(){return this.value.length-1>this.dataPos},t.prototype.next=function(){return this.dataPos++,this.value[this.dataPos]},t.prototype.reset=function(){this.dataPos=-1},t}();e.ArrayStreamDataSource=u;var l=function(){function t(t,e){this.filteredNext=null,this.filterFunc=t,this.inputDataSource=e}return t.prototype.hasNext=function(){for(;null==this.filteredNext&&this.inputDataSource.hasNext();){var t=this.inputDataSource.next();if(this.filterFunc(t))return this.filteredNext=t,!0;this.filteredNext=null}return null!=this.filteredNext},t.prototype.next=function(){var t=this.filteredNext;return this.filteredNext=null,this.hasNext(),t},t.prototype.reset=function(){this.filteredNext=null,this.inputDataSource.reset()},t}();e.FilteredStreamDatasource=l;var s=function(){function t(t,e){this.mapFunc=t,this.inputDataSource=e}return t.prototype.hasNext=function(){return this.inputDataSource.hasNext()},t.prototype.next=function(){return this.mapFunc(this.inputDataSource.next())},t.prototype.reset=function(){this.inputDataSource.reset()},t}();e.MappedStreamDataSource=s;var c=function(){function t(t,e){this.mapFunc=t,this.inputDataSource=e}return t.prototype.hasNext=function(){return this.resolveCurrentNext()||this.resolveNextNext()},t.prototype.resolveCurrentNext=function(){var t=!1;return this.activeDataSource&&(t=this.activeDataSource.hasNext()),t},t.prototype.resolveNextNext=function(){for(var t=!1;!t&&this.inputDataSource.hasNext();){var e=this.mapFunc(this.inputDataSource.next());Array.isArray(e)?this.activeDataSource=new(u.bind.apply(u,o([void 0],r(e)))):this.activeDataSource=e,t=this.activeDataSource.hasNext()}return t},t.prototype.next=function(){return this.activeDataSource.next()},t.prototype.reset=function(){this.inputDataSource.reset()},t}();e.FlatMapStreamDataSource=c;var f=function(){function t(){this.data=[]}return t.prototype.collect=function(t){this.data.push(t)},Object.defineProperty(t.prototype,"finalValue",{get:function(){return this.data},enumerable:!1,configurable:!0}),t}();e.ArrayCollector=f;var h=function(){function t(){this.finalValue={}}return t.prototype.collect=function(t){var e,n,r,o,i=null!==(e=null==t?void 0:t[0])&&void 0!==e?e:t;this.finalValue[i]=null!==(r=null===(n=this.finalValue)||void 0===n?void 0:n[i])&&void 0!==r?r:[],this.finalValue[i].push(null===(o=null==t?void 0:t[1])||void 0===o||o)},t}();e.ArrayAssocArrayCollector=h;var p=function(){function t(){}return t.prototype.collect=function(t){},Object.defineProperty(t.prototype,"finalValue",{get:function(){return null},enumerable:!1,configurable:!0}),t}();e.Run=p;var v=function(){function t(){this.finalValue={}}return t.prototype.collect=function(t){var e,n;this.finalValue[null!==(e=t[0])&&void 0!==e?e:t]=null===(n=t[1])||void 0===n||n},t}();e.AssocArrayCollector=v;var y=function(){function t(){this.finalValue=new FormData}return t.prototype.collect=function(t){this.finalValue.append(t.key,t.value)},t}();e.FormDataCollector=y;var d=function(){function t(){this.finalValue=new FormData}return t.prototype.collect=function(t){var e=t.encodeFormElement();e.isPresent()&&this.finalValue.append(t.name.value,e.get(t.name).value)},t}();e.QueryFormDataCollector=d;var m=function(){function t(){this.formData=[]}return t.prototype.collect=function(t){var e=t.encodeFormElement();e.isPresent()&&this.formData.push([t.name.value,e.get(t.name).value])},Object.defineProperty(t.prototype,"finalValue",{get:function(){return i.Stream.of.apply(i.Stream,o([],r(this.formData))).map((function(t){return t.join("=")})).reduce((function(t,e){return[t,e].join("&")})).orElse("").value},enumerable:!1,configurable:!0}),t}();e.QueryFormStringCollector=m},551:function(t,e,n){var r=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},o=this&&this.__spreadArray||function(t,e){for(var n=0,r=e.length,o=t.length;n<r;n++,o++)t[o]=e[n];return t};Object.defineProperty(e,"__esModule",{value:!0}),e.LazyStream=e.Stream=void 0;var i=n(152),a=n(255),u=function(){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._limits=-1,this.pos=-1,this.value=t}return t.of=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return new(t.bind.apply(t,o([void 0],r(e))))},t.ofAssoc=function(t){return this.of.apply(this,o([],r(Object.keys(t)))).map((function(e){return[e,t[e]]}))},t.ofDataSource=function(e){for(var n=[];e.hasNext();)n.push(e.next());return new(t.bind.apply(t,o([void 0],r(n))))},t.prototype.limits=function(t){return this._limits=t,this},t.prototype.concat=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.of.apply(t,o([this],r(e))).flatMap((function(t){return t}))},t.prototype.onElem=function(t){for(var e=0;e<this.value.length&&(-1==this._limits||e<this._limits)&&!1!==t(this.value[e],e);e++);return this},t.prototype.each=function(t){this.onElem(t)},t.prototype.map=function(e){e||(e=function(t){return t});var n=[];return this.each((function(t,r){n.push(e(t))})),new(t.bind.apply(t,o([void 0],r(n))))},t.prototype.flatMap=function(e){var n=[];return this.each((function(t){var i=e(t);n=Array.isArray(i)?n.concat(i):n.concat.apply(n,o([],r(i.value)))})),t.of.apply(t,o([],r(n)))},t.prototype.filter=function(e){var n=[];return this.each((function(t){e(t)&&n.push(t)})),new(t.bind.apply(t,o([void 0],r(n))))},t.prototype.reduce=function(t,e){void 0===e&&(e=null);for(var n=null!=e?0:1,r=null!=e?e:this.value.length?this.value[0]:null,o=n;o<this.value.length&&(-1==this._limits||o<this._limits);o++)r=t(r,this.value[o]);return i.Optional.fromNullable(r)},t.prototype.first=function(){return this.value&&this.value.length?i.Optional.fromNullable(this.value[0]):i.Optional.absent},t.prototype.last=function(){var t=this._limits>0?Math.min(this._limits,this.value.length):this.value.length;return i.Optional.fromNullable(t?this.value[t-1]:null)},t.prototype.anyMatch=function(t){for(var e=0;e<this.value.length&&(-1==this._limits||e<this._limits);e++)if(t(this.value[e]))return!0;return!1},t.prototype.allMatch=function(t){if(!this.value.length)return!1;for(var e=0,n=0;n<this.value.length;n++)t(this.value[n])&&e++;return e==this.value.length},t.prototype.noneMatch=function(t){for(var e=0,n=0;n<this.value.length;n++)t(this.value[n])||e++;return e==this.value.length},t.prototype.sort=function(e){var n=this.value.slice().sort(e);return t.of.apply(t,o([],r(n)))},t.prototype.collect=function(t){return this.each((function(e){return t.collect(e)})),t.finalValue},t.prototype.hasNext=function(){var t=-1!=this._limits&&this.pos>=this._limits-1,e=this.pos>=this.value.length-1;return!(t||e)},t.prototype.next=function(){return this.hasNext()?(this.pos++,this.value[this.pos]):null},t.prototype[Symbol.iterator]=function(){var t=this;return{next:function(){return{done:!t.hasNext(),value:t.next()}}}},t.prototype.reset=function(){this.pos=-1},t}();e.Stream=u;var l=function(){function t(t){this._limits=-1,this.pos=-1,this.dataSource=t}return t.of=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return new t(new(a.ArrayStreamDataSource.bind.apply(a.ArrayStreamDataSource,o([void 0],r(e)))))},t.ofAssoc=function(t){return this.of.apply(this,o([],r(Object.keys(t)))).map((function(e){return[e,t[e]]}))},t.ofStreamDataSource=function(e){return new t(e)},t.prototype.hasNext=function(){return!this.isOverLimits()&&this.dataSource.hasNext()},t.prototype.next=function(){var t=this.dataSource.next();return this.pos++,t},t.prototype.reset=function(){this.dataSource.reset(),this.pos=0,this._limits=-1},t.prototype.concat=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.of.apply(t,o([this],r(e))).flatMap((function(t){return t}))},t.prototype.nextFilter=function(t){if(this.hasNext()){var e=this.next();return t(e)?e:this.nextFilter(t)}return null},t.prototype.limits=function(t){return this._limits=t,this},t.prototype.collect=function(t){for(;this.hasNext();){var e=this.next();t.collect(e)}return t.finalValue},t.prototype.onElem=function(e){var n=this;return new t(new a.MappedStreamDataSource((function(t){return!1===e(t,n.pos)&&n.stop(),t}),this))},t.prototype.filter=function(e){return new t(new a.FilteredStreamDatasource(e,this))},t.prototype.map=function(e){return new t(new a.MappedStreamDataSource(e,this))},t.prototype.flatMap=function(e){return new t(new a.FlatMapStreamDataSource(e,this))},t.prototype.each=function(t){for(;this.hasNext();)!1===t(this.next())&&this.stop()},t.prototype.reduce=function(t,e){if(void 0===e&&(e=null),!this.hasNext())return i.Optional.absent;var n=null,r=null;if(null!=e)n=e,r=this.next();else{if(n=this.next(),!this.hasNext())return i.Optional.fromNullable(n);r=this.next()}for(n=t(n,r);this.hasNext();)n=t(n,r=this.next());return i.Optional.fromNullable(n)},t.prototype.last=function(){return this.hasNext()?this.reduce((function(t,e){return e})):i.Optional.absent},t.prototype.first=function(){return this.reset(),this.hasNext()?i.Optional.fromNullable(this.next()):i.Optional.absent},t.prototype.anyMatch=function(t){for(;this.hasNext();)if(t(this.next()))return!0;return!1},t.prototype.allMatch=function(t){for(;this.hasNext();)if(!t(this.next()))return!1;return!0},t.prototype.noneMatch=function(t){for(;this.hasNext();)if(t(this.next()))return!1;return!0},t.prototype.sort=function(e){var n=this.collect(new a.ArrayCollector);return n=n.sort(e),t.of.apply(t,o([],r(n)))},Object.defineProperty(t.prototype,"value",{get:function(){return this.collect(new a.ArrayCollector)},enumerable:!1,configurable:!0}),t.prototype[Symbol.iterator]=function(){var t=this;return{next:function(){return{done:!t.hasNext(),value:t.next()}}}},t.prototype.stop=function(){this.pos=this._limits+1e9},t.prototype.isOverLimits=function(){return-1!=this._limits&&this.pos>=this._limits-1},t}();e.LazyStream=l}},e={};return function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}(376)}()}));
//# sourceMappingURL=Promise.js.map