import filesize from "filesize";
import { createContext, useContext, useMemo } from "react";
import { useIntl } from "react-intl";
import { FileHelper } from "./file-helper";
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
  const intl = useIntl();
  return useMemo(() => {
    return intl.formatMessage({
      id: getI18nId(I18nNamespace.FileActionGroups, groupName),
      defaultMessage: groupName
    });
  }, [groupName, intl]);
};
const useLocalizedFileActionStrings = (action) => {
  const intl = useIntl();
  return useMemo(() => {
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
  const intl = useIntl();
  const formatters = useContext(ChonkyFormattersContext);
  return useMemo(() => {
    return {
      fileModDateString: formatters.formatFileModDate(intl, file),
      fileSizeString: formatters.formatFileSize(intl, file)
    };
  }, [file, formatters, intl]);
};
const defaultFormatters = {
  formatFileModDate: (intl, file) => {
    const safeModDate = FileHelper.getModDate(file);
    if (safeModDate) {
      return intl.formatDate(safeModDate);
    } else {
      return null;
    }
  },
  formatFileSize: (_intl, file) => {
    if (!file || typeof file.size !== "number") return null;
    const size = file.size;
    const sizeData = filesize(size, { bits: false, output: "object" });
    if (sizeData.symbol === "B") {
      return `${Math.round(sizeData.value / 10) / 100} KB`;
    } else if (sizeData.symbol === "KB") {
      return `${Math.round(sizeData.value)} ${sizeData.symbol}`;
    }
    return `${sizeData.value} ${sizeData.symbol}`;
  }
};
const ChonkyFormattersContext = createContext(defaultFormatters);
export {
  ChonkyFormattersContext,
  I18nNamespace,
  defaultFormatters,
  getActionI18nId,
  getI18nId,
  useLocalizedFileActionGroup,
  useLocalizedFileActionStrings,
  useLocalizedFileEntryStrings
};
