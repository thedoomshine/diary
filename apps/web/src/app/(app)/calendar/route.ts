import { redirect } from 'next/navigation'
import { APP_ROUTES, CALENDAR_ROUTES } from '~/@types'

export async function GET(
  _: Request,
  { view }: { view: string },
) {
  if (!view || !(view in CALENDAR_ROUTES)) {
    return redirect(`${APP_ROUTES.CALENDAR}/${CALENDAR_ROUTES.MONTH}`)
  }
}
