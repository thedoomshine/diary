import { defineTokens } from '@pandacss/dev'
import { remToPx } from 'polished'

import { ScalePrefix } from '~/@types/foundation'

import { generateTokens } from '../utils'

const sizeTokens = {
  [ScalePrefix.XS]: `20rem`,
  [ScalePrefix.SM]: `30rem`,
  [ScalePrefix.MD]: `48rem`,
  [ScalePrefix.LG]: `80rem`,
  [ScalePrefix.XL]: `90rem`,
} as const

export const sizes = defineTokens.sizes(generateTokens(sizeTokens))

export const breakpoints = Object.entries(sizeTokens).reduce(
  (acc, [key, value]: [string, string]) => {
    const newObj = { [key]: remToPx(value) }
    return { ...acc, newObj }
  },
  {}
)
