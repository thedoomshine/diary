'use client'

import styled from 'styled-components'
import { PageHeader } from '../_components'

const StyledLayout = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  max-width: ${({ theme }) => theme.size.md};
  min-height: 100%;
  width: 100%;
  margin: 0 auto;
`

const StyledMain = styled.main`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing[8]};
`

export default function MarketingLayout({ children }: { children: React.ReactNode}) {
  return (
    <StyledLayout>
      <PageHeader />
      <StyledMain>
        {children}
      </StyledMain>
    </StyledLayout>
  )
}
