import { getAuth } from "@clerk/remix/ssr.server"
import type { LoaderFunction} from "@remix-run/node"
import { redirect } from "@remix-run/node"

import { Outlet } from '@remix-run/react'
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
  } else {
    return redirect('/dashboard', 302)
  }
}

export default () => {
  return (
    <StyledLayout>
      <PrimaryNav />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledLayout>
  )
}
