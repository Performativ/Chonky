import { jsx, jsxs } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import React, { useCallback, useContext } from "react";
import { selectFileActionData } from "../../redux/selectors";
import { useParamSelector } from "../../redux/store";
import { ChonkyIconName } from "../../types/icons.types";
import { CustomVisibilityState } from "../../types/action.types";
import { useFileActionProps, useFileActionTrigger } from "../../util/file-actions";
import { useLocalizedFileActionStrings } from "../../util/i18n";
import { ChonkyIconContext } from "../../util/icon-helper";
import { important, makeGlobalChonkyStyles } from "../../util/styles";
import classNames from "classnames";
const ToolbarDropdownButton = React.forwardRef(
  (props, ref) => {
    const { text, active, icon, onClick, disabled } = props;
    const classes = useStyles();
    const ChonkyIcon = useContext(ChonkyIconContext);
    const className = classNames({
      [classes.baseButton]: true,
      [classes.activeButton]: active
    });
    return /* @__PURE__ */ jsxs(
      MenuItem,
      {
        ref,
        className,
        onClick,
        disabled,
        children: [
          icon && /* @__PURE__ */ jsx(ListItemIcon, { className: classes.icon, children: /* @__PURE__ */ jsx(ChonkyIcon, { icon, fixedWidth: true }) }),
          /* @__PURE__ */ jsx(ListItemText, { primaryTypographyProps: { className: classes.text }, children: text })
        ]
      }
    );
  }
);
const useStyles = makeGlobalChonkyStyles((theme) => ({
  baseButton: {
    lineHeight: important(theme.toolbar.lineHeight),
    height: important(theme.toolbar.size),
    minHeight: important("auto"),
    minWidth: important("auto"),
    padding: important(20)
  },
  icon: {
    fontSize: important(theme.toolbar.fontSize),
    minWidth: important("auto"),
    color: important("inherit"),
    marginRight: 8
  },
  text: {
    fontSize: important(theme.toolbar.fontSize)
  },
  activeButton: {
    color: important(theme.colors.textActive)
  }
}));
const SmartToolbarDropdownButton = React.forwardRef(
  (props, ref) => {
    const { fileActionId, onClickFollowUp } = props;
    const action = useParamSelector(selectFileActionData, fileActionId);
    const triggerAction = useFileActionTrigger(fileActionId);
    const { icon, active, disabled } = useFileActionProps(fileActionId);
    const { buttonName } = useLocalizedFileActionStrings(action);
    const handleClick = useCallback(() => {
      triggerAction();
      if (onClickFollowUp) onClickFollowUp();
    }, [onClickFollowUp, triggerAction]);
    if (!action) return null;
    const { button } = action;
    if (!button) return null;
    if (action.customVisibility !== void 0 && action.customVisibility() === CustomVisibilityState.Hidden)
      return null;
    return /* @__PURE__ */ jsx(
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
export {
  SmartToolbarDropdownButton,
  ToolbarDropdownButton
};
