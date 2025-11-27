import { jsx } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { reduxActions } from "../../redux/reducers";
import { selectSearchString } from "../../redux/selectors";
import { ChonkyIconName } from "../../types/icons.types";
import { useDebounce } from "../../util/hooks-helpers";
import { getI18nId, I18nNamespace } from "../../util/i18n";
import { ChonkyIconContext } from "../../util/icon-helper";
import { important, makeGlobalChonkyStyles } from "../../util/styles";
const ToolbarSearch = React.memo(() => {
  const intl = useIntl();
  const searchPlaceholderString = intl.formatMessage({
    id: getI18nId(I18nNamespace.Toolbar, "searchPlaceholder"),
    defaultMessage: "Search"
  });
  const classes = useStyles();
  const ChonkyIcon = useContext(ChonkyIconContext);
  const searchInputRef = useRef(null);
  const dispatch = useDispatch();
  const reduxSearchString = useSelector(selectSearchString);
  const [localSearchString, setLocalSearchString] = useState(reduxSearchString);
  const [debouncedLocalSearchString] = useDebounce(localSearchString, 300);
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);
  useEffect(() => {
    dispatch(
      reduxActions.setFocusSearchInput(() => {
        if (searchInputRef.current) searchInputRef.current.focus();
      })
    );
    return () => {
      dispatch(reduxActions.setFocusSearchInput(null));
    };
  }, [dispatch]);
  useEffect(() => {
    setShowLoadingIndicator(false);
    dispatch(reduxActions.setSearchString(debouncedLocalSearchString));
  }, [debouncedLocalSearchString, dispatch]);
  const handleChange = useCallback((event) => {
    setShowLoadingIndicator(true);
    setLocalSearchString(event.currentTarget.value);
  }, []);
  const handleKeyUp = useCallback(
    (event) => {
      if (event.key === "Escape") {
        setLocalSearchString("");
        dispatch(reduxActions.setSearchString(""));
        if (searchInputRef.current) searchInputRef.current.blur();
      }
    },
    [dispatch]
  );
  return /* @__PURE__ */ jsx(
    TextField,
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
        startAdornment: /* @__PURE__ */ jsx(InputAdornment, { className: classes.searchIcon, position: "start", children: /* @__PURE__ */ jsx(
          ChonkyIcon,
          {
            icon: showLoadingIndicator ? ChonkyIconName.loading : ChonkyIconName.search,
            spin: showLoadingIndicator
          }
        ) }),
        className: classes.searchFieldInput
      },
      inputProps: { className: classes.searchFieldInputInner }
    }
  );
});
const useStyles = makeGlobalChonkyStyles((theme) => ({
  searchFieldContainer: {
    height: theme.toolbar.size,
    width: 150
  },
  searchIcon: {
    fontSize: "0.9em",
    opacity: 0.75
  },
  searchFieldInput: {
    lineHeight: important(0),
    padding: important(0),
    margin: important(0),
    fontSize: important(theme.toolbar.fontSize),
    borderRadius: theme.toolbar.buttonRadius,
    height: theme.toolbar.size - 4,
    paddingLeft: important(8),
    marginTop: 2
  },
  searchFieldInputInner: {
    lineHeight: important(`${theme.toolbar.size - 4}px`),
    fontSize: important(theme.toolbar.fontSize),
    height: important(theme.toolbar.size - 4),
    padding: important([0, 8, 0, 0]),
    margin: important(0),
    "-webkit-appearance": "none"
  }
}));
export {
  ToolbarSearch
};
