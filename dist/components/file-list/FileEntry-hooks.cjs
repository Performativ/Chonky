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
var FileEntry_hooks_exports = {};
__export(FileEntry_hooks_exports, {
  useFileClickHandlers: () => useFileClickHandlers,
  useFileEntryHtmlProps: () => useFileEntryHtmlProps,
  useFileEntryState: () => useFileEntryState,
  useFileNameComponent: () => useFileNameComponent,
  useModifierIconComponents: () => useModifierIconComponents,
  useThumbnailUrl: () => useThumbnailUrl
});
module.exports = __toCommonJS(FileEntry_hooks_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_react_redux = require("react-redux");
var import_action_definitions = require("../../action-definitions/index");
var import_helpers = require("../../redux/helpers");
var import_selectors = require("../../redux/selectors");
var import_dispatchers = require("../../redux/thunks/dispatchers.thunks");
var import_icons = require("../../types/icons.types");
var import_file_helper = require("../../util/file-helper");
var import_icon_helper = require("../../util/icon-helper");
var import_logger = require("../../util/logger");
var import_TextPlaceholder = require("../external/TextPlaceholder");
const useFileEntryHtmlProps = (file) => {
  return (0, import_react.useMemo)(() => {
    const dataProps = {
      "data-test-id": "file-entry",
      "data-chonky-file-id": file ? file.id : void 0
    };
    return {
      role: "listitem",
      ...dataProps
    };
  }, [file]);
};
const useFileEntryState = (file, selected, focused) => {
  const iconData = (0, import_icon_helper.useIconData)(file);
  const { thumbnailUrl, thumbnailLoading } = useThumbnailUrl(file);
  return (0, import_react.useMemo)(() => {
    const fileColor = thumbnailUrl ? import_icon_helper.ColorsDark[iconData.colorCode] : import_icon_helper.ColorsLight[iconData.colorCode];
    const iconSpin = thumbnailLoading || !file;
    const icon = thumbnailLoading ? import_icons.ChonkyIconName.loading : iconData.icon;
    return {
      childrenCount: import_file_helper.FileHelper.getChildrenCount(file),
      icon: file && file.icon !== void 0 ? file.icon : icon,
      iconSpin,
      thumbnailUrl,
      color: file && file.color !== void 0 ? file.color : fileColor,
      selected,
      focused: !!focused
    };
  }, [file, focused, iconData, selected, thumbnailLoading, thumbnailUrl]);
};
const useModifierIconComponents = (file) => {
  const modifierIcons = (0, import_react.useMemo)(() => {
    const modifierIcons2 = [];
    if (import_file_helper.FileHelper.isHidden(file)) modifierIcons2.push(import_icons.ChonkyIconName.hidden);
    if (import_file_helper.FileHelper.isSymlink(file)) modifierIcons2.push(import_icons.ChonkyIconName.symlink);
    if (import_file_helper.FileHelper.isEncrypted(file)) modifierIcons2.push(import_icons.ChonkyIconName.lock);
    return modifierIcons2;
  }, [file]);
  const ChonkyIcon = (0, import_react.useContext)(import_icon_helper.ChonkyIconContext);
  const modifierIconComponents = (0, import_react.useMemo)(
    () => modifierIcons.map((icon, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChonkyIcon, { icon }, `file-modifier-${index}`)),
    // For some reason ESLint marks `ChonkyIcon` as an unnecessary dependency,
    // but we expect it can change at runtime so we disable the check.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ChonkyIcon, modifierIcons]
  );
  return modifierIconComponents;
};
const _extname = (fileName) => {
  const parts = fileName.split(".");
  if (parts.length) {
    return `.${parts[parts.length - 1]}`;
  }
  return "";
};
const useFileNameComponent = (file) => {
  return (0, import_react.useMemo)(() => {
    if (!file) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_TextPlaceholder.TextPlaceholder, { minLength: 15, maxLength: 20 });
    let name;
    let extension = null;
    const isDir = import_file_helper.FileHelper.isDirectory(file);
    if (isDir) {
      name = file.name;
    } else {
      extension = file.ext ?? _extname(file.name);
      name = file.name.substr(0, file.name.length - extension.length);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      name,
      extension && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "chonky-file-entry-description-title-extension", children: extension })
    ] });
  }, [file]);
};
const useThumbnailUrl = (file) => {
  const thumbnailGenerator = (0, import_react_redux.useSelector)(import_selectors.selectThumbnailGenerator);
  const [thumbnailUrl, setThumbnailUrl] = (0, import_react.useState)(null);
  const [thumbnailLoading, setThumbnailLoading] = (0, import_react.useState)(false);
  const loadingAttempts = (0, import_react.useRef)(0);
  (0, import_react.useEffect)(() => {
    let loadingCancelled = false;
    if (file) {
      if (thumbnailGenerator) {
        if (loadingAttempts.current === 0) {
          setThumbnailLoading(true);
        }
        loadingAttempts.current++;
        Promise.resolve().then(() => thumbnailGenerator(file)).then((thumbnailUrl2) => {
          if (loadingCancelled) return;
          setThumbnailLoading(false);
          if (thumbnailUrl2 && typeof thumbnailUrl2 === "string") {
            setThumbnailUrl(thumbnailUrl2);
          }
        }).catch((error) => {
          if (!loadingCancelled) setThumbnailLoading(false);
          import_logger.Logger.error(
            `User-defined "thumbnailGenerator" handler threw an error: ${error.message}`
          );
        });
      } else if (file.thumbnailUrl) {
        setThumbnailUrl(file.thumbnailUrl);
      }
    }
    return () => {
      loadingCancelled = true;
    };
  }, [file, setThumbnailUrl, setThumbnailLoading, thumbnailGenerator]);
  return { thumbnailUrl, thumbnailLoading };
};
const useFileClickHandlers = (file, displayIndex) => {
  const dispatch = (0, import_helpers.useThunkDispatch)();
  const onMouseClick = (0, import_react.useCallback)(
    (event, clickType) => {
      if (!file) return;
      dispatch(
        (0, import_dispatchers.thunkRequestFileAction)(import_action_definitions.ChonkyActions.MouseClickFile, {
          clickType,
          file,
          fileDisplayIndex: displayIndex,
          altKey: event.altKey,
          ctrlKey: event.ctrlKey,
          shiftKey: event.shiftKey
        })
      );
    },
    [dispatch, file, displayIndex]
  );
  const onKeyboardClick = (0, import_react.useCallback)(
    (event) => {
      if (!file) return;
      dispatch(
        (0, import_dispatchers.thunkRequestFileAction)(import_action_definitions.ChonkyActions.KeyboardClickFile, {
          file,
          fileDisplayIndex: displayIndex,
          enterKey: event.enterKey,
          spaceKey: event.spaceKey,
          altKey: event.altKey,
          ctrlKey: event.ctrlKey,
          shiftKey: event.shiftKey
        })
      );
    },
    [dispatch, file, displayIndex]
  );
  const onSingleClick = (0, import_react.useCallback)(
    (event) => onMouseClick(event, "single"),
    [onMouseClick]
  );
  const onDoubleClick = (0, import_react.useCallback)(
    (event) => onMouseClick(event, "double"),
    [onMouseClick]
  );
  return {
    onSingleClick,
    onDoubleClick,
    onKeyboardClick
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useFileClickHandlers,
  useFileEntryHtmlProps,
  useFileEntryState,
  useFileNameComponent,
  useModifierIconComponents,
  useThumbnailUrl
});
