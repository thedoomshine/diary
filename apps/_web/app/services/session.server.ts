import { createCookieSessionStorage } from '@vercel/remix'

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'sb',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [process.env.COOKIE_SECRET],
    secure: process.env.NODE_ENV === 'production',
  },
})

export const { getSession, commitSession, destroySession } = sessionStorage

export type User = {
  name: string
  token: string
}
