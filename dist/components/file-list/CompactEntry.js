import { jsx, jsxs } from "react/jsx-runtime";
import React, { useContext } from "react";
import { useLocalizedFileEntryStrings } from "../../util/i18n";
import { ChonkyIconContext } from "../../util/icon-helper";
import { makeLocalChonkyStyles } from "../../util/styles";
import { TextPlaceholder } from "../external/TextPlaceholder";
import { useFileEntryHtmlProps, useFileEntryState } from "./FileEntry-hooks";
import { FileEntryName } from "./FileEntryName";
const CompactEntry = ({ file, selected, focused }) => {
  const entryState = useFileEntryState(file, selected, focused);
  const { fileModDateString, fileSizeString } = useLocalizedFileEntryStrings(file);
  const classes = useStyles(entryState);
  const ChonkyIcon = useContext(ChonkyIconContext);
  const fileEntryHtmlProps = useFileEntryHtmlProps(file);
  return /* @__PURE__ */ jsxs("div", { className: classes.listFileEntry, ...fileEntryHtmlProps, children: [
    /* @__PURE__ */ jsx("div", { className: classes.listFileEntryIcon, children: /* @__PURE__ */ jsx(
      ChonkyIcon,
      {
        icon: entryState.icon,
        spin: entryState.iconSpin,
        fixedWidth: true
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: classes.listFileEntryDescription, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: classes.listFileEntryName,
          title: file ? file.name : void 0,
          children: /* @__PURE__ */ jsx(FileEntryName, { file })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: classes.listFileEntryProperties, children: [
        /* @__PURE__ */ jsx("div", { className: classes.listFileEntryProperty, children: file ? fileModDateString ?? /* @__PURE__ */ jsx("span", { children: "\u2014" }) : /* @__PURE__ */ jsx(TextPlaceholder, { minLength: 5, maxLength: 15 }) }),
        /* @__PURE__ */ jsx("div", { className: classes.listFileEntryProperty, children: file ? fileSizeString ?? /* @__PURE__ */ jsx("span", { children: "\u2014" }) : /* @__PURE__ */ jsx(TextPlaceholder, { minLength: 10, maxLength: 20 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "chonky-file-entry-outline" }),
    /* @__PURE__ */ jsx("div", { className: "chonky-file-entry-selection" })
  ] });
};
const useStyles = makeLocalChonkyStyles((theme) => ({
  listFileEntry: {
    fontSize: theme.listFileEntry.fontSize,
    alignItems: "center",
    position: "relative",
    display: "flex",
    height: "100%"
  },
  listFileEntryIcon: {
    backgroundColor: (state) => state.color,
    boxShadow: "inset rgba(255, 255, 255, 0.5) 0 0 0 999px",
    borderRadius: theme.listFileEntry.iconBorderRadius,
    fontSize: theme.listFileEntry.iconFontSize,
    color: "#fff",
    padding: 8
  },
  listFileEntryDescription: {
    flexDirection: "column",
    display: "flex",
    flexGrow: 1
  },
  listFileEntryName: {
    padding: [0, 8, 4, 8]
  },
  listFileEntryProperties: {
    fontSize: theme.listFileEntry.propertyFontSize,
    flexDirection: "row",
    display: "flex"
  },
  listFileEntryProperty: {
    padding: [0, 8],
    opacity: 0.4
  }
}));
export {
  CompactEntry
};
