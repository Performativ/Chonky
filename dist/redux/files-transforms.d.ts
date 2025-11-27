import { b as FileAction } from '../action-handler.types-mCLrTO7-.js';
import { FileArray } from '../types/file.types.js';
import { Nullable } from '../types/generic.types.js';
import '../types/file-view.types.js';
import '../types/icons.types.js';
import '@reduxjs/toolkit';
import '../types/action-menus.types.js';
import '../types/context-menu.types.js';
import '../types/options.types.js';
import '../types/selection.types.js';
import '../types/sort.types.js';
import '../types/thumbnails.types.js';

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
