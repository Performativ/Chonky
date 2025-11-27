import { jsx } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from "react";
const ChonkyIconPlaceholder = () => {
  const title = "No icon component found. Please follow Chonky installation instructions to provide a pre-made icon component (or a custom icon).";
  return /* @__PURE__ */ jsx("span", { title, children: "\u26A0\uFE0F" });
};
export {
  ChonkyIconPlaceholder
};
