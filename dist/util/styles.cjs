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
var styles_exports = {};
__export(styles_exports, {
  darkThemeOverride: () => darkThemeOverride,
  getStripeGradient: () => getStripeGradient,
  important: () => important,
  lightTheme: () => lightTheme,
  makeGlobalChonkyStyles: () => makeGlobalChonkyStyles,
  makeLocalChonkyStyles: () => makeLocalChonkyStyles,
  mobileThemeOverride: () => mobileThemeOverride,
  useIsMobileBreakpoint: () => useIsMobileBreakpoint
});
module.exports = __toCommonJS(styles_exports);
var import_useMediaQuery = __toESM(require("@mui/material/useMediaQuery"), 1);
var import_react_jss = require("react-jss");
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
  return (0, import_useMediaQuery.default)("(max-width:480px)");
};
const getStripeGradient = (colorOne, colorTwo) => `repeating-linear-gradient(45deg,${colorOne},${colorOne} 10px,${colorTwo} 0,${colorTwo} 20px)`;
const makeLocalChonkyStyles = (styles) => (0, import_react_jss.createUseStyles)(styles);
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
  const useStyles = (0, import_react_jss.createUseStyles)(makeGlobalStyles);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  darkThemeOverride,
  getStripeGradient,
  important,
  lightTheme,
  makeGlobalChonkyStyles,
  makeLocalChonkyStyles,
  mobileThemeOverride,
  useIsMobileBreakpoint
});
