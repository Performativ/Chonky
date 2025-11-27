import { jsx } from "react/jsx-runtime";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import AutoSizer from "react-virtualized-auto-sizer";
import classNames from "classnames";
import { ChonkyActions } from "../../action-definitions/index";
import { selectFileViewConfig, selectors } from "../../redux/selectors";
import { FileViewMode } from "../../types/file-view.types";
import { makeGlobalChonkyStyles, makeLocalChonkyStyles } from "../../util/styles";
import { FileListEmpty } from "./FileListEmpty";
import { GridContainer } from "./GridContainer";
import { ListContainer } from "./ListContainer";
const FileList = React.memo((props) => {
  const displayFileIds = useSelector(selectors.getDisplayFileIds);
  const viewConfig = useSelector(selectFileViewConfig);
  const localClasses = useLocalStyles();
  const classes = useStyles(viewConfig);
  const { onScroll } = props;
  const fillParentContainer = true;
  const listRenderer = useCallback(
    ({ width, height }) => {
      if (displayFileIds.length === 0) {
        return /* @__PURE__ */ jsx(FileListEmpty, { width, height: viewConfig.entryHeight });
      } else if (viewConfig.mode === FileViewMode.List) {
        return /* @__PURE__ */ jsx(ListContainer, { width, height });
      } else {
        return /* @__PURE__ */ jsx(GridContainer, { width, height });
      }
    },
    [displayFileIds, viewConfig]
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      onScroll,
      className: classNames([
        classes.fileListWrapper,
        localClasses.fileListWrapper
      ]),
      role: "list",
      children: /* @__PURE__ */ jsx(AutoSizer, { disableHeight: !fillParentContainer, children: listRenderer })
    }
  );
});
FileList.displayName = "FileList";
const useLocalStyles = makeLocalChonkyStyles(() => ({
  fileListWrapper: {
    minHeight: ChonkyActions.EnableGridView.fileViewConfig.entryHeight + 2,
    background: () => "none"
  }
}));
const useStyles = makeGlobalChonkyStyles(() => ({
  fileListWrapper: {
    height: "100%",
    maxHeight: "100%"
  }
}));
export {
  FileList
};
