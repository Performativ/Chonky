import { ChonkyIconName } from '../types/icons.types.cjs';
import { Nullable } from '../types/generic.types.cjs';

declare const useFileActionTrigger: (fileActionId: string) => () => void;
declare const useFileActionProps: (fileActionId: string) => {
    icon: Nullable<ChonkyIconName | string>;
    active: boolean;
    disabled: boolean;
};

export { useFileActionProps, useFileActionTrigger };
