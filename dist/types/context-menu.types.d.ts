import { Nullable } from './generic.types.js';

interface ContextMenuConfig {
    triggerFileId: Nullable<string>;
    mouseX: number;
    mouseY: number;
}

export type { ContextMenuConfig };
