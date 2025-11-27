import { jsx } from "react/jsx-runtime";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React, { useCallback } from "react";
import { useClickHandler, useKeyDownHandler } from "./ClickableWrapper-hooks";
const ClickableWrapper = (props) => {
  const {
    children,
    wrapperTag: WrapperTag,
    passthroughProps,
    onSingleClick,
    onDoubleClick,
    onKeyboardClick,
    setFocused
  } = props;
  const handleClick = useClickHandler(onSingleClick, onDoubleClick);
  const handleKeyDown = useKeyDownHandler(onKeyboardClick);
  const compProps = {
    onFocus: useCallback(() => setFocused && setFocused(true), [setFocused]),
    onBlur: useCallback(() => setFocused && setFocused(false), [setFocused])
  };
  if (onSingleClick || onDoubleClick || onKeyboardClick) {
    compProps.onClick = handleClick;
    compProps.onKeyDown = handleKeyDown;
    compProps.tabIndex = 0;
  }
  const mergedProps = { ...compProps, ...passthroughProps };
  return /* @__PURE__ */ jsx(WrapperTag, { ...mergedProps, children });
};
export {
  ClickableWrapper
};
