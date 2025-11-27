/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from "react";
import { reduxActions } from "../../redux/reducers";
import { initialRootState } from "../../redux/state";
import { useDTE, usePropReduxUpdate } from "../../redux/store";
import {
  thunkActivateSortAction,
  thunkUpdateDefaultFileViewActionId,
  thunkUpdateRawFileActions
} from "../../redux/thunks/file-actions.thunks";
import { defaultConfig } from "../../util/default-config";
import { useFileBrowserHandle } from "../../util/file-browser-handle";
import { getValueOrFallback } from "../../util/helpers";
const ChonkyBusinessLogicInner = React.forwardRef((props, ref) => {
  usePropReduxUpdate(
    reduxActions.setRawFiles,
    props.files ?? initialRootState.rawFiles
  );
  usePropReduxUpdate(reduxActions.setRawFolderChain, props.folderChain);
  useDTE(
    thunkUpdateRawFileActions,
    getValueOrFallback(props.fileActions, defaultConfig.fileActions),
    getValueOrFallback(
      props.disableDefaultFileActions,
      defaultConfig.disableDefaultFileActions
    )
  );
  useDTE(
    reduxActions.setExternalFileActionHandler,
    getValueOrFallback(props.onFileAction, defaultConfig.onFileAction)
  );
  useDTE(
    reduxActions.setSelectionDisabled,
    getValueOrFallback(
      props.disableSelection,
      defaultConfig.disableSelection,
      "boolean"
    )
  );
  useDTE(
    thunkActivateSortAction,
    getValueOrFallback(props.defaultSortActionId, defaultConfig.defaultSortActionId)
  );
  useDTE(
    thunkUpdateDefaultFileViewActionId,
    getValueOrFallback(
      props.defaultFileViewActionId,
      defaultConfig.defaultFileViewActionId,
      "string"
    )
  );
  useDTE(
    reduxActions.setThumbnailGenerator,
    getValueOrFallback(props.thumbnailGenerator, defaultConfig.thumbnailGenerator)
  );
  useDTE(
    reduxActions.setDoubleClickDelay,
    getValueOrFallback(
      props.doubleClickDelay,
      defaultConfig.doubleClickDelay,
      "number"
    )
  );
  useDTE(
    reduxActions.setClearSelectionOnOutsideClick,
    getValueOrFallback(
      props.clearSelectionOnOutsideClick,
      defaultConfig.clearSelectionOnOutsideClick,
      "boolean"
    )
  );
  useFileBrowserHandle(ref);
  return null;
});
ChonkyBusinessLogicInner.displayName = "ChonkyBusinessLogicInner";
const ChonkyBusinessLogic = ChonkyBusinessLogicInner;
ChonkyBusinessLogic.displayName = "ChonkyBusinessLogic";
export {
  ChonkyBusinessLogic,
  ChonkyBusinessLogicInner
};
