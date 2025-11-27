import { WritableProps, MaybePromisedValue, Nullable } from '../types/generic.types.cjs';
import { b as FileAction, d as FileActionEffect } from '../action-handler.types-swQLT4E1.cjs';
import '../types/file.types.cjs';
import '../types/icons.types.cjs';
import '../types/file-view.types.cjs';
import '@reduxjs/toolkit';
import '../types/action-menus.types.cjs';
import '../types/context-menu.types.cjs';
import '../types/options.types.cjs';
import '../types/selection.types.cjs';
import '../types/sort.types.cjs';
import '../types/thumbnails.types.cjs';

declare const NOOP_FUNCTION: (...args: any[]) => void;
declare const isPromise: <T>(value: MaybePromisedValue<T> | any) => value is Promise<T>;
declare const defineFileAction: <Action extends FileAction>(action: Action, effect?: FileActionEffect<FileAction>) => WritableProps<Action>;
/**
 * Recursively check the current element and the parent elements, going bottom-up.
 * Returns the first element to match the predicate, otherwise returns null if such
 * element is not found.
 */
declare const findElementAmongAncestors: (maybeElement: HTMLElement | any, predicate: (maybeElement: HTMLElement | any) => boolean) => Nullable<HTMLElement>;
declare const elementIsInsideButton: (buttonCandidate: HTMLElement | any) => boolean;
declare const getValueOrFallback: <T extends any>(value: T | undefined, fallback: T, desiredType?: "boolean" | "string" | "number") => NonNullable<T>;

export { NOOP_FUNCTION, defineFileAction, elementIsInsideButton, findElementAmongAncestors, getValueOrFallback, isPromise };
