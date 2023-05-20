import { NavLink } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'

import styled from 'styled-components'
import { ButtonStyles, OutlineButtonStyles } from '@bash/design-system'
import { createServerClient } from '~/services/db.server'
import { ROUTES } from './_auth/@types'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
  max-width: ${({ theme }) => theme.size.xl};
`

const StyledHeader = styled.header`
  display: flex;
  padding: 0.5rem;
`

const StyledButtonsContainer = styled.div`
  display: flex;
  margin-right: 0;
  margin-left: auto;
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  padding: ${({ theme }) => theme.space.sm};
`

const StyledNavLink = styled(NavLink)`
  ${ButtonStyles};
  flex: 0 1 auto;
  padding: 0.25rem 0.5rem;
  &:last-of-type {
    margin-left: 0.5rem;
  }
`

const StyledSignInLink = styled(StyledNavLink)``

const StyledSignUpLink = styled(StyledNavLink)`
  ${OutlineButtonStyles};
  padding: 0.25rem 0.5rem;
`

export const loader: LoaderFunction = async ({ request }) => {
  const response = new Response()
  const db = createServerClient({ request, response })

  const {
    data: { session },
  } = await db.auth.getSession()

  if (session) {
    return redirect(ROUTES.DASHBOARD, {
      headers: response.headers,
    })
  }

  return json({
    headers: response.headers,
  })
}

export default function LandingPage() {
  return (
    <StyledLayout>
      <StyledHeader>
        <StyledButtonsContainer>
          <StyledSignInLink to='/sign-in'>sign in</StyledSignInLink>
          <StyledSignUpLink to='/sign-up'>sign up</StyledSignUpLink>
        </StyledButtonsContainer>
      </StyledHeader>
      <StyledMain>
        <h1>landing page</h1>
      </StyledMain>
    </StyledLayout>
  )
}
