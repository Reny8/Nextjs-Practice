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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SnippetActions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction SnippetActions(props) {\n    var _props_snip, _props_snip1;\n    _s();\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [editedFields, setEditedFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: ((_props_snip = props.snip) === null || _props_snip === void 0 ? void 0 : _props_snip.title) || \"\",\n        code: ((_props_snip1 = props.snip) === null || _props_snip1 === void 0 ? void 0 : _props_snip1.code) || \"\"\n    });\n    const handleEditToggle = ()=>{\n        setIsEditing(!isEditing);\n    };\n    const handleSaveClick = ()=>{\n        var _props_snip;\n        props.handleEditClick(((_props_snip = props.snip) === null || _props_snip === void 0 ? void 0 : _props_snip.id) || 0, editedFields);\n        setIsEditing(false);\n    };\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setEditedFields((prevFields)=>({\n                ...prevFields,\n                [name]: value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"selected-nav\",\n                children: [\n                    !isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: editedFields.title || \"Not Found\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"title\",\n                        value: editedFields.title,\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"actions-box\",\n                        children: isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleEditToggle,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSaveClick,\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/snippets\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \"Back\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleEditToggle,\n                                    children: \"Edit\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>{\n                                        var _props_snip;\n                                        return props.handleDeleteClick(((_props_snip = props.snip) === null || _props_snip === void 0 ? void 0 : _props_snip.id) || 0);\n                                    },\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"code-display\",\n                children: !isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                    children: editedFields.code || \"Not Found\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    className: \"code\",\n                    name: \"code\",\n                    value: editedFields.code,\n                    onChange: handleInputChange\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rreyes\\\\Desktop\\\\Nextjs-Practice\\\\snippets\\\\src\\\\components\\\\SnippetActions.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SnippetActions, \"82xXc0EQY4ypcoW1o5h5nbm3Bxs=\");\n_c = SnippetActions;\nvar _c;\n$RefreshReg$(_c, \"SnippetActions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NuaXBwZXRBY3Rpb25zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFaUM7QUFhbEIsU0FBU0MsZUFBZUMsS0FBMEI7UUFHdERBLGFBQ0RBOztJQUhSLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztRQUMvQ08sT0FBT0wsRUFBQUEsY0FBQUEsTUFBTU0sSUFBSSxjQUFWTixrQ0FBQUEsWUFBWUssS0FBSyxLQUFJO1FBQzVCRSxNQUFNUCxFQUFBQSxlQUFBQSxNQUFNTSxJQUFJLGNBQVZOLG1DQUFBQSxhQUFZTyxJQUFJLEtBQUk7SUFDNUI7SUFFQSxNQUFNQyxtQkFBbUI7UUFDdkJOLGFBQWEsQ0FBQ0Q7SUFDaEI7SUFFQSxNQUFNUSxrQkFBa0I7WUFDQVQ7UUFBdEJBLE1BQU1VLGVBQWUsQ0FBQ1YsRUFBQUEsY0FBQUEsTUFBTU0sSUFBSSxjQUFWTixrQ0FBQUEsWUFBWVcsRUFBRSxLQUFJLEdBQUdSO1FBQzNDRCxhQUFhO0lBQ2Y7SUFFQSxNQUFNVSxvQkFBb0IsQ0FDeEJDO1FBSUEsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDWixnQkFBZ0IsQ0FBQ2EsYUFBZ0I7Z0JBQUUsR0FBR0EsVUFBVTtnQkFBRSxDQUFDSCxLQUFLLEVBQUVDO1lBQU07SUFDbEU7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNHO2dCQUFJQyxXQUFVOztvQkFDWixDQUFDbEIsMEJBQ0EsOERBQUNtQjtrQ0FBSWpCLGFBQWFFLEtBQUssSUFBSTs7Ozs7NkNBRTNCLDhEQUFDZ0I7d0JBQ0NDLE1BQUs7d0JBQ0xSLE1BQUs7d0JBQ0xDLE9BQU9aLGFBQWFFLEtBQUs7d0JBQ3pCa0IsVUFBVVg7Ozs7OztrQ0FHZCw4REFBQ007d0JBQUlDLFdBQVU7a0NBQ1psQiwwQkFDQzs7OENBQ0UsOERBQUN1QjtvQ0FBT0MsU0FBU2pCOzhDQUFrQjs7Ozs7OzhDQUNuQyw4REFBQ2dCO29DQUFPQyxTQUFTaEI7OENBQWlCOzs7Ozs7O3lEQUdwQzs7OENBQ0UsOERBQUNpQjtvQ0FBRUMsTUFBSzs4Q0FDTiw0RUFBQ0g7a0RBQU87Ozs7Ozs7Ozs7OzhDQUVWLDhEQUFDQTtvQ0FBT0MsU0FBU2pCOzhDQUFrQjs7Ozs7OzhDQUNuQyw4REFBQ2dCO29DQUNDQyxTQUFTOzRDQUE4QnpCOytDQUF4QkEsTUFBTTRCLGlCQUFpQixDQUFDNUIsRUFBQUEsY0FBQUEsTUFBTU0sSUFBSSxjQUFWTixrQ0FBQUEsWUFBWVcsRUFBRSxLQUFJOzs4Q0FDMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT1QsOERBQUNPO2dCQUFJQyxXQUFVOzBCQUNaLENBQUNsQiwwQkFDQSw4REFBQ007OEJBQU1KLGFBQWFJLElBQUksSUFBSTs7Ozs7eUNBRTVCLDhEQUFDc0I7b0JBQ0NWLFdBQVU7b0JBQ1ZMLE1BQUs7b0JBQ0xDLE9BQU9aLGFBQWFJLElBQUk7b0JBQ3hCZ0IsVUFBVVg7Ozs7Ozs7Ozs7Ozs7QUFNdEI7R0F6RXdCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TbmlwcGV0QWN0aW9ucy50c3g/NjViMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgU25pcHBldCB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNvZGU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgU25pcHBldEFjdGlvbnNQcm9wcyB7XHJcbiAgc25pcDogU25pcHBldCB8IHVuZGVmaW5lZCB8IG51bGw7XHJcbiAgaGFuZGxlRGVsZXRlQ2xpY2s6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIGhhbmRsZUVkaXRDbGljazogKGlkOiBudW1iZXIsIGRhdGE6IHsgdGl0bGU6IHN0cmluZzsgY29kZTogc3RyaW5nIH0pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNuaXBwZXRBY3Rpb25zKHByb3BzOiBTbmlwcGV0QWN0aW9uc1Byb3BzKSB7XHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZWRpdGVkRmllbGRzLCBzZXRFZGl0ZWRGaWVsZHNdID0gdXNlU3RhdGUoe1xyXG4gICAgdGl0bGU6IHByb3BzLnNuaXA/LnRpdGxlIHx8IFwiXCIsXHJcbiAgICBjb2RlOiBwcm9wcy5zbmlwPy5jb2RlIHx8IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0VkaXRpbmcoIWlzRWRpdGluZyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgcHJvcHMuaGFuZGxlRWRpdENsaWNrKHByb3BzLnNuaXA/LmlkIHx8IDAsIGVkaXRlZEZpZWxkcyk7XHJcbiAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKFxyXG4gICAgZTpcclxuICAgICAgfCBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxyXG4gICAgICB8IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldEVkaXRlZEZpZWxkcygocHJldkZpZWxkcykgPT4gKHsgLi4ucHJldkZpZWxkcywgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0ZWQtbmF2XCI+XHJcbiAgICAgICAgeyFpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICA8aDE+e2VkaXRlZEZpZWxkcy50aXRsZSB8fCBcIk5vdCBGb3VuZFwifTwvaDE+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlZGl0ZWRGaWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnMtYm94XCI+XHJcbiAgICAgICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRWRpdFRvZ2dsZX0+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlQ2xpY2t9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvc25pcHBldHNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUVkaXRUb2dnbGV9PkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVEZWxldGVDbGljayhwcm9wcy5zbmlwPy5pZCB8fCAwKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWRpc3BsYXlcIj5cclxuICAgICAgICB7IWlzRWRpdGluZyA/IChcclxuICAgICAgICAgIDxjb2RlPntlZGl0ZWRGaWVsZHMuY29kZSB8fCBcIk5vdCBGb3VuZFwifTwvY29kZT5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvZGVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY29kZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlZGl0ZWRGaWVsZHMuY29kZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNuaXBwZXRBY3Rpb25zIiwicHJvcHMiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJlZGl0ZWRGaWVsZHMiLCJzZXRFZGl0ZWRGaWVsZHMiLCJ0aXRsZSIsInNuaXAiLCJjb2RlIiwiaGFuZGxlRWRpdFRvZ2dsZSIsImhhbmRsZVNhdmVDbGljayIsImhhbmRsZUVkaXRDbGljayIsImlkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldkZpZWxkcyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiYSIsImhyZWYiLCJoYW5kbGVEZWxldGVDbGljayIsInRleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SnippetActions.tsx\n"));

/***/ })

});