import { color } from './color'
import { font, fontSize, fontWeight } from './font'
import { media, size, space } from './size'

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
