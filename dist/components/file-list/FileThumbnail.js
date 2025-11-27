import { jsx } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from "react";
import { makeGlobalChonkyStyles } from "../../util/styles";
import classNames from "classnames";
const FileThumbnail = (props) => {
  const { className, thumbnailUrl } = props;
  const thumbnailStyle = thumbnailUrl ? { backgroundImage: `url('${thumbnailUrl}')` } : {};
  const classes = useStyles();
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classNames([className, classes.fileThumbnail]),
      style: thumbnailStyle
    }
  );
};
FileThumbnail.displayName = "FileThumbnail";
const useStyles = makeGlobalChonkyStyles(() => ({
  fileThumbnail: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain"
  }
}));
export {
  FileThumbnail
};
