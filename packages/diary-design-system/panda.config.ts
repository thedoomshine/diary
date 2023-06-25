import { defineConfig } from '@pandacss/dev'

import { preset } from './src/panda.theme'
import { globalCss } from './src/foundation/globalCss'
import { breakpoints } from './src/foundation/sizes'
import { keyframes } from './src/foundation/animations'

export default defineConfig({
  clean: true,
  cwd: './src',
  emitPackage: false,
  exclude: [],
  globalCss,
  include: ['./src/**/*.{js,jsx,ts,tsx,css}'],
  jsxFramework: 'react',
  outdir: './src/style-engine',
  preflight: false,
  presets: [preset],
  theme: {
    extend: {
      breakpoints,
      keyframes
    }
  },
  watch: true
})
