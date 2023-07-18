import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import { type ChainedCommands, type Editor } from '@tiptap/react'
import clsx from 'clsx'
import { atom, useAtom } from 'jotai'
import { type CSSProperties, type FC } from 'react'
import styled, { useTheme } from 'styled-components'

import { ValueOf } from '~/@types/utils'
import {
  FillButtonStyles,
  Icon,
  ScrollArea,
  Select,
  SelectItem,
} from '~/elements'
import { color } from '~/foundation'
import { ColorPicker } from '~/modules'

type ToolbarProps = {
  editor: Editor | null
}

const FONT_SIZES = {
  'Normal text': 0,
  'Heading 1': 1,
  'Heading 2': 2,
  'Heading 3': 3,
} as const

type FontSize = ValueOf<typeof FONT_SIZES>

const WEB_FONTS = {
  ['Default']: '"Atkinson Hyperlegible", sans-serif',
  ['Times New Roman']: '"Times New Roman", "Times", serif',
  Georgia: '"Georgia", serif',
  Palatino: '"Palatino", serif',
  Baskerville: '"Baskerville", serif',
  Helvetica: '"Helvetica", sans-serif',
  Arial: '"Arial", sans-serif',
  'Arial Black': '"Arial Black", sans-serif',
  Verdana: '"Verdana", sans-serif',
  Tahoma: '"Tahoma", sans-serif',
  'Trebuchet MS': '"Trebuchet MS", sans-serif',
  Impact: '"Impact", sans-serif',
  ['Andalé Mono']: '"Andalé Mono", monospace',
  Courier: '"Courier", monospace',
  Lucida: '"Lucida", monospace',
  Monaco: '"Monaco", monospace',
  'Bradley Hand': '"Bradley Hand", cursive',
  ['Brush Script MT']: '"Brush Script MT", cursive',
  Luminari: '"Luminari", fantasy',
  ['Comic Sans']: '"Comic Sans MS", "Comic Sans", cursive',
} as const

type FontFamily = ValueOf<typeof WEB_FONTS>

const textColorAtom = atom<string>(color.white)
const highlightColorAtom = atom<string>(color.yellow)
const fontSizeAtom = atom<FontSize>(FONT_SIZES['Normal text'])
const fontFamilyAtom = atom<FontFamily>(WEB_FONTS.Default)

const FontSizePicker = ({
  onChange,
}: {
  onChange: () => ChainedCommands
}) => {
  const [fontSize, setFontSize] = useAtom(fontSizeAtom)
  const theme = useTheme()
  const handleChange = (level: FontSize) => {
    setFontSize(level)
    return level === 0
      ? onChange().toggleNode('heading', 'paragraph').run()
      : onChange()
          .toggleHeading({ level })
          .run()
  }

  const getFontSize = (size: number) =>
    size > 0 ? theme.fontSize[`h${size + 1}`] : theme.fontSize.body

  return (
    <Select
      placeholder='font size'
      onValueChange={(value: string) => { handleChange(parseInt(value) as FontSize) }}
      value={fontSize.toString()}
    >
      {Object.entries(FONT_SIZES).map(([title, size]) => (
        <SelectItem
          key={title}
          value={size.toString()}
          style={{ fontSize: getFontSize(size) }}
        >
          {title}
        </SelectItem>
      ))}
    </Select>
  )
}

const FontFamilyPicker = ({
  onChange,
}: {
  onChange: () => ChainedCommands
}) => {
  const [fontFamily, setFontFamily] = useAtom(fontFamilyAtom)
  const handleChange = (value: string) => {
    setFontFamily(value as FontFamily)
    onChange().setFontFamily(value).run()
  }

  return (
    <Select
      placeholder='font family'
      onValueChange={(value) => handleChange(value)}
      value={fontFamily}
    >
      {Object.entries(WEB_FONTS).map(([title, font]) => (
        <SelectItem
          key={font}
          value={font}
          style={{ fontFamily: font }}
        >
          {title}
        </SelectItem>
      ))}
    </Select>
  )
}

