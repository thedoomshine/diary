import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  clean: true,
  dts: true,
  entry: ['src/index.tsx'],
  external: ['react'],
  format: 'cjs',
  outDir: 'dist',
  declarationDir: './dist',
  sourcemap: true,
  splitting: true,
  treeshake: true,
  minify: !options.watch,
}))