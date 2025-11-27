import React__default from 'react';
import { FileViewConfigGrid } from '../../types/file-view.types.js';

/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

interface FileListGridProps {
    width: number;
    height: number;
}
interface GridConfig {
    rowCount: number;
    columnCount: number;
    gutter: number;
    rowHeight: number;
    columnWidth: number;
}
declare const isMobileDevice: () => boolean;
declare const getGridConfig: (width: number, fileCount: number, viewConfig: FileViewConfigGrid, isMobileBreakpoint: boolean) => GridConfig;
declare const GridContainer: React__default.FC<FileListGridProps>;

export { type FileListGridProps, GridContainer, getGridConfig, isMobileDevice };
