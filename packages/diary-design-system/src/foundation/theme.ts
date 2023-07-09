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

export const theme = {
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
} as const

export type BashThemeShape = typeof theme
export type BashTheme = BashThemeShape
