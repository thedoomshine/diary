import React from 'react'

import { Icons, IconNames } from './Library'

interface IconProperties {
  className?: string
  viewBox?: string
  title?: string
  role?: string
  size?: '16' | '24' | '32' | '40' | '64'
  name: string
}

export const Icon: React.FC<IconProperties> = ({
  viewBox,
  title,
  size,
  name,
  ...props
}) => {
  const iconName = name as IconNames
  const icon = Icons[iconName]

  return (
    <svg width={size} height={size} viewBox={viewBox} {...props}>
      {title && <title>{title}</title>}
      {icon}
    </svg>
  )
}

Icon.defaultProps = {
  viewBox: '0 0 32 32',
  size: '32',
  role: 'img',
}
