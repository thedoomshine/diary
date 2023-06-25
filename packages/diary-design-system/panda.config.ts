import { defineConfig } from '@pandacss/dev'

import { preset } from './src/panda.theme'
import { globalCss } from './src/foundation/globalCss'
import { breakpoints } from './src/foundation/sizes'
import { keyframes } from './src/foundation/animations'

export default defineConfig({
  clean: true,
  cwd: './src',
  emitPackage: true,
  exclude: [],
  include: ['./src/**/*.{js,jsx,ts,tsx,css}', './src/panda.theme.ts'],
  outdir: 'style-engine',
  preflight: true,
  presets: [preset],
  globalCss,
  theme: {
    extend: {
      breakpoints,
      keyframes,
    },
  },
  jsxFramework: 'react',
  watch: true,
})
