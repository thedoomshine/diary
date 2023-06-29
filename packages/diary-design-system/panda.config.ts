import { defineConfig } from '@pandacss/dev'

import { preset } from './src/diary.theme'
import { keyframes } from './src/foundation/animations'
import { globalCss } from './src/foundation/globalCss'
import { breakpoints } from './src/foundation/sizes'

export default defineConfig({
  clean: true,
  emitPackage: true,
  exclude: [],
  globalCss,
  include: ['./src/**/*'],
  jsxFramework: 'react',
  outdir: '@diaryco/style-engine',
  preflight: false,
  presets: [preset],
  theme: {
    extend: {
      breakpoints,
      keyframes
    }
  },
  optimize: true,
  minify: true,
  watch: true
})
