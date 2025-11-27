import { Theme } from '@mui/material/styles';
import { DeepPartial } from '../types/generic.types.js';

declare const lightTheme: {
    colors: {
        debugRed: string;
        debugBlue: string;
        debugGreen: string;
        debugPurple: string;
        debugYellow: string;
        textActive: string;
    };
    fontSizes: {
        rootPrimary: number;
    };
    margins: {
        rootLayoutMargin: number;
    };
    toolbar: {
        size: number;
        lineHeight: string;
        fontSize: number;
        buttonRadius: number;
    };
    dnd: {
        canDropColor: string;
        cannotDropColor: string;
        canDropMask: string;
        cannotDropMask: string;
        fileListCanDropMaskOne: string;
        fileListCanDropMaskTwo: string;
        fileListCannotDropMaskOne: string;
        fileListCannotDropMaskTwo: string;
    };
    dragLayer: {
        border: string;
        padding: string;
        borderRadius: number;
    };
    fileList: {
        desktopGridGutter: number;
        mobileGridGutter: number;
    };
    gridFileEntry: {
        childrenCountSize: string;
        iconColorFocused: string;
        iconSize: string;
        iconColor: string;
        borderRadius: number;
        fontSize: number;
        fileColorTint: string;
        folderBackColorTint: string;
        folderFrontColorTint: string;
    };
    listFileEntry: {
        propertyFontSize: number;
        iconFontSize: string;
        iconBorderRadius: number;
        fontSize: number;
    };
};
type ChonkyTheme = typeof lightTheme;
declare const darkThemeOverride: DeepPartial<ChonkyTheme>;
declare const mobileThemeOverride: DeepPartial<ChonkyTheme>;
declare const useIsMobileBreakpoint: () => boolean;
declare const getStripeGradient: (colorOne: string, colorTwo: string) => string;
declare const makeLocalChonkyStyles: <C extends string = string>(styles: (theme: ChonkyTheme & Theme) => any) => any;
declare const makeGlobalChonkyStyles: <C extends string = string>(makeStyles: (theme: ChonkyTheme & Theme) => any) => (...args: any[]) => any;
declare const important: <T>(value: T) => (string | T)[];

export { type ChonkyTheme, darkThemeOverride, getStripeGradient, important, lightTheme, makeGlobalChonkyStyles, makeLocalChonkyStyles, mobileThemeOverride, useIsMobileBreakpoint };
