import * as PopoverPrimitive from '@radix-ui/react-popover'
import type { PopoverContentProps as PopoverContentPrimitiveProps } from '@radix-ui/react-popover'
import { ReactNode, forwardRef } from 'react'
import styled from 'styled-components'

import { ButtonStyles, Icon } from '~/elements'

const StyledPopoverContent = styled(PopoverPrimitive.Content)`
  will-change: transform, opacity;

  z-index: ${({ theme }) => theme.zIndex.popover};

  width: 100%;
  padding: 2rem;

  background-color: ${({ theme }) => `var(
    --popover-background-color, ${theme.color.charcoal})`};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadow.normal};

  animation-duration: ${({ theme }) => theme.duration[250]};
  animation-timing-function: ${({ theme }) => theme.easeOutQuart};

  &[data-state='open'][data-side='top'] {
    animation-name: ${({ theme }) => theme.keyframes.slideDownAndFade};
  }

  &[data-state='open'][data-side='right'] {
    animation-name: ${({ theme }) => theme.keyframes.slideLeftAndFade};
  }

  &[data-state='open'][data-side='bottom'] {
    animation-name: ${({ theme }) => theme.keyframes.slideUpAndFade};
  }

  &[data-state='open'][data-side='left'] {
    animation-name: ${({ theme }) => theme.keyframes.slideRightAndFade};
  }
`

const PopoverArrow = styled(PopoverPrimitive.Arrow)`
  fill: ${({ theme }) => `var(
    --popover-background-color, ${theme.color.charcoal})`};
  position: relative;
  top: -${({ theme }) => theme.spacing[2]};
`
const StyledPopoverClose = styled(PopoverPrimitive.Close)`
  ${ButtonStyles};
  padding: 0.5rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.color.white};
`

export const PopoverTrigger = styled(PopoverPrimitive.Trigger)`
  cursor: pointer;
  &[data-state='open'] {
    border-color: ${({ theme }) => theme.color.yellow};
  }
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
