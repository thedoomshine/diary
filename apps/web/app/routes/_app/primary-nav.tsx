import type { FC } from 'react'
import { NavLink } from '@remix-run/react'
import styled from 'styled-components'

import { Avatar, Icon, ButtonStyles, Selectors } from '@bash/design-system'
import type { User } from '@clerk/remix/api.server'

const StyledIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSize['2']};
  @media ${({ theme }) => theme.media.lg} {
    font-size: inherit;
  }
`

const StyledLogo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['4']};
  display: none;
  @media ${({ theme }) => theme.media.lg} {
    display: inline-block;
  }
`

const StyledMobileLogo = styled(StyledIcon)`
  margin: 0 auto 1rem;
  @media ${({ theme }) => theme.media.lg} {
    display: none;
  }
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: ${({theme}) => theme.space.sm};
  height: 100%;
  @media ${({ theme }) => theme.media.lg} {
    width: 100%;
    max-width: 12rem;
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  padding: 0.25rem;
  position: relative;
  margin-top: .25rem;

  @media ${({ theme }) => theme.media.lg} {
    padding: 0.25rem 0.75rem 0.25rem .5rem;
  }
`

const StyledNavIcon = styled(StyledIcon)`
  @media ${({ theme }) => theme.media.lg} {
    margin-right: .5em;
  }
`

const StyledLinkName = styled.span`
  display: none;
  @media ${({ theme }) => theme.media.lg} {
    display: inline-block;
  }
`

const LINKS = [
  {
    name: 'home',
    route: '/dashboard',
    icon: 'home'
  },
  {
    name: 'explore',
    route: '/explore',
    icon: 'bullhorn'
  },
  {
    name: 'notifications',
    route: '/notifications',
    icon: 'bell'
  },
  {
    name: 'bookmarks',
    route: '/bookmarks',
    icon: 'bookmark'
  },
  {
    name: 'settings',
    route: '/settings',
    icon: 'gear'
  }
]

interface PrimaryNavProps {
  user: User
}

export const PrimaryNav: FC<PrimaryNavProps> = ({ user }) => {
  console.log(user)
  return (
    <StyledHeader>
      <StyledLogo id="logo">bash.</StyledLogo>
      <StyledMobileLogo name='logo-mobile' aria-hidden />
      <StyledNav aria-labelledby="logo">
        {LINKS.map(({icon, name, route}) => (
          <StyledNavLink key={name} to={`${route}`}>
            {({ isActive }) => (
              <>
                <StyledNavIcon name={isActive ? `${icon}-filled` : icon} aria-hidden />
                <StyledLinkName>{name}</StyledLinkName>
              </>
              )}
          </StyledNavLink>
        ))}
        {user && (
          <Avatar url={user?.experimental_imageUrl} name={`${user?.firstName} ${user?.lastName}`} />
        )}
      </StyledNav>
    </StyledHeader>
  )
}
