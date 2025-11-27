declare enum FileViewMode {
    List = "list",
    Compact = "compact",
    Grid = "grid"
}
type FileViewConfigList = {
    mode: FileViewMode.List;
    entryHeight: number;
};
type FileViewConfigGrid = {
    mode: FileViewMode.Compact | FileViewMode.Grid;
    entryWidth: number;
    entryHeight: number;
};
type FileViewConfig = FileViewConfigList | FileViewConfigGrid;

export { type FileViewConfig, type FileViewConfigGrid, type FileViewConfigList, FileViewMode };
