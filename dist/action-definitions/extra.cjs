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
var extra_exports = {};
__export(extra_exports, {
  ExtraActions: () => ExtraActions
});
module.exports = __toCommonJS(extra_exports);
var import_icons = require("../types/icons.types");
var import_helpers = require("../util/helpers");
const ExtraActions = {
  /**
   * Action that adds a button and shortcut to copy files.
   */
  CopyFiles: (0, import_helpers.defineFileAction)({
    id: "copy_files",
    requiresSelection: true,
    hotkeys: ["ctrl+c"],
    button: {
      name: "Copy selection",
      toolbar: true,
      contextMenu: true,
      group: "Actions",
      icon: import_icons.ChonkyIconName.copy
    }
  }),
  /**
   * Action that adds a button to create a new folder.
   */
  CreateFolder: (0, import_helpers.defineFileAction)({
    id: "create_folder",
    button: {
      name: "Create folder",
      toolbar: true,
      tooltip: "Create a folder",
      icon: import_icons.ChonkyIconName.folderCreate
    }
  }),
  /**
   * Action that adds a button to upload files.
   */
  UploadFiles: (0, import_helpers.defineFileAction)({
    id: "upload_files",
    button: {
      name: "Upload files",
      toolbar: true,
      tooltip: "Upload files",
      icon: import_icons.ChonkyIconName.upload
    }
  }),
  /**
   * Action that adds a button to download files.
   */
  DownloadFiles: (0, import_helpers.defineFileAction)({
    id: "download_files",
    requiresSelection: true,
    button: {
      name: "Download files",
      toolbar: true,
      contextMenu: true,
      group: "Actions",
      icon: import_icons.ChonkyIconName.download
    }
  }),
  /**
   * Action that adds a button and shortcut to delete files.
   */
  DeleteFiles: (0, import_helpers.defineFileAction)({
    id: "delete_files",
    requiresSelection: true,
    hotkeys: ["delete"],
    button: {
      name: "Delete files",
      toolbar: true,
      contextMenu: true,
      group: "Actions",
      icon: import_icons.ChonkyIconName.trash
    }
  })
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ExtraActions
});
