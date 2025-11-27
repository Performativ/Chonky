"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var file_browser_handle_exports = {};
__export(file_browser_handle_exports, {
  useFileBrowserHandle: () => useFileBrowserHandle
});
module.exports = __toCommonJS(file_browser_handle_exports);
var import_react = __toESM(require("react"), 1);
var import_react_redux = require("react-redux");
var import_helpers = require("../redux/helpers");
var import_reducers = require("../redux/reducers");
var import_selectors = require("../redux/selectors");
var import_dispatchers = require("../redux/thunks/dispatchers.thunks");
const useFileBrowserHandle = (ref) => {
  const store = (0, import_react_redux.useStore)();
  const dispatch = (0, import_helpers.useThunkDispatch)();
  (0, import_react.useImperativeHandle)(
    ref,
    () => ({
      getFileSelection() {
        const selectionMap = (0, import_selectors.selectSelectionMap)(store.getState());
        const selectionSet = new Set(Object.keys(selectionMap));
        return selectionSet;
      },
      setFileSelection(selection, reset = true) {
        const fileIds = Array.from(selection);
        dispatch(import_reducers.reduxActions.selectFiles({ fileIds, reset }));
      },
      requestFileAction(action, payload) {
        return Promise.resolve(
          dispatch((0, import_dispatchers.thunkRequestFileAction)(action, payload))
        ).then();
      }
    }),
    [store, dispatch]
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useFileBrowserHandle
});
