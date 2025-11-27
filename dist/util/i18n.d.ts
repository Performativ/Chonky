import * as React from 'react';
import { Nullable, Undefinable } from '../types/generic.types.js';
import { b as FileAction } from '../action-handler.types-mCLrTO7-.js';
import { FileData } from '../types/file.types.js';
import { ChonkyFormatters } from '../types/i18n.types.js';
import '../types/file-view.types.js';
import '../types/icons.types.js';
import '@reduxjs/toolkit';
import '../types/action-menus.types.js';
import '../types/context-menu.types.js';
import '../types/options.types.js';
import '../types/selection.types.js';
import '../types/sort.types.js';
import '../types/thumbnails.types.js';
import 'react-intl';

declare const I18nNamespace: {
    readonly Toolbar: "toolbar";
    readonly FileList: "fileList";
    readonly FileEntry: "fileEntry";
    readonly FileContextMenu: "contextMenu";
    readonly FileActions: "actions";
    readonly FileActionGroups: "actionGroups";
};
type I18nNamespace = (typeof I18nNamespace)[keyof typeof I18nNamespace];
declare const getI18nId: (namespace: I18nNamespace, stringId: string) => string;
declare const getActionI18nId: (actionId: string, stringId: string) => string;
declare const useLocalizedFileActionGroup: (groupName: string) => string;
declare const useLocalizedFileActionStrings: (action: Nullable<FileAction>) => {
    buttonName: string;
    buttonTooltip: Undefinable<string>;
};
declare const useLocalizedFileEntryStrings: (file: Nullable<FileData>) => {
    fileModDateString: Nullable<string>;
    fileSizeString: Nullable<string>;
};
declare const defaultFormatters: ChonkyFormatters;
declare const ChonkyFormattersContext: React.Context<ChonkyFormatters>;

export { ChonkyFormattersContext, I18nNamespace, defaultFormatters, getActionI18nId, getI18nId, useLocalizedFileActionGroup, useLocalizedFileActionStrings, useLocalizedFileEntryStrings };
