import { Undefinable } from '../../types/generic.types.cjs';
import { F as FileActionData, b as FileAction, h as ChonkyThunk, f as ChonkyDispatch } from '../../action-handler.types-swQLT4E1.cjs';
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

/**
 * Thunk that dispatches actions to the external (user-provided) action handler.
 */
declare const thunkDispatchFileAction: (data: FileActionData<FileAction>) => ChonkyThunk;
/**
 * Thunk that is used by internal components (and potentially the user) to "request"
 * actions. When action is requested, Chonky "prepares" the action data by extracting it
 * from Redux state. Once action data is ready, Chonky executes some side effect and/or
 * dispatches the action to the external action handler.
 */
declare const thunkRequestFileAction: <Action extends FileAction>(action: Action, payload: Action["__payloadType"]) => ChonkyThunk;
declare const triggerDispatchAfterEffect: <Action extends FileAction>(dispatch: ChonkyDispatch, data: FileActionData<Action>, effectResult: Undefinable<boolean>) => void;

export { thunkDispatchFileAction, thunkRequestFileAction, triggerDispatchAfterEffect };
