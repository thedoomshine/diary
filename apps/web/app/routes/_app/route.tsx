import { useEffect, useState } from 'react'
import { json, redirect } from '@remix-run/node'
import { parse } from 'cache-control-parser'
import { Outlet, useFetcher, useLoaderData } from '@remix-run/react'
import type { SupabaseClient } from '@supabase/auth-helpers-remix'
import { createBrowserClient } from '@supabase/auth-helpers-remix'

import type { LoaderFunction, Session, HeadersFunction } from '@remix-run/node'

import styled from 'styled-components'

import { PrimaryNav } from './primary-nav'
import type { Database } from '~/services/db.server'
import { createServerClient } from '~/services/db.server'
import { ROUTES } from '../_auth/@types'

const StyledLayout = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
  max-width: ${({ theme }) => theme.size.xl};
`

const StyledMain = styled.main`
  border: solid 0.0125rem ${({ theme }) => theme.color.grey};
  border-top: 0;
  border-bottom: 0;
  flex: 1 1 auto;
  width: 100%;
  padding: ${({ theme }) => theme.space.sm};
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

  const { data } = await db
    .from('profiles')
    .select('display_name, username, profile_image_url')
    .match({ id: session.user.id })

  return json(
    { user: data![0], session, env },
    {
      headers: response.headers,
    }
  )
}

export default function AppLayout() {
  const { env, session, user } = useLoaderData<typeof loader>()
  const refreshFetcher = useFetcher()

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

  return (
    <StyledLayout>
      <PrimaryNav user={user} handleSignOut={handleSignOut} />
      <StyledMain>
        <Outlet context={{ db, session }} />
      </StyledMain>
    </StyledLayout>
  )
}
