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
var file_actions_definitions_exports = {};
__export(file_actions_definitions_exports, {
  OldChonkyActions: () => OldChonkyActions
});
module.exports = __toCommonJS(file_actions_definitions_exports);
var import_icons = require("../types/icons.types");
const validateActionTypes = (actionMap) => actionMap;
const OldChonkyActions = validateActionTypes({
  // Optional actions
  CopyFiles: {
    id: "copy_files",
    requiresSelection: true,
    hotkeys: ["ctrl+c"],
    button: {
      name: "Copy selection",
      toolbar: true,
      contextMenu: true,
      group: "Actions",
      dropdown: true,
      icon: import_icons.ChonkyIconName.copy
    }
  },
  CreateFolder: {
    id: "create_folder",
    button: {
      name: "Create folder",
      toolbar: true,
      contextMenu: true,
      tooltip: "Create a folder",
      icon: import_icons.ChonkyIconName.folderCreate
    }
  },
  UploadFiles: {
    id: "upload_files",
    button: {
      name: "Upload files",
      toolbar: true,
      contextMenu: true,
      tooltip: "Upload files",
      icon: import_icons.ChonkyIconName.upload
    }
  },
  DownloadFiles: {
    id: "download_files",
    requiresSelection: true,
    button: {
      name: "Download files",
      toolbar: true,
      contextMenu: true,
      group: "Actions",
      tooltip: "Download files",
      dropdown: true,
      icon: import_icons.ChonkyIconName.download
    }
  },
  DeleteFiles: {
    id: "delete_files",
    requiresSelection: true,
    hotkeys: ["delete"],
    button: {
      name: "Delete files",
      toolbar: true,
      contextMenu: true,
      group: "Actions",
      tooltip: "Delete files",
      dropdown: true,
      icon: import_icons.ChonkyIconName.trash
    }
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OldChonkyActions
});
