import type { Nullable } from 'tsdef';

import type { FileData } from './file.types';

export interface FileEntryProps {
    file: Nullable<FileData>;
    selected: boolean;
    focused: boolean;
}
