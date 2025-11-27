import { FileHelper } from "../../util/file-helper";
import { reduxActions } from "../reducers";
import { selectors } from "../selectors";
const reduxThunks = {
  selectRange: (params) => (dispatch, getState) => {
    const state = getState();
    if (state.disableSelection) return;
    const displayFileIds = selectors.getDisplayFileIds(state);
    const fileIdsToSelect = displayFileIds.slice(params.rangeStart, params.rangeEnd + 1).filter(
      (id) => id && FileHelper.isSelectable(state.fileMap[id] ?? null)
    );
    dispatch(
      reduxActions.selectFiles({
        fileIds: fileIdsToSelect,
        reset: !!params.reset
      })
    );
  }
};
export {
  reduxThunks
};
