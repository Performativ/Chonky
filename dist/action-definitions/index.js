import { DefaultActions } from "./default";
import { EssentialActions } from "./essential";
import { ExtraActions } from "./extra";
import { OptionIds } from "./option-ids";
const ChonkyActions = {
  ...EssentialActions,
  ...DefaultActions,
  ...ExtraActions
};
const EssentialFileActions = [
  ChonkyActions.MouseClickFile,
  ChonkyActions.KeyboardClickFile,
  ChonkyActions.StartDragNDrop,
  ChonkyActions.EndDragNDrop,
  ChonkyActions.MoveFiles,
  ChonkyActions.ChangeSelection,
  ChonkyActions.OpenFiles,
  ChonkyActions.OpenParentFolder,
  ChonkyActions.OpenFileContextMenu
];
const DefaultFileActions = [
  ChonkyActions.OpenSelection,
  ChonkyActions.SelectAllFiles,
  ChonkyActions.ClearSelection,
  ChonkyActions.EnableListView,
  // TODO: Don't enable until compact view is fully supported
  // ChonkyActions.EnableCompactView,
  ChonkyActions.EnableGridView,
  ChonkyActions.SortFilesByName,
  ChonkyActions.SortFilesBySize,
  ChonkyActions.SortFilesByDate,
  ChonkyActions.ToggleHiddenFiles,
  ChonkyActions.ToggleShowFoldersFirst,
  ChonkyActions.FocusSearchInput
];
export {
  ChonkyActions,
  DefaultFileActions,
  EssentialFileActions,
  OptionIds
};
