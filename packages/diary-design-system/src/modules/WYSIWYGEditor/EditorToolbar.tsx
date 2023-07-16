import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import { type FC } from 'react'
import styled from 'styled-components'

import { FillButtonStyles, Icon, Select, SelectItem } from '~/elements'

type ToolbarProps = {
  editor?: any
}

const FONT_SIZES = {
  body: 0,
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 5,
  h6: 6,
}

const WEB_FONTS = {
  ['Atkinson Hyperlegible']: '"Atkinson Hyperlegible", sans-serif',
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
  ['Comic Sans MS']: '"Comic Sans MS", "Comic Sans", cursive',
}

const TextSizePicker = ({ value }: { value: string }) => {
  return (
    <Select placeholder='text size' value={value}>
      {Object.entries(FONT_SIZES).map(([title, size]) => (
        <SelectItem
          key={size}
          value={String(size)}
        >
          {title}
        </SelectItem>
      ))}
    </Select>
  )
}

const FontFamilyPicker = ({ value }: { value: string }) => {
  return (
    <Select placeholder='font family' value={value}>
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

export const EditorToolbar: FC<ToolbarProps> = ({ ...props }) => {

  return (
    <ToolbarRoot>
      <TextSizePicker value='' />
      <ToolbarSeparator />
      <FontFamilyPicker value='' />
      <ToolbarSeparator />

      <ToolbarToggleGroup
        type='multiple'
        aria-label='formatting options'
      >
        <ToolbarToggleItem
          value='bold'
          aria-label='Bold'
        >
          <Icon name='bold' />
        </ToolbarToggleItem>
        <ToolbarToggleItem
          value='italic'
          aria-label='Italic'
        >
          <Icon name='italic' />
        </ToolbarToggleItem>
        <ToolbarToggleItem
          value='underline'
          aria-label='Underline'
        >
          <Icon name='underline' />
        </ToolbarToggleItem>
        <ToolbarToggleItem
          value='strikethrough'
          aria-label='Strikethrough'
        >
          <Icon name='strikethrough' />
        </ToolbarToggleItem>
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
        >
          <Icon name='align-left' />
        </ToolbarToggleItem>
        <ToolbarToggleItem
          value='center'
          aria-label='Align center'
        >
          <Icon name='align-center' />
        </ToolbarToggleItem>
        <ToolbarToggleItem
          value='right'
          aria-label='Align right'
        >
          <Icon name='align-right' />
        </ToolbarToggleItem>
        <ToolbarToggleItem
          value='justify'
          aria-label='Justify'
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
          value='task'
          aria-label='Task list'
        >
          <Icon name='list-task' />
        </ToolbarToggleItem>
        <ToolbarToggleItem
          value='ordered'
          aria-label='Ordered list'
        >
          <Icon name='list-ordered' />
        </ToolbarToggleItem>
        <ToolbarToggleItem
          value='unordered'
          aria-label='Unordered list'
        >
          <Icon name='list-unordered' />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
    </ToolbarRoot>
  )
}

const ToolbarRoot = styled(ToolbarPrimitive.Root)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.color.black};

  flex: 0 0 auto;
  padding: 0.5rem;
  position: relative;

  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
  border-radius: ${({ theme }) => theme.radii.md};

  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`

const ToolbarToggleGroup = styled(ToolbarPrimitive.ToggleGroup)`
  display: flex;
`

const ToolbarToggleItem = styled(ToolbarPrimitive.ToggleItem)`
  ${FillButtonStyles}
  padding: 0.5rem;

  border-radius: 0;

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.radii.md};
    border-bottom-left-radius: ${({ theme }) => theme.radii.md};
    padding-left: ${({ theme }) => theme.spacing[12]};
  }

  &:last-child {
    border-top-right-radius: ${({ theme }) => theme.radii.md};
    border-bottom-right-radius: ${({ theme }) => theme.radii.md};
    padding-right: ${({ theme }) => theme.spacing[12]};
  }
`

const ToolbarSeparator = styled(ToolbarPrimitive.Separator)`
  width: ${({ theme }) => theme.spacing[1]};
  background-color: ${({ theme }) => theme.color.grey};
  margin: 0 ${({ theme }) => theme.spacing[8]};
  height: 100%;
`
