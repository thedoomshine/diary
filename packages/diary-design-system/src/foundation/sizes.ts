import { defineTokens } from '@pandacss/dev'
import { remToPx } from 'polished'

import { generateTokens } from '../utils'
import { ScalePrefix } from '../@types/foundation'

const sizeTokens = {
  [ScalePrefix.XS]: `32rem`,
  [ScalePrefix.SM]: `48rem`,
  [ScalePrefix.MD]: `64rem`,
  [ScalePrefix.LG]: `80rem`,
  [ScalePrefix.XL]: `96rem`,
} as const

export const sizes = defineTokens.sizes(generateTokens(sizeTokens))

export const breakpoints = Object.entries(sizeTokens).reduce(
  (acc, [key, value]: [string, string]) => ({ ...acc, [key]: remToPx(value) }),
  {}
)
