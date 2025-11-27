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
var GridEntryPreview_exports = {};
__export(GridEntryPreview_exports, {
  GridEntryPreviewFile: () => GridEntryPreviewFile,
  GridEntryPreviewFolder: () => GridEntryPreviewFolder,
  useCommonEntryStyles: () => useCommonEntryStyles
});
module.exports = __toCommonJS(GridEntryPreview_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_icons = require("../../types/icons.types");
var import_icon_helper = require("../../util/icon-helper");
var import_styles = require("../../util/styles");
var import_FileThumbnail = require("./FileThumbnail");
var import_classnames = __toESM(require("classnames"), 1);
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const GridEntryPreviewFolder = import_react.default.memo(
  (props) => {
    const { className: externalClassName, entryState } = props;
    const folderClasses = useFolderStyles(entryState);
    const fileClasses = useFileStyles(entryState);
    const commonClasses = useCommonEntryStyles(entryState);
    const className = (0, import_classnames.default)({
      [folderClasses.previewFile]: true,
      [externalClassName || ""]: !!externalClassName
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: folderClasses.folderBackSideMid, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: folderClasses.folderBackSideTop }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: folderClasses.folderFrontSide, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: (0, import_classnames.default)([
              fileClasses.fileIcon,
              folderClasses.fileIcon
            ]),
            children: entryState.childrenCount
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: commonClasses.selectionIndicator }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_FileThumbnail.FileThumbnail,
          {
            className: fileClasses.thumbnail,
            thumbnailUrl: entryState.thumbnailUrl
          }
        )
      ] })
    ] }) });
  }
);
GridEntryPreviewFolder.displayName = "GridEntryPreviewFolder";
const useFolderStyles = (0, import_styles.makeLocalChonkyStyles)((theme) => ({
  previewFile: {
    borderRadius: theme.gridFileEntry.borderRadius,
    position: "relative",
    overflow: "hidden"
  },
  folderBackSideTop: {
    backgroundColor: (state) => state.color,
    boxShadow: (state) => {
      let color = theme.gridFileEntry.folderBackColorTint;
      if (state.focused) color = "rgba(0, 0, 0, 0.3)";
      else if (state.selected) color = "rgba(0, 153, 255, .4)";
      return `inset ${color} 0 0 0 999px`;
    },
    borderTopLeftRadius: theme.gridFileEntry.borderRadius,
    borderTopRightRadius: 10,
    position: "absolute",
    right: "60%",
    height: 13,
    top: -10,
    left: 0,
    "&:after": {
      borderRightColor: theme.palette.background.paper,
      borderTopColor: theme.palette.background.paper,
      borderBottomColor: "transparent",
      borderLeftColor: "transparent",
      borderWidth: [0, 15, 10, 0],
      borderStyle: "solid",
      position: "absolute",
      display: "block",
      content: '""',
      right: 0,
      top: 0
    }
  },
  folderBackSideMid: {
    backgroundColor: (state) => state.color,
    boxShadow: (state) => {
      let color = theme.gridFileEntry.folderBackColorTint;
      if (state.focused) color = "rgba(0, 0, 0, 0.3)";
      else if (state.selected) color = "rgba(0, 153, 255, .4)";
      return `inset ${color} 0 0 0 999px`;
    },
    borderTopRightRadius: theme.gridFileEntry.borderRadius,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 10
  },
  folderFrontSide: {
    boxShadow: (state) => {
      const shadows = [];
      if (state.focused) shadows.push("inset rgba(0, 0, 0, 1) 0 0 0 3px");
      if (state.selected) shadows.push("inset rgba(0, 153, 255, .65) 0 0 0 3px");
      shadows.push(
        `inset ${theme.gridFileEntry.folderFrontColorTint} 0 0 0 999px`
      );
      return shadows.join(", ");
    },
    backgroundColor: (state) => state.color,
    borderRadius: theme.gridFileEntry.borderRadius,
    position: "absolute",
    overflow: "hidden",
    bottom: 0,
    right: 0,
    left: 0,
    top: 10
  },
  fileIcon: {
    fontSize: (0, import_styles.important)(theme.gridFileEntry.childrenCountSize)
  }
}));
const GridEntryPreviewFile = import_react.default.memo(
  (props) => {
    const { className: externalClassName, entryState } = props;
    const fileClasses = useFileStyles(entryState);
    const commonClasses = useCommonEntryStyles(entryState);
    const ChonkyIcon = (0, import_react.useContext)(import_icon_helper.ChonkyIconContext);
    const className = (0, import_classnames.default)({
      [fileClasses.previewFile]: true,
      [externalClassName || ""]: !!externalClassName
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: fileClasses.fileIcon, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChonkyIcon, { icon: entryState.icon, spin: entryState.iconSpin }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: commonClasses.selectionIndicator }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_FileThumbnail.FileThumbnail,
        {
          className: fileClasses.thumbnail,
          thumbnailUrl: entryState.thumbnailUrl
        }
      )
    ] });
  }
);
GridEntryPreviewFile.displayName = "GridEntryPreviewFile";
const useFileStyles = (0, import_styles.makeLocalChonkyStyles)((theme) => ({
  previewFile: {
    boxShadow: (state) => {
      const shadows = [];
      if (state.selected) shadows.push("inset rgba(0,153,255, .65) 0 0 0 3px");
      if (state.focused) shadows.push("inset rgba(0, 0, 0, 1) 0 0 0 3px");
      shadows.push(`inset ${theme.gridFileEntry.fileColorTint} 0 0 0 999px`);
      return shadows.join(", ");
    },
    backgroundColor: (state) => state.color,
    borderRadius: theme.gridFileEntry.borderRadius,
    position: "relative",
    overflow: "hidden"
  },
  dndIndicator: {
    zIndex: 14
  },
  fileIcon: {
    transform: "translateX(-50%) translateY(-50%)",
    fontSize: theme.gridFileEntry.iconSize,
    opacity: (state) => state.thumbnailUrl && !state.focused ? 0 : 1,
    color: (state) => state.focused ? theme.gridFileEntry.iconColorFocused : theme.gridFileEntry.iconColor,
    position: "absolute",
    left: "50%",
    zIndex: 12,
    top: "50%"
  },
  thumbnail: {
    borderRadius: theme.gridFileEntry.borderRadius,
    position: "absolute",
    zIndex: 6,
    bottom: 5,
    right: 5,
    left: 5,
    top: 5
  }
}));
const useCommonEntryStyles = (0, import_styles.makeLocalChonkyStyles)(() => ({
  selectionIndicator: {
    display: (state) => state.selected ? "block" : "none",
    background: "repeating-linear-gradient(45deg,rgba(0,153,255,.14),rgba(0,153,255,.14) 10px,rgba(0,153,255,.25) 0,rgba(0,153,255,.25) 20px)",
    backgroundColor: "rgba(0, 153, 255, .14)",
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 10
  },
  focusIndicator: {
    display: (state) => state.focused ? "block" : "none",
    boxShadow: "inset rgba(0, 0, 0, 1) 0 0 0 2px",
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 11
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GridEntryPreviewFile,
  GridEntryPreviewFolder,
  useCommonEntryStyles
});
