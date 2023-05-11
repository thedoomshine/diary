import {
  color,
  fontSize,
  fontWeight,
  font,
  media,
  size,
  space,
} from './constants'

export const theme = {
  color,
  fontSize,
  fontWeight,
  font,
  media,
  size,
  space,
} as const

export type BashThemeShape = typeof theme
export type BashTheme = BashThemeShape
