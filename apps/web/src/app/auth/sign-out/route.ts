import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

import { ALL_ROUTES } from '~/@types'

export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    await supabase.auth.signOut()
  }

  return NextResponse.redirect(new URL(ALL_ROUTES.SIGN_IN), {
    status: 302,
  })
}
