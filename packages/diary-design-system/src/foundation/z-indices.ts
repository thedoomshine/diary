import { defineTokens } from '@pandacss/dev'

import { generateTokens } from '../utils'

export const zIndexTokens = {
  behind: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  overlay: 40,
  tooltip: 50,
  popover: 60,
  toast: 70,
  modal: 80,
} as const

export const zIndex = defineTokens.zIndex(generateTokens(zIndexTokens))
