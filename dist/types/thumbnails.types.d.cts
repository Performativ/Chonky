import { Nilable } from './generic.types.cjs';
import { FileData } from './file.types.cjs';
import './icons.types.cjs';

type ThumbnailGenerator = (file: FileData) => Nilable<string> | Promise<Nilable<string>>;

export type { ThumbnailGenerator };
