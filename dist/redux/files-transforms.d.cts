import { b as FileAction } from '../action-handler.types-swQLT4E1.cjs';
import { FileArray } from '../types/file.types.cjs';
import { Nullable } from '../types/generic.types.cjs';
import '../types/file-view.types.cjs';
import '../types/icons.types.cjs';
import '@reduxjs/toolkit';
import '../types/action-menus.types.cjs';
import '../types/context-menu.types.cjs';
import '../types/options.types.cjs';
import '../types/selection.types.cjs';
import '../types/sort.types.cjs';
import '../types/thumbnails.types.cjs';

interface SanitizeFiles {
    (mode: 'files', rawArray: FileArray | any): {
        sanitizedArray: FileArray;
        errorMessages: string[];
    };
    (mode: 'folderChain', rawArray: Nullable<FileArray> | any): {
        sanitizedArray: FileArray;
        errorMessages: string[];
    };
    (mode: 'fileActions', rawArray: FileAction[] | any): {
        sanitizedArray: FileAction[];
        errorMessages: string[];
    };
}
declare const sanitizeInputArray: SanitizeFiles;

export { sanitizeInputArray };
