import type { TooltipProps as TooltipPrimitiveProps } from '@radix-ui/react-tooltip'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { FC, ReactNode } from 'react'

import { css } from '@diaryco/style-engine/css'

const tooltipContentStyles = css({
  willChange: 'transform, opacity',
  zIndex: 'tooltip',
  padding: '0.5em 1em',
  fontSize: 'sm',
  backgroundColor: 'black',
  borderRadius: 'md',
  boxShadow: 'normal',
  animationDuration: '500',
  animationTimingFunction: 'easeOutQuart',
  '&[data-side="top"]': {
    animationName: 'slideDownAndFade',
  },
  '&[data-side="right"]': {
    animationName: 'slideLeftAndFade',
  },
  '&[data-side="bottom"]': {
    animationName: 'slideUpAndFade',
  },
  '&[data-side="left"]': {
    animationName: 'slideRightAndFade',
  },
})

const toolTipArrowStyles = css({
  fill: 'black',
})

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
      <TooltipPrimitive.Content
        className={tooltipContentStyles}
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        {...props}
      >
        {content}
        <TooltipPrimitive.Arrow
          className={toolTipArrowStyles}
          height={8}
          width={16}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  )
}

export const TooltipProvider = TooltipPrimitive.Provider
