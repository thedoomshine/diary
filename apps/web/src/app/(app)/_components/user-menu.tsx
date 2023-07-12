'use client'

import {
  AvatarMenu,
  AvatarMenuContent,
  Button,
  Icon,
  Skeleton,
} from '@diaryco/design-system'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import styled from 'styled-components'

import { AUTH_ROUTES } from '~/@types'
import { CurrentUserResponseSuccess } from '~/utils'

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

const SignOutIcon = styled(Icon)`
  margin-right: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
`

export const UserMenu = ({ user }: { user: CurrentUserResponseSuccess }) => {
  const db = createClientComponentClient()

  const userNameFirstLetter = user?.display_name.charAt(0).toLocaleLowerCase()

  const handleSignOut = async () => {
    await db
      .auth
      .signOut()
    redirect(AUTH_ROUTES.SIGN_IN)
  }

  return !user ? (
    <Skeleton
      style={{ flex: '1 1 auto' }}
      circle
    />
  ) : (
    <StyledAvatarMenu
      url={user?.profile_image_url ?? undefined}
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
  )
}
