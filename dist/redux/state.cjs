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
var state_exports = {};
__export(state_exports, {
  initialRootState: () => initialRootState
});
module.exports = __toCommonJS(state_exports);
var import_action_definitions = require("../action-definitions/index");
var import_sort = require("../types/sort.types");
const initialRootState = {
  instanceId: "CHONKY_INVALID_ID",
  // should be overwritten by preloaded state
  externalFileActionHandler: null,
  rawFileActions: [],
  fileActionsErrorMessages: [],
  fileActionMap: {},
  fileActionIds: [],
  toolbarItems: [],
  contextMenuItems: [],
  rawFolderChain: null,
  folderChainErrorMessages: [],
  folderChain: [],
  rawFiles: [],
  filesErrorMessages: [],
  fileMap: {},
  fileIds: [],
  cleanFileIds: [],
  sortedFileIds: [],
  hiddenFileIdMap: {},
  focusSearchInput: null,
  searchString: "",
  searchMode: "currentFolder",
  selectionMap: {},
  disableSelection: false,
  fileViewConfig: import_action_definitions.ChonkyActions.EnableGridView.fileViewConfig,
  sortActionId: null,
  sortOrder: import_sort.SortOrder.ASC,
  optionMap: {},
  thumbnailGenerator: null,
  doubleClickDelay: 300,
  clearSelectionOnOutsideClick: true,
  lastClick: null,
  contextMenuMounted: false,
  contextMenuConfig: null
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  initialRootState
});
