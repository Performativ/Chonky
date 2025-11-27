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
var FileToolbar_exports = {};
__export(FileToolbar_exports, {
  FileToolbar: () => FileToolbar
});
module.exports = __toCommonJS(FileToolbar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_react_redux = require("react-redux");
var import_selectors = require("../../redux/selectors");
var import_styles = require("../../util/styles");
var import_ToolbarButton = require("./ToolbarButton");
var import_ToolbarDropdown = require("./ToolbarDropdown");
var import_ToolbarInfo = require("./ToolbarInfo");
var import_ToolbarSearch = require("./ToolbarSearch");
const FileToolbar = import_react.default.memo(() => {
  const classes = useStyles();
  const toolbarItems = (0, import_react_redux.useSelector)(import_selectors.selectToolbarItems);
  const toolbarItemComponents = (0, import_react.useMemo)(() => {
    const components = [];
    for (let i = 0; i < toolbarItems.length; ++i) {
      const item = toolbarItems[i];
      const key = `toolbar-item-${typeof item === "string" ? item : item.name}`;
      const component = typeof item === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ToolbarButton.SmartToolbarButton, { fileActionId: item }, key) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_ToolbarDropdown.ToolbarDropdown,
        {
          name: item.name,
          fileActionIds: item.fileActionIds
        },
        key
      );
      components.push(component);
    }
    return components;
  }, [toolbarItems]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: classes.toolbarWrapper, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: classes.toolbarContainer, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: classes.toolbarLeft, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ToolbarSearch.ToolbarSearch, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ToolbarInfo.ToolbarInfo, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: classes.toolbarRight, children: toolbarItemComponents })
  ] }) });
});
const useStyles = (0, import_styles.makeGlobalChonkyStyles)((theme) => ({
  toolbarWrapper: {},
  toolbarContainer: {
    flexWrap: "wrap-reverse",
    display: "flex"
  },
  toolbarLeft: {
    paddingBottom: theme.margins.rootLayoutMargin,
    flexWrap: "nowrap",
    flexGrow: 1e4,
    display: "flex"
  },
  toolbarLeftFiller: {
    flexGrow: 1e4
  },
  toolbarRight: {
    paddingBottom: theme.margins.rootLayoutMargin,
    flexWrap: "nowrap",
    display: "flex"
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileToolbar
});
