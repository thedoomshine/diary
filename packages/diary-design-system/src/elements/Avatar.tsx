import * as AvatarPrimitive from '@radix-ui/react-avatar'
import type { FC } from 'react'

import { css, cx } from '~/style-engine/css'

const avatarRootStyles = css({
  userSelect: 'none',
  overflow: 'hidden',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: '1',
  width: '1em',
  height: '1em',
  fontSize: 'xl',
  verticalAlign: 'middle',
  backgroundColor: 'black',
  borderRadius: 'full',
})

const avatarImageStyles = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const avatarFallbackStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  fontSize: 'md',
  fontWeight: '400',
  lineHeight: '1',
  color: 'yellow',
  backgroundColor: 'charcoal',
})

interface AvatarProps {
  className?: string
  url?: string
  name?: string
  initials?: string
}

export const Avatar: FC<AvatarProps> = ({ className, url, name, initials, ...props }) => (
  <AvatarPrimitive.Root className={cx(avatarRootStyles, className)} {...props}>
    <AvatarPrimitive.Image
      className={avatarImageStyles}
      src={url}
      alt={name}
    />
    <AvatarPrimitive.Fallback className={avatarFallbackStyles} delayMs={600}>{initials}</AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
)
