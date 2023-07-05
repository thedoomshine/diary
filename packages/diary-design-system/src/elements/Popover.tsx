import type { PopoverContentProps as PopoverContentPrimitiveProps } from '@radix-ui/react-popover'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { style } from '@vanilla-extract/css'
import clsx from 'clsx'
import { ReactNode, forwardRef } from 'react'

import { themeVars } from '~/foundation/theme.css'

import { buttonVariantStyles } from './Button'
import { Icon } from './Icon/Icon'

const popoverContentStyles = style({
  willChange: 'transform, opacity',
  zIndex: themeVars.zIndex.popover,
  width: '100%',
  padding: '2rem',
  backgroundColor: themeVars.color.charcoal,
  borderRadius: themeVars.radii.md,
  boxShadow: themeVars.shadow.normal,
  animationDuration: themeVars.duration[500],
  animationTimingFunction: themeVars.easing.easeOutQuart,
  selectors: {
    '&[data-state="open"][data-side="top"]': {
      animationName: themeVars.keyframes.slideDownAndFade,
    },
    '&[data-state="open"][data-side="right"]': {
      animationName: themeVars.keyframes.slideLeftAndFade,
    },
    '&[data-state="open"][data-side="bottom"]': {
      animationName: themeVars.keyframes.slideUpAndFade,
    },
    '&[data-state="open"][data-side="left"]': {
      animationName: themeVars.keyframes.slideRightAndFade,
    },
  },
})

const popoverArrowStyles = style({
  fill: themeVars.color.charcoal,
})

const popoverCloseStyles = style([
  buttonVariantStyles.icon,
  {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    color: themeVars.color.white,
  },
])

export interface PopoverProps extends PopoverContentPrimitiveProps {
  children?: ReactNode | ReactNode[]
  sideOffset?: number
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, sideOffset = 8, className, ...props }, forwardedRef) => (
    <PopoverPrimitive.Content
      className={clsx(popoverContentStyles, className)}
      ref={forwardedRef}
      sideOffset={sideOffset}
      {...props}
    >
      {children}
      <PopoverPrimitive.Arrow
        className={popoverArrowStyles}
        height={12}
        width={24}
      />
    </PopoverPrimitive.Content>
  )
)

export const PopoverClose = () => (
  <PopoverPrimitive.Close
    className={popoverCloseStyles}
    aria-label='Close'
  >
    <Icon name='close' />
  </PopoverPrimitive.Close>
)

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
