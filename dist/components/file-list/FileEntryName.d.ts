import React__default from 'react';
import { FileData } from '../../types/file.types.js';
import { Nullable } from '../../types/generic.types.js';
import '../../types/icons.types.js';

/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

interface FileEntryNameProps {
    file: Nullable<FileData>;
    className?: string;
}
declare const FileEntryName: React__default.FC<FileEntryNameProps>;

export { FileEntryName, type FileEntryNameProps };
