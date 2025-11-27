import { FileIdTrueMap } from './file.types.js';
import './generic.types.js';
import './icons.types.js';

type FileSelection = FileIdTrueMap;
interface SelectionModifiers {
    selectFiles: (fileIds: string[], reset?: boolean) => void;
    toggleSelection: (fileId: string, exclusive?: boolean) => void;
    clearSelection: () => void;
}

export type { FileSelection, SelectionModifiers };
