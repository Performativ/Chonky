import * as redux from 'redux';
import * as _reduxjs_toolkit from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { R as RootState, G as GenericFileActionHandler, b as FileAction } from '../action-handler.types-mCLrTO7-.js';
import { FileActionMenuItem } from '../types/action-menus.types.js';
import { ContextMenuConfig } from '../types/context-menu.types.js';
import { FileViewConfig } from '../types/file-view.types.js';
import { FileArray, FileIdTrueMap } from '../types/file.types.js';
import { OptionMap } from '../types/options.types.js';
import { SortOrder } from '../types/sort.types.js';
import { ThumbnailGenerator } from '../types/thumbnails.types.js';
import { Nilable, Nullable } from '../types/generic.types.js';
import '../types/icons.types.js';
import '../types/selection.types.js';

declare const reduxActions: _reduxjs_toolkit.CaseReducerActions<{
    setExternalFileActionHandler(state: RootState, action: PayloadAction<Nilable<GenericFileActionHandler<FileAction>>>): void;
    setRawFileActions(state: RootState, action: PayloadAction<FileAction[] | any>): void;
    setFileActionsErrorMessages(state: RootState, action: PayloadAction<string[]>): void;
    setFileActions(state: RootState, action: PayloadAction<FileAction[]>): void;
    updateFileActionMenuItems(state: RootState, action: PayloadAction<[FileActionMenuItem[], FileActionMenuItem[]]>): void;
    setRawFolderChain(state: RootState, action: PayloadAction<FileArray | any>): void;
    setRawFiles(state: RootState, action: PayloadAction<FileArray | any>): void;
    setSortedFileIds(state: RootState, action: PayloadAction<Nullable<string>[]>): void;
    setHiddenFileIds(state: RootState, action: PayloadAction<FileIdTrueMap>): void;
    setFocusSearchInput(state: RootState, action: PayloadAction<Nullable<() => void>>): void;
    setSearchString(state: RootState, action: PayloadAction<string>): void;
    selectAllFiles(state: RootState): void;
    selectFiles(state: RootState, action: PayloadAction<{
        fileIds: string[];
        reset: boolean;
    }>): void;
    toggleSelection(state: RootState, action: PayloadAction<{
        fileId: string;
        exclusive: boolean;
    }>): void;
    clearSelection(state: RootState): void;
    setSelectionDisabled(state: RootState, action: PayloadAction<boolean>): void;
    setFileViewConfig(state: RootState, action: PayloadAction<FileViewConfig>): void;
    setSort(state: RootState, action: PayloadAction<{
        actionId: string;
        order: SortOrder;
    }>): void;
    setOptionDefaults(state: RootState, action: PayloadAction<OptionMap>): void;
    toggleOption(state: RootState, action: PayloadAction<string>): void;
    setThumbnailGenerator(state: RootState, action: PayloadAction<Nullable<ThumbnailGenerator>>): void;
    setDoubleClickDelay(state: RootState, action: PayloadAction<number>): void;
    setClearSelectionOnOutsideClick(state: RootState, action: PayloadAction<boolean>): void;
    setLastClickIndex(state: RootState, action: PayloadAction<Nullable<{
        index: number;
        fileId: string;
    }>>): void;
    setContextMenuMounted(state: RootState, action: PayloadAction<boolean>): void;
    showContextMenu(state: RootState, action: PayloadAction<ContextMenuConfig>): void;
    hideContextMenu(state: RootState): void;
}, "root">;
declare const rootReducer: redux.Reducer<RootState>;

export { reduxActions, rootReducer };
