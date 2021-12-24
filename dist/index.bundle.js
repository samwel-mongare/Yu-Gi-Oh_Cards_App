/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/popup.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/popup.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/commentBg.jpg */ "./src/images/commentBg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popup {\n  display: none;\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.popup h2 {\n  width: auto;\n  background-color: #d3d3d375;\n  border: 15px solid #fafad2a8;\n  padding: 5px;\n  border-radius: 21px;\n}\n\n.highlight {\n  background-color: #d3d3d375;\n  border: 15px solid #fafad2a8;\n  padding: 5px;\n  border-radius: 21px;\n}\n\n.popup-content {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  overflow: auto;\n  margin: 5% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  border-radius: 10px;\n  width: 700px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#popup-body {\n  width: 421px;\n  padding-top: 10px;\n  display: grid;\n  justify-items: center;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr auto auto auto auto auto;\n}\n\n#cardComments {\n  width: 100%;\n  text-align: center;\n}\n\n#addComment {\n  width: 100%;\n}\n\n#commentForm {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n#inputComment {\n  padding-top: 0;\n  height: 100px;\n}\n\n.desc > * {\n  padding-bottom: 10px;\n  flex: 50%;\n  align-self: center;\n}\n\n#commentForm > * {\n  padding-bottom: 10px;\n}\n\n#commentsDisplay {\n  width: 100%;\n  text-align: left;\n}\n\n#commentsDisplay > * {\n  padding-bottom: 3px;\n  padding-top: 3px;\n  border-bottom: 1px solid lightgray;\n}\n\n#close {\n  color: black;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n#close:hover,\n#close:focus {\n  color: red;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.desc {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 5px;\n  background-color: #d3d3d375;\n  border: 15px solid #fafad2a8;\n  padding: 5px;\n  border-radius: 21px;\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n#ring {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 150px;\n  height: 150px;\n  background: transparent;\n  border: 3px solid #3c3c3c;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 150px;\n  font-family: sans-serif;\n  font-size: 20px;\n  color: #fff000;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  text-shadow: 0 0 10px #fff000;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n}\n\n#ring::before {\n  content: \"\";\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top: 3px solid #fff000;\n  border-right: 3px solid #fff000;\n  border-radius: 50%;\n  animation: animateC 2s linear infinite;\n}\n\n#ring span {\n  display: block;\n  position: absolute;\n  top: calc(50% - 2px);\n  left: 50%;\n  width: 50%;\n  height: 4px;\n  background: transparent;\n  transform-origin: left;\n  animation: animate 2s linear infinite;\n}\n\n#ring span::before {\n  content: \"\";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff000;\n  top: -6px;\n  right: -8px;\n  box-shadow: 0 0 20px #fff000;\n}\n\n@keyframes animateC {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes animate {\n  0% {\n    transform: rotate(45deg);\n  }\n  100% {\n    transform: rotate(405deg);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/popup.css"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,eAAA;EACA,aAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,uBAAA;EACA,oCAAA;AACF;;AAEA;EACE,WAAA;EACA,2BAAA;EACA,4BAAA;EACA,YAAA;EACA,mBAAA;AACF;;AAEA;EACE,2BAAA;EACA,4BAAA;EACA,YAAA;EACA,mBAAA;AACF;;AAEA;EACE,yDAAA;EACA,2BAAA;EACA,sBAAA;EACA,4BAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,4EAAA;EACA,0BAAA;EACA,wBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACF;;AAEA;EACE,YAAA;EACA,iBAAA;EACA,aAAA;EACA,qBAAA;EACA,0BAAA;EACA,gDAAA;AACF;;AAEA;EACE,WAAA;EACA,kBAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;AACF;;AAEA;EACE,cAAA;EACA,aAAA;AACF;;AAEA;EACE,oBAAA;EACA,SAAA;EACA,kBAAA;AACF;;AAEA;EACE,oBAAA;AACF;;AAEA;EACE,WAAA;EACA,gBAAA;AACF;;AAEA;EACE,mBAAA;EACA,gBAAA;EACA,kCAAA;AACF;;AAEA;EACE,YAAA;EACA,eAAA;EACA,iBAAA;AACF;;AAEA;;EAEE,UAAA;EACA,qBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,kBAAA;EACA,2BAAA;EACA,4BAAA;EACA,YAAA;EACA,mBAAA;AACF;;AAEA;EACE;IACE,WAAA;IACA,UAAA;EACF;EAEA;IACE,MAAA;IACA,UAAA;EAAF;AACF;AAGA;EACE,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,yBAAA;EACA,6BAAA;EACA,uCAAA;AADF;;AAIA;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,6BAAA;EACA,6BAAA;EACA,+BAAA;EACA,kBAAA;EACA,sCAAA;AADF;;AAIA;EACE,cAAA;EACA,kBAAA;EACA,oBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,uBAAA;EACA,sBAAA;EACA,qCAAA;AADF;;AAIA;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,SAAA;EACA,WAAA;EACA,4BAAA;AADF;;AAIA;EACE;IACE,uBAAA;EADF;EAIA;IACE,yBAAA;EAFF;AACF;AAKA;EACE;IACE,wBAAA;EAHF;EAMA;IACE,yBAAA;EAJF;AACF","sourcesContent":[".popup {\n  display: none;\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.popup h2 {\n  width: auto;\n  background-color: #d3d3d375;\n  border: 15px solid #fafad2a8;\n  padding: 5px;\n  border-radius: 21px;\n}\n\n.highlight {\n  background-color: #d3d3d375;\n  border: 15px solid #fafad2a8;\n  padding: 5px;\n  border-radius: 21px;\n}\n\n.popup-content {\n  background-image: url(../images/commentBg.jpg);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  overflow: auto;\n  margin: 5% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  border-radius: 10px;\n  width: 700px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#popup-body {\n  width: 421px;\n  padding-top: 10px;\n  display: grid;\n  justify-items: center;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr auto auto auto auto auto;\n}\n\n#cardComments {\n  width: 100%;\n  text-align: center;\n}\n\n#addComment {\n  width: 100%;\n}\n\n#commentForm {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n#inputComment {\n  padding-top: 0;\n  height: 100px;\n}\n\n.desc > * {\n  padding-bottom: 10px;\n  flex: 50%;\n  align-self: center;\n}\n\n#commentForm > * {\n  padding-bottom: 10px;\n}\n\n#commentsDisplay {\n  width: 100%;\n  text-align: left;\n}\n\n#commentsDisplay > * {\n  padding-bottom: 3px;\n  padding-top: 3px;\n  border-bottom: 1px solid lightgray;\n}\n\n#close {\n  color: black;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n#close:hover,\n#close:focus {\n  color: red;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.desc {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 5px;\n  background-color: #d3d3d375;\n  border: 15px solid #fafad2a8;\n  padding: 5px;\n  border-radius: 21px;\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n#ring {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 150px;\n  height: 150px;\n  background: transparent;\n  border: 3px solid #3c3c3c;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 150px;\n  font-family: sans-serif;\n  font-size: 20px;\n  color: #fff000;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  text-shadow: 0 0 10px #fff000;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n}\n\n#ring::before {\n  content: '';\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top: 3px solid #fff000;\n  border-right: 3px solid #fff000;\n  border-radius: 50%;\n  animation: animateC 2s linear infinite;\n}\n\n#ring span {\n  display: block;\n  position: absolute;\n  top: calc(50% - 2px);\n  left: 50%;\n  width: 50%;\n  height: 4px;\n  background: transparent;\n  transform-origin: left;\n  animation: animate 2s linear infinite;\n}\n\n#ring span::before {\n  content: '';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff000;\n  top: -6px;\n  right: -8px;\n  box-shadow: 0 0 20px #fff000;\n}\n\n@keyframes animateC {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes animate {\n  0% {\n    transform: rotate(45deg);\n  }\n\n  100% {\n    transform: rotate(405deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/backy.jpg */ "./src/images/backy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/backy2.jpg */ "./src/images/backy2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody,\nheader,\nfooter {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\nul {\n  list-style-type: none;\n  display: flex;\n}\n\nnav {\n  margin-right: 5%;\n}\n\n.links {\n  margin: 0.5rem;\n  white-space: nowrap;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 20;\n  background-color: whitesmoke;\n  width: 100vw;\n  top: -2px;\n  padding-left: 2%;\n}\n\nfooter {\n  position: fixed;\n  z-index: 20;\n  background-color: whitesmoke;\n  width: 100vw;\n  top: 92vh;\n  height: 8vh;\n  text-align: center;\n  padding-top: 1.5rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: red;\n}\n\nmain {\n  position: relative;\n  top: 95px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 6rem;\n}\n\nmain ul {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  font-size: 0.5rem;\n  gap: 1.5rem;\n  margin-left: 10%;\n}\n\nh2 {\n  margin-left: 3%;\n  font-weight: 700;\n}\n\nmain li {\n  display: flex;\n  flex-direction: column;\n  width: 12rem;\n  height: 20rem;\n  background-image: url(\"https://vignette.wikia.nocookie.net/yugioh/images/9/95/SlifertheSkyDragon-GBI-AE-Back.png/revision/latest/scale-to-width-down/328?cb=2010072608370\");\n  border-radius: 0% 0% 0% 0%/0% 0% 0% 0%;\n  color: white;\n  box-shadow: 20px 20px rgba(0, 0, 0, 0.15);\n  transition: all 0.4s ease;\n  align-content: center;\n  margin-bottom: 3rem;\n}\n\nmain li:hover {\n  border-radius: 0% 0% 50% 50%/0% 0% 5% 5%;\n  box-shadow: 10px 10px rgba(0, 0, 0, 0.25);\n}\n\n.image_holder {\n  align-self: center;\n  width: 100%;\n  height: 80%;\n}\n\n.card_image {\n  width: 100%;\n  height: 100%;\n}\n\n.card_details {\n  display: flex;\n  justify-content: space-between;\n}\n\n.likes-section {\n  width: 3rem;\n  font-size: 0.8rem;\n  margin: 0.5rem;\n}\n\n.fa-heart {\n  padding-left: 0.5rem;\n  cursor: pointer;\n}\n\n.open {\n  animation: popup 0.6s linear;\n  color: red;\n  transform: scale(1.5);\n}\n\n.card_comments {\n  text-decoration: none;\n  border: 3px solid yellow;\n  color: transparent;\n  padding: 0.5rem 0.8rem;\n  font-size: 0.8rem;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 0.5s;\n  position: relative;\n  cursor: pointer;\n}\n\n.card_comments::before {\n  content: \"Comments\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: yellow;\n  background: #222222;\n  font-size: 28px;\n  top: 0;\n  left: 100%;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 1s;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform: scale(0) rotateY(0);\n  opacity: 0;\n}\n\n.card_comments:hover::before {\n  transform: scale(1) rotateY(360deg);\n  left: 0;\n  opacity: 1;\n}\n\n.card_comments::after {\n  content: \"Comments\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: yellow;\n  background: #222222;\n  font-size: 28px;\n  top: 0;\n  left: 0;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 1s;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform: scale(1) rotateY(0);\n  opacity: 1;\n}\n\n.card_comments:hover::after {\n  transform: scale(0) rotateY(360deg);\n  left: -100%;\n  opacity: 0;\n}\n\nheader,\nfooter {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  left: -2px;\n  color: white;\n}\n\n.counter {\n  font-size: 0.8rem;\n  color: yellow;\n  font-weight: 1000;\n  margin-left: 0.2rem;\n}\n\n@keyframes popup {\n  100% {\n    transform: scale(1.5);\n    opacity: 0;\n  }\n}\n.double_tap {\n  position: fixed;\n  top: 92vh;\n  width: 100vw;\n  height: 2vh;\n  background-color: black;\n  color: white;\n  z-index: 1000;\n}\n\n.marquee {\n  margin: 0 auto;\n  white-space: nowrap;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.marquee span {\n  display: inline-block;\n  padding-left: 100%;\n  text-indent: 0;\n  animation: marquee 15s linear infinite;\n}\n\n.marquee span:hover {\n  animation-play-state: paused;\n}\n\n@keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n@media only screen and (max-width: 1200px) {\n  main ul {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n@media only screen and (max-width: 800px) {\n  main ul {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media only screen and (max-width: 600px) {\n  main ul {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,yDAAA;AACF;;AAEA;;;EAGE,4BAAA;EACA,sBAAA;EACA,4BAAA;AACF;;AAEA;EACE,qBAAA;EACA,aAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,cAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,WAAA;EACA,4BAAA;EACA,YAAA;EACA,SAAA;EACA,gBAAA;AACF;;AAEA;EACE,eAAA;EACA,WAAA;EACA,4BAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AACF;;AAEA;EACE,qBAAA;EACA,YAAA;AACF;;AAEA;EACE,UAAA;AACF;;AAEA;EACE,kBAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;AACF;;AAEA;EACE,aAAA;EACA,sCAAA;EACA,iBAAA;EACA,WAAA;EACA,gBAAA;AACF;;AAEA;EACE,eAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,2KAAA;EACA,sCAAA;EACA,YAAA;EACA,yCAAA;EACA,yBAAA;EACA,qBAAA;EACA,mBAAA;AACF;;AAEA;EACE,wCAAA;EACA,yCAAA;AACF;;AAEA;EACE,kBAAA;EACA,WAAA;EACA,WAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;AACF;;AAEA;EACE,WAAA;EACA,iBAAA;EACA,cAAA;AACF;;AAEA;EACE,oBAAA;EACA,eAAA;AACF;;AAEA;EACE,4BAAA;EACA,UAAA;EACA,qBAAA;AACF;;AAEA;EACE,qBAAA;EACA,wBAAA;EACA,kBAAA;EACA,sBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,eAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,MAAA;EACA,UAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,8BAAA;EACA,UAAA;AACF;;AAEA;EACE,mCAAA;EACA,OAAA;EACA,UAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,8BAAA;EACA,UAAA;AACF;;AAEA;EACE,mCAAA;EACA,WAAA;EACA,UAAA;AACF;;AAEA;;EAEE,yDAAA;EACA,UAAA;EACA,YAAA;AACF;;AAEA;EACE,iBAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE;IACE,qBAAA;IACA,UAAA;EACF;AACF;AAEA;EACE,eAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;AAAF;;AAGA;EACE,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,sBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,kBAAA;EACA,cAAA;EACA,sCAAA;AAAF;;AAGA;EACE,4BAAA;AAAF;;AAGA;EACE;IAAK,0BAAA;EACL;EAAA;IAAO,8BAAA;EAGP;AACF;AADA;EACE;IACE,aAAA;IACA,kCAAA;EAGF;AACF;AAAA;EACE;IACE,aAAA;IACA,8BAAA;EAEF;AACF;AACA;EACE;IACE,aAAA;IACA,0BAAA;EACF;AACF","sourcesContent":["body {\n  background-image: url(../images/backy.jpg);\n}\n\nbody,\nheader,\nfooter {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\nul {\n  list-style-type: none;\n  display: flex;\n}\n\nnav {\n  margin-right: 5%;\n}\n\n.links {\n  margin: 0.5rem;\n  white-space: nowrap;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 20;\n  background-color: whitesmoke;\n  width: 100vw;\n  top: -2px;\n  padding-left: 2%;\n}\n\nfooter {\n  position: fixed;\n  z-index: 20;\n  background-color: whitesmoke;\n  width: 100vw;\n  top: 92vh;\n  height: 8vh;\n  text-align: center;\n  padding-top: 1.5rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: red;\n}\n\nmain {\n  position: relative;\n  top: 95px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 6rem;\n}\n\nmain ul {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  font-size: 0.5rem;\n  gap: 1.5rem;\n  margin-left: 10%;\n}\n\nh2 {\n  margin-left: 3%;\n  font-weight: 700;\n}\n\nmain li {\n  display: flex;\n  flex-direction: column;\n  width: 12rem;\n  height: 20rem;\n  background-image: url('https://vignette.wikia.nocookie.net/yugioh/images/9/95/SlifertheSkyDragon-GBI-AE-Back.png/revision/latest/scale-to-width-down/328?cb=2010072608370');\n  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;\n  color: white;\n  box-shadow: 20px 20px rgba(0, 0, 0, 0.15);\n  transition: all 0.4s ease;\n  align-content: center;\n  margin-bottom: 3rem;\n}\n\nmain li:hover {\n  border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;\n  box-shadow: 10px 10px rgba(0, 0, 0, 0.25);\n}\n\n.image_holder {\n  align-self: center;\n  width: 100%;\n  height: 80%;\n}\n\n.card_image {\n  width: 100%;\n  height: 100%;\n}\n\n.card_details {\n  display: flex;\n  justify-content: space-between;\n}\n\n.likes-section {\n  width: 3rem;\n  font-size: 0.8rem;\n  margin: 0.5rem;\n}\n\n.fa-heart {\n  padding-left: 0.5rem;\n  cursor: pointer;\n}\n\n.open {\n  animation: popup 0.6s linear;\n  color: red;\n  transform: scale(1.5);\n}\n\n.card_comments {\n  text-decoration: none;\n  border: 3px solid yellow;\n  color: transparent;\n  padding: 0.5rem 0.8rem;\n  font-size: 0.8rem;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 0.5s;\n  position: relative;\n  cursor: pointer;\n}\n\n.card_comments::before {\n  content: \"Comments\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: yellow;\n  background: rgb(34, 34, 34);\n  font-size: 28px;\n  top: 0;\n  left: 100%;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 1s;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform: scale(0) rotateY(0);\n  opacity: 0;\n}\n\n.card_comments:hover::before {\n  transform: scale(1) rotateY(360deg);\n  left: 0;\n  opacity: 1;\n}\n\n.card_comments::after {\n  content: \"Comments\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: yellow;\n  background: rgb(34, 34, 34);\n  font-size: 28px;\n  top: 0;\n  left: 0;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 1s;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform: scale(1) rotateY(0);\n  opacity: 1;\n}\n\n.card_comments:hover::after {\n  transform: scale(0) rotateY(360deg);\n  left: -100%;\n  opacity: 0;\n}\n\nheader,\nfooter {\n  background-image: url(../images/backy2.jpg);\n  left: -2px;\n  color: white;\n}\n\n.counter {\n  font-size: 0.8rem;\n  color: yellow;\n  font-weight: 1000;\n  margin-left: 0.2rem;\n}\n\n@keyframes popup {\n  100% {\n    transform: scale(1.5);\n    opacity: 0;\n  }\n}\n\n.double_tap {\n  position: fixed;\n  top: 92vh;\n  width: 100vw;\n  height: 2vh;\n  background-color: black;\n  color: white;\n  z-index: 1000;\n}\n\n.marquee {\n  margin: 0 auto;\n  white-space: nowrap;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.marquee span {\n  display: inline-block;\n  padding-left: 100%;\n  text-indent: 0;\n  animation: marquee 15s linear infinite;\n}\n\n.marquee span:hover {\n  animation-play-state: paused;\n}\n\n@keyframes marquee {\n  0% { transform: translate(0, 0); }\n  100% { transform: translate(-100%, 0); }\n}\n\n@media only screen and (max-width: 1200px) {\n  main ul {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  main ul {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  main ul {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/popup.css":
/*!******************************!*\
  !*** ./src/styles/popup.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ commentsCounter)
/* harmony export */ });
function plusPlus(counter) {
  counter += 1;
  return counter;
}

