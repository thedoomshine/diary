import { defineTokens } from '@pandacss/dev'

import { generateTokens } from '../utils'

const shadowTokens = {
  normal: '0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5)',
  isometric: `0 0 0 {colors.black},
  -1px 1px 0 {colors.black},
  -2px 2px 0 {colors.black},
  -3px 3px 0 {colors.black},
  -4px 4px 0 {colors.black},
  -5px 5px 0 {colors.black},
  -6px 6px 0 {colors.black},
  -7px 7px 0 {colors.black},
  -8px 8px 0 {colors.black}`,
  glow: '0 0 16rem 0.125rem {colors.yellow}',
} as const

export const shadows = defineTokens.shadows(generateTokens(shadowTokens))
