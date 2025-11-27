"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var icon_helper_exports = {};
__export(icon_helper_exports, {
  AudioExtensions: () => AudioExtensions,
  ChonkyIconContext: () => ChonkyIconContext,
  ChonkyIconFA: () => ChonkyIconFA,
  ColorsDark: () => ColorsDark,
  ColorsLight: () => ColorsLight,
  ImageExtensions: () => ImageExtensions,
  VideoExtensions: () => VideoExtensions,
  useIconData: () => useIconData
});
module.exports = __toCommonJS(icon_helper_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_exact_trie = __toESM(require("exact-trie"), 1);
var import_react = __toESM(require("react"), 1);
var import_classnames = __toESM(require("classnames"), 1);
var import_lucide_react = require("lucide-react");
var import_ChonkyIconPlaceholder = require("../components/internal/ChonkyIconPlaceholder");
var import_icons = require("../types/icons.types");
var import_styles = require("./styles");
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2019
 * @license MIT
 */
const ChonkyIconContext = (0, import_react.createContext)(import_ChonkyIconPlaceholder.ChonkyIconPlaceholder);
const VideoExtensions = [
  "3g2",
  "3gp",
  "3gpp",
  "asf",
  "asx",
  "avi",
  "dvb",
  "f4v",
  "fli",
  "flv",
  "fvt",
  "h261",
  "h263",
  "h264",
  "jpgm",
  "jpgv",
  "jpm",
  "m1v",
  "m2v",
  "m4u",
  "m4v",
  "mj2",
  "mjp2",
  "mk3d",
  "mks",
  "mkv",
  "mng",
  "mov",
  "movie",
  "mp4",
  "mp4v",
  "mpe",
  "mpeg",
  "mpg",
  "mpg4",
  "mxu",
  "ogv",
  "pyv",
  "qt",
  "smv",
  "ts",
  "uvh",
  "uvm",
  "uvp",
  "uvs",
  "uvu",
  "uvv",
  "uvvh",
  "uvvm",
  "uvvp",
  "uvvs",
  "uvvu",
  "uvvv",
  "viv",
  "vob",
  "webm",
  "wm",
  "wmv",
  "wmx",
  "wvx"
];
const ImageExtensions = [
  "3ds",
  "apng",
  "azv",
  "bmp",
  "bmp",
  "btif",
  "cgm",
  "cmx",
  "djv",
  "djvu",
  "drle",
  "dwg",
  "dxf",
  "emf",
  "exr",
  "fbs",
  "fh",
  "fh4",
  "fh5",
  "fh7",
  "fhc",
  "fits",
  "fpx",
  "fst",
  "g3",
  "gif",
  "heic",
  "heics",
  "heif",
  "heifs",
  "ico",
  "ico",
  "ief",
  "jls",
  "jng",
  "jp2",
  "jpe",
  "jpeg",
  "jpf",
  "jpg",
  "jpg2",
  "jpm",
  "jpx",
  "jxr",
  "ktx",
  "mdi",
  "mmr",
  "npx",
  "pbm",
  "pct",
  "pcx",
  "pcx",
  "pgm",
  "pic",
  "png",
  "pnm",
  "ppm",
  "psd",
  "pti",
  "ras",
  "rgb",
  "rlc",
  "sgi",
  "sid",
  "sub",
  "svg",
  "svgz",
  "t38",
  "tap",
  "tfx",
  "tga",
  "tif",
  "tiff",
  "uvg",
  "uvi",
  "uvvg",
  "uvvi",
  "vtf",
  "wbmp",
  "wdp",
  "webp",
  "wmf",
  "xbm",
  "xif",
  "xpm",
  "xwd"
];
const AudioExtensions = [
  "3gpp",
  "aac",
  "adp",
  "aif",
  "aifc",
  "aiff",
  "au",
  "caf",
  "dra",
  "dts",
  "dtshd",
  "ecelp4800",
  "ecelp7470",
  "ecelp9600",
  "eol",
  "flac",
  "kar",
  "lvp",
  "m2a",
  "m3a",
  "m3u",
  "m4a",
  "m4a",
  "mid",
  "midi",
  "mka",
  "mp2",
  "mp2a",
  "mp3",
  "mp3",
  "mp4a",
  "mpga",
  "oga",
  "ogg",
  "pya",
  "ra",
  "ra",
  "ram",
  "rip",
  "rmi",
  "rmp",
  "s3m",
  "sil",
  "snd",
  "spx",
  "uva",
  "uvva",
  "wav",
  "wav",
  "wav",
  "wax",
  "weba",
  "wma",
  "xm"
];
const ColorsLight = [
  "#bbbbbb",
  "#d65c5c",
  "#d6665c",
  "#d6705c",
  "#d67a5c",
  "#d6855c",
  "#d68f5c",
  "#d6995c",
  "#d6a35c",
  "#d6ad5c",
  "#d6b85c",
  "#d6c25c",
  "#d6cc5c",
  "#d6d65c",
  "#ccd65c",
  "#c2d65c",
  "#b8d65c",
  "#add65c",
  "#a3d65c",
  "#99d65c",
  "#8fd65c",
  "#85d65c",
  "#7ad65c",
  "#70d65c",
  "#66d65c",
  "#5cd65c",
  "#5cd666",
  "#5cd670",
  "#5cd67a",
  "#5cd685",
  "#5cd68f",
  "#5cd699",
  "#5cd6a3",
  "#5cd6ad",
  "#5cd6b8",
  "#5cd6c2",
  "#5cd6cc",
  "#5cd6d6",
  "#5cccd6",
  "#5cc2d6",
  "#5cb8d6",
  "#5cadd6",
  "#5ca3d6",
  "#5c99d6",
  "#5c8fd6",
  "#5c85d6",
  "#5c7ad6",
  "#5c70d6",
  "#5c66d6",
  "#5c5cd6",
  "#665cd6",
  "#705cd6",
  "#7a5cd6",
  "#855cd6",
  "#8f5cd6",
  "#995cd6",
  "#a35cd6",
  "#ad5cd6",
  "#b85cd6",
  "#c25cd6",
  "#cc5cd6",
  "#d65cd6",
  "#d65ccc",
  "#d65cc2",
  "#d65cb8",
  "#d65cad",
  "#d65ca3",
  "#d65c99",
  "#d65c8f",
  "#d65c85",
  "#d65c7a",
  "#d65c70",
  "#d65c66"
];
const ColorsDark = [
  "#777",
  "#8f3d3d",
  "#8f443d",
  "#8f4b3d",
  "#8f523d",
  "#8f583d",
  "#8f5f3d",
  "#8f663d",
  "#8f6d3d",
  "#8f743d",
  "#8f7a3d",
  "#8f813d",
  "#8f883d",
  "#8f8f3d",
  "#888f3d",
  "#818f3d",
  "#7a8f3d",
  "#748f3d",
  "#6d8f3d",
  "#668f3d",
  "#5f8f3d",
  "#588f3d",
  "#528f3d",
  "#4b8f3d",
  "#448f3d",
  "#3d8f3d",
  "#3d8f44",
  "#3d8f4b",
  "#3d8f52",
  "#3d8f58",
  "#3d8f5f",
  "#3d8f66",
  "#3d8f6d",
  "#3d8f74",
  "#3d8f7a",
  "#3d8f81",
  "#3d8f88",
  "#3d8f8f",
  "#3d888f",
  "#3d818f",
  "#3d7a8f",
  "#3d748f",
  "#3d6d8f",
  "#3d668f",
  "#3d5f8f",
  "#3d588f",
  "#3d528f",
  "#3d4b8f",
  "#3d448f",
  "#3d3d8f",
  "#443d8f",
  "#4b3d8f",
  "#523d8f",
  "#583d8f",
  "#5f3d8f",
  "#663d8f",
  "#6d3d8f",
  "#743d8f",
  "#7a3d8f",
  "#813d8f",
  "#883d8f",
  "#8f3d8f",
  "#8f3d88",
  "#8f3d81",
  "#8f3d7a",
  "#8f3d74",
  "#8f3d6d",
  "#8f3d66",
  "#8f3d5f",
  "#8f3d58",
  "#8f3d52",
  "#8f3d4b",
  "#8f3d44"
];
const getIconTrie = () => {
  let colourIndex = 0;
  const step = 5;
  const IconsToExtensions = [
    // Generic file types
    [import_icons.ChonkyIconName.license, ["license"]],
    [import_icons.ChonkyIconName.config, ["sfk", "ini", "yml", "toml", "iml"]],
    [import_icons.ChonkyIconName.model, ["3ds", "obj", "ply", "fbx"]],
    [
      import_icons.ChonkyIconName.database,
      [
        "csv",
        "json",
        "sql",
        "sqlite",
        "sqlite3",
        "npy",
        "npz",
        "rec",
        "idx",
        "hdf5"
      ]
    ],
    [import_icons.ChonkyIconName.text, ["txt", "md", "mdx"]],
    [import_icons.ChonkyIconName.archive, ["zip", "rar", "tar", "tar.gz", "7z"]],
    [import_icons.ChonkyIconName.image, ImageExtensions],
    [import_icons.ChonkyIconName.video, VideoExtensions],
    [
      import_icons.ChonkyIconName.code,
      [
        "html",
        "php",
        "css",
        "sass",
        "scss",
        "less",
        "cpp",
        "h",
        "hpp",
        "c",
        "xml"
      ]
    ],
    [import_icons.ChonkyIconName.info, ["bib", "readme", "nfo"]],
    [import_icons.ChonkyIconName.key, ["pem", "pub"]],
    [import_icons.ChonkyIconName.lock, ["lock", "lock.json", "shrinkwrap.json"]],
    [import_icons.ChonkyIconName.music, AudioExtensions],
    [import_icons.ChonkyIconName.terminal, ["run", "sh"]],
    [import_icons.ChonkyIconName.trash, [".Trashes"]],
    [import_icons.ChonkyIconName.users, ["authors", "contributors"]],
    // Development tools file types
    [import_icons.ChonkyIconName.git, [".gitignore"]],
    // Brands file types
    [import_icons.ChonkyIconName.adobe, ["psd"]],
    // Other program file types
    [import_icons.ChonkyIconName.pdf, ["pdf"]],
    [import_icons.ChonkyIconName.excel, ["xls", "xlsx"]],
    [import_icons.ChonkyIconName.word, ["doc", "docx", "odt"]],
    [import_icons.ChonkyIconName.flash, ["swf"]]
  ];
  const exactTrie = new import_exact_trie.default({ ignoreCase: true });
  for (const pair of IconsToExtensions) {
    const [icon, extensions] = pair;
    for (let i = 0; i < extensions.length; ++i) {
      colourIndex += step;
      const colorCode = colourIndex % (ColorsLight.length - 1) + 1;
      const iconData = {
        icon,
        colorCode
      };
      exactTrie.put(extensions[i], iconData, true);
    }
  }
  return exactTrie;
};
const iconTrie = getIconTrie();
const useIconData = (file) => {
  return (0, import_react.useMemo)(() => {
    if (!file) return { icon: import_icons.ChonkyIconName.loading, colorCode: 0 };
    if (file.isDir === true) return { icon: import_icons.ChonkyIconName.folder, colorCode: 0 };
    const match = iconTrie.getWithCheckpoints(file.name, ".", true);
    return match ? match : { icon: import_icons.ChonkyIconName.file, colorCode: 32 };
  }, [file]);
};
const IconMap = {
  // Misc
  [import_icons.ChonkyIconName.loading]: import_lucide_react.LucideLoaderCircle,
  [import_icons.ChonkyIconName.dropdown]: import_lucide_react.LucideChevronDown,
  [import_icons.ChonkyIconName.placeholder]: import_lucide_react.LucideMinus,
  // File Actions: Drag & drop
  [import_icons.ChonkyIconName.dndDragging]: import_lucide_react.LucideHandFist,
  [import_icons.ChonkyIconName.dndCanDrop]: import_lucide_react.LucideArrowDown,
  [import_icons.ChonkyIconName.dndCannotDrop]: import_lucide_react.LucideX,
  // File Actions: File operations
  [import_icons.ChonkyIconName.openFiles]: import_lucide_react.LucideBox,
  [import_icons.ChonkyIconName.openParentFolder]: import_lucide_react.LucideCornerRightUp,
  [import_icons.ChonkyIconName.copy]: import_lucide_react.LucideCopy,
  [import_icons.ChonkyIconName.paste]: import_lucide_react.LucideClipboardPaste,
  [import_icons.ChonkyIconName.share]: import_lucide_react.LucideShare2,
  [import_icons.ChonkyIconName.search]: import_lucide_react.LucideSearch,
  [import_icons.ChonkyIconName.selectAllFiles]: import_lucide_react.LucideGroup,
  [import_icons.ChonkyIconName.clearSelection]: import_lucide_react.LucideEraser,
  // File Actions: Sorting & options
  [import_icons.ChonkyIconName.sortAsc]: import_lucide_react.LucideSortAsc,
  [import_icons.ChonkyIconName.sortDesc]: import_lucide_react.LucideSortDesc,
  [import_icons.ChonkyIconName.toggleOn]: import_lucide_react.LucideToggleRight,
  [import_icons.ChonkyIconName.toggleOff]: import_lucide_react.LucideToggleLeft,
  // File Actions: File Views
  [import_icons.ChonkyIconName.list]: import_lucide_react.LucideList,
  [import_icons.ChonkyIconName.compact]: import_lucide_react.LucideTable,
  [import_icons.ChonkyIconName.smallThumbnail]: import_lucide_react.LucideGrid3X3,
  [import_icons.ChonkyIconName.largeThumbnail]: import_lucide_react.LucideGrid2X2,
  // File Actions: Unsorted
  [import_icons.ChonkyIconName.folder]: import_lucide_react.LucideFolder,
  [import_icons.ChonkyIconName.folderCreate]: import_lucide_react.LucideFolderPlus,
  [import_icons.ChonkyIconName.folderOpen]: import_lucide_react.LucideFolderOpen,
  [import_icons.ChonkyIconName.folderChainSeparator]: import_lucide_react.LucideChevronRight,
  [import_icons.ChonkyIconName.download]: import_lucide_react.LucideDownload,
  [import_icons.ChonkyIconName.upload]: import_lucide_react.LucideUpload,
  [import_icons.ChonkyIconName.trash]: import_lucide_react.LucideTrash,
  [import_icons.ChonkyIconName.fallbackIcon]: import_lucide_react.LucideOctagonAlert,
  // File modifiers
  [import_icons.ChonkyIconName.symlink]: import_lucide_react.LucideFileSymlink,
  [import_icons.ChonkyIconName.hidden]: import_lucide_react.LucideEyeClosed,
  // Generic file types
  [import_icons.ChonkyIconName.file]: import_lucide_react.LucideFile,
  [import_icons.ChonkyIconName.license]: import_lucide_react.LucideScale,
  [import_icons.ChonkyIconName.code]: import_lucide_react.LucideFileCode,
  [import_icons.ChonkyIconName.config]: import_lucide_react.LucideCog,
  [import_icons.ChonkyIconName.model]: import_lucide_react.LucidePackage,
  [import_icons.ChonkyIconName.database]: import_lucide_react.LucideDatabase,
  [import_icons.ChonkyIconName.text]: import_lucide_react.LucideText,
  [import_icons.ChonkyIconName.archive]: import_lucide_react.LucideArchive,
  [import_icons.ChonkyIconName.image]: import_lucide_react.LucideFileImage,
  [import_icons.ChonkyIconName.video]: import_lucide_react.LucideFilm,
  [import_icons.ChonkyIconName.info]: import_lucide_react.LucideInfo,
  [import_icons.ChonkyIconName.key]: import_lucide_react.LucideKey,
  [import_icons.ChonkyIconName.lock]: import_lucide_react.LucideLock,
  [import_icons.ChonkyIconName.music]: import_lucide_react.LucideMusic,
  [import_icons.ChonkyIconName.terminal]: import_lucide_react.LucideTerminal,
  [import_icons.ChonkyIconName.users]: import_lucide_react.LucideUsers,
  // Development tools file types
  [import_icons.ChonkyIconName.git]: import_lucide_react.LucideFolder,
  // Brands file types
  [import_icons.ChonkyIconName.adobe]: import_lucide_react.LucideFileText,
  // Other program file types
  [import_icons.ChonkyIconName.pdf]: import_lucide_react.LucideFileText,
  [import_icons.ChonkyIconName.excel]: import_lucide_react.LucideSheet,
  [import_icons.ChonkyIconName.word]: import_lucide_react.LucideFile,
  [import_icons.ChonkyIconName.flash]: import_lucide_react.LucideFlashlight
};
const useStyles = (0, import_styles.makeLocalChonkyStyles)(() => ({
  icon: {
    display: "inline-block",
    verticalAlign: "middle"
  }
}));
const ChonkyIconFA = ({ icon, className, style }) => {
  const Icon = IconMap[icon] || import_ChonkyIconPlaceholder.ChonkyIconPlaceholder;
  const classes = useStyles();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16, className: (0, import_classnames.default)(classes.icon, className), style });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AudioExtensions,
  ChonkyIconContext,
  ChonkyIconFA,
  ColorsDark,
  ColorsLight,
  ImageExtensions,
  VideoExtensions,
  useIconData
});
