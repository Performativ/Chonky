import { Nullable } from './generic.types.cjs';
import { FileData } from './file.types.cjs';
import './icons.types.cjs';

interface FileEntryProps {
    file: Nullable<FileData>;
    selected: boolean;
    focused: boolean;
}

export type { FileEntryProps };
