import * as _reduxjs_toolkit from '@reduxjs/toolkit';
import * as redux from 'redux';
import { R as RootState } from '../action-handler.types-mCLrTO7-.js';
import '../types/generic.types.js';
import '../types/file.types.js';
import '../types/icons.types.js';
import '../types/file-view.types.js';
import '../types/action-menus.types.js';
import '../types/context-menu.types.js';
import '../types/options.types.js';
import '../types/selection.types.js';
import '../types/sort.types.js';
import '../types/thumbnails.types.js';

declare const useChonkyStore: (chonkyInstanceId: string) => _reduxjs_toolkit.EnhancedStore<RootState, redux.UnknownAction, _reduxjs_toolkit.Tuple<[redux.StoreEnhancer<{
    dispatch: _reduxjs_toolkit.ThunkDispatch<RootState, undefined, redux.UnknownAction>;
}>, redux.StoreEnhancer]>>;
/**
 * Hook that can be used with parametrized selectors.
 */
declare const useParamSelector: <Args extends Array<any>, Value>(parametrizedSelector: (...args: Args) => (state: RootState) => Value, ...selectorParams: Args) => Value;
/**
 * DTE - DispatchThunkEffect. This method is used to decrease code duplication in
 * main Chonky method.
 */
declare const useDTE: <Args extends Array<any>>(actionCreator: (...args: Args) => any, ...selectorParams: Args) => void;
declare const usePropReduxUpdate: <Payload extends any>(actionCreator: (payload: Payload) => any, payload: Payload) => void;

export { useChonkyStore, useDTE, useParamSelector, usePropReduxUpdate };
