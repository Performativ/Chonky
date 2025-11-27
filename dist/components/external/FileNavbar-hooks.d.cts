import { FileData } from '../../types/file.types.cjs';
import { Nullable } from '../../types/generic.types.cjs';
import '../../types/icons.types.cjs';

interface FolderChainItem {
    file: Nullable<FileData>;
    disabled: boolean;
    onClick?: () => void;
}
declare const useFolderChainItems: () => FolderChainItem[];

export { type FolderChainItem, useFolderChainItems };
