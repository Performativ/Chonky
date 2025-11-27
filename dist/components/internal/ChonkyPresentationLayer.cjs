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
var ChonkyPresentationLayer_exports = {};
__export(ChonkyPresentationLayer_exports, {
  ChonkyPresentationLayer: () => ChonkyPresentationLayer
});
module.exports = __toCommonJS(ChonkyPresentationLayer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_Box = __toESM(require("@mui/material/Box"), 1);
var import_ClickAwayListener = __toESM(require("@mui/material/ClickAwayListener"), 1);
var import_react = __toESM(require("react"), 1);
var import_react_redux = require("react-redux");
var import_reducers = require("../../redux/reducers");
var import_selectors = require("../../redux/selectors");
var import_helpers = require("../../util/helpers");
var import_styles = require("../../util/styles");
var import_FileContextMenu_hooks = require("../external/FileContextMenu-hooks");
var import_HotkeyListener = require("./HotkeyListener");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const ChonkyPresentationLayer = ({
  children
}) => {
  const dispatch = (0, import_react_redux.useDispatch)();
  const fileActionIds = (0, import_react_redux.useSelector)(import_selectors.selectFileActionIds);
  const clearSelectionOnOutsideClick = (0, import_react_redux.useSelector)(
    import_selectors.selectClearSelectionOnOutsideClick
  );
  const handleClickAway = (0, import_react.useCallback)(
    (event) => {
      if (!clearSelectionOnOutsideClick || (0, import_helpers.elementIsInsideButton)(event.target)) {
        return;
      }
      dispatch(import_reducers.reduxActions.clearSelection());
    },
    [dispatch, clearSelectionOnOutsideClick]
  );
  const hotkeyListenerComponents = (0, import_react.useMemo)(
    () => fileActionIds.map((actionId) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_HotkeyListener.HotkeyListener,
      {
        fileActionId: actionId
      },
      `file-action-listener-${actionId}`
    )),
    [fileActionIds]
  );
  const showContextMenu = (0, import_FileContextMenu_hooks.useContextMenuTrigger)();
  const classes = useStyles();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ClickAwayListener.default, { onClickAway: handleClickAway, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_Box.default, { className: classes.chonkyRoot, onContextMenu: showContextMenu, children: [
    hotkeyListenerComponents,
    children ? children : null
  ] }) });
};
const useStyles = (0, import_styles.makeGlobalChonkyStyles)((theme) => ({
  chonkyRoot: {
    backgroundColor: theme.palette.background.paper,
    border: `solid 1px ${theme.palette.divider}`,
    padding: theme.margins.rootLayoutMargin,
    fontSize: theme.fontSizes.rootPrimary,
    color: theme.palette.text.primary,
    touchAction: "manipulation",
    // Disabling zoom on double tap
    fontFamily: "sans-serif",
    flexDirection: "column",
    boxSizing: "border-box",
    textAlign: "left",
    borderRadius: 4,
    display: "flex",
    height: "100%",
    // Disabling select
    webkitTouchCallout: "none",
    webkitUserSelect: "none",
    mozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none"
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChonkyPresentationLayer
});
