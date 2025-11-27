import React__default from 'react';
import { ChonkyIconName } from '../../types/icons.types.js';
import { Nullable } from '../../types/generic.types.js';

/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

type FileEntryState = {
    childrenCount: Nullable<number>;
    color: string;
    icon: ChonkyIconName | string;
    thumbnailUrl: Nullable<string>;
    iconSpin: boolean;
    selected: boolean;
    focused: boolean;
};
interface FileEntryPreviewProps {
    className?: string;
    entryState: FileEntryState;
}
declare const GridEntryPreviewFolder: React__default.FC<FileEntryPreviewProps>;
declare const GridEntryPreviewFile: React__default.FC<FileEntryPreviewProps>;
declare const useCommonEntryStyles: any;

export { type FileEntryPreviewProps, type FileEntryState, GridEntryPreviewFile, GridEntryPreviewFolder, useCommonEntryStyles };
