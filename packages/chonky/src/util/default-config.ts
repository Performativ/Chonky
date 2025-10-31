import { ChonkyActions } from '../action-definitions/index';
import { ChonkyIconPlaceholder } from '../components/internal/ChonkyIconPlaceholder';
import { FileBrowserProps } from '../types/file-browser.types';

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
    iconComponent: ChonkyIconPlaceholder,
    darkMode: false,
    i18n: {},
};

export const setChonkyDefaults = (config: Partial<ChonkyConfig>) => {
    Object.assign(defaultConfig, config); // Reset to original defaults
};
