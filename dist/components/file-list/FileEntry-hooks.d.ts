import * as react_jsx_runtime from 'react/jsx-runtime';
import { HTMLProps } from 'react';
import { FileData } from '../../types/file.types.js';
import { MouseClickEvent, KeyboardClickEvent } from '../internal/ClickableWrapper.js';
import { FileEntryState } from './GridEntryPreview.js';
import { Nullable } from '../../types/generic.types.js';
import '../../types/icons.types.js';

declare const useFileEntryHtmlProps: (file: Nullable<FileData>) => HTMLProps<HTMLDivElement>;
declare const useFileEntryState: (file: Nullable<FileData>, selected: boolean, focused: boolean) => FileEntryState;
declare const useModifierIconComponents: (file: Nullable<FileData>) => react_jsx_runtime.JSX.Element[];
declare const useFileNameComponent: (file: Nullable<FileData>) => react_jsx_runtime.JSX.Element;
declare const useThumbnailUrl: (file: Nullable<FileData>) => {
    thumbnailUrl: Nullable<string>;
    thumbnailLoading: boolean;
};
declare const useFileClickHandlers: (file: Nullable<FileData>, displayIndex: number) => {
    onSingleClick: (event: MouseClickEvent) => void;
    onDoubleClick: (event: MouseClickEvent) => void;
    onKeyboardClick: (event: KeyboardClickEvent) => void;
};

export { useFileClickHandlers, useFileEntryHtmlProps, useFileEntryState, useFileNameComponent, useModifierIconComponents, useThumbnailUrl };
