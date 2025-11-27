import { jsx, jsxs } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from "react";
import { FileList } from "../file-list/FileList";
import { FileBrowser } from "./FileBrowser";
import { FileContextMenu } from "./FileContextMenu";
import { FileNavbar } from "./FileNavbar";
import { FileToolbar } from "./FileToolbar";
const FullFileBrowser = React.memo(
  React.forwardRef((props, ref) => {
    const { onScroll } = props;
    return /* @__PURE__ */ jsxs(FileBrowser, { ref, ...props, children: [
      /* @__PURE__ */ jsx(FileNavbar, {}),
      /* @__PURE__ */ jsx(FileToolbar, {}),
      /* @__PURE__ */ jsx(FileList, { onScroll }),
      /* @__PURE__ */ jsx(FileContextMenu, {})
    ] });
  })
);
FullFileBrowser.displayName = "FullFileBrowser";
export {
  FullFileBrowser
};
