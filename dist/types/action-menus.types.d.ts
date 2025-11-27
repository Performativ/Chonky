interface FileActionGroup {
    name: string;
    fileActionIds: string[];
}
type FileActionMenuItem = string | FileActionGroup;

export type { FileActionGroup, FileActionMenuItem };