function commentsCounter(comments) {
  let counter = 0;
  if (comments.length === undefined) return undefined;
  comments.forEach(() => {
    counter = plusPlus(counter);
    return counter;
  });

  if (counter === 0) return undefined;
  return counter;
}


/***/ }),

/***/ "./src/modules/counting.js":
/*!*********************************!*\
  !*** ./src/modules/counting.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1.js */ "./src/modules/module1.js");
/* eslint-disable no-plusplus */



const counting = document.getElementById('supy');

function arrayLength(a) {
  let length = 0;
  while (a[length] !== undefined) {
    length++;
  }
  counting.innerHTML = `(${length})`;
}

window.addEventListener('load', () => {
  arrayLength(_module1_js__WEBPACK_IMPORTED_MODULE_0__.cards);
});

/***/ }),

/***/ "./src/modules/interactionServer.js":
/*!******************************************!*\
  !*** ./src/modules/interactionServer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCommentsOf": () => (/* binding */ getCommentsOf),
/* harmony export */   "postCommentWith": () => (/* binding */ postCommentWith),
/* harmony export */   "postLikesWith": () => (/* binding */ postLikesWith)
/* harmony export */ });
const API_URI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = 'eVhYJo21vVPIv4GTCmdX';

function getCommentsOptions() {
  return {
    method: 'GET',
  };
}

