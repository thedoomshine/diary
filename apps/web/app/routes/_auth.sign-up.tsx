import { Form, useActionData, useNavigation } from '@remix-run/react'

import styled from 'styled-components'
import { FillButton, Input } from '@bash/design-system'
import type { ActionFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { ROUTES } from './_auth/@types'
import { createServerClient } from '~/services'

const StyledForm = styled(Form)`
  background-color: ${({ theme }) => theme.color.charcoal};
  color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin-top: 1rem;
  width: 100%;
`

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 20;
  margin-bottom: 1rem;
`

const StyledButton = styled(FillButton)`
  width: 100%;
`

export const action: ActionFunction = async ({ request }) => {
  const response = new Response()
  const db = createServerClient({ request, response })

  const form = await request.formData()
  const email = form.get('email') || ''
  const password = form.get('password') || ''

  const {
    data: { user, session },
    error,
  } = await db.auth.signInWithPassword({ email, password })

  if (user) {
    redirect(ROUTES.DASHBOARD)
  }

  if (error) {
    return error
  }

  return json(
    { session },
    {
      headers: response.headers,
    }
  )
}

export default function SignUp() {
  const formData = useActionData<typeof action>()
  const navigation = useNavigation()

  const isSubmitting = navigation.state === 'submitting'

  return (
    <StyledForm>
      <Fieldset>
        <Input
          label='email address'
          name='email'
          type='email'
          defaultValue={formData?.values?.email}
          error={formData?.errors?.email}
        />
      </Fieldset>

      <Fieldset>
        <Input
          label='password'
          name='password'
          type='password'
          defaultValue={formData?.values?.password}
          error={formData?.errors?.password}
        />
      </Fieldset>

      <Fieldset>
        <Input
          label='password'
          name='confirm-password'
          type='password'
          defaultValue={formData?.values?.confirmPassword}
          error={formData?.errors?.confirmPassword}
        />
      </Fieldset>

      <StyledButton disabled={isSubmitting} type='submit'>
        create account
      </StyledButton>
    </StyledForm>
  )
}
