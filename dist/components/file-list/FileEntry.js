import { jsx } from "react/jsx-runtime";
import React, { useState } from "react";
import { selectFileData, selectIsFileSelected } from "../../redux/selectors";
import { useParamSelector } from "../../redux/store";
import { FileViewMode } from "../../types/file-view.types";
import { FileHelper } from "../../util/file-helper";
import { makeGlobalChonkyStyles } from "../../util/styles";
import {
  ClickableWrapper
} from "../internal/ClickableWrapper";
import { CompactEntry } from "./CompactEntry";
import { useFileClickHandlers } from "./FileEntry-hooks";
import { GridEntry } from "./GridEntry";
import { ListEntry } from "./ListEntry";
const SmartFileEntry = React.memo(
  ({ fileId, displayIndex, fileViewMode }) => {
    const classes = useStyles();
    const file = useParamSelector(selectFileData, fileId) ?? null;
    const selected = useParamSelector(selectIsFileSelected, fileId);
    const fileClickHandlers = useFileClickHandlers(file, displayIndex);
    const [focused, setFocused] = useState(false);
    const clickableWrapperProps = {
      wrapperTag: "div",
      passthroughProps: { className: classes.fileEntryClickableWrapper },
      ...FileHelper.isClickable(file) ? fileClickHandlers : void 0,
      setFocused
    };
    const fileEntryProps = {
      file,
      selected,
      focused
    };
    let EntryComponent;
    if (fileViewMode === FileViewMode.List) EntryComponent = ListEntry;
    else if (fileViewMode === FileViewMode.Compact) EntryComponent = CompactEntry;
    else EntryComponent = GridEntry;
    return /* @__PURE__ */ jsx(ClickableWrapper, { ...clickableWrapperProps, children: /* @__PURE__ */ jsx(EntryComponent, { ...fileEntryProps }) });
  }
);
SmartFileEntry.displayName = "SmartFileEntry";
const useStyles = makeGlobalChonkyStyles(() => ({
  fileEntryClickableWrapper: {
    // We disable default browser outline because Chonky provides its own outline
    // (which doesn't compromise accessibility, hopefully)
    outline: "none !important",
    position: "relative",
    height: "100%"
  }
}));
export {
  SmartFileEntry
};
