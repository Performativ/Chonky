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
var file_actions_thunks_exports = {};
__export(file_actions_thunks_exports, {
  thunkActivateSortAction: () => thunkActivateSortAction,
  thunkApplySelectionTransform: () => thunkApplySelectionTransform,
  thunkUpdateDefaultFileViewActionId: () => thunkUpdateDefaultFileViewActionId,
  thunkUpdateRawFileActions: () => thunkUpdateRawFileActions,
  thunkUpdateToolbarNContextMenuItems: () => thunkUpdateToolbarNContextMenuItems
});
module.exports = __toCommonJS(file_actions_thunks_exports);
var import_action_definitions = require("../../action-definitions/index");
var import_sort = require("../../types/sort.types");
var import_files_transforms = require("../files-transforms");
var import_reducers = require("../reducers");
var import_selectors = require("../selectors");
const mergeFileActionsArrays = (...fileActionArrays) => {
  const seenActionIds = /* @__PURE__ */ new Set();
  const addToSeen = (a) => !!seenActionIds.add(a.id);
  const wasNotSeen = (a) => !seenActionIds.has(a.id);
  const duplicateFreeArrays = fileActionArrays.map((arr) => {
    const duplicateFreeArray = arr.filter(wasNotSeen);
    duplicateFreeArray.map(addToSeen);
    return duplicateFreeArray;
  });
  return new Array().concat(...duplicateFreeArrays);
};
const thunkUpdateRawFileActions = (rawFileActions, disableDefaultFileActions) => (dispatch) => {
  const { sanitizedArray, errorMessages } = (0, import_files_transforms.sanitizeInputArray)(
    "fileActions",
    rawFileActions
  );
  let defaultActionsToAdd;
  if (Array.isArray(disableDefaultFileActions)) {
    const disabledActionIds = new Set(disableDefaultFileActions);
    defaultActionsToAdd = import_action_definitions.DefaultFileActions.filter(
      (action) => !disabledActionIds.has(action.id)
    );
  } else if (disableDefaultFileActions) {
    defaultActionsToAdd = [];
  } else {
    defaultActionsToAdd = import_action_definitions.DefaultFileActions;
  }
  const fileActions = mergeFileActionsArrays(
    sanitizedArray,
    import_action_definitions.EssentialFileActions,
    defaultActionsToAdd
  );
  const optionDefaults = {};
  fileActions.map(
    (a) => a.option ? optionDefaults[a.option.id] = a.option.defaultValue : null
  );
  dispatch(import_reducers.reduxActions.setRawFileActions(rawFileActions));
  dispatch(import_reducers.reduxActions.setFileActionsErrorMessages(errorMessages));
  dispatch(import_reducers.reduxActions.setFileActions(fileActions));
  dispatch(import_reducers.reduxActions.setOptionDefaults(optionDefaults));
  dispatch(thunkUpdateToolbarNContextMenuItems(fileActions));
};
const thunkUpdateToolbarNContextMenuItems = (fileActions) => (dispatch) => {
  const excludedToolbarFileActionIds = /* @__PURE__ */ new Set([
    // TODO: Move decision to exclude actions somewhere else, as users' custom
    //  components might not give these actions special treatment like Chonky does.
    import_action_definitions.ChonkyActions.OpenParentFolder.id
  ]);
  const toolbarItems = [];
  const seenToolbarGroups = {};
  const contextMenuItems = [];
  const seenContextMenuGroups = {};
  const getGroup = (itemArray, seenMap, groupName) => {
    if (seenMap[groupName]) return seenMap[groupName];
    const group = { name: groupName, fileActionIds: [] };
    itemArray.push(group);
    seenMap[groupName] = group;
    return group;
  };
  for (const action of fileActions) {
    const button = action.button;
    if (!button) continue;
    if (button.toolbar && !excludedToolbarFileActionIds.has(action.id)) {
      if (button.group) {
        const group = getGroup(
          toolbarItems,
          seenToolbarGroups,
          button.group
        );
        group.fileActionIds.push(action.id);
      } else {
        toolbarItems.push(action.id);
      }
    }
    if (button.contextMenu) {
      if (button.group) {
        const group = getGroup(
          contextMenuItems,
          seenContextMenuGroups,
          button.group
        );
        group.fileActionIds.push(action.id);
      } else {
        contextMenuItems.push(action.id);
      }
    }
  }
  dispatch(
    import_reducers.reduxActions.updateFileActionMenuItems([toolbarItems, contextMenuItems])
  );
};
const thunkUpdateDefaultFileViewActionId = (fileActionId) => (dispatch, getState) => {
  const { fileActionMap } = getState();
  const action = fileActionId ? fileActionMap[fileActionId] : null;
  if (action && action.fileViewConfig) {
    dispatch(import_reducers.reduxActions.setFileViewConfig(action.fileViewConfig));
  }
};
const thunkActivateSortAction = (fileActionId) => (dispatch, getState) => {
  if (!fileActionId) return;
  const {
    sortActionId: oldActionId,
    sortOrder: oldOrder,
    fileActionMap
  } = getState();
  const action = fileActionMap[fileActionId];
  if (!action || !action.sortKeySelector) return;
  let order = oldOrder === import_sort.SortOrder.ASC ? import_sort.SortOrder.DESC : import_sort.SortOrder.ASC;
  if (oldActionId !== fileActionId) {
    order = import_sort.SortOrder.ASC;
  }
  dispatch(import_reducers.reduxActions.setSort({ actionId: fileActionId, order }));
};
const thunkApplySelectionTransform = (action) => (dispatch, getState) => {
  const selectionTransform = action.selectionTransform;
  if (!selectionTransform) return;
  const state = getState();
  const prevSelection = new Set(Object.keys((0, import_selectors.selectSelectionMap)(state)));
  const hiddenFileIds = new Set(
    Object.keys((0, import_selectors.selectHiddenFileIdMap)(state))
  );
  const newSelection = selectionTransform({
    prevSelection,
    fileIds: (0, import_selectors.selectCleanFileIds)(state),
    fileMap: (0, import_selectors.selectFileMap)(state),
    hiddenFileIds
  });
  if (!newSelection) return;
  if (newSelection.size === 0) {
    dispatch(import_reducers.reduxActions.clearSelection());
  } else {
    dispatch(
      import_reducers.reduxActions.selectFiles({
        fileIds: Array.from(newSelection),
        reset: true
      })
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  thunkActivateSortAction,
  thunkApplySelectionTransform,
  thunkUpdateDefaultFileViewActionId,
  thunkUpdateRawFileActions,
  thunkUpdateToolbarNContextMenuItems
});
