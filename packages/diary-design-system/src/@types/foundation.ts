export const ScalePrefix = {
  XXS: 'xxs',
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  XXL: 'xxl',
} as const

export const Selectors = {
  ACTIVE: '&[active], &:active, &[aria-active=true"]',
  AFTER: '&::after',
  BEFORE: '&::before',
  DISABLED: '[disabled], &:disabled, &[aria-disabled="true"]',
  FOCUS: '&:focus',
  FOCUS_VISIBLE: '&:focus-visible',
  HOVER: '&:hover',
  VISITED: '&:visited',
} as const

export const ButtonSelectors = {
  OUTLINE_FOCUS_VISIBLE: '&:focus-visible::before',
  SHADOW: '&::after',
  SHADOW_ACTIVE: '&:active::after',
  SHADOW_DISABLED:
    '[disabled]::after, &:disabled::after, &[aria-disabled="true"]::after',
  SHADOW_HOVER: '&:hover::after',
} as const

export type CompositeShadow = {
  offsetX: number
  offsetY: number
  blur: number
  spread: number
  color: string
  inset?: boolean
}

export type Shadow = string | CompositeShadow | string[] | CompositeShadow[]
