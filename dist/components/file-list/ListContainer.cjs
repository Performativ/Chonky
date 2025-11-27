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
var ListContainer_exports = {};
__export(ListContainer_exports, {
  ListContainer: () => ListContainer
});
module.exports = __toCommonJS(ListContainer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_react_redux = require("react-redux");
var import_react_window = require("react-window");
var import_selectors = require("../../redux/selectors");
var import_file_view = require("../../types/file-view.types");
var import_hooks_helpers = require("../../util/hooks-helpers");
var import_styles = require("../../util/styles");
var import_FileEntry = require("./FileEntry");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const FixedSizeList = import_react_window.FixedSizeList;
const ListContainer = (props) => {
  const { width, height } = props;
  const viewConfig = (0, import_react_redux.useSelector)(import_selectors.selectFileViewConfig);
  const listRef = (0, import_react.useRef)(null);
  const displayFileIds = (0, import_react_redux.useSelector)(import_selectors.selectors.getDisplayFileIds);
  const displayFileIdsRef = (0, import_hooks_helpers.useInstanceVariable)(displayFileIds);
  const getItemKey = (0, import_react.useCallback)(
    (index) => displayFileIdsRef.current[index] ?? `loading-file-${index}`,
    [displayFileIdsRef]
  );
  const classes = useStyles();
  const listComponent = (0, import_react.useMemo)(() => {
    const rowRenderer = (data) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: data.style, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_FileEntry.SmartFileEntry,
        {
          fileId: displayFileIds[data.index] ?? null,
          displayIndex: data.index,
          fileViewMode: import_file_view.FileViewMode.List
        }
      ) });
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
const useStyles = (0, import_styles.makeLocalChonkyStyles)((theme) => ({
  listContainer: {
    borderTop: `solid 1px ${theme.palette.divider}`
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ListContainer
});
