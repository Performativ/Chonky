import { jsx, jsxs } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React, { useContext } from "react";
import { useIntl } from "react-intl";
import { ChonkyIconName } from "../../types/icons.types";
import { getI18nId, I18nNamespace } from "../../util/i18n";
import { ChonkyIconContext } from "../../util/icon-helper";
import { makeGlobalChonkyStyles } from "../../util/styles";
const FileListEmpty = (props) => {
  const { width, height } = props;
  const classes = useStyles();
  const ChonkyIcon = useContext(ChonkyIconContext);
  const style = {
    width,
    height
  };
  const intl = useIntl();
  const emptyString = intl.formatMessage({
    id: getI18nId(I18nNamespace.FileList, "nothingToShow"),
    defaultMessage: "Nothing to show"
  });
  return /* @__PURE__ */ jsx("div", { className: classes.fileListEmpty, style, children: /* @__PURE__ */ jsxs("div", { className: classes.fileListEmptyContent, children: [
    /* @__PURE__ */ jsx(ChonkyIcon, { icon: ChonkyIconName.folderOpen }),
    "\xA0 ",
    emptyString
  ] }) });
};
const useStyles = makeGlobalChonkyStyles((theme) => ({
  fileListEmpty: {
    color: theme.palette.text.disabled,
    position: "relative",
    textAlign: "center",
    fontSize: "1.2em"
  },
  fileListEmptyContent: {
    transform: "translateX(-50%) translateY(-50%)",
    position: "absolute",
    left: "50%",
    top: "50%"
  }
}));
export {
  FileListEmpty
};
