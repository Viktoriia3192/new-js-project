!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequired7c6=o),o.register("aNJCr",function(t,e){Object.defineProperty(t.exports,"getBundleURL",{get:function(){return n},set:function(t){return n=t},enumerable:!0,configurable:!0});var n,i={};n=function(t){var e=i[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[t]=e),e}}),o("6JpON");var r={};r=o("aNJCr").getBundleURL("kKLfj")+o("iE7OH").resolve("kSqT3");var s={};s=o("aNJCr").getBundleURL("kKLfj")+o("iE7OH").resolve("hTMkK");var a={};a=o("aNJCr").getBundleURL("kKLfj")+o("iE7OH").resolve("9Qt2K");var u={};window,u=/******/function(t){/******/// The module cache
/******/var e={};/******//******/// The require function
/******/function n(i){/******//******/// Check if module is in cache
/******/if(e[i])/******/return e[i].exports;/******/// Create a new module (and put it into the cache)
/******/var o=e[i]={/******/i:i,/******/l:!1,/******/exports:{}};/******//******/// Return the exports of the module
/******/return(/******//******/// Execute the module function
/******/t[i].call(o.exports,o,o.exports,n),/******//******/// Flag the module as loaded
/******/o.l=!0,o.exports);/******/}/******//******//******/// Load entry module and return exports
/******/return(/******//******//******/// expose the modules object (__webpack_modules__)
/******/n.m=t,/******//******/// expose the module cache
/******/n.c=e,/******//******/// define getter function for harmony exports
/******/n.d=function(t,e,i){n.o(t,e)||/******/Object.defineProperty(t,e,{enumerable:!0,get:i});/******/},/******//******/// define __esModule on exports
/******/n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&/******/Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),/******/Object.defineProperty(t,"__esModule",{value:!0});/******/},/******//******/// create a fake namespace object
/******/// mode & 1: value is a module id, require it
/******/// mode & 2: merge all properties of value into the ns
/******/// mode & 4: return value when already ns object
/******/// mode & 8|1: behave like require
/******/n.t=function(t,e){/******/if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;/******/var i=Object.create(null);/******/if(/******/n.r(i),/******/Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,(function(e){return t[e]}).bind(null,o));/******/return i;/******/},/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/n.n=function(t){/******/var e=t&&t.__esModule?/******/function(){return t.default}:/******/function(){return t};/******/return /******/n.d(e,"a",e),e;/******/},/******//******/// Object.prototype.hasOwnProperty.call
/******/n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},/******//******/// __webpack_public_path__
/******/n.p="dist",n(n.s=10));/******/}([/* 0 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Extend the target object from other objects.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * @module object
 *//**
 * Extend the target object from other objects.
 * @param {object} target - Object that will be extended
 * @param {...object} objects - Objects as sources
 * @returns {object} Extended object
 * @memberof module:object
 */function(t,e){var n,i,o,r,s=Object.prototype.hasOwnProperty;for(o=1,r=arguments.length;o<r;o+=1)for(i in n=arguments[o])s.call(n,i)&&(t[i]=n[i]);return t};/***/},/* 1 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is undefined or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is undefined or not.
 * If the given variable is undefined, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is undefined?
 * @memberof module:type
 */function(t){return void 0===t;// eslint-disable-line no-undefined
};/***/},/* 2 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is an instance of Array or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is an instance of Array or not.
 * If the given variable is an instance of Array, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is array instance?
 * @memberof module:type
 */function(t){return t instanceof Array};/***/},/* 3 *//***/function(t,e,n){/**
 * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i=n(2),o=n(17),r=n(6);t.exports=/**
 * @module collection
 *//**
 * Execute the provided callback once for each property of object(or element of array) which actually exist.
 * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property(or The value of the element)
 *  2) The name of the property(or The index of the element)
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEach = require('tui-code-snippet/collection/forEach'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEach([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 *
 * // In case of Array-like object
 * var array = Array.prototype.slice.call(arrayLike); // change to array
 * forEach(array, function(value){
 *     sum += value;
 * });
 */function(t,e,n){i(t)?o(t,e,n):r(t,e,n)};/***/},/* 4 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is a string or not.
 * If the given variable is a string, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is string?
 * @memberof module:type
 */function(t){return"string"==typeof t||t instanceof String};/***/},/* 5 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is a function or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is a function or not.
 * If the given variable is a function, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is function?
 * @memberof module:type
 */function(t){return t instanceof Function};/***/},/* 6 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Execute the provided callback once for each property of object which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Execute the provided callback once for each property of object which actually exist.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property
 *  2) The name of the property
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee  Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachOwnProperties({a:1,b:2,c:3}, function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break};/***/},/* 7 *//***/function(t,e,n){/**
 * @fileoverview
 * This module provides a function to make a constructor
 * that can inherit from the other constructors like the CLASS easily.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i=n(18),o=n(0);t.exports=/**
 * @module defineClass
 *//**
 * Help a constructor to be defined and to inherit from the other constructors
 * @param {*} [parent] Parent constructor
 * @param {Object} props Members of constructor
 *  @param {Function} props.init Initialization method
 *  @param {Object} [props.static] Static members of constructor
 * @returns {*} Constructor
 * @memberof module:defineClass
 * @example
 * var defineClass = require('tui-code-snippet/defineClass/defineClass'); // node, commonjs
 *
 * //-- #2. Use property --//
 * var Parent = defineClass({
 *     init: function() { // constuructor
 *         this.name = 'made by def';
 *     },
 *     method: function() {
 *         // ...
 *     },
 *     static: {
 *         staticMethod: function() {
 *              // ...
 *         }
 *     }
 * });
 *
 * var Child = defineClass(Parent, {
 *     childMethod: function() {}
 * });
 *
 * Parent.staticMethod();
 *
 * var parentInstance = new Parent();
 * console.log(parentInstance.name); //made by def
 * parentInstance.staticMethod(); // Error
 *
 * var childInstance = new Child();
 * childInstance.method();
 * childInstance.childMethod();
 */function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n};/***/},/* 8 *//***/function(t,e,n){/* eslint-disable complexity *//**
 * @fileoverview Returns the first index at which a given element can be found in the array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i=n(2);t.exports=/**
 * @module array
 *//**
 * Returns the first index at which a given element can be found in the array
 * from start index(default 0), or -1 if it is not present.
 * It compares searchElement to elements of the Array using strict equality
 * (the same method used by the ===, or triple-equals, operator).
 * @param {*} searchElement Element to locate in the array
 * @param {Array} array Array that will be traversed.
 * @param {number} startIndex Start index in array for searching (default 0)
 * @returns {number} the First index at which a given element, or -1 if it is not present
 * @memberof module:array
 * @example
 * var inArray = require('tui-code-snippet/array/inArray'); // node, commonjs
 *
 * var arr = ['one', 'two', 'three', 'four'];
 * var idx1 = inArray('one', arr, 3); // -1
 * var idx2 = inArray('one', arr); // 0
 */function(t,e,n){var o,r;if(n=n||0,!i(e))return -1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(r=e.length,o=n;n>=0&&o<r;o+=1)if(e[o]===t)return o;return -1};/***/},/* 9 *//***/function(t,e,n){var i=n(29),o=n(30),r=n(5);t.exports={/**
   * Capitalize first letter
   * @param {string} str - String to change
   * @returns {string} Changed string
   */capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},/**
   * Check the element is contained
   * @param {HTMLElement} find - Target element
   * @param {HTMLElement} parent - Wrapper element
   * @returns {boolean} Whether contained or not
   */isContained:function(t,e){return!!e&&(t===e||e.contains(t))},/**
   * Create an new element by template literals.
   * @param {string|function} tmpl - template
   * @param {Object} context - context
   * @returns {HTMLElement}
   */createElementByTemplate:function(t,e){var n=document.createElement("div"),o=r(t)?t(e):i(t,e);return n.innerHTML=o,n.firstChild},/**
   * Create a new function that, when called, has its this keyword set to the provided value.
   * @param {function} fn A original function before binding
   * @param {*} obj context of function in arguments[0]
   * @returns {function} A new bound function with context that is in arguments[1]
   */bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},/**
   * Send hostname for GA
   * @ignore
   */sendHostName:function(){o("pagination","UA-129987462-1")}};/***/},/* 10 *//***/function(t,e,n){/**
 * @fileoverview The entry file of Pagination components
 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
 */n(11),t.exports=n(12);/***/},/* 11 *//***/function(t,e,n){// extracted by mini-css-extract-plugin
/***/},/* 12 *//***/function(t,e,n){var i=n(13),o=n(7),r=n(0),s=n(1),a=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=o(/** @lends Pagination.prototype */{init:function(t,e){/**
       * Option object
       * @type {object}
       * @private
       */this._options=r({},c,e),/**
       * Current page number
       * @type {number}
       * @private
       */this._currentPage=0,/**
       * View instance
       * @type {View}
       * @private
       */this._view=new a(t,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},/**
     * Set current page
     * @param {number} page - Current page
     * @private
     */_setCurrentPage:function(t){this._currentPage=t||this._options.page},/**
     * Get last page number
     * @returns {number} Last page number
     * @private
     */_getLastPage:function(){return Math.ceil(this._options.totalItems/this._options.itemsPerPage)||1},/**
     * Index of list in total lists
     * @param {number} pageNumber - Page number
     * @returns {number} Page index or number
     * @private
     */_getPageIndex:function(t){return this._options.centerAlign?Math.min(Math.max(t-Math.floor(this._options.visiblePages/2),1),this._getLastPage()-this._options.visiblePages+1):Math.ceil(t/this._options.visiblePages)},/**
     * Get relative page
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Relative page number
     * @private
     */_getRelativePage:function(t){var e=this.getCurrentPage();return"prev"===t?e-1:e+1},/**
     * Get more page index
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Page index
     * @private
     */_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},/* eslint-enable complexity *//**
     * Get available page number from over number
     * If total page is 23, but input number is 30 => return 23
     * @param {number} page - Page number
     * @returns {number} Replaced pgae number
     * @private
     */_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.min(t=Math.max(t,1),e)},/**
     * Create require view set, notify view to update
     * @param {number} page - Page number
     * @private
     */_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},/**
     * Create and get view data
     * @param {number} page - Page number
     * @returns {object} view data
     * @private
     */_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),o=this._getPageIndex(n),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=i>1,e.nextMore=i<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},/**
     * Get each edge page
     * @param {object} page - Page number
     * @returns {{left: number, right: number}} Edge page numbers
     * @private
     */_getEdge:function(t){var e,n,i=this._getLastPage(),o=this._options.visiblePages,r=this._getPageIndex(t);return this._options.centerAlign?(n=(e=Math.max(t-Math.floor(o/2),1))+o-1)>i&&(e=Math.max(i-o+1,1),n=i):(e=(r-1)*o+1,n=Math.min(n=r*o,i)),{left:e,right:n}},/**
     * Pagelist click event hadnler
     * @param {?string} buttonType - Button type
     * @param {?number} page - Page number
     * @private
     *//* eslint-disable complexity */_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},/* eslint-enable complexity *//**
     * Reset pagination
     * @param {*} totalItems - Redraw page item count
     * @example
     * pagination.reset();
     * pagination.reset(100);
     */reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},/**
     * Move to specific page, redraw list.
     * Before move fire beforeMove event, After move fire afterMove event.
     * @param {Number} targetPage - Target page
     * @example
     * pagination.movePageTo(10);
     */movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),/**
       * @event Pagination#afterMove
       * @type {object} evt - Custom event object
       * @property {number} page - Moved page
       * @example
       * paganation.on('afterMove', (event) => {
       *      const currentPage = event.page;
       *      console.log(currentPage);
       * });
       */this.fire("afterMove",{page:t}))},/**
     * Set total count of items
     * @param {number} itemCount - Total item count
     */setTotalItems:function(t){this._options.totalItems=t},/**
     * Set count of items per page
     * @param {number} itemCount - Item count
     */setItemsPerPage:function(t){this._options.itemsPerPage=t},/**
     * Get current page
     * @returns {number} Current page
     */getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l;/***/},/* 13 *//***/function(t,e,n){/**
 * @fileoverview This module provides some functions for custom events. And it is implemented in the observer design pattern.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i=n(0),o=n(14),r=n(4),s=n(16),a=n(2),u=n(5),c=n(3),l=/\s+/g;/**
 * @class
 * @example
 * // node, commonjs
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents');
 */function p(){/**
     * @type {HandlerItem[]}
     */this.events=null,/**
     * only for checking specific context event was binded
     * @type {object[]}
     */this.contexts=null}/**
 * Mixin custom events feature to specific constructor
 * @param {function} func - constructor
 * @example
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * var model;
 * function Model() {
 *     this.name = '';
 * }
 * CustomEvents.mixin(Model);
 *
 * model = new Model();
 * model.on('change', function() { this.name = 'model'; }, this);
 * model.fire('change');
 * alert(model.name); // 'model';
 */p.mixin=function(t){i(t.prototype,p.prototype)},/**
 * Get HandlerItem object
 * @param {function} handler - handler function
 * @param {object} [context] - context for handler
 * @returns {HandlerItem} HandlerItem object
 * @private
 */p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},/**
 * Get event object safely
 * @param {string} [eventName] - create sub event map if not exist.
 * @returns {(object|array)} event object. if you supplied `eventName`
 *  parameter then make new array and return it
 * @private
 */p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},/**
 * Get context array safely
 * @returns {array} context array
 * @private
 */p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},/**
 * Get index of context
 * @param {object} ctx - context that used for bind custom event
 * @returns {number} index of context
 * @private
 */p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return -1},/**
 * Memorize supplied context for recognize supplied object is context or
 *  name: handler pair object when off()
 * @param {object} ctx - context object to memorize
 * @private
 */p.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},/**
 * Forget supplied context object
 * @param {object} ctx - context object to forget
 * @private
 */p.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},/**
 * Bind event handler
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * @private
 */p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},/**
 * Bind event handlers
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 Basic Usage
 * CustomEvents.on('onload', handler);
 *
 * // # 2.2 With context
 * CustomEvents.on('onload', handler, myObj);
 *
 * // # 2.3 Bind by object that name, handler pairs
 * CustomEvents.on({
 *     'play': handler,
 *     'pause': handler2
 * });
 *
 * // # 2.4 Bind by object that name, handler pairs with context object
 * CustomEvents.on({
 *     'play': handler
 * }, myObj);
 */p.prototype.on=function(t,e,n){var i=this;r(t)?c(// [syntax 1, 2]
t=t.split(l),function(t){i._bindEvent(t,e,n)}):s(t)&&(// [syntax 3, 4]
n=e,c(t,function(t,e){i.on(e,t,n)}))},/**
 * Bind one-shot event handlers
 * @param {(string|{name:string,handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {function|object} [handler] - handler function or context
 * @param {object} [context] - context for binding
 */p.prototype.once=function(t,e,n){var i=this;if(s(t)){n=e,c(t,function(t,e){i.once(e,t,n)});return}this.on(t,function o(){e.apply(n,arguments),i.off(t,o,n)},n)},/**
 * Splice supplied array by callback result
 * @param {array} arr - array to splice
 * @param {function} predicate - function return boolean
 * @private
 */p.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},/**
 * Get matcher for unbind specific handler events
 * @param {function} handler - handler function
 * @returns {function} handler matcher
 * @private
 */p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},/**
 * Get matcher for unbind specific context events
 * @param {object} context - context
 * @returns {function} object matcher
 * @private
 */p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},/**
 * Get matcher for unbind specific hander, context pair events
 * @param {function} handler - handler function
 * @param {object} context - context
 * @returns {function} handler, context matcher
 * @private
 */p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var o=t===i.handler,r=e===i.context,s=o&&r;return s&&n._forgetContext(i.context),s}},/**
 * Unbind event by event name
 * @param {string} eventName - custom event name to unbind
 * @param {function} [handler] - handler function
 * @private
 */p.prototype._offByEventName=function(t,e){var n=this,i=u(e),o=n._matchHandler(e);c(t=t.split(l),function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,o):(c(e,function(t){n._forgetContext(t.context)}),n.events[t]=[])})},/**
 * Unbind event by handler function
 * @param {function} handler - handler function
 * @private
 */p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),function(t){e._spliceMatches(t,n)})},/**
 * Unbind event by object(name: handler pair object or context object)
 * @param {object} obj - context or {name: handler} pair object
 * @param {function} handler - handler function
 * @private
 */p.prototype._offByObject=function(t,e){var n,i=this;0>this._indexOfContext(t)?c(t,function(t,e){i.off(e,t)}):r(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):u(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),function(t){i._spliceMatches(t,n)})):(n=this._matchContext(t),c(this._safeEvent(),function(t){i._spliceMatches(t,n)}))},/**
 * Unbind custom events
 * @param {(string|object|function)} eventName - event name or context or
 *  {name: handler} pair object or handler function
 * @param {(function)} handler - handler function
 * @example
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 off by event name
 * CustomEvents.off('onload');
 *
 * // # 2.2 off by event name and handler
 * CustomEvents.off('play', handler);
 *
 * // # 2.3 off by handler
 * CustomEvents.off(handler);
 *
 * // # 2.4 off by context
 * CustomEvents.off(myObj);
 *
 * // # 2.5 off by context and handler
 * CustomEvents.off(myObj, handler);
 *
 * // # 2.6 off by context and event name
 * CustomEvents.off(myObj, 'onload');
 *
 * // # 2.7 off by an Object.<string, function> that is {eventName: handler}
 * CustomEvents.off({
 *   'play': handler,
 *   'pause': handler2
 * });
 *
 * // # 2.8 off the all events
 * CustomEvents.off();
 */p.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?u(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(// [syntax 8]
this.events={},this.contexts=[])},/**
 * Fire custom event
 * @param {string} eventName - name of custom event
 */p.prototype.fire=function(t){this.invoke.apply(this,arguments)},/**
 * Fire a event and returns the result of operation 'boolean AND' with all
 *  listener's results.
 *
 * So, It is different from {@link CustomEvents#fire}.
 *
 * In service code, use this as a before event in component level usually
 *  for notifying that the event is cancelable.
 * @param {string} eventName - Custom event name
 * @param {...*} data - Data for event
 * @returns {boolean} The result of operation 'boolean AND'
 * @example
 * var map = new Map();
 * map.on({
 *     'beforeZoom': function() {
 *         // It should cancel the 'zoom' event by some conditions.
 *         if (that.disabled && this.getState()) {
 *             return false;
 *         }
 *         return true;
 *     }
 * });
 *
 * if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
 *     // if true,
 *     // doSomething
 * }
 */p.prototype.invoke=function(t){var e,n,i,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(o=e[i]).handler.apply(o.context,n))return!1;i+=1}return!0},/**
 * Return whether at least one of the handlers is registered in the given
 *  event name.
 * @param {string} eventName - Custom event name
 * @returns {boolean} Is there at least one handler in event name?
 */p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},/**
 * Return a count of events registered.
 * @param {string} eventName - Custom event name
 * @returns {number} number of event
 */p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p;/***/},/* 14 *//***/function(t,e,n){/**
 * @fileoverview Check whether the given variable is existing or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i=n(1),o=n(15);t.exports=/**
 * Check whether the given variable is existing or not.
 * If the given variable is not null and not undefined, returns true.
 * @param {*} param - Target for checking
 * @returns {boolean} Is existy?
 * @memberof module:type
 * @example
 * var isExisty = require('tui-code-snippet/type/isExisty'); // node, commonjs
 *
 * isExisty(''); //true
 * isExisty(0); //true
 * isExisty([]); //true
 * isExisty({}); //true
 * isExisty(null); //false
 * isExisty(undefined); //false
*/function(t){return!i(t)&&!o(t)};/***/},/* 15 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is null or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is null or not.
 * If the given variable(arguments[0]) is null, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is null?
 * @memberof module:type
 */function(t){return null===t};/***/},/* 16 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is an object or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is an object or not.
 * If the given variable is an object, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is object?
 * @memberof module:type
 */function(t){return t===Object(t)};/***/},/* 17 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Execute the provided callback once for each element present
 * in the array(or Array-like object) in ascending order.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the element
 *  2) The index of the element
 *  3) The array(or Array-like object) being traversed
 * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachArray = require('tui-code-snippet/collection/forEachArray'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachArray([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */function(t,e,n){var i=0,o=t.length;for(n=n||null;i<o&&!1!==e.call(n,t[i],i,t);i+=1);};/***/},/* 18 *//***/function(t,e,n){/**
 * @fileoverview Provide a simple inheritance in prototype-oriented.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i=n(19);t.exports=/**
 * Provide a simple inheritance in prototype-oriented.
 * Caution :
 *  Don't overwrite the prototype of child constructor.
 *
 * @param {function} subType Child constructor
 * @param {function} superType Parent constructor
 * @memberof module:inheritance
 * @example
 * var inherit = require('tui-code-snippet/inheritance/inherit'); // node, commonjs
 *
 * // Parent constructor
 * function Animal(leg) {
 *     this.leg = leg;
 * }
 * Animal.prototype.growl = function() {
 *     // ...
 * };
 *
 * // Child constructor
 * function Person(name) {
 *     this.name = name;
 * }
 *
 * // Inheritance
 * inherit(Person, Animal);
 *
 * // After this inheritance, please use only the extending of property.
 * // Do not overwrite prototype.
 * Person.prototype.walk = function(direction) {
 *     // ...
 * };
 */function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n};/***/},/* 19 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Create a new object with the specified prototype object and properties.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * @module inheritance
 *//**
 * Create a new object with the specified prototype object and properties.
 * @param {Object} obj This object will be a prototype of the newly-created object.
 * @returns {Object}
 * @memberof module:inheritance
 */function(t){function e(){}// eslint-disable-line require-jsdoc
return e.prototype=t,new e};/***/},/* 20 *//***/function(t,e,n){var i=n(3),o=n(7),r=n(21),s=n(22),a=n(24),u=n(25),c=n(0),l=n(4),p=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},g=["first","prev","next","last"],d=["prev","next"],_=o(/** @lends View.prototype */{init:function(t,e,n){/**
       * Root element
       * @type {HTMLElement}
       * @private
       */this._containerElement=null,/**
       * First item's class name
       * @type {string}
       * @private
       */this._firstItemClassName=e.firstItemClassName,/**
       * Last item's class name
       * @type {string}
       * @private
       */this._lastItemClassName=e.lastItemClassName,/**
       * Default template
       * @type {object.<string, string|function>}
       * @private
       */this._template=c({},h,e.template),/**
       * Map of buttons
       * @type {object.<string, HTMLElement>}
       * @private
       */this._buttons={},/**
       * Enabled page elements list
       * @type {array}
       * @private
       */this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},/* eslint-enable complexity *//**
     * Set root element
     * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
     * @private
     */_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw Error("The container element is invalid.");this._containerElement=t},/**
     * Assign move buttons to option
     * @private
     */_setMoveButtons:function(){i(g,function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})},this)},/**
     * Assign disabled move buttons to option
     * @private
     */_setDisabledMoveButtons:function(){i(g,function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})},this)},/**
     * Assign more buttons to option
     * @private
     */_setMoreButtons:function(){i(d,function(t){this._buttons[t+"More"]=f.createElementByTemplate(this._template.moreButton,{type:t})},this)},/* eslint-enable camelcase *//**
     * Get container element
     * @returns {HTMLElement} Container element
     * @private
     */_getContainerElement:function(){return this._containerElement},/**
     * Append first button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},/**
     * Append previous button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},/**
     * Append next button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},/**
     * Append last button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},/**
     * Append previous more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */_appendPrevMoreButton:function(t){var e;t.prevMore&&(u(e=this._buttons.prevMore,this._firstItemClassName),this._getContainerElement().appendChild(e))},/**
     * Append next more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */_appendNextMoreButton:function(t){var e;t.nextMore&&(u(e=this._buttons.nextMore,this._lastItemClassName),this._getContainerElement().appendChild(e))},/**
     * Append page number elements on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */// eslint-disable-next-line complexity
