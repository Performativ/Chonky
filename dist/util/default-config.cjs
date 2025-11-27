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
var default_config_exports = {};
__export(default_config_exports, {
  defaultConfig: () => defaultConfig,
  setChonkyDefaults: () => setChonkyDefaults
});
module.exports = __toCommonJS(default_config_exports);
var import_action_definitions = require("../action-definitions/index");
var import_icon_helper = require("./icon-helper");
const defaultConfig = {
  fileActions: null,
  onFileAction: null,
  thumbnailGenerator: null,
  doubleClickDelay: 300,
  disableSelection: false,
  disableDefaultFileActions: false,
  defaultSortActionId: import_action_definitions.ChonkyActions.SortFilesByName.id,
  defaultFileViewActionId: import_action_definitions.ChonkyActions.EnableGridView.id,
  clearSelectionOnOutsideClick: true,
  iconComponent: import_icon_helper.ChonkyIconFA,
  darkMode: false,
  i18n: {}
};
const setChonkyDefaults = (config) => {
  Object.assign(defaultConfig, config);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultConfig,
  setChonkyDefaults
});
