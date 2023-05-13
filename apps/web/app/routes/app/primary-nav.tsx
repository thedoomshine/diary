import { NavLink } from '@remix-run/react'
import { rgba } from 'polished'
import styled from 'styled-components'

import { Icon } from '@bash/design-system'

const StyledLogo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['4']};
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  max-width: 14rem;
  height: 100%;
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  padding: 0.25rem .75rem 0.25rem .5rem;
  margin-top: .25rem;
  display: flex;
  flex: 0 0 auto;
  border-radius: .5rem;
  align-items: center;
  & .active {
    color: ${({ theme }) => theme.color.blue}
  }
  &:visited {
    color: unset;
  }
  &:hover {
    color: ${({ theme }) => theme.color.yellow};
    background-color: ${({ theme}) => rgba(theme.color.white, .05)};
  }
`

const StyledIcon = styled(Icon)`
  margin-right: .5em;
`

const LINKS = [
  {
    name: 'home',
    route: '/',
    icon: 'home'
  },{
    name: 'explore',
    route: '/explore',
    icon: 'bullhorn'
  },{
    name: 'notifications',
    route: '/notifications',
    icon: 'bell'
  },{
    name: 'settings',
    route: '/settings',
    icon: 'sliders'
  }
]

export const PrimaryNav = () => {
  return (
    <StyledHeader>
      <StyledLogo id="logo">bash.</StyledLogo>
      <StyledNav aria-labelledby="logo">
        {LINKS.map(({icon, name, route}) => (
          <StyledNavLink key={name} to={`/app${route}`}>
            <StyledIcon name={icon} aria-hidden />
            {name}
          </StyledNavLink>
        ))}
      </StyledNav>
    </StyledHeader>
  )
}
