import clsx from 'clsx'
import { atom, useAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { meetsContrastGuidelines } from 'polished'
import {
  type ChangeEvent,
  type KeyboardEvent,
  type ReactNode,
  useEffect,
} from 'react'
import styled, { useTheme } from 'styled-components'

import {
  FillButton,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/elements'

const tempColorAtom = atom<string>('')

export const ColorPicker = ({
  children,
  activeColor,
  changeColor,
}: {
  children: ReactNode
  activeColor: string
  changeColor: (color: string) => void
}) => {
  const theme = useTheme()
  const COLORS: string[] = Object.values(theme.color)
  useHydrateAtoms([[tempColorAtom, activeColor]])
  const [tempColor, setTempColor] = useAtom(tempColorAtom)

  useEffect(() => {
    setTempColor(activeColor)
  }, [activeColor])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTempColor(e.target.value)
  }

  const handleInputSubmit = (event: KeyboardEvent) => {
    if (event.key !== 'Enter') return
    changeColor(tempColor)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <StyledPopoverContent $activeColor={activeColor}>
        <ActiveColor
          key={activeColor}
          style={{ backgroundColor: activeColor }}
        >
          <span
            style={{
              color: meetsContrastGuidelines(activeColor, theme.color.white).AAA
                ? theme.color.white
                : theme.color.black,
            }}
          >
            {activeColor}
          </span>
        </ActiveColor>
        <SwatchWrapper>
          {COLORS.map((color) => (
            <Swatch
              key={color}
              title={color}
              onClick={() => changeColor(color)}
              style={{ backgroundColor: color }}
              tabIndex={0}
              className={clsx({
                active: color === activeColor,
              })}
            />
          ))}
        </SwatchWrapper>

        <StyledInput
          type='text'
          name='active-color'
          value={tempColor}
          onInput={handleInput}
          onKeyDown={handleInputSubmit}
        />
      </StyledPopoverContent>
    </Popover>
  )
}

const StyledPopoverContent = styled(PopoverContent)<{ $activeColor: string }>`
  max-width: 12rem;
  padding: 0;
  text-transform: uppercase;

  svg {
    fill: ${({ $activeColor }) => $activeColor};
  }
`

const ActiveColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 2 / 1;
  width: 100%;

  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`

const SwatchWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;

  margin-top: 0.5rem;
  padding: 0.5rem;
`

const Swatch = styled(FillButton)`
  aspect-ratio: 1/1;
  width: 100%;
  padding: 0;

  transition-timing-function: ${({ theme }) => theme.easing.easeIn};
  transition-duration: ${({ theme }) => theme.duration[150]};
  transition-property: transform;

  &.active {
    outline: ${({ theme }) =>
      `solid ${theme.spacing[2]} ${theme.color.yellow}`};
    outline-offset: ${({ theme }) => theme.spacing[1]};
  }

  &:hover {
    transform: scale(1.1);
  }
`

const StyledInput = styled(Input)`
  margin: 0 0.5rem;
`
