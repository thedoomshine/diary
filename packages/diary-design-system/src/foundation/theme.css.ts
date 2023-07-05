import { createTheme } from '@vanilla-extract/css'

import {
  animation,
  breakpoints,
  color,
  duration,
  easing,
  fontSize,
  fontWeight,
  font,
  keyframes,
  lineHeight,
  opacity,
  radii,
  shadow,
  size,
  spacing,
  zIndex,
} from './index'

export const [themeClass, themeVars] = createTheme({
  animation,
  breakpoints,
  color,
  duration,
  easing,
  fontSize,
  fontWeight,
  font,
  keyframes,
  lineHeight,
  opacity,
  radii,
  shadow,
  size,
  spacing,
  zIndex,
})
