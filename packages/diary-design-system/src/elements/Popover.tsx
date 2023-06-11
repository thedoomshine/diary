import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { PopoverContentProps as PopoverContentPrimitiveProps } from '@radix-ui/react-popover'
import { ReactNode, forwardRef } from 'react'
import styled from 'styled-components'

import { ButtonStyles, Icon } from '~/elements'
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from '~/utils'

const StyledPopoverContent = styled(PopoverPrimitive.Content)`
  will-change: transform, opacity;

  z-index: 4;

  width: 100%;
  padding: 2rem;

  background-color: ${({ theme }) => `var(
    --popover-background-color, ${theme.color.charcoal})`};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 50%);

  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

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
  fill: ${({ theme }) => `var(
    --popover-background-color, ${theme.color.charcoal})`};
`
const StyledPopoverClose = styled(PopoverPrimitive.Close)`
  ${ButtonStyles};
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.color.white};
`

export interface PopoverProps extends PopoverContentPrimitiveProps {
  children?: ReactNode | ReactNode[]
  sideOffset?: number
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, sideOffset = 8, ...props }, forwardedRef) => (
    <StyledPopoverContent
      ref={forwardedRef}
      sideOffset={sideOffset}
      {...props}
    >
      {children}
      <PopoverArrow
        height={12}
        width={24}
      />
    </StyledPopoverContent>
  )
)

export const PopoverClose = () => (
  <StyledPopoverClose aria-label='Close'>
    <Icon name='close' />
  </StyledPopoverClose>
)

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
