import { createClerkClient } from '@clerk/remix/api.server'
import { getAuth } from "@clerk/remix/ssr.server"
import type { LoaderFunction} from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { Outlet, useLoaderData } from '@remix-run/react'


import styled from 'styled-components'
import { PrimaryNav } from './primary-nav'

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

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args)

  if (!userId) {
    return redirect('/sign-in', 302)
  }

  const user = await createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY
  }).users.getUser(userId)

  return { serializedUser: JSON.stringify(user) }
}

export default function AppLayout() {
  const user = useLoaderData()
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
