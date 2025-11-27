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
var TextPlaceholder_exports = {};
__export(TextPlaceholder_exports, {
  TextPlaceholder: () => TextPlaceholder
});
module.exports = __toCommonJS(TextPlaceholder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
var import_styles = require("../../util/styles");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
const getRandomInt = (min, max) => {
  return min + Math.floor(Math.random() * Math.floor(max - min));
};
const TextPlaceholder = import_react.default.memo((props) => {
  const { minLength, maxLength } = props;
  const placeholderLength = getRandomInt(minLength, maxLength);
  const whitespace = "&nbsp;".repeat(placeholderLength);
  const classes = useStyles();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      className: classes.textPlaceholder,
      dangerouslySetInnerHTML: { __html: whitespace }
    }
  );
});
const useStyles = (0, import_styles.makeLocalChonkyStyles)(() => ({
  "@keyframes loading-placeholder": {
    "0%": { opacity: 0.2 },
    "50%": { opacity: 0.4 },
    "100%": { opacity: 0.2 }
  },
  textPlaceholder: {
    animationName: "$loading-placeholder",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    animationDuration: "1.5s",
    backgroundColor: "#ccc",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRadius: 4,
    maxWidth: "40%",
    minWidth: 20
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TextPlaceholder
});
