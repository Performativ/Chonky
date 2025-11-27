import { FileData } from '../../types/file.types.js';
import { Nullable } from '../../types/generic.types.js';
import '../../types/icons.types.js';

interface FolderChainItem {
    file: Nullable<FileData>;
    disabled: boolean;
    onClick?: () => void;
}
declare const useFolderChainItems: () => FolderChainItem[];

export { type FolderChainItem, useFolderChainItems };
