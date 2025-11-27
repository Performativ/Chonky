import { jsx, jsxs } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import React, { useMemo } from "react";
import { ChonkyActions } from "../../action-definitions/index";
import { important, makeGlobalChonkyStyles } from "../../util/styles";
import { useFolderChainItems } from "./FileNavbar-hooks";
import { FolderChainButton } from "./FolderChainButton";
import { SmartToolbarButton } from "./ToolbarButton";
const FileNavbar = React.memo(() => {
  const classes = useStyles();
  const folderChainItems = useFolderChainItems();
  const folderChainComponents = useMemo(() => {
    const components = [];
    for (let i = 0; i < folderChainItems.length; ++i) {
      const key = `folder-chain-${i}`;
      const component = /* @__PURE__ */ jsx(
        FolderChainButton,
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
  return /* @__PURE__ */ jsx(Box, { className: classes.navbarWrapper, children: /* @__PURE__ */ jsxs(Box, { className: classes.navbarContainer, children: [
    /* @__PURE__ */ jsx(SmartToolbarButton, { fileActionId: ChonkyActions.OpenParentFolder.id }),
    /* @__PURE__ */ jsx(
      Breadcrumbs,
      {
        className: classes.navbarBreadcrumbs,
        classes: { separator: classes.separator },
        children: folderChainComponents
      }
    )
  ] }) });
});
const useStyles = makeGlobalChonkyStyles((theme) => ({
  navbarWrapper: {
    paddingBottom: theme.margins.rootLayoutMargin
  },
  navbarContainer: {
    display: "flex"
  },
  upDirectoryButton: {
    fontSize: important(theme.toolbar.fontSize),
    height: theme.toolbar.size,
    width: theme.toolbar.size,
    padding: "0px !important"
  },
  navbarBreadcrumbs: {
    fontSize: important(theme.toolbar.fontSize),
    flexGrow: 100
  },
  separator: {
    marginRight: important(4),
    marginLeft: important(4)
  }
}));
export {
  FileNavbar
};
