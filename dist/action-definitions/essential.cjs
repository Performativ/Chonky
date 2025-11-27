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
var essential_exports = {};
__export(essential_exports, {
  EssentialActions: () => EssentialActions
});
module.exports = __toCommonJS(essential_exports);
var import_reducers = require("../redux/reducers");
var import_selectors = require("../redux/selectors");
var import_thunks = require("../redux/thunks");
var import_dispatchers = require("../redux/thunks/dispatchers.thunks");
var import_icons = require("../types/icons.types");
var import_file_helper = require("../util/file-helper");
var import_helpers = require("../util/helpers");
var import_logger = require("../util/logger");
var import_index = require("./index");
const EssentialActions = {
  /**
   * Action that is dispatched when the user clicks on a file entry using their mouse.
   * Both single clicks and double clicks trigger this action.
   */
  MouseClickFile: (0, import_helpers.defineFileAction)(
    {
      id: "mouse_click_file",
      __payloadType: {}
    },
    ({ payload, reduxDispatch, getReduxState }) => {
      if (payload.clickType === "double") {
        if (import_file_helper.FileHelper.isOpenable(payload.file)) {
          reduxDispatch(
            (0, import_dispatchers.thunkRequestFileAction)(import_index.ChonkyActions.OpenFiles, {
              targetFile: payload.file,
              // To simulate Windows Explorer and Nautilus behaviour,
              // a double click on a file only opens that file even if
              // there is a selection.
              files: [payload.file]
            })
          );
        }
      } else {
        const disableSelection = (0, import_selectors.selectDisableSelection)(getReduxState());
        if (import_file_helper.FileHelper.isSelectable(payload.file) && !disableSelection) {
          if (payload.ctrlKey) {
            reduxDispatch(
              import_reducers.reduxActions.toggleSelection({
                fileId: payload.file.id,
                exclusive: false
              })
            );
            reduxDispatch(
              import_reducers.reduxActions.setLastClickIndex({
                index: payload.fileDisplayIndex,
                fileId: payload.file.id
              })
            );
          } else if (payload.shiftKey) {
            const lastClickIndex = import_selectors.selectors.getLastClickIndex(getReduxState());
            if (typeof lastClickIndex === "number") {
              let rangeStart = lastClickIndex;
              let rangeEnd = payload.fileDisplayIndex;
              if (rangeStart > rangeEnd) {
                [rangeStart, rangeEnd] = [rangeEnd, rangeStart];
              }
              reduxDispatch(
                import_thunks.reduxThunks.selectRange({ rangeStart, rangeEnd })
              );
            } else {
              reduxDispatch(
                import_reducers.reduxActions.toggleSelection({
                  fileId: payload.file.id,
                  exclusive: false
                })
              );
              reduxDispatch(
                import_reducers.reduxActions.setLastClickIndex({
                  index: payload.fileDisplayIndex,
                  fileId: payload.file.id
                })
              );
            }
          } else {
            reduxDispatch(
              import_reducers.reduxActions.toggleSelection({
                fileId: payload.file.id,
                exclusive: true
              })
            );
            reduxDispatch(
              import_reducers.reduxActions.setLastClickIndex({
                index: payload.fileDisplayIndex,
                fileId: payload.file.id
              })
            );
          }
        } else {
          if (!payload.ctrlKey && !disableSelection) {
            reduxDispatch(import_reducers.reduxActions.clearSelection());
          }
          reduxDispatch(
            import_reducers.reduxActions.setLastClickIndex({
              index: payload.fileDisplayIndex,
              fileId: payload.file.id
            })
          );
        }
      }
    }
  ),
  /**
   * Action that is dispatched when the user "clicks" on a file using their keyboard.
   * Using Space and Enter keys counts as clicking.
   */
  KeyboardClickFile: (0, import_helpers.defineFileAction)(
    {
      id: "keyboard_click_file",
      __payloadType: {}
    },
    ({ payload, reduxDispatch, getReduxState }) => {
      reduxDispatch(
        import_reducers.reduxActions.setLastClickIndex({
          index: payload.fileDisplayIndex,
          fileId: payload.file.id
        })
      );
      if (payload.enterKey) {
        if ((0, import_selectors.selectSelectionSize)(getReduxState()) === 0) {
          reduxDispatch(
            (0, import_dispatchers.thunkRequestFileAction)(import_index.ChonkyActions.OpenFiles, {
              targetFile: payload.file,
              files: [payload.file]
            })
          );
        }
      } else if (payload.spaceKey && import_file_helper.FileHelper.isSelectable(payload.file)) {
        reduxDispatch(
          import_reducers.reduxActions.toggleSelection({
            fileId: payload.file.id,
            exclusive: payload.ctrlKey
          })
        );
      }
    }
  ),
  /**
   * Action that is dispatched when user starts dragging some file.
   */
  StartDragNDrop: (0, import_helpers.defineFileAction)(
    {
      id: "start_drag_n_drop",
      __payloadType: {}
    },
    ({ payload, reduxDispatch, getReduxState }) => {
      const file = payload.draggedFile;
      if (!(0, import_selectors.getIsFileSelected)(getReduxState(), file)) {
        if (import_file_helper.FileHelper.isSelectable(file)) {
          reduxDispatch(
            import_reducers.reduxActions.selectFiles({
              fileIds: [file.id],
              reset: true
            })
          );
        }
      }
    }
  ),
  /**
   * Action that is dispatched when user either cancels the drag & drop interaction,
   * or drops a file somewhere.
   */
  EndDragNDrop: (0, import_helpers.defineFileAction)(
    {
      id: "end_drag_n_drop",
      __payloadType: {}
    },
    ({ payload, reduxDispatch, getReduxState }) => {
      if ((0, import_selectors.getIsFileSelected)(getReduxState(), payload.destination)) {
        return;
      }
      const { draggedFile, selectedFiles } = payload;
      const droppedFiles = selectedFiles.length > 0 ? selectedFiles : [draggedFile];
      reduxDispatch(
        (0, import_dispatchers.thunkRequestFileAction)(import_index.ChonkyActions.MoveFiles, {
          ...payload,
          files: droppedFiles
        })
      );
    }
  ),
  /**
   * Action that is dispatched when user moves files from one folder to another,
   * usually by dragging & dropping some files into the folder.
   */
  MoveFiles: (0, import_helpers.defineFileAction)({
    id: "move_files",
    __payloadType: {}
  }),
  /**
   * Action that is dispatched when the selection changes for any reason.
   */
  ChangeSelection: (0, import_helpers.defineFileAction)({
    id: "change_selection",
    __payloadType: {}
  }),
  /**
   * Action that is dispatched when user wants to open some files. This action is
   * often triggered by other actions.
   */
  OpenFiles: (0, import_helpers.defineFileAction)({
    id: "open_files",
    __payloadType: {}
  }),
  /**
   * Action that is triggered when user wants to go up a directory.
   */
  OpenParentFolder: (0, import_helpers.defineFileAction)(
    {
      id: "open_parent_folder",
      hotkeys: ["backspace"],
      button: {
        name: "Go up a directory",
        toolbar: true,
        contextMenu: false,
        icon: import_icons.ChonkyIconName.openParentFolder,
        iconOnly: true
      }
    },
    ({ reduxDispatch, getReduxState }) => {
      const parentFolder = (0, import_selectors.selectParentFolder)(getReduxState());
      if (import_file_helper.FileHelper.isOpenable(parentFolder)) {
        reduxDispatch(
          (0, import_dispatchers.thunkRequestFileAction)(import_index.ChonkyActions.OpenFiles, {
            targetFile: parentFolder,
            files: [parentFolder]
          })
        );
      } else {
        import_logger.Logger.warn(
          "Open parent folder effect was triggered  even though the parent folder is not openable. This indicates a bug in presentation components."
        );
      }
    }
  ),
  /**
   * Action that is dispatched when user opens the context menu, either by right click
   * on something or using the context menu button on their keyboard.
   */
  OpenFileContextMenu: (0, import_helpers.defineFileAction)(
    {
      id: "open_file_context_menu",
      __payloadType: {}
    },
    ({ payload, reduxDispatch, getReduxState }) => {
      const triggerFile = (0, import_selectors.getFileData)(getReduxState(), payload.triggerFileId);
      if (triggerFile) {
        const fileSelected = (0, import_selectors.getIsFileSelected)(getReduxState(), triggerFile);
        if (!fileSelected) {
          if (import_file_helper.FileHelper.isSelectable(triggerFile)) {
            reduxDispatch(
              import_reducers.reduxActions.selectFiles({
                fileIds: [payload.triggerFileId],
                reset: true
              })
            );
          } else {
            reduxDispatch(import_reducers.reduxActions.clearSelection());
          }
        }
      }
      reduxDispatch(
        import_reducers.reduxActions.showContextMenu({
          triggerFileId: payload.triggerFileId,
          mouseX: payload.clientX - 2,
          mouseY: payload.clientY - 4
        })
      );
    }
  )
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EssentialActions
});
