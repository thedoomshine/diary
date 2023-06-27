import { defineTokens } from '@pandacss/dev'

import { ScalePrefix } from '../@types/foundation'
import { generateTokens } from '../utils'

export const radiiTokens = {
  [ScalePrefix.SM]: `0.25rem`,
  [ScalePrefix.MD]: `0.5rem`,
  [ScalePrefix.LG]: `02rem`,
  half: '50%',
  full: '100%',
} as const

export const radii = defineTokens.radii(generateTokens(radiiTokens))
