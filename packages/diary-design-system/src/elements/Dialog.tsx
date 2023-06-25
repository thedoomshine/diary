import { useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'

import { IconButton } from './Button'
// import { grainyGradientBackground } from '~/utils/grainy-gradient'

import { css, cx } from '~/style-engine/css'

const dialogContentStyles = css({
  display: 'grid',
  gridTemplateRows: 'repeat(3, min-content)',
  gap: '0.5rem',
  padding: '0.5rem',
  color: 'white',
  border: '0',
  borderRadius: '0.5rem',
  boxShadow: 'normal',
  '&[open]': {
    animation: 'scaleUp',

    '&::backdrop': {
      animation: 'fadeIn'
    }
  }
})

const dialogHeaderStyles = css({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& > h1': {
    fontSize: 'md',
  },
})

// const dialogFooterStyles = css({
//   display: 'flex',
//   justifyContent: 'space-between',
// })

const dialogCloseButtonStyles = css({
  gridColumn: 2,
})

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
      <div className={dialogContentStyles}>
        <div className={dialogHeaderStyles}>
          {title && <h1>{title}</h1>}
          <IconButton className={dialogCloseButtonStyles} onClick={handleClose} icon='close' />
        </div>

        {children}

        {/* <div className={dialogFooterStyles}>
          <OutlineButton onClick={handleClose}>close</OutlineButton>
          <FillButton onClick={proceedAndClose}>okay</FillButton>
        </div> */}
      </div>
    </dialog>
  )
}
