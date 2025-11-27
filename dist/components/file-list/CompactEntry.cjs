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
var CompactEntry_exports = {};
__export(CompactEntry_exports, {
  CompactEntry: () => CompactEntry
});
module.exports = __toCommonJS(CompactEntry_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_i18n = require("../../util/i18n");
var import_icon_helper = require("../../util/icon-helper");
var import_styles = require("../../util/styles");
var import_TextPlaceholder = require("../external/TextPlaceholder");
var import_FileEntry_hooks = require("./FileEntry-hooks");
var import_FileEntryName = require("./FileEntryName");
const CompactEntry = ({ file, selected, focused }) => {
  const entryState = (0, import_FileEntry_hooks.useFileEntryState)(file, selected, focused);
  const { fileModDateString, fileSizeString } = (0, import_i18n.useLocalizedFileEntryStrings)(file);
  const classes = useStyles(entryState);
  const ChonkyIcon = (0, import_react.useContext)(import_icon_helper.ChonkyIconContext);
  const fileEntryHtmlProps = (0, import_FileEntry_hooks.useFileEntryHtmlProps)(file);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: classes.listFileEntry, ...fileEntryHtmlProps, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: classes.listFileEntryIcon, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ChonkyIcon,
      {
        icon: entryState.icon,
        spin: entryState.iconSpin,
        fixedWidth: true
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: classes.listFileEntryDescription, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: classes.listFileEntryName,
          title: file ? file.name : void 0,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_FileEntryName.FileEntryName, { file })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: classes.listFileEntryProperties, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: classes.listFileEntryProperty, children: file ? fileModDateString ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u2014" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_TextPlaceholder.TextPlaceholder, { minLength: 5, maxLength: 15 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: classes.listFileEntryProperty, children: file ? fileSizeString ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u2014" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_TextPlaceholder.TextPlaceholder, { minLength: 10, maxLength: 20 }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "chonky-file-entry-outline" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "chonky-file-entry-selection" })
  ] });
};
const useStyles = (0, import_styles.makeLocalChonkyStyles)((theme) => ({
  listFileEntry: {
    fontSize: theme.listFileEntry.fontSize,
    alignItems: "center",
    position: "relative",
    display: "flex",
    height: "100%"
  },
  listFileEntryIcon: {
    backgroundColor: (state) => state.color,
    boxShadow: "inset rgba(255, 255, 255, 0.5) 0 0 0 999px",
    borderRadius: theme.listFileEntry.iconBorderRadius,
    fontSize: theme.listFileEntry.iconFontSize,
    color: "#fff",
    padding: 8
  },
  listFileEntryDescription: {
    flexDirection: "column",
    display: "flex",
    flexGrow: 1
  },
  listFileEntryName: {
    padding: [0, 8, 4, 8]
  },
  listFileEntryProperties: {
    fontSize: theme.listFileEntry.propertyFontSize,
    flexDirection: "row",
    display: "flex"
  },
  listFileEntryProperty: {
    padding: [0, 8],
    opacity: 0.4
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CompactEntry
});
