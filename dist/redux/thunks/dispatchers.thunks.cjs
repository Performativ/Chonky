"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var dispatchers_thunks_exports = {};
__export(dispatchers_thunks_exports, {
  thunkDispatchFileAction: () => thunkDispatchFileAction,
  thunkRequestFileAction: () => thunkRequestFileAction,
  triggerDispatchAfterEffect: () => triggerDispatchAfterEffect
});
module.exports = __toCommonJS(dispatchers_thunks_exports);
var import_logger = require("../../util/logger");
var import_reducers = require("../reducers");
var import_selectors = require("../selectors");
var import_file_actions = require("./file-actions.thunks");
const thunkDispatchFileAction = (data) => (_dispatch, getState) => {
  import_logger.Logger.debug(`FILE ACTION DISPATCH: [${data.id}]`, "data:", data);
  const state = getState();
  const action = (0, import_selectors.selectFileActionMap)(state)[data.id];
  const externalFileActionHandler = (0, import_selectors.selectExternalFileActionHandler)(state);
  if (action) {
    if (externalFileActionHandler) {
      Promise.resolve(externalFileActionHandler(data)).catch(
        (error) => import_logger.Logger.error(
          `User-defined file action handler threw an error: ${error.message}`
        )
      );
    }
  } else {
    import_logger.Logger.warn(
      `Internal components dispatched the "${data.id}" file action, but such action was not registered.`
    );
  }
};
const thunkRequestFileAction = (action, payload) => (dispatch, getState) => {
  import_logger.Logger.debug(
    `FILE ACTION REQUEST: [${action.id}]`,
    "action:",
    action,
    "payload:",
    payload
  );
  const state = getState();
  const instanceId = (0, import_selectors.selectInstanceId)(state);
  if (!(0, import_selectors.selectFileActionMap)(state)[action.id]) {
    import_logger.Logger.warn(
      `The action "${action.id}" was requested, but it is not registered. The action will still be dispatched, but this might indicate a bug in the code. Please register your actions by passing them to "fileActions" prop.`
    );
  }
  const selectedFiles = (0, import_selectors.selectSelectedFiles)(state);
  const selectedFilesForAction = action.fileFilter ? selectedFiles.filter(action.fileFilter) : selectedFiles;
  if (action.requiresSelection && selectedFilesForAction.length === 0) {
    import_logger.Logger.warn(
      `Internal components requested the "${action.id}" file action, but the selection for this action was empty. This might a bug in the code of the presentational components.`
    );
    return;
  }
  const contextMenuTriggerFile = (0, import_selectors.selectContextMenuTriggerFile)(state);
  const actionState = {
    instanceId,
    selectedFiles,
    selectedFilesForAction,
    contextMenuTriggerFile
  };
  const sortKeySelector = action.sortKeySelector;
  if (sortKeySelector) dispatch((0, import_file_actions.thunkActivateSortAction)(action.id));
  const fileViewConfig = action.fileViewConfig;
  if (fileViewConfig) dispatch(import_reducers.reduxActions.setFileViewConfig(fileViewConfig));
  const option = action.option;
  if (option) dispatch(import_reducers.reduxActions.toggleOption(option.id));
  const selectionTransform = action.selectionTransform;
  if (selectionTransform) dispatch((0, import_file_actions.thunkApplySelectionTransform)(action));
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
      import_logger.Logger.error(
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
    import_logger.Logger.error(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  thunkDispatchFileAction,
  thunkRequestFileAction,
  triggerDispatchAfterEffect
});
