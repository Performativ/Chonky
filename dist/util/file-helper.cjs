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
var file_helper_exports = {};
__export(file_helper_exports, {
  FileHelper: () => FileHelper
});
module.exports = __toCommonJS(file_helper_exports);
var import_logger = require("./logger");
class FileHelper {
  static isDirectory(file) {
    return !!file && file.isDir === true;
  }
  static isHidden(file) {
    return !!file && file.isHidden === true;
  }
  static isSymlink(file) {
    return !!file && file.isSymlink === true;
  }
  static isEncrypted(file) {
    return !!file && file.isEncrypted === true;
  }
  static isClickable(file) {
    return !!file;
  }
  static isOpenable(file) {
    return !!file && file.openable !== false;
  }
  static isSelectable(file) {
    return !!file && file.selectable !== false;
  }
  static isDraggable(file) {
    return !!file && file.draggable !== false;
  }
  static isDroppable(file) {
    if (!file) return false;
    if (file.isDir && file.droppable !== false) return true;
    return file.droppable === true;
  }
  static isDndOpenable(file) {
    if (!FileHelper.isOpenable(file)) return false;
    if (file.isDir && file.dndOpenable !== false) return true;
    return file.dndOpenable === true;
  }
  static getModDate(file) {
    if (!file || file.modDate === null || file.modDate === void 0) return null;
    return FileHelper.parseDate(file.modDate);
  }
  static parseDate(maybeDate) {
    if (typeof maybeDate === "string" || typeof maybeDate === "number") {
      try {
        return new Date(maybeDate);
      } catch (error) {
        import_logger.Logger.error(
          `Could not convert provided string/number into a date: ${error.message} `,
          "Invalid value:",
          maybeDate
        );
      }
    }
    if (maybeDate instanceof Date && !isNaN(maybeDate.getTime())) {
      return maybeDate;
    }
    import_logger.Logger.warn("Unsupported date representation:", maybeDate);
    return null;
  }
  static getChildrenCount(file) {
    if (!file || typeof file.childrenCount !== "number") return null;
    return file.childrenCount;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileHelper
});
