import React__default from 'react';
import { FolderChainItem } from './FileNavbar-hooks.js';
import '../../types/file.types.js';
import '../../types/generic.types.js';
import '../../types/icons.types.js';

/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

interface FolderChainButtonProps {
    first: boolean;
    current: boolean;
    item: FolderChainItem;
}
declare const FolderChainButton: React__default.FC<FolderChainButtonProps>;

export { FolderChainButton, type FolderChainButtonProps };
