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
var GridEntry_exports = {};
__export(GridEntry_exports, {
  GridEntry: () => GridEntry
});
module.exports = __toCommonJS(GridEntry_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_file_helper = require("../../util/file-helper");
var import_styles = require("../../util/styles");
var import_FileEntry_hooks = require("./FileEntry-hooks");
var import_FileEntryName = require("./FileEntryName");
var import_GridEntryPreview = require("./GridEntryPreview");
var import_classnames = __toESM(require("classnames"), 1);
const GridEntry = import_react.default.memo(
  ({ file, selected, focused }) => {
    const isDirectory = import_file_helper.FileHelper.isDirectory(file);
    const entryState = (0, import_FileEntry_hooks.useFileEntryState)(file, selected, focused);
    const classes = useFileEntryStyles(entryState);
    const fileEntryHtmlProps = (0, import_FileEntry_hooks.useFileEntryHtmlProps)(file);
    const entryClassName = (0, import_classnames.default)({
      [classes.gridFileEntry]: true
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: entryClassName, ...fileEntryHtmlProps, children: [
      isDirectory ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_GridEntryPreview.GridEntryPreviewFolder,
        {
          className: classes.gridFileEntryPreview,
          entryState
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_GridEntryPreview.GridEntryPreviewFile,
        {
          className: classes.gridFileEntryPreview,
          entryState
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: classes.gridFileEntryNameContainer, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_FileEntryName.FileEntryName, { className: classes.gridFileEntryName, file }) })
    ] });
  }
);
GridEntry.displayName = "GridEntry";
const useFileEntryStyles = (0, import_styles.makeLocalChonkyStyles)((theme) => ({
  gridFileEntry: {
    flexDirection: "column",
    display: "flex",
    height: "100%"
  },
  gridFileEntryPreview: {
    flexGrow: 1
  },
  gridFileEntryNameContainer: {
    fontSize: theme.gridFileEntry.fontSize,
    wordBreak: "break-word",
    textAlign: "center",
    paddingTop: 5
  },
  gridFileEntryName: {
    backgroundColor: (state) => state.selected ? "rgba(0,153,255, .25)" : "transparent",
    textDecoration: (state) => state.focused ? "underline" : "none",
    borderRadius: 3,
    padding: [2, 4]
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GridEntry
});
