import { defineTokens } from '@pandacss/dev'

import { generateTokens } from '../utils'

const FONT_WEIGHT = Array.from({ length: 8 }, (_, i) =>
  ((i + 1) * 100).toString()
).reduce((a, v) => ({ ...a, [v]: v }), {})

export const fontWeightTokens = {
  ...FONT_WEIGHT,
} as const

export const fontWeights = defineTokens.fontWeights(
  generateTokens(fontWeightTokens)
)
