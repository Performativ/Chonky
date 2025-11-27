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
var default_exports = {};
__export(default_exports, {
  DefaultActions: () => DefaultActions
});
module.exports = __toCommonJS(default_exports);
var import_selectors = require("../redux/selectors");
var import_dispatchers = require("../redux/thunks/dispatchers.thunks");
var import_file_view = require("../types/file-view.types");
var import_icons = require("../types/icons.types");
var import_file_helper = require("../util/file-helper");
var import_helpers = require("../util/helpers");
var import_essential = require("./essential");
var import_option_ids = require("./option-ids");
const DefaultActions = {
  /**
   * Action that can be used to open currently selected files.
   */
  OpenSelection: (0, import_helpers.defineFileAction)(
    {
      id: "open_selection",
      hotkeys: ["enter"],
      requiresSelection: true,
      fileFilter: import_file_helper.FileHelper.isOpenable,
      button: {
        name: "Open selection",
        toolbar: true,
        contextMenu: true,
        group: "Actions",
        icon: import_icons.ChonkyIconName.openFiles
      }
    },
    ({ state, reduxDispatch }) => {
      reduxDispatch(
        (0, import_dispatchers.thunkRequestFileAction)(import_essential.EssentialActions.OpenFiles, {
          files: state.selectedFilesForAction
        })
      );
      return void 0;
    }
  ),
  /**
   * Action that selects all files.
   */
  SelectAllFiles: (0, import_helpers.defineFileAction)({
    id: "select_all_files",
    hotkeys: ["ctrl+a"],
    button: {
      name: "Select all files",
      toolbar: true,
      contextMenu: true,
      group: "Actions",
      icon: import_icons.ChonkyIconName.selectAllFiles
    },
    selectionTransform: (({ fileIds, hiddenFileIds }) => {
      const newSelection = /* @__PURE__ */ new Set();
      fileIds.map((fileId) => {
        if (!hiddenFileIds.has(fileId)) newSelection.add(fileId);
      });
      return newSelection;
    })
  }),
  /**
   * Action that clear the file selection.
   */
  ClearSelection: (0, import_helpers.defineFileAction)({
    id: "clear_selection",
    hotkeys: ["escape"],
    button: {
      name: "Clear selection",
      toolbar: true,
      contextMenu: true,
      group: "Actions",
      icon: import_icons.ChonkyIconName.clearSelection
    },
    selectionTransform: (({ prevSelection }) => {
      if (prevSelection.size === 0) return null;
      return /* @__PURE__ */ new Set();
    })
  }),
  /**
   * Action that enables List view.
   */
  EnableListView: (0, import_helpers.defineFileAction)({
    id: "enable_list_view",
    fileViewConfig: {
      mode: import_file_view.FileViewMode.List,
      entryHeight: 30
    },
    button: {
      name: "Switch to List view",
      toolbar: true,
      icon: import_icons.ChonkyIconName.list,
      iconOnly: true
    }
  }),
  /**
   * Action that enables Compact view. Note that compact view is still
   * experimental and should not be used in production.
   */
  EnableCompactView: (0, import_helpers.defineFileAction)({
    // TODO: Don't enable until compact view is fully supported
    id: "enable_compact_view",
    fileViewConfig: {
      mode: import_file_view.FileViewMode.Compact,
      entryHeight: 40,
      entryWidth: 220
    },
    button: {
      name: "Switch to Compact view",
      toolbar: true,
      icon: import_icons.ChonkyIconName.compact,
      iconOnly: true
    }
  }),
  /**
   * Action that enables Grid view.
   */
  EnableGridView: (0, import_helpers.defineFileAction)({
    id: "enable_grid_view",
    fileViewConfig: { mode: import_file_view.FileViewMode.Grid, entryWidth: 165, entryHeight: 130 },
    button: {
      name: "Switch to Grid view",
      toolbar: true,
      icon: import_icons.ChonkyIconName.smallThumbnail,
      iconOnly: true
    }
  }),
  /**
   * Action that sorts files by `file.name`.
   */
  SortFilesByName: (0, import_helpers.defineFileAction)({
    id: "sort_files_by_name",
    sortKeySelector: (file) => file ? file.name.toLowerCase() : void 0,
    button: {
      name: "Sort by name",
      toolbar: true,
      group: "Options"
    }
  }),
  /**
   * Action that sorts files by `file.size`.
   */
  SortFilesBySize: (0, import_helpers.defineFileAction)({
    id: "sort_files_by_size",
    sortKeySelector: (file) => file ? file.size : void 0,
    button: {
      name: "Sort by size",
      toolbar: true,
      group: "Options"
    }
  }),
  /**
   * Action that sorts files by `file.modDate`.
   */
  SortFilesByDate: (0, import_helpers.defineFileAction)({
    id: "sort_files_by_date",
    sortKeySelector: (file) => file ? file.modDate : void 0,
    button: {
      name: "Sort by date",
      toolbar: true,
      group: "Options"
    }
  }),
  /**
   * Action that toggles whether hidden files are shown to the user or not.
   */
  ToggleHiddenFiles: (0, import_helpers.defineFileAction)({
    id: "toggle_hidden_files",
    hotkeys: ["ctrl+h"],
    option: {
      id: import_option_ids.OptionIds.ShowHiddenFiles,
      defaultValue: true
    },
    button: {
      name: "Show hidden files",
      toolbar: true,
      group: "Options"
    }
  }),
  /**
   * Action that toggles whether folders should appear before files regardless of
   * current sort function.
   */
  ToggleShowFoldersFirst: (0, import_helpers.defineFileAction)({
    id: "toggle_show_folders_first",
    option: {
      id: import_option_ids.OptionIds.ShowFoldersFirst,
      defaultValue: true
    },
    button: {
      name: "Show folders first",
      toolbar: true,
      group: "Options"
    }
  }),
  /**
   * Action that focuses the search input when it is dispatched.
   */
  FocusSearchInput: (0, import_helpers.defineFileAction)(
    {
      id: "focus_search_input",
      hotkeys: ["ctrl+f"]
    },
    ({ getReduxState }) => {
      const focusSearchInput = (0, import_selectors.selectFocusSearchInput)(getReduxState());
      if (focusSearchInput) focusSearchInput();
    }
  ),
  /**
   * Action that enables List view.
   */
  ToggleDarkMode: (0, import_helpers.defineFileAction)({
    id: "enable_dark_mode",
    option: {
      id: import_option_ids.OptionIds.DarkMode,
      defaultValue: false
    },
    button: {
      name: "Enable dark mode",
      toolbar: true,
      icon: import_icons.ChonkyIconName.list,
      iconOnly: true
    }
  })
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultActions
});
