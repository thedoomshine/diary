import { globalCss, preset } from '@diaryco/design-system'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  clean: true,
  cwd: './src',
  emitPackage: false,
  exclude: [],
  globalCss,
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  jsxFramework: 'react',
  outdir: 'style-engine',
  preflight: false,
  presets: [preset],
  optimize: true,
  minify: true,
  watch: true,
})
