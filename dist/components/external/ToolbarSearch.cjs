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
var ToolbarSearch_exports = {};
__export(ToolbarSearch_exports, {
  ToolbarSearch: () => ToolbarSearch
});
module.exports = __toCommonJS(ToolbarSearch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_react_intl = require("react-intl");
var import_react_redux = require("react-redux");
var import_InputAdornment = __toESM(require("@mui/material/InputAdornment"), 1);
var import_TextField = __toESM(require("@mui/material/TextField"), 1);
var import_reducers = require("../../redux/reducers");
var import_selectors = require("../../redux/selectors");
var import_icons = require("../../types/icons.types");
var import_hooks_helpers = require("../../util/hooks-helpers");
var import_i18n = require("../../util/i18n");
var import_icon_helper = require("../../util/icon-helper");
var import_styles = require("../../util/styles");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const ToolbarSearch = import_react.default.memo(() => {
  const intl = (0, import_react_intl.useIntl)();
  const searchPlaceholderString = intl.formatMessage({
    id: (0, import_i18n.getI18nId)(import_i18n.I18nNamespace.Toolbar, "searchPlaceholder"),
    defaultMessage: "Search"
  });
  const classes = useStyles();
  const ChonkyIcon = (0, import_react.useContext)(import_icon_helper.ChonkyIconContext);
  const searchInputRef = (0, import_react.useRef)(null);
  const dispatch = (0, import_react_redux.useDispatch)();
  const reduxSearchString = (0, import_react_redux.useSelector)(import_selectors.selectSearchString);
  const [localSearchString, setLocalSearchString] = (0, import_react.useState)(reduxSearchString);
  const [debouncedLocalSearchString] = (0, import_hooks_helpers.useDebounce)(localSearchString, 300);
  const [showLoadingIndicator, setShowLoadingIndicator] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    dispatch(
      import_reducers.reduxActions.setFocusSearchInput(() => {
        if (searchInputRef.current) searchInputRef.current.focus();
      })
    );
    return () => {
      dispatch(import_reducers.reduxActions.setFocusSearchInput(null));
    };
  }, [dispatch]);
  (0, import_react.useEffect)(() => {
    setShowLoadingIndicator(false);
    dispatch(import_reducers.reduxActions.setSearchString(debouncedLocalSearchString));
  }, [debouncedLocalSearchString, dispatch]);
  const handleChange = (0, import_react.useCallback)((event) => {
    setShowLoadingIndicator(true);
    setLocalSearchString(event.currentTarget.value);
  }, []);
  const handleKeyUp = (0, import_react.useCallback)(
    (event) => {
      if (event.key === "Escape") {
        setLocalSearchString("");
        dispatch(import_reducers.reduxActions.setSearchString(""));
        if (searchInputRef.current) searchInputRef.current.blur();
      }
    },
    [dispatch]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_TextField.default,
    {
      className: classes.searchFieldContainer,
      size: "small",
      variant: "outlined",
      value: localSearchString,
      placeholder: searchPlaceholderString,
      onChange: handleChange,
      inputRef: searchInputRef,
      InputProps: {
        onKeyUp: handleKeyUp,
        startAdornment: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_InputAdornment.default, { className: classes.searchIcon, position: "start", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ChonkyIcon,
          {
            icon: showLoadingIndicator ? import_icons.ChonkyIconName.loading : import_icons.ChonkyIconName.search,
            spin: showLoadingIndicator
          }
        ) }),
        className: classes.searchFieldInput
      },
      inputProps: { className: classes.searchFieldInputInner }
    }
  );
});
const useStyles = (0, import_styles.makeGlobalChonkyStyles)((theme) => ({
  searchFieldContainer: {
    height: theme.toolbar.size,
    width: 150
  },
  searchIcon: {
    fontSize: "0.9em",
    opacity: 0.75
  },
  searchFieldInput: {
    lineHeight: (0, import_styles.important)(0),
    padding: (0, import_styles.important)(0),
    margin: (0, import_styles.important)(0),
    fontSize: (0, import_styles.important)(theme.toolbar.fontSize),
    borderRadius: theme.toolbar.buttonRadius,
    height: theme.toolbar.size - 4,
    paddingLeft: (0, import_styles.important)(8),
    marginTop: 2
  },
  searchFieldInputInner: {
    lineHeight: (0, import_styles.important)(`${theme.toolbar.size - 4}px`),
    fontSize: (0, import_styles.important)(theme.toolbar.fontSize),
    height: (0, import_styles.important)(theme.toolbar.size - 4),
    padding: (0, import_styles.important)([0, 8, 0, 0]),
    margin: (0, import_styles.important)(0),
    "-webkit-appearance": "none"
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ToolbarSearch
});
