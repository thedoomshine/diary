import * as SelectPrimitive from '@radix-ui/react-select'
import { rgba } from 'polished'
import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'

import { ButtonStyles, Icon } from '~/elements'

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
  z-index: 3;

  overflow: hidden;

  max-height: 16rem;

  background-color: ${({ theme }) => theme.color.black};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 50%);
`

const SelectViewport = styled(SelectPrimitive.Viewport)`
  /* max-height: 16rem; */
`

const StyledSelectItem = styled(SelectPrimitive.Item)`
  cursor: pointer;
  user-select: none;

  position: relative;

  display: flex;
  align-items: center;

  padding: 1rem 2rem 1rem 0.5rem;

  border-radius: 0.25;

  &[data-disabled] {
    pointer-events: none;
    color: ${({ theme }) => rgba(theme.color.silver, 0.05)};
  }

  &[data-highlighted],
  &:hover {
    background-color: ${({ theme }) => rgba(theme.color.white, 0.05)};
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

interface SelectProps extends SelectPrimitive.SelectProps {
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
  value?: string
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    { children, disabled, hideIcon = false, className, ...props },
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