_appendPages:function(t){var e,n,i=t.leftPageNumber,o=t.rightPageNumber;for(n=i;n<=o;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||u(e,this._firstItemClassName),n!==o||t.nextMore||u(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},/**
     * Attach click event
     * @param {function} callback - Callback function
     * @private
     */_attachClickEvent:function(t){s(this._getContainerElement(),"click",function(e){var n,i,o=r(e);a(e),(i=this._getButtonType(o))||(n=this._getPageNumber(o)),t(i,n)},this)},/**
     * Get button type to move button elements
     * @param {HTMLElement} targetElement - Each move button element
     * @returns {?string} Button type
     * @private
     */_getButtonType:function(t){var e;return i(this._buttons,function(n,i){return!f.isContained(t,n)||(e=i,!1)},this),e},/* eslint-enable no-lonely-if *//**
     * Get number to page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {?number} Page number
     * @private
     */_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},/**
     * Find target element from page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {HTMLElement} Found element
     * @ignore
     */_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},/**
     * Reset container element
     * @private
     */_empty:function(){this._enabledPageElements=[],i(this._buttons,function(t,e){this._buttons[e]=t.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},/**
     * Update view
     * @param {object} viewData - View data to render pagination
     * @ignore
     */update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=_;/***/},/* 21 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Get a target element from an event object.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Get a target element from an event object.
 * @param {Event} e - event object
 * @returns {HTMLElement} - target element
 * @memberof module:domEvent
 */function(t){return t.target||t.srcElement};/***/},/* 22 *//***/function(t,e,n){/**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i=n(4),o=n(3),r=n(23);/**
 * Bind DOM events
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @private
 */function s(t,e,n,i){var s,a;/**
     * Event handler
     * @param {Event} e - event object
     */function u(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,u):"attachEvent"in t&&t.attachEvent("on"+e,u),s=r(t,e),a=!1,o(s,function(t){return t.handler!==n||(a=!0,!1)}),a||s.push({handler:n,wrappedHandler:u})}t.exports=/**
 * Bind DOM events.
 * @param {HTMLElement} element - element to bind events
 * @param {(string|object)} types - Space splitted events names or eventName:handler object
 * @param {(function|object)} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @memberof module:domEvent
 * @example
 * var div = document.querySelector('div');
 * 
 * // Bind one event to an element.
 * on(div, 'click', toggle);
 * 
 * // Bind multiple events with a same handler to multiple elements at once.
 * // Use event names splitted by a space.
 * on(div, 'mouseenter mouseleave', changeColor);
 * 
 * // Bind multiple events with different handlers to an element at once.
 * // Use an object which of key is an event name and value is a handler function.
 * on(div, {
 *   keydown: highlight,
 *   keyup: dehighlight
 * });
 * 
 * // Set a context for handler method.
 * var name = 'global';
 * var repository = {name: 'CodeSnippet'};
 * on(div, 'drag', function() {
 *  console.log(this.name);
 * }, repository);
 * // Result when you drag a div: "CodeSnippet"
 */function(t,e,n,r){if(i(e)){o(e.split(/\s+/g),function(e){s(t,e,n,r)});return}o(e,function(e,i){s(t,i,e,n)})};/***/},/* 23 *//***/function(t,e,n){/**
 * @fileoverview Get event collection for specific HTML element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i="_feEventKey";t.exports=/**
 * Get event collection for specific HTML element
 * @param {HTMLElement} element - HTML element
 * @param {string} type - event type
 * @returns {array}
 * @private
 */function(t,e){var n,o=t[i];return o||(o=t[i]={}),(n=o[e])||(n=o[e]=[]),n};/***/},/* 24 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Prevent default action
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Prevent default action
 * @param {Event} e - event object
 * @memberof module:domEvent
 */function(t){if(t.preventDefault){t.preventDefault();return}t.returnValue=!1};/***/},/* 25 *//***/function(t,e,n){/**
 * @fileoverview Add css class to element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i=n(3),o=n(8),r=n(26),s=n(27);t.exports=/**
 * domUtil module
 * @module domUtil
 *//**
 * Add css class to element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to add
 * @memberof module:domUtil
 */function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,u=[];if(a){i(n,function(e){t.classList.add(e)});return}(e=r(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,function(t){0>o(t,u)&&u.push(t)}),s(t,u)};/***/},/* 26 *//***/function(t,e,n){/**
 * @fileoverview Get HTML element's design classes.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i=n(1);t.exports=/**
 * Get HTML element's design classes.
 * @param {(HTMLElement|SVGElement)} element target element
 * @returns {string} element css class name
 * @memberof module:domUtil
 */function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""};/***/},/* 27 *//***/function(t,e,n){/**
 * @fileoverview Set className value
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i=n(2),o=n(1);t.exports=/**
 * Set className value
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {(string|string[])} cssClass - class names
 * @private
 */function(t,e){if(e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)){t.className=e;return}t.className.baseVal=e};/***/},/* 28 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is a instance of HTMLNode or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is a instance of HTMLNode or not.
 * If the given variables is a instance of HTMLNode, return true.
 * @param {*} html - Target for checking
 * @returns {boolean} Is HTMLNode ?
 * @memberof module:type
 */function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!!(t&&t.nodeType)};/***/},/* 29 *//***/function(t,e,n){/**
 * @fileoverview Convert text by binding expressions with context.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i=n(8),o=n(3),r=n(2),s=n(4),a=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,g=/"|'/g,d=/^-?\d+\.?\d*$/,_={if:/**
 * Helper function for "if". 
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the if block
 * @param {object} context - context
 * @returns {string}
 * @private
 */function(t,e,n){var i,r,s,a,u=(i=[t],r=[],s=0,a=0,// eslint-disable-next-line complexity
o(e,function(t,n){0===t.indexOf("if")?s+=1:"/if"===t?s-=1:s||0!==t.indexOf("elseif")&&"else"!==t||(i.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(a,n)),a=n+1)}),r.push(e.slice(a)),{exps:i,sourcesInsideIf:r}),c=!1,l="";return o(u.exps,function(t,e){return(c=x(t,n))&&(l=b(u.sourcesInsideIf[e],n)),!c}),l},each:/**
 * Helper function for "each".
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the each block
 * @param {object} context - context
 * @returns {string}
 * @private
 */function(t,e,n){var i=x(t,n),s=r(i)?"@index":"@key",u={},c="";return o(i,function(t,i){u[s]=i,u["@this"]=t,a(n,u),c+=b(e.slice(),n)}),c},with:/**
 * Helper function for "with ... as"
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the with block
 * @param {object} context - context
 * @returns {string}
 * @private
 */function(t,e,n){var o=i("as",t),r=t[o+1],s=x(t.slice(0,o),n),u={};return u[r]=s,b(e,a(n,u))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,o=[],r=0;for(e.global||(e=RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,o.push(t.slice(r,i)),r=i+n[0].length,n=e.exec(t);return o.push(t.slice(r)),o};/**
 * Find value in the context by an expression.
 * @param {string} exp - an expression
 * @param {object} context - context
 * @returns {*}
 * @private
 */// eslint-disable-next-line complexity
function v(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(g,""):c.test(t)?i=v((n=t.split(l))[0],e)[v(n[1],e)]:p.test(t)?i=v((n=t.split(f))[0],e)[n[1]]:d.test(t)&&(i=parseFloat(t)),i}/**
 * Helper function for "custom helper".
 * If helper is not a function, return helper itself.
 * @param {Array.<string>} exps - array of expressions split by spaces (first element: helper)
 * @param {object} context - context
 * @returns {string}
 * @private
 */function x(t,e){var n,i,r=v(t[0],e);return r instanceof Function?(n=t.slice(1),i=[],o(n,function(t){i.push(v(t,e))}),r.apply(null,i)):r}/**
 * Get a result of compiling an expression with the context.
 * @param {Array.<string>} sources - array of sources split by regexp of expression.
 * @param {object} context - context
 * @returns {Array.<string>} - array of sources that bind with its context
 * @private
 */function b(t,e){for(var n,i,o,r=1,a=t[1];s(a);)_[i=(n=a.split(" "))[0]]?(o=/**
 * Handle block helper function
 * @param {string} helperKeyword - helper keyword (ex. if, each, with)
 * @param {Array.<string>} sourcesToEnd - array of sources after the starting block
 * @param {object} context - context
 * @returns {Array.<string>}
 * @private
 */function(t,e,n){for(var i,o,r,a=_[t],u=1,c=2,l=e[2];u&&s(l);)0===l.indexOf(t)?u+=1:0===l.indexOf("/"+t)&&(u-=1,r=c),c+=2,l=e[c];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=a(e[0].split(" ").slice(1),(i=r,(o=e.splice(1,i-0)).pop(),o),n),e}(i,t.splice(r,t.length-r),e),t=t.concat(o)):t[r]=x(n,e),r+=2,a=t[r];return t.join("")}t.exports=/**
 * Convert text by binding expressions with context.
 * <br>
 * If expression exists in the context, it will be replaced.
 * ex) '{{title}}' with context {title: 'Hello!'} is converted to 'Hello!'.
 * An array or object can be accessed using bracket and dot notation.
 * ex) '{{odds\[2\]}}' with context {odds: \[1, 3, 5\]} is converted to '5'.
 * ex) '{{evens\[first\]}}' with context {evens: \[2, 4\], first: 0} is converted to '2'.
 * ex) '{{project\["name"\]}}' and '{{project.name}}' with context {project: {name: 'CodeSnippet'}} is converted to 'CodeSnippet'.
 * <br>
 * If replaced expression is a function, next expressions will be arguments of the function.
 * ex) '{{add 1 2}}' with context {add: function(a, b) {return a + b;}} is converted to '3'.
 * <br>
 * It has 3 predefined block helpers '{{helper ...}} ... {{/helper}}': 'if', 'each', 'with ... as ...'.
 * 1) 'if' evaluates conditional statements. It can use with 'elseif' and 'else'.
 * 2) 'each' iterates an array or object. It provides '@index'(array), '@key'(object), and '@this'(current element).
 * 3) 'with ... as ...' provides an alias.
 * @param {string} text - text with expressions
 * @param {object} context - context
 * @returns {string} - text that bind with its context
 * @memberof module:domUtil
 * @example
 * var template = require('tui-code-snippet/domUtil/template');
 * 
 * var source = 
 *     '<h1>'
 *   +   '{{if isValidNumber title}}'
 *   +     '{{title}}th'
 *   +   '{{elseif isValidDate title}}'
 *   +     'Date: {{title}}'
 *   +   '{{/if}}'
 *   + '</h1>'
 *   + '{{each list}}'
 *   +   '{{with addOne @index as idx}}'
 *   +     '<p>{{idx}}: {{@this}}</p>'
 *   +   '{{/with}}'
 *   + '{{/each}}';
 * 
 * var context = {
 *   isValidDate: function(text) {
 *     return /^\d{4}-(0|1)\d-(0|1|2|3)\d$/.test(text);
 *   },
 *   isValidNumber: function(text) {
 *     return /^\d+$/.test(text);
 *   }
 *   title: '2019-11-25',
 *   list: ['Clean the room', 'Wash the dishes'],
 *   addOne: function(num) {
 *     return num + 1;
 *   }
 * };
 * 
 * var result = template(source, context);
 * console.log(result); // <h1>Date: 2019-11-25</h1><p>1: Clean the room</p><p>2: Wash the dishes</p>
 */function(t,e){return b(m(t,u),e)};/***/},/* 30 *//***/function(t,e,n){/**
 * @fileoverview Send hostname on DOMContentLoaded.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i=n(1),o=n(31);t.exports=/**
 * Send hostname on DOMContentLoaded.
 * To prevent hostname set tui.usageStatistics to false.
 * @param {string} appName - application name
 * @param {string} trackingId - GA tracking ID
 * @ignore
 */function(t,e){var n=location.hostname,r="TOAST UI "+t+" for "+n+": Statistics",s=window.localStorage.getItem(r);(i(window.tui)||!1!==window.tui.usageStatistics)&&(!s||new Date().getTime()-s>6048e5)&&(window.localStorage.setItem(r,new Date().getTime()),setTimeout(function(){("interactive"===document.readyState||"complete"===document.readyState)&&o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})},1e3))};/***/},/* 31 *//***/function(t,e,n){/**
 * @fileoverview Request image ping.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var i=n(6);t.exports=/**
 * @module request
 *//**
 * Request image ping.
 * @param {String} url url for ping request
 * @param {Object} trackingInfo infos for make query string
 * @returns {HTMLElement}
 * @memberof module:request
 * @example
 * var imagePing = require('tui-code-snippet/request/imagePing'); // node, commonjs
 *
 * imagePing('https://www.google-analytics.com/collect', {
 *     v: 1,
 *     t: 'event',
 *     tid: 'trackingid',
 *     cid: 'cid',
 *     dp: 'dp',
 *     dh: 'dh'
 * });
 */function(t,e){var n=document.createElement("img"),o="";return i(e,function(t,e){o+="&"+e+"="+t}),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n};/***/}]);// Отримати дані з localStorage