function postCommentsOptions(cardID, username, comment) {
  return {
    method: 'POST',
    body: JSON.stringify({
      item_id: cardID,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };
}

function postLikes(cardID) {
  return {
    method: 'POST',
    body: JSON.stringify({
      item_id: cardID,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };
}

async function getCommentsOf(cardID) {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/comments?item_id=${cardID}`, getCommentsOptions());
  return response.json();
}

async function postCommentWith(cardID, username, comment) {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/comments`, postCommentsOptions(cardID, username, comment));
  return response.json();
}

async function postLikesWith(cardID) {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/likes`, postLikes(cardID));
  return response.json();
}


/***/ }),

/***/ "./src/modules/likers.js":
/*!*******************************!*\
  !*** ./src/modules/likers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1.js */ "./src/modules/module1.js");
/* harmony import */ var _interactionServer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactionServer.js */ "./src/modules/interactionServer.js");



const likey = document.getElementById('card_list');

const API_URI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = 'eVhYJo21vVPIv4GTCmdX';

async function thisIsIt() {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/likes?item_id=${_module1_js__WEBPACK_IMPORTED_MODULE_0__.cards.id}`);
  const scoreLine = await response.json();

  const likeNo = document.querySelectorAll('.likes');

  likeNo.forEach((item) => {
    (0,_module1_js__WEBPACK_IMPORTED_MODULE_0__.clearElement)(likeNo);
    scoreLine.forEach((likeObj) => {
      if (likeObj.item_id === Number(item.id)) {
        item.innerHTML = `${likeObj.likes}`;
      }
    });
  });
}
thisIsIt();
let clicked = false;
likey.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'i') {
    const dataId = Number(e.target.getAttribute('data-id'));
    thisIsIt();
    e.target.classList.add('open');

    if (!clicked) {
      clicked = true;
      (0,_interactionServer_js__WEBPACK_IMPORTED_MODULE_1__.postLikesWith)(dataId);
      thisIsIt();
    } else {
      clicked = false;
      thisIsIt();
    }
  }
});


