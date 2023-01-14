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

/***/ "./modules/addParagraph.js":
/*!*********************************!*\
  !*** ./modules/addParagraph.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addParagraph\": () => (/* binding */ addParagraph)\n/* harmony export */ });\nfunction addParagraph(text, questionPosition) {\n  var paragraph = document.createElement('p');\n  paragraph.innerText = text;\n  paragraph.id = \"paragraph-\" + questionPosition;\n  paragraph.classList = \"paragraph\";\n  return paragraph;\n}\n\n//# sourceURL=webpack://projeto-master/./modules/addParagraph.js?");

/***/ }),

/***/ "./modules/enableOrDisableButton.js":
/*!******************************************!*\
  !*** ./modules/enableOrDisableButton.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrowBtnArray\": () => (/* binding */ arrowBtnArray),\n/* harmony export */   \"enableOrDisableButton\": () => (/* binding */ enableOrDisableButton)\n/* harmony export */ });\n/* harmony import */ var _addParagraph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addParagraph.js */ \"./modules/addParagraph.js\");\n\nvar firstArrowAndBtnActivated = 0;\nvar secondArrowAndBtnActivated = 0;\nvar thirdArrowAndBtnActivated = 0;\nvar fourthArrowAndBtnActivated = 0;\nvar arrowBtnArray = [firstArrowAndBtnActivated, secondArrowAndBtnActivated, thirdArrowAndBtnActivated, fourthArrowAndBtnActivated];\nfunction enableOrDisableButton(position, namePosition, text) {\n  var arrowBtn = arrowBtnArray[position - 1];\n  if (arrowBtn == 0) {\n    document.getElementById(namePosition + 'Question').appendChild((0,_addParagraph_js__WEBPACK_IMPORTED_MODULE_0__.addParagraph)(text, namePosition));\n    arrowBtnArray[position - 1] = 1;\n    document.getElementById(namePosition + \"ArrowRigth\").style.opacity = \"1\";\n    document.getElementById(namePosition + \"ArrowLeft\").style.opacity = \"0\";\n  } else {\n    document.querySelector(\"#paragraph-\" + namePosition).remove();\n    document.getElementById(namePosition + \"ArrowRigth\").style.opacity = \"0\";\n    document.getElementById(namePosition + \"ArrowLeft\").style.opacity = \"1\";\n    arrowBtnArray[position - 1] = 0;\n  }\n}\n\n//# sourceURL=webpack://projeto-master/./modules/enableOrDisableButton.js?");

/***/ }),

/***/ "./modules/handlingTextButtons.js":
/*!****************************************!*\
  !*** ./modules/handlingTextButtons.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OpenButtonHamburguer\": () => (/* binding */ OpenButtonHamburguer),\n/* harmony export */   \"closeButton\": () => (/* binding */ closeButton)\n/* harmony export */ });\nvar hamburguerActivated = document.getElementById('hamburguerActivated');\nvar headerHamburguer = document.getElementById('headerHamburguerId');\nfunction closeButton() {\n  headerHamburguer.style.right = '0';\n  hamburguerActivated.style.right = '3000px';\n  document.documentElement.style.overflow = 'visible';\n}\nfunction OpenButtonHamburguer() {\n  hamburguerActivated.style.right = '0';\n  headerHamburguer.style.right = '510px';\n  document.documentElement.style.overflow = 'hidden';\n  window.scrollTo(0, 0);\n}\n\n//# sourceURL=webpack://projeto-master/./modules/handlingTextButtons.js?");

/***/ }),

/***/ "./modules/removeClass.js":
/*!********************************!*\
  !*** ./modules/removeClass.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeClassActivated\": () => (/* binding */ removeClassActivated)\n/* harmony export */ });\nfunction removeClassActivated(firstLine, btnLinha1, btnFt1, secondLine, btnLinha2, btnFt2) {\n  if (firstLine == true) {\n    btnLinha1.classList.remove('activated');\n    btnLinha1.classList.add('btnLinha');\n    btnFt1.style.color = 'hsl(229deg, 8%, 60%)';\n    firstLine = false;\n  }\n  if (secondLine == true) {\n    btnLinha2.classList.remove('activated');\n    btnLinha2.classList.add('btnLinha');\n    btnFt2.style.color = 'hsl(229deg, 8%, 60%)';\n    secondLine = false;\n  }\n}\n\n//# sourceURL=webpack://projeto-master/./modules/removeClass.js?");

/***/ }),

