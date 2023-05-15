import { useState } from 'react'
import { Outlet, useNavigate } from '@remix-run/react'

import { Dialog } from '@bash/design-system'

import LandingPage from './_index'

export default function Auth() {
  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()

  const handleClose = () => {
    setIsOpen(false)
    navigate('/')
  }

  return (
    <>
      <LandingPage />
      <Dialog isOpen={isOpen} handleClose={handleClose}>
        <Outlet />
      </Dialog>
    </>
  )
}

