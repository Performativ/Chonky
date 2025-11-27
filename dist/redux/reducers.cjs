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
var reducers_exports = {};
__export(reducers_exports, {
  reduxActions: () => reduxActions,
  rootReducer: () => rootReducer
});
module.exports = __toCommonJS(reducers_exports);
var import_toolkit = require("@reduxjs/toolkit");
var import_sort = require("../types/sort.types");
var import_file_helper = require("../util/file-helper");
var import_files_transforms = require("./files-transforms");
var import_state = require("./state");
const reducers = {
  setExternalFileActionHandler(state, action) {
    state.externalFileActionHandler = action.payload ?? null;
  },
  setRawFileActions(state, action) {
    state.rawFileActions = action.payload;
  },
  setFileActionsErrorMessages(state, action) {
    state.fileActionsErrorMessages = action.payload;
  },
  setFileActions(state, action) {
    const fileActionMap = {};
    action.payload.map((a) => fileActionMap[a.id] = a);
    const fileIds = action.payload.map((a) => a.id);
    state.fileActionMap = fileActionMap;
    state.fileActionIds = fileIds;
  },
  updateFileActionMenuItems(state, action) {
    [state.toolbarItems, state.contextMenuItems] = action.payload;
  },
  setRawFolderChain(state, action) {
    const rawFolderChain = action.payload;
    const { sanitizedArray: folderChain, errorMessages } = (0, import_files_transforms.sanitizeInputArray)(
      "folderChain",
      rawFolderChain
    );
    state.rawFolderChain = rawFolderChain;
    state.folderChain = folderChain;
    state.folderChainErrorMessages = errorMessages;
  },
  setRawFiles(state, action) {
    const rawFiles = action.payload;
    const { sanitizedArray: files, errorMessages } = (0, import_files_transforms.sanitizeInputArray)(
      "files",
      rawFiles
    );
    state.rawFiles = rawFiles;
    state.filesErrorMessages = errorMessages;
    const fileMap = {};
    files.forEach((f) => {
      if (f) fileMap[f.id] = f;
    });
    const fileIds = files.map((f) => f ? f.id : null);
    const cleanFileIds = fileIds.filter((f) => !!f);
    state.fileMap = fileMap;
    state.fileIds = fileIds;
    state.cleanFileIds = cleanFileIds;
    for (const selectedFileId of Object.keys(state.selectionMap)) {
      if (!fileMap[selectedFileId]) {
        delete state.selectionMap[selectedFileId];
      }
    }
  },
  setSortedFileIds(state, action) {
    state.sortedFileIds = action.payload;
  },
  setHiddenFileIds(state, action) {
    state.hiddenFileIdMap = action.payload;
    for (const selectedFileId of Object.keys(state.selectionMap)) {
      if (state.hiddenFileIdMap[selectedFileId]) {
        delete state.selectionMap[selectedFileId];
      }
    }
  },
  setFocusSearchInput(state, action) {
    state.focusSearchInput = action.payload;
  },
  setSearchString(state, action) {
    state.searchString = action.payload;
  },
  selectAllFiles(state) {
    state.fileIds.filter((id) => id && import_file_helper.FileHelper.isSelectable(state.fileMap[id])).map((id) => id ? state.selectionMap[id] = true : null);
  },
  selectFiles(state, action) {
    if (state.disableSelection) return;
    if (action.payload.reset) state.selectionMap = {};
    action.payload.fileIds.filter((id) => id && import_file_helper.FileHelper.isSelectable(state.fileMap[id])).map((id) => state.selectionMap[id] = true);
  },
  toggleSelection(state, action) {
    if (state.disableSelection) return;
    const oldValue = !!state.selectionMap[action.payload.fileId];
    if (action.payload.exclusive) state.selectionMap = {};
    if (oldValue) delete state.selectionMap[action.payload.fileId];
    else if (import_file_helper.FileHelper.isSelectable(state.fileMap[action.payload.fileId])) {
      state.selectionMap[action.payload.fileId] = true;
    }
  },
  clearSelection(state) {
    if (state.disableSelection) return;
    if (Object.keys(state.selectionMap).length !== 0) state.selectionMap = {};
  },
  setSelectionDisabled(state, action) {
    state.disableSelection = action.payload;
    if (Object.keys(state.selectionMap).length !== 0) state.selectionMap = {};
  },
  setFileViewConfig(state, action) {
    state.fileViewConfig = action.payload;
  },
  setSort(state, action) {
    state.sortActionId = action.payload.actionId;
    state.sortOrder = action.payload.order;
  },
  setOptionDefaults(state, action) {
    for (const optionId of Object.keys(action.payload)) {
      if (optionId in state.optionMap) continue;
      state.optionMap[optionId] = action.payload[optionId];
    }
  },
  toggleOption(state, action) {
    state.optionMap[action.payload] = !state.optionMap[action.payload];
  },
  setThumbnailGenerator(state, action) {
    state.thumbnailGenerator = action.payload;
  },
  setDoubleClickDelay(state, action) {
    state.doubleClickDelay = action.payload;
  },
  setClearSelectionOnOutsideClick(state, action) {
    state.clearSelectionOnOutsideClick = action.payload;
  },
  setLastClickIndex(state, action) {
    state.lastClick = action.payload;
  },
  setContextMenuMounted(state, action) {
    state.contextMenuMounted = action.payload;
  },
  showContextMenu(state, action) {
    state.contextMenuConfig = action.payload;
  },
  hideContextMenu(state) {
    if (!state.contextMenuConfig) return;
    state.contextMenuConfig = null;
  }
};
const { actions: reduxActions, reducer: rootReducer } = (0, import_toolkit.createSlice)({
  name: "root",
  initialState: import_state.initialRootState,
  reducers
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  reduxActions,
  rootReducer
});
