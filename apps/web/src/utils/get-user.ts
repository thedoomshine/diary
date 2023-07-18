import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { Database } from '~/@types'

export const getCurrentUser = async () => {
  const db = createClientComponentClient<Database>()

  const {
    data
  } = await db.auth.getSession()

  return await db
    .from('users')
    .select('display_name, username, profile_image_url')
    .match({ id: data?.session?.user?.id })
}

export type CurrentUserResponse = Awaited<ReturnType<typeof getCurrentUser>>
export type CurrentUserResponseSuccess = NonNullable<CurrentUserResponse['data']>[number]
export type CurrentUserResponseError = CurrentUserResponse['error']


export const getUser = async (username: string) => {
  const db = createClientComponentClient<Database>()

  return await db
    .from('users')
    .select(
      'id, display_name, username, profile_image_url, bio, location, website'
    )
    .match({ username })
}

export type userResponse = Awaited<ReturnType<typeof getUser>>
export type userResponseSuccess = NonNullable<userResponse['data']>[number]
export type userResponseError = CurrentUserResponse['error']
