import type {
  SelectItemProps as SelectItemPrimitiveProps,
  SelectProps as SelectPrimitiveProps,
} from '@radix-ui/react-select'
import * as SelectPrimitive from '@radix-ui/react-select'
import { style } from '@vanilla-extract/css'
import clsx from 'clsx'
import { lighten, rgba } from 'polished'
import type { ReactNode } from 'react'
import { forwardRef } from 'react'

import { themeVars } from '~/foundation/theme.css'

import { buttonStyles, buttonVariantStyles } from './Button'
import { Icon } from './Icon/Icon'

const selectTriggerStyles = style([
  buttonVariantStyles.fill,
  {
    border: `solid 1px ${themeVars.color.grey}`,
    gap: '0.5rem',
    padding: '0.5rem',
    selectors: {
      '&[data-disabled]': {
        pointerEvents: 'none',
      },
    },
  },
])

const selectButtonStyles = style([buttonStyles])

const selectContentStyles = style({
  zIndex: themeVars.zIndex.dropdown,
  overflow: 'hidden',
  backgroundColor: themeVars.color.black,
  borderRadius: themeVars.radii.md,
  boxShadow: themeVars.shadow.normal,
  maxHeight: '16rem',
  vars: {
    '--radix-select-content-min-width': '16rem',
  },
})

const selectItemStyles = style({
  cursor: 'pointer',
  userSelect: 'none',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 2rem 1rem 0.5rem',
  borderRadius: themeVars.radii.sm,
  selectors: {
    '&[data-disabled]': {
      pointerEvents: 'none',
      color: rgba(themeVars.color.silver, 0.05),
    },
    '&[data-highlighted], &:hover': {
      backgroundColor: lighten(0.025, themeVars.color.black),
      outline: 'none',
    },
  },
})

const selectItemIndicatorStyles = style({
  position: 'absolute',
  right: '0.5rem',
  display: 'inline-flex',
  alignItems: 'center',
  color: themeVars.color.yellow,
})

interface SelectProps extends SelectPrimitiveProps {
  children: ReactNode | ReactNode[]
  className?: string
  defaultOpen?: boolean
  defaultValue?: string
  dir?: 'ltr' | 'rtl'
  disabled?: boolean
  hideIcon?: boolean
  name?: string
  onOpenChange?: (open: boolean) => void
  onValueChange?: (value: string) => void
  open?: boolean
  required?: boolean
  showScrollButtons?: boolean
  value?: string
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      children,
      disabled,
      hideIcon = false,
      className,
      showScrollButtons = false,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <SelectPrimitive.Root
        disabled={disabled}
        {...props}
      >
        <SelectPrimitive.Trigger
          ref={forwardedRef}
          className={clsx(selectTriggerStyles, className)}
        >
          <SelectPrimitive.Value />
          {!hideIcon && (
            <SelectPrimitive.Icon>
              <Icon name='chevron-down' />
            </SelectPrimitive.Icon>
          )}
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Content
          className={selectContentStyles}
          sticky='always'
          position='popper'
        >
          {showScrollButtons && (
            <SelectPrimitive.ScrollUpButton className={selectButtonStyles}>
              <Icon name='chevron-up' />
            </SelectPrimitive.ScrollUpButton>
          )}
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          {showScrollButtons && (
            <SelectPrimitive.ScrollDownButton className={selectButtonStyles}>
              <Icon name='chevron-down' />
            </SelectPrimitive.ScrollDownButton>
          )}
        </SelectPrimitive.Content>
      </SelectPrimitive.Root>
    )
  }
)

interface SelectItemProps extends SelectItemPrimitiveProps {
  hideIndicator?: boolean
  children: ReactNode | ReactNode[]
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, hideIndicator = false, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        className={clsx(selectItemStyles, className)}
        ref={forwardedRef}
        {...props}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        {!hideIndicator && (
          <SelectPrimitive.ItemIndicator className={selectItemIndicatorStyles}>
            <Icon name='check' />
          </SelectPrimitive.ItemIndicator>
        )}
      </SelectPrimitive.Item>
    )
  }
)
