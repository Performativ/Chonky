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
var FileEntryName_exports = {};
__export(FileEntryName_exports, {
  FileEntryName: () => FileEntryName
});
module.exports = __toCommonJS(FileEntryName_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_styles = require("../../util/styles");
var import_FileEntry_hooks = require("./FileEntry-hooks");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const FileEntryName = ({ file, className }) => {
  const modifierIconComponents = (0, import_FileEntry_hooks.useModifierIconComponents)(file);
  const fileNameComponent = (0, import_FileEntry_hooks.useFileNameComponent)(file);
  const classes = useStyles();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className, title: file ? file.name : void 0, children: [
    modifierIconComponents.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: classes.modifierIcons, children: modifierIconComponents }),
    fileNameComponent
  ] });
};
FileEntryName.displayName = "FileEntryName";
const useStyles = (0, import_styles.makeLocalChonkyStyles)((theme) => ({
  modifierIcons: {
    color: theme.palette.text.secondary,
    position: "relative",
    fontSize: "0.775em",
    paddingRight: 5
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileEntryName
});
