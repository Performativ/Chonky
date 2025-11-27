import React__default from 'react';
import { ChonkyIconName } from '../../types/icons.types.cjs';
import { Nullable } from '../../types/generic.types.cjs';

/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

interface ToolbarButtonProps {
    className?: string;
    text: string;
    tooltip?: string;
    active?: boolean;
    icon?: Nullable<ChonkyIconName | string>;
    iconOnly?: boolean;
    onClick?: (event: React__default.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    dropdown?: boolean;
}
declare const ToolbarButton: React__default.FC<ToolbarButtonProps>;
interface SmartToolbarButtonProps {
    fileActionId: string;
}
declare const SmartToolbarButton: React__default.FC<SmartToolbarButtonProps>;

export { SmartToolbarButton, type SmartToolbarButtonProps, ToolbarButton, type ToolbarButtonProps };
