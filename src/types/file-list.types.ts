import type { Nullable } from './generic.types';

import type { FileData } from './file.types';

export interface FileEntryProps {
    file: Nullable<FileData>;
    selected: boolean;
    focused: boolean;
}
