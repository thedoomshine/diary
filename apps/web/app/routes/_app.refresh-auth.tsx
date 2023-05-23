import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { createServerClient } from '~/services/db.server'
import { ROUTES } from './_auth/@types'

export const action: ActionFunction = async ({ request }) => {
  const response = new Response()
  const db = createServerClient({ request, response })

  const {
    data: { session },
  } = await db.auth.getSession()

  if (session) {
    return redirect(ROUTES.DASHBOARD, {
      headers: response.headers,
    })
  } else {
    return redirect(ROUTES.SIGN_IN, { headers: response.headers })
  }
}
