import { jsx, jsxs } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from "react";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import {
  selectHiddenFileCount,
  selectors,
  selectSelectionSize
} from "../../redux/selectors";
import { getI18nId, I18nNamespace } from "../../util/i18n";
import { important, makeGlobalChonkyStyles } from "../../util/styles";
const ToolbarInfo = React.memo(() => {
  const classes = useStyles();
  const displayFileIds = useSelector(selectors.getDisplayFileIds);
  const selectionSize = useSelector(selectSelectionSize);
  const hiddenCount = useSelector(selectHiddenFileCount);
  const intl = useIntl();
  const fileCountString = intl.formatMessage(
    {
      id: getI18nId(I18nNamespace.Toolbar, "visibleFileCount"),
      defaultMessage: `{fileCount, plural,
                =0 {# items}
                one {# item}
                other {# items}
            }`
    },
    { fileCount: displayFileIds.length }
  );
  const selectedString = intl.formatMessage(
    {
      id: getI18nId(I18nNamespace.Toolbar, "selectedFileCount"),
      defaultMessage: `{fileCount, plural,
                =0 {}
                other {# selected}
            }`
    },
    { fileCount: selectionSize }
  );
  const hiddenString = intl.formatMessage(
    {
      id: getI18nId(I18nNamespace.Toolbar, "hiddenFileCount"),
      defaultMessage: `{fileCount, plural,
                =0 {}
                other {# hidden}
            }`
    },
    { fileCount: hiddenCount }
  );
  return /* @__PURE__ */ jsx("div", { className: classes.infoContainer, children: /* @__PURE__ */ jsxs(Typography, { className: classes.infoText, variant: "body1", children: [
    fileCountString,
    (selectedString || hiddenString) && /* @__PURE__ */ jsxs("span", { className: classes.extraInfoSpan, children: [
      "(",
      /* @__PURE__ */ jsx("span", { className: classes.selectionSizeText, children: selectedString }),
      selectedString && hiddenString && ", ",
      /* @__PURE__ */ jsx("span", { className: classes.hiddenCountText, children: hiddenString }),
      ")"
    ] })
  ] }) });
});
const useStyles = makeGlobalChonkyStyles((theme) => ({
  infoContainer: {
    height: theme.toolbar.size,
    display: "flex"
  },
  infoText: {
    lineHeight: important(theme.toolbar.lineHeight),
    fontSize: important(theme.toolbar.fontSize),
    marginLeft: important(12),
    height: theme.toolbar.size
  },
  extraInfoSpan: {
    marginRight: important(8),
    marginLeft: important(8),
    opacity: 0.8
  },
  selectionSizeText: {
    color: theme.colors.textActive
  },
  hiddenCountText: {}
}));
export {
  ToolbarInfo
};
