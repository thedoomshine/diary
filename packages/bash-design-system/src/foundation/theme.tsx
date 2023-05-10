import { createStitches, createTheme } from '@stitches/react'

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

export const dark = createTheme({
  colors: {
    primary: 'white',
  },
})
