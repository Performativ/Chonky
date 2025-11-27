import { Nilable } from './generic.types.js';
import { FileData } from './file.types.js';
import './icons.types.js';

type ThumbnailGenerator = (file: FileData) => Nilable<string> | Promise<Nilable<string>>;

export type { ThumbnailGenerator };
