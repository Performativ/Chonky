import useMediaQuery from "@mui/material/useMediaQuery";
import { createUseStyles } from "react-jss";
const lightTheme = {
  colors: {
    debugRed: "#fabdbd",
    debugBlue: "#bdd8fa",
    debugGreen: "#d2fabd",
    debugPurple: "#d2bdfa",
    debugYellow: "#fae9bd",
    textActive: "#09f"
  },
  fontSizes: {
    rootPrimary: 15
  },
  margins: {
    rootLayoutMargin: 8
  },
  toolbar: {
    size: 30,
    lineHeight: "30px",
    // `px` suffix is required for `line-height` fields to work
    fontSize: 15,
    buttonRadius: 4
  },
  dnd: {
    canDropColor: "green",
    cannotDropColor: "red",
    canDropMask: "rgba(180, 235, 180, 0.75)",
    cannotDropMask: "rgba(235, 180, 180, 0.75)",
    fileListCanDropMaskOne: "rgba(180, 235, 180, 0.1)",
    fileListCanDropMaskTwo: "rgba(180, 235, 180, 0.2)",
    fileListCannotDropMaskOne: "rgba(235, 180, 180, 0.1)",
    fileListCannotDropMaskTwo: "rgba(235, 180, 180, 0.2)"
  },
  dragLayer: {
    border: "solid 2px #09f",
    padding: "7px 10px",
    borderRadius: 2
  },
  fileList: {
    desktopGridGutter: 8,
    mobileGridGutter: 5
  },
  gridFileEntry: {
    childrenCountSize: "1.6em",
    iconColorFocused: "#000",
    iconSize: "2.4em",
    iconColor: "#fff",
    borderRadius: 5,
    fontSize: 14,
    fileColorTint: "rgba(255, 255, 255, 0.4)",
    folderBackColorTint: "rgba(255, 255, 255, 0.1)",
    folderFrontColorTint: "rgba(255, 255, 255, 0.4)"
  },
  listFileEntry: {
    propertyFontSize: 14,
    iconFontSize: "1.1em",
    iconBorderRadius: 5,
    fontSize: 14
  }
};
const darkThemeOverride = {
  gridFileEntry: {
    fileColorTint: "rgba(50, 50, 50, 0.4)",
    folderBackColorTint: "rgba(50, 50, 50, 0.4)",
    folderFrontColorTint: "rgba(50, 50, 50, 0.15)"
  }
};
const mobileThemeOverride = {
  fontSizes: {
    rootPrimary: 13
  },
  margins: {
    rootLayoutMargin: 4
  },
  toolbar: {
    size: 28,
    lineHeight: "28px",
    fontSize: 13
  },
  gridFileEntry: {
    fontSize: 13
  },
  listFileEntry: {
    propertyFontSize: 12,
    iconFontSize: "1em",
    fontSize: 13
  }
};
const useIsMobileBreakpoint = () => {
  return useMediaQuery("(max-width:480px)");
};
const getStripeGradient = (colorOne, colorTwo) => `repeating-linear-gradient(45deg,${colorOne},${colorOne} 10px,${colorTwo} 0,${colorTwo} 20px)`;
const makeLocalChonkyStyles = (styles) => createUseStyles(styles);
const makeGlobalChonkyStyles = (makeStyles) => {
  const selectorMapping = {};
  const makeGlobalStyles = (theme) => {
    const localStyles = makeStyles(theme);
    const globalStyles = {};
    const localSelectors = Object.keys(localStyles);
    localSelectors.map((localSelector) => {
      const globalSelector = `chonky-${localSelector}`;
      const jssSelector = `@global .${globalSelector}`;
      globalStyles[jssSelector] = localStyles[localSelector];
      selectorMapping[localSelector] = globalSelector;
    });
    return globalStyles;
  };
  const useStyles = createUseStyles(makeGlobalStyles);
  return (...args) => {
    const styles = useStyles(...args);
    const classes = {};
    Object.keys(selectorMapping).map((localSelector) => {
      classes[localSelector] = selectorMapping[localSelector];
    });
    return { ...classes, ...styles };
  };
};
const important = (value) => [value, "!important"];
export {
  darkThemeOverride,
  getStripeGradient,
  important,
  lightTheme,
  makeGlobalChonkyStyles,
  makeLocalChonkyStyles,
  mobileThemeOverride,
  useIsMobileBreakpoint
};
