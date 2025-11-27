import { ChonkyIconName } from '../types/icons.types.js';
import { Nullable } from '../types/generic.types.js';

declare const useFileActionTrigger: (fileActionId: string) => () => void;
declare const useFileActionProps: (fileActionId: string) => {
    icon: Nullable<ChonkyIconName | string>;
    active: boolean;
    disabled: boolean;
};

export { useFileActionProps, useFileActionTrigger };
