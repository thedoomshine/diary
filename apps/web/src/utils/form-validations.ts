/* eslint-disable no-empty-character-class */
import { string } from 'yup'

const PASSWORD_MAX_LENGTH = 128
const PASSWORD_MIN_LENGTH = 8

const USERNAME_MAX_LENGTH = 16
const USERNAME_MIN_LENGTH = 3

const EMAIL_REGEX_PATTERN =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[!@#$%^&*/\\])(?=.*[a-z])(?=.*[A-Z]).*$/

const PHONE_NUMBER_PATTERN =
  /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

const USERNAME_PATTERN = /^\p{L}*$/u

export const ERROR_MESSAGES = {
  email: {
    required: 'please enter a valid email address',
    pattern: 'please enter a valid email address',
  },
  phone: {
    required: 'please enter a valid phone number',
    pattern: 'please enter a valid phone number',
  },
  password: {
    maxLength: `password must be less than ${PASSWORD_MAX_LENGTH} characters long`,
    minLength: `password must be at least ${PASSWORD_MIN_LENGTH} characters long`,
    required: 'please enter a password',
    pattern: 'password must contain 1 special character and 1 capital letter',
  },
  username: {
    required: 'please enter a username',
    maxLength: `username must be less than ${USERNAME_MAX_LENGTH} characters long`,
    minLength: `username must be at least ${USERNAME_MIN_LENGTH} characters long`,
    pattern: 'username must not contain spaces or special characters',
    unique: 'username is already taken',
  },
} as const

export const emailSchema = {
  email: string()
    .email()
    .matches(EMAIL_REGEX_PATTERN, ERROR_MESSAGES.email.pattern)
    .required(ERROR_MESSAGES.email.required),
} as const

export const usernameSchema = {
  username: string()
    .min(USERNAME_MIN_LENGTH, ERROR_MESSAGES.username.minLength)
    .max(USERNAME_MAX_LENGTH, ERROR_MESSAGES.username.maxLength)
    .matches(USERNAME_PATTERN, ERROR_MESSAGES.username.pattern)
    .required(ERROR_MESSAGES.username.required),
} as const

export const passwordSchema = {
  password: string()
    .min(PASSWORD_MIN_LENGTH, ERROR_MESSAGES.password.minLength)
    .max(PASSWORD_MAX_LENGTH, ERROR_MESSAGES.password.maxLength)
    .matches(PASSWORD_PATTERN, ERROR_MESSAGES.password.pattern)
    .required(ERROR_MESSAGES.password.required),
} as const

export const phoneSchema = {
  phone: string()
    .matches(PHONE_NUMBER_PATTERN, ERROR_MESSAGES.phone.pattern)
    .required(ERROR_MESSAGES.phone.required),
} as const
