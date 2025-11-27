import { reduxActions } from "../redux/reducers";
import {
  getFileData,
  getIsFileSelected,
  selectDisableSelection,
  selectors,
  selectParentFolder,
  selectSelectionSize
} from "../redux/selectors";
import { reduxThunks } from "../redux/thunks";
import { thunkRequestFileAction } from "../redux/thunks/dispatchers.thunks";
import { ChonkyIconName } from "../types/icons.types";
import { FileHelper } from "../util/file-helper";
import { defineFileAction } from "../util/helpers";
import { Logger } from "../util/logger";
import { ChonkyActions } from "./index";
const EssentialActions = {
  /**
   * Action that is dispatched when the user clicks on a file entry using their mouse.
   * Both single clicks and double clicks trigger this action.
   */
  MouseClickFile: defineFileAction(
    {
      id: "mouse_click_file",
      __payloadType: {}
    },
    ({ payload, reduxDispatch, getReduxState }) => {
      if (payload.clickType === "double") {
        if (FileHelper.isOpenable(payload.file)) {
          reduxDispatch(
            thunkRequestFileAction(ChonkyActions.OpenFiles, {
              targetFile: payload.file,
              // To simulate Windows Explorer and Nautilus behaviour,
              // a double click on a file only opens that file even if
              // there is a selection.
              files: [payload.file]
            })
          );
        }
      } else {
        const disableSelection = selectDisableSelection(getReduxState());
        if (FileHelper.isSelectable(payload.file) && !disableSelection) {
          if (payload.ctrlKey) {
            reduxDispatch(
              reduxActions.toggleSelection({
                fileId: payload.file.id,
                exclusive: false
              })
            );
            reduxDispatch(
              reduxActions.setLastClickIndex({
                index: payload.fileDisplayIndex,
                fileId: payload.file.id
              })
            );
          } else if (payload.shiftKey) {
            const lastClickIndex = selectors.getLastClickIndex(getReduxState());
            if (typeof lastClickIndex === "number") {
              let rangeStart = lastClickIndex;
              let rangeEnd = payload.fileDisplayIndex;
              if (rangeStart > rangeEnd) {
                [rangeStart, rangeEnd] = [rangeEnd, rangeStart];
              }
              reduxDispatch(
                reduxThunks.selectRange({ rangeStart, rangeEnd })
              );
            } else {
              reduxDispatch(
                reduxActions.toggleSelection({
                  fileId: payload.file.id,
                  exclusive: false
                })
              );
              reduxDispatch(
                reduxActions.setLastClickIndex({
                  index: payload.fileDisplayIndex,
                  fileId: payload.file.id
                })
              );
            }
          } else {
            reduxDispatch(
              reduxActions.toggleSelection({
                fileId: payload.file.id,
                exclusive: true
              })
            );
            reduxDispatch(
              reduxActions.setLastClickIndex({
                index: payload.fileDisplayIndex,
                fileId: payload.file.id
              })
            );
          }
        } else {
          if (!payload.ctrlKey && !disableSelection) {
            reduxDispatch(reduxActions.clearSelection());
          }
          reduxDispatch(
            reduxActions.setLastClickIndex({
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
  KeyboardClickFile: defineFileAction(
    {
      id: "keyboard_click_file",
      __payloadType: {}
    },
    ({ payload, reduxDispatch, getReduxState }) => {
      reduxDispatch(
        reduxActions.setLastClickIndex({
          index: payload.fileDisplayIndex,
          fileId: payload.file.id
        })
      );
      if (payload.enterKey) {
        if (selectSelectionSize(getReduxState()) === 0) {
          reduxDispatch(
            thunkRequestFileAction(ChonkyActions.OpenFiles, {
              targetFile: payload.file,
              files: [payload.file]
            })
          );
        }
      } else if (payload.spaceKey && FileHelper.isSelectable(payload.file)) {
        reduxDispatch(
          reduxActions.toggleSelection({
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
  StartDragNDrop: defineFileAction(
    {
      id: "start_drag_n_drop",
      __payloadType: {}
    },
    ({ payload, reduxDispatch, getReduxState }) => {
      const file = payload.draggedFile;
      if (!getIsFileSelected(getReduxState(), file)) {
        if (FileHelper.isSelectable(file)) {
          reduxDispatch(
            reduxActions.selectFiles({
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
  EndDragNDrop: defineFileAction(
    {
      id: "end_drag_n_drop",
      __payloadType: {}
    },
    ({ payload, reduxDispatch, getReduxState }) => {
      if (getIsFileSelected(getReduxState(), payload.destination)) {
        return;
      }
      const { draggedFile, selectedFiles } = payload;
      const droppedFiles = selectedFiles.length > 0 ? selectedFiles : [draggedFile];
      reduxDispatch(
        thunkRequestFileAction(ChonkyActions.MoveFiles, {
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
  MoveFiles: defineFileAction({
    id: "move_files",
    __payloadType: {}
  }),
  /**
   * Action that is dispatched when the selection changes for any reason.
   */
  ChangeSelection: defineFileAction({
    id: "change_selection",
    __payloadType: {}
  }),
  /**
   * Action that is dispatched when user wants to open some files. This action is
   * often triggered by other actions.
   */
  OpenFiles: defineFileAction({
    id: "open_files",
    __payloadType: {}
  }),
  /**
   * Action that is triggered when user wants to go up a directory.
   */
  OpenParentFolder: defineFileAction(
    {
      id: "open_parent_folder",
      hotkeys: ["backspace"],
      button: {
        name: "Go up a directory",
        toolbar: true,
        contextMenu: false,
        icon: ChonkyIconName.openParentFolder,
        iconOnly: true
      }
    },
    ({ reduxDispatch, getReduxState }) => {
      const parentFolder = selectParentFolder(getReduxState());
      if (FileHelper.isOpenable(parentFolder)) {
        reduxDispatch(
          thunkRequestFileAction(ChonkyActions.OpenFiles, {
            targetFile: parentFolder,
            files: [parentFolder]
          })
        );
      } else {
        Logger.warn(
          "Open parent folder effect was triggered  even though the parent folder is not openable. This indicates a bug in presentation components."
        );
      }
    }
  ),
  /**
   * Action that is dispatched when user opens the context menu, either by right click
   * on something or using the context menu button on their keyboard.
   */
  OpenFileContextMenu: defineFileAction(
    {
      id: "open_file_context_menu",
      __payloadType: {}
    },
    ({ payload, reduxDispatch, getReduxState }) => {
      const triggerFile = getFileData(getReduxState(), payload.triggerFileId);
      if (triggerFile) {
        const fileSelected = getIsFileSelected(getReduxState(), triggerFile);
        if (!fileSelected) {
          if (FileHelper.isSelectable(triggerFile)) {
            reduxDispatch(
              reduxActions.selectFiles({
                fileIds: [payload.triggerFileId],
                reset: true
              })
            );
          } else {
            reduxDispatch(reduxActions.clearSelection());
          }
        }
      }
      reduxDispatch(
        reduxActions.showContextMenu({
          triggerFileId: payload.triggerFileId,
          mouseX: payload.clientX - 2,
          mouseY: payload.clientY - 4
        })
      );
    }
  )
};
export {
  EssentialActions
};
