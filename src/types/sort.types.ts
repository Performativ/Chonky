import type { Nullable } from './generic.types';

import type { FileData } from './file.types';

export type FileSortKeySelector = (file: Nullable<FileData>) => any;

export enum SortOrder {
    ASC = 'asc',
    DESC = 'desc',
}
