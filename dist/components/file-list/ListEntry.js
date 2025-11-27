import { jsx, jsxs } from "react/jsx-runtime";
import React, { useContext, useMemo } from "react";
import { useLocalizedFileEntryStrings } from "../../util/i18n";
import { ChonkyIconContext } from "../../util/icon-helper";
import { makeLocalChonkyStyles } from "../../util/styles";
import { TextPlaceholder } from "../external/TextPlaceholder";
import { useFileEntryHtmlProps, useFileEntryState } from "./FileEntry-hooks";
import { FileEntryName } from "./FileEntryName";
import { useCommonEntryStyles } from "./GridEntryPreview";
import classNames from "classnames";
const ListEntry = ({ file, selected, focused }) => {
  const entryState = useFileEntryState(file, selected, focused);
  const { fileModDateString, fileSizeString } = useLocalizedFileEntryStrings(file);
  const styleState = useMemo(
    () => ({
      entryState
    }),
    [entryState]
  );
  const classes = useStyles(styleState);
  const commonClasses = useCommonEntryStyles(entryState);
  const ChonkyIcon = useContext(ChonkyIconContext);
  const fileEntryHtmlProps = useFileEntryHtmlProps(file);
  return /* @__PURE__ */ jsxs("div", { className: classes.listFileEntry, ...fileEntryHtmlProps, children: [
    /* @__PURE__ */ jsx("div", { className: commonClasses.focusIndicator }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: classNames([
          commonClasses.selectionIndicator,
          classes.listFileEntrySelection
        ])
      }
    ),
    /* @__PURE__ */ jsx("div", { className: classes.listFileEntryIcon, children: /* @__PURE__ */ jsx(
      ChonkyIcon,
      {
        icon: entryState.icon,
        spin: entryState.iconSpin,
        fixedWidth: true
      }
    ) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: classes.listFileEntryName,
        title: file ? file.name : void 0,
        children: /* @__PURE__ */ jsx(FileEntryName, { file })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: classes.listFileEntryProperty, children: file ? fileModDateString ?? /* @__PURE__ */ jsx("span", { children: "\u2014" }) : /* @__PURE__ */ jsx(TextPlaceholder, { minLength: 5, maxLength: 15 }) }),
    /* @__PURE__ */ jsx("div", { className: classes.listFileEntryProperty, children: file ? fileSizeString ?? /* @__PURE__ */ jsx("span", { children: "\u2014" }) : /* @__PURE__ */ jsx(TextPlaceholder, { minLength: 10, maxLength: 20 }) })
  ] });
};
const useStyles = makeLocalChonkyStyles((theme) => ({
  listFileEntry: {
    boxShadow: `inset ${theme.palette.divider} 0 -1px 0`,
    fontSize: theme.listFileEntry.fontSize,
    color: () => "inherit",
    alignItems: "center",
    position: "relative",
    display: "flex",
    height: "100%"
  },
  listFileEntrySelection: {
    opacity: 0.6
  },
  listFileEntryIcon: {
    color: ({ entryState }) => entryState.color,
    fontSize: theme.listFileEntry.iconFontSize,
    boxSizing: "border-box",
    padding: [2, 4],
    zIndex: 20
  },
  listFileEntryName: {
    textOverflow: "ellipsis",
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    overflow: "hidden",
    flex: "1 1 300px",
    paddingLeft: 8,
    zIndex: 20
  },
  listFileEntryProperty: {
    fontSize: theme.listFileEntry.propertyFontSize,
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    overflow: "hidden",
    flex: "0 1 150px",
    padding: [2, 8],
    zIndex: 20
  }
}));
export {
  ListEntry
};
