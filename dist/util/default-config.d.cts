import { FileBrowserProps } from '../types/file-browser.types.cjs';
import 'react';
import '../types/generic.types.cjs';
import '../action-definitions/index.cjs';
import '../types/action-payloads.types.cjs';
import '../types/file.types.cjs';
import '../types/icons.types.cjs';
import '../action-handler.types-swQLT4E1.cjs';
import '../types/file-view.types.cjs';
import '@reduxjs/toolkit';
import '../types/action-menus.types.cjs';
import '../types/context-menu.types.cjs';
import '../types/options.types.cjs';
import '../types/selection.types.cjs';
import '../types/sort.types.cjs';
import '../types/thumbnails.types.cjs';
import './file-helper.cjs';
import '../action-definitions/option-ids.cjs';
import '../types/i18n.types.cjs';
import 'react-intl';

type ChonkyConfig = Pick<FileBrowserProps, 'fileActions' | 'onFileAction' | 'thumbnailGenerator' | 'doubleClickDelay' | 'disableSelection' | 'disableDefaultFileActions' | 'defaultSortActionId' | 'defaultFileViewActionId' | 'clearSelectionOnOutsideClick' | 'iconComponent' | 'darkMode' | 'i18n'>;
declare const defaultConfig: ChonkyConfig;
declare const setChonkyDefaults: (config: Partial<ChonkyConfig>) => void;

export { type ChonkyConfig, defaultConfig, setChonkyDefaults };
