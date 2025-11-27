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
var FileNavbar_exports = {};
__export(FileNavbar_exports, {
  FileNavbar: () => FileNavbar
});
module.exports = __toCommonJS(FileNavbar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_Box = __toESM(require("@mui/material/Box"), 1);
var import_Breadcrumbs = __toESM(require("@mui/material/Breadcrumbs"), 1);
var import_react = __toESM(require("react"), 1);
var import_action_definitions = require("../../action-definitions/index");
var import_styles = require("../../util/styles");
var import_FileNavbar_hooks = require("./FileNavbar-hooks");
var import_FolderChainButton = require("./FolderChainButton");
var import_ToolbarButton = require("./ToolbarButton");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const FileNavbar = import_react.default.memo(() => {
  const classes = useStyles();
  const folderChainItems = (0, import_FileNavbar_hooks.useFolderChainItems)();
  const folderChainComponents = (0, import_react.useMemo)(() => {
    const components = [];
    for (let i = 0; i < folderChainItems.length; ++i) {
      const key = `folder-chain-${i}`;
      const component = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_FolderChainButton.FolderChainButton,
        {
          first: i === 0,
          current: i === folderChainItems.length - 1,
          item: folderChainItems[i]
        },
        key
      );
      components.push(component);
    }
    return components;
  }, [folderChainItems]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Box.default, { className: classes.navbarWrapper, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_Box.default, { className: classes.navbarContainer, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ToolbarButton.SmartToolbarButton, { fileActionId: import_action_definitions.ChonkyActions.OpenParentFolder.id }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_Breadcrumbs.default,
      {
        className: classes.navbarBreadcrumbs,
        classes: { separator: classes.separator },
        children: folderChainComponents
      }
    )
  ] }) });
});
const useStyles = (0, import_styles.makeGlobalChonkyStyles)((theme) => ({
  navbarWrapper: {
    paddingBottom: theme.margins.rootLayoutMargin
  },
  navbarContainer: {
    display: "flex"
  },
  upDirectoryButton: {
    fontSize: (0, import_styles.important)(theme.toolbar.fontSize),
    height: theme.toolbar.size,
    width: theme.toolbar.size,
    padding: "0px !important"
  },
  navbarBreadcrumbs: {
    fontSize: (0, import_styles.important)(theme.toolbar.fontSize),
    flexGrow: 100
  },
  separator: {
    marginRight: (0, import_styles.important)(4),
    marginLeft: (0, import_styles.important)(4)
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileNavbar
});
