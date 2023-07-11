'use client'

import { ButtonStyles, OutlineButtonStyles } from '@diaryco/design-system'

import Link from 'next/link'

import styled from 'styled-components'

import { AUTH_ROUTES } from '~/@types'

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
  padding: ${({ theme }) => theme.spacing[8]};
`

const StyledLink = styled(Link)`
  ${ButtonStyles};
  flex: 0 1 auto;
  padding: 0.25rem 0.5rem;

  &:last-of-type {
    margin-left: 0.5rem;
  }
`

const StyledSignInLink = styled(StyledLink)``

const StyledSignUpLink = styled(StyledLink)`
  ${OutlineButtonStyles};
  padding: 0.25rem 0.5rem;
`

export default function MarketingLayout({ children }: { children: React.ReactNode}) {
  return (
    <StyledLayout>
      <StyledHeader>
        <StyledButtonsContainer>
          <StyledSignInLink href={AUTH_ROUTES.SIGN_IN}>sign in</StyledSignInLink>
          <StyledSignUpLink href={AUTH_ROUTES.SIGN_UP}>sign up</StyledSignUpLink>
        </StyledButtonsContainer>
      </StyledHeader>
      <StyledMain>
        {children}
      </StyledMain>
    </StyledLayout>
  )
}
