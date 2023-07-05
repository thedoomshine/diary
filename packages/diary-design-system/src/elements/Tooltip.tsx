import type { TooltipProps as TooltipPrimitiveProps } from '@radix-ui/react-tooltip'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { style } from '@vanilla-extract/css'
import { FC, ReactNode } from 'react'

import { themeVars } from '~/foundation/theme.css'

const tooltipContentStyles = style({
  willChange: 'transform, opacity',
  zIndex: themeVars.zIndex.tooltip,
  padding: '0.5em 1em',
  fontSize: themeVars.fontSize.sm,
  backgroundColor: themeVars.color.black,
  borderRadius: themeVars.radii.md,
  boxShadow: themeVars.shadow.normal,
  animationDuration: themeVars.duration[500],
  animationTimingFunction: themeVars.easing.easeOutQuart,
  selectors: {
    '&[data-side="top"]': {
      animationName: themeVars.keyframes.slideDownAndFade,
    },
    '&[data-side="right"]': {
      animationName: themeVars.keyframes.slideLeftAndFade,
    },
    '&[data-side="bottom"]': {
      animationName: themeVars.keyframes.slideUpAndFade,
    },
    '&[data-side="left"]': {
      animationName: themeVars.keyframes.slideRightAndFade,
    },
  },
})

const toolTipArrowStyles = style({
  fill: themeVars.color.black,
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
