import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { type NextRequest, NextResponse } from 'next/server'

import { ALL_ROUTES, LOGGED_OUT_ROUTES } from './@types/routes'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient(
    { req, res }
  )

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const user = session?.user

  if (user && LOGGED_OUT_ROUTES.has(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(ALL_ROUTES.CALENDAR, req.url))
  }

  if (!user && !LOGGED_OUT_ROUTES.has(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(ALL_ROUTES.SIGN_IN, req.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)',],
}
