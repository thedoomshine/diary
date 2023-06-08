import React from 'react'
import styled from 'styled-components'

import { IconNames, Icons } from './Library'

interface IconProperties {
  className?: string
  viewBox?: string
  title?: string
  role?: string
  name: string
}

const StyledSVG = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1em;
  height: 1em;

  fill: currentcolor;
  stroke: currentcolor;
  stroke-width: 0;
`

export const Icon: React.FC<IconProperties> = ({
  viewBox = '0 0 32 32',
  title,
  name,
  role = 'img',
  ...props
}) => {
  const iconName = name as IconNames
  const icon = Icons[iconName]

  return (
    <StyledSVG
      viewBox={viewBox}
      role={role}
      fill='none'
      {...props}
    >
      {title && <title>{title}</title>}
      {icon}
    </StyledSVG>
  )
}
