import React__default from 'react';
import { FileViewMode } from '../../types/file-view.types.js';
import { Nullable } from '../../types/generic.types.js';

interface SmartFileEntryProps {
    fileId: Nullable<string>;
    displayIndex: number;
    fileViewMode: FileViewMode;
}
declare const SmartFileEntry: React__default.FC<SmartFileEntryProps>;

export { SmartFileEntry, type SmartFileEntryProps };
