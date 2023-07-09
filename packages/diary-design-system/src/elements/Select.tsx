import * as SelectPrimitive from '@radix-ui/react-select'
import type {
  SelectItemProps as SelectItemPrimitiveProps,
  SelectProps as SelectPrimitiveProps,
} from '@radix-ui/react-select'
import { lighten, rgba } from 'polished'
import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'

import { ButtonStyles, FillButtonStyles, Icon } from '~/elements'

const SelectTrigger = styled(SelectPrimitive.Trigger)`
  ${FillButtonStyles};
  border: solid 1px ${({ theme }) => theme.color.grey};
  gap: 0.5rem;
  padding: 0.5rem;

  &[data-disabled] {
    pointer-events: none;
  }
`

const SelectScrollUp = styled(SelectPrimitive.ScrollUpButton)`
  ${ButtonStyles};
`

const SelectScrollDown = styled(SelectPrimitive.ScrollDownButton)`
  ${ButtonStyles};
`

const SelectContent = styled(SelectPrimitive.Content)`
  z-index: ${({ theme }) => theme.zIndex.select};

  overflow: hidden;

  background-color: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadow.normal};
  --radix-select-content-available-height: 16rem;
  max-height: 16rem;
`

const StyledSelectItem = styled(SelectPrimitive.Item)`
  cursor: pointer;
  user-select: none;

  position: relative;

  display: flex;
  align-items: center;

  padding: 1rem 2rem 1rem 0.5rem;

  border-radius: ${({ theme }) => theme.radii.sm};

  &[data-disabled] {
    pointer-events: none;
    color: ${({ theme }) => rgba(theme.color.silver, 0.05)};
  }

  &[data-highlighted],
  &:hover {
    background-color: ${({ theme }) => lighten(0.025, theme.color.black)};
    outline: none;
  }
`

const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  right: 0.5rem;

  display: inline-flex;
  align-items: center;

  color: ${({ theme }) => theme.color.yellow};
`

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
        <SelectTrigger
          ref={forwardedRef}
          className={className}
        >
          <SelectPrimitive.Value />
          {!hideIcon && (
            <SelectPrimitive.Icon>
              <Icon name='chevron-down' />
            </SelectPrimitive.Icon>
          )}
        </SelectTrigger>
        <SelectContent
          sticky='always'
          position='popper'
        >
          {showScrollButtons && (
            <SelectScrollUp>
              <Icon name='chevron-up' />
            </SelectScrollUp>
          )}
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          {showScrollButtons && (
            <SelectScrollDown>
              <Icon name='chevron-down' />
            </SelectScrollDown>
          )}
        </SelectContent>
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
      <StyledSelectItem
        ref={forwardedRef}
        {...props}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        {!hideIndicator && (
          <SelectItemIndicator>
            <Icon name='check' />
          </SelectItemIndicator>
        )}
      </StyledSelectItem>
    )
  }
)
