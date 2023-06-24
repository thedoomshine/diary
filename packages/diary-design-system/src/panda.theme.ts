import { definePreset } from '@pandacss/dev'
import { type Preset } from '@pandacss/types'

import { animations, keyframes } from './foundation/animations'
import { colors } from './foundation/colors'
import { durations } from './foundation/durations'
import { easings } from './foundation/easings'
import { fontSizes } from './foundation/fontSizes'
import { fontWeights } from './foundation/fontWeights'
import { fonts } from './foundation/fonts'
import { lineHeights } from './foundation/lineHeights'
import { opacity } from './foundation/opacity'
import { radii } from './foundation/radii'
import { shadows } from './foundation/shadows'
import { breakpoints, sizes } from './foundation/sizes'
import { spacing } from './foundation/spacings'
import { zIndex } from './foundation/z-indices'

export const preset: Preset = definePreset({
  theme: {
    extend: {
      breakpoints,
      keyframes,
      tokens: {
        animations,
        colors,
        durations,
        easings,
        fonts,
        fontSizes,
        fontWeights,
        lineHeights,
        opacity,
        radii,
        shadows,
        sizes,
        spacing,
        zIndex,
      },
    },
  },
})
