import {
  AvatarMenu,
  AvatarMenuContent,
  Button,
  Icon,
} from '@diaryco/design-system'
import { css, cx } from '@diaryco/style-engine/css'
import clsx from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'

import { NAV_LINKS } from '../../@types/routes'
import { ActiveNavLink } from './ActiveNavLink'

const iconStyles = css({
  fontSize: 'xl',
  xl: {
    fontSize: 'lg',
  },
})

const logoStyles = css({
  display: 'none',
  fontSize: 'xxl',
  '& > .accent': {
    color: 'yellow',
  },
  xl: {
    display: 'inline-block',
  },
})

const mobileLogoStyles = cx(
  iconStyles,
  css({
    margin: '0 auto 1rem',
    fontSize: 'xxl',
    xl: {
      display: 'none',
    },
  })
)

const headerStyles = css({
  position: 'relative',
  top: 0,
  display: 'flex',
  gridColumn: 2,
  flex: '0 0 auto',
  flexDirection: 'column',
  height: '100dvh',
  padding: '0.5rem 0.25rem',
  xl: {
    flex: '1 0 auto',
  },
})

const mainHeaderContentStyles = css({
  marginRight: 'auto',
  marginLeft: 'auto',
})

const navStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  fontSize: 'md',
})

const navLinkWrapperStyles = css({
  '& > ul': {
    willChange: 'height',
    overflow: 'hidden',
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 0,
    paddingLeft: 0,
    textAlign: 'center',
    transition: 'height {durations.250} {easings.easeOut}',
    '& > li a': {
      display: 'block',
      padding: '0.5rem 0',
      textDecoration: 'none',
      '&.active': {
        fontWeight: '700',
        textDecoration: 'underline',
      },
    },
  },
  '&:not(:has(> .active)) ul': {
    height: 0,
  },
  '&:has(> .active) ul.visible': {
    height: '6.5rem',
    transitionTimingFunction: '{easings.easeIn}',
  },
  xl: {
    '& > ul': {
      paddingLeft: '2.75rem',
      textAlign: 'left',
      listStyle: 'disc',
    },
  },
})

const avatarMenuStyles = css({
  marginTop: 'auto',
  marginBottom: 0,
})

const avatarMenuContentStyles = css({
  padding: '0.5rem',
})

const signOutButtonStyles = css({
  marginTop: 0,
  padding: '0.25rem 0.75rem 0.25rem 0.5rem',
  fontSize: '{fontSize.md}',
})

const signOutIconStyles = cx(
  iconStyles,
  css({
    marginRight: '0.5rem',
    fontSize: 'lg',
  })
)

interface User {
  display_name: string
  username: string
  birth_date: string
  private: boolean
  profile_image_url?: string
}

interface PrimaryNavProps {
  user: User
  handleSignOut: () => void
}

export const PrimaryNav: FC<PrimaryNavProps> = ({ user, handleSignOut }) => {
  const userNameFirstLetter = user?.display_name.charAt(0).toLocaleLowerCase()

  const getRouteUrl = (name: string, route: string) =>
    name === 'profile' ? `${user.username}` : route

  return (
    <header className={headerStyles}>
      <div className={mainHeaderContentStyles}>
        <h1
          className={logoStyles}
          id='logo'
        >
          diary<span className='accent'>.</span>
        </h1>
        <Icon
          className={mobileLogoStyles}
          name='logo-mobile'
          aria-hidden
        />
        <nav
          className={navStyles}
          aria-labelledby='logo'
        >
          {NAV_LINKS.map(({ icon, name, route, links }) => (
            <div
              className={navLinkWrapperStyles}
              key={name}
            >
              <ActiveNavLink
                href={route}
                icon={icon}
                name={name}
                activeClassName='active'
              />
              <ul
                className={clsx({
                  visible: Boolean(links),
                })}
              >
                {links &&
                  links.map(({ name: linkName, route: linkRoute }) => (
                    <li key={linkName}>
                      <Link href={`${route}${linkRoute}`}>{linkName}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      {user && (
        <AvatarMenu
          className={avatarMenuStyles}
          url={user?.profile_image_url}
          displayName={user?.display_name}
          username={user?.username}
          initials={userNameFirstLetter}
        >
          <AvatarMenuContent className={avatarMenuContentStyles}>
            <Button
              className={signOutButtonStyles}
              onClick={handleSignOut}
            >
              <Icon
                className={signOutIconStyles}
                name='sign-out'
                aria-hidden
              />
              Sign out of @{user?.username}?
            </Button>
          </AvatarMenuContent>
        </AvatarMenu>
      )}
    </header>
  )
}
