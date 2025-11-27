"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var file_map_exports = {};
__export(file_map_exports, {
  useFileActionHandler: () => useFileActionHandler,
  useFileMap: () => useFileMap,
  useFileMapMethods: () => useFileMapMethods,
  useFiles: () => useFiles,
  useFolderChain: () => useFolderChain
});
module.exports = __toCommonJS(file_map_exports);
var import_react = require("react");
var import_action_definitions = require("../action-definitions");
var import_file_helper = require("../util/file-helper");
const useFolderChain = (fileMap, currentFolderId) => {
  return (0, import_react.useMemo)(() => {
    const currentFolder = fileMap[currentFolderId];
    const folderChain = [currentFolder];
    let parentId = currentFolder.parentId;
    while (parentId) {
      const parentFile = fileMap[parentId];
      if (parentFile) {
        folderChain.unshift(parentFile);
        parentId = parentFile.parentId;
      } else {
        break;
      }
    }
    return folderChain;
  }, [currentFolderId, fileMap]);
};
const useFiles = (fileMap, currentFolderId) => {
  return (0, import_react.useMemo)(() => {
    const currentFolder = fileMap[currentFolderId];
    const childrenIds = currentFolder.childrenIds;
    const files = childrenIds.map((fileId) => fileMap[fileId]);
    return files;
  }, [currentFolderId, fileMap]);
};
const useFileMapMethods = (baseFileMap, initialFolderId) => {
  const [fileMap, setFileMap] = (0, import_react.useState)(baseFileMap);
  const [currentFolderId, setCurrentFolderId] = (0, import_react.useState)(initialFolderId);
  const resetFileMap = (0, import_react.useCallback)(() => {
    setFileMap(baseFileMap);
    setCurrentFolderId(initialFolderId);
  }, [baseFileMap, initialFolderId]);
  const moveFiles = (0, import_react.useCallback)(
    (files, source, destination) => setFileMap((currentFileMap) => {
      const newFileMap = { ...currentFileMap };
      const moveFileIds = new Set(files.map((f) => f.id));
      const newSourceChildrenIds = source.childrenIds.filter(
        (id) => !moveFileIds.has(id)
      );
      newFileMap[source.id] = {
        ...source,
        childrenIds: newSourceChildrenIds,
        childrenCount: newSourceChildrenIds.length
      };
      const newDestinationChildrenIds = [
        ...destination.childrenIds,
        ...files.map((f) => f.id)
      ];
      newFileMap[destination.id] = {
        ...destination,
        childrenIds: newDestinationChildrenIds,
        childrenCount: newDestinationChildrenIds.length
      };
      files.forEach((file) => {
        newFileMap[file.id] = {
          ...file,
          parentId: destination.id
        };
      });
      return newFileMap;
    }),
    []
  );
  const methods = (0, import_react.useMemo)(
    () => ({
      setFileMap,
      setCurrentFolderId,
      resetFileMap,
      moveFiles
    }),
    [setFileMap, setCurrentFolderId, resetFileMap, moveFiles]
  );
  return {
    fileMap,
    currentFolderId,
    methods
  };
};
const useFileActionHandler = (methods) => {
  return (0, import_react.useCallback)(
    (data) => {
      if (data.id === import_action_definitions.ChonkyActions.OpenFiles.id) {
        const { targetFile, files } = data.payload;
        const fileToOpen = targetFile ?? files[0];
        if (fileToOpen && import_file_helper.FileHelper.isDirectory(fileToOpen)) {
          methods.setCurrentFolderId(fileToOpen.id);
        }
      } else if (data.id === import_action_definitions.ChonkyActions.MoveFiles.id) {
        methods.moveFiles(
          data.payload.files,
          data.payload.source,
          data.payload.destination
        );
      }
    },
    [methods]
  );
};
const useFileMap = ({
  baseFileMap,
  initialFolderId
}) => {
  const { fileMap, currentFolderId, methods } = useFileMapMethods(
    baseFileMap,
    initialFolderId
  );
  const folderChain = useFolderChain(fileMap, currentFolderId);
  const files = useFiles(fileMap, currentFolderId);
  const fileActionHandler = useFileActionHandler(methods);
  const data = {
    fileMap,
    currentFolderId,
    folderChain,
    files
  };
  return { data, methods, fileActionHandler };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useFileActionHandler,
  useFileMap,
  useFileMapMethods,
  useFiles,
  useFolderChain
});
