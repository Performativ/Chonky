import { jsx, jsxs } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React, { useContext } from "react";
import { ChonkyIconName } from "../../types/icons.types";
import { ChonkyIconContext } from "../../util/icon-helper";
import { important, makeLocalChonkyStyles } from "../../util/styles";
import { FileThumbnail } from "./FileThumbnail";
import classNames from "classnames";
const GridEntryPreviewFolder = React.memo(
  (props) => {
    const { className: externalClassName, entryState } = props;
    const folderClasses = useFolderStyles(entryState);
    const fileClasses = useFileStyles(entryState);
    const commonClasses = useCommonEntryStyles(entryState);
    const className = classNames({
      [folderClasses.previewFile]: true,
      [externalClassName || ""]: !!externalClassName
    });
    return /* @__PURE__ */ jsx("div", { className, children: /* @__PURE__ */ jsxs("div", { className: folderClasses.folderBackSideMid, children: [
      /* @__PURE__ */ jsx("div", { className: folderClasses.folderBackSideTop }),
      /* @__PURE__ */ jsxs("div", { className: folderClasses.folderFrontSide, children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: classNames([
              fileClasses.fileIcon,
              folderClasses.fileIcon
            ]),
            children: entryState.childrenCount
          }
        ),
        /* @__PURE__ */ jsx("div", { className: commonClasses.selectionIndicator }),
        /* @__PURE__ */ jsx(
          FileThumbnail,
          {
            className: fileClasses.thumbnail,
            thumbnailUrl: entryState.thumbnailUrl
          }
        )
      ] })
    ] }) });
  }
);
GridEntryPreviewFolder.displayName = "GridEntryPreviewFolder";
const useFolderStyles = makeLocalChonkyStyles((theme) => ({
  previewFile: {
    borderRadius: theme.gridFileEntry.borderRadius,
    position: "relative",
    overflow: "hidden"
  },
  folderBackSideTop: {
    backgroundColor: (state) => state.color,
    boxShadow: (state) => {
      let color = theme.gridFileEntry.folderBackColorTint;
      if (state.focused) color = "rgba(0, 0, 0, 0.3)";
      else if (state.selected) color = "rgba(0, 153, 255, .4)";
      return `inset ${color} 0 0 0 999px`;
    },
    borderTopLeftRadius: theme.gridFileEntry.borderRadius,
    borderTopRightRadius: 10,
    position: "absolute",
    right: "60%",
    height: 13,
    top: -10,
    left: 0,
    "&:after": {
      borderRightColor: theme.palette.background.paper,
      borderTopColor: theme.palette.background.paper,
      borderBottomColor: "transparent",
      borderLeftColor: "transparent",
      borderWidth: [0, 15, 10, 0],
      borderStyle: "solid",
      position: "absolute",
      display: "block",
      content: '""',
      right: 0,
      top: 0
    }
  },
  folderBackSideMid: {
    backgroundColor: (state) => state.color,
    boxShadow: (state) => {
      let color = theme.gridFileEntry.folderBackColorTint;
      if (state.focused) color = "rgba(0, 0, 0, 0.3)";
      else if (state.selected) color = "rgba(0, 153, 255, .4)";
      return `inset ${color} 0 0 0 999px`;
    },
    borderTopRightRadius: theme.gridFileEntry.borderRadius,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 10
  },
  folderFrontSide: {
    boxShadow: (state) => {
      const shadows = [];
      if (state.focused) shadows.push("inset rgba(0, 0, 0, 1) 0 0 0 3px");
      if (state.selected) shadows.push("inset rgba(0, 153, 255, .65) 0 0 0 3px");
      shadows.push(
        `inset ${theme.gridFileEntry.folderFrontColorTint} 0 0 0 999px`
      );
      return shadows.join(", ");
    },
    backgroundColor: (state) => state.color,
    borderRadius: theme.gridFileEntry.borderRadius,
    position: "absolute",
    overflow: "hidden",
    bottom: 0,
    right: 0,
    left: 0,
    top: 10
  },
  fileIcon: {
    fontSize: important(theme.gridFileEntry.childrenCountSize)
  }
}));
const GridEntryPreviewFile = React.memo(
  (props) => {
    const { className: externalClassName, entryState } = props;
    const fileClasses = useFileStyles(entryState);
    const commonClasses = useCommonEntryStyles(entryState);
    const ChonkyIcon = useContext(ChonkyIconContext);
    const className = classNames({
      [fileClasses.previewFile]: true,
      [externalClassName || ""]: !!externalClassName
    });
    return /* @__PURE__ */ jsxs("div", { className, children: [
      /* @__PURE__ */ jsx("div", { className: fileClasses.fileIcon, children: /* @__PURE__ */ jsx(ChonkyIcon, { icon: entryState.icon, spin: entryState.iconSpin }) }),
      /* @__PURE__ */ jsx("div", { className: commonClasses.selectionIndicator }),
      /* @__PURE__ */ jsx(
        FileThumbnail,
        {
          className: fileClasses.thumbnail,
          thumbnailUrl: entryState.thumbnailUrl
        }
      )
    ] });
  }
);
GridEntryPreviewFile.displayName = "GridEntryPreviewFile";
const useFileStyles = makeLocalChonkyStyles((theme) => ({
  previewFile: {
    boxShadow: (state) => {
      const shadows = [];
      if (state.selected) shadows.push("inset rgba(0,153,255, .65) 0 0 0 3px");
      if (state.focused) shadows.push("inset rgba(0, 0, 0, 1) 0 0 0 3px");
      shadows.push(`inset ${theme.gridFileEntry.fileColorTint} 0 0 0 999px`);
      return shadows.join(", ");
    },
    backgroundColor: (state) => state.color,
    borderRadius: theme.gridFileEntry.borderRadius,
    position: "relative",
    overflow: "hidden"
  },
  dndIndicator: {
    zIndex: 14
  },
  fileIcon: {
    transform: "translateX(-50%) translateY(-50%)",
    fontSize: theme.gridFileEntry.iconSize,
    opacity: (state) => state.thumbnailUrl && !state.focused ? 0 : 1,
    color: (state) => state.focused ? theme.gridFileEntry.iconColorFocused : theme.gridFileEntry.iconColor,
    position: "absolute",
    left: "50%",
    zIndex: 12,
    top: "50%"
  },
  thumbnail: {
    borderRadius: theme.gridFileEntry.borderRadius,
    position: "absolute",
    zIndex: 6,
    bottom: 5,
    right: 5,
    left: 5,
    top: 5
  }
}));
const useCommonEntryStyles = makeLocalChonkyStyles(() => ({
  selectionIndicator: {
    display: (state) => state.selected ? "block" : "none",
    background: "repeating-linear-gradient(45deg,rgba(0,153,255,.14),rgba(0,153,255,.14) 10px,rgba(0,153,255,.25) 0,rgba(0,153,255,.25) 20px)",
    backgroundColor: "rgba(0, 153, 255, .14)",
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 10
  },
  focusIndicator: {
    display: (state) => state.focused ? "block" : "none",
    boxShadow: "inset rgba(0, 0, 0, 1) 0 0 0 2px",
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 11
  }
}));
export {
  GridEntryPreviewFile,
  GridEntryPreviewFolder,
  useCommonEntryStyles
};
