import type {
  TabsContentProps,
  TabsListProps,
  TabsProps,
  TabsTriggerProps,
} from '@radix-ui/react-tabs'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { style } from '@vanilla-extract/css'
import clsx from 'clsx'
import { type FC } from 'react'

import { themeVars } from '~/foundation/theme.css'

const tabsRootStyles = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderRadius: themeVars.radii.md,
})

const tabListStyles = style({
  display: 'flex',
  flexShrink: 0,
})

const tabTriggerStyles = style({
  fontFamily: 'inherit',
  padding: '0.5rem 1rem',
  flex: '1 0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: themeVars.lineHeight.element,
  userSelect: 'none',
  cursor: 'pointer',
  position: 'relative',
  selectors: {
    '&:focus-visible': {
      position: 'relative',
      outline: `solid 0.0125rem ${themeVars.color.yellow}}`,
    },
    '&[data-state="active"]': {
      fontWeight: themeVars.fontWeight.bold,
    },
  },
})

const tabContentStyles = style({
  display: 'flex',
  flex: '1 1 auto',
  backgroundColor: themeVars.color.charcoal,
  selectors: {
    '&[data-state="inactive"]': {
      display: 'none',
    },
  },
})

export const TabsRoot: FC<TabsProps> = ({ className, ...props }) => (
  <TabsPrimitive.Root
    className={clsx(tabsRootStyles, className)}
    {...props}
  />
)

export const TabsContent: FC<TabsContentProps> = ({ className, ...props }) => (
  <TabsPrimitive.Content
    className={clsx(tabContentStyles, className)}
    {...props}
  />
)

export const TabsTrigger: FC<TabsTriggerProps> = ({ className, ...props }) => (
  <TabsPrimitive.Trigger
    className={clsx(tabTriggerStyles, className)}
    {...props}
  />
)

export const TabsList: FC<TabsListProps> = ({ className, ...props }) => (
  <TabsPrimitive.List
    className={clsx(tabListStyles, className)}
    {...props}
  />
)
