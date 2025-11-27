import { Nullable, MaybePromisedValue } from './types/generic.types.cjs';
import { FileArray, FileMap, FileIdTrueMap, FileFilter, FileData } from './types/file.types.cjs';
import { FileViewConfig } from './types/file-view.types.cjs';
import { ChonkyIconName } from './types/icons.types.cjs';
import { ThunkDispatch, Action, ThunkAction } from '@reduxjs/toolkit';
import { FileActionMenuItem } from './types/action-menus.types.cjs';
import { ContextMenuConfig } from './types/context-menu.types.cjs';
import { OptionMap } from './types/options.types.cjs';
import { FileSelection } from './types/selection.types.cjs';
import { SortOrder, FileSortKeySelector } from './types/sort.types.cjs';
import { ThumbnailGenerator } from './types/thumbnails.types.cjs';

type RootState = {
    instanceId: string;
    externalFileActionHandler: Nullable<GenericFileActionHandler<FileAction>>;
    rawFileActions: FileAction[] | any;
    fileActionsErrorMessages: string[];
    fileActionMap: FileActionMap;
    fileActionIds: string[];
    toolbarItems: FileActionMenuItem[];
    contextMenuItems: FileActionMenuItem[];
    rawFolderChain: Nullable<FileArray> | any;
    folderChainErrorMessages: string[];
    folderChain: FileArray;
    rawFiles: FileArray | any;
    filesErrorMessages: string[];
    fileMap: FileMap;
    fileIds: Nullable<string>[];
    cleanFileIds: string[];
    sortedFileIds: Nullable<string>[];
    hiddenFileIdMap: FileIdTrueMap;
    focusSearchInput: Nullable<() => void>;
    searchString: string;
    searchMode: 'currentFolder';
    selectionMap: FileSelection;
    disableSelection: boolean;
    fileViewConfig: FileViewConfig;
    sortActionId: Nullable<string>;
    sortOrder: SortOrder;
    optionMap: OptionMap;
    thumbnailGenerator: Nullable<ThumbnailGenerator>;
    doubleClickDelay: number;
    clearSelectionOnOutsideClick: boolean;
    lastClick: Nullable<{
        index: number;
        fileId: string;
    }>;
    contextMenuMounted: boolean;
    contextMenuConfig: Nullable<ContextMenuConfig>;
};
type ChonkyThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, null, Action<string>>;
type ChonkyDispatch = ThunkDispatch<RootState, null, Action<string>>;

