import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChonkyActions } from "../../action-definitions/index";
import { reduxActions } from "../../redux/reducers";
import { selectContextMenuMounted } from "../../redux/selectors";
import { thunkRequestFileAction } from "../../redux/thunks/dispatchers.thunks";
import { findElementAmongAncestors } from "../../util/helpers";
import { useInstanceVariable } from "../../util/hooks-helpers";
import { useThunkDispatch } from "../../redux/helpers";
const findClosestChonkyFileId = (element) => {
  const fileEntryWrapperDiv = findElementAmongAncestors(
    element,
    (element2) => element2.tagName && element2.tagName.toLowerCase() === "div" && element2.dataset && element2.dataset.chonkyFileId
  );
  return fileEntryWrapperDiv ? fileEntryWrapperDiv.dataset.chonkyFileId : null;
};
const useContextMenuTrigger = () => {
  const dispatch = useThunkDispatch();
  const contextMenuMountedRef = useInstanceVariable(
    useSelector(selectContextMenuMounted)
  );
  return useCallback(
    (event) => {
      if (!contextMenuMountedRef.current) return;
      if (event.altKey) return;
      event.preventDefault();
      const triggerFileId = findClosestChonkyFileId(event.target);
      dispatch(
        thunkRequestFileAction(ChonkyActions.OpenFileContextMenu, {
          clientX: event.clientX,
          clientY: event.clientY,
          triggerFileId
        })
      );
    },
    [contextMenuMountedRef, dispatch]
  );
};
const useContextMenuDismisser = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(reduxActions.hideContextMenu()), [dispatch]);
};
export {
  findClosestChonkyFileId,
  useContextMenuDismisser,
  useContextMenuTrigger
};
