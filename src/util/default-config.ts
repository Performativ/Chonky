import { ChonkyActions } from '../action-definitions/index';
import type { FileBrowserProps } from '../types/file-browser.types';
import { ChonkyIconFA } from './icon-helper';

export type ChonkyConfig = Pick<
    FileBrowserProps,
    | 'fileActions'
    | 'onFileAction'
    | 'thumbnailGenerator'
    | 'doubleClickDelay'
    | 'disableSelection'
    | 'disableDefaultFileActions'
    | 'defaultSortActionId'
    | 'defaultFileViewActionId'
    | 'clearSelectionOnOutsideClick'
    | 'iconComponent'
    | 'darkMode'
    | 'i18n'
>;

export const defaultConfig: ChonkyConfig = {
    fileActions: null,
    onFileAction: null,
    thumbnailGenerator: null,
    doubleClickDelay: 300,
    disableSelection: false,
    disableDefaultFileActions: false,
    defaultSortActionId: ChonkyActions.SortFilesByName.id,
    defaultFileViewActionId: ChonkyActions.EnableGridView.id,
    clearSelectionOnOutsideClick: true,
    iconComponent: ChonkyIconFA,
    darkMode: false,
    i18n: {},
};

export const setChonkyDefaults = (config: Partial<ChonkyConfig>) => {
    Object.assign(defaultConfig, config); // Reset to original defaults
};
