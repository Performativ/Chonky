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
var hooks_helpers_exports = {};
__export(hooks_helpers_exports, {
  useDebounce: () => useDebounce,
  useInstanceVariable: () => useInstanceVariable,
  useStaticValue: () => useStaticValue
});
module.exports = __toCommonJS(hooks_helpers_exports);
var import_react = __toESM(require("react"), 1);
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = (0, import_react.useState)(value);
  (0, import_react.useEffect)(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return [debouncedValue, setDebouncedValue];
};
const UNINITIALIZED_SENTINEL = {};
const useStaticValue = (factory) => {
  const valueRef = (0, import_react.useRef)(UNINITIALIZED_SENTINEL);
  if (valueRef.current === UNINITIALIZED_SENTINEL) valueRef.current = factory();
  return valueRef.current;
};
const useInstanceVariable = (value) => {
  const ref = (0, import_react.useRef)(value);
  (0, import_react.useEffect)(() => {
    ref.current = value;
  }, [ref, value]);
  return ref;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useDebounce,
  useInstanceVariable,
  useStaticValue
});
