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
var ListEntry_exports = {};
__export(ListEntry_exports, {
  ListEntry: () => ListEntry
});
module.exports = __toCommonJS(ListEntry_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_i18n = require("../../util/i18n");
var import_icon_helper = require("../../util/icon-helper");
var import_styles = require("../../util/styles");
var import_TextPlaceholder = require("../external/TextPlaceholder");
var import_FileEntry_hooks = require("./FileEntry-hooks");
var import_FileEntryName = require("./FileEntryName");
var import_GridEntryPreview = require("./GridEntryPreview");
var import_classnames = __toESM(require("classnames"), 1);
const ListEntry = ({ file, selected, focused }) => {
  const entryState = (0, import_FileEntry_hooks.useFileEntryState)(file, selected, focused);
  const { fileModDateString, fileSizeString } = (0, import_i18n.useLocalizedFileEntryStrings)(file);
  const styleState = (0, import_react.useMemo)(
    () => ({
      entryState
    }),
    [entryState]
  );
  const classes = useStyles(styleState);
  const commonClasses = (0, import_GridEntryPreview.useCommonEntryStyles)(entryState);
  const ChonkyIcon = (0, import_react.useContext)(import_icon_helper.ChonkyIconContext);
  const fileEntryHtmlProps = (0, import_FileEntry_hooks.useFileEntryHtmlProps)(file);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: classes.listFileEntry, ...fileEntryHtmlProps, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: commonClasses.focusIndicator }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: (0, import_classnames.default)([
          commonClasses.selectionIndicator,
          classes.listFileEntrySelection
        ])
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: classes.listFileEntryIcon, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ChonkyIcon,
      {
        icon: entryState.icon,
        spin: entryState.iconSpin,
        fixedWidth: true
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: classes.listFileEntryName,
        title: file ? file.name : void 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_FileEntryName.FileEntryName, { file })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: classes.listFileEntryProperty, children: file ? fileModDateString ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u2014" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_TextPlaceholder.TextPlaceholder, { minLength: 5, maxLength: 15 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: classes.listFileEntryProperty, children: file ? fileSizeString ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u2014" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_TextPlaceholder.TextPlaceholder, { minLength: 10, maxLength: 20 }) })
  ] });
};
const useStyles = (0, import_styles.makeLocalChonkyStyles)((theme) => ({
  listFileEntry: {
    boxShadow: `inset ${theme.palette.divider} 0 -1px 0`,
    fontSize: theme.listFileEntry.fontSize,
    color: () => "inherit",
    alignItems: "center",
    position: "relative",
    display: "flex",
    height: "100%"
  },
  listFileEntrySelection: {
    opacity: 0.6
  },
  listFileEntryIcon: {
    color: ({ entryState }) => entryState.color,
    fontSize: theme.listFileEntry.iconFontSize,
    boxSizing: "border-box",
    padding: [2, 4],
    zIndex: 20
  },
  listFileEntryName: {
    textOverflow: "ellipsis",
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    overflow: "hidden",
    flex: "1 1 300px",
    paddingLeft: 8,
    zIndex: 20
  },
  listFileEntryProperty: {
    fontSize: theme.listFileEntry.propertyFontSize,
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    overflow: "hidden",
    flex: "0 1 150px",
    padding: [2, 8],
    zIndex: 20
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ListEntry
});
