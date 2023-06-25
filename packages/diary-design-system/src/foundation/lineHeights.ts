import { defineTokens } from '@pandacss/dev'

import { generateTokens } from '../utils'

const lineHeightTokens = {
  body: '1.5',
  title: '1.25',
} as const

export const lineHeights = defineTokens.lineHeights(
  generateTokens(lineHeightTokens)
)
