import { forwardRef, ReactNode } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import styled from 'styled-components'

import { ButtonStyles, Icon } from '~/elements'
import {
  slideDownAndFade,
  slideUpAndFade,
  slideLeftAndFade,
  slideRightAndFade,
} from '~/utils'

const StyledPopoverContent = styled(PopoverPrimitive.Content)`
  border-radius: 0.5rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.charcoal};
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  z-index: 3;

  width: 100%;

  &[data-state='open'][data-side='top'] {
    animation-name: ${slideDownAndFade};
  }
  &[data-state='open'][data-side='right'] {
    animation-name: ${slideLeftAndFade};
  }
  &[data-state='open'][data-side='bottom'] {
    animation-name: ${slideUpAndFade};
  }
  &[data-state='open'][data-side='left'] {
    animation-name: ${slideRightAndFade};
  }
`

const PopoverArrow = styled(PopoverPrimitive.Arrow)`
  fill: ${({ theme }) => theme.color.charcoal};
`
const StyledPopoverClose = styled(PopoverPrimitive.Close)`
  ${ButtonStyles};
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`

type PopoverProps = {
  children: ReactNode | ReactNode[]
  sideOffset?: number
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, sideOffset = 8, ...props }, forwardedRef) => (
    <PopoverPrimitive.Portal>
      <StyledPopoverContent
        sideOffset={sideOffset}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <PopoverArrow height={8} width={16} />
      </StyledPopoverContent>
    </PopoverPrimitive.Portal>
  )
)

export const PopoverClose = () => (
  <StyledPopoverClose aria-label='Close'>
    <Icon name='close' />
  </StyledPopoverClose>
)

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
