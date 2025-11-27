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
var action_definitions_exports = {};
__export(action_definitions_exports, {
  ChonkyActions: () => ChonkyActions,
  DefaultFileActions: () => DefaultFileActions,
  EssentialFileActions: () => EssentialFileActions,
  OptionIds: () => import_option_ids.OptionIds
});
module.exports = __toCommonJS(action_definitions_exports);
var import_default = require("./default");
var import_essential = require("./essential");
var import_extra = require("./extra");
var import_option_ids = require("./option-ids");
const ChonkyActions = {
  ...import_essential.EssentialActions,
  ...import_default.DefaultActions,
  ...import_extra.ExtraActions
};
const EssentialFileActions = [
  ChonkyActions.MouseClickFile,
  ChonkyActions.KeyboardClickFile,
  ChonkyActions.StartDragNDrop,
  ChonkyActions.EndDragNDrop,
  ChonkyActions.MoveFiles,
  ChonkyActions.ChangeSelection,
  ChonkyActions.OpenFiles,
  ChonkyActions.OpenParentFolder,
  ChonkyActions.OpenFileContextMenu
];
const DefaultFileActions = [
  ChonkyActions.OpenSelection,
  ChonkyActions.SelectAllFiles,
  ChonkyActions.ClearSelection,
  ChonkyActions.EnableListView,
  // TODO: Don't enable until compact view is fully supported
  // ChonkyActions.EnableCompactView,
  ChonkyActions.EnableGridView,
  ChonkyActions.SortFilesByName,
  ChonkyActions.SortFilesBySize,
  ChonkyActions.SortFilesByDate,
  ChonkyActions.ToggleHiddenFiles,
  ChonkyActions.ToggleShowFoldersFirst,
  ChonkyActions.FocusSearchInput
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChonkyActions,
  DefaultFileActions,
  EssentialFileActions,
  OptionIds
});
