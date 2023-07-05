import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'
import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  clean: false,
  dts: true,
  entry: ['src/index.ts'],
  external: ['react'],
  esbuildPlugins: [vanillaExtractPlugin],
  format: 'esm,cjs',
  outDir: 'dist',
  declarationDir: './dist/@types',
  sourcemap: true,
  splitting: true,
  treeshake: true,
  minify: !options.watch,
}))
