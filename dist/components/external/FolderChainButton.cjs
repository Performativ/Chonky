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
var FolderChainButton_exports = {};
__export(FolderChainButton_exports, {
  FolderChainButton: () => FolderChainButton
});
module.exports = __toCommonJS(FolderChainButton_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_icons = require("../../types/icons.types");
var import_styles = require("../../util/styles");
var import_ToolbarButton = require("./ToolbarButton");
var import_classnames = __toESM(require("classnames"), 1);
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const FolderChainButton = import_react.default.memo(
  ({ first, current, item }) => {
    const { file, disabled, onClick } = item;
    const classes = useStyles();
    const className = (0, import_classnames.default)({
      [classes.baseBreadcrumb]: true,
      [classes.disabledBreadcrumb]: disabled,
      [classes.currentBreadcrumb]: current
    });
    const text = file ? file.name : "Loading...";
    const icon = first && file?.folderChainIcon === void 0 ? import_icons.ChonkyIconName.folder : file?.folderChainIcon;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: classes.buttonContainer, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_ToolbarButton.ToolbarButton,
      {
        icon,
        className,
        text,
        disabled,
        onClick
      }
    ) });
  }
);
const useStyles = (0, import_styles.makeLocalChonkyStyles)((theme) => ({
  buttonContainer: {
    position: "relative"
  },
  baseBreadcrumb: {
    color: () => (0, import_styles.important)(theme.palette.text.primary)
  },
  disabledBreadcrumb: {
    // Constant function here is on purpose. Without the function, the color here
    // does not override the `baseBreadcrumb` color from above.
    color: () => (0, import_styles.important)(theme.palette.text.disabled)
  },
  currentBreadcrumb: {
    textDecoration: (0, import_styles.important)("underline")
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FolderChainButton
});
