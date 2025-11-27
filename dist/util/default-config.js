import { ChonkyActions } from "../action-definitions/index";
import { ChonkyIconFA } from "./icon-helper";
const defaultConfig = {
  fileActions: null,
  onFileAction: null,
  thumbnailGenerator: null,
  doubleClickDelay: 300,
  disableSelection: false,
  disableDefaultFileActions: false,
  defaultSortActionId: ChonkyActions.SortFilesByName.id,
  defaultFileViewActionId: ChonkyActions.EnableGridView.id,
  clearSelectionOnOutsideClick: true,
  iconComponent: ChonkyIconFA,
  darkMode: false,
  i18n: {}
};
const setChonkyDefaults = (config) => {
  Object.assign(defaultConfig, config);
};
export {
  defaultConfig,
  setChonkyDefaults
};
