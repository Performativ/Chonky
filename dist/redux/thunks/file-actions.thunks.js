import {
  ChonkyActions,
  DefaultFileActions,
  EssentialFileActions
} from "../../action-definitions/index";
import { SortOrder } from "../../types/sort.types";
import { sanitizeInputArray } from "../files-transforms";
import { reduxActions } from "../reducers";
import {
  selectCleanFileIds,
  selectFileMap,
  selectHiddenFileIdMap,
  selectSelectionMap
} from "../selectors";
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
  const { sanitizedArray, errorMessages } = sanitizeInputArray(
    "fileActions",
    rawFileActions
  );
  let defaultActionsToAdd;
  if (Array.isArray(disableDefaultFileActions)) {
    const disabledActionIds = new Set(disableDefaultFileActions);
    defaultActionsToAdd = DefaultFileActions.filter(
      (action) => !disabledActionIds.has(action.id)
    );
  } else if (disableDefaultFileActions) {
    defaultActionsToAdd = [];
  } else {
    defaultActionsToAdd = DefaultFileActions;
  }
  const fileActions = mergeFileActionsArrays(
    sanitizedArray,
    EssentialFileActions,
    defaultActionsToAdd
  );
  const optionDefaults = {};
  fileActions.map(
    (a) => a.option ? optionDefaults[a.option.id] = a.option.defaultValue : null
  );
  dispatch(reduxActions.setRawFileActions(rawFileActions));
  dispatch(reduxActions.setFileActionsErrorMessages(errorMessages));
  dispatch(reduxActions.setFileActions(fileActions));
  dispatch(reduxActions.setOptionDefaults(optionDefaults));
  dispatch(thunkUpdateToolbarNContextMenuItems(fileActions));
};
const thunkUpdateToolbarNContextMenuItems = (fileActions) => (dispatch) => {
  const excludedToolbarFileActionIds = /* @__PURE__ */ new Set([
    // TODO: Move decision to exclude actions somewhere else, as users' custom
    //  components might not give these actions special treatment like Chonky does.
    ChonkyActions.OpenParentFolder.id
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
    reduxActions.updateFileActionMenuItems([toolbarItems, contextMenuItems])
  );
};
const thunkUpdateDefaultFileViewActionId = (fileActionId) => (dispatch, getState) => {
  const { fileActionMap } = getState();
  const action = fileActionId ? fileActionMap[fileActionId] : null;
  if (action && action.fileViewConfig) {
    dispatch(reduxActions.setFileViewConfig(action.fileViewConfig));
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
  let order = oldOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;
  if (oldActionId !== fileActionId) {
    order = SortOrder.ASC;
  }
  dispatch(reduxActions.setSort({ actionId: fileActionId, order }));
};
const thunkApplySelectionTransform = (action) => (dispatch, getState) => {
  const selectionTransform = action.selectionTransform;
  if (!selectionTransform) return;
  const state = getState();
  const prevSelection = new Set(Object.keys(selectSelectionMap(state)));
  const hiddenFileIds = new Set(
    Object.keys(selectHiddenFileIdMap(state))
  );
  const newSelection = selectionTransform({
    prevSelection,
    fileIds: selectCleanFileIds(state),
    fileMap: selectFileMap(state),
    hiddenFileIds
  });
  if (!newSelection) return;
  if (newSelection.size === 0) {
    dispatch(reduxActions.clearSelection());
  } else {
    dispatch(
      reduxActions.selectFiles({
        fileIds: Array.from(newSelection),
        reset: true
      })
    );
  }
};
export {
  thunkActivateSortAction,
  thunkApplySelectionTransform,
  thunkUpdateDefaultFileViewActionId,
  thunkUpdateRawFileActions,
  thunkUpdateToolbarNContextMenuItems
};