let c=JSON.parse(localStorage.getItem("bookArr")),l=c.length,p=document.querySelector(".tui-pagination"),f=document.querySelector(".shop-list-container");function h(){c=JSON.parse(localStorage.getItem("bookArr"));let e={totalItems:l,itemsPerPage:3,visiblePages:3,centerAlign:!0,currentPage:1},n=//  Розподіл даних на порції
function(t,e){let n=[],i=0;for(;i<t.length;){let o=t.slice(i,e+i);n.push(o),i+=e}return n}(c,e.itemsPerPage);console.log(n);let i=n[e.currentPage-1];console.log(i),f.innerHTML=v(i);let o=new/*@__PURE__*/(t(u))(p,e);o.reset(l),o.on("beforeMove",t=>{e.currentPage=t.page,i=n[e.currentPage-1],// console.log(booksOnPage);
f.innerHTML=v(i)}),o.reset(l)}// // // Розподілити дані на порції
// let paginatedData = [];
// for (let i = 0; i < shoppingList.length; i += itemsPerPage) {
//   const page = shoppingList.slice(i, i + itemsPerPage);
//   paginatedData.push(page);
// }
// getPagination(paginatedData, itemsPerPage);
// function displayPage(pageNumber) {
//   //     // Отримати поточну порцію з paginatedData
//   const currentPage = paginatedData[pageNumber - 1];
//   console.log(currentPage);
//   // Очистити старий вміст сторінки
//   const shoppingListContainer = document.getElementById(
//     'shoppingListContainer'
//   );
//   shoppingListContainer.innerHTML = '';
//   // Відобразити елементи поточної порції
//   currentPage.forEach(item => {
//     const listItem = document.createElement('li');
//     listItem.textContent = item.name; // Припускаючи, що у вас є поле "name" в об'єкті покупки
//     shoppingListContainer.appendChild(listItem);
//   });
// }
//   function onPageChange(pageNumber) {
//     displayPage(pageNumber);
//   }
//   // Приклад створення кнопок для переходу між сторінками
//   const totalPages = paginatedData.length;
//   for (let i = 1; i <= totalPages; i++) {
//     const pageButton = document.createElement('button');
//     pageButton.textContent = i;
//     pageButton.addEventListener('click', () => onPageChange(i));
//     document.getElementById('paginationButtons').appendChild(pageButton);
//   }
// //
o("knWGd"),o("ksGdE"),o("E6hPi");var g={};g=o("aNJCr").getBundleURL("kKLfj")+o("iE7OH").resolve("ee16w");let d=document.querySelector(".shop-list-container"),_=document.querySelector(".shop-list-empty"),m="bookArr";function v(e){return e.map(({author:e,title:n,description:i,book_image:o,buy_links:u,list_name:c,id:l})=>{let p=`<li class="shop-list-item" data-id="${l}">
                <img class="shop-list-img" src="${o||"../images/default_image.jpg"}" alt="${n}"> 
                <div class="shop-list-info">
                <h3 class="shop-book-title">${n}</h3>
                <p class="shop-category">${c}</p>
                <p class="shop-description">${i}</p>
                <div class="shop-autor-links">
                <p class="shop-book-author">${e}</p>
                <ul class="shop-links-img">
        <li class="shop-link shop-link-amazon">
        <a class="item-link" href=${x(u,"Amazon")} target= _blank><img src="${/*@__PURE__*/t(r)}" alt="Amazon" width="48px" height="15px"class="card-image card-imge-amazon"></a>
        </li>
        <li>
        <a class="item-link" href=${x(u,"Apple Books")} target= _blank><img src="${/*@__PURE__*/t(s)}" alt="Apple-Books" width="30px"class="card-image"></a>
        </li>
        <li>
        <a class="item-link" href=${x(u,"Bookshop")} target= _blank> <img src="${/*@__PURE__*/t(a)}" alt="Book-Shop" width="30px"class="card-image"></a>
        </li>
      </ul>
      </div>
                </div>
      <button class="shop-button-book-remove" type="button">
      <svg class="shop-remove-btn" width="20" height="20">
                    <use href="${/*@__PURE__*/t(g)}#icon-shop-trash"></use>
                </svg>
      </button>
        </li>`;return p}).join("")}function x(t,e){for(let{name:n,url:i}of t)if(n===e)return i}window.addEventListener("DOMContentLoaded",function(t){let e=JSON.parse(localStorage.getItem(m));if(0===e.length){d.innerHTML="",_.classList.remove("shoping-hidden");return}_.classList.add("shoping-hidden"),h(),document.querySelector(".shop-button-book-remove");// rightWrapper.innerHTML = shopingListBookMarkup(booksArr);
}),d.addEventListener("click",function(t){if("shop-button-book-remove"!==t.target.className)return;let e=t.target.parentNode.dataset.id;(function(t){let e=JSON.parse(localStorage.getItem(m));e.find(e=>e.id===t);let n=e.findIndex(e=>e.id===t);e.splice(n,1),localStorage.setItem(m,JSON.stringify(e))})(e),h()})}();//# sourceMappingURL=shopping_list_olexandr.67745397.js.map

//# sourceMappingURL=shopping_list_olexandr.67745397.js.map
