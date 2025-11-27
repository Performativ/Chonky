import React__default from 'react';
import { FolderChainItem } from './FileNavbar-hooks.cjs';
import '../../types/file.types.cjs';
import '../../types/generic.types.cjs';
import '../../types/icons.types.cjs';

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
