import type { PopoverContentProps as PopoverContentPrimitiveProps } from '@radix-ui/react-popover';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { ReactNode, forwardRef } from 'react';

import { css, cx } from 'style-engine/css';
import { buttonStyles } from './Button';
import { Icon } from './Icon/Icon';

const popoverContentStyles = css({
  willChange: 'transform, opacity',
  zIndex: 'popover',
  width: '100%',
  padding: '2rem',
  backgroundColor: 'charcoal',
  borderRadius: 'md',
  boxShadow: 'normal',
  animationDuration: '500',
  animationTimingFunction: 'easeOutQuart',
  '&[data-state="open"][data-side="top"]': {
    animationName: 'slideDownAndFade',
  },
  '&[data-state="open"][data-side="right"]': {
    animationName: 'slideLeftAndFade',
  },
  '&[data-state="open"][data-side="bottom"]': {
    animationName: 'slideUpAndFade',
  },
  '&[data-state="open"][data-side="left"]': {
    animationName: 'slideRightAndFade',
  },
})

const popoverArrowStyles = css({
  fill: 'charcoal',
})

const popoverCloseStyles = cx(buttonStyles({ type: 'icon' }), css({
  position: 'absolute',
  top: '0.5rem',
  right: '0.5rem',
  color: 'white',
}))

export interface PopoverProps extends PopoverContentPrimitiveProps {
  children?: ReactNode | ReactNode[]
  sideOffset?: number
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, sideOffset = 8, className, ...props }, forwardedRef) => (
    <PopoverPrimitive.Content
      className={cx(popoverContentStyles, className)}
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
  <PopoverPrimitive.Close className={popoverCloseStyles} aria-label='Close'>
    <Icon name='close' />
  </PopoverPrimitive.Close>
)

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
