"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Featured.jsx":
/*!*********************************!*\
  !*** ./components/Featured.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Featured.module.css */ \"./styles/Featured.module.css\");\n/* harmony import */ var _styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Featured = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), index = ref[0], setIndex = ref[1];\n    var images = [\n        \"/img/foto1.png\",\n        \"/img/foto2.png\",\n        \"/img/foto3.png\",\n        \"/img/broodmand1.png\",\n        \"/img/broodmand2.png\", \n    ];\n    var handleArrow = function(direction) {\n        if (direction === \"l\") {\n            setIndex(index !== 0 ? index - 1 : 4);\n        }\n        if (direction === \"r\") {\n            setIndex(index !== 4 ? index + 1 : 0);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrowContainer),\n                style: {\n                    left: 0\n                },\n                onClick: function() {\n                    return handleArrow(\"l\");\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/img/arrowl.png\",\n                    alt: \"\",\n                    layout: \"fill\",\n                    objectFit: \"contain\"\n                }, void 0, false, {\n                    fileName: \"/home/alexander/Programming/Priv\\xe9/WebApps/Broodjeszaak_NEXT.JS/components/Featured.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/alexander/Programming/Priv\\xe9/WebApps/Broodjeszaak_NEXT.JS/components/Featured.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n                style: {\n                    transform: \"translateX(\".concat(-100 * index, \"vw)\")\n                },\n                children: images.map(function(img, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgContainer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: img,\n                            alt: \"\",\n                            layout: \"fill\",\n                            objectFit: \"contain\"\n                        }, void 0, false, {\n                            fileName: \"/home/alexander/Programming/Priv\\xe9/WebApps/Broodjeszaak_NEXT.JS/components/Featured.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, _this)\n                    }, i, false, {\n                        fileName: \"/home/alexander/Programming/Priv\\xe9/WebApps/Broodjeszaak_NEXT.JS/components/Featured.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/alexander/Programming/Priv\\xe9/WebApps/Broodjeszaak_NEXT.JS/components/Featured.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrowContainer),\n                style: {\n                    right: 0\n                },\n                onClick: function() {\n                    return handleArrow(\"r\");\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/img/arrowr.png\",\n                    layout: \"fill\",\n                    alt: \"\",\n                    objectFit: \"contain\"\n                }, void 0, false, {\n                    fileName: \"/home/alexander/Programming/Priv\\xe9/WebApps/Broodjeszaak_NEXT.JS/components/Featured.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/alexander/Programming/Priv\\xe9/WebApps/Broodjeszaak_NEXT.JS/components/Featured.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/alexander/Programming/Priv\\xe9/WebApps/Broodjeszaak_NEXT.JS/components/Featured.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(Featured, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Featured;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Featured);\nvar _c;\n$RefreshReg$(_c, \"Featured\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmVkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7O0FBQW1EO0FBQ3BCO0FBQ0U7QUFFakMsSUFBTUcsUUFBUSxHQUFHLFdBQU07O0lBQ3JCLElBQTBCRCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTlCRSxLQUFLLEdBQWNGLEdBQVcsR0FBekIsRUFBRUcsUUFBUSxHQUFJSCxHQUFXLEdBQWY7SUFDdEIsSUFBTUksTUFBTSxHQUFHO1FBQ2IsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLHFCQUFxQjtLQUN0QjtJQUVELElBQU1DLFdBQVcsR0FBRyxTQUFDQyxTQUFTLEVBQUk7UUFDOUIsSUFBR0EsU0FBUyxLQUFHLEdBQUcsRUFBQztZQUNmSCxRQUFRLENBQUNELEtBQUssS0FBSyxDQUFDLEdBQUdBLEtBQUssR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBR0ksU0FBUyxLQUFHLEdBQUcsRUFBQztZQUNmSCxRQUFRLENBQUNELEtBQUssS0FBSyxDQUFDLEdBQUdBLEtBQUssR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0o7SUFFRCxxQkFDRSw4REFBQ0ssS0FBRztRQUFDQyxTQUFTLEVBQUVWLDhFQUFnQjs7MEJBQzlCLDhEQUFDUyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVWLG1GQUFxQjtnQkFBRWEsS0FBSyxFQUFFO29CQUFFQyxJQUFJLEVBQUUsQ0FBQztpQkFBRTtnQkFBRUMsT0FBTyxFQUFFOzJCQUFJUixXQUFXLENBQUMsR0FBRyxDQUFDO2lCQUFBOzBCQUN0Riw0RUFBQ04sbURBQUs7b0JBQUNlLEdBQUcsRUFBQyxpQkFBaUI7b0JBQUNDLEdBQUcsRUFBQyxFQUFFO29CQUFDQyxNQUFNLEVBQUMsTUFBTTtvQkFBQ0MsU0FBUyxFQUFDLFNBQVM7Ozs7O3lCQUFFOzs7OztxQkFDbkU7MEJBQ04sOERBQUNWLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVYsNEVBQWM7Z0JBQUVhLEtBQUssRUFBRTtvQkFBQ1EsU0FBUyxFQUFDLGFBQVksQ0FBYSxNQUFHLENBQWQsQ0FBQyxHQUFHLEdBQUNqQixLQUFLLEVBQUMsS0FBRyxDQUFDO2lCQUFDOzBCQUM3RUUsTUFBTSxDQUFDZ0IsR0FBRyxDQUFDLFNBQUNDLEdBQUcsRUFBRUMsQ0FBQzt5Q0FDakIsOERBQUNmLEtBQUc7d0JBQUNDLFNBQVMsRUFBRVYsaUZBQW1CO2tDQUNqQyw0RUFBQ0MsbURBQUs7NEJBQUNlLEdBQUcsRUFBRU8sR0FBRzs0QkFBRU4sR0FBRyxFQUFDLEVBQUU7NEJBQUNDLE1BQU0sRUFBQyxNQUFNOzRCQUFDQyxTQUFTLEVBQUMsU0FBUzs7Ozs7aUNBQUc7dUJBRHBCSyxDQUFDOzs7OzZCQUVyQztpQkFDUCxDQUFDOzs7OztxQkFDRTswQkFDTiw4REFBQ2YsS0FBRztnQkFBQ0MsU0FBUyxFQUFFVixtRkFBcUI7Z0JBQUVhLEtBQUssRUFBRTtvQkFBRWEsS0FBSyxFQUFFLENBQUM7aUJBQUU7Z0JBQUVYLE9BQU8sRUFBRTsyQkFBSVIsV0FBVyxDQUFDLEdBQUcsQ0FBQztpQkFBQTswQkFDdkYsNEVBQUNOLG1EQUFLO29CQUFDZSxHQUFHLEVBQUMsaUJBQWlCO29CQUFDRSxNQUFNLEVBQUMsTUFBTTtvQkFBQ0QsR0FBRyxFQUFDLEVBQUU7b0JBQUNFLFNBQVMsRUFBQyxTQUFTOzs7Ozt5QkFBRTs7Ozs7cUJBQ25FOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FwQ0toQixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFzQ2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZlYXR1cmVkLmpzeD81NjllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9GZWF0dXJlZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRmVhdHVyZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICBcIi9pbWcvZm90bzEucG5nXCIsXHJcbiAgICBcIi9pbWcvZm90bzIucG5nXCIsXHJcbiAgICBcIi9pbWcvZm90bzMucG5nXCIsXHJcbiAgICBcIi9pbWcvYnJvb2RtYW5kMS5wbmdcIixcclxuICAgIFwiL2ltZy9icm9vZG1hbmQyLnBuZ1wiLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFycm93ID0gKGRpcmVjdGlvbikgPT57XHJcbiAgICAgIGlmKGRpcmVjdGlvbj09PVwibFwiKXtcclxuICAgICAgICAgIHNldEluZGV4KGluZGV4ICE9PSAwID8gaW5kZXgtMSA6IDQpXHJcbiAgICAgIH1cclxuICAgICAgaWYoZGlyZWN0aW9uPT09XCJyXCIpe1xyXG4gICAgICAgICAgc2V0SW5kZXgoaW5kZXggIT09IDQgPyBpbmRleCsxIDogMClcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd0NvbnRhaW5lcn0gc3R5bGU9e3sgbGVmdDogMCB9fSBvbkNsaWNrPXsoKT0+aGFuZGxlQXJyb3coXCJsXCIpfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcnJvd2wucG5nXCIgYWx0PVwiXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvbnRhaW5cIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9IHN0eWxlPXt7dHJhbnNmb3JtOmB0cmFuc2xhdGVYKCR7LTEwMCppbmRleH12dylgfX0+XHJcbiAgICAgICAge2ltYWdlcy5tYXAoKGltZywgaSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdDb250YWluZXJ9IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltZ30gYWx0PVwiXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycm93Q29udGFpbmVyfSBzdHlsZT17eyByaWdodDogMCB9fSBvbkNsaWNrPXsoKT0+aGFuZGxlQXJyb3coXCJyXCIpfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcnJvd3IucG5nXCIgbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIG9iamVjdEZpdD1cImNvbnRhaW5cIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIkZlYXR1cmVkIiwiaW5kZXgiLCJzZXRJbmRleCIsImltYWdlcyIsImhhbmRsZUFycm93IiwiZGlyZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiYXJyb3dDb250YWluZXIiLCJzdHlsZSIsImxlZnQiLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0Iiwid3JhcHBlciIsInRyYW5zZm9ybSIsIm1hcCIsImltZyIsImkiLCJpbWdDb250YWluZXIiLCJyaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Featured.jsx\n"));

/***/ })

});