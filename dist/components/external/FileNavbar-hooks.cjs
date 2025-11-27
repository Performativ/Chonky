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
var FileNavbar_hooks_exports = {};
__export(FileNavbar_hooks_exports, {
  useFolderChainItems: () => useFolderChainItems
});
module.exports = __toCommonJS(FileNavbar_hooks_exports);
var import_react = require("react");
var import_react_redux = require("react-redux");
var import_action_definitions = require("../../action-definitions/index");
var import_helpers = require("../../redux/helpers");
var import_selectors = require("../../redux/selectors");
var import_dispatchers = require("../../redux/thunks/dispatchers.thunks");
var import_file_helper = require("../../util/file-helper");
const useFolderChainItems = () => {
  const folderChain = (0, import_react_redux.useSelector)(import_selectors.selectFolderChain);
  const dispatch = (0, import_helpers.useThunkDispatch)();
  const folderChainItems = (0, import_react.useMemo)(() => {
    const items = [];
    if (!folderChain) return items;
    for (let i = 0; i < folderChain.length; ++i) {
      const file = folderChain[i];
      items.push({
        file,
        disabled: !file,
        onClick: !import_file_helper.FileHelper.isOpenable(file) || i === folderChain.length - 1 ? void 0 : () => dispatch(
          (0, import_dispatchers.thunkRequestFileAction)(import_action_definitions.ChonkyActions.OpenFiles, {
            targetFile: file,
            files: [file]
          })
        )
      });
    }
    return items;
  }, [dispatch, folderChain]);
  return folderChainItems;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useFolderChainItems
});
