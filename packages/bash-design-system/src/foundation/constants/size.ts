export const size = {
  sm: `320px`,
  md: `768px`,
  lg: `1280px`,
} as const

export const media = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
} as const

export const space = {
  xxs: '.5rem',
  xs: '.75rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
  xl: '1.75rem',
  xxl: '2rem',
} as const
