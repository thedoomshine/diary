import { colorTokens } from '@diaryco/design-system'

import { css } from 'style-engine/css'
import { token, type Token } from 'style-engine/tokens'

const colorItemStyles = css({
  height: '2rem',
  width: '2rem',
})

const COLORS = Object
  .entries(colorTokens)
  .reduce((acc, [key, value]) => {
    if (!key.startsWith('colors.')) return [...acc]
    return [...acc, { [key]: value }]
}, [])

const ColorItem = ({ value }: { value: string }) => (
  <div
    style={{ backgroundColor: token(value as Token) }}
    className={colorItemStyles}
  />
)

export const Colors = () => {
  return (
    COLORS.map((color) => (
      <ColorItem
        key={String(color)}
        value={String(color)}
      />
    ))
  )
}
