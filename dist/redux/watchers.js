import { useEffect } from "react";
import watch from "redux-watch";
import { ChonkyActions } from "../action-definitions";
import { selectSelectedFileIds, selectSelectionMap } from "./selectors";
import { thunkRequestFileAction } from "./thunks/dispatchers.thunks";
const useStoreWatchers = (store) => {
  useEffect(() => {
    const selectionWatcher = watch(() => selectSelectionMap(store.getState()));
    const onSelectionChange = (newSelection, oldSelection) => {
      if (newSelection === oldSelection) return;
      const selectedFilesIds = selectSelectedFileIds(store.getState());
      const selection = new Set(selectedFilesIds);
      store.dispatch(
        thunkRequestFileAction(ChonkyActions.ChangeSelection, {
          selection
        })
      );
    };
    const unsubscribeCallbacks = [
      store.subscribe(selectionWatcher(onSelectionChange))
    ];
    return () => {
      for (const unsubscribe of unsubscribeCallbacks) unsubscribe();
    };
  }, [store]);
};
export {
  useStoreWatchers
};
