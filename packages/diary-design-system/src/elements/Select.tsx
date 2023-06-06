import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'

import styled from 'styled-components'
import { rgba } from 'polished'

import { Icon } from './Icon'
import { ButtonStyles } from './Button'

const SelectTrigger = styled(SelectPrimitive.Trigger)`
  ${ButtonStyles}
  gap: 0.5rem;
`

// const SelectScrollUp = styled(SelectPrimitive.ScrollUpButton)`
//   ${ButtonStyles}
// `

// const SelectScrollDown = styled(SelectPrimitive.ScrollDownButton)`
//   ${ButtonStyles}
// `

const SelectContent = styled(SelectPrimitive.Content)`
  background-color: ${({ theme }) => theme.color.charcoal};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  z-index: 3;
  overflow: hidden;
  max-height: 16rem;
`

const SelectViewport = styled(SelectPrimitive.Viewport)`
  /* max-height: 16rem; */
`

const StyledSelectItem = styled(SelectPrimitive.Item)`
  border-radius: 0.25;
  display: flex;
  align-items: center;
  padding: 0.5rem 1.25rem 0.5rem 0.5rem;
  position: relative;
  user-select: none;
  cursor: pointer;

  &[data-disabled] {
    color: ${({ theme }) => rgba(theme.color.silver, 0.05)};
    pointer-events: none;
  }

  &[data-highlighted],
  &:hover {
    outline: none;
    background-color: ${({ theme }) => rgba(theme.color.white, 0.05)};
  }
`

const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  right: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode | ReactNode[]
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
  value?: string
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  ({ children, disabled, hideIcon = false, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Root disabled={disabled} {...props}>
        <SelectTrigger ref={forwardedRef}>
          <SelectPrimitive.Value />
          {!hideIcon && (
            <SelectPrimitive.Icon>
              <Icon name='chevron-down' />
            </SelectPrimitive.Icon>
          )}
        </SelectTrigger>
        <SelectContent sticky='always' position='popper'>
          {/* <SelectScrollUp>
            <Icon name='chevron-up' />
          </SelectScrollUp> */}
          <SelectViewport>{children}</SelectViewport>
          {/* <SelectScrollDown>
            <Icon name='chevron-down' />
          </SelectScrollDown> */}
        </SelectContent>
      </SelectPrimitive.Root>
    )
  }
)

interface SelectItemProps extends SelectPrimitive.SelectItemProps {
  hideIndicator?: boolean
  children: ReactNode | ReactNode[]
  value: string
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, hideIndicator = false, ...props }, forwardedRef) => {
    return (
      <StyledSelectItem ref={forwardedRef} {...props}>
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
