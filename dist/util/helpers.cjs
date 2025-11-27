"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var helpers_exports = {};
__export(helpers_exports, {
  NOOP_FUNCTION: () => NOOP_FUNCTION,
  defineFileAction: () => defineFileAction,
  elementIsInsideButton: () => elementIsInsideButton,
  findElementAmongAncestors: () => findElementAmongAncestors,
  getValueOrFallback: () => getValueOrFallback,
  isPromise: () => isPromise
});
module.exports = __toCommonJS(helpers_exports);
var import_logger = require("./logger");
const NOOP_FUNCTION = (...args) => {
  import_logger.Logger.warn(
    `The "NOOP_FUNCTION" from the constants module was called. This can indicate a bug in one of the components. Supplied args:`,
    args
  );
};
const isPromise = (value) => {
  if (typeof value !== "object" || !value) return false;
  const then = value.then;
  return then && typeof then === "function";
};
const defineFileAction = (action, effect) => {
  if (action.__payloadType !== void 0 && (action.hotkeys || action.button)) {
    const errorMessage = `Invalid definition was provided for file action "${action.id}". Actions that specify hotkeys or buttons cannot define a payload type. If your application requires this functionality, define two actions and chain them using effects.`;
    import_logger.Logger.error(errorMessage);
    throw new Error(errorMessage);
  }
  action.effect = effect;
  return action;
};
const findElementAmongAncestors = (maybeElement, predicate) => {
  if (!maybeElement) return maybeElement;
  if (predicate(maybeElement)) return maybeElement;
  if (maybeElement.parentElement) {
    return findElementAmongAncestors(maybeElement.parentElement, predicate);
  }
  return null;
};
const elementIsInsideButton = (buttonCandidate) => {
  return !!findElementAmongAncestors(
    buttonCandidate,
    (element) => element.tagName && element.tagName.toLowerCase() === "button"
  );
};
const getValueOrFallback = (value, fallback, desiredType) => {
  if (desiredType) {
    return typeof value === desiredType ? value : fallback;
  }
  return value !== void 0 ? value : fallback;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NOOP_FUNCTION,
  defineFileAction,
  elementIsInsideButton,
  findElementAmongAncestors,
  getValueOrFallback,
  isPromise
});
