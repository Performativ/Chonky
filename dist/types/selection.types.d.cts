import { FileIdTrueMap } from './file.types.cjs';
import './generic.types.cjs';
import './icons.types.cjs';

type FileSelection = FileIdTrueMap;
interface SelectionModifiers {
    selectFiles: (fileIds: string[], reset?: boolean) => void;
    toggleSelection: (fileId: string, exclusive?: boolean) => void;
    clearSelection: () => void;
}

export type { FileSelection, SelectionModifiers };
