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
var FileContextMenu_exports = {};
__export(FileContextMenu_exports, {
  FileContextMenu: () => FileContextMenu
});
module.exports = __toCommonJS(FileContextMenu_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_react_intl = require("react-intl");
var import_react_redux = require("react-redux");
var import_ListSubheader = __toESM(require("@mui/material/ListSubheader"), 1);
var import_Menu = __toESM(require("@mui/material/Menu"), 1);
var import_reducers = require("../../redux/reducers");
var import_selectors = require("../../redux/selectors");
var import_i18n = require("../../util/i18n");
var import_styles = require("../../util/styles");
var import_FileContextMenu_hooks = require("./FileContextMenu-hooks");
var import_ToolbarDropdownButton = require("./ToolbarDropdownButton");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const FileContextMenu = () => {
  const dispatch = (0, import_react_redux.useDispatch)();
  (0, import_react.useEffect)(() => {
    dispatch(import_reducers.reduxActions.setContextMenuMounted(true));
    return () => {
      dispatch(import_reducers.reduxActions.setContextMenuMounted(false));
    };
  }, [dispatch]);
  const intl = (0, import_react_intl.useIntl)();
  const browserMenuShortcutString = intl.formatMessage(
    {
      id: (0, import_i18n.getI18nId)(import_i18n.I18nNamespace.FileContextMenu, "browserMenuShortcut"),
      defaultMessage: "Browser menu: {shortcut}"
    },
    { shortcut: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Alt + Right Click" }) }
  );
  const contextMenuConfig = (0, import_react_redux.useSelector)(import_selectors.selectContextMenuConfig);
  const contextMenuItems = (0, import_react_redux.useSelector)(import_selectors.selectContextMenuItems);
  const hideContextMenu = (0, import_FileContextMenu_hooks.useContextMenuDismisser)();
  const contextMenuItemComponents = (0, import_react.useMemo)(() => {
    const components = [];
    for (let i = 0; i < contextMenuItems.length; ++i) {
      const item = contextMenuItems[i];
      if (typeof item === "string") {
        components.push(
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_ToolbarDropdownButton.SmartToolbarDropdownButton,
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
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_ToolbarDropdownButton.SmartToolbarDropdownButton,
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
  const anchorPosition = (0, import_react.useMemo)(
    () => contextMenuConfig ? { top: contextMenuConfig.mouseY, left: contextMenuConfig.mouseX } : void 0,
    [contextMenuConfig]
  );
  const classes = useStyles();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_Menu.default,
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ListSubheader.default, { component: "div", className: classes.browserMenuTooltip, children: browserMenuShortcutString })
      ]
    }
  );
};
const useStyles = (0, import_styles.makeGlobalChonkyStyles)(() => ({
  contextMenuList: {
    paddingBottom: (0, import_styles.important)(0),
    paddingTop: (0, import_styles.important)(0)
  },
  browserMenuTooltip: {
    lineHeight: (0, import_styles.important)("30px"),
    fontSize: (0, import_styles.important)("0.7em")
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileContextMenu
});
