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
var FileContextMenu_hooks_exports = {};
__export(FileContextMenu_hooks_exports, {
  findClosestChonkyFileId: () => findClosestChonkyFileId,
  useContextMenuDismisser: () => useContextMenuDismisser,
  useContextMenuTrigger: () => useContextMenuTrigger
});
module.exports = __toCommonJS(FileContextMenu_hooks_exports);
var import_react = __toESM(require("react"), 1);
var import_react_redux = require("react-redux");
var import_action_definitions = require("../../action-definitions/index");
var import_reducers = require("../../redux/reducers");
var import_selectors = require("../../redux/selectors");
var import_dispatchers = require("../../redux/thunks/dispatchers.thunks");
var import_helpers = require("../../util/helpers");
var import_hooks_helpers = require("../../util/hooks-helpers");
var import_helpers2 = require("../../redux/helpers");
const findClosestChonkyFileId = (element) => {
  const fileEntryWrapperDiv = (0, import_helpers.findElementAmongAncestors)(
    element,
    (element2) => element2.tagName && element2.tagName.toLowerCase() === "div" && element2.dataset && element2.dataset.chonkyFileId
  );
  return fileEntryWrapperDiv ? fileEntryWrapperDiv.dataset.chonkyFileId : null;
};
const useContextMenuTrigger = () => {
  const dispatch = (0, import_helpers2.useThunkDispatch)();
  const contextMenuMountedRef = (0, import_hooks_helpers.useInstanceVariable)(
    (0, import_react_redux.useSelector)(import_selectors.selectContextMenuMounted)
  );
  return (0, import_react.useCallback)(
    (event) => {
      if (!contextMenuMountedRef.current) return;
      if (event.altKey) return;
      event.preventDefault();
      const triggerFileId = findClosestChonkyFileId(event.target);
      dispatch(
        (0, import_dispatchers.thunkRequestFileAction)(import_action_definitions.ChonkyActions.OpenFileContextMenu, {
          clientX: event.clientX,
          clientY: event.clientY,
          triggerFileId
        })
      );
    },
    [contextMenuMountedRef, dispatch]
  );
};
const useContextMenuDismisser = () => {
  const dispatch = (0, import_react_redux.useDispatch)();
  return (0, import_react.useCallback)(() => dispatch(import_reducers.reduxActions.hideContextMenu()), [dispatch]);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  findClosestChonkyFileId,
  useContextMenuDismisser,
  useContextMenuTrigger
});
