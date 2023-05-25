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
} from '@bash/design-system'

import { NAV_LINKS } from '../_auth/@types'

const StyledIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  @media ${({ theme }) => theme.media.lg} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`

const StyledLogo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  display: none;
  .accent {
    color: ${({ theme }) => theme.color.yellow};
  }
  @media ${({ theme }) => theme.media.lg} {
    display: inline-block;
  }
`

const StyledMobileLogo = styled(StyledIcon)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin: 0 auto 1rem;
  @media ${({ theme }) => theme.media.lg} {
    display: none;
  }
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.xs}`};
  position: relative;
  height: 100%;
  @media ${({ theme }) => theme.media.lg} {
    width: 100%;
    max-width: 14rem;
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: ${({ theme }) => theme.fontSize.md};
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

  @media ${({ theme }) => theme.media.lg} {
    padding: 0.25rem 0.75rem 0.25rem 0.5rem;
  }
`

const StyledNavIcon = styled(StyledIcon)`
  @media ${({ theme }) => theme.media.lg} {
    margin-right: 0.5em;
  }
`

const StyledLinkName = styled.span`
  display: none;
  @media ${({ theme }) => theme.media.lg} {
    display: inline-block;
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

  return (
    <StyledHeader>
      <StyledLogo id='logo'>
        bash<span className='accent'>.</span>
      </StyledLogo>
      <StyledMobileLogo name='logo-mobile' aria-hidden />
      <StyledNav aria-labelledby='logo'>
        {NAV_LINKS.map(({ icon, name, route }) => (
          <StyledNavLink key={name} to={`${route}`} prefetch='intent'>
            {({ isActive }) => (
              <>
                <StyledNavIcon
                  name={isActive ? `${icon}-filled` : icon}
                  aria-hidden
                />
                <StyledLinkName>{name}</StyledLinkName>
              </>
            )}
          </StyledNavLink>
        ))}
      </StyledNav>
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
