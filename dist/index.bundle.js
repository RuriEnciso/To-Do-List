/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --container-height: auto;\r\n  --contaier-width: 50vw;\r\n  --block-height: 3rem;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\nhtml {\r\n  font-size: 20px;\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #ccc;\r\n}\r\n\r\n.container {\r\n  background-color: rgb(185, 185, 185);\r\n  width: var(--contaier-width);\r\n  height: var(--container-height);\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: 10px 5px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.header {\r\n  width: 100%;\r\n  height: var(--block-height);\r\n  border-bottom: #000 solid 1px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  padding: 5px;\r\n}\r\n\r\n.new-todo {\r\n  width: 100%;\r\n  height: var(--block-height);\r\n  padding: 0.25rem 0;\r\n  border-bottom: #000 solid 1px;\r\n}\r\n\r\n.new-todo form {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.new-todo form input {\r\n  flex: 1;\r\n  height: 40px;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-right: 0;\r\n  outline: transparent;\r\n  padding-left: 0.5rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n.new-todo form button {\r\n  width: 60px;\r\n  height: 40px;\r\n  font-size: 1rem;\r\n  background-color: transparent;\r\n  color: #000;\r\n  border: none;\r\n  border-left: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.new-todo form button:hover {\r\n  color: #fff;\r\n}\r\n\r\n#todos-list {\r\n  height: auto;\r\n  background-color: #fff;\r\n  padding: 0.5rem;\r\n  border: 1px solid rgb(219, 219, 219);\r\n  overflow: scroll;\r\n  border-radius: 0 0 5px 5px;\r\n}\r\n\r\n#todos-list .todo {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.75rem 0.5rem;\r\n  border-radius: 5px;\r\n}\r\n\r\n#todos-list .todo:hover {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n#todos-list .todo * {\r\n  cursor: pointer;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n#todos-list .todo i {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n#todos-list .todo p {\r\n  flex: 1;\r\n  word-break: break-all;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n  color: grey;\r\n}\r\n\r\n#todos-list .todo .bi-pencil-square {\r\n  color: rgb(31, 177, 48);\r\n}\r\n\r\n#todos-list .todo .bi-trash {\r\n  color: rgb(236, 82, 82);\r\n  margin: 0;\r\n}\r\n\r\n.notification {\r\n  position: absolute;\r\n  width: calc(3 * var(--contaier-width) / 4);\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  opacity: 0.9;\r\n  border-radius: 8px;\r\n  background-color: rgb(233, 81, 81);\r\n  top: 10px;\r\n  right: calc(-3 * var(--contaier-width) / 4);\r\n  color: #fff;\r\n  transition: 300ms right ease-in-out;\r\n}\r\n\r\n.notif-enter {\r\n  right: 10px;\r\n}\r\n\r\n.clear-all-btn {\r\n  width: 100%;\r\n  color: #000;\r\n  height: var(--block-height);\r\n  border: none;\r\n  font-size: 1rem;\r\n  background-color: rgb(185, 185, 185);\r\n}\r\n\r\n.clear-all-btn:hover {\r\n  background-color: rgb(236, 82, 82);\r\n  cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_global_vars_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/global-vars.js */ \"./src/modules/global-vars.js\");\n/* harmony import */ var _modules_todos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todos.js */ \"./src/modules/todos.js\");\n\n\n\n\n//  fisrt render\n(0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();\n// FORM SUBMIT\n_modules_global_vars_js__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener('submit', (event) => {\n  event.preventDefault();\n  (0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_2__.saveTodo)();\n  (0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();\n  localStorage.setItem('tasks', JSON.stringify(_modules_todos_js__WEBPACK_IMPORTED_MODULE_2__.tasks));\n});\n\n// CLICK EVENT LISTENER FOR ALL TASKS\n_modules_global_vars_js__WEBPACK_IMPORTED_MODULE_1__.todosListEl.addEventListener('click', (event) => {\n  const { target } = event;\n  const parentElement = target.parentNode;\n\n  if (parentElement.className !== 'todo') return;\n\n  const todo = parentElement;\n  const todoId = Number(todo.id);\n\n  // TARGET ACTION\n  const { action } = target.dataset;\n  if (action === 'check') {\n    (0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_2__.checkTodo)(todoId);\n  }\n  if (action === 'edit') {\n    (0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_2__.editTodo)(todoId);\n  }\n  if (action === 'delete') {\n    (0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(todoId);\n  }\n});\n\n_modules_global_vars_js__WEBPACK_IMPORTED_MODULE_1__.clearAllCompleted.addEventListener('click', _modules_todos_js__WEBPACK_IMPORTED_MODULE_2__.clearCompletedTasks);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/global-vars.js":
/*!************************************!*\
  !*** ./src/modules/global-vars.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAllCompleted: () => (/* binding */ clearAllCompleted),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   notificationEl: () => (/* binding */ notificationEl),\n/* harmony export */   todoImput: () => (/* binding */ todoImput),\n/* harmony export */   todosListEl: () => (/* binding */ todosListEl)\n/* harmony export */ });\nconst form = document.getElementById('todoform');\nconst todoImput = document.getElementById('newtodo');\nconst todosListEl = document.getElementById('todos-list');\nconst notificationEl = document.querySelector('.notification');\nconst clearAllCompleted = document.querySelector('.clear-all-btn');\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/global-vars.js?");

/***/ }),

