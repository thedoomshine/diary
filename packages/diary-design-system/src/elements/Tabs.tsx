import type { TabsContentProps, TabsListProps, TabsProps, TabsTriggerProps } from '@radix-ui/react-tabs'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { type FC } from 'react'

import { css, cx } from 'style-engine/css'

const tabsRootStyles = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderRadius: 'md',
})

const tabListStyles = css({
  display: 'flex',
  flexShrink: 0,
})

const tabTriggerStyles = css({
  fontFamily: 'inherit',
  padding: '0.5rem 1rem',
  flex: '1 0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 'element',
  userSelect: 'none',
  cursor: 'pointer',
  position: 'relative',
  '&:focus-visible': {
    position: 'relative',
    outline: 'solid 0.0125rem {colors.yellow}',
  },
  '&[data-state="active"]': {
    fontWeight: '700',
  },
})

const tabContentStyles = css({
  display: 'flex',
  flex: '1 1 auto',
  backgroundColor: 'charcoal',
  '&[data-state="inactive"]': {
    display: 'none',
  },
})

export const TabsRoot: FC<TabsProps> = ({ className, ...props }) => (
  <TabsPrimitive.Root className={cx(tabsRootStyles, className)} {...props} />
)

export const TabsContent: FC<TabsContentProps> = ({ className, ...props }) => (
  <TabsPrimitive.Content className={cx(tabContentStyles, className)} {...props} />
)

export const TabsTrigger: FC<TabsTriggerProps> = ({ className, ...props }) => (
  <TabsPrimitive.Trigger className={cx(tabTriggerStyles, className)} {...props} />
)

export const TabsList: FC<TabsListProps> = ({ className, ...props }) => (
  <TabsPrimitive.List className={cx(tabListStyles, className)} {...props} />
)
