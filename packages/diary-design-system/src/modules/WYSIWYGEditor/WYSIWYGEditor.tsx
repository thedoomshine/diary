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
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import TextTypography from '@tiptap/extension-typography'
import Underline from '@tiptap/extension-underline'
import { EditorContent, type JSONContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { debounce } from 'radash'
import styled from 'styled-components'
import { useTheme } from 'styled-components'

import { ScrollArea } from '~/elements'

import { EditorToolbar } from './EditorToolbar'

const CHAR_LIMIT = 1024

export const WYSIWYGEditor = ({
  content,
  setContentSource,
}: {
  content?: JSONContent
  setContentSource: (content: JSONContent) => void
}) => {
  const editor = useEditor({
    extensions: [
      CharacterCount.configure({
        limit: CHAR_LIMIT,
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
        placeholder: 'tell us all about it',
      }),
      Subscript,
      Superscript,
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      TaskList,
      TaskItem,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle,
      TextTypography,
      Underline,
    ],
    content: content,
    onUpdate: ({ editor }) => {
      debounce({ delay: 100 }, () => {
        setContentSource(editor.getJSON())
      })
    },
  })

  const characterCount = editor?.storage.characterCount.characters() || '0'

  const percentage = Math.round((100 / CHAR_LIMIT) * characterCount)

  return (
    <StyledWrapper>
      <EditorToolbar editor={editor} />
      <StyledScrollArea>
        <EditorContent editor={editor} />
      </StyledScrollArea>

      <StyledFooter>
        {percentage >= 90 && `${CHAR_LIMIT - characterCount}`}
        <CharacterCountIndicator percentage={percentage} />
      </StyledFooter>
    </StyledWrapper>
  )
}

const CharacterCountIndicator = ({ percentage }: { percentage: number }) => {
  const theme = useTheme()
  return (
    <svg
      height='32'
      width='32'
      viewBox='0 0 20 20'
    >
      <circle
        r='10'
        cx='10'
        cy='10'
        fill={theme.color.grey}
      />
      <circle
        r='5'
        cx='10'
        cy='10'
        fill='transparent'
        stroke={percentage >= 100 ? theme.color.red : theme.color.yellow}
        strokeWidth='10'
        strokeDasharray={`calc(${percentage} * ${Math.PI} / 10) ${
          Math.PI * 10
        }`}
        transform='rotate(-90) translate(-20)'
      />
      <circle
        r='6'
        cx='10'
        cy='10'
        fill={theme.color.black}
      />
    </svg>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  /* width: 100%;
  height: 0; */
  flex: 1 1 auto;
  flex-direction: column;
`

const StyledFooter = styled.div`
  position: relative;

  display: flex;
  flex: 0 0 auto;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  padding: 0.5rem;

  background-color: ${({ theme }) => theme.color.black};
  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
  border-top: 0;
  border-radius: ${({ theme }) => theme.radii.md};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`

const StyledScrollArea = styled(ScrollArea)`
  position: relative;

  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  padding: 0 1rem;

  word-wrap: break-word;
  white-space: pre-wrap;

  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};

  &:focus-within {
    border-color: ${({ theme }) => theme.color.yellow};
  }

  .ProseMirror {
    height: 100%;
    padding: 1rem 0;
    p.is-editor-empty:first-child::before {
      pointer-events: none;
      content: attr(data-placeholder);

      float: left;

      height: 0;

      color: ${({ theme }) => theme.color.grey};
    }
    & > :first-child {
      margin-top: 0 !important;
    }

    & > :last-child {
      margin-bottom: 0 !important;
    }

    h1,
    h2,
    h3 {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      padding-bottom: 0.3em;
      line-height: 1.15;
    }

    h1 {
      font-size: ${({ theme }) => theme.fontSize.h2};
      border-bottom: ${({ theme }) =>
        `solid ${theme.spacing[1]} ${theme.color.grey}`};
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.h3};
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSize.h4};
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
      & ul {
        list-style-type: circle;
        & ul {
          list-style-type: square;
          & ul {
            list-style-type: disc;
          }
        }
      }
    }

    ol {
      counter-reset: item;
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        counter-increment: item;
        &::marker {
          content: counter(item, decimal) '. ';
        }
      }
    }

    ol,
    ul {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      padding-left: 2rem;
    }

    li {
      display: list-item;
    }

    ul[data-type='taskList'] {
      padding-left: 0;
      list-style-type: none;
      li {
        display: inline-flex;
        & + li {
          margin-top: 0.5rem;
        }
      }
      label {
        display: inline-flex;
        gap: 0.5rem;
        align-items: center;
      }

      label + div {
        display: flex;
        align-items: center;
      }

      p {
        margin: 0;
      }

      input[type='checkbox'] {
        transform: translateY(-0.075em);

        display: grid;
        place-content: center;

        width: 1.75em;
        height: 1.75em;

        color: currentColor;

        appearance: initial;
        border: ${({ theme }) =>
          `solid ${theme.spacing[1]} ${theme.color.grey}`};
        border-radius: ${({ theme }) => theme.radii.md};

        &::before {
          content: '';

          transform: scale(0);

          width: 1.25em;
          height: 1.25em;

          background-color: ${({ theme }) => theme.color.yellow};
          clip-path: polygon(
            28% 38%,
            41% 53%,
            75% 24%,
            86% 38%,
            40% 78%,
            15% 50%
          );
        }

        &:checked::before {
          transform: scale(1);
        }

        &:focus-visible {
          outline: ${({ theme }) =>
            `solid ${theme.spacing[1]} ${theme.color.yellow}`};
        }
      }
    }

    strong {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    em {
      font-style: italic;
    }

    u {
      text-decoration: underline;
    }

    s {
      text-decoration: line-through;
    }

    blockquote {
      display: flex;
      flex-direction: column;
      padding-left: 0.5rem;
      border-left: solid 0.25rem ${({ theme }) => theme.color.grey};
      & > :last-child {
        margin-bottom: 0;
      }
    }

    hr {
      height: 0.25em;
      margin: 2rem 0;
      padding: 0;
      background-color: ${({ theme }) => theme.color.grey};
    }
  }
`
