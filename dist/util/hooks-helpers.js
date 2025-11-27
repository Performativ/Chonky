import React, { useEffect, useRef, useState } from "react";
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return [debouncedValue, setDebouncedValue];
};
const UNINITIALIZED_SENTINEL = {};
const useStaticValue = (factory) => {
  const valueRef = useRef(UNINITIALIZED_SENTINEL);
  if (valueRef.current === UNINITIALIZED_SENTINEL) valueRef.current = factory();
  return valueRef.current;
};
const useInstanceVariable = (value) => {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [ref, value]);
  return ref;
};
export {
  useDebounce,
  useInstanceVariable,
  useStaticValue
};
