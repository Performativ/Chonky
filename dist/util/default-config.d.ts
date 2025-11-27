import { FileBrowserProps } from '../types/file-browser.types.js';
import 'react';
import '../types/generic.types.js';
import '../action-definitions/index.js';
import '../types/action-payloads.types.js';
import '../types/file.types.js';
import '../types/icons.types.js';
import '../action-handler.types-mCLrTO7-.js';
import '../types/file-view.types.js';
import '@reduxjs/toolkit';
import '../types/action-menus.types.js';
import '../types/context-menu.types.js';
import '../types/options.types.js';
import '../types/selection.types.js';
import '../types/sort.types.js';
import '../types/thumbnails.types.js';
import './file-helper.js';
import '../action-definitions/option-ids.js';
import '../types/i18n.types.js';
import 'react-intl';

type ChonkyConfig = Pick<FileBrowserProps, 'fileActions' | 'onFileAction' | 'thumbnailGenerator' | 'doubleClickDelay' | 'disableSelection' | 'disableDefaultFileActions' | 'defaultSortActionId' | 'defaultFileViewActionId' | 'clearSelectionOnOutsideClick' | 'iconComponent' | 'darkMode' | 'i18n'>;
declare const defaultConfig: ChonkyConfig;
declare const setChonkyDefaults: (config: Partial<ChonkyConfig>) => void;

export { type ChonkyConfig, defaultConfig, setChonkyDefaults };
