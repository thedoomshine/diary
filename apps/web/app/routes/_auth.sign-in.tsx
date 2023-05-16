
import { useState } from 'react'
import { redirect } from '@remix-run/node'
import { Form } from '@remix-run/react'

import { useSignIn } from '@clerk/remix'

import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import styled from 'styled-components'
import { Button } from '@bash/design-system'

import type { APIResponseError } from './_auth/utils/errors';
import { parseError } from './_auth/utils/errors'
import { Validations } from './_auth/utils/formValidations'

const StyledForm = styled(Form)`
  background-color: ${({theme}) => theme.color.grey};
  color: ${({theme}) => theme.color.white};
  border: solid 0.0125rem currentColor;
  border-radius: 0.5rem;
  box-shadow: 0 .25rem .5rem 0 rgba(0,0,0,0.5);
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
  background-color: ${({theme}) => theme.color.black};
  color: ${({theme}) => theme.color.white};
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: solid 0.0125rem currentColor;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: ${({theme}) => theme.fontSize['1']};
  margin-top: 0.25rem;
  line-height: 1;
`

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.purple};
  width: 100%;
`

export default function SignIn() {
  const { isLoaded, setActive, signIn } = useSignIn()
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{ email: string, password: string }>()

  const onSubmit: SubmitHandler<{ email: string, password: string }> = async ({
    email,
    password,
  }) => {
    console.log(email, password, isLoaded)
    if (!isLoaded) return null
    try {
      setHasSubmitted(true)
      await signIn.create({
        identifier: email,
        password,
      }).then(response => {
        if (response?.status === 'complete') {
          setActive({ session: response?.createdSessionId })
          redirect('/dashboard', 302)
        }
      })
    } catch (err) {
      setError('password', {
        type: 'manual',
        message: parseError(err as APIResponseError),
      })
    } finally {
      setHasSubmitted(false)
    }
  }

  return (
    <StyledForm method="post" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset>
        <Label htmlFor='email'>email address</Label>
        <Input
          type='text'
          id='email'
          {...register('email', Validations.emailAddress)}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email?.message}
      </Fieldset>

      <Fieldset>
        <Label htmlFor='password'>password</Label>
        <Input
          type='password'
          id='password'
          {...register('password', Validations.password)}
          aria-invalid={Boolean(errors.password)}
        />
        {errors.password?.message}
      </Fieldset>

      <StyledButton disabled={hasSubmitted} type='submit'>sign in</StyledButton>
    </StyledForm>
  )
}
