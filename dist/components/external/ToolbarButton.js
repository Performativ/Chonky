import { jsx, jsxs } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { selectFileActionData } from "../../redux/selectors";
import { useParamSelector } from "../../redux/store";
import { ChonkyIconName } from "../../types/icons.types";
import { CustomVisibilityState } from "../../types/action.types";
import { useFileActionProps, useFileActionTrigger } from "../../util/file-actions";
import { useLocalizedFileActionStrings } from "../../util/i18n";
import { ChonkyIconContext } from "../../util/icon-helper";
import { important, makeGlobalChonkyStyles } from "../../util/styles";
import classNames from "classnames";
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
  const ChonkyIcon = useContext(ChonkyIconContext);
  const iconComponent = icon || iconOnly ? /* @__PURE__ */ jsx("div", { className: iconOnly ? "" : classes.iconWithText, children: /* @__PURE__ */ jsx(
    ChonkyIcon,
    {
      icon: icon ? icon : ChonkyIconName.fallbackIcon,
      fixedWidth: true
    }
  ) }) : null;
  const className = classNames({
    [externalClassName ?? ""]: true,
    [classes.baseButton]: true,
    [classes.iconOnlyButton]: iconOnly,
    [classes.activeButton]: !!active
  });
  return /* @__PURE__ */ jsxs(
    Button,
    {
      className,
      onClick,
      title: tooltip ? tooltip : text,
      disabled: disabled || !onClick,
      children: [
        iconComponent,
        text && !iconOnly && /* @__PURE__ */ jsx("span", { children: text }),
        dropdown && /* @__PURE__ */ jsx("div", { className: classes.iconDropdown, children: /* @__PURE__ */ jsx(
          ChonkyIcon,
          {
            icon: icon ? icon : ChonkyIconName.dropdown,
            fixedWidth: true
          }
        ) })
      ]
    }
  );
};
const useStyles = makeGlobalChonkyStyles((theme) => ({
  baseButton: {
    fontSize: important(theme.toolbar.fontSize),
    textTransform: important("none"),
    letterSpacing: important(0),
    minWidth: important("auto"),
    lineHeight: theme.toolbar.lineHeight,
    height: theme.toolbar.size,
    paddingBottom: important(0),
    paddingTop: important(0)
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
    color: important(theme.colors.textActive)
  }
}));
const SmartToolbarButton = React.memo(
  (props) => {
    const { fileActionId } = props;
    const action = useParamSelector(selectFileActionData, fileActionId);
    const triggerAction = useFileActionTrigger(fileActionId);
    const { icon, active, disabled } = useFileActionProps(fileActionId);
    const { buttonName, buttonTooltip } = useLocalizedFileActionStrings(action);
    if (!action) return null;
    const { button } = action;
    if (!button) return null;
    if (action.customVisibility !== void 0 && action.customVisibility() === CustomVisibilityState.Hidden)
      return null;
    return /* @__PURE__ */ jsx(
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
export {
  SmartToolbarButton,
  ToolbarButton
};
