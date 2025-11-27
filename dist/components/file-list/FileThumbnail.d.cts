import React__default from 'react';
import { Nullable } from '../../types/generic.types.cjs';

/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

interface FileThumbnailProps {
    className: string;
    thumbnailUrl: Nullable<string>;
}
declare const FileThumbnail: React__default.FC<FileThumbnailProps>;

export { FileThumbnail, type FileThumbnailProps };
