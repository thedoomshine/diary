import type { FC } from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import styled from 'styled-components'

const AvatarRoot = styled(AvatarPrimitive.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.black};
`

const AvatarImage = styled(AvatarPrimitive.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`

const AvatarFallback = styled(AvatarPrimitive.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize['0']};
  line-height: 1;
  font-weight: 500;
`

interface AvatarProps {
  url?: string
  name?: string
  initials?: string
}

export const Avatar: FC<AvatarProps> = ({ url, name, initials, ...props }) => (
  <AvatarRoot {...props}>
    <AvatarImage
      src={url}
      alt={name}
    />
    <AvatarFallback delayMs={600}>
      {initials}
    </AvatarFallback>
  </AvatarRoot>
);
