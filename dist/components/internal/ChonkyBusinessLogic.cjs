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
var ChonkyBusinessLogic_exports = {};
__export(ChonkyBusinessLogic_exports, {
  ChonkyBusinessLogic: () => ChonkyBusinessLogic,
  ChonkyBusinessLogicInner: () => ChonkyBusinessLogicInner
});
module.exports = __toCommonJS(ChonkyBusinessLogic_exports);
var import_react = __toESM(require("react"), 1);
var import_reducers = require("../../redux/reducers");
var import_state = require("../../redux/state");
var import_store = require("../../redux/store");
var import_file_actions = require("../../redux/thunks/file-actions.thunks");
var import_default_config = require("../../util/default-config");
var import_file_browser_handle = require("../../util/file-browser-handle");
var import_helpers = require("../../util/helpers");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const ChonkyBusinessLogicInner = import_react.default.forwardRef((props, ref) => {
  (0, import_store.usePropReduxUpdate)(
    import_reducers.reduxActions.setRawFiles,
    props.files ?? import_state.initialRootState.rawFiles
  );
  (0, import_store.usePropReduxUpdate)(import_reducers.reduxActions.setRawFolderChain, props.folderChain);
  (0, import_store.useDTE)(
    import_file_actions.thunkUpdateRawFileActions,
    (0, import_helpers.getValueOrFallback)(props.fileActions, import_default_config.defaultConfig.fileActions),
    (0, import_helpers.getValueOrFallback)(
      props.disableDefaultFileActions,
      import_default_config.defaultConfig.disableDefaultFileActions
    )
  );
  (0, import_store.useDTE)(
    import_reducers.reduxActions.setExternalFileActionHandler,
    (0, import_helpers.getValueOrFallback)(props.onFileAction, import_default_config.defaultConfig.onFileAction)
  );
  (0, import_store.useDTE)(
    import_reducers.reduxActions.setSelectionDisabled,
    (0, import_helpers.getValueOrFallback)(
      props.disableSelection,
      import_default_config.defaultConfig.disableSelection,
      "boolean"
    )
  );
  (0, import_store.useDTE)(
    import_file_actions.thunkActivateSortAction,
    (0, import_helpers.getValueOrFallback)(props.defaultSortActionId, import_default_config.defaultConfig.defaultSortActionId)
  );
  (0, import_store.useDTE)(
    import_file_actions.thunkUpdateDefaultFileViewActionId,
    (0, import_helpers.getValueOrFallback)(
      props.defaultFileViewActionId,
      import_default_config.defaultConfig.defaultFileViewActionId,
      "string"
    )
  );
  (0, import_store.useDTE)(
    import_reducers.reduxActions.setThumbnailGenerator,
    (0, import_helpers.getValueOrFallback)(props.thumbnailGenerator, import_default_config.defaultConfig.thumbnailGenerator)
  );
  (0, import_store.useDTE)(
    import_reducers.reduxActions.setDoubleClickDelay,
    (0, import_helpers.getValueOrFallback)(
      props.doubleClickDelay,
      import_default_config.defaultConfig.doubleClickDelay,
      "number"
    )
  );
  (0, import_store.useDTE)(
    import_reducers.reduxActions.setClearSelectionOnOutsideClick,
    (0, import_helpers.getValueOrFallback)(
      props.clearSelectionOnOutsideClick,
      import_default_config.defaultConfig.clearSelectionOnOutsideClick,
      "boolean"
    )
  );
  (0, import_file_browser_handle.useFileBrowserHandle)(ref);
  return null;
});
ChonkyBusinessLogicInner.displayName = "ChonkyBusinessLogicInner";
const ChonkyBusinessLogic = ChonkyBusinessLogicInner;
ChonkyBusinessLogic.displayName = "ChonkyBusinessLogic";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChonkyBusinessLogic,
  ChonkyBusinessLogicInner
});
