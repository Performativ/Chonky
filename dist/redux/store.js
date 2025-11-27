import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { useStaticValue } from "../util/hooks-helpers";
import { rootReducer } from "./reducers";
import { initialRootState } from "./state";
import { useStoreWatchers } from "./watchers";
const useChonkyStore = (chonkyInstanceId) => {
  const store = useStaticValue(() => {
    const preloadedState = {
      ...initialRootState,
      instanceId: chonkyInstanceId
    };
    return configureStore({
      preloadedState,
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }),
      devTools: { name: `chonky_${chonkyInstanceId}` }
    });
  });
  useStoreWatchers(store);
  return store;
};
const useParamSelector = (parametrizedSelector, ...selectorParams) => {
  const selector = useCallback(
    (state) => parametrizedSelector(...selectorParams)(state),
    [parametrizedSelector, ...selectorParams]
  );
  return useSelector(selector);
};
const useDTE = (actionCreator, ...selectorParams) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreator(...selectorParams));
  }, [dispatch, actionCreator, ...selectorParams]);
};
const usePropReduxUpdate = (actionCreator, payload) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreator(payload));
  }, [dispatch, actionCreator, payload]);
};
export {
  useChonkyStore,
  useDTE,
  useParamSelector,
  usePropReduxUpdate
};
