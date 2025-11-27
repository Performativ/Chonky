import { Undefinable } from '../../types/generic.types.js';
import { F as FileActionData, b as FileAction, h as ChonkyThunk, f as ChonkyDispatch } from '../../action-handler.types-mCLrTO7-.js';
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
