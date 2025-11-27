import React__default from 'react';

declare const useDebounce: <T>(value: T, delay: number) => [T, React__default.Dispatch<React__default.SetStateAction<T>>];
declare const useStaticValue: <T>(factory: () => T) => T;
declare const useInstanceVariable: <T>(value: T) => React__default.RefObject<T>;

export { useDebounce, useInstanceVariable, useStaticValue };
