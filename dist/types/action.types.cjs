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
var action_types_exports = {};
__export(action_types_exports, {
  CustomVisibilityState: () => CustomVisibilityState
});
module.exports = __toCommonJS(action_types_exports);
var CustomVisibilityState = /* @__PURE__ */ ((CustomVisibilityState2) => {
  CustomVisibilityState2[CustomVisibilityState2["Hidden"] = 0] = "Hidden";
  CustomVisibilityState2[CustomVisibilityState2["Disabled"] = 1] = "Disabled";
  CustomVisibilityState2[CustomVisibilityState2["Default"] = 2] = "Default";
  CustomVisibilityState2[CustomVisibilityState2["Active"] = 3] = "Active";
  return CustomVisibilityState2;
})(CustomVisibilityState || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CustomVisibilityState
});
