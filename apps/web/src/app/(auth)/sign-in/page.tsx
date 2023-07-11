'use client'

import { FillButton, Icon, Input } from '@diaryco/design-system'
import { yupResolver } from '@hookform/resolvers/yup'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { object } from 'yup'

import { AUTH_ROUTES, ValueOf } from '~/@types'
import { emailSchema, passwordSchema } from '~/utils/form-validations'

import AuthForm from '../_components/auth-form'

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

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
  margin: auto;
  padding: ${({ theme }) => theme.spacing[8]} 1rem;
  width: 100%;
`

const ErrorMessage = styled.div`
  display: flex;
  align-items: flex-start;

  min-height: 0;
  margin-top: 0.5em;
  margin-left: 0.5em;
  gap: 0.5em;

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.red};
`

const ErrorIcon = styled(Icon)`
  height: 1.25em;
  margin-right: 0.5em;
  font-size: inherit;
`

const StyledForgotPasswordLink = styled(StyledLink)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.silver};
`

const ForgotPasswordLink = () => (
  <StyledForgotPasswordLink href={AUTH_ROUTES.FORGOT_PASSWORD}>
    forgot your password?
  </StyledForgotPasswordLink>
)

const VIEW_TYPE = {
  SIGN_IN: 'sign_in',
  SIGN_UP: 'sign_up',
  FORGOT: 'forgotten_password',
  MAGIC_LINK: 'magic_link',
  UPDATE_PASSWORD: 'update_password',
} as const

type ViewType = ValueOf<typeof VIEW_TYPE>

export default function SignInPage() {
  const formSchema = object({
    ...emailSchema,
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

        <Fieldset>
          <Input
            {...register('password')}
            label='password'
            name='password'
            type='password'
            placeholder='••••••••••••'
            error={errors?.password?.message}
            ForgotPasswordLink={<ForgotPasswordLink />}
          />
        </Fieldset>

        <ErrorMessage aria-live='polite'>
          <span>{/* <ErrorIcon name='error' /> {errors?.global} */}</span>
        </ErrorMessage>

        <StyledButton type='submit'>sign in</StyledButton>
      </AuthFormWrapper>
    </AuthForm>
  )
}
