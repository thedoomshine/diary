import { json, redirect } from "@remix-run/node"
import { Outlet, useLoaderData } from '@remix-run/react'

import type { LoaderFunction } from "@remix-run/node"

import { createServerClient } from '../../utils/db.server'

import styled from 'styled-components'
import { PrimaryNav } from './primary-nav'

import { ROUTES } from "../@types"

const StyledLayout = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
  max-width: ${({theme}) => theme.size.xl};
`

const StyledMain = styled.main`
  border: solid 0.0125rem ${({ theme }) => theme.color.white};
  border-top: 0;
  border-bottom: 0;
  flex: 1 1 auto;
  width: 100%;
  padding: ${({theme}) => theme.space.sm};
`

export const loader: LoaderFunction = async ({ request }) => {
  const response = new Response()
  const supabase = createServerClient({ request, response })

  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (!session) {
    return redirect(ROUTES.SIGN_IN, {
      headers: response.headers
    })
  }

  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)

  return json(
    { user: data, session },
    {
      headers: response.headers
    }
  )
}

export default function AppLayout() {
  const {user} = useLoaderData()
  console.log(user)

  return (
    <StyledLayout>
      <PrimaryNav user={user} />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledLayout>
  )
}
