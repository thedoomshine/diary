
import { redirect } from '@remix-run/node'
import type { ActionArgs, LoaderFunction } from '@remix-run/node'
import { Form, useActionData, useNavigation } from '@remix-run/react'

import styled from 'styled-components'
import { Button } from '@bash/design-system'

import type { APIResponseError } from './_auth/utils/errors'
import { parseError } from './_auth/utils/errors'
import { Validations } from './_auth/utils/formValidations'
import { ROUTES } from './@types/index'

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

export const action = () => {

}

export default function SignIn() {
  const formData = useActionData<typeof action>()
  const navigation = useNavigation()

  const isSubmitting = navigation.state === 'submitting'


  return (
    <StyledForm method="post">
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

        <StyledButton disabled={isSubmitting} type='submit'>sign in</StyledButton>
    </StyledForm>
  )
}
