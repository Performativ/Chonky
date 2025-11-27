import { jsx } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { useSelector } from "react-redux";
import { VariableSizeGrid as VSG } from "react-window";
import { selectFileViewConfig, selectors } from "../../redux/selectors";
import { useInstanceVariable } from "../../util/hooks-helpers";
import { makeGlobalChonkyStyles, useIsMobileBreakpoint } from "../../util/styles";
import { SmartFileEntry } from "./FileEntry";
const VariableSizeGrid = VSG;
const isMobileDevice = () => {
  return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf("IEMobile") !== -1;
};
const getGridConfig = (width, fileCount, viewConfig, isMobileBreakpoint) => {
  const gutter = isMobileBreakpoint ? 5 : 8;
  const scrollbar = isMobileDevice() ? 0 : 18;
  let columnCount;
  let columnWidth;
  if (isMobileBreakpoint) {
    columnCount = 2;
    columnWidth = (width - gutter - scrollbar) / columnCount;
  } else {
    columnWidth = viewConfig.entryWidth;
    columnCount = Math.max(
      1,
      Math.floor((width - scrollbar) / (columnWidth + gutter))
    );
  }
  const rowCount = Math.ceil(fileCount / columnCount);
  return {
    rowCount,
    columnCount,
    gutter,
    rowHeight: viewConfig.entryHeight,
    columnWidth
  };
};
const GridContainer = React.memo((props) => {
  const { width, height } = props;
  const viewConfig = useSelector(selectFileViewConfig);
  const displayFileIds = useSelector(selectors.getDisplayFileIds);
  const fileCount = useMemo(() => displayFileIds.length, [displayFileIds]);
  const gridRef = useRef(null);
  const isMobileBreakpoint = useIsMobileBreakpoint();
  const [gridConfig, setGridConfig] = useState(
    getGridConfig(width, fileCount, viewConfig, isMobileBreakpoint)
  );
  const gridConfigRef = useRef(gridConfig);
  useEffect(() => {
    const oldConf = gridConfigRef.current;
    const newConf = getGridConfig(width, fileCount, viewConfig, isMobileBreakpoint);
    gridConfigRef.current = newConf;
    if (gridRef.current) {
      if (oldConf.rowCount !== newConf.rowCount) {
        gridRef.current.resetAfterRowIndex(
          Math.min(oldConf.rowCount, newConf.rowCount) - 1
        );
      }
      if (oldConf.columnCount !== newConf.columnCount) {
        gridRef.current.resetAfterColumnIndex(
          Math.min(oldConf.columnCount, newConf.rowCount) - 1
        );
      }
      if (oldConf.columnWidth !== newConf.columnWidth) {
        gridRef.current.resetAfterIndices({ columnIndex: 0, rowIndex: 0 });
      }
    }
    setGridConfig(newConf);
  }, [
    setGridConfig,
    gridConfigRef,
    isMobileBreakpoint,
    width,
    viewConfig,
    fileCount
  ]);
  const sizers = useMemo(() => {
    const gc = gridConfigRef;
    return {
      getColumnWidth: (index) => gc.current.columnWidth + (index === gc.current.columnCount - 1 ? 0 : gc.current.gutter),
      getRowHeight: (index) => gc.current.rowHeight + (index === gc.current.rowCount - 1 ? 0 : gc.current.gutter)
    };
  }, [gridConfigRef]);
  const displayFileIdsRef = useInstanceVariable(
    useSelector(selectors.getDisplayFileIds)
  );
  const getItemKey = useCallback(
    (data) => {
      const index = data.rowIndex * gridConfigRef.current.columnCount + data.columnIndex;
      return displayFileIdsRef.current[index] ?? `loading-file-${index}`;
    },
    [gridConfigRef, displayFileIdsRef]
  );
  const cellRenderer = useCallback(
    (data) => {
      const gc = gridConfigRef;
      const index = data.rowIndex * gc.current.columnCount + data.columnIndex;
      const fileId = displayFileIds[index];
      if (displayFileIds[index] === void 0) return null;
      const styleWithGutter = {
        ...data.style,
        paddingRight: data.columnIndex === gc.current.columnCount - 1 ? 0 : gc.current.gutter,
        paddingBottom: data.rowIndex === gc.current.rowCount - 1 ? 0 : gc.current.gutter,
        boxSizing: "border-box"
      };
      return /* @__PURE__ */ jsx("div", { style: styleWithGutter, children: /* @__PURE__ */ jsx(
        SmartFileEntry,
        {
          fileId: fileId ?? null,
          displayIndex: index,
          fileViewMode: viewConfig.mode
        }
      ) });
    },
    [displayFileIds, viewConfig.mode]
  );
  const classes = useStyles();
  const gridComponent = useMemo(() => {
    return /* @__PURE__ */ jsx(
      VariableSizeGrid,
      {
        ref: gridRef,
        className: classes.gridContainer,
        estimatedRowHeight: gridConfig.rowHeight + gridConfig.gutter,
        rowHeight: sizers.getRowHeight,
        estimatedColumnWidth: gridConfig.columnWidth + gridConfig.gutter,
        columnWidth: sizers.getColumnWidth,
        columnCount: gridConfig.columnCount,
        height,
        rowCount: gridConfig.rowCount,
        width,
        itemKey: getItemKey,
        children: cellRenderer
      }
    );
  }, [
    classes.gridContainer,
    gridConfig.rowHeight,
    gridConfig.gutter,
    gridConfig.columnWidth,
    gridConfig.columnCount,
    gridConfig.rowCount,
    sizers.getRowHeight,
    sizers.getColumnWidth,
    height,
    width,
    getItemKey,
    cellRenderer
  ]);
  return gridComponent;
});
const useStyles = makeGlobalChonkyStyles(() => ({
  gridContainer: {}
}));
export {
  GridContainer,
  getGridConfig,
  isMobileDevice
};
