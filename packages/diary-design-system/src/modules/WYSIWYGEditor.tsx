import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import CharacterCount from '@tiptap/extension-character-count'
import Color from '@tiptap/extension-color'
import FontFamily from '@tiptap/extension-font-family'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Mention from '@tiptap/extension-mention'
import Placeholder from '@tiptap/extension-placeholder'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import TextTypography from '@tiptap/extension-typography'
import Underline from '@tiptap/extension-underline'
import { EditorContent, type JSONContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import styled from 'styled-components'

import { ScrollArea, ScrollAreaContent } from '~/elements'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const StyledToolbar = styled(ToolbarPrimitive.Root)`
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  padding: 0.5rem;

  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
  border-radius: ${({ theme }) => theme.radii.md};

  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  padding: 0.5rem;
  width: 100%;

  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
  border-radius: ${({ theme }) => theme.radii.md};

  border-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`

const StyledScrollAreaContent = styled(ScrollAreaContent)`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  white-space: pre-wrap;
  position: relative;
  word-wrap: break-word;

  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};

  &:focus-within {
    border-color: ${({ theme }) => theme.color.yellow};
  }

  .ProseMirror {
    padding: 1rem 0;
    & > :first-child {
      margin-top: 0 !important;
    }

    & > :last-child {
      margin-bottom: 0 !important;
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

const POST_LIMIT = 512

export const WYSIWYGEditor = ({
  content,
  setContentSource,
}: {
  content: JSONContent
  setContentSource: (content: JSONContent) => void
}) => {
  const editor = useEditor({
    extensions: [
      CharacterCount.configure({
        limit: POST_LIMIT,
      }),
      Color,
      FontFamily,
      Highlight.configure({
        multicolor: true,
      }),
      Image,
      Link.configure({
        openOnClick: false,
      }),
      Mention,
      Placeholder.configure({
        placeholder: 'tell us all about it...',
      }),
      Subscript,
      Superscript,
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle,
      TextTypography,
      Underline,
    ],
    content: content,
    onUpdate: ({ editor }) => {
      setContentSource(editor.getJSON())
    },
  })

  return (
    <ScrollArea>
      <StyledWrapper>
        <StyledToolbar>toolbar</StyledToolbar>
        <StyledScrollAreaContent>
          <EditorContent editor={editor} />
        </StyledScrollAreaContent>
        <StyledFooter>
          {editor?.storage.characterCount.characters()}
        </StyledFooter>
      </StyledWrapper>
    </ScrollArea>
  )
}
