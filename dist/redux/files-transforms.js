import { Logger } from "../util/logger";
const sanitizeInputArray = (mode, rawArray) => {
  const sanitizedFiles = [];
  const errorMessages = [];
  if ((mode === "folderChain" || mode === "fileActions") && !rawArray) {
  } else if (!Array.isArray(rawArray)) {
    errorMessages.push(
      `Expected "${mode}" prop to be an array, got "${typeof rawArray}" instead.`
    );
  } else {
    let nonObjectFileCount = 0;
    let missingFieldFileCount = 0;
    const seenIds = /* @__PURE__ */ new Set();
    const duplicateIds = /* @__PURE__ */ new Set();
    for (let i = 0; i < rawArray.length; ++i) {
      const item = rawArray[i];
      if (!item) {
        if (mode === "fileActions") nonObjectFileCount++;
        else sanitizedFiles.push(null);
      } else if (typeof item !== "object") {
        nonObjectFileCount++;
      } else {
        if (!item.id || mode !== "fileActions" && !item.name) {
          missingFieldFileCount++;
        } else if (seenIds.has(item.id)) {
          duplicateIds.add(item.id);
        } else {
          seenIds.add(item.id);
          sanitizedFiles.push(item);
        }
      }
    }
    if (nonObjectFileCount) {
      errorMessages.push(
        `Detected ${nonObjectFileCount} file(s) of invalid type. Remember that "files" array should contain either objects or nulls.`
      );
    }
    if (missingFieldFileCount) {
      errorMessages.push(
        `Detected ${missingFieldFileCount} file(s) that are missing the required fields. Remember that file object should define an "id" and a "name".`
      );
    }
    if (duplicateIds.size > 0) {
      const repeatedIdsString = '"' + Array.from(duplicateIds).join('", "') + '"';
      errorMessages.push(
        `Detected ${duplicateIds.size} file IDs that are used multiple times. Remember that each file should have a unique IDs. The following IDs were seen multiple times: ${repeatedIdsString}`
      );
    }
  }
  if (errorMessages.length > 0) {
    const errorMessageString = "\n- " + errorMessages.join("\n- ");
    let arrayString;
    let itemString;
    if (mode === "folderChain") {
      arrayString = "folder chain";
      itemString = "files";
    } else if (mode === "fileActions") {
      arrayString = "file actions";
      itemString = "file actions";
    } else {
      arrayString = "files";
      itemString = "files";
    }
    Logger.error(
      `Errors were detected when sanitizing the ${arrayString} array. Offending ${itemString} were removed from the array. Summary of validation errors: ${errorMessageString}`
    );
  }
  return {
    sanitizedArray: sanitizedFiles,
    errorMessages
  };
};
export {
  sanitizeInputArray
};
