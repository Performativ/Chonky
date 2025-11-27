/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import hotkeys from "hotkeys-js";
import React, { useEffect } from "react";
import { selectFileActionData } from "../../redux/selectors";
import { useParamSelector } from "../../redux/store";
import { thunkRequestFileAction } from "../../redux/thunks/dispatchers.thunks";
import { useThunkDispatch } from "../../redux/helpers";
const HotkeyListener = (props) => {
  const { fileActionId } = props;
  const dispatch = useThunkDispatch();
  const fileAction = useParamSelector(selectFileActionData, fileActionId);
  useEffect(() => {
    if (!fileAction || !fileAction.hotkeys || fileAction.hotkeys.length === 0) {
      return;
    }
    const hotkeysStr = fileAction.hotkeys.join(",");
    const hotkeyCallback = (event) => {
      event.preventDefault();
      dispatch(thunkRequestFileAction(fileAction, void 0));
    };
    hotkeys(hotkeysStr, hotkeyCallback);
    return () => hotkeys.unbind(hotkeysStr, hotkeyCallback);
  }, [dispatch, fileAction]);
  return null;
};
export {
  HotkeyListener
};
