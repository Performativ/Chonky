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
var i18n_exports = {};
__export(i18n_exports, {
  ChonkyFormattersContext: () => ChonkyFormattersContext,
  I18nNamespace: () => I18nNamespace,
  defaultFormatters: () => defaultFormatters,
  getActionI18nId: () => getActionI18nId,
  getI18nId: () => getI18nId,
  useLocalizedFileActionGroup: () => useLocalizedFileActionGroup,
  useLocalizedFileActionStrings: () => useLocalizedFileActionStrings,
  useLocalizedFileEntryStrings: () => useLocalizedFileEntryStrings
});
module.exports = __toCommonJS(i18n_exports);
var import_filesize = __toESM(require("filesize"), 1);
var import_react = require("react");
var import_react_intl = require("react-intl");
var import_file_helper = require("./file-helper");
const I18nNamespace = {
  Toolbar: "toolbar",
  FileList: "fileList",
  FileEntry: "fileEntry",
  FileContextMenu: "contextMenu",
  FileActions: "actions",
  FileActionGroups: "actionGroups"
};
const getI18nId = (namespace, stringId) => `chonky.${namespace}.${stringId}`;
const getActionI18nId = (actionId, stringId) => `chonky.${I18nNamespace.FileActions}.${actionId}.${stringId}`;
const useLocalizedFileActionGroup = (groupName) => {
  const intl = (0, import_react_intl.useIntl)();
  return (0, import_react.useMemo)(() => {
    return intl.formatMessage({
      id: getI18nId(I18nNamespace.FileActionGroups, groupName),
      defaultMessage: groupName
    });
  }, [groupName, intl]);
};
const useLocalizedFileActionStrings = (action) => {
  const intl = (0, import_react_intl.useIntl)();
  return (0, import_react.useMemo)(() => {
    if (!action) {
      return {
        buttonName: "",
        buttonTooltip: void 0
      };
    }
    const buttonName = intl.formatMessage({
      id: getActionI18nId(action.id, "button.name"),
      defaultMessage: action.button?.name
    });
    let buttonTooltip = void 0;
    if (action.button?.tooltip) {
      buttonTooltip = intl.formatMessage({
        id: getActionI18nId(action.id, "button.tooltip"),
        defaultMessage: action.button?.tooltip
      });
    }
    return {
      buttonName,
      buttonTooltip
    };
  }, [action, intl]);
};
const useLocalizedFileEntryStrings = (file) => {
  const intl = (0, import_react_intl.useIntl)();
  const formatters = (0, import_react.useContext)(ChonkyFormattersContext);
  return (0, import_react.useMemo)(() => {
    return {
      fileModDateString: formatters.formatFileModDate(intl, file),
      fileSizeString: formatters.formatFileSize(intl, file)
    };
  }, [file, formatters, intl]);
};
const defaultFormatters = {
  formatFileModDate: (intl, file) => {
    const safeModDate = import_file_helper.FileHelper.getModDate(file);
    if (safeModDate) {
      return intl.formatDate(safeModDate);
    } else {
      return null;
    }
  },
  formatFileSize: (_intl, file) => {
    if (!file || typeof file.size !== "number") return null;
    const size = file.size;
    const sizeData = (0, import_filesize.default)(size, { bits: false, output: "object" });
    if (sizeData.symbol === "B") {
      return `${Math.round(sizeData.value / 10) / 100} KB`;
    } else if (sizeData.symbol === "KB") {
      return `${Math.round(sizeData.value)} ${sizeData.symbol}`;
    }
    return `${sizeData.value} ${sizeData.symbol}`;
  }
};
const ChonkyFormattersContext = (0, import_react.createContext)(defaultFormatters);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChonkyFormattersContext,
  I18nNamespace,
  defaultFormatters,
  getActionI18nId,
  getI18nId,
  useLocalizedFileActionGroup,
  useLocalizedFileActionStrings,
  useLocalizedFileEntryStrings
});
