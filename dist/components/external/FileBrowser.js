import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import merge from "deepmerge";
import React, { useMemo } from "react";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "react-jss";
import { Provider as ReduxProvider } from "react-redux";
import shortid from "shortid";
import { useChonkyStore } from "../../redux/store";
import { defaultConfig } from "../../util/default-config";
import { getValueOrFallback } from "../../util/helpers";
import { useStaticValue } from "../../util/hooks-helpers";
import { ChonkyFormattersContext, defaultFormatters } from "../../util/i18n";
import { ChonkyIconContext } from "../../util/icon-helper";
import {
  darkThemeOverride,
  lightTheme,
  mobileThemeOverride,
  useIsMobileBreakpoint
} from "../../util/styles";
import { ChonkyBusinessLogic } from "../internal/ChonkyBusinessLogic";
import { ChonkyIconPlaceholder } from "../internal/ChonkyIconPlaceholder";
import { ChonkyPresentationLayer } from "../internal/ChonkyPresentationLayer";
const FileBrowser = React.forwardRef((props, ref) => {
  const { instanceId, iconComponent, children } = props;
  const darkMode = getValueOrFallback(
    props.darkMode,
    defaultConfig.darkMode,
    "boolean"
  );
  const i18n = getValueOrFallback(props.i18n, defaultConfig.i18n);
  const formatters = useMemo(
    () => ({ ...defaultFormatters, ...i18n?.formatters }),
    [i18n]
  );
  const chonkyInstanceId = useStaticValue(() => instanceId ?? shortid.generate());
  const store = useChonkyStore(chonkyInstanceId);
  const isMobileBreakpoint = useIsMobileBreakpoint();
  const theme = useMemo(() => {
    const muiTheme = createTheme({
      palette: { mode: darkMode ? "dark" : "light" }
    });
    const combinedTheme = merge(
      muiTheme,
      merge(lightTheme, darkMode ? darkThemeOverride : {})
    );
    return isMobileBreakpoint ? merge(combinedTheme, mobileThemeOverride) : combinedTheme;
  }, [darkMode, isMobileBreakpoint]);
  const chonkyComps = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ChonkyBusinessLogic, { ref, ...props }),
    /* @__PURE__ */ jsx(ChonkyPresentationLayer, { children })
  ] });
  return /* @__PURE__ */ jsx(IntlProvider, { locale: "en", defaultLocale: "en", ...i18n, children: /* @__PURE__ */ jsx(ChonkyFormattersContext.Provider, { value: formatters, children: /* @__PURE__ */ jsx(ReduxProvider, { store, children: /* @__PURE__ */ jsx(ThemeProvider, { theme, children: /* @__PURE__ */ jsx(MuiThemeProvider, { theme, children: /* @__PURE__ */ jsx(
    ChonkyIconContext.Provider,
    {
      value: iconComponent ?? defaultConfig.iconComponent ?? ChonkyIconPlaceholder,
      children: chonkyComps
    }
  ) }) }) }) }) });
});
FileBrowser.displayName = "FileBrowser";
export {
  FileBrowser
};
