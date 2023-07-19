import * as TabsPrimitive from '@radix-ui/react-tabs'
import styled, { type IStyledComponent } from 'styled-components'

const TabsRoot: IStyledComponent<
  'web',
  TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>
> = styled(TabsPrimitive.Root)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.md};
`

const TabsList = styled(TabsPrimitive.List)`
  display: flex;
  flex-shrink: 0;
`

const TabsTrigger = styled(TabsPrimitive.Trigger)`
  cursor: pointer;
  user-select: none;

  position: relative;

  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem;

  font-family: inherit;
  line-height: ${({ theme }) => theme.lineHeight.element};
  &:focus-visible {
    position: relative;
    outline: solid 0.0125rem ${({ theme }) => theme.color.yellow};
  }
  &[data-state='active'] {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`

const TabsContent = styled(TabsPrimitive.Content)`
  display: flex;
  flex: 1 1 auto;
  background-color: ${({ theme }) => theme.color.charcoal};
  &[data-state='inactive'] {
    display: none;
  }
`

export { TabsRoot, TabsContent, TabsTrigger, TabsList }
