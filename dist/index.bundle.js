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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popup {\n  display: none;\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.popup h2 {\n  width: auto;\n}\n\n.popup-content {\n  overflow: auto;\n  background-color: #fefefe;\n  margin: 5% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  border-radius: 10px;\n  width: 700px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#popup-body {\n  width: 421px;\n  padding-top: 10px;\n  display: grid;\n  justify-items: center;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr auto auto auto auto auto;\n}\n\n#cardComments {\n  width: 100%;\n  text-align: center;\n}\n\n#addComment {\n  width: 100%;\n}\n\n#commentForm {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n#inputComment {\n  padding-top: 0;\n  height: 100px;\n}\n\n.desc > * {\n  padding-bottom: 10px;\n  flex: 50%;\n  align-self: center;\n}\n\n#commentForm > * {\n  padding-bottom: 10px;\n}\n\n#commentsDisplay {\n  width: 100%;\n  text-align: left;\n}\n\n#commentsDisplay > * {\n  padding-bottom: 3px;\n  padding-top: 3px;\n  border-bottom: 1px solid lightgray;\n}\n\n#close {\n  color: #aaa;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n#close:hover,\n#close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.desc {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n#ring {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 150px;\n  height: 150px;\n  background: transparent;\n  border: 3px solid #3c3c3c;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 150px;\n  font-family: sans-serif;\n  font-size: 20px;\n  color: #fff000;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  text-shadow: 0 0 10px #fff000;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n}\n\n#ring::before {\n  content: \"\";\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top: 3px solid #fff000;\n  border-right: 3px solid #fff000;\n  border-radius: 50%;\n  animation: animateC 2s linear infinite;\n}\n\n#ring span {\n  display: block;\n  position: absolute;\n  top: calc(50% - 2px);\n  left: 50%;\n  width: 50%;\n  height: 4px;\n  background: transparent;\n  transform-origin: left;\n  animation: animate 2s linear infinite;\n}\n\n#ring span::before {\n  content: \"\";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff000;\n  top: -6px;\n  right: -8px;\n  box-shadow: 0 0 20px #fff000;\n}\n\n@keyframes animateC {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes animate {\n  0% {\n    transform: rotate(45deg);\n  }\n  100% {\n    transform: rotate(405deg);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/popup.css"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,eAAA;EACA,aAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,uBAAA;EACA,oCAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,cAAA;EACA,yBAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,4EAAA;EACA,0BAAA;EACA,wBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACF;;AAEA;EACE,YAAA;EACA,iBAAA;EACA,aAAA;EACA,qBAAA;EACA,0BAAA;EACA,gDAAA;AACF;;AAEA;EACE,WAAA;EACA,kBAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;AACF;;AAEA;EACE,cAAA;EACA,aAAA;AACF;;AAEA;EACE,oBAAA;EACA,SAAA;EACA,kBAAA;AACF;;AAEA;EACE,oBAAA;AACF;;AAEA;EACE,WAAA;EACA,gBAAA;AACF;;AAEA;EACE,mBAAA;EACA,gBAAA;EACA,kCAAA;AACF;;AAEA;EACE,WAAA;EACA,eAAA;EACA,iBAAA;AACF;;AAEA;;EAEE,YAAA;EACA,qBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,WAAA;AACF;;AAEA;EACE;IACE,WAAA;IACA,UAAA;EACF;EAEA;IACE,MAAA;IACA,UAAA;EAAF;AACF;AAGA;EACE,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,yBAAA;EACA,6BAAA;EACA,uCAAA;AADF;;AAIA;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,6BAAA;EACA,6BAAA;EACA,+BAAA;EACA,kBAAA;EACA,sCAAA;AADF;;AAIA;EACE,cAAA;EACA,kBAAA;EACA,oBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,uBAAA;EACA,sBAAA;EACA,qCAAA;AADF;;AAIA;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,SAAA;EACA,WAAA;EACA,4BAAA;AADF;;AAIA;EACE;IACE,uBAAA;EADF;EAIA;IACE,yBAAA;EAFF;AACF;AAKA;EACE;IACE,wBAAA;EAHF;EAMA;IACE,yBAAA;EAJF;AACF","sourcesContent":[".popup {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1000;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.popup h2 {\r\n  width: auto;\r\n}\r\n\r\n.popup-content {\r\n  overflow: auto;\r\n  background-color: #fefefe;\r\n  margin: 5% auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  border-radius: 10px;\r\n  width: 700px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s;\r\n  padding-top: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#popup-body {\r\n  width: 421px;\r\n  padding-top: 10px;\r\n  display: grid;\r\n  justify-items: center;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 1fr auto auto auto auto auto;\r\n}\r\n\r\n#cardComments {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n#addComment {\r\n  width: 100%;\r\n}\r\n\r\n#commentForm {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#inputComment {\r\n  padding-top: 0;\r\n  height: 100px;\r\n}\r\n\r\n.desc > * {\r\n  padding-bottom: 10px;\r\n  flex: 50%;\r\n  align-self: center;\r\n}\r\n\r\n#commentForm > * {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n#commentsDisplay {\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n#commentsDisplay > * {\r\n  padding-bottom: 3px;\r\n  padding-top: 3px;\r\n  border-bottom: 1px solid lightgray;\r\n}\r\n\r\n#close {\r\n  color: #aaa;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n#close:hover,\r\n#close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.desc {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#ring {\r\n  display: none;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 150px;\r\n  height: 150px;\r\n  background: transparent;\r\n  border: 3px solid #3c3c3c;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  line-height: 150px;\r\n  font-family: sans-serif;\r\n  font-size: 20px;\r\n  color: #fff000;\r\n  letter-spacing: 4px;\r\n  text-transform: uppercase;\r\n  text-shadow: 0 0 10px #fff000;\r\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n#ring::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -3px;\r\n  left: -3px;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 3px solid transparent;\r\n  border-top: 3px solid #fff000;\r\n  border-right: 3px solid #fff000;\r\n  border-radius: 50%;\r\n  animation: animateC 2s linear infinite;\r\n}\r\n\r\n#ring span {\r\n  display: block;\r\n  position: absolute;\r\n  top: calc(50% - 2px);\r\n  left: 50%;\r\n  width: 50%;\r\n  height: 4px;\r\n  background: transparent;\r\n  transform-origin: left;\r\n  animation: animate 2s linear infinite;\r\n}\r\n\r\n#ring span::before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50%;\r\n  background: #fff000;\r\n  top: -6px;\r\n  right: -8px;\r\n  box-shadow: 0 0 20px #fff000;\r\n}\r\n\r\n@keyframes animateC {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    transform: rotate(45deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(405deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody,\nheader,\nfooter {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\nul {\n  list-style-type: none;\n  display: flex;\n}\n\nnav {\n  margin-right: 5%;\n}\n\n.links {\n  margin: 0.5rem;\n  white-space: nowrap;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 20;\n  background-color: whitesmoke;\n  width: 100vw;\n  top: -2px;\n  padding-left: 2%;\n}\n\nfooter {\n  position: fixed;\n  z-index: 20;\n  background-color: whitesmoke;\n  width: 100vw;\n  top: 92vh;\n  height: 8vh;\n  text-align: center;\n  padding-top: 1.5rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: red;\n}\n\nmain {\n  position: relative;\n  top: 95px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 6rem;\n}\n\nmain ul {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  font-size: 0.5rem;\n  gap: 1.5rem;\n  margin-left: 10%;\n}\n\nh2 {\n  width: 7rem;\n  margin-left: 3%;\n  font-weight: 700;\n}\n\nmain li {\n  display: flex;\n  flex-direction: column;\n  width: 12rem;\n  height: 20rem;\n  background-image: url(\"https://vignette.wikia.nocookie.net/yugioh/images/9/95/SlifertheSkyDragon-GBI-AE-Back.png/revision/latest/scale-to-width-down/328?cb=2010072608370\");\n  border-radius: 0% 0% 0% 0%/0% 0% 0% 0%;\n  color: white;\n  box-shadow: 20px 20px rgba(0, 0, 0, 0.15);\n  transition: all 0.4s ease;\n  align-content: center;\n  margin-bottom: 1rem;\n}\n\nmain li:hover {\n  border-radius: 0% 0% 50% 50%/0% 0% 5% 5%;\n  box-shadow: 10px 10px rgba(0, 0, 0, 0.25);\n}\n\n.image_holder {\n  align-self: center;\n  width: 100%;\n  height: 80%;\n}\n\n.card_image {\n  width: 100%;\n  height: 100%;\n}\n\n.card_details {\n  display: flex;\n  justify-content: space-between;\n}\n\n.likes-section {\n  width: 3rem;\n  font-size: 0.8rem;\n  margin: 0.5rem;\n}\n\n.fa-heart {\n  padding-left: 0.5rem;\n  cursor: pointer;\n}\n\n.open {\n  animation: popup 0.6s linear;\n  color: red;\n  transform: scale(1.5);\n}\n\n.card_comments {\n  text-decoration: none;\n  border: 3px solid yellow;\n  color: transparent;\n  padding: 0.5rem 0.8rem;\n  font-size: 0.8rem;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 0.5s;\n  position: relative;\n  cursor: pointer;\n}\n\n.card_comments::before {\n  content: \"Comments\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: yellow;\n  background: #222222;\n  font-size: 28px;\n  top: 0;\n  left: 100%;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 1s;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform: scale(0) rotateY(0);\n  opacity: 0;\n}\n\n.card_comments:hover::before {\n  transform: scale(1) rotateY(360deg);\n  left: 0;\n  opacity: 1;\n}\n\n.card_comments::after {\n  content: \"Comments\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: yellow;\n  background: #222222;\n  font-size: 28px;\n  top: 0;\n  left: 0;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 1s;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform: scale(1) rotateY(0);\n  opacity: 1;\n}\n\n.card_comments:hover::after {\n  transform: scale(0) rotateY(360deg);\n  left: -100%;\n  opacity: 0;\n}\n\nheader,\nfooter {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  left: -2px;\n  color: white;\n}\n\n.counter {\n  font-size: 0.8rem;\n  color: yellow;\n  font-weight: 1000;\n  margin-left: 0.2rem;\n}\n\n@keyframes popup {\n  100% {\n    transform: scale(1.5);\n    opacity: 0;\n  }\n}\n.double_tap {\n  position: fixed;\n  top: 92vh;\n  width: 100vw;\n  height: 2vh;\n  background-color: black;\n  color: white;\n  z-index: 2000;\n}\n\n.marquee {\n  margin: 0 auto;\n  white-space: nowrap;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.marquee span {\n  display: inline-block;\n  padding-left: 100%;\n  text-indent: 0;\n  animation: marquee 15s linear infinite;\n}\n\n.marquee span:hover {\n  animation-play-state: paused;\n}\n\n@keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,yDAAA;AACF;;AAEA;;;EAGE,4BAAA;EACA,sBAAA;EACA,4BAAA;AACF;;AAEA;EACE,qBAAA;EACA,aAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,cAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,WAAA;EACA,4BAAA;EACA,YAAA;EACA,SAAA;EACA,gBAAA;AACF;;AAEA;EACE,eAAA;EACA,WAAA;EACA,4BAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AACF;;AAEA;EACE,qBAAA;EACA,YAAA;AACF;;AAEA;EACE,UAAA;AACF;;AAEA;EACE,kBAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;AACF;;AAEA;EACE,aAAA;EACA,sCAAA;EACA,iBAAA;EACA,WAAA;EACA,gBAAA;AACF;;AAEA;EACE,WAAA;EACA,eAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,2KAAA;EACA,sCAAA;EACA,YAAA;EACA,yCAAA;EACA,yBAAA;EACA,qBAAA;EACA,mBAAA;AACF;;AAEA;EACE,wCAAA;EACA,yCAAA;AACF;;AAEA;EACE,kBAAA;EACA,WAAA;EACA,WAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;AACF;;AAEA;EACE,WAAA;EACA,iBAAA;EACA,cAAA;AACF;;AAEA;EACE,oBAAA;EACA,eAAA;AACF;;AAEA;EACE,4BAAA;EACA,UAAA;EACA,qBAAA;AACF;;AAEA;EACE,qBAAA;EACA,wBAAA;EACA,kBAAA;EACA,sBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,eAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,MAAA;EACA,UAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,8BAAA;EACA,UAAA;AACF;;AAEA;EACE,mCAAA;EACA,OAAA;EACA,UAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,8BAAA;EACA,UAAA;AACF;;AAEA;EACE,mCAAA;EACA,WAAA;EACA,UAAA;AACF;;AAEA;;EAEE,yDAAA;EACA,UAAA;EACA,YAAA;AACF;;AAEA;EACE,iBAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE;IACE,qBAAA;IACA,UAAA;EACF;AACF;AAEA;EACE,eAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;AAAF;;AAGA;EACE,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,sBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,kBAAA;EACA,cAAA;EACA,sCAAA;AAAF;;AAGA;EACE,4BAAA;AAAF;;AAGA;EACE;IAAK,0BAAA;EACL;EAAA;IAAO,8BAAA;EAGP;AACF","sourcesContent":["body {\r\n  background-image: url(../images/backy.jpg);\r\n}\r\n\r\nbody,\r\nheader,\r\nfooter {\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  display: flex;\r\n}\r\n\r\nnav {\r\n  margin-right: 5%;\r\n}\r\n\r\n.links {\r\n  margin: 0.5rem;\r\n  white-space: nowrap;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: fixed;\r\n  z-index: 20;\r\n  background-color: whitesmoke;\r\n  width: 100vw;\r\n  top: -2px;\r\n  padding-left: 2%;\r\n}\r\n\r\nfooter {\r\n  position: fixed;\r\n  z-index: 20;\r\n  background-color: whitesmoke;\r\n  width: 100vw;\r\n  top: 92vh;\r\n  height: 8vh;\r\n  text-align: center;\r\n  padding-top: 1.5rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\na:hover {\r\n  color: red;\r\n}\r\n\r\nmain {\r\n  position: relative;\r\n  top: 95px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-bottom: 6rem;\r\n}\r\n\r\nmain ul {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  font-size: 0.5rem;\r\n  gap: 1.5rem;\r\n  margin-left: 10%;\r\n}\r\n\r\nh2 {\r\n  width: 7rem;\r\n  margin-left: 3%;\r\n  font-weight: 700;\r\n}\r\n\r\nmain li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 12rem;\r\n  height: 20rem;\r\n  background-image: url('https://vignette.wikia.nocookie.net/yugioh/images/9/95/SlifertheSkyDragon-GBI-AE-Back.png/revision/latest/scale-to-width-down/328?cb=2010072608370');\r\n  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;\r\n  color: white;\r\n  box-shadow: 20px 20px rgba(0, 0, 0, 0.15);\r\n  transition: all 0.4s ease;\r\n  align-content: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nmain li:hover {\r\n  border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;\r\n  box-shadow: 10px 10px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.image_holder {\r\n  align-self: center;\r\n  width: 100%;\r\n  height: 80%;\r\n}\r\n\r\n.card_image {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.card_details {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.likes-section {\r\n  width: 3rem;\r\n  font-size: 0.8rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\n.fa-heart {\r\n  padding-left: 0.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.open {\r\n  animation: popup 0.6s linear;\r\n  color: red;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.card_comments {\r\n  text-decoration: none;\r\n  border: 3px solid yellow;\r\n  color: transparent;\r\n  padding: 0.5rem 0.8rem;\r\n  font-size: 0.8rem;\r\n  font-family: sans-serif;\r\n  letter-spacing: 5px;\r\n  transition: all 0.5s;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.card_comments::before {\r\n  content: \"Comments\";\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: yellow;\r\n  background: rgb(34, 34, 34);\r\n  font-size: 28px;\r\n  top: 0;\r\n  left: 100%;\r\n  font-family: sans-serif;\r\n  letter-spacing: 5px;\r\n  transition: all 1s;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  transform: scale(0) rotateY(0);\r\n  opacity: 0;\r\n}\r\n\r\n.card_comments:hover::before {\r\n  transform: scale(1) rotateY(360deg);\r\n  left: 0;\r\n  opacity: 1;\r\n}\r\n\r\n.card_comments::after {\r\n  content: \"Comments\";\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: yellow;\r\n  background: rgb(34, 34, 34);\r\n  font-size: 28px;\r\n  top: 0;\r\n  left: 0;\r\n  font-family: sans-serif;\r\n  letter-spacing: 5px;\r\n  transition: all 1s;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  transform: scale(1) rotateY(0);\r\n  opacity: 1;\r\n}\r\n\r\n.card_comments:hover::after {\r\n  transform: scale(0) rotateY(360deg);\r\n  left: -100%;\r\n  opacity: 0;\r\n}\r\n\r\nheader,\r\nfooter {\r\n  background-image: url(../images/backy2.jpg);\r\n  left: -2px;\r\n  color: white;\r\n}\r\n\r\n.counter {\r\n  font-size: 0.8rem;\r\n  color: yellow;\r\n  font-weight: 1000;\r\n  margin-left: 0.2rem;\r\n}\r\n\r\n@keyframes popup {\r\n  100% {\r\n    transform: scale(1.5);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.double_tap {\r\n  position: fixed;\r\n  top: 92vh;\r\n  width: 100vw;\r\n  height: 2vh;\r\n  background-color: black;\r\n  color: white;\r\n  z-index: 2000;\r\n}\r\n\r\n.marquee {\r\n  margin: 0 auto;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.marquee span {\r\n  display: inline-block;\r\n  padding-left: 100%;\r\n  text-indent: 0;\r\n  animation: marquee 15s linear infinite;\r\n}\r\n\r\n.marquee span:hover {\r\n  animation-play-state: paused;\r\n}\r\n\r\n@keyframes marquee {\r\n  0% { transform: translate(0, 0); }\r\n  100% { transform: translate(-100%, 0); }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjRCO0FBQ0E7QUFDRTtBQUNVO0FBQ1g7QUFDRSIsInNvdXJjZXMiOlsid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL3NyYy9zdHlsZXMvcG9wdXAuY3NzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9zcmMvc3R5bGVzL3BvcHVwLmNzcz9iOWVkIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzPzc5Y2QiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9zcmMvbW9kdWxlcy9jb21tZW50c0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL21vZHVsZXMvY291bnRpbmcuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL21vZHVsZXMvaW50ZXJhY3Rpb25TZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL21vZHVsZXMvbGlrZXJzLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL3NyYy9tb2R1bGVzL21vZHVsZTEuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL21vZHVsZXMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL3V0bC9mdW5jcy5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ucG9wdXAgaDIge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5wb3B1cC1jb250ZW50IHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcG9wdXAtYm9keSB7XFxuICB3aWR0aDogNDIxcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXG59XFxuXFxuI2NhcmRDb21tZW50cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2FkZENvbW1lbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNjb21tZW50Rm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jaW5wdXRDb21tZW50IHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmRlc2MgPiAqIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgZmxleDogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jY29tbWVudEZvcm0gPiAqIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jY29tbWVudHNEaXNwbGF5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI2NvbW1lbnRzRGlzcGxheSA+ICoge1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xcbn1cXG5cXG4jY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2Nsb3NlOmhvdmVyLFxcbiNjbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXNjIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4jcmluZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzYzNjM2M7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTUwcHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjZmZmMDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2ZmZjAwMDtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuI3Jpbmc6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTNweDtcXG4gIGxlZnQ6IC0zcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmYwMDA7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZmZmMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiBhbmltYXRlQyAycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbiNyaW5nIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbiNyaW5nIHNwYW46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjAwMDtcXG4gIHRvcDogLTZweDtcXG4gIHJpZ2h0OiAtOHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggI2ZmZjAwMDtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlQyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MDVkZWcpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0RBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RUFDRjtFQUVBO0lBQ0UsTUFBQTtJQUNBLFVBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsdUJBQUE7RUFERjtFQUlBO0lBQ0UseUJBQUE7RUFGRjtBQUNGO0FBS0E7RUFDRTtJQUNFLHdCQUFBO0VBSEY7RUFNQTtJQUNFLHlCQUFBO0VBSkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucG9wdXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIGgyIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICBtYXJnaW46IDUlIGF1dG87XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB3aWR0aDogNzAwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcHVwLWJvZHkge1xcclxcbiAgd2lkdGg6IDQyMXB4O1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XFxyXFxufVxcclxcblxcclxcbiNjYXJkQ29tbWVudHMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNhZGRDb21tZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudEZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0Q29tbWVudCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjID4gKiB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIGZsZXg6IDUwJTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRGb3JtID4gKiB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzRGlzcGxheSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50c0Rpc3BsYXkgPiAqIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogM3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlIHtcXHJcXG4gIGNvbG9yOiAjYWFhO1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNjbG9zZTpob3ZlcixcXHJcXG4jY2xvc2U6Zm9jdXMge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzYyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdG9wOiAtMzAwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI3Jpbmcge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjM2MzYzNjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE1MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjAwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYwMDA7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbiNyaW5nOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC0zcHg7XFxyXFxuICBsZWZ0OiAtM3B4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmZmMDAwO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2ZmZjAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZUMgMnMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jcmluZyBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiBjYWxjKDUwJSAtIDJweCk7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxyXFxuICBhbmltYXRpb246IGFuaW1hdGUgMnMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jcmluZyBzcGFuOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmYwMDA7XFxyXFxuICB0b3A6IC02cHg7XFxyXFxuICByaWdodDogLThweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNmZmYwMDA7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYW5pbWF0ZUMge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja3kuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JhY2t5Mi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5LFxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5uYXYge1xcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXG59XFxuXFxuLmxpbmtzIHtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAyMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0b3A6IC0ycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgdG9wOiA5MnZoO1xcbiAgaGVpZ2h0OiA4dmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogOTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XFxufVxcblxcbm1haW4gdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZm9udC1zaXplOiAwLjVyZW07XFxuICBnYXA6IDEuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcblxcbmgyIHtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubWFpbiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMnJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L3l1Z2lvaC9pbWFnZXMvOS85NS9TbGlmZXJ0aGVTa3lEcmFnb24tR0JJLUFFLUJhY2sucG5nL3JldmlzaW9uL2xhdGVzdC9zY2FsZS10by13aWR0aC1kb3duLzMyOD9jYj0yMDEwMDcyNjA4MzcwXFxcIik7XFxuICBib3JkZXItcmFkaXVzOiAwJSAwJSAwJSAwJS8wJSAwJSAwJSAwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbm1haW4gbGk6aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMCUgMCUgNTAlIDUwJS8wJSAwJSA1JSA1JTtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4uaW1hZ2VfaG9sZGVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5jYXJkX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2FyZF9kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5saWtlcy1zZWN0aW9uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuLmZhLWhlYXJ0IHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3BlbiB7XFxuICBhbmltYXRpb246IHBvcHVwIDAuNnMgbGluZWFyO1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuLmNhcmRfY29tbWVudHMge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiAzcHggc29saWQgeWVsbG93O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJkX2NvbW1lbnRzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkNvbW1lbnRzXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogeWVsbG93O1xcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlWSgwKTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jYXJkX2NvbW1lbnRzOmhvdmVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVZKDM2MGRlZyk7XFxuICBsZWZ0OiAwO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNhcmRfY29tbWVudHM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJDb21tZW50c1xcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHllbGxvdztcXG4gIGJhY2tncm91bmQ6ICMyMjIyMjI7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVkoMCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2FyZF9jb21tZW50czpob3Zlcjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGVZKDM2MGRlZyk7XFxuICBsZWZ0OiAtMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGxlZnQ6IC0ycHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb3VudGVyIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IHllbGxvdztcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG59XFxuXFxuQGtleWZyYW1lcyBwb3B1cCB7XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4uZG91YmxlX3RhcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDkydmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDJ2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMjAwMDtcXG59XFxuXFxuLm1hcnF1ZWUge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tYXJxdWVlIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDAlO1xcbiAgdGV4dC1pbmRlbnQ6IDA7XFxuICBhbmltYXRpb246IG1hcnF1ZWUgMTVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLm1hcnF1ZWUgc3Bhbjpob3ZlciB7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseURBQUE7QUFDRjs7QUFFQTs7O0VBR0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtF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QTtFQUNFO0lBQUssMEJBQUE7RUFDTDtFQUFBO0lBQU8sOEJBQUE7RUFHUDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9iYWNreS5qcGcpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzIHtcXHJcXG4gIG1hcmdpbjogMC41cmVtO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAyMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICB0b3A6IC0ycHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMjA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgdG9wOiA5MnZoO1xcclxcbiAgaGVpZ2h0OiA4dmg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogOTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4gdWwge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgZm9udC1zaXplOiAwLjVyZW07XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHdpZHRoOiA3cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMnJlbTtcXHJcXG4gIGhlaWdodDogMjByZW07XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L3l1Z2lvaC9pbWFnZXMvOS85NS9TbGlmZXJ0aGVTa3lEcmFnb24tR0JJLUFFLUJhY2sucG5nL3JldmlzaW9uL2xhdGVzdC9zY2FsZS10by13aWR0aC1kb3duLzMyOD9jYj0yMDEwMDcyNjA4MzcwJyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwJSAwJSAwJSAwJSAvIDAlIDAlIDAlIDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBsaTpob3ZlciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwJSAwJSA1MCUgNTAlIC8gMCUgMCUgNSUgNSU7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlX2hvbGRlciB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtc2VjdGlvbiB7XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW4ge1xcclxcbiAgYW5pbWF0aW9uOiBwb3B1cCAwLjZzIGxpbmVhcjtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX2NvbW1lbnRzIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHllbGxvdztcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9jb21tZW50czo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJDb21tZW50c1xcXCI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IHllbGxvdztcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNCwgMzQsIDM0KTtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDEwMCU7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlWSgwKTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX2NvbW1lbnRzOmhvdmVyOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVZKDM2MGRlZyk7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfY29tbWVudHM6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJDb21tZW50c1xcXCI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IHllbGxvdztcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNCwgMzQsIDM0KTtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgwKTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX2NvbW1lbnRzOmhvdmVyOjphZnRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZVkoMzYwZGVnKTtcXHJcXG4gIGxlZnQ6IC0xMDAlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLFxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2JhY2t5Mi5qcGcpO1xcclxcbiAgbGVmdDogLTJweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIge1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogeWVsbG93O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxyXFxuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHBvcHVwIHtcXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5kb3VibGVfdGFwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogOTJ2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMnZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB6LWluZGV4OiAyMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFycXVlZSB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcnF1ZWUgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwMCU7XFxyXFxuICB0ZXh0LWluZGVudDogMDtcXHJcXG4gIGFuaW1hdGlvbjogbWFycXVlZSAxNXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFycXVlZSBzcGFuOmhvdmVyIHtcXHJcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbWFycXVlZSB7XFxyXFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApOyB9XFxyXFxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApOyB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gcGx1c1BsdXMoY291bnRlcikge1xyXG4gIGNvdW50ZXIgKz0gMTtcclxuICByZXR1cm4gY291bnRlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tbWVudHNDb3VudGVyKGNvbW1lbnRzKSB7XHJcbiAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gIGlmIChjb21tZW50cy5sZW5ndGggPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICBjb21tZW50cy5mb3JFYWNoKCgpID0+IHtcclxuICAgIGNvdW50ZXIgPSBwbHVzUGx1cyhjb3VudGVyKTtcclxuICAgIHJldHVybiBjb3VudGVyO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoY291bnRlciA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICByZXR1cm4gY291bnRlcjtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xyXG5cclxuaW1wb3J0IHsgY2FyZHMgfSBmcm9tICcuL21vZHVsZTEuanMnO1xyXG5cclxuY29uc3QgY291bnRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VweScpO1xyXG5cclxuZnVuY3Rpb24gYXJyYXlMZW5ndGgoYSkge1xyXG4gIGxldCBsZW5ndGggPSAwO1xyXG4gIHdoaWxlIChhW2xlbmd0aF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgbGVuZ3RoKys7XHJcbiAgfVxyXG4gIGNvdW50aW5nLmlubmVySFRNTCA9IGAoJHtsZW5ndGh9KWA7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGFycmF5TGVuZ3RoKGNhcmRzKTtcclxufSk7IiwiY29uc3QgQVBJX1VSSSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGknO1xyXG5jb25zdCBBUFBfSUQgPSAnZVZoWUpvMjF2VlBJdjRHVENtZFgnO1xyXG5cclxuZnVuY3Rpb24gZ2V0Q29tbWVudHNPcHRpb25zKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3RDb21tZW50c09wdGlvbnMoY2FyZElELCB1c2VybmFtZSwgY29tbWVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgaXRlbV9pZDogY2FyZElELFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgY29tbWVudCxcclxuICAgIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0TGlrZXMoY2FyZElEKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpdGVtX2lkOiBjYXJkSUQsXHJcbiAgICB9KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbW1lbnRzT2YoY2FyZElEKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJJfS9hcHBzLyR7QVBQX0lEfS9jb21tZW50cz9pdGVtX2lkPSR7Y2FyZElEfWAsIGdldENvbW1lbnRzT3B0aW9ucygpKTtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdENvbW1lbnRXaXRoKGNhcmRJRCwgdXNlcm5hbWUsIGNvbW1lbnQpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkl9L2FwcHMvJHtBUFBfSUR9L2NvbW1lbnRzYCwgcG9zdENvbW1lbnRzT3B0aW9ucyhjYXJkSUQsIHVzZXJuYW1lLCBjb21tZW50KSk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RMaWtlc1dpdGgoY2FyZElEKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJJfS9hcHBzLyR7QVBQX0lEfS9saWtlc2AsIHBvc3RMaWtlcyhjYXJkSUQpKTtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59XHJcbiIsImltcG9ydCB7IGNhcmRzLCBjbGVhckVsZW1lbnQgfSBmcm9tICcuL21vZHVsZTEuanMnO1xyXG5pbXBvcnQgeyBwb3N0TGlrZXNXaXRoIH0gZnJvbSAnLi9pbnRlcmFjdGlvblNlcnZlci5qcyc7XHJcblxyXG5jb25zdCBsaWtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkX2xpc3QnKTtcclxuXHJcbmNvbnN0IEFQSV9VUkkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcclxuY29uc3QgQVBQX0lEID0gJ2VWaFlKbzIxdlZQSXY0R1RDbWRYJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRoaXNJc0l0KCkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSSX0vYXBwcy8ke0FQUF9JRH0vbGlrZXM/aXRlbV9pZD0ke2NhcmRzLmlkfWApO1xyXG4gIGNvbnN0IHNjb3JlTGluZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgY29uc3QgbGlrZU5vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzJyk7XHJcblxyXG4gIGxpa2VOby5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjbGVhckVsZW1lbnQobGlrZU5vKTtcclxuICAgIHNjb3JlTGluZS5mb3JFYWNoKChsaWtlT2JqKSA9PiB7XHJcbiAgICAgIGlmIChsaWtlT2JqLml0ZW1faWQgPT09IE51bWJlcihpdGVtLmlkKSkge1xyXG4gICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYCR7bGlrZU9iai5saWtlc31gO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG50aGlzSXNJdCgpO1xyXG5sZXQgY2xpY2tlZCA9IGZhbHNlO1xyXG5saWtleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2knKSB7XHJcbiAgICBjb25zdCBkYXRhSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgdGhpc0lzSXQoKTtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuXHJcbiAgICBpZiAoIWNsaWNrZWQpIHtcclxuICAgICAgY2xpY2tlZCA9IHRydWU7XHJcbiAgICAgIHBvc3RMaWtlc1dpdGgoZGF0YUlkKTtcclxuICAgICAgdGhpc0lzSXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgdGhpc0lzSXQoKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xyXG5pbXBvcnQgZGlzcGxheVBvcHVwIGZyb20gJy4vcG9wdXAuanMnO1xyXG5cclxuY29uc3QgTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSA9ICdjYXJkLmxpc3QnO1xyXG5leHBvcnQgY29uc3QgY2FyZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVF9LRVkpKSB8fCBbXTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhckVsZW1lbnQgPSAoKGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlID0gKCgpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZLCBKU09OLnN0cmluZ2lmeShjYXJkcykpO1xyXG59KTtcclxuXHJcbmNvbnN0IGRpc3BsYXlFbGVtZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBibHVlRXllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkX2xpc3QnKTtcclxuICBjbGVhckVsZW1lbnQoYmx1ZUV5ZXMpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGJsdWVFeWVzLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZV9ob2xkZXJcIj48aW1nIGNsYXNzPVwiY2FyZF9pbWFnZVwiIHNyYz1cIiR7Y2FyZHNbaV0uY2FyZF9pbWFnZXNbMF0uaW1hZ2VfdXJsX3NtYWxsfVwiIGFsdD1cIlwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX2RldGFpbHNcIj48aDIgY2xhc3NcImNhcmRfdGl0bGVcIj4ke2NhcmRzW2ldLm5hbWV9PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZXMtc2VjdGlvblwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWhlYXJ0XCIgZGF0YS1pZD1cIiR7Y2FyZHNbaV0uaWR9XCI+PC9pPjxicj48c3BhbiBpZD1cIiR7Y2FyZHNbaV0uaWR9XCIgY2xhc3M9XCJsaWtlc1wiPjwvc3Bhbj4gbGlrZXM8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiY29tbWVudEJ0blwiIGNsYXNzPVwiY2FyZF9jb21tZW50c1wiIGRhdGEtaWQ9XCIke2NhcmRzW2ldLmlkfVwiID5Db21tZW50czwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+YDtcclxuICB9XHJcbiAgc2F2ZSgpO1xyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2FyZHMoKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kYi55Z29wcm9kZWNrLmNvbS9hcGkvdjcvY2FyZGluZm8ucGhwP2FyY2hldHlwZT1CbHVlLUV5ZXMnKTtcclxuICBjb25zdCBhbGxjYXJkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjb25zdCBjYXJkRGF0YSA9IGFsbGNhcmRzLmRhdGE7XHJcbiAgY2FyZHMubGVuZ3RoID0gMDtcclxuICBjYXJkcy5wdXNoKC4uLmNhcmREYXRhLnNsaWNlKDAsIDEyKSk7XHJcbiAgc2F2ZSgpO1xyXG4gIGRpc3BsYXlFbGVtZW50cygpO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwUG9wdXAnKTtcclxuXHJcbiAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cCB8fCBlLnRhcmdldC5pZCA9PT0gJ2Nsb3NlJykgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBpZiAoZS50YXJnZXQuaWQgPT09ICdjb21tZW50QnRuJykgZGlzcGxheVBvcHVwKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxufSk7XHJcblxyXG5nZXRDYXJkcygpO1xyXG4iLCJpbXBvcnQgZ2V0Q2FyZHNGcm9tTG9jYWxTdG9yYWdlIGZyb20gJy4uL3V0bC9mdW5jcy5qcyc7XHJcbmltcG9ydCBjb21tZW50c0NvdW50ZXIgZnJvbSAnLi9jb21tZW50c0NvdW50ZXIuanMnO1xyXG5pbXBvcnQgeyBnZXRDb21tZW50c09mLCBwb3N0Q29tbWVudFdpdGggfSBmcm9tICcuL2ludGVyYWN0aW9uU2VydmVyLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJkKGlkKSB7XHJcbiAgY29uc3QgY2FyZHMgPSBnZXRDYXJkc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICByZXR1cm4gY2FyZHMuZmluZCgoY2FyZCkgPT4gY2FyZC5pZCA9PT0gaWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUJsb2NrKGVsZW1lbnQpIHtcclxuICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGV4dENvbnRlbnRXaXRoKGVsZSwgdmFsdWUpIHtcclxuICBlbGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICByZXR1cm4gZWxlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcclxuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICBjb25zdCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gSmFudWFyeSBpcyAwIVxyXG4gIGNvbnN0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gIHRvZGF5ID0gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xyXG4gIHJldHVybiB0b2RheTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVBvcHVwKGNhcmRJZCkge1xyXG4gIGNvbnN0IGNhcmQgPSBnZXRDYXJkKE51bWJlcihjYXJkSWQpKTtcclxuICBjb25zdCBbcG9wdXAsIHBvcHVwQm9keV0gPSBbJ2FwcFBvcHVwJywgJ3BvcHVwLWJvZHknXS5tYXAoKGlkKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpO1xyXG4gIGNvbnN0IFtjYXJkSW1nLCBjYXJkVGl0bGUsIGNhcmREZXNjLCBjYXJkVHlwZSwgY2FyZEFUSywgY2FyZERFRiwgY2FyZEF0dHIsIGNhcmRJbmZvLCBjYXJkQ29tbWVudHMsXHJcbiAgICBjb21tZW50SGVhZCwgY29tbWVudHNEaXNwbGF5LCBhZGRDb21tZW50LCBhZGRDb21tZW50SGVhZCwgYWRkQ29tbWVudEZvcm0sIGlucHV0VXNlcm5hbWUsIGlucHV0Q29tbWVudCwgY29tbWVudEJ0bl0gPSBbJ2ltZycsICdoMicsICdkaXYnLCAnc3BhbicsICdzcGFuJywgJ3NwYW4nLCAnc3BhbicsICdzcGFuJywgJ2RpdicsICdoNCcsICdkaXYnLCAnZGl2JywgJ2g0JywgJ2Zvcm0nLCAnaW5wdXQnLCAndGV4dGFyZWEnLCAnaW5wdXQnXS5tYXAoKHRhZykgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpKTtcclxuXHJcbiAgY2FyZENvbW1lbnRzLmlkID0gJ2NhcmRDb21tZW50cyc7XHJcbiAgY29tbWVudEhlYWQuaWQgPSAnY29tbWVudEhlYWQnO1xyXG4gIGNvbW1lbnRzRGlzcGxheS5pZCA9ICdjb21tZW50c0Rpc3BsYXknO1xyXG4gIGNhcmREZXNjLmNsYXNzTmFtZSA9ICdkZXNjJztcclxuICBjYXJkSW1nLnNyYyA9IGNhcmQuY2FyZF9pbWFnZXNbMF0uaW1hZ2VfdXJsO1xyXG5cclxuICB0ZXh0Q29udGVudFdpdGgoY2FyZFRpdGxlLCBgJHtjYXJkLm5hbWV9YCk7XHJcbiAgdGV4dENvbnRlbnRXaXRoKGNhcmRUeXBlLCBgVHlwZSA6ICR7Y2FyZC50eXBlfWApO1xyXG4gIHRleHRDb250ZW50V2l0aChjYXJkQVRLLCBgQXR0YWNrIDogJHsoY2FyZC50eXBlID09PSAnU3BlbGwgQ2FyZCcpID8gJy0nIDogY2FyZC5hdGt9YCk7XHJcbiAgdGV4dENvbnRlbnRXaXRoKGNhcmRBdHRyLCBgQXR0cmlidXRlIDogJHsoY2FyZC50eXBlID09PSAnU3BlbGwgQ2FyZCcpID8gJy0nIDogY2FyZC5hdHRyaWJ1dGV9YCk7XHJcbiAgdGV4dENvbnRlbnRXaXRoKGNhcmRERUYsIGBEZWZlbmNlIDogJHsoY2FyZC50eXBlID09PSAnU3BlbGwgQ2FyZCcpID8gJy0nIDogY2FyZC5kZWZ9YCk7XHJcbiAgdGV4dENvbnRlbnRXaXRoKGNhcmRJbmZvLCBgRGVzY3JpcHRpb24gOiAke2NhcmQuZGVzY31gKTtcclxuICB0ZXh0Q29udGVudFdpdGgocG9wdXBCb2R5LCAnJyk7XHJcblxyXG4gIGdldENvbW1lbnRzT2YoY2FyZElkKS50aGVuKChjb21tZW50c0FycikgPT4ge1xyXG4gICAgY29tbWVudEhlYWQudGV4dENvbnRlbnQgPSBjb21tZW50c0NvdW50ZXIoY29tbWVudHNBcnIpID09PSB1bmRlZmluZWQgPyAnTm8gY29tbWVudHMnIDogYENvbW1lbnRzICgke2NvbW1lbnRzQ291bnRlcihjb21tZW50c0Fycil9KWA7XHJcbiAgICBjb21tZW50c0Fyci5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgIGNvbW1lbnRzRGlzcGxheS5pbm5lckhUTUxcclxuICAgICAgICArPSBgPGRpdj4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gKCR7Y29tbWVudC51c2VybmFtZX0pIDogJHtjb21tZW50LmNvbW1lbnR9PC9kaXY+YDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBhZGRDb21tZW50LmlkID0gJ2FkZENvbW1lbnQnO1xyXG4gIGlucHV0VXNlcm5hbWUuaWQgPSAnaW5wdXRVc2VybmFtZSc7XHJcbiAgYWRkQ29tbWVudEZvcm0uaWQgPSAnY29tbWVudEZvcm0nO1xyXG4gIGlucHV0Q29tbWVudC5pZCA9ICdpbnB1dENvbW1lbnQnO1xyXG4gIGNvbW1lbnRCdG4uaWQgPSAnY29tbWVudEJ0bic7XHJcbiAgaW5wdXRVc2VybmFtZS50eXBlID0gJ3RleHQnO1xyXG4gIGNvbW1lbnRCdG4udHlwZSA9ICdzdWJtaXQnO1xyXG4gIGFkZENvbW1lbnRIZWFkLnRleHRDb250ZW50ID0gJ0FkZCBhIGNvbW1lbnQnO1xyXG4gIGlucHV0VXNlcm5hbWUucGxhY2Vob2xkZXIgPSAnWW91ciBuYW1lJztcclxuICBpbnB1dENvbW1lbnQucGxhY2Vob2xkZXIgPSAnWW91ciBjb21tZW50JztcclxuICBpbnB1dFVzZXJuYW1lLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBpbnB1dENvbW1lbnQucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGNvbW1lbnRCdG4udmFsdWUgPSAnUG9zdCc7XHJcbiAgYWRkQ29tbWVudEZvcm0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgY2FyZElkKTtcclxuXHJcbiAgYWRkQ29tbWVudEZvcm0uYXBwZW5kKGlucHV0VXNlcm5hbWUsIGlucHV0Q29tbWVudCwgY29tbWVudEJ0bik7XHJcbiAgYWRkQ29tbWVudC5hcHBlbmQoYWRkQ29tbWVudEhlYWQsIGFkZENvbW1lbnRGb3JtKTtcclxuICBjYXJkQ29tbWVudHMuYXBwZW5kKGNvbW1lbnRIZWFkLCBjb21tZW50c0Rpc3BsYXkpO1xyXG4gIGNhcmREZXNjLmFwcGVuZChjYXJkVHlwZSwgY2FyZEFUSywgY2FyZEF0dHIsIGNhcmRERUYpO1xyXG4gIHBvcHVwQm9keS5hcHBlbmQoY2FyZEltZywgY2FyZFRpdGxlLCBjYXJkRGVzYywgY2FyZEluZm8sIGNhcmRDb21tZW50cywgYWRkQ29tbWVudCk7XHJcblxyXG4gIGRpc3BsYXlCbG9jayhwb3B1cCk7XHJcblxyXG4gIHJldHVybiBwb3B1cDtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICBjb25zdCBbY29tbWVudEhlYWQsIGNvbW1lbnRzRGlzcGxheV0gPSBbJ2NvbW1lbnRIZWFkJywgJ2NvbW1lbnRzRGlzcGxheSddLm1hcCgoaWQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBjb21tZW50XSA9IFtlLnRhcmdldFswXS52YWx1ZSwgZS50YXJnZXRbMV0udmFsdWVdO1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICBjb25zdCB0b2RheSA9IGdldERhdGUoKTtcclxuXHJcbiAgcG9zdENvbW1lbnRXaXRoKGlkLCB1c2VybmFtZSwgY29tbWVudCk7XHJcblxyXG4gIGNvbW1lbnRzRGlzcGxheS5pbm5lckhUTUwgKz0gYDxkaXY+JHt0b2RheX0gKCR7dXNlcm5hbWV9KSA6ICR7Y29tbWVudH08L2Rpdj5gO1xyXG4gIGNvbW1lbnRIZWFkLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHtjb21tZW50c0Rpc3BsYXkuY2hpbGRFbGVtZW50Q291bnR9KWA7XHJcblxyXG4gIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2FyZHNGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkLmxpc3QnKSkgfHwgW107XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9wb3B1cC5jc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvbW9kdWxlMS5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9pbnRlcmFjdGlvblNlcnZlci5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9saWtlcnMuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvY291bnRpbmcuanMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9