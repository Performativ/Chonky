"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var store_exports = {};
__export(store_exports, {
  useChonkyStore: () => useChonkyStore,
  useDTE: () => useDTE,
  useParamSelector: () => useParamSelector,
  usePropReduxUpdate: () => usePropReduxUpdate
});
module.exports = __toCommonJS(store_exports);
var import_react = require("react");
var import_react_redux = require("react-redux");
var import_toolkit = require("@reduxjs/toolkit");
var import_hooks_helpers = require("../util/hooks-helpers");
var import_reducers = require("./reducers");
var import_state = require("./state");
var import_watchers = require("./watchers");
const useChonkyStore = (chonkyInstanceId) => {
  const store = (0, import_hooks_helpers.useStaticValue)(() => {
    const preloadedState = {
      ...import_state.initialRootState,
      instanceId: chonkyInstanceId
    };
    return (0, import_toolkit.configureStore)({
      preloadedState,
      reducer: import_reducers.rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }),
      devTools: { name: `chonky_${chonkyInstanceId}` }
    });
  });
  (0, import_watchers.useStoreWatchers)(store);
  return store;
};
const useParamSelector = (parametrizedSelector, ...selectorParams) => {
  const selector = (0, import_react.useCallback)(
    (state) => parametrizedSelector(...selectorParams)(state),
    [parametrizedSelector, ...selectorParams]
  );
  return (0, import_react_redux.useSelector)(selector);
};
const useDTE = (actionCreator, ...selectorParams) => {
  const dispatch = (0, import_react_redux.useDispatch)();
  (0, import_react.useEffect)(() => {
    dispatch(actionCreator(...selectorParams));
  }, [dispatch, actionCreator, ...selectorParams]);
};
const usePropReduxUpdate = (actionCreator, payload) => {
  const dispatch = (0, import_react_redux.useDispatch)();
  (0, import_react.useEffect)(() => {
    dispatch(actionCreator(payload));
  }, [dispatch, actionCreator, payload]);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useChonkyStore,
  useDTE,
  useParamSelector,
  usePropReduxUpdate
});
