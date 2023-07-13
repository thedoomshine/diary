'use client'

import { Dialog } from '@diaryco/design-system'

import { CreateEventForm } from '../../_components/create-event-form'

export const NewEventModal = ({ isOpen = false }) => {
  const handleProceed = () => {}

  const handleClose = () => {}

  return (
    <Dialog
      isOpen={isOpen}
      handleClose={handleClose}
      handleProceed={handleProceed}
      title='add new event'
    >
      <CreateEventForm />
    </Dialog>
  )
}
