import { defineTokens } from '@pandacss/dev'

import { generateTokens } from '../utils'
import { ScalePrefix } from '../@types/foundation'

export enum HeadingPrefix {
  H6 = 'h6',
  H5 = 'h5',
  H4 = 'h4',
  H3 = 'h3',
  H2 = 'h2',
  H1 = 'h1',
}

export enum BodyPrefix {
  XS = ScalePrefix.XS,
  SM = ScalePrefix.SM,
  MD = ScalePrefix.MD,
  LG = ScalePrefix.LG,
  XL = ScalePrefix.XL,
}

// typographic scale formula
// fᵢ = f₀rᶦ
const generateTypeScale = ({
  ratio,
  prefix,
}: {
  ratio: number
  prefix: typeof HeadingPrefix | typeof BodyPrefix
}) =>
  Array.from(
    { length: Object.keys(prefix).length },
    (_, i) => `${Number(Math.pow(ratio, i - 1).toFixed(4))}rem`
  ).reduce((a, v, i) => ({ ...a, [Object.values(prefix)[i]]: v }), {})

// typographic scale of √2:1 (tritone)[https://en.wikipedia.org/wiki/Tritone]
const HEADING_TYPESCALE = generateTypeScale({
  ratio: Math.sqrt(2),
  prefix: HeadingPrefix,
})

// typographic scale of ∜2:1 (minor third)[https://en.wikipedia.org/wiki/Minor_third]
const BODY_TYPESCALE = generateTypeScale({
  ratio: Math.pow(2, 1 / 4),
  prefix: BodyPrefix,
})

export const fontSizeTokens = {
  _min: 16,
  _max: 20,
  ...HEADING_TYPESCALE,
  ...BODY_TYPESCALE,
} as const

export const fontSizes = defineTokens.fontSizes(generateTokens(fontSizeTokens))
