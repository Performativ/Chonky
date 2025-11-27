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
var ToolbarButton_exports = {};
__export(ToolbarButton_exports, {
  SmartToolbarButton: () => SmartToolbarButton,
  ToolbarButton: () => ToolbarButton
});
module.exports = __toCommonJS(ToolbarButton_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_Button = __toESM(require("@mui/material/Button"), 1);
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
const ToolbarButton = (props) => {
  const {
    className: externalClassName,
    text,
    tooltip,
    active,
    icon,
    iconOnly,
    onClick,
    disabled,
    dropdown
  } = props;
  const classes = useStyles();
  const ChonkyIcon = (0, import_react.useContext)(import_icon_helper.ChonkyIconContext);
  const iconComponent = icon || iconOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: iconOnly ? "" : classes.iconWithText, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ChonkyIcon,
    {
      icon: icon ? icon : import_icons.ChonkyIconName.fallbackIcon,
      fixedWidth: true
    }
  ) }) : null;
  const className = (0, import_classnames.default)({
    [externalClassName ?? ""]: true,
    [classes.baseButton]: true,
    [classes.iconOnlyButton]: iconOnly,
    [classes.activeButton]: !!active
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_Button.default,
    {
      className,
      onClick,
      title: tooltip ? tooltip : text,
      disabled: disabled || !onClick,
      children: [
        iconComponent,
        text && !iconOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text }),
        dropdown && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: classes.iconDropdown, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ChonkyIcon,
          {
            icon: icon ? icon : import_icons.ChonkyIconName.dropdown,
            fixedWidth: true
          }
        ) })
      ]
    }
  );
};
const useStyles = (0, import_styles.makeGlobalChonkyStyles)((theme) => ({
  baseButton: {
    fontSize: (0, import_styles.important)(theme.toolbar.fontSize),
    textTransform: (0, import_styles.important)("none"),
    letterSpacing: (0, import_styles.important)(0),
    minWidth: (0, import_styles.important)("auto"),
    lineHeight: theme.toolbar.lineHeight,
    height: theme.toolbar.size,
    paddingBottom: (0, import_styles.important)(0),
    paddingTop: (0, import_styles.important)(0)
  },
  iconWithText: {
    marginRight: 8
  },
  iconOnlyButton: {
    width: theme.toolbar.size,
    textAlign: "center"
  },
  iconDropdown: {
    fontSize: "0.7em",
    marginLeft: 2,
    marginTop: 1
  },
  activeButton: {
    color: (0, import_styles.important)(theme.colors.textActive)
  }
}));
const SmartToolbarButton = import_react.default.memo(
  (props) => {
    const { fileActionId } = props;
    const action = (0, import_store.useParamSelector)(import_selectors.selectFileActionData, fileActionId);
    const triggerAction = (0, import_file_actions.useFileActionTrigger)(fileActionId);
    const { icon, active, disabled } = (0, import_file_actions.useFileActionProps)(fileActionId);
    const { buttonName, buttonTooltip } = (0, import_i18n.useLocalizedFileActionStrings)(action);
    if (!action) return null;
    const { button } = action;
    if (!button) return null;
    if (action.customVisibility !== void 0 && action.customVisibility() === import_action.CustomVisibilityState.Hidden)
      return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ToolbarButton,
      {
        text: buttonName,
        tooltip: buttonTooltip,
        icon,
        iconOnly: button.iconOnly,
        active,
        onClick: triggerAction,
        disabled
      }
    );
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SmartToolbarButton,
  ToolbarButton
});
