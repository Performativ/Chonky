import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ChonkyActions } from "../../action-definitions/index";
import { useThunkDispatch } from "../../redux/helpers";
import { selectFolderChain } from "../../redux/selectors";
import { thunkRequestFileAction } from "../../redux/thunks/dispatchers.thunks";
import { FileHelper } from "../../util/file-helper";
const useFolderChainItems = () => {
  const folderChain = useSelector(selectFolderChain);
  const dispatch = useThunkDispatch();
  const folderChainItems = useMemo(() => {
    const items = [];
    if (!folderChain) return items;
    for (let i = 0; i < folderChain.length; ++i) {
      const file = folderChain[i];
      items.push({
        file,
        disabled: !file,
        onClick: !FileHelper.isOpenable(file) || i === folderChain.length - 1 ? void 0 : () => dispatch(
          thunkRequestFileAction(ChonkyActions.OpenFiles, {
            targetFile: file,
            files: [file]
          })
        )
      });
    }
    return items;
  }, [dispatch, folderChain]);
  return folderChainItems;
};
export {
  useFolderChainItems
};
