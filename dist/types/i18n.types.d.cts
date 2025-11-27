import { IntlConfig, IntlShape } from 'react-intl';
import { Nullable } from './generic.types.cjs';
import { FileData } from './file.types.cjs';
import './icons.types.cjs';

interface I18nConfig extends Partial<IntlConfig> {
    formatters?: Partial<ChonkyFormatters>;
}
interface ChonkyFormatters {
    formatFileModDate: (intl: IntlShape, file: Nullable<FileData>) => Nullable<string>;
    formatFileSize: (intl: IntlShape, file: Nullable<FileData>) => Nullable<string>;
}

export type { ChonkyFormatters, I18nConfig };
