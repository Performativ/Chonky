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
var thunks_exports = {};
__export(thunks_exports, {
  reduxThunks: () => reduxThunks
});
module.exports = __toCommonJS(thunks_exports);
var import_file_helper = require("../../util/file-helper");
var import_reducers = require("../reducers");
var import_selectors = require("../selectors");
const reduxThunks = {
  selectRange: (params) => (dispatch, getState) => {
    const state = getState();
    if (state.disableSelection) return;
    const displayFileIds = import_selectors.selectors.getDisplayFileIds(state);
    const fileIdsToSelect = displayFileIds.slice(params.rangeStart, params.rangeEnd + 1).filter(
      (id) => id && import_file_helper.FileHelper.isSelectable(state.fileMap[id] ?? null)
    );
    dispatch(
      import_reducers.reduxActions.selectFiles({
        fileIds: fileIdsToSelect,
        reset: !!params.reset
      })
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  reduxThunks
});
