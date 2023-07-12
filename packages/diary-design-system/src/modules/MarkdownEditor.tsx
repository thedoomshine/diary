import type { ChangeEvent } from 'react'
import styled from 'styled-components'

import { TabsContent, TabsTrigger, TabsList, TabsRoot } from '~/elements/Tabs'

const StyledTabs = styled(TabsRoot)`
  min-height: 32rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`

const StyledTabsList = styled(TabsList)`
  margin: 0 0.75rem;
  bottom: ${({ theme }) =>theme.spacing[1]};
  position: relative;
  z-index: 1;
`

const StyledTabTrigger = styled(TabsTrigger)`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  position: relative;
  &[data-state='active'] {
    background-color: ${({ theme }) => theme.color.charcoal};
    border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-color: transparent;
  }

  &::after {
    content: attr(data-title);

    overflow: hidden;
    display: block;

    height: 1px;

    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: transparent;

    visibility: hidden;
  }
`

const StyledTabContent = styled(TabsContent)`
  position: relative;
  padding: 0.75rem 0.5rem 0.55rem;
  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.color.charcoal};
  max-height: 20rem;
  overflow: auto;
`

const Textarea = styled.textarea`
  position: relative;
  overflow: hidden;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  padding: 1rem;
  font-size: inherit;
  color-scheme: dark;
  border-radius: ${({ theme }) => theme.radii.md};
  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
  overflow: auto;
`

const MarkdownPreview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  white-space: pre-wrap;
  width: 100%;
  height: 100%;
  position: relative;
  word-wrap: break-word;
  line-height: 1.5;

  & > :first-child {
    margin-top: 0 !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-bottom: 0.3em;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    line-height: 1.15;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    border-bottom: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    display: inline-flex;
    margin-top: 0;
    margin-bottom: 0;
  }

  ul {
    list-style-type: disc;
  }

  ul ul {
    list-style-type: circle;
  }

  ol {
    list-style-type: none;
    counter-reset: item;
    margin: 0;
    padding: 0;
    li {
      counter-increment: item;
      &::marker {
        content: counters(item, ".") ". ";
      }
      ol li::marker {
        content: counters(item, ".") " ";
      }
    }
  }

  ol,
  ul {
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  li {
    display: list-item;
  }

  strong {
    font-weight: ${({ theme }) => theme.fontWeight[800]};
  }

  em {
    font-style: italic;
  }

  blockquote {
    display: flex;
    flex-direction: column;
    border-left: solid 0.25rem ${({ theme }) => theme.color.grey};
    padding-left: 0.5rem;
    & > :last-child {
      margin-bottom: 0;
    }
  }

  hr {
    height: 0.25em;
    padding: 0;
    margin: 2rem 0;
    background-color: ${({ theme }) => theme.color.grey};
  }
`

// type Emoji = {
//   key: string
//   emoji: string
// }

// function SuggestionList({ items }: { items: Array<Emoji> }) {
//   return (
//     <ul>
//       {items.map(({ key, emoji }: Emoji) => (
//         <li
//           key={key}
//           role='option'
//           data-value={key}
//         >
//           <span>{emoji}</span> {key}
//         </li>
//       ))}
//     </ul>
//   )
// }

// function searchEmoji(key: string, text: string) {
//   if (key === ':') {
//     const emojiList = nodeEmoji.search(text)
//     if (emojiList.length === 0) {
//       return Promise.resolve({ matched: false })
//     }
//     return Promise.resolve({
//       matched: true,
//       fragment: <SuggestionList items={emojiList.slice(0, 5)} />,
//     })
//   }
//   return Promise.resolve({ matched: false })
// }

// type ChangeListerEvent = Event & {
//   detail: {
//     key: string
//     text: string
//     provide(value: Promise<{ matched: boolean }>): void
//   }
// }

// type ValueListerEvent = Event & {
//   detail: {
//     key: string
//     value: string
//     item: HTMLLIElement
//   }
// }

// export const TextExpander = ({ children }: { children: ReactNode }) => {
//   const expanderRef = useRef<HTMLElement>(null)
//   useEffect(() => {
//     if (expanderRef.current) {
//       const expander = expanderRef.current
//       const textExpanderChangeLister: EventListener = (event: Event) => {
//         const { provide, key, text } = (event as ChangeListerEvent).detail
//         provide(searchEmoji(key, text))
//       }
//       const textExpanderValueListener = (event: Event) => {
//         const { key, item } = (event as ValueListerEvent).detail
//         if (key === ':') {
//           (event as ValueListerEvent).detail.value = `:${item.dataset.value}:`
//         }
//       }
//       expander.addEventListener(
//         'text-expander-change',
//         textExpanderChangeLister
//       )
//       expander.addEventListener(
//         'text-expander-value',
//         textExpanderValueListener
//       )
//       return () => {
//         expander.removeEventListener(
//           'text-expander-change',
//           textExpanderChangeLister
//         )
//         expander.removeEventListener(
//           'text-expander-value',
//           textExpanderValueListener
//         )
//       }
//     }
//     return () => undefined
//   }, [])

//   return (
//     <Suspense>
//       <GithubTextExpander
//         keys={': @'}
//         ref={expanderRef}
//       >
//         {children}
//       </GithubTextExpander>
//     </Suspense>
//   )
// }

export const MarkdownEditor = ({
  markdown,
  setMarkdownSource,
}: {
  markdown: string
  setMarkdownSource: (event: ChangeEvent<HTMLTextAreaElement>) => void
}) => {
  return (
    <StyledTabs defaultValue='edit'>
      <StyledTabsList>
        <StyledTabTrigger
          data-title='edit'
          value='edit'
          aria-label='edit event description'
        >
          edit
        </StyledTabTrigger>
        <StyledTabTrigger
          data-title='preview'
          value='preview'
          aria-label='preview event description'
        >
          preview
        </StyledTabTrigger>
      </StyledTabsList>
      <StyledTabContent value='edit'>
        <Textarea
          value={markdown}
          onChange={setMarkdownSource}
        />
      </StyledTabContent>
      <StyledTabContent value='preview'>
        <MarkdownPreview>
          {markdown}
        </MarkdownPreview>
      </StyledTabContent>
    </StyledTabs>
  )
}