export const EditorToolbar: FC<ToolbarProps> = ({ editor }) => {
  const [textColor, setTextColor] = useAtom(textColorAtom)
  const [highlightColor, setHighlightColor] = useAtom(highlightColorAtom)

  if (!editor) return null
  return (
    <ToolbarRoot>
      <StyledScrollArea>
        <ToolbarButtonsWrapper>
          <FontSizePicker onChange={editor.chain().focus} />

          <ToolbarSeparator />

          <FontFamilyPicker
            onChange={editor.chain().focus}
          />

          <ToolbarSeparator />

          <ToolbarToggleGroup
            type='multiple'
            aria-label='formatting options'
          >
            <ToolbarToggleItem
              value='bold'
              aria-label='Bold'
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={clsx({ active: editor.isActive('bold') })}
            >
              <Icon name='bold' />
            </ToolbarToggleItem>
            <ToolbarToggleItem
              value='italic'
              aria-label='Italic'
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={clsx({ active: editor.isActive('italic') })}
            >
              <Icon name='italic' />
            </ToolbarToggleItem>
            <ToolbarToggleItem
              value='underline'
              aria-label='Underline'
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={clsx({ active: editor.isActive('underline') })}
            >
              <Icon name='underline' />
            </ToolbarToggleItem>
            <ToolbarToggleItem
              value='strikethrough'
              aria-label='Strikethrough'
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={clsx({ active: editor.isActive('strike') })}
            >
              <Icon name='strikethrough' />
            </ToolbarToggleItem>

            <ColorPicker
              activeColor={textColor}
              changeColor={setTextColor}
            >
              <ToolbarToggleItem
                value='text-color'
                aria-label='Text color'
              >
                <Icon
                  name='text-color'
                  style={{ '--color': textColor as CSSProperties }}
                />
              </ToolbarToggleItem>
            </ColorPicker>

            <ColorPicker
              activeColor={highlightColor}
              changeColor={setHighlightColor}
            >
              <ToolbarToggleItem
                value='highlight'
                aria-label='Text highlight color'
              >
                <Icon
                  name='highlight'
                  style={{ '--color': highlightColor as CSSProperties }}
                />
              </ToolbarToggleItem>
            </ColorPicker>

            <ToolbarButton
              value='clear'
              aria-label='Clear formatting'
            >
              <Icon name='clear-formatting' />
            </ToolbarButton>
          </ToolbarToggleGroup>

          <ToolbarSeparator />

          <ToolbarToggleGroup
            type='single'
            aria-label='Insert options'
          >
            <ToolbarToggleItem
              value='link'
              aria-label='Insert link'
            >
              <Icon name='link' />
            </ToolbarToggleItem>
            <ToolbarButton
              value='image'
              aria-label='Insert image'
            >
              <Icon name='image' />
            </ToolbarButton>
          </ToolbarToggleGroup>

          <ToolbarSeparator />

          <ToolbarToggleGroup
            type='single'
            defaultValue='left'
            aria-label='Text alignment'
          >
            <ToolbarToggleItem
              value='left'
              aria-label='Align left'
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={clsx({ active: editor.isActive({ textAlign: 'left'}) })}
            >
              <Icon name='align-left' />
            </ToolbarToggleItem>
            <ToolbarToggleItem
              value='center'
              aria-label='Align center'
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              className={clsx({ active: editor.isActive({ textAlign: 'center'}) })}
            >
              <Icon name='align-center' />
            </ToolbarToggleItem>
            <ToolbarToggleItem
              value='right'
              aria-label='Align right'
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={clsx({ active: editor.isActive({ textAlign: 'right'}) })}
            >
              <Icon name='align-right' />
            </ToolbarToggleItem>
            <ToolbarToggleItem
              value='justify'
              aria-label='Justify'
              onClick={() => editor.chain().focus().setTextAlign('justify').run()}
              className={clsx({ active: editor.isActive({ textAlign: 'justify'}) })}
            >
              <Icon name='align-justify' />
            </ToolbarToggleItem>
          </ToolbarToggleGroup>

          <ToolbarSeparator />

          <ToolbarToggleGroup
            type='single'
            defaultValue='unordered'
            aria-label='List type'
          >
            <ToolbarToggleItem
              value='ordered'
              aria-label='Ordered list'
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={clsx({ active: editor.isActive('orderedList') })}
            >
              <Icon name='list-ordered' />
            </ToolbarToggleItem>
            <ToolbarToggleItem
              value='unordered'
              aria-label='Unordered list'
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={clsx({ active: editor.isActive('bulletList') })}
            >
              <Icon name='list-unordered' />
            </ToolbarToggleItem>
            <ToolbarToggleItem
              value='task'
              aria-label='Task list'
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className={clsx({ active: editor.isActive('taskList') })}
            >
              <Icon name='list-task' />
            </ToolbarToggleItem>

            <ToolbarButton
              value='indent'
              aria-label='Increase indent'
              onClick={() =>
                editor.chain().focus().splitListItem('listItem').run()
              }
              disabled={!editor.can().splitListItem('listItem')}
            >
              <Icon name='indent' />
            </ToolbarButton>
            <ToolbarButton
              value='outdent'
              aria-label='Decrease indent'
              onClick={() =>
                editor.chain().focus().splitListItem('listItem').run()
              }
              disabled={!editor.can().splitListItem('listItem')}
            >
              <Icon name='outdent' />
            </ToolbarButton>
          </ToolbarToggleGroup>
        </ToolbarButtonsWrapper>
      </StyledScrollArea>
    </ToolbarRoot>
  )
}

