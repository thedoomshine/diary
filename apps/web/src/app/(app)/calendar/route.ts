import { redirect } from 'next/navigation'
import { CALENDAR_ROUTES } from '~/@types'

export async function GET(
  _: Request,
  { view }: { view: string },
) {
  if (!(view in CALENDAR_ROUTES)) {
    return redirect(CALENDAR_ROUTES.MONTH)
  }
}
