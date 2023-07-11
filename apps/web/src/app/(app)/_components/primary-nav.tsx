'use client'

import {
  AvatarMenu,
  AvatarMenuContent,
  Button,
  ButtonStyles,
  Icon,
} from '@diaryco/design-system'
import clsx from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styled from 'styled-components'

import { NAV_LINKS } from '../../../@types/routes'
import { ActiveNavLink } from './active-nav-link'

const StyledIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSize.xl};

  @media ${({ theme }) => theme.media.xl} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`

const StyledLogo = styled.h1`
  display: none;
  font-size: ${({ theme }) => theme.fontSize.xxl};

  .accent {
    color: ${({ theme }) => theme.color.yellow};
  }

  @media ${({ theme }) => theme.media.xl} {
    display: inline-block;
  }
`

const StyledMobileLogo = styled(StyledIcon)`
  margin: 0 auto 1rem;
  font-size: ${({ theme }) => theme.fontSize.xxl};

  @media ${({ theme }) => theme.media.xl} {
    display: none;
  }
`

const StyledHeader = styled.header`
  position: relative;
  top: 0;

  display: flex;
  grid-column: 2;
  flex: 0 0 auto;
  flex-direction: column;

  height: 100dvh;
  padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[4]}`};

  @media ${({ theme }) => theme.media.xl} {
    flex: 1 0 auto;

    /* max-width: 14rem; */
  }
`

const MainHeaderContent = styled.div`
  margin-right: auto;
  margin-left: auto;
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: ${({ theme }) => theme.fontSize.md};
`

const NavLinkWrapper = styled.div`
  ul {
    will-change: height;

    overflow: hidden;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: flex-start;

    height: 0;
    padding-left: 0;

    text-align: center;

    transition: height 250ms cubic-bezier(0, 0, 0.2, 1);

    li a {
      display: block;
      padding: 0.5rem 0;
      text-decoration: none;

      &.active {
        font-weight: ${({ theme }) => theme.fontWeight['800']};
        text-decoration: underline;
      }
    }
  }

  &:not(:has(> .active)) ul {
    height: 0;
  }

  &:has(> .active) ul.visible {
    height: 6.5rem;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  }

  @media ${({ theme }) => theme.media.xl} {
    ul {
      padding-left: 2.75rem;
      text-align: left;
      list-style: disc;
    }
  }
`

const StyledAvatarMenu = styled(AvatarMenu)`
  margin-top: auto;
  margin-bottom: 0;
`

const StyledAvatarMenuContent = styled(AvatarMenuContent)`
  padding: 0.5rem;
`

const SignOutButton = styled(Button)`
  margin-top: 0;
  padding: 0.25rem 0.75rem 0.25rem 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.md};
`

const SignOutIcon = styled(StyledIcon)`
  margin-right: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
`

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
    <StyledHeader>
      <MainHeaderContent>
        <StyledLogo id='logo'>
          diary<span className='accent'>.</span>
        </StyledLogo>
        <StyledMobileLogo
          name='logo-mobile'
          aria-hidden
        />
        <StyledNav aria-labelledby='logo'>
          {NAV_LINKS.map(({ icon, name, route, links }) => (
            <NavLinkWrapper key={name}>
              <ActiveNavLink
                href={getRouteUrl(name, route)}
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
                      <Link href={getRouteUrl(linkName, linkRoute)}>
                        {linkName}
                      </Link>
                    </li>
                  ))}
              </ul>
            </NavLinkWrapper>
          ))}
        </StyledNav>
      </MainHeaderContent>
      {user && (
        <StyledAvatarMenu
          url={user?.profile_image_url}
          displayName={user?.display_name}
          username={user?.username}
          initials={userNameFirstLetter}
        >
          <StyledAvatarMenuContent>
            <SignOutButton onClick={handleSignOut}>
              <SignOutIcon
                name='sign-out'
                aria-hidden
              />
              Sign out of @{user?.username}?
            </SignOutButton>
          </StyledAvatarMenuContent>
        </StyledAvatarMenu>
      )}
    </StyledHeader>
  )
}
