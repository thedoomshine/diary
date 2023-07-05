const HeadingPrefix = {
  H6: 'h6',
  H5: 'h5',
  H4: 'h4',
  H3: 'h3',
  H2: 'h2',
  H1: 'h1',
} as const

const BodyPrefix = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
} as const

type ValueOf<T> = T[keyof T]

type HeadingPrefixKey = ValueOf<typeof HeadingPrefix>
type BodyPrefixKey = ValueOf<typeof BodyPrefix>

type SizePrefixKey = HeadingPrefixKey | BodyPrefixKey
type SizePrefixObj = typeof HeadingPrefix | typeof BodyPrefix

type TypescaleObj = {
  [key in SizePrefixKey]: string
}
// typographic scale formula
// fᵢ = f₀rᶦ
const generateTypeScale = (
  ratio: number,
  prefix: SizePrefixObj
): TypescaleObj =>
  Array.from(
    { length: Object.values(prefix).length },
    (_, i) => `${Number(Math.pow(ratio, i - 1).toFixed(4))}rem`
  ).reduce(
    (acc, value: string, i: number) => ({
      ...acc,
      [Object.values(prefix)[i] as SizePrefixKey]: value,
    }),
    {} as TypescaleObj
  )

// typographic scale of √2:1 (tritone)[https://en.wikipedia.org/wiki/Tritone]
const HEADING_TYPESCALE = generateTypeScale(Math.sqrt(2), HeadingPrefix)

// typographic scale of ∜2:1 (minor third)[https://en.wikipedia.org/wiki/Minor_third]
const BODY_TYPESCALE = generateTypeScale(Math.pow(2, 1 / 4), BodyPrefix)

export const fontSize = {
  ...HEADING_TYPESCALE,
  ...BODY_TYPESCALE,
} as const
