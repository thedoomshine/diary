import * as AvatarPrimitive from '@radix-ui/react-avatar'
import type { FC } from 'react'
import styled from 'styled-components'

const AvatarRoot = styled(AvatarPrimitive.Root)`
  user-select: none;

  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1 / 1;
  width: 1em;
  height: 1em;

  font-size: ${({ theme }) => theme.fontSize.xl};
  vertical-align: middle;

  background-color: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.radii.full};
`

const AvatarImage = styled(AvatarPrimitive.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`

const AvatarFallback = styled(AvatarPrimitive.Fallback)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: ${({ theme }) => theme.lineHeight.element};
  color: ${({ theme }) => theme.color.purple};

  background-color: ${({ theme }) => theme.color.charcoal};
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
    <AvatarFallback delayMs={600}>{initials}</AvatarFallback>
  </AvatarRoot>
)
