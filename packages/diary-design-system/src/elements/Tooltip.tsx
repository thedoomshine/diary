import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { TooltipProps as TooltipPrimitiveProps } from '@radix-ui/react-tooltip'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const TooltipTrigger = styled(TooltipPrimitive.Trigger)`
  &[data-state='open'] {
    border-color: ${({ theme }) => theme.color.yellow};
  }
`

const TooltipContent = styled(TooltipPrimitive.Content)`
  will-change: transform, opacity;

  z-index: ${({ theme }) => theme.zIndex.toolTip};

  padding: 0.5em 1em;

  font-size: ${({ theme }) => theme.fontSize.sm};

  background-color: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadow.normal};

  animation-duration: ${({ theme }) => theme.duration[250]};
  animation-timing-function: ${({ theme }) => theme.easing.easeOutQuart};

  &[data-side='top'] {
    animation-name: ${({ theme }) => theme.keyframes.slideDownAndFade};
  }

  &[data-side='right'] {
    animation-name: ${({ theme }) => theme.keyframes.slideLeftAndFade};
  }

  &[data-side='bottom'] {
    animation-name: ${({ theme }) => theme.keyframes.slideUpAndFade};
  }

  &[data-side='left'] {
    animation-name: ${({ theme }) => theme.keyframes.slideRightAndFade};
  }
`

const TooltipArrow = styled(TooltipPrimitive.Arrow)`
  fill: ${({ theme }) => theme.color.black};
`

interface TooltipProps extends TooltipPrimitiveProps {
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
  sideOffset = 4,
  ...props
}) => {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
    >
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        {...props}
      >
        {content}
        <TooltipArrow
          height={8}
          width={16}
        />
      </TooltipContent>
    </TooltipPrimitive.Root>
  )
}

export const TooltipProvider = TooltipPrimitive.Provider
