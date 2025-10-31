import { defineConfig, type Options } from "tsup";
import path from "node:path";
import pkg from "./package.json";

export default defineConfig((options: Options) => ({
  entry: ["./src/index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  splitting: true,
  clean: true,
  target: "es2024",
  tsconfig: path.resolve(__dirname, "./tsconfig.json"),
  name: 'chonky',
  // minify: !options.watch,
  minify: false,
  esbuildOptions: (options) => {
    options.outbase = ".";
  },
  external: Object.keys(pkg.dependencies),
  ...options,
}));
