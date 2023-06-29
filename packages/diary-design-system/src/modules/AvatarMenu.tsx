import { FC, ReactNode } from 'react'

import { Avatar } from '~/elements/Avatar'
import { buttonStyles } from '~/elements/Button'
import { Icon } from '~/elements/Icon/Icon'
import { Popover, PopoverContent, PopoverTrigger } from '~/elements/Popover'

import { css, cx } from '@diaryco/style-engine/css'

const popoverTriggerStyles = cx(buttonStyles(), css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  borderRadius: 'lg',
}))

const avatarStyles = css({
  flex: '0 0 auto',
  width: '1em',
  height: '1em',
  fontSize: 'xl',
})

const usernameContainerStyles = css({
  display: 'none',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginLeft: '0.5rem',
  lineHeight: 'element',
  xl: {
    display: 'flex',
  }
})

const userDisplayNameStyles = css({
  fontSize: 'md',
  fontWeight: '700',
})

const usernameStyles = css({
  fontSize: 'sm',
  color: 'silver',
})

const iconStyles = css({
  display: 'none',
  alignSelf: 'center',
  justifySelf: 'flex-end',
  marginRight: '0.25rem',
  fontSize: 'sm',
  xl: {
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
      <PopoverTrigger className={cx(popoverTriggerStyles, className)} {...props}>
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
        <Icon className={iconStyles} name='ellipses' />
      </PopoverTrigger>
      {children}
    </Popover>
  )
}

export const AvatarMenuContent = PopoverContent
