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
var ToolbarDropdownButton_exports = {};
__export(ToolbarDropdownButton_exports, {
  SmartToolbarDropdownButton: () => SmartToolbarDropdownButton,
  ToolbarDropdownButton: () => ToolbarDropdownButton
});
module.exports = __toCommonJS(ToolbarDropdownButton_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_ListItemIcon = __toESM(require("@mui/material/ListItemIcon"), 1);
var import_ListItemText = __toESM(require("@mui/material/ListItemText"), 1);
var import_MenuItem = __toESM(require("@mui/material/MenuItem"), 1);
var import_react = __toESM(require("react"), 1);
var import_selectors = require("../../redux/selectors");
var import_store = require("../../redux/store");
var import_icons = require("../../types/icons.types");
var import_action = require("../../types/action.types");
var import_file_actions = require("../../util/file-actions");
var import_i18n = require("../../util/i18n");
var import_icon_helper = require("../../util/icon-helper");
var import_styles = require("../../util/styles");
var import_classnames = __toESM(require("classnames"), 1);
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const ToolbarDropdownButton = import_react.default.forwardRef(
  (props, ref) => {
    const { text, active, icon, onClick, disabled } = props;
    const classes = useStyles();
    const ChonkyIcon = (0, import_react.useContext)(import_icon_helper.ChonkyIconContext);
    const className = (0, import_classnames.default)({
      [classes.baseButton]: true,
      [classes.activeButton]: active
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_MenuItem.default,
      {
        ref,
        className,
        onClick,
        disabled,
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ListItemIcon.default, { className: classes.icon, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChonkyIcon, { icon, fixedWidth: true }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ListItemText.default, { primaryTypographyProps: { className: classes.text }, children: text })
        ]
      }
    );
  }
);
const useStyles = (0, import_styles.makeGlobalChonkyStyles)((theme) => ({
  baseButton: {
    lineHeight: (0, import_styles.important)(theme.toolbar.lineHeight),
    height: (0, import_styles.important)(theme.toolbar.size),
    minHeight: (0, import_styles.important)("auto"),
    minWidth: (0, import_styles.important)("auto"),
    padding: (0, import_styles.important)(20)
  },
  icon: {
    fontSize: (0, import_styles.important)(theme.toolbar.fontSize),
    minWidth: (0, import_styles.important)("auto"),
    color: (0, import_styles.important)("inherit"),
    marginRight: 8
  },
  text: {
    fontSize: (0, import_styles.important)(theme.toolbar.fontSize)
  },
  activeButton: {
    color: (0, import_styles.important)(theme.colors.textActive)
  }
}));
const SmartToolbarDropdownButton = import_react.default.forwardRef(
  (props, ref) => {
    const { fileActionId, onClickFollowUp } = props;
    const action = (0, import_store.useParamSelector)(import_selectors.selectFileActionData, fileActionId);
    const triggerAction = (0, import_file_actions.useFileActionTrigger)(fileActionId);
    const { icon, active, disabled } = (0, import_file_actions.useFileActionProps)(fileActionId);
    const { buttonName } = (0, import_i18n.useLocalizedFileActionStrings)(action);
    const handleClick = (0, import_react.useCallback)(() => {
      triggerAction();
      if (onClickFollowUp) onClickFollowUp();
    }, [onClickFollowUp, triggerAction]);
    if (!action) return null;
    const { button } = action;
    if (!button) return null;
    if (action.customVisibility !== void 0 && action.customVisibility() === import_action.CustomVisibilityState.Hidden)
      return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ToolbarDropdownButton,
      {
        ref,
        text: buttonName,
        icon,
        onClick: handleClick,
        active,
        disabled
      }
    );
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SmartToolbarDropdownButton,
  ToolbarDropdownButton
});
