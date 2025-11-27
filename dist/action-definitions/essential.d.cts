import { WritableProps } from '../types/generic.types.cjs';
import { MouseClickFilePayload, KeyboardClickFilePayload, StartDragNDropPayload, EndDragNDropPayload, MoveFilesPayload, ChangeSelectionPayload, OpenFilesPayload, OpenFileContextMenuPayload } from '../types/action-payloads.types.cjs';
import { ChonkyIconName } from '../types/icons.types.cjs';
import '../types/file.types.cjs';

declare const EssentialActions: {
    /**
     * Action that is dispatched when the user clicks on a file entry using their mouse.
     * Both single clicks and double clicks trigger this action.
     */
    MouseClickFile: WritableProps<{
        readonly id: "mouse_click_file";
        readonly __payloadType: MouseClickFilePayload;
    }>;
    /**
     * Action that is dispatched when the user "clicks" on a file using their keyboard.
     * Using Space and Enter keys counts as clicking.
     */
    KeyboardClickFile: WritableProps<{
        readonly id: "keyboard_click_file";
        readonly __payloadType: KeyboardClickFilePayload;
    }>;
    /**
     * Action that is dispatched when user starts dragging some file.
     */
    StartDragNDrop: WritableProps<{
        readonly id: "start_drag_n_drop";
        readonly __payloadType: StartDragNDropPayload;
    }>;
    /**
     * Action that is dispatched when user either cancels the drag & drop interaction,
     * or drops a file somewhere.
     */
    EndDragNDrop: WritableProps<{
        readonly id: "end_drag_n_drop";
        readonly __payloadType: EndDragNDropPayload;
    }>;
    /**
     * Action that is dispatched when user moves files from one folder to another,
     * usually by dragging & dropping some files into the folder.
     */
    MoveFiles: WritableProps<{
        readonly id: "move_files";
        readonly __payloadType: MoveFilesPayload;
    }>;
    /**
     * Action that is dispatched when the selection changes for any reason.
     */
    ChangeSelection: WritableProps<{
        readonly id: "change_selection";
        readonly __payloadType: ChangeSelectionPayload;
    }>;
    /**
     * Action that is dispatched when user wants to open some files. This action is
     * often triggered by other actions.
     */
    OpenFiles: WritableProps<{
        readonly id: "open_files";
        readonly __payloadType: OpenFilesPayload;
    }>;
    /**
     * Action that is triggered when user wants to go up a directory.
     */
    OpenParentFolder: WritableProps<{
        readonly id: "open_parent_folder";
        readonly hotkeys: ["backspace"];
        readonly button: {
            readonly name: "Go up a directory";
            readonly toolbar: true;
            readonly contextMenu: false;
            readonly icon: ChonkyIconName.openParentFolder;
            readonly iconOnly: true;
        };
    }>;
    /**
     * Action that is dispatched when user opens the context menu, either by right click
     * on something or using the context menu button on their keyboard.
     */
    OpenFileContextMenu: WritableProps<{
        readonly id: "open_file_context_menu";
        readonly __payloadType: OpenFileContextMenuPayload;
    }>;
};

export { EssentialActions };
