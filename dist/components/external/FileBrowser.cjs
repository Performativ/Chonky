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
var FileBrowser_exports = {};
__export(FileBrowser_exports, {
  FileBrowser: () => FileBrowser
});
module.exports = __toCommonJS(FileBrowser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_styles = require("@mui/material/styles");
var import_deepmerge = __toESM(require("deepmerge"), 1);
var import_react = __toESM(require("react"), 1);
var import_react_intl = require("react-intl");
var import_react_jss = require("react-jss");
var import_react_redux = require("react-redux");
var import_shortid = __toESM(require("shortid"), 1);
var import_store = require("../../redux/store");
var import_default_config = require("../../util/default-config");
var import_helpers = require("../../util/helpers");
var import_hooks_helpers = require("../../util/hooks-helpers");
var import_i18n = require("../../util/i18n");
var import_icon_helper = require("../../util/icon-helper");
var import_styles2 = require("../../util/styles");
var import_ChonkyBusinessLogic = require("../internal/ChonkyBusinessLogic");
var import_ChonkyIconPlaceholder = require("../internal/ChonkyIconPlaceholder");
var import_ChonkyPresentationLayer = require("../internal/ChonkyPresentationLayer");
const FileBrowser = import_react.default.forwardRef((props, ref) => {
  const { instanceId, iconComponent, children } = props;
  const darkMode = (0, import_helpers.getValueOrFallback)(
    props.darkMode,
    import_default_config.defaultConfig.darkMode,
    "boolean"
  );
  const i18n = (0, import_helpers.getValueOrFallback)(props.i18n, import_default_config.defaultConfig.i18n);
  const formatters = (0, import_react.useMemo)(
    () => ({ ...import_i18n.defaultFormatters, ...i18n?.formatters }),
    [i18n]
  );
  const chonkyInstanceId = (0, import_hooks_helpers.useStaticValue)(() => instanceId ?? import_shortid.default.generate());
  const store = (0, import_store.useChonkyStore)(chonkyInstanceId);
  const isMobileBreakpoint = (0, import_styles2.useIsMobileBreakpoint)();
  const theme = (0, import_react.useMemo)(() => {
    const muiTheme = (0, import_styles.createTheme)({
      palette: { mode: darkMode ? "dark" : "light" }
    });
    const combinedTheme = (0, import_deepmerge.default)(
      muiTheme,
      (0, import_deepmerge.default)(import_styles2.lightTheme, darkMode ? import_styles2.darkThemeOverride : {})
    );
    return isMobileBreakpoint ? (0, import_deepmerge.default)(combinedTheme, import_styles2.mobileThemeOverride) : combinedTheme;
  }, [darkMode, isMobileBreakpoint]);
  const chonkyComps = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ChonkyBusinessLogic.ChonkyBusinessLogic, { ref, ...props }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ChonkyPresentationLayer.ChonkyPresentationLayer, { children })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_intl.IntlProvider, { locale: "en", defaultLocale: "en", ...i18n, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_i18n.ChonkyFormattersContext.Provider, { value: formatters, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_redux.Provider, { store, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_jss.ThemeProvider, { theme, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_styles.ThemeProvider, { theme, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_icon_helper.ChonkyIconContext.Provider,
    {
      value: iconComponent ?? import_default_config.defaultConfig.iconComponent ?? import_ChonkyIconPlaceholder.ChonkyIconPlaceholder,
      children: chonkyComps
    }
  ) }) }) }) }) });
});
FileBrowser.displayName = "FileBrowser";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileBrowser
});
