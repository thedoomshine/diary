import { FC, ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import styled from 'styled-components'

import {
  slideDownAndFade,
  slideUpAndFade,
  slideLeftAndFade,
  slideRightAndFade,
} from '~/utils'

const TooltipContent = styled(TooltipPrimitive.Content)`
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  will-change: transform, opacity;
  z-index: 3;

  &[data-side='top'] {
    animation-name: ${slideDownAndFade};
  }
  &[data-side='right'] {
    animation-name: ${slideLeftAndFade};
  }
  &[data-side='bottom'] {
    animation-name: ${slideUpAndFade};
  }
  &[data-side='left'] {
    animation-name: ${slideRightAndFade};
  }
`

const TooltipArrow = styled(TooltipPrimitive.Arrow)`
  fill: ${({ theme }) => theme.color.black};
`

interface TooltipProps {
  align?: 'start' | 'center' | 'end'
  alignOffset?: number
  children: ReactNode | ReactNode[]
  content: string
  defaultOpen?: boolean
  delayDuration?: number
  onOpenChange?: (open: boolean) => void
  open?: boolean
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
}

export const Tooltip: FC<TooltipProps> = ({
  align = 'center',
  alignOffset = 0,
  children,
  content,
  defaultOpen,
  delayDuration = 800,
  onOpenChange,
  open,
  side = 'top',
  sideOffset = 0,
  ...props
}) => {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipContent
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        {...props}
      >
        {content}
        <TooltipArrow height={8} width={16} />
      </TooltipContent>
    </TooltipPrimitive.Root>
  )
}

export const TooltipProvider = TooltipPrimitive.Provider
