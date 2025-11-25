import { defineConfig, type Options } from 'tsup';
import path from 'node:path';
import pkg from './package.json';

export default defineConfig((options: Options) => ({
    /**
     * Library name
     */
    name: 'chonky',
    /**
     * Entry files
     */
    entry: ['src/**/*.ts', 'src/**/*.tsx'],
    /**
     * Output directory
     */
    outDir: 'dist',
    /**
     * Output formats (CommonJS and ES Modules)
     */
    format: ['cjs', 'esm'],
    /**
     * Target environment
     */
    target: 'es2024',
    /**
     * Path to the tsconfig file
     */
    tsconfig: path.resolve(__dirname, './tsconfig.app.json'),
    /**
     * Enable clean output directory before each build
     */
    clean: true,
    /**
     * Disable minifying of output files
     */
    minify: false,
    /**
     * Disable bundling of output files
     */
    bundle: false,
    /**
     * Generate declaration files
     */
    dts: true,
    esbuildOptions: (options) => {
        // Remove console.* calls from the output
        options.drop = ['console'];
    },
    /**
     * External dependencies (do not bundle these)
     */
    external: Object.keys(pkg.dependencies),
    ...options,
}));
