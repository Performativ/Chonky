import { MouseClickFilePayload, KeyboardClickFilePayload, StartDragNDropPayload, EndDragNDropPayload, MoveFilesPayload, ChangeSelectionPayload, OpenFilesPayload, OpenFileContextMenuPayload } from '../types/action-payloads.types.js';
import { WritableProps, Nullable } from '../types/generic.types.js';
import { e as FileSelectionTransform } from '../action-handler.types-mCLrTO7-.js';
import { FileData } from '../types/file.types.js';
import { ChonkyIconName } from '../types/icons.types.js';
import { FileViewMode } from '../types/file-view.types.js';
import { FileHelper } from '../util/file-helper.js';
export { OptionIds } from './option-ids.js';
import '@reduxjs/toolkit';
import '../types/action-menus.types.js';
import '../types/context-menu.types.js';
import '../types/options.types.js';
import '../types/selection.types.js';
import '../types/sort.types.js';
import '../types/thumbnails.types.js';

declare const ChonkyActions: {
    CopyFiles: WritableProps<{
        readonly id: "copy_files";
        readonly requiresSelection: true;
        readonly hotkeys: ["ctrl+c"];
        readonly button: {
            readonly name: "Copy selection";
            readonly toolbar: true;
            readonly contextMenu: true;
            readonly group: "Actions";
            readonly icon: ChonkyIconName.copy;
        };
    }>;
    CreateFolder: WritableProps<{
        readonly id: "create_folder";
        readonly button: {
            readonly name: "Create folder";
            readonly toolbar: true;
            readonly tooltip: "Create a folder";
            readonly icon: ChonkyIconName.folderCreate;
        };
    }>;
    UploadFiles: WritableProps<{
        readonly id: "upload_files";
        readonly button: {
            readonly name: "Upload files";
            readonly toolbar: true;
            readonly tooltip: "Upload files";
            readonly icon: ChonkyIconName.upload;
        };
    }>;
    DownloadFiles: WritableProps<{
        readonly id: "download_files";
        readonly requiresSelection: true;
        readonly button: {
            readonly name: "Download files";
            readonly toolbar: true;
            readonly contextMenu: true;
            readonly group: "Actions";
            readonly icon: ChonkyIconName.download;
        };
    }>;
    DeleteFiles: WritableProps<{
        readonly id: "delete_files";
        readonly requiresSelection: true;
        readonly hotkeys: ["delete"];
        readonly button: {
            readonly name: "Delete files";
            readonly toolbar: true;
            readonly contextMenu: true;
            readonly group: "Actions";
            readonly icon: ChonkyIconName.trash;
        };
    }>;
    OpenSelection: WritableProps<{
        readonly id: "open_selection";
        readonly hotkeys: ["enter"];
        readonly requiresSelection: true;
        readonly fileFilter: typeof FileHelper.isOpenable;
        readonly button: {
            readonly name: "Open selection";
            readonly toolbar: true;
            readonly contextMenu: true;
            readonly group: "Actions";
            readonly icon: ChonkyIconName.openFiles;
        };
    }>;
    SelectAllFiles: WritableProps<{
        readonly id: "select_all_files";
        readonly hotkeys: ["ctrl+a"];
        readonly button: {
            readonly name: "Select all files";
            readonly toolbar: true;
            readonly contextMenu: true;
            readonly group: "Actions";
            readonly icon: ChonkyIconName.selectAllFiles;
        };
        readonly selectionTransform: FileSelectionTransform;
    }>;
    ClearSelection: WritableProps<{
        readonly id: "clear_selection";
        readonly hotkeys: ["escape"];
        readonly button: {
            readonly name: "Clear selection";
            readonly toolbar: true;
            readonly contextMenu: true;
            readonly group: "Actions";
            readonly icon: ChonkyIconName.clearSelection;
        };
        readonly selectionTransform: FileSelectionTransform;
    }>;
    EnableListView: WritableProps<{
        readonly id: "enable_list_view";
        readonly fileViewConfig: {
            readonly mode: FileViewMode.List;
            readonly entryHeight: 30;
        };
        readonly button: {
            readonly name: "Switch to List view";
            readonly toolbar: true;
            readonly icon: ChonkyIconName.list;
            readonly iconOnly: true;
        };
    }>;
    EnableCompactView: WritableProps<{
        readonly id: "enable_compact_view";
        readonly fileViewConfig: {
            readonly mode: FileViewMode.Compact;
            readonly entryHeight: 40;
            readonly entryWidth: 220;
        };
        readonly button: {
            readonly name: "Switch to Compact view";
            readonly toolbar: true;
            readonly icon: ChonkyIconName.compact;
            readonly iconOnly: true;
        };
    }>;
    EnableGridView: WritableProps<{
        readonly id: "enable_grid_view";
        readonly fileViewConfig: {
            readonly mode: FileViewMode.Grid;
            readonly entryWidth: 165;
            readonly entryHeight: 130;
        };
        readonly button: {
            readonly name: "Switch to Grid view";
            readonly toolbar: true;
            readonly icon: ChonkyIconName.smallThumbnail;
            readonly iconOnly: true;
        };
    }>;
    SortFilesByName: WritableProps<{
        readonly id: "sort_files_by_name";
        readonly sortKeySelector: (file: Nullable<FileData>) => string | undefined;
        readonly button: {
            readonly name: "Sort by name";
            readonly toolbar: true;
            readonly group: "Options";
        };
    }>;
    SortFilesBySize: WritableProps<{
        readonly id: "sort_files_by_size";
        readonly sortKeySelector: (file: Nullable<FileData>) => number | undefined;
        readonly button: {
            readonly name: "Sort by size";
            readonly toolbar: true;
            readonly group: "Options";
        };
    }>;
    SortFilesByDate: WritableProps<{
        readonly id: "sort_files_by_date";
        readonly sortKeySelector: (file: Nullable<FileData>) => string | Date | undefined;
        readonly button: {
            readonly name: "Sort by date";
            readonly toolbar: true;
            readonly group: "Options";
        };
    }>;
    ToggleHiddenFiles: WritableProps<{
        readonly id: "toggle_hidden_files";
        readonly hotkeys: ["ctrl+h"];
        readonly option: {
            readonly id: string;
            readonly defaultValue: true;
        };
        readonly button: {
            readonly name: "Show hidden files";
            readonly toolbar: true;
            readonly group: "Options";
        };
    }>;
    ToggleShowFoldersFirst: WritableProps<{
        readonly id: "toggle_show_folders_first";
        readonly option: {
            readonly id: string;
            readonly defaultValue: true;
        };
        readonly button: {
            readonly name: "Show folders first";
            readonly toolbar: true;
            readonly group: "Options";
        };
    }>;
    FocusSearchInput: WritableProps<{
        readonly id: "focus_search_input";
        readonly hotkeys: ["ctrl+f"];
    }>;
    ToggleDarkMode: WritableProps<{
        readonly id: "enable_dark_mode";
        readonly option: {
            readonly id: string;
            readonly defaultValue: false;
        };
        readonly button: {
            readonly name: "Enable dark mode";
            readonly toolbar: true;
            readonly icon: ChonkyIconName.list;
            readonly iconOnly: true;
        };
    }>;
    MouseClickFile: WritableProps<{
        readonly id: "mouse_click_file";
        readonly __payloadType: MouseClickFilePayload;
    }>;
    KeyboardClickFile: WritableProps<{
        readonly id: "keyboard_click_file";
        readonly __payloadType: KeyboardClickFilePayload;
    }>;
    StartDragNDrop: WritableProps<{
        readonly id: "start_drag_n_drop";
        readonly __payloadType: StartDragNDropPayload;
    }>;
    EndDragNDrop: WritableProps<{
        readonly id: "end_drag_n_drop";
        readonly __payloadType: EndDragNDropPayload;
    }>;
    MoveFiles: WritableProps<{
        readonly id: "move_files";
        readonly __payloadType: MoveFilesPayload;
    }>;
    ChangeSelection: WritableProps<{
        readonly id: "change_selection";
        readonly __payloadType: ChangeSelectionPayload;
    }>;
    OpenFiles: WritableProps<{
        readonly id: "open_files";
        readonly __payloadType: OpenFilesPayload;
    }>;
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
    OpenFileContextMenu: WritableProps<{
        readonly id: "open_file_context_menu";
        readonly __payloadType: OpenFileContextMenuPayload;
    }>;
};
declare const EssentialFileActions: (WritableProps<{
    readonly id: "mouse_click_file";
    readonly __payloadType: MouseClickFilePayload;
}> | WritableProps<{
    readonly id: "keyboard_click_file";
    readonly __payloadType: KeyboardClickFilePayload;
}> | WritableProps<{
    readonly id: "start_drag_n_drop";
    readonly __payloadType: StartDragNDropPayload;
}> | WritableProps<{
    readonly id: "end_drag_n_drop";
    readonly __payloadType: EndDragNDropPayload;
}> | WritableProps<{
    readonly id: "move_files";
    readonly __payloadType: MoveFilesPayload;
}> | WritableProps<{
    readonly id: "change_selection";
    readonly __payloadType: ChangeSelectionPayload;
}> | WritableProps<{
    readonly id: "open_files";
    readonly __payloadType: OpenFilesPayload;
}> | WritableProps<{
    readonly id: "open_parent_folder";
    readonly hotkeys: ["backspace"];
    readonly button: {
        readonly name: "Go up a directory";
        readonly toolbar: true;
        readonly contextMenu: false;
        readonly icon: ChonkyIconName.openParentFolder;
        readonly iconOnly: true;
    };
}> | WritableProps<{
    readonly id: "open_file_context_menu";
    readonly __payloadType: OpenFileContextMenuPayload;
}>)[];
declare const DefaultFileActions: (WritableProps<{
    readonly id: "open_selection";
    readonly hotkeys: ["enter"];
    readonly requiresSelection: true;
    readonly fileFilter: typeof FileHelper.isOpenable;
    readonly button: {
        readonly name: "Open selection";
        readonly toolbar: true;
        readonly contextMenu: true;
        readonly group: "Actions";
        readonly icon: ChonkyIconName.openFiles;
    };
}> | WritableProps<{
    readonly id: "select_all_files";
    readonly hotkeys: ["ctrl+a"];
    readonly button: {
        readonly name: "Select all files";
        readonly toolbar: true;
        readonly contextMenu: true;
        readonly group: "Actions";
        readonly icon: ChonkyIconName.selectAllFiles;
    };
    readonly selectionTransform: FileSelectionTransform;
}> | WritableProps<{
    readonly id: "clear_selection";
    readonly hotkeys: ["escape"];
    readonly button: {
        readonly name: "Clear selection";
        readonly toolbar: true;
        readonly contextMenu: true;
        readonly group: "Actions";
        readonly icon: ChonkyIconName.clearSelection;
    };
    readonly selectionTransform: FileSelectionTransform;
}> | WritableProps<{
    readonly id: "enable_list_view";
    readonly fileViewConfig: {
        readonly mode: FileViewMode.List;
        readonly entryHeight: 30;
    };
    readonly button: {
        readonly name: "Switch to List view";
        readonly toolbar: true;
        readonly icon: ChonkyIconName.list;
        readonly iconOnly: true;
    };
}> | WritableProps<{
    readonly id: "enable_grid_view";
    readonly fileViewConfig: {
        readonly mode: FileViewMode.Grid;
        readonly entryWidth: 165;
        readonly entryHeight: 130;
    };
    readonly button: {
        readonly name: "Switch to Grid view";
        readonly toolbar: true;
        readonly icon: ChonkyIconName.smallThumbnail;
        readonly iconOnly: true;
    };
}> | WritableProps<{
    readonly id: "sort_files_by_name";
    readonly sortKeySelector: (file: Nullable<FileData>) => string | undefined;
    readonly button: {
        readonly name: "Sort by name";
        readonly toolbar: true;
        readonly group: "Options";
    };
}> | WritableProps<{
    readonly id: "sort_files_by_size";
    readonly sortKeySelector: (file: Nullable<FileData>) => number | undefined;
    readonly button: {
        readonly name: "Sort by size";
        readonly toolbar: true;
        readonly group: "Options";
    };
}> | WritableProps<{
    readonly id: "sort_files_by_date";
    readonly sortKeySelector: (file: Nullable<FileData>) => string | Date | undefined;
    readonly button: {
        readonly name: "Sort by date";
        readonly toolbar: true;
        readonly group: "Options";
    };
}> | WritableProps<{
    readonly id: "toggle_hidden_files";
    readonly hotkeys: ["ctrl+h"];
    readonly option: {
        readonly id: string;
        readonly defaultValue: true;
    };
    readonly button: {
        readonly name: "Show hidden files";
        readonly toolbar: true;
        readonly group: "Options";
    };
}> | WritableProps<{
    readonly id: "toggle_show_folders_first";
    readonly option: {
        readonly id: string;
        readonly defaultValue: true;
    };
    readonly button: {
        readonly name: "Show folders first";
        readonly toolbar: true;
        readonly group: "Options";
    };
}> | WritableProps<{
    readonly id: "focus_search_input";
    readonly hotkeys: ["ctrl+f"];
}>)[];

export { ChonkyActions, DefaultFileActions, EssentialFileActions };
