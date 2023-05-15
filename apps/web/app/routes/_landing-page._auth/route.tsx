import { useState } from 'react'
import { Outlet, useNavigate } from '@remix-run/react'

import { Dialog } from '@bash/design-system'

export default () => {
  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()

  const handleClose = () => {
    setIsOpen(false)
    navigate('/')
  }

  return (
    <Dialog isOpen={isOpen} handleClose={handleClose}>
      <Outlet />
    </Dialog>
  )
}

