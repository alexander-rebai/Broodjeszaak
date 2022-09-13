"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./components/OrderDetails.jsx":
/*!*************************************!*\
  !*** ./components/OrderDetails.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/OrderDetail.module.css */ \"./styles/OrderDetail.module.css\");\n/* harmony import */ var _styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar OrderDetails = function(param) {\n    var total = param.total, createOrder = param.createOrder, products = param.products, saladItems = param.saladItems;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), customer = ref[0], setCustomer = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), phone = ref1[0], setPhone = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), comment = ref2[0], setComment = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref3[0], setData = ref3[1];\n    var createDates = function() {\n        var dates = [];\n        for(var index = 0; index < 7; index++){\n            var today = new Date();\n            var date = new Date(today);\n            if (date.getHours > 9) {\n                date = date.getDate() + 1;\n            }\n            date.setDate(date.getDate() + index);\n            var dag = void 0;\n            var dateString = void 0;\n            switch(date.getDay()){\n                case 1:\n                    break;\n                case 2:\n                    dag = \"Dinsdag\";\n                    dateString = dag + \" \" + date.getDate() + \"/\" + date.getMonth() + \"/\" + date.getFullYear();\n                    dates.push(dateString);\n                    break;\n                case 3:\n                    dag = \"Woensdag\";\n                    dateString = dag + \" \" + date.getDate() + \"/\" + date.getMonth() + \"/\" + date.getFullYear();\n                    dates.push(dateString);\n                    break;\n                case 4:\n                    dag = \"Donderdag\";\n                    dateString = dag + \" \" + date.getDate() + \"/\" + date.getMonth() + \"/\" + date.getFullYear();\n                    dates.push(dateString);\n                    break;\n                case 5:\n                    dag = \"Vrijdag\";\n                    dateString = dag + \" \" + date.getDate() + \"/\" + date.getMonth() + \"/\" + date.getFullYear();\n                    dates.push(dateString);\n                    break;\n                case 6:\n                    dag = \"Zaterdag\";\n                    dateString = dag + \" \" + date.getDate() + \"/\" + date.getMonth() + \"/\" + date.getFullYear();\n                    dates.push(dateString);\n                    break;\n                case 0:\n                    break;\n            }\n        }\n        console.log(dates);\n        setData(dates);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        createDates();\n    }, []);\n    var handleClick = function() {\n        var ophaalDatum = document.getElementById(\"dates\").value;\n        console.log(ophaalDatum);\n        createOrder({\n            customer: customer,\n            phone: phone,\n            total: total,\n            paymentMethod: 0,\n            products: products,\n            saladItems: saladItems,\n            comment: comment,\n            ophaalDatum: ophaalDatum\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                    children: [\n                        \"Het te betalen bedrag bedraagt €\",\n                        total.toFixed(2),\n                        \" bij AFHALING.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"Naam\"\n                        }, void 0, false, {\n                            fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Peter de Vries\",\n                            type: \"text\",\n                            className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                            onChange: function(e) {\n                                return setCustomer(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"Telefoonnummer\"\n                        }, void 0, false, {\n                            fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"+32 123 345 678\",\n                            type: \"text\",\n                            className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                            onChange: function(e) {\n                                return setPhone(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"Datum van ophalen\"\n                        }, void 0, false, {\n                            fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            id: \"dates\",\n                            className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                            children: data.map(function(date, i) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: date,\n                                    children: date\n                                }, i, false, {\n                                    fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"Opmerking\"\n                        }, void 0, false, {\n                            fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                            lineNumber: 144,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Gewenste saus, ophaaluur, etc.\",\n                            type: \"textarea\",\n                            className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                            onChange: function(e) {\n                                return setComment(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                            lineNumber: 145,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_OrderDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                    onClick: handleClick,\n                    children: \"BESTEL NU!\"\n                }, void 0, false, {\n                    fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n                    lineNumber: 152,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n            lineNumber: 113,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/alexander/Programming/React/Broodjeszaak/components/OrderDetails.jsx\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, _this);\n};\n_s(OrderDetails, \"vPAlgBMwABSdXfe9AP0oQuyc3to=\");\n_c = OrderDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderDetails);\nvar _c;\n$RefreshReg$(_c, \"OrderDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUpLOUIsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBNEpsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvT3JkZXJEZXRhaWxzLmpzeD8yZmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9PcmRlckRldGFpbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBPcmRlckRldGFpbHMgPSAoeyB0b3RhbCwgY3JlYXRlT3JkZXIsIHByb2R1Y3RzLCBzYWxhZEl0ZW1zIH0pID0+IHtcclxuICBjb25zdCBbY3VzdG9tZXIsIHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBjcmVhdGVEYXRlcyA9ICgpID0+IHtcclxuICAgIGxldCBkYXRlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDc7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodG9kYXkpO1xyXG4gICAgICBpZiAoZGF0ZS5nZXRIb3VycyA+IDkpIHtcclxuICAgICAgICBkYXRlID0gZGF0ZS5nZXREYXRlKCkgKyAxO1xyXG4gICAgICB9XHJcbiAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGluZGV4KTtcclxuICAgICAgbGV0IGRhZztcclxuICAgICAgbGV0IGRhdGVTdHJpbmc7XHJcbiAgICAgIHN3aXRjaCAoZGF0ZS5nZXREYXkoKSkge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIGRhZyA9IFwiRGluc2RhZ1wiO1xyXG4gICAgICAgICAgZGF0ZVN0cmluZyA9XHJcbiAgICAgICAgICAgIGRhZyArXHJcbiAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgZGF0ZS5nZXREYXRlKCkgK1xyXG4gICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgIGRhdGUuZ2V0TW9udGgoKSArXHJcbiAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgZGF0ZXMucHVzaChkYXRlU3RyaW5nKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIGRhZyA9IFwiV29lbnNkYWdcIjtcclxuICAgICAgICAgIGRhdGVTdHJpbmcgPVxyXG4gICAgICAgICAgICBkYWcgK1xyXG4gICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgIGRhdGUuZ2V0RGF0ZSgpICtcclxuICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICBkYXRlLmdldE1vbnRoKCkgK1xyXG4gICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgIGRhdGVzLnB1c2goZGF0ZVN0cmluZyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICBkYWcgPSBcIkRvbmRlcmRhZ1wiO1xyXG4gICAgICAgICAgZGF0ZVN0cmluZyA9XHJcbiAgICAgICAgICAgIGRhZyArXHJcbiAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgZGF0ZS5nZXREYXRlKCkgK1xyXG4gICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgIGRhdGUuZ2V0TW9udGgoKSArXHJcbiAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgZGF0ZXMucHVzaChkYXRlU3RyaW5nKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgIGRhZyA9IFwiVnJpamRhZ1wiO1xyXG4gICAgICAgICAgZGF0ZVN0cmluZyA9XHJcbiAgICAgICAgICAgIGRhZyArXHJcbiAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgZGF0ZS5nZXREYXRlKCkgK1xyXG4gICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgIGRhdGUuZ2V0TW9udGgoKSArXHJcbiAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgZGF0ZXMucHVzaChkYXRlU3RyaW5nKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIGRhZyA9IFwiWmF0ZXJkYWdcIjtcclxuICAgICAgICAgIGRhdGVTdHJpbmcgPVxyXG4gICAgICAgICAgICBkYWcgK1xyXG4gICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgIGRhdGUuZ2V0RGF0ZSgpICtcclxuICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICBkYXRlLmdldE1vbnRoKCkgK1xyXG4gICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgIGRhdGVzLnB1c2goZGF0ZVN0cmluZyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0ZXMpO1xyXG4gICAgc2V0RGF0YShkYXRlcyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNyZWF0ZURhdGVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGNvbnN0IG9waGFhbERhdHVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlc1wiKS52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKG9waGFhbERhdHVtKTtcclxuICAgIGNyZWF0ZU9yZGVyKHtcclxuICAgICAgY3VzdG9tZXIsXHJcbiAgICAgIHBob25lLFxyXG4gICAgICB0b3RhbCxcclxuICAgICAgcGF5bWVudE1ldGhvZDogMCxcclxuICAgICAgcHJvZHVjdHMsXHJcbiAgICAgIHNhbGFkSXRlbXMsXHJcbiAgICAgIGNvbW1lbnQsXHJcbiAgICAgIG9waGFhbERhdHVtLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIEhldCB0ZSBiZXRhbGVuIGJlZHJhZyBiZWRyYWFndCDigqx7dG90YWwudG9GaXhlZCgyKX0gYmlqIEFGSEFMSU5HLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9Pk5hYW08L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGV0ZXIgZGUgVnJpZXNcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1c3RvbWVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+VGVsZWZvb25udW1tZXI8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKzMyIDEyMyAzNDUgNjc4XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PkRhdHVtIHZhbiBvcGhhbGVuPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJkYXRlc1wiIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgICAge2RhdGEubWFwKChkYXRlLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtkYXRlfT57ZGF0ZX08L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5PcG1lcmtpbmc8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiR2V3ZW5zdGUgc2F1cywgb3BoYWFsdXVyLCBldGMuXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICBCRVNURUwgTlUhXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyRGV0YWlscztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJPcmRlckRldGFpbHMiLCJ0b3RhbCIsImNyZWF0ZU9yZGVyIiwicHJvZHVjdHMiLCJzYWxhZEl0ZW1zIiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsInBob25lIiwic2V0UGhvbmUiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsImRhdGEiLCJzZXREYXRhIiwiY3JlYXRlRGF0ZXMiLCJkYXRlcyIsImluZGV4IiwidG9kYXkiLCJEYXRlIiwiZGF0ZSIsImdldEhvdXJzIiwiZ2V0RGF0ZSIsInNldERhdGUiLCJkYWciLCJkYXRlU3RyaW5nIiwiZ2V0RGF5IiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJvcGhhYWxEYXR1bSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInBheW1lbnRNZXRob2QiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwidGl0bGUiLCJ0b0ZpeGVkIiwiaXRlbSIsImxhYmVsIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzZWxlY3QiLCJpZCIsIm1hcCIsImkiLCJvcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/OrderDetails.jsx\n"));

/***/ })

});