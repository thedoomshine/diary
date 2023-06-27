import { defineTokens } from '@pandacss/dev'

import { generateTokens } from '../utils'

export const lineHeightTokens = {
  body: '1.5',
  title: '1.25',
  element: '1',
} as const

export const lineHeights = defineTokens.lineHeights(
  generateTokens(lineHeightTokens)
)
