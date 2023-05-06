import { createStitches } from '@stitches/react'

import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  media,
  sizes,
  space,
} from './constants'

export const { styled, css, getCssText } = createStitches({
  theme: {
    colors,
    space,
    fontSizes,
    fonts,
    fontWeights,
    media,
    sizes,
  },
})
