import { Nilable } from '../../types/generic.types.js';
import { b as FileAction, h as ChonkyThunk } from '../../action-handler.types-mCLrTO7-.js';
import '../../types/file.types.js';
import '../../types/icons.types.js';
import '../../types/file-view.types.js';
import '@reduxjs/toolkit';
import '../../types/action-menus.types.js';
import '../../types/context-menu.types.js';
import '../../types/options.types.js';
import '../../types/selection.types.js';
import '../../types/sort.types.js';
import '../../types/thumbnails.types.js';

declare const thunkUpdateRawFileActions: (rawFileActions: FileAction[] | any, disableDefaultFileActions: Nilable<boolean | string[]>) => ChonkyThunk;
declare const thunkUpdateToolbarNContextMenuItems: (fileActions: FileAction[]) => ChonkyThunk;
declare const thunkUpdateDefaultFileViewActionId: (fileActionId: Nilable<string>) => ChonkyThunk;
declare const thunkActivateSortAction: (fileActionId: Nilable<string>) => ChonkyThunk;
declare const thunkApplySelectionTransform: (action: FileAction) => ChonkyThunk;

export { thunkActivateSortAction, thunkApplySelectionTransform, thunkUpdateDefaultFileViewActionId, thunkUpdateRawFileActions, thunkUpdateToolbarNContextMenuItems };
