import { defineTokens } from '@pandacss/dev'

import { generateTokens } from '../utils'

export const opacityTokens = {
  0: 0,
  5: 0.05,
  50: 0.5,
  75: 0.75,
  100: 1,
} as const

export const opacity = defineTokens.opacity(generateTokens(opacityTokens))
