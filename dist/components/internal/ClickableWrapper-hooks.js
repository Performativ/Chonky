/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React, { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { selectDoubleClickDelay } from "../../redux/selectors";
const useClickHandler = (onSingleClick, onDoubleClick) => {
  const doubleClickDelay = useSelector(selectDoubleClickDelay);
  const counter = useRef({
    clickCount: 0,
    clickTimeout: null
  });
  return useCallback(
    (event) => {
      const mouseClickEvent = {
        altKey: event.altKey,
        ctrlKey: event.ctrlKey || event.metaKey,
        shiftKey: event.shiftKey
      };
      counter.current.clickCount++;
      if (counter.current.clickCount === 1) {
        if (onSingleClick) {
          event.preventDefault();
          onSingleClick(mouseClickEvent);
        }
        counter.current.clickCount = 1;
        counter.current.clickTimeout = setTimeout(
          () => counter.current.clickCount = 0,
          doubleClickDelay
        );
      } else if (counter.current.clickCount === 2) {
        if (onDoubleClick) {
          event.preventDefault();
          onDoubleClick(mouseClickEvent);
        }
        if (typeof counter.current.clickTimeout === "number") {
          clearTimeout(counter.current.clickTimeout);
          counter.current.clickTimeout = null;
          counter.current.clickCount = 0;
        }
      }
    },
    [doubleClickDelay, onSingleClick, onDoubleClick, counter]
  );
};
const useKeyDownHandler = (onKeyboardClick) => {
  return useCallback(
    (event) => {
      if (!onKeyboardClick) return;
      const keyboardClickEvent = {
        enterKey: event.nativeEvent.code === "Enter",
        spaceKey: event.nativeEvent.code === "Space",
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey
      };
      if (keyboardClickEvent.spaceKey || keyboardClickEvent.enterKey) {
        event.preventDefault();
        event.stopPropagation();
        onKeyboardClick(keyboardClickEvent);
      }
    },
    [onKeyboardClick]
  );
};
export {
  useClickHandler,
  useKeyDownHandler
};
