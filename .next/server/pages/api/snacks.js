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
exports.id = "pages/api/snacks";
exports.ids = ["pages/api/snacks"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Snack.js":
/*!*************************!*\
  !*** ./models/Snack.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SnackSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true,\n        maxLength: 80\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    keuzeOpties: {\n        type: [\n            {\n                keuze: {\n                    type: String,\n                    required: true\n                }\n            }\n        ],\n        required: false\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Snack) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Snack\", SnackSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvU25hY2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFdBQVcsR0FBRyxJQUFJRCx3REFBZSxDQUFDO0lBQ3BDRyxLQUFLLEVBQUU7UUFDSEMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFNBQVMsRUFBRSxFQUFFO0tBQ2hCO0lBQ0RDLEtBQUssRUFBRTtRQUNISixJQUFJLEVBQUVLLE1BQU07UUFDWkgsUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDREksV0FBVyxFQUFFO1FBQ1ROLElBQUksRUFBRTtZQUFDO2dCQUFFTyxLQUFLLEVBQUU7b0JBQUVQLElBQUksRUFBRUMsTUFBTTtvQkFBRUMsUUFBUSxFQUFFLElBQUk7aUJBQUU7YUFBQztTQUFDO1FBQ2xEQSxRQUFRLEVBQUUsS0FBSztLQUNsQjtDQUNKLEVBQUU7SUFBRU0sVUFBVSxFQUFFLElBQUk7Q0FBRSxDQUFDO0FBRXhCLGlFQUFlWiw4REFBcUIsSUFBSUEscURBQWMsQ0FBQyxPQUFPLEVBQUVDLFdBQVcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL21vZGVscy9TbmFjay5qcz9mOTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBTbmFja1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWF4TGVuZ3RoOiA4MCxcclxuICAgIH0sXHJcbiAgICBwcmljZToge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGtldXplT3B0aWVzOiB7XHJcbiAgICAgICAgdHlwZTogW3sga2V1emU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9fV0sXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgICB9XHJcbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5TbmFjayB8fCBtb25nb29zZS5tb2RlbCgnU25hY2snLCBTbmFja1NjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU25hY2tTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsInByaWNlIiwiTnVtYmVyIiwia2V1emVPcHRpZXMiLCJrZXV6ZSIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJTbmFjayIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Snack.js\n");

/***/ }),

/***/ "(api)/./pages/api/snacks/index.js":
/*!***********************************!*\
  !*** ./pages/api/snacks/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_mongo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mongo.js */ \"(api)/./utils/mongo.js\");\n/* harmony import */ var _models_Snack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Snack */ \"(api)/./models/Snack.js\");\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    (0,_utils_mongo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const snacks = await _models_Snack__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(snacks);\n        } catch (error) {\n            res.status(500).json({\n                message: error.message\n            });\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const snack = await _models_Snack__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(snack);\n        } catch (error1) {\n            res.status(500).json({\n                message: error1.message\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc25hY2tzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRDtBQUNOO0FBRTNCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTSxFQUFFQyxNQUFNLEdBQUUsR0FBR0YsR0FBRztJQUV0QkgsMkRBQVMsRUFBRSxDQUFDO0lBRVosSUFBSUssTUFBTSxLQUFLLEtBQUssRUFBRTtRQUNsQixJQUFJO1lBQ0EsTUFBTUMsTUFBTSxHQUFHLE1BQU1MLDBEQUFVLEVBQUU7WUFDakNHLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILE1BQU0sQ0FBQyxDQUFDO1NBQ2hDLENBQUMsT0FBT0ksS0FBSyxFQUFFO1lBQ1pOLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVFLE9BQU8sRUFBRUQsS0FBSyxDQUFDQyxPQUFPO2FBQUUsQ0FBQyxDQUFDO1NBQ3BEO0tBQ0o7SUFDRCxJQUFJTixNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ25CLElBQUk7WUFDQSxNQUFNTyxLQUFLLEdBQUcsTUFBTVgsNERBQVksQ0FBQ0UsR0FBRyxDQUFDVyxJQUFJLENBQUM7WUFDMUNWLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDO1NBQy9CLENBQUMsT0FBT0YsTUFBSyxFQUFFO1lBQ1pOLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVFLE9BQU8sRUFBRUQsTUFBSyxDQUFDQyxPQUFPO2FBQUUsQ0FBQyxDQUFDO1NBQ3BEO0tBQ0o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9wYWdlcy9hcGkvc25hY2tzL2luZGV4LmpzPzY2NzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbW9uZ28uanNcIjtcclxuaW1wb3J0IFNuYWNrIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvU25hY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcblxyXG4gICAgZGJDb25uZWN0KCk7XHJcblxyXG4gICAgaWYgKG1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNuYWNrcyA9IGF3YWl0IFNuYWNrLmZpbmQoKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oc25hY2tzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzbmFjayA9IGF3YWl0IFNuYWNrLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHNuYWNrKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlNuYWNrIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNuYWNrcyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwic25hY2siLCJjcmVhdGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/snacks/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/snacks/index.js"));
module.exports = __webpack_exports__;

})();