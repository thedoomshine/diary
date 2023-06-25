export const enum ScalePrefix {
  XXS = 'xxs',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
}

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

export const enum Selectors {
  ACTIVE = '&[active], &:active, &[aria-active=true"]',
  AFTER = '&::after',
  BEFORE = '&::before',
  DISABLED = '[disabled], &:disabled, &[aria-disabled="true"]',
  FOCUS = '&:focus',
  FOCUS_VISIBLE = '&:focus-visible',
  HOVER = '&:hover',
  VISITED = '&:visited',
}

export const enum ButtonSelectors {
  OUTLINE_FOCUS_VISIBLE = '&:focus-visible::before',
  SHADOW = '&::after',
  SHADOW_ACTIVE = '&:active::after',
  SHADOW_DISABLED = "[disabled]::after, &:disabled::after, &[aria-disabled='true']::after",
  SHADOW_HOVER = '&:hover::after',
}

export type CompositeShadow = {
  offsetX: number
  offsetY: number
  blur: number
  spread: number
  color: string
  inset?: boolean
}

export type Shadow = string | CompositeShadow | string[] | CompositeShadow[]
