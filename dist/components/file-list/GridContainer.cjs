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
var GridContainer_exports = {};
__export(GridContainer_exports, {
  GridContainer: () => GridContainer,
  getGridConfig: () => getGridConfig,
  isMobileDevice: () => isMobileDevice
});
module.exports = __toCommonJS(GridContainer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_react_redux = require("react-redux");
var import_react_window = require("react-window");
var import_selectors = require("../../redux/selectors");
var import_hooks_helpers = require("../../util/hooks-helpers");
var import_styles = require("../../util/styles");
var import_FileEntry = require("./FileEntry");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const VariableSizeGrid = import_react_window.VariableSizeGrid;
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
const GridContainer = import_react.default.memo((props) => {
  const { width, height } = props;
  const viewConfig = (0, import_react_redux.useSelector)(import_selectors.selectFileViewConfig);
  const displayFileIds = (0, import_react_redux.useSelector)(import_selectors.selectors.getDisplayFileIds);
  const fileCount = (0, import_react.useMemo)(() => displayFileIds.length, [displayFileIds]);
  const gridRef = (0, import_react.useRef)(null);
  const isMobileBreakpoint = (0, import_styles.useIsMobileBreakpoint)();
  const [gridConfig, setGridConfig] = (0, import_react.useState)(
    getGridConfig(width, fileCount, viewConfig, isMobileBreakpoint)
  );
  const gridConfigRef = (0, import_react.useRef)(gridConfig);
  (0, import_react.useEffect)(() => {
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
  const sizers = (0, import_react.useMemo)(() => {
    const gc = gridConfigRef;
    return {
      getColumnWidth: (index) => gc.current.columnWidth + (index === gc.current.columnCount - 1 ? 0 : gc.current.gutter),
      getRowHeight: (index) => gc.current.rowHeight + (index === gc.current.rowCount - 1 ? 0 : gc.current.gutter)
    };
  }, [gridConfigRef]);
  const displayFileIdsRef = (0, import_hooks_helpers.useInstanceVariable)(
    (0, import_react_redux.useSelector)(import_selectors.selectors.getDisplayFileIds)
  );
  const getItemKey = (0, import_react.useCallback)(
    (data) => {
      const index = data.rowIndex * gridConfigRef.current.columnCount + data.columnIndex;
      return displayFileIdsRef.current[index] ?? `loading-file-${index}`;
    },
    [gridConfigRef, displayFileIdsRef]
  );
  const cellRenderer = (0, import_react.useCallback)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: styleWithGutter, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_FileEntry.SmartFileEntry,
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
  const gridComponent = (0, import_react.useMemo)(() => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
const useStyles = (0, import_styles.makeGlobalChonkyStyles)(() => ({
  gridContainer: {}
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GridContainer,
  getGridConfig,
  isMobileDevice
});
