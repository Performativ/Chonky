import React__default from 'react';
import { FileData } from '../types/file.types.cjs';
import { ChonkyIconProps, FileIconData } from '../types/icons.types.cjs';
import { Nullable } from '../types/generic.types.cjs';

/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2019
 * @license MIT
 */

declare const ChonkyIconContext: React__default.Context<React__default.ElementType<ChonkyIconProps>>;
declare const VideoExtensions: string[];
declare const ImageExtensions: string[];
declare const AudioExtensions: string[];
declare const ColorsLight: string[];
declare const ColorsDark: string[];
declare const useIconData: (file: Nullable<FileData>) => FileIconData;
declare const ChonkyIconFA: React__default.FC<ChonkyIconProps>;

export { AudioExtensions, ChonkyIconContext, ChonkyIconFA, ColorsDark, ColorsLight, ImageExtensions, VideoExtensions, useIconData };
