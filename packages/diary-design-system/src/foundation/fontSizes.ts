import { defineTokens } from '@pandacss/dev'

import { BodyPrefix, HeadingPrefix } from '~/@types/foundation'

import { generateTokens } from '../utils'

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
