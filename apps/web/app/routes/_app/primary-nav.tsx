import type { FC } from 'react'
import { NavLink } from '@remix-run/react'
import styled from 'styled-components'

import {
  AvatarMenu,
  AvatarMenuContent,
  Icon,
  Button,
  ButtonStyles,
  Selectors,
} from '@diary/design-system'

import { NAV_LINKS } from '../types'
import cn from 'classnames'

const StyledIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  @media ${({ theme }) => theme.media.xl} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`

const StyledLogo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  display: none;
  .accent {
    color: ${({ theme }) => theme.color.yellow};
  }
  @media ${({ theme }) => theme.media.xl} {
    display: inline-block;
  }
`

const StyledMobileLogo = styled(StyledIcon)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin: 0 auto 1rem;
  @media ${({ theme }) => theme.media.xl} {
    display: none;
  }
`

const StyledHeader = styled.header`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.xs}`};
  position: relative;
  top: 0;
  height: 100vh;
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
  &:not(:has(> .active)) ul {
    height: 0;
  }

  &:has(> .active) ul.visible {
    height: 6.5rem;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  }

  ul {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    height: 0;
    justify-content: flex-start;
    overflow: hidden;
    padding-left: 0;
    transition: height 250ms cubic-bezier(0, 0, 0.2, 1);
    will-change: height;
    text-align: center;

    li a {
      display: block;
      text-decoration: none;
      padding: 0.5rem 0;
      &.active {
        font-weight: ${({ theme }) => theme.fontWeight['800']};
        text-decoration: underline;
      }
    }
  }

  @media ${({ theme }) => theme.media.xl} {
    ul {
      padding-left: 2.75rem;
      list-style: disc;
      text-align: left;
    }
  }
`

const StyledNavLink = styled(NavLink)`
  ${ButtonStyles};
  ${Selectors.VISITED} {
    color: ${({ theme }) => theme.color.white};
  }
  ${Selectors.HOVER} {
    color: ${({ theme }) => theme.color.white};
  }
  ${Selectors.ACTIVE} {
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;
  }
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  position: relative;

  margin-top: 0.5em;

  @media ${({ theme }) => theme.media.xl} {
    padding: 0.25rem 0.75rem 0.25rem 0.5rem;
  }
`

const StyledNavIcon = styled(StyledIcon)`
  @media ${({ theme }) => theme.media.xl} {
    margin-right: 0.5em;
  }
`

const StyledLinkName = styled.span`
  display: none;
  @media ${({ theme }) => theme.media.xl} {
    display: inline-block;
    position: relative;

    &:after {
      content: attr(title);
      font-weight: ${({ theme }) => theme.fontWeight['800']};
      visibility: hidden;
      overflow: hidden;
      display: block;
      height: 1px;
      color: transparent;
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
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: 0.25rem 0.75rem 0.25rem 0.5rem;
  margin-top: 0;
`

const SignOutIcon = styled(StyledIcon)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin-right: 0.5rem;
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
        <StyledMobileLogo name='logo-mobile' aria-hidden />
        <StyledNav aria-labelledby='logo'>
          {NAV_LINKS.map(({ icon, name, route, links }) => (
            <NavLinkWrapper key={name}>
              <StyledNavLink to={getRouteUrl(name, route)} prefetch='intent'>
                {({ isActive }) => (
                  <>
                    <StyledNavIcon
                      name={isActive ? `${icon}-filled` : icon}
                      aria-hidden
                    />
                    <StyledLinkName title={name}>{name}</StyledLinkName>
                  </>
                )}
              </StyledNavLink>
              <ul
                className={cn({
                  visible: Boolean(links),
                })}
              >
                {links &&
                  links.map(({ name: linkName, route: linkRoute }) => (
                    <li key={linkName}>
                      <NavLink to={`${route}${linkRoute}`}>{linkName}</NavLink>
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
              <SignOutIcon name='sign-out' aria-hidden />
              Sign out of @{user?.username}?
            </SignOutButton>
          </StyledAvatarMenuContent>
        </StyledAvatarMenu>
      )}
    </StyledHeader>
  )
}
