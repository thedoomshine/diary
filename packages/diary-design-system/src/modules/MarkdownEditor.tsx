import type { ChangeEvent } from 'react'
import remarkBreaks from 'remark-breaks'
import ReactMarkdown from 'react-markdown'
import emoji from 'remark-emoji'

import { css } from '@diaryco/style-engine/css'

import { TabsContent, TabsTrigger, TabsList, TabsRoot } from '~/elements/Tabs'

import './markdown.css'

const tabsStyles = css({
  minHeight: '32rem',
  borderBottomLeftRadius: '0.5rem',
  borderBottomRightRadius: '0.5rem',
  borderTopRightRadius: '0.5rem',
})

const tabsListStyles = css({
  margin: '0 0.75rem',
  bottom: '-1px',
  position: 'relative',
  zIndex: '1',
})

const tabsTriggerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  flex: '0 0 auto',
  position: 'relative',
  '&[data-state="active"]': {
    backgroundColor: 'charcoal',
    border: 'solid 1px token(colors.grey)',
    borderTopLeftRadius: 'md',
    borderTopRightRadius: 'md',
    borderBottomColor: 'transparent',
  },
  _after: {
    content: 'attr(data-title)',
    overflow: 'hidden',
    display: 'block',
    height: '1px',
    fontWeight: '700',
    color: 'transparent',
    visibility: 'hidden',
  },
})

const tabsContentStyles = css({
  position: 'relative',
  padding: '0.75rem 0.5rem 0.55rem',
  border: 'solid 1px token(colors.grey)',
  borderRadius: 'md',
  backgroundColor: 'charcoal',
  maxHeight: '32rem',
  overflow: 'auto',
})

const textareaStyles = css({
  position: 'relative',
  overflow: 'auto',
  display: 'flex',
  flex: '1 1 auto',
  width: '100%',
  fontSize: 'md',
  color: 'white',
  backgroundColor: 'black',
  padding: '1rem',
  colorScheme: 'dark',
  borderRadius: 'md',
  border: 'solid 1px token(colors.grey)',
})

const markdownPreviewStyles = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '0.5rem',
  whiteSpace: 'pre-wrap',
  width: '100%',
  height: '100%',
  position: 'relative',
  wordWrap: 'break-word',
  lineHeight: 'body',
})

export const MarkdownEditor = ({
  markdown,
  setMarkdownSource,
}: {
  markdown: string
  setMarkdownSource: (event: ChangeEvent<HTMLTextAreaElement>) => void
}) => {
  return (
    <TabsRoot className={tabsStyles} defaultValue='edit'>
      <TabsList className={tabsListStyles}>
        <TabsTrigger
          className={tabsTriggerStyles}
          data-title='edit'
          value='edit'
          aria-label='edit event description'
        >
          edit
        </TabsTrigger>
        <TabsTrigger
          className={tabsTriggerStyles}
          data-title='preview'
          value='preview'
          aria-label='preview event description'
        >
          preview
        </TabsTrigger>
      </TabsList>
      <TabsContent className={tabsContentStyles} value='edit'>
        <textarea
          className={textareaStyles}
          value={markdown}
          onChange={setMarkdownSource}
        />
      </TabsContent>
      <TabsContent className={tabsContentStyles} value='preview'>
        <ReactMarkdown className={markdownPreviewStyles} remarkPlugins={[emoji, remarkBreaks]}>
          {markdown}
        </ReactMarkdown>
      </TabsContent>
    </TabsRoot>
  )
}