/***/ "./src/modules/show-notif.js":
/*!***********************************!*\
  !*** ./src/modules/show-notif.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _global_vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-vars.js */ \"./src/modules/global-vars.js\");\n\n// ALERT MESSAGE\nfunction showNotification(msg) {\n  // changing the msg in html\n  _global_vars_js__WEBPACK_IMPORTED_MODULE_0__.notificationEl.innerHTML = msg;\n  // showing notification\n  _global_vars_js__WEBPACK_IMPORTED_MODULE_0__.notificationEl.classList.add('notif-enter');\n  // time of notification\n  setTimeout(() => {\n    _global_vars_js__WEBPACK_IMPORTED_MODULE_0__.notificationEl.classList.remove('notif-enter');\n  }, 2500);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showNotification);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/show-notif.js?");

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkTodo: () => (/* binding */ checkTodo),\n/* harmony export */   clearCompletedTasks: () => (/* binding */ clearCompletedTasks),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   editTodo: () => (/* binding */ editTodo),\n/* harmony export */   editTodoId: () => (/* binding */ editTodoId),\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks),\n/* harmony export */   saveTodo: () => (/* binding */ saveTodo),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _show_notif_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-notif.js */ \"./src/modules/show-notif.js\");\n/* harmony import */ var _global_vars_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-vars.js */ \"./src/modules/global-vars.js\");\n/* eslint-disable */\r\n\r\n\r\n// import { tasks } from './todos.js';\r\n\r\n\r\nlet tasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\nlet editTodoId = -1;\r\n\r\nfunction saveTodo() {\r\n  const todoValue = _global_vars_js__WEBPACK_IMPORTED_MODULE_1__.todoImput.value;\r\n\r\n  // CHECK IF THE TODO IS EMPTY\r\n  const isEmpty = todoValue === '';\r\n  // CHECK FOR DUPLICATES TODOS\r\n  const isDuplicate = tasks.some((todo) => todo.description.toUpperCase() === todoValue.toUpperCase());\r\n  if (isEmpty) {\r\n    (0,_show_notif_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Task's imput is empty\");\r\n  } else if (isDuplicate) {\r\n    (0,_show_notif_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('This task already exists');\r\n  } else {\r\n    if (editTodoId >= 0) {\r\n      tasks = tasks.map((todo, index) => ({\r\n        index: index + 1,\r\n        description: index === editTodoId ? todoValue : todo.description,\r\n      }));\r\n      editTodoId = -1;\r\n    } else {\r\n      const todo = {\r\n        description: todoValue,\r\n        completed: false,\r\n        index: tasks.length + 1,\r\n      };\r\n      tasks.push(todo);\r\n    }\r\n\r\n    // CLEAN THE IMPUT SECTION\r\n    _global_vars_js__WEBPACK_IMPORTED_MODULE_1__.todoImput.value = '';\r\n  }\r\n}\r\n\r\nfunction renderTasks() {\r\n  // CLEAR ELEMENT BEFORE A RE RENDER\r\n  _global_vars_js__WEBPACK_IMPORTED_MODULE_1__.todosListEl.innerHTML = '';\r\n  // RENDER TODOS\r\n  tasks.forEach((todo, index) => {\r\n    _global_vars_js__WEBPACK_IMPORTED_MODULE_1__.todosListEl.innerHTML += `\r\n          <div class=\"todo\" id=\"${index}\">\r\n              <i \r\n                  class=\"bi ${todo.completed ? 'bi-check-circle-fill' : 'bi-circle'}\"\r\n                  data-action=\"check\"\r\n              ></i>\r\n              <p class=\"${todo.completed ? 'checked' : ''}\" data-action=\"check\">${todo.description}</p>\r\n              <i class=\"bi bi-pencil-square\" data-action=\"edit\"></i>\r\n              <i class=\"bi bi-trash\" data-action=\"delete\"></i>\r\n          </div>\r\n          `;\r\n  });\r\n}\r\n\r\n// CHECK A TODO\r\nfunction checkTodo(todoId) {\r\n  tasks = tasks.map((todo, index) => ({\r\n    description: todo.description,\r\n    index: index + 1,\r\n    completed: index === todoId ? !todo.completed : todo.completed,\r\n  }));\r\n  renderTasks();\r\n  localStorage.setItem('todos', JSON.stringify(tasks));\r\n}\r\n\r\n// EDIT A TODO\r\nfunction editTodo(todoId) {\r\n  _global_vars_js__WEBPACK_IMPORTED_MODULE_1__.todoImput.value = tasks[todoId].description;\r\n  editTodoId = todoId;\r\n}\r\n\r\n// DELETE TODO\r\nfunction deleteTodo(todoId) {\r\n  tasks = tasks.filter((todo, index) => index !== todoId);\r\n  tasks = tasks.map((todo, index) => ({\r\n    description: todo.description,\r\n    index: index + 1,\r\n    completed: tasks.completed === true ? !todo.completed : todo.completed,\r\n  }));\r\n  editTodoId = -1;\r\n  // Re render\r\n  renderTasks();\r\n  localStorage.setItem('tasks', JSON.stringify(tasks));\r\n}\r\n\r\n// CLEAR ALL\r\nfunction clearCompletedTasks() {\r\n    tasks = tasks.filter((task) => !task.completed);\r\n    renderTasks(); \r\n    localStorage.setItem('tasks', JSON.stringify(tasks));\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/todos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;