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
var file_actions_exports = {};
__export(file_actions_exports, {
  useFileActionProps: () => useFileActionProps,
  useFileActionTrigger: () => useFileActionTrigger
});
module.exports = __toCommonJS(file_actions_exports);
var import_react = require("react");
var import_react_redux = require("react-redux");
var import_action_definitions = require("../action-definitions/index");
var import_selectors = require("../redux/selectors");
var import_store = require("../redux/store");
var import_dispatchers = require("../redux/thunks/dispatchers.thunks");
var import_icons = require("../types/icons.types");
var import_action = require("../types/action.types");
var import_sort = require("../types/sort.types");
var import_file_helper = require("./file-helper");
var import_helpers = require("../redux/helpers");
const useFileActionTrigger = (fileActionId) => {
  const dispatch = (0, import_helpers.useThunkDispatch)();
  const fileAction = (0, import_store.useParamSelector)(import_selectors.selectFileActionData, fileActionId);
  return (0, import_react.useCallback)(
    () => dispatch((0, import_dispatchers.thunkRequestFileAction)(fileAction, void 0)),
    [dispatch, fileAction]
  );
};
const useFileActionProps = (fileActionId) => {
  const parentFolder = (0, import_react_redux.useSelector)(import_selectors.selectParentFolder);
  const fileViewConfig = (0, import_react_redux.useSelector)(import_selectors.selectFileViewConfig);
  const sortActionId = (0, import_react_redux.useSelector)(import_selectors.selectSortActionId);
  const sortOrder = (0, import_react_redux.useSelector)(import_selectors.selectSortOrder);
  const action = (0, import_store.useParamSelector)(import_selectors.selectFileActionData, fileActionId);
  const optionValue = (0, import_store.useParamSelector)(import_selectors.selectOptionValue, action?.option?.id ?? "");
  const actionSelectionSize = (0, import_store.useParamSelector)(
    import_selectors.selectSelectedFilesForActionCount,
    fileActionId
  );
  const actionSelectionEmpty = actionSelectionSize === 0;
  return (0, import_react.useMemo)(() => {
    if (!action) return { icon: null, active: false, disabled: true };
    let icon = action.button?.icon ?? null;
    if (action.sortKeySelector) {
      if (sortActionId === action.id) {
        if (sortOrder === import_sort.SortOrder.ASC) {
          icon = import_icons.ChonkyIconName.sortAsc;
        } else {
          icon = import_icons.ChonkyIconName.sortDesc;
        }
      } else {
        icon = import_icons.ChonkyIconName.placeholder;
      }
    } else if (action.option) {
      if (optionValue) {
        icon = import_icons.ChonkyIconName.toggleOn;
      } else {
        icon = import_icons.ChonkyIconName.toggleOff;
      }
    }
    const isSortButtonAndCurrentSort = action.id === sortActionId;
    const isFileViewButtonAndCurrentView = action.fileViewConfig === fileViewConfig;
    const isOptionAndEnabled = action.option ? !!optionValue : false;
    let customDisabled = false;
    let customActive = false;
    if (action.customVisibility !== void 0) {
      customDisabled = action.customVisibility() === import_action.CustomVisibilityState.Disabled;
      customActive = action.customVisibility() === import_action.CustomVisibilityState.Active;
    }
    const active = isSortButtonAndCurrentSort || isFileViewButtonAndCurrentView || isOptionAndEnabled || customActive;
    let disabled = !!action.requiresSelection && actionSelectionEmpty || customDisabled;
    if (action.id === import_action_definitions.ChonkyActions.OpenParentFolder.id) {
      disabled = disabled || !import_file_helper.FileHelper.isOpenable(parentFolder);
    }
    return { icon, active, disabled };
  }, [
    parentFolder,
    fileViewConfig,
    sortActionId,
    sortOrder,
    action,
    optionValue,
    actionSelectionEmpty
  ]);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useFileActionProps,
  useFileActionTrigger
});
