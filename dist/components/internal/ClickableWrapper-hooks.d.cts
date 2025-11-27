import React__default from 'react';
import { MouseClickEventHandler, KeyboardClickEventHandler } from './ClickableWrapper.cjs';
import { Nilable } from '../../types/generic.types.cjs';

/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

declare const useClickHandler: (onSingleClick: Nilable<MouseClickEventHandler>, onDoubleClick: Nilable<MouseClickEventHandler>) => (event: React__default.MouseEvent) => void;
declare const useKeyDownHandler: (onKeyboardClick?: KeyboardClickEventHandler) => (event: React__default.KeyboardEvent) => void;

export { useClickHandler, useKeyDownHandler };
