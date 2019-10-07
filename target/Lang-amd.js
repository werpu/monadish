define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/typescript/Lang.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/typescript/Lang.ts":
/*!*************************************!*\
  !*** ./src/main/typescript/Lang.ts ***!
  \*************************************/
/*! exports provided: Lang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Lang\", function() { return Lang; });\n/* harmony import */ var _Monad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Monad */ \"./src/main/typescript/Monad.ts\");\n/* Licensed to the Apache Software Foundation (ASF) under one or more\n * contributor license agreements.  See the NOTICE file distributed with\n * this work for additional information regarding copyright ownership.\n * The ASF licenses this file to you under the Apache License, Version 2.0\n * (the \"License\"); you may not use this file except in compliance with\n * the License.  You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n/**\n * Lang helpers crossported from the apache myfaces project\n */\nclass Lang {\n    static get instance() {\n        if (!Lang._instance) {\n            Lang._instance = new Lang();\n        }\n        return Lang._instance;\n    }\n    /**\n     * String to array function performs a string to array transformation\n     * @param {String} it the string which has to be changed into an array\n     * @param {RegExp} splitter our splitter reglar expression\n     * @return an array of the splitted string\n     */\n    strToArray(it, splitter = /\\./gi) {\n        //\tsummary:\n        //\t\tReturn true if it is a String\n        let retArr = it.split(splitter);\n        for (let cnt = 0; cnt < retArr.length; cnt++) {\n            retArr[cnt] = this.trim(retArr[cnt]);\n        }\n        return retArr;\n    }\n    arrToMap(arr, offset = 0) {\n        var ret = new Array(arr.length);\n        var len = arr.length;\n        offset = (offset) ? offset : 0;\n        for (var cnt = 0; cnt < len; cnt++) {\n            ret[arr[cnt]] = cnt + offset;\n        }\n        return ret;\n    }\n    /**\n     * hyperfast trim\n     * http://blog.stevenlevithan.com/archives/faster-trim-javascript\n     * crossported from dojo\n     */\n    trim(str) {\n        str = str.replace(/^\\s\\s*/, '');\n        let ws = /\\s/, i = str.length;\n        while (ws.test(str.charAt(--i))) {\n            //do nothing\n        }\n        return str.slice(0, i + 1);\n    }\n    /**\n     * Backported from dojo\n     * a failsafe string determination method\n     * (since in javascript String != \"\" typeof alone fails!)\n     * @param it {|Object|} the object to be checked for being a string\n     * @return true in case of being a string false otherwise\n     */\n    isString(it) {\n        //\tsummary:\n        //\t\tReturn true if it is a String\n        return !!arguments.length && it != null && (typeof it == \"string\" || it instanceof String); // Boolean\n    }\n    isFunc(it) {\n        return it instanceof Function || typeof it === \"function\";\n    }\n    /**\n     * hitch backported from dojo\n     * hitch allows to assign a function to a dedicated scope\n     * this is helpful in situations when function reassignments\n     * can happen\n     * (notably happens often in lazy xhr code)\n     *\n     * @param {Function} scope of the function to be executed in\n     * @param {Function} method to be executed, the method must be of type function\n     *\n     * @return whatever the executed method returns\n     *\n     */\n    hitch(scope, method) {\n        return !scope ? method : function () {\n            return method.apply(scope, arguments || []);\n        }; // Function\n    }\n    /**\n     * simplified merge maps which basically produces\n     * a final merged map from left to right\n     * the function is sideffect free\n     * @param maps\n     */\n    mergeMaps(maps, overwrite = true, blockFilter, whitelistFilter) {\n        let retVal = {};\n        this.arrForEach(maps, (item) => {\n            this.mixMaps(retVal, item, overwrite);\n        });\n        return retVal;\n    }\n    /**\n     * Helper function to merge two maps\n     * into one\n     * @param {Object} dest the destination map\n     * @param {Object} src the source map\n     * @param {boolean} overwrite if set to true the destination is overwritten if the keys exist in both maps\n     * @param blockFilter\n     * @param whitelistFilter\n     **/\n    mixMaps(dest, src, overwrite, blockFilter, whitelistFilter) {\n        let UNDEF = \"undefined\";\n        for (let key in src) {\n            if (!src.hasOwnProperty(key))\n                continue;\n            if (blockFilter && blockFilter[key]) {\n                continue;\n            }\n            if (whitelistFilter && !whitelistFilter[key]) {\n                continue;\n            }\n            if (!overwrite) {\n                /**\n                 *we use exists instead of booleans because we cannot rely\n                 *on all values being non boolean, we would need an getIf\n                 *operator in javascript to shorten this :-(\n                 */\n                dest[key] = (UNDEF != typeof dest[key]) ? dest[key] : src[key];\n            }\n            else {\n                dest[key] = (UNDEF != typeof src[key]) ? src[key] : dest[key];\n            }\n        }\n        return dest;\n    }\n    /**\n     * generic object arrays like dom definitions to array conversion method which\n     * transforms any object to something array like\n     * @param obj\n     * @param offset\n     * @param pack\n     * @returns an array converted from the object\n     */\n    objToArray(obj, offset, pack) {\n        if (!obj) {\n            return pack || null;\n        }\n        //since offset is numeric we cannot use the shortcut due to 0 being false\n        //special condition array delivered no offset no pack\n        if (obj instanceof Array && !offset && !pack)\n            return obj;\n        let finalOffset = ('undefined' != typeof offset || null != offset) ? offset : 0;\n        let finalPack = pack || [];\n        try {\n            return finalPack.concat(Array.prototype.slice.call(obj, finalOffset));\n        }\n        catch (e) {\n            //ie8 (again as only browser) delivers for css 3 selectors a non convertible object\n            //we have to do it the hard way\n            //ie8 seems generally a little bit strange in its behavior some\n            //objects break the function is everything methodology of javascript\n            //and do not implement apply call, or are pseudo arrays which cannot\n            //be sliced\n            for (let cnt = finalOffset; cnt < obj.length; cnt++) {\n                finalPack.push(obj[cnt]);\n            }\n            return finalPack;\n        }\n    }\n    /**\n     * foreach implementation utilizing the\n     * ECMAScript wherever possible\n     * with added functionality\n     *\n     * @param arr the array to filter\n     * @param callbackfn\n     * @param startPos\n     * @param scope the closure to apply the function to, with the syntax defined by the ecmascript functionality\n     * function (element<,key, array>)\n     * <p />\n     * optional params\n     * <p />\n     * <ul>\n     *      <li>param startPos (optional) the starting position </li>\n     *      <li>param scope (optional) the scope to apply the closure to  </li>\n     * </ul>\n     */\n    arrForEach(arr, callbackfn, startPos, scope) {\n        if (!arr || !arr.length)\n            return;\n        let startPosFinal = startPos || 0;\n        let thisObj = scope;\n        //check for an existing foreach mapping on array prototypes\n        //IE9 still does not pass array objects as result for dom ops\n        let convertedArr = this.objToArray(arr);\n        (startPos) ? convertedArr.slice(startPosFinal).forEach(callbackfn, thisObj) : convertedArr.forEach(callbackfn, thisObj);\n    }\n    /**\n     * checks if an array contains an element\n     * @param {Array} arr   array\n     * @param {String} str string to check for\n     */\n    contains(arr, str) {\n        if (!arr || !str) {\n            throw Error(\"null value on arr or str not allowed\");\n        }\n        return this.arrIndexOf(arr, str) != -1;\n    }\n    /**\n     * adds a EcmaScript optimized indexOf to our mix,\n     * checks for the presence of an indexOf functionality\n     * and applies it, otherwise uses a fallback to the hold\n     * loop method to determine the index\n     *\n     * @param arr the array\n     * @param element the index to search for\n     * @param fromIndex\n     */\n    arrIndexOf(arr, element, fromIndex) {\n        if (!arr || !arr.length)\n            return -1;\n        let pos = fromIndex || 0;\n        arr = this.objToArray(arr);\n        return arr.indexOf(element, pos);\n    }\n    /**\n     * filter implementation utilizing the\n     * ECMAScript wherever possible\n     * with added functionality\n     *\n     * @param arr the array to filter\n     * @param scope the closure to apply the function to, with the syntax defined by the ecmascript functionality\n     * function (element<,key, array>)\n     * <p />\n     * additional params\n     * <ul>\n     *  <li> startPos (optional) the starting position</li>\n     *  <li> scope (optional) the scope to apply the closure to</li>\n     * </ul>\n     */\n    arrFilter(arr, callbackfn, startPos, scope) {\n        if (!arr || !arr.length)\n            return [];\n        let arrFinal = this.objToArray(arr);\n        return ((startPos) ? arrFinal.slice(startPos).filter(callbackfn, scope) : arrFinal.filter(callbackfn, scope));\n    }\n    /**\n     * helper to automatically apply a delivered arguments map or array\n     * to its destination which has a field \"_\"<key> and a full field\n     *\n     * @param dest the destination object\n     * @param args the arguments array or map\n     * @param argNames the argument names to be transferred\n     */\n    /**\n     * helper to automatically apply a delivered arguments map or array\n     * to its destination which has a field \"_\"<key> and a full field\n     *\n     * @param dest the destination object\n     * @param args the arguments array or map\n     * @param argNames the argument names to be transferred\n     */\n    applyArgs(dest, args, argNames) {\n        let UDEF = 'undefined';\n        if (argNames) {\n            for (let cnt = 0; cnt < args.length; cnt++) {\n                //dest can be null or 0 hence no shortcut\n                if (UDEF != typeof dest[\"_\" + argNames[cnt]]) {\n                    dest[\"_\" + argNames[cnt]] = args[cnt];\n                }\n                if (UDEF != typeof dest[argNames[cnt]]) {\n                    dest[argNames[cnt]] = args[cnt];\n                }\n            }\n        }\n        else {\n            for (let key in args) {\n                if (!args.hasOwnProperty(key))\n                    continue;\n                if (UDEF != typeof dest[\"_\" + key]) {\n                    dest[\"_\" + key] = args[key];\n                }\n                if (UDEF != typeof dest[key]) {\n                    dest[key] = args[key];\n                }\n            }\n        }\n        return dest;\n    }\n    /**\n     * equalsIgnoreCase, case insensitive comparison of two strings\n     *\n     * @param source\n     * @param destination\n     */\n    equalsIgnoreCase(source, destination) {\n        //either both are not set or null\n        if (!source && !destination) {\n            return true;\n        }\n        //source or dest is set while the other is not\n        if (!source || !destination)\n            return false;\n        //in any other case we do a strong string comparison\n        return source.toLowerCase() === destination.toLowerCase();\n    }\n    /*\n     * Promise wrappers for timeout and interval\n     */\n    timeout(timeout) {\n        let handler = null;\n        return new _Monad__WEBPACK_IMPORTED_MODULE_0__[\"CancellablePromise\"]((apply, reject) => {\n            handler = setTimeout(() => {\n                apply();\n            }, timeout);\n        }, () => {\n            if (handler) {\n                clearTimeout(handler);\n                handler = null;\n            }\n        });\n    }\n    interval(timeout) {\n        let handler = null;\n        return new _Monad__WEBPACK_IMPORTED_MODULE_0__[\"CancellablePromise\"]((apply, reject) => {\n            handler = setInterval(() => {\n                apply();\n            }, timeout);\n        }, () => {\n            if (handler) {\n                clearInterval(handler);\n                handler = null;\n            }\n        });\n    }\n    /**\n     * runtime type assertion\n     *\n     * @param probe the probe to be tested for a type\n     * @param theType the type to be tested for\n     */\n    assertType(probe, theType) {\n        return this.isString(theType) ? typeof probe == theType : probe instanceof theType;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/main/typescript/Lang.ts?");

