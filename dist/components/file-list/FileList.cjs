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
var FileList_exports = {};
__export(FileList_exports, {
  FileList: () => FileList
});
module.exports = __toCommonJS(FileList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_react_redux = require("react-redux");
var import_react_virtualized_auto_sizer = __toESM(require("react-virtualized-auto-sizer"), 1);
var import_classnames = __toESM(require("classnames"), 1);
var import_action_definitions = require("../../action-definitions/index");
var import_selectors = require("../../redux/selectors");
var import_file_view = require("../../types/file-view.types");
var import_styles = require("../../util/styles");
var import_FileListEmpty = require("./FileListEmpty");
var import_GridContainer = require("./GridContainer");
var import_ListContainer = require("./ListContainer");
const FileList = import_react.default.memo((props) => {
  const displayFileIds = (0, import_react_redux.useSelector)(import_selectors.selectors.getDisplayFileIds);
  const viewConfig = (0, import_react_redux.useSelector)(import_selectors.selectFileViewConfig);
  const localClasses = useLocalStyles();
  const classes = useStyles(viewConfig);
  const { onScroll } = props;
  const fillParentContainer = true;
  const listRenderer = (0, import_react.useCallback)(
    ({ width, height }) => {
      if (displayFileIds.length === 0) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_FileListEmpty.FileListEmpty, { width, height: viewConfig.entryHeight });
      } else if (viewConfig.mode === import_file_view.FileViewMode.List) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ListContainer.ListContainer, { width, height });
      } else {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_GridContainer.GridContainer, { width, height });
      }
    },
    [displayFileIds, viewConfig]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      onScroll,
      className: (0, import_classnames.default)([
        classes.fileListWrapper,
        localClasses.fileListWrapper
      ]),
      role: "list",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_virtualized_auto_sizer.default, { disableHeight: !fillParentContainer, children: listRenderer })
    }
  );
});
FileList.displayName = "FileList";
const useLocalStyles = (0, import_styles.makeLocalChonkyStyles)(() => ({
  fileListWrapper: {
    minHeight: import_action_definitions.ChonkyActions.EnableGridView.fileViewConfig.entryHeight + 2,
    background: () => "none"
  }
}));
const useStyles = (0, import_styles.makeGlobalChonkyStyles)(() => ({
  fileListWrapper: {
    height: "100%",
    maxHeight: "100%"
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileList
});
