import { Nullable } from './generic.types.cjs';

interface ContextMenuConfig {
    triggerFileId: Nullable<string>;
    mouseX: number;
    mouseY: number;
}

export type { ContextMenuConfig };
