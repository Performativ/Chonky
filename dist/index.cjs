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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  ChonkyActions: () => import_action_definitions.ChonkyActions,
  ChonkyIconName: () => import_icons.ChonkyIconName,
  CustomVisibilityState: () => import_action.CustomVisibilityState,
  DefaultFileActions: () => import_action_definitions.DefaultFileActions,
  FileBrowser: () => import_FileBrowser.FileBrowser,
  FileContextMenu: () => import_FileContextMenu.FileContextMenu,
  FileHelper: () => import_file_helper.FileHelper,
  FileList: () => import_FileList.FileList,
  FileNavbar: () => import_FileNavbar.FileNavbar,
  FileToolbar: () => import_FileToolbar.FileToolbar,
  FileViewMode: () => import_file_view.FileViewMode,
  FullFileBrowser: () => import_FullFileBrowser.FullFileBrowser,
  I18nNamespace: () => import_i18n.I18nNamespace,
  OptionIds: () => import_action_definitions.OptionIds,
  defaultFormatters: () => import_i18n.defaultFormatters,
  defineFileAction: () => import_helpers.defineFileAction,
  getActionI18nId: () => import_i18n.getActionI18nId,
  getI18nId: () => import_i18n.getI18nId,
  setChonkyDefaults: () => import_default_config.setChonkyDefaults,
  thunkDispatchFileAction: () => import_dispatchers.thunkDispatchFileAction,
  thunkRequestFileAction: () => import_dispatchers.thunkRequestFileAction
});
module.exports = __toCommonJS(index_exports);
var import_FileBrowser = require("./components/external/FileBrowser");
var import_FileContextMenu = require("./components/external/FileContextMenu");
var import_FileNavbar = require("./components/external/FileNavbar");
var import_FileToolbar = require("./components/external/FileToolbar");
var import_FullFileBrowser = require("./components/external/FullFileBrowser");
var import_FileList = require("./components/file-list/FileList");
var import_action_definitions = require("./action-definitions");
var import_helpers = require("./util/helpers");
var import_action = require("./types/action.types");
var import_file_view = require("./types/file-view.types");
var import_icons = require("./types/icons.types");
var import_file_helper = require("./util/file-helper");
var import_i18n = require("./util/i18n");
var import_default_config = require("./util/default-config");
__reExport(index_exports, require("./extensions"), module.exports);
__reExport(index_exports, require("./redux/reducers"), module.exports);
__reExport(index_exports, require("./redux/selectors"), module.exports);
__reExport(index_exports, require("./redux/store"), module.exports);
var import_dispatchers = require("./redux/thunks/dispatchers.thunks");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChonkyActions,
  ChonkyIconName,
  CustomVisibilityState,
  DefaultFileActions,
  FileBrowser,
  FileContextMenu,
  FileHelper,
  FileList,
  FileNavbar,
  FileToolbar,
  FileViewMode,
  FullFileBrowser,
  I18nNamespace,
  OptionIds,
  defaultFormatters,
  defineFileAction,
  getActionI18nId,
  getI18nId,
  setChonkyDefaults,
  thunkDispatchFileAction,
  thunkRequestFileAction,
  ...require("./extensions"),
  ...require("./redux/reducers"),
  ...require("./redux/selectors"),
  ...require("./redux/store")
});
