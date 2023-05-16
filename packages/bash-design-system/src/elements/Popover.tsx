import { forwardRef, ReactNode } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

import { Button, Icon } from './index'

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const StyledPopoverContent = styled(PopoverPrimitive.Content)`
  border-radius: 4px;
  padding: 20px;
  width: 260px;
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &:focus {
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px,
    0 0 0 2px var(--violet7);
  }

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
  fill: white;
`
const PopoverClose = styled(PopoverPrimitive.Close)`
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.color.black};
  position: absolute;
  top: 5px;
  right: 5px;

  &:hover {
    background-color: ${({theme}) => theme.color.black};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({theme}) => theme.color.black}
  }
`

const IconButton = styled(Button)`
  border-radius: 100%;
  height: 35px;
  width: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.color.black};
  background-color: white;
  box-shadow: 0 2px 10px ${({theme}) => rgba(theme.color.black, 0.7)};

  &:hover {
    background-color: var(--violet3);
  }

  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`

type PopoverProps = {
  children: ReactNode | ReactNode[],
  sideOffset: number
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, sideOffset = 5,  ...props }, forwardedRef) => (
    <PopoverPrimitive.Portal>
      <StyledPopoverContent sideOffset={sideOffset} {...props} ref={forwardedRef}>
        {children}
        <PopoverClose aria-label="Close">
          <IconButton><Icon name="close" /></IconButton>
        </PopoverClose>
        <PopoverArrow />
      </StyledPopoverContent>
    </PopoverPrimitive.Portal>
  )
);

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
