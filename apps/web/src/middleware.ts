import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { type NextRequest, NextResponse } from 'next/server'

import { ROUTES } from './app/@types/routes'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient(
    { req, res }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user && req.nextUrl.pathname === ROUTES.SIGN_IN) {
    return NextResponse.redirect(new URL(ROUTES.CALENDAR, req.url))
  }

  if (!user && req.nextUrl.pathname !== ROUTES.SIGN_IN) {
    return NextResponse.redirect(new URL(ROUTES.SIGN_IN, req.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)',],
}
