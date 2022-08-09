"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/broodjes";
exports.ids = ["pages/api/broodjes"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Broodje.js":
/*!***************************!*\
  !*** ./models/Broodje.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst BroodjeSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true,\n        maxLength: 80\n    },\n    ingredients: {\n        type: [\n            String\n        ],\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    categorie: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Broodje) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Broodje\", BroodjeSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQnJvb2RqZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxHQUFHLElBQUlELHdEQUFlLENBQUM7SUFDdENHLEtBQUssRUFBRTtRQUNIQyxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsU0FBUyxFQUFFLEVBQUU7S0FDaEI7SUFDREMsV0FBVyxFQUFFO1FBQ1RKLElBQUksRUFBRTtZQUFDQyxNQUFNO1NBQUM7UUFDZEMsUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDREcsS0FBSyxFQUFFO1FBQ0hMLElBQUksRUFBRU0sTUFBTTtRQUNaSixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNESyxTQUFTLEVBQUU7UUFDUFAsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0NBQ0osRUFBRTtJQUFFTSxVQUFVLEVBQUUsSUFBSTtDQUFFLENBQUM7QUFFeEIsaUVBQWVaLGdFQUF1QixJQUFJQSxxREFBYyxDQUFDLFNBQVMsRUFBRUMsYUFBYSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbW9kZWxzL0Jyb29kamUuanM/NjFiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgQnJvb2RqZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWF4TGVuZ3RoOiA4MCxcclxuICAgIH0sXHJcbiAgICBpbmdyZWRpZW50czoge1xyXG4gICAgICAgIHR5cGU6IFtTdHJpbmddLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcHJpY2U6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yaWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH1cclxufSwgeyB0aW1lc3RhbXBzOiB0cnVlIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkJyb29kamUgfHwgbW9uZ29vc2UubW9kZWwoJ0Jyb29kamUnLCBCcm9vZGplU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJCcm9vZGplU2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJpbmdyZWRpZW50cyIsInByaWNlIiwiTnVtYmVyIiwiY2F0ZWdvcmllIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIkJyb29kamUiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Broodje.js\n");

/***/ }),

/***/ "(api)/./pages/api/broodjes/index.js":
/*!*************************************!*\
  !*** ./pages/api/broodjes/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_mongo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mongo.js */ \"(api)/./utils/mongo.js\");\n/* harmony import */ var _models_Broodje__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Broodje */ \"(api)/./models/Broodje.js\");\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    (0,_utils_mongo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const broodjes = await _models_Broodje__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(broodjes);\n        } catch (error) {\n            res.status(500).json({\n                message: error.message\n            });\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const broodje = await _models_Broodje__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(broodje);\n        } catch (error1) {\n            res.status(500).json({\n                message: error1.message\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYnJvb2RqZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEO0FBQ0Y7QUFFL0IsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHRixHQUFHO0lBRXRCSCwyREFBUyxFQUFFLENBQUM7SUFFWixJQUFJSyxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ2xCLElBQUk7WUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTUwsNERBQVksRUFBRTtZQUNyQ0csR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsUUFBUSxDQUFDLENBQUM7U0FDbEMsQ0FBQyxPQUFPSSxLQUFLLEVBQUU7WUFDWk4sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsT0FBTyxFQUFFRCxLQUFLLENBQUNDLE9BQU87YUFBRSxDQUFDLENBQUM7U0FDcEQ7S0FDSjtJQUNELElBQUlOLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDbkIsSUFBSTtZQUNBLE1BQU1PLE9BQU8sR0FBRyxNQUFNWCw4REFBYyxDQUFDRSxHQUFHLENBQUNXLElBQUksQ0FBQztZQUM5Q1YsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0csT0FBTyxDQUFDLENBQUM7U0FDakMsQ0FBQyxPQUFPRixNQUFLLEVBQUU7WUFDWk4sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsT0FBTyxFQUFFRCxNQUFLLENBQUNDLE9BQU87YUFBRSxDQUFDLENBQUM7U0FDcEQ7S0FDSjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3BhZ2VzL2FwaS9icm9vZGplcy9pbmRleC5qcz9mYzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL21vbmdvLmpzXCI7XHJcbmltcG9ydCBCcm9vZGplIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvQnJvb2RqZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcclxuXHJcbiAgICBkYkNvbm5lY3QoKTtcclxuXHJcbiAgICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYnJvb2RqZXMgPSBhd2FpdCBCcm9vZGplLmZpbmQoKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYnJvb2RqZXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJyb29kamUgPSBhd2FpdCBCcm9vZGplLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKGJyb29kamUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiQnJvb2RqZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJicm9vZGplcyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwiYnJvb2RqZSIsImNyZWF0ZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/broodjes/index.js\n");

/***/ }),

/***/ "(api)/./utils/mongo.js":
/*!************************!*\
  !*** ./utils/mongo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGO_URL;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\r\n * Global is used here to maintain a cached connection across hot reloads\r\n * in development. This prevents connections growing exponentially\r\n * during API Route usage.\r\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: true\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tb25nby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsV0FBVyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUztBQUV6QyxJQUFJLENBQUNILFdBQVcsRUFBRTtJQUNoQixNQUFNLElBQUlJLEtBQUssQ0FDYixzRUFBc0UsQ0FDdkU7Q0FDRjtBQUVEO0FBT0EsSUFBSSxDQUFDQyxNQUFNLEVBQUU7SUFDWEEsTUFBTSxHQUFHQyxNQUFNLENBQUNQLFFBQVEsR0FBRztRQUFFUSxJQUFJLEVBQUUsSUFBSTtRQUFFQyxPQUFPLEVBQUUsSUFBSTtLQUFFO0NBQ3pEO0FBRUQsZUFBZUM7SUFDYixJQUFJSixNQUFNLENBQUNFLElBQUksRUFBRTs7O0lBSWpCLElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxPQUFPLEVBQUU7UUFDbkIsTUFBTUUsSUFBSSxHQUFHO1lBQ1hDLGNBQWM7O1FBR2hCTixNQUFNLENBQUNHLE9BQU8sR0FBR1Q7WUFDZixPQUFPQTtTQUNSLENBQUM7S0FDSDtJQUNETSxNQUFNLENBQUNFLElBQUksR0FBRyxNQUFNRixDQUFBQSx1REFBYztJQUNsQyxPQUFPQSxNQUFNLENBQUNFLElBQUk7Q0FDbkI7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi91dGlscy9tb25nby5qcz83ZDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMXHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xyXG4gIClcclxufVxyXG5cclxuLyoqXHJcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcclxuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XHJcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXHJcbiAqL1xyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlXHJcblxyXG5pZiAoIWNhY2hlZCkge1xyXG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICBpZiAoY2FjaGVkLmNvbm4pIHtcclxuICAgIHJldHVybiBjYWNoZWQuY29ublxyXG4gIH1cclxuXHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgYnVmZmVyQ29tbWFuZHM6IHRydWUsXHJcbiAgICB9XHJcblxyXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gbW9uZ29vc2VcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2VcclxuICByZXR1cm4gY2FjaGVkLmNvbm5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/mongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/broodjes/index.js"));
module.exports = __webpack_exports__;

})();