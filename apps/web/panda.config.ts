import { globalCss, preset } from '@diaryco/design-system'
import { defineConfig } from '@pandacss/dev'
import { type Config } from '@pandacss/types'

export default defineConfig({
  clean: true,
  emitPackage: true,
  exclude: [],
  globalCss,
  include: [
    './src/**/*.{ts,tsx}',
  ],
  jsxFramework: 'react',
  outdir: '@diaryco/style-engine',
  outExtension: 'mjs',
  preflight: false,
  presets: [preset],
  optimize: true,
  minify: true,
  watch: true,
}) as Config
