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
var ToolbarDropdown_exports = {};
__export(ToolbarDropdown_exports, {
  ToolbarDropdown: () => ToolbarDropdown
});
module.exports = __toCommonJS(ToolbarDropdown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_Menu = __toESM(require("@mui/material/Menu"), 1);
var import_react = __toESM(require("react"), 1);
var import_i18n = require("../../util/i18n");
var import_styles = require("../../util/styles");
var import_ToolbarButton = require("./ToolbarButton");
var import_ToolbarDropdownButton = require("./ToolbarDropdownButton");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const ToolbarDropdown = import_react.default.memo((props) => {
  const { name, fileActionIds } = props;
  const [anchor, setAnchor] = import_react.default.useState(null);
  const handleClick = (0, import_react.useCallback)(
    (event) => setAnchor(event.currentTarget),
    [setAnchor]
  );
  const handleClose = (0, import_react.useCallback)(() => setAnchor(null), [setAnchor]);
  const menuItemComponents = (0, import_react.useMemo)(
    () => fileActionIds.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_ToolbarDropdownButton.SmartToolbarDropdownButton,
      {
        fileActionId: id,
        onClickFollowUp: handleClose
      },
      `menu-item-${id}`
    )),
    [fileActionIds, handleClose]
  );
  const localizedName = (0, import_i18n.useLocalizedFileActionGroup)(name);
  const classes = useStyles();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ToolbarButton.ToolbarButton, { text: localizedName, onClick: handleClick, dropdown: true }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_Menu.default,
      {
        autoFocus: true,
        keepMounted: true,
        elevation: 2,
        anchorEl: anchor,
        onClose: handleClose,
        open: Boolean(anchor),
        transitionDuration: 150,
        classes: { list: classes.dropdownList },
        children: menuItemComponents
      }
    )
  ] });
});
const useStyles = (0, import_styles.makeGlobalChonkyStyles)(() => ({
  dropdownList: {
    paddingBottom: (0, import_styles.important)(0),
    paddingTop: (0, import_styles.important)(0)
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ToolbarDropdown
});
