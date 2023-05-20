import { FC, ReactNode } from 'react'
import { Avatar, ButtonStyles, Popover, PopoverContent, PopoverTrigger } from '../elements'

import styled from 'styled-components'

const StyledPopoverTrigger = styled(PopoverTrigger)`
  ${ButtonStyles};
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0.5rem;
`

const StyledAvatar = styled(Avatar)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  height: 1em;
  width: 1em;
  flex: 0 0 auto;
`

const StyledUserNames = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1 1 auto;
  margin-left: 0.5rem;
  line-height: 1;

  @media ${({ theme }) => theme.media.lg} {
    display: flex;
  }
`

const StyledUserDisplayName = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight[800]};
  font-size: ${({ theme }) => theme.fontSize.md};
`

const StyledUsername = styled.span`
  color: ${({ theme }) => theme.color.silver};
  font-size: ${({theme}) => theme.fontSize.sm};
`

interface AvatarMenuProps {
  url?: string
  username?: string
  displayName?: string
  initials?: string
  children?: ReactNode | ReactNode[]
}

export const AvatarMenu: FC<AvatarMenuProps> = ({ url, displayName, username, initials, children, ...props }) => {
  return (
    <Popover>
      <StyledPopoverTrigger {...props}>
        <StyledAvatar url={url} name={displayName} initials={initials} />
        <StyledUserNames>
          <StyledUserDisplayName>{displayName}</StyledUserDisplayName>
          <StyledUsername>@{username}</StyledUsername>
        </StyledUserNames>

      </StyledPopoverTrigger>
      {children}
    </Popover>
  )
}

export const AvatarMenuContent = PopoverContent