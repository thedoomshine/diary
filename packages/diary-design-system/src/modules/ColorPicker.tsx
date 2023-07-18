import clsx from 'clsx'
import { atom, useAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { meetsContrastGuidelines } from 'polished'
import { useEffect, type ChangeEvent, type ReactNode} from 'react'
import styled, { useTheme } from 'styled-components'

import {
  FillButton,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/elements'
import { color as colors } from '~/foundation'

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
  useHydrateAtoms([[tempColorAtom, activeColor]])
  const [tempColor, setTempColor] = useAtom(tempColorAtom)

  useEffect(() => {
    setTempColor(activeColor)
  }, [activeColor])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTempColor(e.target.value)
  }

  const handleInputSubmit = () => {
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
          {Object.values(colors).map((color) => (
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
  padding: 0;
  max-width: 12rem;

  text-transform: uppercase;

  svg {
    fill: ${({ $activeColor }) => $activeColor};
  }
`

const ActiveColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 2 / 1;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`

const SwatchWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
`

const Swatch = styled(FillButton)`
  width: 100%;
  aspect-ratio: 1/1;
  padding: 0;
  transition-property: transform;
  transition-duration: ${({ theme }) => theme.duration[150]};
  transition-timing-function: ${({ theme }) => theme.easing.easeIn};

  &.active {
    outline: ${({ theme }) => `solid ${theme.spacing[2]} ${theme.color.yellow}`};
    outline-offset: ${({ theme }) => theme.spacing[1]};
  }

  &:hover {
    transform: scale(1.1);
  }
`

const StyledInput = styled(Input)`
  margin: 0 .5rem;
`
