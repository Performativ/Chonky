import { jsx, jsxs } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from "react";
import { makeLocalChonkyStyles } from "../../util/styles";
import { useFileNameComponent, useModifierIconComponents } from "./FileEntry-hooks";
const FileEntryName = ({ file, className }) => {
  const modifierIconComponents = useModifierIconComponents(file);
  const fileNameComponent = useFileNameComponent(file);
  const classes = useStyles();
  return /* @__PURE__ */ jsxs("span", { className, title: file ? file.name : void 0, children: [
    modifierIconComponents.length > 0 && /* @__PURE__ */ jsx("span", { className: classes.modifierIcons, children: modifierIconComponents }),
    fileNameComponent
  ] });
};
FileEntryName.displayName = "FileEntryName";
const useStyles = makeLocalChonkyStyles((theme) => ({
  modifierIcons: {
    color: theme.palette.text.secondary,
    position: "relative",
    fontSize: "0.775em",
    paddingRight: 5
  }
}));
export {
  FileEntryName
};
