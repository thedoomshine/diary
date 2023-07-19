import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import { type Editor } from '@tiptap/react'
import clsx from 'clsx'
import { Provider } from 'jotai'
import { rgba } from 'polished'
import { type CSSProperties, type FC } from 'react'
import styled, { css, useTheme } from 'styled-components'

import { ValueOf } from '~/@types/utils'
import {
  FillButtonStyles,
  Icon,
  ScrollArea,
  Select,
  SelectItem,
} from '~/elements'
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

const FontSizePicker = ({ editor }: { editor?: Editor }) => {
  const theme = useTheme()

  const handleChange = (level: FontSize) => {
    return level === 0
      ? editor?.chain().focus().toggleNode('heading', 'paragraph').run()
      : editor?.chain().focus().toggleHeading({ level }).run()
  }

  const getFontSize = (size: number) =>
    size > 0 ? theme.fontSize[`h${size + 1}`] : theme.fontSize.body

  const getFontWeight = (size: number) =>
    size > 0 ? theme.fontWeight.bold : theme.fontWeight.regular

  const currentFontSize = (
    editor?.getAttributes('heading').level || 0
  ).toString()

  return (
    <Select
      placeholder='font size'
      onValueChange={(value: string) => {
        handleChange(parseInt(value) as FontSize)
      }}
      value={currentFontSize}
    >
      {Object.entries(FONT_SIZES).map(([title, size]) => (
        <SelectItem
          key={title}
          value={size.toString()}
          style={{
            fontSize: getFontSize(size),
            fontWeight: getFontWeight(size),
          }}
        >
          {title}
        </SelectItem>
      ))}
    </Select>
  )
}

const FontFamilyPicker = ({ editor }: { editor?: Editor }) => {
  const handleChange = (value: string) => {
    editor?.chain().focus().setFontFamily(value).run()
  }

  const currentFontFamily =
    editor?.getAttributes('textStyle').fontFamily || WEB_FONTS['Default']

  return (
    <Select
      placeholder='font family'
      onValueChange={(value) => handleChange(value)}
      value={currentFontFamily}
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

const TextColorPicker = ({ editor }: { editor?: Editor }) => {
  const theme = useTheme()
  const textColor =
    editor?.getAttributes('textStyle').color || theme.color.white

  const setTextColor = (color: string) => {
    editor?.chain().focus().setColor(color).run()
  }

  return (
    <Provider>
      <ColorPicker
        key='text-color'
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
    </Provider>
  )
}

const HighlightColorPicker = ({ editor }: { editor?: Editor }) => {
  const theme = useTheme()

  const highlightColor =
    editor?.getAttributes('highlight').color || theme.color.yellow

  const setHighlightColor = (color: string) => {
    editor?.chain().focus().toggleHighlight({ color: color }).run()
  }

  return (
    <Provider>
      <ColorPicker
        key='highlight-color'
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
    </Provider>
  )
}

export const EditorToolbar: FC<ToolbarProps> = ({ editor }) => {
  if (!editor) {
    return null
  }
  return (
    <ToolbarRoot>
      <StyledScrollArea>
        <ToolbarButtonsWrapper>
          <FontSizePicker editor={editor} />

          <ToolbarSeparator />

          <FontFamilyPicker editor={editor} />

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

            <TextColorPicker editor={editor} />
            <HighlightColorPicker editor={editor} />

            <ToolbarButton
              value='clear'
              aria-label='Clear formatting'
              onClick={() =>
                editor.chain().focus().clearNodes().unsetAllMarks().run()
              }
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
              className={clsx({
                active: editor.isActive({ textAlign: 'left' }),
              })}
            >
              <Icon name='align-left' />
            </ToolbarToggleItem>
            <ToolbarToggleItem
              value='center'
              aria-label='Align center'
              onClick={() =>
                editor.chain().focus().setTextAlign('center').run()
              }
              className={clsx({
                active: editor.isActive({ textAlign: 'center' }),
              })}
            >
              <Icon name='align-center' />
            </ToolbarToggleItem>
            <ToolbarToggleItem
              value='right'
              aria-label='Align right'
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={clsx({
                active: editor.isActive({ textAlign: 'right' }),
              })}
            >
              <Icon name='align-right' />
            </ToolbarToggleItem>
            <ToolbarToggleItem
              value='justify'
              aria-label='Justify'
              onClick={() =>
                editor.chain().focus().setTextAlign('justify').run()
              }
              className={clsx({
                active: editor.isActive({ textAlign: 'justify' }),
              })}
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
                editor.chain().focus().liftListItem('listItem').run()
              }
              disabled={!editor.can().liftListItem('listItem')}
            >
              <Icon name='indent' />
            </ToolbarButton>
            <ToolbarButton
              value='outdent'
              aria-label='Decrease indent'
              onClick={() =>
                editor.chain().focus().sinkListItem('listItem').run()
              }
              disabled={!editor.can().sinkListItem('listItem')}
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
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0.5rem;

  background-color: ${({ theme }) => theme.color.black};
  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
  border-bottom: 0;
  border-radius: ${({ theme }) => theme.radii.md};
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`

const StyledScrollArea = styled(ScrollArea)`
  flex: 1 1 auto;
  width: 0;
`

const ToolbarButtonsWrapper = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.sm};
`

const ToolbarToggleGroup = styled(ToolbarPrimitive.ToggleGroup)`
  display: flex;
`

const ToolbarItem = css`
  ${FillButtonStyles}
  padding: 0.5rem;
  border-radius: 0;

  &.active {
    background-color: ${({ theme }) => rgba(theme.color.yellow, 0.125)};
  }

  &:first-of-type {
    padding-left: ${({ theme }) => theme.spacing[10]};
    border-top-left-radius: ${({ theme }) => theme.radii.md};
    border-bottom-left-radius: ${({ theme }) => theme.radii.md};
  }

  &:last-of-type {
    padding-right: ${({ theme }) => theme.spacing[10]};
    border-top-right-radius: ${({ theme }) => theme.radii.md};
    border-bottom-right-radius: ${({ theme }) => theme.radii.md};
  }
`

const ToolbarToggleItem = styled(ToolbarPrimitive.ToggleItem)`
  ${ToolbarItem}
`

const ToolbarButton = styled(ToolbarPrimitive.Button)`
  ${ToolbarItem}
`

const ToolbarSeparator = styled(ToolbarPrimitive.Separator)`
  width: ${({ theme }) => theme.spacing[1]};
  height: 100%;
  margin: 0 ${({ theme }) => theme.spacing[8]};
  background-color: ${({ theme }) => theme.color.grey};
`
