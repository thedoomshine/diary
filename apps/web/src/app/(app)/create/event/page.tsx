'use client'

import styled from 'styled-components'

import { CreateEventForm } from '../../@modal/(.)create/event/_components/create-event-form'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
`

export default function CreateEventPage() {
  return (
    <StyledPage>
      <CreateEventForm />
    </StyledPage>
  )
}
