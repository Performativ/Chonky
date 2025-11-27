import * as React from 'react';
import { Nullable, Undefinable } from '../types/generic.types.cjs';
import { b as FileAction } from '../action-handler.types-swQLT4E1.cjs';
import { FileData } from '../types/file.types.cjs';
import { ChonkyFormatters } from '../types/i18n.types.cjs';
import '../types/file-view.types.cjs';
import '../types/icons.types.cjs';
import '@reduxjs/toolkit';
import '../types/action-menus.types.cjs';
import '../types/context-menu.types.cjs';
import '../types/options.types.cjs';
import '../types/selection.types.cjs';
import '../types/sort.types.cjs';
import '../types/thumbnails.types.cjs';
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
