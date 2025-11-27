import * as React from 'react';
import { F as FileActionData, b as FileAction } from './action-handler.types-mCLrTO7-.js';
import { FileData, FileArray } from './types/file.types.js';

interface CustomFileData extends FileData {
    parentId?: string;
    childrenIds?: string[];
}
interface CustomFileMap<FT extends CustomFileData> {
    [fileId: string]: FT;
}
interface FileMapParams<FT extends CustomFileData> {
    baseFileMap: CustomFileMap<FT>;
    initialFolderId: string;
}
declare const useFolderChain: <FT extends CustomFileData>(fileMap: CustomFileMap<FT>, currentFolderId: string) => FileArray<FT>;
declare const useFiles: <FT extends CustomFileData>(fileMap: CustomFileMap<FT>, currentFolderId: string) => FileArray<FT>;
declare const useFileMapMethods: <FT extends CustomFileData>(baseFileMap: CustomFileMap<FT>, initialFolderId: string) => {
    fileMap: CustomFileMap<FT>;
    currentFolderId: string;
    methods: {
        setFileMap: React.Dispatch<React.SetStateAction<CustomFileMap<FT>>>;
        setCurrentFolderId: React.Dispatch<React.SetStateAction<string>>;
        resetFileMap: () => void;
        moveFiles: (files: FT[], source: FT, destination: FT) => void;
    };
};
type FileMethods = ReturnType<typeof useFileMapMethods>['methods'];
declare const useFileActionHandler: (methods: FileMethods) => (data: FileActionData<FileAction>) => void;
declare const useFileMap: <FT extends CustomFileData = CustomFileData>({ baseFileMap, initialFolderId, }: FileMapParams<FT>) => {
    data: {
        fileMap: CustomFileMap<FT>;
        currentFolderId: string;
        folderChain: FileArray<FT>;
        files: FileArray<FT>;
    };
    methods: {
        setFileMap: React.Dispatch<React.SetStateAction<CustomFileMap<FT>>>;
        setCurrentFolderId: React.Dispatch<React.SetStateAction<string>>;
        resetFileMap: () => void;
        moveFiles: (files: FT[], source: FT, destination: FT) => void;
    };
    fileActionHandler: (data: FileActionData<FileAction>) => void;
};

type fileMap_CustomFileData = CustomFileData;
type fileMap_CustomFileMap<FT extends CustomFileData> = CustomFileMap<FT>;
type fileMap_FileMapParams<FT extends CustomFileData> = FileMapParams<FT>;
type fileMap_FileMethods = FileMethods;
declare const fileMap_useFileActionHandler: typeof useFileActionHandler;
declare const fileMap_useFileMap: typeof useFileMap;
declare const fileMap_useFileMapMethods: typeof useFileMapMethods;
declare const fileMap_useFiles: typeof useFiles;
declare const fileMap_useFolderChain: typeof useFolderChain;
declare namespace fileMap {
  export { type fileMap_CustomFileData as CustomFileData, type fileMap_CustomFileMap as CustomFileMap, type fileMap_FileMapParams as FileMapParams, type fileMap_FileMethods as FileMethods, fileMap_useFileActionHandler as useFileActionHandler, fileMap_useFileMap as useFileMap, fileMap_useFileMapMethods as useFileMapMethods, fileMap_useFiles as useFiles, fileMap_useFolderChain as useFolderChain };
}

export { type CustomFileData as C, type FileMapParams as F, type CustomFileMap as a, useFiles as b, useFileMapMethods as c, type FileMethods as d, useFileActionHandler as e, fileMap as f, useFileMap as g, useFolderChain as u };
