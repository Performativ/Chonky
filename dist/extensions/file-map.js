import { useCallback, useMemo, useState } from "react";
import { ChonkyActions } from "../action-definitions";
import { FileHelper } from "../util/file-helper";
const useFolderChain = (fileMap, currentFolderId) => {
  return useMemo(() => {
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
  return useMemo(() => {
    const currentFolder = fileMap[currentFolderId];
    const childrenIds = currentFolder.childrenIds;
    const files = childrenIds.map((fileId) => fileMap[fileId]);
    return files;
  }, [currentFolderId, fileMap]);
};
const useFileMapMethods = (baseFileMap, initialFolderId) => {
  const [fileMap, setFileMap] = useState(baseFileMap);
  const [currentFolderId, setCurrentFolderId] = useState(initialFolderId);
  const resetFileMap = useCallback(() => {
    setFileMap(baseFileMap);
    setCurrentFolderId(initialFolderId);
  }, [baseFileMap, initialFolderId]);
  const moveFiles = useCallback(
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
  const methods = useMemo(
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
  return useCallback(
    (data) => {
      if (data.id === ChonkyActions.OpenFiles.id) {
        const { targetFile, files } = data.payload;
        const fileToOpen = targetFile ?? files[0];
        if (fileToOpen && FileHelper.isDirectory(fileToOpen)) {
          methods.setCurrentFolderId(fileToOpen.id);
        }
      } else if (data.id === ChonkyActions.MoveFiles.id) {
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
export {
  useFileActionHandler,
  useFileMap,
  useFileMapMethods,
  useFiles,
  useFolderChain
};
