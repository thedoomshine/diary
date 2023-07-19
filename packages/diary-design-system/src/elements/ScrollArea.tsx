import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { type ReactNode } from 'react'
import styled from 'styled-components'

const ScrollAreaRoot = styled(ScrollAreaPrimitive.Root)`
  --scrollbar-size: 1rem;

  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;

  & > div,
  & > div > div {
    width: 100%;
    height: 100%;
  }
`

const ScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar)`
  touch-action: none;
  user-select: none;
  display: flex;
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
  position: relative;
  flex: 1;
  background: ${({ theme }) => theme.color.grey};
  border-radius: ${({ theme }) => theme.radii.sm};

  &::before {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    min-width: 2.75rem;
    height: 100%;
    min-height: 2.75rem;
  }

  &:hover {
    background: ${({ theme }) => theme.color.silver};
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
