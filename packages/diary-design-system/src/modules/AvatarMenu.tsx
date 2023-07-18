import { FC, ReactNode } from 'react'
import styled from 'styled-components'

import {
  Avatar,
  ButtonStyles,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/elements'

const StyledPopoverTrigger = styled(PopoverTrigger)`
  ${ButtonStyles};
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  gap: 0.25rem;
  padding: 0.5rem;

  border-radius: ${({ theme }) => theme.radii.lg};
  @media ${({ theme }) => theme.breakpoints.xl} {
    justify-content: space-between;
  }
`

const StyledAvatar = styled(Avatar)`
  flex: 0 0 auto;
  width: 1em;
  height: 1em;
  font-size: ${({ theme }) => theme.fontSize.xl};
`

const StyledUserNames = styled.div`
  display: none;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  line-height: 1;

  @media ${({ theme }) => theme.breakpoints.xl} {
    display: flex;
  }
`

const StyledUserDisplayName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

const StyledUsername = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.silver};
`

const StyledIcon = styled(Icon)`
  display: none;
  align-self: center;
  justify-self: flex-end;

  font-size: ${({ theme }) => theme.fontSize.sm};

  @media ${({ theme }) => theme.breakpoints.xl} {
    display: block;
  }
`

interface AvatarMenuProps {
  url?: string
  username?: string
  displayName?: string
  initials?: string
  children?: ReactNode | ReactNode[]
}

export const AvatarMenu: FC<AvatarMenuProps> = ({
  url,
  displayName,
  username,
  initials,
  children,
  ...props
}) => {
  return (
    <Popover>
      <StyledPopoverTrigger {...props}>
        <StyledAvatar
          url={url}
          name={displayName}
          initials={initials}
        />
        <StyledUserNames>
          <StyledUserDisplayName>{displayName}</StyledUserDisplayName>
          <StyledUsername>@{username}</StyledUsername>
        </StyledUserNames>
        <StyledIcon name='ellipses' />
      </StyledPopoverTrigger>
      {children}
    </Popover>
  )
}

export const AvatarMenuContent = PopoverContent
