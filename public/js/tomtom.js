/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@tomtom-international/web-sdk-maps/dist/maps.min.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tomtom-international/web-sdk-maps/dist/maps.min.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//# sourceMappingURL=maps.min.js.map

/***/ }),

/***/ "./node_modules/@tomtom-international/web-sdk-plugin-pancontrols/dist/PanControls.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@tomtom-international/web-sdk-plugin-pancontrols/dist/PanControls.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){if(true)module.exports=n();else { var o, e; }}(self,(function(){return function(){"use strict";var t={d:function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n+"../../../"}();var n={};t.d(n,{default:function(){return s}});t.p;function e(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==e.return||e.return()}finally{if(c)throw a}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function i(t){var n,o=!1,i=e(document.styleSheets);try{for(i.s();!(n=i.n()).done;){var r=n.value.href;if(r&&-1!==r.indexOf(t)){o=!0;break}}}catch(t){i.e(t)}finally{i.f()}o||console.warn('It seems that you forgot to add "'.concat(t,'" to your page, that is ')+"why some information might not be visible on your map. You can find the missing asset on our Downloads page: https://developer.tomtom.com/maps-sdk-web-js/downloads")}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var s=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.className,o=void 0===e?"":e,i=n.panOffset,a=void 0===i?100:i,s=n.cssStyleCheck,c=void 0===s||s;r(this,t),this.className=o,this.panOffset=a,this.cssStyleCheck=c,this._onPanClick=this._onPanClick.bind(this),this._createPanControls=this._createPanControls.bind(this),this._bindEvents.bind(this)}var n,o,s;return n=t,(o=[{key:"onAdd",value:function(t){return this.cssStyleCheck&&function(t){var n,o=e(t);try{for(o.s();!(n=o.n()).done;)i(n.value)}catch(t){o.e(t)}finally{o.f()}}(["PanControls.css"]),this._map=t,this._container=document.createElement("div"),this._container.className="mapboxgl-ctrl tt-ctrl",this._container.appendChild(this._createPanControls("tt-pan-controls ".concat(this.className))),this._bindEvents(),this._container}},{key:"onRemove",value:function(){this._unbindEvents(),this._container.parentNode.removeChild(this._container),this._map=void 0}},{key:"_bindEvents",value:function(){this._onPanClickTop=this._onPanClick.bind(this,"top"),this._onPanClickRight=this._onPanClick.bind(this,"right"),this._onPanClickBottom=this._onPanClick.bind(this,"bottom"),this._onPanClickLeft=this._onPanClick.bind(this,"left"),this._panButtonTop.addEventListener("click",this._onPanClickTop),this._panButtonRight.addEventListener("click",this._onPanClickRight),this._panButtonBottom.addEventListener("click",this._onPanClickBottom),this._panButtonLeft.addEventListener("click",this._onPanClickLeft)}},{key:"_unbindEvents",value:function(){this._panButtonTop.removeEventListener("click",this._onPanClickTop),this._panButtonRight.removeEventListener("click",this._onPanClickRight),this._panButtonBottom.removeEventListener("click",this._onPanClickBottom),this._panButtonLeft.removeEventListener("click",this._onPanClickLeft)}},{key:"_onPanClick",value:function(t){var n;switch(t){case"top":n=[0,this.panOffset];break;case"right":n=[-this.panOffset,0];break;case"bottom":n=[0,-this.panOffset];break;case"left":n=[this.panOffset,0]}this._map.easeTo({center:this._map.getCenter(),offset:n})}},{key:"_createPanControls",value:function(t){var n=document.createElement("div");return n.className=t,this._panButtonTop=this._createPanButton({type:"top"}),this._panButtonRight=this._createPanButton({type:"right"}),this._panButtonBottom=this._createPanButton({type:"bottom"}),this._panButtonLeft=this._createPanButton({type:"left"}),n.appendChild(this._panButtonTop),n.appendChild(this._panButtonRight),n.appendChild(this._panButtonBottom),n.appendChild(this._panButtonLeft),n}},{key:"_createPanButton",value:function(t){var n=t.type,e=document.createElement("button"),o="tt-pan-button--".concat(n);return e.classList.add("tt-pan-button"),e.classList.add(o),e}}])&&a(n.prototype,o),s&&a(n,s),t}();return n=n.default}()}));

/***/ }),

/***/ "./resources/js/tomtom.js":
/*!********************************!*\
  !*** ./resources/js/tomtom.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tomtom-international/web-sdk-maps */ "./node_modules/@tomtom-international/web-sdk-maps/dist/maps.min.js");
/* harmony import */ var _tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tomtom_international_web_sdk_plugin_pancontrols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tomtom-international/web-sdk-plugin-pancontrols */ "./node_modules/@tomtom-international/web-sdk-plugin-pancontrols/dist/PanControls.js");
/* harmony import */ var _tomtom_international_web_sdk_plugin_pancontrols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tomtom_international_web_sdk_plugin_pancontrols__WEBPACK_IMPORTED_MODULE_1__);
// SDK
 // import tt from '@tomtom-international/web-sdk-services';
// PanControl

 // ZoomControl
// import ZoomControls from '@tomtom-international/web-sdk-plugin-zoomcontrols';
// prendo lat e lng da hidden p in show

var mylat = document.getElementById("lat").innerHTML; // document.getElementById("lat").innerHTML = mylat.replace(/<[^>]*>/g, "");
// console.log(mylat);

var mylng = document.getElementById("lng").innerHTML; // document.getElementById("lng").innerHTML = mylng.replace(/<[^>]*>/g, "");
// console.log(mylng);

var APIKEY = 'cYIXTXUp7yVKyDMAcyRlG3xxdxXtmotj';
var point = {
  lat: mylat,
  lng: mylng
}; // mappa

var map = _tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0___default.a.map({
  key: APIKEY,
  container: 'mymap',
  center: point,
  zoom: 14
}); // panControl

var ttPanControls = new _tomtom_international_web_sdk_plugin_pancontrols__WEBPACK_IMPORTED_MODULE_1___default.a({
  className: 'my-class-name',
  // default = ''
  panOffset: 100 // default = 100

}); // navigation controller

var nav = new _tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0___default.a.NavigationControl({
  showCompass: true
});
map.addControl(new _tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0___default.a.FullscreenControl());
map.addControl(nav);
map.addControl(ttPanControls, 'top-left'); // -------------
// marker ---- basta addTo() per aggiungerlo a alla mappa

var customMarker = document.createElement('div');
customMarker.className = 'marker';
var marker = new _tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0___default.a.Marker({
  element: customMarker
}).setLngLat(point).addTo(map); // popup offset

var popupOffsets = {
  top: [0, 0],
  bottom: [0, -70],
  'bottom-right': [0, -70],
  'bottom-left': [0, -70],
  left: [25, -35],
  right: [-25, -35]
}; // popup ---- basta marker.setPopup(popup)

var popup = new _tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0___default.a.Popup({
  offset: popupOffsets
}).setHTML("<strong>".concat(mylat, "</strong> <br> <strong>").concat(mylng, "</strong> "));
marker.setPopup(popup); // setDomContent
// function flyTo->new point

/*
var moveMap = function (lgnlat)
{
    map.flyTo({
        center: lgnlat,
        zoom: 18
    });
};
*/

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/tomtom.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alessandro\Desktop\BoolBnB\BoolBnb\resources\js\tomtom.js */"./resources/js/tomtom.js");


/***/ })

/******/ });