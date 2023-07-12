'use client'

import { Avatar, Icon, OutlineButton } from '@diaryco/design-system'
import { atom, useAtom } from 'jotai'
import Link from 'next/link'
import { useEffect } from 'react'
import styled from 'styled-components'

import { APP_ROUTES } from '~/@types'
import {
  userResponseSuccess,
  getUser,
} from '~/utils'

const StyledContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`

const UserProfileContainer = styled.div``

const ProfileHeaderImage = styled.div`
  aspect-ratio: 2/1;
  background-color: ${({ theme }) => theme.color.grey};

  @media ${({ theme }) => theme.breakpoints.md} {
    aspect-ratio: 4/1;
  }
`

const UserProfileHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 4.35rem;
  padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[16]}`};
`

const UserAvatarWrapper = styled.div`
  position: relative;
`

const UserAvatar = styled(Avatar)`
  position: absolute;
  bottom: 0;
  font-size: 12rem;
  border: solid 0.25rem ${({ theme }) => theme.color.black};
`

const UserNames = styled.div`
  padding: ${({ theme }) => `0 ${theme.spacing[16]} ${theme.spacing[8]}`};
`

const UserProfileDetails = styled.div`
  padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[16]}`};
  color: ${({ theme }) => theme.color.silver};
  border-bottom: solid 0.0125rem ${({ theme }) => theme.color.grey};
`

const UserBio = styled.div`
  max-width: ${({ theme }) => theme.size.lg};
`

const UserLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[8]};
  align-items: center;

  max-width: ${({ theme }) => theme.size.lg};
  margin-top: ${({ theme }) => theme.spacing[4]};

  p {
    display: flex;
    align-items: center;

    svg {
      margin-right: ${({ theme }) => theme.spacing[2]};
    }
  }
`

const UserNotFound = styled.div`
  flex: 1 1 auto;
  align-self: center;
  max-width: ${({ theme }) => theme.size.lg};
  margin-top: 4rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    line-height: 1;
  }

  p {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`

const userAtom = atom<userResponseSuccess | null>(null)

export default function UserProfile({
  params: { username },
}: {
  params: { username: string }
}) {
  const [user, setUser] = useAtom(userAtom)
  const userExists = user !== null && 'username' in user
  const isCurrentUser = userExists && user.username === username

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const { data } = await getUser(username)
      if (data !== null) {
        setUser(data[0])
      }
    }

    fetchCurrentUser()
  }, [setUser])

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
            maybe try <Link href={APP_ROUTES.EXPLORE}>searching again</Link>?
          </p>
        </UserNotFound>
      )}
    </StyledContainer>
  )
}
