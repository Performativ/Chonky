import { Fragment, jsx, jsxs } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import Menu from "@mui/material/Menu";
import React, { useCallback, useMemo } from "react";
import { useLocalizedFileActionGroup } from "../../util/i18n";
import { important, makeGlobalChonkyStyles } from "../../util/styles";
import { ToolbarButton } from "./ToolbarButton";
import { SmartToolbarDropdownButton } from "./ToolbarDropdownButton";
const ToolbarDropdown = React.memo((props) => {
  const { name, fileActionIds } = props;
  const [anchor, setAnchor] = React.useState(null);
  const handleClick = useCallback(
    (event) => setAnchor(event.currentTarget),
    [setAnchor]
  );
  const handleClose = useCallback(() => setAnchor(null), [setAnchor]);
  const menuItemComponents = useMemo(
    () => fileActionIds.map((id) => /* @__PURE__ */ jsx(
      SmartToolbarDropdownButton,
      {
        fileActionId: id,
        onClickFollowUp: handleClose
      },
      `menu-item-${id}`
    )),
    [fileActionIds, handleClose]
  );
  const localizedName = useLocalizedFileActionGroup(name);
  const classes = useStyles();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ToolbarButton, { text: localizedName, onClick: handleClick, dropdown: true }),
    /* @__PURE__ */ jsx(
      Menu,
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
const useStyles = makeGlobalChonkyStyles(() => ({
  dropdownList: {
    paddingBottom: important(0),
    paddingTop: important(0)
  }
}));
export {
  ToolbarDropdown
};
