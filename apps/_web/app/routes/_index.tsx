import { ButtonStyles, OutlineButtonStyles } from '@diaryco/design-system'
import { NavLink } from '@remix-run/react'
import type { LoaderFunction } from '@vercel/remix'
import { json, redirect } from '@vercel/remix'
import styled from 'styled-components'

import { createServerClient } from '~/services/db.server'

import { ROUTES } from './types'

const StyledLayout = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  max-width: ${({ theme }) => theme.size.xl};
  min-height: 100%;
  margin: 0 auto;
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
  flex: 1 1 auto;
  flex-direction: column;
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
    return redirect(ROUTES.CALENDAR, {
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
