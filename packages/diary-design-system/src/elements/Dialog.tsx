import { useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import styled from 'styled-components'

import { IconButton } from '~/elements'
import { grainyGradientBackground } from '~/utils'

const StyledDialogContent = styled.div`
  ${({ theme }) =>
    grainyGradientBackground({
      background: theme.color.charcoal,
      color1: theme.color.charcoal,
    })}

  overflow: visible;
  display: grid;
  grid-template-rows: repeat(3, min-content);
  gap: 0.5rem;

  padding: 0.5rem;

  color: ${({ theme }) => theme.color.white};

  border: 0;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadow.normal};

  ${({ theme }) => theme.animation.scaleUp};

  &[open] {
    ${({ theme }) => theme.animation.scaleUp};

    &::backdrop {
      ${({ theme }) => theme.animation.fadeIn};
    }
  }
`

const DialogHeader = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`

// const DialogFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
// `

const StyledCloseButton = styled(IconButton)`
  grid-column: 2;
`

// const StyledButton = styled(Button)`
//   color: ${({ theme }) => theme.color.black};
//   background-color: ${({ theme }) => theme.color.yellow};
// `

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
    <dialog
      ref={dialogRef}
      onCancel={handleClose}
      onClick={handleClick}
    >
      <StyledDialogContent>
        <DialogHeader>
          {title && <h1>{title}</h1>}
          <StyledCloseButton onClick={handleClose} icon='close' />
        </DialogHeader>

        {children}

        {/* <DialogFooter>
          <OutlineButton onClick={handleClose}>close</OutlineButton>
          <StyledButton onClick={proceedAndClose}>okay</StyledButton>
        </DialogFooter> */}
      </StyledDialogContent>
    </dialog>
  )
}
