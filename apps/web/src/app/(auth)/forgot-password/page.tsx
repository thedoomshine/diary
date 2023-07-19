'use client'

import {
  FillButton,
  Icon,
  Input,
} from '@diaryco/design-system'
import { yupResolver } from '@hookform/resolvers/yup'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { object } from 'yup'

import { emailSchema } from '~/utils/form-validations'

import AuthForm from '../_components/auth-form'

const AuthFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
`

const StyledButton = styled(FillButton)`
  width: 100%;
  margin: auto;
  padding: ${({ theme }) => theme.spacing[8]} 1rem;
`

const ErrorMessage = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: flex-start;

  min-height: 0;
  margin-top: 0.5em;
  margin-left: 0.5em;

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.red};
`

const ErrorIcon = styled(Icon)`
  height: 1.25em;
  margin-right: 0.5em;
  font-size: inherit;
`

export default function SignInPage() {
  const formSchema = object({
    ...emailSchema,
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(formSchema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <AuthForm>
      <AuthFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Fieldset>
          <Input
            {...register('email')}
            label='email address'
            name='email'
            type='email'
            placeholder='hello@getdiary.co'
            error={errors?.email?.message}
          />
        </Fieldset>

        <ErrorMessage aria-live='polite'>
          <span>{/* <ErrorIcon name='error' /> {errors?.global} */}</span>
        </ErrorMessage>

        <StyledButton type='submit'>send password reset</StyledButton>
      </AuthFormWrapper>
    </AuthForm>
  )
}
