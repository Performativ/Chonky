import React, { useImperativeHandle } from "react";
import { useStore } from "react-redux";
import { useThunkDispatch } from "../redux/helpers";
import { reduxActions } from "../redux/reducers";
import { selectSelectionMap } from "../redux/selectors";
import { thunkRequestFileAction } from "../redux/thunks/dispatchers.thunks";
const useFileBrowserHandle = (ref) => {
  const store = useStore();
  const dispatch = useThunkDispatch();
  useImperativeHandle(
    ref,
    () => ({
      getFileSelection() {
        const selectionMap = selectSelectionMap(store.getState());
        const selectionSet = new Set(Object.keys(selectionMap));
        return selectionSet;
      },
      setFileSelection(selection, reset = true) {
        const fileIds = Array.from(selection);
        dispatch(reduxActions.selectFiles({ fileIds, reset }));
      },
      requestFileAction(action, payload) {
        return Promise.resolve(
          dispatch(thunkRequestFileAction(action, payload))
        ).then();
      }
    }),
    [store, dispatch]
  );
};
export {
  useFileBrowserHandle
};