/***/ }),

/***/ "./src/modules/module1.js":
/*!********************************!*\
  !*** ./src/modules/module1.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cards": () => (/* binding */ cards),
/* harmony export */   "clearElement": () => (/* binding */ clearElement),
/* harmony export */   "save": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/modules/popup.js");
/* eslint-disable no-plusplus */


const LOCAL_STORAGE_LIST_KEY = 'card.list';
const cards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

const clearElement = ((element) => {
  element.innerHTML = '';
});

const save = (() => {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(cards));
});

const displayElements = () => {
  const blueEyes = document.getElementById('card_list');
  clearElement(blueEyes);
  for (let i = 0; i < cards.length; i++) {
    blueEyes.innerHTML += `
        <li>
        <div class="image_holder"><img class="card_image" src="${cards[i].card_images[0].image_url_small}" alt=""></div>
        <div class="card_details"><h2 class"card_title">${cards[i].name}</h2>
        <div class="likes-section">
        <i class="far fa-heart" data-id="${cards[i].id}"></i><br><span id="${cards[i].id}" class="likes"></span> likes</div>
        </div>
        <button id="commentBtn" class="card_comments" data-id="${cards[i].id}" >Comments</button>
        </li>`;
  }
  save();
};

async function getCards() {
  const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes');
  const allcards = await response.json();
  const cardData = allcards.data;
  cards.length = 0;
  cards.push(...cardData.slice(0, 12));
  save();
  displayElements();
}

document.addEventListener('click', (e) => {
  const popup = document.getElementById('appPopup');

  if (e.target === popup || e.target.id === 'close') popup.style.display = 'none';
  if (e.target.id === 'commentBtn') (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target.getAttribute('data-id'));
});

getCards();


/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCard": () => (/* binding */ getCard),
/* harmony export */   "displayBlock": () => (/* binding */ displayBlock),
/* harmony export */   "textContentWith": () => (/* binding */ textContentWith),
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "default": () => (/* binding */ displayPopup)
/* harmony export */ });
/* harmony import */ var _utl_funcs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utl/funcs.js */ "./src/utl/funcs.js");
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsCounter.js */ "./src/modules/commentsCounter.js");
/* harmony import */ var _interactionServer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactionServer.js */ "./src/modules/interactionServer.js");




function getCard(id) {
  const cards = (0,_utl_funcs_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return cards.find((card) => card.id === id);
}

function displayBlock(element) {
  element.style.display = 'block';
  return true;
}

function textContentWith(ele, value) {
  ele.textContent = value;
  return ele;
}

function getDate() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;
  return today;
}

function displayPopup(cardId) {
  const card = getCard(Number(cardId));
  const [popup, popupBody] = ['appPopup', 'popup-body'].map((id) => document.getElementById(id));
  const [cardImg, cardTitle, cardDesc, cardType, cardATK, cardDEF, cardAttr, cardInfo, cardComments,
    commentHead, commentsDisplay, addComment, addCommentHead, addCommentForm, inputUsername, inputComment, commentBtn] = ['img', 'h2', 'div', 'span', 'span', 'span', 'span', 'span', 'div', 'h4', 'div', 'div', 'h4', 'form', 'input', 'textarea', 'input'].map((tag) => document.createElement(tag));

  cardComments.id = 'cardComments';
  commentHead.id = 'commentHead';
  commentsDisplay.id = 'commentsDisplay';
  cardDesc.className = 'desc';
  cardInfo.className = 'highlight';
  cardImg.src = card.card_images[0].image_url;

  textContentWith(cardTitle, `${card.name}`);
  textContentWith(cardType, `Type : ${card.type}`);
  textContentWith(cardATK, `Attack : ${(card.type === 'Spell Card') ? '-' : card.atk}`);
  textContentWith(cardAttr, `Attribute : ${(card.type === 'Spell Card') ? '-' : card.attribute}`);
  textContentWith(cardDEF, `Defence : ${(card.type === 'Spell Card') ? '-' : card.def}`);
  textContentWith(cardInfo, `Description : ${card.desc}`);
  textContentWith(popupBody, '');

  (0,_interactionServer_js__WEBPACK_IMPORTED_MODULE_2__.getCommentsOf)(cardId).then((commentsArr) => {
    commentHead.textContent = (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentsArr) === undefined ? 'No comments' : `Comments (${(0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentsArr)})`;
    commentsArr.forEach((comment) => {
      commentsDisplay.innerHTML
        += `<div>${comment.creation_date} (${comment.username}) : ${comment.comment}</div>`;
    });
  });

  addComment.id = 'addComment';
  inputUsername.id = 'inputUsername';
  addCommentForm.id = 'commentForm';
  inputComment.id = 'inputComment';
  commentBtn.id = 'commentBtn';
  inputUsername.type = 'text';
  commentBtn.type = 'submit';
  addCommentHead.textContent = 'Add a comment';
  inputUsername.placeholder = 'Your name';
  inputComment.placeholder = 'Your comment';
  inputUsername.required = true;
  inputComment.required = true;
  commentBtn.value = 'Post';
  addCommentForm.setAttribute('data-id', cardId);

  addCommentForm.append(inputUsername, inputComment, commentBtn);
  addComment.append(addCommentHead, addCommentForm);
  cardComments.append(commentHead, commentsDisplay);
  cardDesc.append(cardType, cardATK, cardAttr, cardDEF);
  popupBody.append(cardImg, cardTitle, cardDesc, cardInfo, cardComments, addComment);

  displayBlock(popup);

  return popup;
}

document.addEventListener('submit', (e) => {
  const [commentHead, commentsDisplay] = ['commentHead', 'commentsDisplay'].map((id) => document.getElementById(id));
  const [username, comment] = [e.target[0].value, e.target[1].value];
  const id = Number(e.target.getAttribute('data-id'));
  const today = getDate();

  (0,_interactionServer_js__WEBPACK_IMPORTED_MODULE_2__.postCommentWith)(id, username, comment);

  commentsDisplay.innerHTML += `<div>${today} (${username}) : ${comment}</div>`;
  commentHead.innerHTML = `Comments (${commentsDisplay.childElementCount})`;

  e.target.reset();
  e.preventDefault();
});


