import { jsx, jsxs } from "react/jsx-runtime";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectToolbarItems } from "../../redux/selectors";
import { makeGlobalChonkyStyles } from "../../util/styles";
import { SmartToolbarButton } from "./ToolbarButton";
import { ToolbarDropdown } from "./ToolbarDropdown";
import { ToolbarInfo } from "./ToolbarInfo";
import { ToolbarSearch } from "./ToolbarSearch";
const FileToolbar = React.memo(() => {
  const classes = useStyles();
  const toolbarItems = useSelector(selectToolbarItems);
  const toolbarItemComponents = useMemo(() => {
    const components = [];
    for (let i = 0; i < toolbarItems.length; ++i) {
      const item = toolbarItems[i];
      const key = `toolbar-item-${typeof item === "string" ? item : item.name}`;
      const component = typeof item === "string" ? /* @__PURE__ */ jsx(SmartToolbarButton, { fileActionId: item }, key) : /* @__PURE__ */ jsx(
        ToolbarDropdown,
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
  return /* @__PURE__ */ jsx("div", { className: classes.toolbarWrapper, children: /* @__PURE__ */ jsxs("div", { className: classes.toolbarContainer, children: [
    /* @__PURE__ */ jsxs("div", { className: classes.toolbarLeft, children: [
      /* @__PURE__ */ jsx(ToolbarSearch, {}),
      /* @__PURE__ */ jsx(ToolbarInfo, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: classes.toolbarRight, children: toolbarItemComponents })
  ] }) });
});
const useStyles = makeGlobalChonkyStyles((theme) => ({
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
export {
  FileToolbar
};
