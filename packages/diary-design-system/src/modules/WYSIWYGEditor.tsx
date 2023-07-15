import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Mention from '@tiptap/extension-mention'
import { EditorContent, type JSONContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  white-space: pre-wrap;
  width: 100%;
  height: 100%;
  position: relative;
  word-wrap: break-word;
  line-height: 1.5;

  .ProseMirror {
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
      border-bottom: ${({ theme }) =>
        `solid ${theme.spacing[1]} ${theme.color.grey}`};
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
          content: counters(item, '.') '. ';
        }
        ol li::marker {
          content: counters(item, '.') ' ';
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
  }
`

export const WYSIWYGEditor = ({
  content,
  setContentSource,
}: {
  content: JSONContent
  setContentSource: (content: JSONContent) => void
}) => {
  const editor = useEditor({
    extensions: [StarterKit, Image, Link, Mention],
    content: content,
    onUpdate: ({ editor }) => {
      setContentSource(editor.getJSON())
    },
  })

  return (
    <StyledWrapper>
      <EditorContent editor={editor} />
    </StyledWrapper>
  )
}
