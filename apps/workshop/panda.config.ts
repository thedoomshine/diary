import { globalCss, preset } from '@diaryco/design-system'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  clean: true,
  cwd: './src',
  emitPackage: true,
  exclude: [],
  globalCss,
  include: ['./src/**/*'],
  jsxFramework: 'react',
  outdir: 'style-engine',
  preflight: false,
  presets: [preset],
  optimize: true,
  minify: true,
  watch: true
})
