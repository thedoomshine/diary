import * as SelectPrimitive from '@radix-ui/react-select'
import type {
  SelectItemProps as SelectItemPrimitiveProps,
  SelectProps as SelectPrimitiveProps,
} from '@radix-ui/react-select'
import { lighten, rgba } from 'polished'
import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import styled, { useTheme } from 'styled-components'

import { ButtonStyles, FillButtonStyles, Icon } from '~/elements'

const SelectTrigger = styled(SelectPrimitive.Trigger)`
  ${FillButtonStyles};
  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
  gap: 0.5rem;
  padding: 0.5rem;

  &[data-state='open'] {
    border-color: ${({ theme }) => theme.color.yellow};
  }

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
  overflow: hidden;

  background-color: ${({ theme }) => theme.color.black};

  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
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

  padding: 0.5rem 2rem 0.5rem 0.5rem;

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

export const SelectGroup = styled(SelectPrimitive.Group)`
  &:first-of-type label {
    margin-top: 0;
  }
`

export const SelectLabel = styled(SelectPrimitive.Label)`
  margin: 1.5rem 0.5rem 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: ${({ theme }) => theme.lineHeight.title};
  color: ${({ theme }) => theme.color.silver};
`

const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  right: 0.5rem;

  display: inline-flex;
  align-items: center;

  color: ${({ theme }) => theme.color.yellow};
`

interface SelectProps extends SelectPrimitiveProps {
  align?: 'start' | 'center' | 'end'
  alignOffset?: number
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
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
  value?: string
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      align = 'start',
      alignOffset = 0,
      children,
      disabled,
      hideIcon = false,
      className,
      showScrollButtons = false,
      side = 'top',
      sideOffset = 4,
      value,
      ...props
    },
    forwardedRef
  ) => {
    const theme = useTheme()

    return (
      <SelectPrimitive.Root
        disabled={disabled}
        value={value}
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
          align={align}
          alignOffset={alignOffset}
          sticky='always'
          position='popper'
          side={side}
          sideOffset={sideOffset}
          style={{
            zIndex: theme.zIndex.dropdown,
          }}
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
