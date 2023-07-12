import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  banner: {
    js: "'use client'",
  },
  clean: false,
  dts: true,
  entry: ['src/index.ts'],
  external: ['react', 'styled-components'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  declarationDir: './dist/@types',
  sourcemap: true,
  splitting: true,
  treeshake: true,
  minify: !options.watch,
}))