/***/ }),

/***/ "./src/utl/funcs.js":
/*!**************************!*\
  !*** ./src/utl/funcs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCardsFromLocalStorage)
/* harmony export */ });
function getCardsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('card.list')) || [];
}


/***/ }),

/***/ "./src/images/backy.jpg":
/*!******************************!*\
  !*** ./src/images/backy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3dcbba831273fd0739f.jpg";

/***/ }),

/***/ "./src/images/backy2.jpg":
/*!*******************************!*\
  !*** ./src/images/backy2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef379af377f043865d47.jpg";

/***/ }),

/***/ "./src/images/commentBg.jpg":
/*!**********************************!*\
  !*** ./src/images/commentBg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bbb40358c26409e154c.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/popup.css */ "./src/styles/popup.css");
/* harmony import */ var _modules_module1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/module1.js */ "./src/modules/module1.js");
/* harmony import */ var _modules_interactionServer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/interactionServer.js */ "./src/modules/interactionServer.js");
/* harmony import */ var _modules_likers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/likers.js */ "./src/modules/likers.js");
/* harmony import */ var _modules_counting_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/counting.js */ "./src/modules/counting.js");







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFdB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckI0QjtBQUNBO0FBQ0U7QUFDVTtBQUNYO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9zcmMvc3R5bGVzL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL3N0eWxlcy9wb3B1cC5jc3M/YjllZCIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz83OWNkIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL21vZHVsZXMvY29tbWVudHNDb3VudGVyLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL3NyYy9tb2R1bGVzL2NvdW50aW5nLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL3NyYy9tb2R1bGVzL2ludGVyYWN0aW9uU2VydmVyLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL3NyYy9tb2R1bGVzL2xpa2Vycy5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9zcmMvbW9kdWxlcy9tb2R1bGUxLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL3NyYy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL3NyYy91dGwvZnVuY3MuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY29tbWVudEJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5wb3B1cCBoMiB7XFxuICB3aWR0aDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM3NTtcXG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZmFmYWQyYTg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMXB4O1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM3NTtcXG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZmFmYWQyYTg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMXB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1hcmdpbjogNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcG9wdXAtYm9keSB7XFxuICB3aWR0aDogNDIxcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXG59XFxuXFxuI2NhcmRDb21tZW50cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2FkZENvbW1lbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNjb21tZW50Rm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jaW5wdXRDb21tZW50IHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmRlc2MgPiAqIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgZmxleDogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jY29tbWVudEZvcm0gPiAqIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jY29tbWVudHNEaXNwbGF5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI2NvbW1lbnRzRGlzcGxheSA+ICoge1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xcbn1cXG5cXG4jY2xvc2Uge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNjbG9zZTpob3ZlcixcXG4jY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IHJlZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlc2Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM3NTtcXG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZmFmYWQyYTg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMXB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbiNyaW5nIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzNjM2MzYztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxNTBweDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNmZmYwMDA7XFxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmMDAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4jcmluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtM3B4O1xcbiAgbGVmdDogLTNweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZjAwMDtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmZmYwMDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IGFuaW1hdGVDIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuI3Jpbmcgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYyg1MCUgLSAycHgpO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuI3Jpbmcgc3Bhbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmMDAwO1xcbiAgdG9wOiAtNnB4O1xcbiAgcmlnaHQ6IC04cHg7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjZmZmMDAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGVDIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbmltYXRlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQwNWRlZyk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcG9wdXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UseURBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0RBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQUNGO0VBRUE7SUFDRSxNQUFBO0lBQ0EsVUFBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSx1QkFBQTtFQURGO0VBSUE7SUFDRSx5QkFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFO0lBQ0Usd0JBQUE7RUFIRjtFQU1BO0lBQ0UseUJBQUE7RUFKRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ucG9wdXAgaDIge1xcbiAgd2lkdGg6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzNzU7XFxuICBib3JkZXI6IDE1cHggc29saWQgI2ZhZmFkMmE4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjFweDtcXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzNzU7XFxuICBib3JkZXI6IDE1cHggc29saWQgI2ZhZmFkMmE4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjFweDtcXG59XFxuXFxuLnBvcHVwLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9jb21tZW50QmcuanBnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBtYXJnaW46IDUlIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogNzAwcHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BvcHVwLWJvZHkge1xcbiAgd2lkdGg6IDQyMXB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XFxufVxcblxcbiNjYXJkQ29tbWVudHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNhZGRDb21tZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jY29tbWVudEZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2lucHV0Q29tbWVudCB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5kZXNjID4gKiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGZsZXg6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2NvbW1lbnRGb3JtID4gKiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI2NvbW1lbnRzRGlzcGxheSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNjb21tZW50c0Rpc3BsYXkgPiAqIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuXFxuI2Nsb3NlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jY2xvc2U6aG92ZXIsXFxuI2Nsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiByZWQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXNjIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzNzU7XFxuICBib3JkZXI6IDE1cHggc29saWQgI2ZhZmFkMmE4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjFweDtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4jcmluZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzYzNjM2M7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTUwcHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjZmZmMDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2ZmZjAwMDtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuI3Jpbmc6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTNweDtcXG4gIGxlZnQ6IC0zcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmYwMDA7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZmZmMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiBhbmltYXRlQyAycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbiNyaW5nIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbiNyaW5nIHNwYW46OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjAwMDtcXG4gIHRvcDogLTZweDtcXG4gIHJpZ2h0OiAtOHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggI2ZmZjAwMDtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlQyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MDVkZWcpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYWNreS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja3kyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmJvZHksXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm5hdiB7XFxuICBtYXJnaW4tcmlnaHQ6IDUlO1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDIwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHRvcDogLTJweDtcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAyMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0b3A6IDkydmg7XFxuICBoZWlnaHQ6IDh2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA5NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcXG59XFxuXFxubWFpbiB1bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBmb250LXNpemU6IDAuNXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubWFpbiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMnJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L3l1Z2lvaC9pbWFnZXMvOS85NS9TbGlmZXJ0aGVTa3lEcmFnb24tR0JJLUFFLUJhY2sucG5nL3JldmlzaW9uL2xhdGVzdC9zY2FsZS10by13aWR0aC1kb3duLzMyOD9jYj0yMDEwMDcyNjA4MzcwXFxcIik7XFxuICBib3JkZXItcmFkaXVzOiAwJSAwJSAwJSAwJS8wJSAwJSAwJSAwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbm1haW4gbGk6aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMCUgMCUgNTAlIDUwJS8wJSAwJSA1JSA1JTtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4uaW1hZ2VfaG9sZGVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5jYXJkX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2FyZF9kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5saWtlcy1zZWN0aW9uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuLmZhLWhlYXJ0IHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3BlbiB7XFxuICBhbmltYXRpb246IHBvcHVwIDAuNnMgbGluZWFyO1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuLmNhcmRfY29tbWVudHMge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiAzcHggc29saWQgeWVsbG93O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJkX2NvbW1lbnRzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkNvbW1lbnRzXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogeWVsbG93O1xcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlWSgwKTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jYXJkX2NvbW1lbnRzOmhvdmVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVZKDM2MGRlZyk7XFxuICBsZWZ0OiAwO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNhcmRfY29tbWVudHM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJDb21tZW50c1xcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHllbGxvdztcXG4gIGJhY2tncm91bmQ6ICMyMjIyMjI7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVkoMCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2FyZF9jb21tZW50czpob3Zlcjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGVZKDM2MGRlZyk7XFxuICBsZWZ0OiAtMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGxlZnQ6IC0ycHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb3VudGVyIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IHllbGxvdztcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG59XFxuXFxuQGtleWZyYW1lcyBwb3B1cCB7XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4uZG91YmxlX3RhcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDkydmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDJ2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLm1hcnF1ZWUge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tYXJxdWVlIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDAlO1xcbiAgdGV4dC1pbmRlbnQ6IDA7XFxuICBhbmltYXRpb246IG1hcnF1ZWUgMTVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLm1hcnF1ZWUgc3Bhbjpob3ZlciB7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICBtYWluIHVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgbWFpbiB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgbWFpbiB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlEQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtF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QUFBO0lBQ0EsMEJBQUE7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9iYWNreS5qcGcpO1xcbn1cXG5cXG5ib2R5LFxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5uYXYge1xcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXG59XFxuXFxuLmxpbmtzIHtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAyMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0b3A6IC0ycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgdG9wOiA5MnZoO1xcbiAgaGVpZ2h0OiA4dmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogOTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XFxufVxcblxcbm1haW4gdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZm9udC1zaXplOiAwLjVyZW07XFxuICBnYXA6IDEuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbi1sZWZ0OiAzJTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbm1haW4gbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTJyZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC95dWdpb2gvaW1hZ2VzLzkvOTUvU2xpZmVydGhlU2t5RHJhZ29uLUdCSS1BRS1CYWNrLnBuZy9yZXZpc2lvbi9sYXRlc3Qvc2NhbGUtdG8td2lkdGgtZG93bi8zMjg/Y2I9MjAxMDA3MjYwODM3MCcpO1xcbiAgYm9yZGVyLXJhZGl1czogMCUgMCUgMCUgMCUgLyAwJSAwJSAwJSAwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbm1haW4gbGk6aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMCUgMCUgNTAlIDUwJSAvIDAlIDAlIDUlIDUlO1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi5pbWFnZV9ob2xkZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmNhcmRfaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jYXJkX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxpa2VzLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDNyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG4uZmEtaGVhcnQge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGVuIHtcXG4gIGFuaW1hdGlvbjogcG9wdXAgMC42cyBsaW5lYXI7XFxuICBjb2xvcjogcmVkO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uY2FyZF9jb21tZW50cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IDNweCBzb2xpZCB5ZWxsb3c7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcmRfY29tbWVudHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiQ29tbWVudHNcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMzQsIDM0LCAzNCk7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZVkoMCk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY2FyZF9jb21tZW50czpob3Zlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgzNjBkZWcpO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jYXJkX2NvbW1lbnRzOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiQ29tbWVudHNcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMzQsIDM0LCAzNCk7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVkoMCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2FyZF9jb21tZW50czpob3Zlcjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGVZKDM2MGRlZyk7XFxuICBsZWZ0OiAtMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9iYWNreTIuanBnKTtcXG4gIGxlZnQ6IC0ycHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb3VudGVyIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IHllbGxvdztcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG59XFxuXFxuQGtleWZyYW1lcyBwb3B1cCB7XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4uZG91YmxlX3RhcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDkydmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDJ2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLm1hcnF1ZWUge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tYXJxdWVlIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDAlO1xcbiAgdGV4dC1pbmRlbnQ6IDA7XFxuICBhbmltYXRpb246IG1hcnF1ZWUgMTVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLm1hcnF1ZWUgc3Bhbjpob3ZlciB7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTsgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgbWFpbiB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIG1haW4gdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIG1haW4gdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBwbHVzUGx1cyhjb3VudGVyKSB7XG4gIGNvdW50ZXIgKz0gMTtcbiAgcmV0dXJuIGNvdW50ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbW1lbnRzQ291bnRlcihjb21tZW50cykge1xuICBsZXQgY291bnRlciA9IDA7XG4gIGlmIChjb21tZW50cy5sZW5ndGggPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgY29tbWVudHMuZm9yRWFjaCgoKSA9PiB7XG4gICAgY291bnRlciA9IHBsdXNQbHVzKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9KTtcblxuICBpZiAoY291bnRlciA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgcmV0dXJuIGNvdW50ZXI7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuXG5pbXBvcnQgeyBjYXJkcyB9IGZyb20gJy4vbW9kdWxlMS5qcyc7XG5cbmNvbnN0IGNvdW50aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1cHknKTtcblxuZnVuY3Rpb24gYXJyYXlMZW5ndGgoYSkge1xuICBsZXQgbGVuZ3RoID0gMDtcbiAgd2hpbGUgKGFbbGVuZ3RoXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoKys7XG4gIH1cbiAgY291bnRpbmcuaW5uZXJIVE1MID0gYCgke2xlbmd0aH0pYDtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGFycmF5TGVuZ3RoKGNhcmRzKTtcbn0pOyIsImNvbnN0IEFQSV9VUkkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcbmNvbnN0IEFQUF9JRCA9ICdlVmhZSm8yMXZWUEl2NEdUQ21kWCc7XG5cbmZ1bmN0aW9uIGdldENvbW1lbnRzT3B0aW9ucygpIHtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwb3N0Q29tbWVudHNPcHRpb25zKGNhcmRJRCwgdXNlcm5hbWUsIGNvbW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBjYXJkSUQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBwb3N0TGlrZXMoY2FyZElEKSB7XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogY2FyZElELFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbW1lbnRzT2YoY2FyZElEKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSSX0vYXBwcy8ke0FQUF9JRH0vY29tbWVudHM/aXRlbV9pZD0ke2NhcmRJRH1gLCBnZXRDb21tZW50c09wdGlvbnMoKSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0Q29tbWVudFdpdGgoY2FyZElELCB1c2VybmFtZSwgY29tbWVudCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkl9L2FwcHMvJHtBUFBfSUR9L2NvbW1lbnRzYCwgcG9zdENvbW1lbnRzT3B0aW9ucyhjYXJkSUQsIHVzZXJuYW1lLCBjb21tZW50KSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0TGlrZXNXaXRoKGNhcmRJRCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkl9L2FwcHMvJHtBUFBfSUR9L2xpa2VzYCwgcG9zdExpa2VzKGNhcmRJRCkpO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuIiwiaW1wb3J0IHsgY2FyZHMsIGNsZWFyRWxlbWVudCB9IGZyb20gJy4vbW9kdWxlMS5qcyc7XG5pbXBvcnQgeyBwb3N0TGlrZXNXaXRoIH0gZnJvbSAnLi9pbnRlcmFjdGlvblNlcnZlci5qcyc7XG5cbmNvbnN0IGxpa2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRfbGlzdCcpO1xuXG5jb25zdCBBUElfVVJJID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaSc7XG5jb25zdCBBUFBfSUQgPSAnZVZoWUpvMjF2VlBJdjRHVENtZFgnO1xuXG5hc3luYyBmdW5jdGlvbiB0aGlzSXNJdCgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJJfS9hcHBzLyR7QVBQX0lEfS9saWtlcz9pdGVtX2lkPSR7Y2FyZHMuaWR9YCk7XG4gIGNvbnN0IHNjb3JlTGluZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBjb25zdCBsaWtlTm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKTtcblxuICBsaWtlTm8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNsZWFyRWxlbWVudChsaWtlTm8pO1xuICAgIHNjb3JlTGluZS5mb3JFYWNoKChsaWtlT2JqKSA9PiB7XG4gICAgICBpZiAobGlrZU9iai5pdGVtX2lkID09PSBOdW1iZXIoaXRlbS5pZCkpIHtcbiAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgJHtsaWtlT2JqLmxpa2VzfWA7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxudGhpc0lzSXQoKTtcbmxldCBjbGlja2VkID0gZmFsc2U7XG5saWtleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpJykge1xuICAgIGNvbnN0IGRhdGFJZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgdGhpc0lzSXQoKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG5cbiAgICBpZiAoIWNsaWNrZWQpIHtcbiAgICAgIGNsaWNrZWQgPSB0cnVlO1xuICAgICAgcG9zdExpa2VzV2l0aChkYXRhSWQpO1xuICAgICAgdGhpc0lzSXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpc0lzSXQoKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCBkaXNwbGF5UG9wdXAgZnJvbSAnLi9wb3B1cC5qcyc7XG5cbmNvbnN0IExPQ0FMX1NUT1JBR0VfTElTVF9LRVkgPSAnY2FyZC5saXN0JztcbmV4cG9ydCBjb25zdCBjYXJkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSkpIHx8IFtdO1xuXG5leHBvcnQgY29uc3QgY2xlYXJFbGVtZW50ID0gKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG59KTtcblxuZXhwb3J0IGNvbnN0IHNhdmUgPSAoKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZLCBKU09OLnN0cmluZ2lmeShjYXJkcykpO1xufSk7XG5cbmNvbnN0IGRpc3BsYXlFbGVtZW50cyA9ICgpID0+IHtcbiAgY29uc3QgYmx1ZUV5ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZF9saXN0Jyk7XG4gIGNsZWFyRWxlbWVudChibHVlRXllcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICBibHVlRXllcy5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8bGk+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZV9ob2xkZXJcIj48aW1nIGNsYXNzPVwiY2FyZF9pbWFnZVwiIHNyYz1cIiR7Y2FyZHNbaV0uY2FyZF9pbWFnZXNbMF0uaW1hZ2VfdXJsX3NtYWxsfVwiIGFsdD1cIlwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9kZXRhaWxzXCI+PGgyIGNsYXNzXCJjYXJkX3RpdGxlXCI+JHtjYXJkc1tpXS5uYW1lfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlcy1zZWN0aW9uXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWhlYXJ0XCIgZGF0YS1pZD1cIiR7Y2FyZHNbaV0uaWR9XCI+PC9pPjxicj48c3BhbiBpZD1cIiR7Y2FyZHNbaV0uaWR9XCIgY2xhc3M9XCJsaWtlc1wiPjwvc3Bhbj4gbGlrZXM8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjb21tZW50QnRuXCIgY2xhc3M9XCJjYXJkX2NvbW1lbnRzXCIgZGF0YS1pZD1cIiR7Y2FyZHNbaV0uaWR9XCIgPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICAgIDwvbGk+YDtcbiAgfVxuICBzYXZlKCk7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDYXJkcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kYi55Z29wcm9kZWNrLmNvbS9hcGkvdjcvY2FyZGluZm8ucGhwP2FyY2hldHlwZT1CbHVlLUV5ZXMnKTtcbiAgY29uc3QgYWxsY2FyZHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGNhcmREYXRhID0gYWxsY2FyZHMuZGF0YTtcbiAgY2FyZHMubGVuZ3RoID0gMDtcbiAgY2FyZHMucHVzaCguLi5jYXJkRGF0YS5zbGljZSgwLCAxMikpO1xuICBzYXZlKCk7XG4gIGRpc3BsYXlFbGVtZW50cygpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcFBvcHVwJyk7XG5cbiAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cCB8fCBlLnRhcmdldC5pZCA9PT0gJ2Nsb3NlJykgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaWYgKGUudGFyZ2V0LmlkID09PSAnY29tbWVudEJ0bicpIGRpc3BsYXlQb3B1cChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG59KTtcblxuZ2V0Q2FyZHMoKTtcbiIsImltcG9ydCBnZXRDYXJkc0Zyb21Mb2NhbFN0b3JhZ2UgZnJvbSAnLi4vdXRsL2Z1bmNzLmpzJztcbmltcG9ydCBjb21tZW50c0NvdW50ZXIgZnJvbSAnLi9jb21tZW50c0NvdW50ZXIuanMnO1xuaW1wb3J0IHsgZ2V0Q29tbWVudHNPZiwgcG9zdENvbW1lbnRXaXRoIH0gZnJvbSAnLi9pbnRlcmFjdGlvblNlcnZlci5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJkKGlkKSB7XG4gIGNvbnN0IGNhcmRzID0gZ2V0Q2FyZHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIHJldHVybiBjYXJkcy5maW5kKChjYXJkKSA9PiBjYXJkLmlkID09PSBpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QmxvY2soZWxlbWVudCkge1xuICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRDb250ZW50V2l0aChlbGUsIHZhbHVlKSB7XG4gIGVsZS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICByZXR1cm4gZWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gSmFudWFyeSBpcyAwIVxuICBjb25zdCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgdG9kYXkgPSBgJHt5eXl5fS0ke21tfS0ke2RkfWA7XG4gIHJldHVybiB0b2RheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVBvcHVwKGNhcmRJZCkge1xuICBjb25zdCBjYXJkID0gZ2V0Q2FyZChOdW1iZXIoY2FyZElkKSk7XG4gIGNvbnN0IFtwb3B1cCwgcG9wdXBCb2R5XSA9IFsnYXBwUG9wdXAnLCAncG9wdXAtYm9keSddLm1hcCgoaWQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSk7XG4gIGNvbnN0IFtjYXJkSW1nLCBjYXJkVGl0bGUsIGNhcmREZXNjLCBjYXJkVHlwZSwgY2FyZEFUSywgY2FyZERFRiwgY2FyZEF0dHIsIGNhcmRJbmZvLCBjYXJkQ29tbWVudHMsXG4gICAgY29tbWVudEhlYWQsIGNvbW1lbnRzRGlzcGxheSwgYWRkQ29tbWVudCwgYWRkQ29tbWVudEhlYWQsIGFkZENvbW1lbnRGb3JtLCBpbnB1dFVzZXJuYW1lLCBpbnB1dENvbW1lbnQsIGNvbW1lbnRCdG5dID0gWydpbWcnLCAnaDInLCAnZGl2JywgJ3NwYW4nLCAnc3BhbicsICdzcGFuJywgJ3NwYW4nLCAnc3BhbicsICdkaXYnLCAnaDQnLCAnZGl2JywgJ2RpdicsICdoNCcsICdmb3JtJywgJ2lucHV0JywgJ3RleHRhcmVhJywgJ2lucHV0J10ubWFwKCh0YWcpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSk7XG5cbiAgY2FyZENvbW1lbnRzLmlkID0gJ2NhcmRDb21tZW50cyc7XG4gIGNvbW1lbnRIZWFkLmlkID0gJ2NvbW1lbnRIZWFkJztcbiAgY29tbWVudHNEaXNwbGF5LmlkID0gJ2NvbW1lbnRzRGlzcGxheSc7XG4gIGNhcmREZXNjLmNsYXNzTmFtZSA9ICdkZXNjJztcbiAgY2FyZEluZm8uY2xhc3NOYW1lID0gJ2hpZ2hsaWdodCc7XG4gIGNhcmRJbWcuc3JjID0gY2FyZC5jYXJkX2ltYWdlc1swXS5pbWFnZV91cmw7XG5cbiAgdGV4dENvbnRlbnRXaXRoKGNhcmRUaXRsZSwgYCR7Y2FyZC5uYW1lfWApO1xuICB0ZXh0Q29udGVudFdpdGgoY2FyZFR5cGUsIGBUeXBlIDogJHtjYXJkLnR5cGV9YCk7XG4gIHRleHRDb250ZW50V2l0aChjYXJkQVRLLCBgQXR0YWNrIDogJHsoY2FyZC50eXBlID09PSAnU3BlbGwgQ2FyZCcpID8gJy0nIDogY2FyZC5hdGt9YCk7XG4gIHRleHRDb250ZW50V2l0aChjYXJkQXR0ciwgYEF0dHJpYnV0ZSA6ICR7KGNhcmQudHlwZSA9PT0gJ1NwZWxsIENhcmQnKSA/ICctJyA6IGNhcmQuYXR0cmlidXRlfWApO1xuICB0ZXh0Q29udGVudFdpdGgoY2FyZERFRiwgYERlZmVuY2UgOiAkeyhjYXJkLnR5cGUgPT09ICdTcGVsbCBDYXJkJykgPyAnLScgOiBjYXJkLmRlZn1gKTtcbiAgdGV4dENvbnRlbnRXaXRoKGNhcmRJbmZvLCBgRGVzY3JpcHRpb24gOiAke2NhcmQuZGVzY31gKTtcbiAgdGV4dENvbnRlbnRXaXRoKHBvcHVwQm9keSwgJycpO1xuXG4gIGdldENvbW1lbnRzT2YoY2FyZElkKS50aGVuKChjb21tZW50c0FycikgPT4ge1xuICAgIGNvbW1lbnRIZWFkLnRleHRDb250ZW50ID0gY29tbWVudHNDb3VudGVyKGNvbW1lbnRzQXJyKSA9PT0gdW5kZWZpbmVkID8gJ05vIGNvbW1lbnRzJyA6IGBDb21tZW50cyAoJHtjb21tZW50c0NvdW50ZXIoY29tbWVudHNBcnIpfSlgO1xuICAgIGNvbW1lbnRzQXJyLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgIGNvbW1lbnRzRGlzcGxheS5pbm5lckhUTUxcbiAgICAgICAgKz0gYDxkaXY+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICgke2NvbW1lbnQudXNlcm5hbWV9KSA6ICR7Y29tbWVudC5jb21tZW50fTwvZGl2PmA7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGFkZENvbW1lbnQuaWQgPSAnYWRkQ29tbWVudCc7XG4gIGlucHV0VXNlcm5hbWUuaWQgPSAnaW5wdXRVc2VybmFtZSc7XG4gIGFkZENvbW1lbnRGb3JtLmlkID0gJ2NvbW1lbnRGb3JtJztcbiAgaW5wdXRDb21tZW50LmlkID0gJ2lucHV0Q29tbWVudCc7XG4gIGNvbW1lbnRCdG4uaWQgPSAnY29tbWVudEJ0bic7XG4gIGlucHV0VXNlcm5hbWUudHlwZSA9ICd0ZXh0JztcbiAgY29tbWVudEJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gIGFkZENvbW1lbnRIZWFkLnRleHRDb250ZW50ID0gJ0FkZCBhIGNvbW1lbnQnO1xuICBpbnB1dFVzZXJuYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XG4gIGlucHV0Q29tbWVudC5wbGFjZWhvbGRlciA9ICdZb3VyIGNvbW1lbnQnO1xuICBpbnB1dFVzZXJuYW1lLnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXRDb21tZW50LnJlcXVpcmVkID0gdHJ1ZTtcbiAgY29tbWVudEJ0bi52YWx1ZSA9ICdQb3N0JztcbiAgYWRkQ29tbWVudEZvcm0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgY2FyZElkKTtcblxuICBhZGRDb21tZW50Rm9ybS5hcHBlbmQoaW5wdXRVc2VybmFtZSwgaW5wdXRDb21tZW50LCBjb21tZW50QnRuKTtcbiAgYWRkQ29tbWVudC5hcHBlbmQoYWRkQ29tbWVudEhlYWQsIGFkZENvbW1lbnRGb3JtKTtcbiAgY2FyZENvbW1lbnRzLmFwcGVuZChjb21tZW50SGVhZCwgY29tbWVudHNEaXNwbGF5KTtcbiAgY2FyZERlc2MuYXBwZW5kKGNhcmRUeXBlLCBjYXJkQVRLLCBjYXJkQXR0ciwgY2FyZERFRik7XG4gIHBvcHVwQm9keS5hcHBlbmQoY2FyZEltZywgY2FyZFRpdGxlLCBjYXJkRGVzYywgY2FyZEluZm8sIGNhcmRDb21tZW50cywgYWRkQ29tbWVudCk7XG5cbiAgZGlzcGxheUJsb2NrKHBvcHVwKTtcblxuICByZXR1cm4gcG9wdXA7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGNvbnN0IFtjb21tZW50SGVhZCwgY29tbWVudHNEaXNwbGF5XSA9IFsnY29tbWVudEhlYWQnLCAnY29tbWVudHNEaXNwbGF5J10ubWFwKChpZCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBjb21tZW50XSA9IFtlLnRhcmdldFswXS52YWx1ZSwgZS50YXJnZXRbMV0udmFsdWVdO1xuICBjb25zdCBpZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gIGNvbnN0IHRvZGF5ID0gZ2V0RGF0ZSgpO1xuXG4gIHBvc3RDb21tZW50V2l0aChpZCwgdXNlcm5hbWUsIGNvbW1lbnQpO1xuXG4gIGNvbW1lbnRzRGlzcGxheS5pbm5lckhUTUwgKz0gYDxkaXY+JHt0b2RheX0gKCR7dXNlcm5hbWV9KSA6ICR7Y29tbWVudH08L2Rpdj5gO1xuICBjb21tZW50SGVhZC5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7Y29tbWVudHNEaXNwbGF5LmNoaWxkRWxlbWVudENvdW50fSlgO1xuXG4gIGUudGFyZ2V0LnJlc2V0KCk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2FyZHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FyZC5saXN0JykpIHx8IFtdO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9wb3B1cC5jc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvbW9kdWxlMS5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9pbnRlcmFjdGlvblNlcnZlci5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9saWtlcnMuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvY291bnRpbmcuanMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9