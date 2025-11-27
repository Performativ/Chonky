import { jsx, jsxs } from "react/jsx-runtime";
import React from "react";
import { FileHelper } from "../../util/file-helper";
import { makeLocalChonkyStyles } from "../../util/styles";
import { useFileEntryHtmlProps, useFileEntryState } from "./FileEntry-hooks";
import { FileEntryName } from "./FileEntryName";
import {
  GridEntryPreviewFile,
  GridEntryPreviewFolder
} from "./GridEntryPreview";
import classNames from "classnames";
const GridEntry = React.memo(
  ({ file, selected, focused }) => {
    const isDirectory = FileHelper.isDirectory(file);
    const entryState = useFileEntryState(file, selected, focused);
    const classes = useFileEntryStyles(entryState);
    const fileEntryHtmlProps = useFileEntryHtmlProps(file);
    const entryClassName = classNames({
      [classes.gridFileEntry]: true
    });
    return /* @__PURE__ */ jsxs("div", { className: entryClassName, ...fileEntryHtmlProps, children: [
      isDirectory ? /* @__PURE__ */ jsx(
        GridEntryPreviewFolder,
        {
          className: classes.gridFileEntryPreview,
          entryState
        }
      ) : /* @__PURE__ */ jsx(
        GridEntryPreviewFile,
        {
          className: classes.gridFileEntryPreview,
          entryState
        }
      ),
      /* @__PURE__ */ jsx("div", { className: classes.gridFileEntryNameContainer, children: /* @__PURE__ */ jsx(FileEntryName, { className: classes.gridFileEntryName, file }) })
    ] });
  }
);
GridEntry.displayName = "GridEntry";
const useFileEntryStyles = makeLocalChonkyStyles((theme) => ({
  gridFileEntry: {
    flexDirection: "column",
    display: "flex",
    height: "100%"
  },
  gridFileEntryPreview: {
    flexGrow: 1
  },
  gridFileEntryNameContainer: {
    fontSize: theme.gridFileEntry.fontSize,
    wordBreak: "break-word",
    textAlign: "center",
    paddingTop: 5
  },
  gridFileEntryName: {
    backgroundColor: (state) => state.selected ? "rgba(0,153,255, .25)" : "transparent",
    textDecoration: (state) => state.focused ? "underline" : "none",
    borderRadius: 3,
    padding: [2, 4]
  }
}));
export {
  GridEntry
};