interface FileAction {
    /**
     * Unique file action ID. If you set the action ID to one of the built-in Chonky
     * action action IDs, you custom action definition will override the built-in
     * definition.
     */
    id: string;
    /**
     * When set to `true`, the action will only be active (dispatchable) when user
     * selects one or more files. If `fileFilter` is defined, it will be applied to
     * selection before checking if its empty.
     */
    requiresSelection?: boolean;
    /**
     * A predicate that determines whether a file should be included in the selection
     * for this action.
     */
    fileFilter?: FileFilter;
    /**
     * List of hotkeys that should trigger this action, defined using `hotkey-js`
     * notation.
     * @see https://www.npmjs.com/package/hotkeys-js
     */
    hotkeys?: string[] | readonly string[];
    /**
     * When button is defined and `toolbar` or `contextMenu` is set to `true`, a
     * button will be added to the relevant UI component. Clicking on this button
     * will active this action. The appearance of the button will change based on
     * the action definition and the current Chonky state.
     */
    button?: FileActionButton;
    /**
     * When `sortKeySelector` is specified, the action becomes a sorting toggle. When
     * this action is activated, it will sort files using the key selector, toggling
     * between Ascending and Descending orders.
     */
    sortKeySelector?: FileSortKeySelector;
    /**
     * When `fileViewConfig` is specified, triggering this action will apply the
     * provided config to Chonky's file view.
     */
    fileViewConfig?: FileViewConfig;
    /**
     * When `option` is specified, the action becomes an option toggle. When the action
     * is activated, the boolean value of the option will be toggled.
     */
    option?: FileActionOption;
    /**
     * When selection transform is defined, activating this action will update the file
     * selection. If the transform function returns `null`, selection will be left
     * untouched.
     */
    selectionTransform?: FileSelectionTransform;
    /**
     * When effect is defined, it will be called right before dispatching the action to
     * the user defined action handler. If the effect function returns a promise, Chonky
     * will wait for the promise to resolve or fail before dispatching the action to the
     * handler. If this function returns `true`, the file action will NOT be dispatched
     * the the handler.
     */
    effect?: FileActionEffect;
    /**
     * When customVisibility is defined, it will change the display state of the file action
     * The function must return the visibility as one of the CustomVisibilityState values:
     *  - Hidden
     *  - Disabled
     *  - Default
     *  - Active
     */
    customVisibility?: () => CustomVisibilityState;
    /**
     * Field used to infer the type of action payload. It is used solely for Typescript
     * type inference and action validation.
     */
    __payloadType?: any;
    /**
     * Field used to infer the type of extra state for this action. It is used solely
     * for Typescript type inference and action validation.
     */
    __extraStateType?: any;
}
interface FileActionButton {
    name: string;
    toolbar?: boolean;
    contextMenu?: boolean;
    group?: string;
    tooltip?: string;
    icon?: ChonkyIconName | string | any;
    iconOnly?: boolean;
}
interface FileActionOption {
    id: string;
    defaultValue: boolean;
}
type FileSelectionTransform = (data: {
    prevSelection: Set<string>;
    fileIds: ReadonlyArray<string>;
    fileMap: Readonly<FileMap>;
    hiddenFileIds: Set<string>;
}) => Nullable<Set<string>>;
type FileActionEffect<Action extends FileAction = any> = (data: {
    action: Action;
    payload: Action['__payloadType'];
    state: FileActionState<{}>;
    reduxDispatch: ChonkyDispatch;
    getReduxState: () => RootState;
}) => MaybePromisedValue<undefined | boolean | void>;
type FileActionMap = {
    [actonId: string]: FileAction;
};
declare enum CustomVisibilityState {
    Hidden = 0,
    Disabled = 1,
    Default = 2,
    Active = 3
}

type FileActionData<Action extends FileAction> = {
    id: Action['id'];
    action: Action;
    payload: Action['__payloadType'];
    state: FileActionState<Action['__extraStateType']>;
};
type FileActionState<ExtraState extends Record<string, unknown> = Record<string, unknown>> = {
    /**
     * The ID of the Chonky instance that dispatched this action. This is useful if
     * you're reusing the same action handler for multiple Chonky instances.
     */
    instanceId: string;
    /**
     * All selected files at the time the action was requested. Note that this does not
     * reflect the changes applied by action's selection transform, if one is defined.
     */
    selectedFiles: FileData[];
    /**
     * Selected files filtered using actions file filter. If not file filter is defined,
     * this is the same as `selectedFiles`. Note that this does not reflect the changes
     * applied by action's selection transform, if one is defined.
     */
    selectedFilesForAction: FileData[];
    /**
     * If this action was requested using the file context menu, this field will hold
     * the file that user right-clicked on to open the menu. If this action was not
     * triggered using the context menu or right click was not on any file, this will be
     * `null`.
     */
    contextMenuTriggerFile: Nullable<FileData>;
} & ExtraState;
type MapFileActionsToData<U> = U extends FileAction ? FileActionData<U> : never;
type GenericFileActionHandler<T> = (data: MapFileActionsToData<T>) => void | Promise<void>;

export { CustomVisibilityState as C, type FileActionData as F, type GenericFileActionHandler as G, type MapFileActionsToData as M, type RootState as R, type FileActionState as a, type FileAction as b, type FileActionButton as c, type FileActionEffect as d, type FileSelectionTransform as e, type ChonkyDispatch as f, type FileActionMap as g, type ChonkyThunk as h, type FileActionOption as i };
