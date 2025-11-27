import sort from "fast-sort";
import FuzzySearch from "fuzzy-search";
import { createSelector } from "@reduxjs/toolkit";
import { OptionIds } from "../action-definitions/option-ids";
import { SortOrder } from "../types/sort.types";
import { FileHelper } from "../util/file-helper";
const selectInstanceId = (state) => state.instanceId;
const selectExternalFileActionHandler = (state) => state.externalFileActionHandler;
const selectFileActionMap = (state) => state.fileActionMap;
const selectFileActionIds = (state) => state.fileActionIds;
const selectFileActionData = (fileActionId) => (state) => selectFileActionMap(state)[fileActionId];
const selectToolbarItems = (state) => state.toolbarItems;
const selectContextMenuItems = (state) => state.contextMenuItems;
const selectFolderChain = (state) => state.folderChain;
const selectCurrentFolder = (state) => {
  const folderChain = selectFolderChain(state);
  const currentFolder = folderChain.length > 0 ? folderChain[folderChain.length - 1] : null;
  return currentFolder;
};
const selectParentFolder = (state) => {
  const folderChain = selectFolderChain(state);
  const parentFolder = folderChain.length > 1 ? folderChain[folderChain.length - 2] : null;
  return parentFolder;
};
const selectRawFiles = (state) => state.rawFiles;
const selectFileMap = (state) => state.fileMap;
const selectCleanFileIds = (state) => state.cleanFileIds;
const selectFileData = (fileId) => (state) => fileId ? selectFileMap(state)[fileId] : null;
const selectHiddenFileIdMap = (state) => state.hiddenFileIdMap;
const selectHiddenFileCount = (state) => Object.keys(selectHiddenFileIdMap(state)).length;
const selectFocusSearchInput = (state) => state.focusSearchInput;
const selectSearchString = (state) => state.searchString;
const selectSelectionMap = (state) => state.selectionMap;
const selectSelectedFileIds = (state) => Object.keys(selectSelectionMap(state));
const selectSelectionSize = (state) => selectSelectedFileIds(state).length;
const selectIsFileSelected = (fileId) => (state) => !!fileId && !!selectSelectionMap(state)[fileId];
const selectSelectedFiles = (state) => {
  const fileMap = selectFileMap(state);
  return Object.keys(selectSelectionMap(state)).map((id) => fileMap[id]);
};
const selectSelectedFilesForAction = (fileActionId) => (state) => {
  const { fileActionMap } = state;
  const action = fileActionMap[fileActionId];
  if (!action || !action.requiresSelection) return void 0;
  return getSelectedFiles(state, action.fileFilter);
};
const selectSelectedFilesForActionCount = (fileActionId) => (state) => getSelectedFilesForAction(state, fileActionId)?.length;
const selectDisableSelection = (state) => state.disableSelection;
const selectFileViewConfig = (state) => state.fileViewConfig;
const selectSortActionId = (state) => state.sortActionId;
const selectSortOrder = (state) => state.sortOrder;
const selectOptionMap = (state) => state.optionMap;
const selectOptionValue = (optionId) => (state) => selectOptionMap(state)[optionId];
const selectThumbnailGenerator = (state) => state.thumbnailGenerator;
const selectDoubleClickDelay = (state) => state.doubleClickDelay;
const selectClearSelectionOnOutsideClick = (state) => state.clearSelectionOnOutsideClick;
const selectContextMenuMounted = (state) => state.contextMenuMounted;
const selectContextMenuConfig = (state) => state.contextMenuConfig;
const selectContextMenuTriggerFile = (state) => {
  const config = selectContextMenuConfig(state);
  if (!config || !config.triggerFileId) return null;
  const fileMap = selectFileMap(state);
  return fileMap[config.triggerFileId] ?? null;
};
const getFileActionMap = (state) => state.fileActionMap;
const getOptionMap = (state) => state.optionMap;
const getFileMap = (state) => state.fileMap;
const getFileIds = (state) => state.fileIds;
const getCleanFileIds = (state) => state.cleanFileIds;
const getSortActionId = (state) => state.sortActionId;
const getSortOrder = (state) => state.sortOrder;
const getSearchString = (state) => state.searchString;
const _getLastClick = (state) => state.lastClick;
const makeGetAction = (fileActionSelector) => createSelector(
  [getFileActionMap, fileActionSelector],
  (fileActionMap, fileActionId) => fileActionId && fileActionMap[fileActionId] ? fileActionMap[fileActionId] : null
);
const makeGetOptionValue = (optionId, defaultValue = void 0) => createSelector([getOptionMap], (optionMap) => {
  const value = optionMap[optionId];
  if (value === void 0) {
    return defaultValue;
  }
  return value;
});
const makeGetFiles = (fileIdsSelector) => createSelector(
  [getFileMap, fileIdsSelector],
  (fileMap, fileIds) => fileIds.map(
    (fileId) => fileId && fileMap[fileId] ? fileMap[fileId] : null
  )
);
const getSortedFileIds = createSelector(
  [
    getFileIds,
    getSortOrder,
    makeGetFiles(getFileIds),
    makeGetAction(getSortActionId),
    makeGetOptionValue(OptionIds.ShowFoldersFirst, false)
  ],
  (fileIds, sortOrder, files, sortAction, showFolderFirst) => {
    if (!sortAction) {
      return fileIds;
    }
    const prepareSortKeySelector = (selector) => (file) => selector(file);
    const sortFunctions = [];
    if (showFolderFirst) {
      sortFunctions.push({
        desc: prepareSortKeySelector(FileHelper.isDirectory)
      });
    }
    if (sortAction.sortKeySelector) {
      const configKeyName = sortOrder === SortOrder.ASC ? "asc" : "desc";
      sortFunctions.push({
        [configKeyName]: prepareSortKeySelector(sortAction.sortKeySelector)
      });
    }
    if (sortFunctions.length === 0) return fileIds;
    const sortedFileIds = sort([...files]).by(sortFunctions).map((file) => file ? file.id : null);
    return sortedFileIds;
  }
);
const getSearcher = createSelector(
  [makeGetFiles(getCleanFileIds)],
  (cleanFiles) => new FuzzySearch(cleanFiles, ["name"], { caseSensitive: false })
);
const getSearchFilteredFileIds = createSelector(
  [getCleanFileIds, getSearchString, getSearcher],
  (cleanFileIds, searchString, searcher) => searchString ? searcher.search(searchString).map((f) => f.id) : cleanFileIds
);
const getHiddenFileIdMap = createSelector(
  [
    getSearchFilteredFileIds,
    makeGetFiles(getCleanFileIds),
    makeGetOptionValue(OptionIds.ShowHiddenFiles)
  ],
  (searchFilteredFileIds, cleanFiles, showHiddenFiles) => {
    const searchFilteredFileIdsSet = new Set(searchFilteredFileIds);
    const hiddenFileIdMap = {};
    cleanFiles.forEach((file) => {
      if (!file) return;
      else if (!searchFilteredFileIdsSet.has(file.id)) {
        hiddenFileIdMap[file.id] = true;
      } else if (!showHiddenFiles && FileHelper.isHidden(file)) {
        hiddenFileIdMap[file.id] = true;
      }
    });
    return hiddenFileIdMap;
  }
);
const getDisplayFileIds = createSelector(
  [getSortedFileIds, getHiddenFileIdMap],
  /** Returns files that will actually be shown to the user. */
  (sortedFileIds, hiddenFileIdMap) => sortedFileIds.filter((id) => !id || !hiddenFileIdMap[id])
);
const getLastClickIndex = createSelector(
  [_getLastClick, getSortedFileIds],
  /** Returns the last click index after ensuring it is actually still valid. */
  (lastClick, displayFileIds) => {
    if (!lastClick || lastClick.index > displayFileIds.length - 1 || lastClick.fileId != displayFileIds[lastClick.index]) {
      return null;
    }
    return lastClick.index;
  }
);
const selectors = {
  // Raw selectors
  getFileActionMap,
  getOptionMap,
  getFileMap,
  getFileIds,
  getCleanFileIds,
  getSortActionId,
  getSortOrder,
  getSearchString,
  _getLastClick,
  // Memoized selectors
  getSortedFileIds,
  getSearcher,
  getSearchFilteredFileIds,
  getHiddenFileIdMap,
  getDisplayFileIds,
  getLastClickIndex,
  // Parametrized selectors
  makeGetAction,
  makeGetOptionValue,
  makeGetFiles
};
const getFileData = (state, fileId) => fileId ? selectFileMap(state)[fileId] : null;
const getIsFileSelected = (state, file) => {
  return !!selectSelectionMap(state)[file.id];
};
const getSelectedFiles = (state, ...filters) => {
  const { fileMap, selectionMap } = state;
  const selectedFiles = Object.keys(selectionMap).map((id) => fileMap[id]);
  const filteredSelectedFiles = filters.reduce(
    (prevFiles, filter) => filter ? prevFiles.filter(filter) : prevFiles,
    selectedFiles
  );
  return filteredSelectedFiles;
};
const getSelectedFilesForAction = (state, fileActionId) => selectSelectedFilesForAction(fileActionId)(state);
export {
  getFileData,
  getIsFileSelected,
  getSelectedFiles,
  getSelectedFilesForAction,
  selectCleanFileIds,
  selectClearSelectionOnOutsideClick,
  selectContextMenuConfig,
  selectContextMenuItems,
  selectContextMenuMounted,
  selectContextMenuTriggerFile,
  selectCurrentFolder,
  selectDisableSelection,
  selectDoubleClickDelay,
  selectExternalFileActionHandler,
  selectFileActionData,
  selectFileActionIds,
  selectFileActionMap,
  selectFileData,
  selectFileMap,
  selectFileViewConfig,
  selectFocusSearchInput,
  selectFolderChain,
  selectHiddenFileCount,
  selectHiddenFileIdMap,
  selectInstanceId,
  selectIsFileSelected,
  selectOptionMap,
  selectOptionValue,
  selectParentFolder,
  selectRawFiles,
  selectSearchString,
  selectSelectedFileIds,
  selectSelectedFiles,
  selectSelectedFilesForAction,
  selectSelectedFilesForActionCount,
  selectSelectionMap,
  selectSelectionSize,
  selectSortActionId,
  selectSortOrder,
  selectThumbnailGenerator,
  selectToolbarItems,
  selectors
};
