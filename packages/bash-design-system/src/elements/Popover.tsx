import { forwardRef, ReactNode } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import styled, { keyframes } from 'styled-components'

import { ButtonStyles, Icon } from './index'

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.125rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-0.125rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-0.125rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(0.125rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const StyledPopoverContent = styled(PopoverPrimitive.Content)`
  border-radius: 0.5rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.charcoal};
  box-shadow: hsl(206 22% 7% / 35%) 0 0.5rem 2rem -0.5rem,
    hsl(206 22% 7% / 20%) 0 0.5rem 1.5rem -1rem;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  width: 100%;

  /* &:focus {
    box-shadow: hsl(206 22% 7% / 35%) 0 0.5rem 2rem -0.5rem, hsl(206 22% 7% / 20%) 0 0.5rem 1.5rem -1rem,
    0 0 0 0.125rem ${({ theme }) => theme.color.purple};
  } */

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
