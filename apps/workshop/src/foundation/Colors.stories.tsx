import { colorTokens } from '@diaryco/design-system'
import type { Meta, StoryObj } from '@storybook/react'

import { readableColor } from 'polished'

import { type Token, token } from '../../@diaryco/style-engine/tokens'

const COLORS = Object.keys(colorTokens).reduce((acc, key) => {
  return [...acc, key]
}, [] as string[])

const ColorsList = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
      }}
    >
      {COLORS.map((color) => (
        <div
          key={color}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: token(`colors.${color}` as Token),
            width: '100%',
            aspectRatio: '1',
            color: 'black',
          }}
        >
          <p style={{
            color: readableColor(token(`colors.${color}` as Token), token('colors.black'), token('colors.white')),
          }}>{color}</p>
        </div>
      ))}
    </div>
  )
}

const ColorMeta: Meta<typeof ColorsList> = {
  title: 'foundation/colors',
  component: ColorsList,
}

type Story = StoryObj<typeof ColorsList>

export const Colors: Story = {
  render: () => <ColorsList />,
}

export default ColorMeta
