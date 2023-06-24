import { defineTokens } from '@pandacss/dev'

import { ScalePrefix } from '~/@types/foundation'

import { generateTokens } from '../utils'

const radiiTokens = {
  [ScalePrefix.SM]: `0.25rem`,
  [ScalePrefix.MD]: `0.5rem`,
  [ScalePrefix.LG]: `02rem`,
  half: '50%',
  full: '100%',
}

export const radii = defineTokens.radii(generateTokens(radiiTokens))
