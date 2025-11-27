import { selectFocusSearchInput } from "../redux/selectors";
import { thunkRequestFileAction } from "../redux/thunks/dispatchers.thunks";
import { FileViewMode } from "../types/file-view.types";
import { ChonkyIconName } from "../types/icons.types";
import { FileHelper } from "../util/file-helper";
import { defineFileAction } from "../util/helpers";
import { EssentialActions } from "./essential";
import { OptionIds } from "./option-ids";
const DefaultActions = {
  /**
   * Action that can be used to open currently selected files.
   */
  OpenSelection: defineFileAction(
    {
      id: "open_selection",
      hotkeys: ["enter"],
      requiresSelection: true,
      fileFilter: FileHelper.isOpenable,
      button: {
        name: "Open selection",
        toolbar: true,
        contextMenu: true,
        group: "Actions",
        icon: ChonkyIconName.openFiles
      }
    },
    ({ state, reduxDispatch }) => {
      reduxDispatch(
        thunkRequestFileAction(EssentialActions.OpenFiles, {
          files: state.selectedFilesForAction
        })
      );
      return void 0;
    }
  ),
  /**
   * Action that selects all files.
   */
  SelectAllFiles: defineFileAction({
    id: "select_all_files",
    hotkeys: ["ctrl+a"],
    button: {
      name: "Select all files",
      toolbar: true,
      contextMenu: true,
      group: "Actions",
      icon: ChonkyIconName.selectAllFiles
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
  ClearSelection: defineFileAction({
    id: "clear_selection",
    hotkeys: ["escape"],
    button: {
      name: "Clear selection",
      toolbar: true,
      contextMenu: true,
      group: "Actions",
      icon: ChonkyIconName.clearSelection
    },
    selectionTransform: (({ prevSelection }) => {
      if (prevSelection.size === 0) return null;
      return /* @__PURE__ */ new Set();
    })
  }),
  /**
   * Action that enables List view.
   */
  EnableListView: defineFileAction({
    id: "enable_list_view",
    fileViewConfig: {
      mode: FileViewMode.List,
      entryHeight: 30
    },
    button: {
      name: "Switch to List view",
      toolbar: true,
      icon: ChonkyIconName.list,
      iconOnly: true
    }
  }),
  /**
   * Action that enables Compact view. Note that compact view is still
   * experimental and should not be used in production.
   */
  EnableCompactView: defineFileAction({
    // TODO: Don't enable until compact view is fully supported
    id: "enable_compact_view",
    fileViewConfig: {
      mode: FileViewMode.Compact,
      entryHeight: 40,
      entryWidth: 220
    },
    button: {
      name: "Switch to Compact view",
      toolbar: true,
      icon: ChonkyIconName.compact,
      iconOnly: true
    }
  }),
  /**
   * Action that enables Grid view.
   */
  EnableGridView: defineFileAction({
    id: "enable_grid_view",
    fileViewConfig: { mode: FileViewMode.Grid, entryWidth: 165, entryHeight: 130 },
    button: {
      name: "Switch to Grid view",
      toolbar: true,
      icon: ChonkyIconName.smallThumbnail,
      iconOnly: true
    }
  }),
  /**
   * Action that sorts files by `file.name`.
   */
  SortFilesByName: defineFileAction({
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
  SortFilesBySize: defineFileAction({
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
  SortFilesByDate: defineFileAction({
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
  ToggleHiddenFiles: defineFileAction({
    id: "toggle_hidden_files",
    hotkeys: ["ctrl+h"],
    option: {
      id: OptionIds.ShowHiddenFiles,
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
  ToggleShowFoldersFirst: defineFileAction({
    id: "toggle_show_folders_first",
    option: {
      id: OptionIds.ShowFoldersFirst,
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
  FocusSearchInput: defineFileAction(
    {
      id: "focus_search_input",
      hotkeys: ["ctrl+f"]
    },
    ({ getReduxState }) => {
      const focusSearchInput = selectFocusSearchInput(getReduxState());
      if (focusSearchInput) focusSearchInput();
    }
  ),
  /**
   * Action that enables List view.
   */
  ToggleDarkMode: defineFileAction({
    id: "enable_dark_mode",
    option: {
      id: OptionIds.DarkMode,
      defaultValue: false
    },
    button: {
      name: "Enable dark mode",
      toolbar: true,
      icon: ChonkyIconName.list,
      iconOnly: true
    }
  })
};
export {
  DefaultActions
};
