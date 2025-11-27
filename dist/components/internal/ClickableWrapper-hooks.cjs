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
var ClickableWrapper_hooks_exports = {};
__export(ClickableWrapper_hooks_exports, {
  useClickHandler: () => useClickHandler,
  useKeyDownHandler: () => useKeyDownHandler
});
module.exports = __toCommonJS(ClickableWrapper_hooks_exports);
var import_react = __toESM(require("react"), 1);
var import_react_redux = require("react-redux");
var import_selectors = require("../../redux/selectors");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const useClickHandler = (onSingleClick, onDoubleClick) => {
  const doubleClickDelay = (0, import_react_redux.useSelector)(import_selectors.selectDoubleClickDelay);
  const counter = (0, import_react.useRef)({
    clickCount: 0,
    clickTimeout: null
  });
  return (0, import_react.useCallback)(
    (event) => {
      const mouseClickEvent = {
        altKey: event.altKey,
        ctrlKey: event.ctrlKey || event.metaKey,
        shiftKey: event.shiftKey
      };
      counter.current.clickCount++;
      if (counter.current.clickCount === 1) {
        if (onSingleClick) {
          event.preventDefault();
          onSingleClick(mouseClickEvent);
        }
        counter.current.clickCount = 1;
        counter.current.clickTimeout = setTimeout(
          () => counter.current.clickCount = 0,
          doubleClickDelay
        );
      } else if (counter.current.clickCount === 2) {
        if (onDoubleClick) {
          event.preventDefault();
          onDoubleClick(mouseClickEvent);
        }
        if (typeof counter.current.clickTimeout === "number") {
          clearTimeout(counter.current.clickTimeout);
          counter.current.clickTimeout = null;
          counter.current.clickCount = 0;
        }
      }
    },
    [doubleClickDelay, onSingleClick, onDoubleClick, counter]
  );
};
const useKeyDownHandler = (onKeyboardClick) => {
  return (0, import_react.useCallback)(
    (event) => {
      if (!onKeyboardClick) return;
      const keyboardClickEvent = {
        enterKey: event.nativeEvent.code === "Enter",
        spaceKey: event.nativeEvent.code === "Space",
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey
      };
      if (keyboardClickEvent.spaceKey || keyboardClickEvent.enterKey) {
        event.preventDefault();
        event.stopPropagation();
        onKeyboardClick(keyboardClickEvent);
      }
    },
    [onKeyboardClick]
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useClickHandler,
  useKeyDownHandler
});
