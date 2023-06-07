import type { ActionFunction } from '@vercel/remix'
import { json } from '@vercel/remix'
import { redirect } from '@vercel/remix'
import { createServerClient } from '~/services/db.server'
import { ROUTES } from './types'

export const action: ActionFunction = async ({ request }) => {
  const response = new Response()
  const db = createServerClient({ request, response })

  const {
    data: { session },
  } = await db.auth.getSession()

  if (!session) {
    return redirect(ROUTES.SIGN_IN, { headers: response.headers })
  } else {
    return json({
      headers: response.headers,
    })
  }
}
