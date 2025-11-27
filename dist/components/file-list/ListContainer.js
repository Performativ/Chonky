import { jsx } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React, {
  useCallback,
  useMemo,
  useRef
} from "react";
import { useSelector } from "react-redux";
import { FixedSizeList as FSL } from "react-window";
import { selectFileViewConfig, selectors } from "../../redux/selectors";
import { FileViewMode } from "../../types/file-view.types";
import { useInstanceVariable } from "../../util/hooks-helpers";
import { makeLocalChonkyStyles } from "../../util/styles";
import { SmartFileEntry } from "./FileEntry";
const FixedSizeList = FSL;
const ListContainer = (props) => {
  const { width, height } = props;
  const viewConfig = useSelector(selectFileViewConfig);
  const listRef = useRef(null);
  const displayFileIds = useSelector(selectors.getDisplayFileIds);
  const displayFileIdsRef = useInstanceVariable(displayFileIds);
  const getItemKey = useCallback(
    (index) => displayFileIdsRef.current[index] ?? `loading-file-${index}`,
    [displayFileIdsRef]
  );
  const classes = useStyles();
  const listComponent = useMemo(() => {
    const rowRenderer = (data) => {
      return /* @__PURE__ */ jsx("div", { style: data.style, children: /* @__PURE__ */ jsx(
        SmartFileEntry,
        {
          fileId: displayFileIds[data.index] ?? null,
          displayIndex: data.index,
          fileViewMode: FileViewMode.List
        }
      ) });
    };
    return /* @__PURE__ */ jsx(
      FixedSizeList,
      {
        ref: listRef,
        className: classes.listContainer,
        itemSize: viewConfig.entryHeight,
        height,
        itemCount: displayFileIds.length,
        width,
        itemKey: getItemKey,
        children: rowRenderer
      }
    );
  }, [
    classes.listContainer,
    viewConfig.entryHeight,
    height,
    displayFileIds,
    width,
    getItemKey
  ]);
  return listComponent;
};
const useStyles = makeLocalChonkyStyles((theme) => ({
  listContainer: {
    borderTop: `solid 1px ${theme.palette.divider}`
  }
}));
export {
  ListContainer
};
