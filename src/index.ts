import type {
    GenericFileActionHandler,
    MapFileActionsToData,
} from './types/action-handler.types';
import type { ChonkyActionUnion } from './types/file-browser.types';

export { FileBrowser } from './components/external/FileBrowser';
export { FileContextMenu } from './components/external/FileContextMenu';
export { FileNavbar } from './components/external/FileNavbar';
export { FileToolbar } from './components/external/FileToolbar';
export { FullFileBrowser } from './components/external/FullFileBrowser';
export { FileList } from './components/file-list/FileList';

export { ChonkyActions, DefaultFileActions, OptionIds } from './action-definitions';
export { defineFileAction } from './util/helpers';

export type {
    FileActionData,
    FileActionState,
    GenericFileActionHandler,
    MapFileActionsToData,
} from './types/action-handler.types';
export {
    CustomVisibilityState,
    type FileAction,
    type FileActionButton,
    type FileActionEffect,
    type FileSelectionTransform,
} from './types/action.types';
export type {
    ChonkyActionUnion,
    FileBrowserHandle,
    FileBrowserProps,
} from './types/file-browser.types';
export {
    FileViewMode,
    type FileViewConfig,
    type FileViewConfigGrid,
    type FileViewConfigList,
} from './types/file-view.types';
export type { FileArray, FileData } from './types/file.types';
export { ChonkyIconName, type ChonkyIconProps } from './types/icons.types';
export type { ThumbnailGenerator } from './types/thumbnails.types';
export { FileHelper } from './util/file-helper';

export type { ChonkyFormatters, I18nConfig } from './types/i18n.types';
export {
    defaultFormatters,
    getActionI18nId,
    getI18nId,
    I18nNamespace,
} from './util/i18n';

export { setChonkyDefaults } from './util/default-config';

export type FileActionHandler = GenericFileActionHandler<ChonkyActionUnion>;
export type ChonkyFileActionData = MapFileActionsToData<ChonkyActionUnion>;

// Extensions
export * from './extensions';

// Redux/Store
export * from './redux/reducers';
export * from './redux/selectors';
export * from './redux/store';
export {
    thunkDispatchFileAction,
    thunkRequestFileAction,
} from './redux/thunks/dispatchers.thunks';
