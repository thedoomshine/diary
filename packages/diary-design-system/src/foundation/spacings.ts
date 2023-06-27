import { defineTokens } from '@pandacss/dev'

import { generateTokens } from '../utils'

export const spacingTokens = {
  '1-8': '.125rem',
  '1-4': '.25rem',
  '1-2': '.5rem',
  '3-4': '.75rem',
  '1-1': '1rem',
  '3-2': '1.5rem',
  '2-1': '2rem',
  '5-2': '2.5rem',
  '3-1': '3rem',
} as const

export const spacing = defineTokens.spacing(generateTokens(spacingTokens))
