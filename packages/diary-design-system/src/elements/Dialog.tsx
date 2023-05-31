import { useEffect, useRef } from 'react'

import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

import { Button, Icon } from '.'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%; -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%; -50%) scale(1)' },
})

const StyledDialog = styled.dialog`
  background-color: ${({ theme }) => theme.color.white};
  border: 0;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color.black};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: relative;
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 0.5rem;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) normal;

  &::backdrop {
    background-color: ${({ theme }) => rgba(theme.color.black, 0.75)};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: none;
  }

  &[open] {
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) normal;
    &::backdrop {
      animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) normal;
    }
  }
`

const StyledCloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`

type DialogProps = {
  isOpen: boolean
  handleClose: () => void
  children: React.ReactNode | React.ReactNode[]
}

export const Dialog = ({ isOpen, handleClose, children }: DialogProps) => {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current

    if (isOpen) {
      dialog?.showModal()
    } else {
      dialog?.close()
    }
    return () => dialog?.close()
  }, [isOpen])

  const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation()

  return (
    <StyledDialog ref={ref} onCancel={handleClose} onClick={preventAutoClose}>
      <StyledCloseButton onClick={handleClose}>
        <Icon name='close' />
      </StyledCloseButton>

      {children}
    </StyledDialog>
  )
}
