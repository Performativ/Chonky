import { jsx, jsxs } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxActions } from "../../redux/reducers";
import {
  selectClearSelectionOnOutsideClick,
  selectFileActionIds
} from "../../redux/selectors";
import { elementIsInsideButton } from "../../util/helpers";
import { makeGlobalChonkyStyles } from "../../util/styles";
import { useContextMenuTrigger } from "../external/FileContextMenu-hooks";
import { HotkeyListener } from "./HotkeyListener";
const ChonkyPresentationLayer = ({
  children
}) => {
  const dispatch = useDispatch();
  const fileActionIds = useSelector(selectFileActionIds);
  const clearSelectionOnOutsideClick = useSelector(
    selectClearSelectionOnOutsideClick
  );
  const handleClickAway = useCallback(
    (event) => {
      if (!clearSelectionOnOutsideClick || elementIsInsideButton(event.target)) {
        return;
      }
      dispatch(reduxActions.clearSelection());
    },
    [dispatch, clearSelectionOnOutsideClick]
  );
  const hotkeyListenerComponents = useMemo(
    () => fileActionIds.map((actionId) => /* @__PURE__ */ jsx(
      HotkeyListener,
      {
        fileActionId: actionId
      },
      `file-action-listener-${actionId}`
    )),
    [fileActionIds]
  );
  const showContextMenu = useContextMenuTrigger();
  const classes = useStyles();
  return /* @__PURE__ */ jsx(ClickAwayListener, { onClickAway: handleClickAway, children: /* @__PURE__ */ jsxs(Box, { className: classes.chonkyRoot, onContextMenu: showContextMenu, children: [
    hotkeyListenerComponents,
    children ? children : null
  ] }) });
};
const useStyles = makeGlobalChonkyStyles((theme) => ({
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
export {
  ChonkyPresentationLayer
};
