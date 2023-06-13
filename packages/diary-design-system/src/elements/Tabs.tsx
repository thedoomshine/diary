import * as TabsPrimitive from '@radix-ui/react-tabs'
import styled from 'styled-components'

const TabsRoot = styled(TabsPrimitive.Root)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0.5rem;
`

const TabsList = styled(TabsPrimitive.List)`
  flex-shrink: 0;
  display: flex;
`

const TabTrigger = styled(TabsPrimitive.Trigger)`
  font-family: inherit;
  padding: 0.5rem 1rem;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  user-select: none;
  cursor: pointer;
  position: relative;
  &:focus-visible {
    position: relative;
    outline: solid 0.0125rem ${({ theme }) => theme.color.yellow};
  }
  &[data-state='active'] {
    font-weight: ${({ theme }) => theme.fontWeight[800]};
  }
`

const TabContent = styled(TabsPrimitive.Content)`
  display: flex;
  flex: 1 1 auto;
  background-color: ${({ theme }) => theme.color.charcoal};
  &[data-state='inactive'] {
    display: none;
  }
`

export { TabsRoot, TabContent, TabTrigger, TabsList }