const ToolbarRoot = styled(ToolbarPrimitive.Root)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.color.black};

  padding: 0.5rem;
  position: relative;

  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
  border-radius: ${({ theme }) => theme.radii.md};

  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`

const StyledScrollArea = styled(ScrollArea)`
  width: 0;
  flex: 1 1 auto;
`

const ToolbarButtonsWrapper = styled.div`
  display: flex;
`

const ToolbarToggleGroup = styled(ToolbarPrimitive.ToggleGroup)`
  display: flex;
`

const ToolbarToggleItem = styled(ToolbarPrimitive.ToggleItem)`
  ${FillButtonStyles}
  padding: 0.5rem;

  border-radius: 0;

  &:first-of-type {
    border-top-left-radius: ${({ theme }) => theme.radii.md};
    border-bottom-left-radius: ${({ theme }) => theme.radii.md};
    padding-left: ${({ theme }) => theme.spacing[10]};
  }

  &:last-of-type {
    border-top-right-radius: ${({ theme }) => theme.radii.md};
    border-bottom-right-radius: ${({ theme }) => theme.radii.md};
    padding-right: ${({ theme }) => theme.spacing[10]};
  }
`

const ToolbarButton = styled(ToolbarPrimitive.Button)`
  ${FillButtonStyles}
  padding: 0.5rem;

  border-radius: 0;

  &:first-of-type {
    border-top-left-radius: ${({ theme }) => theme.radii.md};
    border-bottom-left-radius: ${({ theme }) => theme.radii.md};
    padding-left: ${({ theme }) => theme.spacing[10]};
  }

  &:last-of-type {
    border-top-right-radius: ${({ theme }) => theme.radii.md};
    border-bottom-right-radius: ${({ theme }) => theme.radii.md};
    padding-right: ${({ theme }) => theme.spacing[10]};
  }
`

const ToolbarSeparator = styled(ToolbarPrimitive.Separator)`
  width: ${({ theme }) => theme.spacing[1]};
  background-color: ${({ theme }) => theme.color.grey};
  margin: 0 ${({ theme }) => theme.spacing[8]};
  height: 100%;
`
