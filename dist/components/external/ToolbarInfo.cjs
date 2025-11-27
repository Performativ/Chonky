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
var ToolbarInfo_exports = {};
__export(ToolbarInfo_exports, {
  ToolbarInfo: () => ToolbarInfo
});
module.exports = __toCommonJS(ToolbarInfo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_react_intl = require("react-intl");
var import_react_redux = require("react-redux");
var import_Typography = __toESM(require("@mui/material/Typography"), 1);
var import_selectors = require("../../redux/selectors");
var import_i18n = require("../../util/i18n");
var import_styles = require("../../util/styles");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const ToolbarInfo = import_react.default.memo(() => {
  const classes = useStyles();
  const displayFileIds = (0, import_react_redux.useSelector)(import_selectors.selectors.getDisplayFileIds);
  const selectionSize = (0, import_react_redux.useSelector)(import_selectors.selectSelectionSize);
  const hiddenCount = (0, import_react_redux.useSelector)(import_selectors.selectHiddenFileCount);
  const intl = (0, import_react_intl.useIntl)();
  const fileCountString = intl.formatMessage(
    {
      id: (0, import_i18n.getI18nId)(import_i18n.I18nNamespace.Toolbar, "visibleFileCount"),
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
      id: (0, import_i18n.getI18nId)(import_i18n.I18nNamespace.Toolbar, "selectedFileCount"),
      defaultMessage: `{fileCount, plural,
                =0 {}
                other {# selected}
            }`
    },
    { fileCount: selectionSize }
  );
  const hiddenString = intl.formatMessage(
    {
      id: (0, import_i18n.getI18nId)(import_i18n.I18nNamespace.Toolbar, "hiddenFileCount"),
      defaultMessage: `{fileCount, plural,
                =0 {}
                other {# hidden}
            }`
    },
    { fileCount: hiddenCount }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: classes.infoContainer, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_Typography.default, { className: classes.infoText, variant: "body1", children: [
    fileCountString,
    (selectedString || hiddenString) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: classes.extraInfoSpan, children: [
      "(",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: classes.selectionSizeText, children: selectedString }),
      selectedString && hiddenString && ", ",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: classes.hiddenCountText, children: hiddenString }),
      ")"
    ] })
  ] }) });
});
const useStyles = (0, import_styles.makeGlobalChonkyStyles)((theme) => ({
  infoContainer: {
    height: theme.toolbar.size,
    display: "flex"
  },
  infoText: {
    lineHeight: (0, import_styles.important)(theme.toolbar.lineHeight),
    fontSize: (0, import_styles.important)(theme.toolbar.fontSize),
    marginLeft: (0, import_styles.important)(12),
    height: theme.toolbar.size
  },
  extraInfoSpan: {
    marginRight: (0, import_styles.important)(8),
    marginLeft: (0, import_styles.important)(8),
    opacity: 0.8
  },
  selectionSizeText: {
    color: theme.colors.textActive
  },
  hiddenCountText: {}
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ToolbarInfo
});
