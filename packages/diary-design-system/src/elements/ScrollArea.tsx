import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { type ReactNode } from 'react'
import styled from 'styled-components'

const ScrollAreaRoot = styled(ScrollAreaPrimitive.Root)`
  --scrollbar-size: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`

const ScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: ${({ theme }) => theme.spacing[4]};

  &[data-orientation='vertical'] {
    width: var(--scrollbar-size);
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: var(--scrollbar-size);
  }
`

const ScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb)`
  flex: 1;
  background: ${({ theme }) => theme.color.grey};
  border-radius: ${({ theme }) => theme.radii.sm};
  position: relative;

  &:hover {
    background: ${({ theme }) => theme.color.silver};
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 2.75rem;
    min-height: 2.75rem;
  }
`

const ScrollAreaCorner = styled(ScrollAreaPrimitive.Corner)``

export const ScrollArea = ({
  className,
  children,
  type = 'hover',
  ...props
}: {
  children: ReactNode
  className?: string
  type?: 'auto' | 'always' | 'scroll' | 'hover'
  scrollHideDelay?: number
  dir?: 'ltr' | 'rtl'
}) => (
  <ScrollAreaRoot
    className={className}
    type={type}
    {...props}
  >
    <ScrollAreaViewport>{children}</ScrollAreaViewport>
    <ScrollAreaScrollbar orientation='vertical'>
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation='horizontal'>
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
)
