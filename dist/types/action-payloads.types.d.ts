import { FileData } from './file.types.js';
import { Nullable } from './generic.types.js';
import './icons.types.js';

interface MouseClickFilePayload {
    file: FileData;
    fileDisplayIndex: number;
    altKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
    clickType: 'single' | 'double';
}
interface KeyboardClickFilePayload {
    file: FileData;
    fileDisplayIndex: number;
    enterKey: boolean;
    spaceKey: boolean;
    altKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
}
interface StartDragNDropPayload {
    sourceInstanceId: string;
    source: Nullable<FileData>;
    draggedFile: FileData;
    selectedFiles: FileData[];
}
type EndDragNDropPayload = StartDragNDropPayload & {
    destination: FileData;
    copy: boolean;
};
type MoveFilesPayload = EndDragNDropPayload & {
    files: FileData[];
};
type ChangeSelectionPayload = {
    selection: Set<string>;
};
interface OpenFilesPayload {
    targetFile?: FileData;
    files: FileData[];
}
interface OpenFileContextMenuPayload {
    clientX: number;
    clientY: number;
    triggerFileId: Nullable<string>;
}

export type { ChangeSelectionPayload, EndDragNDropPayload, KeyboardClickFilePayload, MouseClickFilePayload, MoveFilesPayload, OpenFileContextMenuPayload, OpenFilesPayload, StartDragNDropPayload };
