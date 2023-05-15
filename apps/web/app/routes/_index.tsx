import { NavLink } from '@remix-run/react'

import styled from 'styled-components'
import { ButtonStyles } from '@bash/design-system'

const StyledLayout = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
  max-width: ${({theme}) => theme.size.lg};
`

const StyledMain = styled.main`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  padding: ${({theme}) => theme.space.sm};
`

const StyledNavLink = styled(NavLink)`
  ${ButtonStyles};
  flex: 0 1 auto;
  align-self: center;
  justify-self: center;
`

export default function LandingPage() {
  return (
    <StyledLayout>
      <StyledMain>
        <h1>Landing Page</h1>
        <StyledNavLink to="/login">Login</StyledNavLink>
        <StyledNavLink to="/sign-up">Sign Up</StyledNavLink>
      </StyledMain>
    </StyledLayout>
  )
}