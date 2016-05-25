(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueJJ"] = factory();
	else
		root["VueJJ"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _TransitionView = __webpack_require__(1);
	
	var _TransitionView2 = _interopRequireDefault(_TransitionView);
	
	var _TransitionTrainingView = __webpack_require__(8);
	
	var _TransitionTrainingView2 = _interopRequireDefault(_TransitionTrainingView);
	
	var _TransformView = __webpack_require__(13);
	
	var _TransformView2 = _interopRequireDefault(_TransformView);
	
	var _TransformTrainingView = __webpack_require__(18);
	
	var _TransformTrainingView2 = _interopRequireDefault(_TransformTrainingView);
	
	var _AnimationView = __webpack_require__(23);
	
	var _AnimationView2 = _interopRequireDefault(_AnimationView);
	
	var _AnimationTrainingView = __webpack_require__(28);
	
	var _AnimationTrainingView2 = _interopRequireDefault(_AnimationTrainingView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import keyframe from './KeyframeView.vue'
	// import nav1 from './Nav1View.vue'
	// import nav2 from './Nav2View.vue'
	// import nav3 from './Nav3View.vue'
	
	var Vuejj = {
	  transition: _TransitionView2.default,
	  transitiontraining: transitiontraining,
	  transform: _TransformView2.default,
	  transformtraining: transformtraining,
	  animation: _AnimationView2.default,
	  animationtraining: animationtraining,
	  keyframe: keyframe,
	  nav1: nav1,
	  nav2: nav2,
	  nav3: nav3
	};
	
	module.exports = Vuejj;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jj/Desktop/vuejs/src/TransitionView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6940d982&file=TransitionView.vue!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TransitionView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6940d982&file=TransitionView.vue!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TransitionView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".article {\n  padding: 20px 15px;\n  font-size: 15px;\n}\n.article section {\n  margin-bottom: 1.5em;\n}\n.article h1 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: 0.75em;\n}\n.article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0.3em;\n}\n.article h3 {\n  font-weight: 400;\n  font-size: 15px;\n}\n.article .transition-1-1 {\n  display: block;\n  width: 100px;\n  height: 100px;\n  background: #444;\n  margin: 4em auto;\n}\n.article .transition-1-1:hover {\n  width: 200px;\n  height: 200px;\n  background: #f00;\n  -webkit-transition: baclground 2s;\n  transition: baclground 2s;\n}\n", "", {"version":3,"sources":["/./src/TransitionView.vue.style","/./src/TransitionView.vue"],"names":[],"mappings":"AAEA;EACC,mBAAA;EACA,gBAAA;CCDA;ADGA;EACC,qBAAA;CCDD;ADGA;EACC,gBAAA;EACA,iBAAA;EACA,sBAAA;CCDD;ADEA;EACC,gBAAA;EACA,iBAAA;EACA,qBAAA;CCAD;ADCA;EACC,iBAAA;EACA,gBAAA;CCCD;ADCA;EACC,eAAA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;CCCD;ADAC;EACC,aAAA;EACA,cAAA;EACA,iBAAA;EACA,kCAAA;EAAA,0BAAA;CCEF","file":"TransitionView.vue","sourcesContent":["\n\n.article\n\tpadding: 20px 15px\n\tfont-size: 15px\n\t\n\tsection\n\t\tmargin-bottom: 1.5em\n\n\th1\n\t\tfont-size: 17px\n\t\tfont-weight:400\n\t\tmargin-bottom: .75em\n\th2\n\t\tfont-size: 16px\n\t\tfont-weight:400\n\t\tmargin-bottom: .3em\n\th3\n\t\tfont-weight:400\n\t\tfont-size: 15px\n\n\t.transition-1-1\n\t\tdisplay: block\n\t\twidth: 100px\n\t\theight: 100px\n\t\tbackground: #444\n\t\tmargin: 4em auto\n\t\t&:hover\n\t\t\twidth: 200px\n\t\t\theight: 200px\n\t\t\tbackground: red\n\t\t\ttransition: baclground 2s\n\n",".article {\n  padding: 20px 15px;\n  font-size: 15px;\n}\n.article section {\n  margin-bottom: 1.5em;\n}\n.article h1 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: 0.75em;\n}\n.article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0.3em;\n}\n.article h3 {\n  font-weight: 400;\n  font-size: 15px;\n}\n.article .transition-1-1 {\n  display: block;\n  width: 100px;\n  height: 100px;\n  background: #444;\n  margin: 4em auto;\n}\n.article .transition-1-1:hover {\n  width: 200px;\n  height: 200px;\n  background: #f00;\n  transition: baclground 2s;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="page article">
	// 		<div class="hd">
	// 			<h1 class="page_title">JJ 教室</h1>
	// 		</div>
	// 		<div class="bd">
	// 			<article class="article">
	// 				<h1>CSS Transition Transform Animation</h1>
	// 				<section>
	// 					<h2 class="title">Transition</h2>
	// 					<section>
	// 					<h3>1.1 transition 介紹</h3>
	// 					<div class="transition-1-1"></div>
	// 					</section>
	// 				</section>
	// 			</article>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script>
	exports.default = {
		name: 'TransitionView'
	};
	// </script>
	//
	// <style lang="stylus">
	//
	// .article
	// 	padding: 20px 15px
	// 	font-size: 15px
	//
	// 	section
	// 		margin-bottom: 1.5em
	//
	// 	h1
	// 		font-size: 17px
	// 		font-weight:400
	// 		margin-bottom: .75em
	// 	h2
	// 		font-size: 16px
	// 		font-weight:400
	// 		margin-bottom: .3em
	// 	h3
	// 		font-weight:400
	// 		font-size: 15px
	//
	// 	.transition-1-1
	// 		display: block
	// 		width: 100px
	// 		height: 100px
	// 		background: #444
	// 		margin: 4em auto
	// 		&:hover
	// 			width: 200px
	// 			height: 200px
	// 			background: red
	// 			transition: baclground 2s
	//
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"page article\">\n\t\t<div class=\"hd\">\n\t\t\t<h1 class=\"page_title\">JJ 教室</h1>\n\t\t</div>\n\t\t<div class=\"bd\">\n\t\t\t<article class=\"article\">\n\t\t\t\t<h1>CSS Transition Transform Animation</h1>\n\t\t\t\t<section>\n\t\t\t\t\t<h2 class=\"title\">Transition</h2>\n\t\t\t\t\t<section>\n\t\t\t\t\t<h3>1.1 transition 介紹</h3>\n\t\t\t\t\t<div class=\"transition-1-1\"></div>\n\t\t\t\t\t</section>\n\t\t\t\t</section>\n\t\t\t</article>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(9)
	__vue_script__ = __webpack_require__(11)
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jj/Desktop/vuejs/src/TransitionTrainingView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8b6e378e&file=TransitionTrainingView.vue!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TransitionTrainingView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8b6e378e&file=TransitionTrainingView.vue!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TransitionTrainingView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "section {\n  width: 100%;\n  height: 100vh;\n  display: table;\n}\nsection .center {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n.trigger,\n.trigger:before,\n.trigger:after {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.text,\n.icon-download {\n  -webkit-transition: top 0.3s;\n  transition: top 0.3s;\n}\n.trigger {\n  position: relative;\n  background: #04be02;\n  display: inline-block;\n  width: 200px;\n  height: 60px;\n  border-radius: 50em;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2);\n  color: #fff;\n}\n.trigger:hover {\n  box-shadow: 0 2px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2);\n}\n.transition-1-2,\n.text,\n.icon-download {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n}\n.transition-1-2 {\n  overflow: hidden;\n}\n.text {\n  top: 0;\n  line-height: 60px;\n}\n.trigger:hover .text {\n  top: -100%;\n}\n.icon-download {\n  top: 100%;\n  background: url(\"/example/images/icon-download.svg\") no-repeat center center;\n}\n.trigger:hover .icon-download {\n  top: 0;\n}\n.trigger:before,\n.trigger:after {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n}\n.trigger:hover:before,\n.trigger:hover:after {\n  opacity: 1;\n  visibility: visible;\n}\n.trigger:before {\n  content: 'File Size: 1024Mb';\n  width: 140px;\n  height: 60px;\n  line-height: 60px;\n  background: rgba(87,107,149,0.5);\n  border-radius: 0.25em;\n  bottom: 90px;\n  left: calc(50% - 70px);\n}\n.trigger:after {\n  content: '';\n  width: 0;\n  height: 0;\n  border: 10px solid transparent;\n  border-top-color: rgba(87,107,149,0.5);\n  left: calc(50% - 10px);\n  bottom: 70px;\n}\n.trigger:hover:before {\n  bottom: 80px;\n}\n.trigger:hover:after {\n  bottom: 60px;\n}\n", "", {"version":3,"sources":["/./src/TransitionTrainingView.vue.style","/./src/TransitionTrainingView.vue"],"names":[],"mappings":"AAEA;EACE,YAAA;EACA,cAAA;EACA,eAAA;CCDD;ADGC;EACE,oBAAA;EACA,uBAAA;EACA,mBAAA;CCDH;ADMD;;;EACE,6BAAA;EAAA,qBAAA;CCFD;ADGD;;EACE,6BAAA;EAAA,qBAAA;CCAD;ADED;EACE,mBAAA;EACA,oBAAA;EACA,sBAAA;EACA,aAAA;EACA,aAAA;EACA,oBAAA;EACA,4EAAA;EACA,YAAA;CCAD;ADEC;EACE,2EAAA;CCAH;ADED;;;EACE,mBAAA;EACA,YAAA;EACA,aAAA;EACA,QAAA;CCED;ADAD;EACE,iBAAA;CCED;ADED;EACE,OAAA;EACA,kBAAA;CCAD;ADGC;EACE,WAAA;CCDH;ADGD;EACE,UAAA;EACA,6EAAA;CCDD;ADIC;EACG,OAAA;CCFJ;ADID;;EACE,mBAAA;EACA,WAAA;EACA,mBAAA;CCDD;ADED;;EACE,WAAA;EACA,oBAAA;CCCD;ADEC;EACE,6BAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;EACA,iCAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;CCAH;ADEC;EACE,YAAA;EACA,SAAA;EACA,UAAA;EACA,+BAAA;EACA,uCAAA;EACA,uBAAA;EACA,aAAA;CCAH;ADeG;EACE,aAAA;CCbL;ADcG;EACE,aAAA;CCZL","file":"TransitionTrainingView.vue","sourcesContent":["\n\nsection\n  width: 100%\n  height: 100vh\n  display: table\n  \n  .center\n    display: table-cell\n    vertical-align: middle\n    text-align: center\n\n$triggerBg = #04BE02\n$tipBg = rgba(#576B95,.5)\n\n$transitionDefault\n  transition: all .3s\n$transitionTop\n  transition: top .3s\n  \n.trigger\n  position: relative\n  background: $triggerBg\n  display: inline-block\n  width: 200px\n  height: 60px\n  border-radius: 50em\n  box-shadow: 0 2px 10px rgba(0,0,0,.2), inset 0 1px 0 rgba(255,255,255, .2)\n  color: white\n  @extend $transitionDefault\n  &:hover\n    box-shadow: 0 2px 2px rgba(0,0,0,.2), inset 0 1px 0 rgba(255,255,255, .2)\n\n$fullSize\n  position: absolute\n  width: 100%\n  height: 100%\n  left: 0\n\n.transition-1-2\n  overflow: hidden\n  @extend $fullSize\n\n\n.text\n  top: 0\n  line-height: 60px\n  @extend $fullSize\n  @extend $transitionTop\n  .trigger:hover &\n    top: -100%\n\n.icon-download\n  top: 100%\n  background: url(\"/example/images/icon-download.svg\") no-repeat center center\n  @extend $fullSize\n  @extend $transitionTop\n  .trigger:hover &\n     top: 0\n\n$hideTip\n  position: absolute\n  opacity: 0\n  visibility: hidden\n$showTip\n  opacity: 1\n  visibility: visible\n\n.trigger\n  &:before\n    content: 'File Size: 1024Mb'\n    width: 140px\n    height: 60px\n    line-height: 60px\n    background: $tipBg\n    border-radius: .25em\n    bottom: 90px\n    left: calc(50% - 70px)\n\n  &:after\n    content: ''\n    width: 0\n    height: 0\n    border: 10px solid transparent\n    border-top-color: $tipBg\n    left: calc(50% - 10px)\n    bottom: 70px\n\n  &:before\n    @extend $hideTip\n    @extend $transitionDefault\n    \n  &:after\n    @extend $hideTip\n    @extend $transitionDefault\n  \n  &:hover\n    &:before\n      @extend $showTip\n    &:after\n      @extend $showTip\n    &:before\n      bottom: 80px\n    &:after\n      bottom: 60px\n\n\n","section {\n  width: 100%;\n  height: 100vh;\n  display: table;\n}\nsection .center {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n.trigger,\n.trigger:before,\n.trigger:after {\n  transition: all 0.3s;\n}\n.text,\n.icon-download {\n  transition: top 0.3s;\n}\n.trigger {\n  position: relative;\n  background: #04be02;\n  display: inline-block;\n  width: 200px;\n  height: 60px;\n  border-radius: 50em;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2);\n  color: #fff;\n}\n.trigger:hover {\n  box-shadow: 0 2px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2);\n}\n.transition-1-2,\n.text,\n.icon-download {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n}\n.transition-1-2 {\n  overflow: hidden;\n}\n.text {\n  top: 0;\n  line-height: 60px;\n}\n.trigger:hover .text {\n  top: -100%;\n}\n.icon-download {\n  top: 100%;\n  background: url(\"/example/images/icon-download.svg\") no-repeat center center;\n}\n.trigger:hover .icon-download {\n  top: 0;\n}\n.trigger:before,\n.trigger:after {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n}\n.trigger:hover:before,\n.trigger:hover:after {\n  opacity: 1;\n  visibility: visible;\n}\n.trigger:before {\n  content: 'File Size: 1024Mb';\n  width: 140px;\n  height: 60px;\n  line-height: 60px;\n  background: rgba(87,107,149,0.5);\n  border-radius: 0.25em;\n  bottom: 90px;\n  left: calc(50% - 70px);\n}\n.trigger:after {\n  content: '';\n  width: 0;\n  height: 0;\n  border: 10px solid transparent;\n  border-top-color: rgba(87,107,149,0.5);\n  left: calc(50% - 10px);\n  bottom: 70px;\n}\n.trigger:hover:before {\n  bottom: 80px;\n}\n.trigger:hover:after {\n  bottom: 60px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="page article">
	//     <div class="hd">
	//       <h1 class="page_title">JJ 教室</h1>
	//     </div>
	//     <div class="bd">
	//       <article class="jj_article">
	//         <h1>CSS Transition Transform Animation</h1>
	//         <section>
	//           <h2 class="title">Transition</h2>
	//           <section>
	//           <h3>1.2 transition training</h3>
	//
	//           <section>
	//             <div class="center">
	//               <a class="trigger" href="#!">
	//                 <div class="transition-1-2">
	//                   <em class="text">Download</em>
	//                   <i aria-hidden="true" class="icon-download"></i>
	//                 </div>
	//               </a>
	//             </div>
	//           </section>
	//         </section>
	//       </article>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'TransformTrainingView'
	};
	// </script>
	//
	//
	//
	// <style lang="stylus">
	//
	// section
	//   width: 100%
	//   height: 100vh
	//   display: table
	//
	//   .center
	//     display: table-cell
	//     vertical-align: middle
	//     text-align: center
	//
	// $triggerBg = #04BE02
	// $tipBg = rgba(#576B95,.5)
	//
	// $transitionDefault
	//   transition: all .3s
	// $transitionTop
	//   transition: top .3s
	//
	// .trigger
	//   position: relative
	//   background: $triggerBg
	//   display: inline-block
	//   width: 200px
	//   height: 60px
	//   border-radius: 50em
	//   box-shadow: 0 2px 10px rgba(0,0,0,.2), inset 0 1px 0 rgba(255,255,255, .2)
	//   color: white
	//   @extend $transitionDefault
	//   &:hover
	//     box-shadow: 0 2px 2px rgba(0,0,0,.2), inset 0 1px 0 rgba(255,255,255, .2)
	//
	// $fullSize
	//   position: absolute
	//   width: 100%
	//   height: 100%
	//   left: 0
	//
	// .transition-1-2
	//   overflow: hidden
	//   @extend $fullSize
	//
	//
	// .text
	//   top: 0
	//   line-height: 60px
	//   @extend $fullSize
	//   @extend $transitionTop
	//   .trigger:hover &
	//     top: -100%
	//
	// .icon-download
	//   top: 100%
	//   background: url("/example/images/icon-download.svg") no-repeat center center
	//   @extend $fullSize
	//   @extend $transitionTop
	//   .trigger:hover &
	//      top: 0
	//
	// $hideTip
	//   position: absolute
	//   opacity: 0
	//   visibility: hidden
	// $showTip
	//   opacity: 1
	//   visibility: visible
	//
	// .trigger
	//   &:before
	//     content: 'File Size: 1024Mb'
	//     width: 140px
	//     height: 60px
	//     line-height: 60px
	//     background: $tipBg
	//     border-radius: .25em
	//     bottom: 90px
	//     left: calc(50% - 70px)
	//
	//   &:after
	//     content: ''
	//     width: 0
	//     height: 0
	//     border: 10px solid transparent
	//     border-top-color: $tipBg
	//     left: calc(50% - 10px)
	//     bottom: 70px
	//
	//   &:before
	//     @extend $hideTip
	//     @extend $transitionDefault
	//
	//   &:after
	//     @extend $hideTip
	//     @extend $transitionDefault
	//
	//   &:hover
	//     &:before
	//       @extend $showTip
	//     &:after
	//       @extend $showTip
	//     &:before
	//       bottom: 80px
	//     &:after
	//       bottom: 60px
	//
	//
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"page article\">\n    <div class=\"hd\">\n      <h1 class=\"page_title\">JJ 教室</h1>\n    </div>\n    <div class=\"bd\">\n      <article class=\"jj_article\">\n        <h1>CSS Transition Transform Animation</h1>\n        <section>\n          <h2 class=\"title\">Transition</h2>\n          <section>\n          <h3>1.2 transition training</h3>\n          \n          <section>\n            <div class=\"center\">\n              <a class=\"trigger\" href=\"#!\">\n                <div class=\"transition-1-2\">\n                  <em class=\"text\">Download</em>\n                  <i aria-hidden=\"true\" class=\"icon-download\"></i>\n                </div>\n              </a>\n            </div>\n          </section>\n        </section>\n      </article>\n    </div>\n  </div>\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(14)
	__vue_script__ = __webpack_require__(16)
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jj/Desktop/vuejs/src/TransformView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-904ca6c8&file=TransformView.vue!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TransformView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-904ca6c8&file=TransformView.vue!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TransformView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".jj_article {\n  padding: 20px 15px;\n  font-size: 15px;\n}\n.jj_article section {\n  margin-bottom: 1.5em;\n}\n.jj_article h1 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: 0.75em;\n}\n.jj_article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0.3em;\n}\n.jj_article h3 {\n  font-weight: 400;\n  font-size: 15px;\n}\n.jj_article .transition-1-1 {\n  display: block;\n  width: 100px;\n  height: 100px;\n  background: #444;\n  margin: 4em auto;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.jj_article .transition-1-1:hover {\n  width: 200px;\n  height: 200px;\n  background: #f00;\n  -webkit-transition: all 2s;\n  transition: all 2s;\n}\n", "", {"version":3,"sources":["/./src/TransformView.vue.style","/./src/TransformView.vue"],"names":[],"mappings":"AAEA;EACC,mBAAA;EACA,gBAAA;CCDA;ADGA;EACC,qBAAA;CCDD;ADGA;EACC,gBAAA;EACA,iBAAA;EACA,sBAAA;CCDD;ADEA;EACC,gBAAA;EACA,iBAAA;EACA,qBAAA;CCAD;ADCA;EACC,iBAAA;EACA,gBAAA;CCCD;ADCA;EACC,eAAA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,6BAAA;EAAA,qBAAA;CCCD;ADCC;EACC,aAAA;EACA,cAAA;EACA,iBAAA;EACA,2BAAA;EAAA,mBAAA;CCCF","file":"TransformView.vue","sourcesContent":["\n\n.jj_article\n\tpadding: 20px 15px\n\tfont-size: 15px\n\t\n\tsection\n\t\tmargin-bottom: 1.5em\n\n\th1\n\t\tfont-size: 17px\n\t\tfont-weight:400\n\t\tmargin-bottom: .75em\n\th2\n\t\tfont-size: 16px\n\t\tfont-weight:400\n\t\tmargin-bottom: .3em\n\th3\n\t\tfont-weight:400\n\t\tfont-size: 15px\n\n\t.transition-1-1\n\t\tdisplay: block\n\t\twidth: 100px\n\t\theight: 100px\n\t\tbackground: #444\n\t\tmargin: 4em auto\n\t\ttransition: all .5s\n\n\t\t&:hover\n\t\t\twidth: 200px\n\t\t\theight: 200px\n\t\t\tbackground: red\n\t\t\ttransition: all 2s\n\n",".jj_article {\n  padding: 20px 15px;\n  font-size: 15px;\n}\n.jj_article section {\n  margin-bottom: 1.5em;\n}\n.jj_article h1 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: 0.75em;\n}\n.jj_article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0.3em;\n}\n.jj_article h3 {\n  font-weight: 400;\n  font-size: 15px;\n}\n.jj_article .transition-1-1 {\n  display: block;\n  width: 100px;\n  height: 100px;\n  background: #444;\n  margin: 4em auto;\n  transition: all 0.5s;\n}\n.jj_article .transition-1-1:hover {\n  width: 200px;\n  height: 200px;\n  background: #f00;\n  transition: all 2s;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="page transform">
	// 		<div class="hd">
	// 			<h1 class="page_title">JJ 教室</h1>
	// 		</div>
	// 		<div class="bd">
	// 			<article class="jj_article">
	// 				<h1>CSS Transition Transform Animation</h1>
	// 				<section>
	// 					<h2 class="title">Transition</h2>
	// 					<section>
	// 					<h3>1.1 transition 介紹</h3>
	// 					<div class="transition-1-1"></div>
	// 					</section>
	// 				</section>
	// 			</article>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script>
	exports.default = {
		name: 'TransformView'
	};
	// </script>
	//
	// <style lang="stylus">
	//
	// .jj_article
	// 	padding: 20px 15px
	// 	font-size: 15px
	//
	// 	section
	// 		margin-bottom: 1.5em
	//
	// 	h1
	// 		font-size: 17px
	// 		font-weight:400
	// 		margin-bottom: .75em
	// 	h2
	// 		font-size: 16px
	// 		font-weight:400
	// 		margin-bottom: .3em
	// 	h3
	// 		font-weight:400
	// 		font-size: 15px
	//
	// 	.transition-1-1
	// 		display: block
	// 		width: 100px
	// 		height: 100px
	// 		background: #444
	// 		margin: 4em auto
	// 		transition: all .5s
	//
	// 		&:hover
	// 			width: 200px
	// 			height: 200px
	// 			background: red
	// 			transition: all 2s
	//
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"page transform\">\n\t\t<div class=\"hd\">\n\t\t\t<h1 class=\"page_title\">JJ 教室</h1>\n\t\t</div>\n\t\t<div class=\"bd\">\n\t\t\t<article class=\"jj_article\">\n\t\t\t\t<h1>CSS Transition Transform Animation</h1>\n\t\t\t\t<section>\n\t\t\t\t\t<h2 class=\"title\">Transition</h2>\n\t\t\t\t\t<section>\n\t\t\t\t\t<h3>1.1 transition 介紹</h3>\n\t\t\t\t\t<div class=\"transition-1-1\"></div>\n\t\t\t\t\t</section>\n\t\t\t\t</section>\n\t\t\t</article>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(19)
	__vue_script__ = __webpack_require__(21)
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jj/Desktop/vuejs/src/TransformTrainingView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-18765096&file=TransformTrainingView.vue!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TransformTrainingView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-18765096&file=TransformTrainingView.vue!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TransformTrainingView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".jj_article {\n  padding: 20px 15px;\n  font-size: 15px;\n}\n.jj_article section {\n  margin-bottom: 1.5em;\n}\n.jj_article h1 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: 0.75em;\n}\n.jj_article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0.3em;\n}\n.jj_article h3 {\n  font-weight: 400;\n  font-size: 15px;\n}\n.jj_article .transition-1-1 {\n  display: block;\n  width: 100px;\n  height: 100px;\n  background: #444;\n  margin: 4em auto;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.jj_article .transition-1-1:hover {\n  width: 200px;\n  height: 200px;\n  background: #f00;\n  -webkit-transition: all 2s;\n  transition: all 2s;\n}\n", "", {"version":3,"sources":["/./src/TransformTrainingView.vue.style","/./src/TransformTrainingView.vue"],"names":[],"mappings":"AAEA;EACC,mBAAA;EACA,gBAAA;CCDA;ADGA;EACC,qBAAA;CCDD;ADGA;EACC,gBAAA;EACA,iBAAA;EACA,sBAAA;CCDD;ADEA;EACC,gBAAA;EACA,iBAAA;EACA,qBAAA;CCAD;ADCA;EACC,iBAAA;EACA,gBAAA;CCCD;ADCA;EACC,eAAA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,6BAAA;EAAA,qBAAA;CCCD;ADCC;EACC,aAAA;EACA,cAAA;EACA,iBAAA;EACA,2BAAA;EAAA,mBAAA;CCCF","file":"TransformTrainingView.vue","sourcesContent":["\n\n.jj_article\n\tpadding: 20px 15px\n\tfont-size: 15px\n\t\n\tsection\n\t\tmargin-bottom: 1.5em\n\n\th1\n\t\tfont-size: 17px\n\t\tfont-weight:400\n\t\tmargin-bottom: .75em\n\th2\n\t\tfont-size: 16px\n\t\tfont-weight:400\n\t\tmargin-bottom: .3em\n\th3\n\t\tfont-weight:400\n\t\tfont-size: 15px\n\n\t.transition-1-1\n\t\tdisplay: block\n\t\twidth: 100px\n\t\theight: 100px\n\t\tbackground: #444\n\t\tmargin: 4em auto\n\t\ttransition: all .5s\n\n\t\t&:hover\n\t\t\twidth: 200px\n\t\t\theight: 200px\n\t\t\tbackground: red\n\t\t\ttransition: all 2s\n\n",".jj_article {\n  padding: 20px 15px;\n  font-size: 15px;\n}\n.jj_article section {\n  margin-bottom: 1.5em;\n}\n.jj_article h1 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: 0.75em;\n}\n.jj_article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0.3em;\n}\n.jj_article h3 {\n  font-weight: 400;\n  font-size: 15px;\n}\n.jj_article .transition-1-1 {\n  display: block;\n  width: 100px;\n  height: 100px;\n  background: #444;\n  margin: 4em auto;\n  transition: all 0.5s;\n}\n.jj_article .transition-1-1:hover {\n  width: 200px;\n  height: 200px;\n  background: #f00;\n  transition: all 2s;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="page article">
	// 		<div class="hd">
	// 			<h1 class="page_title">JJ 教室</h1>
	// 		</div>
	// 		<div class="bd">
	// 			<article class="jj_article">
	// 				<h1>CSS Transition Transform Animation</h1>
	// 				<section>
	// 					<h2 class="title">Transition</h2>
	// 					<section>
	// 					<h3>1.1 transition 介紹</h3>
	// 					<div class="transition-1-1"></div>
	// 					</section>
	// 				</section>
	// 			</article>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script>
	exports.default = {
		name: 'TransitionView'
	};
	// </script>
	//
	// <style lang="stylus">
	//
	// .jj_article
	// 	padding: 20px 15px
	// 	font-size: 15px
	//
	// 	section
	// 		margin-bottom: 1.5em
	//
	// 	h1
	// 		font-size: 17px
	// 		font-weight:400
	// 		margin-bottom: .75em
	// 	h2
	// 		font-size: 16px
	// 		font-weight:400
	// 		margin-bottom: .3em
	// 	h3
	// 		font-weight:400
	// 		font-size: 15px
	//
	// 	.transition-1-1
	// 		display: block
	// 		width: 100px
	// 		height: 100px
	// 		background: #444
	// 		margin: 4em auto
	// 		transition: all .5s
	//
	// 		&:hover
	// 			width: 200px
	// 			height: 200px
	// 			background: red
	// 			transition: all 2s
	//
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"page article\">\n\t\t<div class=\"hd\">\n\t\t\t<h1 class=\"page_title\">JJ 教室</h1>\n\t\t</div>\n\t\t<div class=\"bd\">\n\t\t\t<article class=\"jj_article\">\n\t\t\t\t<h1>CSS Transition Transform Animation</h1>\n\t\t\t\t<section>\n\t\t\t\t\t<h2 class=\"title\">Transition</h2>\n\t\t\t\t\t<section>\n\t\t\t\t\t<h3>1.1 transition 介紹</h3>\n\t\t\t\t\t<div class=\"transition-1-1\"></div>\n\t\t\t\t\t</section>\n\t\t\t\t</section>\n\t\t\t</article>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(24)
	__vue_script__ = __webpack_require__(26)
	__vue_template__ = __webpack_require__(27)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jj/Desktop/vuejs/src/AnimationView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0280c4b4&file=AnimationView.vue!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AnimationView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0280c4b4&file=AnimationView.vue!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AnimationView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".article {\n  padding: 20px 15px;\n  font-size: 15px;\n}\n.article section {\n  margin-bottom: 1.5em;\n}\n.article h1 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: 0.75em;\n}\n.article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0.3em;\n}\n.article h3 {\n  font-weight: 400;\n  font-size: 15px;\n}\n.article .transition-1-1 {\n  display: block;\n  width: 100px;\n  height: 100px;\n  background: #444;\n  margin: 4em auto;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.article .transition-1-1:hover {\n  width: 200px;\n  height: 200px;\n  background: #f00;\n  -webkit-transition: all 2s;\n  transition: all 2s;\n}\n", "", {"version":3,"sources":["/./src/AnimationView.vue.style","/./src/AnimationView.vue"],"names":[],"mappings":"AAEA;EACC,mBAAA;EACA,gBAAA;CCDA;ADGA;EACC,qBAAA;CCDD;ADGA;EACC,gBAAA;EACA,iBAAA;EACA,sBAAA;CCDD;ADEA;EACC,gBAAA;EACA,iBAAA;EACA,qBAAA;CCAD;ADCA;EACC,iBAAA;EACA,gBAAA;CCCD;ADCA;EACC,eAAA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,6BAAA;EAAA,qBAAA;CCCD;ADAC;EACC,aAAA;EACA,cAAA;EACA,iBAAA;EACA,2BAAA;EAAA,mBAAA;CCEF","file":"AnimationView.vue","sourcesContent":["\n\n.article\n\tpadding: 20px 15px\n\tfont-size: 15px\n\t\n\tsection\n\t\tmargin-bottom: 1.5em\n\n\th1\n\t\tfont-size: 17px\n\t\tfont-weight:400\n\t\tmargin-bottom: .75em\n\th2\n\t\tfont-size: 16px\n\t\tfont-weight:400\n\t\tmargin-bottom: .3em\n\th3\n\t\tfont-weight:400\n\t\tfont-size: 15px\n\n\t.transition-1-1\n\t\tdisplay: block\n\t\twidth: 100px\n\t\theight: 100px\n\t\tbackground: #444\n\t\tmargin: 4em auto\n\t\ttransition: all .5s\n\t\t&:hover\n\t\t\twidth: 200px\n\t\t\theight: 200px\n\t\t\tbackground: red\n\t\t\ttransition: all 2s\n\n",".article {\n  padding: 20px 15px;\n  font-size: 15px;\n}\n.article section {\n  margin-bottom: 1.5em;\n}\n.article h1 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: 0.75em;\n}\n.article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0.3em;\n}\n.article h3 {\n  font-weight: 400;\n  font-size: 15px;\n}\n.article .transition-1-1 {\n  display: block;\n  width: 100px;\n  height: 100px;\n  background: #444;\n  margin: 4em auto;\n  transition: all 0.5s;\n}\n.article .transition-1-1:hover {\n  width: 200px;\n  height: 200px;\n  background: #f00;\n  transition: all 2s;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="page article">
	// 		<div class="hd">
	// 			<h1 class="page_title">JJ 教室</h1>
	// 		</div>
	// 		<div class="bd">
	// 			<article class="article">
	// 				<h1>CSS Transition Transform Animation</h1>
	// 				<section>
	// 					<h2 class="title">Transition</h2>
	// 					<section>
	// 					<h3>1.1 transition 介紹</h3>
	// 					<div class="transition-1-1"></div>
	// 					</section>
	// 				</section>
	// 			</article>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script>
	exports.default = {
		name: 'TransitionView'
	};
	// </script>
	//
	// <style lang="stylus">
	//
	// .article
	// 	padding: 20px 15px
	// 	font-size: 15px
	//
	// 	section
	// 		margin-bottom: 1.5em
	//
	// 	h1
	// 		font-size: 17px
	// 		font-weight:400
	// 		margin-bottom: .75em
	// 	h2
	// 		font-size: 16px
	// 		font-weight:400
	// 		margin-bottom: .3em
	// 	h3
	// 		font-weight:400
	// 		font-size: 15px
	//
	// 	.transition-1-1
	// 		display: block
	// 		width: 100px
	// 		height: 100px
	// 		background: #444
	// 		margin: 4em auto
	// 		transition: all .5s
	// 		&:hover
	// 			width: 200px
	// 			height: 200px
	// 			background: red
	// 			transition: all 2s
	//
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"page article\">\n\t\t<div class=\"hd\">\n\t\t\t<h1 class=\"page_title\">JJ 教室</h1>\n\t\t</div>\n\t\t<div class=\"bd\">\n\t\t\t<article class=\"article\">\n\t\t\t\t<h1>CSS Transition Transform Animation</h1>\n\t\t\t\t<section>\n\t\t\t\t\t<h2 class=\"title\">Transition</h2>\n\t\t\t\t\t<section>\n\t\t\t\t\t<h3>1.1 transition 介紹</h3>\n\t\t\t\t\t<div class=\"transition-1-1\"></div>\n\t\t\t\t\t</section>\n\t\t\t\t</section>\n\t\t\t</article>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(29)
	__vue_script__ = __webpack_require__(31)
	__vue_template__ = __webpack_require__(32)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jj/Desktop/vuejs/src/AnimationTrainingView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1cefd0ae&file=AnimationTrainingView.vue!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AnimationTrainingView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1cefd0ae&file=AnimationTrainingView.vue!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AnimationTrainingView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".jj_article {\n  padding: 20px 15px;\n  font-size: 15px;\n}\n.jj_article section {\n  margin-bottom: 1.5em;\n}\n.jj_article h1 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: 0.75em;\n}\n.jj_article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0.3em;\n}\n.jj_article h3 {\n  font-weight: 400;\n  font-size: 15px;\n}\n.jj_article .transition-1-1 {\n  display: block;\n  width: 100px;\n  height: 100px;\n  background: #444;\n  margin: 4em auto;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.jj_article .transition-1-1:hover {\n  width: 200px;\n  height: 200px;\n  background: #f00;\n  -webkit-transition: all 2s;\n  transition: all 2s;\n}\n", "", {"version":3,"sources":["/./src/AnimationTrainingView.vue.style","/./src/AnimationTrainingView.vue"],"names":[],"mappings":"AAEA;EACC,mBAAA;EACA,gBAAA;CCDA;ADGA;EACC,qBAAA;CCDD;ADGA;EACC,gBAAA;EACA,iBAAA;EACA,sBAAA;CCDD;ADEA;EACC,gBAAA;EACA,iBAAA;EACA,qBAAA;CCAD;ADCA;EACC,iBAAA;EACA,gBAAA;CCCD;ADCA;EACC,eAAA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,6BAAA;EAAA,qBAAA;CCCD;ADCC;EACC,aAAA;EACA,cAAA;EACA,iBAAA;EACA,2BAAA;EAAA,mBAAA;CCCF","file":"AnimationTrainingView.vue","sourcesContent":["\n\n.jj_article\n\tpadding: 20px 15px\n\tfont-size: 15px\n\t\n\tsection\n\t\tmargin-bottom: 1.5em\n\n\th1\n\t\tfont-size: 17px\n\t\tfont-weight:400\n\t\tmargin-bottom: .75em\n\th2\n\t\tfont-size: 16px\n\t\tfont-weight:400\n\t\tmargin-bottom: .3em\n\th3\n\t\tfont-weight:400\n\t\tfont-size: 15px\n\n\t.transition-1-1\n\t\tdisplay: block\n\t\twidth: 100px\n\t\theight: 100px\n\t\tbackground: #444\n\t\tmargin: 4em auto\n\t\ttransition: all .5s\n\n\t\t&:hover\n\t\t\twidth: 200px\n\t\t\theight: 200px\n\t\t\tbackground: red\n\t\t\ttransition: all 2s\n\n",".jj_article {\n  padding: 20px 15px;\n  font-size: 15px;\n}\n.jj_article section {\n  margin-bottom: 1.5em;\n}\n.jj_article h1 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: 0.75em;\n}\n.jj_article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0.3em;\n}\n.jj_article h3 {\n  font-weight: 400;\n  font-size: 15px;\n}\n.jj_article .transition-1-1 {\n  display: block;\n  width: 100px;\n  height: 100px;\n  background: #444;\n  margin: 4em auto;\n  transition: all 0.5s;\n}\n.jj_article .transition-1-1:hover {\n  width: 200px;\n  height: 200px;\n  background: #f00;\n  transition: all 2s;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="page article">
	// 		<div class="hd">
	// 			<h1 class="page_title">JJ 教室</h1>
	// 		</div>
	// 		<div class="bd">
	// 			<article class="jj_article">
	// 				<h1>CSS Transition Transform Animation</h1>
	// 				<section>
	// 					<h2 class="title">Transition</h2>
	// 					<section>
	// 					<h3>1.1 transition 介紹</h3>
	// 					<div class="transition-1-1"></div>
	// 					</section>
	// 				</section>
	// 			</article>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script>
	exports.default = {
		name: 'AnimationTrainingView'
	};
	// </script>
	//
	// <style lang="stylus">
	//
	// .jj_article
	// 	padding: 20px 15px
	// 	font-size: 15px
	//
	// 	section
	// 		margin-bottom: 1.5em
	//
	// 	h1
	// 		font-size: 17px
	// 		font-weight:400
	// 		margin-bottom: .75em
	// 	h2
	// 		font-size: 16px
	// 		font-weight:400
	// 		margin-bottom: .3em
	// 	h3
	// 		font-weight:400
	// 		font-size: 15px
	//
	// 	.transition-1-1
	// 		display: block
	// 		width: 100px
	// 		height: 100px
	// 		background: #444
	// 		margin: 4em auto
	// 		transition: all .5s
	//
	// 		&:hover
	// 			width: 200px
	// 			height: 200px
	// 			background: red
	// 			transition: all 2s
	//
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"page article\">\n\t\t<div class=\"hd\">\n\t\t\t<h1 class=\"page_title\">JJ 教室</h1>\n\t\t</div>\n\t\t<div class=\"bd\">\n\t\t\t<article class=\"jj_article\">\n\t\t\t\t<h1>CSS Transition Transform Animation</h1>\n\t\t\t\t<section>\n\t\t\t\t\t<h2 class=\"title\">Transition</h2>\n\t\t\t\t\t<section>\n\t\t\t\t\t<h3>1.1 transition 介紹</h3>\n\t\t\t\t\t<div class=\"transition-1-1\"></div>\n\t\t\t\t\t</section>\n\t\t\t\t</section>\n\t\t\t</article>\n\t\t</div>\n\t</div>\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-jj.js.map