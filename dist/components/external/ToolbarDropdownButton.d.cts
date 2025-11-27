import React__default from 'react';
import { ChonkyIconName } from '../../types/icons.types.cjs';
import { Nullable } from '../../types/generic.types.cjs';

/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

interface ToolbarDropdownButtonProps {
    text: string;
    active?: boolean;
    icon?: Nullable<ChonkyIconName | string>;
    onClick?: () => void;
    disabled?: boolean;
}
declare const ToolbarDropdownButton: React__default.ForwardRefExoticComponent<ToolbarDropdownButtonProps & React__default.RefAttributes<HTMLLIElement>>;
interface SmartToolbarDropdownButtonProps {
    fileActionId: string;
    onClickFollowUp?: () => void;
}
declare const SmartToolbarDropdownButton: React__default.ForwardRefExoticComponent<SmartToolbarDropdownButtonProps & React__default.RefAttributes<HTMLLIElement>>;

export { SmartToolbarDropdownButton, type SmartToolbarDropdownButtonProps, ToolbarDropdownButton, type ToolbarDropdownButtonProps };
