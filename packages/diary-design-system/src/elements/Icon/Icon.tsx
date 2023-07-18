import clsx from 'clsx'
import React, { type CSSProperties } from 'react'
import styled from 'styled-components'

import { IconNames, Icons } from './Library'

interface IconProperties {
  className?: string
  style?: Record<string, CSSProperties>
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

  aspect-ratio: 1 / 1;

  fill: currentcolor;
  stroke: currentcolor;
  stroke-width: 0;
`

export const Icon: React.FC<IconProperties> = ({
  className,
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
      className={clsx('icon', className)}
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
