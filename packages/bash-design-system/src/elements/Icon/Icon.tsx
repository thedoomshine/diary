import React from 'react'
import styled from 'styled-components'
import { Icons, IconNames } from './Library'

interface IconProperties {
  className?: string
  viewBox?: string
  title?: string
  role?: string
  size?: '16' | '24' | '32' | '40' | '64'
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
  viewBox,
  title,
  name,
  ...props
}) => {
  const iconName = name as IconNames
  const icon = Icons[iconName]

  return (
    <StyledSVG viewBox={viewBox} {...props}>
      {title && <title>{title}</title>}
      {icon}
    </StyledSVG>
  )
}

Icon.defaultProps = {
  viewBox: '0 0 32 32',
  size: '32',
  role: 'img',
}
