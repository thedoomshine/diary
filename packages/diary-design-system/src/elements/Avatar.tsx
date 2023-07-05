import * as AvatarPrimitive from '@radix-ui/react-avatar'
import type { FC } from 'react'

import clsx from 'clsx'

import { style } from '@vanilla-extract/css'
import { themeVars } from '~/foundation/theme.css'

const avatarRootStyles = style({
  userSelect: 'none',
  overflow: 'hidden',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: '1',
  width: '1em',
  height: '1em',
  fontSize: themeVars.fontSize.xl,
  verticalAlign: 'middle',
  backgroundColor: themeVars.color.black,
  borderRadius: themeVars.radii.full,
})

const avatarImageStyles = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const avatarFallbackStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  fontSize: themeVars.fontSize.md,
  fontWeight: '400',
  lineHeight: themeVars.lineHeight.element,
  color: themeVars.color.yellow,
  backgroundColor: themeVars.color.charcoal,
})

interface AvatarProps {
  className?: string
  url?: string
  name?: string
  initials?: string
}

export const Avatar: FC<AvatarProps> = ({ className, url, name, initials, ...props }) => (
  <AvatarPrimitive.Root className={clsx(avatarRootStyles, className)} {...props}>
    <AvatarPrimitive.Image
      className={avatarImageStyles}
      src={url}
      alt={name}
    />
    <AvatarPrimitive.Fallback className={avatarFallbackStyles} delayMs={600}>{initials}</AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
)
