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
var watchers_exports = {};
__export(watchers_exports, {
  useStoreWatchers: () => useStoreWatchers
});
module.exports = __toCommonJS(watchers_exports);
var import_react = require("react");
var import_redux_watch = __toESM(require("redux-watch"), 1);
var import_action_definitions = require("../action-definitions");
var import_selectors = require("./selectors");
var import_dispatchers = require("./thunks/dispatchers.thunks");
const useStoreWatchers = (store) => {
  (0, import_react.useEffect)(() => {
    const selectionWatcher = (0, import_redux_watch.default)(() => (0, import_selectors.selectSelectionMap)(store.getState()));
    const onSelectionChange = (newSelection, oldSelection) => {
      if (newSelection === oldSelection) return;
      const selectedFilesIds = (0, import_selectors.selectSelectedFileIds)(store.getState());
      const selection = new Set(selectedFilesIds);
      store.dispatch(
        (0, import_dispatchers.thunkRequestFileAction)(import_action_definitions.ChonkyActions.ChangeSelection, {
          selection
        })
      );
    };
    const unsubscribeCallbacks = [
      store.subscribe(selectionWatcher(onSelectionChange))
    ];
    return () => {
      for (const unsubscribe of unsubscribeCallbacks) unsubscribe();
    };
  }, [store]);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useStoreWatchers
});
