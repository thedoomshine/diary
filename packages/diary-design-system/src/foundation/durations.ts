import { defineTokens } from '@pandacss/dev'

import { generateTokens } from '../utils'

const durationTokens = {
  150: '150ms',
  250: '250ms',
  300: '300ms',
  500: '500ms',
}

export const durations = defineTokens.durations(generateTokens(durationTokens))
