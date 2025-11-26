import type { Nullable } from './generic.types';

export interface ContextMenuConfig {
    triggerFileId: Nullable<string>;
    mouseX: number;
    mouseY: number;
}
