import type { Preview } from '@storybook/react'

import '../src/index.css'

export const parameters = {
  options: {
    brandTitle: 'diary design system.',
    brandUrl: '',
  },
}

const preview: Preview = {
  parameters,
}

export default preview