/***/ "./modules/stringEvent.js":
/*!********************************!*\
  !*** ./modules/stringEvent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stringEvent\": () => (/* binding */ stringEvent)\n/* harmony export */ });\nfunction stringEvent(btnLinha, title, text) {\n  document.getElementById('imgLeftEvent').src = \"./images/illustration-features-tab-\" + btnLinha.dataset.value + \".svg\";\n  document.getElementById('titleEvent').innerText = title;\n  document.getElementById('textEvent').innerText = text;\n  btnLinha.classList.remove('btnLinha');\n  btnLinha.classList.add('activated');\n}\n\n//# sourceURL=webpack://projeto-master/./modules/stringEvent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_removeClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/removeClass.js */ \"./modules/removeClass.js\");\n/* harmony import */ var _modules_stringEvent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/stringEvent.js */ \"./modules/stringEvent.js\");\n/* harmony import */ var _modules_enableOrDisableButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/enableOrDisableButton.js */ \"./modules/enableOrDisableButton.js\");\n/* harmony import */ var _modules_handlingTextButtons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/handlingTextButtons.js */ \"./modules/handlingTextButtons.js\");\nvar btnFt1 = document.getElementById('btn-ft-1');\nvar btnFt2 = document.getElementById('btn-ft-2');\nvar btnFt3 = document.getElementById('btn-ft-3');\nvar btnLinha1 = document.getElementById('btnLinha1');\nvar btnLinha2 = document.getElementById('btnLinha2');\nvar btnLinha3 = document.getElementById('btnLinha3');\n//firstLineActivated ja vai inicar activated\nvar firstLineActivated = true;\nvar secondLineActivated = false;\nvar thirdLineActivated = false;\n\n\nbtnFt1.addEventListener('click', function (ev) {\n  //como btnFt termina com 1, \n  //eu faco a sequencia de botoes\n  //na funcao terminando com 2 e depois com 3.\n  (0,_modules_stringEvent_js__WEBPACK_IMPORTED_MODULE_1__.stringEvent)(btnLinha1, 'Bookmark in one click', 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.');\n  (0,_modules_removeClass_js__WEBPACK_IMPORTED_MODULE_0__.removeClassActivated)(secondLineActivated, btnLinha2, btnFt2, thirdLineActivated, btnLinha3, btnFt3);\n  ev.currentTarget.style.color = \"black\";\n  firstLineActivated = 1;\n});\nbtnFt2.addEventListener('click', function (ev) {\n  (0,_modules_stringEvent_js__WEBPACK_IMPORTED_MODULE_1__.stringEvent)(btnLinha2, 'Intelligent search', 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.');\n  (0,_modules_removeClass_js__WEBPACK_IMPORTED_MODULE_0__.removeClassActivated)(firstLineActivated, btnLinha1, btnFt1, thirdLineActivated, btnLinha3, btnFt3);\n  ev.currentTarget.style.color = \"black\";\n  secondLineActivated = 1;\n});\nbtnFt3.addEventListener('click', function (ev) {\n  (0,_modules_stringEvent_js__WEBPACK_IMPORTED_MODULE_1__.stringEvent)(btnLinha3, 'Share your bookmarks', 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.');\n  (0,_modules_removeClass_js__WEBPACK_IMPORTED_MODULE_0__.removeClassActivated)(firstLineActivated, btnLinha1, btnFt1, secondLineActivated, btnLinha2, btnFt2);\n  ev.currentTarget.style.color = \"black\";\n  thirdLineActivated = 1;\n});\n\ndocument.getElementById('firstBtnQuestion').addEventListener('click', function () {\n  (0,_modules_enableOrDisableButton_js__WEBPACK_IMPORTED_MODULE_2__.enableOrDisableButton)(1, 'first', \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.\");\n});\ndocument.getElementById('secondBtnQuestion').addEventListener('click', function () {\n  (0,_modules_enableOrDisableButton_js__WEBPACK_IMPORTED_MODULE_2__.enableOrDisableButton)(2, \"second\", \"Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.\");\n});\ndocument.getElementById('thirdBtnQuestion').addEventListener('click', function () {\n  (0,_modules_enableOrDisableButton_js__WEBPACK_IMPORTED_MODULE_2__.enableOrDisableButton)(3, \"third\", \"Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.\");\n});\ndocument.getElementById('fourthBtnQuestion').addEventListener('click', function () {\n  (0,_modules_enableOrDisableButton_js__WEBPACK_IMPORTED_MODULE_2__.enableOrDisableButton)(4, \"fourth\", \"Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.\");\n});\n\ndocument.getElementById('hamburguerId').addEventListener('click', _modules_handlingTextButtons_js__WEBPACK_IMPORTED_MODULE_3__.OpenButtonHamburguer);\ndocument.getElementById('closeButton').addEventListener('click', _modules_handlingTextButtons_js__WEBPACK_IMPORTED_MODULE_3__.closeButton);\n\n//# sourceURL=webpack://projeto-master/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;