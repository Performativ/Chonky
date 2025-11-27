import React__default, { UIEvent } from 'react';

interface FileListProps {
    onScroll?: (e: UIEvent<HTMLDivElement>) => void;
}
declare const FileList: React__default.FC<FileListProps>;

export { FileList, type FileListProps };
