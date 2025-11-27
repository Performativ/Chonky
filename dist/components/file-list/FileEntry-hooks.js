import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { useSelector } from "react-redux";
import { ChonkyActions } from "../../action-definitions/index";
import { useThunkDispatch } from "../../redux/helpers";
import { selectThumbnailGenerator } from "../../redux/selectors";
import { thunkRequestFileAction } from "../../redux/thunks/dispatchers.thunks";
import { ChonkyIconName } from "../../types/icons.types";
import { FileHelper } from "../../util/file-helper";
import {
  ChonkyIconContext,
  ColorsDark,
  ColorsLight,
  useIconData
} from "../../util/icon-helper";
import { Logger } from "../../util/logger";
import { TextPlaceholder } from "../external/TextPlaceholder";
const useFileEntryHtmlProps = (file) => {
  return useMemo(() => {
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
  const iconData = useIconData(file);
  const { thumbnailUrl, thumbnailLoading } = useThumbnailUrl(file);
  return useMemo(() => {
    const fileColor = thumbnailUrl ? ColorsDark[iconData.colorCode] : ColorsLight[iconData.colorCode];
    const iconSpin = thumbnailLoading || !file;
    const icon = thumbnailLoading ? ChonkyIconName.loading : iconData.icon;
    return {
      childrenCount: FileHelper.getChildrenCount(file),
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
  const modifierIcons = useMemo(() => {
    const modifierIcons2 = [];
    if (FileHelper.isHidden(file)) modifierIcons2.push(ChonkyIconName.hidden);
    if (FileHelper.isSymlink(file)) modifierIcons2.push(ChonkyIconName.symlink);
    if (FileHelper.isEncrypted(file)) modifierIcons2.push(ChonkyIconName.lock);
    return modifierIcons2;
  }, [file]);
  const ChonkyIcon = useContext(ChonkyIconContext);
  const modifierIconComponents = useMemo(
    () => modifierIcons.map((icon, index) => /* @__PURE__ */ jsx(ChonkyIcon, { icon }, `file-modifier-${index}`)),
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
  return useMemo(() => {
    if (!file) return /* @__PURE__ */ jsx(TextPlaceholder, { minLength: 15, maxLength: 20 });
    let name;
    let extension = null;
    const isDir = FileHelper.isDirectory(file);
    if (isDir) {
      name = file.name;
    } else {
      extension = file.ext ?? _extname(file.name);
      name = file.name.substr(0, file.name.length - extension.length);
    }
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      name,
      extension && /* @__PURE__ */ jsx("span", { className: "chonky-file-entry-description-title-extension", children: extension })
    ] });
  }, [file]);
};
const useThumbnailUrl = (file) => {
  const thumbnailGenerator = useSelector(selectThumbnailGenerator);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [thumbnailLoading, setThumbnailLoading] = useState(false);
  const loadingAttempts = useRef(0);
  useEffect(() => {
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
          Logger.error(
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
  const dispatch = useThunkDispatch();
  const onMouseClick = useCallback(
    (event, clickType) => {
      if (!file) return;
      dispatch(
        thunkRequestFileAction(ChonkyActions.MouseClickFile, {
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
  const onKeyboardClick = useCallback(
    (event) => {
      if (!file) return;
      dispatch(
        thunkRequestFileAction(ChonkyActions.KeyboardClickFile, {
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
  const onSingleClick = useCallback(
    (event) => onMouseClick(event, "single"),
    [onMouseClick]
  );
  const onDoubleClick = useCallback(
    (event) => onMouseClick(event, "double"),
    [onMouseClick]
  );
  return {
    onSingleClick,
    onDoubleClick,
    onKeyboardClick
  };
};
export {
  useFileClickHandlers,
  useFileEntryHtmlProps,
  useFileEntryState,
  useFileNameComponent,
  useModifierIconComponents,
  useThumbnailUrl
};
