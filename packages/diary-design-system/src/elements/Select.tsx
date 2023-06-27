import type { SelectItemProps as SelectItemPrimitiveProps, SelectProps as SelectPrimitiveProps } from '@radix-ui/react-select'
import * as SelectPrimitive from '@radix-ui/react-select'
import { lighten, rgba } from 'polished'
import type { ReactNode } from 'react'
import { forwardRef } from 'react'

import { css, cx } from 'style-engine/css'
import { token } from 'style-engine/tokens'

import { buttonStyles } from './Button'
import { Icon } from './Icon/Icon'

const selectTriggerStyles = cx(buttonStyles({ type: 'fill' }), css({
  border: 'solid 1px $grey',
  gap: '0.5rem',
  padding: '0.5rem',
  '&[data-disabled]': {
    pointerEvents: 'none',
  },
}))

const selectButtonStyles = buttonStyles()

const selectContentStyles = css({
  zIndex: 'dropdown',
  overflow: 'hidden',
  backgroundColor: 'black',
  borderRadius: 'md',
  boxShadow: 'normal',
  maxHeight: '16rem',
  '--radix-select-content-available-height': '16rem',
})

const selectItemStyles = css({
  cursor: 'pointer',
  userSelect: 'none',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 2rem 1rem 0.5rem',
  borderRadius: 'sm',
  '&[data-disabled]': {
    pointerEvents: 'none',
    color: rgba(token('colors.silver'), 0.05),
  },
  '&[data-highlighted], &:hover': {
    backgroundColor: lighten(0.025, token('colors.black')),
    outline: 'none',
  },
})

const selectItemIndicatorStyles = css({
  position: 'absolute',
  right: '0.5rem',
  display: 'inline-flex',
  alignItems: 'center',
  color: 'yellow',
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
          className={cx(selectTriggerStyles, className)}
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
  ({ children, hideIndicator = false, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        className={selectItemStyles}
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
