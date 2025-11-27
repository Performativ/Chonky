"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ClickableWrapper_exports = {};
__export(ClickableWrapper_exports, {
  ClickableWrapper: () => ClickableWrapper
});
module.exports = __toCommonJS(ClickableWrapper_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_ClickableWrapper_hooks = require("./ClickableWrapper-hooks");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const ClickableWrapper = (props) => {
  const {
    children,
    wrapperTag: WrapperTag,
    passthroughProps,
    onSingleClick,
    onDoubleClick,
    onKeyboardClick,
    setFocused
  } = props;
  const handleClick = (0, import_ClickableWrapper_hooks.useClickHandler)(onSingleClick, onDoubleClick);
  const handleKeyDown = (0, import_ClickableWrapper_hooks.useKeyDownHandler)(onKeyboardClick);
  const compProps = {
    onFocus: (0, import_react.useCallback)(() => setFocused && setFocused(true), [setFocused]),
    onBlur: (0, import_react.useCallback)(() => setFocused && setFocused(false), [setFocused])
  };
  if (onSingleClick || onDoubleClick || onKeyboardClick) {
    compProps.onClick = handleClick;
    compProps.onKeyDown = handleKeyDown;
    compProps.tabIndex = 0;
  }
  const mergedProps = { ...compProps, ...passthroughProps };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WrapperTag, { ...mergedProps, children });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClickableWrapper
});
