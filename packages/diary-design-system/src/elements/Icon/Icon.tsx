import React from 'react'
import clsx from 'clsx'
import { css } from '~/style-engine/css'

import { IconNames, Icons } from './Library'

interface IconProperties {
  className?: string
  viewBox?: string
  title?: string
  role?: string
  name: string
}

const iconStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1em',
  height: '1em',
  fill: 'currentcolor',
})

export const Icon: React.FC<IconProperties> = ({
  viewBox = '0 0 32 32',
  title,
  name,
  role = 'img',
  className,
  ...props
}) => {
  const iconName = name as IconNames
  const icon = Icons[iconName]

  return (
    <svg
      className={clsx(iconStyles, className)}
      viewBox={viewBox}
      role={role}
      fill='none'
      {...props}
    >
      {title && <title>{title}</title>}
      {icon}
    </svg>
  )
}
