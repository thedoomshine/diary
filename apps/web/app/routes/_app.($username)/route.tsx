import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { NavLink, useLoaderData } from '@remix-run/react'
import { Avatar, Icon, OutlineButton } from '@diary/design-system'

import styled from 'styled-components'

import { createServerClient } from '~/services'
import { APP_ROUTES } from '../types'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

const UserProfileContainer = styled.div``

const ProfileHeaderImage = styled.div`
  aspect-ratio: 2/1;
  background-color: ${({ theme }) => theme.color.grey};

  @media ${({ theme }) => theme.media.md} {
    aspect-ratio: 4/1;
  }
`

const UserProfileHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.sm}`};
  height: 4.35rem;
`

const UserAvatarWrapper = styled.div`
  position: relative;
`

const UserAvatar = styled(Avatar)`
  border: solid 0.25rem ${({ theme }) => theme.color.black};
  font-size: 12rem;
  position: absolute;
  bottom: 0;
`

const UserNames = styled.div`
  padding: ${({ theme }) => `0 ${theme.space.sm} ${theme.space.xxs}`};
`

const UserProfileDetails = styled.div`
  border-bottom: solid 0.0125rem ${({ theme }) => theme.color.grey};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  color: ${({ theme }) => theme.color.silver};
`

const UserBio = styled.div`
  max-width: ${({ theme }) => theme.size.lg};
`

const UserLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.space.xs};
  max-width: ${({ theme }) => theme.size.lg};
  flex-flow: row wrap;
  gap: ${({ theme }) => theme.space.xxs} ${({ theme }) => theme.space.sm};

  p {
    display: flex;
    align-items: center;

    svg {
      margin-right: ${({ theme }) => theme.space.xxxs};
    }
  }
`

const UserNotFound = styled.div`
  flex: 1 1 auto;
  max-width: ${({ theme }) => theme.size.lg};
  margin-top: 4rem;
  align-self: center;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    line-height: 1;
  }

  p {
    padding: ${({ theme }) => theme.space.xs};
  }
`

export const loader: LoaderFunction = async ({ request, params }) => {
  const response = new Response()
  const db = createServerClient({ request, response })

  const {
    data: { session },
  } = await db.auth.getSession()

  const { data } = await db
    .from('users')
    .select(
      'id, display_name, username, profile_image_url, bio, location, website'
    )
    .match({ username: params.username })

  const userData = data?.[0]

  const { id, ...user } = userData || {}
  const isCurrentUser = id === session?.user?.id

  return json(
    {
      user: user,
      username: params.username,
      session,
      isCurrentUser,
    },
    {
      headers: response.headers,
    }
  )
}

export default () => {
  const { user, username, isCurrentUser } = useLoaderData()
  const userExists = 'username' in user

  return (
    <StyledContainer>
      <UserProfileContainer>
        <ProfileHeaderImage></ProfileHeaderImage>
        <UserProfileHead>
          <UserAvatarWrapper>
            <UserAvatar
              url={user?.profile_image_url}
              name={user?.display_name}
            />
          </UserAvatarWrapper>
          {userExists && (
            <OutlineButton>
              {isCurrentUser ? `edit profile` : `follow`}
            </OutlineButton>
          )}
        </UserProfileHead>
        <UserNames>
          <h4>{userExists ? user.display_name : `@${username}`}</h4>
          <p>{userExists && `@${username}`}</p>
        </UserNames>
        {userExists && (
          <UserProfileDetails>
            <UserBio>{user?.bio}</UserBio>
            <UserLinks>
              {user.location && (
                <p>
                  <Icon name='location' />
                  {user.location}
                </p>
              )}
              {user.website && (
                <p>
                  <Icon name='link' />
                  <a href={user.website}>{user.website}</a>
                </p>
              )}
            </UserLinks>
          </UserProfileDetails>
        )}
      </UserProfileContainer>
      {!userExists && (
        <UserNotFound>
          <h2>sorry, this user does not exist.</h2>
          <p>
            maybe try <NavLink to={APP_ROUTES.EXPLORE}>searching again</NavLink>
            ?
          </p>
        </UserNotFound>
      )}
    </StyledContainer>
  )
}
