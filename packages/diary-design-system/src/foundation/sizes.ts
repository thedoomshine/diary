import { remToPx } from 'polished'

import { ScalePrefix } from '../@types/foundation'

export const size = {
  [ScalePrefix.XS]: `32rem`,
  [ScalePrefix.SM]: `48rem`,
  [ScalePrefix.MD]: `64rem`,
  [ScalePrefix.LG]: `80rem`,
  [ScalePrefix.XL]: `96rem`,
} as const

type SizePrefixKey = keyof typeof size

type BreakpointsObj = {
  [key in SizePrefixKey]: string
}

export const breakpoints = Object
  .entries(size)
  .reduce(
    (acc, [key, value]: [string, string]) => (
      {
        ...acc,
        [key as SizePrefixKey]: `(min-width: ${remToPx(value)})`
      }),
  {} as BreakpointsObj
)
