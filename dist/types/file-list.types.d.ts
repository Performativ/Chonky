import { Nullable } from './generic.types.js';
import { FileData } from './file.types.js';
import './icons.types.js';

interface FileEntryProps {
    file: Nullable<FileData>;
    selected: boolean;
    focused: boolean;
}

export type { FileEntryProps };
