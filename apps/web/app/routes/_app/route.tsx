import { useEffect, useState } from 'react'
import { json, redirect } from '@remix-run/node'
import type { LoaderFunction, Session, HeadersFunction } from '@remix-run/node'
import { parse } from 'cache-control-parser'
import {
  Outlet,
  useFetcher,
  useLoaderData,
  useSearchParams,
} from '@remix-run/react'
import { createBrowserClient } from '@supabase/auth-helpers-remix'
import type { SupabaseClient } from '@supabase/auth-helpers-remix'

import styled from 'styled-components'

import { NewEventModal } from '../_app.event.create/modal'
import { PrimaryNav } from './primary-nav'
import type { Database } from '~/services/db.server'
import { createServerClient } from '~/services/db.server'
import { ROUTES } from '../types'
import { cache } from '~/utils'

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 0 max-content auto 0;
  width: 100%;

  @media ${({ theme }) => theme.media.xl} {
    grid-template-columns: 0 14rem auto 0;
  }
`

const StyledMain = styled.main`
  grid-column: 3;
  display: flex;
  flex-direction: column;
  border: solid 0.0125rem ${({ theme }) => theme.color.grey};
  border-top: 0;
  border-bottom: 0;
  flex: 1 1 auto;
  max-height: 100vh;
  overflow: hidden;
`

export type TypedSupabaseClient = SupabaseClient<Database>
export type MaybeSession = Session | null

export type DBContext = {
  db: TypedSupabaseClient
  session: MaybeSession
}

export const headers: HeadersFunction = ({ loaderHeaders, parentHeaders }) => {
  const loaderCache = parse(loaderHeaders.get('Cache-Control') || '') || 0
  const parentCache = parse(parentHeaders.get('Cache-Control') || '') || 0

  const maxAge = Math.min(loaderCache['max-age']!, parentCache['max-age']!)

  return {
    'Cache-Control': `max-age=${maxAge}`,
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const env = {
    SUPABASE_API_URL: process.env.SUPABASE_API_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  }
  const response = new Response()
  const db = createServerClient({ request, response })

  const {
    data: { session },
  } = await db.auth.getSession()

  if (!session) {
    return redirect(ROUTES.SIGN_IN, {
      headers: response.headers,
    })
  }

  const responseObj = {
    session,
    env,
  }

  const headerObj = {
    headers: response.headers,
  }

  if (cache.has('current_user')) {
    return json({ user: cache.get('current_user'), ...responseObj }, headerObj)
  }

  const { data } = await db
    .from('users')
    .select('display_name, username, profile_image_url')
    .match({ id: session.user.id })

  if (data && data[0]) {
    cache.set('current_user', data![0], 60 * 60 * 24)
    return json({ user: data![0], ...responseObj }, headerObj)
  }
  return null
}

export default function AppLayout() {
  const { env, session, user } = useLoaderData<typeof loader>()
  const refreshFetcher = useFetcher()
  const [searchParams] = useSearchParams()

  const [db] = useState(() =>
    createBrowserClient(env.SUPABASE_API_URL, env.SUPABASE_ANON_KEY)
  )

  const serverAccessToken = session?.access_token

  useEffect(() => {
    const {
      data: { subscription },
    } = db.auth.onAuthStateChange((_, session) => {
      if (
        session?.access_token !== serverAccessToken &&
        refreshFetcher.state === 'idle'
      ) {
        refreshFetcher.submit(null, {
          method: 'post',
          action: '/refresh-auth',
        })
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [serverAccessToken, db, refreshFetcher])

  const handleSignOut = async () => {
    const { error } = await db.auth.signOut()

    if (error) {
      console.log(error)
    }
  }

  const showModal = Boolean(searchParams.get('new_event'))

  return (
    <StyledLayout>
      <PrimaryNav user={user} handleSignOut={handleSignOut} />
      <StyledMain>
        <Outlet context={{ db, session }} />
        {showModal && <NewEventModal isOpen={showModal} />}
      </StyledMain>
    </StyledLayout>
  )
}
