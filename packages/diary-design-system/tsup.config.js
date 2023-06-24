import { defineConfig } from 'tsup';


export default defineConfig((options) => ({
  clean: false,
  dts: true,
  entry: ['src/index.tsx'],
  external: [
    'react',
    'react-markdown',
    'rehype-sanitize',
    'rehype-stringify',
    'remark-breaks',
    'remark-emoji',
    'remark-gfm',
    'remark-parse',
    'remark-rehype',
    'style-engine',
    'unified',
  ],
  format: 'cjs',
  outDir: 'dist',
  declarationDir: './dist',
  sourcemap: true,
  splitting: true,
  treeshake: true,
  minify: !options.watch,
}))
