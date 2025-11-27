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
var file_view_types_exports = {};
__export(file_view_types_exports, {
  FileViewMode: () => FileViewMode
});
module.exports = __toCommonJS(file_view_types_exports);
var FileViewMode = /* @__PURE__ */ ((FileViewMode2) => {
  FileViewMode2["List"] = "list";
  FileViewMode2["Compact"] = "compact";
  FileViewMode2["Grid"] = "grid";
  return FileViewMode2;
})(FileViewMode || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileViewMode
});
