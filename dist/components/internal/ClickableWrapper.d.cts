import React__default from 'react';

/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

interface MouseClickEvent {
    altKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
}
type MouseClickEventHandler = (event: MouseClickEvent) => void;
interface KeyboardClickEvent {
    enterKey: boolean;
    spaceKey: boolean;
    altKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
}
type KeyboardClickEventHandler = (event: KeyboardClickEvent) => void;
interface ClickableWrapperProps {
    wrapperTag: any;
    passthroughProps?: any;
    children?: React__default.ReactNode;
    onSingleClick?: MouseClickEventHandler;
    onDoubleClick?: MouseClickEventHandler;
    onKeyboardClick?: KeyboardClickEventHandler;
    setFocused?: (focused: boolean) => void;
}
declare const ClickableWrapper: React__default.FC<ClickableWrapperProps>;

export { ClickableWrapper, type ClickableWrapperProps, type KeyboardClickEvent, type KeyboardClickEventHandler, type MouseClickEvent, type MouseClickEventHandler };
