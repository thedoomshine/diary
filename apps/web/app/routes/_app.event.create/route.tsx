import { json } from '@remix-run/node'
import type { ActionFunction } from '@remix-run/node'
import { createServerClient } from '~/services'

export const action: ActionFunction = async ({ request }) => {
  const response = new Response()
  const db = createServerClient({ request, response })

  const formData = Object.fromEntries(await request.formData())

  const { data, error } = await db.from('events').insert({}).select()

  const formErrors = {}

  if (error) {
    return json(
      {
        errors: { ...formErrors, global: error.message },
        values: { ...formData },
      },
      {
        headers: response.headers,
      }
    )
  }

  return json({
    headers: response.headers,
  })
}