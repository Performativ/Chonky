import type { Nilable } from 'tsdef';

import type { FileData } from './file.types';

export type ThumbnailGenerator = (
    file: FileData
) => Nilable<string> | Promise<Nilable<string>>;
