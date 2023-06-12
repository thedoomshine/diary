import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import emoji from 'remark-emoji'
import remarkBreaks from 'remark-breaks'

export const MarkdownEditor = ({ markdown }: { markdown: string }) => {
  return (<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm, remarkBreaks, emoji]} />)
}
