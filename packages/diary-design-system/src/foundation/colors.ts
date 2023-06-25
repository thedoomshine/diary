import { defineTokens } from '@pandacss/dev'

import { generateTokens } from '../utils'

export const colorTokens = {
  black: `#0d0d0d`,
  blue: `#00a3d1`,
  charcoal: `#1f1f1f`,
  green: `#00cc69`,
  grey: `#3e3e3e`,
  red: `#ff2e1f`,
  orange: `#ff9338`,
  purple: `#703faf`,
  silver: `#b4b4b4`,
  white: `#f5f5f5`,
  yellow: `#f8c630`,
} as const

export const colors = defineTokens.colors(generateTokens(colorTokens))
