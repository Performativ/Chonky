import { Logger } from "./logger";
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
        Logger.error(
          `Could not convert provided string/number into a date: ${error.message} `,
          "Invalid value:",
          maybeDate
        );
      }
    }
    if (maybeDate instanceof Date && !isNaN(maybeDate.getTime())) {
      return maybeDate;
    }
    Logger.warn("Unsupported date representation:", maybeDate);
    return null;
  }
  static getChildrenCount(file) {
    if (!file || typeof file.childrenCount !== "number") return null;
    return file.childrenCount;
  }
}
export {
  FileHelper
};
