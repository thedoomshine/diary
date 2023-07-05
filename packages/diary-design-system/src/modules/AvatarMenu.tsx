import { style } from '@vanilla-extract/css'
import { FC, ReactNode } from 'react'

import { Avatar } from '~/elements/Avatar'
import { buttonStyles } from '~/elements/Button'
import { Icon } from '~/elements/Icon/Icon'
import { Popover, PopoverContent, PopoverTrigger } from '~/elements/Popover'
import { themeVars } from '~/foundation/theme.css'

const popoverTriggerStyles = style([
  buttonStyles,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: themeVars.radii.lg,
  },
])

const avatarStyles = style({
  flex: '0 0 auto',
  width: '1em',
  height: '1em',
  fontSize: themeVars.fontSize.xl,
})

const usernameContainerStyles = style({
  display: 'none',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginLeft: '0.5rem',
  lineHeight: themeVars.lineHeight.element,
  [`@media screen and ${themeVars.breakpoints.xl}`]: {
    display: 'flex',
  },
})

const userDisplayNameStyles = style({
  fontSize: themeVars.fontSize.md,
  fontWeight: themeVars.fontWeight.bold,
})

const usernameStyles = style({
  fontSize: themeVars.fontSize.sm,
  color: themeVars.color.silver,
})

const iconStyles = style({
  display: 'none',
  alignSelf: 'center',
  justifySelf: 'flex-end',
  marginRight: '0.25rem',
  fontSize: themeVars.fontSize.sm,
  [`@media screen and ${themeVars.breakpoints.xl}`]: {
    display: 'block',
  },
})

interface AvatarMenuProps {
  url?: string
  username?: string
  displayName?: string
  initials?: string
  children?: ReactNode | ReactNode[]
  className?: string
}

export const AvatarMenu: FC<AvatarMenuProps> = ({
  url,
  displayName,
  username,
  initials,
  children,
  className,
  ...props
}) => {
  return (
    <Popover>
      <PopoverTrigger
        className={cx(popoverTriggerStyles, className)}
        {...props}
      >
        <Avatar
          className={avatarStyles}
          url={url}
          name={displayName}
          initials={initials}
        />
        <div className={usernameContainerStyles}>
          <span className={userDisplayNameStyles}>{displayName}</span>
          <span className={usernameStyles}>@{username}</span>
        </div>
        <Icon
          className={iconStyles}
          name='ellipses'
        />
      </PopoverTrigger>
      {children}
    </Popover>
  )
}

export const AvatarMenuContent = PopoverContent
