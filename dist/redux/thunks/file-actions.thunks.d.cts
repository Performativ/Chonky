import { Nilable } from '../../types/generic.types.cjs';
import { b as FileAction, h as ChonkyThunk } from '../../action-handler.types-swQLT4E1.cjs';
import '../../types/file.types.cjs';
import '../../types/icons.types.cjs';
import '../../types/file-view.types.cjs';
import '@reduxjs/toolkit';
import '../../types/action-menus.types.cjs';
import '../../types/context-menu.types.cjs';
import '../../types/options.types.cjs';
import '../../types/selection.types.cjs';
import '../../types/sort.types.cjs';
import '../../types/thumbnails.types.cjs';

declare const thunkUpdateRawFileActions: (rawFileActions: FileAction[] | any, disableDefaultFileActions: Nilable<boolean | string[]>) => ChonkyThunk;
declare const thunkUpdateToolbarNContextMenuItems: (fileActions: FileAction[]) => ChonkyThunk;
declare const thunkUpdateDefaultFileViewActionId: (fileActionId: Nilable<string>) => ChonkyThunk;
declare const thunkActivateSortAction: (fileActionId: Nilable<string>) => ChonkyThunk;
declare const thunkApplySelectionTransform: (action: FileAction) => ChonkyThunk;

export { thunkActivateSortAction, thunkApplySelectionTransform, thunkUpdateDefaultFileViewActionId, thunkUpdateRawFileActions, thunkUpdateToolbarNContextMenuItems };
