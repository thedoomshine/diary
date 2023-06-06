import { useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'

import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

import { Button, Icon, OutlineButton } from '.'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%; -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%; -50%) scale(1)' },
})

const StyledDialogContent = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  gap: 0.5rem;
  overflow: visible;
  background-color: ${({ theme }) => theme.color.charcoal};
  border: 0;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  position: relative;
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

const DialogHeader = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`

const DialogFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledCloseButton = styled(Button)`
  grid-column: 2;
`

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.yellow};
  color: ${({ theme }) => theme.color.black};
`

const isClickInside = (event: MouseEvent, element: HTMLElement) => {
  const box = element.getBoundingClientRect()

  return (
    event.clientX > box.left &&
    event.clientX < box.right &&
    event.clientY > box.top &&
    event.clientY < box.bottom
  )
}

type DialogProps = {
  title?: string
  isOpen: boolean
  handleClose?: () => void
  handleProceed?: () => void
  children?: React.ReactNode | React.ReactNode[]
}

export const Dialog = ({
  title,
  isOpen = false,
  handleClose = () => {},
  handleProceed = () => {},
  children,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const firstRender = useRef(true)

  useEffect(() => {
    const dialog = dialogRef.current

    if (firstRender.current) {
      firstRender.current = false
    } else {
      if (isOpen) {
        dialog?.showModal()
      } else {
        dialog?.close()
      }
    }
    return () => {
      dialog?.close()
    }
  }, [isOpen])

  useEffect(() => {
    const dialog = dialogRef.current
    const handleCancel = (event: Event) => {
      event.preventDefault()
      handleClose()
    }
    dialog?.addEventListener('cancel', handleCancel)
    return () => {
      dialog?.removeEventListener('cancel', handleCancel)
    }
  }, [handleClose])

  const proceedAndClose = () => {
    handleProceed()
    handleClose()
  }

  const handleClick = (event: MouseEvent) =>
    dialogRef.current &&
    !isClickInside(event, dialogRef.current) &&
    handleClose()

  return (
    <dialog ref={dialogRef} onCancel={handleClose} onClick={handleClick}>
      <StyledDialogContent>
        <DialogHeader>
          {title && <h1>{title}</h1>}
          <StyledCloseButton onClick={handleClose}>
            <Icon name='close' />
          </StyledCloseButton>
        </DialogHeader>

        {children}

        <DialogFooter>
          <OutlineButton onClick={handleClose}>close</OutlineButton>
          <StyledButton onClick={proceedAndClose}>okay</StyledButton>
        </DialogFooter>
      </StyledDialogContent>
    </dialog>
  )
}
