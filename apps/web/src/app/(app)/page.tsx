'use client'

import styled from 'styled-components'

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 0 max-content auto 0;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: 0 14rem auto 0;
  }
`

const StyledMain = styled.main`
  overflow: hidden;
  display: flex;
  grid-column: 3;
  flex: 1 1 auto;
  flex-direction: column;
  max-height: 100dvh;
  border: solid 0.0125rem ${({ theme }) => theme.color.grey};
  border-top: 0;
  border-bottom: 0;
`

export default function Home() {
  return (
    <StyledLayout>
      <StyledMain>Hello World</StyledMain>
    </StyledLayout>
  )
}
