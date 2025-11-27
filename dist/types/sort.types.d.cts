import { Nullable } from './generic.types.cjs';
import { FileData } from './file.types.cjs';
import './icons.types.cjs';

type FileSortKeySelector = (file: Nullable<FileData>) => any;
declare enum SortOrder {
    ASC = "asc",
    DESC = "desc"
}

export { type FileSortKeySelector, SortOrder };
