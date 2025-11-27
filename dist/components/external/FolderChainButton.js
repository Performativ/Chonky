import { jsx } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from "react";
import { ChonkyIconName } from "../../types/icons.types";
import { important, makeLocalChonkyStyles } from "../../util/styles";
import { ToolbarButton } from "./ToolbarButton";
import classNames from "classnames";
const FolderChainButton = React.memo(
  ({ first, current, item }) => {
    const { file, disabled, onClick } = item;
    const classes = useStyles();
    const className = classNames({
      [classes.baseBreadcrumb]: true,
      [classes.disabledBreadcrumb]: disabled,
      [classes.currentBreadcrumb]: current
    });
    const text = file ? file.name : "Loading...";
    const icon = first && file?.folderChainIcon === void 0 ? ChonkyIconName.folder : file?.folderChainIcon;
    return /* @__PURE__ */ jsx("div", { className: classes.buttonContainer, children: /* @__PURE__ */ jsx(
      ToolbarButton,
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
const useStyles = makeLocalChonkyStyles((theme) => ({
  buttonContainer: {
    position: "relative"
  },
  baseBreadcrumb: {
    color: () => important(theme.palette.text.primary)
  },
  disabledBreadcrumb: {
    // Constant function here is on purpose. Without the function, the color here
    // does not override the `baseBreadcrumb` color from above.
    color: () => important(theme.palette.text.disabled)
  },
  currentBreadcrumb: {
    textDecoration: important("underline")
  }
}));
export {
  FolderChainButton
};
