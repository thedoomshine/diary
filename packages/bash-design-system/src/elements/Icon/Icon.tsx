import React from 'react'
import styled from 'styled-components'
import { Icons, IconNames } from './Library'

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
  height: 1em;
  width: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
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
    <StyledSVG viewBox={viewBox} role={role} {...props}>
      {title && <title>{title}</title>}
      {icon}
    </StyledSVG>
  )
}
