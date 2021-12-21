/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody,\nheader,\nfooter {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\nul {\n  list-style-type: none;\n  display: flex;\n}\n\nnav {\n  margin-right: 5%;\n}\n\n.links {\n  margin: 0.5em;\n  white-space: nowrap;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 20;\n  background-color: whitesmoke;\n  width: 100vw;\n  top: -2px;\n  padding-left: 2%;\n}\n\nfooter {\n  position: fixed;\n  z-index: 20;\n  background-color: whitesmoke;\n  width: 100vw;\n  top: 92vh;\n  height: 8vh;\n  text-align: center;\n  padding-top: 1.5rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: red;\n}\n\nmain {\n  position: relative;\n  top: 95px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 4rem;\n}\n\nmain ul {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  font-size: 0.5rem;\n  gap: 2rem;\n  margin-left: 12%;\n}\n\nh2 {\n  width: 7rem;\n  margin-left: 3%;\n  font-weight: 700;\n}\n\nmain li {\n  display: flex;\n  flex-direction: column;\n  width: 12rem;\n  height: 20rem;\n  background-image: url(\"https://vignette.wikia.nocookie.net/yugioh/images/9/95/SlifertheSkyDragon-GBI-AE-Back.png/revision/latest/scale-to-width-down/328?cb=2010072608370\");\n  border-radius: 0% 0% 0% 0%/0% 0% 0% 0%;\n  color: white;\n  box-shadow: 20px 20px rgba(0, 0, 0, 0.15);\n  transition: all 0.4s ease;\n  align-content: center;\n  margin-bottom: 1rem;\n}\n\nmain li:hover {\n  border-radius: 0% 0% 50% 50%/0% 0% 5% 5%;\n  box-shadow: 10px 10px rgba(0, 0, 0, 0.25);\n}\n\n.image_holder {\n  align-self: center;\n  width: 100%;\n  height: 80%;\n}\n\n.card_image {\n  width: 100%;\n  height: 100%;\n}\n\n.card_image:hover {\n  -webkit-transition: transform 1.5s;\n  -webkit-transform-style: preserve-3d;\n}\n\n.card_details {\n  display: flex;\n  justify-content: space-between;\n}\n\n.likes-section {\n  width: 3rem;\n  font-size: 0.8rem;\n  margin: 0.5rem;\n}\n\n.fa-heart {\n  padding-left: 0.5rem;\n}\n\n.card_comments {\n  text-decoration: none;\n  border: 3px solid yellow;\n  color: transparent;\n  padding: 0.5rem 0.8rem;\n  font-size: 0.8rem;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 0.5s;\n  position: relative;\n  cursor: pointer;\n}\n\n.card_comments::before {\n  content: \"Comments\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: yellow;\n  background: #222222;\n  font-size: 28px;\n  top: 0;\n  left: 100%;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 1s;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform: scale(0) rotateY(0);\n  opacity: 0;\n}\n\n.card_comments:hover::before {\n  transform: scale(1) rotateY(360deg);\n  left: 0;\n  opacity: 1;\n}\n\n.card_comments::after {\n  content: \"Comments\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: yellow;\n  background: #222222;\n  font-size: 28px;\n  top: 0;\n  left: 0;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 1s;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform: scale(1) rotateY(0);\n  opacity: 1;\n}\n\n.card_comments:hover::after {\n  transform: scale(0) rotateY(360deg);\n  left: -100%;\n  opacity: 0;\n}\n\nheader,\nfooter {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  left: -2px;\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,yDAAA;AACF;;AAEA;;;EAGE,4BAAA;EACA,sBAAA;EACA,4BAAA;AACF;;AAEA;EACE,qBAAA;EACA,aAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,WAAA;EACA,4BAAA;EACA,YAAA;EACA,SAAA;EACA,gBAAA;AACF;;AAEA;EACE,eAAA;EACA,WAAA;EACA,4BAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AACF;;AAEA;EACE,qBAAA;EACA,YAAA;AACF;;AAEA;EACE,UAAA;AACF;;AAEA;EACE,kBAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;AACF;;AAEA;EACE,aAAA;EACA,sCAAA;EACA,iBAAA;EACA,SAAA;EACA,gBAAA;AACF;;AAEA;EACE,WAAA;EACA,eAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,2KAAA;EACA,sCAAA;EACA,YAAA;EACA,yCAAA;EACA,yBAAA;EACA,qBAAA;EACA,mBAAA;AACF;;AAEA;EACE,wCAAA;EACA,yCAAA;AACF;;AAEA;EACE,kBAAA;EACA,WAAA;EACA,WAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;AACF;;AAEA;EACE,kCAAA;EACA,oCAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;AACF;;AAEA;EACE,WAAA;EACA,iBAAA;EACA,cAAA;AACF;;AAEA;EACE,oBAAA;AACF;;AAEA;EACE,qBAAA;EACA,wBAAA;EACA,kBAAA;EACA,sBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,eAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,MAAA;EACA,UAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,8BAAA;EACA,UAAA;AACF;;AAEA;EACE,mCAAA;EACA,OAAA;EACA,UAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,8BAAA;EACA,UAAA;AACF;;AAEA;EACE,mCAAA;EACA,WAAA;EACA,UAAA;AACF;;AAEA;;EAEE,yDAAA;EACA,UAAA;EACA,YAAA;AACF","sourcesContent":["body {\r\n  background-image: url(../images/backy.jpg);\r\n}\r\n\r\nbody,\r\nheader,\r\nfooter {\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  display: flex;\r\n}\r\n\r\nnav {\r\n  margin-right: 5%;\r\n}\r\n\r\n.links {\r\n  margin: 0.5em;\r\n  white-space: nowrap;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: fixed;\r\n  z-index: 20;\r\n  background-color: whitesmoke;\r\n  width: 100vw;\r\n  top: -2px;\r\n  padding-left: 2%;\r\n}\r\n\r\nfooter {\r\n  position: fixed;\r\n  z-index: 20;\r\n  background-color: whitesmoke;\r\n  width: 100vw;\r\n  top: 92vh;\r\n  height: 8vh;\r\n  text-align: center;\r\n  padding-top: 1.5rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\na:hover {\r\n  color: red;\r\n}\r\n\r\nmain {\r\n  position: relative;\r\n  top: 95px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-bottom: 4rem;\r\n}\r\n\r\nmain ul {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  font-size: 0.5rem;\r\n  gap: 2rem;\r\n  margin-left: 12%;\r\n}\r\n\r\nh2 {\r\n  width: 7rem;\r\n  margin-left: 3%;\r\n  font-weight: 700;\r\n}\r\n\r\nmain li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 12rem;\r\n  height: 20rem;\r\n  background-image: url('https://vignette.wikia.nocookie.net/yugioh/images/9/95/SlifertheSkyDragon-GBI-AE-Back.png/revision/latest/scale-to-width-down/328?cb=2010072608370');\r\n  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;\r\n  color: white;\r\n  box-shadow: 20px 20px rgba(0, 0, 0, 0.15);\r\n  transition: all 0.4s ease;\r\n  align-content: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nmain li:hover {\r\n  border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;\r\n  box-shadow: 10px 10px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.image_holder {\r\n  align-self: center;\r\n  width: 100%;\r\n  height: 80%;\r\n}\r\n\r\n.card_image {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.card_image:hover {\r\n  -webkit-transition: transform 1.5s;\r\n  -webkit-transform-style: preserve-3d;\r\n}\r\n\r\n.card_details {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.likes-section {\r\n  width: 3rem;\r\n  font-size: 0.8rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\n.fa-heart {\r\n  padding-left: 0.5rem;\r\n}\r\n\r\n.card_comments {\r\n  text-decoration: none;\r\n  border: 3px solid yellow;\r\n  color: transparent;\r\n  padding: 0.5rem 0.8rem;\r\n  font-size: 0.8rem;\r\n  font-family: sans-serif;\r\n  letter-spacing: 5px;\r\n  transition: all 0.5s;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.card_comments::before {\r\n  content: \"Comments\";\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: yellow;\r\n  background: rgb(34, 34, 34);\r\n  font-size: 28px;\r\n  top: 0;\r\n  left: 100%;\r\n  font-family: sans-serif;\r\n  letter-spacing: 5px;\r\n  transition: all 1s;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  transform: scale(0) rotateY(0);\r\n  opacity: 0;\r\n}\r\n\r\n.card_comments:hover::before {\r\n  transform: scale(1) rotateY(360deg);\r\n  left: 0;\r\n  opacity: 1;\r\n}\r\n\r\n.card_comments::after {\r\n  content: \"Comments\";\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: yellow;\r\n  background: rgb(34, 34, 34);\r\n  font-size: 28px;\r\n  top: 0;\r\n  left: 0;\r\n  font-family: sans-serif;\r\n  letter-spacing: 5px;\r\n  transition: all 1s;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  transform: scale(1) rotateY(0);\r\n  opacity: 1;\r\n}\r\n\r\n.card_comments:hover::after {\r\n  transform: scale(0) rotateY(360deg);\r\n  left: -100%;\r\n  opacity: 0;\r\n}\r\n\r\nheader,\r\nfooter {\r\n  background-image: url(../images/backy2.jpg);\r\n  left: -2px;\r\n  color: white;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/modules/module1.js":
/*!********************************!*\
  !*** ./src/modules/module1.js ***!
  \********************************/
/***/ (() => {

/* eslint-disable no-plusplus */
const home = document.getElementById('home_link');

const LOCAL_STORAGE_LIST_KEY = 'card.list';
const cards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

const clearElement = ((element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
});

const save = (() => {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(cards));
});

home.addEventListener('click', () => {
  async function getCards() {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes');
    const allcards = await response.json();
    const cardData = allcards.data;
    cards.length = 0;
    cards.push(...cardData.slice(0, 12));
    save();
  }
  const result = getCards();
  return result;
});

const displayElements = (() => {
  const blueEyes = document.getElementById('card_list');
  clearElement(blueEyes);
  for (let i = 0; i < cards.length; i++) {
    const blueEye = document.getElementById('card_list');
    blueEye.innerHTML += `
        <li>
        <div class="image_holder"><img class="card_image" src="${cards[i].card_images[0].image_url_small}" alt=""></div>
        <div class="card_details"><h2 class"card_title">${cards[i].name}</h2>
        <div class="likes-section">
        <i class="far fa-heart"></i><br> 5 likes</div>
        </div>
        <button class="card_comments" >Comments</button>
        </li>`;
  }
  save();
});

displayElements();

/***/ }),

/***/ "./src/images/backy.jpg":
/*!******************************!*\
  !*** ./src/images/backy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e3dcbba831273fd0739f.jpg";

/***/ }),

/***/ "./src/images/backy2.jpg":
/*!*******************************!*\
  !*** ./src/images/backy2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_module1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/module1.js */ "./src/modules/module1.js");
