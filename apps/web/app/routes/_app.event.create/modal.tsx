import { CreateEventForm } from './form'

import { Dialog } from '@diaryco/design-system'

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
