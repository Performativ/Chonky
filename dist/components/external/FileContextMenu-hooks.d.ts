import React__default from 'react';
import { Nullable } from '../../types/generic.types.js';

declare const findClosestChonkyFileId: (element: HTMLElement | any) => Nullable<string>;
declare const useContextMenuTrigger: () => (event: React__default.MouseEvent<HTMLDivElement>) => void;
declare const useContextMenuDismisser: () => () => {
    payload: undefined;
    type: "root/hideContextMenu";
};

export { findClosestChonkyFileId, useContextMenuDismisser, useContextMenuTrigger };
