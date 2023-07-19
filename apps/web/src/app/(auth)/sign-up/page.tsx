'use client'

import { FillButton, Icon, Input } from '@diaryco/design-system'
import { yupResolver } from '@hookform/resolvers/yup'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { object } from 'yup'

import {
  emailSchema,
  passwordSchema,
  usernameSchema,
} from '~/utils/form-validations'

import AuthForm from '../_components/auth-form'
import { APP_ROUTES, CALENDAR_ROUTES } from '~/@types'

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

export default function SignUpPage() {
  const supabase = createClientComponentClient()

  const formSchema = object({
    ...emailSchema,
    ...usernameSchema,
    ...passwordSchema,
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(formSchema),
  })

  const onSubmit = async ({ email, password }: { email: string, password: string }) => {
    try {
      await supabase.auth.signUp({
        email,
        password,
      })

      redirect(APP_ROUTES.CALENDAR)
    } catch (error) {
      console.error(error)
    }
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

        <Fieldset>
          <Input
            {...register('username')}
            label='username'
            name='username'
            placeholder='username'
            error={errors?.username?.message}
            prefixIcon='at'
          />
        </Fieldset>

        <Fieldset>
          <Input
            {...register('password')}
            label='password'
            name='password'
            type='password'
            placeholder='••••••••••••'
            error={errors?.password?.message}
          />
        </Fieldset>

        <ErrorMessage aria-live='polite'>
          <span>{/* <ErrorIcon name='error' /> {errors?.global} */}</span>
        </ErrorMessage>

        <StyledButton type='submit'>sign up</StyledButton>
      </AuthFormWrapper>
    </AuthForm>
  )
}
