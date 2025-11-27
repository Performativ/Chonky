import React__default from 'react';
import { FileViewMode } from '../../types/file-view.types.cjs';
import { Nullable } from '../../types/generic.types.cjs';

interface SmartFileEntryProps {
    fileId: Nullable<string>;
    displayIndex: number;
    fileViewMode: FileViewMode;
}
declare const SmartFileEntry: React__default.FC<SmartFileEntryProps>;

export { SmartFileEntry, type SmartFileEntryProps };
