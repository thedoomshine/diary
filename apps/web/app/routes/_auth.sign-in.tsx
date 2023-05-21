import { json, redirect } from '@remix-run/node'
import type { ActionFunction } from '@remix-run/node'
import { Form, useActionData, useNavigation } from '@remix-run/react'

import styled from 'styled-components'
import { FillButton } from '@bash/design-system'

import { createServerClient } from '~/services/db.server'
import { ROUTES } from './_auth/@types/index'

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

const Label = styled.label`
  font-size: 1rem;
`

const Input = styled.input`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: 0.25rem;
  line-height: 1;
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

export default function SignIn() {
  const formData = useActionData<typeof action>()
  const navigation = useNavigation()

  const isSubmitting = navigation.state === 'submitting'

  return (
    <StyledForm method='post'>
      <Fieldset disabled={isSubmitting}>
        <Label htmlFor='email'>email address</Label>
        <Input
          type='text'
          id='email'
          name='email'
          defaultValue={formData?.values?.email}
          aria-invalid={Boolean(formData?.errors?.email)}
        />
      </Fieldset>

      <Fieldset disabled={isSubmitting}>
        <Label htmlFor='password'>password</Label>
        <Input
          type='password'
          id='password'
          name='password'
          defaultValue={formData?.values?.password}
          aria-invalid={Boolean(formData?.errors?.password)}
        />
      </Fieldset>

      <StyledButton disabled={isSubmitting} type='submit'>
        sign in
      </StyledButton>
    </StyledForm>
  )
}
