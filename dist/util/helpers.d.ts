import { WritableProps, MaybePromisedValue, Nullable } from '../types/generic.types.js';
import { b as FileAction, d as FileActionEffect } from '../action-handler.types-mCLrTO7-.js';
import '../types/file.types.js';
import '../types/icons.types.js';
import '../types/file-view.types.js';
import '@reduxjs/toolkit';
import '../types/action-menus.types.js';
import '../types/context-menu.types.js';
import '../types/options.types.js';
import '../types/selection.types.js';
import '../types/sort.types.js';
import '../types/thumbnails.types.js';

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
