import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
`

export const PrimaryNav = () => {
  return (
    <StyledHeader>
      <h1>bash.</h1>
      <nav aria-label='bash.'>
        <ul>
          <li>home</li>
          <li>explore</li>
          <li>notifications</li>
          <li>settings</li>
        </ul>
      </nav>
    </StyledHeader>
  )
}
