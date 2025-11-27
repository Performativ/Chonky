import { jsx, jsxs } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React, { useEffect, useMemo } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import ListSubheader from "@mui/material/ListSubheader";
import Menu from "@mui/material/Menu";
import { reduxActions } from "../../redux/reducers";
import { selectContextMenuConfig, selectContextMenuItems } from "../../redux/selectors";
import { getI18nId, I18nNamespace } from "../../util/i18n";
import { important, makeGlobalChonkyStyles } from "../../util/styles";
import { useContextMenuDismisser } from "./FileContextMenu-hooks";
import { SmartToolbarDropdownButton } from "./ToolbarDropdownButton";
const FileContextMenu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reduxActions.setContextMenuMounted(true));
    return () => {
      dispatch(reduxActions.setContextMenuMounted(false));
    };
  }, [dispatch]);
  const intl = useIntl();
  const browserMenuShortcutString = intl.formatMessage(
    {
      id: getI18nId(I18nNamespace.FileContextMenu, "browserMenuShortcut"),
      defaultMessage: "Browser menu: {shortcut}"
    },
    { shortcut: /* @__PURE__ */ jsx("strong", { children: "Alt + Right Click" }) }
  );
  const contextMenuConfig = useSelector(selectContextMenuConfig);
  const contextMenuItems = useSelector(selectContextMenuItems);
  const hideContextMenu = useContextMenuDismisser();
  const contextMenuItemComponents = useMemo(() => {
    const components = [];
    for (let i = 0; i < contextMenuItems.length; ++i) {
      const item = contextMenuItems[i];
      if (typeof item === "string") {
        components.push(
          /* @__PURE__ */ jsx(
            SmartToolbarDropdownButton,
            {
              fileActionId: item,
              onClickFollowUp: hideContextMenu
            },
            `context-menu-item-${item}`
          )
        );
      } else {
        item.fileActionIds.map(
          (id) => components.push(
            /* @__PURE__ */ jsx(
              SmartToolbarDropdownButton,
              {
                fileActionId: id,
                onClickFollowUp: hideContextMenu
              },
              `context-menu-item-${item.name}-${id}`
            )
          )
        );
      }
    }
    return components;
  }, [contextMenuItems, hideContextMenu]);
  const anchorPosition = useMemo(
    () => contextMenuConfig ? { top: contextMenuConfig.mouseY, left: contextMenuConfig.mouseX } : void 0,
    [contextMenuConfig]
  );
  const classes = useStyles();
  return /* @__PURE__ */ jsxs(
    Menu,
    {
      elevation: 2,
      disablePortal: true,
      onClose: hideContextMenu,
      transitionDuration: 150,
      open: !!contextMenuConfig,
      anchorPosition,
      anchorReference: "anchorPosition",
      classes: { list: classes.contextMenuList },
      children: [
        contextMenuItemComponents,
        /* @__PURE__ */ jsx(ListSubheader, { component: "div", className: classes.browserMenuTooltip, children: browserMenuShortcutString })
      ]
    }
  );
};
const useStyles = makeGlobalChonkyStyles(() => ({
  contextMenuList: {
    paddingBottom: important(0),
    paddingTop: important(0)
  },
  browserMenuTooltip: {
    lineHeight: important("30px"),
    fontSize: important("0.7em")
  }
}));
export {
  FileContextMenu
};
