export const size = {
  sm: `320px`,
  md: `480px`,
  lg: `768px`,
  xl: `1280px`,
  xxl: `1440px`,
} as const

export const media = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
} as const

export const space = {
  xxxs: '.25rem',
  xxs: '.5rem',
  xs: '.75rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
  xl: '1.75rem',
  xxl: '2rem',
} as const
