import { forwardRef } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'

import styled from 'styled-components'

import { Icon } from './Icon'
import { ButtonStyles } from './Button'

const SelectTrigger = styled(SelectPrimitive.Trigger)`
  ${ButtonStyles}
  gap: 0.5rem;
`

const SelectScrollUp = styled(SelectPrimitive.ScrollUpButton)`
  ${ButtonStyles}
`
const SelectScrollDown = styled(SelectPrimitive.ScrollDownButton)`
  ${ButtonStyles}
`

const SelectContent = styled(SelectPrimitive.Content)`
  max-height: 16rem;
  background-color: ${({ theme }) => theme.color.charcoal};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  z-index: 1;
`

const SelectViewport = styled(SelectPrimitive.Viewport)`
  padding: 0.5rem;
`

const StyledSelectItem = styled(SelectPrimitive.Item)`
  color: var(--violet11);
  border-radius: 0.25;
  display: flex;
  align-items: center;
  padding: 0.25rem 0.75rem 0.25rem 0.5rem;
  position: relative;
  user-select: none;
  cursor: pointer;

  &[data-disabled] {
    color: var(--mauve8);
    pointer-events: none;
  }
  &[data-highlighted] {
    outline: none;
    background-color: var(--violet9);
    color: var(--violet1);
  }
`

const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

// .SelectLabel {
//   padding: 0 25px;
//   font-size: 12px;
//   line-height: 25px;
//   color: var(--mauve11);
// }

// .SelectSeparator {
//   height: 1px;
//   background-color: var(--violet6);
//   margin: 5px;
// }

export const Select = forwardRef<
  HTMLButtonElement,
  SelectPrimitive.SelectProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectTrigger ref={forwardedRef}>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <Icon name='chevron-down' />
        </SelectPrimitive.Icon>
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUp>
          <Icon name='chevron-up' />
        </SelectScrollUp>
        <SelectViewport>{children}</SelectViewport>
        <SelectScrollDown>
          <Icon name='chevron-down' />
        </SelectScrollDown>
      </SelectContent>
    </SelectPrimitive.Root>
  )
})

export const SelectItem = forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledSelectItem {...props} ref={forwardedRef}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectItemIndicator>
        <Icon name='check' />
      </SelectItemIndicator>
    </StyledSelectItem>
  )
})
