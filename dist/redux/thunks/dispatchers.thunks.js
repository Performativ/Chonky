import { Logger } from "../../util/logger";
import { reduxActions } from "../reducers";
import {
  selectContextMenuTriggerFile,
  selectExternalFileActionHandler,
  selectFileActionMap,
  selectInstanceId,
  selectSelectedFiles
} from "../selectors";
import {
  thunkActivateSortAction,
  thunkApplySelectionTransform
} from "./file-actions.thunks";
const thunkDispatchFileAction = (data) => (_dispatch, getState) => {
  Logger.debug(`FILE ACTION DISPATCH: [${data.id}]`, "data:", data);
  const state = getState();
  const action = selectFileActionMap(state)[data.id];
  const externalFileActionHandler = selectExternalFileActionHandler(state);
  if (action) {
    if (externalFileActionHandler) {
      Promise.resolve(externalFileActionHandler(data)).catch(
        (error) => Logger.error(
          `User-defined file action handler threw an error: ${error.message}`
        )
      );
    }
  } else {
    Logger.warn(
      `Internal components dispatched the "${data.id}" file action, but such action was not registered.`
    );
  }
};
const thunkRequestFileAction = (action, payload) => (dispatch, getState) => {
  Logger.debug(
    `FILE ACTION REQUEST: [${action.id}]`,
    "action:",
    action,
    "payload:",
    payload
  );
  const state = getState();
  const instanceId = selectInstanceId(state);
  if (!selectFileActionMap(state)[action.id]) {
    Logger.warn(
      `The action "${action.id}" was requested, but it is not registered. The action will still be dispatched, but this might indicate a bug in the code. Please register your actions by passing them to "fileActions" prop.`
    );
  }
  const selectedFiles = selectSelectedFiles(state);
  const selectedFilesForAction = action.fileFilter ? selectedFiles.filter(action.fileFilter) : selectedFiles;
  if (action.requiresSelection && selectedFilesForAction.length === 0) {
    Logger.warn(
      `Internal components requested the "${action.id}" file action, but the selection for this action was empty. This might a bug in the code of the presentational components.`
    );
    return;
  }
  const contextMenuTriggerFile = selectContextMenuTriggerFile(state);
  const actionState = {
    instanceId,
    selectedFiles,
    selectedFilesForAction,
    contextMenuTriggerFile
  };
  const sortKeySelector = action.sortKeySelector;
  if (sortKeySelector) dispatch(thunkActivateSortAction(action.id));
  const fileViewConfig = action.fileViewConfig;
  if (fileViewConfig) dispatch(reduxActions.setFileViewConfig(fileViewConfig));
  const option = action.option;
  if (option) dispatch(reduxActions.toggleOption(option.id));
  const selectionTransform = action.selectionTransform;
  if (selectionTransform) dispatch(thunkApplySelectionTransform(action));
  const effect = action.effect;
  let maybeEffectPromise = void 0;
  if (effect) {
    try {
      maybeEffectPromise = effect({
        action,
        payload,
        state: actionState,
        reduxDispatch: dispatch,
        getReduxState: getState
      });
    } catch (error) {
      Logger.error(
        `User-defined effect function for action ${action.id} threw an error: ${error.message}`
      );
    }
  }
  return Promise.resolve(maybeEffectPromise).then((effectResult) => {
    const data = {
      id: action.id,
      action,
      payload,
      state: actionState
    };
    triggerDispatchAfterEffect(dispatch, data, effectResult);
  }).catch((error) => {
    Logger.error(
      `User-defined effect function for action ${action.id} returned a promise that was rejected: ${error.message}`
    );
    const data = {
      id: action.id,
      action,
      payload,
      state: actionState
    };
    triggerDispatchAfterEffect(dispatch, data, void 0);
  });
};
const triggerDispatchAfterEffect = (dispatch, data, effectResult) => {
  const preventDispatch = effectResult === true;
  if (!preventDispatch) dispatch(thunkDispatchFileAction(data));
};
export {
  thunkDispatchFileAction,
  thunkRequestFileAction,
  triggerDispatchAfterEffect
};
