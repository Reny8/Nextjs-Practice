"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/snippets/[selected]/page",{

/***/ "(app-pages-browser)/./src/components/SnippetActions.tsx":
/*!*******************************************!*\
  !*** ./src/components/SnippetActions.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SnippetActions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction SnippetActions(props) {\n    const handleDeleteClick = async (id)=>{\n        console.log(\"delete\", id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"actions-box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Edit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    var _props_snip;\n                    return handleDeleteClick(((_props_snip = props.snip) === null || _props_snip === void 0 ? void 0 : _props_snip.id) || 0);\n                },\n                children: \"Delete\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = SnippetActions;\nvar _c;\n$RefreshReg$(_c, \"SnippetActions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NuaXBwZXRBY3Rpb25zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFRZSxTQUFTQSxlQUFlQyxLQUd0QztJQUNDLE1BQU1DLG9CQUFvQixPQUFPQztRQUMvQkMsUUFBUUMsR0FBRyxDQUFDLFVBQVVGO0lBQ3hCO0lBQ0EscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBTzs7Ozs7OzBCQUNSLDhEQUFDQTtnQkFBT0MsU0FBUzt3QkFBd0JSOzJCQUFsQkMsa0JBQWtCRCxFQUFBQSxjQUFBQSxNQUFNUyxJQUFJLGNBQVZULGtDQUFBQSxZQUFZRSxFQUFFLEtBQUk7OzBCQUFJOzs7Ozs7Ozs7Ozs7QUFLckU7S0Fmd0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NuaXBwZXRBY3Rpb25zLnRzeD82NWIwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIFNuaXBwZXQge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb2RlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNuaXBwZXRBY3Rpb25zKHByb3BzOiB7XHJcbiAgc25pcDogU25pcHBldCB8IHVuZGVmaW5lZCB8IG51bGw7XHJcbiAgaGFuZGxlRGVsZXRlQ2xpY2s6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xyXG59KSB7XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xpY2sgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJkZWxldGVcIiwgaWQpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9ucy1ib3hcIj5cclxuICAgICAgPGJ1dHRvbj5FZGl0PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlQ2xpY2socHJvcHMuc25pcD8uaWQgfHwgMCl9PlxyXG4gICAgICAgIERlbGV0ZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlNuaXBwZXRBY3Rpb25zIiwicHJvcHMiLCJoYW5kbGVEZWxldGVDbGljayIsImlkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzbmlwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SnippetActions.tsx\n"));

/***/ })

});