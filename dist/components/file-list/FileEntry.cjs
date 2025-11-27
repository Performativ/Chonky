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
var FileEntry_exports = {};
__export(FileEntry_exports, {
  SmartFileEntry: () => SmartFileEntry
});
module.exports = __toCommonJS(FileEntry_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_selectors = require("../../redux/selectors");
var import_store = require("../../redux/store");
var import_file_view = require("../../types/file-view.types");
var import_file_helper = require("../../util/file-helper");
var import_styles = require("../../util/styles");
var import_ClickableWrapper = require("../internal/ClickableWrapper");
var import_CompactEntry = require("./CompactEntry");
var import_FileEntry_hooks = require("./FileEntry-hooks");
var import_GridEntry = require("./GridEntry");
var import_ListEntry = require("./ListEntry");
const SmartFileEntry = import_react.default.memo(
  ({ fileId, displayIndex, fileViewMode }) => {
    const classes = useStyles();
    const file = (0, import_store.useParamSelector)(import_selectors.selectFileData, fileId) ?? null;
    const selected = (0, import_store.useParamSelector)(import_selectors.selectIsFileSelected, fileId);
    const fileClickHandlers = (0, import_FileEntry_hooks.useFileClickHandlers)(file, displayIndex);
    const [focused, setFocused] = (0, import_react.useState)(false);
    const clickableWrapperProps = {
      wrapperTag: "div",
      passthroughProps: { className: classes.fileEntryClickableWrapper },
      ...import_file_helper.FileHelper.isClickable(file) ? fileClickHandlers : void 0,
      setFocused
    };
    const fileEntryProps = {
      file,
      selected,
      focused
    };
    let EntryComponent;
    if (fileViewMode === import_file_view.FileViewMode.List) EntryComponent = import_ListEntry.ListEntry;
    else if (fileViewMode === import_file_view.FileViewMode.Compact) EntryComponent = import_CompactEntry.CompactEntry;
    else EntryComponent = import_GridEntry.GridEntry;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ClickableWrapper.ClickableWrapper, { ...clickableWrapperProps, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryComponent, { ...fileEntryProps }) });
  }
);
SmartFileEntry.displayName = "SmartFileEntry";
const useStyles = (0, import_styles.makeGlobalChonkyStyles)(() => ({
  fileEntryClickableWrapper: {
    // We disable default browser outline because Chonky provides its own outline
    // (which doesn't compromise accessibility, hopefully)
    outline: "none !important",
    position: "relative",
    height: "100%"
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SmartFileEntry
});
