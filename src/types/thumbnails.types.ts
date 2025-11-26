import type { Nilable } from './generic.types';

import type { FileData } from './file.types';

export type ThumbnailGenerator = (
    file: FileData
) => Nilable<string> | Promise<Nilable<string>>;
