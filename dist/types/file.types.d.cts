import { Nullable, Undefinable } from './generic.types.cjs';
import { ChonkyIconName } from './icons.types.cjs';

interface FileData {
    id: string;
    name: string;
    ext?: string;
    isDir?: boolean;
    isHidden?: boolean;
    isSymlink?: boolean;
    isEncrypted?: boolean;
    openable?: boolean;
    selectable?: boolean;
    draggable?: boolean;
    droppable?: boolean;
    dndOpenable?: boolean;
    size?: number;
    modDate?: Date | string;
    childrenCount?: number;
    color?: string;
    icon?: ChonkyIconName | string | any;
    thumbnailUrl?: string;
    folderChainIcon?: Nullable<ChonkyIconName | string | any>;
    [property: string]: any;
}
type FileArray<FT extends FileData = FileData> = Nullable<FT>[];
type FileFilter = (file: Nullable<FileData>) => boolean;
type FileMap<FT extends FileData = FileData> = {
    [fileId: string]: FT;
};
type FileIdTrueMap = {
    [fileId: string]: Undefinable<true>;
};

export type { FileArray, FileData, FileFilter, FileIdTrueMap, FileMap };
