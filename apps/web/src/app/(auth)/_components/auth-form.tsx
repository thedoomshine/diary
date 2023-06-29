'use client'

import { token } from '@diaryco/style-engine/tokens'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const diaryTheme = {
  default: {
    colors: {
      brand: token('colors.black'),
      brandAccent: token('colors.yellow'),
      brandButtonText: token('colors.white'),
    },
    fonts: {
      bodyFontFamily: token('fonts.sans'),
      buttonFontFamily: token('fonts.sans'),
      inputFontFamily: token('fonts.sans'),
      labelFontFamily: token('fonts.sans'),
    },
    radii: {
      borderRadiusButton: token('radii.md'),
      buttonBorderRadius: token('radii.md'),
      inputBorderRadius: token('radii.md'),
    },
  },
}

type ViewType =
  | 'sign_in'
  | 'sign_up'
  | 'forgotten_password'
  | 'magic_link'
  | 'update_password'

export default function AuthForm({ view }: { view: ViewType }) {
  const supabase = createClientComponentClient()

  return (
    <Auth
      supabaseClient={supabase}
      view={view}
      appearance={{ theme: ThemeSupa, variables: diaryTheme }}
      showLinks={true}
      providers={['discord', 'google']}
      redirectTo='http://localhost:3000/auth/callback'
    />
  )
}
