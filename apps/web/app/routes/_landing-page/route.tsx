import { getAuth } from '@clerk/remix/ssr.server'
import type { LoaderFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { redirect } from '@remix-run/node'

import styled from 'styled-components'

const StyledLayout = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
  max-width: ${({theme}) => theme.size.lg};
`

const StyledMain = styled.main`
  border-top: 0;
  border-bottom: 0;
  flex: 1 1 auto;
  width: 100%;
  padding: ${({theme}) => theme.space.sm};
`

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args)

  if (userId) {
    return redirect('/dashboard', 302)
  }

  return null
}

export default function LandingPageLayout() {
  return (
    <StyledLayout>
      <StyledMain>
        <h1>Landing Page</h1>
        <Outlet />
      </StyledMain>
    </StyledLayout>
  )
}