/* harmony import */ var _modules_module1_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_module1_js__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/NzljZCIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL3NyYy9tb2R1bGVzL21vZHVsZTEuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja3kuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JhY2t5Mi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5LFxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5uYXYge1xcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXG59XFxuXFxuLmxpbmtzIHtcXG4gIG1hcmdpbjogMC41ZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDIwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHRvcDogLTJweDtcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAyMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0b3A6IDkydmg7XFxuICBoZWlnaHQ6IDh2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA5NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXG59XFxuXFxubWFpbiB1bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBmb250LXNpemU6IDAuNXJlbTtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxMiU7XFxufVxcblxcbmgyIHtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubWFpbiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMnJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L3l1Z2lvaC9pbWFnZXMvOS85NS9TbGlmZXJ0aGVTa3lEcmFnb24tR0JJLUFFLUJhY2sucG5nL3JldmlzaW9uL2xhdGVzdC9zY2FsZS10by13aWR0aC1kb3duLzMyOD9jYj0yMDEwMDcyNjA4MzcwXFxcIik7XFxuICBib3JkZXItcmFkaXVzOiAwJSAwJSAwJSAwJS8wJSAwJSAwJSAwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbm1haW4gbGk6aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMCUgMCUgNTAlIDUwJS8wJSAwJSA1JSA1JTtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4uaW1hZ2VfaG9sZGVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5jYXJkX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2FyZF9pbWFnZTpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjVzO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbn1cXG5cXG4uY2FyZF9kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5saWtlcy1zZWN0aW9uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuLmZhLWhlYXJ0IHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uY2FyZF9jb21tZW50cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IDNweCBzb2xpZCB5ZWxsb3c7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcmRfY29tbWVudHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiQ29tbWVudHNcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGVZKDApO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNhcmRfY29tbWVudHM6aG92ZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVkoMzYwZGVnKTtcXG4gIGxlZnQ6IDA7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2FyZF9jb21tZW50czo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIkNvbW1lbnRzXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogeWVsbG93O1xcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgwKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jYXJkX2NvbW1lbnRzOmhvdmVyOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZVkoMzYwZGVnKTtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgbGVmdDogLTJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5REFBQTtBQUNGOztBQUVBOzs7RUFHRSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyS0FBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7O0VBRUUseURBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9iYWNreS5qcGcpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzIHtcXHJcXG4gIG1hcmdpbjogMC41ZW07XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHRvcDogLTJweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAyMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICB0b3A6IDkydmg7XFxyXFxuICBoZWlnaHQ6IDh2aDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiA5NXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB1bCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICBmb250LXNpemU6IDAuNXJlbTtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMiU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHdpZHRoOiA3cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMnJlbTtcXHJcXG4gIGhlaWdodDogMjByZW07XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L3l1Z2lvaC9pbWFnZXMvOS85NS9TbGlmZXJ0aGVTa3lEcmFnb24tR0JJLUFFLUJhY2sucG5nL3JldmlzaW9uL2xhdGVzdC9zY2FsZS10by13aWR0aC1kb3duLzMyOD9jYj0yMDEwMDcyNjA4MzcwJyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwJSAwJSAwJSAwJSAvIDAlIDAlIDAlIDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBsaTpob3ZlciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwJSAwJSA1MCUgNTAlIC8gMCUgMCUgNSUgNSU7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlX2hvbGRlciB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfaW1hZ2U6aG92ZXIge1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS41cztcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtc2VjdGlvbiB7XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfY29tbWVudHMge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgeWVsbG93O1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX2NvbW1lbnRzOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIkNvbW1lbnRzXFxcIjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogeWVsbG93O1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGVZKDApO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfY29tbWVudHM6aG92ZXI6OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVkoMzYwZGVnKTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9jb21tZW50czo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIkNvbW1lbnRzXFxcIjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogeWVsbG93O1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVZKDApO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfY29tbWVudHM6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlWSgzNjBkZWcpO1xcclxcbiAgbGVmdDogLTEwMCU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIsXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvYmFja3kyLmpwZyk7XFxyXFxuICBsZWZ0OiAtMnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lX2xpbmsnKTtcblxuY29uc3QgTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSA9ICdjYXJkLmxpc3QnO1xuY29uc3QgY2FyZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVF9LRVkpKSB8fCBbXTtcblxuY29uc3QgY2xlYXJFbGVtZW50ID0gKChlbGVtZW50KSA9PiB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn0pO1xuXG5jb25zdCBzYXZlID0gKCgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSwgSlNPTi5zdHJpbmdpZnkoY2FyZHMpKTtcbn0pO1xuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBhc3luYyBmdW5jdGlvbiBnZXRDYXJkcygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2RiLnlnb3Byb2RlY2suY29tL2FwaS92Ny9jYXJkaW5mby5waHA/YXJjaGV0eXBlPUJsdWUtRXllcycpO1xuICAgIGNvbnN0IGFsbGNhcmRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGNhcmREYXRhID0gYWxsY2FyZHMuZGF0YTtcbiAgICBjYXJkcy5sZW5ndGggPSAwO1xuICAgIGNhcmRzLnB1c2goLi4uY2FyZERhdGEuc2xpY2UoMCwgMTIpKTtcbiAgICBzYXZlKCk7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gZ2V0Q2FyZHMoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5jb25zdCBkaXNwbGF5RWxlbWVudHMgPSAoKCkgPT4ge1xuICBjb25zdCBibHVlRXllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkX2xpc3QnKTtcbiAgY2xlYXJFbGVtZW50KGJsdWVFeWVzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGJsdWVFeWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZF9saXN0Jyk7XG4gICAgYmx1ZUV5ZS5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8bGk+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZV9ob2xkZXJcIj48aW1nIGNsYXNzPVwiY2FyZF9pbWFnZVwiIHNyYz1cIiR7Y2FyZHNbaV0uY2FyZF9pbWFnZXNbMF0uaW1hZ2VfdXJsX3NtYWxsfVwiIGFsdD1cIlwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9kZXRhaWxzXCI+PGgyIGNsYXNzXCJjYXJkX3RpdGxlXCI+JHtjYXJkc1tpXS5uYW1lfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlcy1zZWN0aW9uXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWhlYXJ0XCI+PC9pPjxicj4gNSBsaWtlczwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhcmRfY29tbWVudHNcIiA+Q29tbWVudHM8L2J1dHRvbj5cbiAgICAgICAgPC9saT5gO1xuICB9XG4gIHNhdmUoKTtcbn0pO1xuXG5kaXNwbGF5RWxlbWVudHMoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9tb2R1bGUxLmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=