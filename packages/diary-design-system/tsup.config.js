import { defineConfig } from 'tsup'


export default defineConfig((options) => ({
  clean: false,
  dts: true,
  entry: ['src/index.ts'],
  external: [
    'style-engine/*',
    'react',
    'react-markdown',
    'rehype-sanitize',
    'rehype-stringify',
    'remark-breaks',
    'remark-emoji',
    'remark-gfm',
    'remark-parse',
    'remark-rehype',
    'unified',
  ],
  format: 'cjs',
  outDir: 'dist',
  declarationDir: './dist/@types',
  sourcemap: true,
  splitting: true,
  treeshake: true,
  minify: !options.watch,
}))