/***/ }),

/***/ "./src/main/typescript/Monad.ts":
/*!**************************************!*\
  !*** ./src/main/typescript/Monad.ts ***!
  \**************************************/
/*! exports provided: Monad, Optional, Config, PromiseStatus, saveResolve, Promise, CancellablePromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Monad\", function() { return Monad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Optional\", function() { return Optional; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Config\", function() { return Config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PromiseStatus\", function() { return PromiseStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveResolve\", function() { return saveResolve; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Promise\", function() { return Promise; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CancellablePromise\", function() { return CancellablePromise; });\n/* Licensed to the Apache Software Foundation (ASF) under one or more\n * contributor license agreements.  See the NOTICE file distributed with\n * this work for additional information regarding copyright ownership.\n * The ASF licenses this file to you under the Apache License, Version 2.0\n * (the \"License\"); you may not use this file except in compliance with\n * the License.  You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Implementation of a monad\n * (Sideffect free), no write allowed directly on the monads\n * value state\n */\nclass Monad {\n    constructor(value) {\n        this._value = value;\n    }\n    map(fn) {\n        if (!fn) {\n            fn = (inval) => inval;\n        }\n        let result = fn(this.value);\n        return new Monad(result);\n    }\n    flatMap(fn) {\n        let mapped = this.map(fn);\n        while (\"undefined\" != typeof mapped && mapped != null && mapped.value instanceof Monad) {\n            mapped = mapped.value;\n        }\n        return mapped;\n    }\n    get value() {\n        return this._value;\n    }\n}\n/**\n * optional implementation, an optional is basically an implementation of a Monad with additional syntactic\n * sugar on top\n * (Sideeffect free, since value assignment is not allowed)\n * */\nclass Optional extends Monad {\n    constructor(value) {\n        super(value);\n    }\n    static fromNullable(value) {\n        return new Optional(value);\n    }\n    /*syntactic sugar for absent and present checks*/\n    isAbsent() {\n        return \"undefined\" == typeof this.value || null == this.value;\n    }\n    isPresent() {\n        return !this.isAbsent();\n    }\n    presentOrElse(elseValue) {\n        if (this.isPresent()) {\n            return this;\n        }\n        else {\n            return this.flatMap(this.getClass().fromNullable(elseValue));\n        }\n    }\n    /*\n     * we need to implement it to fullfill the contract, although it is used only internally\n     * all values are flattened when accessed anyway, so there is no need to call this methiod\n     */\n    flatMap(fn) {\n        var val = super.flatMap(fn);\n        if (!(val instanceof Optional)) {\n            return Optional.fromNullable(val.value);\n        }\n        return val.flatMap();\n    }\n    /**\n     * additional syntactic sugar which is not part of the usual optional implementation\n     * but makes life easier, if you want to sacrifice typesafety and refactoring\n     * capabilities in typescript\n     */\n    getIfPresent(key) {\n        if (this.isAbsent()) {\n            return this.getClass().absent;\n        }\n        return this.getClass().fromNullable(this.value[key]).flatMap();\n    }\n    /*\n     * elvis operation, take care, if you use this you lose typesafety and refactoring\n     * capabilites, unfortunately typesceript does not allow to have its own elvis operator\n     * this is some syntactic sugar however which is quite useful*/\n    getIf(...key) {\n        let currentPos = this;\n        for (let cnt = 0; cnt < key.length; cnt++) {\n            let currKey = this.keyVal(key[cnt]);\n            let arrPos = this.arrayIndex(key[cnt]);\n            if (currKey === \"\" && arrPos >= 0) {\n                currentPos = this.getClass().fromNullable(!(currentPos.value instanceof Array) ? null : (currentPos.value.length < arrPos ? null : currentPos.value[arrPos]));\n                if (currentPos.isAbsent()) {\n                    return currentPos;\n                }\n                continue;\n            }\n            else if (currKey && arrPos >= 0) {\n                if (currentPos.getIfPresent(currKey).isAbsent()) {\n                    return currentPos;\n                }\n                currentPos = (currentPos.getIfPresent(currKey).value instanceof Array) ? this.getClass().fromNullable(currentPos.getIfPresent(currKey).value[arrPos]) : this.getClass().absent;\n                if (currentPos.isAbsent()) {\n                    return currentPos;\n                }\n                continue;\n            }\n            else {\n                currentPos = currentPos.getIfPresent(currKey);\n            }\n            if (currentPos.isAbsent()) {\n                return currentPos;\n            }\n            else if (arrPos > -1) {\n                currentPos = this.getClass().fromNullable(currentPos.value[arrPos]);\n            }\n        }\n        let retVal = currentPos;\n        return retVal;\n    }\n    get value() {\n        if (this._value instanceof Monad) {\n            return this._value.flatMap().value;\n        }\n        return this._value;\n    }\n    /**\n     * convenience function to flatmap the internal value\n     * and replace it with a default in case of being absent\n     *\n     * @param defaultVal\n     * @returns {Optional<any>}\n     */\n    get(defaultVal) {\n        if (this.isAbsent()) {\n            return this.getClass().fromNullable(defaultVal).flatMap();\n        }\n        return this.getClass().fromNullable(this.value).flatMap();\n    }\n    /**\n     * helper to override several implementations in a more fluent way\n     * by having a getClass operation we can avoid direct calls into the constructor or\n     * static methods and do not have to implement several methods which rely on the type\n     * of \"this\"\n     * @returns {Monadish.Optional}\n     */\n    getClass() {\n        return Optional;\n    }\n    toJson() {\n        return JSON.stringify(this.value);\n    }\n    /*helper method for getIf with array access aka <name>[<indexPos>]*/\n    arrayIndex(key) {\n        let start = key.indexOf(\"[\");\n        let end = key.indexOf(\"]\");\n        if (start >= 0 && end > 0 && start < end) {\n            return parseInt(key.substring(start + 1, end));\n        }\n        else {\n            return -1;\n        }\n    }\n    /*helper method for getIf with array access aka <name>[<indexPos>]*/\n    keyVal(key) {\n        let start = key.indexOf(\"[\");\n        if (start >= 0) {\n            return key.substring(0, start);\n        }\n        else {\n            return key;\n        }\n    }\n}\n/*default value for absent*/\nOptional.absent = Optional.fromNullable(null);\n/**\n * helper class to allow write access to the config\n * in certain situations (after an apply call)\n */\nclass ConfigEntry {\n    constructor(rootElem, key, arrPos) {\n        this.rootElem = rootElem;\n        this.key = key;\n        this.arrPos = (\"undefined\" != typeof arrPos) ? arrPos : -1;\n    }\n    get value() {\n        if (this.key == \"\" && this.arrPos >= 0) {\n            return this.rootElem[this.arrPos];\n        }\n        else if (this.key && this.arrPos >= 0) {\n            return this.rootElem[this.key][this.arrPos];\n        }\n        return this.rootElem[this.key];\n    }\n    set value(val) {\n        if (this.key == \"\" && this.arrPos >= 0) {\n            this.rootElem[this.arrPos] = val;\n            return;\n        }\n        else if (this.key && this.arrPos >= 0) {\n            this.rootElem[this.key][this.arrPos] = val;\n            return;\n        }\n        this.rootElem[this.key] = val;\n    }\n}\n/**\n * Config, basically an optional wrapper for a json structure\n * (not sideeffect free, since we can alter the internal config state\n * without generating a new config), not sure if we should make it sideffect free\n * since this would swallow a lot of performane and ram\n */\nclass Config extends Optional {\n    constructor(root) {\n        super(root);\n    }\n    static fromNullable(value) {\n        return new Config(value);\n    }\n    apply(...keys) {\n        if (keys.length < 1) {\n            return;\n        }\n        this.buildPath(keys);\n        let currKey = this.keyVal(keys[keys.length - 1]);\n        let arrPos = this.arrayIndex(keys[keys.length - 1]);\n        var retVal = new ConfigEntry(keys.length == 1 ? this.value : this.getIf.apply(this, keys.slice(0, keys.length - 1)).value, currKey, arrPos);\n        return retVal;\n    }\n    getIf(...keys) {\n        return this.getClass().fromNullable(super.getIf.apply(this, keys).value);\n    }\n    get(defaultVal) {\n        return this.getClass().fromNullable(super.get(defaultVal).value);\n    }\n    toJson() {\n        return JSON.stringify(this.value);\n    }\n    getClass() {\n        return Config;\n    }\n    setVal(val) {\n        this._value = val;\n    }\n    buildPath(keys) {\n        let val = this;\n        let parentVal = this.getClass().fromNullable(null);\n        let parentPos = -1;\n        let alloc = function (arr, length) {\n            if (arr.length < length) {\n                for (var cnt = arr.length; cnt < length; cnt++) {\n                    arr.push({});\n                }\n            }\n        };\n        for (var cnt = 0; cnt < keys.length; cnt++) {\n            let currKey = this.keyVal(keys[cnt]);\n            let arrPos = this.arrayIndex(keys[cnt]);\n            if (currKey === \"\" && arrPos >= 0) {\n                val.setVal((val.value instanceof Array) ? val.value : []);\n                alloc(val.value, arrPos + 1);\n                if (parentPos >= 0) {\n                    parentVal.value[parentPos] = val.value;\n                }\n                parentVal = val;\n                parentPos = arrPos;\n                val = this.getClass().fromNullable(val.value[arrPos]);\n                continue;\n            }\n            let tempVal = val.getIf(currKey);\n            if (arrPos == -1) {\n                if (tempVal.isAbsent()) {\n                    tempVal = this.getClass().fromNullable(val.value[currKey] = {});\n                }\n                else {\n                    val = tempVal;\n                }\n            }\n            else {\n                var arr = (tempVal.value instanceof Array) ? tempVal.value : [];\n                alloc(arr, arrPos + 1);\n                val.value[currKey] = arr;\n                tempVal = this.getClass().fromNullable(arr[arrPos]);\n            }\n            parentVal = val;\n            parentPos = arrPos;\n            val = tempVal;\n        }\n        return this;\n    }\n}\nvar PromiseStatus;\n(function (PromiseStatus) {\n    PromiseStatus[PromiseStatus[\"PENDING\"] = 0] = \"PENDING\";\n    PromiseStatus[PromiseStatus[\"FULLFILLED\"] = 1] = \"FULLFILLED\";\n    PromiseStatus[PromiseStatus[\"REJECTED\"] = 2] = \"REJECTED\";\n})(PromiseStatus || (PromiseStatus = {}));\n/**\n * helper function to savely resolve anything\n * this is not an elvis operator, it resolves\n * a value without exception in a tree and if\n * it is not resolvable then an optional of\n * a default value is restored or Optional.empty\n * if none is given\n *\n * usage\n * <code>\n *     let var: Optiona<string> = saveResolve(() => a.b.c.d.e, \"foobaz\")\n * </code>\n *\n * @param resolverProducer a lambda which can produce the value\n * @param defaultValue an optional default value if the producer failes to produce anything\n * @returns an Optional of the produced value\n */\nfunction saveResolve(resolverProducer, defaultValue = null) {\n    try {\n        let result = resolverProducer();\n        if (\"undefined\" == typeof result || null == result) {\n            return Optional.fromNullable(defaultValue);\n        }\n        return Optional.fromNullable(result);\n    }\n    catch (e) {\n        return Optional.absent;\n    }\n}\n/**\n * a small (probably not 100% correct, although I tried to be correct as possible) Promise implementation\n * for systems which do not have a promise implemented\n * Note, although an internal state is kept, this is sideffect free since\n * is value is a function to operate on, hence no real state is kept internally, except for the then\n * and catch calling order\n */\nclass Promise {\n    constructor(executor) {\n        this.status = PromiseStatus.PENDING;\n        this.allFuncs = [];\n        //super(executor);\n        this.value = executor;\n        this.value((data) => this.resolve(data), (data) => this.reject(data));\n    }\n    static all(...promises) {\n        var promiseCnt = 0;\n        var myapply;\n        var myPromise = new Promise((apply, reject) => {\n            myapply = apply;\n        });\n        var executor = () => {\n            promiseCnt++;\n            if (promises.length == promiseCnt) {\n                myapply();\n            }\n        };\n        executor.__last__ = true;\n        for (var cnt = 0; cnt < promises.length; cnt++) {\n            promises[cnt].finally(executor);\n        }\n        return myPromise;\n    }\n    static race(...promises) {\n        var promiseCnt = 0;\n        var myapply;\n        var myreject;\n        var myPromise = new Promise((apply, reject) => {\n            myapply = apply;\n            myreject = reject;\n        });\n        var thenexecutor = () => {\n            if (!!myapply) {\n                myapply();\n            }\n            myapply = null;\n            myreject = null;\n            return null;\n        };\n        thenexecutor.__last__ = true;\n        var catchexeutor = () => {\n            if (!!myreject) {\n                myreject();\n            }\n            myreject = null;\n            myapply = null;\n            return null;\n        };\n        catchexeutor.__last__ = true;\n        for (var cnt = 0; cnt < promises.length; cnt++) {\n            promises[cnt].then(thenexecutor);\n            promises[cnt].catch(catchexeutor);\n        }\n        return myPromise;\n    }\n    static reject(reason) {\n        var retVal = new Promise((resolve, reject) => {\n            //not really doable without a hack\n            if (reason instanceof Promise) {\n                reason.then((val) => {\n                    reject(val);\n                });\n            }\n            else {\n                setTimeout(() => {\n                    reject(reason);\n                }, 1);\n            }\n        });\n        return retVal;\n    }\n    static resolve(reason) {\n        var retVal = new Promise((resolve, reject) => {\n            //not really doable without a hack\n            if (reason instanceof Promise) {\n                reason.then((val) => resolve(val));\n            }\n            else {\n                setTimeout(() => {\n                    resolve(reason);\n                }, 1);\n            }\n        });\n        return retVal;\n    }\n    then(executorFunc, catchfunc) {\n        this.allFuncs.push({ \"then\": executorFunc });\n        if (catchfunc) {\n            this.allFuncs.push({ \"catch\": catchfunc });\n        }\n        this.spliceLastFuncs();\n        return this;\n    }\n    catch(executorFunc) {\n        this.allFuncs.push({ \"catch\": executorFunc });\n        this.spliceLastFuncs();\n        return this;\n    }\n    finally(executorFunc) {\n        if (this.__reason__) {\n            this.__reason__.finally(executorFunc);\n            return;\n        }\n        this.allFuncs.push({ \"finally\": executorFunc });\n        this.spliceLastFuncs();\n        return this;\n    }\n    spliceLastFuncs() {\n        let lastFuncs = [];\n        let rest = [];\n        for (var cnt = 0; cnt < this.allFuncs.length; cnt++) {\n            for (var key in this.allFuncs[cnt]) {\n                if (this.allFuncs[cnt][key].__last__) {\n                    lastFuncs.push(this.allFuncs[cnt]);\n                }\n                else {\n                    rest.push(this.allFuncs[cnt]);\n                }\n            }\n        }\n        this.allFuncs = rest.concat(lastFuncs);\n    }\n    resolve(val) {\n        while (this.allFuncs.length) {\n            if (!this.allFuncs[0].then) {\n                break;\n            }\n            var fn = this.allFuncs.shift();\n            var funcResult = Optional.fromNullable(fn.then(val));\n            if (funcResult.isPresent()) {\n                funcResult = funcResult.flatMap();\n                val = funcResult.value;\n                if (val instanceof Promise) {\n                    //var func = (newVal: any) => {this.resolve(newVal)};\n                    //func.__last__  = true;\n                    //val.then(func);\n                    this.transferIntoNewPromise(val);\n                    return;\n                }\n            }\n            else {\n                break;\n            }\n        }\n        this.appyFinally();\n        this.status = PromiseStatus.FULLFILLED;\n    }\n    reject(val) {\n        while (this.allFuncs.length) {\n            if (this.allFuncs[0].finally) {\n                break;\n            }\n            var fn = this.allFuncs.shift();\n            if (fn.catch) {\n                var funcResult = Optional.fromNullable(fn.catch(val));\n                if (funcResult.isPresent()) {\n                    funcResult = funcResult.flatMap();\n                    val = funcResult.value;\n                    if (val instanceof Promise) {\n                        //val.then((newVal: any) => {this.resolve(newVal)});\n                        this.transferIntoNewPromise(val);\n                        return;\n                    }\n                    this.status = PromiseStatus.REJECTED;\n                    break;\n                }\n                else {\n                    break;\n                }\n            }\n        }\n        this.status = PromiseStatus.REJECTED;\n        this.appyFinally();\n    }\n    transferIntoNewPromise(val) {\n        for (var cnt = 0; cnt < this.allFuncs.length; cnt++) {\n            for (let key in this.allFuncs[cnt]) {\n                val[key](this.allFuncs[cnt][key]);\n            }\n        }\n    }\n    appyFinally() {\n        while (this.allFuncs.length) {\n            var fn = this.allFuncs.shift();\n            if (fn.finally) {\n                fn.finally();\n            }\n        }\n    }\n}\n/**\n * a cancellable promise\n * a Promise with a cancel function, which can be cancellend any time\n * this is useful for promises which use cancellable asynchronous operations\n * note, even in a cancel state, the finally of the promise is executed, however\n * subsequent thens are not anymore.\n * The current then however is fished or a catch is called depending on how the outer\n * operation reacts to a cancel order.\n */\nclass CancellablePromise extends Promise {\n    /**\n     * @param executor asynchronous callback operation which triggers the callback\n     * @param cancellator cancel operation, separate from the trigger operation\n     */\n    constructor(executor, cancellator) {\n        super(executor);\n        this.cancellator = () => {\n        };\n        this.cancellator = cancellator;\n    }\n    cancel() {\n        this.status = PromiseStatus.REJECTED;\n        this.appyFinally();\n        //lets terminate it once and for all, the finally has been applied\n        this.allFuncs = [];\n    }\n    then(executorFunc, catchfunc) {\n        return super.then(executorFunc, catchfunc);\n    }\n    catch(executorFunc) {\n        return super.catch(executorFunc);\n    }\n    finally(executorFunc) {\n        return super.finally(executorFunc);\n    }\n}\n/*we do not implenent array, maps etc.. monads there are libraries like lodash which have been doing that for ages*/\n\n\n//# sourceURL=webpack:///./src/main/typescript/Monad.ts?");

/***/ })

/******/ })});;