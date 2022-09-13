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
exports.id = "pages/api/dranken";
exports.ids = ["pages/api/dranken"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Drank.js":
/*!*************************!*\
  !*** ./models/Drank.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst DrankSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true,\n        maxLength: 100\n    },\n    price: {\n        type: Number,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Drank) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Drank\", DrankSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvRHJhbmsuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFdBQVcsR0FBRyxJQUFJRCx3REFBZSxDQUFDO0lBQ3BDRyxLQUFLLEVBQUU7UUFDSEMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFNBQVMsRUFBRSxHQUFHO0tBQ2pCO0lBQ0RDLEtBQUssRUFBRTtRQUNISixJQUFJLEVBQUVLLE1BQU07UUFDWkgsUUFBUSxFQUFFLElBQUk7S0FDakI7Q0FDSixFQUFFO0lBQUVJLFVBQVUsRUFBRSxJQUFJO0NBQUUsQ0FBQztBQUV4QixpRUFBZVYsOERBQXFCLElBQUlBLHFEQUFjLENBQUMsT0FBTyxFQUFFQyxXQUFXLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9tb2RlbHMvRHJhbmsuanM/NjM3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgRHJhbmtTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1heExlbmd0aDogMTAwLFxyXG4gICAgfSxcclxuICAgIHByaWNlOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5EcmFuayB8fCBtb25nb29zZS5tb2RlbCgnRHJhbmsnLCBEcmFua1NjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiRHJhbmtTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsInByaWNlIiwiTnVtYmVyIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIkRyYW5rIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Drank.js\n");

/***/ }),

/***/ "(api)/./pages/api/dranken/index.js":
/*!************************************!*\
  !*** ./pages/api/dranken/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_mongo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mongo.js */ \"(api)/./utils/mongo.js\");\n/* harmony import */ var _models_Drank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Drank */ \"(api)/./models/Drank.js\");\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    (0,_utils_mongo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const dranken = await _models_Drank__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(dranken);\n        } catch (error) {\n            res.status(500).json({\n                message: error.message\n            });\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const drank = await _models_Drank__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(drank);\n        } catch (error1) {\n            res.status(500).json({\n                message: error1.message\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZHJhbmtlbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFDTjtBQUUzQixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU0sRUFBRUMsTUFBTSxHQUFFLEdBQUdGLEdBQUc7SUFFdEJILDJEQUFTLEVBQUUsQ0FBQztJQUVaLElBQUlLLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDbEIsSUFBSTtZQUNBLE1BQU1DLE9BQU8sR0FBRyxNQUFNTCwwREFBVSxFQUFFO1lBQ2xDRyxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxPQUFPLENBQUMsQ0FBQztTQUNqQyxDQUFDLE9BQU9JLEtBQUssRUFBRTtZQUNaTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxPQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FBTzthQUFFLENBQUMsQ0FBQztTQUNwRDtLQUNKO0lBQ0QsSUFBSU4sTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUNuQixJQUFJO1lBQ0EsTUFBTU8sS0FBSyxHQUFHLE1BQU1YLDREQUFZLENBQUNFLEdBQUcsQ0FBQ1csSUFBSSxDQUFDO1lBQzFDVixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQztTQUMvQixDQUFDLE9BQU9GLE1BQUssRUFBRTtZQUNaTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxPQUFPLEVBQUVELE1BQUssQ0FBQ0MsT0FBTzthQUFFLENBQUMsQ0FBQztTQUNwRDtLQUNKO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vcGFnZXMvYXBpL2RyYW5rZW4vaW5kZXguanM/MDdhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi91dGlscy9tb25nby5qc1wiO1xyXG5pbXBvcnQgRHJhbmsgZnJvbSBcIi4uLy4uLy4uL21vZGVscy9EcmFua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcclxuXHJcbiAgICBkYkNvbm5lY3QoKTtcclxuXHJcbiAgICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZHJhbmtlbiA9IGF3YWl0IERyYW5rLmZpbmQoKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZHJhbmtlbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChtZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZHJhbmsgPSBhd2FpdCBEcmFuay5jcmVhdGUocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihkcmFuayk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJEcmFuayIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkcmFua2VuIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJkcmFuayIsImNyZWF0ZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/dranken/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/dranken/index.js"));
module.exports = __webpack_exports__;

})();