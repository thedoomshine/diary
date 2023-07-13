import { ButtonStyles, Icon, OutlineButtonStyles } from '@diaryco/design-system'
import Link from 'next/link'
import styled from 'styled-components'

import { AUTH_ROUTES } from '~/@types'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`

const StyledLogo = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
`

const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

const StyledLink = styled(Link)`
  ${ButtonStyles};
  flex: 0 1 auto;
  padding: 0.25rem 0.5rem;
`

const StyledSignInLink = styled(StyledLink)``

const StyledSignUpLink = styled(StyledLink)`
  ${OutlineButtonStyles};
  padding: 0.25rem 0.5rem;
`

export const PageHeader = () => {
  return (
    <StyledHeader>
      <Link href='/'>
        <StyledLogo name='logo-mobile' />
      </Link>
      <StyledButtonsContainer>
        <StyledSignInLink href={AUTH_ROUTES.SIGN_IN}>sign in</StyledSignInLink>
        <StyledSignUpLink href={AUTH_ROUTES.SIGN_UP}>sign up</StyledSignUpLink>
      </StyledButtonsContainer>
    </StyledHeader>
  )
}
