import type { IntlConfig, IntlShape } from 'react-intl';
import type { Nullable } from './generic.types';

import type { FileData } from './file.types';

export interface I18nConfig extends Partial<IntlConfig> {
    formatters?: Partial<ChonkyFormatters>;
}

export interface ChonkyFormatters {
    formatFileModDate: (intl: IntlShape, file: Nullable<FileData>) => Nullable<string>;
    formatFileSize: (intl: IntlShape, file: Nullable<FileData>) => Nullable<string>;
}
