import type { MouseEvent } from 'react'
import { useEffect, useRef } from 'react'
import { IconButton } from './Button'
// import { grainyGradientBackground } from '~/utils/grainy-gradient'
import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from '~/foundation/theme.css'

const dialogContentStyles = style({
  display: 'grid',
  gridTemplateRows: 'repeat(3, min-content)',
  gap: '0.5rem',
  padding: '0.5rem',
  color: themeVars.color.white,
  border: '0',
  borderRadius: themeVars.radii.md,
  boxShadow: themeVars.shadow.normal,
  animationDuration: themeVars.duration[500],
  animationTimingFunction: themeVars.easing.easeOutQuart,
  animationName: themeVars.animation.scaleUp,
})

const dialogHeaderStyles = style({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'space-between',
})

globalStyle(`${dialogContentStyles} > h1`, {
  fontSize: themeVars.fontSize.md,
})

// const dialogFooterStyles = style({
//   display: 'flex',
//   justifyContent: 'space-between',
// })

const dialogCloseButtonStyles = style({
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
