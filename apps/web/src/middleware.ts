import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { type NextRequest, NextResponse } from 'next/server'

import { ROUTES, AUTH_ROUTES } from './@types/routes'

const authRoutes = new Set(Object.values(AUTH_ROUTES) as string[])

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient(
    { req, res }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user && authRoutes.has(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(ROUTES.CALENDAR, req.url))
  }

  if (!user && !authRoutes.has(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(ROUTES.SIGN_IN, req.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)',],
}
