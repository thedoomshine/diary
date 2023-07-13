import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

import { APP_ROUTES } from '~/@types'

export async function GET(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies })
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL(APP_ROUTES.CALENDAR, req.url))
}
