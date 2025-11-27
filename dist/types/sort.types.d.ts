import { Nullable } from './generic.types.js';
import { FileData } from './file.types.js';
import './icons.types.js';

type FileSortKeySelector = (file: Nullable<FileData>) => any;
declare enum SortOrder {
    ASC = "asc",
    DESC = "desc"
}

export { type FileSortKeySelector, SortOrder };
