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
var HotkeyListener_exports = {};
__export(HotkeyListener_exports, {
  HotkeyListener: () => HotkeyListener
});
module.exports = __toCommonJS(HotkeyListener_exports);
var import_hotkeys_js = __toESM(require("hotkeys-js"), 1);
var import_react = __toESM(require("react"), 1);
var import_selectors = require("../../redux/selectors");
var import_store = require("../../redux/store");
var import_dispatchers = require("../../redux/thunks/dispatchers.thunks");
var import_helpers = require("../../redux/helpers");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const HotkeyListener = (props) => {
  const { fileActionId } = props;
  const dispatch = (0, import_helpers.useThunkDispatch)();
  const fileAction = (0, import_store.useParamSelector)(import_selectors.selectFileActionData, fileActionId);
  (0, import_react.useEffect)(() => {
    if (!fileAction || !fileAction.hotkeys || fileAction.hotkeys.length === 0) {
      return;
    }
    const hotkeysStr = fileAction.hotkeys.join(",");
    const hotkeyCallback = (event) => {
      event.preventDefault();
      dispatch((0, import_dispatchers.thunkRequestFileAction)(fileAction, void 0));
    };
    (0, import_hotkeys_js.default)(hotkeysStr, hotkeyCallback);
    return () => import_hotkeys_js.default.unbind(hotkeysStr, hotkeyCallback);
  }, [dispatch, fileAction]);
  return null;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HotkeyListener
});
