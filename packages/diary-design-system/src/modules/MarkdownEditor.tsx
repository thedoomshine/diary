import { style } from '@vanilla-extract/css'
import type { ChangeEvent } from 'react'

import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '~/elements/Tabs'
import { themeVars } from '~/foundation/theme.css'

import './markdown.css'

const tabsStyles = style({
  minHeight: '32rem',
  borderBottomLeftRadius: themeVars.radii.md,
  borderBottomRightRadius: themeVars.radii.md,
  borderTopRightRadius: themeVars.radii.md,
})

const tabsListStyles = style({
  margin: '0 0.75rem',
  bottom: '-1px',
  position: 'relative',
  zIndex: '1',
})

const tabsTriggerStyles = style({
  display: 'flex',
  flexDirection: 'column',
  flex: '0 0 auto',
  position: 'relative',
  selectors: {
    '[data-state="active"]': {
      backgroundColor: themeVars.color.charcoal,
      border: `solid 1px ${themeVars.color.grey}`,
      borderTopLeftRadius: themeVars.radii.md,
      borderTopRightRadius: themeVars.radii.md,
      borderBottomColor: 'transparent',
    },
    '::after': {
      content: 'attr(data-title)',
      overflow: 'hidden',
      display: 'block',
      height: '1px',
      fontWeight: themeVars.fontWeight.bold,
      color: 'transparent',
      visibility: 'hidden',
    },
  },
})

const tabsContentStyles = style({
  position: 'relative',
  padding: '0.75rem 0.5rem 0.55rem',
  border: `solid 1px ${themeVars.color.grey}`,
  borderRadius: themeVars.radii.md,
  backgroundColor: themeVars.color.charcoal,
  maxHeight: '32rem',
  overflow: 'auto',
})

const textareaStyles = style({
  position: 'relative',
  overflow: 'auto',
  display: 'flex',
  flex: '1 1 auto',
  width: '100%',
  fontSize: themeVars.fontSize.md,
  color: themeVars.color.white,
  backgroundColor: themeVars.color.black,
  padding: '1rem',
  colorScheme: 'dark',
  borderRadius: themeVars.radii.md,
  border: `solid 1px ${themeVars.color.grey}`,
})

const markdownPreviewStyles = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0.5rem',
  whiteSpace: 'pre-wrap',
  width: '100%',
  height: '100%',
  position: 'relative',
  wordWrap: 'break-word',
  lineHeight: themeVars.lineHeight.body,
})

export const MarkdownEditor = ({
  markdown,
  setMarkdownSource,
}: {
  markdown: string
  setMarkdownSource: (event: ChangeEvent<HTMLTextAreaElement>) => void
}) => {
  return (
    <TabsRoot
      className={tabsStyles}
      defaultValue='edit'
    >
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
      <TabsContent
        className={tabsContentStyles}
        value='edit'
      >
        <textarea
          className={textareaStyles}
          value={markdown}
          onChange={setMarkdownSource}
        />
      </TabsContent>
      <TabsContent
        className={tabsContentStyles}
        value='preview'
      >
        {/* <ReactMarkdown className={markdownPreviewStyles} remarkPlugins={[emoji, remarkBreaks]}>
          {markdown}
        </ReactMarkdown> */}
      </TabsContent>
    </TabsRoot>
  )
}
